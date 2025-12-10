import Link from "next/link";
import { Users, Target, Award, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Optima Service Group",
  description: "Learn about Optima Service Group, our mission, values, and the team behind your trusted service provider.",
};

export default function AboutPage() {
  const founders = [
    {
      name: "Eduardo Inoa",
      role: "Co-Founder",
      bio: "Dedicated to providing exceptional service and building lasting client relationships.",
    },
    {
      name: "Ader Melenciano",
      role: "Co-Founder",
      bio: "Committed to excellence and ensuring every client receives personalized attention.",
    },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Integrity",
      description: "We act with honesty and transparency in everything we do.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Accuracy",
      description: "We take every detail seriously and ensure precision in our work.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Respect",
      description: "We value every client and treat each person with dignity.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Service",
      description: "Your experience and satisfaction always come first.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0F213A] text-white py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            About Optima Service Group
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
            Your All-in-One Solution for Taxes, Immigration, Real Estate, Credit Repair, Business Support & More
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#F5C440] text-[#0F213A] rounded-full font-semibold">
            🏆 10+ Years of Trusted Service
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-[#0F213A] mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
              At Optima Service Group, we provide comprehensive professional services under one roof. From tax preparation and ITIN applications to immigration forms, real estate services, credit repair, notary public, business support, and life insurance—we're your complete solution.
            </p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our bilingual team (English & Spanish) ensures accurate form preparation, maintains strict confidentiality, and treats every client with the respect and dignity they deserve. We don't provide legal or financial advice—we specialize in expert document preparation and administrative support.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-[#0F213A] mb-8 text-center">
            What We Do - Complete Service Suite
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              "Tax Preparation & ITIN Services",
              "Immigration Form Assistance",
              "Real Estate Services (USA & D.R.)",
              "Credit Repair & Building",
              "Notary Public Services",
              "Document Preparation & Translation",
              "Business Formation & Support",
              "Life Insurance Solutions",
              "Paraíso Inmobiliario (D.R. Investments)"
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border-l-4 border-[#F5C440] shadow-sm">
                <p className="font-semibold text-[#0F213A]">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-optima-navy mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-md transition-shadow border-t-4 border-[#F5C440]"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F5C440]/10 rounded-full text-[#0F213A] mb-4">
                  {value.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl text-optima-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-optima-navy mb-12 text-center">
            Meet Our Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-soft p-8 text-center"
              >
                <div className="w-24 h-24 bg-optima-navy rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-heading font-bold">
                  {founder.name.charAt(0)}
                </div>
                <h3 className="font-heading font-bold text-xl text-optima-navy mb-1">
                  {founder.name}
                </h3>
                <p className="text-optima-gold font-semibold mb-3">{founder.role}</p>
                <p className="text-gray-600 text-sm">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-optima-navy rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="font-heading font-bold text-3xl mb-4">
              Our Promise
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mb-6">
              We are not attorneys or financial advisors. We provide non-legal, non-financial assistance 
              to help you prepare the documents and forms you need — clearly, professionally, and efficiently.
            </p>
            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
