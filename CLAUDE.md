# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 landing page for "18 pasos hacia tu proyecto de vida" - a Spanish-language ebook and course package by Belkis Urbina. The site serves as a sales landing page with payment integration for Venezuela and Colombia markets.

## Development Commands

- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Build production version with Turbopack 
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture & Key Components

The application uses Next.js 14+ App Router with a component-based architecture:

- **src/app/layout.tsx** - Root layout with SEO metadata, Google Fonts (Engagement, Bree Serif), Spanish locale
- **src/app/page.tsx** - Main landing page with 2-column grid layout
- **src/components/** - Modular React components:
  - `Header.tsx` - Navigation with WhatsApp integration (Client Component)
  - `EbookContent.tsx` - Left column with product description and benefits (Server Component) 
  - `EbookCover.tsx` - Right column with pricing, payments, and CTAs (Client Component)
  - `Testimonials.tsx` - Customer testimonial section (Server Component)

## Styling & Design System

- **TailwindCSS 4** for utility-first styling
- **Custom Google Fonts**: Engagement (cursive for headings), Bree Serif, Arial fallback
- **Color Palette**: 
  - Primary: #CEA049 (gold/orange for buttons)
  - Background: #FDEEE7 (cream)
  - Text: #545454 (dark gray)
  - Accent sections: #E2FAF0 (light green), #F6DDDD (light pink)
- **Responsive breakpoint**: 768px with mobile-first approach

## Integration Points

- **Payment Processors**: Hotmart checkout link for international payments
- **WhatsApp Integration**: Direct links for customer support and payment confirmations
- **Payment Methods**:
  - Venezuela: Zelle transfers
  - Colombia: Bancolombia transfers and Nequi payments

## Content Management

- Product pricing and details are hardcoded in components
- WhatsApp phone number: +57 320 5723257
- Instagram: @soybelkisurbina
- Current pricing: $417 → $27 special offer

## Component Architecture Notes

- Use `'use client'` directive for components requiring interactivity (hover effects, event handlers)
- Server Components by default for SEO and performance
- Inline styles used alongside TailwindCSS for precise design matching
- Spanish language throughout with proper SEO meta tags