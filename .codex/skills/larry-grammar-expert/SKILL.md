---
name: larry-grammar-expert
description: Analyze English sentences and maintain this grammar project according to the Larry grammar system. Use when the user pastes an English sentence in this project; asks to analyze an Economist sentence, find the main clause or predicate, identify sentence patterns, clauses, non-finite verbs, complements, modifiers, or prepositional phrases; says "按 Larry 体系分析", "经济学人拆句", "找主干", or "判断从句/非谓语/补语"; compares confusing grammar structures; asks for the project's judgment basis; or updates the Larry grammar knowledge base and example library.
---

# Larry Grammar Expert

Use the repository's `source/` files as the grammar authority. Keep this skill procedural and do not copy the knowledge base into the skill.

Respond in Chinese unless the user requests another language. Preserve quoted English sentences exactly.

## Locate The Project

1. Find the repository root containing `source/project-method.md` and `source/economist-analysis-protocol.md`.
2. Treat paths below as relative to that root.
3. If the expected project files are unavailable, state that the Larry project rules could not be loaded and ask for the project path before giving a project-specific judgment.

## Apply Source Priority

Use this order when sources differ:

1. Follow the user's current question and supplied context.
2. Follow confirmed Larry rules in the relevant `source/*.md` topic file.
3. Follow `source/project-method.md` for judgment and maintenance rules.
4. Use `source/grammar-club-crosswalk.md` and `source/terminology-map.md` only as theoretical notes and terminology conversion.
5. Use general English grammar knowledge only when the project is silent. Label it as an external supplement, not as a confirmed Larry rule.

Do not treat a different teaching order as a theoretical conflict. Keep Larry as the organizing main line.

## Route The Request

Read only the files needed for the task:

| Request | Required project sources |
| --- | --- |
| Economist or complete sentence analysis | `source/economist-analysis-protocol.md`, then relevant topic files |
| Overall grammar framework | `source/grammar-overview.md`, `source/project-method.md` |
| Word-class modification relationship | `source/modification-relations.md` |
| Main clause, predicate, sentence pattern, complement | `source/simple-sentence.md` |
| Clause overview or clause conversion | `source/clause-overview.md`, `source/clause.md` |
| Noun clause | `source/noun-clause.md` |
| Relative or adjective clause | `source/adjective-clause.md` |
| Adverbial clause | `source/adverbial-clause.md` |
| Confusing clause structures | `source/clause-confusions.md` plus the relevant clause file |
| Non-finite verb, infinitive, gerund, participle | `source/nonfinite.md` |
| Preposition or prepositional phrase | `source/preposition.md` |
| Tense | `source/tense.md` |
| Subjunctive or hypothetical expression | `source/subjunctive.md` |
| Word formation, countability, article | `source/morphology.md` |
| Grammar Club terminology or comparison | `source/terminology-map.md`, `source/grammar-club-crosswalk.md` |
| Add or revise project knowledge | `source/project-method.md`, `source/video-source-index.md`, `source/evidence-log.md`, `source/example-source-audit.md` |

Use `rg` to locate exact terms and nearby rules before loading a large topic file. Read the full relevant section before deciding.

## Analyze A Sentence

Follow this order:

1. Preserve the original sentence exactly.
2. Use surrounding sentences only to resolve reference, ellipsis, logic, or scope.
3. Find every finite verb candidate.
4. Determine the true predicate of the main clause.
5. Reduce the sentence to its main clause and identify the basic sentence pattern.
6. Temporarily remove parentheticals, appositives, prepositional phrases, clauses, and non-finite structures to verify the main clause.
7. Classify each removed structure by its overall function before naming its form:
   - noun function
   - adjective function
   - adverb function
   - complement
   - parenthetical or coordination
8. For a clause, distinguish its internal sentence structure from its overall function in the larger sentence.
9. For a non-finite structure, confirm that it lacks predicate status, identify its logical subject and voice, then try restoring it to a clause.
10. For a prepositional phrase, identify what the whole phrase modifies or completes.
11. Test a suspected complement with the semantic mini-clause `[subject/object] is [complement]`.
12. Explain ambiguous alternatives and the test that selects the preferred judgment.
13. Translate only after the grammatical judgment is established.

Use the project's text labels:

- `[名]` noun function
- `[形]` adjective function
- `[副]` adverb function
- `[非]` non-finite form
- `[谓]` finite predicate
- `[补]` complement
- `[插]` parenthetical or supplementary structure
- `[并]` coordination

## Choose The Output

Read and follow `source/economist-analysis-protocol.md` for sentence-analysis output.

- Use the quick format for one narrow question.
- Use the standard format by default.
- Use the full format for long, nested sentences or when the user asks for a complete analysis.
- Use the review format when the user is recording a recurring mistake or deciding whether to add a case to the project.

Keep the answer proportional to the question. Do not force every table into a simple answer.

Always make these distinctions visible when relevant:

- main clause versus modifiers
- internal structure versus overall function
- complement versus adverbial
- confirmed judgment versus tentative judgment
- Larry main-line rule versus Grammar Club note or external supplement

## Handle Uncertainty

Do not force a unique judgment when punctuation, ellipsis, attachment, reference, or context permits multiple readings.

1. Name the uncertain span.
2. Give the plausible analyses.
3. State the evidence and risk for each.
4. Request the minimum missing context.
5. Give a tentative preferred analysis.
6. Point to the project chapter that controls the decision.

Never hide structural uncertainty behind a fluent translation.

## Maintain The Project

When asked to change the grammar library:

1. Read `source/project-method.md` and `source/README.md`.
2. Edit the relevant `source/*.md` file first.
3. Preserve the structure: essence, judgment questions, type table, representative example, confusing points, practical use.
4. Keep project usage instructions at the end of the learning system.
5. Use only sourced Larry examples from video frames, user screenshots, or user notes.
6. Do not invent replacement examples and present them as Larry material.
7. Record uncertain example provenance in `source/example-source-audit.md`.
8. Check `source/video-source-index.md` and `source/evidence-log.md` before adding a confirmed Larry rule.
9. Ask before changing chapter hierarchy, diagram relationships, or page module positions.
10. After approved content changes, run `node scripts/build_web_sections.mjs`.
11. Check generated output and relevant JavaScript syntax.
12. Do not commit or push unless the user explicitly requests it.

For Economist cases, do not save complete articles. Preserve only the necessary sentence, source metadata, analysis, and learning card. Prefer adding a case after the same difficulty recurs or clearly represents a high-frequency pattern.

## Quality Gate

Before answering or editing, verify:

1. Did the analysis find the predicate and main clause before translating?
2. Did every important structure receive a sentence function?
3. Were form and function kept separate?
4. Was the modified or completed target identified?
5. Was the judgment tied to a project source?
6. Were uncertain or externally supplemented claims labeled?
7. If files changed, was the source-of-truth layer updated before generated HTML?
