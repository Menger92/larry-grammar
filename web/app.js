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
      <div class="review-card">
        <strong>本章核心</strong>
        <div class="formula"><span class="neutral">介词</span> + <span class="noun">名词性成分</span> = <span class="adj">介词短语</span> / <span class="adv">介词短语</span></div>
        <p>介词通常不能单独完成介词用法，必须带上后面的 <span class="noun">名词性成分</span> 构成介词短语。没有名词性成分时，它可能不是介词用法，而是在作 <span class="adj">形容词</span> 或 <span class="adv">副词</span>。</p>
        <ul class="compact-list">
          <li>先看后面有没有 <span class="noun">名词性成分</span>。</li>
          <li>有：按 <span class="neutral">介词</span> 处理，整体形成介词短语。</li>
          <li>没有：通常改按 <span class="adj">形容词</span> 或 <span class="adv">副词</span> 判断。</li>
        </ul>
      </div>
      <h4 class="table-title">三步判断法</h4>
      <ol class="steps-list">
        <li><b>看后面</b><span>后面有没有 <span class="noun">名词性成分</span>？</span></li>
        <li><b>有名词性成分</b><span>它就是介词用法，和后面的成分一起构成介词短语。</span></li>
        <li><b>没有名词性成分</b><span>不要硬判为介词，优先检查它是否在作 <span class="adv">副词</span> 或 <span class="adj">形容词</span>。</span></li>
      </ol>
      <h4 class="table-title">三步判断法示例：on</h4>
      <table>
        <thead><tr><th>判断步骤</th><th>判断结果</th><th>例句</th><th>分析</th></tr></thead>
        <tbody>
          <tr><td>后面有 <span class="noun">名词性成分</span></td><td>介词短语</td><td>It depends <span class="neutral">on</span> <span class="noun">what they do</span>.</td><td>on 后接 <span class="noun">what they do</span>，构成介词短语。</td></tr>
          <tr><td>后面没有名词性成分，修饰动作</td><td><span class="adv">副词</span></td><td>The car stopped and then drove <span class="adv">on</span>.</td><td>on 后面没有名词性成分，修饰 drove。</td></tr>
          <tr><td>后面没有名词性成分，表示状态</td><td><span class="adj">形容词</span></td><td>The TV is <span class="adj">on</span>.</td><td>on 后面没有名词性成分，表示 TV 的状态。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">介词短语句法功能表</h4>
      <table>
        <thead><tr><th>功能</th><th>本质</th><th>常见位置</th><th>代表例句</th><th>分析</th></tr></thead>
        <tbody>
          <tr><td><span class="adj">形容词性</span></td><td>修饰 <span class="noun">名词</span></td><td>通常放在名词后，作后置定语</td><td>The <span class="noun">book</span> <span class="adj">on the shelf</span> is great.</td><td><span class="adj">on the shelf</span> 后置修饰 <span class="noun">book</span>。</td></tr>
          <tr><td><span class="adv">副词性</span></td><td>修饰动词、形容词、其他副词</td><td>位置较灵活，多作状语或补足说明</td><td>We <span class="neutral">went</span> to a movie <span class="adv">after dinner</span>.</td><td><span class="adv">after dinner</span> 修饰 went，说明动作时间。</td></tr>
          <tr><td><span class="adv">副词性</span></td><td>补足形容词对象</td><td>跟在形容词后</td><td>I am <span class="adj">ready</span> <span class="adv">for dinner</span>.</td><td><span class="adv">for dinner</span> 补足 ready 的对象。</td></tr>
          <tr><td><span class="adv">副词性</span></td><td>限定其他副词</td><td>跟在副词后</td><td>We got there <span class="adv">late</span> <span class="adv">in the evening</span>.</td><td><span class="adv">in the evening</span> 修饰 late，限定时间范围。</td></tr>
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
      <p>简单句先找<span class="neutral">谓语动词</span>，再抓<span class="noun">主谓宾</span>主干；<span class="adj">定语</span>和<span class="adv">状语</span>多为可删除的修饰扩展，<span class="neutral">补语</span>用来补充说明主语或宾语。记忆顺序：<strong>主谓宾定状补</strong>。</p>
      <h4 class="table-title">句子成分定义表</h4>
      <table>
        <thead><tr><th>句子成分</th><th>英文</th><th>核心含义</th><th>颜色标注</th></tr></thead>
        <tbody>
          <tr><td><span class="noun">主语</span></td><td>Subject</td><td>句子的主体话题，或动作的发出者。</td><td><span class="noun">红色：名词性成分</span></td></tr>
          <tr><td><span class="neutral">谓语</span></td><td>Predicate</td><td>谓语即动词，是句子动作或状态的核心。</td><td>谓语是动词核心，不强行套四类成分色。</td></tr>
          <tr><td><span class="noun">宾语</span></td><td>Object</td><td>谓语动词的执行对象。</td><td><span class="noun">红色：名词性成分</span></td></tr>
          <tr><td><span class="adj">定语</span></td><td>Attributive</td><td>修饰名词性成分的成分；对句子主干来说通常可以删除。</td><td><span class="adj">黄色：形容词性成分</span></td></tr>
          <tr><td><span class="adv">状语</span></td><td>Adverbial</td><td>修饰动词、形容词、其他副词的成分；对句子主干来说通常可以删除。</td><td><span class="adv">绿色：副词性成分</span></td></tr>
          <tr><td><span class="neutral">补语</span></td><td>Complement</td><td>补充说明的额外成分。</td><td>补语要么是 <span class="noun">名词属性</span>，要么是 <span class="adj">形容词属性</span>。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">补语判断表</h4>
      <p>补语统一判断方式：把“被补充说明的对象 + 补语”改写成 <strong>[A is B]</strong>。如果说得通，B 就是在补充说明 A。传统“主系表”里的 <span class="adj">表语</span>，在这里归入 <span class="adj">主语补语</span>。</p>
      <table>
        <thead><tr><th>补语类型</th><th>代表例句</th><th>分析</th></tr></thead>
        <tbody>
          <tr><td>宾语补语</td><td>She painted <span class="noun">the room</span> <span class="adj">blue</span>.</td><td><span class="noun">the room</span> 和 <span class="adj">blue</span> 可理解为 [the room was blue]，所以 blue 补充说明 room。</td></tr>
          <tr><td>宾语补语</td><td>We consider <span class="noun">him</span> <span class="noun">a fool</span>.</td><td><span class="noun">him</span> 和 <span class="noun">a fool</span> 可理解为 [he is a fool]，所以 a fool 补充说明 him。</td></tr>
          <tr><td>主语补语</td><td><span class="noun">He</span> is <span class="adj">tired</span>.</td><td><span class="noun">He</span> 和 <span class="adj">tired</span> 构成 [He is tired]，tired 是传统说法里的表语，也就是主语补语。</td></tr>
          <tr><td>主语补语</td><td><span class="noun">He</span> is walking around <span class="adj">naked</span>.</td><td><span class="adj">naked</span> 补充说明主语 He 的状态，可理解为 [He is naked]。主语补语容易和副词状语混淆，判断时要看它是在说明主语状态，还是修饰动作方式。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">主语补语 vs 副词状语辨析表</h4>
      <p><strong>语法正确不等于语义正确。</strong> <span class="adj">形容词</span>作主语补语时，说明主语处在什么状态；<span class="adv">副词</span>作状语时，修饰动作如何发生。两种形式可能都符合语法，但表达的意思不同。</p>
      <table>
        <thead><tr><th>想表达的关系</th><th>推荐表达</th><th>容易混淆的表达</th><th>区别</th></tr></thead>
        <tbody>
          <tr><td>说明主语状态</td><td><span class="noun">He</span> is walking around <span class="adj">naked</span>.</td><td>He is walking around <span class="adv">nakedly</span>.</td><td><span class="adj">naked</span> 说明 He 的状态，可理解为 [He is naked]；<span class="adv">nakedly</span> 变成修饰 walking around 的方式，语法形式可成立，但通常不是要表达的意思。</td></tr>
          <tr><td>说明主语状态</td><td><span class="noun">Larry</span> stood there <span class="adj">silent</span>.</td><td>Larry stood there <span class="adv">silently</span>.</td><td><span class="adj">silent</span> 说明 Larry 的状态，可理解为 [Larry was silent]；<span class="adv">silently</span> 修饰 stood，说明“站”的方式。</td></tr>
          <tr><td>说明主语状态</td><td>Do not drive <span class="adj">tired</span>.</td><td>Do not drive <span class="adv">tiredly</span>.</td><td><span class="adj">tired</span> 补充说明省略的主语 you，意思是“不要在疲惫状态下开车”；<span class="adv">tiredly</span> 修饰 drive，意思变成“不要疲惫地开”。</td></tr>
          <tr><td>说明结果状态</td><td><span class="noun">Everything</span> will come <span class="adj">right</span>.</td><td>Everything will come <span class="adv">rightly</span>.</td><td><span class="adj">right</span> 说明 Everything 最终处于正确/顺利的状态；<span class="adv">rightly</span> 修饰 come，语义通常不自然。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">简单句基本句型表</h4>
      <table>
        <thead><tr><th>句型</th><th>结构</th><th>例句</th><th>核心判断</th></tr></thead>
        <tbody>
          <tr><td>SV<br><small>主谓</small></td><td><span class="noun">主语</span> + 不及物谓语动词</td><td><span class="noun">It</span> happens.</td><td>谓语动词不直接带宾语，句子主干到谓语动词即可成立。</td></tr>
          <tr><td>SVP<br><small>主系表</small></td><td><span class="noun">主语</span> + 系动词 + <span class="adj">表语</span></td><td><span class="noun">Sally</span> is <span class="adj">beautiful</span>.</td><td>表语就是主语补语，用来补充说明主语；表语常是 <span class="noun">名词性</span> 或 <span class="adj">形容词性</span> 成分。</td></tr>
          <tr><td>SVO<br><small>主谓宾</small></td><td><span class="noun">主语</span> + 及物谓语动词 + <span class="noun">宾语</span></td><td><span class="noun">Cats</span> love <span class="noun">fish</span>.</td><td>及物动词需要宾语承接动作，fish 是 love 的对象。</td></tr>
          <tr><td>SVOO<br><small>主谓双宾</small></td><td><span class="noun">主语</span> + 谓语动词 + <span class="noun">间接宾语</span> + <span class="noun">直接宾语</span></td><td><span class="noun">He</span> gave <span class="noun">me</span> <span class="noun">a gift</span>.</td><td>间接宾语通常是人，直接宾语通常是物；常可改写为介词 to / for 结构。</td></tr>
          <tr><td>SVOC<br><small>主谓宾补</small></td><td><span class="noun">主语</span> + 谓语动词 + <span class="noun">宾语</span> + 补语</td><td><span class="noun">I</span> find <span class="noun">the movie</span> <span class="adj">interesting</span>.</td><td><span class="adj">interesting</span> 补充说明 <span class="noun">the movie</span>，可理解为 [the movie is interesting]。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">SVOO 和 SVOC 区分表</h4>
      <p>SVOO 和 SVOC 的区分很重要：前者是两个宾语，后者是宾语后面跟一个补充说明宾语的成分。</p>
      <table>
        <thead><tr><th>结构</th><th>判断方法</th><th>代表例句</th><th>改写 / 检验</th></tr></thead>
        <tbody>
          <tr><td>SVOO<br><small>主谓双宾</small></td><td>谓语后面是“人 + 物”；直接宾语通常是物，间接宾语通常是人。</td><td>I gave <span class="noun">him</span> <span class="noun">a book</span>.<br>Sally bought <span class="noun">me</span> <span class="noun">a gift</span>.</td><td>I gave <span class="noun">a book</span> to <span class="noun">him</span>.<br>Sally bought <span class="noun">a gift</span> for <span class="noun">me</span>.</td></tr>
          <tr><td>SVOC<br><small>主谓宾补</small></td><td>宾语后面的成分补充说明宾语；宾语和宾补之间能形成 [A is B] 的关系。</td><td>I find <span class="noun">the movie</span> <span class="adj">interesting</span>.</td><td>可理解为 [the movie is interesting]，所以 interesting 是宾语补语，不是第二个宾语。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">句子成分分析案例</h4>
      <p>分析长句时，先找 <span class="noun">主语</span> 和谓语动词，确定简单句主干，再把 <span class="adv">状语</span>、<span class="adj">定语</span>、<span class="nonfinite">非谓语结构</span> 一层层剥离出来。</p>
      <table>
        <thead><tr><th>案例</th><th>主干</th><th>成分剥离</th></tr></thead>
        <tbody>
          <tr>
            <td>Despite the relentless downpour, with raindrops cascading from the darkened sky, the weary traveler trudged on, his clothes soaked and his spirits dampened, determined to reach his destination before nightfall, where warmth and shelter awaited him, providing solace from the tempestuous elements that assailed him along the treacherous path.</td>
            <td><span class="noun">the weary traveler</span> <span class="neutral">trudged on</span></td>
            <td>
              <ul class="compact-list">
                <li><span class="adv">Despite the relentless downpour</span>：介词短语作状语。</li>
                <li><span class="adv">with raindrops <span class="nonfinite">cascading from the darkened sky</span></span>：with 复合结构，整体作状语。</li>
                <li><span class="adv">his clothes <span class="nonfinite">soaked</span> and his spirits <span class="nonfinite">dampened</span></span>：独立主格 / 非谓语结构，补充背景状态。</li>
                <li><span class="adj">determined to reach his destination before nightfall</span>：主语补语，说明 traveler 的状态，可理解为 [the traveler was determined]。</li>
                <li><span class="adj">where warmth and shelter awaited him</span>：非限制性定语从句，修饰 destination。</li>
                <li><span class="adv"><span class="nonfinite">providing solace</span> from the tempestuous elements</span>：非谓语结构作状语；that assailed him along the treacherous path 是定语从句，修饰 elements。</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>As the sun began its descent, casting a golden hue across the horizon, a sense of tranquility enveloped the meadow, while an orchestra of chirping birds, buzzing insects, and rustling leaves orchestrated a symphony of nature, creating a serene ambiance that transported the weary soul to a realm of blissful respite.</td>
            <td><span class="noun">a sense of tranquility</span> <span class="neutral">enveloped</span> <span class="noun">the meadow</span></td>
            <td>
              <ul class="compact-list">
                <li><span class="adv">As the sun began its descent</span>：副词性从句作状语。</li>
                <li><span class="adv"><span class="nonfinite">casting a golden hue</span> across the horizon</span>：非谓语结构作状语。</li>
                <li><span class="adv">while an orchestra of chirping birds, buzzing insects, and rustling leaves orchestrated a symphony of nature</span>：副词性从句作状语。</li>
                <li><span class="adv"><span class="nonfinite">creating a serene ambiance</span></span>：非谓语结构作状语。</li>
                <li><span class="adj">that transported the weary soul to a realm of blissful respite</span>：定语从句，修饰 ambiance。</li>
              </ul>
            </td>
          </tr>
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
