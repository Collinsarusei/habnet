"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Droplets, ArrowLeft, CheckCircle } from "lucide-react"
import Navigation from "@/components/Navigation"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function WaterSeweragePage() {
  const services = [
    "Borehole drilling and installation",
    "Water supply systems design and installation",
    "Sewerage system installation",
    "Water treatment systems",
    "Plumbing services for residential and commercial",
    "Pump installation and maintenance",
    "Water tank installation",
    "Septic tank construction and maintenance",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-cyan-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/services" className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to All Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-4 mb-6"
          >
            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
              <Droplets className="h-12 w-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Water & Sewerage Systems</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl max-w-4xl leading-relaxed"
          >
            Complete water and sewerage solutions ensuring clean water access and proper waste management
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/borehole drilling.jpg"
                alt="Water & Sewerage Systems"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Water Solutions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Habnet Solutions provides complete water and sewerage system solutions for homes, businesses, institutions, and communities. Access to clean water and proper sanitation is fundamental, and we're committed to delivering reliable systems that ensure both. Our experienced team handles everything from borehole drilling to complex sewerage installations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We use advanced drilling equipment capable of reaching deep water-bearing formations, ensuring reliable water supply even in challenging geological conditions. Our hydrogeological surveys identify the best drilling locations, maximizing success rates and water yield. We also install complete water distribution systems with proper filtration and treatment to ensure water quality meets WHO standards.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                For sewerage systems, we design and install efficient waste management solutions including septic tanks, biodigesters, and connection to municipal sewer lines. Our plumbing services cover installation, repairs, and maintenance of both water supply and drainage systems. We also provide ongoing maintenance services to keep your water and sewerage systems functioning optimally.
              </p>

              <Card className="mt-8 border-l-4 border-l-cyan-600">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Water & Sewerage Services</h3>
                  <ul className="space-y-3">
                    {services.map((service, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="h-6 w-6 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-lg">{service}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 sm:p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Water & Sewerage Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Expert Drilling</h3>
                <p className="text-gray-700">Advanced equipment and hydrogeological surveys for success</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Quality Systems</h3>
                <p className="text-gray-700">Durable materials and professional installation</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                <p className="text-gray-700">Maintenance services to keep systems running smoothly</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Need Water or Sewerage Solutions?</h2>
          <p className="text-xl mb-8">
            Contact us today for professional water and sewerage system installation and maintenance
          </p>
          <Link href="/contact">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Request a Survey
            </button>
          </Link>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
