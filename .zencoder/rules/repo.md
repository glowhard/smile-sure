---
description: Repository Information Overview
alwaysApply: true
---

# Smile Sure Information

## Summary
A dental clinic website built with Next.js, featuring a modern UI with components for showcasing services, testimonials, and booking appointments. The project uses React 19 with TypeScript and is styled with Tailwind CSS.

## Structure
- **app/**: Next.js app router structure with page components and global styles
- **public/**: Static assets including images, videos, and SVG icons
- **src/components/**: React components for UI elements like navbar, footer, and content sections
- **.next/**: Build output directory (generated)

## Language & Runtime
**Language**: TypeScript
**Version**: TypeScript 5.x
**Framework**: Next.js 15.5.3
**React Version**: 19.1.0
**Build System**: Next.js with Turbopack
**Package Manager**: npm/yarn

## Dependencies
**Main Dependencies**:
- next: 15.5.3 - React framework
- react: 19.1.0 - UI library
- react-dom: 19.1.0 - DOM bindings for React
- framer-motion: 12.23.22 - Animation library

**Development Dependencies**:
- typescript: 5.x - Type checking
- eslint: 9.x - Code linting
- tailwindcss: 4.x - Utility-first CSS framework
- @types packages - TypeScript type definitions

## Build & Installation
```bash
# Install dependencies
npm install
# or
yarn install

# Development server
npm run dev
# or
yarn dev

# Production build
npm run build
# or
yarn build

# Start production server
npm run start
# or
yarn start
```

## Main Files & Resources
**Entry Points**:
- app/page.tsx - Main homepage component
- app/layout.tsx - Root layout with metadata and global styles

**Key Components**:
- src/components/hero.tsx - Hero section
- src/components/navbar.tsx - Navigation bar
- src/components/footer.tsx - Footer section
- src/components/AboutClinic.tsx - About section
- src/components/OurServices.tsx - Services section
- src/components/BookVisit.tsx - Appointment booking

**Configuration Files**:
- next.config.ts - Next.js configuration
- tsconfig.json - TypeScript configuration
- postcss.config.mjs - PostCSS configuration for Tailwind