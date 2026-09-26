# Mohit Mahato — Portfolio

Personal portfolio for an aspiring AI/ML engineer from Nepal.

**Live website:** https://mohitmahato.com.np/

## Website files

- `index.html` — introduction, section layout, about text, and metadata
- `content.js` — projects, skills, contact details, social links, and FAQ answers
- `app.js` — project rendering, notebook plot, FAQ, and contact form
- `styles.css` — typography, layout, and responsive styles
- `contact.css` — contact section and form styles
- `favicon.svg` — site icon

This is a static website with no runtime framework or build step. Serve the repository with any local static web server to preview it.

## Update the content

Edit `content.js`. Each project has editable repository, demo, screenshot, screenshotAlt, details, and result fields. Empty links display honest placeholders. Add screenshots to an `assets/` folder and use relative paths such as `assets/banking.webp`.

Each skill has an independent name and status. Unconfirmed tools are labeled **Currently learning**. Only change a status when it reflects actual experience.

The contact section uses the confirmed email, GitHub, and LinkedIn links. The form opens a draft in the visitor's email app; the visitor reviews and sends it there. It does not send email from a server or claim delivery.

The FAQ uses authored answers, not a live AI service. It has no API costs and cannot book meetings. Update the answers when verified résumé details are available.

The hero plot and project concept studies are illustrative, not project screenshots or measured results. No paid generated asset is required.

## Hosting

The live site is hosted on the Cloudflare Worker `portfolio`, with `mohitmahato.com.np` connected as its production domain. Production is public; Cloudflare preview deployments remain protected.

For a manual Cloudflare update, upload the six website files listed above through the Worker's **New deployment** screen. Include any screenshot assets you add. Do not upload private documents, credentials, or local configuration.

The existing `CNAME` file is retained for repository compatibility. DNS and email settings are managed in Cloudflare.

