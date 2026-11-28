# RVP blog editing

The RVP Blog project (`4crwfylc`, public `production` dataset) belongs to the same Sanity login as Rerol, with separate content.

Editor: https://rvprefinery.com/studio/
English blog: https://rvprefinery.com/#/en/blogs
Kannada blog: https://rvprefinery.com/#/kn/blogs

## Publish a post

1. Sign into Studio with the existing REROL Google account and open **Blog post**.
2. Create a post. Fill in both English and Kannada titles, select a topic, generate the shared URL slug, and upload a cover with image descriptions in both languages.
3. In **English & Kannada**, write both introductions, article bodies and key takeaways. Headings create the on-page contents list. Lists, links, quotes, bold/italic text and inline images are supported.
4. Check the author and publication date. Optionally feature the post or add further reading and localized search descriptions.
5. Click **Publish**. Visitors see published content when opening, refreshing, or returning focus to the blog. Sanity's CDN may take a short time to refresh. No Vercel rebuild or webhook is required.

Drafts stay out of the website. Unpublishing removes a post on the next successful content fetch. A published post with a future publication date remains hidden until that date. Both translations are required before publishing. Keep existing slugs unchanged to preserve shared links.

## Development

- `npm ci` installs the website and Studio workspace.
- `npm run dev` starts the website at http://127.0.0.1:5173.
- `npm run studio:dev` starts Studio at http://127.0.0.1:3333.
- `npm run build` validates TypeScript, builds Vite, builds Studio, and copies it into `dist/studio/`.
- Vercel rewrites nested `/studio/` routes to the Studio entry point and marks them `noindex`.
- Public project settings live in `sanity/project.json`. The browser uses only a public published-content query; no secret token is bundled.

The six original bilingual guides and their images were migrated into Sanity. `src/lib/articles.ts` is retained only as the migration source and is not imported by the live website. `npm run studio:seed` uses the Sanity CLI login, skips existing seeded document IDs, and never overwrites edited posts. Run this only for an intentional migration, not during a build.

The CLI login used for setup is kept separately from other local Sanity accounts. When needed, set `SANITY_CLI_CONFIG_PATH` to that local account's config path before running authenticated commands. Do not commit CLI credentials or tokens. Studio sign-in works independently in the browser.

To register the editor in Sanity Manage after a build, run `npm run register --workspace=rvp-blog-studio` while signed into the REROL account.
