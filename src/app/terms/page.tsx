import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Optima Service Group",
  description: "Terms of Service for Optima Service Group - Terms and conditions for using our services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="font-heading font-bold text-4xl text-optima-navy mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-8">
          Last Updated: December 8, 2024
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using the services provided by Optima Service Group ("we," "our," or "us"), 
              you agree to be bound by these Terms of Service. If you do not agree to these terms, please 
              do not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
              2. Services Offered
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Optima Service Group provides the following services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Tax preparation for individuals</li>
              <li>Immigration form assistance (non-legal)</li>
              <li>Notary public services</li>
              <li>Credit repair guidance</li>
              <li>Document preparation and translations</li>
              <li>Business administrative support</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
              3. Important Disclaimers
            </h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-4">
              <h3 className="font-heading font-semibold text-xl text-optima-navy mb-3">
                Not Legal or Financial Advice
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>WE ARE NOT ATTORNEYS, FINANCIAL ADVISORS, OR CERTIFIED PUBLIC ACCOUNTANTS.</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We do not provide legal advice or representation</li>
                <li>We do not provide financial or investment advice</li>
                <li>We do not determine eligibility for immigration benefits</li>
                <li>We do not represent clients before government agencies</li>
                <li>We assist with form preparation and document services only</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
              4. Client Responsibilities
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              As a client, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide accurate and complete information</li>
              <li>Review all documents before submission</li>
              <li>Understand that you are ultimately responsible for all information submitted</li>
              <li>Consult with appropriate licensed professionals (attorneys, CPAs) when needed</li>
              <li>Make final decisions regarding your documents and submissions</li>
              <li>Pay for services as agreed</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
              5. Limitations of Services
            </h2>
            <h3 className="font-heading font-semibold text-xl text-optima-navy mb-3">
              Tax Services
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>We prepare individual tax returns only</li>
              <li>We do not prepare business or corporate tax returns</li>
              <li>We do not represent clients before the IRS</li>
              <li>We do not provide tax planning or advisory services</li>
            </ul>

            <h3 className="font-heading font-semibold text-xl text-optima-navy mb-3">
              Immigration Services
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
              <li>We assist with form completion only</li>
              <li>We do not determine eligibility for immigration benefits</li>
              <li>We do not provide legal advice on immigration matters</li>
              <li>We do not represent clients before USCIS or in immigration court</li>
              <li>Complex cases should be handled by licensed immigration attorneys</li>
            </ul>

            <h3 className="font-heading font-semibold text-xl text-optima-navy mb-3">
              Notary Services
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>We verify identity and witness signatures</li>
              <li>We do not provide legal advice about documents</li>
              <li>We cannot notarize documents if parties are not present</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
              6. Fees and Payment
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Service fees will be communicated before work begins. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Pay agreed-upon fees for services rendered</li>
              <li>Understand that fees are non-refundable once work has begun</li>
              <li>Pay any additional fees for extra services or corrections beyond the original scope</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
              7. Confidentiality
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We maintain confidentiality of your information as described in our Privacy Policy. 
              However, we may be required to disclose information when:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>Required by law or legal process</li>
              <li>Necessary to protect our rights or safety</li>
              <li>You provide written authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>We are not liable for any indirect, incidental, special, or consequential damages</li>
              <li>Our total liability is limited to the fees paid for the specific service</li>
              <li>We are not responsible for decisions made by government agencies or other third parties</li>
              <li>We are not liable for delays in processing by external entities</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
              9. Accuracy and Errors
            </h2>
            <p className="text-gray-700 leading-relaxed">
              While we strive for accuracy, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>You are responsible for reviewing all documents before submission</li>
              <li>You must verify all information is correct</li>
              <li>We will correct errors caused by our mistakes at no charge</li>
              <li>Changes requested after initial completion may incur additional fees</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
              10. Termination
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Either party may terminate services at any time. Upon termination:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-3">
              <li>You remain responsible for payment of services rendered</li>
              <li>We will provide you with all documents and information in our possession</li>
              <li>We may retain copies as required by law or professional standards</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
              11. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All content on our website, including text, graphics, logos, and software, is the property 
              of Optima Service Group or our licensors and is protected by copyright and other intellectual 
              property laws.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
              12. Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be posted 
              on this page with an updated "Last Updated" date. Your continued use of our services after 
              changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
              13. Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service are governed by the laws of the State of Massachusetts, without 
              regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
              14. Dispute Resolution
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Any disputes arising from these terms or our services will first be attempted to be resolved 
              through good faith negotiations. If resolution cannot be reached, disputes will be resolved 
              through binding arbitration in accordance with Massachusetts law.
            </p>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-2xl text-optima-navy mb-4">
              15. Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 space-y-2">
              <p className="text-gray-700"><strong>Optima Service Group</strong></p>
              <p className="text-gray-700">Email: inoaserv@gmail.com</p>
              <p className="text-gray-700">Phone: (978) 705-5509</p>
              <p className="text-gray-700">WhatsApp: <a href="https://wa.me/19787055509" className="text-optima-gold hover:underline">Chat with us</a></p>
              <p className="text-gray-700 text-sm mt-4">Business Hours: Mon-Fri 9am-6pm, Sat by appointment</p>
            </div>
          </section>

          <section className="bg-optima-navy text-white rounded-lg p-6 mt-8">
            <p className="font-semibold mb-2">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
            <p className="text-white/90 text-sm">
              Last Updated: December 8, 2024
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
