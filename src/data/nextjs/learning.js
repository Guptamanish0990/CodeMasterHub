// /data/nextjs/learning.js

export const learning = {
  basic: {
    title: "▲ Next.js Basics - Complete Beginner's Guide",
    topics: [
      // ========== 1. WHAT IS NEXT.JS & SETUP ==========
      {
        name: "1. What is Next.js & Setup",
        description: "Next.js is a React framework that provides server-side rendering, static site generation, and file-based routing. It simplifies building production-ready React applications with built-in optimizations. Created by Vercel, it's the most popular React framework for production.",
        code: `// Create a new Next.js project
// npx create-next-app@latest my-app
// cd my-app
// npm run dev

// app/page.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js!</h1>
      <p>Your app is running on http://localhost:3000</p>
    </div>
  );
}`,
        lineByLine: [
          "npx create-next-app@latest my-app - Creates new Next.js project",
          "cd my-app - Navigates into project directory",
          "npm run dev - Starts development server on port 3000",
          "app/page.js - Main page component",
          "export default function Home() - Default export of page component"
        ],
        simpleMeaning: "Next.js is a React framework that makes building websites easier with built-in routing and performance optimization.",
        output: "Server running at http://localhost:3000 showing 'Welcome to Next.js!'",
        note: "Next.js 13+ uses App Router by default."
      },
      // ========== 2. FILE-BASED ROUTING ==========
      {
        name: "2. File-based Routing (App Router)",
        description: "Next.js uses file-based routing where folders and files in the 'app' directory automatically become routes. Each folder creates a route segment, and page.js files define the actual page content.",
        code: `// Folder structure:
// app/
//   ├── page.js          → /
//   ├── about/
//   │   └── page.js      → /about
//   ├── blog/
//   │   └── [slug]/
//   │       └── page.js  → /blog/:slug
//   └── (dashboard)/
//       └── page.js      → /dashboard (group)

// app/page.js
export default function HomePage() { return <h1>Home</h1>; }

// app/about/page.js
export default function AboutPage() { return <h1>About</h1>; }

// app/blog/[slug]/page.js
export default function BlogPost({ params }) {
  return <h1>Post: {params.slug}</h1>;
}`,
        lineByLine: [
          "app/page.js → / - Root route",
          "app/about/page.js → /about - Static route",
          "app/blog/[slug]/page.js → /blog/:slug - Dynamic route",
          "params.slug - Access dynamic parameter",
          "(dashboard) - Route group (doesn't affect URL)"
        ],
        simpleMeaning: "Folders in 'app' become website URLs. Any 'page.js' file inside a folder becomes a webpage at that path.",
        output: "/ → Home\n/about → About\n/blog/hello → Post: hello",
        note: "Use [param] for dynamic routes, (folder) for grouping without affecting URL."
      },
      // ========== 3. LAYOUTS & NESTED LAYOUTS ==========
      {
        name: "3. Layouts & Nested Layouts",
        description: "Layouts are components that wrap multiple pages and persist across navigation. The root layout (app/layout.js) is required and wraps every page.",
        code: `// app/layout.js (Root Layout)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>My Website Header</header>
        <main>{children}</main>
        <footer>© 2024</footer>
      </body>
    </html>
  );
}

// app/dashboard/layout.js (Nested Layout)
export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard">
      <nav className="sidebar">Sidebar</nav>
      <div className="content">{children}</div>
    </div>
  );
}

// app/dashboard/page.js
export default function DashboardPage() {
  return <h1>Dashboard</h1>;
}

// Metadata
export const metadata = {
  title: 'My App',
  description: 'My Next.js App',
};`,
        lineByLine: [
          "RootLayout - Required, contains html/body tags",
          "children - Page content goes here",
          "Nested layout - Wraps only dashboard pages",
          "metadata - Sets page title and description for SEO",
          "Layouts persist across navigation (don't re-render)"
        ],
        simpleMeaning: "Layouts are templates that wrap pages. Root layout wraps everything. Nested layouts wrap specific sections.",
        output: "Every page shows header and footer. Dashboard pages show sidebar.",
        note: "Root layout must contain html and body tags. Layouts don't re-render on navigation."
      },
      // ========== 4. LINK COMPONENT ==========
      {
        name: "4. Link Component & Navigation",
        description: "Next.js Link component enables client-side navigation between pages without full page reloads. It prefetches linked pages automatically for faster transitions.",
        code: `import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Navigation component
export default function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog/hello-world">Blog Post</Link>
      <Link href="/dashboard" prefetch={false}>Dashboard</Link>
    </nav>
  );
}

// Programmatic navigation
function LoginButton() {
  const router = useRouter();
  
  const handleLogin = () => {
    router.push('/dashboard');
    // router.replace('/dashboard') - No history
    // router.back() - Go back
    // router.refresh() - Refresh page
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
          "import Link from 'next/link' - Import Link component",
          "<Link href='/'>Home</Link> - Basic navigation",
          "prefetch={false} - Disables automatic prefetching",
          "useRouter() - Hook for programmatic navigation",
          "router.push() - Navigate programmatically",
          "usePathname() - Gets current URL path",
          "isActive = pathname === href - Checks if link is current"
        ],
        simpleMeaning: "Link component lets users click between pages without reloading. useRouter lets you navigate programmatically.",
        output: "Clicking links navigates without page reload. Active links have 'active' class.",
        note: "Link automatically prefetches linked pages when they come into view."
      },
      // ========== 5. IMAGE COMPONENT ==========
      {
        name: "5. Image Component & Optimization",
        description: "Next.js Image component automatically optimizes images for performance. It lazy loads images, serves modern formats (WebP), resizes images on-demand, and prevents layout shift.",
        code: `import Image from 'next/image';
import profilePic from '../public/profile.jpg';

// Local image
export default function Avatar() {
  return (
    <Image
      src={profilePic}
      alt="Profile"
      width={200}
      height={200}
      className="rounded-full"
    />
  );
}

// Remote image
export default function RemoteImage() {
  return (
    <Image
      src="https://example.com/photo.jpg"
      alt="Remote"
      width={800}
      height={600}
      priority
    />
  );
}

// Fill parent container
export default function HeroImage() {
  return (
    <div className="relative h-96 w-full">
      <Image
        src="/hero.jpg"
        alt="Hero"
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
}

// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'example.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};`,
        lineByLine: [
          "import Image from 'next/image' - Import Image component",
          "width and height required - Prevents layout shift",
          "priority - Disables lazy loading, loads immediately",
          "fill - Makes image fill parent container",
          "objectFit: 'cover' - Controls how image fills",
          "remotePatterns - Configure allowed remote image domains"
        ],
        simpleMeaning: "Image component makes images load faster, prevents layout shifting, and automatically optimizes images.",
        output: "Images load optimized, lazy-loaded, and in modern formats like WebP.",
        note: "Always specify width/height or use 'fill'. Remote images need configuration."
      },
      // ========== 6. SCRIPT COMPONENT ==========
      {
        name: "6. Script Component",
        description: "Next.js Script component optimizes loading of third-party scripts (analytics, ads, widgets). It allows you to control loading strategy.",
        code: `import Script from 'next/script';

// beforeInteractive - Loads before page interactive
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
          gtag('config', 'GA_ID');
        \`}
      </Script>
      <h1>Page with Analytics</h1>
    </>
  );
}

// afterInteractive - Loads after page interactive (default)
export default function ChatWidget() {
  return (
    <>
      <Script
        src="https://example.com/chat.js"
        strategy="afterInteractive"
        onLoad={() => console.log('Chat loaded!')}
      />
      <div>Chat will appear shortly</div>
    </>
  );
}

// lazyOnload - Loads during browser idle time
export default function MarketingPixels() {
  return (
    <>
      <Script
        src="https://example.com/tracker.js"
        strategy="lazyOnload"
        onError={(e) => console.error('Failed', e)}
      />
      <main>Main content loads first</main>
    </>
  );
}`,
        lineByLine: [
          "strategy='beforeInteractive' - Critical scripts, loads before hydration",
          "strategy='afterInteractive' - Default, loads after page loads",
          "strategy='lazyOnload' - Loads during browser idle time",
          "onLoad callback - Runs when script loads successfully",
          "onError callback - Handles script loading failures",
          "Inline scripts need 'id' prop"
        ],
        simpleMeaning: "Script component controls when third-party scripts load: before page (critical), after page (normal), or during idle time.",
        output: "Analytics loads before page. Chat loads after page shows. Tracker loads when browser is idle.",
        note: "Use beforeInteractive for critical scripts like authentication."
      },
      // ========== 7. SERVER & CLIENT COMPONENTS ==========
      {
        name: "7. Server Components & Client Components",
        description: "Next.js uses Server Components by default, which render on the server and send only HTML to the client. Client Components are for interactive features that need browser APIs.",
        code: `// Server Component (default - no 'use client')
export default async function ServerPage() {
  const data = await fetch('https://api.example.com/posts').then(res => res.json());
  return <div>{data.map(post => <div key={post.id}>{post.title}</div>)}</div>;
}

// Client Component
'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

// Mixing both
import Counter from './Counter';

export default function HomePage() {
  return (
    <div>
      <ServerPage />
      <Counter />
    </div>
  );
}

// Streaming with Suspense
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
          "Server Component - Default, no 'use client' needed",
          "async function - Can fetch data directly",
          "'use client' directive - Makes component Client Component",
          "useState - Client-only feature",
          "Suspense - Shows fallback while loading",
          "Streaming - Content appears progressively"
        ],
        simpleMeaning: "Server Components load faster and are for static content. Client Components add interactivity.",
        output: "Server Component shows fetched data. Counter button increments. Slow component shows loading then content.",
        note: "Add 'use client' at top for any component using useState, useEffect, or browser APIs."
      },
      // ========== 8. DATA FETCHING & CACHING ==========
      {
        name: "8. Data Fetching & Caching",
        description: "Next.js extends the native fetch API with caching and revalidation options. By default, fetch requests are cached and deduplicated.",
        code: `// Default: cached forever
export default async function Page() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());
  return <div>{posts.map(post => <div key={post.id}>{post.title}</div>)}</div>;
}

// ISR - Revalidate every 60 seconds
export default async function ISRPage() {
  const data = await fetch('https://api.example.com/data', {
    next: { revalidate: 60 }
  }).then(res => res.json());
  return <div>{data.content}</div>;
}

// No caching - always fresh
export default async function DynamicPage() {
  const data = await fetch('https://api.example.com/live-data', {
    cache: 'no-store'
  }).then(res => res.json());
  return <div>Live: {data.value}</div>;
}

// Tag-based revalidation
export default async function TaggedPage() {
  const data = await fetch('https://api.example.com/posts', {
    next: { tags: ['posts'] }
  }).then(res => res.json());
  return <div>{data.map(post => <div key={post.id}>{post.title}</div>)}</div>;
}

// Parallel fetching
export default async function ParallelPage() {
  const postsPromise = fetch('https://api.example.com/posts');
  const usersPromise = fetch('https://api.example.com/users');
  
  const [postsRes, usersRes] = await Promise.all([postsPromise, usersPromise]);
  const posts = await postsRes.json();
  const users = await usersRes.json();
  
  return <div>{posts.length} Posts, {users.length} Users</div>;
}`,
        lineByLine: [
          "Default fetch - Cached automatically with 'force-cache'",
          "next: { revalidate: 60 } - ISR, revalidates every 60 seconds",
          "cache: 'no-store' - Never cache, always fresh",
          "next: { tags: ['posts'] } - Tag for on-demand revalidation",
          "Promise.all - Parallel data fetching",
          "revalidatePath() - Clear cache for specific routes",
          "revalidateTag() - Clear all fetches with tag"
        ],
        simpleMeaning: "Next.js caches data by default to make pages fast. You can control how long to cache or disable caching for real-time data.",
        output: "Default page caches forever. ISR page updates every 60 seconds. Live page always shows fresh data.",
        note: "Use revalidate for content that updates occasionally. Use no-store for real-time data."
      },
      // ========== 9. CSS MODULES ==========
      {
        name: "9. CSS Modules & Global Styles",
        description: "Next.js supports CSS Modules for component-scoped styles (prevents conflicts) and global CSS for app-wide styling.",
        code: `// app/components/Button.js
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

// app/globals.css (Global styles)
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
}

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
// card.module.css
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
}

.highlight {
  composes: card;
  background: yellow;
}`,
        lineByLine: [
          "import styles from './Button.module.css' - Imports CSS Module",
          "className={styles[variant]} - Dynamic class selection",
          ".primary - Class becomes unique like 'Button_primary_xyz'",
          "globals.css - Global styles affect entire app",
          "@tailwind directives for Tailwind CSS",
          "composes: card - Inherits styles from another class"
        ],
        simpleMeaning: "CSS Modules keep styles specific to one component. Global CSS applies to your whole app.",
        output: "Button has blue background. Body has gray background globally.",
        note: "CSS Modules produce unique class names so you can use simple class names without conflicts."
      },
      // ========== 10. TAILWIND CSS ==========
      {
        name: "10. Tailwind CSS Integration",
        description: "Tailwind CSS is a utility-first CSS framework that integrates seamlessly with Next.js. It provides low-level utility classes for building custom designs.",
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
  darkMode: 'class',
  plugins: [],
};

// app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600;
  }
}

// app/page.js
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
            <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
            <p className="text-gray-600">Description</p>
          </div>
        </div>
      </main>
    </div>
  );
}

// Dark mode component
export function DarkModeComponent() {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
      Adapts to dark mode
    </div>
  );
}`,
        lineByLine: [
          "content array - Tell Tailwind which files to scan",
          "@tailwind directives - Import Tailwind layers",
          "@layer components - Create custom component classes",
          "container mx-auto - Centered container",
          "flex justify-between items-center - Flexbox utilities",
          "grid grid-cols-1 md:grid-cols-2 - Responsive grid",
          "dark:bg-gray-800 - Dark mode variant"
        ],
        simpleMeaning: "Tailwind gives you small utility classes to style elements without writing custom CSS.",
        output: "Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop. Dark mode support.",
        note: "Use className with utility classes directly. Create reusable components to avoid repetition."
      },
      // ========== 11. USING CSS MODULES IN NEXT.JS ==========
{
  name: "11. CSS Modules in Next.js",
  description: "CSS Modules let you write component-scoped CSS. Class names are automatically unique, preventing conflicts between components.",
  code: `// app/components/Button.module.css
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: darkblue;
}

.primary {
  background-color: green;
}

.large {
  padding: 15px 30px;
  font-size: 18px;
}

// app/components/Button.js
import styles from './Button.module.css';

export default function Button({ children, variant = 'default', size = 'default' }) {
  return (
    <button 
      className={\`
        \${styles.button} 
        \${variant === 'primary' ? styles.primary : ''}
        \${size === 'large' ? styles.large : ''}
      \`}
    >
      {children}
    </button>
  );
}

// app/components/Card.module.css
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
}

.content {
  color: #666;
  line-height: 1.5;
}

// app/components/Card.js
import styles from './Card.module.css';

export default function Card({ title, children }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

// app/page.js (using both components)
import Button from './components/Button';
import Card from './components/Card';

export default function HomePage() {
  return (
    <div>
      <Card title="Welcome">
        <p>This is a card component with CSS Modules!</p>
        <Button>Click Me</Button>
        <Button variant="primary" size="large">Primary Button</Button>
      </Card>
    </div>
  );
}`,
  lineByLine: [
    "Button.module.css - File naming convention",
    "styles.button - Imported styles as object",
    "Local scope - Classes don't leak to other components",
    "Composition - Combine multiple classes",
    "Unique names - Next.js automatically generates unique class names"
  ],
  simpleMeaning: "CSS Modules keep your CSS confined to one component, so no class name conflicts.",
  output: "Buttons and cards look styled without worrying about CSS class name collisions.",
  note: "CSS Modules work out of the box. No extra setup needed."
},

// ========== 12. USING FONTS IN NEXT.JS ==========
{
  name: "12. Using Fonts in Next.js",
  description: "Next.js has built-in font optimization with next/font. It automatically optimizes fonts, prevents layout shift, and uses system fonts as fallback.",
  code: `// app/layout.js (Google Fonts)
import { Inter, Roboto, Open_Sans } from 'next/font/google';

// Load Inter font
const inter = Inter({
  subsets: ['latin'],      // Character sets
  display: 'swap',         // FOIT vs FOUT behavior
  variable: '--font-inter', // CSS variable
});

// Load Roboto with specific weight
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

// Load Open Sans with multiple weights
const openSans = Open_Sans({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}

// Using multiple fonts
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={\`\${inter.variable} \${roboto.variable}\`}>
        <h1 className="font-inter">This uses Inter</h1>
        <p className="font-roboto">This uses Roboto</p>
        {children}
      </body>
    </html>
  );
}

// app/globals.css
.font-inter {
  font-family: var(--font-inter);
}

.font-roboto {
  font-family: var(--font-roboto);
}

// Using local font files
// Place font files in public/fonts/
import localFont from 'next/font/local';

const myFont = localFont({
  src: './fonts/MyFont.woff2',
  display: 'swap',
});

// Multiple local font files
const customFont = localFont({
  src: [
    {
      path: './fonts/CustomFont-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/CustomFont-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CustomFont-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-custom',
});

// Tailwind CSS with next/font
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        custom: ['var(--font-custom)'],
      },
    },
  },
};

// Then use in components:
<h1 className="font-inter">Tailwind + Custom Font</h1>`,
  lineByLine: [
    "next/font/google - Import Google Fonts",
    "subsets: ['latin'] - Which character sets to include",
    "variable - Create CSS variable",
    "className={inter.className} - Apply font",
    "localFont - Use local font files",
    "Automatic optimization - No layout shift"
  ],
  simpleMeaning: "Next.js automatically optimizes fonts so they load fast without shifting your layout.",
  output: "Text displays in your chosen fonts with no layout shift (CLS) issues.",
  note: "next/font works without any external network requests, improving privacy."
},

// ========== 13. ADDING META TAGS (SEO) ==========
{
  name: "13. Adding Meta Tags for SEO",
  description: "Next.js has a Metadata API for SEO. You can add titles, descriptions, Open Graph tags, and Twitter cards to improve search rankings.",
  code: `// app/layout.js (Root metadata for all pages)
export const metadata = {
  title: 'My Awesome Website',
  description: 'This is my awesome website built with Next.js',
  keywords: ['next.js', 'react', 'web development'],
  authors: [{ name: 'John Doe', url: 'https://johndoe.com' }],
  openGraph: {
    title: 'My Awesome Website',
    description: 'This is my awesome website',
    url: 'https://mywebsite.com',
    siteName: 'My Website',
    images: [
      {
        url: 'https://mywebsite.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Awesome Website',
    description: 'This is my awesome website',
    images: ['https://mywebsite.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// app/about/page.js (Page-specific metadata)
export const metadata = {
  title: 'About Us | My Website',
  description: 'Learn more about our company and mission',
  openGraph: {
    title: 'About Us',
    description: 'Learn about our company',
  },
};

export default function AboutPage() {
  return <h1>About Us</h1>;
}

// app/blog/[slug]/page.js (Dynamic metadata)
export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = await getPost(slug);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

// Alternative: Using generateMetadata function
export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(params.id);
  
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
      price: product.price,
    },
  };
}

// app/products/[id]/page.js
export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}`,
  lineByLine: [
    "metadata object - Define SEO data",
    "title - Browser tab title",
    "description - SEO description",
    "openGraph - Social media sharing",
    "twitter - Twitter card preview",
    "generateMetadata - Dynamic SEO for routes"
  ],
  simpleMeaning: "Metadata API helps search engines and social media understand your pages.",
  output: "Search engines show your titles and descriptions. Social sharing shows pretty cards.",
  note: "Good SEO = more visitors from Google and social media."
},

// ========== 14. FETCHING DATA IN NEXT.JS ==========
{
  name: "14. Fetching Data in Next.js",
  description: "Next.js supports multiple data fetching methods. Server Components can fetch data directly with async/await.",
  code: `// app/users/page.js (Basic data fetching)
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;
}

export default async function UsersPage() {
  const users = await getUsers();
  
  return (
    <div>
      <h1>Users List</h1>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

// With loading state
// app/users/loading.js
export default function Loading() {
  return <div>Loading users...</div>;
}

// Caching and revalidation
async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'force-cache',  // Cache data (default)
    // cache: 'no-store',  // Don't cache, fetch fresh every time
    next: {
      revalidate: 3600,     // Revalidate every hour (ISR)
    },
  });
  return res.json();
}

// Parallel data fetching
async function getData() {
  const [users, posts, comments] = await Promise.all([
    fetch('https://api.example.com/users').then(res => res.json()),
    fetch('https://api.example.com/posts').then(res => res.json()),
    fetch('https://api.example.com/comments').then(res => res.json()),
  ]);
  
  return { users, posts, comments };
}

export default async function DashboardPage() {
  const { users, posts, comments } = await getData();
  
  return (
    <div>
      <div>Users: {users.length}</div>
      <div>Posts: {posts.length}</div>
      <div>Comments: {comments.length}</div>
    </div>
  );
}

// With error handling
async function getProducts() {
  try {
    const res = await fetch('https://api.example.com/products');
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

// app/products/error.js (Error boundary)
'use client';
export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}`,
  lineByLine: [
    "async function - Server Components can be async",
    "await fetch() - Fetch data directly",
    "cache: 'force-cache' - Store for reuse",
    "revalidate - Time-based cache refresh",
    "Promise.all - Fetch multiple things at once",
    "error.js - Error boundary for graceful failures"
  ],
  simpleMeaning: "Just use async/await to fetch data in your components - it's that simple.",
  output: "Data loads and displays in your page with built-in loading and error states.",
  note: "Server Components fetch data on the server. No API routes needed for simple data."
},

// ========== 15. CLIENT COMPONENTS VS SERVER COMPONENTS ==========
{
  name: "15. Client vs Server Components",
  description: "Next.js 13+ uses React Server Components by default. Client Components add 'use client' for interactive features.",
  code: `// app/components/ServerComponent.js (Default - NO 'use client')
// Runs on server only. Cannot use useState, useEffect, onClick, etc.
export default function ServerComponent() {
  // ✅ Can use async/await
  // ✅ Can access database directly
  // ✅ Can read environment variables
  // ❌ Cannot use useState
  // ❌ Cannot use onClick handlers
  // ❌ Cannot use browser APIs
  
  return (
    <div>
      <h1>I run on the server</h1>
      <p>Environment: {process.env.NODE_ENV}</p>
    </div>
  );
}

// app/components/ClientComponent.js (WITH 'use client')
'use client';

import { useState, useEffect } from 'react';

export default function ClientComponent() {
  // ✅ Can use useState
  const [count, setCount] = useState(0);
  
  // ✅ Can use useEffect
  useEffect(() => {
    console.log('Component mounted');
  }, []);
  
  // ✅ Can use event handlers
  const handleClick = () => {
    setCount(count + 1);
  };
  
  // ✅ Can use browser APIs
  const handleLocalStorage = () => {
    localStorage.setItem('key', 'value');
  };
  
  return (
    <div>
      <h1>I run on the client</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

// Mixing both - Server component can import Client component
// app/page.js (Server Component)
import ServerComponent from './components/ServerComponent';
import ClientComponent from './components/ClientComponent';

export default function HomePage() {
  return (
    <div>
      <ServerComponent />  {/* Runs on server */}
      <ClientComponent />  {/* Runs on client */}
    </div>
  );
}

// Passing props from Server to Client
// app/page.js
async function getData() {
  return { user: 'John', role: 'admin' };
}

export default async function HomePage() {
  const data = await getData();
  
  return (
    <div>
      {/* Server data passed to client component */}
      <InteractiveProfile userData={data} />
    </div>
  );
}

// app/components/InteractiveProfile.js
'use client';

export default function InteractiveProfile({ userData }) {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div>
      <h3>{userData.user}</h3>
      <button onClick={() => setShowDetails(!showDetails)}>
        Toggle Details
      </button>
      {showDetails && <p>Role: {userData.role}</p>}
    </div>
  );
}`,
  lineByLine: [
    "No 'use client' - Server Component (default)",
    "'use client' - Client Component directive",
    "Server Component - Runs only on server",
    "Client Component - Runs in browser",
    "useState/useEffect - Only in Client Components",
    "Props - Server can pass data to Client"
  ],
  simpleMeaning: "Server Components are for static content. Add 'use client' when you need buttons, forms, or interactivity.",
  output: "Server renders what it can, client handles interactions. Best of both worlds.",
  note: "Use Server Components by default. Only add 'use client' when needed."
},

// ========== 16. USING USESTATE AND USEEFFECT ==========
{
  name: "16. Using useState and useEffect",
  description: "React hooks for managing state and side effects. Works only in Client Components with 'use client' directive.",
  code: `// app/components/Counter.js
'use client';
import { useState } from 'react';

export default function Counter() {
  // useState returns [current value, function to update]
  const [count, setCount] = useState(0);  // Initialize with 0
  const [name, setName] = useState('');    // Initialize with empty string
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name || 'stranger'}!</p>
    </div>
  );
}

// app/components/TodoList.js
'use client';
import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue('');
    }
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span 
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// app/components/UserProfile.js (useEffect example)
'use client';
import { useState, useEffect } from 'react';

export default function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // This runs after component mounts
    // And when userId changes
    async function fetchUser() {
      setLoading(true);
      const res = await fetch(\`https://api.example.com/users/\${userId}\`);
      const data = await res.json();
      setUser(data);
      setLoading(false);
    }
    
    fetchUser();
  }, [userId]); // Re-run when userId changes
  
  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

// app/components/WindowWidth.js
'use client';
import { useState, useEffect } from 'react';

export default function WindowWidth() {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Cleanup - removes event listener when component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array = run once on mount
  
  return <div>Window width: {width}px</div>;
}`,
  lineByLine: [
    "useState(0) - Create state variable",
    "setCount() - Update state variable",
    "useEffect - Run code after render",
    "[userId] - Dependencies array",
    "Cleanup function - Remove event listeners",
    "loadMore() - Update state to re-render"
  ],
  simpleMeaning: "useState stores data that changes. useEffect runs code when component loads or data changes.",
  output: "Counter increments, todo list adds items, user data loads from API.",
  note: "Always add 'use client' at the top when using hooks."
},

// ========== 17. HANDLING FORMS IN NEXT.JS ==========
{
  name: "17. Handling Forms in Next.js",
  description: "Forms in Next.js can be handled on client side (with useState) or server side (with Server Actions).",
  code: `// METHOD 1: Client-side form handling
// app/components/ContactForm.js
'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (res.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      
      {status === 'success' && <p>Message sent!</p>}
      {status === 'error' && <p>Error sending message</p>}
    </form>
  );
}

// API Route for form submission
// app/api/contact/route.js
export async function POST(request) {
  const { name, email, message } = await request.json();
  
  // Save to database or send email
  console.log('Form submission:', { name, email, message });
  
  return Response.json({ success: true });
}

// METHOD 2: Server Actions (Simpler, no API route needed)
// app/actions/contact.js
'use server';

export async function submitContactForm(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  // Validate
  if (!name || !email || !message) {
    return { error: 'All fields required' };
  }
  
  // Process the data
  console.log('Form submitted:', { name, email, message });
  
  // Return success
  return { success: true };
}

// app/contact/page.js (Using Server Action)
import { submitContactForm } from '../actions/contact';

export default function ContactPage() {
  return (
    <form action={submitContactForm}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" required />
      </div>
      
      <div>
        <label>Email:</label>
        <input type="email" name="email" required />
      </div>
      
      <div>
        <label>Message:</label>
        <textarea name="message" required />
      </div>
      
      <button type="submit">Send Message</button>
    </form>
  );
}

// With loading state (using useFormStatus)
'use client';
import { useFormStatus } from 'react-dom';
import { submitContactForm } from '../actions/contact';

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  );
}

export default function ContactPage() {
  return (
    <form action={submitContactForm}>
      {/* form fields */}
      <SubmitButton />
    </form>
  );
}`,
  lineByLine: [
    "useState - Store form data",
    "handleChange - Update state on input",
    "handleSubmit - Send data to server",
    "Server Actions - Alternative to API routes",
    "useFormStatus - Get loading state",
    "'use server' - Mark function as Server Action"
  ],
  simpleMeaning: "Client forms = useState + API. Server forms = form action + Server Action.",
  output: "User submits form, data saves, shows success or error message.",
  note: "Server Actions are simpler but newer. Start with client forms if unsure."
},

// ========== 18. DYNAMIC ROUTES AND PARAMS ==========
{
  name: "18. Dynamic Routes and Params",
  description: "Dynamic routes let you create pages with variable URLs like /products/123 or /blog/my-post-title.",
  code: `// Folder structure:
// app/
//   products/
//     [id]/           (Dynamic segment folder)
//       page.js       (Handles /products/1, /products/2, etc.)
//   blog/
//     [slug]/
//       page.js       (Handles /blog/my-first-post)

// Example 1: Basic dynamic route
// app/products/[id]/page.js
export default function ProductPage({ params }) {
  const { id } = params;
  
  return (
    <div>
      <h1>Product ID: {id}</h1>
      <p>Showing details for product #{id}</p>
    </div>
  );
}

// Example 2: Fetching data based on dynamic params
// app/products/[id]/page.js (Alternative version with data fetching)
async function getProduct(id) {
  const res = await fetch(\`https://api.example.com/products/\${id}\`);
  return res.json();
}

export default async function ProductDetailPage({ params }) {
  const product = await getProduct(params.id);
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: \${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

// Example 3: Multiple dynamic segments
// app/store/[category]/[productId]/page.js
export default async function StorePage({ params }) {
  const { category, productId } = params;
  
  return (
    <div>
      <p>Category: {category}</p>
      <p>Product: {productId}</p>
    </div>
  );
  // URL: /store/electronics/phone123
}

// Example 4: Catch-all routes (handle any depth)
// app/docs/[...slug]/page.js
export default function DocsPage({ params }) {
  const { slug } = params;
  
  return (
    <div>
      <h1>Documentation</h1>
      <p>Path: {slug?.join(' / ')}</p>
      {/* 
        /docs/getting-started → "Path: getting-started"
        /docs/advanced/deployment → "Path: advanced / deployment"
        /docs → slug is undefined
      */}
    </div>
  );
}

// Example 5: Optional catch-all routes ([[...slug]])
// app/blog/[[...slug]]/page.js
export default function BlogPage({ params }) {
  const { slug = [] } = params;
  
  if (slug.length === 0) {
    return <h1>Blog Homepage</h1>;
  }
  
  return <h1>Blog Post: {slug.join('/')}</h1>;
  // /blog → Blog Homepage
  // /blog/my-post → "Blog Post: my-post"
}

// Example 6: Generate static paths for dynamic routes (SSG)
// app/products/[id]/page.js
export async function generateStaticParams() {
  // Fetch all product IDs at build time
  const products = await fetch('https://api.example.com/products').then(r => r.json());
  
  return products.map(product => ({
    id: product.id.toString(),
  }));
  // Pre-builds /products/1, /products/2, etc. at build time
}

// Example 7: Create navigation links for dynamic routes
// app/products/page.js
import Link from 'next/link';

async function getProducts() {
  const res = await fetch('https://api.example.com/products');
  return res.json();
}

export default async function ProductsList() {
  const products = await getProducts();
  
  return (
    <div>
      {products.map(product => (
        <Link key={product.id} href={\`/products/\${product.id}\`}>
          {product.name}
        </Link>
      ))}
    </div>
  );
}`,
  lineByLine: [
    "[id] - Dynamic segment folder name",
    "params - Object containing URL params",
    "params.id - Access the dynamic value",
    "[...slug] - Catch all segments",
    "[[...slug]] - Optional catch all",
    "generateStaticParams - Pre-build pages"
  ],
  simpleMeaning: "Square brackets [param] in folder names create dynamic URLs.",
  output: "URL /products/123 displays product 123. URL /blog/hello shows blog post hello.",
  note: "Dynamic routes are powerful for product pages, blog posts, and user profiles."
},

// ========== 19. API ROUTES IN NEXT.JS ==========
{
  name: "19. API Routes in Next.js",
  description: "API routes let you build backend endpoints inside your Next.js app. Create REST APIs, handle form submissions, or connect to databases.",
  code: `// app/api/hello/route.js (Simple GET endpoint)
export async function GET() {
  return Response.json({ message: 'Hello World!' });
}

// app/api/users/route.js (GET and POST)
export async function GET() {
  const users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
  ];
  
  return Response.json(users);
}

export async function POST(request) {
  const body = await request.json();
  const { name, email } = body;
  
  // Save to database here
  const newUser = { id: Date.now(), name, email };
  
  return Response.json(newUser, { status: 201 });
}

// app/api/users/[id]/route.js (Dynamic API routes)
export async function GET(request, { params }) {
  const { id } = params;
  
  // Fetch user from database
  const user = { id, name: 'John Doe', email: 'john@example.com' };
  
  if (!user) {
    return Response.json({ error: 'User not found' }, { status: 404 });
  }
  
  return Response.json(user);
}

export async function PUT(request, { params }) {
  const { id } = params;
  const body = await request.json();
  
  // Update user in database
  const updatedUser = { id, ...body };
  
  return Response.json(updatedUser);
}

export async function DELETE(request, { params }) {
  const { id } = params;
  
  // Delete user from database
  
  return Response.json({ success: true });
}

// app/api/todos/route.js (With error handling)
export async function GET() {
  try {
    const todos = await db.todo.findMany();
    return Response.json(todos);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch todos' }, { status: 500 });
  }
}

// app/api/contact/route.js (Send email)
export async function POST(request) {
  const { name, email, message } = await request.json();
  
  // Validate
  if (!name || !email || !message) {
    return Response.json({ error: 'Missing fields' }, { status: 400 });
  }
  
  // Send email (example with Resend)
  // await resend.emails.send({ ... });
  
  return Response.json({ success: true });
}

// Using API routes from client components
'use client';
import { useState } from 'react';

export default function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });
    
    if (res.ok) {
      const newUser = await res.json();
      console.log('User created:', newUser);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Create User</button>
    </form>
  );
}

// Middleware for API routes (authentication)
// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.headers.get('authorization');
  
  if (!token && request.nextUrl.pathname.startsWith('/api/protected')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  return NextResponse.next();
}

// Query parameters in API routes
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || 1;
  const limit = searchParams.get('limit') || 10;
  
  // Use page and limit for pagination
  const data = await db.post.findMany({
    skip: (page - 1) * limit,
    take: limit
  });
  
  return Response.json(data);
}`,
  lineByLine: [
    "export async function GET - Handle GET requests",
    "request.json() - Parse POST body",
    "params - Access dynamic route values",
    "Response.json() - Send JSON response",
    "status: 404 - Set HTTP status code",
    "searchParams - Get query parameters"
  ],
  simpleMeaning: "API routes let you create backend endpoints without a separate server.",
  output: "/api/hello returns JSON. POST to /api/users creates new user.",
  note: "API routes run server-side. Perfect for form submissions and database operations."
},

// ========== 20. ENVIRONMENT VARIABLES ==========
{
  name: "20. Environment Variables",
  description: "Environment variables store configuration like API keys, database URLs, and secret values. Next.js loads them from .env files.",
  code: `# .env.local (Local development)
# Never commit this file to git!
DATABASE_URL="postgresql://localhost:5432/mydb"
API_SECRET_KEY="supersecretkey123"
STRIPE_API_KEY="sk_test_12345"

# .env.production (Production)
DATABASE_URL="postgresql://prod-server:5432/proddb"
API_SECRET_KEY="realsecretkey456"

# .env (Default, can be committed)
NEXT_PUBLIC_APP_NAME="My Awesome App"
NEXT_PUBLIC_API_URL="https://api.example.com"

// Using environment variables in server components
// app/page.js (Server Component)
export default function HomePage() {
  // Server-side env vars (NOT exposed to browser)
  const dbUrl = process.env.DATABASE_URL;
  const apiKey = process.env.API_SECRET_KEY;
  
  // Public env vars (exposed to browser)
  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  console.log('DB URL:', dbUrl);  // Works on server only
  
  return (
    <div>
      <h1>{appName}</h1>
      <p>API URL: {apiUrl}</p>
      {/* dbUrl and apiKey won't show in browser! */}
    </div>
  );
}

// Using env vars in client components
'use client';

export default function ClientComponent() {
  // Only NEXT_PUBLIC_* variables work in client
  const appName = process.env.NEXT_PUBLIC_APP_NAME;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  // This WON'T work (undefined)
  const secretKey = process.env.API_SECRET_KEY;
  
  return (
    <div>
      <p>App: {appName}</p>
      <p>API: {apiUrl}</p>
    </div>
  );
}

// Using env vars in API routes
// app/api/stripe/route.js
export async function POST() {
  const stripeKey = process.env.STRIPE_API_KEY;
  
  if (!stripeKey) {
    return Response.json({ error: 'Stripe key missing' }, { status: 500 });
  }
  
  // Use stripeKey securely (not exposed to client)
  return Response.json({ success: true });
}

// Using env vars in next.config.js
// next.config.js
module.exports = {
  env: {
    CUSTOM_VAR: process.env.CUSTOM_VAR,
  },
  images: {
    domains: [process.env.IMAGE_DOMAIN],
  },
};

// Validation with Zod (recommended)
// lib/env.js
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  API_SECRET_KEY: z.string().min(1),
  NEXT_PUBLIC_APP_NAME: z.string().optional(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error('Invalid environment variables:', parsedEnv.error);
  throw new Error('Invalid environment variables');
}

export const env = parsedEnv.data;

// .env.example (Commit this file as template)
# Database
DATABASE_URL=postgresql://localhost:5432/mydb

# API Keys
API_SECRET_KEY=your-secret-key-here
STRIPE_API_KEY=sk_test_...

# Public (starts with NEXT_PUBLIC_)
NEXT_PUBLIC_APP_NAME=My App
NEXT_PUBLIC_API_URL=https://api.example.com

# Git rules
# .gitignore
.env
.env.local
.env.production.local
.env.development.local`,
  lineByLine: [
    ".env.local - Local development (git ignored)",
    "process.env.VAR - Access environment variable",
    "NEXT_PUBLIC_ - Prefix exposes to browser",
    "Server components - Can access all env vars",
    "Client components - Only NEXT_PUBLIC_*",
    ".env.example - Template to share"
  ],
  simpleMeaning: "Environment variables store secret keys and configuration separately from code.",
  output: "API keys stay secret. App name shows publicly. Different values for dev/production.",
  note: "Never commit .env.local to git. Use .env.example as template."
}
    ]
  },
  advanced: {
    title: "🚀 Advanced Next.js - Professional Features",
    topics: [
      // ========== 1. SERVER ACTIONS ==========
      {
        name: "1. Server Actions (Data Mutations)",
        description: "Server Actions allow you to run server-side code directly from Client Components without creating API routes. Perfect for form submissions, database operations, and mutations.",
        code: `// app/actions/posts.js
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

// Client Component with form
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
      <input name="title" required />
      <textarea name="content" required />
      <SubmitButton />
    </form>
  );
}

// Optimistic updates
'use client';
import { useOptimistic } from 'react';

export default function Comments({ comments }) {
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment) => [...state, newComment]
  );
  
  async function formAction(formData) {
    const newComment = {
      id: Date.now(),
      text: formData.get('comment'),
      pending: true
    };
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
          "'use server' - Marks file for Server Actions",
          "revalidatePath - Clears cache for routes",
          "redirect - Redirects after success",
          "Zod validation - Validates form data",
          "useFormStatus - Gets form submission status",
          "pending - Shows loading state",
          "useOptimistic - Instant UI updates",
          "form action - Form submits to Server Action"
        ],
        simpleMeaning: "Server Actions let you run database code directly from forms without making API routes.",
        output: "Form submits → validates → saves to database → clears cache → redirects",
        note: "Always validate data on server with Zod. Use useOptimistic for instant UI feedback."
      },
      // ========== 2. MIDDLEWARE (Basic) ==========
      {
        name: "2. Middleware",
        description: "Middleware runs code before a request completes. Perfect for authentication, redirects, geolocation, and A/B testing.",
        code: `// middleware.js
import { NextResponse } from 'next/server';

// Authentication middleware
export function middleware(request) {
  const isLoggedIn = request.cookies.has('auth-token');
  const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');
  
  if (isOnDashboard && !isLoggedIn) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
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

// Middleware matcher
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/((?!_next/static|favicon.ico).*)',
  ],
};`,
        lineByLine: [
          "NextResponse.redirect() - Redirects to another URL",
          "NextResponse.next() - Continues to requested page",
          "request.cookies.has() - Checks for auth cookie",
          "request.geo?.country - Gets user's country",
          "response.headers.set() - Adds custom header",
          "matcher - Controls which routes use middleware"
        ],
        simpleMeaning: "Middleware runs code before pages load. Use it to check if users are logged in or redirect based on location.",
        output: "Unauth users to /dashboard → redirect to /login. /pricing from India → /pricing-in.",
        note: "Keep middleware fast. Use matcher to run only on specific routes."
      },
      // ========== 3. ROUTE HANDLERS ==========
      {
        name: "3. Route Handlers (API Routes)",
        description: "Route Handlers let you create API endpoints within your Next.js app. Perfect for REST APIs, webhooks, and file uploads.",
        code: `// app/api/posts/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') || 10;
  
  const posts = await db.post.findMany({ take: parseInt(limit) });
  return NextResponse.json({ posts });
}

export async function POST(request) {
  const body = await request.json();
  const post = await db.post.create({ data: body });
  return NextResponse.json(post, { status: 201 });
}

// app/api/posts/[id]/route.js
export async function GET(request, { params }) {
  const post = await db.post.findUnique({
    where: { id: parseInt(params.id) }
  });
  
  if (!post) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(post);
}

export async function PUT(request, { params }) {
  const body = await request.json();
  const post = await db.post.update({
    where: { id: parseInt(params.id) },
    data: body
  });
  return NextResponse.json(post);
}

export async function DELETE(request, { params }) {
  await db.post.delete({ where: { id: parseInt(params.id) } });
  return NextResponse.json({ message: 'Deleted' });
}

// Webhook handler
export async function POST(request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');
  
  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }
  
  switch (event.type) {
    case 'checkout.session.completed':
      await handleCheckout(event.data.object);
      break;
  }
  
  return NextResponse.json({ received: true });
}

// File upload handler
export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get('file');
  
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const filename = \`\${Date.now()}-\${file.name}\`;
  const filepath = path.join(process.cwd(), 'public/uploads', filename);
  
  await writeFile(filepath, buffer);
  return NextResponse.json({ url: \`/uploads/\${filename}\` });
}

// Revalidation endpoint
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
          "GET - Fetch data with query parameters",
          "POST - Create new resource",
          "PUT - Update existing resource",
          "DELETE - Remove resource",
          "params.id - Access dynamic route parameter",
          "status: 404 - Not found response",
          "status: 201 - Created response",
          "Webhook - Stripe signature verification",
          "File upload - formData() handling",
          "revalidatePath - On-demand cache clearing"
        ],
        simpleMeaning: "Route handlers create API endpoints in your Next.js app. Use them for CRUD operations, webhooks, and file uploads.",
        output: "GET /api/posts → JSON array. POST /api/posts → creates post. DELETE /api/posts/1 → deletes post.",
        note: "Route handlers run on server, never exposed to client."
      },
      // ========== 4. DYNAMIC METADATA ==========
      {
        name: "4. Dynamic Metadata (generateMetadata)",
        description: "generateMetadata function allows you to dynamically generate SEO metadata based on route parameters or fetched data.",
        code: `// app/blog/[slug]/page.js
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.',
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
    keywords: post.tags,
    robots: {
      index: true,
      follow: true,
    },
  };
}

// app/layout.js (Static metadata)
export const metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'My App',
    template: '%s | My App',
  },
  description: 'My Next.js application',
  openGraph: {
    title: 'My App',
    description: 'My Next.js application',
    url: 'https://example.com',
    siteName: 'My App',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My App',
    description: 'My Next.js application',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
};`,
        lineByLine: [
          "generateMetadata - Async function for dynamic metadata",
          "params - Route parameters from URL",
          "title - Page title for SEO",
          "description - Meta description for search results",
          "openGraph - Facebook/LinkedIn sharing",
          "twitter - X (Twitter) sharing",
          "images - Social sharing image",
          "metadataBase - Base URL for absolute URLs",
          "title.template - Adds suffix to child page titles",
          "robots - Search engine indexing instructions"
        ],
        simpleMeaning: "generateMetadata creates dynamic SEO metadata based on page content, improving search engine visibility.",
        output: "Each blog post has unique title, description, and social sharing image.",
        note: "generateMetadata runs on server only. Use for SEO-critical content."
      },
      // ========== 5. LOADING UI ==========
      {
        name: "5. Loading UI (loading.js)",
        description: "loading.js file creates a loading UI that appears immediately when navigating to a route, automatically using Suspense.",
        code: `// app/dashboard/loading.js
export default function DashboardLoading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      <p className="ml-3 text-gray-600">Loading dashboard...</p>
    </div>
  );
}

// app/blog/[slug]/loading.js (Nested loading)
export default function BlogPostLoading() {
  return (
    <div className="p-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    </div>
  );
}

// app/dashboard/page.js
import { Suspense } from 'react';

async function SlowComponent() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return <div>Slow content loaded!</div>;
}

async function AnotherSlowComponent() {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return <div>Another component loaded!</div>;
}

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<div>Loading widget...</div>}>
        <SlowComponent />
      </Suspense>
      <Suspense fallback={<div>Loading stats...</div>}>
        <AnotherSlowComponent />
      </Suspense>
    </div>
  );
}`,
        lineByLine: [
          "loading.js - Automatic Suspense boundary",
          "animate-spin - CSS spinner animation",
          "animate-pulse - Skeleton loading animation",
          "Suspense - Manual loading boundary",
          "fallback - Shows while content loads",
          "Nested loading - Different loaders for different routes"
        ],
        simpleMeaning: "loading.js shows a loading UI automatically when navigating. Use Suspense for granular loading states.",
        output: "Shows spinner while dashboard loads. Shows skeleton while blog post loads.",
        note: "loading.js is a special file name that Next.js recognizes automatically."
      },
      // ========== 6. ERROR HANDLING ==========
      {
        name: "6. Error Handling (error.js & global-error.js)",
        description: "error.js file handles errors in a route segment. global-error.js handles errors that escape root layout. Errors reset when navigating away.",
        code: `// app/dashboard/error.js
'use client';

export default function DashboardError({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Try again
      </button>
    </div>
  );
}

// app/global-error.js (Root error boundary)
'use client';

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Critical Error!</h2>
          <p className="text-gray-600 mb-4">{error.message}</p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}

// app/api/posts/route.js (API error handling)
export async function GET() {
  try {
    const posts = await fetch('https://api.example.com/posts');
    if (!posts.ok) throw new Error('Failed to fetch');
    return NextResponse.json(await posts.json());
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// Not found handling
import { notFound } from 'next/navigation';

export default async function PostPage({ params }) {
  const post = await getPost(params.id);
  
  if (!post) {
    notFound(); // Shows not-found.js
  }
  
  return <div>{post.title}</div>;
}`,
        lineByLine: [
          "'use client' - Error boundaries must be client components",
          "error prop - The error object thrown",
          "reset prop - Function to recover and retry",
          "global-error.js - Catches errors in root layout",
          "notFound() - Triggers not-found.js page",
          "try/catch - API error handling"
        ],
        simpleMeaning: "error.js handles crashes in components. reset() lets users retry. not-found.js shows 404 pages.",
        output: "Shows error message when component crashes. Reset button retries. 404 page for missing content.",
        note: "Error boundaries don't catch errors in event handlers or async code."
      },
      // ========== 7. NOT FOUND PAGES ==========
      {
        name: "7. Not Found Pages (not-found.js)",
        description: "not-found.js file defines the 404 page shown when a route is not found or notFound() is called.",
        code: `// app/not-found.js
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Go Home
      </Link>
    </div>
  );
}

// app/blog/[slug]/not-found.js (Nested 404 for blog)
export default function BlogNotFound() {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Blog Post Not Found</h2>
      <p className="text-gray-600 mb-4">The blog post you're looking for doesn't exist.</p>
      <Link href="/blog" className="text-blue-500 hover:underline">
        ← Back to Blog
      </Link>
    </div>
  );
}

// Triggering not-found from Server Component
import { notFound } from 'next/navigation';

export default async function PostPage({ params }) {
  const post = await getPost(params.id);
  
  if (!post) {
    notFound(); // Shows closest not-found.js
  }
  
  return <div>{post.title}</div>;
}

// Triggering not-found from API route
export async function GET(request, { params }) {
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
}`,
        lineByLine: [
          "not-found.js - Special file for 404 pages",
          "notFound() - Function to trigger 404",
          "Nested not-found.js - Custom 404 for specific routes",
          "Link to home - Navigation back to safety",
          "API 404 - Returns 404 status code"
        ],
        simpleMeaning: "not-found.js shows a custom 404 page when content isn't found. notFound() triggers it programmatically.",
        output: "Custom 404 page with 'Go Home' button. Blog shows blog-specific 404 message.",
        note: "notFound() stops execution and shows the nearest not-found.js file."
      },
      // ========== 8. PARALLEL ROUTES ==========
      {
        name: "8. Parallel Routes (@folder slots)",
        description: "Parallel routes allow multiple pages to render simultaneously in the same layout using named slots (@folder). Perfect for dashboards, modals, and complex layouts.",
        code: `// Folder structure:
// app/
//   ├── dashboard/
//   │   ├── @analytics/
//   │   │   └── page.js
//   │   ├── @team/
//   │   │   └── page.js
//   │   ├── layout.js
//   │   └── page.js
//   └── layout.js

// app/dashboard/layout.js
export default function DashboardLayout({
  children,
  analytics,
  team,
}) {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      <div className="col-span-2">
        {children}
      </div>
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Analytics</h2>
          {analytics}
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2">Team</h2>
          {team}
        </div>
      </div>
    </div>
  );
}

// app/dashboard/page.js (Default page)
export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard Home</h1>
      <p>Welcome to your dashboard</p>
    </div>
  );
}

// app/dashboard/@analytics/page.js
export default function AnalyticsSlot() {
  return (
    <div>
      <p className="text-3xl font-bold">1,234</p>
      <p className="text-gray-600">Total visitors</p>
    </div>
  );
}

// app/dashboard/@analytics/loading.js
export default function AnalyticsLoading() {
  return <div className="animate-pulse">Loading analytics...</div>;
}

// app/dashboard/@team/page.js
export default function TeamSlot() {
  const team = ['Alice', 'Bob', 'Charlie'];
  
  return (
    <ul className="space-y-2">
      {team.map(member => (
        <li key={member} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
          <span>{member}</span>
        </li>
      ))}
    </ul>
  );
}

// Conditional rendering with default slots
// app/dashboard/@analytics/default.js
export default function DefaultAnalytics() {
  return <div>Analytics not available</div>;
}`,
        lineByLine: [
          "@folder - Named slots for parallel routes",
          "analytics prop - Receives @analytics slot content",
          "team prop - Receives @team slot content",
          "default.js - Fallback when slot has no content",
          "Independent loading states per slot"
        ],
        simpleMeaning: "Parallel routes let you show multiple pages at once in different sections of the same layout.",
        output: "Dashboard shows main content, analytics widget, and team list all at the same time.",
        note: "Use @folder syntax to create named slots. Each slot has its own loading and error states."
      },
      // ========== 9. INTERCEPTING ROUTES ==========
      {
        name: "9. Intercepting Routes ((..) folder syntax)",
        description: "Intercepting routes allow you to load a route from one part of your app while showing a different UI, typically for modals.",
        code: `// Folder structure:
// app/
//   ├── feed/
//   │   ├── page.js
//   │   └── (..)photo/
//   │       └── [id]/
//   │           └── page.js
//   ├── photo/
//   │   └── [id]/
//   │       └── page.js
//   └── layout.js

// Intercepting route conventions:
// (.)       - Same level
// (..)      - One level up
// (..)(..)  - Two levels up
// (...)     - Root level

// app/feed/page.js
import Link from 'next/link';

export default function FeedPage() {
  const photos = [1, 2, 3];
  
  return (
    <div>
      <h1>Photo Feed</h1>
      <div className="grid grid-cols-3 gap-4">
        {photos.map(id => (
          <Link key={id} href={\`/photo/\${id}\`}>
            <div className="aspect-square bg-gray-200 rounded-lg">
              Photo {id}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// app/feed/(..)photo/[id]/page.js (Intercepted modal)
'use client';
import { useRouter } from 'next/navigation';

export default function InterceptedPhotoPage({ params }) {
  const router = useRouter();
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Photo {params.id}</h2>
          <button
            onClick={() => router.back()}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
          Photo content
        </div>
        <p className="mt-4 text-gray-600">This is an intercepted modal!</p>
      </div>
    </div>
  );
}

// app/photo/[id]/page.js (Full page for direct navigation)
export default function PhotoPage({ params }) {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Photo {params.id}</h1>
      <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
        Photo content
      </div>
      <p className="mt-4 text-gray-600">This is the full photo page.</p>
    </div>
  );
}`,
        lineByLine: [
          "(..)photo - Intercepts /photo from one level up",
          "Intercepted route - Shows modal instead of full page",
          "router.back() - Closes modal and returns to feed",
          "Full page - Shows when accessed directly",
          "Fixed inset-0 - Modal overlay styling"
        ],
        simpleMeaning: "Intercepting routes let you show a modal from one part of your app while keeping the original page behind it.",
        output: "Clicking photo from feed shows modal. Direct link to /photo shows full page.",
        note: "Use (..) syntax to specify which route to intercept. Great for modals and previews."
      },
      // ========== 10. ROUTE GROUPS ==========
      {
        name: "10. Route Groups ((folder) for organization)",
        description: "Route groups let you organize routes without affecting the URL path. Perfect for separating marketing, auth, and app routes.",
        code: `// Folder structure:
// app/
//   ├── (marketing)/
//   │   ├── about/
//   │   │   └── page.js    → /about
//   │   ├── pricing/
//   │   │   └── page.js    → /pricing
//   │   └── layout.js
//   ├── (auth)/
//   │   ├── login/
//   │   │   └── page.js    → /login
//   │   ├── register/
//   │   │   └── page.js    → /register
//   │   └── layout.js
//   ├── (dashboard)/
//   │   ├── dashboard/
//   │   │   └── page.js    → /dashboard
//   │   ├── settings/
//   │   │   └── page.js    → /settings
//   │   └── layout.js
//   └── layout.js

// app/(marketing)/layout.js
export default function MarketingLayout({ children }) {
  return (
    <div>
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between">
          <Logo />
          <div className="space-x-4">
            <Link href="/about">About</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          © 2024 My Company
        </div>
      </footer>
    </div>
  );
}

// app/(auth)/layout.js
export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full">
        {children}
      </div>
    </div>
  );
}

// app/(dashboard)/layout.js
export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <aside className="w-64 min-h-screen bg-gray-900 text-white p-4">
        <nav className="space-y-2">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/settings">Settings</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}`,
        lineByLine: [
          "(folder) - Route group, doesn't affect URL",
          "Different layouts per group",
          "/about and /pricing share marketing layout",
          "/login and /register share auth layout",
          "/dashboard and /settings share dashboard layout"
        ],
        simpleMeaning: "Route groups organize code without changing URLs. Each group can have its own layout.",
        output: "/about and /pricing show marketing layout. /login shows centered auth layout. /dashboard shows sidebar dashboard layout.",
        note: "Route group names don't appear in the URL. Use them to organize code logically."
      },
      // ========== 11. MIDDLEWARE FOR I18N ==========
      {
        name: "11. Middleware for i18n (Internationalization)",
        description: "i18n middleware detects user's preferred language and redirects to the correct locale URL.",
        code: `// middleware.js
import { NextResponse } from 'next/server';
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const locales = ['en', 'es', 'fr', 'de'];
const defaultLocale = 'en';

function getLocale(request) {
  const acceptLanguage = request.headers.get('accept-language');
  const headers = { 'accept-language': acceptLanguage };
  const languages = new Negotiator({ headers }).languages();
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(\`/\${locale}/\`) || pathname === \`/\${locale}\`
  );
  
  if (pathnameHasLocale) return NextResponse.next();
  
  const locale = getLocale(request);
  const newUrl = new URL(\`/\${locale}\${pathname}\`, request.url);
  
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|.*\\\\.).*)'],
};

// app/[lang]/layout.js
export default async function LocaleLayout({ children, params }) {
  const { lang } = await params;
  
  return (
    <html lang={lang}>
      <body>
        <nav className="p-4 bg-gray-100">
          <div className="container mx-auto flex justify-between">
            <h1>My App</h1>
            <div className="space-x-2">
              <Link href="/en">English</Link>
              <Link href="/es">Español</Link>
              <Link href="/fr">Français</Link>
              <Link href="/de">Deutsch</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

// app/[lang]/page.js
export default async function HomePage({ params }) {
  const { lang } = await params;
  
  const content = {
    en: { title: 'Welcome', description: 'Hello World!' },
    es: { title: 'Bienvenido', description: '¡Hola Mundo!' },
    fr: { title: 'Bienvenue', description: 'Bonjour le monde!' },
    de: { title: 'Willkommen', description: 'Hallo Welt!' },
  };
  
  const t = content[lang] || content.en;
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
      <p>{t.description}</p>
    </div>
  );
}`,
        lineByLine: [
          "getLocale - Detects user's preferred language",
          "match - Matches against supported locales",
          "pathnameHasLocale - Checks if locale already in URL",
          "redirect - Adds locale to URL",
          "matcher - Excludes static files and API routes"
        ],
        simpleMeaning: "i18n middleware detects user's language and redirects to the correct locale URL.",
        output: "User sees content in their preferred language. Language switcher changes locale.",
        note: "Store translations in JSON files for better organization."
      },
      // ========== 12. MIDDLEWARE FOR A/B TESTING ==========
      {
        name: "12. Middleware for A/B Testing",
        description: "A/B testing middleware randomly assigns users to variants and rewrites to different pages.",
        code: `// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const cookie = request.cookies.get('ab-test');
  const pathname = request.nextUrl.pathname;
  
  if (pathname === '/') {
    let variant = cookie?.value;
    
    if (!variant) {
      variant = Math.random() < 0.5 ? 'control' : 'treatment';
    }
    
    const url = request.nextUrl.clone();
    url.pathname = variant === 'control' ? '/home-control' : '/home-treatment';
    
    const response = NextResponse.rewrite(url);
    
    if (!cookie) {
      response.cookies.set('ab-test', variant, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        httpOnly: true,
      });
    }
    
    return response;
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
};

// app/home-control/page.js
export default function ControlPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome (Control Version)</h1>
      <p className="text-gray-600">This is the original design.</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Sign Up
      </button>
    </div>
  );
}

// app/home-treatment/page.js
export default function TreatmentPage() {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome! (Treatment Version)</h1>
      <p className="text-xl">This is the new experimental design.</p>
      <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition">
        Sign Up Now →
      </button>
    </div>
  );
}`,
        lineByLine: [
          "cookie.get('ab-test') - Reads existing variant",
          "Math.random() < 0.5 - Random 50/50 split",
          "NextResponse.rewrite() - Shows variant content",
          "response.cookies.set() - Persists variant",
          "maxAge - Cookie expiration (30 days)"
        ],
        simpleMeaning: "A/B testing middleware randomly splits users between different versions of your homepage.",
        output: "50% of users see control version. 50% see treatment version. Variant is remembered.",
        note: "Track variant in analytics to measure performance differences."
      },
      // ========== 13. MIDDLEWARE FOR RATE LIMITING ==========
      {
        name: "13. Middleware for Rate Limiting",
        description: "Rate limiting middleware limits how many requests a user can make in a time window.",
        code: `// middleware.js
import { NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'),
  analytics: true,
});

export async function middleware(request) {
  const ip = request.ip ?? '127.0.0.1';
  const { success, limit, reset, remaining } = await ratelimit.limit(ip);
  
  const response = NextResponse.next();
  
  response.headers.set('X-RateLimit-Limit', limit);
  response.headers.set('X-RateLimit-Remaining', remaining);
  response.headers.set('X-RateLimit-Reset', reset);
  
  if (!success) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': Math.ceil((reset - Date.now()) / 1000),
      },
    });
  }
  
  return response;
}

export const config = {
  matcher: ['/api/:path*', '/dashboard/:path*'],
};

// Simple in-memory rate limiter (for development)
const requestCounts = new Map();

export function simpleRateLimit(request) {
  const ip = request.ip || 'unknown';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 100;
  
  const userRequests = requestCounts.get(ip) || [];
  const recentRequests = userRequests.filter(time => now - time < windowMs);
  
  if (recentRequests.length >= maxRequests) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }
  
  recentRequests.push(now);
  requestCounts.set(ip, recentRequests);
  
  return NextResponse.next();
}`,
        lineByLine: [
          "Ratelimit - Upstash rate limiting library",
          "slidingWindow(10, '10 s') - 10 requests per 10 seconds",
          "ip - Unique identifier per user",
          "success - Whether request is allowed",
          "429 status - Too Many Requests",
          "Retry-After - How long to wait"
        ],
        simpleMeaning: "Rate limiting prevents users from making too many requests too quickly.",
        output: "Users can make 10 requests per 10 seconds. Exceeding limit returns 429 error.",
        note: "Use Upstash Redis for production. In-memory works for development only."
      },
      // ========== 14. EDGE RUNTIME ==========
      {
        name: "14. Edge Runtime",
        description: "Edge Runtime runs code on edge servers close to users for extremely fast performance using Web APIs instead of Node.js.",
        code: `// middleware.js (Edge Runtime by default)
export const runtime = 'edge';

export function middleware(request) {
  // Runs on edge - fast, global
  return NextResponse.next();
}

// app/api/hello/route.js (Edge API route)
export const runtime = 'edge';

export async function GET(request) {
  const url = new URL(request.url);
  const name = url.searchParams.get('name') || 'World';
  
  return new Response(\`Hello \${name} from Edge!\`, {
    headers: { 'Content-Type': 'text/plain' },
  });
}

// app/api/geolocation/route.js (Edge with geolocation)
export const runtime = 'edge';

export async function GET(request) {
  const { geo } = request;
  const country = geo?.country || 'US';
  const city = geo?.city || 'Unknown';
  const latitude = geo?.latitude;
  const longitude = geo?.longitude;
  
  return NextResponse.json({
    country,
    city,
    latitude,
    longitude,
    message: \`You are visiting from \${city}, \${country}\`,
  });
}

// app/api/image/og/route.js (Dynamic OG images on Edge)
export const runtime = 'edge';
import { ImageResponse } from '@vercel/og';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'My Website';
  
  return new ImageResponse(
    (
      <div style={{
        fontSize: 60,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
      }}>
        {title}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}`,
        lineByLine: [
          "export const runtime = 'edge' - Sets Edge Runtime",
          "Edge Runtime - Uses Web APIs, not Node.js",
          "request.geo - Geolocation data available",
          "ImageResponse - Generate OG images on edge",
          "Faster responses - Closer to users"
        ],
        simpleMeaning: "Edge Runtime runs code on servers close to users for ultra-fast responses.",
        output: "API responds from edge server near user. Geolocation detects visitor location.",
        note: "Edge Runtime doesn't support Node.js modules like fs, path, etc."
      },
      // ========== 15. ISR (Incremental Static Regeneration) ==========
      {
        name: "15. ISR (Incremental Static Regeneration)",
        description: "ISR allows you to update static pages after they're built without rebuilding the entire site. Pages revalidate in the background.",
        code: `// app/blog/[slug]/page.js
export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  return <div>{post.title}</div>;
}

// Generate static paths at build time
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

// app/products/page.js (ISR with revalidate)
export default async function ProductsPage() {
  const products = await fetch('https://api.example.com/products', {
    next: { revalidate: 60 }, // ISR: revalidate every 60 seconds
  }).then(res => res.json());
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// On-demand revalidation endpoint
// app/api/revalidate/route.js
import { revalidatePath, revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { path, tag, secret } = await request.json();
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
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

// Using revalidatePath from Server Action
'use server';
import { revalidatePath } from 'next/cache';

export async function updateProduct(formData) {
  await db.product.update({
    where: { id: formData.get('id') },
    data: { name: formData.get('name') },
  });
  
  revalidatePath('/products');
  revalidatePath(\`/products/\${formData.get('id')}\`);
}`,
        lineByLine: [
          "revalidate: 60 - ISR, revalidates every 60 seconds",
          "generateStaticParams - Pre-renders pages at build time",
          "On-demand revalidation - Trigger via API",
          "revalidatePath - Clears cache for specific routes",
          "revalidateTag - Clears all fetches with tag"
        ],
        simpleMeaning: "ISR updates static pages in the background after they're built, without full rebuild.",
        output: "Page serves cached version, then updates in background every 60 seconds.",
        note: "ISR combines benefits of static (fast) and dynamic (fresh)."
      },
      // ========== 16. STATIC EXPORTS ==========
      {
        name: "16. Static Exports (output: 'export')",
        description: "Static export generates a fully static site with no server required. Perfect for hosting on CDN, GitHub Pages, or any static host.",
        code: `// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Optional: adds trailing slashes to URLs
};

module.exports = nextConfig;

// Build command:
// npm run build
// Output: out/ folder ready for static hosting

// app/page.js
export default function HomePage() {
  return <h1>Fully Static Site</h1>;
}

// app/blog/[slug]/page.js
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export default function BlogPost({ params }) {
  return <div>{params.slug}</div>;
}

// app/about/page.js (Static page)
export default function AboutPage() {
  return <h1>About Us</h1>;
}

// Deployment to GitHub Pages:
// package.json
{
  "scripts": {
    "build": "next build",
    "export": "next export",
    "deploy": "npm run build && touch out/.nojekyll && gh-pages -d out"
  }
}`,
        lineByLine: [
          "output: 'export' - Enables static export",
          "unoptimized: true - Required for static images",
          "trailingSlash - Optional URL format",
          "generateStaticParams - Pre-renders dynamic pages",
          "out/ folder - Contains static files for hosting"
        ],
        simpleMeaning: "Static export generates HTML files for every page that can be hosted anywhere without a server.",
        output: "Static HTML files generated in out/ folder. Ready for CDN or GitHub Pages.",
        note: "Static export can't use Server Components with dynamic data or API routes."
      },
      // ========== 17. ENVIRONMENT VARIABLES ==========
      {
        name: "17. Environment Variables (.env files)",
        description: "Environment variables store configuration values separate from code for different environments.",
        code: `# .env.local (local development)
DATABASE_URL="postgresql://localhost:5432/mydb"
API_SECRET="my-secret-key"

# .env.production (production)
DATABASE_URL="postgresql://prod.example.com:5432/mydb"
API_SECRET="prod-secret-key"

# .env (default fallback)
NEXT_PUBLIC_API_URL="https://api.example.com"

// Accessing environment variables
// Server Component (can use any env var)
import { db } from '@/lib/db';

export default async function ServerPage() {
  // Server-side only (not exposed to client)
  const dbUrl = process.env.DATABASE_URL;
  const secret = process.env.API_SECRET;
  
  const data = await db.query('SELECT * FROM users');
  return <div>{JSON.stringify(data)}</div>;
}

// Client Component (only NEXT_PUBLIC_* variables)
'use client';

export default function ClientPage() {
  // Only variables with NEXT_PUBLIC_ prefix are exposed
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  
  return <div>API URL: {apiUrl}</div>;
}

// next.config.js (expose additional env vars)
module.exports = {
  env: {
    CUSTOM_VAR: process.env.CUSTOM_VAR,
  },
};

// TypeScript types for environment variables
// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    NEXTAUTH_SECRET: string;
    NEXT_PUBLIC_API_URL: string;
  }
}`,
        lineByLine: [
          ".env.local - Local development variables",
          ".env.production - Production variables",
          "NEXT_PUBLIC_ - Prefix exposes to client",
          "process.env - Access variables",
          "Server Component - Can access all variables",
          "Client Component - Only NEXT_PUBLIC_* variables"
        ],
        simpleMeaning: "Environment variables keep secrets and configuration separate from code.",
        output: "Server uses DATABASE_URL. Client uses NEXT_PUBLIC_API_URL.",
        note: "Never commit .env files to version control. Add to .gitignore."
      },
      // ========== 18. API ROUTES WITH EDGE RUNTIME ==========
      {
        name: "18. API Routes with Edge Runtime",
        description: "Edge API routes run on edge servers close to users for ultra-fast responses using Web APIs.",
        code: `// app/api/edge/hello/route.js
export const runtime = 'edge';

export async function GET(request) {
  return new Response('Hello from Edge!', {
    headers: { 'Content-Type': 'text/plain' },
  });
}

// app/api/edge/json/route.js
export const runtime = 'edge';

export async function GET(request) {
  const data = { message: 'Hello from Edge!', timestamp: Date.now() };
  return Response.json(data);
}

// app/api/edge/geolocation/route.js
export const runtime = 'edge';

export async function GET(request) {
  const { geo, ip, headers } = request;
  
  return Response.json({
    country: geo?.country || 'Unknown',
    city: geo?.city || 'Unknown',
    region: geo?.region || 'Unknown',
    latitude: geo?.latitude,
    longitude: geo?.longitude,
    ip: ip,
    userAgent: headers.get('user-agent'),
  });
}

// app/api/edge/cache/route.js (with caching)
export const runtime = 'edge';

export async function GET(request) {
  const url = new URL(request.url);
  const externalData = await fetch('https://api.example.com/data');
  const data = await externalData.json();
  
  return Response.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
    },
  });
}

// app/api/edge/stream/route.js (Streaming response)
export const runtime = 'edge';

export async function GET() {
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      controller.enqueue(encoder.encode('Starting stream...\\n'));
      await new Promise(resolve => setTimeout(resolve, 1000));
      controller.enqueue(encoder.encode('Chunk 1\\n'));
      await new Promise(resolve => setTimeout(resolve, 1000));
      controller.enqueue(encoder.encode('Chunk 2\\n'));
      await new Promise(resolve => setTimeout(resolve, 1000));
      controller.enqueue(encoder.encode('Done!\\n'));
      controller.close();
    },
  });
  
  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain' },
  });
}`,
        lineByLine: [
          "runtime: 'edge' - Sets Edge Runtime",
          "Response.json() - Returns JSON response",
          "request.geo - Geolocation data",
          "request.ip - Client IP address",
          "Cache-Control - Edge caching headers",
          "ReadableStream - Streaming responses"
        ],
        simpleMeaning: "Edge API routes run on servers close to users for fast, global responses.",
        output: "API responds from edge server. Returns geolocation, cached data, or streaming content.",
        note: "Edge Runtime uses Web APIs, not Node.js. Great for global apps."
      },
      // ========== 19. WEBHOOK HANDLING ==========
      {
        name: "19. Webhook Handling (Stripe, GitHub)",
        description: "Webhook handlers process incoming webhook events from services like Stripe, GitHub, or any third-party API.",
        code: `// app/api/webhooks/stripe/route.js
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');
  
  let event;
  
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    return NextResponse.json(
      { error: \`Webhook Error: \${err.message}\` },
      { status: 400 }
    );
  }
  
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      await handleCheckoutCompleted(session);
      break;
      
    case 'customer.subscription.created':
      const subscription = event.data.object;
      await handleSubscriptionCreated(subscription);
      break;
      
    case 'customer.subscription.updated':
      await handleSubscriptionUpdated(event.data.object);
      break;
      
    case 'customer.subscription.deleted':
      await handleSubscriptionCancelled(event.data.object);
      break;
      
    case 'invoice.payment_succeeded':
      await handlePaymentSuccess(event.data.object);
      break;
      
    default:
      console.log(\`Unhandled event type: \${event.type}\`);
  }
  
  return NextResponse.json({ received: true });
}

// app/api/webhooks/github/route.js
export async function POST(request) {
  const signature = request.headers.get('x-hub-signature-256');
  const body = await request.text();
  
  // Verify webhook signature
  const secret = process.env.GITHUB_WEBHOOK_SECRET;
  const crypto = require('crypto');
  const expectedSignature = 'sha256=' +
    crypto.createHmac('sha256', secret).update(body).digest('hex');
  
  if (signature !== expectedSignature) {
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 401 }
    );
  }
  
  const event = request.headers.get('x-github-event');
  const payload = JSON.parse(body);
  
  switch (event) {
    case 'push':
      await handlePushEvent(payload);
      break;
      
    case 'pull_request':
      await handlePullRequest(payload);
      break;
      
    case 'issues':
      await handleIssueEvent(payload);
      break;
  }
  
  return NextResponse.json({ received: true });
}

// app/api/webhooks/clerk/route.js
export async function POST(request) {
  const payload = await request.json();
  const event = payload.type;
  
  switch (event) {
    case 'user.created':
      await createUser(payload.data);
      break;
      
    case 'user.updated':
      await updateUser(payload.data);
      break;
      
    case 'user.deleted':
      await deleteUser(payload.data.id);
      break;
  }
  
  return NextResponse.json({ success: true });
}

// Helper functions for webhook handling
async function handleCheckoutCompleted(session) {
  await db.order.update({
    where: { stripeSessionId: session.id },
    data: { status: 'paid' },
  });
  
  await sendConfirmationEmail(session.customer_email);
}

async function handlePushEvent(payload) {
  const branch = payload.ref.split('/').pop();
  const repo = payload.repository.name;
  
  // Trigger deployment or rebuild
  await fetch(process.env.DEPLOYMENT_HOOK_URL, {
    method: 'POST',
    body: JSON.stringify({ branch, repo }),
  });
}`,
        lineByLine: [
          "webhook.constructEvent - Verifies Stripe signature",
          "switch(event.type) - Handle different event types",
          "x-hub-signature-256 - GitHub webhook signature",
          "crypto.createHmac - Verifies GitHub signature",
          "x-github-event - GitHub event type header"
        ],
        simpleMeaning: "Webhook handlers process real-time events from external services like Stripe payments or GitHub pushes.",
        output: "Stripe webhook updates order status. GitHub webhook triggers deployment.",
        note: "Always verify webhook signatures for security. Keep webhook URLs secret."
      },
      // ========== 20. FILE UPLOADS ==========
      {
        name: "20. File Uploads (formData() handling)",
        description: "File upload handling in Next.js using FormData API. Supports single and multiple files with validation.",
        code: `// app/api/upload/route.js
import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
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
  
  // Validate file type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json(
      { error: 'Invalid file type. Only JPEG, PNG, WEBP allowed.' },
      { status: 400 }
    );
  }
  
  // Validate file size (5MB limit)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    return NextResponse.json(
      { error: 'File too large. Max 5MB.' },
      { status: 400 }
    );
  }
  
  // Generate unique filename
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const timestamp = Date.now();
  const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
  const filename = \`\${timestamp}-\${safeName}\`;
  
  // Ensure upload directory exists
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  await mkdir(uploadDir, { recursive: true });
  
  // Save file
  const filepath = path.join(uploadDir, filename);
  await writeFile(filepath, buffer);
  
  const fileUrl = \`/uploads/\${filename}\`;
  
  return NextResponse.json({
    url: fileUrl,
    filename,
    size: file.size,
    type: file.type,
  });
}

// Multiple file upload
export async function POSTMultiple(request) {
  const formData = await request.formData();
  const files = formData.getAll('files');
  
  const uploadResults = [];
  
  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = \`\${Date.now()}-\${file.name}\`;
    const filepath = path.join(process.cwd(), 'public', 'uploads', filename);
    
    await writeFile(filepath, buffer);
    
    uploadResults.push({
      url: \`/uploads/\${filename}\`,
      filename: file.name,
      size: file.size,
    });
  }
  
  return NextResponse.json({ files: uploadResults });
}

// Client Component with upload form
'use client';
import { useState } from 'react';

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(null);
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      const data = await res.json();
      console.log('Upload successful:', data);
      alert('File uploaded!');
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          className="block w-full text-sm text-gray-500"
        />
      </div>
      
      {preview && (
        <div>
          <img src={preview} alt="Preview" className="max-w-xs rounded" />
        </div>
      )}
      
      <button
        type="submit"
        disabled={!file || uploading}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </form>
  );
}`,
        lineByLine: [
          "request.formData() - Parses multipart form data",
          "file.type - Validates file MIME type",
          "file.size - Validates file size",
          "file.arrayBuffer() - Gets file data",
          "mkdir recursive - Creates directory if needed",
          "writeFile - Saves file to disk"
        ],
        simpleMeaning: "File upload API handles image uploads with validation, saves to public folder, and returns URLs.",
        output: "User selects file, sees preview, uploads, gets URL back. File saved to /public/uploads.",
        note: "Always validate file type and size for security. Use env vars for upload limits."
      },
      // ========== 21. AUTHENTICATION WITH NEXTAUTH ==========
      {
        name: "21. Authentication with NextAuth",
        description: "NextAuth.js provides complete authentication solution with OAuth providers, email/password, JWT sessions, and database adapters. It supports Google, GitHub, Facebook, Apple, and 100+ providers out of the box.",
        code: `// Install dependencies:
// npm install next-auth @auth/prisma-adapter @prisma/client bcryptjs

// app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    // OAuth Providers
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // Email/Password Provider
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }
        
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        
        if (!user || !user.password) {
          throw new Error('Invalid credentials');
        }
        
        const isValid = await bcrypt.compare(credentials.password, user.password);
        
        if (!isValid) {
          throw new Error('Invalid credentials');
        }
        
        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/login',
    signUp: '/register',
    error: '/auth/error',
    verifyRequest: '/auth/verify',
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return \`\${baseUrl}\${url}\`;
      if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

// app/login/page.js (Login Page)
'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    
    if (result?.error) {
      setError('Invalid email or password');
      setLoading(false);
    } else {
      router.push('/dashboard');
      router.refresh();
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <h2 className="text-center text-3xl font-bold">Sign In</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
            className="w-full py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Sign in with Google
          </button>
          
          <button
            onClick={() => signIn('github', { callbackUrl: '/dashboard' })}
            className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900"
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}

// app/register/page.js (Registration Page)
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import bcrypt from 'bcryptjs';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password: hashedPassword }),
    });
    
    if (res.ok) {
      router.push('/login?registered=true');
    } else {
      const data = await res.json();
      setError(data.error || 'Registration failed');
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <h2 className="text-center text-3xl font-bold">Create Account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password (min 6 characters)"
              required
              minLength={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
}

// app/api/auth/register/route.js (Registration API)
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password required' },
        { status: 400 }
      );
    }
    
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }
    
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    
    return NextResponse.json(
      { message: 'User created successfully', userId: user.id },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// app/dashboard/page.js (Protected Page)
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect('/login');
  }
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p>Welcome, {session.user.name}!</p>
      <p>Email: {session.user.email}</p>
      <p>Role: {session.user.role || 'User'}</p>
    </div>
  );
}

// components/AuthProvider.js
'use client';
import { SessionProvider } from 'next-auth/react';

export default function AuthProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

// app/layout.js (Wrap with provider)
import AuthProvider from '@/components/AuthProvider';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

// middleware.js (Protected routes)
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(request) {
    const token = request.nextauth.token;
    const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
    
    if (isAdminRoute && token?.role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
    
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*', '/profile/:path*'],
};`,
        lineByLine: [
          "NextAuth - Complete authentication solution with 100+ providers",
          "GoogleProvider - OAuth authentication with Google",
          "GitHubProvider - OAuth authentication with GitHub",
          "CredentialsProvider - Email/password authentication",
          "PrismaAdapter - Database adapter for storing users",
          "bcrypt - Password hashing for security",
          "session.strategy: 'jwt' - JWT-based sessions",
          "callbacks.jwt - Custom JWT token data",
          "callbacks.session - Custom session data",
          "withAuth - Middleware for protected routes",
          "getServerSession - Get session in Server Components"
        ],
        simpleMeaning: "NextAuth provides complete authentication with Google, GitHub, and email/password login.",
        output: "Users can sign in with Google, GitHub, or email/password. Protected routes require authentication.",
        note: "Always store passwords hashed with bcrypt. Use environment variables for client secrets."
      },

      // ========== 22. MIDDLEWARE WITH UPSTASH REDIS ==========
      {
        name: "22. Middleware with Upstash Redis",
        description: "Upstash Redis provides serverless Redis for rate limiting, caching, sessions, and real-time data in middleware with Edge Runtime support.",
        code: `// Install:
// npm install @upstash/redis @upstash/ratelimit

// middleware.js
import { NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

// Rate limiter: 10 requests per 10 seconds
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '10 s'),
  analytics: true,
});

// Session store
const sessionStore = new Map();

export async function middleware(request) {
  const ip = request.ip ?? '127.0.0.1';
  const pathname = request.nextUrl.pathname;
  
  // Rate limiting for API routes
  if (pathname.startsWith('/api/')) {
    const { success, limit, reset, remaining } = await ratelimit.limit(ip);
    
    const response = NextResponse.next();
    response.headers.set('X-RateLimit-Limit', limit);
    response.headers.set('X-RateLimit-Remaining', remaining);
    response.headers.set('X-RateLimit-Reset', reset);
    
    if (!success) {
      return new NextResponse('Too Many Requests', {
        status: 429,
        headers: {
          'Retry-After': Math.ceil((reset - Date.now()) / 1000),
        },
      });
    }
    
    return response;
  }
  
  // Cache page responses
  if (pathname === '/') {
    const cachedResponse = await redis.get('cached:homepage');
    
    if (cachedResponse) {
      return new NextResponse(cachedResponse, {
        headers: { 'Content-Type': 'text/html' },
      });
    }
  }
  
  return NextResponse.next();
}

// app/api/redis/cache/route.js
import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

const redis = Redis.fromEnv();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');
  
  const value = await redis.get(key);
  return NextResponse.json({ key, value });
}

export async function POST(request) {
  const { key, value, ttl } = await request.json();
  
  if (ttl) {
    await redis.setex(key, ttl, value);
  } else {
    await redis.set(key, value);
  }
  
  return NextResponse.json({ success: true });
}

// app/api/redis/leaderboard/route.js
export async function POST(request) {
  const { userId, score } = await request.json();
  
  await redis.zadd('leaderboard', { score, member: userId });
  
  return NextResponse.json({ success: true });
}

export async function GET(request) {
  const topScores = await redis.zrange('leaderboard', 0, 9, { rev: true });
  const userRank = await redis.zrank('leaderboard', 'user123');
  
  return NextResponse.json({ topScores, userRank });
}`,
        lineByLine: [
          "Upstash Redis - Serverless Redis for edge",
          "Ratelimit.slidingWindow - Rate limiting",
          "redis.get/set - Cache operations",
          "redis.setex - Cache with TTL",
          "redis.zadd - Sorted set for leaderboards",
          "redis.zrange - Get top scores"
        ],
        simpleMeaning: "Upstash Redis provides rate limiting, caching, and real-time data in middleware.",
        output: "API routes rate-limited. Homepage cached. Leaderboard with user rankings.",
        note: "Upstash Redis works on Edge Runtime. Free tier available."
      },
      // /data/nextjs/learning.js (Additional Advanced Topics - COMPLETE)

      // ========== 23. NEXT.JS WITH DOCKER ==========
      {
        name: "23. Next.js with Docker",
        description: "Docker containerizes Next.js applications for consistent deployment across environments. Multi-stage builds optimize image size, and production setup includes standalone output for minimal containers.",
        code: `# Dockerfile
# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Stage 3: Runner (Production)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]

# docker-compose.yml
version: '3.8'

services:
  nextjs-app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://postgres:password@db:5432/mydb
      - NEXTAUTH_URL=http://localhost:3000
      - NEXTAUTH_SECRET=your-secret-here
    depends_on:
      - db
      - redis
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=mydb
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:

# next.config.js
module.exports = {
  output: 'standalone',
},

# .dockerignore
node_modules
.next
.git
.env.local`,
        lineByLine: [
          "Multi-stage build - Reduces final image size",
          "Alpine Linux - Minimal base image",
          "standalone output - Self-contained production build",
          "docker-compose - Orchestrates multiple services",
          "Non-root user - Security best practice"
        ],
        simpleMeaning: "Docker packages Next.js app with all dependencies for consistent deployment anywhere.",
        output: "Containerized app runs on port 3000 with PostgreSQL and Redis.",
        note: "Use standalone output for smallest production images."
      },

      // ========== 24. NEXT.JS MONOREPO (Turborepo) ==========
      {
        name: "24. Next.js Monorepo (Turborepo)",
        description: "Turborepo manages multiple Next.js apps and shared packages in a single repository with caching and parallel execution.",
        code: `# Folder structure:
# apps/web/ (Next.js app)
# packages/ui/ (Shared components)
# packages/types/ (Shared TypeScript)

// pnpm-workspace.yaml
packages:
  - "apps/*"
  - "packages/*"

// turbo.json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}

// apps/web/package.json
{
  "name": "web",
  "dependencies": {
    "@repo/ui": "workspace:*",
    "@repo/types": "workspace:*"
  }
}

// packages/ui/Button.tsx
export const Button = ({ children, onClick }) => (
  <button onClick={onClick} className="btn-primary">
    {children}
  </button>
);

// package.json (root)
{
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build"
  },
  "packageManager": "pnpm@8.0.0"
}`,
        lineByLine: [
          "Turborepo - Build system for monorepos",
          "workspace:* - References local packages",
          "turbo.json - Defines pipeline and caching",
          "pnpm-workspace.yaml - Workspace structure"
        ],
        simpleMeaning: "Monorepo manages multiple Next.js apps and shared packages in one repository.",
        output: "Multiple apps share UI components and types. Turbo caches builds for speed.",
        note: "Use pnpm for faster installs. Turborepo caches build outputs."
      },

      // ========== 25. NEXT.JS WITH GRAPHQL ==========
      {
        name: "25. Next.js with GraphQL (Apollo)",
        description: "GraphQL provides type-safe data fetching with Apollo Client. Supports SSR, SSG, and client-side queries.",
        code: `// Install: npm install @apollo/client graphql

// lib/apollo-client.js
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// app/providers.js
'use client';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/lib/apollo-client';

export function ApolloWrapper({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

// graphql/queries.js
import { gql } from '@apollo/client';

export const GET_POSTS = gql\`
  query GetPosts {
    posts {
      id
      title
      content
      author { name }
    }
  }
\`;

export const CREATE_POST = gql\`
  mutation CreatePost($title: String!, $content: String!) {
    createPost(title: $title, content: $content) {
      id
      title
    }
  }
\`;

// app/posts/page.js (Server Component)
import { client } from '@/lib/apollo-client';
import { GET_POSTS } from '@/graphql/queries';

async function getPosts() {
  const { data } = await client.query({
    query: GET_POSTS,
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });
  return data;
}

export default async function PostsPage() {
  const data = await getPosts();
  
  return (
    <div>
      {data.posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}`,
        lineByLine: [
          "Apollo Client - GraphQL client for React",
          "gql - Template literal for GraphQL queries",
          "useQuery - Hook for fetching data",
          "useMutation - Hook for modifying data",
          "generateStaticParams - Static generation with GraphQL"
        ],
        simpleMeaning: "GraphQL provides type-safe data fetching with Apollo Client.",
        output: "Posts fetched with GraphQL queries. Mutations create/update posts.",
        note: "Use codegen for TypeScript types. Apollo Client caches normalized data."
      },

      // ========== 26. NEXT.JS TESTING (JEST & PLAYWRIGHT) ==========
      {
        name: "26. Next.js Testing (Jest & Playwright)",
        description: "Jest tests components and logic. Playwright tests end-to-end user flows across browsers.",
        code: `// Install:
// npm install -D jest @testing-library/react @testing-library/jest-dom
// npm install -D @playwright/test

// jest.config.js
const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: './' });

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);

// jest.setup.js
import '@testing-library/jest-dom';

// __tests__/components/Button.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '@/components/Button';

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });
  
  it('handles click events', async () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click</Button>);
    await userEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  use: { baseURL: 'http://localhost:3000' },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  ],
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
  },
});

// e2e/homepage.spec.ts
import { test, expect } from '@playwright/test';

test('homepage loads', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/My App/);
  await expect(page.getByText('Welcome')).toBeVisible();
});

test('login flow', async ({ page }) => {
  await page.goto('/login');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/dashboard');
});`,
        lineByLine: [
          "Jest - Unit testing framework",
          "React Testing Library - Component testing",
          "Playwright - E2E testing across browsers",
          "jest.mock - Mock dependencies",
          "userEvent - Simulate user interactions",
          "waitFor - Async assertions"
        ],
        simpleMeaning: "Jest tests components and logic. Playwright tests full user journeys.",
        output: "Components render correctly. Forms validate input. E2E flows work across browsers.",
        note: "Run tests in CI. Use Playwright trace viewer for debugging."
      },

      // ========== 27. NEXT.JS CI/CD PIPELINE ==========
      {
        name: "27. Next.js CI/CD Pipeline (GitHub Actions)",
        description: "CI/CD pipeline automates testing, building, and deployment of Next.js applications.",
        code: "# .github/workflows/ci.yml\nname: CI\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  lint-and-test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n          cache: 'npm'\n      \n      - run: npm ci\n      - run: npm run lint\n      - run: npm run test\n      - run: npm run build\n\n  e2e:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      \n      - run: npm ci\n      - run: npx playwright install --with-deps\n      - run: npm run build\n      - run: npm run test:e2e\n      \n      - uses: actions/upload-artifact@v4\n        if: failure()\n        with:\n          name: playwright-report\n          path: playwright-report/\n\n# .github/workflows/cd.yml\nname: CD\n\non:\n  push:\n    branches: [main]\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      \n      - run: npm ci\n      - run: npm run build\n      \n      - name: Deploy to Vercel\n        run: npx vercel --prod --token=${{ secrets.VERCEL_TOKEN }}\n      \n      - name: Deploy to AWS\n        run: |\n          aws ecr get-login-password | docker login --username AWS --password-stdin ${{ secrets.AWS_ACCOUNT }}.dkr.ecr.us-east-1.amazonaws.com\n          docker build -t nextjs-app .\n          docker tag nextjs-app:latest ${{ secrets.AWS_ACCOUNT }}.dkr.ecr.us-east-1.amazonaws.com/nextjs-app:latest\n          docker push ${{ secrets.AWS_ACCOUNT }}.dkr.ecr.us-east-1.amazonaws.com/nextjs-app:latest",
        lineByLine: [
          "GitHub Actions - CI/CD automation",
          "on.push - Triggers on code push",
          "npm ci - Clean install dependencies",
          "Upload artifact - Save test reports",
          "Vercel deployment - Automatic deploy",
          "AWS ECR - Container registry"
        ],
        simpleMeaning: "CI/CD pipeline automatically tests and deploys Next.js apps when code changes.",
        output: "Linting passes. Tests pass. Build succeeds. App deploys to Vercel/AWS.",
        note: "Store secrets in GitHub Secrets. Use environment-specific variables."
      }
    ]
  }
};

export const nextExplanations = learning;