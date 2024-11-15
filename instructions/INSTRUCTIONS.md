# Project Overview
You will create a personal website for a creator who is an AI software composer who builds and ships software products. The website is a place for the creator to share his journey, projects, and thoughts.

## Project Description
You will be using Astro, Shadcn, TailwindCSS, Lucide Icons, and TypeScript. Blog posts will be pulled from Hashnode.


# Project Instructions

## Core Features
- Create a blog post page that pulls blog posts from the creator's Hashnode blog.
- Create a project page that lists out all projects.
- Create an about page that has a brief introduction about the creator and his journey.
- Create a home page that has the following sections: newsletter signup, dumb things I've built, current focus, work with me, free resources and guides, and my product stack.
- Create a navigation bar that is consistent on all pages.
- Create a footer that is consistent on all pages that has social links.
- Create a 404 page.
- Create a responsive clean, modern design that speaks to a Gen X audience.

## Documentation
- Astro: https://docs.astro.build/en/
- Astro & Hashnode: https://docs.astro.build/en/guides/cms/hashnode/
- Shadcn: https://ui.shadcn.com/docs
- TailwindCSS: https://tailwindcss.com/docs
- Lucide Icons: https://lucide.dev/icons/
- Typescript: https://www.typescriptlang.org/docs/

## Current File Structure

CREATOR-HOME2/
├── .vscode/
├── instructions/
│   ├── .env.local
│   └── INSTRUCTIONS.md
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── collapsible.tsx
│   │       ├── context-menu.tsx
│   │       ├── hover-card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── separator.tsx
│   │       ├── tabs.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       └── Card.astro
│   ├── hooks/
│   │   └── use-toast.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── utils.ts
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── globals.css
├── env.d.ts
├── .gitignore
├── astro.config.mjs
├── components.json
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.mjs
└── tsconfig.json