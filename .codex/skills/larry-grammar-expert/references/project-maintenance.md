# Project Maintenance

Use this reference only when the user asks to change the project, add examples, revise HTML, update chapters, or push changes.

## Source Of Truth

- Knowledge body: `source/content/*.md`
- Analysis protocol: `source/protocols/*.md`
- Sources and evidence: `source/sources/*.md`
- Maintenance rules: `source/maintenance/*.md`
- Generated web content: `web/generated-sections.js`
- Handwritten page shell and workbench: `web/index.html`, `web/style.css`, `web/app.js`

## Edit Order

1. Read `source/maintenance/project-method.md` and `source/README.md`.
2. Edit the relevant source Markdown first.
3. Rebuild generated HTML with `node scripts/build_web_sections.mjs` when source content changes.
4. Check generated JS syntax when relevant.
5. Keep project usage notes, source lists, video numbers, and maintenance notes outside the learning body.
6. Commit or push only when the user explicitly asks.

## Example Rules

- Do not invent examples and present them as Larry source material.
- Use video frames, user screenshots, user notes, or clearly labeled external examples.
- If provenance is uncertain, record it in `source/sources/example-source-audit.md`.
- Repeated real-reading cases can be added to an example library or confusion table after they become reusable.
- Apply an explicit status when needed: `Larry 原例`, `校准表达`, `纠错对比`, `依赖语境`, `外部补充`, or `待确认`.
- Source confirmation does not prove that a sentence is natural or suitable as a positive model.

## Chapter Template

Keep major chapters aligned to:

```text
本章结论卡 -> 核心本质 -> 判断步骤 -> 类型速查表 -> 具体类型 -> 易混对比 -> 经济学人分析提示 -> 关联入口
```
