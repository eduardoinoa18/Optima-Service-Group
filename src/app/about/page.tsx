"use client";

import Link from "next/link";
import { Users, Target, Award, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  
  const founders = [
    {
      name: "Eduardo Inoa",
      role: t("about.founder1Role"),
      bio: t("about.founder1Bio"),
    },
    {
      name: "Ader Melenciano",
      role: t("about.founder2Role"),
      bio: t("about.founder2Bio"),
    },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: t("about.value.integrity"),
      description: t("about.value.integrityDesc"),
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: t("about.value.accuracy"),
      description: t("about.value.accuracyDesc"),
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t("about.value.respect"),
      description: t("about.value.respectDesc"),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("about.value.service"),
      description: t("about.value.serviceDesc"),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0F213A] text-white py-20">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            {t("about.title")}
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto leading-relaxed">
            {t("about.subtitle")}
          </p>
          <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#F5C440] text-[#0F213A] rounded-full font-semibold">
            🏆 {t("about.badge")}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-[#0F213A] mb-4">
              {t("about.mission")}
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
              {t("about.missionText1")}
            </p>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("about.missionText2")}
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl text-[#0F213A] mb-8 text-center">
            {t("about.whatWeDo")}
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
          <h2 className="font-heading font-bold text-3xl text-[#0F213A] mb-12 text-center">
            {t("about.ourValues")}
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
