# Larry 语法体系总览

## 项目使用分工

| 使用场景 | 使用方式 | 依据 |
| --- | --- | --- |
| 学习语法体系 | 打开 `web/index.html` 或阅读 `source/*.md` | Larry 主线 |
| 查理论底座 | 阅读 `source/grammar-club-crosswalk.md` 和 `source/terminology-map.md` | 《文法俱乐部》旁注 |
| 分析经济学人句子 | 在 Codex 对话框中贴句子并提问 | `source/economist-analysis-protocol.md` |

项目主线保持 Larry 的学习顺序；《文法俱乐部》用于对照、补强和解释术语，不替代 Larry 章节结构。

## 颜色规则对照表

这是本项目的硬性标注规则。后续新增、改写、导出到 Word/Excel 或网页展示时，都必须依照这个规则，不按词面颜色随意变化。

| 颜色 | 对应成分 | 记忆锚点 |
| --- | --- | --- |
| 红色 | 名词性成分 | 当名词用：主语、宾语、表语、同位语 |
| 黄色 | 形容词性成分 | 修饰名词：回答“什么样的” |
| 绿色 | 副词性成分 | 修饰动作、状态、其他副词或整句 |
| 紫色 | 非谓语 / 不定式 | 动词降级，有动作含义但不作谓语 |

## 学习路线

1. 先理解词性功能：名词性、形容词性、副词性。
2. 再理解介词短语：介词 + 名词性成分，整体可作形容词性或副词性成分。
3. 接着理解简单句主干：主语 + 谓语 + 宾语 + 定语 + 状语 + 补语。
4. 然后理解从句：名词性从句、定语从句、状语从句。
5. 最后理解非谓语、时态、虚拟语气、冠词。

新增专题入口：

- `source/tense.md`：依据 Larry V19-V22 逐步整理时态内容，例句只保留视频画面中能确认的部分。
- `source/subjunctive.md`：依据 Larry V24-V26 逐步整理虚拟语气内容，暂不补写未确认例句。
- `source/morphology.md`：依据 Larry V27-V28 逐步整理词法解析内容，先纳入可数名词单数不可裸露原则。

## 词性之间的修饰关系

来源说明：本节依据 V01-V02 用户截图整理。已确认例句登记在 `source/evidence-log.md` 和 `source/example-source-audit.md`。

核心规则：

1. 形容词性成分修饰名词性成分。
2. 副词性成分修饰形容词性成分、动词、其他副词性成分。

代表例句：The beautiful flowers have a sweet fragrance.

<details>
<summary>例句库：词性之间的修饰关系</summary>

| 修饰关系 | 例句 | 句中功能 |
| --- | --- | --- |
| 形容词修饰名词 | The beautiful flowers have a sweet fragrance. | `beautiful` 修饰 `flowers`，作定语。 |
| 形容词性从句修饰名词 | The flowers which are stolen from Michael have a sweet fragrance. | `which are stolen from Michael` 修饰 `flowers`，作定语从句。 |
| 分词修饰名词 | The flowers stolen from Michael have a sweet fragrance. | `stolen from Michael` 修饰 `flowers`，作分词定语。 |
| 副词修饰形容词 | Her performance was surprisingly good. | `surprisingly` 修饰 `good`。 |
| 副词性从句修饰形容词 | Her performance was good when her mom is around. | `when her mom is around` 修饰 `good` / `was good`。 |
| 副词修饰动词 | He runs slowly. | `slowly` 修饰 `runs`。 |
| 副词性从句修饰动词 | He runs if he is followed. | `if he is followed` 修饰 `runs`。 |
| 副词修饰其他副词 | She speaks very softly. | `very` 修饰 `softly`。 |
| 副词性介词短语修饰动词 | She speaks like a gun. | `like a gun` 修饰 `speaks`。 |

</details>

## 查询口诀

分析句子时先找谓语，再找主干；修饰名词看黄色，修饰动作或整句看绿色；占名词位置看红色；动词形式但不是谓语看紫色。

## 实战分析口诀

经济学人句子分析时，按下面顺序走：

```text
找谓语 -> 定主干 -> 判断基本句型 -> 剥离定语/状语/补语
-> 判断从句 -> 判断非谓语 -> 处理易混点 -> 顺译
```
