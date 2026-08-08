# AGENTS.md

## What this repo is

Personal portfolio website (React / Create React App) deployed to GitHub Pages.

## Commands

- `npm start` — dev server
- `npm run build` — production build to `build/`
- `npm run github-pages` — builds and copies output into `docs/` for GitHub Pages (Windows-only script: uses `rmdir` and `ren`)
- `npm test` — runs react-scripts test (Jest) in watch mode. Pass `-- --watchAll=false` to run once.

## Deployment

GitHub Pages serves from the `docs/` folder (not `build/`). After local changes, run `npm run github-pages` and commit the updated `docs/` contents. The `docs/` folder is checked into git.

## Architecture

- Entry: `src/index.js` → `src/Portfolio.js` → `src/router/AppRouter.js`
- React 16, React Router v5, Bootstrap 4
- Routes defined in `src/router/AppRouter.js`
- Static data lives in `src/data/` (biography, skills, experiences, links)
- One API service: `src/services/coursesApi.js`
- Components split into `src/components/portfolio/`, `src/components/shared/`, `src/components/ui/`

## Gotchas

- Service worker is registered by default (`src/serviceWorkerRegistration.js`), called from `src/index.js:11`. It provides offline caching in production. To disable: replace `serviceWorkerRegistration.register()` with `serviceWorkerRegistration.unregister()` in `src/index.js`.
- No TypeScript, no linting config beyond the `react-app` eslint preset in `package.json`.
- Existing tests (19 files) in `src/data/`, `src/components/ui/`, `src/components/shared/`, and `src/services/`. Uses `@testing-library/react` and `@testing-library/jest-dom`.
