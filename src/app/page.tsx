"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Building, Utensils, Wrench, ChevronUp } from "lucide-react"
import Navigation from "@/components/Navigation"
import WhatsAppButton from "@/components/WhatsAppButton"
import dynamic from "next/dynamic"

const Globe3D = dynamic(() => import("@/components/Globe3D"), {
  ssr: false,
  loading: () => <div className="w-full h-64 bg-gray-100 rounded-lg animate-pulse" />,
})

export default function HomePage() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [globeWidth, setGlobeWidth] = useState(420)
  const heroImages = [
    "/images/optimized/hero_background.webp",
    "/images/optimized/constructin_materials.webp",
    "/images/optimized/borehole drilling.webp",
    "/images/optimized/construction.webp",
    "/images/optimized/road construction.webp",
    "/images/optimized/food.webp",
  ]
  const [heroBgIndex, setHeroBgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroBgIndex((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const updateGlobeWidth = () => {
      setGlobeWidth(Math.min(window.innerWidth - 32, 420))
    }
    updateGlobeWidth()
    window.addEventListener("resize", updateGlobeWidth)
    return () => window.removeEventListener("resize", updateGlobeWidth)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const featuredServices = [
    {
      title: "General Supply",
      description: "Office equipment, stationery, educational supplies, and medical equipment to meet all your business needs.",
      icon: Building,
      image: "/images/optimized/constructin_materials.webp",
      href: "/services#general-supply",
    },
    {
      title: "Food Supply",
      description: "Fresh and quality food supplies including fruits, vegetables, grains, and more for your organization.",
      icon: Utensils,
      image: "/images/optimized/food.webp",
      href: "/services#food-supply",
    },
    {
      title: "Construction Services",
      description: "Professional construction, renovation, and engineering services for residential and commercial projects.",
      icon: Wrench,
      image: "/images/optimized/construction.webp",
      href: "/services#construction",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <section id="hero" className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-16 relative" style={{ backgroundImage: `url('${heroImages[heroBgIndex]}')`, transition: "background-image 1s ease-in-out" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
              <div className="bg-white/90 backdrop-blur-md text-gray-800 p-6 sm:p-8 rounded-xl shadow-xl border border-white/20">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">HABNET SOLUTIONS LIMITED<span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 mt-2 font-medium">COMPANY PROFILE</span></h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">Innovatively designing and facilitating effective supply systems and services.</p>
                <Link href="/services"><Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl font-semibold">Explore Our Services<ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" /></Button></Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <Image src="/images/Habnetlogo.png" alt="Habnet Solutions Limited Logo" width={500} height={400} className="rounded-xl shadow-2xl object-contain w-full max-w-md mx-auto lg:max-w-lg bg-white/90 backdrop-blur-sm p-8" priority sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px" />
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Discover our comprehensive range of professional services designed to meet your business needs.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }}>
                <Link href={service.href}>
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-t-4 border-t-blue-600 group overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4"><div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 mb-2"><service.icon className="h-6 w-6 text-blue-600" /></div></div>
                    </div>
                    <CardHeader><CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</CardTitle></CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-base leading-relaxed">{service.description}</CardDescription>
                      <div className="mt-4 flex items-center text-blue-600 font-semibold group-hover:text-blue-700">Learn More<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.8 }} className="text-center mt-12">
            <Link href="/services"><Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">View All Services<ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
          </motion.div>
        </div>
      </section>
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">Our Global Reach</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">Recognized internationally for excellence, innovation, and reliability in delivering world-class solutions.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12"><Globe3D width={globeWidth} /></motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex flex-col gap-6">
              <Image src="/images/businesstrip.jpeg" alt="Business Trip" width={400} height={260} className="rounded-xl shadow-xl object-cover w-full" />
              <Image src="/images/recognition.jpeg" alt="International Recognition" width={400} height={260} className="rounded-xl shadow-lg object-cover w-full" />
            </div>
            <div className="flex flex-col gap-6">
              <Image src="/images/global1.jpeg" alt="Global Partnership" width={400} height={260} className="rounded-xl shadow-lg object-cover w-full" />
              <Image src="/images/global2.jpeg" alt="International Collaboration" width={400} height={260} className="rounded-xl shadow-lg object-cover w-full" />
            </div>
            <div className="flex flex-col gap-6 items-center justify-center">
              <Image src="/images/ceo1.jpeg" alt="CEO on International Business" width={320} height={320} className="rounded-full shadow-2xl object-cover border-4 border-blue-200" />
              <div className="bg-white/80 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-2">International Experience</h3>
                <p className="text-gray-700">Our leadership has represented Habnet Solutions across continents, building partnerships and earning recognition for excellence.</p>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-16 flex flex-col md:flex-row items-center gap-10 bg-white/80 rounded-2xl p-8 shadow-xl">
            <Image src="/images/ceo2.jpeg" alt="CEO Abraham Rono" width={280} height={280} className="rounded-2xl shadow-2xl object-cover border-4 border-orange-200" />
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-orange-800 mb-3">Meet Our CEO Abraham Rono</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Abraham Rono leads Habnet Solutions Limited with vision, integrity, and a passion for excellence. With extensive international experience, Abraham has steered the company to new heights, ensuring every client receives world-class service and innovative solutions that drive success.</p>
            </div>
          </motion.div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div><h3 className="text-xl font-bold mb-4">HABNET SOLUTIONS LIMITED</h3><p className="text-gray-400">Innovatively designing and facilitating effective supply systems and services.</p></div>
            <div><h4 className="text-lg font-semibold mb-4">Quick Links</h4><ul className="space-y-2"><li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li><li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li><li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li></ul></div>
            <div><h4 className="text-lg font-semibold mb-4">Contact Info</h4><p className="text-gray-400 text-sm">MBARIA COMPLEX, KENYATTA AVENUE<br />NYAHURURU, KENYA<br />Phone: +254 725 171365<br />Email: habnetsolutions@gmail.com</p></div>
          </div>
          <div className="text-center pt-8 border-t border-gray-800"><p className="text-gray-400 text-sm">© 2025 Habnet Solutions Limited. All rights reserved.</p></div>
        </div>
      </footer>
      {showBackToTop && (<button onClick={scrollToTop} className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40 focus:outline-none focus:ring-2 focus:ring-blue-300"><ChevronUp className="h-6 w-6" /></button>)}
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
