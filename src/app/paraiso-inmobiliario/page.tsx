"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import {
  Building2,
  MapPin,
  TrendingUp,
  Shield,
  Users,
  DollarSign,
  CheckCircle2,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";

export default function ParaisoInmobiliarioPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    propertyType: "",
    location: "",
    timeline: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/dr-investment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("¡Solicitud enviada! We'll contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          budget: "",
          propertyType: "",
          location: "",
          timeline: "",
          notes: "",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-optima-navy to-blue-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Invierte en la República Dominicana con Confianza
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Paraíso Inmobiliario: Your Gateway to Caribbean Real Estate Success
            </p>
            <p className="text-lg max-w-3xl mx-auto text-blue-200">
              Leverage our expertise to invest in high-growth Dominican Republic properties. 
              From beachfront condos to luxury villas, we connect you with verified developers 
              and exclusive opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-optima-navy mb-4 text-center">
            Featured DR Investment Opportunities
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Handpicked properties in the Dominican Republic's most desirable locations
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Punta Cana Beachfront Condo",
                location: "Punta Cana",
                price: "$275,000",
                roi: "12-15% Annual ROI",
                icon: Building2,
              },
              {
                title: "Santo Domingo Luxury Apartment",
                location: "Zona Colonial",
                price: "$195,000",
                roi: "10-12% Annual ROI",
                icon: Building2,
              },
              {
                title: "Cabarete Beach Villa",
                location: "Cabarete",
                price: "$450,000",
                roi: "15-18% Annual ROI",
                icon: Building2,
              },
            ].map((property, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <property.icon className="w-20 h-20 text-white opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-optima-navy mb-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{property.location}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-optima-gold">
                      {property.price}
                    </span>
                    <span className="text-sm text-green-600 font-semibold">
                      {property.roi}
                    </span>
                  </div>
                  <button className="w-full btn btn-primary">
                    Request Information
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest in DR */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-optima-navy mb-12 text-center">
            Why Invest in the Dominican Republic?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "High ROI Potential",
                description:
                  "Average 10-15% annual returns on rental properties with strong tourism demand",
              },
              {
                icon: Shield,
                title: "Verified Developers",
                description:
                  "We only work with established, trustworthy developers with proven track records",
              },
              {
                icon: DollarSign,
                title: "+30% Commission Structure",
                description:
                  "Competitive pricing with transparent commission structure and no hidden fees",
              },
              {
                icon: MapPin,
                title: "Prime Locations",
                description:
                  "Access to beachfront properties in Punta Cana, Santo Domingo, and more",
              },
              {
                icon: Users,
                title: "Bilingual Support",
                description:
                  "Full English & Spanish support throughout your investment journey",
              },
              {
                icon: CheckCircle2,
                title: "End-to-End Service",
                description:
                  "From property search to closing, we handle every step of the process",
              },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <benefit.icon className="w-12 h-12 text-optima-gold mb-4" />
                <h3 className="text-xl font-bold text-optima-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-optima-navy mb-12 text-center">
            Your Investment Journey
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: 1, title: "Initial Consultation", icon: Phone },
              { step: 2, title: "Property Search", icon: MapPin },
              { step: 3, title: "Site Visit/Tour", icon: Building2 },
              { step: 4, title: "Due Diligence", icon: Shield },
              { step: 5, title: "Contract & Financing", icon: DollarSign },
              { step: 6, title: "Closing & Delivery", icon: CheckCircle2 },
            ].map((stage) => (
              <div key={stage.step} className="text-center">
                <div className="w-16 h-16 bg-optima-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <stage.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-optima-navy mb-2">
                  {stage.step}
                </div>
                <p className="text-sm text-gray-600">{stage.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Form */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-optima-navy mb-4 text-center">
              Start Your DR Investment Today
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Fill out the form below and we'll match you with the perfect investment opportunities
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="input"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="input"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="input"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                    Investment Budget *
                  </label>
                  <select
                    id="budget"
                    required
                    className="select"
                    aria-label="Investment budget range"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                  >
                    <option value="">Select budget range</option>
                    <option value="under-150k">Under $150,000</option>
                    <option value="150k-250k">$150,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="500k-1m">$500,000 - $1M</option>
                    <option value="over-1m">Over $1M</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Property Type *
                  </label>
                  <select
                    id="propertyType"
                    required
                    className="select"
                    aria-label="Preferred property type"
                    value={formData.propertyType}
                    onChange={(e) =>
                      setFormData({ ...formData, propertyType: e.target.value })
                    }
                  >
                    <option value="">Select property type</option>
                    <option value="condo">Condo/Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="beachfront">Beachfront Property</option>
                    <option value="commercial">Commercial</option>
                    <option value="land">Land/Development</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Location *
                  </label>
                  <select
                    id="location"
                    required
                    className="select"
                    aria-label="Preferred location in Dominican Republic"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                  >
                    <option value="">Select location</option>
                    <option value="punta-cana">Punta Cana</option>
                    <option value="santo-domingo">Santo Domingo</option>
                    <option value="cabarete">Cabarete</option>
                    <option value="las-terrenas">Las Terrenas</option>
                    <option value="samana">Samaná</option>
                    <option value="other">Other/Open to suggestions</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
                  Investment Timeline *
                </label>
                <select
                  id="timeline"
                  required
                  className="select"
                  aria-label="Investment timeline"
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData({ ...formData, timeline: e.target.value })
                  }
                >
                  <option value="">Select timeline</option>
                  <option value="asap">Ready to buy now</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="researching">Just researching</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="notes"
                  rows={4}
                  className="textarea"
                  placeholder="Tell us about your investment goals, questions, or specific requirements..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                />
              </div>

              <button type="submit" className="w-full btn btn-primary text-lg py-4">
                Submit Investment Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-optima-navy text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Explore Dominican Republic Real Estate?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Let's discuss your investment goals and find the perfect property for you
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact?service=dr-investment"
              className="btn bg-optima-gold hover:bg-yellow-600 text-white px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book Your DR Investment Call
            </a>
            <a
              href="https://wa.me/16038123456?text=Hi%20Eduardo,%20I'm%20interested%20in%20Dominican%20Republic%20real%20estate%20investments"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-optima-navy px-8 py-4 text-lg"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
