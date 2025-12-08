import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Phone, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { services } from "@/lib/services-data";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} - Optima Service Group`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-8">
      {/* Header */}
      <div className="bg-gradient-to-b from-optima-navy to-optima-navy/90 text-white py-8">
        <div className="container max-w-2xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="font-heading font-bold text-3xl mb-2">{service.title}</h1>
          <p className="text-white/90">{service.description}</p>
        </div>
      </div>

      {/* Overview */}
      <section className="py-8">
        <div className="container max-w-2xl mx-auto px-4">
          <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
            Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">{service.overview}</p>
        </div>
      </section>

      {/* What We Include */}
      <section className="py-8 bg-gray-50">
        <div className="container max-w-2xl mx-auto px-4">
          <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
            What We Include
          </h2>
          <ul className="space-y-3">
            {service.whatWeInclude.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-8">
        <div className="container max-w-2xl mx-auto px-4">
          <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
            Who It's For
          </h2>
          <ul className="space-y-3">
            {service.whoItsFor.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-optima-gold rounded-full flex-shrink-0 mt-2" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-8 bg-gray-50">
        <div className="container max-w-2xl mx-auto px-4">
          <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-6">
            How It Works
          </h2>
          <div className="space-y-6">
            {service.howItWorks.map((step) => (
              <div key={step.step} className="flex space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-optima-gold rounded-full flex items-center justify-center font-heading font-bold text-optima-navy">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-optima-navy mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents Needed */}
      <section className="py-8">
        <div className="container max-w-2xl mx-auto px-4">
          <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
            What to Bring
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <ul className="space-y-2">
              {service.documentsNeeded.map((doc, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-sm">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-8 bg-gray-50">
        <div className="container max-w-2xl mx-auto px-4">
          <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <summary className="font-semibold text-optima-navy cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-3 text-gray-600 text-sm">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Notice */}
      <section className="py-8">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">{service.compliance}</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8">
        <div className="container max-w-2xl mx-auto px-4">
          <div className="bg-optima-navy rounded-2xl p-8 text-center text-white">
            <h2 className="font-heading font-bold text-2xl mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 mb-6">
              Contact us today to schedule your consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-secondary">
                <Phone className="w-4 h-4 mr-2" />
                Book Consultation
              </Link>
              <a
                href="https://wa.me/19783909619"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-green-600 hover:bg-green-700 text-white"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-40">
        <div className="flex gap-2">
          <a
            href="https://wa.me/19783909619"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 btn-secondary py-3 text-sm justify-center"
          >
            WhatsApp
          </a>
          <Link
            href="/contact"
            className="flex-1 btn-primary py-3 text-sm justify-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
