# Source 目录导航

`source/` 是本项目的主要编辑区。后续新增内容优先写入这里，HTML、Word、Excel 都应视为导出或展示层。

## 主线讲义

| 文件 | 用途 |
| --- | --- |
| `full-summary.md` | 全系列完整讲义主文本。 |
| `grammar-overview.md` | 语法体系总览、颜色规则和学习路线。 |
| `modification-relations.md` | 词性之间的修饰关系、修饰对象判断法。 |
| `video-source-index.md` | Larry 视频顺序、BV 号、来源证据等级。 |
| `evidence-log.md` | 已确认的视频画面、截图和笔记证据记录。 |
| `example-source-audit.md` | 例句来源审计表，集中管理已确认和待校准例句。 |
| `update-backlog.md` | 后续更新待办队列。 |
| `project-method.md` | 项目方法论、内容进入规则、自主更新流程。 |

## 核心语法专题

| 文件 | 内容 |
| --- | --- |
| `simple-sentence.md` | 简单句、主谓宾定状补、基本句型。 |
| `clause.md` | 从句章节索引。 |
| `clause-overview.md` | 从句总览。 |
| `noun-clause.md` | 名词性从句。 |
| `adjective-clause.md` | 形容词性从句 / 定语从句。 |
| `adverbial-clause.md` | 副词性从句 / 状语从句。 |
| `nonfinite.md` | 非谓语、不定式、动名词、分词。 |
| `preposition.md` | 介词与介词短语。 |
| `clause-confusions.md` | 从句易混点和真实阅读卡点。 |

## 后续扩展专题

| 文件 | 内容 |
| --- | --- |
| `tense.md` | 时态专题。 |
| `subjunctive.md` | 虚拟语气专题。 |
| `morphology.md` | 词法解析、可数名词、冠词。 |

## 旁注与实战

| 文件 | 用途 |
| --- | --- |
| `grammar-club-crosswalk.md` | Larry 与《文法俱乐部》章节对照。 |
| `terminology-map.md` | 术语对照。 |
| `economist-analysis-protocol.md` | 经济学人句子分析输出协议。 |

提示：`The economist/` 目录属于本地资料缓存，不进入 GitHub；需要分析时只把必要句子和自己的语法分析写入项目。

## 编辑原则

1. 新增知识点先查 `video-source-index.md`。
2. 例句只使用 A 级证据：视频画面、用户截图、用户笔记。
3. 例句来源不明确时，先登记到 `example-source-audit.md`，不要继续扩写。
4. 只有 B 级证据时，只写入口和待补方向。
5. 改 HTML 前，先保证 Markdown 稳定。

## 学习与查阅优化原则

1. 章节阅读按“例句库工作台 → 语法总览 → 词性之间的修饰关系 → 简单句 → 从句 → 非谓语 → 介词短语 → 表达精化 → 易混对比 → 项目说明”推进。
2. 查阅复杂句时，先判断结构承担的功能，再判断它的表现形式。
3. 从句、非谓语和介词短语要横向对照：同一种名词性、形容词性或副词性功能，可能由不同形式承担。
4. 每个核心专题尽量保持“本质 → 判断问题 → 类型表 → 代表例句 → 易混点 → 实战用法”的结构。
5. 经济学人阅读中反复卡住的结构，优先回填到对应知识点的例句库或易混对比。

## 例句展示规则

同一个知识点出现多个例句时，统一使用“代表例句 + 例句库”：

1. 正文主表只保留一个最能说明规则的代表例句。
2. 其他同类例句放到该知识点下方的“例句库”。
3. 正误对比、近义结构对比、时态对比等内容，放到“对比例句库”。
4. 例句库只负责集中收纳例句和简短判断，不再扩写成新的知识点。
5. 例句来源仍按 `example-source-audit.md` 和 `evidence-log.md` 管理。

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
