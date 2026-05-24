const sections = [
  {
    id: "overview",
    title: "语法体系总览",
    meta: "先功能，后结构；先主干，后修饰。",
    html: `
      <div class="review-card">
        <strong>本章核心</strong>
        <p><span class="noun">名词性成分</span>当名词用，<span class="adj">形容词性成分</span>修饰名词，<span class="adv">副词性成分</span>修饰动作、状态或整句，<span class="nonfinite">非谓语</span>表示动词降级。</p>
      </div>
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
          <tr><td>简单介词</td><td>as, at, by, during, with</td><td>待补充截图例句</td></tr>
          <tr><td>分词介词</td><td>considering, including, given, granted</td><td>待补充截图例句</td></tr>
          <tr><td>短语介词</td><td>ahead of, next to, because of, owing to, along with, as well as, in case of, in charge of, in common with, as a result of, in the absence of, to the best of, with an eye to</td><td>待补充截图例句</td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: "simple",
    title: "简单句",
    meta: "对应视频：BV1rF411S7qd；2.1、2.1.1、2.2、2.3",
    html: `
      <div class="review-card">
        <strong>本章核心</strong>
        <p>简单句先找<span class="neutral">谓语动词</span>，再抓<span class="noun">主谓宾</span>主干；<span class="adj">定语</span>和<span class="adv">状语</span>多为可删除的修饰扩展，<span class="neutral">补语</span>用来补充说明主语或宾语。记忆顺序：<strong>主谓宾定状补</strong>。</p>
      </div>
      <h4 class="table-title">句子成分定义表</h4>
      <table>
        <thead><tr><th>句子成分</th><th>英文</th><th>核心含义</th></tr></thead>
        <tbody>
          <tr><td><span class="noun">主语</span></td><td>Subject</td><td>句子的主体话题，或动作的发出者。</td></tr>
          <tr><td><span class="neutral">谓语</span></td><td>Predicate</td><td>谓语即动词，是句子动作或状态的核心。</td></tr>
          <tr><td><span class="noun">宾语</span></td><td>Object</td><td>谓语动词的执行对象。</td></tr>
          <tr><td><span class="adj">定语</span></td><td>Attributive</td><td>修饰名词性成分的成分；对句子主干来说通常可以删除。</td></tr>
          <tr><td><span class="adv">状语</span></td><td>Adverbial</td><td>修饰动词、形容词、其他副词的成分；对句子主干来说通常可以删除。</td></tr>
          <tr><td><span class="neutral">补语</span></td><td>Complement</td><td>补充说明的额外成分；要么是 <span class="noun">名词属性</span>，要么是 <span class="adj">形容词属性</span>。</td></tr>
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
        <thead><tr><th>主干</th><th>成分剥离</th></tr></thead>
        <tbody>
          <tr>
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
    meta: "第三章：从句 = 连接词 + 简单句；3.1 至 3.7",
    html: `
      <div class="review-card">
        <strong>本章核心</strong>
        <div class="formula"><span class="neutral">从句</span> = <span class="neutral">连接词</span> + 简单句</div>
        <p>从句不是更高级的句子，而是把一个简单句降级后，放进另一个句子里承担某种功能。先看它整体是 <span class="noun">名词性</span>、<span class="adj">形容词性</span>，还是 <span class="adv">副词性</span>。</p>
      </div>
      <h4 class="table-title">从句三问法</h4>
      <table>
        <thead><tr><th>步骤</th><th>问题</th><th>目的</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>这里是不是有两个主谓结构？</td><td>判断是否需要连接词。</td></tr>
          <tr><td>2</td><td>被连接进去的句子整体在主句里做什么？</td><td>判断从句整体功能。</td></tr>
          <tr><td>3</td><td>连接词在从句里有没有承担成分？</td><td>判断 that / what / which / where 等连接词。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">疑问词的词性速查表</h4>
      <table>
        <thead><tr><th>疑问词 / 连接词</th><th>词性归类</th></tr></thead>
        <tbody>
          <tr><td>who / whom</td><td><span class="noun">n. 名词性</span></td></tr>
          <tr><td>whose</td><td><span class="adj">adj. 形容词性</span></td></tr>
          <tr><td>what</td><td><span class="noun">n. 名词性</span> / <span class="adj">adj. 形容词性</span></td></tr>
          <tr><td>which</td><td><span class="noun">n. 名词性</span> / <span class="adj">adj. 形容词性</span></td></tr>
          <tr><td>where</td><td><span class="adv">adv. 副词性</span></td></tr>
          <tr><td>when</td><td><span class="adv">adv. 副词性</span></td></tr>
          <tr><td>why</td><td><span class="adv">adv. 副词性</span></td></tr>
          <tr><td>how</td><td><span class="adv">adv. 副词性</span></td></tr>
          <tr><td>that</td><td>无 / <span class="noun">n. 名词性</span></td></tr>
        </tbody>
      </table>
      <h4 class="table-title">3.1 两个简单句的连接方式</h4>
      <table>
        <thead><tr><th>类型</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td>错误硬拼</td><td>两边都有主谓结构，中间没有连接方式。</td></tr>
          <tr><td>从属连词</td><td>从属连词把一个简单句降级为从句。</td></tr>
          <tr><td>并列连词</td><td>并列连词连接两个并列分句。</td></tr>
          <tr><td>分号</td><td>分号也可以连接关系紧密的完整句。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">从句类型总览表</h4>
      <table>
        <thead><tr><th>从句类型</th><th>本质</th><th>代表例句</th><th>判断问题</th></tr></thead>
        <tbody>
          <tr><td><span class="noun">名词性从句</span></td><td>整个从句当名词用</td><td><span class="noun">What she said about the incident</span> surprised everyone.</td><td>是否占主语、宾语、表语、同位语位置？</td></tr>
          <tr><td><span class="adj">形容词性从句 / 定语从句</span></td><td>整个从句修饰名词</td><td>Sally is a <span class="noun">teacher</span> <span class="adj">who is warm-hearted, hardworking, and quick in learning</span>.</td><td>是否跟在名词后说明这个名词？</td></tr>
          <tr><td><span class="adv">副词性从句 / 状语从句</span></td><td>整个从句修饰动作、状态或主句</td><td>I was only a little kid <span class="adv">when I met Sally</span>.</td><td>是否说明时间、原因、条件、让步、目的等逻辑关系？</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">3.2-3.3 名词性从句复习入口</h4>
      <div class="review-card noun-review">
        <strong>本节核心</strong>
        <p><span class="noun">名词性从句</span>的本质，是用一个句子替代简单句中的<span class="noun">名词短语</span>。学习时先把从句内部当作简单句分析，再看整个从句占据主句里的主语、宾语、表语或同位语位置。</p>
        <ul class="compact-list">
          <li>名词性从句 = 用句子代替简单句中的名词短语。</li>
          <li>从句内部仍然要找主谓宾定状补。</li>
          <li>主页面只保留一个代表例句，多个例句放进“查看例句库”。</li>
        </ul>
      </div>
      <h4 class="table-title">3.2-3.3 名词性从句主表：一个规则 + 一个代表例句</h4>
      <table class="study-table">
        <thead><tr><th>知识点</th><th>核心规则</th><th>代表例句</th><th>例句库</th></tr></thead>
        <tbody>
          <tr>
            <td>名词性从句的本质</td>
            <td><ol class="rule-list"><li>用一个句子替代简单句中的<span class="noun">名词短语</span>。</li><li>整个从句作为<span class="noun">名词性成分</span>进入主句。</li><li>再分析从句内部自己的主谓宾。</li></ol></td>
            <td><span class="noun">What she said about the incident</span> surprised everyone.</td>
            <td>
              <details class="example-toggle">
                <summary>查看核心分析</summary>
                <div class="example-library">
                  <figure class="analysis-figure">
                    <a class="analysis-zoom-link" href="#what-she-said-analysis-large" aria-label="放大查看 What she said about the incident 结构分析图">
                      <img src="assets/what-she-said-analysis.svg" alt="What she said about the incident surprised everyone 主从结构分析图">
                      <span>点击放大</span>
                    </a>
                    <figcaption>图示先看主句主谓宾，再进入名词性从句内部看 What 的双重属性。<a href="assets/what-she-said-analysis.svg" target="_blank" rel="noopener">打开原图</a></figcaption>
                  </figure>
                  <div class="image-modal" id="what-she-said-analysis-large">
                    <a class="image-modal-backdrop" href="#" aria-label="关闭大图"></a>
                    <div class="image-modal-panel">
                      <a class="image-modal-close" href="#" aria-label="关闭">×</a>
                      <img src="assets/what-she-said-analysis.svg" alt="What she said about the incident surprised everyone 放大分析图">
                    </div>
                  </div>
                  <p><b>主句结构：</b><span class="noun">What she said about the incident</span> = 主语；surprised = 谓语；<span class="noun">everyone</span> = 宾语。</p>
                  <p><b>从句结构：</b><span class="noun">What</span> = 宾语；<span class="noun">she</span> = 主语；said = 谓语；<span class="adv">about the incident</span> = 状语。还原为：she said what about the incident。</p>
                  <p><b>What 的双重属性：</b><span class="noun">What</span> = 连接词 + <span class="noun">名词性成分</span>。一方面引导整个名词性从句，一方面在从句内部作 said 的宾语。</p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>独立句变从句</td>
            <td><ol class="rule-list"><li>先把原句调成陈述语序。</li><li>再加连接词。</li><li>最后把连接词放到从句句首。</li></ol></td>
            <td>I don't know <span class="noun">what your name is</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看截图例句</summary>
                <div class="example-library">
                  <p>What's your name? → I don't know <span class="noun">what your name is</span>. <small>特殊疑问句进入从句后，用陈述语序。</small></p>
                  <p>Why are you laughing? → I don't know <span class="noun">why you are laughing</span>. <small>why 保留在从句句首。</small></p>
                  <p>Where does Sally live? → I don't know <span class="noun">where Sally lives</span>. <small>去掉 does，谓语回到 lives。</small></p>
                  <p>What happened yesterday? → I don't know <span class="noun">what happened yesterday</span>. <small>what 本身作主语，语序不变。</small></p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>主语从句</td>
            <td><ol class="rule-list"><li>整个从句放在主语位置。</li><li>回答“什么事 / 哪件事”作主语。</li><li>先看主句谓语，再确认前面整块是否作主语。</li></ol></td>
            <td><span class="noun">What you decide</span> will greatly impact our future.</td>
            <td>
              <details class="example-toggle">
                <summary>查看 3 个主语例句</summary>
                <div class="example-library">
                  <p><span class="noun">What you decide</span> will greatly impact our future. <small>what 在从句中作 decide 的宾语。</small></p>
                  <p><span class="noun">Whether he is guilty or innocent</span> remains to be seen. <small>whether 表示“一般疑问句的不确定性”。</small></p>
                  <p><span class="noun">How we handle this situation</span> is crucial for our success. <small>how 在从句中作方式状语。</small></p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>宾语从句</td>
            <td><ol class="rule-list"><li>整个从句放在动词或介词后。</li><li>承担<span class="noun">宾语</span>功能。</li><li>注意连接词是否在从句内部作成分。</li></ol></td>
            <td>She believes <span class="noun">that education is the key to a better world</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看 4 个宾语例句</summary>
                <div class="example-library">
                  <p>She believes <span class="noun">that education is the key to a better world</span>. <small>that 只连接，不作成分。</small></p>
                  <p>I wonder <span class="noun">why he did not show up at the meeting</span>. <small>why 在从句中作原因状语。</small></p>
                  <p>Can you explain <span class="noun">how this machine works</span>? <small>how 在从句中作方式状语。</small></p>
                  <p>I am unsure about <span class="noun">whether we should go to the party</span>. <small>介词 about 后用 whether 更稳。</small></p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>表语从句</td>
            <td><ol class="rule-list"><li>整个从句放在系动词后。</li><li>作表语 / 主语补语。</li><li>说明主语的具体内容。</li></ol></td>
            <td>The truth is <span class="noun">that we all make mistakes</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看 3 个表语例句</summary>
                <div class="example-library">
                  <p>His dream is <span class="noun">that he becomes a successful entrepreneur</span>. <small>说明 dream 的内容。</small></p>
                  <p>The problem seems to be <span class="noun">that we lack proper communication</span>. <small>说明 problem 的内容。</small></p>
                  <p>The truth is <span class="noun">that we all make mistakes</span>. <small>说明 truth 的内容。</small></p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>同位语从句</td>
            <td><ol class="rule-list"><li>前面通常有抽象名词。</li><li>从句解释这个名词的具体内容。</li><li>不是限定“哪一个”，这一点要和定语从句区分。</li></ol></td>
            <td>The <span class="noun">news</span> <span class="noun">that they won the championship</span> spread quickly.</td>
            <td>
              <details class="example-toggle">
                <summary>查看 5 个同位语例句</summary>
                <div class="example-library">
                  <p>The <span class="noun">news</span> <span class="noun">that they won the championship</span> spread quickly. <small>that 从句解释 news 的内容。</small></p>
                  <p>The <span class="noun">fact</span> <span class="noun">that she lied</span> disappointed everyone. <small>解释 fact。</small></p>
                  <p>I have no <span class="noun">idea</span> <span class="noun">what has happened to him</span>. <small>解释 idea；what 作从句主语。</small></p>
                  <p>My original <span class="noun">doubt</span>, <span class="noun">why she did that</span>, has not been answered. <small>why 作原因状语。</small></p>
                  <p>The last <span class="noun">question</span>, <span class="noun">what measures should be taken</span>, was fully discussed. <small>what 修饰 measures。</small></p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>疑问词作主语的语序</td>
            <td><ol class="rule-list"><li>特殊疑问句变从句，通常改陈述语序。</li><li>如果疑问词本身作主语，语序不用额外改变。</li><li>判断重点是：疑问词是不是从句主语。</li></ol></td>
            <td>I don't know <span class="noun">what happened yesterday</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看语序对比</summary>
                <div class="example-library">
                  <p>What's your name? → I don't know <span class="noun">what your name is</span>. <small>what 作表语，需要陈述语序。</small></p>
                  <p>Where does Sally live? → I don't know <span class="noun">where Sally lives</span>. <small>去掉 does，谓语回到 lives。</small></p>
                  <p>What happened yesterday? → I don't know <span class="noun">what happened yesterday</span>. <small>what 本身作主语，不需要额外调序。</small></p>
                  <p>Who is in the classroom? → I don't know <span class="noun">who is in the classroom</span>. <small>who 本身作主语，语序不变。</small></p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>形式主语</td>
            <td><ol class="rule-list"><li>名词性从句作主语太长时，句子容易头重脚轻。</li><li>用 it 放句首作形式主语。</li><li>把真正主语放句尾，形成 <strong>ENDWEIGHT（句末重心）</strong>。</li></ol></td>
            <td>It is true <span class="noun">that Sally is beautiful</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看 3 个形式主语例句</summary>
                <div class="example-library">
                  <p><span class="noun">That Sally is beautiful</span> is true. → It is true <span class="noun">that Sally is beautiful</span>.</p>
                  <p><span class="noun">Whether Sally is beautiful</span> doesn't matter. → It doesn't matter <span class="noun">whether Sally is beautiful</span>.</p>
                  <p><span class="noun">Why Sally is beautiful</span> doesn't matter. → It doesn't matter <span class="noun">why Sally is beautiful</span>.</p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>形式宾语</td>
            <td><ol class="rule-list"><li>宾语从句后面还要接宾补时，结构容易变重。</li><li>用 it 作形式宾语。</li><li>把真正宾语从句放到句尾。</li></ol></td>
            <td>I find it unbelievable <span class="noun">that Sally is beautiful</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看 2 个形式宾语例句</summary>
                <div class="example-library">
                  <p>I find it unbelievable <span class="noun">that Sally is beautiful</span>. <small>it 是形式宾语，unbelievable 是宾语补语。</small></p>
                  <p>Our teacher made it a rule <span class="noun">that we have to speak English in class</span>. <small>it 是形式宾语，a rule 是宾语补语。</small></p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>that 的省略</td>
            <td><ol class="rule-list"><li>that 只连接、不作成分。</li><li>宾语从句中常可省略。</li><li>主语从句、同位语从句等位置不要随意省略。</li></ol></td>
            <td>待补充截图例句</td>
            <td>
              <details class="example-toggle">
                <summary>查看省略规则</summary>
                <div class="example-library">
                  <p><b>主语从句位于句首：</b><span class="noun">That Sally is beautiful</span> is true. <small>that 不省。</small></p>
                  <p><b>宾语从句：</b>待补充截图例句。<small>宾语位置常可省略 that。</small></p>
                  <p><b>表语从句：</b>待补充截图例句。<small>学习阶段建议保留 that。</small></p>
                  <p><b>同位语从句：</b>The <span class="noun">fact</span> <span class="noun">that she lied</span> disappointed everyone. <small>that 不省。</small></p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>whether 和 if</td>
            <td><ol class="rule-list"><li>whether 和 if 都可表示“是否”。</li><li>whether 适用范围更广。</li><li>不确定时优先用 whether。</li></ol></td>
            <td>I am unsure about <span class="noun">whether we should go to the party</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看截图例句</summary>
                <div class="example-library">
                  <p><b>介词后：</b>I am unsure about <span class="noun">whether we should go to the party</span>. <small>不用 about if。</small></p>
                  <p><b>不定式前：</b>She couldn't decide <span class="noun">whether to go to the movie or not</span>. <small>不用 if to do。</small></p>
                  <p><b>二选一：</b>You must decide <span class="noun">whether you want to study abroad or stay at home</span>.</p>
                  <p><b>主语从句：</b><span class="noun">Whether Sally is beautiful</span> doesn't matter.</p>
                </div>
              </details>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 class="table-title">名词性从句连接词速查表</h4>
      <table>
        <thead><tr><th>连接词</th><th>词性归类</th><th>从句中作用</th><th>选择提醒</th></tr></thead>
        <tbody>
          <tr><td>that</td><td>无 / <span class="noun">名词性</span></td><td>名词性从句中常只连接、不作成分。</td><td>从句结构完整时常用 that；宾语从句中常可省。</td></tr>
          <tr><td>whether / if</td><td>无</td><td>表示“是否”，不作从句成分。</td><td>介词后、不定式前、主语从句、表语从句优先 whether。</td></tr>
          <tr><td>who / whom</td><td><span class="noun">名词性</span></td><td>指人，可作主语或宾语。</td><td>who 常作主语；whom 较正式，常作宾语。</td></tr>
          <tr><td>what</td><td><span class="noun">名词性</span> / <span class="adj">形容词性</span></td><td>可作主语、宾语、表语；也可修饰名词。</td><td>从句缺名词性成分时常用 what；what book 中 what 修饰 book。</td></tr>
          <tr><td>which</td><td><span class="noun">名词性</span> / <span class="adj">形容词性</span></td><td>可代替名词性成分；也可修饰名词。</td><td>常表示有限范围中的“哪一个”。</td></tr>
          <tr><td>whose</td><td><span class="adj">形容词性</span></td><td>修饰名词，表示“谁的”。</td><td>后面通常接名词。</td></tr>
          <tr><td>where / when / why / how</td><td><span class="adv">副词性</span></td><td>作地点、时间、原因、方式状语。</td><td>从句主谓宾完整时，再看是否缺状语。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">3.4 形容词性从句 / 定语从句复习入口</h4>
      <div class="review-card adj-review">
        <strong>本节核心</strong>
        <p><span class="adj">形容词性从句 / 定语从句</span>整体修饰前面的<span class="noun">名词</span>，不要只背关系词列表，重点是搞清楚<span class="neutral">先行词</span>和<span class="neutral">关系词在从句中作什么成分</span>。</p>
        <ul class="compact-list">
          <li>先掌握简单句五种基本句型，这是分析从句内部的基础。</li>
          <li>学习定语从句，不等于只学习关系词；从句内部的语法分析才是重点。</li>
          <li>主页面只保留一个代表例句，多个例句放进“查看例句库”。</li>
        </ul>
      </div>
      <h4 class="table-title">3.4 定语从句主表：一个规则 + 一个代表例句</h4>
      <table class="study-table">
        <thead><tr><th>知识点</th><th>核心规则</th><th>代表例句</th><th>例句库</th></tr></thead>
        <tbody>
          <tr>
            <td>关系词的作用</td>
            <td><ol class="rule-list"><li>关系词重复指代前面的先行词。</li><li>关系词连接两个有独立主谓结构的简单句。</li><li>分析重点是关系词在从句中作什么成分。</li></ol></td>
            <td><span class="noun">Sally</span> is a <span class="noun">teacher</span> <span class="adj">who is warm-hearted, hardworking, and quick in learning</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看 3 个连接对比</summary>
                <div class="example-library">
                  <p><b>错误硬拼：</b>Sally is a teacher Sally is warm-hearted, hardworking, and quick in learning.</p>
                  <p><b>并列连接：</b>Sally is an actor, and Sally is warm-hearted, hardworking, and quick in learning.</p>
                  <p><b>定语从句：</b>Sally is a <span class="noun">teacher</span> <span class="adj">who is warm-hearted, hardworking, and quick in learning</span>.</p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>主语关系代词</td>
            <td><ol class="rule-list"><li>关系词在从句中作主语。</li><li>指人常用 who。</li><li>指物常用 that / which。</li></ol></td>
            <td>He is reading a <span class="noun">book</span> <span class="adj">that is about human history</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看 2 个主语例句</summary>
                <div class="example-library">
                  <p>He is reading a <span class="noun">book</span> <span class="adj">that is about human history</span>. <small>that 在从句中作主语。</small></p>
                  <p>A rich person is not <span class="noun">one</span> <span class="adj">who has the most</span>, but is <span class="noun">one</span> <span class="adj">who needs the least</span>. <small>who 在两个定语从句中都作主语。</small></p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>宾语关系代词：动词宾语</td>
            <td><ol class="rule-list"><li>关系词在从句中作动词宾语。</li><li>多数情况下可以省略。</li><li>省略前要先确认从句缺的是宾语。</li></ol></td>
            <td>I want to have a <span class="noun">friend</span> <span class="adj">that I can fully trust</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看 5 个宾语例句</summary>
                <div class="example-library">
                  <p>I want to have a <span class="noun">friend</span> <span class="adj">[who / whom / that / 不填] I can fully trust</span>. <small>friend 是 trust 的宾语。</small></p>
                  <p>Michael likes every piece of <span class="noun">music</span> <span class="adj">[that / which / 不填] I recommend</span>. <small>music 是 recommend 的宾语。</small></p>
                  <p>This is the <span class="noun">book</span> <span class="adj">[that / which / 不填] I bought yesterday</span>. <small>book 是 bought 的宾语。</small></p>
                  <p>There exist certain <span class="noun">traditions</span> in Fujian <span class="adj">that people accustomed to Northern ways of thinking find weird</span>. <small>traditions 是 find 的宾语，weird 是宾语补语。</small></p>
                  <p>使用关系代词后，从句中原本被关系词指代的宾语要删掉：I love the <span class="noun">friends</span> <span class="adj">that I can fully trust</span>，不要再写 them。</p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>宾语关系代词：介词宾语</td>
            <td><ol class="rule-list"><li>介词后置时，可像动词宾语一样处理。</li><li>介词前置时，只能用 prep + whom / which。</li><li>不能用 prep + that。</li></ol></td>
            <td>This is the very <span class="noun">bag</span> <span class="adj">that I've been looking for</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看 6 个介词宾语例句</summary>
                <div class="example-library">
                  <p>This is the very <span class="noun">bag</span> <span class="adj">that I've been looking for</span>. <small>for 后置，that 作介词 for 的宾语。</small></p>
                  <p>This is the very <span class="noun">bag</span> <span class="adj">which I've been looking for</span>. <small>which 也可以作后置介词 for 的宾语。</small></p>
                  <p>This is the very <span class="noun">bag</span> <span class="adj">I've been looking for</span>. <small>关系词作宾语，可省略。</small></p>
                  <p>The little <span class="noun">girl</span> <span class="adj">who a lot of people are interested in</span> is named Lucy. <small>介词 in 后置。</small></p>
                  <p>The little <span class="noun">girl</span> <span class="adj">in whom a lot of people are interested</span> is named Lucy. <small>介词前置，指人用 whom。</small></p>
                  <p>The old <span class="noun">house</span> <span class="adj">about which a lot of people care</span> will be repaired. <small>介词前置，指物用 which。</small></p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>状语关系副词</td>
            <td><ol class="rule-list"><li>where / when / why 在定语从句中作<span class="adv">状语</span>。</li><li>where 对应地点，when 对应时间，why 对应原因。</li><li>它们是副词，也是连接先行词和从句的关系词。</li></ol></td>
            <td>This is the <span class="noun">town</span> <span class="adj">where I grew up</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看 where / when / why 推导</summary>
                <div class="example-library">
                  <p><b>速查：</b>where + 地点名词 = 地点状语；when + 时间名词 = 时间状语；why + 原因名词 = 原因状语。<small>从句主谓宾完整时，再看是否缺时间、地点、原因。</small></p>
                  <p><b>where 推导：</b>This is the <span class="noun">town</span>. + I grew up <span class="adv">in this town</span>. → This is the <span class="noun">town</span> <span class="adj">in which I grew up</span>. / This is the <span class="noun">town</span> <span class="adj">where I grew up</span>.<small>where = in which，在从句中作地点状语。</small></p>
                  <p><b>where 形式对比：</b>This is the town where I grew up. / This is the town in which I grew up. / This is the town which I grew up in. / This is the town that I grew up in.<small>前两种最清楚；后两种口语可见，但不是本节推荐的主线表达。</small></p>
                  <p><b>where 从句类型对比：</b>This is <span class="noun">where I plant the trees</span>. / I plant the trees in a <span class="noun">place</span> <span class="adj">where there’s a lot of sunshine</span>. / I plant trees <span class="adv">where there’s a lot of sunshine</span>.<small>分别是名词性从句、形容词性从句、副词性从句。</small></p>
                  <p><b>when 推导：</b>I’ll never forget the <span class="noun">day</span>. + I met you <span class="adv">on that day</span>. → I’ll never forget the <span class="noun">day</span> <span class="adj">on which I met you</span>. / I’ll never forget the <span class="noun">day</span> <span class="adj">when I met you</span>.<small>when = on which，在从句中作时间状语。</small></p>
                  <p><b>when 形式对比：</b>I’ll never forget the day when I met you. / I’ll never forget the day on which I met you. / I’ll never forget the day that I met you. / I’ll never forget the day I met you.<small>when 和 on which 最贴合本节逻辑；that 和不填可用，但不要把 which 直接当时间状语。</small></p>
                  <p><b>when 从句类型对比：</b><span class="noun">When I met Sally</span> doesn’t matter. / September 15, 2018 is <span class="noun">when I met Sally</span>. / September 15, 2018 is the <span class="noun">day</span> <span class="adj">when I met Sally</span>. / I was only a little kid <span class="adv">when I met Sally</span>.<small>同一个 when 从句，要看它在主句里占什么位置。</small></p>
                  <p><b>why 推导：</b>That is the <span class="noun">reason</span>. + Sally hates her friend Mary <span class="adv">for that reason</span>. → That is the <span class="noun">reason</span> <span class="adj">for which Sally hates her friend Mary</span>. / That is the <span class="noun">reason</span> <span class="adj">why Sally hates her friend Mary</span>.<small>why = for which，在从句中作原因状语。</small></p>
                  <p><b>why 从句类型对比：</b>Nobody really knows <span class="noun">why Sally left for China</span>. / Nobody really knows the <span class="noun">reason</span> <span class="adj">why Sally left for China</span>.<small>前一句 why 从句作宾语；后一句 why 从句修饰 reason。</small></p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>定语关系限定词</td>
            <td><ol class="rule-list"><li>whose 表示所有格，常见结构是 whose + 名词。</li><li>which 也可作限定词，形成 which + 名词，但较少见。</li><li>of which 可作为更正式的替换形式。</li></ol></td>
            <td>Michael lives in a <span class="noun">house</span> <span class="adj">whose roof is leaking</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看 whose / of which 推导</summary>
                <div class="example-library">
                  <p><b>whose 推导：</b>Michael lives in a <span class="noun">house</span>. + The roof of the <span class="noun">house</span> is leaking. → Michael lives in a <span class="noun">house</span> <span class="adj">of which the roof is leaking</span>. / Michael lives in a <span class="noun">house</span> <span class="adj">whose roof is leaking</span>.<small>whose roof = the roof of the house。</small></p>
                  <p>That <span class="noun">guy</span> <span class="adj">whose dad is a billionaire</span> wasted a lot of money.<small>whose 表示人的所有格，修饰 dad。</small></p>
                  <p>I know a <span class="noun">doctor</span> <span class="adj">whose three sons are all doctors</span>.<small>whose 可用于人的所有格。</small></p>
                  <p>Sally studies in a <span class="noun">school</span> <span class="adj">whose students study like machines</span>.<small>whose 也可用于物的所有格。</small></p>
                  <p>That guy whose dad is a billionaire wasted a lot of money, <span class="adj">which fact is hard to believe</span>.<small>which fact 是较少见的 which + 名词结构。</small></p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>补语关系代词</td>
            <td><ol class="rule-list"><li>which / that 可在定语从句中作补语。</li><li>常出现在 be / become 等后面。</li><li>用来补充说明从句里的主语或宾语。</li></ol></td>
            <td>待补充截图例句</td>
            <td>
              <details class="example-toggle">
                <summary>查看说明</summary>
                <div class="example-library">
                  <p>补语关系代词的具体例句待补充截图来源。</p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>关系词省略判断</td>
            <td><ol class="rule-list"><li>不会引发歧义时才省略。</li><li>关系词离真正谓语动词太远时，尽量保留。</li><li>结构复杂时，尽量保留关系词。</li></ol></td>
            <td>I want to have a <span class="noun">friend</span> <span class="adj">I can fully trust</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看省略对比</summary>
                <div class="example-library">
                  <p>I want to have a <span class="noun">friend</span> <span class="adj">that I can fully trust</span>. / I want to have a <span class="noun">friend</span> <span class="adj">I can fully trust</span>. <small>简单清楚，可以省。</small></p>
                  <p>There exist certain <span class="noun">traditions</span> in Fujian <span class="adj">that people accustomed to Northern ways of thinking find weird</span>. <small>从句较长，建议保留 that。</small></p>
                  <p>原则：不会引发歧义的，可以省略；容易引发歧义的，不省略。</p>
                </div>
              </details>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 class="table-title">定语从句关系词速查表</h4>
      <table>
        <thead><tr><th>关系词类别</th><th>可用关系词</th><th>从句中成分</th><th>选择提醒</th></tr></thead>
        <tbody>
          <tr><td>主语关系代词</td><td>who, which, that</td><td><span class="noun">主语</span></td><td>指人常用 who；指物常用 that / which。</td></tr>
          <tr><td>宾语关系代词：动词宾语</td><td>who, whom, which, that, 不填</td><td><span class="noun">宾语</span></td><td>多数可以省略；先确认从句缺宾语。</td></tr>
          <tr><td>宾语关系代词：介词宾语</td><td>who, whom, which, that, 不填；prep + whom / which</td><td><span class="noun">介词宾语</span></td><td>介词前置不用 that；短语动词里的介词一般不前置。</td></tr>
          <tr><td>状语关系副词</td><td>where, when, why</td><td><span class="adv">状语</span></td><td>where = in / at which；when = in / on / at which；why = for which。</td></tr>
          <tr><td>定语关系限定词</td><td>whose, which</td><td><span class="adj">定语 / 限定词</span></td><td>whose + 名词最常见；which + 名词较少见；of which 更正式。</td></tr>
          <tr><td>补语关系代词</td><td>which, that</td><td>补语</td><td>常出现在 be / become 等后，补充说明从句中的对象。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">限制性 VS 非限制性定语从句</h4>
      <table class="study-table">
        <thead><tr><th>知识点</th><th>核心规则</th><th>代表例句</th><th>例句库</th></tr></thead>
        <tbody>
          <tr>
            <td>核心区别</td>
            <td><ol class="rule-list"><li>限制性定语从句负责筛选，回答“哪一个 / 哪一类”。</li><li>非限制性定语从句负责顺便提一嘴，补充额外信息。</li><li>非限制性通常有逗号，关系词常用 which / who / where / when，不要用 that。</li></ol></td>
            <td>I don’t wear <span class="noun">clothes</span> <span class="adj">which make me different from other people</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看 clothes 对比</summary>
                <div class="example-library">
                  <p>I don’t wear <span class="noun">clothes</span> <span class="adj">which make me different from other people</span>.<small>限制性：我不穿“那些让我看起来和别人不同的衣服”。which make 修饰 clothes。</small></p>
                  <p>I don’t wear clothes, <span class="adj">which makes me different from other people</span>.<small>非限制性：我不穿衣服，这件事让我和别人不同。which makes 指前面整个句子。</small></p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>非限制性判断</td>
            <td><ol class="rule-list"><li>先看有没有逗号。</li><li>再看关系词是否是 which / who / where / when。</li><li>最后看从句是不是补充说明，而不是筛选对象。</li></ol></td>
            <td>Michael knows a <span class="noun">doctor</span>, <span class="adj">who has three sons working in the hospital</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看 4 个判断例句</summary>
                <div class="example-library">
                  <p>I don’t wear clothes, <span class="adj">which makes me different from other people</span>.<small>which 指整个前句。</small></p>
                  <p>Michael knows a <span class="noun">doctor</span>, <span class="adj">who has three sons working in the hospital</span>.<small>who 补充说明 doctor。</small></p>
                  <p>This is the <span class="noun">school</span>, <span class="adj">where we made lifelong friendships</span>.<small>where 补充说明 school。</small></p>
                  <p>I still remember the <span class="noun">summer</span>, <span class="adj">when we had an unforgettable road trip</span>.<small>when 补充说明 summer。</small></p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>先行词范围</td>
            <td><ol class="rule-list"><li>限制性先行词通常是单纯名词短语。</li><li>非限制性先行词可以是名词短语、主句中的从句、谓语部分、宾语部分，甚至整个主句。</li><li>同样是名词短语，限制性和非限制性的意思也不同。</li></ol></td>
            <td>Beijing attracts visitors from around the world, <span class="adj">which is great</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看先行词多样化</summary>
                <div class="example-library">
                  <p><span class="noun">Beijing</span>, <span class="adj">which is a great city</span>, attracts visitors from around the world.<small>which 补充说明名词短语 Beijing。</small></p>
                  <p>Beijing attracts visitors from around the world, <span class="adj">which is great</span>.<small>which 指前面整个主句。</small></p>
                  <p>They said <span class="noun">that I took the books</span>, <span class="adj">which was just not true</span>.<small>which 指主句中包含的从句内容。</small></p>
                  <p>Michael plays basketball, <span class="adj">which I don’t</span>.<small>which 指 plays basketball 这个动作。</small></p>
                  <p>Michael likes <span class="noun">playing basketball</span>, <span class="adj">which is a good sport</span>.<small>which 指 playing basketball。</small></p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>专有名词 / 唯一对象</td>
            <td><ol class="rule-list"><li>专有名词或已经唯一明确的对象，通常不需要再筛选。</li><li>只是补充说明时，用非限制性并加逗号。</li><li>如果上下文把专有名词变成“多个版本中的一个”，才可能用限制性。</li></ol></td>
            <td>I went to <span class="noun">Xiamen</span>, <span class="adj">which is one of the most beautiful cities in China</span>.</td>
            <td>
              <details class="example-toggle">
                <summary>查看专有名词例句</summary>
                <div class="example-library">
                  <p><span class="noun">Beijing</span>, <span class="adj">which is capital of China</span>, is a great city.<small>北京通常唯一明确，补充说明要加逗号。</small></p>
                  <p>Xiamen is a <span class="noun">city</span> <span class="adj">which is known for its great landscape</span>.<small>先行词是 city，从很多城市中筛选。</small></p>
                  <p><span class="noun">Einstein</span>, <span class="adj">who was a great scientist</span>, created the theory of relativity.<small>Einstein 已经唯一，who 从句补充说明。</small></p>
                  <p>The <span class="noun">Einstein</span> <span class="adj">who was played by 王俊凯 in that movie</span> looks funny.<small>这里指“电影里被扮演出来的那个 Einstein”，可以筛选。</small></p>
                  <p><span class="noun">张三</span>, <span class="adj">who teaches us English</span>, is a cool guy. / The <span class="noun">张三</span> <span class="adj">who teaches us English</span> is the most handsome guy in China.<small>前一句小范围唯一；后一句从很多同名张三中筛选。</small></p>
                  <p><span class="noun">My grandmother</span>, <span class="adj">who is 70 years old</span>, loves programming.<small>“奶奶”通常已经唯一明确，不适合作为限制性筛选例句；不要写成 My grandmother who loves programming...</small></p>
                  <p>This is my <span class="noun">hometown</span>, <span class="adj">which a lot of people know</span>.<small>my hometown 对说话人来说已经唯一，后面用非限制性补充。</small></p>
                </div>
              </details>
            </td>
          </tr>
          <tr>
            <td>语义差别</td>
            <td><ol class="rule-list"><li>逗号不是装饰，而是意义改变的标记。</li><li>无逗号时，从句参与确定对象。</li><li>有逗号时，对象已经确定，从句只是额外补充。</li></ol></td>
            <td>The <span class="noun">park</span> <span class="adj">where we used to play</span> is now a shopping center.</td>
            <td>
              <details class="example-toggle">
                <summary>查看语义对比</summary>
                <div class="example-library">
                  <p>My <span class="noun">uncle</span> <span class="adj">who always drinks a lot</span> is liked by nobody. / My <span class="noun">uncle</span>, <span class="adj">who always drinks a lot</span>, is liked by nobody.<small>前句筛选“爱喝酒的叔叔”；后句是“我叔叔没人喜欢，顺便说他爱喝酒”。</small></p>
                  <p>The <span class="noun">town</span> <span class="adj">which is known for its street food</span> enjoys great fame. / The <span class="noun">town</span>, <span class="adj">which is known for its street food</span>, enjoys great fame.<small>前句筛选小镇；后句补充说明小镇特色。</small></p>
                  <p>The <span class="noun">park</span> <span class="adj">where we used to play</span> is now a shopping center. / The <span class="noun">park</span>, <span class="adj">where we used to play</span>, is now a shopping center.<small>前句确定是哪一个公园；后句顺便说我们曾在那里玩。</small></p>
                  <p>This is the <span class="noun">time</span> <span class="adj">when we need to come together</span>. / This is the <span class="noun">time</span>, <span class="adj">when we need to come together</span>.<small>前句强调“这个时候”；后句带有“时不我待，顺便说明现在该联合”的感觉。</small></p>
                </div>
              </details>
            </td>
          </tr>
        </tbody>
      </table>
      <h4 class="table-title">定语从句判断四步</h4>
      <ol class="steps-list">
        <li><b>找先行词</b><span>先看从句修饰前面的哪个名词。</span></li>
        <li><b>代回从句</b><span>把先行词放回从句原本缺的位置。</span></li>
        <li><b>判断成分</b><span>看它在从句里作主语、宾语、定语，还是状语。</span></li>
        <li><b>选择关系词</b><span>缺名词性成分用 who / which / that；缺状语用 where / when / why。</span></li>
      </ol>
      <h4 class="table-title">3.7 状语从句连接词表</h4>
      <table>
        <thead><tr><th>类型</th><th>常见连接词</th><th>代表例句</th><th>记忆问题</th></tr></thead>
        <tbody>
          <tr><td>时间</td><td>when, while, before, after, until, as soon as</td><td>I was only a little kid <span class="adv">when I met Sally</span>.</td><td>什么时候发生？</td></tr>
          <tr><td>原因</td><td>because, since, as</td><td>待补充截图例句</td><td>为什么发生？</td></tr>
          <tr><td>条件</td><td>if, unless, provided that, as long as</td><td>待补充截图例句</td><td>在什么条件下发生？</td></tr>
          <tr><td>让步</td><td>although, though, even if, even though</td><td>待补充截图例句</td><td>虽然怎样，仍然怎样？</td></tr>
          <tr><td>目的</td><td>so that, in order that</td><td>待补充截图例句</td><td>为了什么？</td></tr>
          <tr><td>结果</td><td>so...that, such...that</td><td>待补充截图例句</td><td>结果怎样？</td></tr>
          <tr><td>比较</td><td>than, as...as</td><td>待补充截图例句</td><td>和谁比？怎么比？</td></tr>
          <tr><td>方式</td><td>as, as if, as though</td><td>待补充截图例句</td><td>以什么方式？</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">从句易混对比表</h4>
      <table>
        <thead><tr><th>对比项</th><th>A</th><th>B</th><th>判断核心</th></tr></thead>
        <tbody>
          <tr><td>that vs what</td><td>that 只连接，不作成分</td><td>what 在名词性从句里作成分</td><td>看从句是否缺主语、宾语或表语。</td></tr>
          <tr><td>whether vs if</td><td>whether 位置更自由，更正式</td><td>if 多用于宾语从句</td><td>主语从句、表语从句、介词后、不定式前优先 whether。</td></tr>
          <tr><td>同位语从句 vs 定语从句</td><td>解释名词内容</td><td>修饰限定名词范围</td><td>看从句是解释“内容”，还是限定“哪一个”。</td></tr>
          <tr><td>which vs where</td><td>which 代替名词性成分</td><td>where 代替地点状语</td><td>看从句缺宾语/主语，还是缺地点状语。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">一页记忆卡</h4>
      <table>
        <thead><tr><th>口诀</th><th>含义</th></tr></thead>
        <tbody>
          <tr><td>两句相连，必须有桥</td><td>两个简单句之间要有连接词、分号或句号。</td></tr>
          <tr><td>占名词位，看红色</td><td>主语、宾语、表语、同位语位置上的从句是名词性从句。</td></tr>
          <tr><td>跟着名词，看黄色</td><td>名词后的修饰从句是定语从句。</td></tr>
          <tr><td>说明逻辑，看绿色</td><td>时间、原因、条件、让步、目的等是状语从句。</td></tr>
          <tr><td>关系词选择看缺什么</td><td>缺名词性成分用 who / which / that，缺状语用 where / when / why。</td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: "nonfinite",
    title: "非谓语",
    meta: "第四章：非谓语动词和从句是一回事；4.1 至 4.4",
    html: `
      <div class="review-card">
        <strong>本章核心</strong>
        <div class="formula"><span class="nonfinite">非谓语</span> = 动词含义 + 非谓语资格</div>
        <p><span class="nonfinite">非谓语</span>不是另一套孤立规则，而是把一个动作从“谓语位置”降级，让它进入句子中承担 <span class="noun">名词性</span>、<span class="adj">形容词性</span> 或 <span class="adv">副词性</span> 功能。</p>
      </div>
      <h4 class="table-title">非谓语判断流程</h4>
      <table>
        <thead><tr><th>步骤</th><th>问题</th><th>判断结果</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>句子真正的谓语动词是谁？</td><td>先锁定主干。</td></tr>
          <tr><td>2</td><td>还有没有其他动词形式？</td><td>有，就检查它是否是非谓语。</td></tr>
          <tr><td>3</td><td>它前面有没有连词，是否构成从句？</td><td>有连词且有主谓结构，优先按从句分析。</td></tr>
          <tr><td>4</td><td>它整体在句中做什么功能？</td><td><span class="noun">名词性</span> / <span class="adj">形容词性</span> / <span class="adv">副词性</span> / 补语。</td></tr>
          <tr><td>5</td><td>它和被修饰对象是什么关系？</td><td>主动用 doing，被动或完成常用 done，目的或将来常用 to do。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">非谓语总览表</h4>
      <table>
        <thead><tr><th>形式</th><th>核心感觉</th><th>常见功能</th><th>代表例句</th></tr></thead>
        <tbody>
          <tr><td><span class="nonfinite">to do</span></td><td>目的、将来、倾向、具体动作</td><td><span class="noun">名词性</span>、<span class="adj">形容词性</span>、<span class="adv">副词性</span>、补语</td><td>待补充截图例句</td></tr>
          <tr><td><span class="nonfinite">doing</span> 动名词</td><td>动作名词化、习惯、经验、已知事实</td><td><span class="noun">名词性</span></td><td>待补充截图例句</td></tr>
          <tr><td><span class="nonfinite">doing</span> 现在分词</td><td>主动、进行</td><td><span class="adj">形容词性</span>、<span class="adv">副词性</span>、补语</td><td>待补充截图例句</td></tr>
          <tr><td><span class="nonfinite">done</span> 过去分词</td><td>被动、完成</td><td><span class="adj">形容词性</span>、<span class="adv">副词性</span>、补语</td><td>待补充截图例句</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">4.1 不定式 to do 功能表</h4>
      <table>
        <thead><tr><th>功能</th><th>代表例句</th><th>分析</th></tr></thead>
        <tbody>
          <tr><td><span class="noun">主语</span></td><td>待补充截图例句</td><td>to do 整体可以作主语。</td></tr>
          <tr><td><span class="noun">宾语</span></td><td>待补充截图例句</td><td>to do 可以作动词宾语。</td></tr>
          <tr><td><span class="adj">定语</span></td><td>待补充截图例句</td><td>to do 可以修饰名词，常表示“可读/要读”。</td></tr>
          <tr><td><span class="adv">状语</span></td><td>待补充截图例句</td><td>to do 可以说明目的、结果或原因等。</td></tr>
          <tr><td>宾语补语</td><td>待补充截图例句</td><td>to do 可以补充说明宾语要做的动作。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">4.2 动名词 doing 功能表</h4>
      <table>
        <thead><tr><th>功能</th><th>代表例句</th><th>分析</th></tr></thead>
        <tbody>
          <tr><td><span class="noun">主语</span></td><td>待补充截图例句</td><td>doing 整体可以作主语。</td></tr>
          <tr><td><span class="noun">宾语</span></td><td>待补充截图例句</td><td>doing 可以作动词宾语。</td></tr>
          <tr><td><span class="noun">表语 / 主语补语</span></td><td>待补充截图例句</td><td>doing 可以说明主语的具体内容。</td></tr>
          <tr><td><span class="noun">介词宾语</span></td><td>待补充截图例句</td><td>介词后接动词时通常用 doing。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">to do vs doing 易混表</h4>
      <table>
        <thead><tr><th>对比</th><th>to do</th><th>doing</th><th>核心差别</th></tr></thead>
        <tbody>
          <tr><td>remember</td><td>记得要去做</td><td>记得做过</td><td>具体例句待补充截图来源。</td></tr>
          <tr><td>forget</td><td>忘记要做</td><td>忘记做过</td><td>具体例句待补充截图来源。</td></tr>
          <tr><td>stop</td><td>停下来去做另一件事</td><td>停止正在做的事</td><td>具体例句待补充截图来源。</td></tr>
          <tr><td>try</td><td>努力尝试完成</td><td>试一种方法</td><td>具体例句待补充截图来源。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">4.3 分词功能表</h4>
      <table>
        <thead><tr><th>形式</th><th>核心关系</th><th>常见功能</th><th>代表例句</th><th>分析</th></tr></thead>
        <tbody>
          <tr><td><span class="nonfinite">doing</span> 现在分词</td><td>主动、进行</td><td><span class="adj">定语</span></td><td>待补充截图例句</td><td>doing 可以修饰名词。</td></tr>
          <tr><td><span class="nonfinite">doing</span> 现在分词</td><td>主动、进行</td><td><span class="adv">状语</span></td><td>待补充截图例句</td><td>doing 可以作状语，说明背景、伴随等。</td></tr>
          <tr><td><span class="nonfinite">done</span> 过去分词</td><td>被动、完成</td><td><span class="adj">定语</span></td><td>待补充截图例句</td><td>done 可以修饰名词。</td></tr>
          <tr><td><span class="nonfinite">done</span> 过去分词</td><td>被动、完成</td><td><span class="adv">状语</span></td><td>待补充截图例句</td><td>done 可以作状语，重点看被动或完成关系。</td></tr>
          <tr><td><span class="nonfinite">doing / done</span></td><td>主动或被动</td><td>补语</td><td>待补充截图例句</td><td>doing / done 可以补充说明主语或宾语。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">分词作状语的连接词处理表</h4>
      <table>
        <thead><tr><th>原从句关系</th><th>常见连接词</th><th>压缩示例</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td>时间</td><td>when, while, after, before</td><td>待补充截图例句</td><td>主语一致时可压缩，连接词可省略。</td></tr>
          <tr><td>条件</td><td>if, unless</td><td>待补充截图例句</td><td>连接词可保留，提示条件关系。</td></tr>
          <tr><td>让步</td><td>although, though</td><td>待补充截图例句</td><td>可保留连接词，提示让步关系。</td></tr>
          <tr><td>原因</td><td>because, since, as</td><td>待补充截图例句</td><td>连接词常省略，靠语义判断原因。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">4.4 从句和非谓语转换表</h4>
      <table>
        <thead><tr><th>原从句</th><th>非谓语压缩</th><th>功能</th><th>分析</th></tr></thead>
        <tbody>
          <tr><td>待补充截图例句</td><td>待补充截图例句</td><td><span class="adj">形容词性 / 定语</span></td><td>从句压缩后仍修饰名词。</td></tr>
          <tr><td>待补充截图例句</td><td>待补充截图例句</td><td><span class="adv">副词性 / 状语</span></td><td>从句压缩后仍说明时间、原因、条件或伴随等。</td></tr>
          <tr><td>待补充截图例句</td><td>待补充截图例句</td><td><span class="noun">名词性</span></td><td>动作名词化后可以进入名词位置。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">一页记忆卡</h4>
      <table>
        <thead><tr><th>口诀</th><th>含义</th></tr></thead>
        <tbody>
          <tr><td>先找谓语，再看剩下的动词</td><td>真正谓语确定后，其他动词形式多半要按从句或非谓语处理。</td></tr>
          <tr><td>有连词、有主谓，优先看从句</td><td>有连接词并带完整主谓结构时，先按从句判断。</td></tr>
          <tr><td>没有谓语资格，就是非谓语</td><td>to do / doing / done 都不能单独做核心谓语。</td></tr>
          <tr><td>to do 多带目的和将来</td><td>不定式常有目的、将来、倾向、具体动作的感觉。</td></tr>
          <tr><td>doing 要分动名词和现在分词</td><td>动名词偏名词性；现在分词偏主动、进行。</td></tr>
          <tr><td>done 看被动和完成</td><td>过去分词重点看被动或完成关系。</td></tr>
          <tr><td>非谓语和从句互相照镜子</td><td>看不懂非谓语时，尝试还原成从句。</td></tr>
        </tbody>
      </table>
    `
  },
  {
    id: "full-summary",
    title: "完整讲义索引",
    meta: "源文件：source/full-summary.md",
    html: `
      <div class="review-card">
        <strong>本章核心</strong>
        <p>完整的《Larry_英语语法体系_全系列语法总结》已经纳入项目源文件，适合作为长期维护版本。</p>
      </div>
      <h4 class="table-title">项目源文件维护表</h4>
      <table>
        <thead><tr><th>文件</th><th>用途</th><th>维护方式</th></tr></thead>
        <tbody>
          <tr><td>source/full-summary.md</td><td>完整讲义主文本</td><td>后续新增笔记、例句、截图信息时优先补充这里。</td></tr>
          <tr><td>source/simple-sentence.md</td><td>简单句专题</td><td>按句型、例句、分析扩展。</td></tr>
          <tr><td>source/preposition.md</td><td>介词专题</td><td>按功能分类和例句扩展。</td></tr>
          <tr><td>source/clause.md</td><td>从句源文件索引</td><td>保留从句章节拆分后的文件入口。</td></tr>
          <tr><td>source/clause-overview.md</td><td>从句总览</td><td>对应网页“从句总览”：核心公式、三问法、疑问词词性、类型总览。</td></tr>
          <tr><td>source/noun-clause.md</td><td>名词性从句</td><td>对应网页“名词性从句”：主语、宾语、表语、同位语从句等。</td></tr>
          <tr><td>source/adjective-clause.md</td><td>形容词性从句</td><td>对应网页“形容词性从句”：定语从句、关系词、限制性与非限制性。</td></tr>
          <tr><td>source/adverbial-clause.md</td><td>副词性从句</td><td>对应网页“副词性从句”：状语从句连接词和逻辑关系。</td></tr>
          <tr><td>source/clause-confusions.md</td><td>从句易混对比</td><td>对应网页“从句易混对比”：易混点、复习总表和一页记忆卡。</td></tr>
          <tr><td>source/nonfinite.md</td><td>非谓语专题</td><td>按 to do、doing、done 与从句转换扩展。</td></tr>
        </tbody>
      </table>
    `
  }
];

function splitClauseSections(baseSections) {
  return baseSections.flatMap(section => {
    if (section.id !== "clause") {
      return [section];
    }

    const parts = [
      {
        id: "clause-overview",
        title: "从句总览",
        meta: "第三章入口：连接方式、三问法、从句类型总览",
        start: 0,
        endMarker: '<h4 class="table-title">3.2-3.3 名词性从句复习入口</h4>'
      },
      {
        id: "noun-clause",
        title: "名词性从句",
        meta: "3.2-3.3：主语、宾语、表语、同位语从句",
        startMarker: '<h4 class="table-title">3.2-3.3 名词性从句复习入口</h4>',
        endMarker: '<h4 class="table-title">3.4 形容词性从句 / 定语从句复习入口</h4>'
      },
      {
        id: "adjective-clause",
        title: "形容词性从句",
        meta: "3.4-3.6：关系代词、关系副词、限制性与非限制性",
        startMarker: '<h4 class="table-title">3.4 形容词性从句 / 定语从句复习入口</h4>',
        endMarker: '<h4 class="table-title">3.7 状语从句连接词表</h4>'
      },
      {
        id: "adverbial-clause",
        title: "副词性从句",
        meta: "3.7：时间、原因、条件、让步、目的、结果等状语从句",
        startMarker: '<h4 class="table-title">3.7 状语从句连接词表</h4>',
        endMarker: '<h4 class="table-title">从句易混对比表</h4>'
      },
      {
        id: "clause-confusions",
        title: "从句易混对比",
        meta: "that / what、whether / if、同位语从句 / 定语从句、which / where",
        startMarker: '<h4 class="table-title">从句易混对比表</h4>'
      }
    ];

    const markerIndex = marker => marker ? section.html.indexOf(marker) : section.html.length;
    const canSplit = parts.every(part => part.start === 0 || markerIndex(part.startMarker) >= 0)
      && parts.every(part => !part.endMarker || markerIndex(part.endMarker) >= 0);

    if (!canSplit) {
      return [section];
    }

    return parts.map(part => {
      const start = part.start === 0 ? 0 : markerIndex(part.startMarker);
      const end = part.endMarker ? markerIndex(part.endMarker) : section.html.length;
      return {
        id: part.id,
        title: part.title,
        meta: part.meta,
        html: section.html.slice(start, end).trim()
      };
    });
  });
}

const displaySections = splitClauseSections(sections);

const nav = document.querySelector("#nav");
const content = document.querySelector("#content");
const search = document.querySelector("#search");

function sectionNumber(section) {
  return displaySections.findIndex(item => item.id === section.id) + 1;
}

function getSubsections(section) {
  const matches = [...section.html.matchAll(/<h4 class="table-title">([\s\S]*?)<\/h4>/g)];
  return matches.map((match, index) => ({
    id: `${section.id}-${index + 1}`,
    number: `${sectionNumber(section)}.${index + 1}`,
    title: match[1].replace(/<[^>]+>/g, "").trim()
  }));
}

function addNumberedSubsections(section) {
  let count = 0;
  return section.html.replace(/<h4 class="table-title">([\s\S]*?)<\/h4>/g, (_, title) => {
    count += 1;
    const number = `${sectionNumber(section)}.${count}`;
    const id = `${section.id}-${count}`;
    return `<h4 class="table-title" id="${id}"><span class="section-number">${number}</span>${title}</h4>`;
  });
}

function renderNav(list) {
  nav.innerHTML = list.map(section => {
    const number = sectionNumber(section);
    const subsections = getSubsections(section);
    const subnav = subsections.length
      ? `<div class="nav-sublist">${subsections.map(subsection => `
          <a class="nav-subitem" href="#${subsection.id}">
            <span>${subsection.number}</span>
            <em>${subsection.title}</em>
          </a>
        `).join("")}</div>`
      : "";

    return `
      <div class="nav-group">
        <a class="nav-section" href="#${section.id}">
          <span>${number}</span>
          <strong>${section.title}</strong>
        </a>
        ${subnav}
      </div>
    `;
  }).join("");
}

function render(list, query = "") {
  renderNav(list);
  if (!list.length) {
    content.innerHTML = `<div class="empty">没有找到匹配内容。</div>`;
    return;
  }

  content.innerHTML = list.map(section => {
    const sectionNo = sectionNumber(section);
    const rawHtml = addNumberedSubsections(section);
    const html = query ? highlight(rawHtml, query) : rawHtml;
    return `
      <article class="card" id="${section.id}">
        <h3><span class="chapter-number">${sectionNo}</span>${section.title}</h3>
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
    render(displaySections);
    return;
  }
  const result = displaySections.filter(section => {
    const text = `${section.title} ${section.meta} ${section.html}`.replace(/<[^>]+>/g, "");
    return text.toLowerCase().includes(q.toLowerCase());
  });
  render(result, q);
});

render(displaySections);
