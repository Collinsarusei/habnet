"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Menu,
  X,
  ArrowRight,
  Shield,
  Users,
  Eye,
  AlertTriangle,
  Heart,
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Building,
  Truck,
  Wrench,
  Droplets,
  Package,
  Utensils,
  ChevronUp,
} from "lucide-react"
import Image from "next/image"
import emailjs from 'emailjs-com'

export default function HabnetSolutions() {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // State for active service tab
  const [activeTab, setActiveTab] = useState("general-supply")
  // State for scroll position to show/hide back to top button
  const [showBackToTop, setShowBackToTop] = useState(false)
  // State for form submission
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })



  // Hero background slideshow images (excluding logo.jpeg and about_pcture.jpeg)
  const heroImages = [
    "/images/hero_background.jpeg",
    "/images/constructin_materials.jpg",
    "/images/borehole drilling.jpg",
    "/images/construction.jpg",
    "/images/road construction.jpg",
    "/images/food.jpg",
  ];
  const [heroBgIndex, setHeroBgIndex] = useState(0);

  // Animate hero background
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroBgIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Handle scroll events for animations and back to top button
  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('YOUR_USER_ID') // TODO: Replace with your EmailJS user ID
    
    const handleScroll = () => {
      // Show back to top button when scrolled down
      setShowBackToTop(window.scrollY > 300)

      // Animate elements on scroll - with error handling
      try {
        const elements = document.querySelectorAll(".animate-on-scroll")
        elements.forEach((element) => {
          if (element && element.getBoundingClientRect) {
            const elementTop = element.getBoundingClientRect().top
            const elementVisible = 150

            if (elementTop < window.innerHeight - elementVisible) {
              element.classList.add("animate-fade-in-up")
            }
          }
        })
      } catch (error) {
        console.log("Animation error:", error)
      }
    }

    // Add scroll listener with passive option for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Trigger initial animation check
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false) // Close mobile menu after navigation
    }
  }

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Show loading state
    const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement
    const originalText = submitButton.innerHTML
    submitButton.innerHTML = 'Sending...'
    submitButton.disabled = true
    
    // EmailJS configuration
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'habnetsolutions@gmail.com', // Company email
      company_name: 'Habnet Solutions Limited'
    }
    
    // Send email using EmailJS
    emailjs.send(
      'YOUR_SERVICE_ID', // TODO: Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // TODO: Replace with your EmailJS template ID
      templateParams,
      'YOUR_USER_ID' // TODO: Replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text)
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" })
      // Show success message
      alert("Thank you for your message! We have received it and will get back to you soon.")
    })
    .catch((error) => {
      console.error('FAILED...', error)
      alert("There was an error sending your message. Please try again or contact us directly at habnetsolutions@gmail.com")
    })
    .finally(() => {
      // Reset button state
      submitButton.innerHTML = originalText
      submitButton.disabled = false
    })
  }

  // Core values data with icons
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar - Sticky header with smooth scroll navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Company Logo/Name */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              <Image
                src="/images/logo.jpeg?v=2"
                alt="Habnet Solutions Logo"
                width={40}
                height={40}
                className="rounded-md object-cover"
                style={{ objectPosition: 'center 15%', transform: 'scale(1.3)', height: 'auto' }}
              />
              <h1 className="text-xl font-bold text-blue-900 cursor-pointer" onClick={() => scrollToSection("hero")}>
                HABNET SOLUTIONS LIMITED
              </h1>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { name: "Home", id: "hero" },
                  { name: "About Us", id: "about" },
                  { name: "Services", id: "services" },
                  { name: "Core Values", id: "values" },
                  { name: "Contact Us", id: "contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors duration-200 hover:bg-blue-50 rounded-md"
                  >
                    {item.name}
                  </button>
                ))}
                <Link href="/legal-documents">
                  <button className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors duration-200 hover:bg-blue-50 rounded-md">
                    Legal Documents
                  </button>
                </Link>
                <Link href="/project-structure">
                  <button className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors duration-200 hover:bg-blue-50 rounded-md">
                    Project Structure
                  </button>
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { name: "Home", id: "hero" },
                  { name: "About Us", id: "about" },
                  { name: "Services", id: "services" },
                  { name: "Core Values", id: "values" },
                  { name: "Contact Us", id: "contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 hover:bg-blue-50 rounded-md"
                  >
                    {item.name}
                  </button>
                ))}
                <Link href="/legal-documents">
                  <button className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 hover:bg-blue-50 rounded-md">
                    Legal Documents
                  </button>
                </Link>
                <Link href="/project-structure">
                  <button className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 hover:bg-blue-50 rounded-md">
                    Project Structure
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Full height with prominent headline and CTA */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-16 relative"
        style={{ backgroundImage: `url('${heroImages[heroBgIndex]}')`, transition: 'background-image 1s ease-in-out' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <div className="bg-green-100/90 backdrop-blur-sm text-gray-800 p-8 rounded-lg shadow-lg animate-on-scroll">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  HABNET SOLUTIONS LIMITED
                  <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-700 mt-2">
                    COMPANY PROFILE
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  Innovatively designing and facilitating effective supply systems and services.
                </p>
              </div>
              <div className="animate-on-scroll mt-6">
                <Button
                  onClick={() => scrollToSection("services")}
                  className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 hover:from-purple-600 hover:to-green-500 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-2xl font-bold border-2 border-white"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Hero Image/Graphic */}
            <div className="animate-on-scroll">
              <div className="relative">
                <Image
                  src="/images/logo.jpeg"
                  alt="Habnet Solutions Limited Logo"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl object-cover"
                  style={{ 
                    objectPosition: 'center 25%',
                    transform: 'scale(1.1)'
                  }}
                  onError={(e) => {
                    e.currentTarget.src = "/images/logo.jpeg"
                  }}
                />
                {/* Floating elements for visual interest */}
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg animate-bounce">
                  <Building className="h-8 w-8" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-600 text-white p-4 rounded-full shadow-lg animate-bounce delay-1000">
                  <Truck className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section - Company information, mission, and assurance */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* About Content */}
            <div className="animate-on-scroll">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Habnet Solutions Limited is committed to professional job satisfaction and continuous professional
                  development of its staff and associates. We are dealers in Office Equipment, Furniture, Computers &
                  Accessories, General Stationery, Real Estate and Executive Car Hire Services.
                </p>
                <p>
                  We also offer various services under civil works, building works, construction services and a wide
                  range of Engineering and Architectural works. Our team of highly qualified professionals is dedicated
                  to building a relationship based on mutual trust in order to bring the best services possible to our
                  clients. We focus on providing prompt and efficient services at very competitive prices to our
                  clients.
                </p>
                <p>
                  We are dedicated and widely known and respected in the market, especially in consumer companies,
                  financial, NGO, and Government sectors.
                </p>
              </div>
            </div>

            {/* About Image */}
            <div className="animate-on-scroll">
              <Image
                src="/images/about_pcture.jpeg"
                alt="Professional team collaboration representing trust and teamwork"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
                style={{ height: 'auto' }}
                onError={(e) => {
                  e.currentTarget.src = "/images/about_pcture.jpeg"
                }}
              />
            </div>
          </div>

          {/* Mission and Assurance Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <Card className="animate-on-scroll bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center">
                  <Eye className="mr-3 h-6 w-6" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To innovatively design and facilitate an effective supply system and services. To provide value for
                  money by ensuring competition, fairness, transparency and accountability while contributing to
                  customer service care.
                </p>
              </CardContent>
            </Card>

            {/* Assurance Card */}
            <Card className="animate-on-scroll bg-green-50 border-green-200 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-green-900 flex items-center">
                  <Heart className="mr-3 h-6 w-6" />
                  Our Assurance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Our success is based upon our customer focus. We listen to, and connect with, customers and treat them
                  with dignity and respect. By understanding and anticipating their needs, we make it easy for our
                  customers to do business with us. We aim to offer them value and quality services to enrich lives and
                  enhance business success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section - Display values as cards with icons */}
      <section id="values" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Our values guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="animate-on-scroll bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-blue-600"
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Tabbed interface for different service categories */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-4xl mx-auto leading-relaxed">
              We offer various services under civil works, building works, construction services and a wide range of
              Engineering and Architectural works. Our team of highly qualified professionals is dedicated to building a
              relationship based on mutual trust in order to bring the best services possible to our clients.
            </p>
          </div>

          <div className="animate-on-scroll">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* Service Category Tabs */}
              <TabsList className="flex w-full overflow-x-auto no-scrollbar mb-8 bg-gray-100 p-1 rounded-lg gap-2">
                <TabsTrigger value="general-supply" className="text-sm">
                  General Supply
                </TabsTrigger>
                <TabsTrigger value="food-supply" className="text-sm">
                  Food Supply
                </TabsTrigger>
                <TabsTrigger value="construction" className="text-sm">
                  Construction
                </TabsTrigger>
                <TabsTrigger value="road-construction" className="text-sm">
                  Road Works
                </TabsTrigger>
                <TabsTrigger value="borehole" className="text-sm">
                  Water & Sewerage
                </TabsTrigger>
                <TabsTrigger value="materials" className="text-sm">
                  Materials
                </TabsTrigger>
              </TabsList>

              {/* General Supply Tab Content */}
              <TabsContent value="general-supply" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Package className="mr-3 h-6 w-6 text-blue-600" />
                      General Supply of Goods
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Printing services",
                        "Supplies of office stationery",
                        "Educational supplies",
                        "Outdoor & Indoor advertising",
                        "Pharmaceutical Supplies",
                        "Protective Disposable Clothing",
                        "Respiratory Equipments",
                        "Medical equipment (radiology ICU, operation room assembly, nursery building materials)",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <Image
                      src="/images/constructin_materials.jpg"
                      alt="Construction materials and office supplies"
                      width={320}
                      height={200}
                      className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-md"
                      style={{ height: 'auto' }}
                      onError={(e) => {
                        e.currentTarget.src = "/images/constructin_materials.jpg"
                      }}
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Food Supply Tab Content */}
              <TabsContent value="food-supply" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Utensils className="mr-3 h-6 w-6 text-green-600" />
                      Food Supply
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
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
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <Image
                      src="/images/food.jpg"
                      alt="Fresh fruits, vegetables, and various food items"
                      width={320}
                      height={200}
                      className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-md"
                      onError={(e) => {
                        e.currentTarget.src = "/images/food.jpg"
                      }}
                    />
                  </div>
                </div>
              </TabsContent>

              {/* House Construction Tab Content */}
              <TabsContent value="construction" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Building className="mr-3 h-6 w-6 text-orange-600" />
                      House Construction
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      We pride ourselves on vast experience in the building industry where we have constructed both
                      high-rise and low-rise residential buildings, commercial buildings and also institutional
                      buildings.
                    </p>
                    <div className="space-y-3">
                      {[
                        "High-rise residential buildings",
                        "Low-rise residential buildings",
                        "Commercial buildings",
                        "Institutional buildings",
                        "Building renovation and maintenance",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <Image
                      src="/images/construction.jpg"
                      alt="Modern building construction project"
                      width={320}
                      height={200}
                      className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-md"
                      onError={(e) => {
                        e.currentTarget.src = "/images/construction.jpg"
                      }}
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Road Construction Tab Content */}
              <TabsContent value="road-construction" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Truck className="mr-3 h-6 w-6 text-yellow-600" />
                      Road Construction
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Habnet Solutions Limited offers a wide range of civil and structural engineering construction
                      ranging from steel structures erections, reinforced concrete structures and road construction in
                      gravel, paving blocks, concrete, bitumen roads and associated drainage structures.
                    </p>
                    <div className="space-y-3">
                      {[
                        "Steel structures erections",
                        "Reinforced concrete structures",
                        "Gravel road construction",
                        "Paving blocks installation",
                        "Concrete road construction",
                        "Bitumen roads",
                        "Drainage structures",
                        "Road rehabilitation",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Image
                      src="/images/road construction.jpg"
                      alt="Road construction with heavy machinery"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                      onError={(e) => {
                        e.currentTarget.src = "/images/road construction.jpg"
                      }}
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Borehole Drilling Tab Content */}
              <TabsContent value="borehole" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Droplets className="mr-3 h-6 w-6 text-blue-600" />
                      Borehole Drilling & Sewerage Systems
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      We offer borehole drilling services at a very competitive price. We carefully listen to our
                      clients&apos; dynamics and attend to them accordingly. Habnet Solutions Limited has the skills and
                      technology to expertly replace old and worn sewer lines or install brand new piping.
                    </p>
                    <div className="space-y-3">
                      {[
                        "Borehole drilling services",
                        "Water well installation",
                        "Sewerage system installation",
                        "Sewer line replacement",
                        "New piping installation",
                        "Water system maintenance",
                        "Drainage works",
                        "Storm drains installation",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Image
                      src="/images/borehole drilling.jpg"
                      alt="Water infrastructure and borehole drilling"
                      width={400}
                      height={300}
                      className="rounded-lg shadow-lg"
                      onError={(e) => {
                        e.currentTarget.src = "/images/borehole drilling.jpg"
                      }}
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Construction Materials Tab Content */}
              <TabsContent value="materials" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Wrench className="mr-3 h-6 w-6 text-red-600" />
                      Construction Material Supply
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      We supply a comprehensive range of building materials to meet all your construction needs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Fencing materials",
                        "Building Supplies",
                        "Plastering Materials",
                        "Plumbing Materials",
                        "Timber",
                        "Flooring",
                        "Doors & Windows",
                        "Electrical Supplies",
                        "Bathrooms",
                        "Kitchens",
                        "Painting Materials",
                        "Decorating Materials",
                        "Sealants",
                        "Adhesives",
                        "Nails, Screws, Fixings",
                        "Scaffolding",
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <Image
                      src="/images/constructin_materials.jpg"
                      alt="Various construction materials and building supplies"
                      width={320}
                      height={200}
                      className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-md"
                      onError={(e) => {
                        e.currentTarget.src = "/images/constructin_materials.jpg"
                      }}
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Other Services Section */}
          <div className="mt-16 animate-on-scroll">
            <Card className="bg-gray-50 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 text-center">Additional Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Civil works",
                    "Construction and Rehabilitation of roads",
                    "Building construction, renovation and maintenance",
                    "Excavation (Earthworks) of earth dams and pans",
                    "Drainage works i.e. storm drains and foundation workstation",
                    "Electrical Works and installations",
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Us Section - Contact information and form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6">Get in touch with us for all your business needs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <p className="text-gray-600">
                      MBARIA COMPLEX, KENYATTA AVENUE
                      <br />
                      NYAHURURU DISTRICT, NYAHURURU
                    </p>
                  </div>
                </div>

                {/* P.O. Box */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">P.O. Box</h4>
                    <p className="text-gray-600">P.O. BOX 117 - 20322, Rumuruti</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+254 725 171365</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">habnetsolutions@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 w-full rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4041.7681977584602!2d36.361808075023816!3d0.03785099996177981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17876308baab956f%3A0x5e0facba00ca525d!2sMbaria%20Complex%20Building!5e1!3m2!1sen!2ske!4v1752470382768!5m2!1sen!2ske"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mbaria Complex Map"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll">
              <Card className="bg-white shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full"
                        placeholder="Tell us more about your requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">HABNET SOLUTIONS LIMITED</h3>
            <p className="text-gray-400 mb-4">
              Innovatively designing and facilitating effective supply systems and services.
            </p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2025 Habnet Solutions Limited. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => scrollToSection("hero")}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}
