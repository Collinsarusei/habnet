"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Legal Documents", href: "/legal-documents" },
    { name: "Project Structure", href: "/project-structure" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Company Logo/Name */}
          <Link href="/" className="flex-shrink-0 flex items-center space-x-2 sm:space-x-3">
            <Image
              src="/images/Habnetlogo.png"
              alt="Habnet Solutions Logo"
              width={40}
              height={40}
              className="rounded-lg object-contain sm:w-10 sm:h-10 md:w-12 md:h-12"
              priority
              sizes="(max-width: 640px) 40px, (max-width: 768px) 40px, 48px"
            />
            <h1 className="text-sm sm:text-lg md:text-xl font-bold text-blue-900">
              <span className="hidden sm:inline">HABNET SOLUTIONS LIMITED</span>
              <span className="sm:hidden">HABNET</span>
            </h1>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-2 lg:space-x-4 relative">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-blue-600 px-2 py-2 text-xs lg:text-sm font-medium transition-colors duration-200 hover:bg-blue-50 rounded-md ${
                    pathname === item.href ? "text-blue-600 bg-blue-50" : ""
                  }`}
                >
                  <span className={item.name.length > 10 ? "hidden lg:inline" : ""}>{item.name}</span>
                  <span className={item.name.length > 10 ? "lg:hidden" : "hidden"}>
                    {item.name.split(" ")[0]}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-blue-200 shadow-xl rounded-b-xl transition-all duration-300">
            <div className="px-3 pt-3 pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-blue-600 block px-4 py-3 text-base font-medium w-full text-left transition-colors duration-200 hover:bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    pathname === item.href ? "text-blue-600 bg-blue-50" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
