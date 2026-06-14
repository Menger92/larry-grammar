# 更新待办队列

本文件只记录“下一步该补什么”，避免待补信息散落在各个 Markdown 文件里。处理原则：没有视频画面、用户截图或用户笔记支撑的例句，不进入正文。

## 证据等级

| 等级 | 说明 | 处理方式 |
| --- | --- | --- |
| A | 视频画面 / 用户截图 / 用户笔记可直接确认 | 可以补规则、例句和分析。 |
| B | 只有标题、简介、合集顺序可确认 | 只建入口和待补方向。 |
| C | 暂无明确材料 | 不写具体内容。 |

## 高优先级

| 优先级 | 视频 | 文件 | 待补内容 | 需要证据 |
| --- | --- | --- | --- | --- |
| P1 | V01 | `source/content/grammar-overview.md` | 词性分类图、更多词性入口例句 | 视频画面或用户截图 |
| P1 | V02 | `source/content/modification-relations.md` | 修饰关系例句已补；后续继续校准判断细节 | 视频画面或用户截图 |
| P1 | V03 | `source/content/preposition.md` | 简单介词、分词介词、短语介词的例句来源校准 | 视频画面或用户截图 |
| P1 | 全部 | `source/sources/example-source-audit.md` | 已有例句来源审计，先分出已确认与待校准 | 视频画面、用户截图、用户笔记 |
| P1 | V08-V09 | `source/content/noun-clause.md` | 形式宾语和 that 省略已补截图例句；whether / if 仍需继续补全例句 | 视频画面或用户截图 |
| P1 | V19-V22 | `source/content/tense.md` | 已按本轮截图补充时态体系；后续待补：把对话截图原图批量落盘并继续编号 | 用户截图原图文件 |
| P1 | V24-V26 | `source/content/subjunctive.md` | 已按视频结构和本轮截图补充虚拟语气体系；后续只需原图落盘和例句来源细化 | 用户截图原图文件 |
| P1 | V27-V28 | `source/content/morphology.md` | 已按本轮截图补充可数名词单数、限定词、冠词、定指 / 不定指；后续只需原图落盘和版式校准 | 用户截图原图文件 |

## 中优先级

| 优先级 | 视频 | 文件 | 待补内容 | 需要证据 |
| --- | --- | --- | --- | --- |
| P2 | V04-V06 | `source/content/simple-sentence.md` | 简单句例句来源逐条标注 | 视频画面或用户截图 |
| P2 | V10-V12 | `source/content/adjective-clause.md` | 定语从句关系词例句来源逐条标注 | 视频画面或用户截图 |
| P2 | V13 | `source/content/adverbial-clause.md` | 状语从句例句与笔记图片编号对齐 | 用户笔记图片 |
| P2 | V14-V17 | `source/content/nonfinite.md` | 非谓语例句与笔记图片编号对齐 | 用户笔记图片 |

## 低优先级

| 优先级 | 视频 | 文件 | 待补内容 | 需要证据 |
| --- | --- | --- | --- | --- |
| P3 | V18 | `source/maintenance/project-method.md` | 学习方法视频的具体建议 | 视频画面 |
| P3 | V23 | `source/maintenance/project-method.md` | 回炉指南的具体步骤 | 视频画面 |
| P3 | 全部 | `web/app.js` | 已完成：HTML 已改为由核心 `source/content/*.md` 生成，并同步新增专题 | 后续更新 Markdown 后重新生成 |

## 处理记录

| 日期 | 处理内容 | 结果 |
| --- | --- | --- |
| 2026-05-26 | 建立 `tense.md`、`subjunctive.md`、`morphology.md`，并加入视频索引。 | 已完成入口，例句继续按证据补充。 |
| 2026-05-26 | 建立 `evidence-log.md`。 | 已记录 V19-V22、V24、V27 的可确认画面内容。 |
| 2026-05-26 | 按用户截图重构 `source/content/tense.md`，补入 V19-V22 时态体系，并保存可访问的手写笔记图片。 | 已保存 `assets/时态/05-00_时态_手写笔记01.jpg`；其余对话截图待原图文件落盘。 |
| 2026-05-26 | 统一例句展示规则：同一知识点保留代表例句，多个例子归入例句库 / 对比例句库。 | 已写入 `source/README.md`、`source/maintenance/project-method.md`；`source/content/tense.md` 已完成折叠式例句库处理，其他核心章节已统一例句库标题。 |
| 2026-05-26 | 建立 `example-source-audit.md`。 | 已把例句来源分为“已确认”和“待校准”，后续更新先按此表清理。 |
| 2026-05-26 | 为 V03-V14 补充来源登记。 | 已把介词、简单句、名词性从句、形容词性从句、副词性从句、不定式的部分截图/笔记例句登记到审计表。 |
| 2026-05-26 | 根据用户截图补充 V01-V02 修饰关系。 | 已纳入形容词修饰名词、副词修饰形容词/动词/其他副词，并同步到 HTML 首页。 |
| 2026-05-26 | 根据用户截图补充 V27-V28 词法解析。 | 已重构 `source/content/morphology.md`，纳入可数名词单数不可裸露、限定词分类、限定词顺序、定指 / 不定指、the 与 a/an 的核心对应，并同步例句来源审计。 |
| 2026-05-26 | 根据 V24-V26 视频结构、公开视频简介和用户截图重构虚拟语气专题。 | 已重构 `source/content/subjunctive.md`，纳入虚拟语气本质、三时态规则、条件虚拟、倒装、交叉时态、无条件、含蓄条件、名词性从句虚拟、wish / hope 和非主流形式。 |
| 2026-05-26 | 将核心 Markdown 知识体系同步到 HTML。 | 已新增 `scripts/build_web_sections.mjs`，生成 `web/generated-sections.js`；网页现在优先读取生成数据，已纳入总览、介词、简单句、从句、非谓语、时态、虚拟语气、词法解析等 13 个章节。 |
