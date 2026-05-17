---
title: "Minority Affairs Grant Management System"
company: "Code For Pakistan, Peshawar"
logo: "/img/logos/code-for-pakistan.png"
role: "Full Stack Developer — Main developer on a 2-person build"
duration: "06/2018 – 12/2018 (6-month contract, paid)"
domain: "GovTech — Government grant administration and beneficiary management"
teamSize: "2 developers (main developer + support developer)"
techStack:
  - "CakePHP"
  - "PHP"
  - "MySQL"
  - "JavaScript"
  - "jQuery"
  - "Bootstrap"
  - "AWS"
  - "Google Analytics"
  - "Git"
  - "Iterative development with stakeholder feedback cycles"
order: "10"
featured: false
---

## Client

Auqaf, Religious & Minority Affairs Department, Government of Khyber Pakhtunkhwa.

## Scale

- Government grant management system replacing a fully manual paper-based workflow
- **5 grant categories**: Educational, Widow, Marriage, Orphan, and Grant-in-Aid
- **25 districts** of Khyber Pakhtunkhwa covered
- **~25,000 grant recipients** processed across the five categories in the June–December 2018 window
- Public-facing application portal + internal admin and verification surfaces

## System Overview

A grant management system built for the Auqaf, Religious & Minority Affairs Department of the Khyber Pakhtunkhwa provincial government, replacing a paper-based grant distribution process that had been used across 25 districts. The system covers the full grant lifecycle: applicants apply online through an open form (declaring income, family size, and household details), the system computes a need-based priority score, government screening officers verify applicants on the ground, and grants are distributed and tracked across the five grant categories — Educational, Widow, Marriage, Orphan, and Grant-in-Aid.

The system processed approximately 25,000 grant recipients across the five categories during its first operational window (June–December 2018).

## Architecture Highlights

- **Automated need-based scoring algorithm** — applicants ranked by computed priority score from form inputs (income, family size, household composition, dependants); served as decision-support input to government screeners
- **Hybrid automated + manual decision model** — the algorithm produced ranked candidate lists, but government officials performed physical verification on the ground and retained the authority to **override scores manually** when verification revealed misrepresentation. This separation preserved due-process and accountability while still automating the bulk-prioritization step that was previously done by hand.
- **Five-grant taxonomy** — distinct workflows for Educational, Widow, Marriage, Orphan, and Grant-in-Aid grants, sharing a common applicant data model but with category-specific eligibility and scoring rules
- **Public-facing application portal** — open to all citizens; replaced the previous in-person paper-form submission process
- **Admin dashboard** — for government officials to review ranked applicants, record verification outcomes, override scores, and track grant distribution
- **PDF and Excel export pipelines** for grant lists and reporting
- **Google Analytics integration** with SEO-optimized public pages
- **AWS-hosted deployment**

## Key Contributions

- **Main developer on a 2-person team** — built the bulk of the system end-to-end; the second developer provided support
- **Designed the scoring algorithm** translating household financial and demographic data into a comparable priority score across applicants
- **Implemented the override mechanism** giving government screeners the authority to adjust scores after physical verification — preserving the human-in-the-loop accountability the department required
- **Built the public application portal** allowing citizens to apply directly online for the first time, replacing the in-person paper-form process across 25 districts
- **Built the admin dashboard** for grant officers to review ranked applicants, record verification, and track grant distribution
- **Designed the MySQL schema** covering applicants, household data, the five grant types, scoring records, verification records, and distribution tracking
- **Engaged directly with government officials** through requirements meetings — translating departmental rules and grant policies into the scoring algorithm, the verification workflow, and the dashboard surface
- **Built PDF and Excel export pipelines** for grant rosters and departmental reporting
- **Iterative delivery with stakeholder feedback** — built features in increments, demoed each to the department officials, and adjusted scope based on their input across the 6-month engagement
- **Deployed to AWS** and managed production operations through the 6-month engagement