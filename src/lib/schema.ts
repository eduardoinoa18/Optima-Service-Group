export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.optimaservicegroup.com",
  name: "Optima Service Group",
  description: "Professional tax preparation, immigration forms, notary services, and business support in Lawrence, MA",
  url: "https://www.optimaservicegroup.com",
  telephone: "+1-978-705-5509",
  email: "info@optimaservicegroup.com",
  logo: "https://www.optimaservicegroup.com/logo-optima.png",
  image: "https://www.optimaservicegroup.com/logo-optima.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lawrence",
    addressLocality: "Lawrence",
    addressRegion: "MA",
    postalCode: "01840",
    addressCountry: "US"
  },
  areaServed: [
    {
      "@type": "City",
      name: "Lawrence"
    },
    {
      "@type": "City",
      name: "Essex County"
    },
    {
      "@type": "State",
      name: "Massachusetts"
    },
    {
      "@type": "State",
      name: "Virtual Services"
    }
  ],
  sameAs: [
    "https://www.facebook.com/optimaservicegroup",
    "https://www.instagram.com/optimaservicegroup",
    "https://www.linkedin.com/company/optima-service-group"
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "100"
  },
  knowsAbout: [
    "Tax Preparation",
    "Immigration Forms",
    "Notary Services",
    "Credit Repair",
    "Document Preparation",
    "Business Services",
    "Virtual Services"
  ],
  serviceArea: {
    "@type": "City",
    name: "Lawrence, MA"
  }
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.optimaservicegroup.com"
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.optimaservicegroup.com/services"
    }
  ]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Optima Service Group provide in Lawrence, MA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Optima Service Group provides tax preparation, immigration forms assistance, notary services, credit repair, document preparation, and business support services. We serve Lawrence, MA and surrounding areas with bilingual English and Spanish support, plus virtual services nationwide."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer virtual services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer virtual services available from anywhere in the United States, in addition to in-person services in Lawrence, MA."
      }
    },
    {
      "@type": "Question",
      name: "What languages do you speak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide bilingual services in both English and Spanish to serve our diverse community."
      }
    }
  ]
};

export const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  contactType: "Customer Service",
  telephone: "+1-978-705-5509",
  areaServed: ["US"],
  availableLanguage: ["en", "es"]
};
