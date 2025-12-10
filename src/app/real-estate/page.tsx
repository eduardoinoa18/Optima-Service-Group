"use client";

import { useState, useEffect } from "react";
import { Building2, TrendingUp, Users, FileText, MapPin, Calculator, Phone, MessageSquare, CheckCircle2, ArrowRight, Globe, MapPinIcon, Shield, DollarSign } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export const metadata = {
  title: "Real Estate & Investment Services | Optima Service Group",
  description: "Professional real estate services in MA & NH. Dominican Republic property investments. Licensed REALTOR® Eduardo Inoa: 20+ transactions, +$10M sales. Bilingual support.",
};

export default function RealEstatePage() {
  const searchParams = useSearchParams();
  const [selectedTab, setSelectedTab] = useState("usa");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "dr") {
      setSelectedTab("dr");
    }
  }, [searchParams]);

  const usaServices = [
    {
      slug: "buying",
      title: "Home Buying Services",
      description: "Expert guidance through the entire home buying process",
      icon: Building2,
    },
    {
      slug: "selling",
      title: "Home Selling Services",
      description: "Maximize your home's value with strategic marketing",
      icon: TrendingUp,
    },
    {
      slug: "investors",
      title: "Investment Properties",
      description: "Build wealth through strategic real estate investments",
      icon: Calculator,
    },
    {
      slug: "first-time-buyers",
      title: "First-Time Home Buyers",
      description: "Simplified guidance for your first home purchase",
      icon: Users,
    },
    {
      slug: "tours",
      title: "Property Tours",
      description: "Personalized tours of homes that match your criteria",
      icon: MapPin,
    },
    {
      slug: "cma",
      title: "Comparative Market Analysis",
      description: "Free CMA to determine your home's market value",
      icon: FileText,
    },
  ];

  const drServices = [
    {
      title: "Punta Cana Beachfront Properties",
      description: "Premium coastal investment opportunities with resort amenities",
      roi: "12-15% Annual ROI",
      priceRange: "$180K - $850K",
      type: "Condos & Villas"
    },
    {
      title: "Santo Domingo Luxury Residences",
      description: "Urban investment in capital city with high rental demand",
      roi: "10-12% Annual ROI",
      priceRange: "$150K - $600K",
      type: "Apartments & Penthouses"
    },
    {
      title: "Cabarete Resort Properties",
      description: "Tourism-focused rental properties in surf capital",
      roi: "15-18% Annual ROI",
      priceRange: "$120K - $450K",
      type: "Beach Condos"
    },
    {
      title: "Bávaro Investment Suites",
      description: "Hotel-managed condos with guaranteed rental income",
      roi: "14-16% Annual ROI",
      priceRange: "$200K - $500K",
      type: "Managed Units"
    },
    {
      title: "La Romana Golf Estates",
      description: "Exclusive golf community properties with premium finishes",
      roi: "11-13% Annual ROI",
      priceRange: "$300K - $1.2M",
      type: "Estates & Villas"
    },
    {
      title: "Samaná Bay Eco-Retreats",
      description: "Sustainable luxury properties in pristine natural setting",
      roi: "13-17% Annual ROI",
      priceRange: "$160K - $700K",
      type: "Eco Villas"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-linear-to-r from-[#0F213A] to-blue-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real Estate & Investment Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-[#F5C440]">
              USA Market Expertise + Dominican Republic Investment Opportunities
            </p>
            <p className="text-lg max-w-3xl mx-auto text-white/90">
              Licensed REALTOR® Eduardo Inoa brings 20+ closed transactions and $10M+ in sales 
              expertise, combined with specialized Dominican Republic property investment guidance. 
              Bilingual service for all your real estate needs.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact?service=real-estate" className="btn bg-[#F5C440] hover:bg-yellow-500 text-[#0F213A] px-8 py-4 text-lg font-semibold flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Book Consultation
              </Link>
              <a
                href="https://wa.me/19787055509"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-2 border-[#F5C440] text-[#F5C440] hover:bg-[#F5C440] hover:text-[#0F213A] px-8 py-4 text-lg font-semibold flex items-center transition-all"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-32 z-40 bg-white border-b-2 border-[#F5C440] shadow-sm">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-center gap-8 py-6">
            <button
              onClick={() => setSelectedTab("usa")}
              className={`text-lg font-semibold px-6 py-2 rounded-lg transition-all ${
                selectedTab === "usa"
                  ? "bg-[#F5C440] text-[#0F213A]"
                  : "text-gray-600 hover:text-[#0F213A]"
              }`}
            >
              <Globe className="w-5 h-5 inline mr-2" />
              USA Properties
            </button>
            <button
              onClick={() => setSelectedTab("dr")}
              className={`text-lg font-semibold px-6 py-2 rounded-lg transition-all ${
                selectedTab === "dr"
                  ? "bg-[#F5C440] text-[#0F213A]"
                  : "text-gray-600 hover:text-[#0F213A]"
              }`}
            >
              <MapPinIcon className="w-5 h-5 inline mr-2" />
              Dominican Republic
            </button>
          </div>
        </div>
      </section>

      {/* USA Real Estate Services */}
      {selectedTab === "usa" && (
        <>
          <section className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-4xl font-bold text-[#0F213A] mb-6 text-center">
                Massachusetts & New Hampshire Real Estate Services
              </h2>
              <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto text-lg">
                Comprehensive real estate solutions backed by licensing, experience, and bilingual support
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {usaServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.slug}
                      className="group bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                    >
                      <Icon className="w-14 h-14 text-[#F5C440] mb-6 group-hover:scale-110 transition-transform" />
                      <h3 className="text-2xl font-bold text-[#0F213A] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                      <div className="text-[#F5C440] font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                        Learn More
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* USA Highlights */}
          <section className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-[#0F213A] mb-12 text-center">
                Why Choose Eduardo for USA Real Estate?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Licensed Professional",
                    description: "MA & NH Licensed REALTOR® with active credentials",
                  },
                  {
                    title: "Proven Track Record",
                    description: "20+ closed transactions, +$10M in sales volume",
                  },
                  {
                    title: "Bilingual Services",
                    description: "Fluent in English & Spanish for seamless communication",
                  },
                  {
                    title: "Financial Expertise",
                    description: "Comprehensive financial services background",
                  },
                ].map((point, idx) => (
                  <div key={idx} className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#F5C440]">
                    <h3 className="text-xl font-bold text-[#0F213A] mb-3">
                      {point.title}
                    </h3>
                    <p className="text-gray-700">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* USA Testimonials */}
          <section className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-[#0F213A] mb-12 text-center">
                Client Success Stories
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    quote: "Eduardo made our first home purchase stress-free. His bilingual support was invaluable.",
                    author: "Maria & Carlos R.",
                    location: "Manchester, NH",
                  },
                  {
                    quote: "Professional, knowledgeable, and always responsive. Sold our home above asking price!",
                    author: "Jennifer T.",
                    location: "Lawrence, MA",
                  },
                  {
                    quote: "His investment property expertise helped us build a strong rental portfolio.",
                    author: "David L.",
                    location: "Boston, MA",
                  },
                ].map((testimonial, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#F5C440]">
                    <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.quote}"</p>
                    <p className="font-bold text-[#0F213A]">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Dominican Republic Investment Section */}
      {selectedTab === "dr" && (
        <>
          <section className="py-20 px-4 bg-linear-to-b from-blue-50 to-white">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-4xl font-bold text-[#0F213A] mb-6 text-center">
                Paraíso Inmobiliario: Dominican Republic Premium Real Estate Investments
              </h2>
              <p className="text-center text-gray-700 mb-4 max-w-2xl mx-auto text-lg">
                Invierte en la República Dominicana con Confianza
              </p>
              <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
                Gateway to Caribbean real estate success with verified developers, 
                expert guidance, and attractive commission structures.
              </p>

              {/* Key Details */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                  {
                    label: "Service Focus",
                    value: "Premium Real Estate Investment Opportunities",
                  },
                  {
                    label: "Location",
                    value: "Dominican Republic (D.R.) Focus",
                  },
                  {
                    label: "Target Audience",
                    value: "International Investors & Spanish-Speaking Community",
                  },
                  {
                    label: "Key Benefit",
                    value: "Up to 30% Commission Structure",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-lg border-2 border-[#F5C440] shadow-md">
                    <p className="text-sm text-gray-600 font-semibold mb-2">{item.label}</p>
                    <p className="text-lg font-bold text-[#0F213A]">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Featured Properties */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-[#0F213A] mb-4 text-center">
                  Featured Investment Opportunities
                </h3>
                <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                  Curated selection of high-performing properties from verified developers across the Dominican Republic's most sought-after locations.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {drServices.map((property, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-t-4 border-[#F5C440]"
                    >
                      <div className="h-48 bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                        <Building2 className="w-24 h-24 text-white opacity-30" />
                      </div>
                      <div className="p-8">
                        <div className="inline-block bg-[#F5C440]/20 text-[#0F213A] px-3 py-1 rounded-full text-xs font-bold mb-3">
                          {property.type}
                        </div>
                        <h4 className="text-2xl font-bold text-[#0F213A] mb-3">
                          {property.title}
                        </h4>
                        <p className="text-gray-700 mb-4">{property.description}</p>
                        <div className="space-y-2 mb-6">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Price Range:</span>
                            <span className="font-bold text-[#0F213A]">{property.priceRange}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 text-sm">Expected ROI:</span>
                            <span className="text-[#F5C440] font-bold text-lg">
                              {property.roi}
                            </span>
                          </div>
                        </div>
                        <button className="w-full btn bg-[#F5C440] hover:bg-yellow-500 text-[#0F213A] font-semibold py-3">
                          Get Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Insights & Investment Details */}
              <div className="mb-16 bg-linear-to-br from-blue-50 to-white p-10 rounded-2xl border border-[#F5C440]/30">
                <h3 className="text-3xl font-bold text-[#0F213A] mb-8 text-center">
                  🇩🇴 Dominican Republic Real Estate Market Insights
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-[#0F213A] mb-4 flex items-center gap-2">
                      📈 Market Growth & Stability
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ <strong>Tourism Growth:</strong> 10M+ annual visitors driving rental demand</li>
                      <li>✓ <strong>Property Appreciation:</strong> 5-8% annual value increase in prime areas</li>
                      <li>✓ <strong>Stable Currency:</strong> DOP pegged to USD reducing forex risk</li>
                      <li>✓ <strong>Foreign-Friendly:</strong> No restrictions on foreign property ownership</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-xl font-bold text-[#0F213A] mb-4 flex items-center gap-2">
                      💰 Financial Benefits
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ <strong>Low Property Taxes:</strong> 0.5-1% annual rate</li>
                      <li>✓ <strong>No Capital Gains Tax:</strong> On primary residences</li>
                      <li>✓ <strong>Rental Income:</strong> Exempt from many taxes under certain conditions</li>
                      <li>✓ <strong>Financing Available:</strong> 30-40% down, 10-15 year terms</li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg text-center border-t-4 border-[#F5C440]">
                    <div className="text-3xl font-bold text-[#F5C440] mb-2">$150K+</div>
                    <p className="text-sm text-gray-600">Average Entry Point</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center border-t-4 border-[#F5C440]">
                    <div className="text-3xl font-bold text-[#F5C440] mb-2">30-45 Days</div>
                    <p className="text-sm text-gray-600">Typical Closing Time</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center border-t-4 border-[#F5C440]">
                    <div className="text-3xl font-bold text-[#F5C440] mb-2">85%+</div>
                    <p className="text-sm text-gray-600">Occupancy Rate (Peak Zones)</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-[#0F213A] mb-12 text-center">
                  Why Invest in Dominican Republic Real Estate?
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: TrendingUp,
                      title: "High ROI Potential",
                      description: "10-15% average annual returns on rental properties with strong tourism demand",
                    },
                    {
                      icon: Shield,
                      title: "Verified Developers",
                      description: "We only work with established, trustworthy developers with proven track records",
                    },
                    {
                      icon: DollarSign,
                      title: "Up to 30% Commission",
                      description: "Attractive profit-sharing structure with transparent terms and no hidden fees",
                    },
                    {
                      icon: MapPin,
                      title: "Prime Locations",
                      description: "Beachfront properties in Punta Cana, Santo Domingo, Cabarete, and more",
                    },
                    {
                      icon: Users,
                      title: "Bilingual Support",
                      description: "Full English & Spanish support throughout your investment journey",
                    },
                    {
                      icon: CheckCircle2,
                      title: "End-to-End Service",
                      description: "From property search to closing, we handle every step of the process",
                    },
                  ].map((benefit, idx) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={idx} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#F5C440]">
                        <Icon className="w-12 h-12 text-[#F5C440] mb-4" />
                        <h4 className="text-xl font-bold text-[#0F213A] mb-3">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-700">{benefit.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Investment Process */}
              <div className="bg-gray-50 p-12 rounded-lg mb-16">
                <h3 className="text-3xl font-bold text-[#0F213A] mb-12 text-center">
                  Your Investment Journey
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4">
                  {[
                    { step: 1, title: "Consultation", icon: Phone },
                    { step: 2, title: "Property Search", icon: MapPin },
                    { step: 3, title: "Site Visit", icon: Building2 },
                    { step: 4, title: "Due Diligence", icon: CheckCircle2 },
                    { step: 5, title: "Contract", icon: FileText },
                    { step: 6, title: "Closing", icon: TrendingUp },
                  ].map((stage) => {
                    const Icon = stage.icon;
                    return (
                      <div key={stage.step} className="text-center">
                        <div className="w-16 h-16 bg-[#F5C440] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0F213A] font-bold text-xl">
                          {stage.step}
                        </div>
                        <p className="text-sm font-semibold text-[#0F213A]">{stage.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* DR Testimonials */}
          <section className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-[#0F213A] mb-12 text-center">
                Investment Success Stories
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    quote: "¡Excelente! The investment guidance and property selection were top-notch. Already seeing great returns.",
                    author: "Roberto M.",
                    location: "Punta Cana Investor",
                  },
                  {
                    quote: "Eduardo's expertise in Dominican real estate is unmatched. Professional and trustworthy throughout the process.",
                    author: "Patricia L.",
                    location: "Santo Domingo Properties",
                  },
                  {
                    quote: "The 30% commission structure combined with expert guidance made this a no-brainer investment.",
                    author: "Carlos V.",
                    location: "Multi-Property Investor",
                  },
                ].map((testimonial, idx) => (
                  <div key={idx} className="bg-gray-50 p-8 rounded-lg shadow-md border-t-4 border-[#F5C440]">
                    <p className="text-gray-700 mb-6 italic text-lg">"{testimonial.quote}"</p>
                    <p className="font-bold text-[#0F213A]">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Unified CTA Section */}
      <section className="py-20 px-4 bg-[#0F213A] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {selectedTab === "usa"
              ? "Ready to Start Your Real Estate Journey?"
              : "Ready to Build Caribbean Wealth?"}
          </h2>
          <p className="text-xl text-white/90 mb-10">
            {selectedTab === "usa"
              ? "Let's discuss your home buying, selling, or investment goals"
              : "Let's discuss your Dominican Republic investment opportunities"}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?service=real-estate"
              className="btn bg-[#F5C440] hover:bg-yellow-500 text-[#0F213A] px-8 py-4 text-lg font-semibold flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Link>
            <a
              href="https://wa.me/19787055509"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 text-lg font-semibold flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer CTA - All Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-[#0F213A] mb-4 text-center">
            Part of Our Complete Service Suite
          </h2>
          <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
            Real Estate services are one of nine comprehensive solutions we offer at Optima Service Group
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {[
              "Tax Preparation",
              "Immigration Forms",
              "Notary Public",
              "Credit Repair",
              "Document Services",
              "Business Support",
              "Life Insurance",
              "Real Estate Services",
              "Plus Dominican Republic Investments",
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg text-center border-l-4 border-[#F5C440]">
                <p className="font-semibold text-[#0F213A]">{service}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="btn bg-[#F5C440] hover:bg-yellow-500 text-[#0F213A] px-8 py-3 font-semibold inline-flex items-center"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
