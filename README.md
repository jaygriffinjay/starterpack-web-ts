# 🚀 Starterpack Web TypeScript

A reusable React + TypeScript bootstrap repo designed for rapid prototyping and visual learning. Built with a generative theme system, dev-only tooling, and AI-ready documentation components.

## Philosophy

This isn't just another React starter template. It's a **personal bootstrap repo** meant to be copied and reused across multiple projects. The goal: stop wasting time on boilerplate and start building features immediately.

### Key Ideas

- **Visual Learning Tools** - Sliders and color pickers for instant feedback, not config files
- **AI-Ready Components** - Structured primitives that AI can compose into beautiful documentation
- **Dev-Only Routes** - Built-in tools (theme editor, docs) that are automatically tree-shaken from production
- **Generative Themes** - A few config values generate an entire design system
- **Natural Language Future** - Architecture designed to support AI-driven interfaces

## What's Inside

### 🎨 Visual Theme Editor
Live theme customization with instant preview across all components:
- Drag sliders to adjust colors, spacing, shadows, and border radius
- See changes applied to the entire site in real-time
- Persists to localStorage automatically (debounced to avoid spam)
- Export config when ready and paste into `themeData.ts`

**Use it to:** Pick a theme visually at the start of each new project instead of guessing CSS values.

### 📚 Documentation Components
10 essential content primitives following the "markdown philosophy":
- `Heading` (1-6), `Paragraph`, `Text` (variants)
- `List` (ordered/unordered), `Link`, `Code`, `CodeBlock` (with line numbers)
- `Blockquote`, `Callout` (info/success/warning/error), `Divider`
- `Stack` & `Inline` (layout helpers)

**Built for:** AI to generate structured documentation that's actually readable, not markdown walls of text.

### 🏗️ Architecture Patterns

**Routes as Data**
```typescript
export const routes = [
  { path: '/', component: HomePage, devOnly: false },
  ...(import.meta.env.DEV ? [
    { path: '/theme-editor', component: ThemeEditorPage, devOnly: true },
  ] : []),
];
```
Dev-only routes are completely removed from production builds via tree-shaking.

**Feature-Based Structure**
```
pages/
  ThemeEditor/
    ThemeEditorPage.tsx
    components.tsx        # Scoped to this feature only
components/
  Primitives.tsx          # Shared across all pages
```

**Generative Theme System**
```typescript
// You edit this
const config = { primaryHue: 220, spacingUnit: 8, radiusScale: 8 };

// System generates this
const theme = { colors, spacing, radii, fontSizes, fonts, shadows };
```

## Tech Stack

- **Vite** - Lightning-fast dev server and build tool
- **React 19** - Latest React with modern patterns
- **TypeScript** - Full type safety everywhere
- **Emotion** - CSS-in-JS using structured `CSSObject` approach
- **Radix UI** - Accessible, unstyled component primitives
- **React Router** - Client-side routing with data-driven routes

## Getting Started

```bash
# Clone or copy this repo
git clone https://github.com/jaygriffinjay/starterpack-web-ts.git my-new-project
cd my-new-project

# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:5173
# Navigate to /theme-editor to customize your theme
```

## Dev Routes (Only in Development)

These routes exist only when running `npm run dev`:
- `/theme-editor` - Visual theme customization playground
- `/docs` - Project documentation and philosophy

Production builds (`npm run build`) automatically exclude these pages and their code.

## Future Vision

### AI Output Beautiflyzer
Instead of AI returning walls of text, it returns structured data that gets rendered with these components into beautiful, interactive documentation. Think: "explain this codebase" → instant visual docs with code examples, callouts, and proper hierarchy.

### Natural Language Control
Building interfaces that respond to lazy natural language instead of precise UI interactions. Already proven with a time-block planner that schedules multiple events from a single prompt like "add meeting at 3pm with reminders and mark important."

### Interactive Code Playgrounds
Not just syntax-highlighted code blocks, but fully editable, runnable examples embedded in documentation. (Planned, not yet implemented.)

## Why This Exists

Most developers treat infrastructure, design systems, and documentation as necessary evils. This repo treats them as **force multipliers**. Invest time once in reusable tooling, then every future project starts at 50% completion instead of 0%.

The goal isn't perfection - it's **velocity**. Copy this repo, tweak the theme in 5 minutes, and start building your actual product idea.

## License

MIT - Copy it, modify it, use it however you want.
