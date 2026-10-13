# Mohit Mahato — Portfolio

Static portfolio for Mohit Mahato, a BIT student majoring in IT in Nepal and seeking a first internship in Python development, data analysis, or machine learning.

## Preview locally

The site has no build step or runtime framework. From this directory, start any static server, for example:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. The project and skill cards are rendered from `content.js` by `app.js`.

## Files

- `index.html`, `styles.css`, and `contact.css` define the accessible page structure and responsive layout.
- `content.js` contains project descriptions, skills, links, and FAQ answers. Keep claims consistent with the linked repositories.
- `app.js` renders the content, FAQ, and contact form. The form opens a draft in the visitor's email app; it does not send email.
- `assets/` contains project output screenshots used by the homepage.
- `fruitfly-case-study.html` explains the featured simulation and its measured demo results.
- `favicon.svg` is the site icon.

## Content guidance

Only list tools used in the linked projects as experience; keep learning goals labeled as such. Distinguish generated output from illustrative visuals, report the dataset and evaluation limits, and avoid implying the demo validates biological behavior. The FAQ answers are authored text, not a live AI service.

## Hosting

The public domain is `https://mohitmahato.com.np/`. Review the site locally before manually deploying the static files. Upload the HTML, JavaScript, CSS, icon, case study, and `assets/` directory together so links and images resolve. Keep private documents, credentials, and local configuration out of the deployment. The existing `CNAME` file is retained for repository compatibility.
