// /data/nextjs/learning.js

export const learning = {
  basic: {
    title: "▲ Next.js Basics - Complete Beginner's Guide",
    topics: [
      // ========== INTRODUCTION & SETUP ==========
      {
        name: "1. What is Next.js & Setup",
        description: "Next.js is a React framework that provides server-side rendering, static site generation, and file-based routing. It simplifies building production-ready React applications with built-in optimizations. Created by Vercel, it's the most popular React framework for production. Next.js handles routing, API routes, image optimization, and performance out of the box.",
        code: `// Create a new Next.js project
// Run in terminal:
// npx create-next-app@latest my-app
// cd my-app
// npm run dev

// Basic folder structure:
// my-app/
//   ├── app/
//   │   ├── layout.js
//   │   ├── page.js
//   │   └── globals.css
//   ├── public/
//   └── package.json

// Simple page component (app/page.js)
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>Your app is running on http://localhost:3000</p>
    </div>
  );
}`,
        lineByLine: [
          "Line 2: npx create-next-app@latest my-app - Creates new Next.js project with latest version",
          "Line 3: cd my-app - Navigates into project directory",
          "Line 4: npm run dev - Starts development server on http://localhost:3000",
          "Line 7-11: Folder structure - app/ contains routes, public/ for static files",
          "Line 14-20: Export default function Home() - Default export of page component",
          "Line 15-19: JSX return - HTML-like syntax returned from component"
        ],
        simpleMeaning: "Next.js is a React framework that makes building websites easier with built-in features like routing and performance optimization.",
        output: "Server running at http://localhost:3000 showing 'Welcome to Next.js!'",
        note: "Next.js 13+ uses App Router by default. Pages Router (pages/ folder) is still supported but App Router is recommended."
      },
      {
        name: "2. File-based Routing (App Router)",
        description: "Next.js uses file-based routing where folders and files in the 'app' directory automatically become routes. Each folder creates a route segment, and page.js files define the actual page content. This eliminates manual route configuration and makes navigation intuitive.",
        code: `// Folder structure:
// app/
//   ├── page.js          → /
//   ├── about/
//   │   └── page.js      → /about
//   ├── blog/
//   │   ├── page.js      → /blog
//   │   └── [slug]/
//   │       └── page.js  → /blog/:slug
//   └── dashboard/
//       ├── layout.js
//       └── page.js      → /dashboard

// app/page.js (Homepage)
export default function HomePage() {
  return <h1>Home Page</h1>;
}

// app/about/page.js
export default function AboutPage() {
  return <h1>About Us</h1>;
}

// app/blog/[slug]/page.js (Dynamic route)
export default function BlogPost({ params }) {
  return <h1>Blog Post: {params.slug}</h1>;
}
// Visiting /blog/hello-world shows "Blog Post: hello-world"`,
        lineByLine: [
          "Line 2-9: Folder structure - Each folder creates a route segment",
          "Line 3: app/page.js - Maps to root URL (/)",
          "Line 4-5: app/about/page.js - Maps to /about URL",
          "Line 6-8: app/blog/[slug]/page.js - Dynamic route with parameter slug",
          "Line 12-14: HomePage component - Rendered at root URL",
          "Line 17-19: AboutPage component - Rendered at /about",
          "Line 22-24: BlogPost component - Receives params object with slug property",
          "Line 23: params.slug - Access dynamic route parameter"
        ],
        simpleMeaning: "Folders in 'app' become website URLs. Any 'page.js' file inside a folder becomes a webpage at that path.",
        output: "/ → Home Page\n/about → About Us\n/blog/hello-world → Blog Post: hello-world",
        note: "Folder names become URL paths. Use [param] for dynamic routes, (folder) for grouping without affecting URL."
      },
      {
        name: "3. Layouts & Nested Layouts",
        description: "Layouts are components that wrap multiple pages and persist across navigation. The root layout (app/layout.js) is required and wraps every page. You can create nested layouts for different sections of your app to share UI like headers, footers, and sidebars.",
        code: `// app/layout.js (Root Layout - Required)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>My Website Header</header>
        <main>{children}</main>
        <footer>© 2024 My Website</footer>
      </body>
    </html>
  );
}

// app/dashboard/layout.js (Nested Layout for dashboard section)
export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-container">
      <nav className="sidebar">
        <ul>
          <li>Dashboard Home</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </nav>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

// app/dashboard/page.js (Uses DashboardLayout)
export default function DashboardPage() {
  return <h1>Welcome to Dashboard</h1>;
}

// Layout with metadata
export const metadata = {
  title: 'My Next.js App',
  description: 'Generated by Next.js',
};`,
        lineByLine: [
          "Line 2-11: Root layout - Wraps entire application, required in app/",
          "Line 3: children prop - Contains page content",
          "Line 5-6: html and body tags - Required in root layout only",
          "Line 7: header - Shared across all pages",
          "Line 9: footer - Shared across all pages",
          "Line 14-25: DashboardLayout - Nested layout for dashboard section",
          "Line 23: {children} - Page content appears here",
          "Line 28-30: DashboardPage - Uses DashboardLayout automatically",
          "Line 33-35: metadata - Sets page title and description for SEO"
        ],
        simpleMeaning: "Layouts are templates that wrap pages. Root layout wraps everything. Nested layouts wrap specific sections.",
        output: "Every page shows header and footer. Dashboard pages show sidebar.",
        note: "Root layout must contain html and body tags. Layouts don't re-render on navigation, improving performance."
      },
      {
        name: "4. Link Component & Navigation",
        description: "Next.js Link component enables client-side navigation between pages without full page reloads. It prefetches linked pages automatically for faster transitions. Use instead of <a> tags for internal navigation.",
        code: `import Link from 'next/link';

// app/components/Navigation.js
export default function Navigation() {
  return (
    <nav>
      {/* Basic link */}
      <Link href="/">Home</Link>
      
      {/* Dynamic route link */}
      <Link href="/blog/hello-world">Read Blog Post</Link>
      
      {/* Link with prefetch disabled */}
      <Link href="/heavy-page" prefetch={false}>
        Heavy Page
      </Link>
    </nav>
  );
}

// Programmatic navigation
'use client';
import { useRouter } from 'next/navigation';

function LoginButton() {
  const router = useRouter();
  
  const handleLogin = () => {
    router.push('/dashboard');  // Navigate to dashboard
    // router.replace('/dashboard'); - No history entry
    // router.back(); - Go back
  };
  
  return <button onClick={handleLogin}>Login</button>;
}

// Active link highlighting
'use client';
import { usePathname } from 'next/navigation';

function ActiveLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link href={href} className={isActive ? 'active' : ''}>
      {children}
    </Link>
  );
}`,
        lineByLine: [
          "Line 1: import Link from 'next/link' - Import Link component",
          "Line 6-8: <Link href='/'>Home</Link> - Basic navigation to homepage",
          "Line 11-13: <Link href='/blog/hello-world'> - Navigate to dynamic route",
          "Line 16-18: prefetch={false} - Disables automatic prefetching",
          "Line 24: useRouter() - Hook for programmatic navigation",
          "Line 28: router.push('/dashboard') - Navigates programmatically",
          "Line 29: router.replace() - Replaces current history entry",
          "Line 30: router.back() - Go back in history",
          "Line 36: usePathname() - Gets current URL path",
          "Line 37: isActive = pathname === href - Checks if link is current page"
        ],
        simpleMeaning: "Link component lets users click between pages without reloading. useRouter lets you navigate programmatically like after form submit.",
        output: "Clicking Home → navigates to / without page reload. Login button navigates to /dashboard after click.",
        note: "Link automatically prefetches linked pages when they come into view. Use 'replace' for redirects after login."
      },
      {
        name: "5. Image Component & Optimization",
        description: "Next.js Image component automatically optimizes images for performance. It lazy loads images, serves modern formats (WebP), resizes images on-demand, and prevents layout shift. Replace regular img tags with this component for better Core Web Vitals.",
        code: `import Image from 'next/image';
import profilePic from '../public/profile.jpg';

// Basic usage with local image
export default function Avatar() {
  return (
    <Image
      src={profilePic}
      alt="User profile picture"
      width={200}
      height={200}
      className="rounded-full"
    />
  );
}

// Remote image (from external URL)
export default function RemoteImage() {
  return (
    <Image
      src="https://example.com/photo.jpg"
      alt="Remote photo"
      width={800}
      height={600}
      priority  // Load immediately (no lazy loading)
    />
  );
}

// Fill parent container
export default function HeroImage() {
  return (
    <div className="relative h-96 w-full">
      <Image
        src="/hero.jpg"
        alt="Hero background"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}

// next.config.js - Configure remote images
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};`,
        lineByLine: [
          "Line 1: import Image from 'next/image' - Import Next.js Image component",
          "Line 2: import profilePic from '../public/profile.jpg' - Import local image",
          "Line 6-12: Basic usage - width and height required to prevent layout shift",
          "Line 8: src={profilePic} - Local image source from import",
          "Line 10-11: width={200} height={200} - Explicit dimensions for layout",
          "Line 17-25: Remote image - From external URL",
          "Line 23: priority - Disables lazy loading, loads immediately",
          "Line 29-38: fill property - Makes image fill parent container",
          "Line 30: relative h-96 w-full - Parent must have position: relative",
          "Line 43-54: next.config.js - Configure allowed remote image domains"
        ],
        simpleMeaning: "Image component makes images load faster, prevents layout shifting, and automatically optimizes images for different screen sizes.",
        output: "Local image loads from public folder. Remote image loads from external URL after configuration.",
        note: "Always specify width/height or use 'fill'. Remote images need configuration in next.config.js for security."
      },
      {
        name: "6. Script Component",
        description: "Next.js Script component optimizes loading of third-party scripts (analytics, ads, widgets). It allows you to control loading strategy (before/page idle/after interaction) and reduces impact on performance.",
        code: `import Script from 'next/script';

// Strategy: beforeInteractive (load before page becomes interactive)
export default function AnalyticsPage() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js"
        strategy="beforeInteractive"
      />
      <Script id="google-analytics" strategy="beforeInteractive">
        {\`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        \`}
      </Script>
      <h1>Page with Analytics</h1>
    </>
  );
}

// Strategy: afterInteractive (default - load after page interactive)
export default function ChatWidget() {
  return (
    <>
      <Script
        src="https://example.com/chat-widget.js"
        strategy="afterInteractive"
        onLoad={() => console.log('Chat loaded!')}
      />
      <div>Chat will appear shortly</div>
    </>
  );
}

// Strategy: lazyOnload (load during browser idle time)
export default function MarketingPixels() {
  return (
    <>
      <Script
        src="https://example.com/tracker.js"
        strategy="lazyOnload"
        onError={(e) => console.error('Script failed', e)}
      />
      <main>Main content loads first, tracker loads later</main>
    </>
  );
}

// Multiple scripts with loading sequence
export default function MultipleScripts() {
  return (
    <>
      <Script src="/essential.js" strategy="beforeInteractive" />
      <Script src="/analytics.js" strategy="afterInteractive" />
      <Script src="/social-widgets.js" strategy="lazyOnload" />
      <h1>My Website</h1>
    </>
  );
}`,
        lineByLine: [
          "Line 1: import Script from 'next/script' - Import Script component",
          "Line 4-21: beforeInteractive strategy - Loads before page hydration",
          "Line 7: strategy='beforeInteractive' - Critical for analytics/auth",
          "Line 10-17: Inline script with id and escaped braces - Required for inline scripts",
          "Line 26-34: afterInteractive strategy - Default, loads after page loads",
          "Line 30: onLoad callback - Runs when script loads successfully",
          "Line 39-48: lazyOnload strategy - Loads during browser idle time",
          "Line 44: onError callback - Handles script loading failures",
          "Line 53-60: Multiple scripts - Load in priority order",
          "Line 55: beforeInteractive - First priority",
          "Line 56: afterInteractive - Second priority",
          "Line 57: lazyOnload - Lowest priority"
        ],
        simpleMeaning: "Script component controls when third-party scripts load: before page (critical), after page (normal), or during idle time (non-critical).",
        output: "Analytics loads before page. Chat loads after page shows. Tracker loads when browser is idle.",
        note: "Use beforeInteractive for critical scripts (authentication), afterInteractive for analytics, lazyOnload for non-essential widgets."
      },
      {
        name: "7. Server Components & Client Components",
        description: "Next.js uses Server Components by default, which render on the server and send only HTML to the client. Client Components are for interactive features that need browser APIs, state, or effects.",
        code: `// app/page.js (Server Component - Default)
// This runs on server, cannot use useState, useEffect, or browser APIs
export default async function ServerPage() {
  const data = await fetch('https://api.example.com/posts').then(res => res.json());
  
  return (
    <div>
      {data.map(post => <div key={post.id}>{post.title}</div>)}
    </div>
  );
}

// app/components/Counter.js (Client Component)
'use client';  // Must declare at top to make it a Client Component

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}

// app/page.js (Mixing both)
import Counter from './components/Counter';

export default function HomePage() {
  return (
    <div>
      <h1>Welcome</h1>
      <ServerRenderedContent />
      <Counter />
    </div>
  );
}

// Streaming with Suspense (Server Component)
import { Suspense } from 'react';

async function SlowComponent() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  return <div>Slow content loaded!</div>;
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SlowComponent />
    </Suspense>
  );
}`,
        lineByLine: [
          "Line 2: Server Component - Default, no 'use client' directive needed",
          "Line 3: async function - Can be async to fetch data directly",
          "Line 4: fetch directly in component - Data fetched on server",
          "Line 12-15: Server Component renders HTML on server",
          "Line 19: 'use client' directive - Makes component a Client Component",
          "Line 21: useState - Client-only feature, works here",
          "Line 24-28: Counter with interactivity - Requires browser JavaScript",
          "Line 33-41: Mixing both - Client components can import server components",
          "Line 44-52: Suspense with Server Components - Shows loading fallback",
          "Line 46: SlowComponent - Server component with artificial delay"
        ],
        simpleMeaning: "Server Components load faster and are for static/SEO content. Client Components add interactivity but require more browser JavaScript.",
        output: "Server Component shows fetched posts. Counter button increments on click. Slow component shows loading then content.",
        note: "Add 'use client' at top of file for any component using useState, useEffect, or browser APIs."
      },
      {
        name: "8. Data Fetching & Caching",
        description: "Next.js extends the native fetch API with caching and revalidation options. By default, fetch requests are cached and deduplicated in Server Components.",
        code: `// Default: cached forever
export default async function Page() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());
  return <div>{posts.map(post => <div key={post.id}>{post.title}</div>)}</div>;
}

// Revalidate every 60 seconds (ISR)
export default async function ISRPage() {
  const data = await fetch('https://api.example.com/data', {
    next: { revalidate: 60 }
  }).then(res => res.json());
  return <div>{data.content}</div>;
}

// No caching (always fresh)
export default async function DynamicPage() {
  const data = await fetch('https://api.example.com/live-data', {
    cache: 'no-store'
  }).then(res => res.json());
  return <div>Live: {data.value}</div>;
}

// On-demand revalidation with tags
export default async function TaggedPage() {
  const data = await fetch('https://api.example.com/posts', {
    next: { tags: ['posts', 'homepage'] }
  }).then(res => res.json());
  return <div>{data.map(post => <div key={post.id}>{post.title}</div>)}</div>;
}

// Parallel data fetching
export default async function ParallelPage() {
  const postsPromise = fetch('https://api.example.com/posts');
  const usersPromise = fetch('https://api.example.com/users');
  
  const [postsRes, usersRes] = await Promise.all([postsPromise, usersPromise]);
  const posts = await postsRes.json();
  const users = await usersRes.json();
  
  return (
    <div>
      <h1>{posts.length} Posts</h1>
      <h1>{users.length} Users</h1>
    </div>
  );
}`,
        lineByLine: [
          "Line 2-4: Default caching - fetch automatically caches data",
          "Line 3: fetch without options - Uses force-cache default",
          "Line 7-12: ISR with revalidate - Updates data every 60 seconds",
          "Line 9: next: { revalidate: 60 } - Revalidate after 60 seconds",
          "Line 15-20: No caching - Always fetch fresh data",
          "Line 17: cache: 'no-store' - Disables caching completely",
          "Line 24-29: Tagged caching - For on-demand revalidation",
          "Line 26: next: { tags: ['posts', 'homepage'] } - Attaches tags to fetch",
          "Line 33-46: Parallel fetching - Faster than sequential",
          "Line 34-35: Start both promises without await",
          "Line 38: Promise.all - Wait for both to complete"
        ],
        simpleMeaning: "Next.js caches data by default to make pages fast. You can control how long to cache (revalidate) or disable caching for real-time data.",
        output: "Default page caches forever. ISR page updates every 60 seconds. Live page always shows fresh data.",
        note: "Use revalidate for content that updates occasionally (blogs). Use no-store for real-time data (stocks, live scores)."
      },
      {
        name: "9. CSS Modules & Global Styles",
        description: "Next.js supports CSS Modules for component-scoped styles (prevents conflicts) and global CSS for app-wide styling. CSS Modules generate unique class names automatically.",
        code: `// app/components/Button.js (CSS Module)
import styles from './Button.module.css';

export default function Button({ children, variant = 'primary' }) {
  return <button className={styles[variant]}>{children}</button>;
}

// app/components/Button.module.css
.primary {
  background: blue;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
}

.secondary {
  background: gray;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
}

// global styles (app/globals.css)
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
}

// Root layout imports global CSS
// app/layout.js
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

// Composing CSS Modules
// app/components/Card.module.css
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
}

.highlight {
  composes: card;  /* Inherits card styles */
  background: yellow;
  border-color: gold;
}`,
        lineByLine: [
          "Line 2: import styles from './Button.module.css' - Imports CSS Module object",
          "Line 4: className={styles[variant]} - Dynamic class selection from CSS Module",
          "Line 7-18: Button.module.css - Scoped styles that only affect Button component",
          "Line 8-14: .primary - Class name becomes unique like 'Button_primary_xyz'",
          "Line 22-28: globals.css - Global styles affect entire app",
          "Line 23-26: * selector - Reset styles applied everywhere",
          "Line 31-37: layout.js - Must import global CSS in root layout",
          "Line 41-51: Composing styles - Reusing CSS Module classes",
          "Line 47: composes: card - Inherits .card styles"
        ],
        simpleMeaning: "CSS Modules keep styles specific to one component (no conflicts). Global CSS applies to your whole app.",
        output: "Button has blue background, Cancel has gray. Body has gray background globally.",
        note: "CSS Modules produce unique class names so you can use simple class names like .button without worrying about conflicts."
      },
      {
        name: "10. Tailwind CSS Integration",
        description: "Tailwind CSS is a utility-first CSS framework that integrates seamlessly with Next.js. It provides low-level utility classes for building custom designs without writing custom CSS.",
        code: `// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { primary: '#3b82f6' }
    }
  },
  plugins: [],
};

// app/globals.css (include Tailwind)
@tailwind base;
@tailwind components;
@tailwind utilities;

// Custom component class
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors;
  }
}

// app/page.js (Using Tailwind utilities)
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">My App</h1>
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
          </div>
        </nav>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Feature 1</h3>
            <p className="text-gray-600">Amazing feature description</p>
          </div>
        </div>
      </main>
    </div>
  );
}

// Dark mode support
export function DarkModeComponent() {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
      <p>Automatically adapts to dark mode</p>
    </div>
  );
}`,
        lineByLine: [
          "Line 2-13: tailwind.config.js - Configure Tailwind",
          "Line 4-7: content array - Tell Tailwind which files to scan",
          "Line 9-11: theme.extend - Add custom colors",
          "Line 17-20: globals.css - Add Tailwind directives",
          "Line 23-27: @layer components - Create custom component classes",
          "Line 24: .btn-primary - Custom button class using Tailwind utilities",
          "Line 30-44: HomePage - Using Tailwind utilities directly",
          "Line 31: min-h-screen bg-gray-100 - Full height with gray background",
          "Line 34: container mx-auto px-4 - Centered container with padding",
          "Line 35: flex justify-between items-center - Flexbox layout",
          "Line 40: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 - Responsive grid",
          "Line 48-54: Dark mode - Uses dark: variants"
        ],
        simpleMeaning: "Tailwind gives you small utility classes (like bg-blue-500, text-center) to style elements without writing custom CSS.",
        output: "Responsive grid shows cards: 1 column on mobile, 2 on tablet, 3 on desktop.",
        note: "Use className with utility classes directly. Create reusable components to avoid repeating classes."
      }
    ]
  },
  advanced: {
    title: "🚀 Advanced Next.js",
    topics: [
      {
        name: "1. Server Actions (Data Mutations)",
        description: "Server Actions allow you to run server-side code directly from Client Components without creating API routes. They're perfect for form submissions, database operations, and mutations with built-in progressive enhancement.",
        code: `// app/actions/posts.js (Server Actions file)
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const PostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});

export async function createPost(formData: FormData) {
  const validated = PostSchema.parse({
    title: formData.get('title'),
    content: formData.get('content'),
  });
  
  await db.post.create({ data: validated });
  revalidatePath('/posts');
  redirect('/posts');
}

// app/components/CreatePostForm.jsx (Client Component)
'use client';
import { createPost } from '@/app/actions/posts';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Creating...' : 'Create Post'}
    </button>
  );
}

export default function CreatePostForm() {
  return (
    <form action={createPost}>
      <input type="text" name="title" required />
      <textarea name="content" required />
      <SubmitButton />
    </form>
  );
}

// Optimistic updates with useOptimistic
'use client';
import { useOptimistic } from 'react';

export default function Comments({ comments }) {
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment) => [...state, newComment]
  );
  
  async function formAction(formData) {
    const newComment = { id: Date.now(), text: formData.get('comment'), pending: true };
    addOptimisticComment(newComment);
    await addComment(formData);
  }
  
  return (
    <>
      {optimisticComments.map(comment => (
        <div key={comment.id} className={comment.pending ? 'opacity-50' : ''}>
          {comment.text}
        </div>
      ))}
      <form action={formAction}>
        <input name="comment" />
        <button type="submit">Post</button>
      </form>
    </>
  );
}`,
        lineByLine: [
          "Line 2: 'use server' - Marks file for Server Actions",
          "Line 4-5: Imports - revalidatePath for cache, redirect for navigation",
          "Line 7-10: Zod schema - Validates form data",
          "Line 13-22: createPost action - Handles form submission",
          "Line 14-17: Validate data with zod",
          "Line 20: revalidatePath('/posts') - Clears cache for posts route",
          "Line 21: redirect('/posts') - Redirect after success",
          "Line 27-35: SubmitButton - Shows loading state with useFormStatus",
          "Line 29: const { pending } = useFormStatus() - Gets form submission status",
          "Line 39-45: CreatePostForm - Form that uses Server Action",
          "Line 40: <form action={createPost}> - Form submits to Server Action",
          "Line 52-71: useOptimistic - Optimistic UI updates",
          "Line 54-57: useOptimistic creates state that updates immediately",
          "Line 60-64: formAction - Adds optimistic update, then actual save"
        ],
        simpleMeaning: "Server Actions let you run database code directly from forms without making API routes. They handle validation, caching, and redirects.",
        output: "Form submits → validates data → saves to database → clears cache → redirects to posts list.",
        note: "Always validate data on server with zod. Use useFormStatus for loading states, useOptimistic for instant UI feedback."
      },
      {
        name: "2. Middleware",
        description: "Middleware runs code before a request completes. It's perfect for authentication, redirects, rewrites, bot detection, geolocation, and A/B testing. Middleware runs on the Edge runtime for fast performance.",
        code: `// middleware.js (in root folder)
import { NextResponse } from 'next/server';

// Authentication middleware
export function middleware(request) {
  const isLoggedIn = request.cookies.has('auth-token');
  const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');
  const isOnLoginPage = request.nextUrl.pathname === '/login';
  
  if (isOnDashboard && !isLoggedIn) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
  
  if (isOnLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  return NextResponse.next();
}

// Geotargeting middleware
export function geoTargetingMiddleware(request) {
  const country = request.geo?.country || 'US';
  const pathname = request.nextUrl.pathname;
  
  if (country === 'IN' && pathname === '/pricing') {
    return NextResponse.redirect(new URL('/pricing-in', request.url));
  }
  
  const response = NextResponse.next();
  response.headers.set('x-country', country);
  return response;
}

// Middleware matcher configuration
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/((?!_next/static|favicon.ico).*)',
  ],
};`,
        lineByLine: [
          "Line 2: import NextResponse from 'next/server' - For responses",
          "Line 5-21: Auth middleware - Handles login redirects",
          "Line 6: request.cookies.has() - Checks for auth cookie",
          "Line 7-8: Path checks - Determine if on dashboard or login",
          "Line 10-14: Redirect unauthenticated - To login page",
          "Line 11: new URL() - Creates URL for redirect",
          "Line 12: searchParams.set - Preserves intended destination",
          "Line 17-19: Redirect authenticated - Away from login page",
          "Line 20: NextResponse.next() - Continues to requested page",
          "Line 24-33: Geo middleware - Country-based routing",
          "Line 25: request.geo?.country - Gets user's country",
          "Line 28-30: Country redirect - Different pricing for India",
          "Line 32-33: Add custom header - For server components",
          "Line 36-44: Matcher config - Controls which routes use middleware",
          "Line 38-39: Match specific paths - dashboard and profile",
          "Line 40: Regex pattern - Exclude static files"
        ],
        simpleMeaning: "Middleware runs code before pages load. Use it to check if users are logged in, redirect to correct language, or test different versions.",
        output: "Unauth users to /dashboard → redirect to /login. /pricing from India → /pricing-in.",
        note: "Keep middleware fast (avoid heavy computations). Use matcher to run only on specific routes for better performance."
      },
      {
        name: "3. Route Handlers (API Routes)",
        description: "Route Handlers let you create API endpoints within your Next.js app. They're perfect for handling form submissions, webhooks, and creating REST APIs. Route handlers run on the server and support all HTTP methods.",
        code: `// app/api/posts/route.js (GET all posts)
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') || 10;
  const page = searchParams.get('page') || 1;
  
  try {
    const posts = await db.post.findMany({
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
    });
    
    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}

// app/api/posts/route.js (POST create post)
export async function POST(request) {
  try {
    const body = await request.json();
    
    if (!body.title || !body.content) {
      return NextResponse.json(
        { error: 'Title and content required' },
        { status: 400 }
      );
    }
    
    const post = await db.post.create({ data: body });
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}

// app/api/posts/[id]/route.js (Dynamic route handler)
export async function GET(request, { params }) {
  try {
    const post = await db.post.findUnique({
      where: { id: parseInt(params.id) }
    });
    
    if (!post) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}

// app/api/revalidate/route.js (On-demand ISR revalidation)
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request) {
  const { path, tag, secret } = await request.json();
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
  }
  
  if (path) revalidatePath(path);
  if (tag) revalidateTag(tag);
  
  return NextResponse.json({ revalidated: true });
}`,
        lineByLine: [
          "Line 2: import NextResponse from 'next/server' - For JSON responses",
          "Line 5-9: GET handler - Gets request with URL parameters",
          "Line 6: new URL(request.url) - Parse URL for query params",
          "Line 7-8: searchParams.get() - Extract limit and page",
          "Line 11-15: Fetch posts from database with pagination",
          "Line 12: take and skip - Pagination logic",
          "Line 18-22: Success/error response - Returns JSON with status",
          "Line 26-43: POST handler - Creates new post",
          "Line 27: await request.json() - Parse JSON body",
          "Line 29-34: Validation - Check required fields",
          "Line 36-38: Create post in database",
          "Line 39: status: 201 - Created status code",
          "Line 46-64: Dynamic route - /api/posts/[id]",
          "Line 47: { params } - Contains route parameters",
          "Line 49-52: GET by ID - Fetch single post",
          "Line 54-59: 404 if not found",
          "Line 66-77: Revalidation endpoint - For CMS webhooks",
          "Line 68-70: Verify secret token - Security",
          "Line 73-74: revalidatePath and revalidateTag - Clear cache"
        ],
        simpleMeaning: "Route handlers create API endpoints in your Next.js app. Use them for fetching data with GET, submitting with POST, updating with PUT, or deleting with DELETE.",
        output: "GET /api/posts → JSON array of posts. POST /api/posts → creates new post. DELETE /api/posts/1 → deletes post.",
        note: "Route handlers run on server, never exposed to client. Use for database operations, file uploads, webhooks."
      }
    ]
  }
};

export const nextLearning = learning;