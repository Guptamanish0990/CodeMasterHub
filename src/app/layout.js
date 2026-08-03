// /src/app/layout.js (Root Layout)

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CodeMaster Hub - Learn, Practice, Succeed',
  description: 'Master coding from basics to advanced. Prepare for interviews and solve real-world coding challenges.',
  keywords: 'HTML, CSS, JavaScript, React, Next.js, Node.js, Python, MongoDB, WordPress, WooCommerce, Redux',
  authors: [{ name: 'Manish Gupta' }],
  metadataBase: new URL('https://code-master-hub-nine.vercel.app'),
  openGraph: {
    title: 'CodeMaster Hub - Learn, Practice, Succeed',
    description: 'Learn coding from basics to advanced',
    url: 'https://code-master-hub-nine.vercel.app/',
    siteName: 'CodeMaster Hub',
    images: [{ url: '/og-image.png' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeMaster Hub - Learn, Practice, Succeed',
    description: 'Learn coding from basics to advanced',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}