"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { team } from "@/lib/team-data";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function TeamPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-optima-navy to-optima-navy/90 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("team.title")}
            </h1>
            <p className="text-xl text-optima-navy font-bold max-w-3xl mx-auto mb-8">
              {t("team.subtitle")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center btn-primary"
            >
              {t("team.contactCta")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <Link
                key={member.slug}
                href="/contact"
                className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-optima-gold/10 hover:border-optima-gold/30 hover:-translate-y-1"
              >
                <div className="p-6">
                  {/* Photo */}
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-optima-navy/20">
                      {member.name.charAt(0)}
                    </div>
                  </div>

                  {/* Name */}
                  <h2 className="text-2xl font-bold text-optima-navy mb-2 text-center group-hover:text-optima-gold transition-colors">
                    {member.name}
                  </h2>

                  {/* Role */}
                  <p className="text-sm font-semibold text-optima-gold mb-3 text-center">
                    {member.role}
                  </p>

                  {/* Specialties Preview */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.specialties.slice(0, 3).map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                    {member.specialties.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                        +{member.specialties.length - 3} {t("team.more")}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-center text-optima-gold font-semibold text-sm">
                    {t("team.contactCta")}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-optima-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("team.readyTitle")}</h2>
          <p className="text-xl text-optima-navy font-bold mb-8">
            {t("team.readySubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center"
            >
              {t("team.getStarted")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+19787055509"
              className="btn-outline bg-white text-optima-navy hover:bg-gray-100 inline-flex items-center justify-center"
            >
              {t("team.call")}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
