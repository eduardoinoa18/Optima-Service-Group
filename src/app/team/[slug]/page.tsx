import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MessageSquare } from "lucide-react";
import { team } from "@/lib/team-data";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return team.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const member = team.find((m) => m.slug === params.slug);

  if (!member) {
    return {
      title: "Team Member Not Found | Optima Service Group",
    };
  }

  return {
    title: `${member.name} - ${member.role} | Optima Service Group`,
    description: member.bio,
  };
}

export default function TeamMemberPage({
  params,
}: {
  params: { slug: string };
}) {
  const member = team.find((m) => m.slug === params.slug);

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white pb-24 md:pb-8">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-optima-navy to-optima-navy/90 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/team"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Team
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Photo */}
            <div className="relative w-48 h-48 rounded-full overflow-hidden bg-white/10 shrink-0">
              <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-white/30">
                {member.name.charAt(0)}
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-3">
                {member.name}
              </h1>
              <p className="text-2xl text-optima-gold mb-4">{member.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-optima-navy mb-4">
              About {member.name.split(" ")[0]}
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">{member.bio}</p>
          </div>

          {/* Specialties */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-optima-navy mb-6">
              Areas of Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {member.specialties.map((specialty, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-optima-gold rounded-full shrink-0" />
                  <span className="text-gray-700">{specialty}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-optima-navy mb-6">
              Get in Touch
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`mailto:${member.email}`}
                className="flex items-center justify-center gap-3 px-6 py-4 bg-optima-navy text-white rounded-lg hover:bg-optima-navy/90 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>

              <a
                href={`tel:${member.phone}`}
                className="flex items-center justify-center gap-3 px-6 py-4 bg-optima-gold text-white rounded-lg hover:bg-optima-gold/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>Call</span>
              </a>

              <a
                href={`https://wa.me/19787055509?text=Hi%20${member.name.split(" ")[0]},%20I'd%20like%20to%20discuss%20your%20services`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-100 text-optima-navy rounded-lg hover:bg-gray-200 transition-colors"
              >
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Contact Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
        <Link
          href="/contact"
          className="block w-full text-center bg-optima-navy text-white py-3 rounded-lg font-semibold"
        >
          Contact {member.name.split(" ")[0]}
        </Link>
      </div>
    </div>
  );
}
