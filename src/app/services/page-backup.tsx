"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Package, 
  Utensils, 
  Building, 
  Construction, 
  Droplets, 
  Wrench, 
  Plane,
  Camera,
  ChevronUp
} from "lucide-react"
import Navigation from "@/components/Navigation"
import WhatsAppButton from "@/components/WhatsAppButton"
import Link from "next/link"

export default function ServicesPage() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const getIconColors = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string }> = {
      blue: { bg: "bg-blue-100", text: "text-blue-600" },
      green: { bg: "bg-green-100", text: "text-green-600" },
      orange: { bg: "bg-orange-100", text: "text-orange-600" },
      red: { bg: "bg-red-100", text: "text-red-600" },
      cyan: { bg: "bg-cyan-100", text: "text-cyan-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-600" },
      indigo: { bg: "bg-indigo-100", text: "text-indigo-600" },
      yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
      pink: { bg: "bg-pink-100", text: "text-pink-600" },
    }
    return colorMap[color] || { bg: "bg-gray-100", text: "text-gray-600" }
  }

  const services = [
    {
      id: "general-supply",
      title: "General Supply of Goods",
      icon: Package,
      color: "blue",
      image: "/images/constructin_materials.jpg",
      description: "Comprehensive supply solutions for your business needs",
      items: [
        "Printing services",
        "Supplies of office stationery",
        "Educational supplies",
        "Outdoor & Indoor advertising",
        "Pharmaceutical Supplies",
        "Protective Disposable Clothing",
        "Respiratory Equipments",
        "Medical equipment (radiology ICU, operation room assembly, nursery building materials)",
      ],
    },
    {
      id: "food-supply",
      title: "Food Supply",
      icon: Utensils,
      color: "green",
      image: "/images/food.jpg",
      description: "Fresh and quality food supplies for your organization",
      items: [
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
      ],
    },
    {
      id: "construction",
      title: "House Construction",
      icon: Building,
      color: "orange",
      image: "/images/construction.jpg",
      description: "Professional construction services for residential and commercial buildings",
      items: [
        "High-rise residential buildings",
        "Low-rise residential buildings",
        "Commercial buildings",
        "Institutional buildings",
        "Building renovation and maintenance",
      ],
    },
    {
      id: "road-construction",
      title: "Road Works & Construction",
      icon: Construction,
      color: "red",
      image: "/images/road construction.jpg",
      description: "Expert road construction and infrastructure development",
      items: [
        "Road construction and rehabilitation",
        "Highway development",
        "Bridge construction",
        "Drainage systems",
        "Pavement and surfacing",
        "Traffic management systems",
      ],
    },
    {
      id: "borehole",
      title: "Water & Sewerage Systems",
      icon: Droplets,
      color: "cyan",
      image: "/images/borehole drilling.jpg",
      description: "Complete water and sewerage solutions",
      items: [
        "Borehole drilling",
        "Water supply systems",
        "Sewerage installation",
        "Water treatment systems",
        "Plumbing services",
        "Pump installation and maintenance",
      ],
    },
    {
      id: "materials",
      title: "Construction Materials Supply",
      icon: Wrench,
      color: "purple",
      image: "/images/constructin_materials.jpg",
      description: "Quality construction materials for all your building needs",
      items: [
        "Cement and concrete",
        "Steel and reinforcement bars",
        "Timber and wood products",
        "Roofing materials",
        "Paint and finishes",
        "Hardware and fixtures",
        "Electrical materials",
        "Plumbing materials",
      ],
    },
    {
      id: "travel-agency",
      title: "Travel Agency Services",
      icon: Plane,
      color: "indigo",
      image: "/images/travel1.jpg",
      description: "Complete travel planning and booking services",
      items: [
        "Flight bookings (domestic and international)",
        "Hotel reservations",
        "Travel insurance",
        "Visa assistance",
        "Car rental services",
        "Group travel arrangements",
        "Business travel packages",
        "Holiday packages",
      ],
    },
    {
      id: "tourism",
      title: "Tourism Services",
      icon: Camera,
      color: "yellow",
      image: "/images/safari1.jpg",
      description: "Exciting tourism experiences and safari packages",
      items: [
        "Safari tours",
        "Wildlife viewing",
        "Cultural tours",
        "Beach holidays",
        "Mountain climbing",
        "City tours",
        "Photography safaris",
        "Customized tour packages",
      ],
    },
    {
      id: "drones",
      title: "Drones & Aerial Shots",
      icon: Camera,
      color: "pink",
      image: "/images/drones.png",
      description: "Professional aerial photography and videography services",
      items: [
        "Aerial photography",
        "Aerial videography",
        "Property inspections",
        "Construction site monitoring",
        "Event coverage",
        "Real estate photography",
        "Survey and mapping",
        "Agricultural monitoring",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
            <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed">
              Comprehensive solutions tailored to meet your business needs with excellence and professionalism
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-blue-600 overflow-hidden">
                  {/* Service Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className={`p-3 ${getIconColors(service.color).bg} rounded-full`}>
                          <service.icon className={`h-6 w-6 ${getIconColors(service.color).text}`} />
                        </div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <CardHeader>
                    <CardDescription className="text-gray-600 text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">What we offer:</h4>
                      <ul className="space-y-2">
                        {service.items.slice(0, 5).map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                            <span className="text-blue-600 mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                        {service.items.length > 5 && (
                          <li className="text-sm text-gray-500 italic">
                            + {service.items.length - 5} more services
                          </li>
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Contact us today to discuss how we can help you achieve your business goals
            </p>
            <Link href="/contact">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Contact Us Now
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
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
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-400 text-sm">
                MBARIA COMPLEX, KENYATTA AVENUE<br />
                NYAHURURU, KENYA<br />
                Phone: +254 725 171365<br />
                Email: habnetsolutions@gmail.com
              </p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">© 2025 Habnet Solutions Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
