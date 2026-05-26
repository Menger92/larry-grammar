import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const sourceFiles = [
  ["overview", "grammar-overview.md", "语法体系总览", "源文件：source/grammar-overview.md"],
  ["preposition", "preposition.md", "介词与介词短语", "源文件：source/preposition.md"],
  ["simple", "simple-sentence.md", "简单句", "源文件：source/simple-sentence.md"],
  ["clause-overview", "clause-overview.md", "从句总览", "源文件：source/clause-overview.md"],
  ["noun-clause", "noun-clause.md", "名词性从句", "源文件：source/noun-clause.md"],
  ["adjective-clause", "adjective-clause.md", "形容词性从句", "源文件：source/adjective-clause.md"],
  ["adverbial-clause", "adverbial-clause.md", "副词性从句", "源文件：source/adverbial-clause.md"],
  ["clause-confusions", "clause-confusions.md", "从句易混对比", "源文件：source/clause-confusions.md"],
  ["nonfinite", "nonfinite.md", "非谓语", "源文件：source/nonfinite.md"],
  ["tense", "tense.md", "时态", "源文件：source/tense.md"],
  ["subjunctive", "subjunctive.md", "虚拟语气", "源文件：source/subjunctive.md"],
  ["morphology", "morphology.md", "词法解析", "源文件：source/morphology.md"]
];

const sourceDir = path.join(root, "source");
const outputPath = globalThis.LARRY_WEB_SECTIONS_OUTPUT_PATH || path.join(root, "web", "generated-sections.js");

const inlineClassMap = [
  ["noun", ["名词性成分", "名词性从句", "名词短语", "名词性", "主语", "宾语", "表语", "同位语"]],
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

function readSection([id, filename, fallbackTitle, meta]) {
  const markdown = fs.readFileSync(path.join(sourceDir, filename), "utf8");
  const title = /^#\s+(.+)$/m.exec(markdown)?.[1]?.trim() || fallbackTitle;
  return {
    id,
    title,
    meta,
    html: markdownToHtml(markdown)
  };
}

const sections = sourceFiles.map(readSection);

sections.push({
  id: "source-index",
  title: "源文件索引",
  meta: "HTML 当前由 source/*.md 生成；更新 Markdown 后运行 scripts/build_web_sections.mjs 重新生成。",
  html: `
    <div class="review-card">
      <strong>维护原则</strong>
      <p>Markdown 是知识源文件，HTML 是查询页。后续新增内容先放入对应 <code>source/*.md</code>，再生成网页。</p>
    </div>
    <h4 class="table-title">当前同步到 HTML 的源文件</h4>
    <table>
      <thead><tr><th>章节</th><th>源文件</th></tr></thead>
      <tbody>
        ${sourceFiles.map(([id, filename, title]) => `<tr><td>${escapeHtml(title)}</td><td><code>source/${escapeHtml(filename)}</code></td></tr>`).join("")}
      </tbody>
    </table>
  `
});

const banner = `// Generated by scripts/build_web_sections.mjs. Do not edit by hand.\n`;
fs.writeFileSync(outputPath, `${banner}window.generatedSections = ${JSON.stringify(sections, null, 2)};\n`, "utf8");
console.log(`Generated ${sections.length} sections -> ${outputPath}`);
