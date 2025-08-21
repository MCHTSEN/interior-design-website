# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an interior design website built with Next.js 15, TypeScript, and Tailwind CSS v4. The project uses shadcn/ui components and Framer Motion for animations. It appears to be a Turkish language interior design/event planning service website ("Refit").

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production build
npm run start

# Run linter
npm run lint
```

## Architecture & Key Technologies

### Stack
- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with custom PostCSS configuration
- **UI Components**: shadcn/ui (located in `components/ui/`)
- **Animations**: Framer Motion for scroll animations
- **Forms**: React Hook Form with Zod validation

### Project Structure
- `/app` - Next.js App Router pages and layouts
- `/components` - React components including custom animations and shadcn/ui components
- `/lib` - Utility functions (currently contains `cn()` utility for className merging)
- `/hooks` - Custom React hooks
- `/public` - Static assets including images

### Key Configuration
- **Path Aliases**: Uses `@/*` for root-relative imports
- **Build Settings**: ESLint and TypeScript errors are ignored during builds (see next.config.mjs)
- **Fonts**: Uses Open Sans as primary font with Geist fonts as fallbacks
- **CSS**: Tailwind v4 with custom color scheme using OKLCH color space

## Component Architecture

The project uses shadcn/ui components extensively. All UI components are pre-built and located in `/components/ui/`. Custom business logic components include:

- `AnimatedSection` - Provides fade-in animation on scroll using Framer Motion
- `AnimatedCounter` - Animated number counter component
- `ServicesAccordion` - Service listing with accordion functionality

## Styling Approach

The project uses Tailwind CSS v4 with:
- Custom CSS variables for theming in OKLCH color space
- Dark mode support (CSS variables configured but not actively used)
- Custom scroll animations defined in `app/globals.css`
- Component-specific styling using Tailwind utility classes

## Important Notes

- The main page (`app/page.tsx`) contains the entire homepage as a single component
- Turkish language is used throughout the UI
- Images are stored in `/public` and referenced directly
- The project uses unoptimized images (configured in next.config.mjs)