# YACMS Client Template - Refactored

## Overview
This template has been completely refactored to use yacms-core components exclusively. It now provides a clean, professional starting point for creating showcase websites.

## Structure

```
yablocks/
├── _shared/              # Shared components across all pages
│   ├── navigation.json   # PrimaryNavigation component
│   └── footer.json       # FooterColumns component
├── home/                 # Homepage blocks
│   ├── page.json
│   ├── hero.json         # Hero03 component
│   ├── services.json     # ServiceGrid component
│   ├── value-proposition.json  # ValueProposition component
│   ├── user-context.json # UserContext01 component
│   └── cta-banner.json   # CTABanner component
├── about/                # About page blocks
│   ├── page.json
│   ├── hero.json         # GlassHeroCentered component
│   ├── mission.json      # ValueProposition component
│   ├── features.json     # UserContext01 component
│   └── cta.json          # CTABanner component
├── contact/              # Contact page blocks
│   ├── page.json
│   ├── hero.json         # EditorialHero component
│   ├── contact-info.json # UserContext01 component
│   └── faq.json          # ValueProposition component
└── projects/             # Projects/Portfolio page blocks
    ├── page.json
    ├── hero.json         # GlassHeroSplit component
    ├── projects-grid.json # ServiceGrid component
    └── cta.json          # CTABanner component
```

## Components Used from yacms-core

### Layout Components
- **Hero03** - Modern hero section with title, description, CTAs, logos and hero image
- **GlassHeroCentered** - Centered hero with glass morphism effect
- **GlassHeroSplit** - Split layout hero with image
- **EditorialHero** - Editorial-style hero section
- **PrimaryNavigation** - Main navigation with dropdown support
- **FooterColumns** - Multi-column footer with social links

### Content Components
- **ServiceGrid** - Grid layout for services/features with icons and images
- **ValueProposition** - Step-by-step value proposition with outcome
- **UserContext01** - Context blocks for different user types

### Conversion Components
- **CTABanner** - Call-to-action banner with features list

## Pages Included

### 1. Home Page (`/`)
Complete landing page with:
- Hero section introducing YACMS
- Services grid showcasing key features
- Value proposition explaining the workflow
- User context for target audiences
- CTA banner for conversion

### 2. About Page (`/about`)
Company/project information page with:
- Centered glass hero
- Mission and values section
- Feature highlights
- Call-to-action

### 3. Contact Page (`/contact`)
Contact and support page with:
- Editorial hero section
- Contact information blocks
- FAQ section
- Support information

### 4. Projects Page (`/projects`)
Portfolio/showcase page with:
- Split hero with project showcase
- Projects grid with 6 example projects
- Call-to-action for custom projects

## Key Features

### ✅ Professional Content
- Clear, concise messaging in French
- SEO-optimized metadata for each page
- Well-structured content hierarchy
- Call-to-actions on every page

### ✅ Modern Design System
- All components from yacms-core
- Consistent styling across pages
- Dark theme support
- Responsive by default

### ✅ SEO Ready
- Proper meta tags on all pages
- Semantic HTML structure
- Open Graph tags for social sharing
- Keyword optimization

### ✅ Best Practices
- Reusable shared components
- Clean file organization
- Component-based architecture
- Easy to customize and extend

## Customization Guide

### Changing Content
Edit the JSON files in each page folder to customize:
- Text content (titles, descriptions)
- Images (update paths in `src` fields)
- Links and CTAs
- Colors and variants

### Adding New Pages
1. Create a new folder in `yablocks/`
2. Add a `page.json` with metadata and block references
3. Create block JSON files using yacms-core components
4. Reference shared components from `_shared/`

### Using Different Components
Browse available components in:
```
yacms-core/src/components/blocks/
├── content/
│   ├── proposition/ValueProposition
│   ├── services/ServiceGrid
│   └── user-context/UserContext01
├── conversion/
│   └── cta/CTABanner
├── layout/
│   ├── hero/ (Hero03, GlassHeroCentered, GlassHeroSplit, EditorialHero)
│   ├── navigation/ (PrimaryNavigation, CompactNavigation)
│   └── footer/ (FooterColumns)
└── social-proof/
    ├── stats/ (Stats, SimpleStats)
    ├── testimonials/ (TestimonialCards)
    └── credentials/ (TrustCredentials)
```

## Next Steps

1. **Update Images**: Replace placeholder image paths with your actual images
2. **Customize Content**: Modify all text content to match your brand
3. **Add Logo**: Update the logo path in `_shared/navigation.json`
4. **Configure SEO**: Update meta tags in each `page.json`
5. **Test**: Run your site and verify all components render correctly

## Benefits of This Refactoring

- ✨ **Cleaner**: No more custom/orphaned components
- 🚀 **Maintainable**: Uses core components that are tested and maintained
- 📦 **Modular**: Easy to add/remove/swap components
- 🎨 **Professional**: Consistent design language throughout
- 📱 **Responsive**: All components are mobile-friendly by default
- ⚡ **Performant**: Optimized components from yacms-core

---

**Ready to use!** This template is production-ready and can be deployed immediately.
