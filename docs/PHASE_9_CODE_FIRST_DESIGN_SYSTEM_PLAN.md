# Phase 9 - Code-First Design System Foundation Plan

Project: NEXORA WORKS  
Phase: 9 - Code-first Design System Foundation  
Status: Inspection complete; awaiting approval before implementation  
Creative north star: Complex technology, shaped into elegant systems.  

## 1. Inspection Report

### 1. Current Framework / Version

Detected from `package.json`:

- Next.js: `16.2.10`
- React: `19.2.4`
- React DOM: `19.2.4`
- TypeScript: `^5`
- ESLint: `^9`

Important note: the Phase 9 tech direction says Next.js 15, but this repository is currently on Next.js 16.2.10. I recommend staying on 16.2.10 unless there is a deployment or compatibility reason to downgrade. Downgrading would add churn before the design-system foundation is even stable.

### 2. Current Folder Structure

Repository root contains project documentation and the actual app folder:

```txt
D:\Nexora\Nexora Orbit Digital\Website
  .agents/
  .git/
  nexoraorbit-website/
  NEXORA_OS_DESIGN_OPERATING_SYSTEM.md
  NEXORA_WORKS_COMPETITIVE_INTELLIGENCE_BIBLE.md
  NEXORA_WORKS_CONTENT_ARCHITECTURE_COPYWRITING_SYSTEM.md
  NEXORA_WORKS_CREATIVE_MOTION_BIBLE.md
  NEXORA_WORKS_DESIGN_SYSTEM.md
  NEXORA_WORKS_EXPERIENCE_BLUEPRINT.md
  NEXORA_WORKS_PRODUCT_DESIGN_SPECIFICATION.md
  NEXORA_WORKS_UX_IA_BLUEPRINT.md
```

Actual Next.js app:

```txt
nexoraorbit-website/
  docs/
  public/
  src/
    app/
    components/
    data/
    lib/
      tokens/
    styles/
  package.json
  package-lock.json
  tsconfig.json
  next.config.ts
  postcss.config.mjs
  eslint.config.mjs
```

Current git status inside `nexoraorbit-website`:

```txt
?? docs/
?? src/lib/
?? src/styles/
```

These are untracked workspace files. Treat them as existing work and do not discard them.

### 3. Tailwind Installation / Version

Detected from `package.json`:

- `tailwindcss`: `^4`
- `@tailwindcss/postcss`: `^4`

Detected from `postcss.config.mjs`:

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

Detected from `src/app/globals.css`:

```css
@import "tailwindcss";
```

There is no `tailwind.config.js`, which is normal for a Tailwind v4-first setup when using CSS `@theme`.

### 4. TypeScript Configuration

TypeScript is configured and strict:

- `strict: true`
- `moduleResolution: "bundler"`
- `jsx: "react-jsx"`
- `noEmit: true`
- Path alias: `@/*` maps to `./src/*`
- Next plugin enabled in `tsconfig.json`

### 5. Existing App / Pages Structure

The app uses Next.js App Router:

```txt
src/app/
  layout.tsx
  page.tsx
  globals.css
  robots.ts
  sitemap.ts
  favicon.ico
  about/page.tsx
  contact/page.tsx
  packages/page.tsx
  portfolio/page.tsx
  privacy-policy/page.tsx
  services/page.tsx
  terms-conditions/page.tsx
```

Current pages are static marketing pages. There is no design-system preview route yet.

### 6. Existing Global CSS Files

Currently active CSS:

- `src/app/globals.css`

Existing but not yet imported by the app:

- `src/styles/tokens.css`
- `src/styles/typography.css`

Current `globals.css` is minimal and light-first:

- Imports Tailwind.
- Defines `--background` and `--foreground`.
- Maps only `--color-background`, `--color-foreground`, `--font-sans`, and `--font-mono`.
- Uses Arial / Helvetica.
- Does not import `src/styles/tokens.css`.
- Does not import `src/styles/typography.css`.
- Does not define dark theme or `[data-theme]` application shell.

Existing `src/styles/tokens.css` already contains a partial NEXORA token layer:

- Brand colors.
- Neutral colors.
- Accent colors.
- Status colors.
- Gradients.
- Spacing.
- Radius.
- Blur.
- Shadows.
- Motion.
- Font families.
- Dark semantic variables under `[data-theme="dark"]`.
- Light semantic variables under `[data-theme="light"]`.

Risk: comments contain encoding artifacts from previous generated text, and the file is not yet wired into the app.

Existing `src/styles/typography.css` contains `.ds-*` utility classes for display, heading, body, UI, and mobile clamps. It is also not wired into the app.

### 7. Existing Component Structure

Current components are flat marketing components:

```txt
src/components/
  Header.tsx
  Hero.tsx
  ServicesSection.tsx
  PortfolioPreview.tsx
  PackagesSection.tsx
  Testimonials.tsx
  CTASection.tsx
  ContactForm.tsx
  Footer.tsx
  SectionHeader.tsx
  WhatsAppButton.tsx
```

Characteristics:

- Presentational and page-oriented.
- Not organized as primitives.
- Not Storybook-ready.
- Hardcoded Tailwind palette usage such as `slate-*`, `sky-*`, `white`, `emerald-*`.
- No token-based variants.
- No shared Button/Card/Input primitives.
- Header is client-side and has mobile menu state.
- Contact form is UI-only; no submission logic.

Existing utility/token files:

```txt
src/lib/cn.ts
src/lib/tokens/
  breakpoints.ts
  colors.ts
  index.ts
  motion.ts
  radius.ts
  shadows.ts
  spacing.ts
  typography.ts
```

These are useful early foundations but currently live under `src/lib`, not a dedicated `src/design-system` namespace. They also include encoding artifacts in comments.

### 8. Risks Before Adding a Design System

1. Version mismatch:
   - User direction says Next.js 15.
   - Repo uses Next.js 16.2.10.
   - Recommendation: do not downgrade unless explicitly required.

2. Existing untracked work:
   - `docs/`, `src/lib/`, and `src/styles/` are already untracked.
   - Any implementation must preserve and rationalize these files rather than overwrite them casually.

3. Current app is light-first:
   - The existing public pages use white backgrounds and hardcoded Tailwind colors.
   - A dark-first design system must not accidentally restyle existing pages before approval.

4. Token files exist but are not active:
   - `src/styles/tokens.css` and `src/styles/typography.css` are not imported.
   - The system needs a controlled import strategy to avoid regressions.

5. Naming/location ambiguity:
   - Existing token files are under `src/lib/tokens`.
   - Phase 9 should decide whether to keep that location or introduce `src/design-system/tokens`.

6. Missing primitives:
   - Components are marketing-level, not primitive-level.
   - Building primitives will require a new component namespace.

7. No theme provider:
   - No `data-theme`, no no-FOUC script, no system preference support, no theme toggle.

8. Accessibility baseline is incomplete:
   - Existing controls are mostly semantic, but there is no formal focus ring system, validation system, or component-level accessibility contract.

9. Possible mobile menu issue:
   - Earlier automated browser checks could not toggle the mobile menu. This may be automation-specific, but it should be manually verified before relying on the current header as an accessibility baseline.

10. Package dependency policy:
   - Adding dependencies such as `clsx`, `tailwind-merge`, Radix, or Storybook should not happen in this planning step.
   - For Phase 9 implementation, prefer lightweight custom primitives unless a dependency is approved.

### 9. Recommended Implementation Plan for Phase 9

Build the foundation additively, isolated from the existing marketing pages:

1. Keep Next.js 16.2.10 unless user explicitly approves a downgrade.
2. Preserve existing untracked token/style files, but normalize comments and fold them into a clear `src/design-system` architecture.
3. Introduce a design-system namespace and preview route.
4. Wire token CSS into Tailwind v4 in a way that adds utilities without changing existing pages.
5. Add dark/light theme support for design-system surfaces only first.
6. Build accessible primitives, not marketing sections.
7. Create `/design-system` as a living preview/documentation route.
8. Run lint/build and spot-check that existing pages do not visually regress.

---

## 2. Objectives

- Establish a code-first, token-driven foundation for NEXORA WORKS.
- Make dark theme the default design-system environment.
- Support light theme as a first-class mode.
- Use CSS variables as the source of runtime theming.
- Surface semantic tokens to Tailwind CSS v4.
- Create reusable, accessible, typed primitives.
- Create a preview/documentation page for tokens and primitives.
- Keep all work Storybook-ready without installing Storybook yet.
- Avoid final page design, homepage work, or marketing section implementation.
- Preserve current public pages until a later migration phase.

---

## 3. File Structure To Create Or Rationalize

Recommended target structure:

```txt
src/
  app/
    design-system/
      page.tsx
    globals.css

  design-system/
    index.ts
    tokens/
      index.ts
      colors.ts
      spacing.ts
      typography.ts
      radius.ts
      shadows.ts
      motion.ts
      breakpoints.ts
    theme/
      ThemeProvider.tsx
      ThemeScript.tsx
      useTheme.ts
    utils/
      cn.ts
    components/
      Button/
        Button.tsx
        Button.types.ts
        index.ts
      Card/
      Input/
      Textarea/
      Select/
      Badge/
      Container/
      Stack/
      Heading/
      Text/
      Divider/
      ThemeToggle/

  styles/
    tokens.css
    typography.css
    design-system.css
```

Existing files to rationalize:

- `src/lib/cn.ts` can either stay as a shared utility or be re-exported from `src/design-system/utils/cn.ts`.
- `src/lib/tokens/*` can either be moved into `src/design-system/tokens/*` or kept and re-exported. Recommendation: move during implementation only if approved, because these are currently untracked.
- `src/styles/tokens.css` and `src/styles/typography.css` should be cleaned, imported, and scoped carefully.

Files not to touch in Phase 9 except if absolutely necessary:

- Existing marketing components in `src/components`.
- Existing app pages under `src/app/*/page.tsx`.
- Data files under `src/data`.

Potential minimal required existing-file edits:

- `src/app/globals.css`: additive imports and Tailwind `@theme` semantic token mappings.
- `src/app/layout.tsx`: only if theme provider or no-FOUC theme script is approved.

---

## 4. Token Architecture

### Tier 1: Primitive Tokens

Raw values. Used to define the system, not directly consumed by components.

Categories:

- Brand colors.
- Neutral colors.
- Accent colors.
- Semantic status colors.
- Spacing scale.
- Radius scale.
- Blur scale.
- Shadow/elevation scale.
- Typography scale.
- Motion duration and easing.
- Breakpoints and grid intent.

### Tier 2: Semantic Tokens

Role-based tokens. Components should consume these.

Examples:

- `--surface-base`
- `--surface-raised`
- `--surface-panel`
- `--surface-glass`
- `--text-primary`
- `--text-secondary`
- `--text-muted`
- `--border-default`
- `--border-strong`
- `--focus-ring-color`
- `--app-background`

Theme model:

- `[data-theme="dark"]` defines signature dark environment.
- `[data-theme="light"]` defines editorial light environment.
- Dark should be the design-system default.

### Tier 3: Component Tokens

Optional component-level aliases for repeated patterns.

Examples:

- `--button-primary-bg`
- `--button-primary-text`
- `--card-bg`
- `--card-border`
- `--input-bg`
- `--input-border`

Recommendation: do not over-create component tokens until primitive components reveal repeated needs.

### Tailwind v4 Mapping

Use `@theme inline` to map semantic CSS variables into utilities.

Target utility names:

- `bg-surface`
- `bg-surface-raised`
- `bg-panel`
- `bg-glass`
- `text-primary`
- `text-secondary`
- `text-muted`
- `border-default`
- `border-strong`
- `ring-focus`
- `shadow-panel`

Important: mapping must be additive so existing `slate-*` and `sky-*` classes continue to work.

---

## 5. Component Architecture

Build primitives only. No final marketing sections.

### Initial Primitive Set

1. `Button`
2. `Card`
3. `Input`
4. `Textarea`
5. `Select`
6. `Badge`
7. `Container`
8. `Stack`
9. `Heading`
10. `Text`
11. `Divider`
12. `ThemeToggle`

### Later Primitive Candidates

Do not build unless explicitly approved:

- Tabs
- Accordion
- Modal
- Drawer
- Tooltip
- Pagination
- Breadcrumbs
- Table
- Loader
- EmptyState

These belong in a later subphase unless the preview page needs a lightweight example.

### Component Standards

Every primitive should:

- Be typed with TypeScript.
- Accept `className`.
- Use semantic tokens only.
- Use accessible native elements where possible.
- Support keyboard behavior.
- Include disabled/error/loading states where relevant.
- Avoid page-specific content.
- Be placed in its own folder with an `index.ts` export.
- Be ready for future `*.stories.tsx`.

### Suggested Variant Model

Button:

- Variants: `primary`, `secondary`, `ghost`, `outline`, `danger`
- Sizes: `sm`, `md`, `lg`
- States: default, hover, focus, pressed, loading, disabled

Card:

- Variants: `surface`, `raised`, `outline`, `glass`
- Padding: `sm`, `md`, `lg`

Input/Textarea/Select:

- States: default, focus, error, disabled, success
- Required label support
- Hint and error text support

Badge:

- Tones: `neutral`, `accent`, `success`, `warning`, `danger`, `info`

Text/Heading:

- Size/scale props
- Tone props
- Semantic `as` support where needed

---

## 6. Accessibility Requirements

Phase 9 primitives must meet these requirements before implementation is considered complete:

- All interactive controls have visible `:focus-visible` styles.
- Focus ring works on dark and light themes.
- Minimum target size is 44px for default interactive controls.
- Buttons expose loading state without losing accessible name.
- Inputs have visible labels, not placeholder-only labels.
- Error messages are connected with `aria-describedby`.
- Invalid fields use `aria-invalid`.
- Native controls are preferred for select/input behavior.
- Theme toggle communicates current theme and action.
- Text/background pairs meet WCAG AA in both themes.
- Reduced motion is respected with `prefers-reduced-motion`.
- Preview page has one H1 and correct heading hierarchy.
- No information is conveyed by color alone.

---

## 7. Preview Page Requirements

Route:

```txt
/design-system
```

Purpose:

- Living documentation for Phase 9.
- QA surface for tokens, themes, and primitives.
- Not a public marketing page.
- Not linked from main navigation yet.

Preview page must show:

- Dark/light/system theme toggle.
- Primitive color tokens.
- Semantic color tokens in both themes.
- Typography scale.
- Spacing scale.
- Radius scale.
- Shadow/elevation scale.
- Motion duration/easing reference.
- Button variants, sizes, and states.
- Card variants.
- Form controls with labels, hints, errors, disabled states.
- Badges.
- Container and Stack examples.
- Heading/Text examples.
- Divider examples.
- Accessibility notes.
- Reduced-motion note.

Preview page must not:

- Become the homepage.
- Use final marketing sections.
- Include fake case studies, fake testimonials, or final brand claims.
- Add heavy 3D, canvas, or animation systems.

---

## 8. QA Checklist

### Build / Type Safety

- [ ] `npm.cmd run lint` passes.
- [ ] `npm.cmd run build` passes.
- [ ] TypeScript strict mode remains clean.
- [ ] No new runtime console errors.

### Token System

- [ ] Token CSS imports successfully.
- [ ] Tailwind v4 semantic mappings work.
- [ ] Components use semantic tokens, not raw hex values.
- [ ] Existing pages still render with their current styles.

### Theme System

- [ ] Dark mode works on `/design-system`.
- [ ] Light mode works on `/design-system`.
- [ ] System preference mode works if implemented.
- [ ] No flash of wrong theme after provider/script is introduced.
- [ ] `color-scheme` reflects current theme.

### Accessibility

- [ ] Keyboard can reach every interactive preview component.
- [ ] Focus styles are visible.
- [ ] Inputs are labeled.
- [ ] Error messages are programmatically connected.
- [ ] Disabled states are clear.
- [ ] Color contrast passes AA.
- [ ] Reduced motion preference is respected.

### Responsive

- [ ] Preview page works at mobile, tablet, and desktop widths.
- [ ] No horizontal overflow.
- [ ] Components maintain stable dimensions.
- [ ] Button text and labels do not clip.

### Isolation

- [ ] Existing homepage and pages are not redesigned.
- [ ] Existing marketing components are not migrated.
- [ ] Main navigation is not changed to expose `/design-system`.
- [ ] Only planned foundation files are changed.

---

## 9. What NOT To Build Yet

Do not build:

- Homepage.
- Final website pages.
- Final hero sections.
- Final services sections.
- Final portfolio sections.
- Final CTA sections.
- Final marketing layouts.
- Case study UI.
- Blog UI.
- Careers UI.
- 3D scenes.
- Complex animation systems.
- CMS integration.
- Analytics integration.
- Form backend.
- Storybook installation.
- Radix/shadcn/component library adoption without approval.
- Visual redesign of the current public site.

Do not do:

- Downgrade Next.js without explicit approval.
- Replace existing pages with NEXORA OS styling.
- Introduce neon/cyberpunk/gaming/crypto visual language.
- Use fake proof, fake metrics, or fake testimonials.

---

## 10. Recommended Implementation Sequence After Approval

1. Resolve Next.js version decision:
   - Recommended: keep Next.js 16.2.10.

2. Normalize foundation files:
   - Clean encoding artifacts in comments.
   - Decide whether token TS files stay in `src/lib/tokens` or move to `src/design-system/tokens`.

3. Wire CSS tokens additively:
   - Import token CSS and typography CSS through a design-system entry stylesheet.
   - Map semantic tokens into Tailwind v4 with `@theme inline`.
   - Avoid changing existing public page styles.

4. Add theme foundation:
   - `ThemeProvider`.
   - `useTheme`.
   - Optional no-FOUC script.
   - Scope dark/light theme to `/design-system` first if we want zero public-page impact.

5. Build primitives:
   - `Container`, `Stack`, `Text`, `Heading`, `Divider`.
   - `Button`.
   - `Card`.
   - `Input`, `Textarea`, `Select`.
   - `Badge`.
   - `ThemeToggle`.

6. Build `/design-system` preview:
   - Token galleries.
   - Component galleries.
   - State demos.
   - Accessibility notes.

7. Verify:
   - Lint.
   - Build.
   - Keyboard checks.
   - Theme checks.
   - Responsive checks.
   - Existing page regression spot check.

---

## 11. Approval Questions

Before implementation, please confirm:

1. Should we keep Next.js 16.2.10, despite the Phase 9 direction saying Next.js 15?
2. Should the new token files be moved into `src/design-system/tokens`, or should we keep the existing `src/lib/tokens` location and re-export it?
3. Should the dark/light theme provider affect the whole app now, or only the `/design-system` preview route during Phase 9?

