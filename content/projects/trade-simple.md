---
title: "Trade Management Platform — Yii → Laravel Migration"
company: "Cyber Cloud (USA) — Remote from Pakistan"
logo: "/img/logos/cyberclouds.png"
role: "Software Engineer — Sole owner of the Yii → Laravel migration"
duration: "Early 2022 (within 01/2019 – 10/2023)"
domain: "B2B Trade Management for Canadian SMBs"
teamSize: "Solo developer; direct weekly client engagement"
techStack:
  - "Laravel"
  - "PHP"
  - "MySQL"
  - "jQuery"
  - "AJAX"
  - "Bootstrap"
  - "AWS"
  - "Spatie Laravel-Permission"
  - "Laravel-Auditing"
  - "Excel / PDF exports"
  - "Git"
order: "06"
featured: true
---

## Scale

- B2B trade management platform serving Canadian SMBs across four sectors: residential, commercial, agricultural, and greenhouse
- 3,000+ products and ~1,000 client accounts in production
- Multi-province support with province-aware Canadian tax handling
- Eight functional modules spanning CRM, inventory, procurement, sales, work execution, billing, audit, and access control

## System Overview

Trade Simple is a B2B trade management platform used by Canadian SMBs across four sectors (residential, commercial, agricultural, greenhouse). The platform covers the full operational cycle of a trades business — customer and contact management, multi-warehouse inventory, procurement, quoting, job execution, work tickets, invoicing, supplier billing, and Canadian tax compliance.

Originally built on the Yii framework, the system was migrated end-to-end to Laravel under my ownership starting in early 2022. The migration preserved the full production dataset (3,000+ products, ~1,000 client accounts) and delivered a client-reported ~65% performance improvement.

## Modules

The platform spans eight functional areas:

- CRM (companies and contacts with normalized contact data)
- Inventory and product catalog
- Multi-warehouse stock tracking
- Procurement (purchase orders and goods receipts)
- Sales and quoting (with multi-tier sector-specific pricing)
- Work execution (jobs and work tickets)
- Billing and Canadian province-aware tax
- Platform (users, roles, permissions, audit logging)

## Architecture Highlights

- Full Yii → Laravel migration: application rewrite plus migration of all production data with zero loss
- Replaced Yii's native RBAC with Spatie's Laravel-Permission, preserving the existing role model on Laravel-idiomatic foundations
- Added system-wide audit logging (a capability not present in the Yii version)
- AJAX-driven client-side rendering replacing full-page-reload navigation — gave the app a reactive feel without adopting a frontend framework
- Multi-tier pricing model supporting sector-specific rates across residential, commercial, agricultural, and greenhouse

## Key Contributions

- Sole owner of the Yii → Laravel migration, end-to-end — application rewrite, data migration, RBAC replacement, and the audit-logging addition
- Migrated 3,000+ products and ~1,000 client accounts to the Laravel schema with zero data loss
- Owned the entire module surface — CRM, inventory, multi-warehouse stock, procurement, quoting, jobs, work tickets, invoices, bills, tax, audit, and access control
- Designed the Laravel schema end-to-end, including the normalized contact model and the multi-tier pricing structure
- Built Canadian province-aware tax handling for invoices and bills
- Built Excel and PDF export pipelines for invoices, quotes, and operational reports
- Delivered a client-reported ~65% performance improvement, primarily via AJAX-based client-side rendering and the structural gains of the Laravel rebuild
- Engaged directly with the client through the migration — translating operations into schema and module design