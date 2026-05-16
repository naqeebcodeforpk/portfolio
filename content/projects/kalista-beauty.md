---
title: "Kalista Beauty — Luxury Beauty E-Commerce Platform (WordPress → Laravel Migration)"
company: "Cyber Cloud (USA) — Remote from Pakistan"
role: "Software Engineer — Full-stack contributor on a 3-developer team"
duration: "2020 – 2021"
domain: "Luxury beauty e-commerce"
teamSize: "3 main developers"
techStack:
  - "Laravel"
  - "PHP"
  - "MySQL (with stored procedures)"
  - "Elasticsearch"
  - "jQuery"
  - "JavaScript"
  - "Bootstrap"
  - "Stripe"
  - "PayPal"
  - "Git"
order: "09"
featured: false
---

## Client

Kalista Beauty / KLB Beauty Co. Ltd. (Hong Kong) — luxury beauty retailer serving the international US-pricing market.

## Scale

- Luxury beauty e-commerce platform with **1,000+ SKUs across 150+ brands** (including Chanel, La Mer, La Prairie, SK-II, Lancôme, Guerlain, Dermalogica, Sisley, and many more)
- Hong Kong-headquartered, internationally shipping with US-dollar pricing
- Three-level catalog hierarchy: department → section → category
- **Live in production at kalista-beauty.com**

## System Overview

Kalista Beauty is a luxury beauty e-commerce platform headquartered in Hong Kong, selling 1,000+ SKUs across 150+ international luxury brands to the international market with US-dollar pricing. The system covers the full storefront and back-office: catalog management across a deep category hierarchy, multi-brand pages, wishlist, cart, checkout, payments, order tracking, customer accounts, and an extensive promotions engine.

The platform was **migrated from WordPress to Laravel** during my tenure — moving the storefront and back-office onto a modern PHP framework while preserving the live catalog and customer base. I contributed as one of three developers on the migration and ongoing build.

## My Contributions

- **Backend CMS for catalog management** — owned the back-office surface for managing products, inventory, brands, sections, and categories; admins manage the live catalog through this system
- **Frontend storefront contributions** — built dynamic product display with **lazy loading**, shopping cart, and storefront-side promotion application; jQuery/JavaScript reactive-rendering pattern (not React)
- **Promotions and discount engine** — implemented **5–6 promotion types** (coupons, percentage discounts, BOGO, flat discounts, voucher codes, etc.) with **rule-conflict resolution**: when multiple promotions could apply to the same item, the engine selects the most-favorable applicable discount based on per-code conditions. This was the technically hardest part of the project.
- **Hybrid search architecture** — basic product search powered by **Elasticsearch**, with **MySQL stored procedures** handling deeper detail queries; the two layers worked together depending on query type
- **Payment gateway integration** — Stripe and PayPal for checkout, plus standard credit card networks (Visa, MasterCard, AmEx, Discover)
- **Contributed to the WordPress → Laravel migration** as one of three developers, helping move catalog, customer, and order data from the WP-based stack to the new Laravel system
- **Schema design discussions** for products, brands, categories, and promotions data models