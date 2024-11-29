# Creator Home 🏠

A modern, animated personal website template for creators who build and ship software products. Built with Astro, Shadcn UI, and TailwindCSS.

## ✨ Features

- 🚀 **Lightning Fast**: Built with Astro for exceptional performance
- 🎨 **Beautiful Animations**: Subtle fade-ups and bounces that bring your content to life
- 📱 **Fully Responsive**: Looks great on all devices
- 🌙 **Component-Based**: Built with reusable components using Shadcn UI
- 📝 **Blog Integration**: Ready to connect with your Hashnode blog
- 🎯 **Project Showcase**: Beautiful cards to showcase your work
- 📧 **Newsletter Ready**: Built-in newsletter subscription system

<div align="center">
  <img src="public/images/docs/features/projects.png" width="400" alt="Projects" />
  <img src="public/images/docs/features/blog.png" width="400" alt="Blog Integration" />
  <img src="public/images/docs/features/newsletter.png" width="400" alt="Newsletter" />
</div>

## 📱 Responsive Design

<div align="center">
  <img src="public/images/docs/mobile/mobile-home.png" width="250" alt="Mobile Home" />
  <img src="public/images/docs/mobile/mobile-nav.png" width="250" alt="Mobile Navigation" />
</div>

## 🚀 Quick Start

1. Clone this repository:

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🔌 Hashnode Integration

This template comes with built-in integration for your Hashnode blog and newsletter. All you need is three keys from your Hashnode account to get started.

### What's Included
- **Blog Posts**: Automatically displays your Hashnode blog posts
- **Newsletter**: Lets visitors subscribe to your Hashnode newsletter
- **Error Handling**: Friendly error messages if something goes wrong
- **Loading States**: Nice loading animations while content is being fetched

### Quick Setup

1. Create a `.env.local` file in your project root:
```env
# .env.local
PUBLIC_HASHNODE_PUBLICATION_ID=your_publication_id
PUBLIC_HASHNODE_HOST=your_blog_url    # e.g., "johndoe.hashnode.dev"
HASHNODE_ACCESS_TOKEN=your_access_token
```

2. Get your keys from Hashnode:
   - Log into your Hashnode account
   - Go to Account Settings → Developer Settings
   - Copy your Publication ID and Access Token
   - For the Host, use your Hashnode blog URL without 'https://' (e.g., "johndoe.hashnode.dev")
   - Paste them into the `.env.local` file

That's it! Your blog posts and newsletter will now work automatically. No coding required.

> **Note**: Keep your Access Token private - don't share it or commit it to public repositories.

## 👀 Want to learn more about Astro?

This template is built with Astro. To learn more about Astro itself:
- Check out [Astro's documentation](https://docs.astro.build)
- Join the [Astro Discord server](https://astro.build/chat)

Created with ❤️ by [Your Name](https://github.com/yourusername)
