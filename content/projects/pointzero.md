---
title: "Pointzero — Excel-to-Web Calibration Management System"
company: "Cyber Cloud (USA) — Remote from Pakistan"
role: "Software Engineer — Sole developer"
duration: "2023 (within 01/2019 – 10/2023)"
domain: "Industrial flow-meter calibration and proving (Western Canada, regulated under Measurement Canada certification)"
teamSize: "Solo developer; work directed via Cyber Cloud's project manager — no direct client interaction"
techStack:
  - "Laravel"
  - "PHP"
  - "MySQL"
  - "jQuery"
  - "AJAX"
  - "Bootstrap"
  - "Excel-to-MySQL data ingestion"
  - "Git"
order: "07"
featured: false
---

## Client

Point Zero Proving (Red Deer, Alberta, Canada) — flow-meter calibration and proving services for Western Canada and the Yukon.

## Scale

- Complete Laravel web application replacing a multi-sheet Excel workflow
- ~30 tables covering customers, instruments, calibrations, field tickets, billing, reference data, and platform features
- Reference datasets lifted from Excel into MySQL via Laravel seeders and import migrations
- Deployed in 2023; powers both the public marketing site at **pointzeroproving.com** and the employee portal at **/backend** from a single Laravel codebase

## System Overview

Pointzero replaced a complex Excel-based calibration workflow with a purpose-built Laravel web application for Point Zero Proving, a Western Canadian flow-meter calibration company operating under Measurement Canada certification. The original workbook contained dozens of interlinked formulas across multiple sheets, with no centralized documentation of the underlying business logic.

The project ran on Cyber Cloud's standard agency engagement model — scope and clarifications routed through Cyber Cloud's project manager, with no direct client interaction. The Excel workbook itself was effectively the specification. I reverse-engineered its behavior by observing how values propagated across sheets when inputs changed, then translated that logic into a relational schema and a Laravel application.

The resulting system manages the operational core of the business — customer meters under management, scheduled calibration jobs, per-run flow-proving measurements, field tickets for billing, and supporting reference data — replacing the original spreadsheet workflow entirely.

## Architecture Highlights

- **Excel-to-relational reverse engineering** — multi-sheet workbook with interlinked formulas translated into a normalized relational schema
- **Flow-meter calibration measurement model** — a header table capturing the full measurement set per calibration job (net/gross volumes, fast/slow flow rates, totalizer readings, inline RTD and testwell temperatures), with a one-to-many child table for per-run prover-vs-meter volume comparisons
- **Reference data ingestion pipeline** — static lookup datasets (densities, products, thermometers, calibration standards) imported from Excel into MySQL via Laravel seeders and migrations, replacing in-spreadsheet lookups with queryable tables
- **Many-to-many calibration-to-field-ticket pivot** — billing tickets can span multiple calibrations and vice versa
- **Unified Laravel codebase for public site + employee portal** — the same application serves the marketing pages (managed through a CMS layer) and the back-office calibration system, with role-based access separating public visitors from authenticated staff

## Key Contributions

- **Sole developer** — owned schema design, application build, and delivery
- **Reverse-engineered the Excel workbook** with no domain documentation and no direct client access, interpreting interlinked formulas by observing value-propagation behavior across sheets
- **Designed the relational schema** that replaced the spreadsheet, including the flow-meter calibration measurement model and the field-ticket billing structure
- **Built the Excel-to-MySQL data-ingestion pipeline** for reference datasets
- **Built the full module surface** — customers, instruments (meters, locations, seals, thermometers), calibrations, field tickets, billing, pricing, and document storage
- Built both the **public marketing site** (Home, Service, About, Contact) and the **backend calibration system** from a single Laravel application, with an admin-editable CMS layer driving the public pages
- **Engaged with the Cyber Cloud project manager** to clarify scope and validate interpretations of the original Excel logic