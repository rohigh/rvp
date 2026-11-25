# RVP Refinery

Bilingual React 19 + TypeScript + Vite 6 + Tailwind CSS 4 site.

## Development

Run `npm install`, then `npm run dev`. Run `npm run build` to compile the production site.

## Pages

Home, Used Oil Collection, Products, About, Contact, Blogs, and six individual guide pages are implemented in English and Kannada. Routes use `#/en/...` and `#/kn/...`. The language switch preserves the page, guide and selected section. Inner pages load as separate bundles.

The Home components and supplied footer are retained. The remaining pages share the navy, cobalt, amber and cloud palette, transparent brand assets, rounded photography, section reveals, and responsive page styles.

## Client details

Client contact details are configured in `src/lib/company.ts`: +91 91766 42399 for calls and WhatsApp, and rvp.tumkur@gmail.com for email. These details appear across both languages and power enquiry handoff links. A verified map URL and a server enquiry endpoint remain unconfigured. The address button opens a Maps search for the supplied address.

Product grades, lab values, capacity, minimum pickup quantity, pickup charges and service districts are not fabricated. The product table and collection FAQ direct visitors to confirm these details.

## Forms

Pickup, quote and general enquiry forms validate required name, phone, consent, optional email and quantity. The pickup form supports up to three local photo previews, each up to 5 MB.

Forms prepare an enquiry for review, copying and text download, with email and WhatsApp links addressed to the client. Visitors finish sending in their chosen app. Selected photos must be attached in that app before sending. There is no simulated receipt or hidden submission; photos and form details are not stored automatically.

When an endpoint is configured, the reviewed enquiry can be submitted as multipart FormData. A receipt is displayed only after an HTTP success. Email and WhatsApp handoff links appear when configured; the visitor completes sending in their chosen app.

## Content and assets

The supplied DOCX provides company facts and page structure. Kannada text is a draft for client review. Blog educational sources are linked from the relevant guides. Photography is representative stock imagery until the client provides photos; provenance is in `public/images/SOURCES.md`. Optimized transparent client logos are in `public/brand`. The original client files are retained locally. Footer fonts and their licenses are in `public/fonts`.

## Deployment

This repository is configured for Vercel with the Vite framework preset, `npm ci`, `npm run build`, and the `dist` output directory. GitHub is the source of truth; connect the Vercel project to this repository for automatic deployments. Client source documents, original logo exports, generated files and local credentials are excluded from source control and CLI uploads.
