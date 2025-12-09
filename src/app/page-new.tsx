'use client';

/**
 * Optima Service Group - App-Card Homepage
 * 
 * Mobile-first, PWA-ready single-scroll experience
 * Designed like Linktree/Popl electronic business card
 * High-contrast Navy + Gold color system
 */

import Link from 'next/link';
import { Phone, MessageCircle, Download, Star, FileText, TrendingUp, Home as HomeIcon, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { services } from '@/lib/services-data';
import OptimaIcon from '@/components/OptimaIcon';

export default function HomePage() {
  const { language } = useLanguage();
  
  const content = {
    en: {
      hero: {
        headline: "Tired of Tax Stress?",
        subheadline: "Navigate Immigration Hassles?",
        cta: "Get Expert Help",
        tagline: "Your Solution, All in One Place."
      },
      ctas: {
        book: "Book Consultation",
        whatsapp: "WhatsApp Us",
        call: "Call Now"
      },
      serviceHub: {
        title: "Service Hub",
        categories: [
          {
            title: "Documents & Forms",
            icon: FileText,
            services: ["Tax Preparation", "Immigration Forms", "Notary Public"]
          },
          {
            title: "Financial & Credit",
            icon: TrendingUp,
            services: ["Credit Repair", "Business Consulting"]
          },
          {
            title: "Real Estate & Business",
            icon: Building2,
            services: ["Real Estate Services", "Business Admin"]
          }
        ]
      },
      leadMagnet: {
        title: "Lead Magnet",
        subtitle: "Unlock Your Guide to US Finances",
        cta: "4.9 Stars on Free Guide",
        disclaimer: "We do not provide legal or financial advice. We assist with form preparation and document services only."
      },
      testimonial: "Optima made my immigration seamless! – David S."
    },
    es: {
      hero: {
        headline: "¿Cansado del Estrés Fiscal?",
        subheadline: "¿Problemas con Inmigración?",
        cta: "Obtén Ayuda Experta",
        tagline: "Tu Solución, Todo en Un Lugar."
      },
      ctas: {
        book: "Agendar Consulta",
        whatsapp: "WhatsApp",
        call: "Llamar Ahora"
      },
      serviceHub: {
        title: "Centro de Servicios",
        categories: [
          {
            title: "Documentos y Formularios",
            icon: FileText,
            services: ["Preparación de Impuestos", "Formularios de Inmigración", "Notario Público"]
          },
          {
            title: "Financiero y Crédito",
            icon: TrendingUp,
            services: ["Reparación de Crédito", "Consultoría Empresarial"]
          },
          {
            title: "Bienes Raíces y Negocios",
            icon: Building2,
            services: ["Servicios Inmobiliarios", "Administración de Negocios"]
          }
        ]
      },
      leadMagnet: {
        title: "Imán de Clientes",
        subtitle: "Desbloquea Tu Guía de Finanzas en EE.UU.",
        cta: "4.9 Estrellas en Guía Gratis",
        disclaimer: "No proporcionamos asesoramiento legal o financiero. Solo asistimos con la preparación de formularios y servicios de documentos."
      },
      testimonial: "¡Optima hizo mi inmigración sin problemas! – David S."
    }
  };
  
  const t = content[language];
  
  return (
    <>
      {/* Mobile-First Container - Max 600px */}
      <div className="min-h-screen bg-optima-navy pb-20">
        <div className="max-w-[600px] mx-auto">
          
          {/* A. STICKY HEADER (Language + Logo + Share) */}
          {/* This is handled by the global Header component */}
          
          {/* B. PROFILE/HERO SECTION */}
          <section className="pt-8 pb-8 px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              {/* Professional Visual - Could be video/image */}
              <div className="mb-6 relative">
                <div className="w-32 h-32 mx-auto bg-linear-to-br from-optima-gold/20 to-optima-blue-600/20 rounded-full p-1">
                  <div className="w-full h-full bg-optima-navy rounded-full flex items-center justify-center">
                    <OptimaIcon size={80} className="text-optima-gold" />
                  </div>
                </div>
                {/* Online Status Indicator */}
                <div className="absolute bottom-0 right-1/2 translate-x-16 w-6 h-6 bg-green-500 rounded-full border-4 border-optima-navy" />
              </div>
              
              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                {t.hero.headline}
                <br />
                {t.hero.subheadline}
              </h1>
              <p className="text-xl font-semibold text-optima-gold mb-2">
                {t.hero.cta}
              </p>
              <p className="text-white/80 text-sm">
                {t.hero.tagline}
              </p>
            </motion.div>
          </section>
          
          {/* C. PRIMARY CONNECTION CTAs */}
          <section className="px-4 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              {/* High-Commitment - Book Consultation */}
              <Link
                href="/contact"
                className="w-full bg-optima-gold hover:bg-optima-gold/90 text-optima-navy font-bold py-4 px-6 rounded-xl text-center transition-all duration-150 shadow-lg hover:shadow-xl hover:scale-[1.02] min-h-11 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {t.ctas.book}
              </Link>
              
              {/* Medium-Commitment - WhatsApp */}
              <a
                href="https://wa.me/19787055509"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-6 rounded-xl text-center transition-all duration-150 border-2 border-white/20 hover:border-optima-gold/50 min-h-11 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {t.ctas.whatsapp}
              </a>
              
              {/* Direct/Urgent - Call Now */}
              <a
                href="tel:+19787055509"
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-6 rounded-xl text-center transition-all duration-150 border-2 border-white/20 hover:border-optima-gold/50 min-h-11 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {t.ctas.call}
              </a>
            </motion.div>
          </section>
          
          {/* D. SERVICE HUB (Main Links) */}
          <section className="px-4 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-white font-bold text-lg mb-4">
                {t.serviceHub.title}
              </h2>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {t.serviceHub.categories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <Link
                      key={index}
                      href="/services"
                      className="bg-white/10 hover:bg-white/15 backdrop-blur-sm border-2 border-white/20 hover:border-optima-gold/50 rounded-xl p-4 transition-all duration-150 hover:scale-105 min-h-[120px] flex flex-col items-center justify-center text-center group"
                    >
                      <div className="w-12 h-12 bg-optima-gold/20 rounded-full flex items-center justify-center mb-3 group-hover:bg-optima-gold/30 transition-colors duration-150">
                        <Icon className="w-6 h-6 text-optima-gold" />
                      </div>
                      <h3 className="text-white font-semibold text-sm leading-tight">
                        {category.title}
                      </h3>
                    </Link>
                  );
                })}
              </div>
              
              {/* All Services Link */}
              <Link
                href="/services"
                className="mt-4 block text-center text-optima-gold hover:text-optima-gold/80 font-semibold text-sm transition-colors duration-150"
              >
                {language === 'en' ? 'View All Services →' : 'Ver Todos los Servicios →'}
              </Link>
            </motion.div>
          </section>
          
          {/* E. LEAD MAGNET / VALUE ADD */}
          <section className="px-4 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-linear-to-br from-optima-gold/20 to-optima-blue-600/20 backdrop-blur-sm border-2 border-optima-gold/30 rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-optima-gold rounded-full flex items-center justify-center">
                  <Download className="w-6 h-6 text-optima-navy" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {t.leadMagnet.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3">
                    {t.leadMagnet.subtitle}
                  </p>
                  <button className="bg-optima-gold hover:bg-optima-gold/90 text-optima-navy font-semibold py-2 px-4 rounded-lg text-sm transition-all duration-150 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    {t.leadMagnet.cta}
                  </button>
                </div>
              </div>
            </motion.div>
          </section>
          
          {/* F. TRUST & SOCIAL PROOF */}
          <section className="px-4 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-4"
            >
              {/* Testimonial */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-optima-gold fill-optima-gold" />
                  ))}
                </div>
                <p className="text-white/90 text-sm italic mb-2">
                  "{t.testimonial}"
                </p>
                <p className="text-white/60 text-xs">
                  4.9 {language === 'en' ? 'Stars on Google' : 'Estrellas en Google'}
                </p>
              </div>
              
              {/* Disclaimer */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
                <p className="text-white/60 text-xs text-center leading-relaxed">
                  {t.leadMagnet.disclaimer}
                </p>
              </div>
            </motion.div>
          </section>
          
        </div>
      </div>
      
      {/* G. STICKY FOOTER NAVIGATION (Mobile App Bar) */}
      {/* This is handled by the MobileAppBar component in layout */}
    </>
  );
}
