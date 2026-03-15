# Hou Shengren Public Site

This repository contains the public bilingual website for Hou Shengren. The site is positioned as a public personal profile for an energy technology entrepreneur and researcher, not as an internal company site or an academic-only homepage.

## Purpose and audience

- Present a public profile for readers in academia, industry, media, and collaboration networks.
- Explain current work across electricity markets, AI decision systems, storage and flexibility, and energy digitalization.
- Provide a curated record of public milestones without exposing private or internal information.

## Bilingual structure

The main site pages are maintained in both English and Chinese on the same routes:

- `About`
- `News`
- `Research`
- `Publications`
- `CV`
- `Contact`

## Public-content and privacy rules

- Use only public-safe summaries.
- Do not publish phone numbers, detailed addresses, birth dates, private identifiers, or internal company operating details.
- Do not publish financing structure, equity terms, customer specifics, contracts, hiring plans, internal meeting notes, or government-relations details.
- Treat the `News` page as a manually curated public milestones page, not as an internal changelog.

## Updating the site

- Update the page content under `_pages/`.
- Keep `News` reverse-chronological and public-safe.
- Run `py -3 scripts/verify_public_site.py` after content changes.
- If Ruby and Bundler are available, build locally with `bundle exec jekyll build`.
- If local Ruby is unavailable, rely on the GitHub Actions Pages workflow for build verification.

## Publishing model

This repository is now treated as a personal GitHub Pages user site.

- Target canonical public URL: `https://shengrenhou.github.io/`
- Repository path: `ShengrenHOU/shengrenhou.github.io`
- Default branch: `master`
- No custom domain is configured in this round.

## Verified publishing reality on March 15, 2026

- The repository ownership was transferred from `EnergyQuantResearch` to `ShengrenHOU`.
- The repository name was normalized to `shengrenhou.github.io`.
- `git remote -v` should point to `ShengrenHOU/shengrenhou.github.io`.
- No `CNAME` file exists in the repository.
- `_config.yml` is configured for a personal Pages site with `baseurl: ""`.
- The canonical public site is `https://shengrenhou.github.io/`.

## Deployment notes

- GitHub Actions builds the Jekyll site and deploys the generated `_site` output to GitHub Pages.
- The workflow and `_config.yml` are configured for personal Pages hosting at `https://shengrenhou.github.io/`.
