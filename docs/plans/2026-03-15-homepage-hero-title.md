# Homepage Hero Title Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Update the Chinese homepage hero title to the approved founder-style statement and keep the hero visually balanced.

**Architecture:** The homepage content lives in `_pages/about.md`, rendered by the `home-founder` layout and styled through `_sass/_founder-site.scss`. Verification is enforced through `scripts/verify_public_site.py`, so the change should be made test-first by updating the expected title there before editing the page content.

**Tech Stack:** Jekyll, Markdown/HTML content blocks, SCSS, Python verification script

---

### Task 1: Add verification for the new Chinese hero title

**Files:**
- Modify: `E:/科研项目/ShengrenHou.github.io/scripts/verify_public_site.py`

**Step 1: Write the failing test**

Add an assertion that `_pages/about.md` must contain:

```text
用 AI 与市场机制，重构能源系统的决策效率。
```

and must no longer contain:

```text
为电力市场与能源转型构建真正可落地的决策系统。
```

**Step 2: Run test to verify it fails**

Run:

```powershell
py -3 scripts/verify_public_site.py
```

Expected: fail because the homepage still has the old Chinese H1.

### Task 2: Update the homepage hero copy

**Files:**
- Modify: `E:/科研项目/ShengrenHou.github.io/_pages/about.md`
- Modify: `E:/科研项目/ShengrenHou.github.io/_sass/_founder-site.scss`

**Step 1: Write minimal implementation**

- Replace the Chinese H1 with the approved title.
- If the new line breaks awkwardly, make a minimal Chinese-only hero sizing or spacing adjustment in `_founder-site.scss`.

**Step 2: Run verification**

Run:

```powershell
py -3 scripts/verify_public_site.py
git -C E:\科研项目\ShengrenHou.github.io diff --check
```

Expected: both commands pass.

### Task 3: Verify live rendering

**Files:**
- None

**Step 1: Open the homepage**

Check:

```text
https://shengrenhou.github.io/?v=hero-title-refresh
```

**Step 2: Confirm**

- The Chinese hero title displays the new wording.
- The hero remains visually balanced.
