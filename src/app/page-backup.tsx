"use client";

import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import { services } from "@/lib/services-data";
import { ReactElement } from "react";

// Icon mapping for service tiles
const getServiceIcon = (iconName: string) => {
  const icons: { [key: string]: ReactElement } = {
    FileText: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    Globe: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Stamp: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    TrendingUp: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    FileCheck: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Briefcase: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  };
  return icons[iconName] || icons.FileText;
};

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white pb-24 md:pb-8">
      {/* Hero Section - App-like Profile Style */}
      <section className="pt-12 pb-8">
        <div className="container max-w-md mx-auto px-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Logo */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <Logo className="w-24 h-24 animate-float" />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-heading font-bold text-3xl text-optima-navy mb-2">
              Optima Service Group
            </h1>
            <p className="text-optima-gold font-semibold mb-4">
              Your Solution, All in One Place.
            </p>
            <p className="text-gray-600 text-sm max-w-sm mx-auto mb-6">
              Bilingual professional support for taxes, immigration forms, documents, and business admin.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Link href="/contact" className="btn-primary">
                <Phone className="w-4 h-4 mr-2" />
                Book Consultation
              </Link>
              <a
                href="https://wa.me/19783909619?text=Hi%20Optima%2C%20I%27m%20interested"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Tiles - Linktree Style */}
      <section className="pb-12">
        <div className="container max-w-md mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <Link
                  href={`/services/${service.slug}`}
                  className="service-tile"
                >
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0 w-12 h-12 bg-optima-gold/10 rounded-xl flex items-center justify-center text-optima-navy">
                      {getServiceIcon(service.icon)}
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-semibold text-optima-navy text-sm">
                        {service.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-optima-gold group-hover:translate-x-1 transition-all" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="pb-12">
        <div className="container max-w-md mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-soft p-6 border border-gray-100">
            <h2 className="font-heading font-semibold text-lg text-optima-navy mb-4 text-center">
              Get in Touch
            </h2>
            <div className="space-y-3">
              <a
                href="tel:+19787055509"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 bg-optima-navy rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call us</p>
                  <p className="font-semibold text-optima-navy">(978) 705-5509</p>
                </div>
              </a>
              <a
                href="mailto:inoaserv@gmail.com"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-10 h-10 bg-optima-gold rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-optima-navy" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email us</p>
                  <p className="font-semibold text-optima-navy">inoaserv@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Business hours</p>
                  <p className="font-semibold text-optima-navy text-sm">Mon-Fri: 9am-6pm</p>
                  <p className="text-xs text-gray-600">Sat: By appointment • Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="pb-12">
        <div className="container max-w-md mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <Link
              href="/about"
              className="px-4 py-2 text-sm text-gray-600 hover:text-optima-navy transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/faq"
              className="px-4 py-2 text-sm text-gray-600 hover:text-optima-navy transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="px-4 py-2 text-sm font-semibold text-optima-gold hover:text-optima-navy transition-colors"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance Notice */}
      <section className="pb-12">
        <div className="container max-w-md mx-auto px-4">
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <p className="text-xs text-gray-600">
              We do not provide legal or financial advice.<br />
              We assist with form preparation and document services only.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-40">
        <div className="flex gap-2">
          <a
            href="https://wa.me/19783909619"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-secondary py-3 text-sm justify-center"
          >
            WhatsApp
          </a>
          <a
            href="tel:+19787055509"
            className="flex-1 btn-primary py-3 text-sm justify-center"
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
