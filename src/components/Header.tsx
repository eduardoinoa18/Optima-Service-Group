"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Sun, Moon, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  let language = "en";
  let toggleLanguage = () => {};
  let t = (key: string) => key;
  
  try {
    const ctx = useLanguage();
    language = ctx.language;
    toggleLanguage = ctx.toggleLanguage;
    t = ctx.t;
  } catch (e) {
    // Provider not available, use defaults
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/", label: "nav.home" },
    { href: "/about", label: "nav.about" },
    { href: "/services", label: "nav.services" },
    { href: "/real-estate", label: "nav.realEstate" },
    { href: "/team", label: "nav.team" },
    { href: "/contact", label: "nav.contact" },
    { href: "/faq", label: "nav.faq" },
  ];

  if (!mounted) return null;

  return (
    <>
      {/* Logo Banner - Top Center with Brand Icon */}
      <div className="sticky top-0 z-51 w-full bg-[#0F213A] backdrop-blur-sm border-b border-[#F5C440]/30 py-3 shadow-lg">
        <div className="container flex items-center justify-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <Logo width={50} height={50} className="group-hover:scale-110 transition-transform duration-200" />
          </Link>
        </div>
      </div>

      <header className="sticky top-[68px] z-50 bg-white/95 dark:bg-[#0F213A]/95 backdrop-blur-md border-b border-gray-200 dark:border-[#F5C440]/20">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo Text */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-heading font-bold text-lg text-[#0F213A] dark:text-white">
                Optima Service Group
              </span>
            </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-white hover:text-[#F5C440] dark:hover:text-[#F5C440] transition-colors duration-200"
              >
                {t(link.label)}
              </Link>
            ))}
            
            {/* Theme Toggle - Desktop */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#F5C440]/10 transition-colors"
              aria-label="Toggle theme"
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-gray-700 dark:text-[#F5C440]" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 dark:text-[#F5C440]" />
              )}
            </button>

            {/* Language Toggle - Desktop */}
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#F5C440]/10 transition-colors flex items-center space-x-1"
              aria-label="Toggle language"
              title={language === "en" ? "Cambiar a Español" : "Switch to English"}
            >
              <Languages className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                {language === "en" ? "ES" : "EN"}
              </span>
            </button>
            
            <Link
              href="/contact"
              className="btn-primary text-sm"
            >
              {t("nav.getStarted")}
            </Link>
          </nav>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Theme Toggle - Mobile */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-[#0F213A] dark:text-[#F5C440]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Language Toggle - Mobile */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-[#0F213A] dark:text-[#F5C440] text-xs font-bold"
              aria-label="Toggle language"
            >
              {language === "en" ? "ES" : "EN"}
            </button>

            <a href="tel:+19787055509" className="text-[#0F213A] dark:text-white" title="Call us" aria-label="Call us at (978) 705-5509">
              <Phone className="w-5 h-5" />
            </a>
            <a href="https://wa.me/19787055509" className="text-[#25D366] hover:text-[#1ebe5d]" title="WhatsApp us" aria-label="Contact us on WhatsApp" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="p-2 text-[#0F213A] dark:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0F213A] border-t border-gray-200 dark:border-[#F5C440]/20"
          >
            <nav className="container py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="block py-2 text-sm font-medium text-gray-700 dark:text-white hover:text-[#F5C440] transition-colors"
                >
                  {t(link.label)}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="block py-2 text-sm font-medium text-[#F5C440]"
              >
                {t("nav.getStarted")}
              </Link>
              <div className="pt-4 space-y-2 border-t border-gray-200 dark:border-[#F5C440]/20">
                <a
                  href="tel:+19787055509"
                  className="flex items-center space-x-2 text-sm text-gray-700 dark:text-white"
                >
                  <Phone className="w-4 h-4" />
                  <span>(978) 705-5509</span>
                </a>
                <a
                  href="mailto:inoaserv@gmail.com"
                  className="flex items-center space-x-2 text-sm text-gray-700 dark:text-white"
                >
                  <Mail className="w-4 h-4" />
                  <span>inoaserv@gmail.com</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
};

export default Header;
