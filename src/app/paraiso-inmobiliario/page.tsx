"use client";

import { Building2, TrendingUp, Users, DollarSign, MapPin, Phone, MessageSquare, CheckCircle2, ArrowRight, Shield, Award, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ParaisoInmobiliarioPage() {
  const properties = [
    { title: "Punta Cana Beachfront", description: "Condominios y villas frente al mar con amenidades de resort clase mundial", roi: "12-15%", price: "$180K - $850K", type: "Condos & Villas" },
    { title: "Santo Domingo Luxury", description: "Residencias urbanas de lujo en la capital con alta demanda de alquiler", roi: "10-12%", price: "$150K - $600K", type: "Apartamentos" },
    { title: "Cabarete Resort", description: "Propiedades turísticas en zona de alto flujo de visitantes internacionales", roi: "15-18%", price: "$120K - $450K", type: "Condos Playa" },
    { title: "Bávaro Investment", description: "Suites con administración hotelera incluida - retorno automático", roi: "14-16%", price: "$200K - $500K", type: "Suites Administradas" },
    { title: "La Romana Golf Estates", description: "Propiedades exclusivas en comunidad de golf premium con altos valores", roi: "11-13%", price: "$300K - $1.2M", type: "Villas Privadas" },
    { title: "Samaná Bay Properties", description: "Villas de lujo en destino emergente con potencial de apreciación", roi: "13-17%", price: "$160K - $700K", type: "Villas Premium" },
  ];

  const propertyImages = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1512622550470-58d82097c900?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1502005645147-dba150f16121?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1549887534-f96635e93c96?w=400&h=300&fit=crop",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-28 px-4 bg-linear-to-br from-blue-700 via-blue-600 to-blue-500 text-white overflow-hidden bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1400&h=600&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] " />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white px-5 py-2 rounded-full mb-6 border border-white/30 backdrop-blur-sm">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Inversiones Inmobiliarias Verificadas</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Paraíso Inmobiliario
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold text-blue-100">
              Oportunidades de Inversión Premium en República Dominicana
            </p>
            <p className="text-lg max-w-3xl mx-auto mb-4 text-gray-100">
              Acceso a propiedades verificadas con retorno de inversión 10-18% anual
            </p>
            <p className="text-lg max-w-3xl mx-auto mb-10 text-gray-200">
              Propiedades premium | Desarrolladores confiables | Financiamiento disponible | Cierre en 30-45 días
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/19787055509?text=Interesado%20en%20Paraiso%20Inmobiliario%20-%20Quiero%20informaci%C3%B3n%20sobre%20propiedades%20en%20Rep%C3%BAblica%20Dominicana" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 text-xl font-bold rounded-lg inline-flex items-center transition-all shadow-2xl hover:shadow-3xl">
                <MessageSquare className="w-6 h-6 mr-2" />
                Contactar por WhatsApp
              </a>
              <Link href="/contact?service=paraiso-inmobiliario" className="bg-blue-200 hover:bg-blue-300 text-blue-900 px-10 py-5 text-xl font-bold rounded-lg inline-flex items-center transition-all shadow-2xl hover:shadow-3xl">
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
      <section className="py-12 px-4 bg-blue-50 border-b border-blue-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold text-blue-700 mb-2">10M+</div><p className="text-gray-700 font-medium">Visitantes Anuales</p></div>
            <div><div className="text-4xl font-bold text-blue-700 mb-2">15-18%</div><p className="text-gray-700 font-medium">ROI Promedio</p></div>
            <div><div className="text-4xl font-bold text-blue-700 mb-2">$150K</div><p className="text-gray-700 font-medium">Inversión Mínima</p></div>
            <div><div className="text-4xl font-bold text-blue-700 mb-2">30-45 Días</div><p className="text-gray-700 font-medium">Cierre Típico</p></div>
          </div>
        </div>
      </section>

      {/* Why Dominican Republic */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">¿Por Qué Invertir en República Dominicana?</h2>
            <p className="text-2xl text-gray-700">El destino más atractivo del Caribe para inversión inmobiliaria</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Alto Retorno de Inversión", text: "ROI anual 10-18% en zonas turísticas con alta ocupación" },
              { icon: Shield, title: "Sin Restricciones Legales", text: "Extranjeros pueden comprar y ser propietarios sin limitaciones" },
              { icon: DollarSign, title: "Impuestos Bajos", text: "0.5-1% impuesto anual, sin impuesto sobre ganancias de capital" },
              { icon: Building2, title: "Turismo Fuerte", text: "10M+ visitantes anuales generan demanda consistente de alquileres" },
              { icon: Users, title: "Mercado Creciente", text: "Apreciación de propiedad 5-8% anual en zonas premium" },
              { icon: Home, title: "Financiamiento Disponible", text: "30-40% enganche, plazos de 10-15 años en desarrolladores principales" },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-blue-700">
                  <Icon className="w-12 h-12 text-blue-700 mb-4" />
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
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Propiedades Premium Disponibles</h2>
            <p className="text-2xl text-gray-700">Inversiones verificadas con retorno garantizado de desarrolladores líderes</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, idx) => {
              const imageSrc = propertyImages[idx % propertyImages.length];
              return (
                <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all border-t-4 border-blue-700 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={imageSrc} alt={property.title} fill className="object-cover" priority={idx < 2} />
                    <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/25 to-black/40 group-hover:via-black/15 transition-all flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-white mb-2 mx-auto" />
                        <p className="text-white font-semibold text-sm">{property.title.split(" ")[0]}, DR</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="inline-block bg-linear-to-r from-blue-100 to-blue-50 text-blue-900 px-4 py-2 rounded-full text-sm font-bold mb-4 border border-blue-200">{property.type}</div>
                    <h4 className="text-2xl font-bold text-blue-900 mb-3">{property.title}</h4>
                    <p className="text-gray-700 mb-6 text-sm leading-relaxed">{property.description}</p>
                    <div className="space-y-4 mb-8 bg-linear-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-semibold flex items-center gap-2"><DollarSign className="w-4 h-4 text-blue-700" />Precio:</span>
                        <span className="font-bold text-blue-900 text-lg">{property.price}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700 font-semibold flex items-center gap-2"><TrendingUp className="w-4 h-4 text-green-700" />ROI Anual:</span>
                        <span className="text-green-700 font-bold text-lg">{property.roi}</span>
                      </div>
                    </div>
                    <a href="https://wa.me/19787055509?text=Quiero%20saber%20m%C3%A1s%20sobre%20{property.title.replace(/\s+/g, '%20')}%20-%20Paraiso%20Inmobiliario" target="_blank" rel="noopener noreferrer" className="w-full bg-linear-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white font-bold py-3 rounded-lg inline-flex items-center justify-center transition-all shadow-md hover:shadow-lg">
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
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-700">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Crecimiento del Mercado</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-600 mr-3 shrink-0 mt-1" /><span><strong>10M+ visitantes</strong> anuales impulsan demanda de alquileres</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-600 mr-3 shrink-0 mt-1" /><span><strong>5-8% apreciación</strong> anual en zonas premium</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-600 mr-3 shrink-0 mt-1" /><span><strong>Moneda estable</strong> DOP vinculado al USD reduce riesgo cambiario</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-600 mr-3 shrink-0 mt-1" /><span><strong>Sin restricciones</strong> a propiedad extranjera</span></li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl border-l-4 border-blue-700">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Beneficios Financieros</h3>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-600 mr-3 shrink-0 mt-1" /><span><strong>Impuestos bajos:</strong> 0.5-1% tasa anual</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-600 mr-3 shrink-0 mt-1" /><span><strong>Sin impuesto</strong> sobre ganancias de capital en residencia principal</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-600 mr-3 shrink-0 mt-1" /><span><strong>Ingresos de alquiler</strong> exentos bajo ciertas condiciones</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-600 mr-3 shrink-0 mt-1" /><span><strong>Financiamiento:</strong> 30-40% enganche, 10-15 años</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Caribbean Destinations Showcase */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Destinos Premium del Caribe</h2>
            <p className="text-2xl text-gray-700">Invierte en los lugares más buscados de la República Dominicana</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-72 bg-linear-to-br from-sky-400 to-blue-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10">
                    <div className="text-6xl mb-4">🏖️</div>
                    <h3 className="text-3xl font-bold text-white mb-2">Punta Cana & Bávaro</h3>
                    <p className="text-blue-100 text-lg">Zona Turística Número 1 del Caribe</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-linear-to-br from-blue-50 to-white">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" /><span><strong>Hotel Zone:</strong> Condos administrados con retorno garantizado 12-15%</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" /><span><strong>Playas Privadas:</strong> Residencias de lujo frente al mar</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" /><span><strong>3.5M+ visitantes</strong> anuales = Alta demanda de alquileres</span></li>
                </ul>
                <a href="https://wa.me/19787055509?text=Quiero%20informaci%C3%B3n%20sobre%20propiedades%20en%20Punta%20Cana" target="_blank" rel="noopener noreferrer" className="mt-6 w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Consultar Punta Cana
                </a>
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="relative h-72 bg-linear-to-br from-emerald-400 to-teal-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center z-10">
                    <div className="text-6xl mb-4">🌴</div>
                    <h3 className="text-3xl font-bold text-white mb-2">Cabarete & Samaná</h3>
                    <p className="text-teal-100 text-lg">Paraísos Ocultos en Expansión</p>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-linear-to-br from-emerald-50 to-white">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" /><span><strong>Potencial de Crecimiento:</strong> Apreciación 7-10% anual</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" /><span><strong>Comunidades Globales:</strong> Mayoría expatriados = demanda estable</span></li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" /><span><strong>Belleza Natural:</strong> Playas vírgenes y naturaleza prístina</span></li>
                </ul>
                <a href="https://wa.me/19787055509?text=Quiero%20informaci%C3%B3n%20sobre%20propiedades%20en%20Cabarete%20o%20Samaná" target="_blank" rel="noopener noreferrer" className="mt-6 w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-lg transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Consultar Cabarete
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Professional */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Experiencias de Inversionistas</h2>
            <p className="text-xl text-blue-100">Testimonios de clientes que han invertido exitosamente</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Proceso transparente y bien estructurado. El equipo entiende el mercado dominicano y ofrece opciones de inversión reales con retornos verificables. Excelente servicio en español.", author: "Roberto M.", location: "Inversionista - Punta Cana" },
              { quote: "Excelente asesoramiento. Adquirí dos propiedades y ambas están generando los retornos esperados. El cierre fue rápido y todo muy profesional.", author: "Patricia L.", location: "Propietaria - Santo Domingo" },
              { quote: "Muy profesional. Entendieron mis objetivos de inversión y me presentaron opciones que se alineaban con mi perfil de riesgo. ROI consistente y transparencia total.", author: "Carlos V.", location: "Inversionista - Múltiples Propiedades" },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-blue-400/30">
                <p className="text-white mb-6 text-lg leading-relaxed">\"{testimonial.quote}\"</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-semibold text-blue-200">{testimonial.author}</p>
                  <p className="text-sm text-blue-300">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Tu Proceso de Inversión</h2>
            <p className="text-2xl text-gray-700">Pasos claros y transparentes de principio a fin</p>
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
                <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl shadow-lg border-4 border-blue-200">{stage.step}</div>
                <p className="font-bold text-blue-900">{stage.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Urgency Section */}
      <section className="py-20 px-4 bg-linear-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-8">¿Por Qué Confiar en Nosotros?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Shield className="w-8 h-8 text-blue-700 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Propiedades Verificadas</h3>
                    <p className="text-gray-700">Cada propiedad pasa revisión legal completa y due diligence antes de ofrecerla</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Award className="w-8 h-8 text-blue-700 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Desarrolladores Confiables</h3>
                    <p className="text-gray-700">Solo trabajamos con constructoras líderes con historiales verificados y referencias</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="w-8 h-8 text-blue-700 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Servicio en Español</h3>
                    <p className="text-gray-700">Asesor bilingüe dedicado a cada cliente para guiar durante todo el proceso</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-700">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Propiedades Disponibles Ahora</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold shrink-0">15</div>
                  <div>
                    <p className="font-semibold text-blue-900">Condos de Lujo en Punta Cana</p>
                    <p className="text-sm text-gray-600">ROI 12-15% | $200K-$600K</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold shrink-0">8</div>
                  <div>
                    <p className="font-semibold text-blue-900">Villas en Cabarete</p>
                    <p className="text-sm text-gray-600">ROI 14-17% | $180K-$450K</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold shrink-0">12</div>
                  <div>
                    <p className="font-semibold text-blue-900">Propiedades en La Romana</p>
                    <p className="text-sm text-gray-600">ROI 11-14% | $150K-$800K</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                ⏰ <strong>Oportunidad Limitada:</strong> Las mejores propiedades se venden en 1-2 meses. Consulta hoy para ver tu lista personalizada.
              </p>
              <a href="https://wa.me/19787055509?text=Quiero%20ver%20la%20lista%20de%20propiedades%20disponibles%20ahora" target="_blank" rel="noopener noreferrer" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Ver Propiedades Disponibles
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-blue-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Comienza Tu Inversión Hoy</h2>
          <p className="text-2xl mb-4 font-semibold">Propiedades seleccionadas y verificadas</p>
          <p className="text-xl mb-10">Consulta gratuita | Desarrolladores confiables | Servicio en español</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://wa.me/19787055509?text=Hola%2C%20quiero%20invertir%20en%20República%20Dominicana%20con%20Paraiso%20Inmobiliario" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 text-2xl font-bold rounded-lg inline-flex items-center transition-all shadow-2xl hover:shadow-3xl">
              <MessageSquare className="w-8 h-8 mr-3" />
              WhatsApp Directo
            </a>
            <Link href="/contact?service=paraiso-inmobiliario" className="bg-white hover:bg-gray-100 text-blue-900 px-12 py-6 text-2xl font-bold rounded-lg inline-flex items-center transition-all shadow-2xl hover:shadow-3xl">
              <Phone className="w-8 h-8 mr-3" />
              Agendar Consulta
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-linear-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">¿Listo para Invertir?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              Completa tu información hoy y recibe una lista personalizada de propiedades que coincidan con tu perfil de inversión
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/19787055509?text=Estoy%20listo%20para%20invertir%20en%20Paraiso%20Inmobiliario.%20Quiero%20una%20consulta%20personalizada" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-lg font-bold rounded-lg inline-flex items-center justify-center transition-all shadow-lg hover:shadow-xl">
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp Directo
              </a>
              <Link href="/contact?service=paraiso-inmobiliario&type=investment" className="bg-optima-gold hover:bg-yellow-500 text-blue-900 px-10 py-4 text-lg font-bold rounded-lg inline-flex items-center justify-center transition-all shadow-lg hover:shadow-xl">
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
