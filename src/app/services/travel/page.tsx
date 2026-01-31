"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Plane, ArrowLeft, CheckCircle } from "lucide-react"
import Navigation from "@/components/Navigation"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function TravelPage() {
  const services = [
    "Flight bookings (domestic and international)",
    "Hotel reservations worldwide",
    "Travel insurance",
    "Visa assistance and processing",
    "Car rental services",
    "Group travel arrangements",
    "Business travel packages",
    "Holiday packages and itinerary planning",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-indigo-600 via-blue-700 to-cyan-800 text-white relative overflow-hidden">
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
              <Plane className="h-12 w-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Travel Agency Services</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl max-w-4xl leading-relaxed"
          >
            Complete travel planning and booking services to make your journey smooth and memorable
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
                src="/images/travel1.jpg"
                alt="Travel Agency"
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
                Your Gateway to the World
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Habnet Solutions Travel Agency takes the stress out of travel planning. Whether you're traveling for business or leisure, domestically or internationally, our experienced travel consultants handle all the details so you can focus on enjoying your journey. We partner with leading airlines, hotels, and service providers worldwide to offer you the best deals and seamless travel experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our comprehensive travel services cover everything from flight bookings and hotel reservations to visa processing and travel insurance. We understand that every traveler has unique needs, which is why we offer personalized itinerary planning tailored to your preferences, budget, and schedule. Our team stays updated on travel requirements, restrictions, and the best travel routes to ensure smooth journeys.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                For corporate clients, we offer specialized business travel management services including corporate rates, travel policy compliance, and detailed expense reporting. For leisure travelers, we curate exciting holiday packages, honeymoon getaways, and adventure trips. Our 24/7 support ensures assistance whenever you need it during your travels.
              </p>

              <Card className="mt-8 border-l-4 border-l-indigo-600">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Travel Services We Offer</h3>
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
                        <CheckCircle className="h-6 w-6 text-indigo-600 flex-shrink-0 mt-0.5" />
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
            className="mt-16 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 sm:p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Travel Agency?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Best Rates</h3>
                <p className="text-gray-700">Competitive prices through global partnerships</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Expert Advice</h3>
                <p className="text-gray-700">Knowledgeable consultants with travel expertise</p>
              </div>
              <div className="text-center">
                <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-700">Always available to assist during your travels</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Plan Your Next Trip?</h2>
          <p className="text-xl mb-8">
            Contact us today and let our travel experts create the perfect itinerary for you
          </p>
          <Link href="/contact">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Plan Your Journey
            </button>
          </Link>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
