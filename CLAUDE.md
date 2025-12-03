# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Pablo Francisco Lerman, a Full Stack Developer from Argentina. Built with Next.js 16, React 19, and Tailwind CSS 4. The site showcases professional experience, technical skills, and featured projects including e-commerce platforms and CRM systems.

## Tech Stack

- **Framework**: Next.js 16.0.6 with App Router
- **React**: 19.2.0
- **Styling**: Tailwind CSS 4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono (via next/font/google)
- **Language**: JavaScript (no TypeScript)
- **Linting**: ESLint with Next.js config

## Development Commands

```bash
# Start development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### App Router Structure

This project uses Next.js App Router (not Pages Router). All routes are defined in the `app/` directory:

- `app/layout.js` - Root layout with font configuration and metadata
- `app/page.js` - Home page with all portfolio sections
- `app/globals.css` - Global styles and Tailwind imports

### Single Page Application

Currently a single-page portfolio with multiple sections:
1. Hero section with name, title, and social links
2. About section (Sobre mí)
3. Tech stack grid
4. Featured projects
5. Contact section

### Styling Approach

- Uses Tailwind CSS 4 with the new `@import "tailwindcss"` syntax
- Custom CSS variables for theming in `globals.css`
- Dark mode support via `prefers-color-scheme`
- Inline theme configuration using `@theme inline` directive
- Responsive design with mobile-first approach (sm/md/lg breakpoints)

### Font Configuration

Fonts are loaded via `next/font/google` in `app/layout.js`:
- Geist Sans: Primary font (`--font-geist-sans`)
- Geist Mono: Monospace font (`--font-geist-mono`)

Both fonts are applied as CSS variables to the body element.

## Content and Contact Information

The portfolio is in Spanish and includes:
- GitHub: https://github.com/pflerman
- LinkedIn: https://linkedin.com/in/pabloflerman
- WhatsApp: +54 9 11 4046-1603
- Email: pflerman@gmail.com

### Featured Projects

1. **Cajas Ordenadoras** (cajasordenadoras.com)
   - E-commerce platform with MercadoPago integration
   - Built with Next.js, React, Supabase

2. **Sistema CRM Cloud**
   - Customer management system with dashboard
   - React, Supabase, Tailwind CSS

3. **MercadoLibre Product Manager**
   - Python GUI for bulk product management
   - OAuth authentication, multi-account support

## Deployment

- Deployed on Vercel (`.vercel/` directory present)
- Production URL: TBD (check Vercel dashboard)

## Configuration Files

- `next.config.mjs` - Minimal Next.js configuration (no custom options)
- `eslint.config.mjs` - ESLint config extending Next.js core-web-vitals
- `postcss.config.mjs` - PostCSS configured for Tailwind CSS 4
- `jsconfig.json` - Path aliases configuration for JavaScript

## Git Branch

- Main branch: `main`
- No separate development branch currently in use
