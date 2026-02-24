# Tech Tutorials (tech-tutorial-site)

This repository contains a Docusaurus-based tutorial website scaffold with Markdown tutorials for Python and SQL, Google AdSense-ready ad components, and GitHub Pages deployment configured.

Quick start

1. Install

```bash
npm install
```

2. Run in development

```bash
npm start
```

3. Build

```bash
npm run build
```

4. Deploy to GitHub Pages (set `url`, `baseUrl`, `organizationName`, `projectName` in `docusaurus.config.js` first)

```bash
npm run deploy
```

Notes

- Replace the AdSense client id in `docusaurus.config.js`: the `adClient` variable.
- The site injects the AdSense script and provides `AdBanner` component in `src/components/AdBanner.js`.
- Top banner and floating right sidebar ads are injected via a theme Layout wrapper; inline ad placeholders exist in docs as `<div class="inline-ad" data-ad="inline"></div>`.
