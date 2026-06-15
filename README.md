# Youth Haven Care - Premium React Website

A modern, responsive, informational website for a youth residential treatment center.

## Included pages

1. Home
2. About Us
3. Programs & Services
4. Admissions / Referrals
5. Careers with resume upload validation
6. Training Resources with external links
7. Donate with third-party payment redirect placeholder
8. Gallery
9. Contact Us
10. FAQ
11. Privacy Policy
12. Terms of Use
13. Accessibility Statement
14. 404 Not Found

## Main features

- React + Vite
- Tailwind CSS
- shadcn-style reusable UI components
- Fully responsive layout
- Premium modern design
- Scroll down hides header, scroll up shows header
- Mobile menu
- Careers form fields: name, phone, email, position, availability, message, resume upload
- Resume validation: PDF, DOC, DOCX, max 5MB
- Contact form demo state
- External training resources
- External donation payment link
- Gallery with professional stock image placeholders
- Legal placeholder pages
- `.htaccess` included for cPanel / GoDaddy React routing
- `dist` build folder included after running `npm run build`

## How to run locally

```bash
npm install
npm run dev
```

## How to build

```bash
npm run build
```

## How to upload to cPanel / GoDaddy

Upload all files inside the `dist` folder to your domain folder, usually `public_html` or your selected domain directory.

The `.htaccess` file is already included in `public/.htaccess`, so it will be copied into `dist` during build. This helps React Router pages work after refresh.

## Where to edit site information

Edit this file:

```bash
src/data/siteData.js
```

You can change:

- Website name
- Phone
- Email
- Address
- Donation URL
- Referral email
- Gallery images
- Programs
- FAQ
- Training links
- Open roles

## Logo

Replace:

```bash
public/logo.svg
public/favicon.svg
```

with your real logo and favicon.

## Important production notes

The Careers and Contact forms are frontend-ready but not connected to a backend yet. For a live website, connect them to one of these:

- Laravel API
- Node.js API
- Formspree
- EmailJS
- Netlify Forms
- Serverless function

The legal pages are placeholders. Replace them with attorney-reviewed content before launching.
