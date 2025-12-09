export const services = [
  {
    id: "tax-preparation",
    title: "Tax Preparation",
    slug: "tax-preparation",
    icon: "FileText",
    description: "Accurate and fast preparation of individual tax returns and related documents.",
    overview: "Professional tax preparation services for individuals and families. We help ensure accuracy, maximize deductions, and file your returns on time.",
    whatWeInclude: [
      "Individual tax return preparation (Form 1040)",
      "ITIN application and renewal assistance",
      "State and federal filing",
      "Review of prior year returns",
      "Tax document organization"
    ],
    whoItsFor: [
      "Individuals and families",
      "Self-employed professionals",
      "First-time tax filers",
      "Anyone needing ITIN services"
    ],
    howItWorks: [
      { step: 1, title: "Schedule Consultation", description: "Book your appointment online or call us" },
      { step: 2, title: "Gather Documents", description: "Bring W-2s, 1099s, receipts, and ID" },
      { step: 3, title: "We Prepare", description: "Our team prepares your return accurately" },
      { step: 4, title: "Review & File", description: "Review together, then we file electronically" }
    ],
    documentsNeeded: [
      "Valid photo ID",
      "Social Security Card or ITIN",
      "W-2 forms from all employers",
      "1099 forms (if applicable)",
      "Receipts for deductions",
      "Prior year tax return (if available)"
    ],
    faqs: [
      {
        question: "Do you prepare business tax returns?",
        answer: "Currently, we focus on individual tax preparation only. We do not prepare corporate or business tax returns."
      },
      {
        question: "Can you help me if I don't have an SSN?",
        answer: "Yes! We assist with ITIN applications and renewals so you can file your taxes."
      },
      {
        question: "How long does it take?",
        answer: "Most returns are completed within 1-2 business days, depending on complexity."
      }
    ],
    compliance: "We do not provide financial advice or represent clients before the IRS. We assist with form preparation based on information you provide."
  },
  {
    id: "immigration-forms",
    title: "Immigration Form Assistance",
    slug: "immigration-forms",
    icon: "Globe",
    description: "Non-legal assistance completing immigration forms based on the information you provide.",
    overview: "We help clients complete immigration forms accurately and organize supporting documents. This is non-legal assistance only.",
    whatWeInclude: [
      "Form completion based on your information",
      "Document translation and organization",
      "Application packet assembly",
      "Form review for accuracy and completeness",
      "Instructions for submission"
    ],
    whoItsFor: [
      "Individuals applying for family-based immigration",
      "Work permit applicants",
      "Green card renewal applicants",
      "Anyone needing help organizing immigration paperwork"
    ],
    howItWorks: [
      { step: 1, title: "Initial Consultation", description: "Discuss which forms you need" },
      { step: 2, title: "Provide Information", description: "Complete intake form and provide documents" },
      { step: 3, title: "We Complete Forms", description: "We fill out forms based on your information" },
      { step: 4, title: "Review & Submit", description: "Review completed packet, then you submit to USCIS" }
    ],
    documentsNeeded: [
      "Valid passport",
      "Birth certificate",
      "Marriage certificate (if applicable)",
      "Previous immigration documents",
      "Employment authorization (if applicable)",
      "Passport-style photos"
    ],
    faqs: [
      {
        question: "Are you immigration attorneys?",
        answer: "No, we are not attorneys and do not provide legal advice. We assist with form preparation only."
      },
      {
        question: "Can you determine if I'm eligible for a visa?",
        answer: "No, we cannot determine eligibility or provide case strategy. We only help complete forms based on your information."
      },
      {
        question: "Do you represent clients with USCIS?",
        answer: "No, we do not represent clients or communicate with USCIS on your behalf. We prepare documents only."
      }
    ],
    compliance: "We do not provide legal advice, determine eligibility, or represent clients. We assist with form completion based solely on information you provide."
  },
  {
    id: "notary-public",
    title: "Notary Public Services",
    slug: "notary-public",
    icon: "Stamp",
    description: "Professional notarization for your personal or business documents.",
    overview: "Official notary public services for personal and business needs. We notarize affidavits, authorizations, agreements, and more.",
    whatWeInclude: [
      "Notarization of documents",
      "Oath administration",
      "Jurat services",
      "Acknowledgment services",
      "Copy certification"
    ],
    whoItsFor: [
      "Anyone needing notarized documents",
      "Real estate transactions",
      "Legal document signing",
      "Business agreements"
    ],
    howItWorks: [
      { step: 1, title: "Bring Your Documents", description: "Come to our office with unsigned documents" },
      { step: 2, title: "Verify Identity", description: "Present valid government-issued photo ID" },
      { step: 3, title: "Sign & Notarize", description: "Sign in our presence, we affix official seal" },
      { step: 4, title: "Receive Certified Copy", description: "Get your notarized document immediately" }
    ],
    documentsNeeded: [
      "Valid government-issued photo ID (driver's license, passport, etc.)",
      "Unsigned document(s) to be notarized",
      "All parties who need to sign must be present"
    ],
    faqs: [
      {
        question: "What ID do I need?",
        answer: "You need a current, valid government-issued photo ID such as a driver's license or passport."
      },
      {
        question: "Can you notarize documents remotely?",
        answer: "We offer in-person notarization only at this time."
      },
      {
        question: "What if my document is in Spanish?",
        answer: "We can notarize documents in Spanish. However, we verify identity and ensure you understand what you're signing."
      }
    ],
    compliance: "As a commissioned notary public, we follow all state regulations and cannot provide legal advice regarding documents."
  },
  {
    id: "credit-repair",
    title: "Credit Repair Assistance",
    slug: "credit-repair",
    icon: "TrendingUp",
    description: "Guidance and support for improving your credit profile and financial health.",
    overview: "We provide educational guidance and assistance with credit repair strategies, dispute letters, and credit monitoring.",
    whatWeInclude: [
      "Credit report review",
      "Dispute letter preparation",
      "Credit monitoring guidance",
      "Financial literacy education",
      "Action plan development"
    ],
    whoItsFor: [
      "Individuals looking to improve credit scores",
      "Those with errors on credit reports",
      "First-time credit builders",
      "Anyone preparing for a major purchase"
    ],
    howItWorks: [
      { step: 1, title: "Credit Review", description: "Obtain and review your credit reports" },
      { step: 2, title: "Identify Issues", description: "Find errors, inaccuracies, and improvement areas" },
      { step: 3, title: "Create Action Plan", description: "Develop strategy for disputes and improvement" },
      { step: 4, title: "Ongoing Support", description: "Monitor progress and adjust plan as needed" }
    ],
    documentsNeeded: [
      "Credit reports from all three bureaus",
      "Photo ID",
      "Proof of address",
      "List of accounts and creditors",
      "Any supporting documentation for disputes"
    ],
    faqs: [
      {
        question: "Can you guarantee my score will improve?",
        answer: "No, we cannot guarantee specific results. Credit repair depends on individual circumstances and credit bureau decisions."
      },
      {
        question: "How long does credit repair take?",
        answer: "Results vary, but most clients see changes within 30-90 days. It depends on the nature of items being disputed."
      },
      {
        question: "Do you provide financial advice?",
        answer: "We provide educational guidance and help prepare documents. We are not financial advisors."
      }
    ],
    compliance: "We do not provide financial advice. We assist with document preparation and provide educational guidance only."
  },
  {
    id: "document-prep",
    title: "Document Preparation & Translations",
    slug: "document-prep",
    icon: "FileCheck",
    description: "Professional document preparation, translation, and organization services.",
    overview: "Comprehensive document services including translations, formatting, letters, agreements, and more.",
    whatWeInclude: [
      "Document translation (English/Spanish)",
      "Letter writing and formatting",
      "Form completion",
      "Agreement preparation",
      "Copy, scan, and print services"
    ],
    whoItsFor: [
      "Anyone needing translation services",
      "Businesses needing document preparation",
      "Individuals applying for services requiring translated documents",
      "Anyone needing professional letters"
    ],
    howItWorks: [
      { step: 1, title: "Submit Request", description: "Tell us what documents you need" },
      { step: 2, title: "Provide Information", description: "Upload or bring source documents" },
      { step: 3, title: "We Prepare", description: "Our team creates professional documents" },
      { step: 4, title: "Review & Deliver", description: "Review final documents and receive copies" }
    ],
    documentsNeeded: [
      "Source documents (if translating)",
      "Information to include in new documents",
      "Specific formatting requirements",
      "Delivery preferences"
    ],
    faqs: [
      {
        question: "Are your translations certified?",
        answer: "We provide professional translations with a certificate of accuracy. For official use, confirm requirements with the requesting agency."
      },
      {
        question: "How quickly can documents be completed?",
        answer: "Most document services are completed within 1-3 business days depending on complexity."
      },
      {
        question: "What languages do you translate?",
        answer: "We primarily translate between English and Spanish."
      }
    ],
    compliance: "We provide translation and document preparation services. We do not provide legal advice regarding document content."
  },
  {
    id: "business-support",
    title: "Business Support Services",
    slug: "business-support",
    icon: "Briefcase",
    description: "Administrative support for small business owners and entrepreneurs.",
    overview: "Help with EIN applications, business registration support, document preparation, and general administrative tasks.",
    whatWeInclude: [
      "EIN application assistance",
      "Business registration support",
      "Document preparation",
      "Basic compliance guidance (non-legal)",
      "Form completion"
    ],
    whoItsFor: [
      "New business owners",
      "Entrepreneurs starting an LLC or corporation",
      "Small businesses needing administrative help",
      "Anyone applying for an EIN"
    ],
    howItWorks: [
      { step: 1, title: "Discuss Needs", description: "Tell us what your business needs" },
      { step: 2, title: "Gather Information", description: "Provide business details and documentation" },
      { step: 3, title: "We Prepare", description: "Complete applications and forms" },
      { step: 4, title: "Submit & Follow Up", description: "Guide you through submission process" }
    ],
    documentsNeeded: [
      "Business name and structure details",
      "Owner/member information",
      "Business address",
      "SSN or ITIN",
      "State-specific requirements"
    ],
    faqs: [
      {
        question: "Can you form my LLC for me?",
        answer: "We assist with document preparation and form completion. We do not provide legal services or act as registered agents."
      },
      {
        question: "Do you help with business licenses?",
        answer: "We can guide you through the application process and help prepare documents, but you submit applications yourself."
      },
      {
        question: "How long does it take to get an EIN?",
        answer: "EIN applications are typically processed immediately online. We help complete the application accurately."
      }
    ],
    compliance: "We do not provide legal or financial advice. We assist with form preparation and administrative tasks based on your information."
  },
  {
    id: "life-insurance",
    title: "Life Insurance Services",
    slug: "life-insurance",
    icon: "Shield",
    description: "Comprehensive life insurance solutions to protect your family's financial future.",
    overview: "Protect what matters most. We help you find the right life insurance coverage to ensure your family's financial security and peace of mind.",
    whatWeInclude: [
      "Life insurance needs assessment",
      "Comparison of term and whole life policies",
      "Coverage calculation based on your situation",
      "Application assistance and guidance",
      "Policy review and updates",
      "Claims support and assistance"
    ],
    whoItsFor: [
      "Families with dependents",
      "Homeowners with mortgages",
      "Business owners needing coverage",
      "Anyone wanting financial protection",
      "Parents and guardians"
    ],
    howItWorks: [
      { step: 1, title: "Initial Consultation", description: "Discuss your family situation and coverage needs" },
      { step: 2, title: "Needs Analysis", description: "Calculate appropriate coverage amount" },
      { step: 3, title: "Compare Policies", description: "Review different options and quotes" },
      { step: 4, title: "Application Support", description: "Complete medical questions and underwriting" },
      { step: 5, title: "Policy Activation", description: "Receive coverage and ongoing support" }
    ],
    documentsNeeded: [
      "Valid photo ID",
      "Social Security Number",
      "Information about dependents",
      "Employment and income details",
      "Medical history (if requested)",
      "List of any existing insurance"
    ],
    faqs: [
      {
        question: "What's the difference between term and whole life insurance?",
        answer: "Term insurance provides coverage for a specific period (10-30 years) at lower cost. Whole life covers your lifetime with cash value. We help you choose based on your needs."
      },
      {
        question: "How much coverage do I need?",
        answer: "Coverage depends on your debts, income replacement needs, and dependents. We calculate a personalized recommendation."
      },
      {
        question: "Is a medical exam required?",
        answer: "It depends on coverage amount and age. Many policies don't require exams. We guide you through the process."
      },
      {
        question: "How long does approval take?",
        answer: "Most policies are approved within 1-2 weeks, depending on medical requirements and underwriting."
      },
      {
        question: "Can I change my policy later?",
        answer: "Yes! You can increase/decrease coverage or switch policies. We help you review and adjust as needed."
      },
      {
        question: "Do you sell insurance directly?",
        answer: "We provide guidance and assistance. Insurance is issued by licensed carriers. We ensure you understand your policy fully."
      }
    ],
    compliance: "Life insurance is offered through licensed insurance carriers. We provide guidance and comparison services. Policy terms and conditions apply."
  },
  {
    id: "real-estate-services",
    title: "Real Estate Services",
    slug: "real-estate-services",
    icon: "Building2",
    description: "Expert real estate services including buying, selling, and property investment guidance in the USA and Dominican Republic.",
    overview: "Eduardo Inoa brings years of real estate expertise to help clients navigate buying, selling, and investment opportunities. Whether you're a first-time buyer or seasoned investor, we provide personalized guidance every step of the way.",
    whatWeInclude: [
      "Property buying assistance",
      "Home selling support",
      "Investment property guidance",
      "Market analysis and comparables (CMA)",
      "First-time buyer consultation",
      "Property tours and viewings",
      "Dominican Republic real estate services"
    ],
    whoItsFor: [
      "First-time home buyers",
      "Property sellers",
      "Real estate investors",
      "Business owners",
      "Families looking to relocate",
      "International investors"
    ],
    howItWorks: [
      { step: 1, title: "Initial Consultation", description: "Discuss your real estate goals and needs" },
      { step: 2, title: "Market Analysis", description: "We analyze market trends and comparable properties" },
      { step: 3, title: "Property Matching", description: "Find properties that match your criteria" },
      { step: 4, title: "Closing Support", description: "Guidance through inspection, appraisal, and closing process" }
    ],
    documentsNeeded: [
      "Valid photo ID",
      "Proof of income",
      "Bank statements",
      "Credit report",
      "Pre-approval letter (buyers)",
      "Property deed (sellers)"
    ],
    faqs: [
      {
        question: "Do you have properties in the Dominican Republic?",
        answer: "Yes! We specialize in Dominican Republic real estate investments with strong connections and market knowledge."
      },
      {
        question: "What is a CMA?",
        answer: "A Comparative Market Analysis shows recent comparable property sales to determine accurate pricing."
      },
      {
        question: "Can you help international buyers?",
        answer: "Absolutely! We work with buyers from all countries and handle the documentation and process."
      }
    ],
    compliance: "All real estate services comply with local, state, and federal real estate regulations. Eduardo Inoa is a licensed real estate professional."
  },
  {
    id: "paraiso-inmobiliario",
    title: "Paraíso Inmobiliario",
    slug: "paraiso-inmobiliario",
    icon: "MapPin",
    description: "Premium real estate investment opportunities in the Dominican Republic with up to 30% commission structure and expert guidance.",
    overview: "Paraíso Inmobiliario specializes in high-yield real estate investments in the Dominican Republic. With our exclusive partnership model and 30% profit-sharing commission structure, you can build wealth through prime property investments with expert guidance.",
    whatWeInclude: [
      "Property acquisition and investment analysis",
      "30% commission structure on profits",
      "Monthly revenue sharing",
      "Property management oversight",
      "Investor portfolio tracking",
      "Annual investment reporting",
      "Exit strategy planning"
    ],
    whoItsFor: [
      "Real estate investors",
      "International business owners",
      "Passive income seekers",
      "Portfolio diversification investors",
      "Entrepreneurs",
      "Wealth builders"
    ],
    howItWorks: [
      { step: 1, title: "Investment Intake", description: "Complete investment profile and goals assessment" },
      { step: 2, title: "Property Analysis", description: "Review curated Dominican Republic properties" },
      { step: 3, title: "Investment Agreement", description: "Sign partnership agreement with 30% commission terms" },
      { step: 4, title: "Acquisition & Returns", description: "We manage properties; you receive monthly revenue share" }
    ],
    documentsNeeded: [
      "Valid photo ID",
      "Proof of funds",
      "Bank statements (last 3 months)",
      "Investment profile form",
      "Completed intake questionnaire",
      "Signed partnership agreement"
    ],
    faqs: [
      {
        question: "What is the 30% commission structure?",
        answer: "You receive 30% of net profits from property investments. This includes rental income, appreciation, and sale proceeds."
      },
      {
        question: "Is my money secure?",
        answer: "All investments are legally structured with Dominican Republic property law and insurance coverage for protection."
      },
      {
        question: "How often do I receive payments?",
        answer: "Monthly revenue sharing statements are provided. Distribution frequency depends on property performance."
      },
      {
        question: "Can I exit my investment?",
        answer: "Yes, we work with you on exit strategies. Terms are detailed in your investment agreement."
      }
    ],
    compliance: "Paraíso Inmobiliario investments are subject to Dominican Republic real estate laws and international investment regulations. All transactions include proper documentation and legal review."
  }
];

export type Service = typeof services[0];
