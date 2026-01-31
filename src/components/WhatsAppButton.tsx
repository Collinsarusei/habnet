"use client"

import React from "react"
import Image from "next/image"

export default function WhatsAppButton() {
  const phoneNumber = "254725171365" // WhatsApp format without + or spaces
  const message = "Hello, I'm interested in your services."

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-50 focus:outline-none focus:ring-4 focus:ring-green-300"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="/images/whatsappicon.jpeg"
        alt="WhatsApp"
        width={40}
        height={40}
        className="w-10 h-10 rounded-full"
      />
    </button>
  )
}
