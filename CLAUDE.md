# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Pao Bio Club E-Commerce Website** - A React-based shopping cart application for the Pao Bio Club to sell merchandise and manage orders through WeChat integration.

- **Framework**: React 19.2.0 with Create React App
- **Styling**: Tailwind CSS 4.1.16 (installed, needs configuration)
- **Deployment**: GitHub Pages at https://pao-bio.github.io/pao-bio
- **Repository**: https://github.com/SkyITL/paobiowebsite

## Common Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3000)
npm start

# Run tests
npm test

# Run specific test file
npm test -- --testNamePattern="component name"

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Analyze bundle size
npm run build && npx source-map-explorer 'build/static/js/*.js'
```

## High-Level Architecture

### Current State
The application currently consists of a single component (`PaoBioApp.jsx`) that manages:
- Product display (3 hardcoded items)
- Shopping cart state using React hooks
- Basic add-to-cart functionality
- Checkout placeholder (alert only)

### Planned Architecture
```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation, cart badge, WeChat button
│   ├── Cart.jsx        # Shopping cart with persistence
│   └── WeChatQR.jsx    # WeChat QR code integration
├── hooks/              # Custom React hooks
│   └── useCart.js      # Cart state management & localStorage
├── data/               # Static data
│   └── products.js     # Product catalog
└── PaoBioApp.jsx       # Main app orchestrator
```

### Key Design Patterns

1. **State Management**: Custom `useCart` hook encapsulates cart logic and localStorage persistence
2. **Component Composition**: Small, focused components assembled in `PaoBioApp`
3. **Data Flow**: Unidirectional data flow with props and callbacks
4. **Styling**: Tailwind CSS utility classes for responsive design

## WeChat Integration Strategy

Since this is a static site on GitHub Pages without backend:
1. WeChat QR code displayed at checkout for order completion
2. Cart summary can be copied/screenshot for WeChat communication
3. Payment handled externally through WeChat conversation

## Testing Approach

```bash
# Component testing
npm test -- --coverage

# Integration testing (development server must be running)
npm start  # In one terminal
npm run test:e2e  # In another (if configured)
```

## Deployment Workflow

The site auto-deploys to GitHub Pages:
```bash
# 1. Make changes
# 2. Test locally
npm start

# 3. Build and deploy
npm run deploy

# 4. Verify at https://pao-bio.github.io/pao-bio
```

## Cart Persistence Implementation

Cart data is stored in localStorage with the following structure:
```javascript
{
  items: [{ id, name, price, quantity }],
  lastUpdated: timestamp
}
```

The cart automatically:
- Saves on every update
- Loads on app initialization
- Handles corrupted data gracefully

## Product Data Management

Products are managed in `/src/data/products.js`:
```javascript
export const products = [
  { id, name, description, price, image, category, inStock }
];
```

To update products, edit this file directly - no database needed.

## Performance Considerations

- Images should be optimized (<200KB) and stored in `/public/assets/images/`
- Use React.lazy() for code splitting if adding routes
- Tailwind CSS purges unused styles in production builds
- Bundle size target: <300KB gzipped

## Environment-Specific Notes

- **Development**: Uses React's development mode with helpful warnings
- **Production**: Minified, optimized build with source maps
- **GitHub Pages**: Requires `homepage` field in package.json for correct asset paths