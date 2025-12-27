"use client";

import { Building2, TrendingUp, Users, DollarSign, MapPin, Phone, MessageSquare, CheckCircle2, ArrowRight, Shield, Star, Palmtree, Sun, Waves, Award, Home } from "lucide-react";
import Link from "next/link";

export default function ParaisoInmobiliarioPage() {
  const properties = [
    { title: "Punta Cana Beachfront", description: "Condos frente al mar con amenidades de resort", roi: "12-15%", price: "$180K - $850K", type: "Condos & Villas", emoji: "🏖️" },
    { title: "Santo Domingo Luxury", description: "Residencias urbanas de lujo en la capital", roi: "10-12%", price: "$150K - $600K", type: "Apartamentos", emoji: "🏙️" },
    { title: "Cabarete Resort", description: "Propiedades turísticas en capital del surf", roi: "15-18%", price: "$120K - $450K", type: "Condos Playa", emoji: "🏄" },
    { title: "Bávaro Investment", description: "Suites con administración hotelera incluida", roi: "14-16%", price: "$200K - $500K", type: "Suites", emoji: "🌴" },
    { title: "La Romana Golf Estates", description: "Propiedades exclusivas en comunidad de golf", roi: "11-13%", price: "$300K - $1.2M", type: "Villas", emoji: "⛳" },
    { title: "Samaná Eco-Retreats", description: "Villas ecológicas de lujo en entorno prístino", roi: "13-17%", price: "$160K - $700K", type: "Eco Villas", emoji: "🌿" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Caribbean Vibe */}
      <section className="relative py-28 px-4 bg-linear-to-br from-blue-600 via-blue-500 to-cyan-400 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')] animate-pulse" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-5 py-2 rounded-full mb-6 border border-white/30 backdrop-blur-sm">
              <Sun className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="font-bold">Inversiones Inmobiliarias en el Caribe</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg">
              🇩🇴 Paraíso Inmobiliario
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-bold text-yellow-300">
              Invierte en República Dominicana con Confianza
            </p>
            <p className="text-xl max-w-3xl mx-auto mb-4">
              Tu puerta de entrada al mercado inmobiliario más dinámico del Caribe
            </p>
            <p className="text-lg max-w-3xl mx-auto mb-10 text-blue-100">
              Propiedades premium verificadas | ROI 10-18% anual | Financiamiento disponible | Servicio completo en español
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/19787055509?text=Hola%2C%20quiero%20información%20sobre%20Paraíso%20Inmobiliario" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1ebe5d] text-white px-10 py-5 text-xl font-bold rounded-lg inline-flex items-center transition-all shadow-2xl hover:shadow-3xl animate-pulse">
                <MessageSquare className="w-6 h-6 mr-2" />
                WhatsApp Ahora
              </a>
              <Link href="/contact?service=paraiso-inmobiliario" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-10 py-5 text-xl font-bold rounded-lg inline-flex items-center transition-all shadow-2xl hover:shadow-3xl">
                <Phone className="w-6 h-6 mr-2" />
                Consulta Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-5xl font-black text-blue-900 mb-2">10M+</div><p className="text-blue-800 font-bold">Visitantes Anuales</p></div>
            <div><div className="text-5xl font-black text-blue-900 mb-2">15-18%</div><p className="text-blue-800 font-bold">ROI Promedio</p></div>
            <div><div className="text-5xl font-black text-blue-900 mb-2">$150K</div><p className="text-blue-800 font-bold">Desde</p></div>
            <div><div className="text-5xl font-black text-blue-900 mb-2">85%+</div><p className="text-blue-800 font-bold">Ocupación Alta Temp.</p></div>
          </div>
        </div>
      </section>

      {/* Why Dominican Republic */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">¿Por Qué Invertir en República Dominicana?</h2>
            <p className="text-2xl text-gray-700 font-bold">El Destino #1 del Caribe para Inversión Inmobiliaria</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Alto Retorno", text: "10-18% ROI anual en zonas turísticas premium", color: "text-green-600" },
              { icon: Shield, title: "Sin Restricciones", text: "Extranjeros pueden comprar sin limitaciones", color: "text-blue-600" },
              { icon: DollarSign, title: "Impuestos Bajos", text: "0.5-1% anual, sin impuesto sobre ganancias de capital en residencia principal", color: "text-yellow-600" },
              { icon: Sun, title: "Clima Perfecto", text: "300+ días de sol al año, playas paradisíacas", color: "text-orange-600" },
              { icon: Users, title: "Turismo en Auge", text: "10M+ visitantes anuales garantizan demanda constante", color: "text-purple-600" },
              { icon: Home, title: "Financiamiento", text: "30-40% enganche, plazos de 10-15 años disponibles", color: "text-indigo-600" },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-blue-100">
                  <Icon className={`w-16 h-16 ${benefit.color} mb-4`} />
                  <h3 className="text-2xl font-black text-blue-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Properties - Con Emojis Visuales */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">Propiedades Destacadas</h2>
            <p className="text-2xl text-gray-700 font-bold">Inversiones Verificadas con Desarrolladores de Confianza</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border-4 border-yellow-400">
                <div className="h-64 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-500 flex items-center justify-center text-9xl">
                  {property.emoji}
                </div>
                <div className="p-8">
                  <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-sm font-black mb-4">{property.type}</div>
                  <h4 className="text-3xl font-black text-blue-900 mb-3">{property.title}</h4>
                  <p className="text-gray-700 mb-6 text-lg">{property.description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between"><span className="text-gray-600 font-bold">Rango de Precio:</span><span className="font-black text-blue-900 text-xl">{property.price}</span></div>
                    <div className="flex items-center justify-between"><span className="text-gray-600 font-bold">ROI Esperado:</span><span className="text-green-600 font-black text-2xl">{property.roi}</span></div>
                  </div>
                  <a href="https://wa.me/19787055509?text=Quiero%20información%20sobre%20propiedades%20en%20República%20Dominicana" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black py-4 rounded-xl inline-flex items-center justify-center transition-all shadow-lg">
                    <MessageSquare className="w-5 h-5 mr-2" />Consultar por WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dominican Republic Insights */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">República Dominicana en Números</h2>
            <p className="text-2xl text-blue-200 font-bold">El Mercado Más Atractivo del Caribe</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-yellow-400">
              <h3 className="text-2xl font-black mb-6 text-yellow-300">📈 Crecimiento del Mercado</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" /><span><strong className="text-yellow-300">10M+ visitantes</strong> anuales impulsan demanda de alquileres</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" /><span><strong className="text-yellow-300">5-8% apreciación</strong> anual en zonas premium</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" /><span><strong className="text-yellow-300">Moneda estable</strong> DOP vinculado al USD reduce riesgo cambiario</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" /><span><strong className="text-yellow-300">Sin restricciones</strong> a propiedad extranjera</span></li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-yellow-400">
              <h3 className="text-2xl font-black mb-6 text-yellow-300">💰 Beneficios Financieros</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" /><span><strong className="text-yellow-300">Impuestos bajos:</strong> 0.5-1% tasa anual</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" /><span><strong className="text-yellow-300">Sin impuesto</strong> sobre ganancias de capital en residencia principal</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" /><span><strong className="text-yellow-300">Ingresos de alquiler</strong> exentos bajo ciertas condiciones</span></li>
                <li className="flex items-start"><CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" /><span><strong className="text-yellow-300">Financiamiento:</strong> 30-40% enganche, 10-15 años</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-blue-900 mb-6">Tu Camino a la Inversión</h2>
            <p className="text-2xl text-gray-700 font-bold">Proceso Simple y Transparente</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {[
              { step: 1, title: "Consulta", icon: Phone },
              { step: 2, title: "Búsqueda", icon: MapPin },
              { step: 3, title: "Visita", icon: Building2 },
              { step: 4, title: "Verificación", icon: CheckCircle2 },
              { step: 5, title: "Contrato", icon: Shield },
              { step: 6, title: "¡Tu Propiedad!", icon: Award },
            ].map((stage) => {
              const Icon = stage.icon;
              return (
                <div key={stage.step} className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-black text-3xl shadow-2xl border-4 border-yellow-400">{stage.step}</div>
                  <p className="text-lg font-black text-blue-900">{stage.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials in Spanish */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">Lo Que Dicen Nuestros Inversionistas</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "¡Excelente inversión! El proceso fue transparente y ya estoy viendo retornos increíbles. Eduardo conoce el mercado dominicano como nadie.", author: "Roberto Martínez", location: "Inversionista Punta Cana" },
              { quote: "Compré mi villa en Samaná y no podría estar más feliz. El servicio en español y la atención personalizada hicieron la diferencia.", author: "Patricia López", location: "Propietaria Santo Domingo" },
              { quote: "Mi familia ahora tiene 3 propiedades en RD gracias a la guía de Eduardo. ROI consistente y propiedades de calidad verificada.", author: "Carlos Vega", location: "Multi-Inversionista" },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border-2 border-yellow-400">
                <div className="flex mb-4">{[...Array(5)].map((_, i) => (<Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />))}</div>
                <p className="text-white mb-6 italic text-xl leading-relaxed">{testimonial.quote}</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-black text-yellow-300 text-lg">{testimonial.author}</p>
                  <p className="text-blue-100">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Conversion Focused */}
      <section className="py-24 px-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-black text-blue-900 mb-6">¡Comienza Tu Inversión Hoy!</h2>
          <p className="text-2xl mb-4 text-blue-800 font-bold">Propiedades limitadas disponibles</p>
          <p className="text-xl mb-10 text-blue-700">Consulta gratuita | Servicio completo en español | Desarrolladores verificados</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://wa.me/19787055509?text=¡Hola!%20Quiero%20invertir%20en%20República%20Dominicana%20con%20Paraíso%20Inmobiliario" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-6 text-2xl font-black rounded-2xl inline-flex items-center transition-all shadow-2xl hover:shadow-3xl animate-bounce">
              <MessageSquare className="w-8 h-8 mr-3" />¡Contactar por WhatsApp!
            </a>
            <Link href="/contact?service=paraiso-inmobiliario" className="bg-blue-900 hover:bg-blue-800 text-white px-12 py-6 text-2xl font-black rounded-2xl inline-flex items-center transition-all shadow-2xl hover:shadow-3xl">
              <Phone className="w-8 h-8 mr-3" />Agendar Consulta
            </Link>
          </div>
        </div>
      </section>

      {/* Link Back to Main Real Estate */}
      <section className="py-12 px-4 bg-blue-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">¿Buscas Propiedades en Estados Unidos?</h3>
              <p className="text-blue-200">Servicios de bienes raíces en Massachusetts & New Hampshire</p>
            </div>
            <Link href="/real-estate" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 text-lg font-bold rounded-lg inline-flex items-center transition-all shadow-lg whitespace-nowrap">
              Ver Servicios en USA<ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
