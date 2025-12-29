"use client";

import { Building2, TrendingUp, Users, FileText, MapPin, Calculator, Phone, MessageSquare, CheckCircle2, ArrowRight, Shield, Award, Home, Heart, Star } from "lucide-react";
import Link from "next/link";

export default function RealEstatePage() {
  const services = [
    { slug: "buying", title: "Home Buying Services", description: "Expert guidance through the entire home buying process, from pre-approval to closing.", icon: Home },
    { slug: "selling", title: "Home Selling Services", description: "Maximize your home's value with strategic marketing and professional presentation.", icon: TrendingUp },
    { slug: "investors", title: "Investment Properties", description: "Build wealth through strategic real estate investments with proven ROI.", icon: Calculator },
    { slug: "first-time-buyers", title: "First-Time Home Buyers", description: "Simplified guidance and support for your first home purchase journey.", icon: Users },
    { slug: "tours", title: "Property Tours", description: "Personalized tours of homes that match your exact criteria and budget.", icon: MapPin },
    { slug: "cma", title: "Market Analysis", description: "Free Comparative Market Analysis to determine your home's true market value.", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-linear-to-br from-optima-navy via-[#1a3a52] to-optima-navy text-white overflow-hidden bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&h=500&fit=crop')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] " />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-optima-gold/20 text-optima-gold px-4 py-2 rounded-full mb-6 border border-optima-gold/30">
              <Award className="w-4 h-4" />
              <span className="text-sm font-semibold">Licensed MA & NH REALTOR®</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Trusted Partner in<br />
              <span className="text-optima-gold">Massachusetts & New Hampshire</span> Real Estate
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-200 max-w-3xl mx-auto">
              Professional guidance for buying, selling, and investing in residential properties
            </p>
            <p className="text-lg max-w-3xl mx-auto text-gray-300 mb-10">
              Licensed REALTOR® Eduardo Inoa brings proven expertise, bilingual service, and personalized attention to every transaction.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact?service=real-estate" className="bg-optima-gold hover:bg-yellow-500 text-optima-navy px-8 py-4 text-lg font-bold rounded-lg inline-flex items-center transition-all shadow-lg hover:shadow-xl">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
              <a href="https://wa.me/19787055509" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1ebe5d] text-white px-8 py-4 text-lg font-bold rounded-lg inline-flex items-center transition-all shadow-lg hover:shadow-xl">
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Credentials Section */}
      <section className="py-12 px-4 bg-gray-50 border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><div className="text-3xl font-bold text-optima-gold mb-2">MA & NH</div><p className="text-gray-700 font-medium">Licensed REALTOR®</p></div>
            <div><div className="text-3xl font-bold text-optima-gold mb-2">Bilingual</div><p className="text-gray-700 font-medium">English & Spanish</p></div>
            <div><div className="text-3xl font-bold text-optima-gold mb-2">Experienced</div><p className="text-gray-700 font-medium">Active Professional</p></div>
            <div><div className="text-3xl font-bold text-optima-gold mb-2">Verified</div><p className="text-gray-700 font-medium">E&O Insured</p></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-optima-navy mb-6">Comprehensive Real Estate Services</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">From first-time buyers to seasoned investors, we provide expert guidance for every real estate need</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.slug} className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-optima-gold">
                  <div className="bg-optima-gold/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-optima-gold/20 transition-colors">
                    <Icon className="w-8 h-8 text-optima-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-optima-navy mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{service.description}</p>
                  <div className="text-optima-gold font-bold flex items-center group-hover:translate-x-2 transition-transform">Learn More<ArrowRight className="w-5 h-5 ml-2" /></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-optima-navy mb-6">Why Choose Eduardo Inoa?</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">Experience the difference of working with a dedicated, licensed professional</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Licensed Professional", description: "MA & NH Licensed REALTOR® with active credentials and E&O insurance coverage" },
              { icon: Award, title: "Dedicated Expertise", description: "Specialized knowledge in residential buying, selling, and investment properties" },
              { icon: Users, title: "Bilingual Services", description: "Fluent in English & Spanish for seamless communication with all clients" },
              { icon: Heart, title: "Client-First Approach", description: "Your goals and satisfaction are our top priority in every transaction" },
            ].map((point, idx) => {
              const Icon = point.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-optima-gold">
                  <Icon className="w-12 h-12 text-optima-gold mb-4" />
                  <h3 className="text-xl font-bold text-optima-navy mb-3">{point.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials - Text Only */}
      <section className="py-20 px-4 bg-optima-navy text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Client Experiences</h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">What clients share about working with us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Eduardo made our home purchase process straightforward and easy to understand. His bilingual support was helpful throughout the entire journey.", author: "M. & C. Rodriguez", location: "Manchester, NH" },
              { quote: "Professional and responsive. Eduardo provided valuable insights and guidance when we decided to sell. Highly knowledgeable about the local market.", author: "Jennifer T.", location: "Lawrence, MA" },
              { quote: "Excellent to work with on property investment decisions. Eduardo takes time to explain market conditions and provides clear, honest guidance.", author: "David L.", location: "Methuen, MA" },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-optima-gold/30">
                <p className="text-gray-900 mb-6 italic text-lg leading-relaxed font-semibold">\"{testimonial.quote}\"</p>
                <div className="border-t border-white/20 pt-4">
                  <p className="font-semibold text-optima-gold">{testimonial.author}</p>
                  <p className="text-sm text-gray-300">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-linear-to-br from-optima-navy to-[#1a3a52] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Real Estate Journey?</h2>
          <p className="text-xl mb-4 text-gray-200">Let's discuss your home buying, selling, or investment goals</p>
          <p className="text-lg mb-10 text-gray-300">Schedule a free, no-obligation consultation today</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=real-estate" className="bg-optima-gold hover:bg-yellow-500 text-optima-navy px-10 py-5 text-xl font-bold rounded-lg inline-flex items-center transition-all shadow-xl hover:shadow-2xl">
              <Phone className="w-6 h-6 mr-2" />Schedule Free Consultation
            </Link>
            <a href="https://wa.me/19787055509" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1ebe5d] text-white px-10 py-5 text-xl font-bold rounded-lg inline-flex items-center transition-all shadow-xl hover:shadow-2xl">
              <MessageSquare className="w-6 h-6 mr-2" />Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
