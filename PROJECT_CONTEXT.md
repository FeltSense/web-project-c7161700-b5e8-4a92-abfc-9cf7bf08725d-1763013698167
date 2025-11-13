# TechBusiness Website

## Project Overview
A modern, professional website for TechBusiness - a technology solutions company targeting general consumers.

## Brand Identity
- **Name:** TechBusiness
- **Industry:** Technology
- **Target Audience:** General consumers
- **Style:** Modern and professional

## Key Features

### 1. Navigation
- Sticky navigation with smooth scroll behavior
- Mobile-responsive hamburger menu
- Clear CTAs and brand identity

### 2. Hero Section
- Full-screen immersive hero with high-quality background image
- Large, impactful typography (text-6xl to text-8xl)
- Clear value proposition
- Dual CTAs for different user intents
- Statistics showcase for social proof

### 3. Services Section
- 6 core services displayed in a 3-column grid
- Each service includes:
  - Custom gradient icon backgrounds
  - Clear title and description
  - Hover animations
- Services include:
  - Custom Software Development
  - Cloud Infrastructure
  - Mobile App Development
  - Data Analytics & AI
  - Cybersecurity Solutions
  - IoT Integration

### 4. Team/Testimonials Section
- 6 client testimonials in a 3-column grid
- Each testimonial includes:
  - Professional photo
  - Name, role, and company
  - 5-star rating
  - Detailed quote
- Different layout from services (cards vs grid)

### 5. Pricing Section
- Single clear pricing option at $29/month
- Comprehensive feature list with checkmarks
- Direct Stripe integration button
- Trust indicators (no setup fees, cancel anytime, secure payment)
- Social proof elements

### 6. Contact Form
- Two-column layout with information and form
- Form fields: name, email, phone, message
- Hidden fields for founder_id and project_id
- Success state with confirmation message
- Contact information display:
  - Email
  - Phone
  - Live chat availability

### 7. Footer
- Comprehensive 6-column layout
- Company information and branding
- Quick links organized by category:
  - Company
  - Services
  - Support
  - Legal
- Contact information
- Social media links
- Copyright information

## Design Principles

### Color Palette
- Primary: Blue (#2563eb) - Trust and professionalism
- Secondary: Indigo (#4f46e5) - Innovation
- Accent colors for service icons (blue, indigo, purple, cyan, green, orange)
- Neutrals: White, various grays for text and backgrounds

### Typography
- Font: Inter (sans-serif)
- Large headings (text-5xl to text-8xl)
- Clear hierarchy throughout
- Generous line spacing (leading-relaxed)

### Layout
- Generous white space (py-24 for sections)
- Consistent padding (p-8, p-12)
- Responsive grid layouts
- Container max-width for readability

### Interactions
- Smooth transitions (duration-300)
- Hover effects (scale, shadow, color changes)
- Scroll-based navigation changes
- Form validation and feedback

## Technical Stack
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Lucide React for icons
- React hooks for state management

## API Integration
- Form submissions: POST to https://deep-api-server-2moiw.kinsta.app/api/form-submissions
- Required fields: name, email, phone, message, founder_id, project_id
- Stripe payment: https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00

## Image Sources
- Hero: Team collaboration (Unsplash)
- Team/Testimonials: Professional headshots (Unsplash)
- All images optimized for web delivery

## Responsive Design
- Mobile-first approach
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
- Hamburger menu for mobile navigation
- Flexible grid layouts (1 column mobile, 2-3 columns desktop)

## Performance Optimization
- Next.js Image component for optimized images
- Lazy loading for images
- Minimal JavaScript bundle
- CSS-only animations where possible

## Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Sufficient color contrast
- Focus states for all interactive elements

## Future Enhancements
- Blog section
- Case studies
- Advanced animations
- Multi-language support
- Dark mode toggle