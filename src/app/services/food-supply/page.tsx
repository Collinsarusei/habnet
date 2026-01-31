"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Utensils, ArrowLeft, CheckCircle } from "lucide-react"
import Navigation from "@/components/Navigation"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function FoodSupplyPage() {
  const services = [
    "Granola and energy bars",
    "Dry cereal",
    "Rice",
    "Rose Coco Beans",
    "Maize meal sifted",
    "Sugar",
    "Deep Frying Oil",
    "Meat on Bones",
    "Green Grams",
    "Baked Beans",
    "Salt",
    "Fresh fruits",
    "Fresh vegetables",
    "Canned pasta",
    "Dried beans",
    "Peanut Butter",
    "Bread",
    "Bananas",
    "Eggs",
    "Oranges",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white relative overflow-hidden">
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
              <Utensils className="h-12 w-12" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Food Supply Services</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl max-w-4xl leading-relaxed"
          >
            Fresh, quality food supplies for schools, hospitals, government institutions, and businesses
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
                src="/images/food.jpg"
                alt="Food Supply"
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
                Reliable Food Supply Solutions
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Habnet Solutions is your trusted partner for comprehensive food supply services. We understand the critical importance of consistent, high-quality food provision for institutions and organizations. Our extensive network of suppliers ensures fresh produce, quality staples, and essential food items delivered on schedule.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We specialize in bulk food supply for schools, hospitals, hotels, government institutions, and corporate cafeterias. Our rigorous quality control processes guarantee that all food items meet health and safety standards. From fresh fruits and vegetables to pantry staples and proteins, we provide everything you need for nutritious meal preparation.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our cold chain logistics ensure that perishable items maintain their freshness from our warehouses to your doorstep. We work with certified suppliers and conduct regular quality inspections to maintain the highest standards of food safety and hygiene.
              </p>

              <Card className="mt-8 border-l-4 border-l-green-600">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Food Items We Supply</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {services.map((service, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{service}</span>
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
            className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 sm:p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Food Supply Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Fresh & Quality</h3>
                <p className="text-gray-700">Daily fresh deliveries with strict quality control measures</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
                <p className="text-gray-700">Bulk purchasing power translates to savings for you</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Reliable Delivery</h3>
                <p className="text-gray-700">On-time delivery with proper storage and handling</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Need Regular Food Supplies?</h2>
          <p className="text-xl mb-8">
            Contact us today to set up a reliable food supply schedule for your organization
          </p>
          <Link href="/contact">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get a Quote
            </button>
          </Link>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
