"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, ChevronUp, ArrowRight, CheckCircle, AlertCircle, X } from "lucide-react"
import Navigation from "@/components/Navigation"
import WhatsAppButton from "@/components/WhatsAppButton"

export default function ContactPage() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastType, setToastType] = useState<"success" | "error">("success")

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const showNotification = (message: string, type: "success" | "error") => {
    setToastMessage(message)
    setToastType(type)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 5000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement
    const originalText = submitButton.innerHTML
    submitButton.innerHTML = "Sending..."
    submitButton.disabled = true

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" })
        showNotification(
          "Thank you for your message! We have received it and will get back to you soon.",
          "success"
        )
      } else {
        const data = await response.json()
        showNotification(
          data.error ||
            "There was an error sending your message. Please try again or contact us directly at habnetsolutionslimited@gmail.com",
          "error"
        )
      }
    } catch {
      showNotification(
        "There was an error sending your message. Please try again or contact us directly at habnetsolutionslimited@gmail.com",
        "error"
      )
    } finally {
      submitButton.innerHTML = originalText
      submitButton.disabled = false
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
            <p className="text-xl sm:text-2xl max-w-4xl mx-auto leading-relaxed">
              Get in touch with us for all your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Get In Touch</h2>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1 text-lg">Address</h3>
                    <p className="text-gray-700">
                      MBARIA COMPLEX, KENYATTA AVENUE
                      <br />
                      NYAHURURU DISTRICT, NYAHURURU
                    </p>
                  </div>
                </div>

                {/* P.O. Box */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1 text-lg">P.O. Box</h3>
                    <p className="text-gray-700">P.O. BOX 117 - 20322, Rumuruti</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1 text-lg">Phone</h3>
                    <p className="text-gray-700">+254 725 171365</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1 text-lg">Email</h3>
                    <p className="text-gray-700">habnetsolutions@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 w-full rounded-xl overflow-hidden shadow-2xl border border-blue-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4041.7681977584602!2d36.361808075023816!3d0.03785099996177981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17876308baab956f%3A0x5e0facba00ca525d!2sMbaria%20Complex%20Building!5e1!3m2!1sen!2ske!4v1752470382768!5m2!1sen!2ske"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mbaria Complex Map"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/90 shadow-2xl rounded-2xl backdrop-blur-lg border border-blue-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">Send Us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-blue-900 mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full rounded-lg bg-blue-50/60 border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-lg bg-blue-50/60 border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-blue-900 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full rounded-lg bg-blue-50/60 border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm"
                        placeholder="What is this regarding?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-blue-900 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full rounded-lg bg-blue-50/60 border border-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm"
                        placeholder="Tell us more about your requirements..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600 hover:from-emerald-600 hover:to-green-600 text-white py-3 text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl font-bold"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Hours & Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Office Hours</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-blue-900">Weekdays</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg">Monday - Friday</p>
                  <p className="text-gray-600">8:00 AM - 5:00 PM</p>
                </CardContent>
              </Card>
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-blue-900">Saturday</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg">Saturday</p>
                  <p className="text-gray-600">9:00 AM - 1:00 PM</p>
                </CardContent>
              </Card>
              <Card className="bg-white hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-blue-900">Sunday</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg">Sunday</p>
                  <p className="text-gray-600">Closed</p>
                </CardContent>
              </Card>
            </div>
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
                  <a href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-400 text-sm">
                MBARIA COMPLEX, KENYATTA AVENUE
                <br />
                NYAHURURU, KENYA
                <br />
                Phone: +254 725 171365
                <br />
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

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50">
          <motion.div
            initial={{ opacity: 0, x: 300, scale: 0.3 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`min-w-[300px] max-w-[400px] p-4 rounded-lg border shadow-lg ${
              toastType === "success" ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
            }`}
          >
            <div className="flex items-start gap-3">
              {toastType === "success" ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-500" />
              )}
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{toastMessage}</p>
              </div>
              <button
                onClick={() => setShowToast(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  )
}
