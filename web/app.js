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
        <p>简单句先找<span class="neutral">谓语动词</span>，再抓<span class="noun">主谓宾</span>主干；<span class="adj">定语</span>和<span class="adv">状语</span>多为可删除的修饰扩展，<span class="neutral">补语</span>用来补充说明主语或宾语。补语不是装饰，补语没了，句子意思往往彻底崩塌。记忆顺序：<strong>主谓宾定状补</strong>。</p>
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
          <tr><td><span class="neutral">补语</span></td><td>Complement</td><td>补足主语或宾语的状态、身份、结果；常是 <span class="noun">名词属性</span> 或 <span class="adj">形容词属性</span>，删掉会让句义不完整。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">补语判断表</h4>
      <p><span class="neutral">补语</span>（Complement）是传统教学的深水区。Larry 的底层逻辑是：补语不是装饰，补语没了，句子意思会彻底崩塌。核心检验技术：把“被补充说明的对象 + 后面的成分”改写成 <strong>[A is B]</strong>。如果语义自洽，后面的成分就是补语；如果语义崩塌，它通常是在修饰动作本身，也就是 <span class="adv">状语</span>。传统“主系表”里的 <span class="adj">表语</span>，在这里归入 <span class="adj">主语补语</span>。</p>
      <table>
        <thead><tr><th>判断对象</th><th>代表例句</th><th>小分句验证</th><th>结论</th></tr></thead>
        <tbody>
          <tr><td>宾语补语</td><td>I found <span class="noun">the room</span> <span class="adj">dirty</span>.</td><td><span class="noun">The room</span> is <span class="adj">dirty</span>.</td><td><span class="adj">dirty</span> 补充说明宾语 <span class="noun">the room</span> 的状态。</td></tr>
          <tr><td>宾语补语</td><td>You make <span class="noun">me</span> <span class="adj">happy</span>.</td><td>I am <span class="adj">happy</span>.</td><td><span class="adj">happy</span> 补充说明宾语 <span class="noun">me</span> 的状态。</td></tr>
          <tr><td>状语</td><td>I washed <span class="noun">the clothes</span> <span class="adv">warmly</span>.</td><td><span class="noun">The clothes</span> are <span class="adv">warmly</span>.</td><td>语义不成立；<span class="adv">warmly</span> 修饰 washed 这个动作。</td></tr>
          <tr><td>主语补语</td><td><span class="noun">He</span> died <span class="noun">a hero</span>.</td><td>He was <span class="noun">a hero</span>.</td><td><span class="noun">a hero</span> 补充说明主语 He 在 died 时的身份。</td></tr>
          <tr><td>主语补语</td><td><span class="noun">He</span> came back <span class="adj">safe</span>.</td><td>He was <span class="adj">safe</span>.</td><td><span class="adj">safe</span> 补充说明主语 He 回来时的状态。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">主语补语 vs 副词状语辨析表</h4>
      <p><strong>语法正确不等于语义正确。</strong> <span class="adj">形容词</span>作主语补语时，说明主语处在什么状态；<span class="adv">副词</span>作状语时，修饰动作如何发生。不要只看形容词或副词形式，先看它能不能和主语/宾语构成语义自洽的小分句。</p>
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
          <tr><td>SVP<br><small>主系表</small></td><td><span class="noun">主语</span> + 系动词 + <span class="adj">表语</span></td><td><span class="noun">Sally</span> is <span class="adj">beautiful</span>.</td><td>表语就是主语补语，用来补充说明主语；删掉后句义不完整。</td></tr>
          <tr><td>SVO<br><small>主谓宾</small></td><td><span class="noun">主语</span> + 及物谓语动词 + <span class="noun">宾语</span></td><td><span class="noun">Cats</span> love <span class="noun">fish</span>.</td><td>及物动词需要宾语承接动作，fish 是 love 的对象。</td></tr>
          <tr><td>SVOO<br><small>主谓双宾</small></td><td><span class="noun">主语</span> + 谓语动词 + <span class="noun">间接宾语</span> + <span class="noun">直接宾语</span></td><td><span class="noun">He</span> gave <span class="noun">me</span> <span class="noun">a gift</span>.</td><td>间接宾语通常是人，直接宾语通常是物；常可改写为介词 to / for 结构。</td></tr>
          <tr><td>SVOC<br><small>主谓宾补</small></td><td><span class="noun">主语</span> + 谓语动词 + <span class="noun">宾语</span> + 补语</td><td><span class="noun">I</span> found <span class="noun">the room</span> <span class="adj">dirty</span>.</td><td><span class="adj">dirty</span> 补充说明 <span class="noun">the room</span>，可理解为 [the room is dirty]。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">SVOO 和 SVOC 区分表</h4>
      <p>SVOO 和 SVOC 的区分很重要：前者是两个宾语，后者是宾语后面跟一个补充说明宾语的成分。</p>
      <table>
        <thead><tr><th>结构</th><th>判断方法</th><th>代表例句</th><th>改写 / 检验</th></tr></thead>
        <tbody>
          <tr><td>SVOO<br><small>主谓双宾</small></td><td>谓语后面是“人 + 物”；直接宾语通常是物，间接宾语通常是人。</td><td>I gave <span class="noun">him</span> <span class="noun">a book</span>.<br>Sally bought <span class="noun">me</span> <span class="noun">a gift</span>.</td><td>I gave <span class="noun">a book</span> to <span class="noun">him</span>.<br>Sally bought <span class="noun">a gift</span> for <span class="noun">me</span>.</td></tr>
          <tr><td>SVOC<br><small>主谓宾补</small></td><td>宾语后面的成分补充说明宾语；宾语和宾补之间能形成 [A is B] 的关系。</td><td>I found <span class="noun">the room</span> <span class="adj">dirty</span>.</td><td>可理解为 [the room is dirty]，所以 dirty 是宾语补语，不是第二个宾语，也不是状语。</td></tr>
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
      <h4 class="table-title">从句理解入口：本质、降级、功能</h4>
      <div class="review-card">
        <strong>本章核心</strong>
        <div class="formula"><span class="neutral">从句</span> = <span class="neutral">连接词</span> + 简单句</div>
        <p>从句不是更高级的句子，而是把一个简单句降级后，放进另一个句子里承担某种功能。先看它整体是 <span class="noun">名词性</span>、<span class="adj">形容词性</span>，还是 <span class="adv">副词性</span>。</p>
        <ul class="compact-list">
          <li>从句的本质：完整句子被连接词降级，进入另一个句子当成分。</li>
          <li>判断从句类型，不是看名字，而是看整个从句在主句中做什么功能。</li>
          <li>后续各类从句的总领性描述都先放入口小节；类型主表只放具体类型。</li>
        </ul>
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
        <thead><tr><th>从句类型</th><th>整体功能</th><th>代表例句</th><th>判断问题</th></tr></thead>
        <tbody>
          <tr><td><span class="noun">名词性从句</span></td><td>整个从句当名词用</td><td><span class="noun">What she said about the incident</span> surprised everyone.</td><td>是否占主语、宾语、表语、同位语位置？</td></tr>
          <tr><td><span class="adj">形容词性从句 / 定语从句</span></td><td>整个从句修饰名词</td><td>Sally is a <span class="noun">teacher</span> <span class="adj">who is warm-hearted, hardworking, and quick in learning</span>.</td><td>是否跟在名词后说明这个名词？</td></tr>
          <tr><td><span class="adv">副词性从句 / 状语从句</span></td><td>完整句子降级为副词性成分，修饰动作、状态或主句</td><td>I was only a little kid <span class="adv">when I met Sally</span>.</td><td>是否说明时间、原因、条件、让步、目的等逻辑关系？</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">3.2-3.3 名词性从句复习入口</h4>
      <div class="review-card noun-review">
        <strong>本节核心</strong>
        <p><span class="noun">名词性从句</span>的本质，是用一个句子替代简单句中的<span class="noun">名词短语</span>。学习时先把从句内部当作简单句分析，再看整个从句占据主句里的主语、宾语、表语或同位语位置。</p>
        <ul class="compact-list">
          <li>名词性从句 = 用句子代替简单句中的名词短语。</li>
          <li>从句内部仍然要找主谓宾定状补。</li>
          <li>独立句变从句：先调成陈述语序，再加连接词，最后放进主句的名词位置。</li>
          <li>主页面只保留一个代表例句，多个例句放进“查看例句库”。</li>
        </ul>
        <table>
          <thead><tr><th>简单句中的名词位置</th><th>换成从句后的功能</th><th>从句类型</th></tr></thead>
          <tbody>
            <tr><td>主语</td><td>整个从句放在主语位置。</td><td>主语从句</td></tr>
            <tr><td>宾语</td><td>整个从句放在动词或介词后。</td><td>宾语从句</td></tr>
            <tr><td>表语 / 主语补语</td><td>整个从句放在系动词后，说明主语内容。</td><td>表语从句</td></tr>
            <tr><td>同位语</td><td>整个从句解释前面抽象名词的内容。</td><td>同位语从句</td></tr>
          </tbody>
        </table>
        <table>
          <thead><tr><th>独立句类型</th><th>变成从句时的连接词</th><th>代表例句</th></tr></thead>
          <tbody>
            <tr><td>陈述句</td><td>that</td><td><span class="noun">That Sally is beautiful</span> is true.</td></tr>
            <tr><td>一般疑问句</td><td>whether / if</td><td><span class="noun">Whether Sally is beautiful</span> doesn't matter.</td></tr>
            <tr><td>特殊疑问句</td><td>原来的疑问词</td><td>I don't know <span class="noun">what your name is</span>.</td></tr>
          </tbody>
        </table>
        <details class="example-toggle">
          <summary>查看本质分析和独立句变从句</summary>
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
            <p>What's your name? → I don't know <span class="noun">what your name is</span>. <small>特殊疑问句进入从句后，用陈述语序。</small></p>
            <p>Why are you laughing? → I don't know <span class="noun">why you are laughing</span>. <small>why 保留在从句句首。</small></p>
            <p>Where does Sally live? → I don't know <span class="noun">where Sally lives</span>. <small>去掉 does，谓语回到 lives。</small></p>
            <p>What happened yesterday? → I don't know <span class="noun">what happened yesterday</span>. <small>what 本身作主语，语序不变。</small></p>
          </div>
        </details>
      </div>
      <h4 class="table-title">3.2-3.3 名词性从句类型主表：一个类型 + 一个代表例句</h4>
      <table class="study-table">
        <thead><tr><th>从句类型</th><th>核心规则</th><th>代表例句</th><th>例句库</th></tr></thead>
        <tbody>
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
        </tbody>
      </table>
      <h4 class="table-title">名词性从句规则补充：语序、形式主宾、连接词</h4>
      <table class="study-table">
        <thead><tr><th>规则主题</th><th>核心规则</th><th>代表例句</th><th>例句库</th></tr></thead>
        <tbody>
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
          <li>关系词重复指代前面的先行词，并把简单句降级成修饰名词的从句。</li>
          <li>先掌握简单句五种基本句型，这是分析从句内部的基础。</li>
          <li>学习定语从句，不等于只学习关系词；从句内部的语法分析才是重点。</li>
          <li>主页面只保留一个代表例句，多个例句放进“查看例句库”。</li>
        </ul>
        <ol class="steps-list">
          <li><b>找先行词</b><span>先看从句修饰前面的哪个名词。</span></li>
          <li><b>代回从句</b><span>把先行词放回从句原本缺的位置。</span></li>
          <li><b>判断成分</b><span>看它在从句里作主语、宾语、定语，还是状语。</span></li>
          <li><b>选择关系词</b><span>缺名词性成分用 who / which / that；缺状语用 where / when / why。</span></li>
        </ol>
        <details class="example-toggle">
          <summary>查看关系词连接对比</summary>
          <div class="example-library">
            <p><b>错误硬拼：</b>Sally is a teacher Sally is warm-hearted, hardworking, and quick in learning.</p>
            <p><b>并列连接：</b>Sally is an actor, and Sally is warm-hearted, hardworking, and quick in learning.</p>
            <p><b>定语从句：</b>Sally is a <span class="noun">teacher</span> <span class="adj">who is warm-hearted, hardworking, and quick in learning</span>.<small>who 指代 teacher，并在从句中作主语。</small></p>
          </div>
        </details>
      </div>
      <h4 class="table-title">3.4 定语从句关系词类型主表：一个类型 + 一个代表例句</h4>
      <table class="study-table">
        <thead><tr><th>关系词类型</th><th>核心规则</th><th>代表例句</th><th>例句库</th></tr></thead>
        <tbody>
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
      <h4 class="table-title">3.7 副词性从句 / 状语从句复习入口</h4>
      <div class="review-card adv-review">
        <strong>本节核心</strong>
        <p><span class="adv">副词性从句 / 状语从句</span>的本质：一个包含完整主谓结构的句子，被连接词降级后，作为<span class="adv">副词性成分</span>进入主句，对主句动作、状态或整个主句进行修饰。学习重点是先知道它修饰的对象是什么，再看连接词。</p>
        <ul class="compact-list">
          <li>副词性从句不是凭连接词硬背出来的，而是从普通副词、副词短语、介词短语扩展出来的。</li>
          <li>学习顺序：先找修饰对象，再判断时间、原因、条件、让步、目的、结果、比较、方式等逻辑关系。</li>
          <li>真正重要的是体力活：在真实句子里反复判断“这个从句到底修饰谁”。</li>
          <li>从句放在句首时通常用逗号隔开；放在句尾时通常不用逗号隔开。</li>
          <li>类型主表只放状语从句类型，补充规则另放后续小节。</li>
        </ul>
      </div>
      <h4 class="table-title">副词性从句的本质对照</h4>
      <table>
        <thead><tr><th>普通副词性成分</th><th>扩展为副词性从句</th><th>修饰对象</th><th>本质判断</th></tr></thead>
        <tbody>
          <tr><td>Sally runs <span class="adv">really fast</span>.</td><td>Sally runs <span class="adv">as if she is flying</span>.</td><td>runs</td><td><span class="adv">as if she is flying</span> 带完整主谓结构，整体修饰 runs 的方式。</td></tr>
          <tr><td>Michael never gets up early <span class="adv">on Sundays</span>.</td><td>Michael never gets up early <span class="adv">when he doesn't go to school on Sundays</span>.</td><td>gets up early</td><td><span class="adv">when...</span> 从句整体说明 gets up early 的时间条件。</td></tr>
          <tr><td>Sally was happy <span class="adv">in Beijing</span>.</td><td>Sally was happy <span class="adv">when she could play with her friends in Beijing</span>.</td><td>happy / was happy</td><td><span class="adv">when...</span> 从句整体说明 happy 这个状态出现的时间背景。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">副词性从句修饰对象判断表</h4>
      <table>
        <thead><tr><th>修饰对象</th><th>常见问题</th><th>例句</th><th>判断</th></tr></thead>
        <tbody>
          <tr><td>谓语动词 / 动作</td><td>动作怎样发生？什么时候发生？为什么发生？</td><td>Sally runs <span class="adv">as if she is flying</span>.</td><td><span class="adv">as if...</span> 修饰 runs，说明跑的方式。</td></tr>
          <tr><td>谓语动词短语</td><td>动作短语在什么时间、条件下成立？</td><td>Michael never gets up early <span class="adv">when he doesn't go to school on Sundays</span>.</td><td><span class="adv">when...</span> 修饰 gets up early，说明动作习惯发生的时间条件。</td></tr>
          <tr><td>表语形容词 / 状态</td><td>这个状态在什么背景下成立？</td><td>Sally was happy <span class="adv">when she could play with her friends in Beijing</span>.</td><td><span class="adv">when...</span> 修饰 happy / was happy，说明状态出现的时间背景。</td></tr>
          <tr><td>整个主句</td><td>整个判断在什么条件、让步、原因下成立？</td><td><span class="adv">If it rains</span>, take an umbrella.</td><td><span class="adv">If...</span> 修饰整个主句，给出主句成立的条件。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">3.7 状语从句类型主表</h4>
      <table>
        <thead><tr><th>类型</th><th>常见连接词</th><th>代表例句</th><th>记忆问题</th></tr></thead>
        <tbody>
          <tr><td>时间</td><td>when, while, before, after, until, as soon as</td><td>I worked hard <span class="adv">when I was at school</span>.</td><td>什么时候发生？</td></tr>
          <tr><td>原因</td><td>because, since, as</td><td>I ate many bananas <span class="adv">because I was hungry</span>.</td><td>为什么发生？</td></tr>
          <tr><td>条件</td><td>if, unless, provided that, as long as</td><td>Take an umbrella <span class="adv">if it rains</span>.</td><td>在什么条件下发生？</td></tr>
          <tr><td>让步</td><td>although, though, even if, even though</td><td>although / though / even if 表达“让一步也成立”。</td><td>虽然怎样，仍然怎样？</td></tr>
          <tr><td>目的</td><td>so that, in order that</td><td>I spoke slowly <span class="adv">so that the students could understand me better</span>.</td><td>为了什么？</td></tr>
          <tr><td>结果</td><td>so...that, such...that</td><td>Sally runs <span class="adv">so fast that nobody can beat her</span>.</td><td>结果怎样？</td></tr>
          <tr><td>比较</td><td>than, as...as</td><td>This work is <span class="adv">not as difficult as you think</span>.</td><td>和谁比？怎么比？</td></tr>
          <tr><td>方式</td><td>as, as if, as though</td><td>Sally runs <span class="adv">as if she is flying</span>.</td><td>以什么方式？</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">时间状语从句核心判断</h4>
      <table>
        <thead><tr><th>连接词</th><th>核心感觉</th><th>代表例句</th><th>判断重点</th></tr></thead>
        <tbody>
          <tr><td>when / whenever</td><td>时间点或时间段</td><td>I worked hard <span class="adv">when I was at school</span>.<br>He became surprised <span class="adv">when he saw me</span>.</td><td>when 最宽，可以表示一段时间，也可以表示一个触发点。</td></tr>
          <tr><td>while</td><td>时间段</td><td>Sally telephoned me <span class="adv">while I was doing my homework</span>.</td><td>while 强调持续背景；不适合 suddenly someone stopped me 这种突然时间点。</td></tr>
          <tr><td>as</td><td>随着 / 正当 / 一边……一边</td><td>You grow smarter <span class="adv">as you grow older</span>.</td><td>as 强调两个过程同步推进，比 when / while 更适合“随着”。</td></tr>
          <tr><td>before</td><td>在……之前</td><td>I handed in my homework <span class="adv">before I was asked to</span>.</td><td>主句动作早于从句动作。</td></tr>
          <tr><td>after</td><td>在……之后</td><td>I arrived <span class="adv">after he had left</span>.</td><td>主句动作晚于从句动作；had left 表示更早。</td></tr>
          <tr><td>since</td><td>自从……以来</td><td>Sally and I haven't met each other <span class="adv">since I became a middle school student</span>.</td><td>强调从过去时间点延续到现在或某参照点。</td></tr>
          <tr><td>until</td><td>一直持续到……</td><td>He was waiting for me at my home <span class="adv">until I came back</span>.</td><td>主句保持某种状态，直到从句给出的时间点。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">when / while / as 易混对比</h4>
      <table>
        <thead><tr><th>对比</th><th>自然表达</th><th>不推荐 / 不自然</th><th>判断</th></tr></thead>
        <tbody>
          <tr><td>时间段背景</td><td>Sally telephoned me <span class="adv">while I was doing my homework</span>.<br>Sally telephoned me <span class="adv">when I was doing my homework</span>.</td><td></td><td>从句是持续时间段时，while 和 when 都可用。</td></tr>
          <tr><td>突然时间点</td><td>I was walking on the road <span class="adv">when suddenly someone stopped me</span>.</td><td>I was walking on the road <span class="adv">while suddenly someone stopped me</span>.</td><td>when 可引出突然发生的时间点；while 不适合。</td></tr>
          <tr><td>同步变化</td><td>You grow smarter <span class="adv">as you grow older</span>.</td><td>You grow smarter <span class="adv">while you grow older</span>.</td><td>as 表示“随着”，两个变化同步推进。</td></tr>
          <tr><td>社会变化</td><td><span class="adv">As China becomes richer</span>, Chinese people spend more.</td><td><span class="adv">While China becomes richer</span>, Chinese people spend more.</td><td>as 表示趋势同步；while 更像时间段背景或对比。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">until / not until 判断表</h4>
      <table>
        <thead><tr><th>结构</th><th>例句</th><th>判断</th></tr></thead>
        <tbody>
          <tr><td>持续性动词肯定式 + until</td><td>He was waiting for me at my home <span class="adv">until I came back</span>.</td><td>waiting 持续到 I came back。</td></tr>
          <tr><td>短暂性动词否定式 + until</td><td>He didn't leave <span class="adv">until I came back</span>.</td><td>leave 是短暂动作，否定式表示“直到我回来才离开”。</td></tr>
          <tr><td>Not until 句首倒装</td><td><span class="adv">Not until it stopped raining</span> did we go out.</td><td>Not until 放句首时，主句部分倒装。</td></tr>
          <tr><td>强调句</td><td>It was not <span class="adv">until it stopped raining</span> that we went out.</td><td>强调“直到雨停”这个时间点。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">其他状语从句速查</h4>
      <table>
        <thead><tr><th>类型</th><th>核心判断</th><th>代表例句</th><th>提醒</th></tr></thead>
        <tbody>
          <tr><td>地点</td><td>where 从句直接修饰动作或主句，前面没有地点先行词。</td><td>I plant trees <span class="adv">where there is a lot of sunshine</span>.</td><td>有地点先行词时，可能是定语从句。</td></tr>
          <tr><td>原因</td><td>because 直接说明原因；since / as 常给背景；for 常补充解释。</td><td>We didn't go to the party <span class="adv">because it was raining</span>.</td><td>because of 后接名词性成分，不是从句。</td></tr>
          <tr><td>目的</td><td>从句说明主句动作想达到的目标。</td><td>I spoke slowly <span class="adv">so that the students could understand me better</span>.</td><td>could / would / might 常提示目的。</td></tr>
          <tr><td>结果</td><td>so / such 表示程度，that 后说明造成的结果。</td><td>Sally runs <span class="adv">so fast that nobody can beat her</span>.</td><td>so 修饰形容词/副词；such 修饰名词短语。</td></tr>
          <tr><td>条件</td><td>从句给出主句成立条件。</td><td><span class="adv">Unless you work hard</span>, you won't succeed.</td><td>unless = if...not。</td></tr>
          <tr><td>让步</td><td>从句成立，主句仍然成立。</td><td><span class="adv">Although he tried hard</span>, he failed.</td><td>although / though 不要和 but 连用。</td></tr>
          <tr><td>比较</td><td>比较程度、相似或差异，常有省略。</td><td>This work is <span class="adv">not as difficult as you think</span>.</td><td>先补出省略，再看比较对象是否对齐。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">目的 / 结果 / 条件易混</h4>
      <table>
        <thead><tr><th>对比</th><th>例句</th><th>判断</th></tr></thead>
        <tbody>
          <tr><td>if vs in case</td><td>Take an umbrella <span class="adv">if it rains</span>.<br>Take an umbrella <span class="adv">in case it rains</span>.</td><td>if 是条件；in case 是提前预防，“以防万一”。</td></tr>
          <tr><td>目的 so that</td><td>I spoke slowly <span class="adv">so that the students could understand me better</span>.</td><td>could 表示想达到的目标。</td></tr>
          <tr><td>结果 so that</td><td>I spoke slowly <span class="adv">so that the students understood me better</span>.</td><td>understood 表示实际达成的结果。</td></tr>
          <tr><td>so...that</td><td>Sally is <span class="adv">so smart that she always tops our school</span>.</td><td>so 修饰 smart。</td></tr>
          <tr><td>such...that</td><td>Sally is <span class="adv">such a smart girl that she always tops our school</span>.</td><td>such 修饰 a smart girl。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">让步 / 比较重点结构</h4>
      <table>
        <thead><tr><th>结构</th><th>例句</th><th>判断</th></tr></thead>
        <tbody>
          <tr><td>however / no matter how</td><td><span class="adv">No matter how hard-working he was</span>, he still failed.<br><span class="adv">However hard-working he was</span>, he still failed.</td><td>无论多么努力，主句仍成立。</td></tr>
          <tr><td>as 让步倒装</td><td><span class="adv">Difficult as it is to believe</span>, there are fish that can live without water.</td><td>as 引导让步时，被强调部分前置。</td></tr>
          <tr><td>as...as 类比</td><td>Reading is to the mind <span class="adv">what/as exercise is to the body</span>.</td><td>阅读之于心智，犹如锻炼之于身体。</td></tr>
          <tr><td>no more / no less than</td><td>Sally is <span class="adv">no more hard-working than her sister</span>.<br>Sally is <span class="adv">no less hard-working than her sister</span>.</td><td>no more 偏“并不更……”，no less 偏“并不比……差”。</td></tr>
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
          <tr><td><span class="nonfinite">to do</span></td><td>目的、将来、倾向、具体动作</td><td><span class="noun">名词性</span>、<span class="adj">形容词性</span>、<span class="adv">副词性</span>、补语</td><td>I need a pen <span class="nonfinite">to write with</span>.</td></tr>
          <tr><td><span class="nonfinite">doing</span> 动名词</td><td>动作名词化、习惯、经验、已知事实</td><td><span class="noun">名词性</span></td><td><span class="nonfinite">Reading</span> is to the mind what exercise is to the body.</td></tr>
          <tr><td><span class="nonfinite">doing</span> 现在分词</td><td>主动、进行</td><td><span class="adj">形容词性</span>、<span class="adv">副词性</span>、补语</td><td>a <span class="nonfinite">sleeping</span> baby</td></tr>
          <tr><td><span class="nonfinite">done</span> 过去分词</td><td>被动、完成</td><td><span class="adj">形容词性</span>、<span class="adv">副词性</span>、补语</td><td>The book <span class="nonfinite">written by Larry</span> is useful.</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">非谓语的词性属性</h4>
      <table>
        <thead><tr><th>非谓语形式</th><th>是不是核心谓语？</th><th>句中属性</th><th>保留的动词味道</th></tr></thead>
        <tbody>
          <tr><td><span class="nonfinite">不定式</span></td><td>不是</td><td><span class="noun">名词性</span> / <span class="adj">形容词性</span> / <span class="adv">副词性</span></td><td>目的、将来、倾向、具体动作。</td></tr>
          <tr><td><span class="nonfinite">动名词</span></td><td>不是</td><td><span class="noun">名词性</span></td><td>把动作当成“事情”。</td></tr>
          <tr><td><span class="nonfinite">分词</span></td><td>不是</td><td><span class="adj">形容词性</span> / <span class="adv">副词性</span></td><td>主动/被动、进行/完成。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">4.1 不定式形式表</h4>
      <table>
        <thead><tr><th>时间 / 状态</th><th>主动</th><th>被动</th></tr></thead>
        <tbody>
          <tr><td>一般</td><td><span class="nonfinite">to write</span></td><td><span class="nonfinite">to be written</span></td></tr>
          <tr><td>进行</td><td><span class="nonfinite">to be writing</span></td><td>无常用形式</td></tr>
          <tr><td>完成</td><td><span class="nonfinite">to have written</span></td><td><span class="nonfinite">to have been written</span></td></tr>
          <tr><td>完成进行</td><td><span class="nonfinite">to have been writing</span></td><td>无常用形式</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">4.1 不定式 to do 功能表</h4>
      <table>
        <thead><tr><th>功能</th><th>代表例句</th><th>分析</th></tr></thead>
        <tbody>
          <tr><td><span class="noun">主语</span></td><td><span class="nonfinite">To make you understand me</span> is impossible.<br>It is impossible <span class="nonfinite">to make you understand me</span>.</td><td>to do 整体可以作主语；常用 it 作形式主语。</td></tr>
          <tr><td><span class="noun">宾语</span></td><td>Sally desires <span class="nonfinite">to be promoted</span>.</td><td>to do 可以作动词宾语。</td></tr>
          <tr><td><span class="noun">表语 / 主语补语</span></td><td>The problem is <span class="nonfinite">where to find a guide</span>.</td><td>to do 或疑问词 + to do 可以说明主语内容。</td></tr>
          <tr><td><span class="adj">定语</span></td><td>We expressed our desire <span class="nonfinite">to join their team</span>.</td><td>to do 后置修饰名词。</td></tr>
          <tr><td><span class="adv">状语</span></td><td><span class="nonfinite">To improve my English</span>, I went to America.</td><td>to do 可以说明目的、结果、原因、条件、方式、让步等。</td></tr>
          <tr><td>宾语补语</td><td>He asked me <span class="nonfinite">to smile</span>.</td><td>to do 可以补充说明宾语要做的动作。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">不定式句末中心与后置</h4>
      <table>
        <thead><tr><th>现象</th><th>推荐表达</th><th>判断</th></tr></thead>
        <tbody>
          <tr><td>形式主语</td><td>It is impossible <span class="nonfinite">to make you understand me</span>.</td><td>it 站在主语位置，真正主语放句末。</td></tr>
          <tr><td>形式宾语</td><td>She found it impossible <span class="nonfinite">to leave here</span>.</td><td>it 作形式宾语，impossible 作宾补。</td></tr>
          <tr><td>长定语后置</td><td>At the meeting a decision was made <span class="nonfinite">to transfer a part of the students to another school</span>.</td><td>不定式内容较长时，常把重心放到句末。</td></tr>
          <tr><td>宾补省略 to</td><td>He made me <span class="nonfinite">stay</span> for the night.<br>She watched Michael <span class="nonfinite">enter</span> the room.</td><td>使役、感官动词后可用动词原形，但仍不是核心谓语。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">不定式作状语类型</h4>
      <table>
        <thead><tr><th>状语类型</th><th>例句</th><th>判断</th></tr></thead>
        <tbody>
          <tr><td>目的</td><td><span class="nonfinite">To improve my English</span>, I went to America.</td><td>为了提高英语。</td></tr>
          <tr><td>结果</td><td>He went abroad <span class="nonfinite">never to return</span>.</td><td>结果再也没有回来。</td></tr>
          <tr><td>原因</td><td>She wept <span class="nonfinite">to hear the news</span>.</td><td>因为听到消息而哭。</td></tr>
          <tr><td>条件</td><td><span class="nonfinite">To hear him sing</span>, you might take him for a girl.</td><td>如果听他唱歌。</td></tr>
          <tr><td>方式</td><td>The old man walked slowly, hunched over, <span class="nonfinite">as if to carry the weight of the world on his shoulders</span>.</td><td>as if to do 表示“仿佛要……”。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">4.2 动名词 doing 功能表</h4>
      <table>
        <thead><tr><th>功能</th><th>代表例句</th><th>分析</th></tr></thead>
        <tbody>
          <tr><td><span class="noun">主语</span></td><td><span class="nonfinite">Reading</span> is to the mind what exercise is to the body.</td><td>doing 整体可以作主语。</td></tr>
          <tr><td><span class="noun">宾语</span></td><td>I enjoy <span class="nonfinite">reading</span>.</td><td>doing 可以作动词宾语。</td></tr>
          <tr><td><span class="noun">表语 / 主语补语</span></td><td>Her hobby is <span class="nonfinite">reading</span>.</td><td>doing 可以说明主语的具体内容。</td></tr>
          <tr><td><span class="noun">介词宾语</span></td><td>She has no expectation of <span class="nonfinite">winning</span>.</td><td>介词后接动词时通常用 doing。</td></tr>
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
          <tr><td><span class="nonfinite">doing</span> 现在分词</td><td>主动、进行</td><td><span class="adj">定语</span></td><td>a <span class="nonfinite">sleeping</span> baby</td><td>doing 可以修饰名词。</td></tr>
          <tr><td><span class="nonfinite">doing</span> 现在分词</td><td>主动、进行</td><td><span class="adv">状语</span></td><td><span class="nonfinite">Having seen the photo</span>, he went out.</td><td>doing 可以作状语，说明背景、伴随等。</td></tr>
          <tr><td><span class="nonfinite">done</span> 过去分词</td><td>被动、完成</td><td><span class="adj">定语</span></td><td>The book <span class="nonfinite">written by Larry</span> is useful.</td><td>done 可以修饰名词。</td></tr>
          <tr><td><span class="nonfinite">done</span> 过去分词</td><td>被动、完成</td><td><span class="adv">状语</span></td><td><span class="nonfinite">Asked to give a speech</span>, he felt nervous.</td><td>done 可以作状语，重点看被动或完成关系。</td></tr>
          <tr><td><span class="nonfinite">doing / done</span></td><td>主动或被动</td><td>补语</td><td>I heard Sally <span class="nonfinite">singing</span>.</td><td>doing / done 可以补充说明主语或宾语。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">分词作状语的连接词处理表</h4>
      <table>
        <thead><tr><th>原从句关系</th><th>常见连接词</th><th>压缩示例</th><th>说明</th></tr></thead>
        <tbody>
          <tr><td>时间</td><td>when, while, after, before</td><td>When <span class="nonfinite">reading</span>, do not talk.</td><td>主语一致时可压缩，连接词可省略。</td></tr>
          <tr><td>条件</td><td>if, unless</td><td>If <span class="nonfinite">given more time</span>, I can finish it.</td><td>连接词可保留，提示条件关系。</td></tr>
          <tr><td>让步</td><td>although, though</td><td>Although <span class="nonfinite">tired</span>, he kept working.</td><td>可保留连接词，提示让步关系。</td></tr>
          <tr><td>原因</td><td>because, since, as</td><td><span class="nonfinite">Being ill</span>, he stayed home.</td><td>连接词常省略，靠语义判断原因。</td></tr>
        </tbody>
      </table>
      <h4 class="table-title">4.4 从句和非谓语转换表</h4>
      <table>
        <thead><tr><th>原从句</th><th>非谓语压缩</th><th>功能</th><th>分析</th></tr></thead>
        <tbody>
          <tr><td>a dog that is running</td><td>a <span class="nonfinite">running</span> dog</td><td><span class="adj">形容词性 / 定语</span></td><td>从句压缩后仍修饰名词。</td></tr>
          <tr><td>When he was asked to give a speech, he felt nervous.</td><td><span class="nonfinite">Asked to give a speech</span>, he felt nervous.</td><td><span class="adv">副词性 / 状语</span></td><td>从句压缩后仍说明时间、原因、条件或伴随等。</td></tr>
          <tr><td>That he failed disappointed us.</td><td>His <span class="nonfinite">failing</span> disappointed us.</td><td><span class="noun">名词性</span></td><td>动作名词化后可以进入名词位置。</td></tr>
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
        endMarker: '<h4 class="table-title">3.7 副词性从句 / 状语从句复习入口</h4>'
      },
      {
        id: "adverbial-clause",
        title: "副词性从句",
        meta: "3.7：时间、原因、条件、让步、目的、结果等状语从句",
        startMarker: '<h4 class="table-title">3.7 副词性从句 / 状语从句复习入口</h4>',
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
const exampleSearch = document.querySelector("#exampleSearch");
const exampleFilters = document.querySelector("#exampleFilters");
const exampleResults = document.querySelector("#exampleResults");
const sentenceAnalyzer = document.querySelector("#sentenceAnalyzer");

const exampleTags = [
  { id: "all", label: "全部" },
  { id: "simple", label: "简单句" },
  { id: "noun-clause", label: "名词性从句" },
  { id: "adjective-clause", label: "定语从句" },
  { id: "adverbial-clause", label: "状语从句" },
  { id: "nonfinite", label: "非谓语" },
  { id: "preposition", label: "介词" },
  { id: "contrast", label: "易混对比" }
];

const exampleLibrary = [
  {
    id: "svoc-room-dirty",
    title: "SVOC：宾语补语检验",
    section: "简单句",
    tags: ["simple", "contrast"],
    level: "基础",
    sentence: "I found the room dirty.",
    translation: "我发现房间很脏。",
    core: "I found the room dirty",
    parts: [
      { text: "I", role: "noun", label: "主语" },
      { text: "found", role: "neutral", label: "谓语" },
      { text: "the room", role: "noun", label: "宾语" },
      { text: "dirty", role: "adj", label: "宾语补语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "先抓主干：I found the room dirty。",
      "把宾语和后面的词连起来：The room is dirty。",
      "小分句语义自洽，所以 dirty 是宾语补语，不是状语。"
    ]
  },
  {
    id: "svo-adverbial-washed-warmly",
    title: "状语：修饰动作本身",
    section: "简单句",
    tags: ["simple", "contrast"],
    level: "基础",
    sentence: "I washed the clothes warmly.",
    translation: "我热情地洗了这些衣服。",
    core: "I washed the clothes",
    parts: [
      { text: "I", role: "noun", label: "主语" },
      { text: "washed", role: "neutral", label: "谓语" },
      { text: "the clothes", role: "noun", label: "宾语" },
      { text: "warmly", role: "adv", label: "状语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "验证小分句：The clothes are warmly。",
      "这个小分句语义不成立，衣服不能处在 warmly 这种状态。",
      "warmly 修饰 washed 这个动作，所以它是状语，不是宾语补语。"
    ]
  },
  {
    id: "subject-complement-came-back-safe",
    title: "主语补语：动作时的状态",
    section: "简单句",
    tags: ["simple", "contrast"],
    level: "基础",
    sentence: "He came back safe.",
    translation: "他平安回来了。",
    core: "He came back safe",
    parts: [
      { text: "He", role: "noun", label: "主语" },
      { text: "came back", role: "neutral", label: "谓语" },
      { text: "safe", role: "adj", label: "主语补语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "safe 不是修饰 came back 的方式，而是说明 He 回来时的状态。",
      "验证小分句：He was safe。",
      "小分句语义自洽，所以 safe 是主语补语。"
    ]
  },
  {
    id: "svoo-gave-gift",
    title: "SVOO：双宾语",
    section: "简单句",
    tags: ["simple", "contrast"],
    level: "基础",
    sentence: "He gave me a gift.",
    translation: "他给了我一份礼物。",
    core: "He gave me a gift",
    parts: [
      { text: "He", role: "noun", label: "主语" },
      { text: "gave", role: "neutral", label: "谓语" },
      { text: "me", role: "noun", label: "间接宾语" },
      { text: "a gift", role: "noun", label: "直接宾语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "gave 后面接“人 + 物”。",
      "me 是接受者，a gift 是被给出的东西。",
      "可改写为 He gave a gift to me。"
    ]
  },
  {
    id: "preposition-on-what",
    title: "介词后接名词性从句",
    section: "介词",
    tags: ["preposition", "noun-clause"],
    level: "进阶",
    sentence: "It depends on what they do.",
    translation: "这取决于他们做什么。",
    core: "It depends on what they do",
    parts: [
      { text: "It", role: "noun", label: "主语" },
      { text: "depends", role: "neutral", label: "谓语" },
      { text: "on", role: "adv", label: "介词" },
      { text: "what they do", role: "noun", label: "介词宾语 / 名词性从句" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "on 后面需要名词性成分。",
      "what they do 整体作 on 的宾语。",
      "介词短语 on what they do 补足 depends 的对象。"
    ]
  },
  {
    id: "prep-book-on-shelf",
    title: "介词短语作定语",
    section: "介词",
    tags: ["preposition", "adjective-clause"],
    level: "基础",
    sentence: "The book on the shelf is great.",
    translation: "架子上的那本书很好。",
    core: "The book is great",
    parts: [
      { text: "The book", role: "noun", label: "主语" },
      { text: "on the shelf", role: "adj", label: "后置定语 / 介词短语" },
      { text: "is", role: "neutral", label: "系动词" },
      { text: "great", role: "adj", label: "主语补语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 The book is great。",
      "on the shelf 修饰 book，告诉我们是哪一本书。",
      "介词短语在这里承担形容词性功能。"
    ]
  },
  {
    id: "noun-clause-what-she-said",
    title: "what 引导宾语从句",
    section: "名词性从句",
    tags: ["noun-clause", "contrast"],
    level: "基础",
    sentence: "I know what she said.",
    translation: "我知道她说了什么。",
    core: "I know what she said",
    parts: [
      { text: "I", role: "noun", label: "主语" },
      { text: "know", role: "neutral", label: "谓语" },
      { text: "what she said", role: "noun", label: "宾语从句" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "know 后面需要宾语。",
      "what she said 整体作 know 的宾语。",
      "what 本身在从句里作 said 的宾语，所以不能随便换成 that。"
    ]
  },
  {
    id: "noun-clause-whether-subject",
    title: "whether 从句作主语",
    section: "名词性从句",
    tags: ["noun-clause", "contrast"],
    level: "进阶",
    sentence: "Whether he will come is unknown.",
    translation: "他是否会来还不知道。",
    core: "Whether he will come is unknown",
    parts: [
      { text: "Whether he will come", role: "noun", label: "主语从句" },
      { text: "is", role: "neutral", label: "系动词" },
      { text: "unknown", role: "adj", label: "主语补语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "Whether he will come 整体占据主语位置。",
      "unknown 补充说明这件事的状态。",
      "从句放在主语位置时，通常用 whether，不优先用 if。"
    ]
  },
  {
    id: "adj-clause-teacher-who",
    title: "who 引导定语从句",
    section: "定语从句",
    tags: ["adjective-clause"],
    level: "基础",
    sentence: "Sally is the teacher who teaches grammar.",
    translation: "Sally 是那个教语法的老师。",
    core: "Sally is the teacher",
    parts: [
      { text: "Sally", role: "noun", label: "主语" },
      { text: "is", role: "neutral", label: "系动词" },
      { text: "the teacher", role: "noun", label: "主语补语" },
      { text: "who teaches grammar", role: "adj", label: "定语从句" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 Sally is the teacher。",
      "who teaches grammar 修饰 teacher。",
      "who 在从句中作主语，指代先行词 teacher。"
    ]
  },
  {
    id: "adj-clause-grandmother-nonrestrictive",
    title: "非限制性定语从句",
    section: "定语从句",
    tags: ["adjective-clause", "contrast"],
    level: "进阶",
    sentence: "My grandmother, who is 70 years old, loves programming.",
    translation: "我的奶奶七十岁了，她喜欢编程。",
    core: "My grandmother loves programming",
    parts: [
      { text: "My grandmother", role: "noun", label: "主语" },
      { text: ", who is 70 years old,", role: "adj", label: "非限制性定语从句" },
      { text: "loves", role: "neutral", label: "谓语" },
      { text: "programming", role: "noun", label: "宾语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 My grandmother loves programming。",
      "who is 70 years old 是额外补充，不负责筛选是哪一个奶奶。",
      "专有或已经明确的人，常用非限制性补充信息。"
    ]
  },
  {
    id: "adv-clause-when-young",
    title: "时间状语从句",
    section: "状语从句",
    tags: ["adverbial-clause"],
    level: "基础",
    sentence: "When I was young, I loved reading.",
    translation: "我小的时候喜欢阅读。",
    core: "I loved reading",
    parts: [
      { text: "When I was young", role: "adv", label: "时间状语从句" },
      { text: ",", role: "plain" },
      { text: "I", role: "noun", label: "主语" },
      { text: "loved", role: "neutral", label: "谓语" },
      { text: "reading", role: "noun", label: "宾语 / 动名词" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 I loved reading。",
      "When I was young 说明 loved reading 发生的时间。",
      "状语从句承担副词性功能。"
    ]
  },
  {
    id: "nonfinite-purpose-to-learn",
    title: "to do 作目的状语",
    section: "非谓语",
    tags: ["nonfinite"],
    level: "基础",
    sentence: "To learn grammar clearly, we mark sentence functions.",
    translation: "为了清楚地学习语法，我们标注句子功能。",
    core: "We mark sentence functions",
    parts: [
      { text: "To learn grammar clearly", role: "nonfinite", label: "不定式短语" },
      { text: ",", role: "plain" },
      { text: "we", role: "noun", label: "主语" },
      { text: "mark", role: "neutral", label: "谓语" },
      { text: "sentence functions", role: "noun", label: "宾语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 we mark sentence functions。",
      "To learn grammar clearly 表示目的。",
      "to do 在这里是非谓语形式，承担副词性功能。"
    ]
  },
  {
    id: "nonfinite-arriving-after-for",
    title: "介词后接 doing",
    section: "非谓语",
    tags: ["nonfinite", "preposition"],
    level: "进阶",
    sentence: "She apologized for arriving late to the meeting.",
    translation: "她因为会议迟到而道歉。",
    core: "She apologized",
    parts: [
      { text: "She", role: "noun", label: "主语" },
      { text: "apologized", role: "neutral", label: "谓语" },
      { text: "for", role: "adv", label: "介词" },
      { text: "arriving late to the meeting", role: "nonfinite", label: "动名词短语 / 介词宾语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "for 是介词，后面需要名词性成分。",
      "arriving late to the meeting 是 doing 形式，整体作介词宾语。",
      "这里的 doing 更接近“迟到这件事”。"
    ]
  }
];

let activeExampleTag = "all";
let selectedExampleId = exampleLibrary[0]?.id || "";

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

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[char]);
}

function exampleSearchText(item) {
  return [
    item.title,
    item.section,
    item.level,
    item.sentence,
    item.translation,
    item.core,
    item.tags.join(" "),
    item.parts.map(part => `${part.text} ${part.label || ""}`).join(" "),
    item.analysis.join(" ")
  ].join(" ").toLowerCase();
}

function filteredExamples() {
  const query = (exampleSearch?.value || "").trim().toLowerCase();
  return exampleLibrary.filter(item => {
    const tagMatch = activeExampleTag === "all" || item.tags.includes(activeExampleTag);
    const queryMatch = !query || exampleSearchText(item).includes(query);
    return tagMatch && queryMatch;
  });
}

function renderExampleFilters() {
  if (!exampleFilters) {
    return;
  }

  exampleFilters.innerHTML = exampleTags.map(tag => `
    <button class="example-filter ${tag.id === activeExampleTag ? "active" : ""}" type="button" data-tag="${tag.id}">
      ${escapeHtml(tag.label)}
    </button>
  `).join("");
}

function renderSentenceParts(item) {
  return item.parts.map(part => {
    const roleClass = part.role && part.role !== "plain" ? ` ${part.role}` : "";
    const label = part.label ? `<small>${escapeHtml(part.label)}</small>` : "";
    return `<span class="sentence-part${roleClass}">${escapeHtml(part.text)}${label}</span>`;
  }).join("");
}

function renderSentenceAnalyzer(item) {
  if (!sentenceAnalyzer) {
    return;
  }

  if (!item) {
    sentenceAnalyzer.innerHTML = `
      <div class="empty">没有找到匹配例句。换一个标签或关键词试试。</div>
    `;
    return;
  }

  sentenceAnalyzer.innerHTML = `
    <div class="analyzer-meta">
      <span>${escapeHtml(item.section)}</span>
      <span>${escapeHtml(item.level)}</span>
    </div>
    <h3>${escapeHtml(item.title)}</h3>
    <p class="translation">${escapeHtml(item.translation)}</p>
    <div class="analyzed-sentence" aria-label="彩色拆句">
      ${renderSentenceParts(item)}
    </div>
    <div class="core-line">
      <b>主干</b>
      <span>${escapeHtml(item.core)}</span>
    </div>
    <ol class="analysis-list">
      ${item.analysis.map(point => `<li>${escapeHtml(point)}</li>`).join("")}
    </ol>
  `;
}

function renderExamples() {
  if (!exampleResults || !sentenceAnalyzer) {
    return;
  }

  const list = filteredExamples();
  if (list.length && !list.some(item => item.id === selectedExampleId)) {
    selectedExampleId = list[0].id;
  }

  if (!list.length) {
    exampleResults.innerHTML = `<div class="empty">没有找到匹配例句。</div>`;
    renderSentenceAnalyzer(null);
    return;
  }

  exampleResults.innerHTML = list.map(item => `
    <button class="example-result ${item.id === selectedExampleId ? "active" : ""}" type="button" data-example-id="${item.id}">
      <span>${escapeHtml(item.section)} · ${escapeHtml(item.level)}</span>
      <strong>${escapeHtml(item.sentence)}</strong>
      <em>${escapeHtml(item.title)}</em>
    </button>
  `).join("");

  renderSentenceAnalyzer(list.find(item => item.id === selectedExampleId) || list[0]);
}

function initializeExampleWorkbench() {
  if (!exampleFilters || !exampleResults || !sentenceAnalyzer) {
    return;
  }

  renderExampleFilters();
  renderExamples();

  exampleSearch?.addEventListener("input", renderExamples);

  exampleFilters.addEventListener("click", event => {
    const button = event.target.closest("[data-tag]");
    if (!button) {
      return;
    }

    activeExampleTag = button.dataset.tag;
    renderExampleFilters();
    renderExamples();
  });

  exampleResults.addEventListener("click", event => {
    const button = event.target.closest("[data-example-id]");
    if (!button) {
      return;
    }

    selectedExampleId = button.dataset.exampleId;
    renderExamples();
  });
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

initializeExampleWorkbench();
render(displaySections);
