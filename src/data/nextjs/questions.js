// /data/nextjs/questions.js

export const questions = [
  {
    line: "export default function Page() {}",
    explanation: "Defines a page component in the App Router. The file name determines the route path.",
    example: "File app/about/page.js → creates route /about",
    output: "The page becomes accessible at the corresponding URL path"
  },
  {
    line: "export const revalidate = 60;",
    explanation: "Enables ISR (Incremental Static Regeneration) - page regenerates at most every 60 seconds in background.",
    example: "Add to page component or getStaticProps in Pages Router",
    output: "Stale content served, fresh content generated in background"
  },
  {
    line: "'use client'",
    explanation: "Marks a component as Client Component that runs on the client-side with interactivity.",
    example: "Needed for using hooks like useState, useEffect, and event handlers",
    output: "Component hydrates on client and becomes interactive"
  },
  {
    line: "import Link from 'next/link'",
    explanation: "Imports Next.js Link component for client-side navigation between pages.",
    example: "<Link href='/about'>About</Link>",
    output: "Navigates to /about without full page reload, with automatic prefetching"
  },
  {
    line: "import Image from 'next/image'",
    explanation: "Imports Next.js optimized Image component for automatic image optimization.",
    example: "<Image src='/photo.jpg' width={500} height={300} alt='Photo' />",
    output: "Image is lazy loaded, optimized, and responsive with built-in lazy loading"
  },
  {
    line: "import { notFound } from 'next/navigation'",
    explanation: "Function that triggers a 404 error page when called, useful for handling missing data.",
    example: "if (!post) notFound();",
    output: "Shows the custom 404 page when data doesn't exist"
  },
  {
    line: "import { redirect } from 'next/navigation'",
    explanation: "Function that redirects users to another URL, can be used in Server Components and Server Actions.",
    example: "if (!session) redirect('/login');",
    output: "User is immediately redirected to the specified route"
  },
  {
    line: "import { useRouter } from 'next/navigation'",
    explanation: "Hook for programmatic navigation in Client Components, provides router methods.",
    example: "const router = useRouter(); router.push('/dashboard');",
    output: "Navigates programmatically after user actions like form submission"
  },
  {
    line: "import { usePathname } from 'next/navigation'",
    explanation: "Hook that returns the current URL pathname, useful for active link highlighting.",
    example: "const pathname = usePathname();",
    output: "Returns string like '/about' for current route"
  },
  {
    line: "import { useSearchParams } from 'next/navigation'",
    explanation: "Hook that provides access to URL query parameters in Client Components.",
    example: "const searchParams = useSearchParams(); const id = searchParams.get('id');",
    output: "Retrieves query parameter values from URL"
  },
  {
    line: "export async function generateStaticParams()",
    explanation: "Generates static paths for dynamic routes at build time for SSG.",
    example: "return posts.map(post => ({ slug: post.slug }));",
    output: "Pre-renders all specified dynamic routes at build time"
  },
  {
    line: "export async function generateMetadata()",
    explanation: "Dynamically generates SEO metadata (title, description, Open Graph) for each page.",
    example: "return { title: post.title, description: post.excerpt };",
    output: "Sets dynamic meta tags for SEO and social sharing"
  },
  {
    line: "export const metadata = { title: 'My Page' }",
    explanation: "Static metadata export for setting page title, description, and Open Graph tags.",
    example: "export const metadata = { title: 'Home', description: 'Welcome' };",
    output: "Sets static SEO metadata for the page"
  },
  {
    line: "import { cookies } from 'next/headers'",
    explanation: "Function to read and write cookies in Server Components and Route Handlers.",
    example: "const cookieStore = cookies(); const token = cookieStore.get('token');",
    output: "Access HTTP cookies on the server side"
  },
  {
    line: "import { headers } from 'next/headers'",
    explanation: "Function to read HTTP request headers in Server Components.",
    example: "const headersList = headers(); const userAgent = headersList.get('user-agent');",
    output: "Access request headers like user-agent, referer on server"
  },
  {
    line: "export function middleware(request) {}",
    explanation: "Middleware function that runs before requests, used for auth, redirects, logging.",
    example: "if (!token) return NextResponse.redirect(new URL('/login', request.url));",
    output: "Executes code before the request reaches the page"
  },
  {
    line: "export const config = { matcher: ['/dashboard/:path*'] }",
    explanation: "Configures which routes trigger middleware execution using pattern matching.",
    example: "matcher: ['/api/:path*', '/dashboard/:path*']",
    output: "Middleware runs only on specified routes, improving performance"
  },
  {
    line: "import { Suspense } from 'react'",
    explanation: "React component that shows fallback UI while async components are loading.",
    example: "<Suspense fallback={<Loading />}><AsyncComponent /></Suspense>",
    output: "Shows loading state while data is being fetched"
  },
  {
    line: "next: { revalidate: 60 }",
    explanation: "Fetch option that enables ISR - data revalidates every specified seconds.",
    example: "fetch(url, { next: { revalidate: 60 } })",
    output: "Data is cached and refreshed every 60 seconds in background"
  },
  {
    line: "cache: 'no-store'",
    explanation: "Fetch option that disables caching, always fetches fresh data from the server.",
    example: "fetch(url, { cache: 'no-store' })",
    output: "Always gets latest data, never uses cached response"
  },
  {
    line: "next: { tags: ['posts'] }",
    explanation: "Fetch option that adds tags to cached data for on-demand revalidation.",
    example: "fetch(url, { next: { tags: ['posts', 'homepage'] } })",
    output: "Data can be revalidated using revalidateTag('posts')"
  },
  {
    line: "import { revalidateTag } from 'next/cache'",
    explanation: "Function to manually revalidate cached data by tag (on-demand revalidation).",
    example: "revalidateTag('posts');",
    output: "Clears cache for all fetches with specified tag"
  },
  {
    line: "import { revalidatePath } from 'next/cache'",
    explanation: "Function to manually revalidate cached data for specific URL path.",
    example: "revalidatePath('/blog');",
    output: "Clears cache for specified route path"
  },
  {
    line: "'use server'",
    explanation: "Directive that marks a function as a Server Action, runs on server only.",
    example: "async function createPost(formData) { 'use server'; ... }",
    output: "Function executes on server, can be called from Client Components"
  },
  {
    line: "import { useFormStatus } from 'react-dom'",
    explanation: "Hook that provides form submission status (pending state) in Server Actions.",
    example: "const { pending } = useFormStatus();",
    output: "Returns true while form is being submitted to server"
  },
  {
    line: "import { useFormState } from 'react-dom'",
    explanation: "Hook that manages form state and handles Server Action responses with validation errors.",
    example: "const [state, formAction] = useFormState(serverAction, initialState);",
    output: "Returns form state and action for handling validation errors"
  },
  {
    line: "export const runtime = 'edge'",
    explanation: "Configures the runtime for API routes or pages to use Edge Runtime for faster execution.",
    example: "export const runtime = 'edge';",
    output: "Code runs on Edge Runtime with global distribution"
  },
  {
    line: "export const dynamic = 'force-dynamic'",
    explanation: "Forces dynamic rendering and disables caching for the page (like SSR).",
    example: "export const dynamic = 'force-dynamic';",
    output: "Page renders dynamically on every request, no caching"
  },
  {
    line: "export const dynamic = 'force-static'",
    explanation: "Forces static generation even for dynamic routes that would normally be dynamic.",
    example: "export const dynamic = 'force-static';",
    output: "Page is statically generated at build time"
  },
  {
    line: "export const fetchCache = 'default-no-store'",
    explanation: "Controls caching behavior for all fetch requests in the route segment.",
    example: "export const fetchCache = 'default-no-store';",
    output: "Disables caching for all fetches in the route"
  }
];