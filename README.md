# aero UI

**Ultra-lightweight HTML + CSS components for the web.** Zero dependencies, no build step, no framework required.

[![npm version](https://img.shields.io/npm/v/@gautham28/aero-ui.svg)](https://www.npmjs.com/package/@gautham28/aero-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Zero dependencies](https://img.shields.io/badge/dependencies-none-success)](package.json)

| | |
|---|---|
| **Documentation** | Deploy this repo on [Vercel](#deploying-the-docs-on-vercel) — site root opens the docs. Browse source in [`docs/`](docs/). |
| **npm** | [`@gautham28/aero-ui`](https://www.npmjs.com/package/@gautham28/aero-ui) |
| **Repository** | [github.com/Gautham28/aero-ui](https://github.com/Gautham28/aero-ui) |

---

## Why aero UI?

Most UI libraries pull in npm trees, bundlers, and breaking toolchain churn. **aero UI** is the opposite: a small set of **class-based** components you drop into any HTML page.

- **~10KB** CSS and **~1KB** JS (minified + gzipped)
- **Zero runtime dependencies** — vanilla CSS + a tiny dialog helper
- **Works anywhere** — static sites, PHP, Django, React/Vue shells, or plain `.html` files
- **shadcn-inspired** look — clean, modern defaults via CSS variables
- **Dark mode** — system preference + optional manual toggle (docs site)

---

## Components

| Component | Classes | Notes |
|-----------|---------|--------|
| **Badge** | `.aero-badge`, `.outline` | Status labels |
| **Button** | `.aero-btn`, `.outline`, `.ghost` | Primary actions |
| **Input** | `.aero-input-group`, `.aero-label`, `.aero-input` | Form fields |
| **Card** | `.aero-card`, `.aero-card-header`, `.aero-card-content`, `.aero-card-footer` | Layout blocks |
| **Dialog** | `.aero-dialog` + `data-dialog-target` / `data-dialog-close` | Native `<dialog>` + ~20 lines of JS |

Full previews, copy-paste snippets, and variant examples live on the **documentation site** ([`docs/components.html`](docs/components.html)).

---

## Installation

Pick one of the options below.

### 1. CDN (fastest — no install)

Add these tags in your `<head>` / before `</body>`. Pin the version (`@1.0.0`) so production builds stay stable.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gautham28/aero-ui@1.0.0/src/aero.css">
<script src="https://cdn.jsdelivr.net/npm/@gautham28/aero-ui@1.0.0/src/js/dialog.js" defer></script>
```

- **CSS:** bundled `aero.css` (imports all component styles)
- **JS:** only needed if you use **Dialog**; omit the script otherwise

### 2. npm

```bash
npm install @gautham28/aero-ui
```

With a bundler (Vite, Webpack, etc.):

```js
import '@gautham28/aero-ui/aero.css';
import '@gautham28/aero-ui/dialog.js'; // optional — dialogs only
```

You can also copy files from `node_modules/@gautham28/aero-ui/src/` and link them in HTML.

### 3. Download from GitHub

```bash
curl -O https://raw.githubusercontent.com/Gautham28/aero-ui/main/src/aero.css
curl -O https://raw.githubusercontent.com/Gautham28/aero-ui/main/src/js/dialog.js
```

Or clone this repo and use the `src/` folder directly.

---

## Quick start

Save as `index.html` and open in a browser (or serve with any static host):

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My app</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@gautham28/aero-ui@1.0.0/src/aero.css">
  <script src="https://cdn.jsdelivr.net/npm/@gautham28/aero-ui@1.0.0/src/js/dialog.js" defer></script>
</head>
<body>
  <h1>Hello, aero UI</h1>

  <button class="aero-btn">Primary</button>
  <button class="aero-btn outline">Outline</button>
  <button class="aero-btn ghost">Ghost</button>

  <span class="aero-badge default">New</span>
</body>
</html>
```

**Dialog example:**

```html
<button class="aero-btn" data-dialog-target="my-modal">Open</button>

<dialog id="my-modal" class="aero-dialog">
  <h3 class="aero-card-title">Confirm</h3>
  <p class="aero-card-description">Are you sure?</p>
  <button class="aero-btn outline" data-dialog-close>Cancel</button>
  <button class="aero-btn" data-dialog-close>OK</button>
</dialog>
```

More examples: [`docs/usage.html`](docs/usage.html) · [`docs/demo.html`](docs/demo.html)

---

## Customization

Theme tokens are CSS variables on `:root` (see [`src/css/base.css`](src/css/base.css)):

```css
:root {
  --background: #ffffff;
  --foreground: #09090b;
  --primary: #18181b;
  --radius: 0.375rem;
  /* ... */
}
```

Override them in your own stylesheet after importing `aero.css`. Dark mode uses the `.dark` class on `<html>` or `prefers-color-scheme: dark`.

---

## Project structure

```
aero-ui/
├── src/
│   ├── aero.css          # Single entry — @imports all component CSS
│   ├── css/              # base, button, badge, input, card, dialog
│   └── js/
│       ├── dialog.js     # Dialog open/close (library)
│       └── theme.js      # Docs-only theme toggle
├── docs/                 # Documentation website (static HTML)
│   ├── index.html        # Home
│   ├── components.html   # Component reference
│   ├── usage.html        # Install guide
│   └── demo.html         # Sample dashboard
├── package.json          # npm package metadata
└── vercel.json           # Vercel redirect: / → /docs/index.html
```

---

## Documentation site

This repo includes a static docs site under [`docs/`](docs/):

| Page | Path |
|------|------|
| Home | `docs/index.html` |
| Components | `docs/components.html` |
| Installation | `docs/usage.html` |
| Demo | `docs/demo.html` |

### Deploying the docs on Vercel

This project is set up for **[Vercel](https://vercel.com)**:

1. Import [Gautham28/aero-ui](https://github.com/Gautham28/aero-ui) in the Vercel dashboard (**Add New Project** → your GitHub repo).
2. **Framework Preset:** Other  
3. **Build Command:** leave empty  
4. **Output Directory:** `.` (repository root)  
5. Deploy.

[`vercel.json`](vercel.json) redirects `/` to `/docs/index.html`, so your live URL opens the docs home. Asset paths (`../src/...`) work because the whole repo is published.

After the first deploy:

1. Copy your Vercel URL (e.g. `https://aero-ui.vercel.app`).
2. Optionally set `homepage` in [`package.json`](package.json) to that URL.
3. Add the live link at the top of this README if you want visitors to jump straight to the hosted docs.

---

## For maintainers

### Publish a new npm version

```bash
# bump version in package.json, then:
npm login
npm publish --access public
git tag v1.0.0
git push origin v1.0.0
```

See [`RELEASE.md`](RELEASE.md) for a full release checklist.

### Local preview of docs

```bash
# from repo root, any static server, e.g.:
python3 -m http.server 8080
# open http://localhost:8080/docs/index.html
```

---

## Contributing

Issues and pull requests are welcome on [GitHub Issues](https://github.com/Gautham28/aero-ui/issues).

---

## License

[MIT](LICENSE) — Copyright (c) 2026 Gautham Krishna
