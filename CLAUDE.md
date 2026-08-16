# Project Rules

Rules for working in this codebase. Follow these without being asked again.

## Architecture

- **No single-file components.** One component per file. Section-level components live in
  `src/view/`; small reusable primitives (buttons, icons, cards) live in `src/ui/`.
- **Types live in `src/types/`.** Shared TypeScript interfaces and type aliases only — no
  runtime logic.
- **Data lives in `src/constants/`.** All copy, links, prices, hours, image URLs, and other
  literal data belong here, typed against `src/types/`. Components import data, they don't
  define it inline.
- **Hooks live in `src/hooks/`.** One hook per file, named `useX.ts`.
- **`App.tsx` is a composition root only.** It wires sections together; it holds no styling,
  copy, or business logic of its own.

## Styling

- **Panda CSS only.** Do not reintroduce Tailwind, styled-components, CSS modules, or any other
  styling library. Use the generated `styled-system/css` `css()` function (or recipes in
  `styled-system/recipes`) for all styling.
- **No hardcoded colors.** Every color used in a component must be a token defined in
  `panda.config.ts` under `theme.extend.tokens.colors`, referenced by its token path (e.g.
  `'brand.black'`, `'surface.glass'`). Never write a raw hex code or `rgba()` value directly in
  a component file — add a token instead.
- Responsive styles use Panda's object syntax (`{ base: ..., md: ... }`), matching the project's
  single breakpoint at `md` (768px).

## Reuse

- If a className/style combination is used more than once, extract it — either into a Panda
  recipe (for variant-driven elements like buttons) or a shared component in `src/ui/`. Do not
  duplicate styling strings across files.
- Prefer composition over large multi-purpose components. Keep each file focused on one concern.

## General

- Don't add comments explaining what code does; only comment non-obvious *why*.
- Don't add speculative abstractions, feature flags, or config for hypothetical future needs.
