# Creator Home

A modern, animated personal website template for creators who build and ship software products. Built with Astro, Shadcn UI, and TailwindCSS.

## ✨ Features

- **Lightning Fast**: Built with Astro for exceptional performance
- **Beautiful Animations**: Subtle fade-ups and bounces that bring your content to life
- **Fully Responsive**: Looks great on all devices
- **Component-Based**: Built with reusable components using Shadcn UI
- **Blog Integration**: Ready to connect with your Hashnode blog
- **Project Showcase**: Beautiful cards to showcase your work
- **Newsletter Ready**: Built-in newsletter subscription system

<div align="center">
  <img src="public/images/docs/features/projects.png" width="400" alt="Projects" />
  <img src="public/images/docs/features/blog.png" width="400" alt="Blog Integration" />
  <img src="public/images/docs/features/newsletter.png" width="400" alt="Newsletter" />
</div>

## Responsive Design

<div align="center">
  <img src="public/images/docs/mobile/mobile-home.png" width="250" alt="Mobile Home" />
  <img src="public/images/docs/mobile/mobile-nav.png" width="250" alt="Mobile Navigation" />
</div>

## Hashnode Integration

This template comes with built-in integration for your Hashnode blog and newsletter. All you need is three keys from your Hashnode account to get started.

### What's Included
- **Blog Posts**: Automatically displays your Hashnode blog posts
- **Newsletter**: Lets visitors subscribe to your Hashnode newsletter
- **Error Handling**: Friendly error messages if something goes wrong
- **Loading States**: Nice loading animations while content is being fetched

### Quick Setup

1. Create a `.env.local` file in your project root:
```env
# Hashnode Posts Configuration
PUBLIC_HASHNODE_HOST="your-blog.hashnode.dev"

# Newsletter Signup Configuration
PUBLIC_HASHNODE_PUBLICATION_ID="your_publication_id"
HASHNODE_ACCESS_TOKEN="your_personal_access_token"
```

2. Get your keys from Hashnode:
   - Log into your Hashnode account
   - Go to Account Settings → Developer Settings
   - Copy your Publication ID and Access Token
   - For the Host, use your Hashnode blog URL without 'https://' (e.g., "johndoe.hashnode.dev")
   - Paste them into the `.env.local` file

That's it! Your blog posts and newsletter will now work automatically. No coding required.

> **Note**: Keep your Access Token private - don't share it or commit it to public repositories.

## Quick Start

1. Clone this repository and install dependencies:
```bash
git clone https://github.com/yourusername/creator-home.git
cd creator-home
npm install
```

2. Create a `.env.local` file in the project root and add your Hashnode credentials:
```env
# Hashnode Posts Configuration
PUBLIC_HASHNODE_HOST="your-blog.hashnode.dev"

# Newsletter Signup Configuration
PUBLIC_HASHNODE_PUBLICATION_ID="your_publication_id"
HASHNODE_ACCESS_TOKEN="your_personal_access_token"
```

 **How to get your keys from Hashnode:**
    - Log into your Hashnode account
    - Go to Account Settings → Developer Settings
    - Copy your Publication ID and Access Token
    - For the Host, use your Hashnode blog URL without 'https://' (e.g., "johndoe.hashnode.dev")
    - Paste them into the `.env.local` file

   That's it! Your blog posts and newsletter will now work automatically. No coding required.

   > **Note**: Keep your Access Token private - don't share it or commit it to public repositories.

3. Customize the site by editing:
   - `src/pages/index.astro` - Your home page content, newsletter name, and current projects
   - `src/pages/about.astro` - Your personal journey and background
   - `src/pages/projects.astro` - Your project showcase
   - `src/pages/posts.astro` - Your newsletter posts and layout
   - `src/components/Navbar.astro` - Your logo and navigation links
   - `src/components/Footer.astro` - Your social media links
   - `public/images` - Your images and assets

4. Start the development server:
```bash
npm run dev
```

5. Build and deploy:
```bash
npm run build
```
Deploy the `dist` folder to your preferred hosting platform (Vercel, Netlify, etc.)

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


Created with ❤️ by [Your Name](https://github.com/yourusername)
