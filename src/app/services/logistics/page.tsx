"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, ArrowLeft, CheckCircle } from "lucide-react"
import Navigation from "@/components/Navigation"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function LogisticsPage() {
  const services = [
    "Freight forwarding and transportation",
    "Warehousing and storage solutions",
    "Supply chain management",
    "Distribution services",
    "Last-mile delivery",
    "Fleet management",
    "Cargo handling and loading",
    "Inventory management",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-600 via-gray-700 to-zinc-800 text-white relative overflow-hidden">
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
              <Truck className="h-12 w-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Logistics Services</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl max-w-4xl leading-relaxed"
          >
            Efficient logistics and transportation solutions moving your business forward
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
                src="/images/Logistics.jpeg"
                alt="Logistics Services"
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
                Seamless Logistics Solutions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Habnet Solutions provides comprehensive logistics services designed to streamline your supply chain and ensure efficient movement of goods. Our logistics expertise covers everything from freight forwarding to last-mile delivery, helping businesses optimize their operations and reduce costs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We understand that timely delivery is crucial for business success. Our modern fleet of vehicles, experienced drivers, and advanced tracking systems ensure your cargo reaches its destination safely and on schedule. Whether you need regular distribution services or specialized freight handling, we have the capacity and expertise to meet your requirements.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our warehousing facilities provide secure storage solutions with inventory management systems that give you real-time visibility of your stock. We handle goods with care and maintain strict security protocols to protect your assets. Our supply chain management services help businesses optimize their logistics operations, reduce transit times, and improve overall efficiency.
              </p>

              <Card className="mt-8 border-l-4 border-l-slate-600">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Logistics Services We Offer</h3>
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
                        <CheckCircle className="h-6 w-6 text-slate-600 flex-shrink-0 mt-0.5" />
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
            className="mt-16 bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8 sm:p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Logistics Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-slate-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Reliable Fleet</h3>
                <p className="text-gray-700">Modern, well-maintained vehicles ensuring safe transportation</p>
              </div>
              <div className="text-center">
                <div className="bg-slate-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Real-Time Tracking</h3>
                <p className="text-gray-700">Advanced systems for complete visibility of your shipments</p>
              </div>
              <div className="text-center">
                <div className="bg-slate-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Cost Effective</h3>
                <p className="text-gray-700">Optimized routes and efficient operations reducing costs</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-600 to-gray-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Need Logistics Support?</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your logistics needs and get a customized solution
          </p>
          <Link href="/contact">
            <button className="bg-white text-slate-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get a Quote
            </button>
          </Link>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
