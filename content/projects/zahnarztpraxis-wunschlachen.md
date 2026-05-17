---
title: "Healthcare ERP System"
company: "Zahnarztpraxis Wunschlachen GbR, Berlin, Germany"
logo: "/img/logos/wunschlachen.svg"
role: "Software Developer (Softwareentwickler)"
duration: "09/2024 – present"
domain: "Healthcare / Dental practice management"
teamSize: "Small in-house development team"
techStack:
  - "Node.js"
  - "GraphQL"
  - "Vue.js"
  - "Nuxt.js"
  - "PostgreSQL"
  - "Directus CMS"
  - "BullMQ"
  - "Jenkins"
  - "DigitalOcean"
  - "GraphQL Subscriptions"
  - "Webhooks"
order: "01"
featured: true
---

## Scope

Multi-location dental practice ERP serving a large patient base across several practice sites in Berlin. Covers practice management, patient-facing workflows, laboratory case tracking, and care workflows for off-site patients.

## System Overview

A multi-application architecture in which independent applications (practice management, patient portal, laboratory module, and others) share a centralized authentication service via SSO. The platform supports day-to-day clinical operations across multiple practice locations.

## Areas of Work

- **Practice management** — appointment scheduling, patient records, and clinical workflows.
- **Patient portal** — patient-facing access to their own profile, treatment history, and upcoming appointments.
- **Laboratory workflow management** — case tracking through the lab process, from intake through to retrieval.
- **Off-site care workflow** — dedicated workflow supporting patient care delivered outside the main practice locations.
- **Role and policy management** — granular access control across applications.

## Technical Patterns Used

- Multi-application architecture with a centralized authentication service providing single sign-on across applications.
- Token-based authentication shared across applications.
- GraphQL Subscriptions for real-time updates.
- Webhooks for inter-service communication.
- Background-job queueing via BullMQ for asynchronous workflows.
- Directus headless CMS for content and configuration management.

## Key Contributions

- Designed PostgreSQL schemas and migration strategies across modules.
- Built backend services in Node.js with GraphQL APIs.
- Built frontend modules in Vue.js / Nuxt.js.
- Contributed to scheduling-domain logic involving multiple availability constraints.
- Led a significant data migration project moving a large dataset from a legacy file-based system into PostgreSQL.
- Maintain CI/CD pipelines in Jenkins; manage application infrastructure on DigitalOcean.
- Implement end-to-end and unit testing strategies across modules.
- Handle ongoing schema migrations as features evolve.

## Compliance

GDPR and German medical-data compliance handled at the organizational level.