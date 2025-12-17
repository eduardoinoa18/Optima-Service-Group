'use client';

/**
 * Optima Service Group - Redesigned Homepage
 * 
 * AUDIT IMPROVEMENTS IMPLEMENTED:
 * ✅ Simplified hero (single value proposition)
 * ✅ Service Hub redesigned as card grid with icons
 * ✅ Trust/About section with credentials
 * ✅ Simplified CTAs (Book + WhatsApp only)
 * ✅ Improved spacing, hierarchy, accessibility
 * ✅ Mobile-optimized (44px tap targets)
 * ✅ High-contrast colors (Navy + Gold + White)
 * ✅ Semantic HTML structure
 */

import Link from 'next/link';
import { Phone, MessageCircle, FileText, TrendingUp, Building2, CheckCircle2, Award, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Logo from '@/components/Logo';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function HomePageRedesign() {
  let language: 'en' | 'es' = 'en';
  
  try {
    const context = useLanguage();
    language = context.language;
  } catch (error) {
    // SSG/SSR fallback
  }
  
  const content = {
    en: {
      // HERO SECTION
      hero: {
        headline: "Expert Tax, Immigration & Business Services",
          subheadline: "Trusted bilingual experts for taxes, immigration forms, and business paperwork—fast, compliant, and transparent.",
        cta: "Start Free Consultation"
      },
      
      // PRIMARY CTAs
      ctas: {
        book: "Book Consultation",
        whatsapp: "Message on WhatsApp"
      },
      
      // SERVICE CARDS
      services: [
        {
          title: "Tax Preparation",
          description: "Individual & business tax returns, ERC, deductions",
          icon: "📋",
          href: "/services/tax-preparation"
        },
        {
          title: "Immigration Forms",
          description: "USCIS forms, visas, work permits, green cards",
          icon: "📄",
          href: "/services/immigration-forms"
        },
        {
          title: "Notary Services",
          description: "Certified notary public for all document types",
          icon: "✓",
          href: "/services/notary-public"
        },
        {
          title: "Credit Repair",
          description: "Credit building, dispute resolution, monitoring",
          icon: "📊",
          href: "/services/credit-repair"
        },
        {
          title: "Document Services",
          description: "Translation, preparation, organization",
          icon: "📑",
          href: "/services/document-prep"
        },
        {
          title: "Business Support",
          description: "LLC setup, permits, EIN, compliance",
          icon: "💼",
          href: "/services/business-support"
        },
        {
          title: "Life Insurance",
          description: "Family protection & wealth strategies",
          icon: "🛡️",
          href: "/services/life-insurance"
        },
        {
          title: "Real Estate (USA)",
          description: "Home buying, selling, investments in MA & NH",
          icon: "🏠",
          href: "/real-estate"
        },
        {
          title: "DR Property Investments",
          description: "Caribbean real estate with up to 30% returns",
          icon: "🌴",
          href: "/real-estate?tab=dr"
        }
      ],
      
      // WHY US SECTION
      whyUs: {
        title: "Why Optima Service Group?",
        items: [
          {
            icon: Award,
            label: "Years of Experience",
            desc: "Trusted by clients across multiple services"
          },
          {
            icon: Users,
            label: "Bilingual Support",
            desc: "English & Spanish assistance"
          },
          {
            icon: CheckCircle2,
            label: "Fully Compliant",
            desc: "Licensed & transparent operations"
          },
          {
            icon: Zap,
            label: "Fast Turnaround",
            desc: "Quick processing on all services"
          }
        ]
      },
      
      // FOOTER DISCLAIMER
      disclaimer: "We do not provide legal or financial advice. We assist with form preparation and document services only."
    },
    es: {
      // HERO SECTION
      hero: {
        headline: "Servicios Expertos de Impuestos, Inmigración y Negocios",
          subheadline: "Expertos bilingües en impuestos, inmigración y trámites empresariales—rápido, confiable y transparente",
        cta: "Comenzar Consulta Gratuita"
      },
      
      // PRIMARY CTAs
      ctas: {
        book: "Agendar Consulta",
        whatsapp: "Mensaje por WhatsApp"
      },
      
      // SERVICE CARDS
      services: [
        {
          title: "Preparación de Impuestos",
          description: "Declaraciones individuales y empresariales, ERC, deducciones",
          icon: "📋",
          href: "/services/tax-preparation"
        },
        {
          title: "Formularios de Inmigración",
          description: "Formularios USCIS, visas, permisos de trabajo, tarjetas verdes",
          icon: "📄",
          href: "/services/immigration-forms"
        },
        {
          title: "Servicios Notariales",
          description: "Notario certificado para todos los tipos de documentos",
          icon: "✓",
          href: "/services/notary-public"
        },
        {
          title: "Consultoría Empresarial",
          description: "Constitución de LLC, permisos, contabilidad, cumplimiento",
          icon: "💼",
          href: "/services"
        },
        {
          title: "Reparación de Crédito",
          description: "Construcción de crédito, resolución de disputas, monitoreo",
          icon: "📊",
          href: "/services"
        },
        {
          title: "Apoyo Inmobiliario",
          description: "Documentación de propiedades, servicios de título, cierres",
          icon: "🏠",
          href: "/services"
        }
      ],
      
      // WHY US SECTION
      whyUs: {
        title: "¿Por Qué Elegir Optima Service Group?",
        items: [
          {
            icon: Award,
            label: "Más de 10 Años de Experiencia",
            desc: "Confiado por cientos de clientes"
          },
          {
            icon: Users,
            label: "Soporte Bilingüe",
            desc: "Asistencia en inglés y español"
          },
          {
            icon: CheckCircle2,
            label: "Totalmente Conforme",
            desc: "Operaciones licenciadas y transparentes"
          },
          {
            icon: Zap,
            label: "Entrega Rápida",
            desc: "Procesamiento rápido en todos los servicios"
          }
        ]
      },
      
      // FOOTER DISCLAIMER
      disclaimer: "No proporcionamos asesoramiento legal ni financiero. Asistimos con preparación de formularios y servicios de documentos."
    }
  };
  
  const t = content[language];

  return (
    <main className="min-h-screen bg-white">
      {/* ============ 1. HERO SECTION ============ */}
      <section className="bg-gradient-to-br from-optima-navy to-[#1a3a52] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Logo width={240} height={240} priority className="shadow-lg ring-2 ring-optima-gold/40" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {t.hero.headline}
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white font-semibold mb-8 max-w-3xl mx-auto">
              {t.hero.subheadline}
            </p>
            
            {/* Primary CTAs - Large, Tappable, High Contrast */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-optima-gold hover:bg-yellow-400 text-optima-navy font-extrabold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-2xl ring-4 ring-optima-gold/30 min-h-11 flex items-center justify-center gap-2 text-lg"
              >
                <Phone className="w-5 h-5" />
                {t.ctas.book}
              </Link>
              
              <a
                href="https://wa.me/19787055509"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg min-h-11 flex items-center justify-center gap-2 text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                {t.ctas.whatsapp}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 2. SERVICE HUB - CARD GRID ============ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-optima-navy mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-800 font-semibold max-w-2xl mx-auto">
              Comprehensive solutions for your tax, immigration, and business needs
            </p>
          </div>
          
          {/* Service Grid - 6 Cards with Icons */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {t.services.map((service, idx) => (
              <motion.div key={idx} variants={item}>
                <Link href={service.href}>
                  <div className="group h-full bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-optima-gold cursor-pointer">
                    {/* Icon */}
                    <div className="text-5xl mb-4">{service.icon}</div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-optima-navy mb-2 group-hover:text-optima-gold transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Link Arrow */}
                    <div className="flex items-center text-optima-gold font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============ 3. WHY CHOOSE US - TRUST SECTION ============ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-optima-navy mb-4">
              {t.whyUs.title}
            </h2>
          </div>
          
          {/* 4 Trust Pillars */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {t.whyUs.items.map((trustItem, idx) => {
              const IconComponent = trustItem.icon;
              return (
                <motion.div key={idx} variants={item}>
                  <div className="bg-gradient-to-br from-optima-navy to-[#1a3a52] text-white rounded-xl p-6 text-center h-full">
                    {/* Icon */}
                    <IconComponent className="w-12 h-12 mx-auto mb-4 text-optima-gold" />
                    
                    {/* Label */}
                    <h3 className="text-lg font-bold mb-2">
                      {trustItem.label}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-200 text-sm leading-relaxed">
                      {trustItem.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ============ 4. COMPLIANCE DISCLAIMER ============ */}
      <section className="py-12 px-4 bg-gray-50 border-t-2 border-optima-navy">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 border-l-4 border-optima-gold">
            <p className="text-gray-700 font-semibold leading-relaxed">
              ⚠️ {t.disclaimer}
            </p>
          </div>
        </div>
      </section>

      {/* ============ 5. FINAL CTA BAR ============ */}
      <section className="py-12 px-4 bg-optima-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Grow?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-optima-gold hover:bg-yellow-400 text-optima-navy font-bold rounded-xl transition-all duration-200 transform hover:scale-105 min-h-11 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {t.ctas.book}
            </Link>
            
            <a
              href="https://wa.me/19787055509"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold rounded-xl transition-all duration-200 transform hover:scale-105 min-h-11 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              {t.ctas.whatsapp}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
