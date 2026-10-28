# Ventra Group of Companies & Brentra Ventures

<div align="center">

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-0A192F?style=for-the-badge)](LICENSE)
[![Deployment](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

**The Official Enterprise Web Portal & Multi-Vertical Conglomerate Platform**  
*Headquartered in Bailey Road, Patna, Bihar, India*

> **"One Vision • Multiple Businesses • Bigger Future"**  
> *Diverse Ventures | Stronger Tomorrow*

[Explore Modules](#-business-verticals--routing-directory) • [Getting Started](#-getting-started) • [Architecture](#-system-architecture--features) • [Facility Platform](#-brentra-facility-services-booking-engine) • [Contact](#-corporate-headquarters--contact)

---

</div>

## 📌 Table of Contents

- [Corporate Overview](#-corporate-overview)
- [Key Features & Highlights](#-key-features--highlights)
- [Business Verticals & Routing Directory](#-business-verticals--routing-directory)
- [Brentra Facility Services Booking Engine](#-brentra-facility-services-booking-engine)
- [Technology Stack](#-technology-stack)
- [Repository Structure](#-repository-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Local Run](#installation--local-run)
  - [Building for Production](#building-for-production)
- [Deployment Guide (Vercel)](#-deployment-guide-vercel)
- [Brand Identity & Design System](#-brand-identity--design-system)
- [Corporate Headquarters & Contact](#-corporate-headquarters--contact)

---

## 🏛️ Corporate Overview

**Ventra Group of Companies** (alongside **Brentra Ventures Pvt. Ltd.**) is a diversified enterprise conglomerate operating across Eastern India with strategic expansion hubs in Patna, Bihar. 

The organization powers high-growth business sectors ranging from heavy infrastructure construction and turnkey residential execution to enterprise IT engineering, mechanized environmental sanitization, cold-chain fresh FMCG logistics, and high-profile luxury event hospitality.

---

## ⚡ Key Features & Highlights

- **Executive Conglomerate Gateway:** Unified multi-vertical routing structure with single-click navigation between 15 corporate divisions and regional subsidiaries.
- **Dynamic Turnkey Real Estate Calculator:** Built-in ₹1,999 / sq. ft. construction estimator with material grading specifications (550D TMT, 53-grade cement, vitrified flooring).
- **Interactive IT & Digital Estimators:** 30-minute architecture discovery booking, sprint cost calculators, and stack capability matrices.
- **Urban Facility Services On-Demand Platform:** Full e-commerce service booking workflow including cart management, instant checkout, simulated live GPS tracking with 4-digit OTP, and executive admin operational dashboard.
- **Universal Multi-Step Lead Engine:** Context-aware quote request modal (`QuoteModal`) dynamically tailored to each vertical.
- **Persistent Accessibility & Floating Widget:** 1-click direct WhatsApp integration, emergency technician call dispatch, and multi-tier quotation triggers.
- **Responsive Executive Design:** Curated navy (`#0A192F`), corporate slate (`#1E3E62`), and warm gold accent palette with glassmorphism.

---

## 🗺️ Business Verticals & Routing Directory

| Vertical / Service | Route Path(s) | Primary Capabilities & Core Deliverables |
| :--- | :--- | :--- |
| **🏠 Realty & Turnkey Construction** | `/realty-infrastructure`<br>`/construction-services` | Flat ₹1,999/sq. ft. turnkey home building guarantee, structural engineering, architectural blue-printing, interior design, bulk construction raw materials supply. |
| **💻 IT & Digital Solutions** | `/it-solutions`<br>`/it-services` | Enterprise SaaS development, cross-platform mobile apps (Flutter/React Native), AI agent automations, cloud infrastructure, dedicated tech staffing. |
| **📈 Digital Marketing & Growth** | `/digital-marketing`<br>`/marketing-services` | ROI-driven Meta/Google Ads performance campaigns, SEO dominance, corporate brand architecture, B2B lead generation pipelines. |
| **👥 Manpower & Housekeeping** | `/manpower-housekeeping`<br>`/manpower-services` | PSARA-compliant verified security personnel, corporate housekeeping, facility stewards, industrial technicians for hospitals, banks, and IT parks. |
| **💧 RO Water Purifier Solutions** | `/ro-water-purifier`<br>`/ro-services` | Residential RO repair, industrial 50–1000 LPH plant installation, membrane replacement, scheduled filter maintenance, AMC packages. |
| **🧼 Mechanized Tank Cleaning** | `/water-tank-cleaning`<br>`/tank-cleaning` | 6-stage mechanized scientific cleaning, high-pressure slurry pumping, anti-bacterial UV sterilization for residential & commercial tanks. |
| **🛡️ Certified Herbal Pest Control** | `/pest-control`<br>`/pest-control-services` | 100% odorless herbal termite treatment, anti-cockroach gel piping, rodent management, bed bug elimination with 1–3 year written warranty. |
| **🛠️ Brentra Facility Services** | `/facility-services`<br>`/brentra-facility`<br>`/home-services`<br>`/urban-services` | Urban on-demand doorstep service platform with live cart, checkout, live technician tracking, and multi-service catalog. |
| **🌾 Fresh Supply & FMCG** | `/fresh-fmcg` | Daily Patna wholesale rate ticker, Mithila Makhana export, poultry processing, farm eggs, river fish logistics, and Ventra gourmet ice cream. |
| **🎉 Events & Royal Hospitality** | `/events-hospitality` | Destination royal wedding management, corporate executive summits, institutional banquet catering (100 to 5,000+ pax). |
| **🏥 Healthcare & Pharma Ventures** | `/ventures` | Wholesale pharma supply chain, temperature-sensitive cold chain distribution (2°C–8°C), third-party logistics (3PL) warehousing. |
| **🏛️ Corporate Overview** | `/corporate-overview` | Conglomerate history, corporate charter, vision, board of directors, and enterprise governance framework. |
| **📍 Patna Regional Hub** | `/patna-hub` | Regional control centre, cold storage depots, construction distribution yards, and 18-district Bihar transit network. |
| **💼 Careers & Empanelment** | `/careers` | Job openings across all 7 verticals, talent applications, vendor and civil contractor onboarding portal. |

---

## 🛒 Brentra Facility Services Booking Engine

The platform features a proprietary on-demand facility booking suite located under `src/components/facility/`:

1. **Service Catalog & Detail Modal (`ServiceDetailModal.tsx`):**
   - High-definition service breakdown, package inclusions, price tiers, and duration estimates.
2. **Interactive Cart Drawer (`CartDrawer.tsx`):**
   - Dynamic quantity increments, itemized tax computations, promo voucher code engine, and smooth drawer animations.
3. **Multi-Step Checkout Modal (`CheckoutModal.tsx`):**
   - Address picker with Patna pincode validation, appointment slot selector, and payment method selection (Cash on Delivery, UPI, Net Banking).
4. **Live Technician GPS Tracking (`LiveTrackingModal.tsx`):**
   - Simulated real-time dispatch progress (Assigned -> Out for Service -> Reached -> Work Completed).
   - Dynamic 4-digit security OTP verification and technician direct phone dispatch.
5. **Administrative Dispatch Console (`AdminDashboardModal.tsx`):**
   - Live revenue metrics, pending orders queue, status toggles, and operational control for facility managers.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Core Framework** | [React 19](https://react.dev/) + [TypeScript 6](https://www.typescriptlang.org/) |
| **Bundler & Tooling** | [Vite 8](https://vitejs.dev/) with Fast Refresh & Rolldown engine support |
| **Routing** | [React Router v7](https://reactrouter.com/) with hash anchor smooth-scrolling |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) with custom utility tokens |
| **Component Icons** | [Lucide React](https://lucide.dev/) (200+ clean modern SVG icons) |
| **Hosting & CI/CD** | [Vercel](https://vercel.com/) with `vercel.json` SPA rewrite rules |

---

## 📂 Repository Structure

```text
ventra-group-portal/
├── public/                     # Static assets, logos, and favicons
│   ├── favicon.ico
│   └── ventra-logo.png         # Official Ventra corporate crest
├── src/
│   ├── assets/                 # High-resolution media, banners, and marketing creatives
│   ├── components/             # Reusable UI component modules
│   │   ├── facility/           # Brentra Facility on-demand booking engine
│   │   │   ├── AdminDashboardModal.tsx
│   │   │   ├── CartDrawer.tsx
│   │   │   ├── CheckoutModal.tsx
│   │   │   ├── LiveTrackingModal.tsx
│   │   │   └── ServiceDetailModal.tsx
│   │   ├── DirectorsQuad.tsx   # Executive leadership quad presentation
│   │   ├── FloatingWidget.tsx  # Persistent quick-action conversion dock
│   │   ├── Footer.tsx          # Comprehensive enterprise multi-column footer
│   │   ├── Header.tsx          # Executive responsive navbar & service mega-menu
│   │   ├── HeroCarousel.tsx    # High-impact cinematic carousel
│   │   ├── ParentStats.tsx     # Live corporate milestone counters
│   │   └── QuoteModal.tsx      # Universal lead generation modal
│   ├── data/                   # Structured data, pricing tables, and service arrays
│   ├── pages/                  # 15 dedicated enterprise vertical and hub pages
│   │   ├── CareersPage.tsx
│   │   ├── CorporateOverviewPage.tsx
│   │   ├── DigitalMarketingPage.tsx
│   │   ├── EventsHospitalityPage.tsx
│   │   ├── FacilityServicesPage.tsx
│   │   ├── FreshFMCGPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── ITSolutionsPage.tsx
│   │   ├── ManpowerServicesPage.tsx
│   │   ├── PatnaHubPage.tsx
│   │   ├── PestControlPage.tsx
│   │   ├── ROServicesPage.tsx
│   │   ├── RealtyPage.tsx
│   │   ├── VenturesPage.tsx
│   │   └── WaterTankCleaningPage.tsx
│   ├── types/                  # TypeScript interface declarations
│   ├── App.tsx                 # Master routing table & layout coordinator
│   ├── index.css               # Global Tailwind CSS definitions & typography
│   └── main.tsx                # React DOM root entry point
├── .gitignore                  # Git tracking exclusion list
├── index.html                  # HTML entry template with meta tags & SEO schema
├── package.json                # Project dependencies & operational scripts
├── tsconfig.json               # TypeScript compilation configuration
├── vercel.json                 # Vercel SPA rewrite fallback configuration
├── vite.config.ts              # Vite server & plugins configuration
└── README.md                   # Enterprise documentation (this file)
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your workstation:
- **Node.js**: `v18.0.0` or higher (Node.js 20+ LTS recommended)
- **npm**: `v9.0.0` or higher (or `pnpm` / `yarn`)
- **Git**: Installed and configured

### Installation & Local Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Mdbasitperwaiz/ventra-group-portal.git
   cd ventra-group-portal
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Launch the development server:**
   ```bash
   npm run dev
   ```
   The application will boot up at `http://localhost:5173`.

### Building for Production

To validate types and compile an optimized production distribution:

```bash
# Type check and build distribution to /dist
npm run build

# Preview the production build locally
npm run preview
```

---

## 🌐 Deployment Guide (Vercel)

This project is optimized for 1-click deployment on **Vercel** with automatic client-side SPA routing support enabled via `vercel.json`:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Deploying via Vercel CLI:
```bash
npm install -g vercel
vercel
```

---

## 🎨 Brand Identity & Design System

The visual design language is calibrated for a trustworthy, high-status enterprise corporate presence:

| Element | Specification | Hex Code |
| :--- | :--- | :--- |
| **Deep Executive Navy** | Primary headers, top-tier badges, corporate emphasis | `#0A192F` |
| **Royal Corporate Blue** | Interactive buttons, active tab indicators, links | `#1E3E62` |
| **Warm Heritage Gold** | Accents, luxury hospitality tags, verified badges | `#C5A880` |
| **Crisp Porcelain White** | Core background canvas, clean card surfaces | `#FFFFFF` |
| **Slate Tone** | Subtle borders, muted body text, technical specs | `#475569` |

---

## 📞 Corporate Headquarters & Contact

| Department | Contact Coordinates |
| :--- | :--- |
| **Headquarters** | Ventra Corporate Towers, Bailey Road, Patna, Bihar — 800001 |
| **Regional Facilities Depot** | Transport Nagar & Gola Road Distribution Centre, Patna |
| **Central Helpline** | `+91-94300-88000` / `+91-91234-56789` |
| **Official Corporate Email** | `corporate@ventragroup.in` |
| **Business Development** | `partnerships@ventragroup.in` |
| **Careers & HR** | `careers@ventragroup.in` |

---

<div align="center">

*© 2026 Ventra Group of Companies & Brentra Ventures Pvt. Ltd. All rights reserved.*  
*Empowering Bihar & Eastern India with World-Class Enterprise Services.*

</div>
