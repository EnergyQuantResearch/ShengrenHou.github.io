# Bilingual Essays Design

**Goal:** Upgrade the Essays section from "Chinese body plus English abstract" into a true bilingual longform writing system, while keeping a single canonical URL per essay and preserving the founder-style site identity.

## Product Decision

- Each essay remains a single Markdown file.
- Each essay carries bilingual metadata and bilingual full text.
- The existing site-wide language switch controls what essay title, summary, and body are shown.
- Essays may optionally include an embedded Bilibili player for public talks, lectures, or related recordings.

## Content Model

Each essay should support:

- `title` and `title_zh`
- `subtitle` and `subtitle_zh`
- `excerpt` and `excerpt_zh`
- `tags`
- `featured`
- optional `bilibili_embed`
- bilingual body blocks rendered through the site language toggle

## UX Rules

- `/essays/` should show English-facing metadata in English mode and Chinese-facing metadata in Chinese mode.
- Homepage highlights should also switch with the global language toggle.
- Single essay pages should show the full English body in English mode and the full Chinese body in Chinese mode.
- When a Bilibili embed exists, it should appear in a clean media block below the essay header and above the body.

## Scope

This round includes:

- bilingual metadata and rendering across homepage, essays index, and essay pages
- optional Bilibili iframe support
- conversion of the seed essay into bilingual full text

This round does not include:

- standalone talks or videos index
- automated syncing from Bilibili
- comments
- search or tag landing pages
