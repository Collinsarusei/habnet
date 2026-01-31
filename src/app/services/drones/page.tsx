"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, ArrowLeft, CheckCircle } from "lucide-react"
import Navigation from "@/components/Navigation"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function DronesPage() {
  const services = [
    "Aerial photography for events and real estate",
    "Aerial videography for commercials and documentaries",
    "Property inspections from above",
    "Construction site monitoring and progress tracking",
    "Event coverage from unique perspectives",
    "Real estate photography and virtual tours",
    "Survey and mapping for land development",
    "Agricultural monitoring and crop health assessment",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-pink-600 via-rose-700 to-red-800 text-white relative overflow-hidden">
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
              <Camera className="h-12 w-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Drones & Aerial Shots</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl max-w-4xl leading-relaxed"
          >
            Professional aerial photography and videography services capturing stunning perspectives from the sky
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
                src="/images/drones.png"
                alt="Drone Services"
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
                Elevate Your Vision with Drone Technology
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Habnet Solutions brings cutting-edge drone technology to capture breathtaking aerial perspectives that transform the way you see and showcase your projects. Our licensed and experienced drone pilots use state-of-the-art equipment to deliver stunning high-resolution imagery and cinematic video footage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you need dramatic aerial shots for marketing materials, detailed site surveys for construction projects, or captivating event coverage, our drone services provide unique viewpoints that ground-level photography simply cannot achieve. We combine technical expertise with creative vision to deliver results that exceed expectations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our advanced drones are equipped with 4K cameras, gimbal stabilization, and GPS precision, ensuring smooth, professional-quality footage in various weather conditions. We handle all flight permissions and safety protocols, so you can focus on your project while we capture the perfect shot.
              </p>

              <Card className="mt-8 border-l-4 border-l-pink-600">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Drone Services Include</h3>
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
                        <CheckCircle className="h-6 w-6 text-pink-600 flex-shrink-0 mt-0.5" />
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
            className="mt-16 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 sm:p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Drone Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Professional Equipment</h3>
                <p className="text-gray-700">High-end drones with 4K cameras and advanced stabilization</p>
              </div>
              <div className="text-center">
                <div className="bg-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Licensed Pilots</h3>
                <p className="text-gray-700">Certified and experienced operators with safety priority</p>
              </div>
              <div className="text-center">
                <div className="bg-pink-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Quick Turnaround</h3>
                <p className="text-gray-700">Fast editing and delivery of high-quality final footage</p>
              </div>
            </div>
          </motion.div>

          {/* Applications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Applications of Drone Technology
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🏗️</div>
                  <h3 className="font-bold mb-2">Construction</h3>
                  <p className="text-sm text-gray-600">Monitor progress, inspect hard-to-reach areas, and document projects</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🏡</div>
                  <h3 className="font-bold mb-2">Real Estate</h3>
                  <p className="text-sm text-gray-600">Showcase properties with stunning aerial views and virtual tours</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🎬</div>
                  <h3 className="font-bold mb-2">Events</h3>
                  <p className="text-sm text-gray-600">Capture weddings, festivals, and corporate events from above</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">🌾</div>
                  <h3 className="font-bold mb-2">Agriculture</h3>
                  <p className="text-sm text-gray-600">Monitor crop health, irrigation, and optimize farming operations</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Capture Your Vision from Above</h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your aerial photography needs and get a custom quote
          </p>
          <Link href="/contact">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
