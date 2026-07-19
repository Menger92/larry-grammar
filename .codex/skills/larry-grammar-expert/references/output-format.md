# Output Format

## Color Logic

Use this project color logic consistently:

| Visual mark | Text label | Layer | Function / form | Typical positions |
| --- | --- | --- | --- |
| red fill | `[名]` | function | noun-function component | subject, object, nominal predicative/complement, appositive |
| yellow fill | `[形]` | function | adjective-function component | attributive modifier, relative clause, noun modifier, adjectival complement when useful |
| green fill | `[副]` | function | adverb-function component | adverbial, sentence background, time/place/reason/condition/concession/result/purpose/manner |
| purple underline / badge | `[非]` | form | non-finite verb form; overlay it on the function label | to do, doing, done, having done, being done |
| neutral | `[谓]` | structure | finite predicate / main skeleton | main predicate and finite verbs |
| neutral | `[补]` | structure | complement | subject complement, object complement, or secondary predicate |
| neutral | `[插]` | structure | parenthetical / supplement | appositive, dash/bracket supplement, parenthetical |
| neutral | `[并]` | structure | coordination | parallel words, phrases, clauses |

Red, yellow, and green are mutually chosen by sentence function. Purple is not a fourth function: it is a form overlay. A non-finite span should therefore carry both labels when its function is known, for example `[名][非 To lie]`, `[形][非 sleeping]`, or `[副][非 Asked to speak]`.

For prepositional phrases, yellow/green may show the project's broad learning route. Add a neutral secondary component label when the PP is predicative or selected by the verb; green does not automatically mean optional.

When the user asks for visible color, prefer:

```html
<span style="color:#c1121f">noun-function component</span>
<span style="color:#8a6400">adjective-function component</span>
<span style="color:#2f7d32">adverb-function component</span>
<span style="color:#6d38a8">non-finite form</span>
```

Keep the English text exact inside labels/spans.

## Quick Output

Use for one narrow question.

```text
结论：
- 这个结构是：
- 句中功能：
- 判断依据：

易混点：
- 容易误判为：
- 为什么不是：

顺译：
```

## Standard Output

Use by default. The first substantial analysis must be the English component table. Chinese translation must come last.

```text
1. 原句
[Preserve the English exactly.]

2. 英文成分表
| 英文片段 | 句子成分 | 功能/形式标签 | 修饰/补充对象 | 判断依据 |
| --- | --- | --- | --- | --- |
| ... | 主语/谓语/宾语/表语/补语/定语/状语/同位语/插入语/并列项 | [名]/[形]/[副]/[非]/[谓]/[补] | 写明被修饰名词、被补充主语/宾语、被修饰动词/整句；没有则写“主干成分” | 简短说明为什么这样判断 |

3. 主干与句型
- 主句主干：
- Larry 核心句型：SV / SVO / SVC / SVOO / SVOC
- 扩展表层标签：SVA / SVOA / 存在句 / 形式主语外置 / 被动 / 并列分句（仅在需要时填写）
- 核心意思：

4. 从句 / 非谓语 / 介词短语
| 结构 | 类型 | 内部结构 | 整体功能 | 修饰/补充对象 | 判断问题 |
| --- | --- | --- | --- | --- | --- |

5. 易混点
| 易混点 | 容易误判 | 检验方式 | 最终判断 |
| --- | --- | --- | --- |

6. 中文翻译

7. 学习卡片
- 本句最值得记住的结构：
- 下次遇到同类句子先问：
```

Component table rules:

- Keep English fragments exact.
- Do not skip small but structurally important words such as finite verbs, prepositions, connectors, relative words, and particles.
- Always fill `修饰/补充对象`; this is required for attributives, adverbials, complements, prepositional phrases, clauses, and non-finite structures.
- For predicates, write `主干成分` in the object column.
- For clauses, distinguish the clause's internal structure from its overall function in the later structure table.
- If one span has two layers, show both layers or add a note, e.g. `picking blackberries` = non-finite form + adjective-function modifier of `woman`.
- When citing a project example, preserve any status such as `校准表达`, `纠错对比`, `依赖语境`, or `外部补充`.

## Long Passage Output

For a paragraph or article excerpt, split into numbered sentences. For each sentence, output the English component table before explanation or translation.

```text
句子 1
原句：

英文成分表
| 英文片段 | 句子成分 | 功能/形式标签 | 修饰/补充对象 | 判断依据 |
| --- | --- | --- | --- | --- |

主干与句型：
重点结构：
易混点：
```

After all sentence cards, output:

```text
全文中文翻译

全文复盘
- 高频结构：
- 最容易误判：
- 建议回看章节：
```

If the passage is long, keep each sentence table complete but concise. Prefer one row per meaningful component rather than a separate row for every individual word.

## Uncertainty Output

```text
不确定点：
- 卡住的片段：
- 为什么不确定：

候选判断：
| 候选 | 依据 | 风险 |
| --- | --- | --- |

暂定结论：
需要上下文：
```
