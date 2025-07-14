"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Users, User, Briefcase, Settings, Layers, HardHat, ChevronDown, ChevronRight } from "lucide-react"

const Box = ({ children, icon = null, className = "" }: { children: React.ReactNode, icon?: React.ReactNode, className?: string }) => (
  <div className={`relative flex flex-col items-center bg-white/90 border border-blue-200 shadow-md rounded-lg px-3 py-1 sm:px-6 sm:py-2 font-semibold text-blue-900 transition-transform hover:scale-105 hover:shadow-xl text-xs sm:text-base ${className}`}>
    {icon && <span className="mb-1 text-blue-500">{icon}</span>}
    {children}
  </div>
)

export default function ProjectStructure() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-4 sm:py-8">
      <div className="max-w-full sm:max-w-5xl mx-auto px-1 sm:px-2 md:px-4">
        <div className="mb-4 sm:mb-8 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
          <h1 className="text-xl sm:text-3xl font-bold text-center sm:text-left">Organization Structure</h1>
          <Link href="/">
            <Button variant="outline" size="sm">Back to Home</Button>
          </Link>
        </div>
        {/* Org Chart */}
        <div className="flex flex-col items-center space-y-4 sm:space-y-8 relative">
          {/* Board of Directors */}
          <Box icon={<Users className="h-5 w-5 sm:h-6 sm:w-6" />}>BOARD OF DIRECTORS</Box>
          <ChevronDown className="h-4 w-4 sm:h-6 sm:w-6 text-green-400" />
          {/* Managing Director */}
          <Box icon={<User className="h-5 w-5 sm:h-6 sm:w-6" />} className="bg-blue-100">MANAGING DIRECTOR</Box>
          <ChevronDown className="h-4 w-4 sm:h-6 sm:w-6 text-orange-400" />
          {/* Three heads */}
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col sm:flex-row justify-center items-start w-full gap-2 sm:gap-8">
              <div className="flex flex-col items-center flex-1 min-w-[100px] sm:min-w-[180px]">
                <Box icon={<Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />}>HEAD HUMAN RESOURCE</Box>
                <ChevronDown className="h-3 w-3 sm:h-5 sm:w-5 text-purple-400" />
                <Box>HEAD BUILDING WORKS DEPARTMENT</Box>
                <ChevronDown className="h-3 w-3 sm:h-5 sm:w-5 text-blue-400" />
                <Box icon={<HardHat className="h-4 w-4 sm:h-5 sm:w-5" />}>CONSTRUCTION MANAGER</Box>
              </div>
              <div className="flex flex-col items-center flex-1 min-w-[100px] sm:min-w-[180px]">
                <Box icon={<Settings className="h-4 w-4 sm:h-5 sm:w-5" />}>LEAD PROJECT MANAGER</Box>
                <ChevronDown className="h-3 w-3 sm:h-5 sm:w-5 text-green-400" />
                <Box>HEAD INTERIOR FIT OUT DEPARTMENT</Box>
                <ChevronDown className="h-3 w-3 sm:h-5 sm:w-5 text-orange-400" />
                <Box>HEAD CIVIL ENGINEER - ROADS</Box>
              </div>
              <div className="flex flex-col items-center flex-1 min-w-[100px] sm:min-w-[180px]">
                <Box icon={<Layers className="h-4 w-4 sm:h-5 sm:w-5" />}>HEAD ACCOUNTS</Box>
                <ChevronDown className="h-3 w-3 sm:h-5 sm:w-5 text-purple-400" />
                <Box>HEAD CIVIL ENGINEERING DEPARTMENT</Box>
                <ChevronDown className="h-3 w-3 sm:h-5 sm:w-5 text-blue-400" />
                <Box>HEAD CIVIL ENGINEER - WATER</Box>
              </div>
            </div>
            {/* SVG lines connecting the three columns to Site Managers */}
            <svg width="100%" height="20" className="hidden sm:block absolute left-0 right-0 mx-auto" style={{ top: 'calc(100% - 60px)' }}>
              <line x1="20%" y1="0" x2="50%" y2="20" stroke="#34d399" strokeWidth="2" />
              <line x1="50%" y1="0" x2="50%" y2="20" stroke="#fbbf24" strokeWidth="2" />
              <line x1="80%" y1="0" x2="50%" y2="20" stroke="#a78bfa" strokeWidth="2" />
            </svg>
          </div>
          <ChevronDown className="h-4 w-4 sm:h-6 sm:w-6 text-green-400" />
          <Box className="bg-blue-50">SITE MANAGERS</Box>
          <ChevronDown className="h-3 w-3 sm:h-5 sm:w-5 text-orange-400" />
          <Box className="bg-blue-50">SITE AGENTS, FOREMEN</Box>
          <ChevronDown className="h-3 w-3 sm:h-5 sm:w-5 text-purple-400" />
          {/* Foremen row */}
          <div className="flex flex-wrap justify-center gap-1 sm:gap-4 mt-1 sm:mt-2">
            <Box className="w-32 sm:w-56 bg-blue-100">FOREMAN – JOINERY &amp; FIT-OUTS</Box>
            <Box className="w-32 sm:w-56 bg-blue-100">FOREMAN - MASONRY</Box>
            <Box className="w-32 sm:w-56 bg-blue-100">FOREMAN - FORMWORK</Box>
            <Box className="w-32 sm:w-56 bg-blue-100">FOREMAN – CONCRETE WORKS</Box>
            <Box className="w-32 sm:w-56 bg-blue-100">FOREMAN – ELECTRICAL AND MECHANICAL SERVICES</Box>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="mt-8 flex justify-center">
        <div className="w-full max-w-xl rounded-lg overflow-hidden shadow-lg border border-gray-200">
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
      </div>
    </div>
  )
} 