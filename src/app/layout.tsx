import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileAppBar from "@/components/MobileAppBar";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Optima Service Group - Tax & Immigration Services in Lawrence, MA",
  description: "Professional tax preparation, immigration forms, notary services, credit repair, and business support in Lawrence, MA. Serving Massachusetts with English & Spanish bilingual services. Virtual services available nationwide.",
  keywords: [
    "tax preparation Lawrence MA",
    "immigration forms Massachusetts",
    "notary public Lawrence",
    "credit repair MA",
    "tax services Essex County",
    "bilingual services Massachusetts",
    "document preparation Lawrence",
    "business services MA",
    "virtual tax services",
    "tax advisor near me"
  ],
  metadataBase: new URL("https://www.optimaservicegroup.com"),
  manifest: "/manifest.json",
  themeColor: "#0F213A",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Optima Service Group",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  openGraph: {
    type: "website",
    url: "https://www.optimaservicegroup.com",
    title: "Optima Service Group - Your Solution, All in One Place",
    description: "Professional tax, immigration, and business services in Lawrence, MA. Bilingual support available.",
    images: [
      {
        url: "/logo-optima.png",
        width: 1200,
        height: 630,
        alt: "Optima Service Group Logo",
        type: "image/png",
      }
    ],
    locale: "en_US",
    alternateLocale: ["es_ES"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Optima Service Group - Tax & Immigration Services",
    description: "Professional services in Lawrence, MA. English & Spanish bilingual support.",
    images: ["/logo-optima.png"],
  },
  icons: {
    icon: [
      { url: "/logo-optima.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/logo-optima.png",
    shortcut: "/logo-optima.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
  alternates: {
    languages: {
      en: "https://www.optimaservicegroup.com",
      es: "https://www.optimaservicegroup.com/es",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                { "@type": "City", name: "Lawrence" },
                { "@type": "State", name: "Massachusetts" }
              ],
              priceRange: "$$",
              knowsAbout: [
                "Tax Preparation",
                "Immigration Forms",
                "Notary Services",
                "Credit Repair",
                "Document Preparation",
                "Business Services",
                "Virtual Services"
              ]
            }),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.optimaservicegroup.com",
              name: "Optima Service Group",
              description: "Your Solution, All in One Place",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.optimaservicegroup.com/search?q={search_term_string}"
                },
                query_input: "required name=search_term_string"
              }
            }),
          }}
        />

        {/* Contact Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPoint",
              contactType: "Customer Service",
              telephone: "+1-978-705-5509",
              areaServed: ["US"],
              availableLanguage: ["en", "es"]
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Header />
            <main className="min-h-screen md:pb-0 pb-20">{children}</main>
            <MobileAppBar />
            <Footer />
            <Toaster position="top-right" />
          </LanguageProvider>
        </ThemeProvider>
        
        {/* PWA Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
