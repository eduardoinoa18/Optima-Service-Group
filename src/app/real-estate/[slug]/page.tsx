import { notFound } from "next/navigation";
import { Phone, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

type Service = {
  title: string;
  overview: string;
  features: string[];
  requirements: string[];
  process: string[];
  cta?: {
    href: string;
    label: string;
  };
};

const services: Record<string, Service> = {
  buying: {
    title: "Home Buying Services",
    overview:
      "Buying a home is one of the most significant financial decisions you'll make. I guide you through every step of the process, from initial search to closing, ensuring you find the perfect property at the right price.",
    features: [
      "Personalized home search based on your criteria",
      "Exclusive access to MLS listings and off-market properties",
      "Professional negotiation to secure the best price",
      "Guidance through inspections, appraisals, and financing",
      "Bilingual support throughout the entire process",
      "Coordination with lenders, attorneys, and inspectors",
    ],
    requirements: [
      "Pre-approval letter from a mortgage lender (recommended)",
      "Clear understanding of your budget and must-haves",
      "Availability for property tours and showings",
      "Valid ID and financial documentation",
    ],
    process: [
      "Initial consultation to understand your needs and budget",
      "Mortgage pre-approval assistance and lender referrals",
      "Personalized property search and curated listings",
      "Schedule and conduct property tours",
      "Submit offers and negotiate terms",
      "Navigate inspections, appraisals, and contingencies",
      "Final walkthrough and closing coordination",
    ],
  },
  selling: {
    title: "Home Selling Services",
    overview:
      "Maximize your home's value with strategic pricing, professional marketing, and expert negotiation. I'll help you sell faster and for more money with a data-driven approach.",
    features: [
      "Free Comparative Market Analysis (CMA)",
      "Professional photography and virtual tours",
      "Strategic pricing to attract qualified buyers",
      "MLS listing and syndication to 100+ websites",
      "Targeted social media and email marketing",
      "Open houses and private showings",
      "Expert negotiation to maximize your net proceeds",
    ],
    requirements: [
      "Property access for photography and showings",
      "Disclosure documents and property records",
      "Flexibility for showings and open houses",
      "Home preparation and staging recommendations",
    ],
    process: [
      "In-home consultation and market analysis",
      "Pricing strategy and listing preparation",
      "Professional photography and marketing materials",
      "MLS listing launch and marketing campaign",
      "Showings, open houses, and feedback collection",
      "Offer review and negotiation",
      "Inspection negotiations and closing coordination",
    ],
  },
  investors: {
    title: "Investment Properties",
    overview:
      "Build wealth through strategic real estate investments. I specialize in identifying cash-flowing properties, analyzing returns, and structuring deals that align with your financial goals.",
    features: [
      "Cash flow analysis and ROI projections",
      "Access to off-market investment opportunities",
      "Multi-family and rental property expertise",
      "1031 exchange coordination",
      "Property management referrals",
      "Market trend analysis and location strategy",
    ],
    requirements: [
      "Investment budget and financing strategy",
      "Investment goals (cash flow, appreciation, tax benefits)",
      "Risk tolerance and timeline",
      "Pre-approval for investment property financing (if applicable)",
    ],
    process: [
      "Investment goals consultation and strategy session",
      "Market analysis and opportunity identification",
      "Property tours and financial analysis",
      "Offer submission and negotiation",
      "Due diligence and inspection coordination",
      "Closing and property management setup",
    ],
  },
  "first-time-buyers": {
    title: "First-Time Home Buyers Program",
    overview:
      "Buying your first home should be exciting, not overwhelming. I simplify the process with step-by-step guidance, educational resources, and patient support tailored to first-time buyers.",
    features: [
      "First-time buyer education and guidance",
      "Access to first-time buyer programs and grants",
      "Credit and budget counseling referrals",
      "Down payment assistance program information",
      "Simplified mortgage process explanation",
      "Patient, pressure-free guidance",
    ],
    requirements: [
      "Basic understanding of your financial situation",
      "Willingness to learn about the home buying process",
      "Realistic expectations about budget and timeline",
      "Valid ID and income documentation for lender",
    ],
    process: [
      "First-time buyer consultation and education session",
      "Budget analysis and pre-approval guidance",
      "Home search with realistic expectations",
      "Offer preparation and negotiation support",
      "Inspection and appraisal guidance",
      "Closing preparation and key handover",
    ],
  },
  tours: {
    title: "Property Tours",
    overview:
      "Experience properties firsthand with personalized, pressure-free tours. I'll coordinate showings, provide market insights, and help you evaluate each property objectively.",
    features: [
      "Flexible scheduling including evenings and weekends",
      "Curated property selection based on your criteria",
      "Expert insights on each property's pros and cons",
      "Neighborhood tours and local market knowledge",
      "Virtual tours for out-of-state buyers",
      "Follow-up summaries and comparison reports",
    ],
    requirements: [
      "Clear list of must-haves and deal-breakers",
      "Availability for in-person or virtual tours",
      "Pre-approval letter (recommended for serious buyers)",
      "Open mind and willingness to explore options",
    ],
    process: [
      "Consultation to understand your criteria",
      "Property selection and tour scheduling",
      "In-person or virtual property tours",
      "Post-tour debrief and feedback collection",
      "Offer preparation if you find the right property",
    ],
  },
  cma: {
    title: "Comparative Market Analysis (CMA)",
    overview:
      "Get a free, professional analysis of your home's market value. I'll provide a detailed report with comparable sales, market trends, and strategic pricing recommendations.",
    features: [
      "Comprehensive analysis of recent comparable sales",
      "Current market trends and buyer demand insights",
      "Strategic pricing recommendations",
      "Neighborhood market statistics",
      "Property improvement suggestions to maximize value",
      "No obligation, completely free service",
    ],
    requirements: [
      "Property address and basic details",
      "Access to property for accurate assessment (preferred)",
      "Property history and recent improvements information",
    ],
    process: [
      "Schedule CMA consultation (in-person or virtual)",
      "Property walkthrough and data collection",
      "Market research and comparable sales analysis",
      "CMA report preparation",
      "Results presentation and pricing strategy discussion",
    ],
  },
  consultation: {
    title: "Real Estate Consultation",
    overview:
      "Get expert advice on any real estate matter. Whether you're buying, selling, investing, or just exploring options, I offer personalized consultations to answer your questions and create a strategic plan.",
    features: [
      "One-on-one personalized consultation",
      "Market analysis and opportunity assessment",
      "Financial strategy and ROI projections",
      "Bilingual support (English & Spanish)",
      "Referrals to trusted lenders, attorneys, and contractors",
      "Confidential, no-pressure environment",
    ],
    requirements: [
      "General understanding of your real estate goals",
      "List of questions or topics to discuss",
      "Financial overview (if applicable)",
    ],
    process: [
      "Schedule consultation (phone, video, or in-person)",
      "Discussion of your goals and situation",
      "Market analysis and strategy presentation",
      "Action plan and next steps",
      "Follow-up resources and referrals",
    ],
  },
  "dominican-republic": {
    title: "Dominican Republic Properties",
    overview:
      "Explore exclusive real estate opportunities in the Dominican Republic. From beachfront condos to luxury villas, I connect you with verified developers and high-ROI investment properties.",
    features: [
      "Access to exclusive DR real estate opportunities",
      "Verified developers with proven track records",
      "+30% commission structure transparency",
      "Virtual and in-person property tours",
      "Investment ROI analysis and projections",
      "Full English & Spanish support",
      "Legal and financing coordination",
    ],
    requirements: [
      "Investment budget and goals",
      "Property type preference (condo, villa, land, etc.)",
      "Preferred location in Dominican Republic",
      "Investment timeline",
    ],
    process: [
      "Initial consultation on DR real estate investment",
      "Property selection and opportunity presentation",
      "Virtual or in-person property tours",
      "Due diligence and developer verification",
      "Contract negotiation and legal review",
      "Closing coordination and property delivery",
    ],
    cta: {
      href: "/paraiso-inmobiliario",
      label: "Explore Paraíso Inmobiliario",
    },
  },
};

export function generateStaticParams() {
  return [
    { slug: "buying" },
    { slug: "selling" },
    { slug: "investors" },
    { slug: "first-time-buyers" },
    { slug: "tours" },
    { slug: "cma" },
    { slug: "consultation" },
    { slug: "dominican-republic" },
  ];
}

export default async function RealEstateServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-optima-navy to-blue-900 text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl text-blue-100">{service.overview}</p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-optima-navy mb-6">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-optima-navy mb-6">What You'll Need</h2>
          <div className="space-y-3">
            {service.requirements.map((req, idx) => (
              <div key={idx} className="flex items-start">
                <AlertCircle className="w-6 h-6 text-optima-gold mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-optima-navy mb-6">Our Process</h2>
          <div className="space-y-4">
            {service.process.map((step, idx) => (
              <div key={idx} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-optima-gold text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-gray-700 pt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-optima-navy text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Let's discuss how I can help with your {service.title.toLowerCase()}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {service.cta ? (
              <Link
                href={service.cta.href}
                className="btn bg-optima-gold hover:bg-yellow-600 text-white px-8 py-4 text-lg"
              >
                {service.cta.label}
              </Link>
            ) : (
              <Link
                href={`/contact?service=real-estate-${slug}`}
                className="btn bg-optima-gold hover:bg-yellow-600 text-white px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Consultation
              </Link>
            )}
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
      </section>
    </div>
  );
}
