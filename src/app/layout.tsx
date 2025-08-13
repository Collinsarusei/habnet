import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

// Use system fonts for better performance and offline support
const systemFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif'
].join(', ')

export const metadata: Metadata = {
  title: "HABNET SOLUTIONS LIMITED - Professional Supply Systems & Services",
  description:
    "Innovatively designing and facilitating effective supply systems and services. We offer office equipment, construction services, food supply, borehole drilling, and more in Nyahururu, Kenya.",
  keywords:
    "Habnet Solutions, office equipment, construction services, food supply, borehole drilling, Nyahururu, Kenya, building materials, road construction",
  authors: [{ name: "Habnet Solutions Limited" }],
  openGraph: {
    title: "HABNET SOLUTIONS LIMITED - Professional Supply Systems & Services",
    description: "Innovatively designing and facilitating effective supply systems and services in Nyahururu, Kenya.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    'theme-color': '#3b82f6',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/optimized/logo.webp" as="image" />
        <link rel="preload" href="/images/optimized/hero_background.webp" as="image" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        
        {/* Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if ('performance' in window) {
                window.addEventListener('load', () => {
                  setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                      console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
                      console.log('DOM Content Loaded:', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart, 'ms');
                    }
                  }, 0);
                });
              }
            `,
          }}
        />
      </head>
      <body style={{ fontFamily: systemFonts }}>{children}</body>
    </html>
  )
}
