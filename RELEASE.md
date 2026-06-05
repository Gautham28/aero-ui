# Release checklist (v1.0.0)

Run these steps after your packaging files are committed to `main`.

## 1. Commit and push to GitHub

```bash
cd /path/to/aero-ui
git add .
git status   # review what will be committed
git commit -m "chore: prepare v1.0.0 for npm and Vercel docs"
git push origin main
```

## 2. Deploy documentation on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New** → **Project**.
3. Import **Gautham28/aero-ui**.
4. Settings:
   - **Framework Preset:** Other
   - **Build Command:** leave empty
   - **Output Directory:** `.` (dot = repo root)
5. Click **Deploy**.
6. When finished, copy your URL (e.g. `https://aero-ui.vercel.app`).
7. Optional: update `homepage` in `package.json` and the docs link at the top of `README.md` with that URL.

The site root redirects to `/docs/index.html` via `vercel.json`.

## 3. Tag the release on GitHub

```bash
git tag v1.0.0
git push origin v1.0.0
```

## 4. Publish to npm

```bash
npm login
npm publish --access public
```

Package name: `@gautham28/aero-ui`

## 5. Smoke test

- Open your Vercel URL — home page and **Usage** / **Components** should load.
- Open in a browser:
  - `https://cdn.jsdelivr.net/npm/@gautham28/aero-ui@1.0.0/src/aero.css`
  - `https://cdn.jsdelivr.net/npm/@gautham28/aero-ui@1.0.0/src/js/dialog.js`
- Paste the CDN links into a blank HTML file and confirm a `.aero-btn` looks styled.
