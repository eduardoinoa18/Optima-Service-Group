"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQPage() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: t("faq.general"),
      questions: [
        {
          question: t("faq.general.q1.q"),
          answer: t("faq.general.q1.a"),
        },
        {
          question: t("faq.general.q2.q"),
          answer: t("faq.general.q2.a"),
        },
        {
          question: t("faq.general.q3.q"),
          answer: t("faq.general.q3.a"),
        },
        {
          question: t("faq.general.q4.q"),
          answer: t("faq.general.q4.a"),
        },
      ],
    },
    {
      category: t("faq.tax"),
      questions: [
        {
          question: t("faq.tax.q1.q"),
          answer: t("faq.tax.q1.a"),
        },
        {
          question: t("faq.tax.q2.q"),
          answer: t("faq.tax.q2.a"),
        },
        {
          question: t("faq.tax.q3.q"),
          answer: t("faq.tax.q3.a"),
        },
        {
          question: t("faq.tax.q4.q"),
          answer: t("faq.tax.q4.a"),
        },
      ],
    },
    {
      category: t("faq.immigration"),
      questions: [
        {
          question: t("faq.immigration.q1.q"),
          answer: t("faq.immigration.q1.a"),
        },
        {
          question: t("faq.immigration.q2.q"),
          answer: t("faq.immigration.q2.a"),
        },
        {
          question: t("faq.immigration.q3.q"),
          answer: t("faq.immigration.q3.a"),
        },
        {
          question: t("faq.immigration.q4.q"),
          answer: t("faq.immigration.q4.a"),
        },
      ],
    },
    {
      category: t("faq.notary"),
      questions: [
        {
          question: t("faq.notary.q1.q"),
          answer: t("faq.notary.q1.a"),
        },
        {
          question: t("faq.notary.q2.q"),
          answer: t("faq.notary.q2.a"),
        },
        {
          question: t("faq.notary.q3.q"),
          answer: t("faq.notary.q3.a"),
        },
        {
          question: t("faq.notary.q4.q"),
          answer: t("faq.notary.q4.a"),
        },
      ],
    },
    {
      category: t("faq.credit"),
      questions: [
        {
          question: t("faq.credit.q1.q"),
          answer: t("faq.credit.q1.a"),
        },
        {
          question: t("faq.credit.q2.q"),
          answer: t("faq.credit.q2.a"),
        },
        {
          question: t("faq.credit.q3.q"),
          answer: t("faq.credit.q3.a"),
        },
      ],
    },
    {
      category: t("faq.payment"),
      questions: [
        {
          question: t("faq.payment.q1.q"),
          answer: t("faq.payment.q1.a"),
        },
        {
          question: t("faq.payment.q2.q"),
          answer: t("faq.payment.q2.a"),
        },
        {
          question: t("faq.payment.q3.q"),
          answer: t("faq.payment.q3.a"),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl text-optima-navy mb-4">
            {t("faq.title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("faq.description")} 
            <a href="/contact" className="text-optima-gold hover:underline ml-1">{t("common.contactUs")}</a>.
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
                          className={`w-5 h-5 text-gray-600 shrink-0 transition-transform ${
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
            {t("faq.stillQuestions")}
          </h2>
          <p className="text-white font-semibold mb-6">
            {t("faq.stillText")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/contact" className="btn-secondary">
              {t("faq.contactCta")}
            </a>
            <a
              href="https://wa.me/19783909619"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green-600 hover:bg-green-700 text-white"
            >
              {t("faq.whatsapp")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
