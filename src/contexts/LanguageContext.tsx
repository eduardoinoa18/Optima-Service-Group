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
    
    // About Page
    "about.title": "About Optima Service Group",
    "about.subtitle": "Your All-in-One Solution for Taxes, Immigration, Real Estate, Credit Repair, Business Support & More",
    "about.badge": "10+ Years of Trusted Service",
    "about.mission": "Our Mission",
    "about.missionText1": "At Optima Service Group, we provide comprehensive professional services under one roof. From tax preparation and ITIN applications to immigration forms, real estate services, credit repair, notary public, business support, and life insurance—we're your complete solution.",
    "about.missionText2": "Our bilingual team (English & Spanish) ensures accurate form preparation, maintains strict confidentiality, and treats every client with the respect and dignity they deserve. We don't provide legal or financial advice—we specialize in expert document preparation and administrative support.",
    "about.whatWeDo": "What We Do - Complete Service Suite",
    "about.ourValues": "Our Values",
    "about.value.integrity": "Integrity",
    "about.value.integrityDesc": "We act with honesty and transparency in everything we do.",
    "about.value.accuracy": "Accuracy",
    "about.value.accuracyDesc": "We take every detail seriously and ensure precision in our work.",
    "about.value.respect": "Respect",
    "about.value.respectDesc": "We value every client and treat each person with dignity.",
    "about.value.service": "Service",
    "about.value.serviceDesc": "Your experience and satisfaction always come first.",
    "about.founders": "Our Founders",
    "about.founder1Role": "Co-Founder",
    "about.founder1Bio": "Dedicated to providing exceptional service and building lasting client relationships.",
    "about.founder2Role": "Co-Founder",
    "about.founder2Bio": "Committed to excellence and ensuring every client receives personalized attention.",
    
    // Contact Page
    "contact.title": "Get in Touch",
    "contact.subtitle": "Ready to get started? Contact us today for expert assistance with taxes, immigration, real estate, credit repair, and all your professional service needs.",
    "contact.bilingualNote": "🇺🇸 English | 🇩🇴 Español • Fast Response • Confidential Service",
    "contact.info": "Contact Information",
    "contact.hours": "Mon-Fri: 9am-6pm\nSat: By appointment\nSun: Closed",
    "contact.form": "Send Us a Message",
    "contact.service": "Service Interested In",
    "contact.selectService": "Select a service...",
    "contact.whatsapp": "WhatsApp Us",
    
    // Real Estate
    "realEstate.heroTitle": "Real Estate & Investment Excellence",
    "realEstate.heroSubtitle": "USA Market Expertise + Dominican Republic Investment Opportunities",
    "realEstate.heroDescription": "Licensed REALTOR® Eduardo Inoa brings 20+ closed transactions and $10M+ in sales expertise, combined with specialized Dominican Republic property investment guidance. Bilingual service for all your real estate needs.",
    "realEstate.bookConsultation": "Book Consultation",
    "realEstate.usa": "USA Properties",
    "realEstate.dr": "Dominican Republic",
    "realEstate.usaTitle": "Massachusetts & New Hampshire Real Estate Services",
    "realEstate.usaSubtitle": "Comprehensive real estate solutions backed by licensing, experience, and bilingual support",
    "realEstate.whyEduardo": "Why Choose Eduardo for USA Real Estate?",
    "realEstate.testimonials": "Client Success Stories",
    "realEstate.drTitle": "Paraíso Inmobiliario: Dominican Republic Premium Real Estate Investments",
    "realEstate.drTagline": "Invest in the Dominican Republic with Confidence",
    "realEstate.drDescription": "Gateway to Caribbean real estate success with verified developers, expert guidance, and attractive commission structures.",
    "realEstate.marketInsights": "🇩🇴 Dominican Republic Real Estate Market Insights",
    "realEstate.featuredProperties": "Featured Investment Opportunities",
    "realEstate.whyInvest": "Why Invest in Dominican Republic Real Estate?",
    "realEstate.investmentJourney": "Your Investment Journey",
    "realEstate.readyTitle": "Ready to Start Your Real Estate Journey?",
    "realEstate.readySubtitle": "Let's discuss your home buying, selling, or investment goals",
    "realEstate.allServices": "Part of Our Complete Service Suite",
    "realEstate.exploreAll": "Explore All Services",

    // FAQ Page
    "faq.title": "Frequently Asked Questions",
    "faq.general": "General",
    "faq.general.q1.q": "What services does Optima Service Group offer?",
    "faq.general.q1.a": "We offer tax preparation, immigration form assistance, notary public services, credit repair guidance, document preparation and translations, and business support services. All services are provided in English and Spanish.",
    "faq.general.q2.q": "Do you provide legal or financial advice?",
    "faq.general.q2.a": "No, we do not provide legal or financial advice. We assist with form preparation, document services, and administrative support based on the information you provide.",
    "faq.general.q3.q": "What languages do you speak?",
    "faq.general.q3.a": "We provide bilingual services in English and Spanish to better serve our community.",
    "faq.general.q4.q": "How do I schedule an appointment?",
    "faq.general.q4.a": "You can schedule an appointment by calling us at (978) 705-5509, emailing inoaserv@gmail.com, or using the contact form on our website. We also accept WhatsApp messages.",
    "faq.description": "Find answers to common questions about our services. Can't find what you're looking for? Contact us.",
    "faq.tax": "Tax Services",
    "faq.tax.q1.q": "Do you prepare business tax returns?",
    "faq.tax.q1.a": "Currently, we focus on individual tax preparation only. We do not prepare corporate or business tax returns.",
    "faq.tax.q2.q": "Can you help me if I don't have a Social Security Number?",
    "faq.tax.q2.a": "Yes! We assist with ITIN (Individual Taxpayer Identification Number) applications and renewals so you can file your taxes.",
    "faq.tax.q3.q": "How long does tax preparation take?",
    "faq.tax.q3.a": "Most individual tax returns are completed within 1-2 business days, depending on complexity.",
    "faq.tax.q4.q": "What documents do I need for tax preparation?",
    "faq.tax.q4.a": "You'll need: valid photo ID, Social Security Card or ITIN, W-2 forms, 1099 forms (if applicable), receipts for deductions, and your prior year tax return if available.",
    "faq.immigration": "Immigration Services",
    "faq.immigration.q1.q": "Are you immigration attorneys?",
    "faq.immigration.q1.a": "No, we are not attorneys and do not provide legal advice. We assist with completing immigration forms based on the information you provide.",
    "faq.immigration.q2.q": "Can you determine if I'm eligible for a visa or green card?",
    "faq.immigration.q2.a": "No, we cannot determine eligibility or provide case strategy. We only help complete forms accurately based on your information.",
    "faq.immigration.q3.q": "Do you represent clients before USCIS?",
    "faq.immigration.q3.a": "No, we do not represent clients or communicate with USCIS on your behalf. We prepare documents only.",
    "faq.immigration.q4.q": "What immigration forms can you help with?",
    "faq.immigration.q4.a": "We can assist with completing various USCIS forms, document translation, application packet assembly, and form review for accuracy. The specific forms depend on your situation.",
    "faq.notary": "Notary Services",
    "faq.notary.q1.q": "What identification do I need for notarization?",
    "faq.notary.q1.a": "You need a current, valid government-issued photo ID such as a driver's license, state ID, or passport.",
    "faq.notary.q2.q": "Do you offer remote notarization?",
    "faq.notary.q2.a": "We currently offer in-person notarization services only.",
    "faq.notary.q3.q": "Can you notarize documents in Spanish?",
    "faq.notary.q3.a": "Yes, we can notarize documents in Spanish. We verify your identity and ensure you understand what you're signing.",
    "faq.notary.q4.q": "How much does notarization cost?",
    "faq.notary.q4.a": "Notarization fees are set by state law. Please contact us for current pricing.",
    "faq.credit": "Credit Repair",
    "faq.credit.q1.q": "Can you guarantee my credit score will improve?",
    "faq.credit.q1.a": "No, we cannot guarantee specific results. Credit repair depends on individual circumstances and credit bureau decisions.",
    "faq.credit.q2.q": "How long does credit repair take?",
    "faq.credit.q2.a": "Results vary, but most clients see changes within 30-90 days. It depends on the nature of items being disputed.",
    "faq.credit.q3.q": "What's included in credit repair services?",
    "faq.credit.q3.a": "We provide credit report review, dispute letter preparation, credit monitoring guidance, financial literacy education, and action plan development.",
    "faq.payment": "Payment & Pricing",
    "faq.payment.q1.q": "How much do your services cost?",
    "faq.payment.q1.a": "Pricing varies by service. Please contact us for a personalized quote based on your specific needs.",
    "faq.payment.q2.q": "What payment methods do you accept?",
    "faq.payment.q2.a": "We accept cash, credit/debit cards, and various digital payment methods. Please contact us for details.",
    "faq.payment.q3.q": "Do you offer payment plans?",
    "faq.payment.q3.a": "Payment plans may be available depending on the service. Please ask during your consultation.",
    "faq.stillQuestions": "Still Have Questions?",
    "faq.stillText": "We're here to help. Contact us today and we'll be happy to answer any questions you may have.",
    "faq.contactCta": "Contact Us",
    "faq.whatsapp": "WhatsApp Us",

    // Team Page
    "team.title": "Meet the Optima Team",
    "team.subtitle": "A dedicated group of professionals committed to delivering clear, reliable, and efficient services for our community.",
    "team.contactCta": "Contact Us",
    "team.readyTitle": "Ready to Work With Us?",
    "team.readySubtitle": "Contact our team today to discuss how we can help you.",
    "team.getStarted": "Get Started",
    "team.call": "Call (978) 705-5509",
    "team.more": "more",

    // Paraiso Redirect
    "paraiso.redirectTitle": "Redirecting to Dominican Republic Real Estate...",
    "paraiso.redirectText": "Please wait while we redirect you.",
    
    // Services Page
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive solutions for all your needs",
    "services.viewAll": "View All Services",
    "services.learnMore": "Learn More",
    "services.readyTitle": "Ready to Get Started?",
    "services.readySubtitle": "Contact us today to discuss your needs and find the right solution for you.",
    "services.call": "Call",
    
    // Service Items
    "service.taxPrep": "Tax Preparation & ITIN Services",
    "service.immigration": "Immigration Form Assistance",
    "service.realEstate": "Real Estate Services (USA & D.R.)",
    "service.creditRepair": "Credit Repair & Building",
    "service.notary": "Notary Public Services",
    "service.documents": "Document Preparation & Translation",
    "service.business": "Business Formation & Support",
    "service.lifeInsurance": "Life Insurance Solutions",
    "service.paraiso": "Paraíso Inmobiliario (D.R. Investments)",
    
    // Footer
    "footer.tagline": "Your Solution, All in One Place.",
    "footer.description": "Professional support for taxes, immigration forms, real estate, credit repair, notary services, and more—all under one roof.",
    "footer.quickLinks": "Quick Links",
    "footer.ourServices": "Our Services",
    "footer.contactUs": "Contact Us",
    "footer.legal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.phone": "Phone",
    "footer.email": "Email",
    "footer.address": "Address",
    "footer.rights": "All rights reserved.",
    "footer.disclaimer": "We do not provide legal or financial advice. We assist with form preparation and document services only.",
    "footer.whatsapp": "WhatsApp Us",
    
    // Common
    "common.readMore": "Read More",
    "common.contactUs": "Contact Us",
    "common.callNow": "Call Now",
    "common.emailUs": "Email Us",
    "common.schedule": "Schedule Appointment",
    "common.viewDetails": "View Details",
    "common.getDetails": "Get Details",
    "common.inquire": "Inquire",
    "common.priceRange": "Price Range",
    "common.expectedRoi": "Expected ROI",
    "common.propertyType": "Property Type",
    
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
    
    // About Page
    "about.title": "Sobre Optima Service Group",
    "about.subtitle": "Tu Solución Todo-en-Uno para Impuestos, Inmigración, Bienes Raíces, Reparación de Crédito, Apoyo Empresarial y Más",
    "about.badge": "10+ Años de Servicio Confiable",
    "about.mission": "Nuestra Misión",
    "about.missionText1": "En Optima Service Group, ofrecemos servicios profesionales integrales bajo un mismo techo. Desde preparación de impuestos y solicitudes de ITIN hasta formularios de inmigración, servicios inmobiliarios, reparación de crédito, notario público, apoyo empresarial y seguro de vida—somos tu solución completa.",
    "about.missionText2": "Nuestro equipo bilingüe (Inglés y Español) garantiza la preparación precisa de formularios, mantiene estricta confidencialidad y trata a cada cliente con el respeto y la dignidad que merecen. No proporcionamos asesoramiento legal o financiero—nos especializamos en la preparación experta de documentos y apoyo administrativo.",
    "about.whatWeDo": "Lo Que Hacemos - Suite Completa de Servicios",
    "about.ourValues": "Nuestros Valores",
    "about.value.integrity": "Integridad",
    "about.value.integrityDesc": "Actuamos con honestidad y transparencia en todo lo que hacemos.",
    "about.value.accuracy": "Precisión",
    "about.value.accuracyDesc": "Tomamos cada detalle en serio y aseguramos precisión en nuestro trabajo.",
    "about.value.respect": "Respeto",
    "about.value.respectDesc": "Valoramos a cada cliente y tratamos a cada persona con dignidad.",
    "about.value.service": "Servicio",
    "about.value.serviceDesc": "Tu experiencia y satisfacción siempre son lo primero.",
    "about.founders": "Nuestros Fundadores",
    "about.founder1Role": "Co-Fundador",
    "about.founder1Bio": "Dedicado a brindar un servicio excepcional y construir relaciones duraderas con los clientes.",
    "about.founder2Role": "Co-Fundador",
    "about.founder2Bio": "Comprometido con la excelencia y asegurar que cada cliente reciba atención personalizada.",
    
    // Contact Page
    "contact.title": "Contáctanos",
    "contact.subtitle": "¿Listo para comenzar? Contáctanos hoy para asistencia experta con impuestos, inmigración, bienes raíces, reparación de crédito y todas tus necesidades de servicios profesionales.",
    "contact.bilingualNote": "🇺🇸 English | 🇩🇴 Español • Respuesta Rápida • Servicio Confidencial",
    "contact.info": "Información de Contacto",
    "contact.name": "Nombre Completo",
    "contact.email": "Correo Electrónico",
    "contact.phone": "Número de Teléfono",
    "contact.message": "Tu Mensaje",
    "contact.send": "Enviar Mensaje",
    "contact.sending": "Enviando...",
    "contact.success": "¡Mensaje enviado exitosamente!",
    "contact.error": "Error al enviar mensaje. Por favor intenta de nuevo.",
    "contact.hours": "Lun-Vie: 9am-6pm\nSáb: Con cita\nDom: Cerrado",
    "contact.form": "Envíanos un Mensaje",
    "contact.service": "Servicio de Interés",
    "contact.selectService": "Selecciona un servicio...",
    "contact.whatsapp": "WhatsApp",
    
    // Real Estate
    "realEstate.heroTitle": "Excelencia en Bienes Raíces e Inversiones",
    "realEstate.heroSubtitle": "Experiencia en el Mercado de EE.UU. + Oportunidades de Inversión en República Dominicana",
    "realEstate.heroDescription": "El REALTOR® licenciado Eduardo Inoa aporta más de 20 transacciones cerradas y $10M+ en experiencia de ventas, combinado con orientación especializada en inversiones inmobiliarias de República Dominicana. Servicio bilingüe para todas tus necesidades inmobiliarias.",
    "realEstate.bookConsultation": "Reservar Consulta",
    "realEstate.usa": "Propiedades EE.UU.",
    "realEstate.dr": "República Dominicana",
    "realEstate.usaTitle": "Servicios Inmobiliarios de Massachusetts y New Hampshire",
    "realEstate.usaSubtitle": "Soluciones inmobiliarias integrales respaldadas por licencias, experiencia y apoyo bilingüe",
    "realEstate.whyEduardo": "¿Por Qué Elegir a Eduardo para Bienes Raíces en EE.UU.?",
    "realEstate.testimonials": "Historias de Éxito de Clientes",
    "realEstate.drTitle": "Paraíso Inmobiliario: Inversiones Premium en Bienes Raíces de República Dominicana",
    "realEstate.drTagline": "Invierte en la República Dominicana con Confianza",
    "realEstate.drDescription": "Puerta de entrada al éxito inmobiliario caribeño con desarrolladores verificados, orientación experta y estructuras de comisión atractivas.",
    "realEstate.marketInsights": "🇩🇴 Perspectivas del Mercado Inmobiliario de República Dominicana",
    "realEstate.featuredProperties": "Oportunidades de Inversión Destacadas",
    "realEstate.whyInvest": "¿Por Qué Invertir en Bienes Raíces de República Dominicana?",
    "realEstate.investmentJourney": "Tu Viaje de Inversión",
    "realEstate.readyTitle": "¿Listo para Comenzar Tu Viaje Inmobiliario?",
    "realEstate.readySubtitle": "Hablemos sobre tus objetivos de compra, venta o inversión de vivienda",
    "realEstate.allServices": "Parte de Nuestra Suite Completa de Servicios",
    "realEstate.exploreAll": "Explorar Todos los Servicios",

    // FAQ Page
    "faq.title": "Preguntas Frecuentes",
    "faq.general": "General",
    "faq.general.q1.q": "¿Qué servicios ofrece Optima Service Group?",
    "faq.general.q1.a": "Ofrecemos preparación de impuestos, asistencia con formularios de inmigración, servicios de notaría, orientación en reparación de crédito, preparación y traducción de documentos, y apoyo empresarial. Todos los servicios se brindan en inglés y español.",
    "faq.general.q2.q": "¿Proporcionan asesoramiento legal o financiero?",
    "faq.general.q2.a": "No, no brindamos asesoramiento legal o financiero. Asistimos con la preparación de formularios, servicios de documentos y apoyo administrativo según la información que proporciones.",
    "faq.general.q3.q": "¿Qué idiomas hablan?",
    "faq.general.q3.a": "Ofrecemos servicios bilingües en inglés y español para servir mejor a nuestra comunidad.",
    "faq.general.q4.q": "¿Cómo programo una cita?",
    "faq.general.q4.a": "Puedes programar una cita llamándonos al (978) 705-5509, enviando un correo a inoaserv@gmail.com o usando el formulario de contacto en nuestro sitio web. También aceptamos mensajes de WhatsApp.",
    "faq.description": "Encuentra respuestas a preguntas comunes sobre nuestros servicios. ¿No encuentras lo que buscas? Contáctanos.",
    "faq.tax": "Servicios de Impuestos",
    "faq.tax.q1.q": "¿Preparan declaraciones de impuestos de negocios?",
    "faq.tax.q1.a": "Actualmente nos enfocamos solo en preparación de impuestos individuales. No preparamos declaraciones de impuestos corporativos o de negocios.",
    "faq.tax.q2.q": "¿Pueden ayudarme si no tengo Seguro Social?",
    "faq.tax.q2.a": "¡Sí! Asistimos con solicitudes y renovaciones de ITIN para que puedas declarar tus impuestos.",
    "faq.tax.q3.q": "¿Cuánto tiempo toma la preparación de impuestos?",
    "faq.tax.q3.a": "La mayoría de las declaraciones individuales se completan en 1-2 días hábiles, dependiendo de la complejidad.",
    "faq.tax.q4.q": "¿Qué documentos necesito para la preparación de impuestos?",
    "faq.tax.q4.a": "Necesitarás: identificación con foto válida, tarjeta de Seguro Social o ITIN, formularios W-2, formularios 1099 (si aplica), recibos para deducciones y tu declaración de impuestos del año anterior si está disponible.",
    "faq.immigration": "Servicios de Inmigración",
    "faq.immigration.q1.q": "¿Son abogados de inmigración?",
    "faq.immigration.q1.a": "No, no somos abogados y no brindamos asesoramiento legal. Asistimos con completar formularios de inmigración según la información que proporciones.",
    "faq.immigration.q2.q": "¿Pueden determinar si soy elegible para una visa o green card?",
    "faq.immigration.q2.a": "No, no podemos determinar elegibilidad ni ofrecer estrategia de caso. Solo ayudamos a completar formularios con precisión según tu información.",
    "faq.immigration.q3.q": "¿Representan a clientes ante USCIS?",
    "faq.immigration.q3.a": "No, no representamos clientes ni nos comunicamos con USCIS en tu nombre. Solo preparamos documentos.",
    "faq.immigration.q4.q": "¿Con qué formularios de inmigración pueden ayudar?",
    "faq.immigration.q4.a": "Podemos ayudar a completar varios formularios de USCIS, traducción de documentos, armado de paquetes y revisión de formularios para precisión. Los formularios específicos dependen de tu situación.",
    "faq.notary": "Servicios de Notaría",
    "faq.notary.q1.q": "¿Qué identificación necesito para notarizar?",
    "faq.notary.q1.a": "Necesitas una identificación gubernamental vigente con foto, como licencia de conducir, identificación estatal o pasaporte.",
    "faq.notary.q2.q": "¿Ofrecen notarización remota?",
    "faq.notary.q2.a": "Actualmente ofrecemos solo notarización en persona.",
    "faq.notary.q3.q": "¿Pueden notarizar documentos en español?",
    "faq.notary.q3.a": "Sí, podemos notarizar documentos en español. Verificamos tu identidad y nos aseguramos de que entiendas lo que firmas.",
    "faq.notary.q4.q": "¿Cuánto cuesta la notarización?",
    "faq.notary.q4.a": "Las tarifas de notarización las establece la ley estatal. Contáctanos para los precios actuales.",
    "faq.credit": "Reparación de Crédito",
    "faq.credit.q1.q": "¿Pueden garantizar que mi puntaje mejorará?",
    "faq.credit.q1.a": "No, no podemos garantizar resultados específicos. La reparación de crédito depende de las circunstancias individuales y las decisiones de las agencias de crédito.",
    "faq.credit.q2.q": "¿Cuánto tiempo toma la reparación de crédito?",
    "faq.credit.q2.a": "Los resultados varían, pero la mayoría de los clientes ven cambios en 30-90 días. Depende de los elementos que se estén disputando.",
    "faq.credit.q3.q": "¿Qué incluye el servicio de reparación de crédito?",
    "faq.credit.q3.a": "Ofrecemos revisión de informes de crédito, preparación de cartas de disputa, guía de monitoreo de crédito, educación financiera y un plan de acción.",
    "faq.payment": "Pagos y Precios",
    "faq.payment.q1.q": "¿Cuánto cuestan sus servicios?",
    "faq.payment.q1.a": "Los precios varían según el servicio. Contáctanos para una cotización personalizada según tus necesidades.",
    "faq.payment.q2.q": "¿Qué métodos de pago aceptan?",
    "faq.payment.q2.a": "Aceptamos efectivo, tarjetas de crédito/débito y varios métodos de pago digital. Contáctanos para más detalles.",
    "faq.payment.q3.q": "¿Ofrecen planes de pago?",
    "faq.payment.q3.a": "Los planes de pago pueden estar disponibles según el servicio. Pregunta durante tu consulta.",
    "faq.stillQuestions": "¿Aún Tienes Preguntas?",
    "faq.stillText": "Estamos aquí para ayudarte. Contáctanos hoy y con gusto responderemos cualquier pregunta que tengas.",
    "faq.contactCta": "Contáctanos",
    "faq.whatsapp": "WhatsApp",

    // Team Page
    "team.title": "Conoce al Equipo de Optima",
    "team.subtitle": "Un grupo dedicado de profesionales comprometidos a brindar servicios claros, confiables y eficientes para nuestra comunidad.",
    "team.contactCta": "Contáctanos",
    "team.readyTitle": "¿Listo para Trabajar con Nosotros?",
    "team.readySubtitle": "Comunícate con nuestro equipo hoy para hablar de cómo podemos ayudarte.",
    "team.getStarted": "Comenzar",
    "team.call": "Llama al (978) 705-5509",
    "team.more": "más",

    // Paraiso Redirect
    "paraiso.redirectTitle": "Redirigiendo a Bienes Raíces de República Dominicana...",
    "paraiso.redirectText": "Por favor espera mientras te redirigimos.",
    
    // Services Page
    "services.title": "Nuestros Servicios",
    "services.subtitle": "Soluciones integrales para todas tus necesidades",
    "services.viewAll": "Ver Todos los Servicios",
    "services.learnMore": "Más Información",
    "services.readyTitle": "¿Listo para Comenzar?",
    "services.readySubtitle": "Contáctanos hoy para discutir tus necesidades y encontrar la solución adecuada para ti.",
    "services.call": "Llamar",
    
    // Service Items
    "service.taxPrep": "Preparación de Impuestos y Servicios ITIN",
    "service.immigration": "Asistencia con Formularios de Inmigración",
    "service.realEstate": "Servicios Inmobiliarios (EE.UU. y R.D.)",
    "service.creditRepair": "Reparación y Construcción de Crédito",
    "service.notary": "Servicios de Notario Público",
    "service.documents": "Preparación y Traducción de Documentos",
    "service.business": "Formación y Apoyo Empresarial",
    "service.lifeInsurance": "Soluciones de Seguro de Vida",
    "service.paraiso": "Paraíso Inmobiliario (Inversiones R.D.)",
    
    // Footer
    "footer.tagline": "Tu Solución, Todo en Un Lugar.",
    "footer.description": "Apoyo profesional para impuestos, formularios de inmigración, bienes raíces, reparación de crédito, servicios notariales y más—todo bajo un mismo techo.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.ourServices": "Nuestros Servicios",
    "footer.contactUs": "Contáctanos",
    "footer.legal": "Legal",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.phone": "Teléfono",
    "footer.email": "Correo",
    "footer.address": "Dirección",
    "footer.rights": "Todos los derechos reservados.",
    "footer.disclaimer": "No proporcionamos asesoramiento legal o financiero. Asistimos con preparación de formularios y servicios de documentos solamente.",
    "footer.whatsapp": "WhatsApp",
    
    // Common
    "common.readMore": "Leer Más",
    "common.contactUs": "Contáctanos",
    "common.callNow": "Llamar Ahora",
    "common.emailUs": "Enviar Correo",
    "common.schedule": "Agendar Cita",
    "common.viewDetails": "Ver Detalles",
    "common.getDetails": "Obtener Detalles",
    "common.inquire": "Consultar",
    "common.priceRange": "Rango de Precio",
    "common.expectedRoi": "ROI Esperado",
    "common.propertyType": "Tipo de Propiedad",
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
  
  // SSR-safe fallback - return default English translations during server-side rendering
  if (context === undefined) {
    return {
      language: "en" as Language,
      toggleLanguage: () => {},
      setLanguage: () => {},
      t: (key: string) => translations.en[key as keyof typeof translations.en] || key,
    };
  }
  
  return context;
}
