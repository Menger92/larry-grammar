const sections = [
  {
    id: "overview",
    title: "语法体系总览",
    meta: "先功能，后结构；先主干，后修饰。",
    html: `
      <p><span class="noun">名词性成分</span>当名词用，<span class="adj">形容词性成分</span>修饰名词，<span class="adv">副词性成分</span>修饰动作、状态或整句，<span class="nonfinite">非谓语</span>表示动词降级。</p>
      <h4 class="table-title">语法体系层级表</h4>
      <table>
        <thead><tr><th>层级</th><th>核心问题</th><th>内容</th></tr></thead>
        <tbody>
          <tr><td>词性功能层</td><td>它在句中做什么？</td><td>名词性 / 形容词性 / 副词性</td></tr>
          <tr><td>介词短语层</td><td>介词后面接什么？</td><td>介词 + 名词性成分</td></tr>
          <tr><td>简单句主干层</td><td>谁对谁做了什么？</td><td>主谓宾定状补</td></tr>
          <tr><td>扩展层</td><td>复杂信息如何嵌入？</td><td>从句、非谓语</td></tr>
          <tr><td>表达层</td><td>时间、态度、指称如何表达？</td><td>时态、虚拟语气、冠词</td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: "preposition",
    title: "介词与介词短语",
    meta: "对应视频：BV17u4y1k76A《1.3 介词其实很简单》",
    html: `
      <p>介词通常不能单独完成句子功能，必须带上后面的 <span class="noun">名词性成分</span> 构成介词短语。反过来，如果后面没有名词性成分，这个词可能不是介词用法，而是在作形容词或副词。</p>
      <div class="formula"><span class="neutral">介词</span> + <span class="noun">名词性成分</span> = <span class="adj">介词短语</span> / <span class="adv">介词短语</span></div>
      <h4 class="table-title">介词用法判断表</h4>
      <table>
        <thead><tr><th>判断点</th><th>代表例句</th><th>分析</th></tr></thead>
        <tbody>
          <tr><td>后面有名词性成分</td><td>The puma is <span class="neutral">up</span> <span class="noun">a tree</span>.</td><td>up 后接 <span class="noun">a tree</span>，构成介词短语。</td></tr>
          <tr><td>后面没有名词性成分</td><td>He looked <span class="adv">up</span>.</td><td>up 后面没有名词性成分，此处作 <span class="adv">副词</span>。</td></tr>
          <tr><td>后面没有名词性成分</td><td>Prices are <span class="adj">up</span>.</td><td>up 后面没有名词性成分，此处作 <span class="adj">形容词</span>，表示状态。</td></tr>
          <tr><td>后面有名词性成分</td><td>It depends <span class="neutral">on</span> <span class="noun">what they do</span>.</td><td>on 后接 <span class="noun">what they do</span> 这个名词性从句，构成介词短语。</td></tr>
          <tr><td>后面没有名词性成分</td><td>The car stopped and then drove <span class="adv">on</span>.</td><td>on 后面没有名词性成分，此处作 <span class="adv">副词</span>。</td></tr>
          <tr><td>后面没有名词性成分</td><td>The TV is <span class="adj">on</span>.</td><td>on 后面没有名词性成分，此处作 <span class="adj">形容词</span>，表示开启状态。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">介词后接成分例句表</h4>
      <table>
        <thead><tr><th>后接成分</th><th>代表例句</th><th>分析</th></tr></thead>
        <tbody>
          <tr><td><span class="noun">名词短语</span></td><td>The cat <span class="adj">on the table</span> is named Floppy.</td><td>介词 on 后接 <span class="noun">the table</span>，构成介词短语，整体修饰 cat。</td></tr>
          <tr><td><span class="noun">名词短语</span></td><td>He walked <span class="adv">through the park</span>.</td><td>介词 through 后接 <span class="noun">the park</span>，整体修饰 walked。</td></tr>
          <tr><td><span class="noun">分词短语</span></td><td>She apologized <span class="adv">for <span class="nonfinite">arriving late to the meeting</span></span>.</td><td><span class="nonfinite">arriving late to the meeting</span> 是非谓语形式，整体在 for 后承担名词性宾语功能。</td></tr>
          <tr><td><span class="noun">名词性从句</span></td><td>She's not certain <span class="adv">about <span class="noun">whether she'll go to the party or not</span></span>.</td><td>about 后接 <span class="noun">whether...</span> 名词性从句。</td></tr>
          <tr><td><span class="noun">名词短语</span></td><td>The scientists are studying the effects of climate change <span class="adj">on the ecosystem</span>.</td><td>on 后接 <span class="noun">the ecosystem</span>，介词短语修饰 effects。</td></tr>
          <tr><td><span class="noun">嵌套名词性从句的名词短语</span></td><td>I'm worried <span class="adv">about <span class="noun">the fact that I haven't heard from him in a while</span></span>.</td><td>about 后接 <span class="noun">the fact that...</span>，名词短语内部嵌套名词性从句。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">介词短语句法功能表</h4>
      <table>
        <thead><tr><th>类型</th><th>代表例句</th><th>分析</th></tr></thead>
        <tbody>
          <tr><td>形容词属性</td><td>The <span class="noun">book</span> <span class="adj">on the shelf</span> is great.</td><td><span class="adj">形容词属性的介词短语</span>一般用作后置定语，用来修饰 <span class="noun">名词</span>；本句中 <span class="adj">on the shelf</span> 后置修饰 <span class="noun">book</span>。</td></tr>
          <tr><td>副词属性：修饰动词</td><td>We <span class="neutral">went</span> to a movie <span class="adv">after dinner</span>.</td><td><span class="adv">after dinner</span> 修饰 went，说明动作时间。</td></tr>
          <tr><td>副词属性：修饰形容词</td><td>I am <span class="adj">ready</span> <span class="adv">for dinner</span>.</td><td><span class="adv">for dinner</span> 补足 ready 的对象。</td></tr>
          <tr><td>副词属性：修饰其他副词</td><td>We got there <span class="adv">late</span> <span class="adv">in the evening</span>.</td><td><span class="adv">in the evening</span> 修饰 late，限定时间范围。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">介词形式归纳表</h4>
      <table>
        <thead><tr><th>介词形式</th><th>常见成员</th><th>代表例句</th></tr></thead>
        <tbody>
          <tr><td>简单介词</td><td>as, at, by, during, with</td><td>We talked <span class="adv">during dinner</span>.</td></tr>
          <tr><td>分词介词</td><td>considering, including, given, granted</td><td>Everyone came, <span class="adv">including Tom</span>.</td></tr>
          <tr><td>短语介词</td><td>ahead of, next to, because of, owing to, along with, as well as, in case of, in charge of, in common with, as a result of, in the absence of, to the best of, with an eye to</td><td>The game was canceled <span class="adv">because of the rain</span>.</td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: "simple",
    title: "简单句",
    meta: "对应视频：BV1rF411S7qd；2.1、2.1.1、2.2、2.3",
    html: `
      <p>简单句先看句子成分：主语、谓语、宾语、定语、状语、补语。核心是先找到谓语动词，再看它连接了哪些对象和补充说明。</p>
      <h4 class="table-title">句子成分定义表</h4>
      <table>
        <thead><tr><th>句子成分</th><th>英文</th><th>核心含义</th><th>颜色标注</th></tr></thead>
        <tbody>
          <tr><td><span class="adj">定语</span></td><td>Attributive</td><td>修饰名词性成分的成分。</td><td><span class="adj">黄色：形容词性成分</span></td></tr>
          <tr><td><span class="noun">主语</span></td><td>Subject</td><td>句子的主体话题，或动作的发出者。</td><td><span class="noun">红色：名词性成分</span></td></tr>
          <tr><td><span class="neutral">谓语</span></td><td>Predicate</td><td>谓语即动词，是句子动作或状态的核心。</td><td>谓语是动词核心，不强行套四类成分色。</td></tr>
          <tr><td><span class="noun">宾语</span></td><td>Object</td><td>谓语动词的执行对象。</td><td><span class="noun">红色：名词性成分</span></td></tr>
          <tr><td><span class="adv">状语</span></td><td>Adverbial</td><td>修饰动词、形容词、其他副词的成分。</td><td><span class="adv">绿色：副词性成分</span></td></tr>
          <tr><td><span class="neutral">补语</span></td><td>Complement</td><td>补充说明的额外成分。</td><td>补语内部按实际功能标红、黄、绿或紫。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">补语判断表</h4>
      <table>
        <thead><tr><th>补语类型</th><th>判断方式</th><th>代表例句</th><th>分析</th></tr></thead>
        <tbody>
          <tr><td>宾语补语</td><td>宾语 + 补语可以改写成 [A is B]</td><td>She painted <span class="noun">the room</span> <span class="adj">blue</span>.</td><td><span class="noun">the room</span> 和 <span class="adj">blue</span> 可理解为 [the room was blue]，所以 blue 补充说明 room。</td></tr>
          <tr><td>宾语补语</td><td>宾语 + 补语可以改写成 [A is B]</td><td>We consider <span class="noun">him</span> <span class="noun">a fool</span>.</td><td><span class="noun">him</span> 和 <span class="noun">a fool</span> 可理解为 [he is a fool]，所以 a fool 补充说明 him。</td></tr>
          <tr><td>主语补语</td><td>主语 + 补语构成 [A is B]</td><td><span class="noun">He</span> is <span class="adj">tired</span>.</td><td><span class="adj">tired</span> 补充说明主语 He 的状态。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">简单句基本句型表</h4>
      <table>
        <thead><tr><th>句型</th><th>例句</th><th>分析</th></tr></thead>
        <tbody>
          <tr><td>SV</td><td>The baby cried.</td><td><span class="noun">The baby</span> 是主语，cried 是谓语。</td></tr>
          <tr><td>SVO</td><td>She likes music.</td><td><span class="noun">music</span> 是宾语。</td></tr>
          <tr><td>SVC</td><td><span class="noun">He</span> is <span class="adj">tired</span>.</td><td><span class="adj">tired</span> 补充说明主语状态，属于主语补语。</td></tr>
          <tr><td>SVOO</td><td>She gave me a book.</td><td><span class="noun">me</span> 是间接宾语，<span class="noun">a book</span> 是直接宾语。</td></tr>
          <tr><td>SVOC</td><td>We made <span class="noun">him</span> <span class="noun">captain</span>.</td><td><span class="noun">captain</span> 补充说明 <span class="noun">him</span> 的身份，属于宾语补语。</td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: "clause",
    title: "从句",
    meta: "对应视频：3.1 至 3.7",
    html: `
      <h4 class="table-title">从句类型对照表</h4>
      <table>
        <thead><tr><th>从句类型</th><th>本质</th><th>代表例句</th><th>判断问题</th></tr></thead>
        <tbody>
          <tr><td><span class="noun">名词性从句</span></td><td>整个从句当名词用</td><td>What he said is true.</td><td>是否占主语、宾语、表语、同位语位置？</td></tr>
          <tr><td><span class="adj">定语从句</span></td><td>整个从句修饰名词</td><td>The book that I bought is useful.</td><td>是否跟在名词后说明这个名词？</td></tr>
          <tr><td><span class="adv">状语从句</span></td><td>整个从句修饰动作或主句</td><td>I stayed home because it rained.</td><td>是否说明时间、原因、条件、让步、目的？</td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: "nonfinite",
    title: "非谓语",
    meta: "对应视频：4.1 至 4.4",
    html: `
      <p><span class="nonfinite">非谓语</span>保留动词含义，但不再充当谓语。它常常是从句压缩后的结果。</p>
      <h4 class="table-title">非谓语形式对照表</h4>
      <table>
        <thead><tr><th>形式</th><th>核心含义</th><th>常见功能</th></tr></thead>
        <tbody>
          <tr><td><span class="nonfinite">to do</span></td><td>目的、将来、倾向、具体动作</td><td>可作名词性、形容词性、副词性功能</td></tr>
          <tr><td><span class="nonfinite">doing</span></td><td>动作名词化、主动、进行</td><td>动名词或现在分词</td></tr>
          <tr><td><span class="nonfinite">done</span></td><td>被动、完成</td><td>过去分词</td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: "full-summary",
    title: "完整讲义索引",
    meta: "源文件：source/full-summary.md",
    html: `
      <p>完整的《Larry_英语语法体系_全系列语法总结》已经纳入项目源文件，适合作为长期维护版本。</p>
      <h4 class="table-title">项目源文件维护表</h4>
      <table>
        <thead><tr><th>文件</th><th>用途</th><th>维护方式</th></tr></thead>
        <tbody>
          <tr><td>source/full-summary.md</td><td>完整讲义主文本</td><td>后续新增笔记、例句、截图信息时优先补充这里。</td></tr>
          <tr><td>source/simple-sentence.md</td><td>简单句专题</td><td>按句型、例句、分析扩展。</td></tr>
          <tr><td>source/preposition.md</td><td>介词专题</td><td>按功能分类和例句扩展。</td></tr>
          <tr><td>source/clause.md</td><td>从句专题</td><td>按名词性/定语/状语从句扩展。</td></tr>
        </tbody>
      </table>
    `
  }
];

const nav = document.querySelector("#nav");
const content = document.querySelector("#content");
const search = document.querySelector("#search");

function render(list, query = "") {
  nav.innerHTML = sections.map(section => `<a href="#${section.id}">${section.title}</a>`).join("");
  if (!list.length) {
    content.innerHTML = `<div class="empty">没有找到匹配内容。</div>`;
    return;
  }

  content.innerHTML = list.map(section => {
    const html = query ? highlight(section.html, query) : section.html;
    return `
      <article class="card" id="${section.id}">
        <h3>${section.title}</h3>
        <div class="meta">${section.meta}</div>
        ${html}
      </article>
    `;
  }).join("");
}

function highlight(html, query) {
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return html.replace(new RegExp(escaped, "gi"), match => `<mark>${match}</mark>`);
}

search.addEventListener("input", () => {
  const q = search.value.trim();
  if (!q) {
    render(sections);
    return;
  }
  const result = sections.filter(section => {
    const text = `${section.title} ${section.meta} ${section.html}`.replace(/<[^>]+>/g, "");
    return text.toLowerCase().includes(q.toLowerCase());
  });
  render(result, q);
});

render(sections);
