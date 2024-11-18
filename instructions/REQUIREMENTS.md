# Project Overview
You will create a personal website for a creator who is an AI software composer who builds and ships software products. The website is a place for the creator to share his journey, projects, and thoughts. You will create a responsive clean, modern design that speaks to a Gen X audience.

## Project Description
You will be using Astro, Shadcn, TailwindCSS, Lucide Icons, and TypeScript. Blog posts will be pulled from Hashnode.

## Environment Variables

This project requires the following environment variables:

- `PUBLIC_HASHNODE_API_KEY`: Your Hashnode API key
- `PUBLIC_HASHNODE_USERNAME`: Your Hashnode username

To set up:

1. Copy `.env.example` to `.env.local`
2. Fill in your credentials in `.env.local`
3. Never commit `.env.local` to version control

# Project Details

## File Structure
```
CREATOR-HOME2/
├── .env                  # Production environment variables (committed)
├── .env.local           # Local development variables (not committed)
├── .env.example         # Example environment variables (committed)
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── NewsletterSignup.astro
│   │   ├── DumbThingsBuilt.astro
│   │   ├── CurrentFocus.astro
│   │   ├── WorkWithMe.astro
│   │   ├── FreeResourcesGuides.astro
│   │   ├── ProductStack.astro
│   │   ├── ProjectCard.astro
│   │   └── ui/
│   │       ├── Card.astro
│   │       ├── Button.astro
│   │       └── ...
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog.astro
│   │   ├── projects.astro
│   │   ├── about.astro
│   │   └── 404.astro
│   ├── styles/
│   │   └── global.css
│   ├── types/
│   │   └── BlogPost.ts
│   └── utils/
│       └── getHashnodePosts.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

## Core Features

1. **Home Page**:
   - Newsletter Signup: Allows users to subscribe to the creator's newsletter.
   - Dumb Things I've Built: Displays a list of "dumb" projects the creator has built.
   - Current Focus: Highlights the creator's current focus or area of work.
   - Work with Me: Provides information on how users can collaborate with the creator.
   - Free Resources and Guides: Lists any free resources or guides created by the creator.
   - My Product Stack: Showcases the tools and technologies the creator uses to build their products.

2. **Blog Post Page**: 
   - Pulls blog posts from the creator's Hashnode blog.
   - Uses the `getHashnodePosts` utility function to fetch the posts.
   - Displays a list of blog posts as cards with their titles, authors (written by 'author'), and publishing dates.
   - Provides a link to view the full blog post.

3. **Project Page**:
   - Lists all projects created by the creator.
   - Uses the `ProjectCard` component to display each project.
   - The `ProjectCard` component includes the project title, description, and a link to the project.

4. **About Page**:
   - Contains a brief introduction about the creator and their journey.
   - Showcases the creator's background, experiences, and motivations.

5. **Navigation and Footer**:
   - Consistent navigation bar across all pages.
   - Includes links to the Home, Blog, Projects, and About pages.
   - Consistent footer with social media links.

6. **404 Page**:
   - Displays a custom 404 error page.
   - Provides a clear message and a link back to the home page.

## Documentation
The project uses the following technologies and libraries:

1. **Astro**: A static site generator that allows for building fast, SEO-friendly websites. [Astro Documentation](https://docs.astro.build/en/)
2. **Shadcn**: A set of accessible and customizable UI components built with Tailwind CSS. [Shadcn Documentation](https://ui.shadcn.com/docs)
3. **TailwindCSS**: A utility-first CSS framework for rapidly building custom user interfaces. [TailwindCSS Documentation](https://tailwindcss.com/docs)
4. **Lucide Icons**: A collection of open-source feather-style icons. [Lucide Icons Documentation](https://lucide.dev/icons/)
5. **TypeScript**: A superset of JavaScript that adds optional static typing. [TypeScript Documentation](https://www.typescriptlang.org/docs/)
6. **Hashnode API**: The creator's Hashnode API key and username are used to fetch blog posts from the creator's Hashnode blog. [Hashnode API Documentation](https://apidocs.hashnode.com/)

## Artifact Examples
The following examples demonstrate the use of artifacts in this project:

1. **Fetching Blog Posts from Hashnode**:
   
   ```typescript
import { BlogPost } from '../types/BlogPost';

   export async function getHashnodePosts(): Promise<BlogPost[]> {
     const response = await fetch('https://api.hashnode.com/', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         query: `
           query {
             user(username: "creator-username") {
               publication {
                 posts(page: 0) {
                   title
                   slug
                   brief
                   dateAdded
                   coverImage
                 }
               }
             }
           }
         `,
       }),
     });

     const data = await response.json();
     return data.data.user.publication.posts;
   }
   
```

This TypeScript function fetches blog posts from the creator's Hashnode account using the Hashnode GraphQL API. The function returns an array of `BlogPost` objects, which can be used to display the blog posts on the website.

2. **Rendering a Project Card**:
   
   ```tsx
import React from 'react';
   import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
   import { Button } from '@/components/ui/button';

   interface ProjectCardProps {
     title: string;
     description: string;
     url: string;
   }

   const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, url }) => {
     return (
       <Card>
         <CardHeader>
           <CardTitle>{title}</CardTitle>
         </CardHeader>
         <CardContent>
           <p>{description}</p>
         </CardContent>
         <CardFooter>
           <Button as="a" href={url} target="_blank">
             View Project
           </Button>
         </CardFooter>
       </Card>
     );
   };

   export default ProjectCard;
   
```

This React component renders a card-style UI element that displays a project's title, description, and a link to the project. It uses the Shadcn UI components to provide a consistent and visually appealing layout.