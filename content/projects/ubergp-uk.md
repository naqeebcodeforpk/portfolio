---
title: "UberGP UK — Multi-Channel Private Telehealth Platform"
company: "Cyber Cloud (USA) — Remote from Pakistan"
logo: "/img/logos/cyberclouds.png"
role: "Software Engineer — Backend & API development, collaborative team build"
duration: "Early 2019 (within 01/2019 – 10/2023)"
domain: "Private telehealth — at-home GP visits, on-demand consultations, prescriptions, and corporate health services"
teamSize: "Multi-developer team (backend, Android, iOS); collaborative build"
techStack:
  - "CakePHP"
  - "PHP"
  - "MySQL"
  - "Firebase (Realtime Database, Cloud Messaging)"
  - "OAuth2 token-based auth"
  - "JavaScript"
  - "Bootstrap"
  - "Payment gateway integration"
  - "Git"
order: "08"
featured: false
---

## Client

UberGP UK — UK-based private GP and telehealth service.

## Scale

- Multi-channel UK private GP platform — at-home doctor visits, telephone consultations, instant messaging with doctors, prescriptions, referrals, sick notes, vaccinations, mental health, work medicals, and corporate services
- Multi-portal architecture — public marketing site, patient portal, doctor-side dashboard, and admin dashboard
- Native Android application (published on Google Play); iOS development also undertaken
- Production deployment publicly accessible at cyberclouds.biz/ubergp

## System Overview

UberGP is a UK-based private telehealth platform offering multi-channel access to GP services — at-home doctor visits, on-demand telephone consultations, instant messaging with doctors, prescriptions, referrals, sick notes, and corporate health services. The system combines a web platform (public marketing site, patient portal, doctor dashboard, admin dashboard) with a native Android application, integrated via a shared CakePHP backend.

The platform supports an Uber-style operational model: patients book or request a doctor, doctors are dispatched, and the patient app shows the doctor's real-time location en route — backed by Firebase as the live-location store.

## My Role

I joined this project early in my career at Cyber Cloud, contributing to a multi-developer team build. My responsibilities centered on the **backend, APIs, and integration layer** powering the multi-portal web platform and the mobile applications. I collaborated with other developers (including the Android and iOS teams) and participated in schema and architecture decisions during planning meetings.

## My Contributions

- **Backend APIs** powering the patient portal, doctor dashboard, admin dashboard, and the Android/iOS mobile applications — built in CakePHP against MySQL
- **OAuth2 token-based authentication** for the mobile applications, providing the auth layer for all mobile-app API calls
- **Firebase-backed live location storage** — implemented the backend storage and retrieval layer that received the doctor's GPS pings (captured by the Android team) and made them available to the patient app for real-time en-route tracking; tested end-to-end with live device runs
- **Firebase Cloud Messaging push notifications** for:
  - Patient: appointment confirmation
  - Doctor: new appointment request from patient
  - Patient: doctor en-route notification
- **Public marketing site** (Home, Doctors, Services, Treatments, Prices, Corporate, Contact, blog, policy pages) — built on CakePHP with admin-editable content
- **Patient portal** — registration, login, booking, and appointment management
- **Doctor dashboard** — for managing assigned appointments, patient consultations, and prescriptions
- **Admin dashboard** — platform administration
- **Payment integration** — post-consultation payment flow (patient releases payment, doctor releases prescription)
- **Schema design discussions and architecture meetings** — contributed to data model and API design decisions alongside other developers