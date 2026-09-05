// Checks that dist/ is a complete static site before it can be deployed.
//
// This exists because a broken build shipped and nothing noticed. The site is
// served by a Worker whose entire configuration is `assets.directory: ./dist`,
// so there is no server to answer for anything the build failed to emit: a
// missing file is a 404 in production and nothing else.
//
// The failure that prompted it: every image on /projects/pleno/ 404'd, because
// the deployed HTML referenced /_image?href=...&w=624&f=avif instead of the
// baked /_astro/*.avif files. Those on-demand URLs are what Astro emits when
// the image service is a passthrough one, as it is under a server adapter, and
// they need a server to answer them. There isn't one. The build exited 0 and
// `astro check` passed, so nothing stopped it shipping.
//
// Worth stating because it is the obvious wrong guess: a missing sharp does not
// cause this. Without sharp `astro build` fails outright with MissingSharp, so
// a build that produced these URLs had a different image service configured,
// not a broken one.
//
// So this asserts the two things the deploy target actually requires: that
// nothing expects a server, and that every local asset referenced by the HTML
// is really on disk.

import { existsSync, globSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const dist = resolve("dist");

if (!existsSync(dist)) {
  console.error("check-build: dist/ does not exist — run astro build first");
  process.exit(1);
}

const pages = globSync("**/*.html", { cwd: dist });
if (pages.length === 0) {
  console.error("check-build: dist/ contains no HTML");
  process.exit(1);
}

const failures = [];
let assetsChecked = 0;

for (const page of pages) {
  const html = readFileSync(join(dist, page), "utf8");

  // 1. On-demand endpoints. /_image is the image service's; the check is written
  //    against the prefix rather than the exact query so a change in Astro's
  //    parameters does not quietly stop matching.
  const onDemand = [...html.matchAll(/["'\s](\/_image\?[^"'\s>]*)/g)];
  if (onDemand.length > 0) {
    failures.push(
      `${page}: ${onDemand.length} on-demand /_image URL(s). Nothing serves ` +
        `these — the site is static assets only, so each one is a 404. The ` +
        `build used a passthrough image service instead of baking the files, ` +
        `which means it ran with a different config than this repo's (an ` +
        `adapter, or image.service overridden). Note it is NOT a missing ` +
        `sharp: that fails the build outright. ` +
        `First: ${onDemand[0][1].slice(0, 90)}`,
    );
  }

  // 2. Every root-relative asset the page references must exist on disk. Only
  //    src/srcset/href are followed, and only into the directories the build
  //    owns, so links to real routes are not mistaken for missing files.
  const refs = new Set();
  for (const [, value] of html.matchAll(/(?:src|href)="(\/(?:_astro|fonts)\/[^"]+)"/g)) {
    refs.add(value);
  }
  for (const [, set] of html.matchAll(/srcset="([^"]+)"/g)) {
    for (const candidate of set.split(",")) {
      const url = candidate.trim().split(/\s+/)[0];
      if (url?.startsWith("/_astro/") || url?.startsWith("/fonts/")) refs.add(url);
    }
  }

  for (const ref of refs) {
    assetsChecked += 1;
    const file = join(dist, decodeURIComponent(ref.split("?")[0]));
    if (!existsSync(file)) failures.push(`${page}: references ${ref}, which is not in dist/`);
  }
}

if (failures.length > 0) {
  console.error(`check-build: ${failures.length} problem(s)\n`);
  for (const failure of failures.slice(0, 20)) console.error(`  - ${failure}`);
  if (failures.length > 20) console.error(`  ...and ${failures.length - 20} more`);
  process.exit(1);
}

console.log(
  `check-build: ${pages.length} pages, ${assetsChecked} asset references, no on-demand URLs`,
);
