---
title: "Techie Kids Club — Multi-Tenant Subscription Platform for In-School Coding Enrichment"
company: "Cyber Cloud (USA) — Remote from Pakistan"
role: "Software Engineer (sole developer on the project)"
duration: "~2022 – 2023 (within 01/2019 – 10/2023)"
domain: "EdTech / Subscription-Based In-School Enrichment"
teamSize: "Sole developer end-to-end; weekly collaboration with Product Owner"
techStack:
  - "Laravel"
  - "PHP"
  - "MySQL"
  - "Memcached"
  - "jQuery"
  - "JavaScript"
  - "CSS"
  - "Nginx"
  - "Stripe"
  - "FullCalendar"
  - "Git"
order: "04"
featured: false
---

## Scale

- Subscription platform serving 8,000–10,000 students
- 300–350 partner schools across 90+ cities
- Operating in 6 US states: Florida, Georgia, Illinois, Indiana, Texas, Wyoming
- 5 distinct user roles: School Admin, Regional Director, Parent, Teacher, Platform Admin
- ~30 admin/CMS modules covering content, operations, scheduling, and reporting
- Designed for franchise expansion — Techie Kids Club itself runs as the default franchise, with the system architected to spin off additional franchise tenants

## System Overview

A subscription-based EdTech platform powering Techie Kids Club's in-school coding and robotics enrichment program for preschool through third-grade students. The platform coordinates parents, teachers, school admins, regional directors, and platform admins across hundreds of partner schools, handling admissions, class scheduling, attendance, recurring billing, content management, and reporting across a six-state US operation.

The system was built on a **Laravel + MVC architecture with a franchise-aware multi-tenant model**, so the same codebase could power additional franchise organizations beyond Techie Kids Club itself — each accessible via its own URL path that could be mapped to its own custom domain.

## Modules

The platform exposes ~30 modules spanning eight functional areas:

- Operations & enrollment
- People & roles (across 5 user types)
- Scheduling (with the **RD–Teacher Graph** — a Regional Director view of every teacher's bookings and available time windows)
- Content & marketing CMS
- Commerce (Stripe recurring payments, promo codes)
- Communication (LiveChat integration, notifications, broadcasts)
- Geo / structure (States → Districts → Schools hierarchy)
- Reporting & analytics

## Architecture Highlights

- **Franchise-aware multi-tenant architecture** — Techie Kids Club itself ran as the default franchise, with the architecture supporting additional franchise tenants on dedicated URL paths that could each be mapped to their own custom domain — all sharing a single codebase
- **Laravel + MVC implementation** with strict separation of concerns
- **5-role permission model** — distinct dashboards and access scopes for School Admin, Regional Director, Parent, Teacher, and Platform Admin
- **Hierarchical data model** — States → Districts → Schools → Classes → Students, supporting per-state and per-Regional-Director oversight
- **MySQL schema with normalization + indexing** for multi-state query loads
- **Memcached** for application-level caching and processing acceleration
- **Stripe recurring-payment integration** — supports both school-pay and parent-pay billing models; parents agree to terms and a fee schedule at admission, then the system deducts monthly throughout the course
- **FullCalendar-based scheduling engine** — powers Scheduler, Vacant Time, and the RD–Teacher Graph
- **LiveChat API integration** for real-time visitor support on the public site
- **SPA-like responsiveness without an SPA framework** — the dashboard was built in jQuery/JavaScript yet engineered to feel as fluid as a Vue or React app, through careful API design and client-side update patterns
- **Nginx-served Laravel deployment**

## Key Contributions

- **Sole engineer on the project** — owned design, implementation, and deployment of every module
- Built **~30 admin/CMS modules** spanning enrollment, scheduling, content, commerce, and reporting
- Designed the **MySQL schema** with normalization and indexing strategy for multi-state scale
- Built the **franchise-aware multi-tenant routing architecture**, enabling the platform to be productized for additional franchise organizations
- Implemented the **5-role permission system** (School Admin, Regional Director, Parent, Teacher, Platform Admin) with distinct dashboards per role
- Integrated **Stripe recurring payments** with terms-and-fee agreement flow at admission and automated monthly deductions across the course
- Built the **scheduling engine** on FullCalendar — class scheduling, teacher availability, vacant-time tracking, and the RD–Teacher Graph for Regional Director oversight
- Integrated **LiveChat APIs** into the public site for real-time visitor support
- Optimized the database with indexes and normalization
- Integrated **Memcached** for caching and processing speedups
- Engineered the dashboard to deliver **SPA-grade responsiveness using jQuery/JavaScript**, without adopting a modern frontend framework
- Engaged directly with the **Product Owner in weekly meetings** — translating business needs into schemas, prioritizing features, and aligning delivery
- Owned **end-to-end delivery through Nginx deployment** in production