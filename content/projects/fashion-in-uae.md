---
title: "Fashion in UAE — Customization & Performance Optimization of a Multi-Vendor E-Commerce Platform"
company: "Cyber Cloud (USA) — Remote from Pakistan"
logo: "/img/logos/cyberclouds.png"
role: "Software Engineer — Support Developer & Client Onboarding Lead"
duration: "Several months (within 01/2019 – 10/2023)"
domain: "E-Commerce / Fashion Retail (UAE market)"
teamSize: "Sole Cyber Cloud engineer responsible for the Fashion in UAE deployment"
techStack:
  - "Laravel"
  - "PHP"
  - "MySQL"
  - "JavaScript"
  - "jQuery"
  - "HTML/CSS"
  - "Stripe"
  - "PayPal"
  - "Barcode scanner integration"
  - "Query caching"
  - "Lazy loading"
order: "05"
featured: false
---

## Scale

- ~200 active products on the live storefront
- Live in production for UAE customers; deployed as **single-vendor mode** (platform supports multi-vendor, but Fashion in UAE ran as a single brand)
- Storefront achieved a **5.0-star Google rating** during operation
- Stripe and PayPal payments active for UAE-region transactions
- Barcode lifecycle integrated end-to-end — generation, printing, scanning, and order-status transitions

## System Overview

Fashion in UAE is a UAE-based fashion e-commerce store, built on top of a **comprehensive multi-vendor Laravel e-commerce platform** that Cyber Cloud provided as the technical foundation. The base platform supports both single-vendor and multi-vendor modes and includes a wide feature set (vendor subscriptions, withdrawals, disputes, multi-currency, multi-language, multiple payment gateways, blog, tickets, coupons, etc.). For Fashion in UAE, the platform was configured and deployed in **single-vendor mode** for the client's own catalogue, with Stripe and PayPal as the active payment gateways.

My role was to **set up the platform for this specific client and contribute targeted improvements** — particularly around inventory operations, schema work on the Product and Order modules, and frontend performance for the product catalogue.

## My Scope on This Project

To be precise about contribution boundaries: the base e-commerce platform itself was not built by me. My work focused on:

- Deploying and configuring the platform for Fashion in UAE in single-vendor mode
- Designing schema additions for the **Product and Order inventory** functionality
- Building **end-to-end barcode lifecycle** for the inventory and order workflow — generating barcodes for products, printing them for physical labeling, scanning them at order checkpoints, and driving order-status transitions from the scans
- Performance-optimizing the **product listing / filter pipeline**, which was the single biggest UX bottleneck on the storefront
- Activating and configuring Stripe and PayPal for the UAE market
- Supporting the client through launch and ongoing operations

## Key Contributions

- **End-to-end barcode lifecycle for inventory and order operations** — built the full pipeline:
  - **Barcode generation** for products entering inventory
  - **Barcode printing** integration for physical product labeling
  - **Barcode scanning** at order touchpoints (receive, sell, return)
  - **Automated order-status transitions** driven by scan events — replacing manual status updates with scan-triggered state changes
  - Replaced a fully manual inventory + order-management workflow with a barcode-driven operation, significantly reducing back-office data-entry time and human error
- **Product listing performance optimization** — reduced product-filter API response time from **~25 seconds to ~300ms** (an ~80× improvement) through:
  - Query refactoring on the product/filter pipeline
  - Caching of frequently requested filter combinations
  - **Lazy loading** on the storefront for faster perceived performance
- **Schema design support** for the Product and Order inventory modules — extending the data model to accommodate barcode-based identification and inventory operations
- **Client onboarding & deployment** — solo-handled setup, configuration, and launch of the platform for Fashion in UAE
- **Payment gateway activation** — configured Stripe and PayPal for the UAE region (gateways available on the platform; activated and validated for this client)
- **Supported the storefront through production operations** during the engagement, with the live store earning a 5.0-star Google rating during that period

## Honest Scope Note

Cyber Cloud provided the underlying multi-vendor e-commerce platform; I do not have full provenance on whether it was built in-house, forked, or licensed. My contributions are the specific items listed above — not the platform as a whole. The wider feature set (multi-vendor subscriptions, vendor verifications, withdrawals, disputes, multi-currency, multi-language, etc.) exists on the platform but was not part of Fashion in UAE's single-vendor deployment and was not my work.