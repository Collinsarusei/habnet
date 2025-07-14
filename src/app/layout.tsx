import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
