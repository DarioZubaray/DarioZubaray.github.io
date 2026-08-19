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

## Dark Mode

Pure React context + CSS custom properties implementation (no extra packages).

- **Context**: `src/context/ThemeContext.js` — manages theme state, persists to `localStorage` key `'portfolio-theme'`
- **Toggle UI**: `src/components/ui/ThemeToggle.js` — 3-mode button group (light/dark/system)
- **CSS variables**: `src/theme.css` — defines all colors as CSS custom properties under `:root, html.light` and `html.dark`
- **Bootstrap overrides**: `html.dark .card`, `html.dark .nav-link`, etc. in `theme.css:80-145`
- **Provider wrapping**: `<ThemeProvider>` wraps `<AppRouter />` in `src/Portfolio.js:11`
- **Mounted in**: `Navbar.js:101-113` (desktop + mobile)
- **How it works**: `useEffect` adds `'light'` or `'dark'` class to `<html>`, which activates the corresponding CSS variable set
- **System mode**: Listens to `matchMedia('prefers-color-scheme: dark')` for live OS theme changes

## i18n (Multi-language)

Uses `i18next` + `react-i18next` + `i18next-browser-languagedetector`.

- **Config**: `src/i18n.js` — initializes i18next with detector, fallback to English
- **Translations**: `src/locales/en.json`, `src/locales/es.json` (English, Spanish)
- **Detection order**: `localStorage` key `'portfolio-language'`, then browser language
- **Selector UI**: `src/components/ui/LanguageSelector.js` — EN/ES button group
- **Mounted in**: `Navbar.js:101-113` (desktop + mobile)
- **Usage in components**: `const { t } = useTranslation()` → `t('namespace.key')`
- **Data files with i18n keys**: `src/data/experiences.js`, `src/data/skills.js`, `src/data/biography.js` — use key references like `companyKey: "experience.companies.botmaker"` that components resolve via `t()`
- **Interpolation**: `{{variable}}` syntax (e.g., `{{year}}`, `{{n}}`)
- **Components using translations**: 18 components including Navbar, Footer, IntroduceCard, SkillsCard, ExperienceCard, BlogCard, CourseFilter, CourseTimeline, TicTacToeBoard, and all screen components

## Gotchas

- Service worker is registered by default (`src/serviceWorkerRegistration.js`), called from `src/index.js:11`. It provides offline caching in production. To disable: replace `serviceWorkerRegistration.register()` with `serviceWorkerRegistration.unregister()` in `src/index.js`.
- No TypeScript, no linting config beyond the `react-app` eslint preset in `package.json`.
- Existing tests (19 files) in `src/data/`, `src/components/ui/`, `src/components/shared/`, and `src/services/`. Uses `@testing-library/react` and `@testing-library/jest-dom`.
- i18n is initialized as a side-effect import in `src/index.js:5` (`import './i18n'`).
- Dark mode meta theme-color (`public/index.html:7`) is updated dynamically by `ThemeContext.js` (dark: `#1a1a2e`, light: `#FFC90E`).
