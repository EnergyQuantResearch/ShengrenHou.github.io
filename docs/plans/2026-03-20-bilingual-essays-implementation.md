# Bilingual Essays Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Convert the Essays system to bilingual full-text essays with optional Bilibili embeds while keeping one URL per essay.

**Architecture:** Essays remain in the Jekyll `essays` collection. Rendering changes happen in three places: the homepage highlights, the essays index, and the single-essay layout. Data should stay in a single essay file by using bilingual front matter and two language-specific content blocks controlled by the global `lang-block` system already used across the site.

**Tech Stack:** Jekyll collections, Liquid templates, Markdown/HTML content blocks, SCSS, Python verification script

---

### Task 1: Add failing verification for bilingual essays

**Files:**
- Modify: `E:/research_projects/personal/ShengrenHou.github.io/scripts/verify_public_site.py`

**Step 1: Write the failing test**

Add expectations for:

- bilingual essay metadata fields such as `subtitle_zh` and `excerpt_zh`
- language-specific rendering hooks in `_pages/essays.md`, `_pages/about.md`, and `_layouts/essay.html`
- optional `bilibili_embed` support in the essay layout
- bilingual blocks in the seed essay

**Step 2: Run test to verify it fails**

Run:

```powershell
py -3 scripts/verify_public_site.py
```

Expected: fail because the current Essays feature still uses Chinese-first body plus English abstract.

### Task 2: Update the rendering layer

**Files:**
- Modify: `E:/research_projects/personal/ShengrenHou.github.io/_pages/about.md`
- Modify: `E:/research_projects/personal/ShengrenHou.github.io/_pages/essays.md`
- Modify: `E:/research_projects/personal/ShengrenHou.github.io/_layouts/essay.html`
- Modify: `E:/research_projects/personal/ShengrenHou.github.io/_sass/_founder-site.scss`

**Step 1: Implement minimal bilingual rendering**

- Use English metadata when the site is in English mode
- Use Chinese metadata when the site is in Chinese mode
- Add a clean Bilibili embed block if `page.bilibili_embed` is present

**Step 2: Run verification**

Run:

```powershell
py -3 scripts/verify_public_site.py
```

Expected: may still fail until the seed essay content is upgraded.

### Task 3: Convert the seed essay

**Files:**
- Modify: `E:/research_projects/personal/ShengrenHou.github.io/_essays/2026-03-17-do-not-wait.md`

**Step 1: Convert to bilingual essay data**

- Add `subtitle_zh`
- Add `excerpt_zh`
- Replace the current single-language body structure with bilingual `lang-block` sections
- Keep the optional video field available for future use

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
git -C E:\research_projects\personal\ShengrenHou.github.io commit -m "feat: support bilingual essays"
git -C E:\research_projects\personal\ShengrenHou.github.io push origin master
```

**Step 2: Confirm live**

- homepage essay highlight switches language correctly
- `/essays/` switches language correctly
- the seed essay displays the correct full body in each language
