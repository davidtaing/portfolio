# teeang.net

Personal site and portfolio. Astro 7, Tailwind 4, MDX, deployed as a static build.

## Develop

```sh
pnpm install
pnpm dev          # or: pnpm exec astro dev --background
pnpm build        # static output in dist/
pnpm exec astro check
```

`astro check` needs TypeScript 6.x. TypeScript 7's native compiler does not yet expose the programmatic API the checker uses, so `typescript` is pinned to `^6`.

## Layout

| Path | What it is |
| --- | --- |
| `src/pages/index.astro` | Home: positioning, current role, projects, writing index |
| `src/pages/writing/` | Writing index and the `[...slug]` post route |
| `src/content/writing/` | Posts as MDX; schema in `src/content.config.ts` |
| `src/layouts/Base.astro` | Document shell, nav, footer, fonts, meta |
| `src/components/Project.astro` | Project entry with a state chip |
| `src/styles/global.css` | Theme tokens, light and dark, plus long-form `.prose` styles |

## Theming

Colours are CSS custom properties on `:root`, redefined under `@media (prefers-color-scheme: dark)`, and exposed to Tailwind through `@theme inline`. To add a colour, define it in both blocks and map it once in `@theme inline`.

## Adding a post

Drop an `.mdx` file in `src/content/writing/`. Frontmatter needs `title`, `description`, `pubDate` and `topic`. Optional: `archiveNote` for pieces kept as a period record, and `draft: true` to hide it.
