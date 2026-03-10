# Finmile Design System

## Color Palette

### Primary Colors
```tsx
--background: #0B0616        // Deep midnight violet (main bg)
--foreground: #ffffff        // White text

// Tailwind colors
background: #090514          
finmile-purple: #7C3AED      // Vibrant violet (primary)
finmile-indigo: #2A1B54      // Muted indigo (glow)
finmile-lilac: #A78BFA       // Light purple accent
```

### Text Colors
- **White**: `text-white` - Headings, primary text
- **Gray Soft**: `text-[#9CA3AF]` - Body text, descriptions
- **Light Gray**: `text-[#D1D5DB]` - Secondary text
- **Muted Gray**: `text-[#ADB5BD]` - Tertiary text
- **Purple Dark**: `text-[#2F1C8C]` - Headings on light bg
- **Blue Gray**: `text-[#848DA0]` - Body on light bg

## Typography

### Font Families
```tsx
import { Montserrat, Inter } from 'next/font/google'

// Primary (body, headings)
const montserrat = Montserrat({ subsets: ['latin'] })

// Secondary (badges, UI elements)
const inter = Inter({ subsets: ['latin'] })
```

### Headings
```tsx
// H1 - Hero/Page Titles
className="text-[44px] md:text-[60px] lg:text-[64px] font-bold tracking-tight leading-[1.05]"

// H1 - Page Hero
className="text-[36px] md:text-[52px] lg:text-[64px] tracking-tight leading-[1.15] md:leading-[1.1]"

// H2 - Section Titles
className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold leading-[1.1] tracking-tight"

// H3 - Card Titles
className="text-[20px] font-semibold leading-tight"

// Small Caps Heading
className="text-[12px] tracking-[2px] uppercase font-bold"
```

### Body Text
```tsx
// Large Body
className="text-[16px] md:text-[18px] font-medium leading-relaxed"

// Standard Body
className="text-[16px] font-normal leading-relaxed"

// Small Body
className="text-[14px] md:text-[15px] font-medium leading-relaxed"

// Card Description
className="text-[15px] font-medium leading-relaxed"
```

## Buttons

### Variants
```tsx
import { Button } from '@/components/ui/Button'

// Solid (Primary CTA)
<Button variant="solid" size="lg">
  Button Text
</Button>

// Liquid Glass (Secondary CTA)
<Button variant="liquid-glass" size="lg">
  Button Text
</Button>

// Outline
<Button variant="outline" size="default">
  Button Text
</Button>
```

### Sizes
- **lg**: `180px × 48px`, text `14px`, `px-6`
- **default**: `auto × auto`, text `14px`, `px-6 py-2.5`
- **sm**: `auto × auto`, text `13px`, `px-5 py-[10px]`

### Button Styling Classes
```css
/* All buttons */
rounded-[40px] font-semibold tracking-wide

/* Solid variant */
.liquid-solid - Purple gradient with shimmer effect

/* Liquid Glass variant */
.liquid-glass - Frosted glass with hover animation
```

## Badges

```tsx
import { Badge } from '@/components/ui/Badge'

<Badge label="Your text here" />

// Structure
- Border: border-white/10
- Background: bg-[#160E2A]/90 backdrop-blur-md
- "NEW" pill: bg-[#6A27D4], text-[10px], uppercase, bold
- Label: text-[#D1D5DB], text-[12px], font-medium
```

## Cards

### Frosted Glass Card
```tsx
// Container
className="rounded-[24px] p-6 md:p-8 border border-white/10 bg-white/[0.04] shadow-lg"

// Number Badge (inside card)
className="w-12 h-10 bg-[#482CE5] rounded-lg flex items-center justify-center font-bold text-[16px]"

// Card Title
className="text-[20px] font-semibold leading-tight"

// Card Description
className="text-[#DEE2E6] text-[15px] font-medium leading-relaxed"
```

## Effects

### Liquid Glass
```css
/* Apply to element */
className="liquid-glass"

/* Features */
- Frosted glass background with backdrop-filter
- Animated shimmer on hover
- Inset highlights and shadows
- 3D transform on hover
```

### Gradient Text
```tsx
// OS Gradient (Purple to Lilac)
className="gradient-text-os"
// CSS: linear-gradient(to right, #B28BFF, #D1B8FF)
```

### Background Glows
```tsx
// Ambient Glow (behind content)
<div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] 
  bg-[#3B257E] rounded-full blur-[140px] opacity-30 pointer-events-none" />

// Intense Lower Glow (hero sections)
<div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] 
  bg-[#531FD1] rounded-[100%] blur-[220px] opacity-40 pointer-events-none" />

// Corner Accents
<div className="absolute bottom-[-30%] right-[-10%] w-[600px] h-[600px] 
  bg-[#7E42FF] rounded-[100%] blur-[180px] opacity-10 pointer-events-none" />
```

## Layout

### Section Container
```tsx
className="w-full max-w-[1440px] mx-auto px-6"
```

### Section Spacing
```tsx
// Vertical padding (dark bg)
className="py-12 lg:py-20"

// Hero sections
className="pt-40 pb-32"  // or pt-[140px]
```

### Grid Layouts
```tsx
// Two-column feature layout
className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
```

## Animation Classes

```css
/* Slide in from right */
@keyframes slideIn {
  from { opacity: 0; transform: translateX(100px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Liquid shimmer effect */
@keyframes liquidShimmer {
  from { background-position: -200% center; }
  to { background-position: 200% center; }
}
```

## Common Patterns

### Hero Section Structure
```tsx
<section className="relative w-full min-h-screen pt-[140px] bg-[#0B0616]">
  {/* Background glows */}
  <div className="absolute ... bg-[#3B257E] blur-[140px] ..." />
  
  {/* Content */}
  <div className="relative z-10 max-w-[900px] mx-auto">
    <Badge label="..." />
    <h1>Title with <span className="gradient-text-os">Gradient</span></h1>
    <p className="text-[#9CA3AF] text-[16px]">Description</p>
    <div className="flex gap-5">
      <Button variant="solid" size="lg">CTA</Button>
    </div>
  </div>
</section>
```

### Feature Section on White
```tsx
<section className="w-full py-10 bg-white">
  <h2 className="text-[#2F1C8C] text-[48px] font-semibold">Title</h2>
  <p className="text-[#848DA0] text-[16px] font-medium">Body text</p>
</section>
```

## Quick Reference

| Element | Text Size | Weight | Color |
|---------|-----------|--------|-------|
| Hero H1 | 44-64px | bold | white |
| Section H2 | 28-48px | semibold | white/#2F1C8C |
| Card H3 | 20px | semibold | white |
| Body Large | 16-18px | medium | #9CA3AF/#848DA0 |
| Body Standard | 14-16px | medium/normal | #9CA3AF |
| Badge Label | 12px | medium | #D1D5DB |
| Button Text | 14px | semibold | white |
