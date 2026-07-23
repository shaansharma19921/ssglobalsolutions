# SS Global Solutions — Website

Corporate website for **SS Global Solutions**, an HR & staffing consultancy.
Domain: `ssglobalsolutions.co.in`

## What's inside

- `index.html` — Home
- `about.html` — About Us
- `services.html` — Services
- `industries.html` — Industries
- `careers.html` — Careers / job listings
- `contact.html` — Contact form + map
- `assets/css/style.css` — All styling
- `assets/js/main.js` — Nav behaviour, counters, form validation
- `assets/images/favicon.svg` — Site icon
- `robots.txt`, `sitemap.xml` — SEO
- `CNAME` — Tells GitHub Pages to serve this site on the custom domain

## Tech stack

Plain HTML5 + CSS3 + JavaScript, with:
- [Bootstrap 5](https://getbootstrap.com/) (layout & components, via CDN)
- [AOS](https://michalsnik.github.io/aos/) (scroll animations, via CDN)
- [Font Awesome](https://fontawesome.com/) (icons, via CDN)
- [FormSubmit.co](https://formsubmit.co/) (free contact form backend — no server needed)

No build step, no backend, no npm install required — this is a static site that works directly on GitHub Pages.

## Already personalized

- **Logo**: your real logo is in place (`assets/images/logo-cropped.png`), with favicons generated at 32px/64px/180px.
- **Phone**: landline `+91-1282450598` and mobiles `+91-9306099266` / `9729333926` are set in the footer, contact page, and the WhatsApp/call floating buttons (WhatsApp + click-to-call use `9306099266`).
- **Registered office**: `Shastri Nagar, Narnaul, Haryana - 123001` is set in the footer, contact page, and the embedded Google Map.

## Still to personalize before going live

1. **Email**: replace `info@ssglobalsolutions.co.in` if you're using a different inbox, in the `mailto:` links and in the two `<form action="https://formsubmit.co/...">` lines (careers.html and contact.html). **First form submission** will trigger a confirmation email from FormSubmit — click the link inside it to activate the form.
2. **Social links**: replace the `#` hrefs in the footer/social icons with your real LinkedIn/Facebook/Instagram/X profile URLs.
3. **Job listings** on `careers.html` are sample placeholders — update with your live openings.
4. **Client logos**: the homepage "Trusted by" strip currently shows client names as text (Bharti Airtel, Reliance, Flipkart, etc.) since real trademarked logos need to come from each company's own brand assets. Drop official logo files into `assets/images/clients/` and swap the `<span>Company</span>` for an `<img>` tag when you have them.
5. Optional: swap icon-based sections for real company photos once you have them (add images to `assets/images/` and reference them with `<img>` tags).

## Deployment (GitHub Pages)

1. Push this folder's contents to a GitHub repository (see the step-by-step guide provided separately).
2. In the repo, go to **Settings → Pages**, set the source branch to `main` (root folder), and save.
3. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`.
4. Add your custom domain (`ssglobalsolutions.co.in`) in the same Pages settings screen — the `CNAME` file in this repo already points to it.
5. In Hostinger's DNS settings, point the domain to GitHub Pages (A records + CNAME record — see the step-by-step guide).
6. Once DNS propagates, enable **Enforce HTTPS** in the Pages settings for a free SSL certificate.

## Future additions (no redesign needed)

Client portal, candidate login, resume upload, job portal, employee attendance, payroll dashboard, admin panel, chatbot, interview scheduling, ATS — these can be layered on later as separate tools/pages without touching this design.
