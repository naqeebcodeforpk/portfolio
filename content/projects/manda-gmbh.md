---
title: "Custom CMS & Self-Hosted Web Plugins"
company: "ManDa GmbH, Nürnberg, Germany"
logo: "/img/logos/manda-gmbh.webp"
role: "Web Developer (Minijob, 20 hrs/month)"
duration: "05/2024 – 09/2024"
domain: "Web Development / Custom CMS / Self-Hosted Plugins for German SMBs"
teamSize: "2 developers (web team)"
techStack:
  - "PHP"
  - "Laravel"
  - "React.js"
  - "Tailwind CSS"
  - "MySQL"
  - "TCPDF"
  - "jsPDF"
  - "ImageMagick"
order: "02"
featured: false
---

## About the Company

ManDa GmbH is an ERP solutions provider with 10+ years helping German SMBs modernize their operations; operating with a startup-like, client-acquisition focus during my tenure.

## Scale

- Full corporate web presence delivered on a custom CMS
- Reusable plugin products positioned for resale to German SMBs
- Direct-briefing workflow with weekly demo cadence

## System Overview

Worked across two parallel tracks: (1) designing and building ManDa's corporate website on a fully custom, in-house CMS — chosen over off-the-shelf systems (WordPress, Strapi, etc.) to give the marketing team full content control without external dependencies, and (2) developing self-hosted web plugins for German businesses that prefer in-house tooling over third-party SaaS, driven by data-residency and privacy concerns common in the German SMB market.

## Modules

- **Custom CMS** — admin panel for managing pages, sections, media, and site content end-to-end
- **Public-facing corporate website** — React/Tailwind frontend consuming the CMS
- **Image-to-PDF conversion plugin** — multi-image, multi-format input to single or multi-page PDFs
- Additional small plugin/web projects delivered independently

## Architecture Highlights

- Custom CMS built from scratch on Laravel — content models, admin UI, media management, and a clean API layer feeding the public site, removing reliance on external CMS platforms or licenses
- Laravel REST backend serving a React + Tailwind frontend for both the admin panel and the public website
- Server-side PDF generation pipeline using ImageMagick for image normalization (format conversion, resizing, compression) feeding into TCPDF for layout-controlled PDF assembly
- jsPDF used on the frontend for client-side preview and lightweight in-browser generation paths
- Plugins built to be self-hosted and dependency-light so customers retain full data control on their own infrastructure

## Key Contributions

- Designed and built a custom CMS from the ground up in Laravel, giving ManDa's team full ownership over content workflows without third-party CMS dependencies
- Shipped the corporate website end-to-end on the custom CMS with a React + Tailwind frontend
- Designed and implemented the Image-to-PDF plugin combining ImageMagick preprocessing, TCPDF server-side rendering, and jsPDF client-side previews
- Led requirements gathering and discovery sessions — debated scope with stakeholders, mapped edge cases up front, and locked specifications before development to minimize rework
- Presented weekly demos of completed work to the team, maintaining a steady delivery cadence and transparent progress visibility
- Delivered smaller plugin and web projects independently under a direct-briefing workflow, scoping and shipping features without intermediate handoffs
- Contributed to ManDa's product direction by helping productize plugins for the privacy-conscious German SMB segment