"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, Shield, Building, Award } from "lucide-react"
import Link from "next/link"

export default function LegalDocuments() {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null)

  // Legal documents data - excluding project structure.png
  const legalDocuments = [
    {
      id: "nca1",
      title: "National Construction Authority Certificate 1",
      description: "NCA1 certification for construction authority compliance",
      image: "/Legal-documents/NCA1.png",
      category: "Construction Authority"
    },
    {
      id: "nca2", 
      title: "National Construction Authority Certificate 2",
      description: "NCA2 certification for construction authority compliance",
      image: "/Legal-documents/NCA2.png",
      category: "Construction Authority"
    },
    {
      id: "nca3",
      title: "National Construction Authority Certificate 3", 
      description: "NCA3 certification for construction authority compliance",
      image: "/Legal-documents/NCA3.png",
      category: "Construction Authority"
    },
    {
      id: "national_construction_authority",
      title: "National Construction Authority",
      description: "Official construction authority certification",
      image: "/Legal-documents/national_construction_authority.png",
      category: "Construction Authority"
    },
    {
      id: "certificate_of_registration",
      title: "Certificate of Registration",
      description: "Official business registration certificate",
      image: "/Legal-documents/certificate_of_registration.png",
      category: "Business Registration"
    },
    {
      id: "kra_certificate",
      title: "KRA Certificate",
      description: "Kenya Revenue Authority tax compliance certificate",
      image: "/Legal-documents/kra_certificate.png",
      category: "Tax Compliance"
    },
    {
      id: "kra2",
      title: "KRA Certificate 2",
      description: "Additional Kenya Revenue Authority certification",
      image: "/Legal-documents/kra2.png",
      category: "Tax Compliance"
    },
    {
      id: "companies_act",
      title: "The Companies Act Certificate",
      description: "Certificate under The Companies Act",
      image: "/Legal-documents/The_comapanies_act.png",
      category: "Corporate Law"
    },
    {
      id: "certificate_of_incorporation",
      title: "Certificate of Incorporation",
      description: "Official certificate of company incorporation",
      image: "/Legal-documents/certificate_of_incoporation.png",
      category: "Corporate Law"
    }
  ]

  const categories = [...new Set(legalDocuments.map(doc => doc.category))]

  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const filteredDocuments = selectedCategory === "All" 
    ? legalDocuments 
    : legalDocuments.filter(doc => doc.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" className="flex items-center space-x-2">
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Home</span>
                </Button>
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900">Legal Documents & Certificates</h1>
              <p className="text-gray-600 mt-2">Official certifications and compliance documents</p>
            </div>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={selectedCategory === "All" ? "default" : "outline"}
              onClick={() => setSelectedCategory("All")}
              className="rounded-full"
            >
              All Documents
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((document) => (
            <Card
              key={document.id}
              className="hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedDocument(document.id)}
            >
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {document.category === "Construction Authority" && <Building className="h-8 w-8 text-blue-600" />}
                  {document.category === "Business Registration" && <Award className="h-8 w-8 text-blue-600" />}
                  {document.category === "Tax Compliance" && <Shield className="h-8 w-8 text-blue-600" />}
                  {document.category === "Corporate Law" && <FileText className="h-8 w-8 text-blue-600" />}
                </div>
                <CardTitle className="text-lg text-gray-900">{document.title}</CardTitle>
                <CardDescription className="text-sm">{document.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={document.image}
                    alt={document.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "/images/logo.jpeg"
                    }}
                  />
                </div>
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {document.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Document Viewer Modal */}
        {selectedDocument && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">
                    {legalDocuments.find(doc => doc.id === selectedDocument)?.title}
                  </h3>
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedDocument(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </Button>
                </div>
                <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={legalDocuments.find(doc => doc.id === selectedDocument)?.image || ""}
                    alt={legalDocuments.find(doc => doc.id === selectedDocument)?.title || ""}
                    fill
                    className="object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "/images/logo.jpeg"
                    }}
                  />
                </div>
                <p className="mt-4 text-gray-600">
                  {legalDocuments.find(doc => doc.id === selectedDocument)?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">HABNET SOLUTIONS LIMITED</h3>
            <p className="text-gray-400 text-sm">
              All certificates and documents are official and up to date.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
} 