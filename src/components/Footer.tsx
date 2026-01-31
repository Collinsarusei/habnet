import React from "react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">HABNET SOLUTIONS LIMITED</h3>
            <p className="text-gray-400">
              Innovatively designing and facilitating effective supply systems and services.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <p className="text-gray-400 text-sm">
              MBARIA COMPLEX, KENYATTA AVENUE
              <br />
              NYAHURURU, KENYA
              <br />
              Phone: +254 725 171365
              <br />
              Email: habnetsolutions@gmail.com
            </p>
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">© 2025 Habnet Solutions Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
