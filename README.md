# Healthcare Astro Theme

A modern, professional Astro theme designed for healthcare and medical service providers. Built with **Astro 5**, **Tailwind CSS v4**, and **TypeScript** for optimal performance and developer experience.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Astro](https://img.shields.io/badge/Astro-5.14-FF5D01?logo=astro)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?logo=tailwind-css)

## ✨ Features

- 🏥 **Healthcare-focused design** - Clean, professional layout perfect for medical practices
- 📱 **Fully responsive** - Optimized for all devices and screen sizes
- ⚡ **Lightning-fast** - Built with Astro for exceptional performance
- 🎨 **Tailwind CSS v4** - Modern utility-first CSS with design tokens
- 🔧 **Easy customization** - Well-structured components with TypeScript
- 📄 **7 Pre-built pages** - Home, About, Services, Contact, Careers, Info, 404
- 🎯 **SEO optimized** - Proper meta tags and semantic HTML
- ♿ **Accessible** - ARIA labels and semantic markup
- 🎭 **Design system** - Consistent theming with CSS custom properties
- 📦 **DRY components** - Reusable, maintainable component architecture

## 📦 What's Included

### Pages
- **Home** (`/`) - Hero section, services overview, statistics, FAQ
- **About** (`/about`) - Company information and leadership team
- **Services** (`/services`) - Detailed service offerings and capabilities
- **Contact** (`/contact`) - Contact form and information
- **Careers** (`/careers`) - Job opportunities
- **Info** (`/info`) - FAQs and additional resources
- **404** - Custom error page

### Reusable Components
- **Button** - Customizable button with variants (primary, white, outline)
- **Card** - Service/content cards with hover effects
- **Heading** - Semantic headings with consistent sizing and alignment options
- **Icon** - SVG icon system (13 icons: check, arrow-right, chevron-right, chevron-down, phone, users, clipboard, star, document, video, book, heart, medical)
- **Link** - Styled links with optional icons
- **CheckListItem** - List items with checkmark icons
- **ServiceCard** - Specialized service cards with hover effects
- **PageHero** - Reusable hero section with two-column layout and image
- **CallToActionSection** - CTA sections with background images
- **ServicesIntro** - Services grid display
- **Accordion** - FAQ accordion component
- **NumberCounter** - Animated statistics counter

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (LTS recommended)
- npm, pnpm, or yarn

### Installation

#### Option 1: Use as Astro Theme (Recommended)

If this theme is published to npm:

```bash
# Create a new Astro project
npm create astro@latest my-healthcare-site

# Navigate to your project
cd my-healthcare-site

# Install the theme (when published)
npm install healthcare-astro-theme

# Copy theme files to your project
# Follow the theme's setup instructions
```

#### Option 2: Clone from GitHub

```bash
# Clone the repository
git clone https://github.com/web-stacked/healthcare-astro-theme.git
cd healthcare-astro-theme

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) to see your site.

#### Option 3: Use as Template

1. Click "Use this template" on GitHub
2. Create your new repository
3. Clone your new repository
4. Run `npm install` and `npm run dev`

### Build for Production

```bash
npm run build
```

Built files will be in the `dist/` directory. You can deploy to:
- **Netlify** - Connect your Git repository
- **Vercel** - Import your repository
- **Cloudflare Pages** - Connect your repository
- **Any static host** - Upload the `dist/` folder

## 🎨 Design System

This theme uses a comprehensive design system built with Tailwind v4 CSS custom properties for easy customization.

### Color Palette

The theme uses a professional teal color scheme with customizable design tokens:

```css
/* Primary Colors */
--color-theme-primary: #0d9488;           /* teal-600 */
--color-theme-primary-dark: #0f766e;      /* teal-700 */
--color-theme-primary-light: #14b8a6;     /* teal-500 */

/* Surface Colors */
--color-theme-surface: #ffffff;
--color-theme-surface-muted: #f9fafb;

/* Text Colors */
--color-theme-text-primary: #111827;
--color-theme-text-secondary: #374151;
--color-theme-text-muted: #6b7280;
```

### Typography

```css
/* Headings */
--font-size-h1-mobile: 2.5rem;    /* 40px */
--font-size-h1-desktop: 4rem;     /* 64px */
--font-size-h2-mobile: 1.875rem;  /* 30px */
--font-size-h2-desktop: 2.25rem;  /* 36px */
```

### Spacing System

The theme uses a consistent spacing system with CSS custom properties:

```css
/* Section Spacing - Applied via section and section-sm utilities */
--section-spacing: 3rem;        /* 48px mobile */
--section-spacing-lg: 4rem;     /* 64px desktop */
--section-spacing-sm: 2rem;     /* 32px mobile (smaller sections) */
--section-spacing-sm-lg: 2.5rem; /* 40px desktop (smaller sections) */
```

**Usage:**
```astro
<!-- Standard section spacing (48px mobile, 64px desktop) -->
<section class="section">
  <div class="container">
    <!-- content -->
  </div>
</section>

<!-- Smaller section spacing (32px mobile, 40px desktop) -->
<section class="section-sm">
  <div class="container">
    <!-- content -->
  </div>
</section>

<!-- Override spacing when needed -->
<section class="section section-pt-0">  <!-- Remove top padding -->
<section class="section section-pb-0">  <!-- Remove bottom padding -->
<section class="section section-gap">   <!-- Reduce spacing by 50% -->
```

### Using Design Tokens

```astro
<!-- Use theme utilities -->
<div class="bg-theme-primary text-theme-text-on-primary">
  <p class="text-theme-text-secondary">Content</p>
</div>

<!-- Use custom utilities -->
<button class="button button-primary">Click me</button>
<div class="card">Card content</div>
<a href="#" class="link-primary">Learn more</a>
```

## 🔧 Customization

For detailed customization instructions, see [CUSTOMIZATION.md](CUSTOMIZATION.md).

### Quick Start Customization

1. **Colors** - Edit `src/styles/tailwind.css` theme variables
2. **Logo** - Replace `src/assets/logo.png`
3. **Content** - Update page files in `src/pages/`
4. **Images** - Replace images in `src/assets/`
5. **Spacing** - Adjust section spacing variables in `tailwind.css`

### Component Usage

#### Button Component

```astro
import Button from '../components/Button.astro';

<Button
  variant="primary"    // 'primary' | 'primary-dark' | 'white' | 'white-outline'
  size="lg"            // 'base' | 'lg'
  href="/contact"
  showIcon={true}
  ariaLabel="Contact us"
>
  Get Started
</Button>
```

#### Card Component

```astro
import Card from '../components/Card.astro';

<Card
  title="Service Title"
  summary="Service description"
  image={myImage}
  link="/services"
/>
```

#### Icon Component

```astro
import Icon from '../components/Icon.astro';

<Icon
  name="check"       // 'check' | 'arrow-right' | 'chevron-right' | 'chevron-down' | 'phone' | 'users' | 'clipboard' | 'star' | 'document' | 'video' | 'book' | 'heart' | 'medical'
  size="md"          // 'sm' | 'md' | 'lg' | 'xl'
  class="text-teal-600"
/>
```

#### Heading Component

```astro
import Heading from '../components/Heading.astro';

<Heading
  level="h2"         // 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' or 1-6 (numbers work too)
  align="center"     // 'left' | 'center' | 'right' (default: 'left')
  size="default"     // 'default' | 'section' | 'page'
>
  Your Heading
</Heading>
```

#### PageHero Component

```astro
import PageHero from '../components/PageHero.astro';
import heroImage from '../assets/hero.jpg';

<PageHero
  title="SERVICES"
  description="We provide exceptional healthcare services..."
  image={heroImage}
/>
```

### Tailwind v4 Configuration

All theme configuration is in `src/styles/tailwind.css`:

```css
@theme {
  /* Add your custom theme variables here */
  --color-brand-primary: #your-color;
}

/* Create custom utilities */
@utility your-utility {
  /* utility styles */
}
```

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/           # Images and media
│   ├── components/       # Reusable Astro components
│   │   ├── PageHero.astro
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Heading.astro
│   │   ├── Icon.astro
│   │   ├── CheckListItem.astro
│   │   ├── ServiceCard.astro
│   │   ├── CallToActionSection.astro
│   │   └── ...
│   ├── layouts/          # Page layouts
│   │   └── Layout.astro
│   ├── pages/            # File-based routing
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── services.astro
│   │   ├── contact.astro
│   │   ├── careers.astro
│   │   ├── info.astro
│   │   └── 404.astro
│   ├── styles/           # Global styles & design system
│   │   └── tailwind.css  # Tailwind v4 theme & utilities
│   └── types/            # TypeScript definitions
│       └── design-system.ts
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs (if needed)
└── tsconfig.json
```

## 🌐 Deployment

### Netlify

```bash
npm run build
# Connect your repository to Netlify
```

### Vercel

```bash
npm run build
# Import your repository in Vercel
```

### Other Platforms

Upload the `dist/` folder to any static hosting service.

## ✅ Getting Started Checklist

After installing this theme, customize it for your needs:

- [ ] Update `package.json` with your project details
- [ ] Replace "MedCare Solutions" branding in `src/data/navigation.json`
- [ ] Update all page content in `src/pages/`
- [ ] Replace placeholder images in `src/assets/`
- [ ] Update contact information in `src/components/Footer.astro`
- [ ] Add your logo (`src/assets/logo.png`)
- [ ] Update favicon (`public/favicon.svg`)
- [ ] Customize colors in `src/styles/tailwind.css`
- [ ] Update meta descriptions in each page
- [ ] Test on multiple devices and browsers
- [ ] Run `npm run build` to verify production build

See [CUSTOMIZATION.md](CUSTOMIZATION.md) for detailed customization guide.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons: Custom SVG icon system
- Navigation: [astro-navbar](https://www.npmjs.com/package/astro-navbar)

## 📧 Support

For questions or issues:
- Open an issue on [GitHub](https://github.com/web-stacked/healthcare-astro-theme/issues)
- Check the [Astro documentation](https://docs.astro.build)
- Review [CUSTOMIZATION.md](CUSTOMIZATION.md) for customization help

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 🌟 Features Roadmap

Future enhancements planned:
- [ ] Dark mode toggle
- [ ] Additional color schemes
- [ ] Blog/news section template
- [ ] CMS integrations (Contentful, Sanity)
- [ ] Advanced animations
- [ ] More component variants
- [ ] Internationalization (i18n) support

---

## 👤 Author

**TechStacked** - [techstacked.dev](https://techstacked.dev)

---

Made with ❤️ for the healthcare community

**Star this repo if you find it useful! ⭐**
