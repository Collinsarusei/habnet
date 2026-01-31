"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Wrench, ArrowLeft, CheckCircle } from "lucide-react"
import Navigation from "@/components/Navigation"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function MaterialsPage() {
  const services = [
    "Cement and concrete",
    "Steel and reinforcement bars",
    "Timber and wood products",
    "Roofing materials (iron sheets, tiles)",
    "Paint and finishes",
    "Hardware and fixtures",
    "Electrical materials and wiring",
    "Plumbing materials and pipes",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-600 via-violet-700 to-indigo-800 text-white relative overflow-hidden">
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
              <Wrench className="h-12 w-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Construction Materials Supply</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl max-w-4xl leading-relaxed"
          >
            Quality construction materials for all your building needs, delivered on time every time
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
                src="/images/constructin_materials.jpg"
                alt="Construction Materials"
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
                Your One-Stop Construction Materials Supplier
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Habnet Solutions is your reliable partner for all construction material needs. We supply a comprehensive range of high-quality building materials sourced from reputable manufacturers and suppliers. Whether you're constructing a new building, renovating an existing structure, or undertaking a major infrastructure project, we have everything you need under one roof.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our extensive inventory includes cement, steel reinforcement bars, timber, roofing materials, paint, hardware, electrical supplies, and plumbing fixtures. We maintain strong relationships with leading manufacturers, enabling us to offer competitive prices and consistent product availability. Our materials meet all relevant building standards and quality certifications.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand that construction projects operate on tight schedules, which is why we've invested in efficient logistics to ensure timely delivery. Our fleet of delivery vehicles can transport materials to any site across Kenya. We also offer technical advice to help you select the right materials for your specific project requirements, ensuring optimal performance and cost-effectiveness.
              </p>

              <Card className="mt-8 border-l-4 border-l-purple-600">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Construction Materials We Supply</h3>
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
                        <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
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
            className="mt-16 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 sm:p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Material Supply Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
                <p className="text-gray-700">All materials certified and meet building standards</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Competitive Prices</h3>
                <p className="text-gray-700">Best market rates with flexible payment options</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Reliable Delivery</h3>
                <p className="text-gray-700">On-time delivery to any construction site</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-violet-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Need Construction Materials?</h2>
          <p className="text-xl mb-8">
            Contact us today for a comprehensive quote on all your construction material needs
          </p>
          <Link href="/contact">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get a Quote
            </button>
          </Link>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
