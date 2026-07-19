---
name: larry-grammar-expert
description: >-
  Analyze any English sentence, paragraph, or article excerpt with the Larry grammar system used in this project. Use when the user asks for English grammar analysis, sentence components, main clause, predicate, SVO/SVC/SVOC patterns, clauses, noun/adjective/adverbial clauses, non-finite verbs, infinitives, gerunds, participles, modifiers, complements, prepositional phrases, tense, subjunctive, articles, word-class function, color marking, 拆句, 句子成分, 主干, 从句, 非谓语, 补语, or says 按 Larry 体系分析. Works for The Economist, textbooks, exams, daily English, business English, and technical English. Also use when maintaining this project’s grammar knowledge base.
---

# Larry Grammar Expert

Use this project-level skill to analyze English grammar according to the Larry grammar system. The skill is for all English sentences, not only The Economist.

Respond in Chinese unless the user requests another language. Preserve quoted English exactly.

## Project Scope

This is a project-level skill. Use the Larry project as the authority when the repository root contains `source/content/grammar-overview.md` and `source/maintenance/project-method.md`.

If the project files are unavailable, still perform the analysis with the workflow below, but label project-specific claims as not verified in the current workspace.

## Core Rule

Analyze by function first, form second.

1. Find finite predicates and the main clause.
2. Identify the Larry five-pattern core, then add an expanded surface label when the real sentence needs one.
3. Temporarily remove modifiers, clauses, non-finite structures, parentheticals, and prepositional phrases.
4. Decide what each removed part does in the sentence.
5. Only then name its form: clause, infinitive, gerund, participle, prepositional phrase, adjective phrase, etc.
6. Translate after the grammar judgment is established.

## Use References Only As Needed

- For color labels and output templates, read `references/output-format.md`.
- For topic routing to project source files, read `references/topic-router.md`.
- For the compact Larry decision rules, read `references/grammar-principles.md`.
- For project file edits or knowledge-base maintenance, read `references/project-maintenance.md`.
- For The Economist or long article analysis, also read `source/protocols/economist-analysis-protocol.md` if available.

Do not load all project Markdown files by default. Use `rg` to locate the relevant topic and then read only the needed source file.

## Default Analysis Workflow

For any English sentence or excerpt:

1. Preserve the original sentence or excerpt.
2. Split the excerpt into analysis units if it contains multiple sentences.
3. Find all finite verb candidates.
4. Select the true main-clause predicate.
5. Identify the main-clause subject, predicate, object, complement, and adverbials.
6. Identify the basic sentence pattern: SV, SVO, SVC, SVOO, SVOC, or expanded variants.
7. Classify clauses by overall sentence function: noun function, adjective function, or adverb function.
8. For each clause, separate internal structure from overall function.
9. For each clause introducer, decide whether it only connects or also fills an internal role.
10. For each non-finite structure, identify its form, logical subject, voice, and sentence function.
11. For each prepositional phrase, identify its object and what the whole phrase modifies or completes.
    Route the whole phrase adjectivally or adverbially first for this project, then add a secondary label such as predicative or selected locative complement when needed.
12. Test complements in layers: use `[subject/object] is or becomes [complement]` for nominal/adjectival predication, identify the logical subject for non-finite complements, then use deletion only to distinguish an obligatory complement from an optional secondary predicate.
13. Mark uncertain attachment or scope explicitly; do not hide uncertainty behind fluent translation.
14. Give a concise learning card at the end when useful.

## Default Output

Use the standard output unless the user asks for a quick answer or full analysis.

Output priority:

1. Preserve the original English sentence or split passage into numbered English sentences.
2. First substantial analysis must be an English component table.
3. The component table must list each meaningful English span, its sentence component, its function/form label, what it modifies or completes, and the judgment basis.
4. Then summarize the main clause, clause structures, non-finite structures, and confusing points.
5. Translate into Chinese last. Do not translate before the component analysis is complete.
6. End with a short learning card only when it helps future judgment.

For a single sentence, use this order:

1. 原句
2. 英文成分表
3. 主干与句型
4. 从句 / 非谓语 / 介词短语说明
5. 易混点
6. 中文翻译
7. 学习卡片

For a paragraph, repeat an English component table for each sentence, then give a final Chinese translation or sentence-by-sentence Chinese translation at the end.

If the user asks for color marking, use HTML spans that render in chat when possible:

- red: noun-function components
- yellow: adjective-function components
- green: adverb-function components
- purple underline / badge: non-finite form overlay, not a fourth sentence function
- neutral / bold: finite predicate and main skeleton

If HTML colors are not suitable, use text labels from `references/output-format.md`.

Red, yellow, and green encode sentence function. Purple encodes form and must be layered with the function label whenever the function is known, for example `[名][非]`, `[形][非]`, or `[副][非]`.

## Source Priority

When sources differ, use this order:

1. The user’s current sentence and stated intent.
2. Confirmed Larry rules in `source/content/*.md`.
3. Project maintenance rules in `source/maintenance/project-method.md`.
4. Grammar Club crosswalk and terminology notes as side notes only.
5. General grammar knowledge as an external supplement, explicitly labeled.

## Project Maintenance

When the user asks to change the project, do not treat the answer-only analysis workflow as enough.

1. Read `references/project-maintenance.md`.
2. Edit source Markdown first, generated HTML second.
3. Keep project usage notes, sources, and maintenance details out of the learning body.
4. Run the project build/check commands if files changed.
5. Commit or push only when explicitly requested.

## Quality Gate

Before finalizing any analysis, verify:

1. Did you identify the predicate and main clause before translating?
2. Did every important phrase or clause receive a sentence function?
3. Did you keep function and form separate?
4. Did the component table identify what each modifier modifies and what each complement completes?
5. Did you keep Chinese translation after the English component analysis?
6. Did you label uncertainty or external supplementation and help the user make the same judgment next time?
7. If an example is incorrect, calibrated, context-dependent, or external, did you label that status instead of presenting it as an ordinary Larry model?
