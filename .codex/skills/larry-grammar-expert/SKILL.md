---
name: larry-grammar-expert
description: >-
  Analyze English grammar and maintain the Larry grammar project with the current Larry-based learning system.
  Use when the user pastes an English sentence, especially from The Economist; asks to find the main clause,
  predicate, sentence pattern, clause type, non-finite structure, complement, modifier, prepositional phrase,
  tense, subjunctive, or confusing structure; says 按 Larry 体系分析, 经济学人拆句, 找主干, 判断从句,
  判断非谓语, 判断补语; asks for the project's grammar judgment basis; or updates the project's knowledge
  chapters, example library, or generated HTML.
---

# Larry Grammar Expert

Use `source/content/` as the grammar authority. Use `source/protocols/` for analysis output protocols, `source/sources/` for evidence and crosswalks, and `source/maintenance/` for project maintenance rules.

Respond in Chinese unless the user requests another language. Preserve quoted English sentences exactly.

## Locate The Project

1. Find the repository root containing `source/maintenance/project-method.md` and `source/protocols/economist-analysis-protocol.md`.
2. Treat paths below as relative to that root.
3. If the expected files are unavailable, say the Larry project rules could not be loaded and ask for the project path before giving a project-specific judgment.

## Source Priority

Use this order when sources differ:

1. Follow the user's current question and supplied context.
2. Follow confirmed Larry rules in the relevant `source/content/*.md` topic file.
3. Follow `source/maintenance/project-method.md` for judgment and maintenance rules.
4. Use `source/sources/grammar-club-crosswalk.md` and `source/sources/terminology-map.md` only as theoretical notes and terminology conversion.
5. Use general English grammar knowledge only when the project is silent. Label it as an external supplement, not a confirmed Larry rule.

Keep Larry as the organizing main line. Do not treat a different teaching order as a theory conflict.

## Route The Request

Read only the files needed for the task. Use `rg` to locate exact terms and nearby rules before loading a large topic file.

| Request | Required project sources |
| --- | --- |
| Economist or complete sentence analysis | `source/protocols/economist-analysis-protocol.md`, then relevant topic files |
| Overall grammar framework | `source/content/grammar-overview.md`, `source/maintenance/project-method.md` |
| Word-class modification relationship | `source/content/modification-relations.md` |
| Main clause, predicate, sentence pattern, complement | `source/content/simple-sentence.md` |
| Clause overview or clause conversion | `source/content/clause-overview.md` |
| Noun clause | `source/content/noun-clause.md` |
| Relative/adjective clause | `source/content/adjective-clause.md` |
| Adverbial clause | `source/content/adverbial-clause.md` |
| Confusing clause structures | `source/content/clause-confusions.md` plus the relevant clause file |
| Non-finite verb, infinitive, gerund, participle | `source/content/nonfinite.md` |
| Preposition or prepositional phrase | `source/content/preposition.md` |
| Tense | `source/content/tense.md` |
| Subjunctive or hypothetical expression | `source/content/subjunctive.md` |
| Word formation, countability, article | `source/content/morphology.md` |
| Grammar Club comparison | `source/sources/terminology-map.md`, `source/sources/grammar-club-crosswalk.md` |
| Add or revise project knowledge | `source/maintenance/project-method.md`, `source/sources/video-source-index.md`, `source/sources/evidence-log.md`, `source/sources/example-source-audit.md` |

## Core Project Logic

Apply the current project method:

- HTML is the learning system.
- Codex dialogue is the grammar analysis assistant.
- The Economist protocol stays in `source/protocols/economist-analysis-protocol.md`; do not embed the full protocol into the learning body.
- Each knowledge point may end with a short "经济学人中怎么识别" cue, but not a full analysis protocol.
- Analyze by function first, form second.
- Keep chapter body focused on learning content; move sources, maintenance notes, video numbers, project usage, and file indexes to the final "来源与维护" area.

Use the project color logic and text labels consistently:

| Function/form | HTML color | Dialogue label | Meaning |
| --- | --- | --- | --- |
| 名词性 | 红色 | `[名]` | 主语、宾语、表语、同位语、名词性补语等 |
| 形容词性 | 黄色 | `[形]` | 定语、修饰名词的结构 |
| 副词性 | 绿色 | `[副]` | 状语、修饰动作/状态/形容词/整句的结构 |
| 非谓语形式 | 紫色 | `[非]` | to do / doing / done 等动词降级形式 |
| 真正谓语 | 中性标记 | `[谓]` | finite predicate |
| 补语 | 功能说明 | `[补]` | 主语补足语或宾语补足语 |
| 插入/补充 | 结构说明 | `[插]` | parenthetical, appositive, dash supplement |
| 并列 | 结构说明 | `[并]` | coordination |

## Analyze A Sentence

Follow this order:

1. Preserve the original sentence exactly.
2. Use context only to resolve reference, ellipsis, logic, or scope.
3. Find every finite verb candidate.
4. Determine the true predicate of the main clause.
5. Reduce the sentence to its main clause and identify the basic sentence pattern.
6. Temporarily remove parentheticals, appositives, prepositional phrases, clauses, and non-finite structures to verify the main clause.
7. Classify each removed structure by its overall function before naming its form: noun function, adjective function, adverb function, complement, parenthetical, or coordination.
8. For a clause, distinguish its internal sentence structure from its overall function in the larger sentence.
9. For a clause introducer, decide whether it only marks connection/logical relation or also fills a missing internal role.
10. For a non-finite structure, confirm that it lacks predicate status, identify its logical subject and voice, then try restoring it to a clause.
11. For a prepositional phrase, identify what the whole phrase modifies or completes.
12. Test a suspected complement with the semantic mini-clause `[subject/object] is [complement]`.
13. Explain ambiguous alternatives and the test that selects the preferred judgment.
14. Translate only after the grammatical judgment is established.

## Economist Output

Read and follow `source/protocols/economist-analysis-protocol.md` for Economist or long-sentence output.

- Use the quick format for one narrow question.
- Use the standard format by default.
- Use the full format for long, nested sentences or when the user asks for complete analysis.
- Use the review format when the user is recording a recurring mistake or deciding whether to add a case to the project.

Always make these distinctions visible when relevant:

- main clause versus modifiers
- internal structure versus overall function
- complement versus adverbial
- confirmed judgment versus tentative judgment
- Larry main-line rule versus Grammar Club note or external supplement

Do not save complete Economist articles. Preserve only necessary sentence text, source metadata, analysis, and learning card when a case is worth retaining.

## Handle Uncertainty

Do not force a unique judgment when punctuation, ellipsis, attachment, reference, or context permits multiple readings.

1. Name the uncertain span.
2. Give the plausible analyses.
3. State the evidence and risk for each.
4. Request the minimum missing context when needed.
5. Give a tentative preferred analysis.
6. Point to the project chapter that controls the decision.

Never hide structural uncertainty behind a fluent translation.

## Maintain The Project

When asked to change the grammar library:

1. Read `source/maintenance/project-method.md` and `source/README.md`.
2. Edit the relevant `source/content/*.md` file first.
3. Preserve the current chapter template in this order:
   `本章结论卡 -> 核心本质 -> 判断步骤 -> 类型速查表 -> 具体类型 -> 易混对比 -> 经济学人分析提示 -> 关联入口`.
4. Keep chapter-level memory points, judgment methods, judgment flows, mnemonics, and review cards merged into the unified template. Retain only irreducible local tests such as complement checks, relative-clause steps, `until` judgments, or non-finite logical-subject checks.
5. Keep learning body free of source notes, maintenance notes, video numbers, project usage instructions, and file indexes. Put those into the final "来源与维护" area through the source extraction flow.
6. Keep the example library organized by knowledge point: simple-sentence five patterns, noun-clause positions, relative-clause introducer categories, adverbial-clause logic relations, non-finite forms, and other specific topic groups.
7. Use sourced Larry examples from video frames, user screenshots, or user notes. Do not invent replacement examples and present them as Larry material.
8. Record uncertain example provenance in `source/sources/example-source-audit.md`.
9. Check `source/sources/video-source-index.md` and `source/sources/evidence-log.md` before adding a confirmed Larry rule.
10. Ask before changing chapter hierarchy, diagram relationships, or page module positions unless the user explicitly requested that structural change.
11. After approved content changes, run `node scripts/build_web_sections.mjs`.
12. Check generated output and relevant JavaScript syntax.
13. Do not commit or push unless the user explicitly requests it.

## Quality Gate

Before answering or editing, verify:

1. Did the analysis find the predicate and main clause before translating?
2. Did every important structure receive a sentence function?
3. Were form and function kept separate?
4. Was the modified or completed target identified?
5. Was the judgment tied to a project source?
6. Were uncertain or externally supplemented claims labeled?
7. If files changed, was the source-of-truth layer updated before generated HTML?
8. If the skill itself changed, did `agents/openai.yaml` still match `SKILL.md` and did skill validation pass?
