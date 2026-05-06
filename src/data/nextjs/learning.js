// /data/nextjs/learning.js

export const learning = {
  basic: {
    title: "▲ Next.js Basics - Complete Beginner's Guide",
    topics: [
      // ========== INTRODUCTION & SETUP (1-3) ==========
      {
        name: "1. What is Next.js & Setup",
        description: "Next.js is a React framework that provides server-side rendering, static site generation, and file-based routing. It simplifies building production-ready React applications with built-in optimizations. Created by Vercel, it's the most popular React framework for production.",
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
        description: "Next.js uses file-based routing where folders and files in the 'app' directory automatically become routes. Each folder creates a route segment, and page.js files define the actual page content. This eliminates manual route configuration.",
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
// Visiting /blog/hello-world shows "Blog Post: hello-world"

// Nested routes: app/blog/category/page.js → /blog/category
export default function CategoryPage() {
  return <h1>Blog Category</h1>;
}

// Group routes (folder in parentheses - doesn't affect URL)
// app/(marketing)/about/page.js → /about (still works)`,
        lineByLine: [
          "Line 2-9: Folder structure - Each folder creates a route segment",
          "Line 3: app/page.js - Maps to root URL (/)",
          "Line 4-5: app/about/page.js - Maps to /about URL",
          "Line 6-8: app/blog/[slug]/page.js - Dynamic route with parameter slug",
          "Line 12-14: HomePage component - Rendered at root URL",
          "Line 17-19: AboutPage component - Rendered at /about",
          "Line 22-24: BlogPost component - Receives params object with slug property",
          "Line 26: params.slug - Access dynamic route parameter",
          "Line 29-31: CategoryPage - Nested route at /blog/category",
          "Line 34: Group routes - (folder) creates logical grouping without affecting URL"
        ],
        simpleMeaning: "Folders in 'app' become website URLs. Any 'page.js' file inside a folder becomes a webpage at that path.",
        output: "/ → Home Page\n/about → About Us\n/blog/hello-world → Blog Post: hello-world\n/blog/category → Blog Category",
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

// app/dashboard/profile/page.js (Also uses DashboardLayout)
export default function ProfilePage() {
  return <h1>Your Profile</h1>;
}

// app/about/page.js (Uses only Root Layout, not DashboardLayout)
export default function AboutPage() {
  return <h1>About Us</h1>;
}

// Layout with metadata
export const metadata = {
  title: 'My Next.js App',
  description: 'Generated by Next.js',
};

// Multiple root layouts (using route groups)
// app/(auth)/layout.js - Different layout for auth pages
// app/(auth)/login/page.js - Uses auth layout
// app/(auth)/register/page.js - Uses auth layout`,
        lineByLine: [
          "Line 2-11: Root layout - Wraps entire application, required in app/",
          "Line 3: children prop - Contains page content",
          "Line 5-6: html and body tags - Required in root layout only",
          "Line 7: header - Shared across all pages",
          "Line 9: footer - Shared across all pages",
          "Line 14-25: DashboardLayout - Nested layout for dashboard section",
          "Line 16-22: sidebar - Dashboard-specific navigation",
          "Line 23: {children} - Page content appears here",
          "Line 28-30: DashboardPage - Uses DashboardLayout automatically",
          "Line 33-35: ProfilePage - Also wrapped by DashboardLayout",
          "Line 38-40: AboutPage - Uses only root layout",
          "Line 43-45: metadata - Sets page title and description for SEO",
          "Line 48-50: Route groups - Different layouts for different sections"
        ],
        simpleMeaning: "Layouts are templates that wrap pages. Root layout wraps everything. Nested layouts wrap specific sections.",
        output: "Every page shows header and footer. Dashboard pages show sidebar. About page shows only header/footer.",
        note: "Root layout must contain html and body tags. Layouts don't re-render on navigation, improving performance."
      },

      // ========== NAVIGATION & OPTIMIZATION (4-6) ==========
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
      
      {/* Link with custom styling */}
      <Link href="/about" className="nav-link">
        About
      </Link>
      
      {/* Dynamic route link */}
      <Link href="/blog/hello-world">
        Read Blog Post
      </Link>
      
      {/* Link with query parameters */}
      <Link href="/products?category=electronics&sort=price">
        Electronics
      </Link>
      
      {/* Replace current history (no back button) */}
      <Link href="/login" replace>
        Login
      </Link>
      
      {/* Open in new tab */}
      <Link href="/privacy" target="_blank">
        Privacy Policy
      </Link>
      
      {/* Link with prefetch disabled */}
      <Link href="/heavy-page" prefetch={false}>
        Heavy Page
      </Link>
      
      {/* Using as a custom component */}
      <Link href="/profile" passHref>
        <button className="profile-btn">Profile</button>
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
    // After login success
    router.push('/dashboard');  // Navigate to dashboard
    // router.replace('/dashboard'); - No history entry
    // router.back(); - Go back
    // router.forward(); - Go forward
    // router.refresh(); - Refresh current page
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
          "Line 11-13: <Link href='/about' className='nav-link'> - Link with custom CSS class",
          "Line 16-18: <Link href='/blog/hello-world'> - Navigate to dynamic route",
          "Line 21-23: <Link href='/products?category=electronics'> - Link with query string",
          "Line 26-28: <Link href='/login' replace> - replace prevents back navigation",
          "Line 31-33: <Link href='/privacy' target='_blank'> - Opens in new tab",
          "Line 36-38: prefetch={false} - Disables automatic prefetching",
          "Line 41-44: passHref and custom component - Wraps button as link",
          "Line 49: useRouter() - Hook for programmatic navigation",
          "Line 53: router.push('/dashboard') - Navigates programmatically",
          "Line 54: router.replace() - Replaces current history entry",
          "Line 55-57: router.back(), forward(), refresh() - Navigation controls",
          "Line 63-70: ActiveLink component - Highlights current active link",
          "Line 64: usePathname() - Gets current URL path"
        ],
        simpleMeaning: "Link component lets users click between pages without reloading. useRouter lets you navigate programmatically like after form submit.",
        output: "Clicking Home → navigates to / without page reload. Login button navigates to /dashboard after click.",
        note: "Link automatically prefetches linked pages when they come into view. Use 'replace' for redirects after login."
      },
      {
        name: "5. Image Component & Optimization",
        description: "Next.js Image component automatically optimizes images for performance. It lazy loads images, serves modern formats (WebP), resizes images on-demand, and prevents layout shift. Replace regular img tags with this component for better Core Web Vitals.",
        code: `import Image from 'next/image';
import profilePic from '../public/profile.jpg';  // Import local image

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
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

// Responsive images with different sizes
export default function ResponsiveImage() {
  return (
    <Image
      src="/product.jpg"
      alt="Product"
      width={1000}
      height={800}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  );
}

// Image with lazy loading (default)
export default function LazyImage() {
  return (
    <Image
      src="/gallery.jpg"
      alt="Gallery"
      width={400}
      height={300}
      loading="lazy"  // Loads when near viewport
    />
  );
}

// Configuration for remote images in next.config.js
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

// Placeholder while loading
import { getPlaiceholder } from 'plaiceholder';

export default function ImageWithBlur() {
  return (
    <Image
      src="/landscape.jpg"
      alt="Landscape"
      width={1200}
      height={800}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."  // Base64 blur placeholder
    />
  );
}`,
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
          "Line 34: style={{ objectFit: 'cover' }} - Controls how image fills",
          "Line 35: sizes attribute - Tells browser which image size to download",
          "Line 44-53: sizes with media queries - Responsive images",
          "Line 45: sizes= - Browser selects best image based on viewport",
          "Line 59: loading='lazy' - Default behavior, loads when scrolled near",
          "Line 66-78: next.config.js - Configure allowed remote image domains",
          "Line 88-94: placeholder='blur' - Shows blurry placeholder while loading",
          "Line 90: blurDataURL - Tiny base64 image for blur effect"
        ],
        simpleMeaning: "Image component makes images load faster, prevents layout shifting, and automatically optimizes images for different screen sizes.",
        output: "Local image loads from public folder. Remote image loads from external URL after configuration. Fill image covers entire hero section.",
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

// Worker strategy (offload to web worker - experimental)
export default function HeavyScript() {
  return (
    <Script
      src="https://example.com/heavy-computation.js"
      strategy="worker"
    />
  );
}

// Inline script without src
export default function InlineScript() {
  return (
    <Script id="inline-script" strategy="afterInteractive">
      {\`
        console.log('This runs after page is interactive');
        document.querySelector('button')?.addEventListener('click', () => {
          alert('Button clicked!');
        });
      \`}
    </Script>
  );
}

// Multiple scripts with loading sequence
export default function MultipleScripts() {
  return (
    <>
      {/* Loads first */}
      <Script src="/essential.js" strategy="beforeInteractive" />
      
      {/* Loads second after page interactive */}
      <Script src="/analytics.js" strategy="afterInteractive" />
      
      {/* Loads last during idle time */}
      <Script src="/social-widgets.js" strategy="lazyOnload" />
      
      <h1>My Website</h1>
    </>
  );
}

// Script with custom attributes
export default function ExternalScript() {
  return (
    <Script
      src="https://example.com/widget.js"
      strategy="lazyOnload"
      data-custom-attribute="value"
      data-user-id="123"
      onReady={() => {
        console.log('Script is ready and executed');
      }}
    />
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
          "Line 53-59: worker strategy - Offloads to web worker (experimental)",
          "Line 64-75: Inline script with escaped braces - Must have 'id' prop for Next.js to manage",
          "Line 65: Script id='inline-script' - Unique ID required for inline scripts",
          "Line 81-93: Multiple scripts - Load in priority order",
          "Line 83: beforeInteractive - First priority",
          "Line 86: afterInteractive - Second priority",
          "Line 89: lazyOnload - Lowest priority",
          "Line 98-107: Script with custom attributes and onReady",
          "Line 102-103: data-* attributes - Pass to external script",
          "Line 104: onReady callback - Runs when script is ready and executed"
        ],
        simpleMeaning: "Script component controls when third-party scripts load: before page (critical), after page (normal), or during idle time (non-critical).",
        output: "Analytics loads before page. Chat loads after page shows. Tracker loads when browser is idle.",
        note: "Use beforeInteractive for critical scripts (authentication), afterInteractive for analytics, lazyOnload for non-essential widgets."
      },

      // ========== DATA FETCHING BASICS (7-8) ==========
      {
        name: "7. Server Components & Client Components",
        description: "Next.js uses Server Components by default, which render on the server and send only HTML to the client. Client Components are for interactive features that need browser APIs, state, or effects. You can mix both in your app for optimal performance.",
        code: `// app/page.js (Server Component - Default)
// This runs on server, cannot use useState, useEffect, or browser APIs
export default async function ServerPage() {
  // Can use async/await to fetch data directly
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
      {/* Server Component content */}
      <ServerRenderedContent />
      
      {/* Interactive Client Component */}
      <Counter />
    </div>
  );
}

// When to use Client Component:
'use client';
// - useState, useReducer (state management)
// - useEffect, useLayoutEffect (side effects)
// - Browser APIs (localStorage, window, document)
// - Event handlers (onClick, onChange)
// - Custom hooks that use React state
// - Context providers

// When to use Server Component (default):
// - Fetching data directly from database/API
// - Accessing backend resources
// - Keeping sensitive data (tokens, secrets)
// - Large dependencies that would affect client bundle
// - SEO-critical content

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
}

// Client Component with Server Component as children
'use client';
import { useState } from 'react';

export default function ClientWrapper({ children }) {
  const [show, setShow] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && children}  {/* Server Component content as children */}
    </div>
  );
}`,
        lineByLine: [
          "Line 2: Server Component - Default, no 'use client' directive needed",
          "Line 4: async function - Can be async to fetch data directly",
          "Line 5: fetch directly in component - Data fetched on server",
          "Line 12-15: Server Component renders HTML on server",
          "Line 19: 'use client' directive - Makes component a Client Component",
          "Line 21: useState - Client-only feature, works here",
          "Line 24-28: Counter with interactivity - Requires browser JavaScript",
          "Line 35-43: Mixing both - Client components can import server components",
          "Line 40-42: Server Component renders static content",
          "Line 45-52: Client Component use cases - Any interactive feature",
          "Line 55-62: Server Component use cases - Data fetching, security, SEO",
          "Line 67-75: Suspense with Server Components - Shows loading fallback",
          "Line 71: SlowComponent - Server component with artificial delay",
          "Line 78-88: Pattern - Client wrapper with server component children",
          "Line 84: {children} - Can be server component passed as prop"
        ],
        simpleMeaning: "Server Components load faster and are for static/SEO content. Client Components add interactivity but require more browser JavaScript.",
        output: "Server Component shows fetched posts. Counter button increments on click. Slow component shows loading then content.",
        note: "Add 'use client' at top of file for any component using useState, useEffect, or browser APIs. Everything else is server component by default."
      },
      {
        name: "8. Data Fetching - fetch API & Caching",
        description: "Next.js extends the native fetch API with caching and revalidation options. By default, fetch requests are cached and deduplicated in Server Components. You can control caching behavior with options like cache, next.revalidate, and next.tags.",
        code: `// app/page.js (Server Component - Default caching)
// This data is cached automatically
export default async function Page() {
  // Default: cached forever (like 'force-cache')
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());
  
  return <div>{posts.map(post => <div key={post.id}>{post.title}</div>)}</div>;
}

// Revalidate every 60 seconds (Incremental Static Regeneration - ISR)
export default async function ISRPage() {
  const data = await fetch('https://api.example.com/data', {
    next: { revalidate: 60 }  // Re-generate page every 60 seconds
  }).then(res => res.json());
  
  return <div>{data.content}</div>;
}

// No caching (dynamic data - always fresh)
export default async function DynamicPage() {
  const data = await fetch('https://api.example.com/live-data', {
    cache: 'no-store'  // Never cache, always fetch fresh
  }).then(res => res.json());
  
  return <div>Live: {data.value}</div>;
}

// On-demand revalidation with tags
export default async function TaggedPage() {
  const data = await fetch('https://api.example.com/posts', {
    next: { tags: ['posts', 'homepage'] }  // Tag for on-demand revalidation
  }).then(res => res.json());
  
  return <div>{data.map(post => <div key={post.id}>{post.title}</div>)}</div>;
}

// Revalidate with path (revalidatePath)
// app/actions/revalidate.js
'use server';
import { revalidatePath } from 'next/cache';

export async function updatePost(formData) {
  // Update database...
  await db.post.update(...);
  
  // Revalidate specific path
  revalidatePath('/blog');
  revalidatePath('/blog/[slug]', 'page');
}

// Revalidate with tag (revalidateTag)
import { revalidateTag } from 'next/cache';

export async function revalidatePosts() {
  revalidateTag('posts');  // Revalidate all fetches with 'posts' tag
}

// Multiple fetch with deduplication (same URL = single request)
export default async function NoDedupPage() {
  // These two fetches will be deduplicated into ONE actual request
  const data1 = await fetch('https://api.example.com/user/1').then(res => res.json());
  const data2 = await fetch('https://api.example.com/user/1').then(res => res.json());
  
  return <div>{data1.name} - {data2.email}</div>;
}

// Parallel data fetching for better performance
export default async function ParallelPage() {
  // Start both fetches simultaneously
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
}

// Using loading.js for streaming
// app/posts/loading.js
export default function Loading() {
  return <div>Loading posts...</div>;
}

// app/posts/page.js
export default async function PostsPage() {
  const posts = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 }  // Revalidate every hour
  }).then(res => res.json());
  
  return <div>{posts.map(post => <div key={post.id}>{post.title}</div>)}</div>;
}`,
        lineByLine: [
          "Line 2-8: Default caching - fetch automatically caches data",
          "Line 3: fetch without options - Uses force-cache default",
          "Line 11-18: ISR with revalidate - Updates data every 60 seconds",
          "Line 13: next: { revalidate: 60 } - Revalidate after 60 seconds",
          "Line 21-28: No caching - Always fetch fresh data",
          "Line 23: cache: 'no-store' - Disables caching completely",
          "Line 31-38: Tagged caching - For on-demand revalidation",
          "Line 33: next: { tags: ['posts', 'homepage'] } - Attaches tags to fetch",
          "Line 41-49: revalidatePath - Clears cache for specific routes",
          "Line 46: revalidatePath('/blog') - Revalidates /blog page",
          "Line 51-55: revalidateTag - Revalidates all fetches with tag",
          "Line 58-65: Deduplication - Same URL = single network request",
          "Line 68-81: Parallel fetching - Faster than sequential",
          "Line 70-71: Start both promises without await",
          "Line 73: Promise.all - Wait for both to complete",
          "Line 87-97: loading.js - Shows loading UI while fetching"
        ],
        simpleMeaning: "Next.js caches data by default to make pages fast. You can control how long to cache (revalidate) or disable caching for real-time data.",
        output: "Default page caches forever. ISR page updates every 60 seconds. Live page always shows fresh data.",
        note: "Use revalidate for content that updates occasionally (blogs). Use no-store for real-time data (stocks, live scores)."
      },

      // ========== STYLING (9-10) ==========
      {
        name: "9. CSS Modules & Global Styles",
        description: "Next.js supports CSS Modules for component-scoped styles (prevents conflicts) and global CSS for app-wide styling. CSS Modules generate unique class names automatically, while global CSS applies to all components.",
        code: `// app/components/Button.js (CSS Module)
import styles from './Button.module.css';

export default function Button({ children, variant = 'primary' }) {
  return (
    <button className={styles[variant]}>
      {children}
    </button>
  );
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

.button:hover {
  opacity: 0.9;
}

// app/page.js (Using CSS Module)
import styles from './page.module.css';
import Button from './components/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome</h1>
      <Button>Click Me</Button>
      <Button variant="secondary">Cancel</Button>
    </div>
  );
}

// app/page.module.css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  font-size: 2rem;
  color: darkblue;
}

// Global styles (app/globals.css)
/* app/globals.css - Applies to all components */
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
}

// app/components/Card.js
import styles from './Card.module.css';

export default function Card({ highlight = false }) {
  return (
    <div className={highlight ? styles.highlight : styles.card}>
      Card content
    </div>
  );
}

// Conditional styling in CSS Modules
import styles from './Alert.module.css';

export default function Alert({ type = 'info' }) {
  return (
    <div className={\`\${styles.alert} \${styles[type]}\`}>
      Alert message
    </div>
  );
}

// Alert.module.css
.alert {
  padding: 12px;
  border-radius: 4px;
}

.info {
  background: #e3f2fd;
  color: #0d47a1;
}

.error {
  background: #ffebee;
  color: #c62828;
}`,
        lineByLine: [
          "Line 2: import styles from './Button.module.css' - Imports CSS Module object",
          "Line 7: className={styles[variant]} - Dynamic class selection from CSS Module",
          "Line 10-24: Button.module.css - Scoped styles that only affect Button component",
          "Line 11-17: .primary - Class name becomes unique like 'Button_primary_xyz'",
          "Line 35-44: page.module.css - Styles scoped to page component only",
          "Line 32: className={styles.container} - Applies scoped class",
          "Line 48-55: globals.css - Global styles affect entire app",
          "Line 49-53: * selector - Reset styles applied everywhere",
          "Line 57-63: layout.js - Must import global CSS in root layout",
          "Line 68-78: Composing styles - Reusing CSS Module classes",
          "Line 74: composes: card - Inherits .card styles",
          "Line 84-88: Card component - Uses composed styles",
          "Line 92-99: Conditional styling - Combine multiple classes",
          "Line 94: className={`${styles.alert} ${styles[type]}`} - Template literal for multiple classes",
          "Line 103-115: Alert types - Different styles for different variants"
        ],
        simpleMeaning: "CSS Modules keep styles specific to one component (no conflicts). Global CSS applies to your whole app.",
        output: "Button has blue background, Cancel has gray. Container has max-width center layout. Body has gray background.",
        note: "CSS Modules produce unique class names so you can use simple class names like .button without worrying about conflicts."
      },
      {
        name: "10. Tailwind CSS Integration",
        description: "Tailwind CSS is a utility-first CSS framework that integrates seamlessly with Next.js. It provides low-level utility classes for building custom designs without writing custom CSS. Next.js has official Tailwind support.",
        code: `// Installation:
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#6b7280',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
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
  
  .card {
    @apply bg-white rounded-lg shadow-md p-6;
  }
}

// app/page.js (Using Tailwind utilities)
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Layout with flex/grid */}
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
        {/* Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            title="Feature 1" 
            description="Amazing feature description"
            icon="🚀"
          />
          <Card 
            title="Feature 2" 
            description="Another great feature"
            icon="💡"
          />
          <Card 
            title="Feature 3" 
            description="Productivity booster"
            icon="⚡"
          />
        </div>
        
        {/* Form with Tailwind */}
        <form className="mt-8 space-y-4 max-w-md">
          <input 
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button 
            type="submit"
            className="btn-primary w-full"
          >
            Subscribe
          </button>
        </form>
      </main>
    </div>
  );
}

// components/Card.js
export default function Card({ title, description, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 text-blue-500 hover:text-blue-700 font-medium">
        Learn More →
      </button>
    </div>
  );
}

// Responsive utilities
export function ResponsiveExample() {
  return (
    <div className="
      text-sm md:text-base lg:text-lg  /* Responsive text */
      p-4 md:p-6 lg:p-8              /* Responsive padding */
      w-full md:w-1/2 lg:w-1/3       /* Responsive width */
      hidden md:block                 /* Hide on mobile, show on tablet+ */
    ">
      Responsive content
    </div>
  );
}

// Dark mode support
// tailwind.config.js - add darkMode
module.exports = {
  darkMode: 'class',  // or 'media' for system preference
  // ...
}

// app/layout.js - dark mode toggle
'use client';
import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}

// Using dark mode classes
export function DarkModeComponent() {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
      <p>Automatically adapts to dark mode</p>
    </div>
  );
}

// Custom variants with arbitrary values
export function ArbitraryValues() {
  return (
    <div className="
      bg-[#1a365d]           /* Custom color */
      w-[calc(100%-2rem)]     /* Custom width with calc */
      mt-[20px]               /* Custom spacing */
      hover:bg-[#2b6cb0]      /* Custom hover state */
    ">
      Arbitrary values are powerful!
    </div>
  );
}`,
        lineByLine: [
          "Line 2-4: Installation - Install Tailwind dependencies",
          "Line 7-28: tailwind.config.js - Configure Tailwind",
          "Line 9-13: content array - Tell Tailwind which files to scan",
          "Line 15-26: theme.extend - Add custom colors, animations, etc.",
          "Line 33-35: globals.css - Add Tailwind directives",
          "Line 38-46: @layer components - Create custom component classes",
          "Line 39: .btn-primary - Custom button class using Tailwind utilities",
          "Line 49-70: HomePage - Using Tailwind utilities directly",
          "Line 50: min-h-screen bg-gray-100 - Full height with gray background",
          "Line 54: container mx-auto px-4 - Centered container with padding",
          "Line 55: flex justify-between items-center - Flexbox layout",
          "Line 60: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 - Responsive grid",
          "Line 76-85: Form styling - Input and button with Tailwind",
          "Line 79: focus:ring-2 focus:ring-blue-500 - Focus ring on input",
          "Line 99-112: ResponsiveExample - Different sizes for different screens",
          "Line 101: text-sm md:text-base lg:text-lg - Text size changes at breakpoints",
          "Line 104: hidden md:block - Hide on mobile, show on tablet+",
          "Line 119: darkMode: 'class' - Enable dark mode with class strategy",
          "Line 123-142: Dark mode toggle - Add/remove dark class",
          "Line 145-152: DarkModeComponent - Uses dark: variants",
          "Line 148: bg-white dark:bg-gray-800 - Light/dark background",
          "Line 156-165: Arbitrary values - Use any CSS value with brackets"
        ],
        simpleMeaning: "Tailwind gives you small utility classes (like bg-blue-500, text-center) to style elements without writing custom CSS.",
        output: "Responsive grid shows cards: 1 column on mobile, 2 on tablet, 3 on desktop. Dark mode toggles colors based on class.",
        note: "Use className with utility classes directly. Create reusable components to avoid repeating classes.Use cn() or clsx for conditional classes."
      }
    ]
  },
  advanced: {
    title: "🚀 Advanced Next.js",
    topics: [
      // ========== ADVANCED DATA FETCHING (1-3) ==========
      {
        name: "1. Server Actions (Data Mutations)",
        description: "Server Actions allow you to run server-side code directly from Client Components without creating API routes. They're asynchronous functions marked with 'use server' that can be called from forms or event handlers. Great for form submissions, database operations, and mutations.",
        code: `// app/actions/posts.js (Server Actions file)
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';  // For validation

// Schema for validation
const PostSchema = z.object({
  title: z.string().min(3, 'Title too short'),
  content: z.string().min(10, 'Content too short'),
});

// Create post action
export async function createPost(formData: FormData) {
  // Validate data
  const validated = PostSchema.parse({
    title: formData.get('title'),
    content: formData.get('content'),
  });
  
  // Simulate database insert
  await db.post.create({
    data: validated
  });
  
  // Revalidate and redirect
  revalidatePath('/posts');
  redirect('/posts');
}

// Update post action
export async function updatePost(id: number, formData: FormData) {
  'use server';
  
  const title = formData.get('title');
  
  await db.post.update({
    where: { id },
    data: { title }
  });
  
  revalidatePath(\`/posts/\${id}\`);
}

// Delete post action
export async function deletePost(id: number) {
  'use server';
  
  await db.post.delete({ where: { id } });
  revalidatePath('/posts');
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
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </div>
      
      <div>
        <label htmlFor="content">Content</label>
        <textarea id="content" name="content" required />
      </div>
      
      <SubmitButton />
    </form>
  );
}

// Optimistic updates with useOptimistic
'use client';
import { useOptimistic, useRef } from 'react';
import { addComment } from '@/app/actions/comments';

export default function Comments({ comments, postId }) {
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment) => [...state, newComment]
  );
  const formRef = useRef();
  
  async function formAction(formData) {
    const newComment = {
      id: Date.now(),
      text: formData.get('comment'),
      pending: true
    };
    
    // Optimistically update UI
    addOptimisticComment(newComment);
    formRef.current.reset();
    
    // Actually save to database
    await addComment(postId, formData);
  }
  
  return (
    <>
      {optimisticComments.map(comment => (
        <div key={comment.id} className={comment.pending ? 'opacity-50' : ''}>
          {comment.text}
        </div>
      ))}
      
      <form ref={formRef} action={formAction}>
        <input name="comment" placeholder="Add comment" />
        <button type="submit">Post</button>
      </form>
    </>
  );
}

// Server Action with revalidateTag
'use server';
import { revalidateTag } from 'next/cache';

export async function updateProduct(formData: FormData) {
  const id = formData.get('id');
  const name = formData.get('name');
  
  await db.product.update({
    where: { id },
    data: { name }
  });
  
  // Revalidate all fetches with 'products' tag
  revalidateTag('products');
}

// Server Action with redirect
'use server';
import { redirect } from 'next/navigation';

export async function search(formData: FormData) {
  const query = formData.get('query');
  redirect(\`/search?q=\${encodeURIComponent(query)}\`);
}

// Progressive enhancement (works without JavaScript)
export function SearchForm() {
  return (
    <form action="/search" method="GET">
      <input name="q" placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  );
}

// Server Action with error handling
'use client';
import { useFormState } from 'react-dom';
import { createUser } from '@/app/actions/users';

const initialState = {
  message: '',
  errors: null
};

export function SignupForm() {
  const [state, formAction] = useFormState(createUser, initialState);
  
  return (
    <form action={formAction}>
      <input name="email" type="email" />
      {state.errors?.email && (
        <p className="text-red-500">{state.errors.email}</p>
      )}
      <button type="submit">Sign Up</button>
      {state.message && <p>{state.message}</p>}
    </form>
  );
}

// Server Action with Zod validation
'use server';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18).max(120)
});

export async function validateAndSubmit(formData: FormData) {
  const result = schema.safeParse({
    email: formData.get('email'),
    age: Number(formData.get('age'))
  });
  
  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }
  
  await db.user.create({ data: result.data });
  revalidatePath('/users');
  redirect('/users');
}`,
        lineByLine: [
          "Line 2-5: 'use server' - Marks file for Server Actions",
          "Line 6-9: Imports - revalidatePath, redirect, zod for validation",
          "Line 12-15: Zod schema - Validates form data",
          "Line 18-32: createPost action - Handles form submission",
          "Line 19: async function createPost(formData: FormData) - Receives FormData",
          "Line 21-24: Validated with zod - Parse and validate data",
          "Line 28: revalidatePath('/posts') - Clears cache for posts route",
          "Line 29: redirect('/posts') - Redirect after success",
          "Line 32-44: updatePost action - Updates existing post",
          "Line 46-52: deletePost action - Deletes post",
          "Line 57-65: SubmitButton - Shows loading state with useFormStatus",
          "Line 59: const { pending } = useFormStatus() - Gets form submission status",
          "Line 69-86: CreatePostForm - Form that uses Server Action",
          "Line 70: <form action={createPost}> - Form submits to Server Action",
          "Line 73-75: Input fields - Must have 'name' attributes",
          "Line 89-124: useOptimistic - Optimistic UI updates",
          "Line 92-95: useOptimistic creates state that updates immediately",
          "Line 101-110: formAction - Adds optimistic update, then actual save",
          "Line 128-138: revalidateTag - Revalidates by tag instead of path",
          "Line 140-148: Server Action with redirect - Search redirect",
          "Line 151-158: Progressive enhancement - Works without JavaScript",
          "Line 161-180: useFormState - Handles form errors and validation",
          "Line 162: useFormState - Returns state and action for error handling",
          "Line 183-207: Zod validation with safeParse - Returns validation errors"
        ],
        simpleMeaning: "Server Actions let you run database code directly from forms without making API routes. They handle validation, caching, and redirects.",
        output: "Form submits → validates data → saves to database → clears cache → redirects to posts list. Comments appear instantly with optimistic updates.",
        note: "Always validate data on server with zod or similar. Use useFormStatus for loading states, useOptimistic for instant UI feedback."
      },
      {
        name: "2. Middleware",
        description: "Middleware runs code before a request completes. It's perfect for authentication, redirects, rewrites, bot detection, geolocation, and A/B testing. Middleware runs on the Edge runtime for fast performance.",
        code: `// middleware.js (in root folder)
import { NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

// Basic middleware
export function middleware(request) {
  console.log('Request to:', request.nextUrl.pathname);
  return NextResponse.next();  // Continue normally
}

// Authentication middleware
export function authMiddleware(request) {
  const isLoggedIn = request.cookies.has('auth-token');
  const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');
  const isOnLoginPage = request.nextUrl.pathname === '/login';
  
  // Redirect unauthenticated users trying to access dashboard
  if (isOnDashboard && !isLoggedIn) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
  
  // Redirect authenticated users away from login page
  if (isOnLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  return NextResponse.next();
}

// Internationalization (i18n) middleware
const locales = ['en', 'es', 'fr', 'de'];
const defaultLocale = 'en';

function getLocale(request) {
  const acceptLanguage = request.headers.get('accept-language');
  const headers = { 'accept-language': acceptLanguage };
  const languages = new Negotiator({ headers }).languages();
  
  return match(languages, locales, defaultLocale);
}

export function i18nMiddleware(request) {
  // Check if locale already in pathname
  const pathname = request.nextUrl.pathname;
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(\`/\${locale}/\`) || pathname === \`/\${locale}\`
  );
  
  if (pathnameHasLocale) return NextResponse.next();
  
  // Redirect to include locale
  const locale = getLocale(request);
  const newUrl = new URL(\`/\${locale}\${pathname}\`, request.url);
  
  return NextResponse.redirect(newUrl);
}

// Geotargeting middleware
export function geoTargetingMiddleware(request) {
  const country = request.geo?.country || 'US';
  const pathname = request.nextUrl.pathname;
  
  // Redirect based on country
  if (country === 'IN' && pathname === '/pricing') {
    return NextResponse.redirect(new URL('/pricing-in', request.url));
  }
  
  // Add country header for server components
  const response = NextResponse.next();
  response.headers.set('x-country', country);
  
  return response;
}

// A/B testing middleware
export function abTestingMiddleware(request) {
  const cookie = request.cookies.get('ab-test');
  const pathname = request.nextUrl.pathname;
  
  if (pathname === '/') {
    let variant = cookie?.value;
    
    // Random assignment if no cookie
    if (!variant) {
      variant = Math.random() < 0.5 ? 'control' : 'treatment';
    }
    
    // Rewrite to different page based on variant
    const url = request.nextUrl.clone();
    url.pathname = variant === 'control' ? '/home-control' : '/home-treatment';
    
    const response = NextResponse.rewrite(url);
    
    // Set cookie if new
    if (!cookie) {
      response.cookies.set('ab-test', variant);
    }
    
    return response;
  }
  
  return NextResponse.next();
}

// Bot detection middleware
export function botMiddleware(request) {
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = /bot|crawler|spider|scraper|facebookexternalhit/i.test(userAgent);
  
  if (isBot) {
    // Serve cached version for bots
    const response = NextResponse.next();
    response.headers.set('x-is-bot', 'true');
    return response;
  }
  
  return NextResponse.next();
}

// Combined middleware (use matcher config)
export default function middleware(request) {
  // Authentication for dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const isLoggedIn = request.cookies.has('session');
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  
  // Rate limiting (simple)
  const ip = request.ip || 'unknown';
  // You would use Redis or similar for production
  // const rateLimit = await redis.incr(\`rate_limit:\${ip}\`);
  // if (rateLimit > 100) return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  
  return NextResponse.next();
}

// Middleware matcher configuration
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico (favicon)
     * - public folder (public files)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    
    // Or match specific paths
    '/dashboard/:path*',
    '/profile/:path*',
    '/api/:path*',
  ],
};

// Advanced: Conditional middleware
export function advancedMiddleware(request) {
  const response = NextResponse.next();
  
  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Set cache headers for different content types
  if (request.nextUrl.pathname.startsWith('/static')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (request.nextUrl.pathname.startsWith('/api')) {
    response.headers.set('Cache-Control', 'no-store');
  }
  
  return response;
}

// Edge runtime middleware (uses Web APIs, not Node.js)
export const runtime = 'edge';  // Runs on Edge Runtime`,
        lineByLine: [
          "Line 2-6: Imports - NextResponse, locale matching libraries",
          "Line 9-12: Basic middleware - Logs every request",
          "Line 10: console.log - Runs before request completes",
          "Line 11: NextResponse.next() - Continues to requested page",
          "Line 15-37: Auth middleware - Handles login redirects",
          "Line 16: request.cookies.has() - Checks for auth cookie",
          "Line 17-18: Path checks - Determine if on dashboard or login",
          "Line 21-24: Redirect unauthenticated - To login page",
          "Line 22: new URL() - Creates URL for redirect",
          "Line 23: searchParams.set - Preserves intended destination",
          "Line 28-30: Redirect authenticated - Away from login page",
          "Line 40-62: i18n middleware - Adds language to URL",
          "Line 41: locales array - Supported languages",
          "Line 46-49: getLocale - Determines user's preferred language",
          "Line 52-58: Check if locale in URL - Redirect if missing",
          "Line 65-83: Geo middleware - Country-based routing",
          "Line 66: request.geo?.country - Gets user's country",
          "Line 69-73: Country redirect - Different pricing for India",
          "Line 76-77: Add custom header - For server components",
          "Line 86-115: A/B testing - Variant assignment",
          "Line 87: cookie.get('ab-test') - Read existing variant",
          "Line 91-93: Random assignment - 50/50 split",
          "Line 96-98: Rewrite to variant page - URL stays same",
          "Line 101-103: Set cookie - Persist variant",
          "Line 118-131: Bot detection - Identifies crawlers",
          "Line 120: user-agent header - Check for bot patterns",
          "Line 123-127: Serve different content - For SEO bots",
          "Line 135-154: Combined middleware - Multiple features",
          "Line 136: pathname.startsWith('/dashboard') - Match dashboard",
          "Line 138-141: Auth check - Redirect if not logged in",
          "Line 144-146: Rate limiting - Track IP requests",
          "Line 157-171: Matcher config - Controls which routes use middleware",
          "Line 164: Regex pattern - Exclude static files",
          "Line 175-190: Security headers - Add response headers",
          "Line 178-181: Security headers - Prevent clickjacking, MIME sniffing",
          "Line 184-189: Cache headers - Different caching strategies",
          "Line 193: runtime = 'edge' - Runs on Edge Runtime"
        ],
        simpleMeaning: "Middleware runs code before pages load. Use it to check if users are logged in, redirect to correct language, or test different versions.",
        output: "Unauth users to /dashboard → redirect to /login. /pricing from India → /pricing-in. Homepage shows A/B test variant.",
        note: "Keep middleware fast (avoid heavy computations). Use matcher to run only on specific routes for better performance."
      },
      {
        name: "3. Route Handlers (API Routes)",
        description: "Route Handlers let you create API endpoints within your Next.js app. They're perfect for handling form submissions, webhooks, and creating REST APIs. Route handlers run on the server and support all HTTP methods (GET, POST, PUT, DELETE, etc.).",
        code: `// app/api/posts/route.js (GET all posts)
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') || 10;
  const page = searchParams.get('page') || 1;
  
  try {
    const posts = await db.post.findMany({
      take: parseInt(limit),
      skip: (parseInt(page) - 1) * parseInt(limit),
      orderBy: { createdAt: 'desc' }
    });
    
    return NextResponse.json({
      posts,
      page: parseInt(page),
      limit: parseInt(limit),
      total: await db.post.count()
    });
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
    
    // Validate data
    if (!body.title || !body.content) {
      return NextResponse.json(
        { error: 'Title and content required' },
        { status: 400 }
      );
    }
    
    const post = await db.post.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: body.authorId
      }
    });
    
    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    );
  }
}

// app/api/posts/[id]/route.js (Dynamic route handler)
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET single post
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

// PUT update post
export async function PUT(request, { params }) {
  try {
    const body = await request.json();
    
    const post = await db.post.update({
      where: { id: parseInt(params.id) },
      data: {
        title: body.title,
        content: body.content
      }
    });
    
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    );
  }
}

// DELETE post
export async function DELETE(request, { params }) {
  try {
    await db.post.delete({
      where: { id: parseInt(params.id) }
    });
    
    return NextResponse.json(
      { message: 'Post deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete post' },
      { status: 500 }
    );
  }
}

// app/api/auth/[...nextauth]/route.js (Catch-all route for NextAuth)
export { GET, POST } from '@/auth';

// app/api/webhooks/stripe/route.js (Webhook handler)
export async function POST(request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');
  
  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    );
  }
  
  switch (event.type) {
    case 'checkout.session.completed':
      await handleCheckoutCompleted(event.data.object);
      break;
    case 'customer.subscription.updated':
      await handleSubscriptionUpdated(event.data.object);
      break;
    default:
      console.log(\`Unhandled event: \${event.type}\`);
  }
  
  return NextResponse.json({ received: true });
}

// app/api/revalidate/route.js (On-demand ISR revalidation)
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request) {
  const { path, tag, secret } = await request.json();
  
  // Verify secret token
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { error: 'Invalid secret' },
      { status: 401 }
    );
  }
  
  try {
    if (path) revalidatePath(path);
    if (tag) revalidateTag(tag);
    
    return NextResponse.json({ revalidated: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to revalidate' },
      { status: 500 }
    );
  }
}

// app/api/upload/route.js (File upload handling)
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get('file');
  
  if (!file) {
    return NextResponse.json(
      { error: 'No file uploaded' },
      { status: 400 }
    );
  }
  
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  const filename = \`\${Date.now()}-\${file.name}\`;
  const filepath = path.join(process.cwd(), 'public/uploads', filename);
  
  await writeFile(filepath, buffer);
  
  return NextResponse.json({ 
    url: \`/uploads/\${filename}\`,
    filename 
  });
}

// app/api/search/route.js (Search endpoint)
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  
  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] });
  }
  
  const results = await db.post.findMany({
    where: {
      OR: [
        { title: { contains: q, mode: 'insensitive' } },
        { content: { contains: q, mode: 'insensitive' } }
      ]
    },
    take: 20
  });
  
  return NextResponse.json({ results, query: q });
}

// Edge Runtime API route
export const runtime = 'edge';

export async function GET(request) {
  const url = new URL(request.url);
  const name = url.searchParams.get('name') || 'World';
  
  return new Response(\`Hello \${name} from Edge!\`, {
    headers: { 'Content-Type': 'text/plain' }
  });
}

// Middleware-style response with cookies
export async function GET(request) {
  const response = NextResponse.json({ message: 'Cookie set' });
  
  response.cookies.set('token', 'value', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24, // 1 day
    path: '/'
  });
  
  response.headers.set('X-Custom-Header', 'value');
  
  return response;
}`,
        lineByLine: [
          "Line 2-4: Imports - NextResponse for JSON responses, database",
          "Line 6-9: GET handler - Gets request with URL parameters",
          "Line 7: new URL(request.url) - Parse URL for query params",
          "Line 8-9: searchParams.get() - Extract limit and page",
          "Line 12-19: Fetch posts from database with pagination",
          "Line 14: take and skip - Pagination logic",
          "Line 21-25: Success response - Returns JSON with posts",
          "Line 26-30: Error handling - Returns 500 status",
          "Line 34-54: POST handler - Creates new post",
          "Line 35: await request.json() - Parse JSON body",
          "Line 38-43: Validation - Check required fields",
          "Line 45-51: Create post in database",
          "Line 53: status: 201 - Created status code",
          "Line 59-96: Dynamic route - /api/posts/[id]",
          "Line 60: { params } - Contains route parameters",
          "Line 63-66: GET by ID - Fetch single post",
          "Line 68-73: 404 if not found",
          "Line 78-93: PUT update - Update existing post",
          "Line 95-118: DELETE - Remove post",
          "Line 121-134: Webhook - Stripe webhook handler",
          "Line 122: request.text() - Raw body for signature verification",
          "Line 125-130: Verify webhook signature",
          "Line 132-141: Handle different event types",
          "Line 144-167: Revalidation endpoint - For CMS webhooks",
          "Line 146-149: Verify secret token - Security",
          "Line 154-155: revalidatePath and revalidateTag - Clear cache",
          "Line 170-201: File upload - Handle multipart form data",
          "Line 173: request.formData() - Parse multipart form",
          "Line 180: file.arrayBuffer() - Get file data",
          "Line 183: Date.now() - Generate unique filename",
          "Line 185: writeFile - Save to filesystem",
          "Line 204-226: Search endpoint - Full-text search",
          "Line 216-223: Contains search - Case-insensitive",
          "Line 229-236: Edge runtime - Fast, global execution",
          "Line 239-251: Cookies and headers - Set response metadata"
        ],
        simpleMeaning: "Route handlers create API endpoints in your Next.js app. Use them for fetching data with GET, submitting with POST, updating with PUT, or deleting with DELETE.",
        output: "GET /api/posts → JSON array of posts. POST /api/posts → creates new post. DELETE /api/posts/1 → deletes post.",
        note: "Route handlers run on server, never exposed to client. Use for database operations, file uploads, webhooks, and external API proxies."
      }
    ]
  }
};