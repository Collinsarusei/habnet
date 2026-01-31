"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { 
  Package, 
  Utensils, 
  Building, 
  Construction, 
  Droplets, 
  Wrench, 
  Plane,
  Camera,
  ChevronUp,
  ArrowRight
} from "lucide-react"
import Navigation from "@/components/Navigation"
import WhatsAppButton from "@/components/WhatsAppButton"

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

  const services = [
    {
      id: "drones",
      title: "Drones & Aerial Shots",
      icon: Camera,
      bgColor: "bg-pink-100",
      iconColor: "text-pink-600",
      image: "/images/drones.png",
      description: "Professional aerial photography and videography services",
      link: "/services/drones"
    },
    {
      id: "general-supply",
      title: "General Supply of Goods",
      icon: Package,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      image: "/images/constructin_materials.jpg",
      description: "Comprehensive supply solutions for your business needs",
      link: "/services/general-supply"
    },
    {
      id: "food-supply",
      title: "Food Supply",
      icon: Utensils,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      image: "/images/food.jpg",
      description: "Fresh and quality food supplies for your organization",
      link: "/services/food-supply"
    },
    {
      id: "construction",
      title: "Building & Construction",
      icon: Building,
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
      image: "/images/construction.jpg",
      description: "Professional construction services for residential and commercial buildings",
      link: "/services/construction"
    },
    {
      id: "road-construction",
      title: "Road Works & Construction",
      icon: Construction,
      bgColor: "bg-red-100",
      iconColor: "text-red-600",
      image: "/images/road construction.jpg",
      description: "Expert road construction and infrastructure development",
      link: "/services/road-works"
    },
    {
      id: "borehole",
      title: "Water & Sewerage Systems",
      icon: Droplets,
      bgColor: "bg-cyan-100",
      iconColor: "text-cyan-600",
      image: "/images/borehole drilling.jpg",
      description: "Complete water and sewerage solutions",
      link: "/services/water-sewerage"
    },
    {
      id: "materials",
      title: "Construction Materials Supply",
      icon: Wrench,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      image: "/images/constructin_materials.jpg",
      description: "Quality construction materials for all your building needs",
      link: "/services/materials"
    },
    {
      id: "travel-agency",
      title: "Travel Agency Services",
      icon: Plane,
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600",
      image: "/images/travel1.jpg",
      description: "Complete travel planning and booking services",
      link: "/services/travel"
    },
    {
      id: "tourism",
      title: "Tourism Services",
      icon: Camera,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      image: "/images/safari1.jpg",
      description: "Exciting tourism experiences and safari packages",
      link: "/services/tourism"
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={service.link}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-t-emerald-600 overflow-hidden group cursor-pointer">
                    {/* Service Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className={`p-3 ${service.bgColor} rounded-full`}>
                            <service.icon className={`h-6 w-6 ${service.iconColor}`} />
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
                      <div className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                        <span>Click to see more</span>
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
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
          className="fixed bottom-24 right-8 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}

      <WhatsAppButton />
    </div>
  )
}
