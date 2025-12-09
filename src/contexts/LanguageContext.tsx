"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.realEstate": "Real Estate",
    "nav.team": "Team",
    "nav.contact": "Contact",
    "nav.faq": "FAQ",
    "nav.getStarted": "Get Started",
    
    // Hero
    "hero.title": "Your Solution, All in One Place",
    "hero.subtitle": "Professional support for taxes, immigration forms, documents, and everyday services with clarity, transparency, and trust.",
    "hero.cta": "Get Started Today",
    "hero.learnMore": "Learn More",
    
    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive solutions for all your needs",
    "services.viewAll": "View All Services",
    "services.learnMore": "Learn More",
    
    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "We're here to help you",
    "contact.name": "Full Name",
    "contact.email": "Email Address",
    "contact.phone": "Phone Number",
    "contact.message": "Your Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success": "Message sent successfully!",
    "contact.error": "Failed to send message. Please try again.",
    
    // Footer
    "footer.tagline": "Your Solution, All in One Place.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.contact": "Contact Us",
    "footer.phone": "Phone",
    "footer.email": "Email",
    "footer.address": "Address",
    "footer.rights": "All rights reserved.",
    
    // Team
    "team.title": "Meet Our Team",
    "team.subtitle": "Experienced professionals dedicated to your success",
    "team.viewProfile": "View Profile",
    "team.email": "Email",
    "team.phone": "Phone",
    "team.whatsapp": "WhatsApp",
    "team.bookConsultation": "Book Consultation",
    "team.specialties": "Specialties",
    
    // Real Estate
    "realEstate.title": "Real Estate Services",
    "realEstate.subtitle": "Expert guidance for all your property needs",
    "realEstate.buying": "Buying",
    "realEstate.selling": "Selling",
    "realEstate.investors": "Investors",
    "realEstate.commercial": "Commercial",
    "realEstate.residential": "Residential",
    "realEstate.consulting": "Consulting",
    "realEstate.property": "Property Management",
    "realEstate.legal": "Legal Assistance",
    
    // Paraiso
    "paraiso.title": "Paraíso Inmobiliario",
    "paraiso.subtitle": "Your Gateway to Dominican Republic Real Estate",
    "paraiso.getStarted": "Get Started",
    
    // Common
    "common.readMore": "Read More",
    "common.contactUs": "Contact Us",
    "common.callNow": "Call Now",
    "common.emailUs": "Email Us",
    "common.schedule": "Schedule Appointment",
    "common.viewDetails": "View Details",
  },
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.realEstate": "Bienes Raíces",
    "nav.team": "Equipo",
    "nav.contact": "Contacto",
    "nav.faq": "Preguntas",
    "nav.getStarted": "Comenzar",
    
    // Hero
    "hero.title": "Tu Solución, Todo en Un Lugar",
    "hero.subtitle": "Apoyo profesional para impuestos, formularios de inmigración, documentos y servicios cotidianos con claridad, transparencia y confianza.",
    "hero.cta": "Comienza Hoy",
    "hero.learnMore": "Más Información",
    
    // Services
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Soluciones integrales para todas tus necesidades",
    "services.viewAll": "Ver Todos los Servicios",
    "services.learnMore": "Más Información",
    
    // Contact
    "contact.title": "Contáctanos",
    "contact.subtitle": "Estamos aquí para ayudarte",
    "contact.name": "Nombre Completo",
    "contact.email": "Correo Electrónico",
    "contact.phone": "Número de Teléfono",
    "contact.message": "Tu Mensaje",
    "contact.send": "Enviar Mensaje",
    "contact.sending": "Enviando...",
    "contact.success": "¡Mensaje enviado exitosamente!",
    "contact.error": "Error al enviar mensaje. Por favor intenta de nuevo.",
    
    // Footer
    "footer.tagline": "Tu Solución, Todo en Un Lugar.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.services": "Servicios",
    "footer.legal": "Legal",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.contact": "Contáctanos",
    "footer.phone": "Teléfono",
    "footer.email": "Correo",
    "footer.address": "Dirección",
    "footer.rights": "Todos los derechos reservados.",
    
    // Team
    "team.title": "Conoce Nuestro Equipo",
    "team.subtitle": "Profesionales experimentados dedicados a tu éxito",
    "team.viewProfile": "Ver Perfil",
    "team.email": "Correo",
    "team.phone": "Teléfono",
    "team.whatsapp": "WhatsApp",
    "team.bookConsultation": "Reservar Consulta",
    "team.specialties": "Especialidades",
    
    // Real Estate
    "realEstate.title": "Servicios de Bienes Raíces",
    "realEstate.subtitle": "Asesoría experta para todas tus necesidades inmobiliarias",
    "realEstate.buying": "Compra",
    "realEstate.selling": "Venta",
    "realEstate.investors": "Inversores",
    "realEstate.commercial": "Comercial",
    "realEstate.residential": "Residencial",
    "realEstate.consulting": "Consultoría",
    "realEstate.property": "Administración de Propiedades",
    "realEstate.legal": "Asistencia Legal",
    
    // Paraiso
    "paraiso.title": "Paraíso Inmobiliario",
    "paraiso.subtitle": "Tu Puerta de Entrada al Mercado Inmobiliario Dominicano",
    "paraiso.getStarted": "Comenzar",
    
    // Common
    "common.readMore": "Leer Más",
    "common.contactUs": "Contáctanos",
    "common.callNow": "Llamar Ahora",
    "common.emailUs": "Enviar Correo",
    "common.schedule": "Agendar Cita",
    "common.viewDetails": "Ver Detalles",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  // Load saved language from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language | null;
      if (saved && (saved === "en" || saved === "es")) {
        setLanguageState(saved);
      }
      setMounted(true);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  const toggleLanguage = () => {
    const newLang = language === "en" ? "es" : "en";
    setLanguage(newLang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
