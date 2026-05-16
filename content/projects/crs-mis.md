---
title: "CRS-MIS — Crop Reporting Management Information System"
company: "Crop Reporting Services (CRS), Government of Khyber Pakhtunkhwa, Pakistan"
role: "Web Developer (Solo Developer & Project Owner)"
duration: "12/2021 – 10/2023"
domain: "GovTech / Agriculture / Spatial Field Reporting"
teamSize: "Solo developer — sole engineer from design through deployment and end-user training"
techStack:
  - "Laravel"
  - "PHP"
  - "MySQL"
  - "React"
  - "JavaScript"
  - "React Native"
  - "SQLite (mobile)"
  - "REST APIs"
  - "Firebase Cloud Messaging"
  - "DigitalOcean"
  - "Custom JS drawing-board plugin"
order: "03"
featured: true
---

## Scale

- 34 districts of Khyber Pakhtunkhwa covered — including the newly merged tribal districts brought under the provincial reporting system
- 20–40 crop reporters per district (~700–1,400+ field officers province-wide)
- ~150,000–200,000 hectares reported per season
- Two reporting seasons per year: **Rabi** (winter) and **Kharif** (summer/monsoon)
- 3 form submissions per season per field — Form 1 (sowing), Form 2 (growth), Form 3 (yield/weight)
- 83 fruit & vegetable price items tracked daily, per district (34 districts)
- 1,500+ system users across reporters, Statistical Officers (SOs), and headquarters staff
- District-level Khasra (land parcel) records — uniqueness enforced per district

## System Overview

A GovTech platform built to digitize a centuries-old manual crop-reporting process for the Government of Khyber Pakhtunkhwa, replacing paper-based field reports with a transparent, location-anchored digital system anchored on official Khasra land-parcel numbers.

The platform covers two parallel reporting workflows:

1. **Seasonal yield reporting** — crop reporters visit assigned fields three times per season (Rabi and Kharif), submitting Forms 1–3 covering crops present, land classification (barren / infertile / unproductive / wasteland), and final yield weights. Each entry is geo-anchored to a unique Khasra parcel.
2. **Daily price reporting** — 83 fruit and vegetable items priced daily per district, feeding province-wide market-price visibility.

A **React Native field app** with full offline support lets reporters collect data in disconnected rural areas, with bulk sync to the central system once internet is restored. A **React-based dynamic dashboard** gives Statistical Officers and headquarters real-time visibility into reporting progress, yield trends, and price movements across all 34 districts.

## Modules

- Seasonal yield reporting workflow — Rabi and Kharif cycles, 3 form submissions per season per field
- Land classification reporting — productive vs. barren / infertile / unproductive / wasteland
- Daily price reporting — 83 items × 34 districts, captured daily
- Spatial drawing board — custom JS plugin for reporters to draw exact field shapes
- 3-phase approval workflow — Reporter → Statistical Officer (SO) → Headquarters
- Khasra-based field registry — unique parcel identifiers per district, duplication strictly prevented
- React dynamic dashboard — charts, maps, district drill-downs, real-time aggregates
- REST API layer powering the React Native field app
- Excel / PDF export for field reports and price summaries
- Reminder & deadline notification system for Form 1/2/3 submissions
- User & role management for reporters, SOs, and admins

## Architecture Highlights

- Laravel REST backend with MySQL persistence, deployed on DigitalOcean Droplets
- Two-surface client architecture: **React dashboard** for office users + **React Native field app** for reporters
- **Offline-first mobile sync** — data stored in on-device SQLite during field visits in disconnected areas, bulk-uploaded once connectivity is restored
- **Conflict-free-by-design data model** — every reporter assigned an exclusive domain of fields; Khasra numbers enforced unique per district; cross-verification performed by Statistical Officers, eliminating concurrent-edit conflicts at the architecture level
- **3-phase approval pipeline** — submissions flow Reporter → SO → Headquarters before becoming official
- **Custom JavaScript drawing-board plugin** — built specifically for reporters to draw irregular field-boundary shapes (not an off-the-shelf mapping library)
- Firebase Cloud Messaging for weekly reporting reminders and Form 1/2/3 deadline alerts
- Excel / PDF export pipeline for field reports and price summaries

## Key Contributions

- **Sole engineer on the project** — owned design, architecture, backend, web dashboard, mobile app maintenance, deployment, and end-user training
- Designed the MySQL schema around the official Khasra land-parcel system, enforcing district-level uniqueness as the integrity backbone
- Built the seasonal yield reporting workflow spanning two seasons (Rabi/Kharif) × 3 form submissions × 34 districts × 20–40 reporters each
- Built the daily price-reporting subsystem handling 83 items × 34 districts every day
- Built the 3-phase approval pipeline (Reporter → SO → Headquarters) ensuring data accountability before reaching the province-level dataset
- Built the custom JavaScript drawing-board plugin for spatial field-shape capture from scratch
- Implemented the offline-first sync layer on React Native using SQLite + bulk upload, enabling reliable data collection in connectivity-poor rural areas
- Integrated Firebase Cloud Messaging for weekly reminders and form-deadline alerts
- Built Excel/PDF export pipelines for field reports and price summaries
- Maintained and extended the React Native field app as support developer
- Managed DigitalOcean infrastructure, deployment, and production operations
- **Conducted on-site training across all 34 districts** for reporters and Statistical Officers — translating the system to non-technical government staff and ensuring adoption of a century-old process change

## Incomplete Initiative — GIS Mapping Integration

- Started integration of a full GIS mapping layer intended to replace the static offline maps with dynamic, layer-based geographic data.
- The technical approach was tractable, but the work was not completed before my departure for Germany.
- Handed off in an unfinished state.
- Learnings: gained working understanding of GIS layer architecture, tile servers, and what it takes to bring true spatial intelligence into a field-data system — relevant for any future spatial/GovTech work.

## Government Deployment Context

- Initially deployed on **DigitalOcean Droplets** as the working production environment.
- Migration to **government-owned servers** was planned for the next phase (data sovereignty for state-level agricultural data), but the migration was not yet executed at the time of my departure.