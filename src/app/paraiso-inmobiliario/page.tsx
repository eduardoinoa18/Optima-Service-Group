"use client";

import { Building2, TrendingUp, Users, DollarSign, MapPin, Phone, MessageSquare, CheckCircle2, ArrowRight, Shield, Award, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ParaisoInmobiliarioPage() {
  const properties = [
    { title: "Punta Cana Beachfront", description: "Condominios y villas frente al mar con amenidades de resort clase mundial", roi: "Ingresos variables", price: "Consultar", type: "Condos & Villas" },
    { title: "Proyectos en Moca", description: "Propiedades residenciales en expansión regional con desarrollo creciente", roi: "Según estructura", price: "Consultar", type: "Apartamentos" },
    { title: "Cabarete Turístico", description: "Propiedades en zona de alto flujo de visitantes internacionales", roi: "Ingresos por alquiler", price: "Consultar", type: "Condos Playa" },
    { title: "Inversiones Comerciales", description: "Oportunidades de negocio con administración profesional disponible", roi: "Según proyecto", price: "Consultar", type: "Comercial" },
    { title: "Residencial Premium", description: "Propiedades exclusivas en comunidades seleccionadas", roi: "Variable", price: "Consultar", type: "Villas" },
    { title: "Proyectos Regionales", description: "Oportunidades en diferentes zonas de la República Dominicana", roi: "Según ubicación", price: "Consultar", type: "Mixto" },
  ];

  const propertyImages = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    "https://images.unsplash.com/photo-1512622550470-58d82097c900",
    "https://images.unsplash.com/photo-1502005645147-dba150f16121",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
    "https://images.unsplash.com/photo-1549887534-f96635e93c96",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Logo */}
      <section className="relative py-28 px-4 bg-linear-to-br from-blue-900 via-teal-700 to-teal-600 text-white overflow-hidden bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] " />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            {/* Logo with Circular Frame */}
            <div className="flex justify-center mb-8">
              <div className="relative w-40 h-40">
                {/* Outer circle border - Gold */}
                <div className="absolute inset-0 rounded-full border-4 border-yellow-400/40" />
                {/* Middle circle - Teal */}
                <div className="absolute inset-2 rounded-full border-2 border-teal-200/30" />
                {/* Logo container */}
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-white/95 to-blue-50/90 shadow-2xl">
                  <Image
                    src="/Paraiso Logo.jpg"
                    alt="Paraiso Inmobiliario Logo"
                    width={140}
                    height={140}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/15 text-white px-5 py-2 rounded-full mb-6 border border-white/30 backdrop-blur-sm">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Inversiones Inmobiliarias Verificadas</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Paraíso Inmobiliario
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold text-yellow-200 drop-shadow-md">
              Tu Fundación para la Inversión Inmobiliaria
            </p>
            <p className="text-lg max-w-3xl mx-auto mb-4 text-gray-50">
              Oportunidades de inversión inmobiliaria en múltiples regiones del país
            </p>
            <p className="text-lg max-w-3xl mx-auto mb-10 text-teal-100">
              Propiedades verificadas | Desarrolladores confiables | Financiamiento disponible | Zonas turísticas e inland
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/19787055509?text=Interesado%20en%20Paraiso%20Inmobiliario%20-%20Quiero%20informaci%C3%B3n%20sobre%20propiedades%20en%20Rep%C3%BAblica%20Dominicana" target="_blank" rel="noopener noreferrer" className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-5 text-xl font-bold rounded-lg inline-flex items-center transition-all shadow-2xl hover:shadow-3xl border-2 border-yellow-300/50">
                <MessageSquare className="w-6 h-6 mr-2" />
                Contactar por WhatsApp
              </a>
              <Link href="/contact?service=paraiso-inmobiliario" className="bg-blue-900 hover:bg-blue-950 text-white px-10 py-5 text-xl font-bold rounded-lg inline-flex items-center transition-all shadow-2xl hover:shadow-3xl border-2 border-yellow-300/50">
                <Phone className="w-6 h-6 mr-2" />
                Agendar Consulta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fast Action CTA Strip */}
      <section className="-mt-10 mb-6 px-4 relative z-20">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-4">
          <div className="rounded-xl bg-white shadow-xl border border-blue-100 p-6 flex items-center gap-4 hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-2xl">⏱️</div>
            <div>
              <p className="text-sm text-blue-700 font-semibold uppercase tracking-wide">Respuesta en 15 minutos</p>
              <p className="text-lg font-bold text-blue-900">Agenda tu lista personalizada hoy</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a href="https://wa.me/19787055509?text=Quiero%20mi%20lista%20personalizada%20de%20propiedades" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-sm">WhatsApp inmediato</a>
                <Link href="/contact?service=paraiso-inmobiliario&priority=fast-track" className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-semibold shadow-sm">Programar llamada</Link>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-blue-900 text-white shadow-xl border border-blue-700/40 p-6 flex items-center gap-4 hover:-translate-y-1 transition-transform">
            <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center text-2xl">📋</div>
            <div>
              <p className="text-sm text-blue-100 font-semibold uppercase tracking-wide">Verificación previa</p>
              <p className="text-lg font-bold">Propiedades auditadas + revisión legal</p>
              <p className="text-sm text-blue-100">Financiamiento, due diligence y cierre guiado 30-45 días</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-12 px-4 bg-linear-to-r from-blue-900 via-teal-600 to-teal-500 border-b-4 border-yellow-400">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold text-yellow-300 mb-2">100+</div><p className="text-white font-medium">Propiedades Gestionadas</p></div>
            <div><div className="text-4xl font-bold text-yellow-300 mb-2">Múltiples</div><p className="text-white font-medium">Regiones del País</p></div>
            <div><div className="text-4xl font-bold text-yellow-300 mb-2">Flexible</div><p className="text-white font-medium">Opciones de Inversión</p></div>
            <div><div className="text-4xl font-bold text-yellow-300 mb-2">Asesoría</div><p className="text-white font-medium">Profesional Completa</p></div>
          </div>
        </div>
      </section>

      {/* Why Dominican Republic */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">¿Por Qué Invertir en República Dominicana?</h2>
            <p className="text-2xl text-teal-700 font-semibold">El destino más atractivo del Caribe para inversión inmobiliaria</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Destinos Diversos", text: "Oportunidades en zonas turísticas y en expansión como Moca" },
              { icon: Shield, title: "Sin Restricciones Legales", text: "Extranjeros pueden comprar y ser propietarios sin limitaciones" },
              { icon: DollarSign, title: "Impuestos Bajos", text: "Estructura fiscal favorable para propietarios e inversionistas" },
              { icon: Building2, title: "Destinos Turísticos", text: "Acceso a propiedades en zonas con alto flujo de visitantes" },
              { icon: Users, title: "Desarrollo Regional", text: "Propiedades en múltiples áreas del país con distintos potenciales" },
              { icon: Home, title: "Financiamiento Disponible", text: "Opciones de financiamiento adaptadas a cada proyecto" },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-teal-500 hover:border-yellow-400">
                  <Icon className="w-12 h-12 text-teal-600 mb-4" />
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties with Caribbean Imagery */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Propiedades Disponibles</h2>
            <p className="text-2xl text-gray-700">Oportunidades de inversión en diferentes zonas y estructuras</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, idx) => {
              const imageSrc = propertyImages[idx % propertyImages.length];
              return (
                <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-teal-500 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={imageSrc} alt={property.title} fill className="object-cover" priority={idx < 2} />
                    <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/25 to-black/40 group-hover:via-black/15 transition-all flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-yellow-300 mb-2 mx-auto" />
                        <p className="text-white font-semibold text-sm">{property.title.split(" ")[0]}, DR</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="inline-block bg-linear-to-r from-teal-100 to-teal-50 text-teal-900 px-4 py-2 rounded-full text-sm font-bold mb-4 border border-teal-300">{property.type}</div>
                    <h4 className="text-2xl font-bold text-blue-900 mb-3">{property.title}</h4>
                    <p className="text-gray-700 mb-6 text-sm leading-relaxed">{property.description}</p>
                    <div className="space-y-4 mb-8 bg-linear-to-br from-teal-50 to-blue-50 p-4 rounded-lg border border-teal-200">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-semibold flex items-center gap-2"><DollarSign className="w-4 h-4 text-teal-600" />Precio:</span>
                        <span className="font-bold text-teal-700 text-lg">{property.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-semibold flex items-center gap-2"><TrendingUp className="w-4 h-4 text-teal-600" />Potencial:</span>
                        <span className="text-teal-700 font-bold text-lg">{property.roi}</span>
                      </div>
                    </div>
                    <a href="https://wa.me/19787055509?text=Quiero%20saber%20m%C3%A1s%20sobre%20{property.title.replace(/\s+/g, '%20')}%20-%20Paraiso%20Inmobiliario" target="_blank" rel="noopener noreferrer" className="w-full bg-linear-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold py-3 rounded-lg inline-flex items-center justify-center transition-all shadow-md hover:shadow-lg border border-yellow-300/30">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Ver Detalles
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Análisis de Mercado</h2>
            <p className="text-2xl text-gray-700">Datos que respaldan la inversión inmobiliaria en RD</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl border-l-4 border-teal-500 shadow-md">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Crecimiento del Mercado</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-teal-600 mr-3 shrink-0 mt-1" /><span><strong>10M+ visitantes</strong> anuales impulsan demanda de alquileres</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-teal-600 mr-3 shrink-0 mt-1" /><span><strong>Apreciación regional</strong> variable según zona y proyecto</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-teal-600 mr-3 shrink-0 mt-1" /><span><strong>Moneda estable</strong> DOP vinculado al USD reduce riesgo cambiario</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-teal-600 mr-3 shrink-0 mt-1" /><span><strong>Sin restricciones</strong> a propiedad extranjera</span></li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl border-l-4 border-yellow-400 shadow-md">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Beneficios Financieros</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-teal-600 mr-3 shrink-0 mt-1" /><span><strong>Estructura fiscal favorable</strong> para inversionistas</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-teal-600 mr-3 shrink-0 mt-1" /><span><strong>Incentivos</strong> para propiedad inmobiliaria</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-teal-600 mr-3 shrink-0 mt-1" /><span><strong>Oportunidades de ingresos</strong> a través de alquileres</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-teal-600 mr-3 shrink-0 mt-1" /><span><strong>Opciones de financiamiento</strong> adaptadas a tu perfil</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Caribbean Destinations Showcase */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Destinos Premium del Caribe</h2>
            <p className="text-2xl text-teal-700 font-semibold">Invierte en los lugares más buscados de la República Dominicana</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-72 bg-linear-to-br from-sky-400 to-blue-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10">
                    <div className="text-6xl mb-4">🏖️</div>
                    <h3 className="text-3xl font-bold text-white mb-2">Punta Cana & Bávaro</h3>
                    <p className="text-blue-100 text-lg">Destino Turístico de Clase Mundial</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-linear-to-br from-blue-50 to-white">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-1" /><span><strong>Zona Hotelera:</strong> Condos y villas con potencial de ingresos por alquiler</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-1" /><span><strong>Playas Privadas:</strong> Residencias de lujo frente al mar</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-1" /><span><strong>Alto flujo de visitantes</strong> con demanda consistente de alquileres</span></li>
                </ul>
                <a href="https://wa.me/19787055509?text=Quiero%20informaci%C3%B3n%20sobre%20propiedades%20en%20Punta%20Cana" target="_blank" rel="noopener noreferrer" className="mt-6 w-full bg-linear-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold py-3 rounded-lg transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center border border-yellow-300/40">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Consultar Punta Cana
                </a>
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-72 bg-linear-to-br from-blue-600 to-teal-500 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10">
                    <div className="text-6xl mb-4">🌴</div>
                    <h3 className="text-3xl font-bold text-white mb-2">Moca & Región Inland</h3>
                    <p className="text-yellow-200 text-lg">Oportunidades en Expansión Regional</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-blue-50 to-white border-t-4 border-teal-500">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-1" /><span><strong>Desarrollo Regional:</strong> Propiedades residenciales en expansión</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-1" /><span><strong>Precios Accesibles:</strong> Menor costo de entrada para inversionistas</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-1" /><span><strong>Potencial de Apreciación:</strong> Mercado emergente con oportunidades</span></li>
                </ul>
                <a href="https://wa.me/19787055509?text=Quiero%20informaci%C3%B3n%20sobre%20propiedades%20en%20Moca%20u%20otras%20regiones" target="_blank" rel="noopener noreferrer" className="mt-6 w-full bg-linear-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold py-3 rounded-lg transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center border border-yellow-300/40">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Consultar Moca
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nationwide Coverage */}
      <section className="py-20 px-4 bg-linear-to-b from-white to-teal-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Cobertura Nacional</h2>
            <p className="text-2xl text-teal-700 font-semibold">Gestionamos proyectos inmobiliarios en toda la República Dominicana</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Zonas Turísticas</h3>
              <p className="text-gray-700 mb-4">Punta Cana, Cabarete, Samaná, La Romana y más. Acceso a propiedades con potencial de ingresos por turismo y alquileres a corto plazo.</p>
              <a href="https://wa.me/19787055509?text=Quiero%20saber%20m%C3%A1s%20sobre%20propiedades%20en%20zonas%20tur%C3%ADsticas" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold hover:text-teal-900 inline-flex items-center gap-2 transition-colors">
                <MessageSquare className="w-4 h-4" />
                Consultar
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-yellow-400 hover:shadow-lg transition-all">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Regiones Inland</h3>
              <p className="text-gray-700 mb-4">Moca, Santiago, La Vega y otras regiones en desarrollo. Propiedades residenciales con potencial de apreciación a largo plazo.</p>
              <a href="https://wa.me/19787055509?text=Quiero%20saber%20m%C3%A1s%20sobre%20propiedades%20inland%20como%20Moca" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold hover:text-teal-900 inline-flex items-center gap-2 transition-colors">
                <MessageSquare className="w-4 h-4" />
                Consultar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Professional */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-teal-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Experiencias de Inversionistas</h2>
            <p className="text-xl text-yellow-200">Testimonios de clientes que han invertido con nosotros</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Proceso transparente y bien estructurado. El equipo entiende el mercado dominicano. Excelente servicio y asesoramiento profesional en español.", author: "Roberto M.", location: "Inversionista - Punta Cana" },
              { quote: "Excelente asesoramiento. Adquirí propiedades en diferentes zonas del país. El cierre fue rápido y todo muy profesional.", author: "Patricia L.", location: "Propietaria - Santo Domingo" },
              { quote: "Muy profesional. Entendieron mis objetivos de inversión y me presentaron opciones en zonas turísticas e inland. Transparencia total en todo el proceso.", author: "Carlos V.", location: "Inversionista - Múltiples Propiedades" },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/15 backdrop-blur-sm p-8 rounded-xl border-2 border-yellow-300/40 hover:bg-white/20 transition-all">
                <p className="text-white mb-6 text-lg leading-relaxed">\"{testimonial.quote}\"</p>
                <div className="border-t border-yellow-200/30 pt-4">
                  <p className="font-semibold text-yellow-200">{testimonial.author}</p>
                  <p className="text-sm text-yellow-100/80">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-teal-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Tu Proceso de Inversión</h2>
            <p className="text-2xl text-teal-700 font-semibold">Pasos claros y transparentes de principio a fin</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              { step: 1, title: "Consulta Inicial" },
              { step: 2, title: "Búsqueda de Propiedades" },
              { step: 3, title: "Revisión Legal" },
              { step: 4, title: "Inspección en Sitio" },
              { step: 5, title: "Contrato & Financiamiento" },
              { step: 6, title: "Cierre de Transacción" },
            ].map((stage) => (
              <div key={stage.step} className="text-center">
                <div className="w-20 h-20 bg-linear-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg border-4 border-yellow-300/50 hover:shadow-xl transition-all">{stage.step}</div>
                <p className="font-bold text-blue-900">{stage.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Urgency Section */}
      <section className="py-20 px-4 bg-linear-to-br from-teal-50 via-blue-50 to-teal-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">¿Por Qué Confiar en Nosotros?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Shield className="w-8 h-8 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Propiedades Verificadas</h3>
                    <p className="text-gray-700">Cada propiedad pasa revisión legal completa y due diligence antes de ofrecerla</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Award className="w-8 h-8 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Desarrolladores Confiables</h3>
                    <p className="text-gray-700">Solo trabajamos con constructoras líderes con historiales verificados y referencias</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="w-8 h-8 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Servicio en Español</h3>
                    <p className="text-gray-700">Asesor bilingüe dedicado a cada cliente para guiar durante todo el proceso</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-teal-500 hover:shadow-xl transition-all">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Propiedades Disponibles</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center text-white font-bold shrink-0">15</div>
                  <div>
                    <p className="font-semibold text-blue-900">Condos de Lujo en Punta Cana</p>
                    <p className="text-sm text-gray-600">Múltiples opciones disponibles</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center text-white font-bold shrink-0">8</div>
                  <div>
                    <p className="font-semibold text-blue-900">Residencias en Cabarete</p>
                    <p className="text-sm text-gray-600">Propiedades verificadas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center text-white font-bold shrink-0">12</div>
                  <div>
                    <p className="font-semibold text-blue-900">Proyectos en Moca y Otras Regiones</p>
                    <p className="text-sm text-gray-600">Oportunidades en desarrollo</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
                💡 <strong>Consulta Personalizada:</strong> Contacta para conocer propiedades disponibles según tus objetivos de inversión.
              </p>
              <a href="https://wa.me/19787055509?text=Quiero%20ver%20la%20lista%20de%20propiedades%20disponibles%20ahora" target="_blank" rel="noopener noreferrer" className="w-full bg-linear-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold py-3 rounded-lg transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center border border-yellow-300/40">
                <MessageSquare className="w-5 h-5 mr-2" />
                Ver Propiedades Disponibles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-linear-to-r from-blue-900 to-teal-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Comienza Tu Inversión Hoy</h2>
          <p className="text-2xl mb-4 font-semibold text-yellow-200">Propiedades seleccionadas y verificadas</p>
          <p className="text-xl mb-10 text-teal-100">Consulta gratuita | Desarrolladores confiables | Servicio en español</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://wa.me/19787055509?text=Hola%2C%20quiero%20invertir%20en%20República%20Dominicana%20con%20Paraiso%20Inmobiliario" target="_blank" rel="noopener noreferrer" className="bg-teal-500 hover:bg-teal-600 text-white px-12 py-6 text-2xl font-bold rounded-lg inline-flex items-center transition-all shadow-2xl hover:shadow-3xl border-2 border-yellow-300/50">
              <MessageSquare className="w-8 h-8 mr-3" />
              WhatsApp Directo
            </a>
            <Link href="/contact?service=paraiso-inmobiliario" className="bg-white hover:bg-yellow-50 text-blue-900 px-12 py-6 text-2xl font-bold rounded-lg inline-flex items-center transition-all shadow-2xl hover:shadow-3xl">
              <Phone className="w-8 h-8 mr-3" />
              Agendar Consulta
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-linear-to-r from-teal-700 via-blue-900 to-teal-700 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">¿Listo para Invertir?</h2>
            <p className="text-xl text-yellow-100 mb-10 max-w-3xl mx-auto">
              Completa tu información hoy y recibe una lista personalizada de propiedades que coincidan con tu perfil de inversión
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/19787055509?text=Estoy%20listo%20para%20invertir%20en%20Paraiso%20Inmobiliario.%20Quiero%20una%20consulta%20personalizada" target="_blank" rel="noopener noreferrer" className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-4 text-lg font-bold rounded-lg inline-flex items-center justify-center transition-all shadow-lg hover:shadow-xl border border-yellow-300/40">
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp Directo
              </a>
              <Link href="/contact?service=paraiso-inmobiliario&type=investment" className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-10 py-4 text-lg font-bold rounded-lg inline-flex items-center justify-center transition-all shadow-lg hover:shadow-xl">
                <Phone className="w-5 h-5 mr-2" />
                Agendar Llamada
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
