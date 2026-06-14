const fallbackSections = [
  {
    id: "content-unavailable",
    title: "知识正文未生成",
    meta: "请先运行 node scripts/build_web_sections.mjs",
    html: `<p>网页正文只读取 <code>source/content/*.md</code> 的生成结果。当前未找到生成内容。</p>`
  }
];

const sections = Array.isArray(window.generatedSections) && window.generatedSections.length
  ? window.generatedSections
  : fallbackSections;

const displaySections = sections;

const navGroups = [
  {
    title: "判断入口",
    note: "先建立功能颜色、修饰关系、总流程和简单句主干",
    ids: ["overview", "modification-relations", "simple"]
  },
  {
    title: "复杂结构层",
    note: "从句、非谓语、介词短语都回到句中功能",
    ids: [
      "clause-overview",
      "noun-clause",
      "adjective-clause",
      "adverbial-clause",
      "nonfinite",
      "preposition"
    ]
  },
  {
    title: "表达精化与易混",
    note: "处理时态、语气、词法和真实阅读卡点",
    ids: ["tense", "subjunctive", "morphology", "clause-confusions"]
  },
  {
    title: "附录与维护",
    note: "项目使用说明和源文件索引",
    ids: ["source-index"]
  }
];

const nav = document.querySelector("#nav");
const content = document.querySelector("#content");
const search = document.querySelector("#search");
const exampleSearch = document.querySelector("#exampleSearch");
const exampleFilters = document.querySelector("#exampleFilters");
const exampleTopics = document.querySelector("#exampleTopics");
const exampleStatus = document.querySelector("#exampleStatus");
const exampleResults = document.querySelector("#exampleResults");
const sentenceAnalyzer = document.querySelector("#sentenceAnalyzer");
const sidebar = document.querySelector("#site-sidebar");
const mobileTocToggle = document.querySelector("#mobileTocToggle");
const mobileTocClose = document.querySelector("#mobileTocClose");
const mobileTocBackdrop = document.querySelector("#mobileTocBackdrop");
const mobileCurrentSection = document.querySelector("#mobileCurrentSection");

const exampleTags = [
  { id: "all", label: "全部" },
  { id: "simple", label: "简单句" },
  { id: "noun-clause", label: "名词性从句" },
  { id: "adjective-clause", label: "定语从句" },
  { id: "adverbial-clause", label: "状语从句" },
  { id: "nonfinite", label: "非谓语" },
  { id: "preposition", label: "介词" },
  { id: "tense", label: "时态" },
  { id: "subjunctive", label: "虚拟语气" },
  { id: "morphology", label: "词法解析" },
  { id: "contrast", label: "易混对比" }
];

const exampleChapterLinks = {
  simple: { label: "简单句", href: "#simple" },
  "noun-clause": { label: "名词性从句", href: "#noun-clause" },
  "adjective-clause": { label: "形容词性从句", href: "#adjective-clause" },
  "adverbial-clause": { label: "副词性从句", href: "#adverbial-clause" },
  nonfinite: { label: "非谓语", href: "#nonfinite" },
  preposition: { label: "介词", href: "#preposition" },
  tense: { label: "时态", href: "#tense" },
  subjunctive: { label: "虚拟语气", href: "#subjunctive" },
  morphology: { label: "词法解析", href: "#morphology" },
  contrast: { label: "从句易混对比", href: "#clause-confusions" }
};

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
  },
  {
    id: "tense-present-perfect-since",
    title: "现在完成：since 起点",
    section: "时态",
    tags: ["tense", "adverbial-clause"],
    level: "进阶",
    sentence: "Sally and I haven't met each other since I became a middle school student.",
    translation: "自从我成为中学生以来，Sally 和我就没有见过面。",
    core: "Sally and I haven't met each other",
    question: "since 从句为什么常和完成相关表达一起判断？",
    answer: "since 给出过去起点，主句用现在完成相关表达说明状态延续到现在。",
    method: "先找主句观察点，再看 since 从句给出的起点。",
    parts: [
      { text: "Sally and I", role: "noun", label: "主语" },
      { text: "haven't met", role: "neutral", label: "谓语 / 现在完成" },
      { text: "each other", role: "noun", label: "宾语" },
      { text: "since I became a middle school student", role: "adv", label: "时间状语从句" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 Sally and I haven't met each other。",
      "since I became a middle school student 给出过去的起点。",
      "haven't met 表示从那个起点到现在仍然没有见面，所以要和完成相关表达一起看。"
    ]
  },
  {
    id: "subjunctive-if-could-help",
    title: "虚拟条件句：非现实空间",
    section: "虚拟语气",
    tags: ["subjunctive", "adverbial-clause", "contrast"],
    level: "进阶",
    sentence: "If I could help you, I would definitely do so.",
    translation: "如果我能帮你，我一定会这么做。",
    core: "I would definitely do so",
    question: "这里为什么不是普通真实条件句？",
    answer: "could / would 把句子推进非现实或假设空间，不只是普通过去时间。",
    method: "先判断真实条件还是非真实条件，再看情态动词和时态形式。",
    parts: [
      { text: "If I could help you", role: "adv", label: "条件状语从句" },
      { text: ",", role: "plain" },
      { text: "I", role: "noun", label: "主语" },
      { text: "would definitely do", role: "neutral", label: "虚拟谓语" },
      { text: "so", role: "noun", label: "宾语 / 替代内容" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 I would definitely do so。",
      "If I could help you 给出条件，但 could 不只是过去时间，而是带出假设距离。",
      "would do so 是主句虚拟结果，说明这句话进入非现实或假设空间。"
    ]
  },
  {
    id: "morphology-singular-determiner",
    title: "单数可数名词不能裸露",
    section: "词法解析",
    tags: ["morphology", "simple"],
    level: "基础",
    sentence: "A dog is barking by the door.",
    translation: "一只狗正在门边叫。",
    core: "A dog is barking",
    question: "dog 前为什么要有 A？",
    answer: "dog 是单数可数名词，不能裸露，需要限定词。",
    method: "先判断名词是否可数，再判断是否单数，最后检查前面有没有限定词。",
    parts: [
      { text: "A dog", role: "noun", label: "主语 / 限定词 + 名词" },
      { text: "is barking", role: "neutral", label: "谓语" },
      { text: "by the door", role: "adv", label: "地点状语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 A dog is barking。",
      "dog 是单数可数名词，前面不能空着。",
      "A 是限定词，用来引入一只不特定的 dog；by the door 是介词短语作地点状语。"
    ]
  }
];

const knowledgeExampleLibrary = [
  {
    id: "simple-component-subject-boys",
    title: "句子成分：主语",
    section: "简单句",
    knowledge: "主语",
    tags: ["simple"],
    level: "基础",
    sentence: "Boys play football.",
    translation: "男孩们踢足球。",
    core: "Boys play football",
    question: "Boys 为什么是主语？",
    answer: "Boys 是动作 play 的发出者，也是句子的主体话题。",
    method: "先找谓语 play，再问“谁在 play？”答案 Boys 就是主语。",
    parts: [
      { text: "Boys", role: "noun", label: "主语 / 名词性" },
      { text: "play", role: "neutral", label: "谓语" },
      { text: "football", role: "noun", label: "宾语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "谓语是 play。",
      "执行 play 的是 Boys。",
      "所以 Boys 作主语。"
    ]
  },
  {
    id: "simple-component-predicate-sings",
    title: "句子成分：谓语",
    section: "简单句",
    knowledge: "谓语",
    tags: ["simple"],
    level: "基础",
    sentence: "She sings beautifully.",
    translation: "她唱得很动听。",
    core: "She sings",
    question: "sings 为什么是谓语？",
    answer: "sings 承担一般现在时和第三人称单数变化，是句子动作核心。",
    method: "先找承担时态、语气和主谓一致变化的动词。",
    parts: [
      { text: "She", role: "noun", label: "主语" },
      { text: "sings", role: "neutral", label: "谓语" },
      { text: "beautifully", role: "adv", label: "方式状语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "She 是主语。",
      "sings 承担时态和主谓一致，是谓语。",
      "beautifully 修饰 sings，作状语。"
    ]
  },
  {
    id: "simple-component-object-sushi",
    title: "句子成分：宾语",
    section: "简单句",
    knowledge: "宾语",
    tags: ["simple"],
    level: "基础",
    sentence: "She ate sushi.",
    translation: "她吃了寿司。",
    core: "She ate sushi",
    question: "sushi 为什么是宾语？",
    answer: "ate 是及物动词，sushi 是动作 ate 的执行对象。",
    method: "找到谓语后问“吃了什么？”能回答这一问的 sushi 就是宾语。",
    parts: [
      { text: "She", role: "noun", label: "主语" },
      { text: "ate", role: "neutral", label: "谓语" },
      { text: "sushi", role: "noun", label: "宾语 / 名词性" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "谓语是 ate。",
      "sushi 承接 ate 的动作。",
      "所以 sushi 作宾语。"
    ]
  },
  {
    id: "simple-component-attributive-red",
    title: "句子成分：定语",
    section: "简单句",
    knowledge: "定语",
    tags: ["simple"],
    level: "基础",
    sentence: "The red car is mine.",
    translation: "那辆红色汽车是我的。",
    core: "The car is mine",
    question: "red 为什么是定语？",
    answer: "red 修饰名词 car，回答“什么样的汽车”，因此作定语。",
    method: "先找被修饰的名词；修饰名词性成分的材料按形容词性功能判断。",
    parts: [
      { text: "The", role: "adj", label: "限定词" },
      { text: "red", role: "adj", label: "定语 / 形容词性" },
      { text: "car", role: "noun", label: "主语中心词" },
      { text: "is", role: "neutral", label: "系动词" },
      { text: "mine", role: "noun", label: "表语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "句子主干是 The car is mine。",
      "red 修饰 car。",
      "所以 red 是形容词性定语。"
    ]
  },
  {
    id: "simple-component-adverbial-tomorrow",
    title: "句子成分：状语",
    section: "简单句",
    knowledge: "状语",
    tags: ["simple"],
    level: "基础",
    sentence: "I will meet you tomorrow.",
    translation: "我明天会见你。",
    core: "I will meet you",
    question: "tomorrow 为什么是状语？",
    answer: "tomorrow 修饰 will meet，说明动作发生的时间。",
    method: "找到修饰对象；修饰动作、状态或整句的材料按副词性功能判断。",
    parts: [
      { text: "I", role: "noun", label: "主语" },
      { text: "will meet", role: "neutral", label: "谓语" },
      { text: "you", role: "noun", label: "宾语" },
      { text: "tomorrow", role: "adv", label: "时间状语 / 副词性" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 I will meet you。",
      "tomorrow 说明 will meet 发生的时间。",
      "所以 tomorrow 作时间状语。"
    ]
  },
  {
    id: "simple-sv-it-happens",
    title: "SV：主谓",
    section: "简单句",
    knowledge: "主谓 SV",
    tags: ["simple"],
    level: "基础",
    sentence: "It happens.",
    translation: "事情发生了。",
    core: "It happens",
    question: "这个句子为什么是主谓结构？",
    answer: "happen 是不及物动词，后面不需要宾语，It + happens 已经构成完整主干。",
    method: "先找谓语 happen，再检查它是否要求宾语；不要求宾语就是 SV。",
    parts: [
      { text: "It", role: "noun", label: "主语" },
      { text: "happens", role: "neutral", label: "谓语 / 不及物动词" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 It happens。",
      "happen 表示“发生”，动作本身不直接作用到某个宾语。",
      "句子意思已经完整，所以归入主谓 SV。"
    ]
  },
  {
    id: "simple-svp-sally-beautiful",
    title: "SVP：主系表",
    section: "简单句",
    knowledge: "主系表 SVP",
    tags: ["simple"],
    level: "基础",
    sentence: "Sally is beautiful.",
    translation: "Sally 很漂亮。",
    core: "Sally is beautiful",
    question: "beautiful 在句中做什么？",
    answer: "is 是系动词，beautiful 补充说明主语 Sally 的状态，是表语。",
    method: "看到 be / become / seem 等系动词，优先检查后面是不是说明主语身份或状态。",
    parts: [
      { text: "Sally", role: "noun", label: "主语" },
      { text: "is", role: "neutral", label: "系动词" },
      { text: "beautiful", role: "adj", label: "表语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 Sally is beautiful。",
      "beautiful 不是动作对象，而是在说明 Sally 的状态。",
      "主语 + 系动词 + 表语，就是主系表 SVP。"
    ]
  },
  {
    id: "simple-svo-cats-love-fish",
    title: "SVO：主谓宾",
    section: "简单句",
    knowledge: "主谓宾 SVO",
    tags: ["simple"],
    level: "基础",
    sentence: "Cats love fish.",
    translation: "猫喜欢鱼。",
    core: "Cats love fish",
    question: "fish 为什么是宾语？",
    answer: "love 是及物动词，需要一个被喜欢的对象；fish 承接 love 的动作，是宾语。",
    method: "先问“谁 love？”再问“love 什么？”能回答第二问的就是宾语。",
    parts: [
      { text: "Cats", role: "noun", label: "主语" },
      { text: "love", role: "neutral", label: "谓语 / 及物动词" },
      { text: "fish", role: "noun", label: "宾语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 Cats love fish。",
      "love 后面必须接一个对象才能完整表达。",
      "fish 是动作 love 的承受对象，所以是 SVO。"
    ]
  },
  {
    id: "simple-svoo-give-gift",
    title: "SVOO：主谓双宾",
    section: "简单句",
    knowledge: "主谓双宾 SVOO",
    tags: ["simple"],
    level: "基础",
    sentence: "She sent him a message.",
    translation: "她给他发了一条消息。",
    core: "She sent him a message",
    question: "him 和 a message 分别是什么宾语？",
    answer: "him 是接受者，a message 是被发出的东西，所以是间接宾语 + 直接宾语。",
    method: "遇到 give / tell / send 这类动词，检查后面是否是“人 + 物”。",
    parts: [
      { text: "She", role: "noun", label: "主语" },
      { text: "sent", role: "neutral", label: "谓语" },
      { text: "him", role: "noun", label: "间接宾语" },
      { text: "a message", role: "noun", label: "直接宾语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 She sent him a message。",
      "him 表示消息发给谁。",
      "a message 表示被发出的东西，因此是 SVOO。"
    ]
  },
  {
    id: "simple-svoc-make-happy",
    title: "SVOC：主谓宾补",
    section: "简单句",
    knowledge: "主谓宾补 SVOC",
    tags: ["simple"],
    level: "基础",
    sentence: "You make me happy.",
    translation: "你让我开心。",
    core: "You make me happy",
    question: "happy 为什么是宾语补足语？",
    answer: "把宾语 me 和 happy 连成小分句：I am happy，语义自洽，happy 补充说明 me 的状态。",
    method: "宾补判断用小分句检验：宾语 + be + 后面的词，成立就倾向宾补。",
    parts: [
      { text: "You", role: "noun", label: "主语" },
      { text: "make", role: "neutral", label: "谓语" },
      { text: "me", role: "noun", label: "宾语" },
      { text: "happy", role: "adj", label: "宾语补足语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 You make me happy。",
      "me 是 make 的宾语。",
      "happy 补充说明 me 的状态，不是修饰 make 的方式，所以是宾补。"
    ]
  },
  {
    id: "simple-svoc-paint-room-blue",
    title: "宾语补语：结果状态",
    section: "简单句",
    knowledge: "宾语补语",
    tags: ["simple", "contrast"],
    level: "基础",
    sentence: "She painted the room blue.",
    translation: "她把房间刷成了蓝色。",
    core: "She painted the room blue",
    question: "blue 为什么是宾语补语？",
    answer: "the room was blue 语义自洽；blue 说明 the room 被刷后的结果状态。",
    method: "把宾语与后面的成分还原成小分句，并检查它表示状态、身份还是结果。",
    parts: [
      { text: "She", role: "noun", label: "主语" },
      { text: "painted", role: "neutral", label: "谓语" },
      { text: "the room", role: "noun", label: "宾语" },
      { text: "blue", role: "adj", label: "宾语补语 / 形容词性" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 She painted the room blue。",
      "验证小分句：The room was blue。",
      "blue 是形容词性宾语补语，说明动作造成的结果状态。"
    ]
  },
  {
    id: "simple-svoc-consider-fool",
    title: "宾语补语：身份说明",
    section: "简单句",
    knowledge: "宾语补语",
    tags: ["simple", "contrast"],
    level: "基础",
    sentence: "We consider him a fool.",
    translation: "我们认为他是个傻瓜。",
    core: "We consider him a fool",
    question: "a fool 为什么是宾语补语？",
    answer: "he is a fool 语义自洽；a fool 是名词性成分，说明 him 的身份。",
    method: "名词性成分也能作补语；不要把补语误认为只能由形容词承担。",
    parts: [
      { text: "We", role: "noun", label: "主语" },
      { text: "consider", role: "neutral", label: "谓语" },
      { text: "him", role: "noun", label: "宾语" },
      { text: "a fool", role: "noun", label: "宾语补语 / 名词性" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 We consider him a fool。",
      "验证小分句：He is a fool。",
      "a fool 是名词性宾语补语，补充说明 him 的身份。"
    ]
  },
  {
    id: "simple-svoc-movie-interesting",
    title: "宾语补语：不定式结构",
    section: "简单句",
    knowledge: "宾语补语",
    tags: ["simple", "nonfinite", "contrast"],
    level: "进阶",
    sentence: "I found the movie to be very interesting.",
    translation: "我发现这部电影非常有趣。",
    core: "I found the movie to be very interesting",
    question: "to be very interesting 在句中做什么？",
    answer: "它整体补充说明宾语 the movie；可验证为 The movie was very interesting。",
    method: "先把 to be 识别为非谓语，再看整个不定式结构是否说明宾语。",
    parts: [
      { text: "I", role: "noun", label: "主语" },
      { text: "found", role: "neutral", label: "谓语" },
      { text: "the movie", role: "noun", label: "宾语" },
      { text: "to be", role: "nonfinite", label: "非谓语 / 宾语补语结构" },
      { text: "very interesting", role: "adj", label: "形容词性核心" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 I found the movie to be very interesting。",
      "验证小分句：The movie was very interesting。",
      "to be very interesting 是非谓语形式的宾语补语结构。"
    ]
  },
  {
    id: "simple-svoc-leave-door-open",
    title: "宾语补语：保持状态",
    section: "简单句",
    knowledge: "宾语补语",
    tags: ["simple", "contrast"],
    level: "基础",
    sentence: "You should leave the door open.",
    translation: "你应该让门开着。",
    core: "You should leave the door open",
    question: "open 修饰 leave，还是说明 the door？",
    answer: "the door is open 语义自洽；open 说明门应保持的状态。",
    method: "优先检查后面的形容词能否与宾语构成 be 小分句。",
    parts: [
      { text: "You", role: "noun", label: "主语" },
      { text: "should leave", role: "neutral", label: "谓语" },
      { text: "the door", role: "noun", label: "宾语" },
      { text: "open", role: "adj", label: "宾语补语 / 形容词性" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 You should leave the door open。",
      "验证小分句：The door is open。",
      "open 是形容词性宾语补语，不是修饰 leave 的状语。"
    ]
  },
  {
    id: "simple-subject-complement-naked",
    title: "主语补语：动作中的状态",
    section: "简单句",
    knowledge: "主语补语",
    tags: ["simple", "contrast"],
    level: "基础",
    sentence: "He is walking around naked.",
    translation: "他正赤裸着四处走动。",
    core: "He is walking around naked",
    question: "naked 为什么不是副词状语？",
    answer: "He is naked 语义自洽；naked 说明 He 的状态，而不是走动的方式。",
    method: "主语补语要使用与原句相符的状态验证：He is naked；不能改成过去时。",
    parts: [
      { text: "He", role: "noun", label: "主语" },
      { text: "is walking around", role: "neutral", label: "谓语" },
      { text: "naked", role: "adj", label: "主语补语 / 形容词性" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 He is walking around naked。",
      "验证小分句：He is naked。",
      "naked 是形容词性主语补语；验证句应使用 is，不是 was。"
    ]
  },
  {
    id: "simple-svoc-ask-him-buy",
    title: "宾语补语：不定式动作",
    section: "简单句",
    knowledge: "宾语补语",
    tags: ["simple", "nonfinite"],
    level: "进阶",
    sentence: "I asked him to buy something for me.",
    translation: "我请他替我买些东西。",
    core: "I asked him to buy something for me",
    question: "to buy something for me 与 him 是什么关系？",
    answer: "to buy something for me 说明宾语 him 要执行的动作，是非谓语形式的宾语补语。",
    method: "不定式作宾补时，先找逻辑主语：真正执行 buy 的是 him。",
    parts: [
      { text: "I", role: "noun", label: "主语" },
      { text: "asked", role: "neutral", label: "谓语" },
      { text: "him", role: "noun", label: "宾语 / 逻辑主语" },
      { text: "to buy something for me", role: "nonfinite", label: "宾语补语 / 非谓语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 I asked him to buy something for me。",
      "him 是 asked 的宾语，也是 buy 的逻辑主语。",
      "to buy something for me 是非谓语形式的宾语补语。"
    ]
  },
  {
    id: "noun-clause-subject-what-she-said",
    title: "主语从句：what 引导",
    section: "名词性从句",
    knowledge: "主语从句",
    tags: ["noun-clause"],
    level: "基础",
    sentence: "What she said surprised everyone.",
    translation: "她说的话让所有人都很惊讶。",
    core: "What she said surprised everyone",
    question: "What she said 为什么是主语从句？",
    answer: "What she said 整体站在主语位置，后面的 surprised 才是主句谓语。",
    method: "先找主句谓语 surprised，再看谓语前面整个从句是不是它的主语。",
    parts: [
      { text: "What she said", role: "noun", label: "主语从句" },
      { text: "surprised", role: "neutral", label: "主句谓语" },
      { text: "everyone", role: "noun", label: "宾语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主句谓语是 surprised。",
      "What she said 整体回答“什么让大家惊讶”。",
      "从句占据主语位置，所以是主语从句。"
    ]
  },
  {
    id: "noun-clause-object-that-education",
    title: "宾语从句：that 引导",
    section: "名词性从句",
    knowledge: "宾语从句",
    tags: ["noun-clause"],
    level: "基础",
    sentence: "She believes that education is the key.",
    translation: "她相信教育是关键。",
    core: "She believes that education is the key",
    question: "that education is the key 在句中做什么？",
    answer: "believes 后面需要相信的内容，that 从句整体做 believes 的宾语。",
    method: "看到认知、表达、感受类动词，先问“相信/认为/说了什么”。",
    parts: [
      { text: "She", role: "noun", label: "主语" },
      { text: "believes", role: "neutral", label: "谓语" },
      { text: "that education is the key", role: "noun", label: "宾语从句" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 She believes something。",
      "that education is the key 给出 believes 的具体内容。",
      "从句整体做宾语，所以是宾语从句。"
    ]
  },
  {
    id: "noun-clause-predicative-truth",
    title: "表语从句：that 引导",
    section: "名词性从句",
    knowledge: "表语从句",
    tags: ["noun-clause"],
    level: "基础",
    sentence: "The truth is that we all make mistakes.",
    translation: "事实是我们都会犯错。",
    core: "The truth is that we all make mistakes",
    question: "that we all make mistakes 为什么是表语从句？",
    answer: "is 是系动词，后面的 that 从句说明主语 The truth 的内容，是表语。",
    method: "先锁定系动词，再看系动词后面是不是补充说明主语的完整句子。",
    parts: [
      { text: "The truth", role: "noun", label: "主语" },
      { text: "is", role: "neutral", label: "系动词" },
      { text: "that we all make mistakes", role: "noun", label: "表语从句" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 The truth is something。",
      "that we all make mistakes 解释 truth 的具体内容。",
      "从句放在系动词后做表语，所以是表语从句。"
    ]
  },
  {
    id: "noun-clause-appositive-news",
    title: "同位语从句：that 引导",
    section: "名词性从句",
    knowledge: "同位语从句",
    tags: ["noun-clause"],
    level: "进阶",
    sentence: "The news that they won the championship spread quickly.",
    translation: "他们赢得冠军的消息很快传开了。",
    core: "The news spread quickly",
    question: "that they won the championship 是定语从句还是同位语从句？",
    answer: "它不是修饰哪一个 news，而是在解释 news 的具体内容，所以是同位语从句。",
    method: "把前面的抽象名词替换成“这个消息的内容是……”，能说通就优先判同位语。",
    parts: [
      { text: "The news", role: "noun", label: "主语中心词" },
      { text: "that they won the championship", role: "noun", label: "同位语从句" },
      { text: "spread", role: "neutral", label: "谓语" },
      { text: "quickly", role: "adv", label: "状语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 The news spread quickly。",
      "that they won the championship 解释 news 的内容。",
      "that 在同位语从句中通常不担任成分，只负责引出内容。"
    ]
  },
  {
    id: "adj-clause-where-city",
    title: "关系副词 where",
    section: "定语从句",
    knowledge: "关系副词 where",
    tags: ["adjective-clause"],
    level: "基础",
    sentence: "This is the city where I grew up.",
    translation: "这就是我长大的那座城市。",
    core: "This is the city",
    question: "where I grew up 修饰谁？",
    answer: "where I grew up 修饰 the city，说明是哪一座城市。",
    method: "定语从句先找先行词，再看关系词在从句中承担什么功能。",
    parts: [
      { text: "This", role: "noun", label: "主语" },
      { text: "is", role: "neutral", label: "系动词" },
      { text: "the city", role: "noun", label: "表语 / 先行词" },
      { text: "where I grew up", role: "adj", label: "定语从句" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 This is the city。",
      "where I grew up 回答“哪座城市”。",
      "where 在从句里承担地点状语功能。"
    ]
  },
  {
    id: "adv-clause-because-raining",
    title: "原因状语从句",
    section: "副词性从句",
    knowledge: "原因状语从句",
    tags: ["adverbial-clause"],
    level: "基础",
    sentence: "I stayed home because it was raining.",
    translation: "因为下雨，我待在家里。",
    core: "I stayed home",
    question: "because it was raining 修饰什么？",
    answer: "它说明 stayed home 这个动作发生的原因，修饰主句动作。",
    method: "副词性从句重点问：它在说明主句动作的时间、原因、条件、结果还是让步。",
    parts: [
      { text: "I", role: "noun", label: "主语" },
      { text: "stayed", role: "neutral", label: "谓语" },
      { text: "home", role: "adv", label: "地点状语" },
      { text: "because it was raining", role: "adv", label: "原因状语从句" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 I stayed home。",
      "because it was raining 给出待在家里的原因。",
      "它不做名词成分，而是修饰整个动作，所以是副词性从句。"
    ]
  },
  {
    id: "adv-clause-if-rains",
    title: "条件状语从句",
    section: "副词性从句",
    knowledge: "条件状语从句",
    tags: ["adverbial-clause"],
    level: "基础",
    sentence: "If it rains tomorrow, we will stay home.",
    translation: "如果明天下雨，我们就待在家里。",
    core: "We will stay home",
    question: "If it rains tomorrow 给主句提供什么信息？",
    answer: "它给出 will stay home 成立的条件，是条件状语从句。",
    method: "先找主句结论，再看 if 从句是不是这个结论成立的前提。",
    parts: [
      { text: "If it rains tomorrow", role: "adv", label: "条件状语从句" },
      { text: ",", role: "plain" },
      { text: "we", role: "noun", label: "主语" },
      { text: "will stay", role: "neutral", label: "谓语" },
      { text: "home", role: "adv", label: "地点状语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 we will stay home。",
      "If it rains tomorrow 是主句行为的前提条件。",
      "真实条件句里，if 从句常用一般现在时代替将来。"
    ]
  },
  {
    id: "adv-clause-while-homework",
    title: "时间状语从句：while",
    section: "副词性从句",
    knowledge: "时间状语从句 while",
    tags: ["adverbial-clause", "contrast"],
    level: "进阶",
    sentence: "Sally telephoned me while I was doing my homework.",
    translation: "我正在做作业时，Sally 给我打了电话。",
    core: "Sally telephoned me",
    question: "while 从句真正修饰的对象是什么？",
    answer: "while I was doing my homework 给 telephoned me 这个动作定位时间段。",
    method: "判断副词性从句时，先问它在限定主句哪个动作或状态。",
    parts: [
      { text: "Sally", role: "noun", label: "主语" },
      { text: "telephoned", role: "neutral", label: "谓语" },
      { text: "me", role: "noun", label: "宾语" },
      { text: "while I was doing my homework", role: "adv", label: "时间状语从句" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 Sally telephoned me。",
      "while 强调一个持续的时间段。",
      "从句不是名词成分，而是在给主句动作定位时间。"
    ]
  },
  {
    id: "nonfinite-to-subject",
    title: "不定式作主语",
    section: "非谓语动词",
    knowledge: "不定式作主语",
    tags: ["nonfinite"],
    level: "基础",
    sentence: "To lie is foolish.",
    translation: "撒谎是愚蠢的。",
    core: "To lie is foolish",
    question: "To lie 在句中做什么？",
    answer: "To lie 整体站在主语位置，is foolish 说明这件事的性质。",
    method: "非谓语先看它占哪个句子位置，再判断它承担名词、形容词还是副词功能。",
    parts: [
      { text: "To lie", role: "nonfinite", label: "不定式 / 主语" },
      { text: "is", role: "neutral", label: "系动词" },
      { text: "foolish", role: "adj", label: "表语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 To lie is foolish。",
      "To lie 表示“撒谎这件事”。",
      "它整体做主语，承担名词性功能。"
    ]
  },
  {
    id: "nonfinite-sleeping-baby",
    title: "现在分词作定语",
    section: "非谓语动词",
    knowledge: "分词作定语",
    tags: ["nonfinite", "adjective-clause"],
    level: "基础",
    sentence: "The sleeping baby is quiet.",
    translation: "正在睡觉的宝宝很安静。",
    core: "The baby is quiet",
    question: "sleeping 为什么不是谓语？",
    answer: "句子的谓语是 is，sleeping 修饰 baby，说明 baby 的状态。",
    method: "一句话只能先锁定真正谓语；多出来的动词形式再判断是不是非谓语。",
    parts: [
      { text: "The", role: "adj", label: "限定词" },
      { text: "sleeping", role: "nonfinite", label: "现在分词 / 定语" },
      { text: "baby", role: "noun", label: "主语中心词" },
      { text: "is", role: "neutral", label: "谓语" },
      { text: "quiet", role: "adj", label: "表语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 The baby is quiet。",
      "sleeping 放在 baby 前面，修饰 baby。",
      "它不承担谓语功能，而是分词作定语。"
    ]
  },
  {
    id: "tense-simple-present-sun",
    title: "一般现在时：客观事实",
    section: "时态",
    knowledge: "一般现在时",
    tags: ["tense"],
    level: "基础",
    sentence: "The sun rises in the east.",
    translation: "太阳从东方升起。",
    core: "The sun rises",
    question: "为什么这里用一般现在时？",
    answer: "句子表达客观事实，不是在强调此刻正在发生。",
    method: "先判断表达的是事实、习惯、现在状态，还是具体时间线上的动作。",
    parts: [
      { text: "The sun", role: "noun", label: "主语" },
      { text: "rises", role: "neutral", label: "谓语 / 一般现在时" },
      { text: "in the east", role: "adv", label: "地点状语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 The sun rises。",
      "这里说的是稳定事实。",
      "一般现在时适合表达客观规律、习惯和常态。"
    ]
  },
  {
    id: "subjunctive-wish-had-not-divorced",
    title: "wish 虚拟：对过去的反事实",
    section: "虚拟语气",
    knowledge: "wish 虚拟",
    tags: ["subjunctive", "noun-clause"],
    level: "进阶",
    sentence: "I wish that my dad had never divorced Apple's boss.",
    translation: "我真希望我爸当年没有和苹果老板离婚。",
    core: "I wish that my dad had never divorced Apple's boss",
    question: "had never divorced 为什么不是普通过去完成时？",
    answer: "wish 后面的内容与过去事实相反，had done 标记对过去的虚拟。",
    method: "看到 wish，先判断愿望针对现在、过去还是将来，再看从句时态是否后退。",
    parts: [
      { text: "I", role: "noun", label: "主语" },
      { text: "wish", role: "neutral", label: "谓语" },
      { text: "that my dad had never divorced Apple's boss", role: "noun", label: "宾语从句 / 虚拟" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 I wish something。",
      "that 从句是 wish 的宾语内容。",
      "had never divorced 表示对过去事实的反向想象。"
    ]
  },
  {
    id: "morphology-definite-article-book",
    title: "定冠词 the：特指",
    section: "词法解析",
    knowledge: "定冠词 the",
    tags: ["morphology", "preposition"],
    level: "基础",
    sentence: "The book on the desk is mine.",
    translation: "桌上的那本书是我的。",
    core: "The book is mine",
    question: "The book 为什么用 the？",
    answer: "on the desk 把 book 限定成具体可识别的一本书，所以用 the。",
    method: "看名词是否可数、是否单数，再判断语境中是泛指还是特指。",
    parts: [
      { text: "The book", role: "noun", label: "主语 / 特指名词" },
      { text: "on the desk", role: "adj", label: "后置定语" },
      { text: "is", role: "neutral", label: "系动词" },
      { text: "mine", role: "noun", label: "表语" },
      { text: ".", role: "plain" }
    ],
    analysis: [
      "主干是 The book is mine。",
      "on the desk 修饰 book，让听者知道是哪一本。",
      "the 标记这个名词已经被语境限定为特指对象。"
    ]
  }
];

const exampleKnowledgeOverrides = {
  "svoc-room-dirty": "主谓宾补 SVOC",
  "svo-adverbial-washed-warmly": "状语 vs 宾补",
  "subject-complement-came-back-safe": "主语补足语",
  "svoo-gave-gift": "主谓双宾 SVOO",
  "preposition-on-what": "介词宾语",
  "prep-book-on-shelf": "介词短语作定语",
  "noun-clause-what-she-said": "宾语从句",
  "noun-clause-whether-subject": "主语从句",
  "adj-clause-teacher-who": "关系代词 who",
  "adj-clause-grandmother-nonrestrictive": "非限制性定语从句",
  "adv-clause-when-young": "时间状语从句 when",
  "nonfinite-purpose-to-learn": "不定式作目的状语",
  "nonfinite-arriving-after-for": "动名词作介词宾语",
  "tense-present-perfect-since": "现在完成时 + since",
  "subjunctive-if-could-help": "if 虚拟条件句",
  "morphology-singular-determiner": "单数可数名词限定词"
};

const allExampleLibrary = [...knowledgeExampleLibrary, ...exampleLibrary];

let activeExampleTag = "all";
let activeExampleTopic = "all";
let selectedExampleId = allExampleLibrary[0]?.id || "";

function exampleQuestion(item) {
  return item.question || `${item.sentence} 里的重点结构如何判断？`;
}

function exampleAnswer(item) {
  return item.answer || item.analysis.at(-1) || "先按项目判断流程拆出主干和功能。";
}

function exampleMethod(item) {
  return item.method || item.analysis[0] || "先找谓语，再定主干，最后判断修饰和补足关系。";
}

function exampleKnowledge(item) {
  return item.knowledge || exampleKnowledgeOverrides[item.id] || item.title;
}

function exampleChapterTargets(item) {
  return item.tags
    .map(tag => exampleChapterLinks[tag])
    .filter(Boolean)
    .filter((link, index, links) => links.findIndex(item => item.href === link.href) === index)
    .slice(0, 4);
}

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
  const sectionMap = new Map(list.map(section => [section.id, section]));
  const renderedIds = new Set();

  const renderSection = section => {
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
    renderedIds.add(section.id);

    return `
      <div class="nav-group">
        <a class="nav-section" href="#${section.id}">
          <span>${number}</span>
          <strong>${section.title}</strong>
        </a>
        ${subnav}
      </div>
    `;
  };

  const clusters = navGroups.map(group => {
    const items = group.ids
      .map(id => sectionMap.get(id))
      .filter(Boolean);

    if (!items.length) {
      return "";
    }

    return `
      <section class="nav-cluster">
        <div class="nav-cluster-title">
          <strong>${escapeHtml(group.title)}</strong>
          <span>${escapeHtml(group.note)}</span>
        </div>
        <div class="nav-cluster-items">
          ${items.map(renderSection).join("")}
        </div>
      </section>
    `;
  }).filter(Boolean);

  const rest = list.filter(section => !renderedIds.has(section.id));
  if (rest.length) {
    clusters.push(`
      <section class="nav-cluster">
        <div class="nav-cluster-title">
          <strong>其他</strong>
          <span>未归入主线的补充内容</span>
        </div>
        <div class="nav-cluster-items">
          ${rest.map(renderSection).join("")}
        </div>
      </section>
    `);
  }

  nav.innerHTML = clusters.join("");
}

function render(list, query = "") {
  renderNav(list);
  if (!list.length) {
    content.innerHTML = `<div class="empty">没有找到匹配内容。</div>`;
    refreshScrollTargets();
    updateActiveNav();
    return;
  }

  content.innerHTML = list.map(section => {
    const sectionNo = sectionNumber(section);
    const rawHtml = addNumberedSubsections(section);
    const html = query ? highlight(rawHtml, query) : rawHtml;
    const meta = section.id === "source-index" && section.meta
      ? `<div class="meta">${section.meta}</div>`
      : "";
    return `
      <article class="card" id="${section.id}">
        <h3><span class="chapter-number">${sectionNo}</span>${section.title}</h3>
        ${meta}
        ${html}
      </article>
    `;
  }).join("");
  refreshScrollTargets();
  updateActiveNav();
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

let scrollTargets = [];
let activeNavTicking = false;

function isMobileTocMode() {
  return window.matchMedia("(max-width: 920px)").matches;
}

function setMobileTocOpen(open, restoreFocus = true) {
  if (!mobileTocToggle || !mobileTocBackdrop) {
    return;
  }

  const mobileMode = isMobileTocMode();
  const effectiveOpen = mobileMode && open;
  const focusWasInsideSidebar = sidebar?.contains(document.activeElement);

  document.body.classList.toggle("mobile-toc-open", effectiveOpen);
  mobileTocToggle.setAttribute("aria-expanded", String(effectiveOpen));
  mobileTocBackdrop.hidden = !effectiveOpen;

  if (sidebar) {
    sidebar.inert = mobileMode && !effectiveOpen;
    if (mobileMode) {
      sidebar.setAttribute("aria-hidden", String(!effectiveOpen));
    } else {
      sidebar.removeAttribute("aria-hidden");
    }
  }

  if (effectiveOpen) {
    window.setTimeout(() => mobileTocClose?.focus({ preventScroll: true }), 80);
  } else if (restoreFocus && mobileMode && focusWasInsideSidebar) {
    window.requestAnimationFrame(() => mobileTocToggle.focus({ preventScroll: true }));
  }
}

function refreshScrollTargets() {
  scrollTargets = Array.from(document.querySelectorAll("#content article.card[id], #content h4[id]"))
    .map(element => ({
      id: element.id,
      element
    }));
}

function activeNavLabel(link) {
  if (!link) {
    return "当前位置";
  }

  return `当前：${link.textContent.replace(/\s+/g, " ").trim()}`;
}

function updateActiveNav() {
  if (!nav || !scrollTargets.length) {
    nav?.querySelectorAll("a.active, a.active-parent").forEach(link => {
      link.classList.remove("active", "active-parent");
    });
    if (mobileCurrentSection) {
      mobileCurrentSection.textContent = "当前位置";
    }
    return;
  }

  const offset = isMobileTocMode() ? 58 : 28;
  let current = scrollTargets[0];

  for (const target of scrollTargets) {
    if (target.element.getBoundingClientRect().top <= offset) {
      current = target;
    } else {
      break;
    }
  }

  nav.querySelectorAll("a.active, a.active-parent").forEach(link => {
    link.classList.remove("active", "active-parent");
  });

  const activeLink = Array.from(nav.querySelectorAll("a[href]"))
    .find(link => link.getAttribute("href") === `#${current.id}`);
  activeLink?.classList.add("active");
  activeLink?.closest(".nav-group")?.querySelector(".nav-section")?.classList.add("active-parent");

  if (mobileCurrentSection) {
    mobileCurrentSection.textContent = activeNavLabel(activeLink);
  }
}

function requestActiveNavUpdate() {
  if (activeNavTicking) {
    return;
  }

  activeNavTicking = true;
  window.requestAnimationFrame(() => {
    updateActiveNav();
    activeNavTicking = false;
  });
}

mobileTocToggle?.addEventListener("click", () => {
  setMobileTocOpen(!document.body.classList.contains("mobile-toc-open"));
});

mobileTocClose?.addEventListener("click", () => {
  setMobileTocOpen(false);
});

mobileTocBackdrop?.addEventListener("click", () => {
  setMobileTocOpen(false);
});

nav?.addEventListener("click", event => {
  if (event.target.closest("a") && isMobileTocMode()) {
    setMobileTocOpen(false, false);
  }
});

sidebar?.addEventListener("click", event => {
  if (event.target.closest("a") && isMobileTocMode()) {
    setMobileTocOpen(false, false);
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    setMobileTocOpen(false);
  }
});

setMobileTocOpen(false, false);

window.addEventListener("scroll", requestActiveNavUpdate, { passive: true });
window.addEventListener("resize", () => {
  if (!isMobileTocMode()) {
    setMobileTocOpen(false, false);
  }
  requestActiveNavUpdate();
});

function exampleSearchText(item) {
  return [
    item.title,
    item.section,
    exampleKnowledge(item),
    item.knowledge,
    item.level,
    item.sentence,
    item.translation,
    item.core,
    exampleQuestion(item),
    exampleAnswer(item),
    exampleMethod(item),
    item.tags.join(" "),
    item.parts.map(part => `${part.text} ${part.label || ""}`).join(" "),
    item.analysis.join(" ")
  ].join(" ").toLowerCase();
}

function baseFilteredExamples() {
  const query = (exampleSearch?.value || "").trim().toLowerCase();
  return allExampleLibrary.filter(item => {
    const tagMatch = activeExampleTag === "all" || item.tags.includes(activeExampleTag);
    const queryMatch = !query || exampleSearchText(item).includes(query);
    return tagMatch && queryMatch;
  });
}

function filteredExamples() {
  return baseFilteredExamples().filter(item => (
    activeExampleTopic === "all" || exampleKnowledge(item) === activeExampleTopic
  ));
}

function exampleTopicGroups(list) {
  return list.reduce((groups, item) => {
    const topic = exampleKnowledge(item);
    if (!groups.has(topic)) {
      groups.set(topic, []);
    }
    groups.get(topic).push(item);
    return groups;
  }, new Map());
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

function renderExampleTopics(baseList) {
  if (!exampleTopics) {
    return;
  }

  const groups = exampleTopicGroups(baseList);
  if (activeExampleTopic !== "all" && !groups.has(activeExampleTopic)) {
    activeExampleTopic = "all";
  }

  const buttons = [
    {
      id: "all",
      label: "全部知识点",
      count: baseList.length
    },
    ...Array.from(groups, ([label, items]) => ({
      id: label,
      label,
      count: items.length
    }))
  ];

  exampleTopics.innerHTML = buttons.map(topic => `
    <button class="example-topic ${topic.id === activeExampleTopic ? "active" : ""}" type="button" data-topic="${escapeHtml(topic.id)}">
      <span>${escapeHtml(topic.label)}</span>
      <b>${topic.count}</b>
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
      <span>${escapeHtml(exampleKnowledge(item))}</span>
      <span>${escapeHtml(item.level)}</span>
    </div>
    <h3>${escapeHtml(item.title)}</h3>
    <p class="translation">${escapeHtml(item.translation)}</p>
    <div class="judge-grid">
      <div>
        <b>判断任务</b>
        <span>${escapeHtml(exampleQuestion(item))}</span>
      </div>
      <div>
        <b>判断结论</b>
        <span>${escapeHtml(exampleAnswer(item))}</span>
      </div>
      <div>
        <b>检验方法</b>
        <span>${escapeHtml(exampleMethod(item))}</span>
      </div>
    </div>
    <div class="analyzed-sentence" aria-label="彩色拆句">
      ${renderSentenceParts(item)}
    </div>
    <div class="core-line">
      <b>主干</b>
      <span>${escapeHtml(item.core)}</span>
    </div>
    <div class="chapter-links" aria-label="回到相关章节">
      <b>回到章节</b>
      <span>
        ${exampleChapterTargets(item).map(link => `<a href="${link.href}">${escapeHtml(link.label)}</a>`).join("")}
      </span>
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

  const baseList = baseFilteredExamples();
  renderExampleTopics(baseList);
  const list = filteredExamples();
  if (exampleStatus) {
    const currentTag = exampleTags.find(tag => tag.id === activeExampleTag)?.label || "全部";
    const currentTopic = activeExampleTopic === "all" ? "全部知识点" : activeExampleTopic;
    const topicCount = exampleTopicGroups(baseList).size;
    exampleStatus.innerHTML = `
      <span>当前筛选：<b>${escapeHtml(currentTag)}</b></span>
      <span>知识点：<b>${escapeHtml(currentTopic)}</b></span>
      <span>显示 <b>${list.length}</b> / ${allExampleLibrary.length} 个例句，覆盖 <b>${topicCount}</b> 个知识点</span>
      <span>使用顺序：章节 → 知识点 → 例句 → 拆句判断</span>
    `;
  }

  if (list.length && !list.some(item => item.id === selectedExampleId)) {
    selectedExampleId = list[0].id;
  }

  if (!list.length) {
    exampleResults.innerHTML = `<div class="empty">没有找到匹配例句。</div>`;
    renderSentenceAnalyzer(null);
    return;
  }

  exampleResults.innerHTML = Array.from(exampleTopicGroups(list), ([topic, items]) => `
    <section class="example-topic-group">
      <h3>
        <span>${escapeHtml(topic)}</span>
        <small>${items.length} 例</small>
      </h3>
      ${items.map(item => `
        <button class="example-result ${item.id === selectedExampleId ? "active" : ""}" type="button" data-example-id="${item.id}">
          <span>${escapeHtml(item.section)} · ${escapeHtml(item.level)}</span>
          <strong>${escapeHtml(item.sentence)}</strong>
          <em>${escapeHtml(item.title)}｜${escapeHtml(exampleQuestion(item))}</em>
        </button>
      `).join("")}
    </section>
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
    activeExampleTopic = "all";
    renderExampleFilters();
    renderExamples();
  });

  exampleTopics?.addEventListener("click", event => {
    const button = event.target.closest("[data-topic]");
    if (!button) {
      return;
    }

    activeExampleTopic = button.dataset.topic;
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
