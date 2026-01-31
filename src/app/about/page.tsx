"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Eye,
  Heart,
  Shield,
  Users,
  AlertTriangle,
  DollarSign,
  ChevronUp,
  Star,
  Quote,
} from "lucide-react"
import Navigation from "@/components/Navigation"
import WhatsAppButton from "@/components/WhatsAppButton"
import Link from "next/link"

export default function AboutPage() {
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

  const coreValues = [
    {
      icon: Shield,
      title: "Quality, Health, Safety & Environment",
      description: "Uncompromising commitment to Quality, Health, Safety and Environment",
    },
    {
      icon: Users,
      title: "Employee Relations",
      description: "An open relationship with our employees based on mutual trust, respect and success",
    },
    {
      icon: Eye,
      title: "Transparency & Accountability",
      description: "Transparency, Accountability and Discipline in our business",
    },
    {
      icon: AlertTriangle,
      title: "Risk Awareness",
      description: "Best in class risk awareness",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Integrity in all we do",
    },
    {
      icon: DollarSign,
      title: "Financial Responsibility",
      description: "Financial Responsibility to our stakeholders",
    },
  ]

  const testimonials = [
    {
      name: "John Kariuki",
      position: "Procurement Manager, Ministry of Health",
      content:
        "Habnet Solutions has been our trusted supplier for medical equipment and supplies. Their professionalism and timely delivery are unmatched.",
      rating: 5,
    },
    {
      name: "Sarah Njeri",
      position: "Director, Greenfield Schools",
      content:
        "We have worked with Habnet for our educational supplies and food provisions. Their quality and service excellence have made them our preferred partner.",
      rating: 5,
    },
    {
      name: "David Mwangi",
      position: "Project Manager, KenConstruct Ltd",
      content:
        "The construction materials and services provided by Habnet Solutions are top-notch. They understand the industry and deliver on their promises.",
      rating: 5,
    },
    {
      name: "Grace Wanjiku",
      position: "Operations Manager, Safari Adventures",
      content:
        "Their travel and tourism services have helped us organize successful safaris for our international clients. Highly recommended!",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-amber-600 via-orange-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
            <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed">
              Building relationships based on trust, excellence, and innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Habnet Solutions Limited is committed to professional job satisfaction and continuous professional
                  development of its staff and associates. We are dealers in Office Equipment, Furniture, Computers &
                  Accessories, General Stationery, Real Estate and Executive Car Hire Services.
                </p>
                <p>
                  We also offer various services under civil works, building works, construction services and a wide
                  range of Engineering and Architectural works. Our team of highly qualified professionals is dedicated
                  to building a relationship based on mutual trust in order to bring the best services possible to our
                  clients.
                </p>
                <p>
                  We focus on providing prompt and efficient services at very competitive prices to our clients. We are
                  dedicated and widely known and respected in the market, especially in consumer companies, financial,
                  NGO, and Government sectors.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/images/about2.jpeg"
                alt="Habnet Solutions Team"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl object-cover w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission and Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-blue-50 border-blue-200 hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900 flex items-center">
                    <Eye className="mr-3 h-8 w-8" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To innovatively design and facilitate an effective supply system and services. To provide value for
                    money by ensuring competition, fairness, transparency and accountability while contributing to
                    customer service care.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-green-50 border-green-200 hover:shadow-xl transition-shadow duration-300 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-green-900 flex items-center">
                    <Heart className="mr-3 h-8 w-8" />
                    Our Assurance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our success is based upon our customer focus. We listen to, and connect with, customers and treat
                    them with dignity and respect. By understanding and anticipating their needs, we make it easy for
                    our customers to do business with us. We aim to offer them value and quality services to enrich
                    lives and enhance business success.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our values guide everything we do and define who we are as a company
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-600 h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <value.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Card className="bg-white hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-4">
                      <Quote className="h-8 w-8 text-blue-600" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-600 mt-1">{testimonial.position}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Partner With Us</h2>
            <p className="text-xl mb-8">
              Experience excellence in service delivery and build lasting business relationships
            </p>
            <Link href="/contact">
              <button className="bg-white text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get In Touch
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
