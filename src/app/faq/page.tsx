"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What services does Optima Service Group offer?",
          answer: "We offer tax preparation, immigration form assistance, notary public services, credit repair guidance, document preparation and translations, and business support services. All services are provided in English and Spanish.",
        },
        {
          question: "Do you provide legal or financial advice?",
          answer: "No, we do not provide legal or financial advice. We assist with form preparation, document services, and administrative support based on the information you provide.",
        },
        {
          question: "What languages do you speak?",
          answer: "We provide bilingual services in English and Spanish to better serve our community.",
        },
        {
          question: "How do I schedule an appointment?",
          answer: "You can schedule an appointment by calling us at (978) 705-5509, emailing inoaserv@gmail.com, or using the contact form on our website. We also accept WhatsApp messages.",
        },
      ],
    },
    {
      category: "Tax Services",
      questions: [
        {
          question: "Do you prepare business tax returns?",
          answer: "Currently, we focus on individual tax preparation only. We do not prepare corporate or business tax returns.",
        },
        {
          question: "Can you help me if I don't have a Social Security Number?",
          answer: "Yes! We assist with ITIN (Individual Taxpayer Identification Number) applications and renewals so you can file your taxes.",
        },
        {
          question: "How long does tax preparation take?",
          answer: "Most individual tax returns are completed within 1-2 business days, depending on complexity.",
        },
        {
          question: "What documents do I need for tax preparation?",
          answer: "You'll need: valid photo ID, Social Security Card or ITIN, W-2 forms, 1099 forms (if applicable), receipts for deductions, and your prior year tax return if available.",
        },
      ],
    },
    {
      category: "Immigration Services",
      questions: [
        {
          question: "Are you immigration attorneys?",
          answer: "No, we are not attorneys and do not provide legal advice. We assist with completing immigration forms based on the information you provide.",
        },
        {
          question: "Can you determine if I'm eligible for a visa or green card?",
          answer: "No, we cannot determine eligibility or provide case strategy. We only help complete forms accurately based on your information.",
        },
        {
          question: "Do you represent clients before USCIS?",
          answer: "No, we do not represent clients or communicate with USCIS on your behalf. We prepare documents only.",
        },
        {
          question: "What immigration forms can you help with?",
          answer: "We can assist with completing various USCIS forms, document translation, application packet assembly, and form review for accuracy. The specific forms depend on your situation.",
        },
      ],
    },
    {
      category: "Notary Services",
      questions: [
        {
          question: "What identification do I need for notarization?",
          answer: "You need a current, valid government-issued photo ID such as a driver's license, state ID, or passport.",
        },
        {
          question: "Do you offer remote notarization?",
          answer: "We currently offer in-person notarization services only.",
        },
        {
          question: "Can you notarize documents in Spanish?",
          answer: "Yes, we can notarize documents in Spanish. We verify your identity and ensure you understand what you're signing.",
        },
        {
          question: "How much does notarization cost?",
          answer: "Notarization fees are set by state law. Please contact us for current pricing.",
        },
      ],
    },
    {
      category: "Credit Repair",
      questions: [
        {
          question: "Can you guarantee my credit score will improve?",
          answer: "No, we cannot guarantee specific results. Credit repair depends on individual circumstances and credit bureau decisions.",
        },
        {
          question: "How long does credit repair take?",
          answer: "Results vary, but most clients see changes within 30-90 days. It depends on the nature of items being disputed.",
        },
        {
          question: "What's included in credit repair services?",
          answer: "We provide credit report review, dispute letter preparation, credit monitoring guidance, financial literacy education, and action plan development.",
        },
      ],
    },
    {
      category: "Payment & Pricing",
      questions: [
        {
          question: "How much do your services cost?",
          answer: "Pricing varies by service. Please contact us for a personalized quote based on your specific needs.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, credit/debit cards, and various digital payment methods. Please contact us for details.",
        },
        {
          question: "Do you offer payment plans?",
          answer: "Payment arrangements may be available for certain services. Please discuss your situation with us during consultation.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl text-optima-navy mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services. Can't find what you're looking for? 
            <a href="/contact" className="text-optima-gold hover:underline ml-1">Contact us</a>.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  const isOpen = openIndex === globalIndex;
                  
                  return (
                    <div
                      key={faqIndex}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-optima-navy pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                            isOpen ? "transform rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-optima-navy rounded-2xl p-8 text-center text-white">
          <h2 className="font-heading font-bold text-2xl mb-4">
            Still Have Questions?
          </h2>
          <p className="text-white/90 mb-6">
            We're here to help. Contact us today and we'll be happy to answer any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
            <a
              href="https://wa.me/19787055509"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green-600 hover:bg-green-700 text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
