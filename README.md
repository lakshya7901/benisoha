# Benisoha

A premium, modern portfolio website for **Benisoha**, a company providing a dual-force of software development and electrical infrastructure services. Built with Next.js 14, Tailwind CSS, and TypeScript, the site features a sophisticated "Gold & Charcoal" aesthetic with fluid animations and a fully responsive design.

## 🚀 Features

* **Dual-Vertical Focus**: Dedicated sections for Software & Digital services and City-Scale Electrical Infrastructure.
* **Premium Aesthetic**: A refined visual identity using a custom color palette including "Cream" (#FAFAF5), "Gold" (#C9A84C), and "Charcoal" (#1A1A1A).
* **Modern Typography**: Utilizes "Cormorant Garamond" for elegant displays and "DM Sans" for clean body text.
* **Interactive UI**:
    * **Smooth Navigation**: Integrated CSS and Next.js properties for seamless scroll-smooth behavior.
    * **Scroll Animations**: Custom Intersection Observer-based reveal animations that trigger as the user scrolls into sections.
    * **Live Stats**: Animated counters showcasing 50+ projects delivered and 99% client satisfaction.
    * **Project Filtering**: A dynamic filtering system allowing users to browse work by category, such as Software, Automation, or Infrastructure.
* **Functional Contact Form**: Integrated with Web3Forms to handle project inquiries directly from the UI.

## 🛠️ Tech Stack

* **Framework**: Next.js 14.2.5 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **Animations**: Custom Tailwind keyframes and the Intersection Observer API
* **Forms**: Web3Forms API

## 📂 Project Structure

```text
├── app/                # Next.js App Router (Layout, Home Page, Global Styles)
├── components/         # Modular UI components (Hero, Navbar, Services, Projects, etc.)
├── public/             # Static assets (Logos, Icons)
├── tailwind.config.ts  # Custom theme, colors, and animation configurations
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies and scripts
