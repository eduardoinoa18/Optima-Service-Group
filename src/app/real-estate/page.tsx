import { Building2, TrendingUp, Users, FileText, MapPin, Calculator, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Real Estate Services | Optima Service Group",
  description: "Professional real estate services in Massachusetts & New Hampshire. Licensed REALTOR® Eduardo Inoa: 20+ closed transactions, +$10M in sales. Bilingual support.",
};

export default function RealEstatePage() {
  const services = [
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
    {
      slug: "consultation",
      title: "Real Estate Consultation",
      description: "Expert advice on buying, selling, and investing",
      icon: Phone,
    },
    {
      slug: "dominican-republic",
      title: "Dominican Republic Properties",
      description: "Exclusive access to Caribbean real estate opportunities",
      icon: MapPin,
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-linear-to-r from-optima-navy to-blue-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Real Estate Services You Can Trust
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Eduardo Inoa | MA & NH Licensed REALTOR®
            </p>
            <p className="text-lg max-w-3xl mx-auto text-blue-200">
              With 20+ closed transactions and over $10M in sales volume, I provide 
              bilingual (English/Spanish) real estate services backed by financial expertise 
              and personalized attention.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact?service=real-estate" className="btn bg-optima-gold hover:bg-yellow-600 text-white px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Book Consultation
              </Link>
              <a
                href="https://wa.me/16038123456?text=Hi%20Eduardo,%20I'm%20interested%20in%20real%20estate%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-white text-white hover:bg-white hover:text-optima-navy px-8 py-4 text-lg"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-optima-navy mb-4 text-center">
            Our Real Estate Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your unique needs
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/real-estate/${service.slug}`}
                className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <service.icon className="w-12 h-12 text-optima-gold mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-optima-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-optima-gold font-semibold group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Eduardo */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-optima-navy mb-12 text-center">
            Why Work With Eduardo?
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
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-lg font-bold text-optima-navy mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-optima-navy mb-12 text-center">
            What Clients Say
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
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <p className="font-semibold text-optima-navy">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-optima-navy text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Real Estate Journey?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Let's discuss your real estate goals and create a plan to achieve them
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact?service=real-estate" className="btn bg-optima-gold hover:bg-yellow-600 text-white px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Book a Real Estate Consultation
            </Link>
            <a
              href="https://wa.me/16038123456?text=Hi%20Eduardo,%20I'm%20interested%20in%20real%20estate%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn px-8 py-4 text-lg bg-[#25D366] text-white hover:bg-[#1ebe5d]"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
