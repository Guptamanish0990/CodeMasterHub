// /data/nextjs/interview.js

export const interview = {
  fresher: [
    // ========== BASICS & INTRODUCTION (1-10) ==========
    {
      question: "What is Next.js and why is it used?",
      answer: "Next.js is a React framework that provides server-side rendering, static site generation, file-based routing, API routes, and built-in optimizations. It solves React's SEO and performance limitations by rendering pages on the server.",
      example: `// Create a Next.js app
npx create-next-app@latest my-app
cd my-app
npm run dev

// Basic page component
export default function Home() {
  return <h1>Hello Next.js!</h1>
}`,
      output: "Server starts at http://localhost:3000, shows 'Hello Next.js!'",
      note: "Next.js 13+ uses App Router. Features include automatic code splitting, image optimization, and fast refresh."
    },
    {
      question: "What is the difference between App Router and Pages Router?",
      answer: "App Router (Next.js 13+) uses the 'app' directory with nested folders for routes, Server Components by default, and layouts. Pages Router uses 'pages' directory with file-based routing but doesn't support Server Components.",
      example: `// App Router: app/page.js
export default function Home() {
  return <h1>Home</h1>
}

// Pages Router: pages/index.js
export default function Home() {
  return <h1>Home</h1>
}

// App Router nested: app/blog/[slug]/page.js
export default function BlogPost({ params }) {
  return <h1>Post: {params.slug}</h1>
}`,
      output: "Both render '/', but App Router offers better performance and features",
      note: "App Router is recommended for new projects. Both can coexist in the same project."
    },
    {
      question: "What is file-based routing in Next.js?",
      answer: "File-based routing means folders and files in the 'app' directory automatically become routes. Each folder creates a route segment, and page.js files define the actual page content.",
      example: `// Folder structure:
// app/
//   page.js → '/'
//   about/
//     page.js → '/about'
//   blog/
//     [slug]/
//       page.js → '/blog/:slug'
//   dashboard/
//     layout.js
//     page.js → '/dashboard'

// app/about/page.js
export default function AboutPage() {
  return <h1>About Us</h1>
}`,
      output: "Creating app/about/page.js automatically creates route at /about",
      note: "No manual routing configuration needed. Use [param] for dynamic routes."
    },
    {
      question: "What are layouts in Next.js?",
      answer: "Layouts are components that wrap multiple pages and persist across navigation. The root layout (app/layout.js) wraps every page. Nested layouts wrap specific sections.",
      example: `// app/layout.js (Root Layout)
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

// app/dashboard/layout.js (Nested Layout)
export default function DashboardLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
}`,
      output: "Header and footer appear on every page. Sidebar appears only on dashboard routes.",
      note: "Layouts don't re-render on navigation, improving performance."
    },
    {
      question: "How do you navigate between pages in Next.js?",
      answer: "Use the Link component for client-side navigation without full page reloads. Link automatically prefetches linked pages for faster transitions.",
      example: `import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Using Link component
export default function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog/hello">Blog Post</Link>
    </nav>
  );
}

// Programmatic navigation
function LoginButton() {
  const router = useRouter();
  return <button onClick={() => router.push('/dashboard')}>Login</button>;
}`,
      output: "Clicking links navigates instantly without page reload",
      note: "Use 'replace' prop to prevent back navigation. Link automatically prefetches when visible."
    },
    {
      question: "What is the Image component in Next.js?",
      answer: "Next.js Image component automatically optimizes images: lazy loading, responsive sizing, modern formats (WebP), and prevents layout shift. It replaces traditional img tags.",
      example: `import Image from 'next/image';
import profilePic from './profile.jpg';

// Local image
export default function Avatar() {
  return <Image src={profilePic} alt="Profile" width={200} height={200} />;
}

// Remote image (requires config)
export default function Hero() {
  return (
    <Image
      src="https://example.com/hero.jpg"
      alt="Hero"
      width={1200}
      height={600}
      priority
    />
  );
}`,
      output: "Images load lazily, automatically resized, and optimized",
      note: "Always specify width/height or use 'fill' prop. Configure remotePatterns in next.config.js."
    },
    {
      question: "How do you add global CSS in Next.js?",
      answer: "Import global CSS in the root layout file (app/layout.js). Global CSS applies to all components and can't be imported in other files.",
      example: `// app/globals.css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: #f5f5f5;
}

// app/layout.js
import './globals.css';

export default function RootLayout({ children }) {
  return <html><body>{children}</body></html>;
}`,
      output: "Styles apply to entire application",
      note: "For component-scoped styles, use CSS Modules (*.module.css) instead."
    },
    {
      question: "What are CSS Modules in Next.js?",
      answer: "CSS Modules automatically generate unique class names for each component, preventing style conflicts. File names end with .module.css and styles are imported as objects.",
      example: `// app/components/Button.module.css
.button {
  background: blue;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}

.primary {
  background: blue;
}

.secondary {
  background: gray;
}

// app/components/Button.js
import styles from './Button.module.css';

export default function Button({ variant = 'primary' }) {
  return <button className={styles[variant]}>Click me</button>;
}`,
      output: "Generated class names like Button_primary_abc123, no conflicts",
      note: "CSS Modules are scoped to the component by default. Use camelCase for class names."
    },
    {
      question: "What is the Script component in Next.js?",
      answer: "Script component optimizes loading of third-party scripts with configurable loading strategies: beforeInteractive (critical), afterInteractive (default), lazyOnload (non-critical).",
      example: `import Script from 'next/script';

export default function AnalyticsPage() {
  return (
    <>
      {/* Critical - loads before page interactive */}
      <Script
        src="https://www.googletagmanager.com/gtag/js"
        strategy="beforeInteractive"
      />
      
      {/* Normal - loads after page */}
      <Script src="https://example.com/chat.js" strategy="afterInteractive" />
      
      {/* Non-critical - loads during idle time */}
      <Script src="https://example.com/tracker.js" strategy="lazyOnload" />
      
      <h1>My Page</h1>
    </>
  );
}`,
      output: "Analytics loads first, chat loads after page, tracker loads when idle",
      note: "Inline scripts need 'id' prop. Use onLoad and onError callbacks for monitoring."
    },
    {
      question: "How do you create a 404 page in Next.js?",
      answer: "Create a not-found.js file in the app directory. It renders when a route doesn't match or when notFound() is called.",
      example: `// app/not-found.js
export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/">Go back home</a>
    </div>
  );
}

// Using notFound() in a page
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    notFound(); // Shows 404 page
  }
  
  return <div>{post.title}</div>;
}`,
      output: "Shows custom 404 page when route doesn't exist",
      note: "You can have route-specific not-found pages in nested folders."
    },

    // ========== DATA FETCHING (11-20) ==========
    {
      question: "How do you fetch data in Server Components?",
      answer: "Server Components can use async/await directly with fetch. Data is fetched on the server and only the result is sent to the client.",
      example: `// app/page.js (Server Component)
export default async function PostsPage() {
  // Data fetched on server
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json());
  
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

// With loading state
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostsList />
    </Suspense>
  );
}`,
      output: "HTML with posts data is sent to client, no client-side data fetching needed",
      note: "Server Components can't use useState or useEffect. Perfect for data fetching."
    },
    {
      question: "What is the difference between fetch cache options?",
      answer: "Default (force-cache) caches forever. 'no-store' never caches. revalidate updates cache after specified seconds. 'no-cache' always fetches but doesn't store.",
      example: `// Default - cached forever
const data1 = await fetch(url);

// No caching - always fresh
const data2 = await fetch(url, { cache: 'no-store' });

// Revalidate every 60 seconds (ISR)
const data3 = await fetch(url, { next: { revalidate: 60 } });

// On-demand revalidation with tags
const data4 = await fetch(url, { next: { tags: ['posts'] } });

// Always fetch, don't cache
const data5 = await fetch(url, { cache: 'no-cache' });`,
      output: "Different caching behaviors based on use case: blog posts (revalidate), live scores (no-store)",
      note: "Fetch options are ignored in Client Components. Use React Query or SWR there."
    },
    {
      question: "What is Incremental Static Regeneration (ISR)?",
      answer: "ISR allows static pages to be updated after build without rebuilding the entire site. Pages regenerate in the background when revalidation time passes.",
      example: `// app/blog/[slug]/page.js
export default async function BlogPost({ params }) {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`, {
    next: { revalidate: 60 } // Regenerate every 60 seconds
  }).then(res => res.json());
  
  return <div>{post.content}</div>;
}

// Or in Pages Router
export async function getStaticProps() {
  const data = await fetch('...');
  return {
    props: { data },
    revalidate: 60 // seconds
  };
}`,
      output: "First request serves cached page, then regenerates in background every 60 seconds",
      note: "ISR combines benefits of static (fast) with fresh data. Great for blogs, e-commerce."
    },
    {
      question: "What is on-demand revalidation?",
      answer: "On-demand revalidation uses revalidateTag or revalidatePath to manually trigger cache invalidation after data updates, like when content is edited in a CMS.",
      example: `// app/actions/revalidate.js
'use server';
import { revalidateTag, revalidatePath } from 'next/cache';

// Revalidate by tag
export async function updatePost(formData) {
  await db.post.update(...);
  revalidateTag('posts'); // Revalidates all 'posts' tagged fetches
}

// Revalidate by path
export async function publishPost(formData) {
  await db.post.publish(...);
  revalidatePath('/blog'); // Revalidates /blog
  revalidatePath('/blog/[slug]', 'page'); // Revalidates dynamic routes
}

// In your component
const data = await fetch(url, { next: { tags: ['posts'] } });`,
      output: "Cache clears instantly when content updates, not waiting for time-based revalidation",
      note: "Perfect for CMS integration, webhooks, and real-time content updates."
    },
    {
      question: "How do you create loading states in Next.js?",
      answer: "Create a loading.js file that wraps page content with Suspense. Shows immediately while the page fetches data.",
      example: `// app/blog/loading.js
export default function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading blog posts...</p>
    </div>
  );
}

// app/blog/page.js
export default async function BlogPage() {
  // Simulate slow data fetch
  const posts = await fetch('https://api.example.com/posts', {
    next: { revalidate: 60 }
  }).then(res => res.json());
  
  return (
    <div>
      {posts.map(post => <PostCard key={post.id} post={post} />)}
    </div>
  );
}

// For specific components
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense fallback={<CommentsSkeleton />}>
      <Comments />
    </Suspense>
  );
}`,
      output: "Shows loading spinner while fetching, then displays content",
      note: "loading.js creates route-level loading. Use Suspense for component-level loading."
    },
    {
      question: "What is parallel data fetching and why use it?",
      answer: "Parallel fetching starts multiple requests simultaneously using Promise.all, significantly reducing total load time compared to sequential fetching.",
      example: `// Sequential (slow)
export default async function SequentialPage() {
  const users = await fetch('/api/users').then(res => res.json());
  const posts = await fetch('/api/posts').then(res => res.json());
  // Total time = users time + posts time
}

// Parallel (fast)
export default async function ParallelPage() {
  // Start both requests simultaneously
  const usersPromise = fetch('/api/users').then(res => res.json());
  const postsPromise = fetch('/api/posts').then(res => res.json());
  
  // Wait for both
  const [users, posts] = await Promise.all([usersPromise, postsPromise]);
  // Total time = max(users time, posts time)
  
  return (
    <div>
      <UserList users={users} />
      <PostList posts={posts} />
    </div>
  );
}`,
      output: "Parallel fetching is 2-5x faster than sequential for multiple requests",
      note: "Works in Server Components and Client Components. Be careful with rate limits."
    },
    {
      question: "How do you handle errors in Next.js data fetching?",
      answer: "Create an error.js file to catch errors in a route segment. It wraps page content and shows when fetch or rendering throws.",
      example: `// app/blog/error.js
'use client'; // Error boundaries must be client components

export default function Error({ error, reset }) {
  return (
    <div className="error-container">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}

// app/blog/page.js
export default async function BlogPage() {
  // If this throws, error.js shows
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json());
  
  return <div>{posts.map(post => <Post key={post.id} post={post} />)}</div>;
}

// With try/catch in Server Component
export default async function Page() {
  try {
    const data = await fetch(url);
    return <div>{data}</div>;
  } catch (error) {
    return <div>Failed to load: {error.message}</div>;
  }
}`,
      output: "Shows friendly error UI instead of crashing the app",
      note: "error.js must be a client component. reset() tries to re-render the route."
    },
    {
      question: "What is route interception in Next.js?",
      answer: "Route interception allows loading a route within the current layout while showing the actual route when navigated directly. Uses (..) syntax similar to relative paths.",
      example: `// Folder structure:
// app/
//   feed/
//     page.js (feed page)
//   (..)photo/
//     [id]/
//       page.js (intercepted photo modal)

// app/feed/page.js
import Link from 'next/link';

export default function FeedPage() {
  return (
    <div>
      {photos.map(photo => (
        <Link href={\`/photo/\${photo.id}\`}>
          <img src={photo.thumbnail} />
        </Link>
      ))}
    </div>
  );
}

// app/(..)photo/[id]/page.js (modal)
export default function PhotoModal({ params }) {
  return (
    <div className="modal">
      <img src={\`/photos/\${params.id}\`} />
      <button>Close</button>
    </div>
  );
}`,
      output: "Clicking photo opens modal on /feed, navigating directly to /photo/:id shows full page",
      note: "(..) goes up one level, (...) goes to root, (..)(..) goes up two levels."
    },
    {
      question: "What are route groups and when to use them?",
      answer: "Route groups (folders in parentheses) organize routes without affecting URL. Useful for different layouts for same URL segment or organizing related routes.",
      example: `// Folder structure:
// app/
//   (marketing)/
//     layout.js (different header/footer)
//     about/
//       page.js → /about
//     contact/
//       page.js → /contact
//   (shop)/
//     layout.js (shop layout)
//     products/
//       page.js → /products
//     cart/
//       page.js → /cart
//   (auth)/
//     layout.js (no header, centered form)
//     login/
//       page.js → /login
//     register/
//       page.js → /register

// app/(auth)/layout.js
export default function AuthLayout({ children }) {
  return (
    <div className="auth-container">
      {children}
    </div>
  );
}`,
      output: "Different layouts for different sections, same URLs",
      note: "Route groups don't affect URL. Great for organizing large apps and conditional layouts."
    },
    {
      question: "What is parallel routing?",
      answer: "Parallel routing uses named slots (@folder) to render multiple pages simultaneously in the same layout. Each slot maintains its own navigation state.",
      example: `// Folder structure:
// app/
//   dashboard/
//     @analytics/
//       page.js (analytics widget)
//     @team/
//       page.js (team widget)
//     @notifications/
//       page.js (notifications widget)
//     layout.js (renders all slots)
//     page.js (default content)

// app/dashboard/layout.js
export default function DashboardLayout({
  children,
  analytics,
  team,
  notifications
}) {
  return (
    <div className="dashboard-grid">
      <div className="main">{children}</div>
      <div className="sidebar">
        {team}
        {analytics}
        {notifications}
      </div>
    </div>
  );
}`,
      output: "Multiple independent sections on the same page, each can navigate independently",
      note: "Each slot gets its own navigation state. Useful for dashboards with multiple widgets."
    },

    // ========== OPTIMIZATION & BEST PRACTICES (21-30) ==========
    {
      question: "What is automatic code splitting in Next.js?",
      answer: "Next.js automatically splits your code by routes, only loading JavaScript needed for the current page. This reduces initial page load time significantly.",
      example: `// Each page gets its own bundle
// app/page.js → page.js bundle (only loads on /)
// app/about/page.js → about.js bundle (only loads on /about)
// app/dashboard/page.js → dashboard.js bundle (only loads on /dashboard)

// Dynamic imports for component-level splitting
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false // Optional: disable SSR for this component
});

export default function Page() {
  return (
    <div>
      <HeavyComponent /> {/* Only loads when needed */}
    </div>
  );
}`,
      output: "Only loads JavaScript for the current page, faster initial load",
      note: "Also supports lazy loading for heavy components with dynamic imports."
    },
    {
      question: "How does prefetching work in Next.js?",
      answer: "Next.js automatically prefetches linked pages when they come into view. This makes navigation nearly instant. Prefetching happens in production only.",
      example: `import Link from 'next/link';

// Links prefetch by default when visible
export default function Navigation() {
  return (
    <nav>
      {/* Prefetches /about when this link is visible */}
      <Link href="/about">About</Link>
      
      {/* Disable prefetching */}
      <Link href="/heavy-page" prefetch={false}>
        Heavy Page
      </Link>
      
      {/* Programmatic prefetch */}
      <button onClick={() => router.prefetch('/dashboard')}>
        Prefetch Dashboard
      </button>
    </nav>
  );
}

// Router prefetch
'use client';
import { useRouter } from 'next/navigation';

function Component() {
  const router = useRouter();
  
  useEffect(() => {
    router.prefetch('/dashboard'); // Prefetch programmatically
  }, []);
}`,
      output: "Links load instantly when clicked because they're already downloaded",
      note: "Prefetching loads the page JavaScript, not the data. Use sparingly for heavy pages."
    },
    {
      question: "What is the Metadata API in Next.js?",
      answer: "Metadata API helps manage SEO by setting page titles, descriptions, Open Graph, and other head tags. Can be static or dynamic.",
      example: `// app/page.js (Static metadata)
export const metadata = {
  title: 'Home Page',
  description: 'Welcome to my site',
  openGraph: {
    title: 'Home Page',
    description: 'Welcome to my site',
    images: ['https://example.com/og-image.jpg']
  }
};

// app/blog/[slug]/page.js (Dynamic metadata)
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage]
    }
  };
}

// Template for consistent titles
export const metadata = {
  title: {
    default: 'My App',
    template: '%s | My App' // Blog Post | My App
  }
};`,
      output: "Sets SEO-friendly titles and descriptions for each page",
      note: "Metadata is server-side only. Use generateMetadata for dynamic content."
    },
    {
      question: "How do you handle redirects in Next.js?",
      answer: "Redirects can be done in next.config.js for permanent redirects, middleware for conditional redirects, or server actions for post-submit redirects.",
      example: `// next.config.js (static redirects)
module.exports = {
  redirects: async () => [
    {
      source: '/old-blog/:slug',
      destination: '/blog/:slug',
      permanent: true, // 301 redirect
    },
    {
      source: '/about',
      destination: '/company/about',
      permanent: false, // 302 redirect
    }
  ]
};

// Middleware (conditional redirects)
// middleware.js
export function middleware(request) {
  const token = request.cookies.get('token');
  
  if (!token && request.nextUrl.pathname.startsWith('/dashboard')) {
    return Response.redirect(new URL('/login', request.url));
  }
}

// Server Action redirect
'use server';
import { redirect } from 'next/navigation';

export async function createPost(formData) {
  await db.post.create(formData);
  redirect('/posts'); // Redirect after success
}

// Client-side redirect
'use client';
import { useRouter } from 'next/navigation';

function Component() {
  const router = useRouter();
  router.push('/dashboard'); // Navigate
  router.replace('/login'); // Replace history
}`,
      output: "Redirects based on conditions: static paths, authentication, form submission",
      note: "Use permanent: true for SEO-friendly 301 redirects. Server Actions redirect throws an error if used outside try/catch."
    },
    {
      question: "What are rewrites in Next.js?",
      answer: "Rewrites map an incoming request to a different destination without changing the browser URL. Useful for proxying API requests, A/B testing, or vanity URLs.",
      example: `// next.config.js
module.exports = {
  async rewrites() {
    return [
      // Proxy API requests
      {
        source: '/api/:path*',
        destination: 'https://external-api.com/:path*',
      },
      // Vanity URL
      {
        source: '/discord',
        destination: 'https://discord.gg/invite',
      },
      // A/B testing
      {
        source: '/product/:slug',
        destination: \`/product/:slug/\${Math.random() < 0.5 ? 'a' : 'b'}\`,
      },
      // Path rewrites
      {
        source: '/blog/:slug',
        destination: '/news/:slug', // /blog/hello → /news/hello without URL change
      }
    ];
  }
};

// Conditional rewrites
module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'user-agent',
            value: '.*mobile.*',
          },
        ],
        destination: '/mobile/:path*',
      },
    ];
  }
};`,
      output: "URL stays same but content comes from different source",
      note: "Rewrites don't change browser URL. Great for API proxying and vanity URLs."
    },
    {
      question: "How do you handle environment variables in Next.js?",
      answer: "Next.js supports .env files with different environments. Variables prefixed with NEXT_PUBLIC_ are exposed to the browser; others are server-only.",
      example: `# .env.local (local development)
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_API_URL="https://api.example.com"
SECRET_KEY="super-secret"

# .env.production (production)
DATABASE_URL="postgresql://prod..."
NEXT_PUBLIC_API_URL="https://api.prod.com"

# Using env vars
// app/page.js (server component)
const dbUrl = process.env.DATABASE_URL; // Server-only, safe
const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Exposed to browser

// app/components/ClientComponent.jsx (client component)
'use client';
// Can only access NEXT_PUBLIC_ vars
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// next.config.js for build-time vars
module.exports = {
  env: {
    CUSTOM_VAR: process.env.CUSTOM_VAR,
  },
};`,
      output: "Server variables stay on server, public variables available in browser",
      note: "Never put secrets in NEXT_PUBLIC_ variables. Use .env.local for local development."
    },
    {
      question: "What is the difference between client-side and server-side rendering in Next.js?",
      answer: "Server Components render on server (send HTML), Client Components render on client (hydrate with JavaScript). Server-side rendering generates HTML on each request; static generation builds at build time.",
      example: `// Server Component (default)
// Renders on server → sends HTML
export default async function ServerPage() {
  const data = await fetch(url); // Server-only
  return <div>{data}</div>;
}

// Client Component
'use client'; // Hydrates on client
export default function ClientPage() {
  const [count, setCount] = useState(0); // Browser API
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// Static Generation (build time)
export default function StaticPage() {
  return <div>Built at compile time</div>;
}

// Server-Side Rendering (request time)
export default async function SSRHPage() {
  const data = await fetch(url, { cache: 'no-store' });
  return <div>{data}</div>;
}`,
      output: "Server: faster initial load, better SEO. Client: interactivity, state",
      note: "Use Server Components by default, Client Components only for interactivity."
    },
    {
      question: "How do you implement authentication in Next.js?",
      answer: "Common approaches: NextAuth.js for OAuth, custom JWT with middleware for route protection, or server sessions with cookies.",
      example: `// NextAuth.js setup
// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

const handler = NextAuth({
  providers: [
    GithubProvider({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET })
  ]
});
export { handler as GET, handler as POST };

// Middleware protection
// middleware.js
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: { signIn: "/login" }
});

export const config = { matcher: ["/dashboard/:path*"] };

// Getting session in server component
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession();
  if (!session) return <div>Not logged in</div>;
  return <div>Welcome {session.user.name}</div>;
}`,
      output: "Authenticated users access protected routes, others redirect to login",
      note: "Always protect sensitive routes with middleware. Store sessions securely."
    },
    {
      question: "What is middleware and what can it do?",
      answer: "Middleware runs code before requests complete. It can redirect, rewrite, add headers, check authentication, handle geolocation, and perform A/B testing.",
      example: `// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token');
  const { pathname } = request.nextUrl;
  
  // Authentication
  if (pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // Geolocation
  const country = request.geo?.country;
  if (country === 'IN' && pathname === '/pricing') {
    return NextResponse.rewrite(new URL('/pricing-in', request.url));
  }
  
  // Add headers
  const response = NextResponse.next();
  response.headers.set('x-country', country);
  
  return response;
}

// Configure matcher
export const config = {
  matcher: ['/dashboard/:path*', '/pricing']
};`,
      output: "Runs on every matching request before page renders",
      note: "Middleware runs on edge runtime. Keep it fast, avoid heavy operations."
    },
    {
      question: "How do you deploy a Next.js application?",
      answer: "Next.js apps deploy to Vercel (recommended), Netlify, AWS Amplify, or any Node.js hosting. For static export, use 'output: export' in next.config.js.",
      example: `// next.config.js for static export
module.exports = {
  output: 'export', // Generates static HTML (disables SSR/ISR)
  images: { unoptimized: true },
};

// package.json scripts
{
  "scripts": {
    "dev": "next dev",          // Development
    "build": "next build",      // Production build
    "start": "next start",      // Start production server
    "export": "next export"     // Static export
  }
}

// Deploy to Vercel
// 1. Push to GitHub
// 2. Import project on vercel.com
// 3. Automatic deployments on every push

// Deploy to self-hosted
// npm run build
// npm run start

// Environment variables in production
// Set on Vercel dashboard or .env.production`,
      output: "App runs in production with automatic optimizations",
      note: "Vercel provides automatic ISR, preview deployments, and environment variables."
    },

    // ========== ADVANCED CONCEPTS (31-40) ==========
    {
      question: "What is the difference between export const dynamic and revalidate?",
      answer: "export const dynamic controls entire page caching behavior. revalidate sets ISR timing for individual fetch calls. dynamic overrides page-level caching strategies.",
      example: `// app/page.js

// Force dynamic (no cache, like getServerSideProps)
export const dynamic = 'force-dynamic';

// Force static (build-time only)
export const dynamic = 'force-static';

// Auto (default - caches with optional revalidate)
export const dynamic = 'auto';

// Stop static generation during build
export const dynamicParams = false; // 404 for unknown paths

// Combined with fetch revalidate
export default async function Page() {
  const data = await fetch(url, { next: { revalidate: 60 } });
  return <div>{data}</div>;
}

// Using generateStaticParams for static paths
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());
  return posts.map(post => ({ slug: post.slug }));
}`,
      output: "force-dynamic: never caches. force-static: caches forever. auto: defaults",
      note: "dynamic overrides fetch cache settings at page level."
    },
    {
      question: "What are generateStaticParams and generateMetadata?",
      answer: "generateStaticParams pre-generates static paths for dynamic routes at build time. generateMetadata dynamically creates SEO metadata for each page.",
      example: `// app/blog/[slug]/page.js

// Generate static paths at build time
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json());
  
  return posts.map(post => ({
    slug: post.slug
  }));
  // Returns: [{ slug: 'hello-world' }, { slug: 'nextjs-guide' }, ...]
}

// Generate dynamic metadata
export async function generateMetadata({ params }) {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`)
    .then(res => res.json());
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      images: [post.coverImage]
    }
  };
}

// Page component
export default async function BlogPost({ params }) {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`)
    .then(res => res.json());
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}`,
      output: "All blog posts generated at build time with proper SEO metadata",
      note: "generateStaticParams only works with dynamic = 'force-static' or default (cached)."
    },
    {
      question: "How do you use middleware for internationalization (i18n)?",
      answer: "Middleware detects user's preferred language from headers and redirects to the appropriate locale URL, setting the language cookie.",
      example: `// middleware.js
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
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(\`/\${locale}/\`) || pathname === \`/\${locale}\`
  );
  
  if (pathnameHasLocale) return NextResponse.next();
  
  const locale = getLocale(request);
  const newUrl = new URL(\`/\${locale}\${pathname}\`, request.url);
  
  const response = NextResponse.redirect(newUrl);
  response.cookies.set('NEXT_LOCALE', locale);
  
  return response;
}

export const config = { matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'] };`,
      output: "/about → /en/about (English user) or /es/about (Spanish user)",
      note: "Store locale in cookie to persist across navigation. Use next/navigation for client-side i18n."
    },
    {
      question: "What is Edge Runtime and when to use it?",
      answer: "Edge Runtime runs code globally on Vercel's edge network, closer to users. It's faster but has limitations (no Node.js APIs). Use for middleware, API routes, and lightweight operations.",
      example: `// middleware.js (runs on edge by default)
export function middleware(request) {
  // No Node.js APIs available
  // Use Web APIs instead (fetch, Request, Response)
}

// Edge API route
// app/api/edge/route.js
export const runtime = 'edge';

export async function GET(request) {
  const url = new URL(request.url);
  const name = url.searchParams.get('name') || 'World';
  
  // Fast, global execution
  return new Response(\`Hello \${name} from Edge!\`, {
    headers: { 'Content-Type': 'text/plain' }
  });
}

// Edge Server Component
// app/edge-page/page.js
export const runtime = 'edge';

export default async function Page() {
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();
  
  return <div>{json.message}</div>;
}`,
      output: "Faster responses globally but limited Node.js functionality",
      note: "Edge Runtime can't use fs, path, crypto (Node), or database drivers. Use for simple operations."
    },
    {
      question: "What are Server Actions and how do they differ from API routes?",
      answer: "Server Actions are functions marked with 'use server' that run on the server when called from forms or client components. API routes are explicit endpoints. Server Actions integrate more naturally with forms.",
      example: `// Server Action (integrated)
// app/actions/create-post.js
'use server';

import { revalidatePath } from 'next/cache';

export async function createPost(formData) {
  const title = formData.get('title');
  const content = formData.get('content');
  
  await db.post.create({ data: { title, content } });
  revalidatePath('/posts');
}

// Using Server Action in form
// app/components/CreatePostForm.jsx
'use client';
import { createPost } from '@/actions/create-post';

export default function Form() {
  return (
    <form action={createPost}>
      <input name="title" />
      <textarea name="content" />
      <button type="submit">Submit</button>
    </form>
  );
}

// Equivalent API Route
// app/api/posts/route.js
export async function POST(request) {
  const body = await request.json();
  await db.post.create({ data: body });
  revalidatePath('/posts');
  return Response.json({ success: true });
}`,
      output: "Server Actions integrate directly with forms, no fetch needed",
      note: "Server Actions work without JavaScript enabled. Use for mutations, not data fetching."
    },
    {
      question: "How do you implement optimistic updates with Server Actions?",
      answer: "useOptimistic hook updates UI immediately while Server Action runs in background. Provides instant feedback before server confirms.",
      example: `// app/components/Comments.jsx
'use client';
import { useOptimistic, useRef } from 'react';
import { addComment } from '@/actions/comments';

export default function Comments({ comments, postId }) {
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (state, newComment) => [...state, newComment]
  );
  const formRef = useRef();
  
  async function formAction(formData) {
    const text = formData.get('comment');
    const tempId = Date.now();
    
    // Optimistic update (instant UI)
    addOptimisticComment({
      id: tempId,
      text,
      pending: true
    });
    
    formRef.current.reset();
    
    // Actual server action
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
}`,
      output: "Comment appears instantly, then saves in background",
      note: "Show pending state visually. Implement rollback if server action fails."
    },
    {
      question: "What is next/head and how is it different from Metadata API?",
      answer: "next/head is a legacy way to add elements to <head>. Metadata API (recommended) provides better TypeScript support, automatic deduplication, and works with Server Components.",
      example: `// Legacy: next/head (Pages Router or App Router with 'use client')
import Head from 'next/head';

export default function Page() {
  return (
    <>
      <Head>
        <title>My Page Title</title>
        <meta name="description" content="Page description" />
      </Head>
      <div>Content</div>
    </>
  );
}

// Modern: Metadata API (App Router, recommended)
// app/page.js (Server Component)
export const metadata = {
  title: 'My Page Title',
  description: 'Page description',
  openGraph: {
    title: 'My Page Title',
    images: ['/og-image.jpg']
  }
};

// Dynamic metadata
export async function generateMetadata({ params }) {
  const data = await fetchData(params.id);
  return { title: data.title };
}`,
      output: "Both add head elements, Metadata API is more powerful and type-safe",
      note: "Use Metadata API for new projects. next/head requires 'use client' in App Router."
    },
    {
      question: "How do you handle forms in Next.js?",
      answer: "Next.js supports traditional HTML forms with Server Actions, client forms with useState, or third-party libraries like react-hook-form.",
      example: `// Server Action Form (no JS needed)
// app/actions/contact.js
'use server';

export async function submitContact(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  
  await db.contact.create({ data: { name, email } });
  revalidatePath('/contact');
  redirect('/thank-you');
}

// app/contact/page.js
import { submitContact } from '@/actions/contact';

export default function ContactForm() {
  return (
    <form action={submitContact}>
      <input name="name" required />
      <input name="email" type="email" required />
      <button type="submit">Submit</button>
    </form>
  );
}

// Client State Form (with validation)
'use client';
import { useState } from 'react';

export default function ClientForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    if (res.ok) router.push('/thank-you');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
      <button type="submit">Submit</button>
    </form>
  );
}`,
      output: "Server Actions work without JS, client forms provide better UX",
      note: "Server Actions are progressive enhanced. Use Zod for validation on server."
    },
    {
      question: "What is ISR vs SSR vs SSG?",
      answer: "SSG builds at compile time (fastest, static). SSR renders on each request (dynamic, slower). ISR builds statically but regenerates periodically (best of both).",
      example: `// SSG (Static Site Generation)
// Build once, serve same HTML forever
export default function StaticPage() {
  return <div>Built at build time</div>;
}

// SSR (Server-Side Rendering)
// Renders on every request
export default async function ServerPage() {
  const data = await fetch(url, { cache: 'no-store' });
  return <div>{data}</div>;
}

// ISR (Incremental Static Regeneration)
// Static but updates periodically
export default async function ISRPage() {
  const data = await fetch(url, { next: { revalidate: 60 } });
  return <div>{data}</div>;
}

// With generateStaticParams + ISR
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());
  return posts.map(post => ({ id: post.id }));
}

export default async function PostPage({ params }) {
  const post = await fetch(\`https://api.example.com/posts/\${params.id}\`, {
    next: { revalidate: 3600 } // Regenerate hourly
  }).then(res => res.json());
  
  return <div>{post.title}</div>;
}`,
      output: "SSG: fastest but static. SSR: dynamic but slower. ISR: fast + updates",
      note: "Choose based on data freshness needs: SSG (never changes), ISR (changes occasionally), SSR (real-time)."
    },
    {
      question: "How do you implement search functionality in Next.js?",
      answer: "Search can be client-side (filtering in browser), server-side (API with database query), or hybrid using URL params for shareable searches.",
      example: `// Client-side search (small dataset)
'use client';
import { useState } from 'react';

export default function ClientSearch({ posts }) {
  const [query, setQuery] = useState('');
  const filtered = posts.filter(post => 
    post.title.toLowerCase().includes(query.toLowerCase())
  );
  
  return (
    <>
      <input onChange={e => setQuery(e.target.value)} placeholder="Search..." />
      {filtered.map(post => <div key={post.id}>{post.title}</div>)}
    </>
  );
}

// Server-side search (large dataset)
// app/search/page.js
export default async function SearchPage({ searchParams }) {
  const query = searchParams.q;
  
  const results = await fetch(
    \`https://api.example.com/search?q=\${encodeURIComponent(query)}\`,
    { next: { revalidate: 60 } }
  ).then(res => res.json());
  
  return (
    <>
      <form action="/search" method="GET">
        <input name="q" defaultValue={query} />
        <button type="submit">Search</button>
      </form>
      {results.map(result => <div key={result.id}>{result.title}</div>)}
    </>
  );
}

// Search API endpoint
// app/api/search/route.js
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');
  
  const results = await db.post.findMany({
    where: {
      OR: [
        { title: { contains: q, mode: 'insensitive' } },
        { content: { contains: q, mode: 'insensitive' } }
      ]
    },
    take: 20
  });
  
  return Response.json(results);
}`,
      output: "Client-side: instant but limited. Server-side: scalable but slower",
      note: "For large datasets, use server-side search with database full-text search."
    },

    // ========== PERFORMANCE & DEPLOYMENT (41-50) ==========
    {
      question: "What is hybrid rendering in Next.js?",
      answer: "Hybrid rendering means using different rendering strategies for different pages within the same app: static for marketing, ISR for blogs, SSR for dashboards.",
      example: `// app/page.js (Static - marketing page)
export default function HomePage() {
  return <div>Marketing content</div>;
}

// app/blog/[slug]/page.js (ISR - blog posts)
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());
  return posts.map(post => ({ slug: post.slug }));
}

export default async function BlogPost({ params }) {
  const post = await fetch(\`https://api.example.com/posts/\${params.slug}\`, {
    next: { revalidate: 3600 } // ISR: regenerate hourly
  }).then(res => res.json());
  
  return <div>{post.content}</div>;
}

// app/dashboard/page.js (SSR - user-specific)
export default async function DashboardPage() {
  const session = await getServerSession();
  const userData = await fetch(\`https://api.example.com/users/\${session.user.id}\`, {
    cache: 'no-store' // SSR: fresh on every request
  }).then(res => res.json());
  
  return <div>Welcome {userData.name}</div>;
}`,
      output: "Different pages optimized for their specific use case",
      note: "Mix and match strategies within same app for optimal performance."
    },
    {
      question: "How do you optimize bundle size in Next.js?",
      answer: "Use dynamic imports for heavy components, analyze bundle with @next/bundle-analyzer, and tree-shake unused code.",
      example: `// next.config.js for bundle analysis
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});

// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false // Don't render on server
});

const MarkdownEditor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false // Client-side only
});

// Lazy load libraries
const { format } = await import('date-fns');

// Code splitting with next/dynamic
const AdminPanel = dynamic(() => import('../components/AdminPanel'), {
  loading: () => <p>Loading admin panel...</p>
});

export default function Page({ userRole }) {
  if (userRole === 'admin') {
    return <AdminPanel />; // Only loaded for admins
  }
  return <div>User view</div>;
}`,
      output: "Smaller initial bundle, faster page loads",
      note: "Use bundle analyzer to identify large dependencies. Prefer dynamic imports for route-based splitting."
    },
    {
      question: "What is stale-while-revalidate in Next.js?",
      answer: "Stale-while-revalidate serves cached content immediately while fetching fresh data in background. Implemented via SWR hook or fetch with revalidate.",
      example: `// Using fetch with revalidate (Server Component)
export default async function Page() {
  // Serves cached data, refreshes every 60 seconds
  const data = await fetch(url, { 
    next: { revalidate: 60 } 
  }).then(res => res.json());
  
  return <div>{data.value}</div>;
}

// Using SWR hook (Client Component)
'use client';
import useSWR from 'swr';

function Profile() {
  const { data, error, isLoading } = useSWR('/api/user', fetcher, {
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshInterval: 60000, // Revalidate every minute
    fallbackData: cachedData // Show cached data immediately
  });
  
  if (isLoading) return <div>Loading...</div>;
  return <div>Hello {data.name}!</div>;
}

// Custom SWR configuration
const { data } = useSWR('/api/data', fetcher, {
  dedupingInterval: 2000, // Avoid duplicate requests
  errorRetryCount: 3,      // Retry on error
  onError: (error) => console.error('Failed:', error)
});`,
      output: "Shows cached data immediately, updates in background",
      note: "SWR is great for client-side data that updates frequently."
    },
    {
      question: "How do you implement real-time features in Next.js?",
      answer: "Use WebSockets, Server-Sent Events (SSE), or polling with SWR. For real-time data, consider Pusher, Socket.io, or Vercel's Edge Config.",
      example: `// Client-side WebSocket
'use client';
import { useEffect, useState } from 'react';

export default function RealTimeChat() {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    const ws = new WebSocket('wss://api.example.com/chat');
    
    ws.onmessage = (event) => {
      setMessages(prev => [...prev, JSON.parse(event.data)]);
    };
    
    return () => ws.close();
  }, []);
  
  return <div>{messages.map(msg => <div key={msg.id}>{msg.text}</div>)}</div>;
}

// Polling with SWR
'use client';
import useSWR from 'swr';

export default function LiveData() {
  const { data } = useSWR('/api/live-data', fetcher, {
    refreshInterval: 1000, // Poll every second
    revalidateOnFocus: false
  });
  
  return <div>Current value: {data?.value}</div>;
}

// Server-Sent Events API route
// app/api/sse/route.js
export const runtime = 'edge';

export async function GET() {
  const stream = new ReadableStream({
    start(controller) {
      const interval = setInterval(() => {
        const data = { timestamp: Date.now(), value: Math.random() };
        controller.enqueue(\`data: \${JSON.stringify(data)}\\n\\n\`);
      }, 1000);
      
      // Cleanup
      return () => clearInterval(interval);
    }
  });
  
  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    }
  });
}`,
      output: "Live updates without page refresh",
      note: "For production, consider using Pusher, Ably, or Supabase Realtime."
    },
    {
      question: "How do you handle large image galleries in Next.js?",
      answer: "Use next/image with lazy loading, implement pagination or infinite scroll, and serve optimized thumbnails.",
      example: `// Image gallery with pagination
'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Gallery({ initialImages }) {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState(initialImages);
  
  const loadMore = async () => {
    const res = await fetch(\`/api/images?page=\${page + 1}\`);
    const newImages = await res.json();
    setImages([...images, ...newImages]);
    setPage(page + 1);
  };
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map(img => (
        <div key={img.id} className="relative aspect-square">
          <Image
            src={img.thumbnailUrl}
            alt={img.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      ))}
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}

// API route with pagination
// app/api/images/route.js
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = 12;
  
  const images = await db.image.findMany({
    skip: (page - 1) * limit,
    take: limit,
    orderBy: { createdAt: 'desc' }
  });
  
  return Response.json(images);
}`,
      output: "Efficiently loads thousands of images without performance issues",
      note: "Always provide width/height or use fill. Use sizes attribute for responsive."
    },
    {
      question: "What is the purpose of next.config.js?",
      answer: "next.config.js configures Next.js behavior: redirects, rewrites, image domains, environment variables, webpack customization, and build settings.",
      example: `// next.config.js
/** @type {import('next').NextConfig} */
module.exports = {
  // Image configuration
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.example.com' }
    ],
    domains: ['localhost'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96]
  },
  
  // Redirects
  async redirects() {
    return [
      { source: '/old-blog/:slug', destination: '/blog/:slug', permanent: true }
    ];
  },
  
  // Rewrites
  async rewrites() {
    return [
      { source: '/api/:path*', destination: 'https://external-api.com/:path*' }
    ];
  },
  
  // Environment variables (build-time)
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY
  },
  
  // Webpack customization
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  
  // Build output (static export)
  output: 'export',
  
  // Internationalization
  i18n: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en'
  }
};`,
      output: "Central configuration for all Next.js features",
      note: "Changes to next.config.js require server restart."
    },
    {
      question: "How do you implement pagination in Next.js?",
      answer: "Pagination can be cursor-based (infinite scroll), offset-based (page numbers), or URL parameter-based (shareable).",
      example: `// URL-based pagination (shareable)
// app/products/page.js
export default async function ProductsPage({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const limit = 12;
  
  const { products, total } = await fetch(
    \`https://api.example.com/products?page=\${page}&limit=\${limit}\`,
    { next: { revalidate: 60 } }
  ).then(res => res.json());
  
  const totalPages = Math.ceil(total / limit);
  
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
      
      <div className="pagination">
        {page > 1 && <Link href={\`/products?page=\${page - 1}\`}>Previous</Link>}
        <span>Page {page} of {totalPages}</span>
        {page < totalPages && <Link href={\`/products?page=\${page + 1}\`}>Next</Link>}
      </div>
    </div>
  );
}

// Cursor-based (infinite scroll)
'use client';
import { useState } from 'react';
import useSWRInfinite from 'swr/infinite';

export default function InfiniteScroll() {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.nextCursor) return null;
    return \`/api/products?cursor=\${previousPageData?.nextCursor || ''}\`;
  };
  
  const { data, size, setSize, isLoading } = useSWRInfinite(getKey, fetcher);
  const products = data ? [].concat(...data.map(d => d.products)) : [];
  
  return (
    <div>
      {products.map(product => <ProductCard key={product.id} product={product} />)}
      {isLoading && <div>Loading...</div>}
      <button onClick={() => setSize(size + 1)}>Load More</button>
    </div>
  );
}`,
      output: "Efficiently loads large datasets in chunks",
      note: "Use URL params for SEO-friendly pagination, infinite scroll for feeds."
    },
    {
      question: "How do you use custom fonts in Next.js?",
      answer: "Next.js provides next/font for automatic optimization, self-hosting, and preventing layout shift. Supports Google Fonts, local fonts, and variable fonts.",
      example: `// app/layout.js - Google Font
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // FOIT/FOUT handling
  variable: '--font-inter', // CSS variable
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// Local font
import localFont from 'next/font/local';

const myFont = localFont({
  src: './fonts/MyFont.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-myfont'
});

// Multiple weights
const myFontBold = localFont({
  src: './fonts/MyFont-Bold.woff2',
  weight: '700',
});

// Using in component with CSS variable
export default function Page() {
  return (
    <div style={{ fontFamily: 'var(--font-inter)' }}>
      <p className={robotoMono.className}>Monospace text</p>
      <p className={myFont.className}>Custom font text</p>
    </div>
  );
}`,
      output: "Fonts load efficiently with zero layout shift",
      note: "next/font automatically downloads and self-hosts fonts. No external requests needed."
    },
    {
      question: "What is Turbopack and how to enable it?",
      answer: "Turbopack is Next.js's Rust-based bundler, faster than Webpack for development. Enable with --turbo flag.",
      example: `// package.json scripts
{
  "scripts": {
    "dev": "next dev --turbo", // Enable Turbopack
    "dev:webpack": "next dev", // Fallback to Webpack
    "build": "next build"
  }
}

// Next.js 13+ supports Turbopack
// Features: Faster HMR (Hot Module Replacement)
// Better performance for large apps

// Run dev with Turbopack
npm run dev -- --turbo
// or
next dev --turbo

// Configuration (not needed, works out of box)
// Turbopack respects next.config.js

// Known limitations (varies by version)
// - Some Webpack plugins may not work
// - Custom Webpack config may break`,
      output: "Faster development server, faster refresh, better performance",
      note: "Turbopack is experimental but stable for most apps. Keep Webpack fallback for production builds."
    },
    {
      question: "How do you implement authentication with middleware?",
      answer: "Middleware checks authentication before protected routes, redirects to login, and can refresh tokens or add custom headers.",
      example: `// middleware.js
import { NextResponse } from 'next/server';

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Public routes (no auth needed)
  const publicRoutes = ['/', '/login', '/register', '/about', '/api/public'];
  if (publicRoutes.some(route => pathname === route || pathname.startsWith('/api/public'))) {
    return NextResponse.next();
  }
  
  // Get token - can be cookie, header, or session
  const token = request.cookies.get('auth-token')?.value;
  const session = request.cookies.get('session')?.value;
  
  // API routes protection
  if (pathname.startsWith('/api')) {
    if (!token && !session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.next();
  }
  
  // Dashboard and protected pages
  if (!token && !session) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }
  
  // Optional: Verify token with auth service
  try {
    const isValid = await verifyToken(token);
    if (!isValid) {
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('auth-token');
      return response;
    }
  } catch (error) {
    console.error('Auth error:', error);
  }
  
  // Add user info to headers
  const response = NextResponse.next();
  response.headers.set('x-user-id', userId);
  response.headers.set('x-user-role', userRole);
  
  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)']
};`,
      output: "Protected routes inaccessible without authentication, redirect to login",
      note: "Always validate tokens on server. Use HTTP-only cookies for security."
    },
    {
      question: "What is the difference between middleware and redirects?",
      answer: "Redirects are static mappings in next.config.js for permanent/simple redirects. Middleware runs code for conditional, dynamic redirects based on request data.",
      example: `// next.config.js (static redirects - better for SEO, faster)
module.exports = {
  redirects: async () => [
    // Simple, permanent redirects
    { source: '/old-page', destination: '/new-page', permanent: true },
    { source: '/blog/:slug', destination: '/posts/:slug', permanent: true },
  ]
};

// middleware.js (dynamic redirects - conditional, based on request)
export function middleware(request) {
  const token = request.cookies.get('token');
  const { pathname } = request.nextUrl;
  
  // Conditional redirect based on auth
  if (!token && pathname === '/dashboard') {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // Redirect based on geolocation
  const country = request.geo?.country;
  if (country === 'IN' && pathname === '/pricing') {
    return NextResponse.redirect(new URL('/pricing-in', request.url));
  }
  
  // A/B test redirect
  const abTest = request.cookies.get('ab-test');
  if (pathname === '/' && !abTest) {
    const variant = Math.random() < 0.5 ? 'a' : 'b';
    return NextResponse.redirect(new URL(\`/?variant=\${variant}\`, request.url));
  }
}`,
      output: "Redirects: fast, static, SEO-friendly. Middleware: dynamic, conditional",
      note: "Use redirects for permanent moves (301), middleware for conditional logic (302)."
    },

    // ========== ADDITIONAL FRESHER QUESTIONS (51-60) ==========
    {
      question: "What is fast refresh in Next.js?",
      answer: "Fast Refresh preserves component state while editing React components. It's Next.js's hot reloading feature that instantly applies changes without losing component state.",
      example: `// During development, editing this component
export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

// When you save changes:
// - Component updates instantly
// - Count value stays the same (state preserved)
// - No browser refresh needed

// Error recovery
// If you introduce a syntax error, Next.js shows error overlay
// Fix the error, save, and component recovers without losing state

// Works with:
// - React components (preserves state)
// - CSS, CSS Modules, Tailwind
// - JSX changes
// - Custom hooks`,
      output: "Instant updates without losing state, no full page reload",
      note: "Fast Refresh works in development only. Production uses traditional refresh."
    },
    {
      question: "How do you create a catch-all route in Next.js?",
      answer: "Catch-all routes match multiple path segments using [...slug] syntax. Optional catch-all uses [[...slug]] to also match the base path.",
      example: `// app/docs/[...slug]/page.js (catch-all)
export default function DocsPage({ params }) {
  // /docs/a → { slug: ['a'] }
  // /docs/a/b/c → { slug: ['a', 'b', 'c'] }
  // /docs/ → 404 (no match)
  
  return (
    <div>
      <h1>Documentation</h1>
      <nav>
        {params.slug.map((segment, i) => (
          <span key={i}>
            {segment} {i < params.slug.length - 1 ? ' > ' : ''}
          </span>
        ))}
      </nav>
    </div>
  );
}

// app/docs/[[...slug]]/page.js (optional catch-all)
export default function OptionalCatchAll({ params }) {
  const slug = params.slug || []; // Default to empty array
  
  // /docs → { slug: undefined } → use default []
  // /docs/a → { slug: ['a'] }
  // /docs/a/b → { slug: ['a', 'b'] }
  
  return <div>Path: {slug.join(' / ') || 'Home'}</div>;
}

// Comparing with dynamic routes
// app/blog/[slug]/page.js → /blog/hello (single param)
// app/blog/[...slug]/page.js → /blog/hello/world (multiple params)
// app/blog/[[...slug]]/page.js → /blog (no param) or /blog/hello/world`,
      output: "Catch-all matches multiple segments, optional catch-all matches zero or more",
      note: "Use [[...slug]] for paths that need to match the base route as well."
    },
    {
      question: "What is the purpose of not-found.js?",
      answer: "not-found.js renders when a route doesn't exist or when the notFound() function is called. It can be nested for route-specific 404s.",
      example: `// app/not-found.js (global)
export default function GlobalNotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href="/">Go Home</Link>
    </div>
  );
}

// app/blog/not-found.js (blog-specific)
export default function BlogNotFound() {
  return (
    <div>
      <h2>Blog Post Not Found</h2>
      <Link href="/blog">Back to Blog</Link>
    </div>
  );
}

// app/blog/[slug]/page.js (triggering notFound)
import { notFound } from 'next/navigation';

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    notFound(); // Shows closest not-found.js
  }
  
  return <div>{post.title}</div>;
}

// Conditional notFound in Server Component
export default async function AdminPage() {
  const session = await getSession();
  
  if (session.user.role !== 'admin') {
    notFound(); // Hide admin page from non-admins
  }
  
  return <AdminPanel />;
}`,
      output: "Shows custom 404 page when content doesn't exist",
      note: "notFound() throws an error that's caught by the nearest not-found boundary."
    },
    {
      question: "How do you handle file uploads in Next.js?",
      answer: "File uploads can be handled via API routes using FormData, or using Server Actions with formData.",
      example: `// API Route upload
// app/api/upload/route.js
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get('file');
  
  if (!file) {
    return Response.json({ error: 'No file uploaded' }, { status: 400 });
  }
  
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  const filename = \`\${Date.now()}-\${file.name}\`;
  const uploadDir = path.join(process.cwd(), 'public/uploads');
  const filepath = path.join(uploadDir, filename);
  
  await writeFile(filepath, buffer);
  
  return Response.json({ url: \`/uploads/\${filename}\` });
}

// Client component for upload
'use client';
import { useState } from 'react';

export default function FileUpload() {
  const [uploading, setUploading] = useState(false);
  
  async function uploadFile(formData) {
    setUploading(true);
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    setUploading(false);
  }
  
  return (
    <form action={uploadFile}>
      <input type="file" name="file" />
      <button type="submit" disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </form>
  );
}

// Server Action upload
// app/actions/upload.js
'use server';
import { writeFile } from 'fs/promises';

export async function uploadFile(formData) {
  const file = formData.get('file');
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  await writeFile(\`public/uploads/\${file.name}\`, buffer);
  revalidatePath('/gallery');
}`,
      output: "Files save to server and return accessible URL",
      note: "For production, use cloud storage (S3, Cloudinary) instead of local filesystem."
    },
    {
      question: "What is next/dynamic and when to use it?",
      answer: "next/dynamic enables lazy loading of components, reducing initial bundle size. Components load only when needed, improving performance.",
      example: `import dynamic from 'next/dynamic';

// Basic dynamic import
const HeavyComponent = dynamic(() => import('./HeavyComponent'));

// With loading fallback
const Chart = dynamic(() => import('./Chart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false // Disable server-side rendering
});

// With custom delay and timeout
const Map = dynamic(() => import('./Map'), {
  loading: () => <div>Loading map...</div>,
  ssr: false,
  delay: 300, // Show loading after 300ms
  timeout: 10000 // Timeout after 10s
});

// Multiple components
const MarkdownEditor = dynamic(
  () => import('@uiw/react-md-editor').then(mod => mod.default),
  { ssr: false }
);

// Named exports
const { Plot } = dynamic(() => import('react-plotly.js').then(mod => mod), {
  ssr: false
});

// Conditional loading
export default function Page({ showEditor }) {
  return (
    <div>
      {showEditor ? (
        <MarkdownEditor />
      ) : (
        <HeavyComponent />
      )}
    </div>
  );
}`,
      output: "Components only load when needed, reducing initial load time",
      note: "Use dynamic for large components, modals, charts, and libraries not needed immediately."
    },
    {
      question: "How to handle API rate limiting in Next.js?",
      answer: "Rate limiting can be implemented in middleware, API routes, or using Upstash Redis for distributed rate limiting.",
      example: `// API route with basic rate limiting (in-memory)
// app/api/limited/route.js
const rateLimit = new Map();

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 10;
  
  const userRequests = rateLimit.get(ip) || [];
  const recentRequests = userRequests.filter(time => now - time < windowMs);
  
  if (recentRequests.length >= maxRequests) {
    return Response.json({ error: 'Too many requests' }, { status: 429 });
  }
  
  recentRequests.push(now);
  rateLimit.set(ip, recentRequests);
  
  // Process request...
  return Response.json({ success: true });
}

// Production: Upstash Redis rate limiting
// middleware.js
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'),
});

export async function middleware(request) {
  const ip = request.ip ?? '127.0.0.1';
  const { success, limit, remaining, reset } = await ratelimit.limit(ip);
  
  const response = NextResponse.next();
  response.headers.set('X-RateLimit-Limit', limit);
  response.headers.set('X-RateLimit-Remaining', remaining);
  response.headers.set('X-RateLimit-Reset', new Date(reset).toISOString());
  
  if (!success) {
    return new Response('Too Many Requests', { status: 429 });
  }
  
  return response;
}`,
      output: "Limits requests to prevent abuse, returns 429 after limit reached",
      note: "Use Upstash Redis for distributed rate limiting in production."
    },
    {
      question: "What is instrumentation in Next.js?",
      answer: "instrumentation.ts/hook runs during server startup for setting up monitoring, tracing, or logging before the server handles requests.",
      example: `// instrumentation.ts (server root)
export async function register() {
  // Runs only on server startup, not in Edge Runtime
  
  // Setup OpenTelemetry
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./instrumentation.node');
  }
  
  // Initialize monitoring
  await initializeSentry();
  
  // Setup logging
  setupLogging();
  
  // Connect to services
  await connectToRedis();
  await connectToMessageQueue();
  
  // Run migrations
  await runMigrations();
  
  // Warm up caches
  await warmUpCache();
}

// instrumentation.node.ts (Node.js specific)
import { NodeSDK } from '@opentelemetry/sdk-node';

export async function register() {
  const sdk = new NodeSDK({
    serviceName: 'my-nextjs-app',
    traceExporter: new OTLPTraceExporter()
  });
  
  await sdk.start();
}

// With Sentry
import * as Sentry from '@sentry/nextjs';

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config');
  }
  
  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config');
  }
}`,
      output: "Runs setup code once when server starts",
      note: "instrumentation is experimental in Next.js 13+. Use for monitoring, not request handling."
    },
    {
      question: "How to implement SEO meta tags dynamically?",
      answer: "Use generateMetadata for server-side SEO, or next/head for client-side SEO. Metadata API provides Open Graph, Twitter Cards, and JSON-LD support.",
      example: `// app/products/[id]/page.js
export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(params.id);
  
  return {
    title: product.name,
    description: product.description,
    keywords: product.tags.join(', '),
    
    // Open Graph (Facebook, LinkedIn)
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.imageUrl],
      type: 'product',
      price: product.price,
      currency: 'USD'
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: [product.imageUrl]
    },
    
    // Canonical URL
    alternates: {
      canonical: \`https://example.com/products/\${product.slug}\`,
      languages: {
        'en-US': '/en-US',
        'es-ES': '/es-ES',
      }
    },
    
          // robots
      robots: {
        index: product.published,
        follow: true,
        googleBot: {
          index: product.published,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1
        }
      },
      
      // JSON-LD for rich snippets
      other: {
        'application/ld+json': JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          description: product.description,
          image: product.imageUrl,
          offers: {
            '@type': 'Offer',
            price: product.price,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          }
        })
      }
    };
  }
  
  // app/blog/page.js (list page)
  export async function generateMetadata() {
    const posts = await getLatestPosts();
    
    return {
      title: 'Blog',
      description: 'Latest articles about web development',
      openGraph: {
        title: 'Blog | My Site',
        description: 'Latest articles about web development',
        images: ['https://example.com/blog-og.jpg']
      }
    };
  }`,
      output: "Each page has unique, search-engine-friendly meta tags",
      note: "Metadata API automatically handles deduplication and merging with parent layouts."
    },

    // ========== FRESHER QUESTIONS CONTINUED (61-70) ==========
    {
      question: "What is next.config.js output: 'export'?",
      answer: "output: 'export' generates static HTML files for every page, enabling deployment to any static hosting (CDN, S3, Netlify). Disables SSR, ISR, and server features.",
      example: `// next.config.js
module.exports = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Optional: adds trailing slashes
};

// package.json
{
  "scripts": {
    "build": "next build && next export",
    "export": "next export"
  }
}

// Static export considerations:
// - No server-side features (API routes, middleware)
// - No ISR or server components with async
// - Dynamic routes need generateStaticParams
// - Images must be local or use loader

// app/blog/[slug]/page.js (with static params)
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(post => ({ slug: post.slug }));
}

// Export outputs:
// out/
//   index.html
//   about.html
//   blog/
//     post-1.html
//     post-2.html`,
      output: "Generates static HTML files, deployable to any hosting",
      note: "Static export is great for blogs, docs, and marketing sites without server dependencies."
    },
    {
      question: "How do you implement preview mode in Next.js?",
      answer: "Preview mode bypasses static generation to show draft content. Useful for CMS previews. Uses cookies to enable/disable preview mode.",
      example: `// app/api/preview/route.js (enable preview)
import { draftMode } from 'next/headers';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug');
  
  // Check secret
  if (secret !== process.env.PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }
  
  // Enable preview mode
  draftMode().enable();
  
  // Redirect to preview page
  return new Response(null, {
    status: 307,
    headers: {
      'Location': \`/blog/\${slug}\`,
    },
  });
}

// app/api/preview/disable/route.js (disable preview)
import { draftMode } from 'next/headers';

export async function GET() {
  draftMode().disable();
  return new Response(null, {
    status: 307,
    headers: { 'Location': '/' },
  });
}

// app/blog/[slug]/page.js (use preview data)
import { draftMode } from 'next/headers';

export default async function BlogPost({ params }) {
  const { isEnabled } = draftMode();
  
  const post = await getPost(params.slug, isEnabled);
  
  return (
    <div>
      {isEnabled && <div className="preview-badge">Preview Mode</div>}
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </div>
  );
}

// Usage in CMS webhook
// https://example.com/api/preview?secret=SECRET_TOKEN&slug=my-post`,
      output: "Allows seeing draft content before publishing",
      note: "Preview mode uses cookies. Always validate secret to prevent unauthorized access."
    },
    {
      question: "What is the difference between cookies and localStorage in Next.js?",
      answer: "Cookies are HTTP headers accessible on server and client, limited to 4KB. localStorage is client-only, larger storage (10MB), but not accessible on server.",
      example: `// Server Component (can only access cookies)
import { cookies } from 'next/headers';

export default async function ServerPage() {
  const cookieStore = cookies();
  const token = cookieStore.get('auth-token');
  
  // localStorage NOT available here
  // Error: localStorage is not defined
  
  return <div>User: {token?.value}</div>;
}

// API Route (cookies only)
export async function GET(request) {
  const token = request.cookies.get('auth-token');
  const response = Response.json({ data: 'success' });
  response.cookies.set('session', 'value');
  return response;
}

// Client Component (both available)
'use client';

export default function ClientComponent() {
  // Cookies (client-side)
  document.cookie = 'theme=dark';
  const cookies = document.cookie;
  
  // localStorage
  localStorage.setItem('preferences', JSON.stringify({ theme: 'dark' }));
  const prefs = localStorage.getItem('preferences');
  sessionStorage.setItem('temp', 'data'); // Session storage
  
  return <div>Both available</div>;
}

// Setting cookies from server action
'use server';
import { cookies } from 'next/headers';

export async function setTheme(formData) {
  const theme = formData.get('theme');
  cookies().set('theme', theme);
}`,
      output: "Cookies: server-accessible, 4KB limit. localStorage: client-only, 10MB",
      note: "Use cookies for auth tokens (security), localStorage for user preferences."
    },
    {
      question: "How do you implement breadcrumbs in Next.js?",
      answer: "Breadcrumbs can be generated from URL pathname using usePathname hook or from route segments using params.",
      example: `// app/components/Breadcrumbs.jsx
'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);
  
  return (
    <nav className="breadcrumbs">
      <Link href="/">Home</Link>
      {paths.map((path, index) => {
        const href = '/' + paths.slice(0, index + 1).join('/');
        const isLast = index === paths.length - 1;
        const label = path.replace(/-/g, ' ').replace(/\[.*?\]/g, '');
        
        return (
          <span key={href}>
            {' / '}
            {isLast ? (
              <span className="current">{label}</span>
            ) : (
              <Link href={href}>{label}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

// Server Component breadcrumbs
// app/blog/[slug]/page.js
export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  
  return (
    <>
      <Breadcrumbs />
      {/* Or custom breadcrumb */}
      <div className="breadcrumb">
        <Link href="/">Home</Link> /
        <Link href="/blog">Blog</Link> /
        <span>{post.title}</span>
      </div>
      <h1>{post.title}</h1>
    </>
  );
}

// With generateMetadata for SEO
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  
  return {
    title: post.title,
    alternates: {
      canonical: \`https://example.com/blog/\${params.slug}\`
    }
  };
}`,
      output: "Shows navigation path: Home > Blog > Post Title",
      note: "Use JSON-LD structured data for SEO-optimized breadcrumbs."
    },
    {
      question: "What is the purpose of next/legacy/image?",
      answer: "next/legacy/image is the old Image component from Next.js 10-12, replaced by next/image in Next.js 13. It has different props and behavior.",
      example: `// Legacy image (Next.js 10-12)
import Image from 'next/legacy/image';

export default function LegacyImage() {
  return (
    <Image
      src="/photo.jpg"
      alt="Photo"
      layout="responsive" // intrinisic, fixed, fill
      width={800}
      height={600}
      objectFit="cover" // Different from style objectFit
      quality={80}
      loading="lazy"
    />
  );
}

// Modern image (Next.js 13+)
import Image from 'next/image';

export default function ModernImage() {
  return (
    <Image
      src="/photo.jpg"
      alt="Photo"
      fill // Replaces layout="fill"
      sizes="100vw"
      style={{ objectFit: 'cover' }} // Replaces objectFit
      quality={80}
      loading="lazy"
    />
  );
}

// Migration differences
// layout="responsive" → width/height with sizes
// layout="fill" → fill prop
// layout="fixed" → width/height without fill
// objectFit → style={{ objectFit }}
// objectPosition → style={{ objectPosition }}`,
      output: "Legacy component for backward compatibility, use new Image for new projects",
      note: "Migrate from legacy/image to new Image for better performance and API."
    },
    {
      question: "How do you implement sitemap in Next.js?",
      answer: "Sitemap generation can be static using sitemap.js/ts file or dynamic using generateSitemap function. Next.js 13+ has built-in sitemap support.",
      example: `// app/sitemap.js (Static sitemap)
export default function sitemap() {
  return [
    {
      url: 'https://example.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://example.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://example.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}

// Dynamic sitemap (app/blog/sitemap.js)
export default async function sitemap() {
  const posts = await fetch('https://api.example.com/posts')
    .then(res => res.json());
  
  const blogEntries = posts.map(post => ({
    url: \`https://example.com/blog/\${post.slug}\`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));
  
  return [
    {
      url: 'https://example.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogEntries,
  ];
}

// Multiple sitemaps (split by category)
// app/products/sitemap.js
export default async function sitemap() {
  const products = await getProducts();
  return products.map(product => ({
    url: \`https://example.com/products/\${product.slug}\`,
    lastModified: product.updatedAt,
    priority: 0.6,
  }));
}

// Sitemap index (automatically generated for large sites)
// Automatically splits into multiple files if >50,000 entries`,
      output: "Generates XML sitemap at /sitemap.xml for search engines",
      note: "Sitemap helps search engines discover and index your pages effectively."
    },
    {
      question: "What is robots.txt in Next.js?",
      answer: "robots.txt tells search engines which pages to crawl. Can be static in public folder or dynamic using app/robots.js/ts.",
      example: `// public/robots.txt (static)
User-agent: *
Allow: /blog/
Allow: /products/
Disallow: /admin/
Disallow: /api/
Disallow: /dashboard/
Sitemap: https://example.com/sitemap.xml

// OR dynamic robots using app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/blog/', '/products/'],
      disallow: ['/admin/', '/api/', '/dashboard/'],
    },
    sitemap: 'https://example.com/sitemap.xml',
    host: 'https://example.com',
  };
}

// Environment-specific disallows
// app/robots.js
export default function robots() {
  const isProduction = process.env.NODE_ENV === 'production';
  
  const rules = {
    userAgent: '*',
    allow: isProduction ? ['/'] : [],
    disallow: isProduction ? [] : ['/'],
  };
  
  return {
    rules,
    sitemap: isProduction ? 'https://example.com/sitemap.xml' : undefined,
  };
}

// Advanced: Different rules for different bots
export default function robots() {
  return [
    {
      userAgent: 'Googlebot',
      allow: ['/blog/', '/products/'],
      disallow: ['/admin/'],
      crawlDelay: 10,
    },
    {
      userAgent: 'Bingbot',
      allow: ['/'],
      disallow: ['/admin/'],
    },
    {
      userAgent: '*',
      allow: ['/'],
      disallow: []
    }
  ];
}`,
      output: "Instructs crawlers which pages to index or ignore",
      note: "Test robots.txt in Google Search Console. Use disallow for sensitive routes."
    },

    // ========== FRESHER QUESTIONS CONTINUED (71-80) ==========
    {
      question: "What is next/font/google and how is it different from traditional Google Fonts?",
      answer: "next/font/google self-hosts fonts, eliminating external requests and improving privacy. It also prevents layout shift and optimizes font loading.",
      example: `// Traditional Google Fonts (external request)
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />

// Next.js self-hosted (no external request)
// app/layout.js
import { Inter, Roboto, Open_Sans } from 'next/font/google';

// Single font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

// Multiple weights and styles
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
});

// Variable font (better performance)
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans', // CSS variable
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.variable}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

// Using multiple fonts
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function Page() {
  return (
    <div>
      <p className={inter.className}>Sans-serif text</p>
      <p className={robotoMono.className}>Monospace text</p>
    </div>
  );
}`,
      output: "Fonts served from same domain, zero layout shift, better performance",
      note: "next/font automatically downloads and caches fonts during build."
    },
    {
      question: "How do you handle CORS in Next.js API routes?",
      answer: "CORS can be enabled by setting response headers manually or using next-cors package. Essential for APIs called from different origins.",
      example: `// Manual CORS in API route
// app/api/data/route.js
export async function GET(request) {
  // Handle preflight (OPTIONS) request
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400',
      },
    });
  }
  
  const data = await fetchData();
  
  return Response.json(data, {
    headers: {
      'Access-Control-Allow-Origin': 'https://example.com', // Specific origin
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}

// Using next-cors package
// app/api/cors/route.js
import Cors from 'cors';
import { NextResponse } from 'next/server';

const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  origin: ['https://example.com', 'https://app.example.com'],
  credentials: true,
});

function runMiddleware(req, res) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

export async function GET(request) {
  await runMiddleware(request, {});
  return NextResponse.json({ message: 'CORS enabled' });
}

// Global CORS middleware
// middleware.js
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const response = NextResponse.next();
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return response;
  }
}`,
      output: "API accessible from different domains with proper CORS headers",
      note: "Never use '*' for Access-Control-Allow-Origin in production if sending credentials."
    },
    {
      question: "What is the difference between server-only and client-only packages?",
      answer: "server-only ensures code runs only on server, client-only ensures runs only on client. Prevents accidental usage on wrong side.",
      example: `// Install packages
npm install server-only client-only

// app/utils/database.js
import 'server-only'; // This module only runs on server

export async function queryDatabase(sql) {
  // This will error if imported in client component
  return await db.query(sql);
}

// app/utils/browser-utils.js
import 'client-only'; // This module only runs on client

export function getWindowWidth() {
  // This will error if imported in server component
  return window.innerWidth;
}

// app/page.js (Server Component)
import { queryDatabase } from './utils/database';
// import { getWindowWidth } from './utils/browser-utils'; // ERROR!

export default async function Page() {
  const data = await queryDatabase('SELECT * FROM users');
  return <div>{data}</div>;
}

// app/components/ClientComponent.jsx
'use client';
import { getWindowWidth } from '../utils/browser-utils';
// import { queryDatabase } from '../utils/database'; // ERROR!

export default function ClientComponent() {
  const width = getWindowWidth();
  return <div>Window width: {width}</div>;
}`,
      output: "Prevents accidental server-only code in client and vice versa",
      note: "server-only/client-only throw build errors, preventing runtime issues."
    },
    {
      question: "How do you implement authentication with NextAuth.js?",
      answer: "NextAuth.js provides complete authentication solution with OAuth providers, email/password, and database sessions.",
      example: `// Install: npm install next-auth

// app/api/auth/[...nextauth]/route.js
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = await findUser(credentials.email);
        if (user && await comparePassword(credentials.password, user.password)) {
          return { id: user.id, name: user.name, email: user.email };
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };

// Getting session in server component
import { getServerSession } from 'next-auth';

export default async function Dashboard() {
  const session = await getServerSession();
  
  if (!session) {
    return <div>Please log in</div>;
  }
  
  return <div>Welcome {session.user.name}</div>;
}

// Client-side session usage
'use client';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginButton() {
  const { data: session } = useSession();
  
  if (session) {
    return <button onClick={() => signOut()}>Sign out</button>;
  }
  return <button onClick={() => signIn()}>Sign in</button>;
}`,
      output: "Complete authentication system with multiple providers",
      note: "Always use NEXTAUTH_SECRET in production. NEXTAUTH_URL must be set."
    },
    {
      question: "What is the purpose of middleware matcher?",
      answer: "Middleware matcher specifies which routes trigger the middleware, improving performance by avoiding unnecessary execution.",
      example: `// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Only runs on matched routes
  console.log('Running on:', request.nextUrl.pathname);
  return NextResponse.next();
}

// Matcher configuration
export const config = {
  matcher: [
    // Match specific paths
    '/dashboard/:path*',
    '/profile/:path*',
    '/settings/:path*',
    
    // Match API routes
    '/api/:path*',
    
    // Match with regex (exclude static files)
    '/((?!_next/static|_next/image|favicon.ico|.*\\\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    
    // Match specific pattern
    '/blog/:slug*',
  ]
};

// Multiple matcher arrays (OR logic)
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*', 
    '/api/auth/:path*',
  ]
};

// Conditional matcher with negative lookahead
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico (favicon)
     * - public files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\\\.png$).*)',
  ]
};`,
      output: "Middleware runs only on specified routes, improving performance",
      note: "Always exclude static assets from middleware to reduce overhead."
    },

    // ========== FRESHER QUESTIONS CONTINUED (81-90) ==========
    {
      question: "How do you implement infinite scroll in Next.js?",
      answer: "Infinite scroll loads more content as user scrolls down. Implement using SWR infinite, Intersection Observer API, or libraries like react-infinite-scroll.",
      example: `// Using SWR Infinite
'use client';
import useSWRInfinite from 'swr/infinite';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const fetcher = (url) => fetch(url).then(res => res.json());

export default function InfiniteScrollFeed() {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.nextCursor) return null;
    return \`/api/posts?cursor=\${previousPageData?.nextCursor || ''}\`;
  };
  
  const { data, size, setSize, isLoading, isValidating } = useSWRInfinite(getKey, fetcher);
  const { ref, inView } = useInView();
  
  useEffect(() => {
    if (inView && !isValidating) {
      setSize(size + 1);
    }
  }, [inView, isValidating]);
  
  const posts = data ? data.flatMap(page => page.posts) : [];
  
  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="post-card">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
      
      <div ref={ref}>
        {isLoading && <div>Loading more...</div>}
        {!isLoading && <div>Scroll for more</div>}
      </div>
    </div>
  );
}

// API route for pagination
// app/api/posts/route.js
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const cursor = searchParams.get('cursor');
  const limit = 10;
  
  const posts = await db.post.findMany({
    take: limit + 1,
    cursor: cursor ? { id: cursor } : undefined,
    orderBy: { createdAt: 'desc' }
  });
  
  let nextCursor = null;
  if (posts.length > limit) {
    nextCursor = posts.pop().id;
  }
  
  return Response.json({
    posts,
    nextCursor,
    hasMore: !!nextCursor
  });
}`,
      output: "Loads new content automatically as user scrolls down",
      note: "Always show loading indicator and error state for better UX."
    },
    {
      question: "What is the difference between useRouter and usePathname?",
      answer: "useRouter provides router methods (push, replace, back) and pathname. usePathname only returns current path string, better performance when only path needed.",
      example: `// useRouter (full router functionality)
'use client';
import { useRouter } from 'next/navigation';

export default function NavigationComponent() {
  const router = useRouter();
  
  // Access pathname
  console.log(router.pathname); // '/about'
  
  // Navigation methods
  router.push('/dashboard');
  router.replace('/login');
  router.back();
  router.forward();
  router.refresh();
  router.prefetch('/products');
  
  return <button onClick={() => router.push('/contact')}>Contact</button>;
}

// usePathname (path only, more efficient)
'use client';
import { usePathname } from 'next/navigation';

export default function ActiveLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link href={href} className={isActive ? 'active' : ''}>
      {children}
    </Link>
  );
}

// useSearchParams (query params)
'use client';
import { useSearchParams } from 'next/navigation';

export default function FilterBar() {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const page = searchParams.get('page') || '1';
  
  return <div>Category: {category}, Page: {page}</div>;
}

// Performance comparison
// useRouter: re-renders on every navigation (path + query)
// usePathname: re-renders only when path changes
// useSearchParams: re-renders only when query changes`,
      output: "useRouter for navigation, usePathname for reading current path efficiently",
      note: "Prefer usePathname over useRouter when only need current path to reduce re-renders."
    },
    {
      question: "How to handle loading states for images in Next.js?",
      answer: "Next.js Image component provides built-in loading states, placeholder blur, and onLoadingComplete callback for custom loading handling.",
      example: `// Basic loading with blur placeholder
import Image from 'next/image';

export default function ImageWithBlur() {
  return (
    <Image
      src="/large-image.jpg"
      alt="Large image"
      width={800}
      height={600}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Base64 tiny image
      loading="lazy"
    />
  );
}

// Custom loading component
'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ImageWithLoader() {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <div className="image-container">
      {isLoading && <div className="spinner">Loading...</div>}
      <Image
        src="/photo.jpg"
        alt="Photo"
        width={500}
        height={300}
        onLoadingComplete={() => setIsLoading(false)}
        className={isLoading ? 'hidden' : 'visible'}
      />
    </div>
  );
}

// Multiple images with loading management
'use client';
import { useState, useEffect } from 'react';

export default function Gallery() {
  const [loadedImages, setLoadedImages] = useState({});
  const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg'];
  
  const handleLoad = (src) => {
    setLoadedImages(prev => ({ ...prev, [src]: true }));
  };
  
  const allLoaded = images.every(src => loadedImages[src]);
  
  return (
    <div>
      {!allLoaded && <div className="progress">Loading gallery...</div>}
      {images.map(src => (
        <Image
          key={src}
          src={src}
          alt="Gallery image"
          width={300}
          height={200}
          onLoad={() => handleLoad(src)}
          loading="lazy"
        />
      ))}
    </div>
  );
}

// Priority loading for above-the-fold images
export default function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero"
      width={1920}
      height={1080}
      priority // Eager load, no lazy loading
      quality={90}
    />
  );
}`,
      output: "Images show loading indicators, blur placeholders, then fully loaded",
      note: "Use priority for LCP images, blur placeholder for better perceived performance."
    },
    {
      question: "What is the difference between generateStaticParams and generateMetadata?",
      answer: "generateStaticParams generates static paths at build time. generateMetadata creates SEO metadata for each page. Both work with dynamic routes.",
      example: `// app/products/[id]/page.js

// Generate static paths at build time
export async function generateStaticParams() {
  const products = await fetch('https://api.example.com/products')
    .then(res => res.json());
  
  return products.map(product => ({
    id: product.id.toString()
  }));
  // Returns: [{ id: '1' }, { id: '2' }, { id: '3' }]
}

// Generate metadata for each product
export async function generateMetadata({ params }) {
  const product = await fetch(\`https://api.example.com/products/\${params.id}\`)
    .then(res => res.json());
  
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.imageUrl],
      price: product.price,
    }
  };
}

// Page component
export default async function ProductPage({ params }) {
  const product = await fetch(\`https://api.example.com/products/\${params.id}\`)
    .then(res => res.json());
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <div>Price: \${product.price}</div>
    </div>
  );
}

// generateStaticParams with dynamicParams control
export const dynamicParams = true; // Allow undefined paths (default)
// export const dynamicParams = false; // 404 for undefined paths

// With revalidation interval
export default async function ProductPage({ params }) {
  const product = await fetch(\`https://api.example.com/products/\${params.id}\`, {
    next: { revalidate: 3600 } // ISR: regenerate hourly
  }).then(res => res.json());
  
  return <div>{product.name}</div>;
}`,
      output: "Generates static pages for all products at build time with SEO metadata",
      note: "generateStaticParams only works with output: 'export' or default caching (ISR)."
    },
    {
      question: "How do you implement dark mode in Next.js?",
      answer: "Dark mode can be implemented using Tailwind CSS dark mode, CSS variables, or next-themes library for persistence and system preference detection.",
      example: `// Tailwind CSS approach
// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' for system preference
  // ...
}

// app/layout.js (add dark mode toggle)
'use client';
import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const isDark = localStorage.getItem('dark-mode') === 'true';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark || (prefersDark && !localStorage.getItem('dark-mode')));
  }, []);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark-mode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark-mode', 'false');
    }
  }, [darkMode]);
  
  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}

// Using next-themes (recommended)
npm install next-themes

// app/providers/ThemeProvider.jsx
'use client';
import { ThemeProvider } from 'next-themes';

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}

// app/layout.js
import Providers from './providers/ThemeProvider';

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// Theme toggle component
'use client';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  );
}`,
      output: "Toggle between light/dark/system themes with persistence",
      note: "Use next-themes to handle hydration mismatches and system preference detection."
    },
    {
      question: "What is the purpose of next/headers?",
      answer: "next/headers provides read-only access to headers, cookies, and user-agent in Server Components and Route Handlers.",
      example: `// Server Component reading headers
import { headers, cookies } from 'next/headers';

export default async function ServerPage() {
  const headersList = headers();
  const userAgent = headersList.get('user-agent');
  const referer = headersList.get('referer');
  
  const cookieStore = cookies();
  const sessionId = cookieStore.get('session-id');
  const theme = cookieStore.get('theme');
  
  // Detect device type
  const isMobile = /Mobile|Android|iPhone/i.test(userAgent);
  
  return (
    <div>
      <p>User Agent: {userAgent}</p>
      <p>Device: {isMobile ? 'Mobile' : 'Desktop'}</p>
      <p>Session: {sessionId?.value}</p>
    </div>
  );
}

// API Route reading headers
export async function GET(request) {
  const userAgent = request.headers.get('user-agent');
  const authToken = request.headers.get('authorization');
  
  return Response.json({ userAgent, authenticated: !!authToken });
}

// Setting cookies in Server Component (using Server Action)
'use server';
import { cookies } from 'next/headers';

export async function setPreference(formData) {
  const theme = formData.get('theme');
  cookies().set('theme', theme);
  
  const cookieStore = cookies();
  const allCookies = cookieStore.getAll();
}

// Reading headers in Middleware
export function middleware(request) {
  const userAgent = request.headers.get('user-agent');
  const acceptLanguage = request.headers.get('accept-language');
  
  // Add custom header
  const response = NextResponse.next();
  response.headers.set('x-user-agent', userAgent);
  
  return response;
}`,
      output: "Access request headers and cookies in server-side code",
      note: "next/headers is read-only and available only in Server Components."
    },

    // ========== FRESHER QUESTIONS CONTINUED (91-100) ==========
    {
      question: "How do you implement analytics in Next.js?",
      answer: "Analytics can be implemented using Vercel Analytics, Google Analytics with Script component, or custom solutions.",
      example: "// Vercel Analytics (automatic)\n// Install: npm install @vercel/analytics\n// app/layout.js\nimport { Analytics } from '@vercel/analytics/react';\n\nexport default function RootLayout({ children }) {\n  return (\n    <html>\n      <body>\n        {children}\n        <Analytics />\n      </body>\n    </html>\n  );\n}\n\n// Google Analytics with Script component\n// app/layout.js\nimport Script from 'next/script';\n\nexport default function RootLayout({ children }) {\n  return (\n    <html>\n      <body>\n        {children}\n        <Script\n          src=\"https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID\"\n          strategy=\"afterInteractive\"\n        />\n        <Script id=\"google-analytics\" strategy=\"afterInteractive\">\n          {`\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'GA_MEASUREMENT_ID');\n          `}\n        </Script>\n      </body>\n    </html>\n  );\n}\n\n// Custom event tracking\n'use client';\nexport function trackEvent(category, action, label) {\n  if (typeof window !== 'undefined' && window.gtag) {\n    window.gtag('event', action, {\n      event_category: category,\n      event_label: label,\n    });\n  }\n}\n\n// Usage in components\n'use client';\nimport { trackEvent } from '@/lib/analytics';\n\nexport default function BuyButton() {\n  const handleClick = () => {\n    trackEvent('Ecommerce', 'purchase', 'product-123');\n    // Process purchase...\n  };\n  \n  return <button onClick={handleClick}>Buy Now</button>;\n}\n\n// Custom analytics endpoint\n// app/api/analytics/route.js\nexport async function POST(request) {\n  const data = await request.json();\n  await saveToDatabase(data);\n  return Response.json({ success: true });\n}",
      output: "Tracks page views, events, and user interactions",
      note: "Use afterInteractive strategy for analytics to not block page load."
    },
    {
      question: "What is the difference between redirect and rewrite?",
      answer: "Redirect changes URL in browser (302/301). Rewrite keeps URL unchanged while showing content from different source.",
      example: `// next.config.js - Redirects
module.exports = {
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true, // 301 redirect
      },
      {
        source: '/products/:id',
        destination: '/items/:id',
        permanent: false, // 302 redirect
      }
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://external-api.com/:path*', // Proxy
      },
      {
        source: '/blog/:slug',
        destination: '/news/:slug', // URL shows /blog but content from /news
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/invite',
      }
    ];
  }
};

// Middleware redirect vs rewrite
export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token');
  
  // Redirect - changes URL
  if (!token && pathname === '/dashboard') {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  
  // Rewrite - keeps URL
  if (request.geo?.country === 'IN' && pathname === '/pricing') {
    return NextResponse.rewrite(new URL('/pricing-in', request.url));
  }
  
  // A/B test rewrite (URL stays same, shows different content)
  const variant = Math.random() < 0.5 ? 'a' : 'b';
  if (pathname === '/') {
    return NextResponse.rewrite(new URL(\`/home-\${variant}\`, request.url));
  }
}`,
      output: "Redirect: changes URL in browser. Rewrite: keeps URL, changes content",
      note: "Use rewrite for A/B testing, proxying, and keeping clean URLs."
    },
    {
      question: "How to handle infinite redirect loops in Next.js?",
      answer: "Infinite redirect loops occur when redirect logic keeps redirecting to itself. Prevent with path checking, request count limits, or session flags.",
      example: `// Bad middleware (causes infinite loop)
export function middleware(request) {
  const token = request.cookies.get('token');
  // This will cause infinite loop because /login also triggers middleware
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

// Fixed middleware (exclude login page)
export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token');
  
  // Don't redirect if already on login page
  if (!token && pathname !== '/login' && !pathname.startsWith('/api')) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }
  
  return NextResponse.next();
}

// Prevent redirect loop with request count
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

// Redirect with from parameter
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const from = searchParams.get('from');
  
  // Don't redirect back to itself
  if (from === '/login') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  return NextResponse.redirect(new URL('/login', request.url));
}

// Middleware with redirect limit
let redirectCount = new Map();

export function middleware(request) {
  const ip = request.ip || 'unknown';
  const count = redirectCount.get(ip) || 0;
  
  if (count > 5) {
    // Too many redirects, clear and show error
    redirectCount.delete(ip);
    return new Response('Redirect loop detected', { status: 500 });
  }
  
  redirectCount.set(ip, count + 1);
  
  // Your redirect logic...
  
  // Clean up after some time
  setTimeout(() => redirectCount.delete(ip), 10000);
}`,
      output: "Prevents redirect loops by excluding login page and tracking redirect counts",
      note: "Always exclude auth pages and static assets from redirect middleware."
    },
    {
      question: "What is the purpose of next/legacy/image?",
      answer: "next/legacy/image is the deprecated Image component from Next.js 10-12. Use next/image instead for better performance and API.",
      example: `// Deprecated - Legacy Image (Next.js 10-12)
import Image from 'next/legacy/image';

export default function LegacyPage() {
  return (
    <Image
      src="/photo.jpg"
      alt="Photo"
      layout="responsive" // or 'fixed', 'intrinsic', 'fill'
      width={800}
      height={600}
      objectFit="cover" // Different from style objectFit
      objectPosition="center"
      lazyBoundary="200px"
      lazyRoot={null}
    />
  );
}

// Modern - New Image (Next.js 13+)
import Image from 'next/image';

export default function ModernPage() {
  return (
    <Image
      src="/photo.jpg"
      alt="Photo"
      fill // Replaces layout="fill"
      sizes="(max-width: 768px) 100vw, 50vw"
      style={{ objectFit: 'cover', objectPosition: 'center' }}
      loading="lazy"
    />
  );
}

// Migration mapping
// layout="responsive" → width/height + sizes
// layout="fixed" → width/height without fill
// layout="intrinsic" → width/height + sizes
// layout="fill" → fill prop
// objectFit → style={{ objectFit }}
// objectPosition → style={{ objectPosition }}
// lazyBoundary → Not needed, use rootMargin
// lazyRoot → Not needed`,
      output: "Next.js 13+ uses new Image component with better defaults",
      note: "Update to new Image component for better performance and future compatibility."
    },
    {
      question: "How to handle timeouts in Next.js API routes?",
      answer: "API routes can timeout for long-running operations. Handle with AbortController, timeout middleware, or background jobs.",
      example: `// API route with timeout
// app/api/long-task/route.js
export async function POST(request) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
  
  try {
    const result = await fetch('https://slow-api.example.com/data', {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    return Response.json(await result.json());
  } catch (error) {
    if (error.name === 'AbortError') {
      return Response.json({ error: 'Request timeout' }, { status: 408 });
    }
    return Response.json({ error: 'Internal error' }, { status: 500 });
  }
}

// With Promise.race for timeout
export async function GET() {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Timeout')), 30000);
  });
  
  const taskPromise = fetch('https://slow-api.example.com/data');
  
  try {
    const result = await Promise.race([taskPromise, timeoutPromise]);
    return Response.json(await result.json());
  } catch (error) {
    return Response.json({ error: error.message }, { status: 408 });
  }
}

// Using Upstash Redis for async processing
// app/api/process/route.js
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function POST(request) {
  const jobId = crypto.randomUUID();
  await redis.set(\`job:\${jobId}\`, 'pending', { ex: 3600 });
  
  // Start background processing
  processInBackground(jobId, await request.json());
  
  return Response.json({ jobId, status: 'processing' });
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const jobId = searchParams.get('jobId');
  
  const status = await redis.get(\`job:\${jobId}\`);
  return Response.json({ jobId, status });
}

// Vercel Edge Config for timeout limits
export const maxDuration = 60; // seconds (Vercel Pro+)`,
      output: "Prevents hanging requests by timing out after specified duration",
      note: "Vercel hobby plan has 10s timeout, Pro has 60s, Enterprise has 300s+."
    },
    {
      question: "What is the difference between useOptimistic and useTransition?",
      answer: "useOptimistic updates UI immediately while action runs in background. useTransition marks updates as non-urgent to keep UI responsive.",
      example: `// useOptimistic (for mutations)
'use client';
import { useOptimistic, useRef } from 'react';
import { addComment } from '@/actions/comments';

export default function CommentsList({ comments }) {
  const [optimisticComments, addOptimistic] = useOptimistic(
    comments,
    (state, newComment) => [...state, newComment]
  );
  const formRef = useRef();
  
  async function formAction(formData) {
    addOptimistic({ text: formData.get('comment'), pending: true });
    formRef.current.reset();
    await addComment(formData);
  }
  
  return (
    <>
      {optimisticComments.map(comment => (
        <div className={comment.pending ? 'opacity-50' : ''}>
          {comment.text}
        </div>
      ))}
      <form ref={formRef} action={formAction}>
        <input name="comment" />
        <button>Add</button>
      </form>
    </>
  );
}

// useTransition (for navigation/loading states)
'use client';
import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

export default function SlowPage() {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState(null);
  const router = useRouter();
  
  const handleLoadSlowData = () => {
    startTransition(async () => {
      // This won't block UI
      const result = await fetch('/api/slow-data');
      const json = await result.json();
      setData(json);
    });
  };
  
  const handleNavigation = () => {
    startTransition(() => {
      router.push('/heavy-page'); // Navigate without blocking
    });
  };
  
  return (
    <div>
      {isPending && <div>Loading...</div>}
      <button onClick={handleLoadSlowData} disabled={isPending}>
        Load Data
      </button>
      <button onClick={handleNavigation}>Navigate</button>
      {data && <div>{data.value}</div>}
    </div>
  );
}`,
      output: "useOptimistic: instant UI feedback. useTransition: non-blocking updates",
      note: "useOptimistic for mutations, useTransition for navigations and expensive renders."
    },

    // ========== FRESHER QUESTIONS COMPLETED (100 TOTAL) ==========
  ],
  
  experienced: [
    // ========== ADVANCED TOPICS (1-20) ==========
    {
      question: "How does Next.js handle tree shaking and dead code elimination?",
      answer: "Next.js uses webpack's tree shaking (production) and Turbopack (development) to eliminate unused code. Only imported and used exports are included in bundles.",
      example: `// utils/math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;
export const PI = 3.14159;

// app/page.js
import { add, PI } from '@/utils/math';
// Only add and PI are bundled, subtract/multiply/divide are tree-shaken

// Bad: Importing entire library
import * as lodash from 'lodash';
// Good: Import only needed functions
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';

// Using sideEffects flag in package.json
// package.json
{
  "name": "my-library",
  "sideEffects": false, // Mark as side-effect free
  // or
  "sideEffects": ["./styles/*.css", "./polyfills.js"] // Specify side-effect files
}

// Dynamic imports for conditional code
if (process.env.NODE_ENV === 'development') {
  const devTools = await import('@/utils/dev-tools');
  devTools.enableDebugging();
}

// Webpack configuration for tree shaking
// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    config.optimization.usedExports = true; // Enable tree shaking
    config.optimization.sideEffects = true; // Respect sideEffects flag
    return config;
  }
};`,
      output: "Only used code is included in production bundles, reducing size",
      note: "Named imports are tree-shaken, default imports may include unused code."
    },
    {
      question: "How to implement custom webpack configuration in Next.js?",
      answer: "Custom webpack config through next.config.js allows adding loaders, plugins, and modifying build process while preserving Next.js defaults.",
      example: `// next.config.js
module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add custom alias
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.join(__dirname, 'components'),
      '@utils': path.join(__dirname, 'utils'),
    };
    
    // Add SVG loader
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    // Add custom plugin
    config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
    
    // Modify output (for specific environments)
    if (!isServer) {
      config.output.publicPath = '/static/';
    }
    
    // Add environment variables
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.CUSTOM_VAR': JSON.stringify(process.env.CUSTOM_VAR),
      })
    );
    
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\\\/]node_modules[\\\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    
    return config;
  },
  
  // For Turbopack (Next.js 13+)
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
};

// Custom Babel configuration
// .babelrc
{
  "presets": ["next/babel"],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-transform-runtime"]
  ]
}`,
      output: "Custom webpack configuration extends Next.js build process",
      note: "Avoid overriding critical Next.js webpack config to maintain functionality."
    },
    {
      question: "How does Next.js handle dynamic imports and React.lazy?",
      answer: "Next.js supports dynamic imports via next/dynamic and React.lazy for code splitting. Components load only when needed, reducing initial bundle.",
      example: `// next/dynamic (Next.js specific)
import dynamic from 'next/dynamic';

// Basic dynamic import
const DynamicComponent = dynamic(() => import('../components/HeavyComponent'));

// With loading component
const Chart = dynamic(() => import('../components/Chart'), {
  loading: () => <div className="spinner">Loading chart...</div>,
  ssr: false, // Disable SSR for client-only components
});

// With custom loading delay
const Map = dynamic(() => import('../components/Map'), {
  loading: () => <div>Loading...</div>,
  ssr: false,
  delay: 300, // Show loading after 300ms
  timeout: 10000, // Timeout after 10 seconds
});

// Named exports
const { Plot } = dynamic(() => import('react-plotly.js').then(mod => mod), {
  ssr: false,
});

// Multiple components with same loading
const Editor = dynamic(() => import('@uiw/react-md-editor'), {
  loading: () => <EditorSkeleton />,
  ssr: false,
});

// Conditional imports
export default function Page({ showMap }) {
  return (
    <div>
      {showMap ? <Map /> : <div>Map hidden</div>}
    </div>
  );
}

// React.lazy (for client components only)
'use client';
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./HeavyComponent'));

export default function ClientPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}

// Prefetch dynamic components
const Dashboard = dynamic(() => import('./Dashboard'), {
  loading: () => <div>Loading...</div>,
});

// Preload on hover
<div onMouseEnter={() => Dashboard.preload()}>
  <Link href="/dashboard">Dashboard</Link>
</div>`,
      output: "Components load on demand, significantly reducing initial bundle size",
      note: "next/dynamic works in Server Components, React.lazy requires 'use client'"
    },
    {
      question: "What is the implementation of middleware for A/B testing?",
      answer: "Middleware can assign users to test variants using cookies, headers, or query parameters, then rewrite to different page versions.",
      example: `// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const cookie = request.cookies.get('ab-test');
  
  // Only run on homepage
  if (pathname === '/') {
    let variant = cookie?.value;
    
    // Assign variant if no cookie
    if (!variant) {
      // 50/50 split
      variant = Math.random() < 0.5 ? 'control' : 'treatment';
      
      // Or weighted split for multiple variants
      // const rand = Math.random();
      // if (rand < 0.5) variant = 'control';
      // else if (rand < 0.75) variant = 'variant-a';
      // else variant = 'variant-b';
    }
    
    // Rewrite to variant page (URL stays as '/')
    const url = request.nextUrl.clone();
    url.pathname = \`/\${variant}\`;
    
    const response = NextResponse.rewrite(url);
    
    // Set cookie for consistent experience
    if (!cookie) {
      response.cookies.set('ab-test', variant, {
        maxAge: 30 * 24 * 60 * 60, // 30 days
        path: '/',
      });
    }
    
    // Add variant header for tracking
    response.headers.set('x-ab-test-variant', variant);
    
    return response;
  }
  
  return NextResponse.next();
}

// Tracking variant in analytics
// app/components/Tracking.js
'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ABTestTracker() {
  const pathname = usePathname();
  
  useEffect(() => {
    // Send variant to analytics
    const variant = document.cookie
      .split('; ')
      .find(row => row.startsWith('ab-test='))
      ?.split('=')[1];
    
    if (variant && window.gtag) {
      window.gtag('event', 'page_view', {
        'ab_test_variant': variant,
        'page_path': pathname,
      });
    }
  }, [pathname]);
  
  return null;
}

// Statistical significance calculator
// app/api/ab-test/results/route.js
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const testId = searchParams.get('test');
  
  const results = await getTestResults(testId);
  const significance = calculateSignificance(results);
  
  return Response.json({
    control: results.control,
    treatment: results.treatment,
    isSignificant: significance.pValue < 0.05,
    lift: ((results.treatment.conversion - results.control.conversion) / results.control.conversion) * 100,
  });
}`,
      output: "Users see different versions consistently, track conversion rates",
      note: "Use cookies for consistent variant assignment, add for analytics tracking."
    },
    {
      question: "How to implement multi-tenant architecture in Next.js?",
      answer: "Multi-tenant apps serve different customers with custom domains or subdomains. Implement using middleware for domain detection and dynamic routing.",
      example: `// middleware.js (tenant detection)
import { NextResponse } from 'next/server';

export function middleware(request) {
  const hostname = request.headers.get('host');
  const url = request.nextUrl;
  
  // Extract tenant from subdomain (tenant.example.com)
  let tenant = 'default';
  const subdomain = hostname.split('.')[0];
  
  if (subdomain !== 'www' && subdomain !== 'example' && hostname.includes('example.com')) {
    tenant = subdomain;
  }
  
  // Rewrite to tenant-specific routes
  const searchParams = url.searchParams.toString();
  const searchParamsString = searchParams ? \`?\${searchParams}\` : '';
  
  // Rewrite /products to /[tenant]/products
  if (url.pathname === '/') {
    const rewriteUrl = \`/\${tenant}/page\${searchParamsString}\`;
    return NextResponse.rewrite(new URL(rewriteUrl, request.url));
  }
  
  // Add tenant to headers for server access
  const response = NextResponse.next();
  response.headers.set('x-tenant-id', tenant);
  
  return response;
}

// app/layout.js (tenant-aware layout)
export default async function RootLayout({ children }) {
  const headers = await headers();
  const tenant = headers.get('x-tenant-id');
  
  // Fetch tenant-specific theme/config
  const config = await getTenantConfig(tenant);
  
  return (
    <html lang="en" data-theme={config.theme}>
      <body className={config.font}>
        <TenantProvider config={config}>
          {children}
        </TenantProvider>
      </body>
    </html>
  );
}

// Tenant data fetching
// app/[tenant]/page.js
export default async function TenantPage({ params }) {
  const tenant = params.tenant;
  const data = await fetch(\`https://api.example.com/tenants/\${tenant}/homepage\`, {
    next: { tags: [\`tenant-\${tenant}\`] }
  }).then(res => res.json());
  
  return <TenantHomepage data={data} tenant={tenant} />;
}

// Dynamic database queries
export async function getTenantConfig(tenantId) {
  return await db.tenant.findUnique({
    where: { subdomain: tenantId },
    include: { theme: true, settings: true }
  });
}

// Tenant-specific API routes
// app/api/[tenant]/data/route.js
export async function GET(request, { params }) {
  const tenant = params.tenant;
  const data = await db.data.findMany({
    where: { tenantId: tenant }
  });
  
  return Response.json(data);
}`,
      output: "Single codebase serves multiple tenants with custom themes and data",
      note: "Use middleware for domain routing, database tenant isolation for security."
    },
    {
      question: "How does Next.js handle concurrent rendering and Suspense?",
      answer: "Next.js 13+ supports React 18 concurrent features including Suspense for streaming SSR, selective hydration, and transitions.",
      example: `// Streaming SSR with Suspense
// app/products/page.js
import { Suspense } from 'react';

export default function ProductsPage() {
  return (
    <div>
      <h1>Products</h1>
      
      {/* Fast component loads first */}
      <ProductSidebar />
      
      {/* Slow component streams after */}
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
      
      {/* Independent suspense boundaries */}
      <Suspense fallback={<ReviewsSkeleton />}>
        <ProductReviews />
      </Suspense>
    </div>
  );
}

// Slow component with artificial delay
async function ProductList() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  const products = await fetch('https://api.example.com/products', {
    next: { revalidate: 60 }
  }).then(res => res.json());
  
  return (
    <div className="product-grid">
      {products.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}

// Selective hydration
// app/components/HeavyComponent.jsx
'use client';
import { useState, useTransition } from 'react';

export default function InteractiveComponent() {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState(null);
  
  const handleClick = () => {
    // Non-urgent update
    startTransition(() => {
      fetchHeavyData().then(setData);
    });
  };
  
  return (
    <div>
      <button onClick={handleClick} disabled={isPending}>
        {isPending ? 'Loading...' : 'Load Data'}
      </button>
      {data && <HeavyVisualization data={data} />}
    </div>
  );
}

// Nested Suspense boundaries
export default function Dashboard() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <DashboardStats />
      
      <Suspense fallback={<ChartSkeleton />}>
        <AnalyticsChart />
      </Suspense>
      
      <Suspense fallback={<RecentActivitySkeleton />}>
        <RecentActivity />
      </Suspense>
    </Suspense>
  );
}

// Error boundaries with Suspense
// app/products/error.js
'use client';
export default function ErrorBoundary({ error, reset }) {
  return (
    <div>
      <h2>Failed to load products</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}`,
      output: "Pages load progressively, user sees content faster, interactions feel smoother",
      note: "Use Suspense for slow data fetching, useTransition for non-urgent updates."
    },
    {
      question: "How to implement WebSocket connections in Next.js?",
      answer: "WebSockets can be implemented via custom server, third-party services (Pusher, Ably), or API routes with WebSocket support.",
      example: `// Custom server with WebSocket (server.js)
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const { WebSocketServer } = require('ws');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });
  
  const wss = new WebSocketServer({ server });
  
  wss.on('connection', (ws, req) => {
    const userId = new URL(req.url, 'http://localhost').searchParams.get('userId');
    
    ws.on('message', (data) => {
      // Broadcast to other clients
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(data);
        }
      });
    });
    
    ws.send(JSON.stringify({ type: 'connected', userId }));
  });
  
  server.listen(3000, () => {
    console.log('> Ready on http://localhost:3000');
  });
});

// Using Pusher (easier for production)
// npm install pusher pusher-js

// app/api/pusher/auth/route.js
import Pusher from 'pusher';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
});

// app/api/pusher/auth/route.js (continued)
export async function POST(request) {
  const body = await request.json();
  const { socket_id, channel_name } = body;
  
  const auth = pusher.authenticate(socket_id, channel_name);
  
  return Response.json(auth);
}

// Client component with Pusher
'use client';
import { useEffect, useState } from 'react';
import Pusher from 'pusher-js';

export default function RealTimeChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
      authEndpoint: '/api/pusher/auth',
    });
    
    const channel = pusher.subscribe('chat-channel');
    
    channel.bind('new-message', (data) => {
      setMessages(prev => [...prev, data]);
    });
    
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);
  
  const sendMessage = async () => {
    await fetch('/api/pusher/trigger', {
      method: 'POST',
      body: JSON.stringify({ message: input }),
    });
    setInput('');
  };
  
  return (
    <div>
      {messages.map((msg, i) => <div key={i}>{msg.text}</div>)}
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

// Using Ably for real-time (alternative)
import { Realtime } from 'ably';

export default function AblyChat() {
  useEffect(() => {
    const realtime = new Realtime({ key: process.env.NEXT_PUBLIC_ABLY_KEY });
    const channel = realtime.channels.get('chat');
    
    channel.subscribe('message', (message) => {
      console.log('Received:', message.data);
    });
    
    return () => channel.unsubscribe();
  }, []);
}`,
      output: "Real-time bidirectional communication for chats, notifications, live updates",
      note: "Use Pusher/Ably for production WebSockets, custom server for complex scenarios."
    },

    // ========== EXPERIENCED QUESTIONS CONTINUED (8-15) ==========
    {
      question: "How to implement proper logging and monitoring in Next.js?",
      answer: "Implement structured logging with Pino or Winston, monitor with Sentry, Datadog, or Vercel Analytics. Use middleware for request logging.",
      example: `// lib/logger.js (structured logging)
import pino from 'pino';

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  base: { service: 'nextjs-app' },
  transport: process.env.NODE_ENV !== 'production' 
    ? { target: 'pino-pretty' } 
    : undefined,
});

export default logger;

// Middleware for request logging
// middleware.js
import logger from '@/lib/logger';

export function middleware(request) {
  const start = Date.now();
  const { pathname, search } = request.nextUrl;
  const method = request.method;
  const ip = request.ip || 'unknown';
  
  // Log request
  logger.info({ method, pathname, search, ip }, 'Incoming request');
  
  // Add response logging
  const response = NextResponse.next();
  
  response.headers.set('X-Request-ID', crypto.randomUUID());
  response.headers.set('X-Response-Time', \`\${Date.now() - start}ms\`);
  
  logger.info({
    method,
    pathname,
    status: response.status,
    duration: Date.now() - start,
  }, 'Request completed');
  
  return response;
}

// Sentry integration for error tracking
// npm install @sentry/nextjs

// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV,
  beforeSend(event) {
    // Don't send development errors
    if (process.env.NODE_ENV === 'development') return null;
    return event;
  },
});

// Custom error logging
// app/api/error/route.js
import logger from '@/lib/logger';
import * as Sentry from '@sentry/nextjs';

export async function POST(request) {
  try {
    const data = await riskyOperation();
    return Response.json(data);
  } catch (error) {
    // Log to console
    console.error('Operation failed:', error);
    
    // Structured logging
    logger.error({
      error: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    }, 'API error occurred');
    
    // Send to Sentry
    Sentry.captureException(error, {
      tags: { endpoint: '/api/error' },
      extra: { requestBody: await request.text() },
    });
    
    // Send to custom analytics
    await fetch(process.env.ANALYTICS_WEBHOOK, {
      method: 'POST',
      body: JSON.stringify({ error: error.message, timestamp: Date.now() }),
    });
    
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Performance monitoring with custom metrics
// lib/metrics.js
export function trackPerformance(name, duration, metadata = {}) {
  if (typeof window !== 'undefined') {
    // Client-side metrics
    if (window.gtag) {
      window.gtag('event', 'performance', {
        event_category: 'Performance',
        event_label: name,
        value: Math.round(duration),
        ...metadata,
      });
    }
    
    // Send to custom analytics
    navigator.sendBeacon('/api/metrics', JSON.stringify({
      name, duration, metadata, timestamp: Date.now()
    }));
  }
}

// Usage in components
'use client';
import { useEffect } from 'react';
import { trackPerformance } from '@/lib/metrics';

export default function HeavyComponent() {
  useEffect(() => {
    const start = performance.now();
    
    // Component logic...
    
    const duration = performance.now() - start;
    trackPerformance('HeavyComponent', duration, { component: 'HeavyComponent' });
  }, []);
  
  return <div>Heavy Component</div>;
}

// Log aggregation API
// app/api/logs/route.js
import logger from '@/lib/logger';
import { RateLimiter } from 'limiter';

const limiter = new RateLimiter({ tokensPerInterval: 10, interval: 'min' });

export async function POST(request) {
  const hasToken = await limiter.removeTokens(1);
  if (!hasToken) {
    return Response.json({ error: 'Rate limited' }, { status: 429 });
  }
  
  const logs = await request.json();
  
  // Batch write to database or logging service
  await db.log.createMany({ data: logs });
  
  logger.info({ count: logs.length }, 'Logs received');
  
  return Response.json({ success: true });
}`,
      output: "Complete observability with logs, errors, and performance metrics",
      note: "Use structured logging for machine parsing, Sentry for errors, custom metrics for performance."
    },
    {
      question: "How to implement caching strategies beyond fetch?",
      answer: "Implement multi-layer caching: CDN (Vercel Edge Cache), Redis for API responses, SWR for client cache, and service workers for offline support.",
      example: `// Redis caching for API routes
// lib/cache.js
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function cacheGet(key) {
  const cached = await redis.get(key);
  if (cached) {
    console.log(\`Cache hit: \${key}\`);
    return JSON.parse(cached);
  }
  console.log(\`Cache miss: \${key}\`);
  return null;
}

export async function cacheSet(key, data, ttl = 3600) {
  await redis.set(key, JSON.stringify(data), { ex: ttl });
}

// API route with Redis cache
// app/api/products/route.js
import { cacheGet, cacheSet } from '@/lib/cache';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const cacheKey = \`product:\${id}\`;
  
  // Check cache first
  let product = await cacheGet(cacheKey);
  
  if (!product) {
    // Cache miss - fetch from database
    product = await db.product.findUnique({ where: { id } });
    
    // Store in cache for 1 hour
    await cacheSet(cacheKey, product, 3600);
  }
  
  return Response.json(product);
}

// SWR client-side caching
'use client';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';

export default function ProductList() {
  const { data, error, isLoading, mutate } = useSWR('/api/products', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    dedupingInterval: 60000, // Deduplicate requests within 60s
    refreshInterval: 300000, // Refresh every 5 minutes
    errorRetryCount: 3,
    onError: (error) => console.error('Fetch error:', error),
  });
  
  // Optimistic updates
  const updateProduct = async (id, newData) => {
    // Update cache immediately
    mutate(current => ({
      ...current,
      products: current.products.map(p => 
        p.id === id ? { ...p, ...newData } : p
      )
    }), false);
    
    // Send API request
    await fetch(\`/api/products/\${id}\`, {
      method: 'PUT',
      body: JSON.stringify(newData),
    });
    
    // Revalidate
    mutate();
  };
  
  return <div>{/* render products */}</div>;
}

// Service worker for offline caching
// public/sw.js
const CACHE_NAME = 'nextjs-cache-v1';
const urlsToCache = ['/', '/offline', '/styles.css'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if found
      if (response) return response;
      
      // Otherwise fetch from network
      return fetch(event.request).then((response) => {
        // Cache new responses
        if (response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      });
    })
  );
});

// CDN caching with Vercel headers
// middleware.js
export function middleware(request) {
  const response = NextResponse.next();
  
  // Cache static assets for 1 year
  if (request.nextUrl.pathname.match(/\\.(jpg|jpeg|png|webp|svg|css|js)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }
  
  // Cache API responses for 1 minute
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=30');
  }
  
  // Don't cache sensitive data
  if (request.nextUrl.pathname.startsWith('/api/auth')) {
    response.headers.set('Cache-Control', 'no-cache, no-store');
  }
  
  return response;
}

// Vercel Edge Config for global cache
// lib/edgeConfig.js
import { get } from '@vercel/edge-config';

export async function getFeatureFlag(flagName) {
  // Edge Config is globally cached and fast
  const flags = await get('featureFlags');
  return flags[flagName];
}`,
      output: "Multi-layer caching: Redis (API), SWR (client), CDN (static), Service Worker (offline)",
      note: "Implement cache invalidation strategy. Use different TTLs for different data types."
    },
    {
      question: "How do you handle database connection pooling in Next.js?",
      answer: "Connection pooling manages database connections efficiently. Implement singleton pattern for Prisma, use connection poolers like PgBouncer, or serverless databases.",
      example: `// lib/prisma.js (Singleton pattern)
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;

// Prevent multiple Prisma instances in development
export const prisma = globalForPrisma.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  // Connection pool settings
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// With connection pool settings
const prismaWithPool = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
  // Connection pool configuration
  // Note: Prisma uses undici with default pool size of 10
});

// Using PgBouncer with PostgreSQL
// DATABASE_URL="postgresql://user:pass@localhost:5432/db?pgbouncer=true&connection_limit=20"

// Serverless database (Vercel Postgres)
// lib/vercel-postgres.js
import { sql } from '@vercel/postgres';

export async function getUsers() {
  // Vercel Postgres automatically manages connections
  const result = await sql\`
    SELECT * FROM users
    WHERE active = true
    LIMIT 10
  \`;
  return result.rows;
}

// Connection pooling with custom pool (MySQL)
// lib/mysql.js
import mysql from 'mysql2/promise';

let pool = null;

export async function getConnection() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    });
  }
  return pool;
}

// Using connection pool in API route
// app/api/users/route.js
import { getConnection } from '@/lib/mysql';

export async function GET() {
  const pool = await getConnection();
  
  try {
    const [rows] = await pool.query('SELECT * FROM users LIMIT 10');
    return Response.json(rows);
  } catch (error) {
    console.error('Database error:', error);
    return Response.json({ error: 'Database error' }, { status: 500 });
  }
}

// Mongoose connection pooling (MongoDB)
// lib/mongoose.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }
  
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      minPoolSize: 2,
      socketTimeoutMS: 45000,
      serverSelectionTimeoutMS: 5000,
    };
    
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('MongoDB connected');
      return mongoose;
    });
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}

// Serverless function connection handling
// app/api/posts/route.js
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Prisma automatically manages connections in serverless
    const posts = await prisma.post.findMany({
      take: 10,
      orderBy: { createdAt: 'desc' }
    });
    
    return Response.json(posts);
  } finally {
    // Explicit disconnect for serverless (optional, Prisma handles)
    // await prisma.$disconnect();
  }
}`,
      output: "Efficient database connection management, prevents connection exhaustion",
      note: "Use connection pooling for traditional databases, serverless databases handle automatically."
    },
    {
      question: "How to implement real-time collaboration features?",
      answer: "Use CRDTs with Yjs, WebRTC for P2P, or operational transformation with ShareDB. Next.js can host signaling servers via API routes.",
      example: `// Yjs + WebRTC collaboration
// npm install yjs y-webrtc

// app/collaboration/page.jsx
'use client';
import { useEffect, useRef } from 'react';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
import { QuillBinding } from 'y-quill';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default function CollaborativeEditor() {
  const editorRef = useRef();
  const docRef = useRef();
  
  useEffect(() => {
    // Create Yjs document
    const ydoc = new Y.Doc();
    docRef.current = ydoc;
    
    // Setup WebRTC provider
    const provider = new WebrtcProvider('document-room', ydoc, {
      signaling: [process.env.NEXT_PUBLIC_SIGNALING_SERVER],
    });
    
    // Get shared type
    const ytext = ydoc.getText('quill');
    
    // Initialize Quill editor
    const editor = new Quill(editorRef.current, {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['link', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }]
        ]
      }
    });
    
    // Bind Quill to Yjs
    const binding = new QuillBinding(ytext, editor, provider.awareness);
    
    return () => {
      binding.destroy();
      provider.destroy();
      ydoc.destroy();
    };
  }, []);
  
  return <div ref={editorRef} style={{ height: '500px' }} />;
}

// Signaling server for WebRTC
// app/api/signaling/route.js (WebSocket server)
import { WebSocketServer } from 'ws';

const connections = new Map();

export async function GET() {
  // This runs on server startup
  const wss = new WebSocketServer({ port: 8080 });
  
  wss.on('connection', (ws, req) => {
    const room = new URL(req.url, 'http://localhost').searchParams.get('room');
    
    if (!connections.has(room)) {
      connections.set(room, new Set());
    }
    
    connections.get(room).add(ws);
    
    ws.on('message', (message) => {
      // Broadcast to other clients in same room
      connections.get(room).forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    });
    
    ws.on('close', () => {
      connections.get(room).delete(ws);
    });
  });
}

// CRDT with Liveblocks (easier alternative)
// npm install @liveblocks/node @liveblocks/react

// app/liveblocks/page.jsx
'use client';
import { LiveblocksProvider, RoomProvider, useOthers, useUpdateMyPresence } from '@liveblocks/react';

export default function CollaborativeCanvas() {
  const others = useOthers();
  const updateMyPresence = useUpdateMyPresence();
  
  return (
    <div>
      <div>Active users: {others.length}</div>
      <canvas
        onMouseMove={(e) => {
          updateMyPresence({
            cursor: { x: e.clientX, y: e.clientY }
          });
        }}
      />
      {others.map((user) => (
        <div key={user.id} style={{ left: user.presence.cursor.x, top: user.presence.cursor.y }}>
          {user.info.name}
        </div>
      ))}
    </div>
  );
}

// Operational Transformation with ShareDB
// server.js (custom server)
const ShareDB = require('sharedb');
const WebSocket = require('ws');
const WebSocketJSONStream = require('websocket-json-stream');

const backend = new ShareDB();
const connection = backend.connect();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res);
  });
  
  const wss = new WebSocketServer({ server });
  
  wss.on('connection', (ws) => {
    const stream = new WebSocketJSONStream(ws);
    backend.listen(stream);
  });
  
  server.listen(3000);
});`,
      output: "Multi-user real-time collaboration with conflict resolution",
      note: "CRDTs (Yjs) are simpler than OT. Liveblocks provides managed solution."
    },
    {
      question: "How to implement advanced image optimization pipeline?",
      answer: "Implement custom image loader with multiple providers (Cloudinary, Imgix), AVIF format, responsive images, and lazy loading with Intersection Observer.",
      example: `// Custom image loader for Cloudinary
// lib/imageLoader.js
export function cloudinaryLoader({ src, width, quality }) {
  const params = [
    'f_auto', // Automatic format (WebP, AVIF)
    'c_limit', // Limit crop
    \`w_\${width}\`,
    \`q_\${quality || 'auto'}\`,
  ];
  
  // Add progressive loading
  params.push('fl_progressive');
  
  // Add AVIF support
  params.push('f_avif');
  
  return \`https://res.cloudinary.com/\${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/\${params.join(',')}/\${src}\`;
}

// next.config.js
module.exports = {
  images: {
    loader: 'custom',
    loaderFile: './lib/imageLoader.js',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

// Advanced Image Component with lazy loading
// components/OptimizedImage.jsx
'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function OptimizedImage({ src, alt, width, height, priority = false, className = '' }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px',
  });
  
  useEffect(() => {
    if (!priority && inView && !shouldLoad) {
      setShouldLoad(true);
    }
  }, [inView, priority, shouldLoad]);
  
  // Generate responsive sizes
  const sizes = [
    '(max-width: 640px) 100vw',
    '(max-width: 768px) 90vw',
    '(max-width: 1024px) 80vw',
    '1200px',
  ].join(', ');
  
  return (
    <div ref={ref} className={\`relative overflow-hidden \${className}\`}>
      {shouldLoad ? (
        <>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={sizes}
            priority={priority}
            quality={85}
            className={\`transition-opacity duration-300 \${isLoaded ? 'opacity-100' : 'opacity-0'}\`}
            onLoad={() => setIsLoaded(true)}
            placeholder="blur"
            blurDataURL={\`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 \${width} \${height}'%3E%3C/svg%3E\`}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
        </>
      ) : (
        <div className="bg-gray-200 animate-pulse" style={{ width, height }} />
      )}
    </div>
  );
}

// Progressive image loading with average color
// lib/colorThief.js
import ColorThief from 'colorthief';

export async function getAverageColor(imageUrl) {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.src = imageUrl;
  
  return new Promise((resolve) => {
    img.onload = () => {
      const colorThief = new ColorThief();
      const color = colorThief.getColor(img);
      resolve(\`rgb(\${color.join(',')})\`);
    };
  });
}

// Smart image format selection
// components/SmartImage.jsx
export default function SmartImage({ src, ...props }) {
  // Check if browser supports AVIF
  const [supportsAVIF, setSupportsAVIF] = useState(false);
  
       const checkAVIF = async () => {
        const avifData = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAABVtZGF0EgAKCBgANogQEAwgMg8f8D///8i';
        const img = new Image();
        img.onload = () => setSupportsAVIF(true);
        img.onerror = () => setSupportsAVIF(false);
        img.src = avifData;
      };
      checkAVIF();
    }, []);
    
    const imageSrc = supportsAVIF ? src.replace(/\.(jpg|png)/, '.avif') : src;
    
    return <Image src={imageSrc} {...props} />;
  }
  
  // Server-side image optimization API
  // app/api/optimize-image/route.js
  import sharp from 'sharp';
  import { cacheGet, cacheSet } from '@/lib/cache';
  
  export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');
    const width = parseInt(searchParams.get('width')) || 800;
    const quality = parseInt(searchParams.get('quality')) || 80;
    const format = searchParams.get('format') || 'webp';
    
    const cacheKey = \`image:\${Buffer.from(url).toString('base64')}:\${width}:\${quality}:\${format}\`;
    
    // Check cache
    let cachedImage = await cacheGet(cacheKey);
    if (cachedImage) {
      return new Response(Buffer.from(cachedImage, 'base64'), {
        headers: { 'Content-Type': \`image/\${format}\`, 'Cache-Control': 'public, max-age=31536000' }
      });
    }
    
    // Download original image
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    
    // Optimize image
    let sharpInstance = sharp(buffer);
    
    // Resize
    const metadata = await sharpInstance.metadata();
    if (width < metadata.width) {
      sharpInstance = sharpInstance.resize(width, null, { withoutEnlargement: true });
    }
    
    // Convert format
    switch (format) {
      case 'webp':
        sharpInstance = sharpInstance.webp({ quality });
        break;
      case 'avif':
        sharpInstance = sharpInstance.avif({ quality });
        break;
      case 'jpeg':
        sharpInstance = sharpInstance.jpeg({ quality, progressive: true });
        break;
      case 'png':
        sharpInstance = sharpInstance.png({ quality, compressionLevel: 9 });
        break;
    }
    
    const optimizedBuffer = await sharpInstance.toBuffer();
    
    // Cache
    await cacheSet(cacheKey, optimizedBuffer.toString('base64'), 86400);
    
    return new Response(optimizedBuffer, {
      headers: {
        'Content-Type': \`image/\${format}\`,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }`,
      output: "Optimized images with modern formats, lazy loading, and CDN caching",
      note: "Use AVIF for best compression, WebP for compatibility. Implement lazy loading for offscreen images."
    },
    {
      question: "How to implement micro-frontends with Next.js?",
      answer: "Implement micro-frontends using Module Federation, multi-zone deployment, or iframe embedding. Next.js supports Module Federation for sharing code between apps.",
      example: `// next.config.js (Host app - Module Federation)
const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        remotes: {
          shop: 'shop@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          checkout: 'checkout@http://localhost:3002/_next/static/chunks/remoteEntry.js',
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Header': './components/Header.jsx',
          './Footer': './components/Footer.jsx',
        },
        shared: {
          react: { singleton: true, requiredVersion: '^18.0.0' },
          'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
          'next': { singleton: true },
        },
      })
    );
    
    return config;
  },
};

// Remote app (shop) - next.config.js
module.exports = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shop',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './ProductList': './components/ProductList.jsx',
          './ProductCard': './components/ProductCard.jsx',
        },
        shared: {
          react: { singleton: true, requiredVersion: '^18.0.0' },
          'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
        },
      })
    );
    return config;
  },
};

// Using remote component in host app
// app/page.js
import dynamic from 'next/dynamic';

const RemoteProductList = dynamic(
  () => import('shop/ProductList'),
  { ssr: false, loading: () => <div>Loading products...</div> }
);

export default function HomePage() {
  return (
    <div>
      <h1>Host App</h1>
      <RemoteProductList />
    </div>
  );
}

// Multi-zone deployment (different Next.js apps on same domain)
// next.config.js (main app)
module.exports = {
  rewrites: async () => [
    {
      source: '/shop/:path*',
      destination: 'http://localhost:3001/shop/:path*', // Proxy to shop app
    },
    {
      source: '/blog/:path*',
      destination: 'http://localhost:3002/blog/:path*', // Proxy to blog app
    },
  ],
};

// Shared authentication across micro-frontends
// lib/auth.js
import jwt from 'jsonwebtoken';

export function shareAuth(request) {
  const token = request.cookies.get('auth-token');
  
  // Set auth header for all MFEs
  const response = NextResponse.next();
  response.headers.set('X-Auth-Token', token);
  response.headers.set('X-User-Id', decoded.userId);
  
  return response;
}

// Communication between micro-frontends
// lib/events.js (Custom event bus)
class EventBus {
  constructor() {
    this.listeners = new Map();
  }
  
  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);
  }
  
  emit(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(callback => callback(data));
    }
  }
}

export const eventBus = new EventBus();

// Using event bus in components
'use client';
import { eventBus } from '@/lib/events';
import { useEffect } from 'react';

export default function CartWidget() {
  useEffect(() => {
    const handleAddToCart = (product) => {
      console.log('Product added to cart:', product);
    };
    
    eventBus.on('add-to-cart', handleAddToCart);
    
    return () => {
      // Cleanup
    };
  }, []);
  
  return <div>Cart Widget</div>;
}

// Shared store across MFEs (Zustand)
// lib/store.js
import { create } from 'zustand';

export const useSharedStore = create((set) => ({
  user: null,
  cart: [],
  setUser: (user) => set({ user }),
  addToCart: (product) => set((state) => ({ 
    cart: [...state.cart, product] 
  })),
}));

// Iframe-based micro-frontend
// app/embed/page.js
export default function EmbedPage() {
  return (
    <iframe
      src="https://microfrontend.example.com/widget"
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      allow="camera; microphone"
      loading="lazy"
      className="w-full h-96"
    />
  );
}`,
      output: "Multiple independent Next.js apps working together seamlessly",
      note: "Module Federation enables code sharing, multi-zone enables separate deployments."
    },
    {
      question: "How to implement comprehensive error tracking and recovery?",
      answer: "Implement error boundaries, global error handlers, Sentry integration, and automatic recovery strategies with retries and fallbacks.",
      example: `// Global error boundary
// app/global-error.js
'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log to Sentry
    Sentry.captureException(error);
    
    // Log to analytics
    fetch('/api/log-error', {
      method: 'POST',
      body: JSON.stringify({
        message: error.message,
        stack: error.stack,
        url: window.location.href,
        timestamp: new Date().toISOString(),
      }),
    });
  }, [error]);
  
  return (
    <html>
      <body>
        <div className="error-container">
          <h1>Something went wrong!</h1>
          <p>{error.message}</p>
          <button onClick={reset}>Try again</button>
          <button onClick={() => window.location.href = '/'}>
            Go home
          </button>
        </div>
      </body>
    </html>
  );
}

// Route-specific error boundary
// app/products/error.js
'use client';

export default function ProductsError({ error, reset }) {
  return (
    <div className="products-error">
      <h2>Failed to load products</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Retry</button>
    </div>
  );
}

// Recovery wrapper component
// components/ErrorBoundary.jsx
'use client';
import { Component } from 'react';

export class RecoveryBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, retryCount: 0 };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Caught error:', error, errorInfo);
    
    // Send to error tracking
    fetch('/api/log-error', {
      method: 'POST',
      body: JSON.stringify({
        error: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
      }),
    });
  }
  
  handleRetry = () => {
    this.setState({ 
      hasError: false, 
      error: null, 
      retryCount: this.state.retryCount + 1 
    });
  };
  
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.handleRetry);
      }
      
      return (
        <div className="error-fallback">
          <p>Failed to load {this.props.name || 'component'}</p>
          <button onClick={this.handleRetry}>Retry</button>
        </div>
      );
    }
    
    return this.props.children;
  }
}

// API error handling with retries
// lib/api-client.js
class APIClient {
  async fetchWithRetry(url, options = {}, retries = 3) {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await fetch(url, options);
        
        if (!response.ok) {
          throw new Error(\`HTTP \${response.status}\`);
        }
        
        return await response.json();
      } catch (error) {
        console.error(\`Attempt \${i + 1} failed:\`, error);
        
        if (i === retries - 1) {
          throw error;
        }
        
        // Exponential backoff
        await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
      }
    }
  }
  
  async get(url) {
    return this.fetchWithRetry(url);
  }
  
  async post(url, data) {
    return this.fetchWithRetry(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export const apiClient = new APIClient();

// Automatic recovery with fallback data
// components/DataComponent.jsx
'use client';
import { useState, useEffect } from 'react';
import { apiClient } from '@/lib/api-client';

export default function DataComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    loadData();
  }, []);
  
  const loadData = async () => {
    try {
      setLoading(true);
      const result = await apiClient.get('/api/data');
      setData(result);
      setError(null);
      
      // Cache successful response
      localStorage.setItem('cached-data', JSON.stringify(result));
    } catch (err) {
      setError(err.message);
      
      // Use cached data as fallback
      const cached = localStorage.getItem('cached-data');
      if (cached) {
        setData(JSON.parse(cached));
        console.log('Using cached data as fallback');
      }
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) return <div>Loading...</div>;
  if (error && !data) return (
    <div>
      <p>Error: {error}</p>
      <button onClick={loadData}>Retry</button>
    </div>
  );
  
  return <div>{/* render data */}</div>;
}

// Route recovery with error reset
// app/dashboard/page.js
'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const router = useRouter();
  
  useEffect(() => {
    const handleRouteChangeError = () => {
      console.error('Route change failed');
      router.push('/');
    };
    
    router.events?.on('routeChangeError', handleRouteChangeError);
    
    return () => {
      router.events?.off('routeChangeError', handleRouteChangeError);
    };
  }, [router]);
  
  return <div>Dashboard</div>;
}

// Graceful degradation
// components/FeatureWithFallback.jsx
import dynamic from 'next/dynamic';

// Optional feature that might fail
const HeavyFeature = dynamic(
  () => import('./HeavyFeature').catch(() => () => <div>Feature unavailable</div>),
  {
    loading: () => <div>Loading feature...</div>,
    ssr: false,
  }
);

export default function Page() {
  return (
    <div>
      <HeavyFeature />
    </div>
  );
}`,
      output: "Graceful error handling with automatic recovery and fallbacks",
      note: "Combine error boundaries, retries, and cached data for robust error recovery."
    },
    {
      question: "How to implement A/B testing with statistical significance?",
      answer: "Implement A/B testing using middleware for assignment, Google Optimize, or custom solution with significance calculation.",
      example: `// Advanced A/B testing middleware
// middleware.js
import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function middleware(request) {
  const { pathname } = request.nextUrl;
  const experimentName = 'homepage-redesign';
  
  // Define experiment variants
  const variants = {
    control: { weight: 50, path: '/' },
    treatment: { weight: 50, path: '/treatment' },
  };
  
  // Get or assign variant
  let variant = request.cookies.get(\`ab-\${experimentName}\`)?.value;
  
  if (!variant && pathname === '/') {
    // Weighted random assignment
    const random = Math.random() * 100;
    let cumulative = 0;
    
    for (const [name, config] of Object.entries(variants)) {
      cumulative += config.weight;
      if (random <= cumulative) {
        variant = name;
        break;
      }
    }
    
    // Store assignment
    const response = NextResponse.rewrite(new URL(variants[variant].path, request.url));
    response.cookies.set(\`ab-\${experimentName}\`, variant, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    
    // Log assignment
    await fetch(process.env.ANALYTICS_WEBHOOK, {
      method: 'POST',
      body: JSON.stringify({
        event: 'ab-assignment',
        experiment: experimentName,
        variant,
        userId: request.cookies.get('session')?.value,
        timestamp: Date.now(),
      }),
    });
    
    return response;
  }
  
  return NextResponse.next();
}

// Analytics tracking
// lib/analytics.js
export async function trackConversion(userId, experimentName, variant, event) {
  await fetch('/api/ab-test/track', {
    method: 'POST',
    body: JSON.stringify({
      userId,
      experiment: experimentName,
      variant,
      event,
      timestamp: Date.now(),
    }),
  });
}

// Statistical significance calculator
// app/api/ab-test/results/route.js
import { prisma } from '@/lib/prisma';

function calculateSignificance(controlConversions, controlTotal, treatmentConversions, treatmentTotal) {
  // Z-test for proportions
  const p1 = controlConversions / controlTotal;
  const p2 = treatmentConversions / treatmentTotal;
  const p = (controlConversions + treatmentConversions) / (controlTotal + treatmentTotal);
  
  const se = Math.sqrt(p * (1 - p) * (1/controlTotal + 1/treatmentTotal));
  const z = (p2 - p1) / se;
  
  // Calculate p-value (two-tailed)
  const pValue = 2 * (1 - normalCDF(Math.abs(z)));
  
  // Calculate lift
  const lift = ((p2 - p1) / p1) * 100;
  
  return {
    isSignificant: pValue < 0.05,
    pValue,
    lift,
    confidence: (1 - pValue) * 100,
    zScore: z,
  };
}

function normalCDF(z) {
  // Approximation of cumulative distribution function
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp(-z * z / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return z > 0 ? 1 - p : p;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const experiment = searchParams.get('experiment');
  
  // Get experiment data
  const controlData = await prisma.abTest.aggregate({
    where: { experiment, variant: 'control' },
    _sum: { conversions: true, views: true },
  });
  
  const treatmentData = await prisma.abTest.aggregate({
    where: { experiment, variant: 'treatment' },
    _sum: { conversions: true, views: true },
  });
  
  const significance = calculateSignificance(
    controlData._sum.conversions || 0,
    controlData._sum.views || 500,
    treatmentData._sum.conversions || 0,
    treatmentData._sum.views || 500
  );
  
  return Response.json({
    experiment,
    control: { conversions: controlData._sum.conversions, views: controlData._sum.views },
    treatment: { conversions: treatmentData._sum.conversions, views: treatmentData._sum.views },
    ...significance,
    recommendation: significance.isSignificant 
      ? significance.lift > 0 ? 'Roll out treatment' : 'Keep control'
      : 'Need more data',
  });
}

// Client-side A/B testing component
// components/ABTestComponent.jsx
'use client';
import { useEffect, useState } from 'react';

export default function ABTestComponent({ experiment, controlComponent, treatmentComponent }) {
  const [variant, setVariant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Get variant from cookie
    const getVariant = () => {
      const match = document.cookie.match(new RegExp(\`ab-\\\${experiment}=([^;]+)\`));
      return match ? match[1] : null;
    };
    
    setVariant(getVariant());
    setIsLoading(false);
  }, [experiment]);
  
  if (isLoading) return <div>Loading experiment...</div>;
  
  return variant === 'treatment' ? treatmentComponent : controlComponent;
}`,
      output: "Scientific A/B testing with statistical significance and automatic assignment",
      note: "Run tests until statistical significance (p < 0.05), minimum 500 conversions per variant."
    },
    {
      question: "How to implement advanced caching with stale-while-revalidate?",
      answer: "Implement stale-while-revalidate pattern using SWR, Redis, or Cloudflare Workers to serve stale content while fetching fresh data.",
      example: `// Redis-based stale-while-revalidate
// lib/cache.js
import { Redis } from '@upstash/redis';

const redis = Redis.fromEnv();

export async function getWithStaleWhileRevalidate(key, fetcher, ttl = 60) {
  const cacheKey = \`swr:\${key}\`;
  const staleKey = \`stale:\${key}\`;
  
  // Try to get fresh data
  let fresh = await redis.get(cacheKey);
  
  if (fresh !== null) {
    return JSON.parse(fresh);
  }
  
  // Check for stale data
  let stale = await redis.get(staleKey);
  
  if (stale !== null) {
    // Revalidate asynchronously
    revalidateInBackground(key, fetcher, ttl);
    return JSON.parse(stale);
  }
  
  // Cache miss - fetch fresh
  const data = await fetcher();
  await redis.set(cacheKey, JSON.stringify(data), { ex: ttl });
  await redis.set(staleKey, JSON.stringify(data), { ex: ttl * 2 });
  
  return data;
}

async function revalidateInBackground(key, fetcher, ttl) {
  try {
    const freshData = await fetcher();
    const cacheKey = \`swr:\${key}\`;
    const staleKey = \`stale:\${key}\`;
    
    await redis.set(cacheKey, JSON.stringify(freshData), { ex: ttl });
    await redis.set(staleKey, JSON.stringify(freshData), { ex: ttl * 2 });
  } catch (error) {
    console.error('Background revalidation failed:', error);
  }
}

// API route with stale-while-revalidate
// app/api/products/route.js
import { getWithStaleWhileRevalidate } from '@/lib/cache';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  
  const product = await getWithStaleWhileRevalidate(
    \`product:\${id}\`,
    async () => {
      console.log('Fetching fresh data...');
      return await db.product.findUnique({ where: { id } });
    },
    60 // 1 minute fresh, 2 minutes stale
  );
  
  // Add cache headers
  const response = Response.json(product);
  response.headers.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=120');
  
  return response;
}

// SWR hook with stale-while-revalidate
'use client';
import useSWR from 'swr';

export function useProduct(id) {
  const { data, error, isLoading, mutate } = useSWR(
    \`/api/products/\${id}\`,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 60000,
      refreshInterval: 60000,
      refreshWhenHidden: false,
      refreshWhenOffline: false,
      errorRetryCount: 3,
      onError: (error) => {
        console.error('SWR error:', error);
      },
    }
  );
  
  return {
    product: data,
    isLoading,
    isError: error,
    mutate,
  };
}

// Cache with background refresh
// components/CachedComponent.jsx
'use client';
import { useProduct } from '@/hooks/useProduct';
import { useEffect } from 'react';

export default function ProductDisplay({ id }) {
  const { product, isLoading, mutate } = useProduct(id);
  
  useEffect(() => {
    // Prefetch next product
    const prefetchNext = async () => {
      await mutate(\`/api/products/\${parseInt(id) + 1}\`, false);
    };
    
    prefetchNext();
  }, [id, mutate]);
  
  if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <button onClick={() => mutate()}>Refresh</button>
    </div>
  );
}

// Vercel Edge Config for global stale-while-revalidate
// middleware.js
import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export async function middleware(request) {
  const response = NextResponse.next();
  
  // Set cache headers based on Edge Config
  const cacheConfig = await get('cacheConfig');
  
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set(
      'Cache-Control',
      \`public, max-age=\${cacheConfig.maxAge}, stale-while-revalidate=\${cacheConfig.staleAge}\`
    );
  }
  
  return response;
}`,
      output: "Serve stale content immediately while updating cache in background",
      note: "Use stale-while-revalidate for improved perceived performance and reliability."
    },
    {
      question: "How to implement GraphQL with Next.js?",
      answer: "Implement GraphQL using Apollo Client, URQL, or Relay. Use API routes as GraphQL endpoints or connect to external GraphQL APIs.",
      example: `// Apollo Server setup in API route
// npm install @apollo/server @as-integrations/next

// app/api/graphql/route.js
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { prisma } from '@/lib/prisma';

const typeDefs = gql\`
  type Product {
    id: ID!
    name: String!
    price: Float!
    category: String!
  }
  
  type Query {
    products(category: String): [Product!]!
    product(id: ID!): Product
  }
  
  type Mutation {
    createProduct(name: String!, price: Float!, category: String!): Product!
    updateProduct(id: ID!, name: String, price: Float): Product!
    deleteProduct(id: ID!): Boolean!
  }
\`;

const resolvers = {
  Query: {
    products: async (_, { category }) => {
      return await prisma.product.findMany({
        where: category ? { category } : undefined,
      });
    },
    product: async (_, { id }) => {
      return await prisma.product.findUnique({ where: { id: parseInt(id) } });
    },
  },
  Mutation: {
    createProduct: async (_, { name, price, category }) => {
      return await prisma.product.create({
        data: { name, price, category },
      });
    },
    updateProduct: async (_, { id, name, price }) => {
      return await prisma.product.update({
        where: { id: parseInt(id) },
        data: { name, price },
      });
    },
    deleteProduct: async (_, { id }) => {
      await prisma.product.delete({ where: { id: parseInt(id) } });
      return true;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };

// Apollo Client setup
// lib/apollo-client.js
import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(\`[GraphQL error]: Message: \${message}, Path: \${path}\`)
    );
  }
  if (networkError) console.error(\`[Network error]: \${networkError}\`);
});

const httpLink = new HttpLink({
  uri: '/api/graphql',
  credentials: 'same-origin',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? \`Bearer \${token}\` : "",
    }
  };
});

export const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Product: {
        keyFields: ['id'],
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first',
    },
  },
});

// Apollo Provider
// app/providers/ApolloProvider.jsx
'use client';
import { ApolloProvider as Provider } from '@apollo/client';
import { client } from '@/lib/apollo-client';

export default function ApolloProvider({ children }) {
  return <Provider client={client}>{children}</Provider>;
}

// Using GraphQL in components
'use client';
import { useQuery, useMutation, gql } from '@apollo/client';

const GET_PRODUCTS = gql\`
  query GetProducts($category: String) {
    products(category: $category) {
      id
      name
      price
      category
    }
  }
\`;

const CREATE_PRODUCT = gql\`
  mutation CreateProduct($name: String!, $price: Float!, $category: String!) {
    createProduct(name: $name, price: $price, category: $category) {
      id
      name
      price
    }
  }
\`;

export default function ProductList() {
  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS, {
    variables: { category: 'electronics' },
  });
  
  const [createProduct, { loading: creating }] = useMutation(CREATE_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCTS }],
  });
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      {data.products.map(product => (
        <div key={product.id}>{product.name} - \${product.price}</div>
      ))}
      <button onClick={() => createProduct({
        variables: { name: 'New Product', price: 99.99, category: 'electronics' }
      })}>
        Add Product
      </button>
    </div>
  );
}

// Server-side GraphQL queries
// app/products/page.js
import { client } from '@/lib/apollo-client';
import { GET_PRODUCTS } from '@/lib/queries';

export default async function ProductsPage() {
  const { data } = await client.query({
    query: GET_PRODUCTS,
    variables: { category: 'electronics' },
    context: { fetchOptions: { next: { revalidate: 60 } } },
  });
  
  return (
    <div>
      {data.products.map(product => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}`,
      output: "Complete GraphQL integration with type safety and efficient data fetching",
      note: "Use Apollo Client for caching, code generation for TypeScript types."
    },

    // ========== CONTINUED EXPERIENCED QUESTIONS (15-20) ==========
    {
      question: "How to implement server-sent events (SSE) in Next.js?",
      answer: "SSE enables server push to client for real-time updates. Implement using ReadableStream in API routes or custom server.",
      example: `// SSE API route (Edge Runtime)
// app/api/sse/route.js
export const runtime = 'edge';

export async function GET(request) {
  const encoder = new TextEncoder();
  
  const stream = new ReadableStream({
    start(controller) {
      // Send initial data
      controller.enqueue(encoder.encode(\`data: \${JSON.stringify({ type: 'connected' })}\\n\\n\`));
      
      // Send periodic updates
      const interval = setInterval(() => {
        const data = {
          timestamp: Date.now(),
          value: Math.random() * 100,
        };
        controller.enqueue(encoder.encode(\`data: \${JSON.stringify(data)}\\n\\n\`));
      }, 1000);
      
      // Cleanup on close
      return () => {
        clearInterval(interval);
      };
    },
  });
  
  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

// Client for SSE
// components/RealTimeData.jsx
'use client';
import { useEffect, useState } from 'react';

export default function RealTimeData() {
  const [data, setData] = useState([]);
  const [connected, setConnected] = useState(false);
  
  useEffect(() => {
    const eventSource = new EventSource('/api/sse');
    
    eventSource.onopen = () => {
      console.log('SSE connected');
      setConnected(true);
    };
    
    eventSource.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      setData(prev => [parsedData, ...prev].slice(0, 20));
    };
    
    eventSource.onerror = (error) => {
      console.error('SSE error:', error);
      setConnected(false);
      eventSource.close();
      
      // Reconnect after 5 seconds
      setTimeout(() => {
        new EventSource('/api/sse');
      }, 5000);
    };
    
    return () => {
      eventSource.close();
    };
  }, []);
  
  return (
    <div>
      <div>Status: {connected ? '🟢 Connected' : '🔴 Disconnected'}</div>
      <div>
        {data.map((item, i) => (
          <div key={i}>
            Time: {new Date(item.timestamp).toLocaleTimeString()} - Value: {item.value.toFixed(2)}
          </div>
        ))}
      </div>
    </div>
  );
}

// Database-driven SSE (real-time updates)
// app/api/sse/posts/route.js
import { prisma } from '@/lib/prisma';

export const runtime = 'edge';

export async function GET(request) {
  const encoder = new TextEncoder();
  let lastId = 0;
  
  const stream = new ReadableStream({
    async start(controller) {
      const checkForNewPosts = async () => {
        const newPosts = await prisma.post.findMany({
          where: { id: { gt: lastId } },
          orderBy: { id: 'asc' },
        });
        
        for (const post of newPosts) {
          controller.enqueue(encoder.encode(\`data: \${JSON.stringify(post)}\\n\\n\`));
          lastId = post.id;
        }
      };
      
      // Check every 2 seconds
      const interval = setInterval(checkForNewPosts, 2000);
      
      return () => clearInterval(interval);
    },
  });
  
  return new Response(stream, {
    headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' },
  });
}

// Reconnect with exponential backoff
// lib/sse-client.js
export class SSEClient {
  constructor(url, onMessage, onError) {
    this.url = url;
    this.onMessage = onMessage;
    this.onError = onError;
    this.reconnectAttempts = 0;
    this.maxReconnectAttempts = 10;
    this.baseDelay = 1000;
    this.connect();
  }
  
  connect() {
    this.eventSource = new EventSource(this.url);
    
    this.eventSource.onopen = () => {
      console.log('SSE connected');
      this.reconnectAttempts = 0;
    };
    
    this.eventSource.onmessage = (event) => {
      this.onMessage(JSON.parse(event.data));
    };
    
    this.eventSource.onerror = () => {
      this.eventSource.close();
      this.reconnect();
    };
  }
  
  reconnect() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      this.onError(new Error('Max reconnect attempts reached'));
      return;
    }
    
    const delay = this.baseDelay * Math.pow(2, this.reconnectAttempts);
    console.log(\`Reconnecting in \${delay}ms...\`);
    
    setTimeout(() => {
      this.reconnectAttempts++;
      this.connect();
    }, delay);
  }
  
  close() {
    if (this.eventSource) {
      this.eventSource.close();
    }
  }
}`,
      output: "Real-time server push without WebSocket complexity",
      note: "SSE is ideal for monitoring, notifications, and live updates. Use WebSockets for bi-directional communication."
    },
    {
      question: "How to implement zero-downtime deployments with Next.js?",
      answer: "Zero-downtime deployments using Vercel's built-in feature, AWS Blue/Green, or custom load balancer with multiple instances.",
      example: `// Vercel deployment (automatic zero-downtime)
// vercel.json
{
  "version": 2,
  "builds": [{ "src": "package.json", "use": "@vercel/next" }],
  "routes": [{ "src": "/(.*)", "dest": "/$1" }],
  "regions": ["iad1", "sfo1"],
  "functions": {
    "app/**/*.js": {
      "maxDuration": 30,
      "memory": 1024
    }
  }
}

// Blue/Green deployment with AWS
// deploy.sh
#!/bin/bash

# Deploy to green environment
npm run build:green
npm run start:green &

# Health check
curl --retry 10 --retry-delay 5 http://localhost:3001/api/health

# Switch load balancer to green
aws elbv2 modify-listener --listener-arn $LISTENER_ARN \
  --default-actions Type=forward,TargetGroupArn=$GREEN_TG_ARN

# Decommission blue environment
npm run stop:blue

// Health check endpoint
// app/api/health/route.js
import { prisma } from '@/lib/prisma';

export async function GET() {
  const healthcheck = {
    uptime: process.uptime(),
    timestamp: Date.now(),
    status: 'healthy',
    checks: {
      database: false,
      redis: false,
    },
  };
  
  try {
    await prisma.$queryRaw\`SELECT 1\`;
    healthcheck.checks.database = true;
  } catch (error) {
    healthcheck.status = 'unhealthy';
    healthcheck.checks.database = false;
  }
  
  // Check Redis if used
  try {
    await redis.ping();
    healthcheck.checks.redis = true;
  } catch (error) {
    healthcheck.checks.redis = false;
  }
  
  const statusCode = healthcheck.status === 'healthy' ? 200 : 503;
  return Response.json(healthcheck, { status: statusCode });
}

// Graceful shutdown handling
// server.js (custom server)
const server = createServer(app);

server.listen(3000);

process.on('SIGTERM', async () => {
  console.log('SIGTERM received, closing server...');
  
  // Stop accepting new requests
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
  
  // Force exit after timeout
  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
  
  // Cleanup database connections
  await prisma.$disconnect();
  await redis.quit();
});

// Kubernetes deployment with rolling update
// deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nextjs-app
spec:
  replicas: 3
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    spec:
      containers:
      - name: nextjs
        image: nextjs-app:latest
        ports:
        - containerPort: 3000
        readinessProbe:
          httpGet:
            path: /api/health
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 10
        livenessProbe:
          httpGet:
            path: /api/health
            port: 3000
          initialDelaySeconds: 15
          periodSeconds: 20

// Load balancer configuration (nginx)
// nginx.conf
upstream backend {
    least_conn;
    server 10.0.1.2:3000 max_fails=3 fail_timeout=30s;
    server 10.0.1.3:3000 max_fails=3 fail_timeout=30s;
    server 10.0.1.4:3000 max_fails=3 fail_timeout=30s;
}

server {
    listen 80;
    location / {
        proxy_pass http://backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_next_upstream error timeout invalid_header http_500 http_502 http_503;
        proxy_next_upstream_tries 3;
    }
}`,
      output: "Zero downtime updates with automatic rollbacks and health checks",
      note: "Use Vercel for automatic zero-downtime, custom setup for other platforms."
    }
  ]
};