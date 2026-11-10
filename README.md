# Power Industrial Solutions (PIS) — Official Full-Stack Website

A corporate web application and digital engineering portal for **Power Industrial Solutions (PIS)**, replicated with the design and layout standards of [`pespk.com`](https://pespk.com/) and powered by **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Overview & Key Features

- **Brand Aesthetic & Architecture**: Replicated after top-tier engineering firms (inspired by `pespk.com`), featuring deep corporate navy (`#0B1B3D`), industrial green (`#65A30D`), and crisp high-contrast typography.
- **100% Catalogue Content Integrated**: Every detail from `PIS Catalogue.pdf` has been transcribed, structured, and presented across dedicated interactive sections.
- **Three Core Divisions**:
  - **Mechanical Engineering**: Heavy fabrication, high-pressure piping, tanks, hydro-testing, rotary alignment, firefighting.
  - **Electrical & Automation**: High/medium-voltage substations, underground cabling, generators, explosion-proof systems.
  - **Civil Infrastructure**: Industrial factories, water retaining structures & reservoirs, machine foundations, precast RCC.
- **Specialized Process Manufacturing**:
  - Indian Design Jet Condensers with automation.
  - **First Vertical Continuous Pan in Pakistan** (Manufactured by PIS for Ranipur Sugar Mills).
  - Falling Film Evaporators, U-Shape & Vertical Crystallizers, Mud Fertilizer Plants, Boiler ID/FD Fans.
- **Invertor & DCS Automation**: Transpower VFDs (0.4 kW ~ 315 kW, 220V–525V, sensorless vector control, RS485 Modbus RTU/ASCII).
- **Process Instrumentation**: Pressure, temperature, level, flow transmitters, RTDs, thermocouples, and control valves.
- **Interactive Digital Catalogue**: In-browser 10-page HD catalogue viewer with direct download button for the official 48MB PDF.
- **Verified "Our Work" Field Gallery (`/work`)**:
  - Over 55+ authentic jobsite and workshop photos from Ranipur Sugar Mills, Lucky Coal Power Plant, Hascol Petroleum, and industrial complexes.
  - Processed, auto-rotated, sharpened, upscaled where blurry, and compressed into ultra-lightweight WebP format (averaging ~130KB HD, ~50KB thumbnails).
  - Categorized into: *Sugar Machinery & Towers*, *High-Pressure Piping*, *Steel Structures & Rigging*, *Machinery & Process Tanks*, and *On-Site Execution*.
  - Full-screen HD Lightbox with keyboard navigation (Esc, Left/Right arrows) and on-site video clips player.
- **Full-Stack Next.js Backend**:
  - `POST /api/contact`: General inquiry handling with unique tracking IDs.
  - `POST /api/quote`: Comprehensive Request For Quotation (RFQ) processing.
  - `POST /api/newsletter`: Technical bulletins and engineering update subscriptions.

---

## 🚀 Getting Started

### 1. Development Server
To run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
To create an optimized production build:
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
├── app/
│   ├── api/
│   │   ├── contact/route.ts       # Contact inquiry API handler
│   │   ├── quote/route.ts         # RFQ quotation engine API handler
│   │   └── newsletter/route.ts    # Newsletter subscription API handler
│   ├── about/page.tsx             # Company Profile, MD Message, Mission, Values, Policy
│   ├── services/page.tsx          # Mechanical, Electrical, Civil, Process Equipment, VFD/DCS
│   ├── projects/page.tsx          # Filterable Case Studies & 20+ Client Directory
│   ├── work/page.tsx              # Verified 55+ Work Field Photo & Video Gallery
│   ├── catalogue/page.tsx         # Interactive Digital Catalogue Reader
│   ├── contact/page.tsx           # Contact details, Inquiry form, RFQ, Technical FAQ
│   ├── globals.css                # Custom industrial gradients, themes, and scrollbars
│   ├── layout.tsx                 # Root layout with sticky executive navbar & rich footer
│   └── page.tsx                   # Executive Homepage with hero, metrics, and showcases
├── components/
│   ├── home/                      # Homepage modular sections
│   ├── layout/                    # Navbar & Footer components
│   └── shared/                    # Interactive QuoteForm (RFQ) component
├── data/
│   └── pis-data.ts                # Structured catalogue data model
└── public/
    ├── docs/PIS-Catalogue.pdf     # Official downloadable PDF
    └── images/                    # Logos & high-resolution extracted catalogue assets
```

---

## 🏢 Corporate Contact Information

- **Company**: Power Industrial Solutions (PIS)
- **Managing Director**: Muhammad Hafeez
- **Head Office**: Al Makka Filling Station, Near Al Noor Sugar Mills, Shahpur Jahania, Talka Qazi Ahmed, Distt. Nawabshah, Sindh, Pakistan
- **Telephone**: 0244-314262
- **Mobile**: 0333-7054812, 0300-3226604
- **Email**: powerindsolution@gmail.com

