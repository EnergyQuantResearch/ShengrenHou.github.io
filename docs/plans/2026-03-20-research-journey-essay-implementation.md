# Research Journey Essay Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a second bilingual essay adapted from the WeChat interview article and support reusable source attribution in the essay layout.

**Architecture:** Reuse the existing `essays` collection and bilingual essay layout. Extend `_layouts/essay.html` with an optional source block driven by front matter fields such as `source_title`, `source_name`, `source_url`, and `source_date`. Then add a new essay file whose content is lightly edited from the interview article but remains structurally faithful to the original text.

**Tech Stack:** Jekyll collections, Liquid, Markdown/HTML content blocks, SCSS, Python verification script

---

### Task 1: Add failing verification for the new essay and source support

**Files:**
- Modify: `E:/research_projects/personal/ShengrenHou.github.io/scripts/verify_public_site.py`

**Step 1: Write the failing test**

Add checks for:

- source attribution support in `_layouts/essay.html`
- a new essay file for the research-journey article
- key bilingual metadata fields and source metadata in that essay file

**Step 2: Run test to verify it fails**

Run:

```powershell
py -3 scripts/verify_public_site.py
```

Expected: fail because the source block and the new essay do not exist yet.

### Task 2: Add reusable source attribution support

**Files:**
- Modify: `E:/research_projects/personal/ShengrenHou.github.io/_layouts/essay.html`
- Modify: `E:/research_projects/personal/ShengrenHou.github.io/_sass/_founder-site.scss`

**Step 1: Implement minimal source support**

- Add an optional source block below the essay body
- Render bilingual labels and the original source link when front matter is present

**Step 2: Re-run verification**

Run:

```powershell
py -3 scripts/verify_public_site.py
```

Expected: still fail until the new essay file is added.

### Task 3: Add the research-journey essay

**Files:**
- Create: `E:/research_projects/personal/ShengrenHou.github.io/_essays/2026-03-20-research-journey-notes.md`

**Step 1: Add bilingual essay content**

- Use a site-friendly title
- Keep the original structure with light editing
- Add bilingual metadata, bilingual body blocks, and source metadata
- Mark it as featured so it appears on the homepage

**Step 2: Run final verification**

Run:

```powershell
py -3 scripts/verify_public_site.py
git -C E:\research_projects\personal\ShengrenHou.github.io diff --check
```

Expected: both commands pass.

### Task 4: Deploy and confirm

**Files:**
- None

**Step 1: Commit and push**

```powershell
git -C E:\research_projects\personal\ShengrenHou.github.io add .
git -C E:\research_projects\personal\ShengrenHou.github.io commit -m "feat: add research journey essay"
git -C E:\research_projects\personal\ShengrenHou.github.io push origin master
```

**Step 2: Confirm live**

- the new essay appears on `/essays/`
- the homepage highlights show it
- the essay page shows the source note and link
