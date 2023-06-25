# Welcome my Portfolio - https://teeang.net

## 🖥️ Tech

- [Astro.js](https://astro.build/)
- [Astro.js - mdx integration](https://docs.astro.build/en/guides/integrations-guide/mdx/)
- [TailwindCSS](https://tailwindcss.com/)
- [TailwindCSS - Typography Plugin](https://tailwindcss.com/docs/typography-plugin)
- [TailwindUI](https://tailwindcss.com/docs/typography-plugin) - For the BlogPreviews on the Homepage

## 🚀 Project Structure

Inside this project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                             |
| :---------------------- | :------------------------------------------------- |
| `pnpm install`          | Installs dependencies                              |
| `pnpm run dev`          | Starts local dev server at `localhost:3000`        |
| `pnpm run build`        | Build your production site to `./dist/`            |
| `pnpm run preview`      | Preview your build locally, before deploying       |
| `pnpm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `pnpm run astro --help` | Get help using the Astro CLI                       |

Note: To install pnpm, use the command `$ npm i -g pnpm`
