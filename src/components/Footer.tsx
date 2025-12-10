import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/real-estate", label: "Real Estate" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
    { href: "/faq", label: "FAQ" },
  ];

  const services = [
    { href: "/services/tax-preparation", label: "Tax Preparation & ITIN" },
    { href: "/services/immigration-forms", label: "Immigration Forms" },
    { href: "/services/notary-public", label: "Notary Public" },
    { href: "/services/credit-repair", label: "Credit Repair" },
    { href: "/services/document-prep", label: "Document Services" },
    { href: "/services/business-support", label: "Business Support" },
    { href: "/services/life-insurance", label: "Life Insurance" },
    { href: "/real-estate", label: "Real Estate (USA)" },
    { href: "/real-estate?tab=dr", label: "Paraíso Inmobiliario (D.R.)" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ];

  return (
    <footer className="bg-[#0F213A] text-white mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4 text-[#F5C440]">
              Optima Service Group
            </h3>
            <p className="text-sm text-gray-200 mb-4 font-medium">
              Your Solution, All in One Place.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Professional support for taxes, immigration forms, real estate, credit repair, notary services, and more—all under one roof.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4 text-[#F5C440]">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-200 hover:text-[#F5C440] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4 text-[#F5C440]">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-200 hover:text-[#F5C440] transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-4 text-[#F5C440]">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+19787055509"
                  className="flex items-center space-x-2 text-sm text-gray-200 hover:text-[#F5C440] transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  <span>(978) 705-5509</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:inoaserv@gmail.com"
                  className="flex items-center space-x-2 text-sm text-gray-200 hover:text-[#F5C440] transition-colors duration-200"
                >
                  <Mail className="w-4 h-4" />
                  <span>inoaserv@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-2 text-sm text-gray-300">
                  <MapPin className="w-4 h-4 mt-1 shrink-0" />
                  <span>
                    Mon-Fri: 9am-6pm<br />
                    Sat: By appointment<br />
                    Sun: Closed
                  </span>
                </div>
              </li>
            </ul>
            <div className="mt-4">
              <a
                href="https://wa.me/19783909619"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-[#F5C440] hover:bg-yellow-500 text-[#0F213A] rounded-lg text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#F5C440]/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-200">
              © {currentYear} Optima Service Group. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-200 hover:text-[#F5C440] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-300 mt-4 text-center md:text-left">
            We do not provide legal or financial advice. We assist with form preparation and document services only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
