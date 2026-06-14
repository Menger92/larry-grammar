# Source 目录导航

`source/` 按职责分成四类。HTML、Word、Excel 都是展示或导出层，知识正文以 `content/` 为准。

## 目录分类

| 目录 | 用途 | 文件数量 |
| --- | --- | --- |
| `content/` | 语法知识正文；直接生成 HTML 章节。 | 13 |
| `sources/` | 视频索引、证据记录、例句审计、书课与术语对照。 | 5 |
| `protocols/` | Codex 对话分析协议。 | 1 |
| `maintenance/` | 项目方法、内容进入规则和更新待办。 | 2 |

## 正文 content

| 文件 | 内容 |
| --- | --- |
| `content/grammar-overview.md` | 语法体系总览、颜色规则和学习路线。 |
| `content/modification-relations.md` | 词性之间的修饰关系。 |
| `content/simple-sentence.md` | 简单句、主谓宾定状补、基本句型。 |
| `content/clause-overview.md` | 从句总览。 |
| `content/noun-clause.md` | 名词性从句。 |
| `content/adjective-clause.md` | 形容词性从句 / 定语从句。 |
| `content/adverbial-clause.md` | 副词性从句 / 状语从句。 |
| `content/nonfinite.md` | 非谓语、不定式、动名词、分词。 |
| `content/preposition.md` | 介词与介词短语。 |
| `content/tense.md` | 时态专题。 |
| `content/subjunctive.md` | 虚拟语气专题。 |
| `content/morphology.md` | 词法解析、可数名词、冠词。 |
| `content/clause-confusions.md` | 从句易混点和真实阅读卡点。 |

## 来源 sources

| 文件 | 用途 |
| --- | --- |
| `sources/video-source-index.md` | Larry 视频顺序、BV 号和证据等级。 |
| `sources/evidence-log.md` | 已确认的视频画面、截图和笔记证据。 |
| `sources/example-source-audit.md` | 例句来源审计和待校准队列。 |
| `sources/grammar-club-crosswalk.md` | Larry 与《文法俱乐部》章节对照。 |
| `sources/terminology-map.md` | 大陆术语与书中术语对照。 |

## 协议 protocols

| 文件 | 用途 |
| --- | --- |
| `protocols/economist-analysis-protocol.md` | 经济学人句子分析输出协议。 |

## 维护 maintenance

| 文件 | 用途 |
| --- | --- |
| `maintenance/project-method.md` | 项目方法论、内容进入规则、自主更新流程。 |
| `maintenance/update-backlog.md` | 后续更新待办和证据需求。 |

提示：`The economist/` 目录属于本地资料缓存，不进入 GitHub；需要分析时只把必要句子和自己的语法分析写入项目。

## 编辑原则

1. 新增知识点先查 `sources/video-source-index.md`。
2. 例句只使用 A 级证据：视频画面、用户截图、用户笔记。
3. 例句来源不明确时，先登记到 `sources/example-source-audit.md`，不要继续扩写。
4. 只有 B 级证据时，只写入口和待补方向。
5. 改 HTML 前，先保证 `content/` 中的 Markdown 稳定。

## 学习与查阅优化原则

1. 章节阅读按“例句库工作台 → 语法总览 → 词性之间的修饰关系 → 简单句 → 从句 → 非谓语 → 介词短语 → 表达精化 → 易混对比 → 项目说明”推进。
2. 查阅复杂句时，先判断结构承担的功能，再判断它的表现形式。
3. 从句、非谓语和介词短语要横向对照：同一种名词性、形容词性或副词性功能，可能由不同形式承担。
4. 每个核心专题统一保持“本章结论卡 → 核心概念 → 判断步骤 → 类型与规则 → 易混点 → 例句库 / 实战分析”的结构；章节级总结只保留一个。
5. 经济学人阅读中反复卡住的结构，优先回填到对应知识点的例句库或易混对比。

## 正文唯一归属

| 内容 | 唯一完整归属 |
| --- | --- |
| 功能颜色、全局流程、功能与形式的判断原则 | `content/grammar-overview.md` |
| 从句类型及功能 × 表现形式矩阵 | `content/clause-overview.md` |
| 修饰对象判断 | `content/modification-relations.md` |
| 主干、句型、补语 | `content/simple-sentence.md` |
| 从句本质和三类功能 | `content/clause-overview.md` |
| 具体从句规则 | 对应从句专题 |
| 跨章节易混点 | `content/clause-confusions.md` |
| 项目说明、来源和维护 | HTML 最后一章与非正文目录 |

其他专题只保留本章不可替代的内容，通过链接关联，不再复制全局总表。

## 例句展示规则

同一个知识点出现多个例句时，统一使用“代表例句 + 例句库”：

1. 正文主表只保留一个最能说明规则的代表例句。
2. 其他同类例句放到该知识点下方的“例句库”。
3. 正误对比、近义结构对比、时态对比等内容，放到“对比例句库”。
4. 例句库只负责集中收纳例句和简短判断，不再扩写成新的知识点。
5. 例句来源仍按 `sources/example-source-audit.md` 和 `sources/evidence-log.md` 管理。

推荐格式：

```markdown
代表例句：I worked hard when I was at school.

<details>
<summary>例句库：时间状语从句</summary>

| 例句 | 判断 |
| --- | --- |
| I worked hard when I was at school. | when 引导时间状语从句。 |

</details>
```
