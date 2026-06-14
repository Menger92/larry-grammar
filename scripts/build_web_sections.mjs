import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const sourceFiles = [
  ["overview", "grammar-overview.md", "语法体系总览", "源文件：source/grammar-overview.md"],
  ["modification-relations", "modification-relations.md", "词性之间的修饰关系", "对应视频：V02｜BV1PG411R75a"],
  ["simple", "simple-sentence.md", "简单句", "源文件：source/simple-sentence.md"],
  ["clause-overview", "clause-overview.md", "从句总览", "源文件：source/clause-overview.md"],
  ["noun-clause", "noun-clause.md", "名词性从句", "源文件：source/noun-clause.md"],
  ["adjective-clause", "adjective-clause.md", "形容词性从句", "源文件：source/adjective-clause.md"],
  ["adverbial-clause", "adverbial-clause.md", "副词性从句", "源文件：source/adverbial-clause.md"],
  ["nonfinite", "nonfinite.md", "非谓语", "源文件：source/nonfinite.md"],
  ["preposition", "preposition.md", "介词与介词短语", "源文件：source/preposition.md"],
  ["tense", "tense.md", "时态", "源文件：source/tense.md"],
  ["subjunctive", "subjunctive.md", "虚拟语气", "源文件：source/subjunctive.md"],
  ["morphology", "morphology.md", "词法解析", "源文件：source/morphology.md"],
  ["clause-confusions", "clause-confusions.md", "从句易混对比", "源文件：source/clause-confusions.md"]
];

const sourceDir = path.join(root, "source");
const outputPath = globalThis.LARRY_WEB_SECTIONS_OUTPUT_PATH || path.join(root, "web", "generated-sections.js");
const sourceNotes = [];

const inlineClassMap = [
  ["noun", ["名词性成分", "名词性从句", "名词短语", "名词性", "名词", "主语", "宾语", "表语", "同位语"]],
  ["adj", ["形容词性成分", "形容词性从句", "形容词性", "形容词", "定语", "限定词", "冠词", "定指", "不定指"]],
  ["adv", ["副词性成分", "副词性从句", "副词性", "副词", "状语", "时间状语", "地点状语", "原因状语", "条件状语", "让步状语", "目的状语", "结果状语", "方式状语"]],
  ["nonfinite", ["非谓语", "不定式", "动名词", "分词", "to do", "doing", "done", "V-ing"]]
];

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[char]);
}

function replaceOutsideTags(html, replacer) {
  return html.split(/(<[^>]+>)/g).map(part => part.startsWith("<") ? part : replacer(part)).join("");
}

function colorize(html) {
  const sorted = inlineClassMap.flatMap(([className, terms]) => (
    terms.map(term => ({ className, term }))
  )).sort((a, b) => b.term.length - a.term.length);
  const termClass = new Map(sorted.map(item => [item.term, item.className]));
  const pattern = new RegExp(sorted.map(({ term }) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), "g");

  return replaceOutsideTags(html, text => {
    return text.replace(pattern, match => `<span class="${termClass.get(match)}">${match}</span>`);
  });
}

function inline(text) {
  const codeParts = [];
  const brParts = [];
  let working = text
    .replace(/<br\s*\/?>/gi, match => {
      const token = `@@BR_${brParts.length}@@`;
      brParts.push(match);
      return token;
    })
    .replace(/`([^`]+)`/g, (_, code) => {
      const token = `@@CODE_${codeParts.length}@@`;
      codeParts.push(`<code>${escapeHtml(code)}</code>`);
      return token;
    });

  working = escapeHtml(working)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => `<a href="${escapeHtml(href)}">${label}</a>`);

  working = colorize(working);

  codeParts.forEach((code, index) => {
    working = working.replace(`@@CODE_${index}@@`, code);
  });
  brParts.forEach((br, index) => {
    working = working.replace(`@@BR_${index}@@`, "<br>");
  });
  return working;
}

function splitTableRow(line) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(cell => cell.trim());
}

function renderTable(lines, start) {
  const header = splitTableRow(lines[start]);
  let index = start + 2;
  const rows = [];

  while (index < lines.length && /^\s*\|.*\|\s*$/.test(lines[index])) {
    rows.push(splitTableRow(lines[index]));
    index += 1;
  }

  const thead = `<thead><tr>${header.map(cell => `<th>${inline(cell)}</th>`).join("")}</tr></thead>`;
  const tbody = rows.length
    ? `<tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${inline(cell)}</td>`).join("")}</tr>`).join("")}</tbody>`
    : "";
  return { html: `<table>${thead}${tbody}</table>`, next: index };
}

function renderList(lines, start, ordered) {
  const tag = ordered ? "ol" : "ul";
  let index = start;
  const items = [];
  const pattern = ordered ? /^\s*\d+\.\s+/ : /^\s*[-*]\s+/;

  while (index < lines.length && pattern.test(lines[index])) {
    items.push(lines[index].replace(pattern, ""));
    index += 1;
  }

  return {
    html: `<${tag} class="compact-list">${items.map(item => `<li>${inline(item)}</li>`).join("")}</${tag}>`,
    next: index
  };
}

function renderParagraph(lines, start) {
  let index = start;
  const parts = [];

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) break;
    if (/^#{2,6}\s+/.test(line)) break;
    if (/^\s*[-*]\s+/.test(line)) break;
    if (/^\s*\d+\.\s+/.test(line)) break;
    if (/^```/.test(line)) break;
    if (/^<details/.test(line) || /^<\/details>/.test(line) || /^<summary>/.test(line)) break;
    parts.push(line.trim());
    index += 1;
  }

  return { html: `<p>${inline(parts.join(" "))}</p>`, next: index };
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let index = 0;

  if (/^#\s+/.test(lines[0] || "")) {
    index = 1;
  }

  while (index < lines.length) {
    const line = lines[index];
    const trimmed = line.trim();

    if (!trimmed) {
      index += 1;
      continue;
    }

    if (/^```/.test(trimmed)) {
      const language = trimmed.replace(/^```/, "").trim();
      index += 1;
      const code = [];
      while (index < lines.length && !/^```/.test(lines[index].trim())) {
        code.push(lines[index]);
        index += 1;
      }
      index += 1;
      html.push(`<pre><code${language ? ` class="language-${escapeHtml(language)}"` : ""}>${escapeHtml(code.join("\n"))}</code></pre>`);
      continue;
    }

    const heading = /^(#{2,6})\s+(.+)$/.exec(line);
    if (heading) {
      const level = heading[1].length;
      const text = inline(heading[2].trim());
      if (level === 2) {
        html.push(`<h4 class="table-title">${text}</h4>`);
      } else if (level === 3) {
        html.push(`<h5 class="source-subtitle">${text}</h5>`);
      } else {
        html.push(`<h6 class="source-minor-title">${text}</h6>`);
      }
      index += 1;
      continue;
    }

    if (/^<details>/.test(trimmed)) {
      html.push(`<details class="example-toggle">`);
      index += 1;
      continue;
    }

    if (/^<\/details>/.test(trimmed)) {
      html.push(`</details>`);
      index += 1;
      continue;
    }

    const summary = /^<summary>([\s\S]*?)<\/summary>/.exec(trimmed);
    if (summary) {
      html.push(`<summary>${inline(summary[1])}</summary>`);
      index += 1;
      continue;
    }

    if (/^\s*\|.*\|\s*$/.test(line) && index + 1 < lines.length && /^\s*\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?\s*$/.test(lines[index + 1])) {
      const rendered = renderTable(lines, index);
      html.push(rendered.html);
      index = rendered.next;
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const rendered = renderList(lines, index, true);
      html.push(rendered.html);
      index = rendered.next;
      continue;
    }

    if (/^\s*[-*]\s+/.test(line)) {
      const rendered = renderList(lines, index, false);
      html.push(rendered.html);
      index = rendered.next;
      continue;
    }

    const paragraph = renderParagraph(lines, index);
    html.push(paragraph.html);
    index = paragraph.next;
  }

  return html.join("\n");
}

function isProjectNoteText(text) {
  return /对应视频|来源说明|维护规则|维护原则|笔记图片|补充截图|本专题依据|例句规则|资料来源|图片索引|来源视频：|assets\/|source\/|Markdown|HTML|Word|Excel/.test(text);
}

function isProjectNoteParagraph(line) {
  return /^(对应视频|来源说明|维护规则|维护原则|笔记图片|补充截图|本专题依据|例句规则|来源视频：)/.test(line.trim());
}

function isProjectNoteHeading(line) {
  return /^##\s+(资料来源|图片索引)\s*$/.test(line.trim());
}

function extractProjectNotes(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const notes = [];

  if (/^#\s+/.test(lines[0] || "")) {
    const firstH2 = lines.findIndex((line, index) => index > 0 && /^##\s+/.test(line));
    if (firstH2 > 1) {
      const introLines = lines.slice(1, firstH2);
      const intro = introLines.join("\n").trim();
      if (intro && isProjectNoteText(intro)) {
        notes.push(intro);
        lines.splice(1, firstH2 - 1);
      }
    }
  }

  const kept = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (isProjectNoteHeading(line)) {
      const block = [line];
      index += 1;
      while (index < lines.length && !/^##\s+/.test(lines[index])) {
        block.push(lines[index]);
        index += 1;
      }
      notes.push(block.join("\n").trim());
      continue;
    }

    if (isProjectNoteParagraph(line)) {
      const block = [line];
      const collectUntilHeading = /^笔记图片/.test(line.trim());
      index += 1;
      while (
        index < lines.length
        && !/^#{2,6}\s+/.test(lines[index])
        && (collectUntilHeading || lines[index].trim())
      ) {
        block.push(lines[index]);
        index += 1;
      }
      notes.push(block.join("\n").trim());
      continue;
    }

    kept.push(line);
    index += 1;
  }

  return {
    markdown: kept.join("\n"),
    notes: notes.filter(Boolean)
  };
}

function readSection([id, filename, fallbackTitle, meta]) {
  const markdown = fs.readFileSync(path.join(sourceDir, filename), "utf8").replace(/^\uFEFF/, "");
  const title = /^#\s+(.+)$/m.exec(markdown)?.[1]?.trim() || fallbackTitle;
  const extracted = extractProjectNotes(markdown);
  if (extracted.notes.length) {
    sourceNotes.push({ title, filename, notes: extracted.notes });
  }
  return {
    id,
    title,
    meta,
    html: markdownToHtml(extracted.markdown)
  };
}

const sections = sourceFiles.map(readSection);

sections.push({
  id: "source-index",
  title: "项目使用与源文件索引",
  meta: "HTML 当前由 source/*.md 生成；更新 Markdown 后运行 scripts/build_web_sections.mjs 重新生成。",
  html: `
    <h4 class="table-title">项目使用分工</h4>
    <table>
      <thead><tr><th>使用场景</th><th>使用方式</th><th>依据</th></tr></thead>
      <tbody>
        <tr><td>学习语法体系</td><td>阅读前面的 HTML 章节，或直接阅读 <code>source/*.md</code></td><td>Larry 主线</td></tr>
        <tr><td>查理论底座</td><td>阅读 <code>source/grammar-club-crosswalk.md</code> 和 <code>source/terminology-map.md</code></td><td>《文法俱乐部》旁注</td></tr>
        <tr><td>分析经济学人句子</td><td>在 Codex 对话框中贴句子并提问</td><td><code>source/economist-analysis-protocol.md</code></td></tr>
      </tbody>
    </table>
    <p>项目主线保持 Larry 的学习顺序；《文法俱乐部》用于对照、补强和解释术语，不替代 Larry 章节结构。</p>
    <h4 class="table-title">经济学人对话输入格式</h4>
    <p>经济学人实战分析直接在 Codex 对话框完成。最简单的用法是贴一句原文，并说明“按经济学人句子分析协议分析”。</p>
    <pre><code class="language-text">按经济学人句子分析协议分析：

原句：
粘贴经济学人原句</code></pre>
    <p>如果句子较长，或你已经有初步判断，推荐使用下面的完整格式：</p>
    <pre><code class="language-text">按经济学人句子分析协议分析：

原句：

上下文：
上一句：
下一句：

我的初步判断：
我觉得 ... 是状语从句 / 非谓语 / 定语从句，但不确定。

重点：
请重点分析主干、从句、非谓语、补语或其他卡点。</code></pre>
    <p>只卡一个结构时，可以直接问具体判断点：</p>
    <pre><code class="language-text">这句里的 "having done..." 是非谓语状语还是定语？
请按项目体系判断，并说明判断依据。</code></pre>
    <table>
      <thead><tr><th>输入方式</th><th>适合场景</th><th>默认输出</th></tr></thead>
      <tbody>
        <tr><td>只贴原句</td><td>普通句子，先建立整体判断</td><td>标准版：主干、功能标记、成分表、易混点、顺译、学习卡片</td></tr>
        <tr><td>原句 + 上下文</td><td>需要判断指代、省略、转折、因果或语气</td><td>标准版或完整版</td></tr>
        <tr><td>原句 + 自己的判断</td><td>想训练独立判断能力</td><td>先校正你的判断，再给依据和反例</td></tr>
        <tr><td>只问一个片段</td><td>卡在某个从句、非谓语、补语或介词短语</td><td>快速版：结论、依据、易混点</td></tr>
      </tbody>
    </table>
    <h4 class="table-title">显示层与源文件分工</h4>
    <table>
      <thead><tr><th>层级</th><th>作用</th><th>维护方式</th></tr></thead>
      <tbody>
        <tr><td>Markdown</td><td>知识源文件</td><td>后续新增知识点优先写入对应 <code>source/*.md</code>。</td></tr>
        <tr><td>HTML</td><td>学习和查询页</td><td>由脚本生成数据，避免手动改生成文件。</td></tr>
        <tr><td>Word / Excel</td><td>导出版本</td><td>只作为展示或复习材料，不作为知识源。</td></tr>
      </tbody>
    </table>
    <h4 class="table-title">章节来源与维护说明</h4>
    ${sourceNotes.map(({ title, filename, notes }) => `
      <details class="example-toggle">
        <summary>${colorize(escapeHtml(title))}：<code>source/${escapeHtml(filename)}</code></summary>
        ${notes.map(note => markdownToHtml(note)).join("\n")}
      </details>
    `).join("")}
    <h4 class="table-title">当前同步到 HTML 的源文件</h4>
    <table>
      <thead><tr><th>章节</th><th>源文件</th></tr></thead>
      <tbody>
        ${sourceFiles.map(([id, filename, title]) => `<tr><td>${colorize(escapeHtml(title))}</td><td><code>source/${escapeHtml(filename)}</code></td></tr>`).join("")}
      </tbody>
    </table>
  `
});

const banner = `// Generated by scripts/build_web_sections.mjs. Do not edit by hand.\n`;
fs.writeFileSync(outputPath, `${banner}window.generatedSections = ${JSON.stringify(sections, null, 2)};\n`, "utf8");
console.log(`Generated ${sections.length} sections -> ${outputPath}`);
