"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, ArrowLeft, CheckCircle } from "lucide-react"
import Navigation from "@/components/Navigation"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function TourismPage() {
  const services = [
    "Safari tours to Kenya's national parks",
    "Wildlife viewing experiences",
    "Cultural tours and village visits",
    "Beach holidays at the coast",
    "Mountain climbing expeditions",
    "City tours and historical sites",
    "Photography safaris",
    "Customized tour packages",
  ]

  const destinations = [
    { name: "Maasai Mara", description: "Witness the Great Migration and Big Five" },
    { name: "Amboseli", description: "Elephants with Mt. Kilimanjaro backdrop" },
    { name: "Diani Beach", description: "White sand beaches and water sports" },
    { name: "Mt. Kenya", description: "Africa's second-highest mountain" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-amber-600 via-orange-700 to-red-800 text-white relative overflow-hidden">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Tourism Services</h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl max-w-4xl leading-relaxed"
          >
            Discover the magic of Kenya with exciting tourism experiences and unforgettable safari adventures
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
                src="/images/safari1.jpg"
                alt="Tourism Safari"
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
                Experience the Wonders of Kenya
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Habnet Solutions Tourism Services invites you to discover the incredible beauty and diversity of Kenya. From the vast savannas of the Maasai Mara to the pristine beaches of the Indian Ocean coast, from snow-capped mountains to vibrant cities, Kenya offers unforgettable experiences for every traveler. Our expertly crafted tours showcase the best of what our beautiful country has to offer.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our safari packages are designed to give you intimate encounters with Africa's magnificent wildlife. Watch lions stalking prey, witness thousands of wildebeest during the Great Migration, and observe elephants roaming freely in their natural habitat. Our experienced guides ensure not just sightings, but understanding of the ecosystems and conservation efforts protecting these treasures.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Beyond wildlife, we offer rich cultural experiences including visits to Maasai and Samburu villages, exploration of Swahili coastal heritage, and tours of Kenya's historical sites. Whether you're seeking adventure, relaxation, cultural immersion, or photographic opportunities, we customize tours to match your interests and create memories that last a lifetime.
              </p>

              <Card className="mt-8 border-l-4 border-l-amber-600">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Tourism Services We Offer</h3>
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
                        <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-lg">{service}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Popular Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Popular Destinations
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((destination, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                    <p className="text-gray-600">{destination.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 sm:p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Tourism Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Expert Guides</h3>
                <p className="text-gray-700">Knowledgeable guides with deep understanding of wildlife and culture</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Custom Packages</h3>
                <p className="text-gray-700">Tailored itineraries matching your preferences and budget</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Comfort & Safety</h3>
                <p className="text-gray-700">Quality accommodations and safe, well-maintained vehicles</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Start Your Kenyan Adventure</h2>
          <p className="text-xl mb-8">
            Contact us today to book your dream safari and experience the magic of Kenya
          </p>
          <Link href="/contact">
            <button className="bg-white text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Your Safari
            </button>
          </Link>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  )
}
