'use client';

/**
 * MobileAppBar Component - Blueprint Compliant
 * 
 * Sticky bottom navigation (The App Feel):
 * - Fixed bar at bottom of screen
 * - 44px minimum tap targets (A11y compliant)
 * - Deep Navy background (#0F213A)
 * - White icons (Gold on active state)
 * - 5 navigation points: Home, Services, WhatsApp, Contact, Menu
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, MessageCircle, User, Menu } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function MobileAppBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  let language = 'en';
  try {
    const ctx = useLanguage();
    language = ctx.language;
  } catch (e) {
    // Provider not available during SSG
  }
  
  const navItems = [
    {
      href: '/',
      icon: Home,
      label: language === 'en' ? 'Home' : 'Inicio',
      active: pathname === '/'
    },
    {
      href: '/services',
      icon: Briefcase,
      label: language === 'en' ? 'Services' : 'Servicios',
      active: pathname?.startsWith('/services')
    },
    {
      href: 'https://wa.me/19787055509',
      icon: MessageCircle,
      label: 'WhatsApp',
      active: false,
      external: true
    },
    {
      href: '/contact',
      icon: User,
      label: language === 'en' ? 'Contact' : 'Contacto',
      active: pathname === '/contact'
    }
  ];

  const menuLinks = [
    { href: '/about', label: language === 'en' ? 'About Us' : 'Nosotros' },
    { href: '/faq', label: 'FAQ' },
    { href: '/team', label: language === 'en' ? 'Our Team' : 'Nuestro Equipo' },
    { href: '/privacy', label: language === 'en' ? 'Privacy Policy' : 'Privacidad' },
    { href: '/terms', label: language === 'en' ? 'Terms of Service' : 'Términos' },
  ];
  
  return (
    <>
      {/* Sidebar Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Sidebar */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-64 bg-white shadow-2xl transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="bg-optima-navy text-white p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Menu Links */}
            <nav className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-2">
                {menuLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                        pathname === link.href
                          ? 'bg-optima-gold text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                Optima Service Group
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 bg-[#0c1d39] border-t-2 border-optima-gold pb-safe shadow-2xl md:hidden">
        <div className="w-full max-w-[600px] mx-auto px-2 py-2">
          <ul className="flex items-center justify-around gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.active;
              const isWhatsApp = item.label.includes('WhatsApp');
              
              return (
                <li key={item.href} className="flex">
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex flex-col items-center justify-center min-w-11 min-h-11 transition-all duration-200 ${
                        isWhatsApp ? 'relative' : ''
                      }`}
                      aria-label={item.label}
                    >
                      {isWhatsApp && (
                        <div className="absolute inset-0 bg-[#25D366] rounded-full opacity-20 group-hover:opacity-30 blur-sm animate-pulse" />
                      )}
                      <Icon 
                        className={`${isWhatsApp ? 'w-7 h-7' : 'w-6 h-6'} text-white/70 group-hover:text-optima-gold transition-colors duration-200 relative z-10`}
                        strokeWidth={isWhatsApp ? 2.5 : 2}
                        style={isWhatsApp ? { filter: 'drop-shadow(0 0 4px rgba(37, 211, 102, 0.6))' } : {}}
                      />
                      <span className={`${isWhatsApp ? 'text-[11px] font-bold' : 'text-[10px] font-medium'} mt-1 text-white/70 group-hover:text-optima-gold transition-colors duration-200 relative z-10`}>
                        {item.label}
                      </span>
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="group flex flex-col items-center justify-center min-w-11 min-h-11 transition-all duration-200"
                      aria-label={item.label}
                    >
                      <Icon 
                        className={`w-6 h-6 transition-colors duration-200 ${
                          item.label.includes('WhatsApp')
                            ? 'text-[#25D366] group-hover:text-[#1ebe5d]'
                            : isActive 
                                ? 'text-optima-gold' 
                                : 'text-white/80 group-hover:text-white'
                        }`}
                        strokeWidth={isActive ? 2.5 : 2}
                      />
                      <span 
                        className={`text-[10px] mt-1 font-medium transition-colors duration-200 ${
                          item.label.includes('WhatsApp')
                            ? 'text-[#25D366] group-hover:text-[#1ebe5d]'
                            : isActive 
                                ? 'text-optima-gold' 
                                : 'text-white/80 group-hover:text-white'
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  )}
                </li>
              );
            })}
            
            {/* Hamburger Menu Button */}
            <li className="flex">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="group flex flex-col items-center justify-center min-w-11 min-h-11 transition-all duration-200"
                aria-label="Menu"
              >
                <Menu 
                  className="w-6 h-6 text-white/80 group-hover:text-optima-gold transition-colors duration-200"
                  strokeWidth={2}
                />
                <span className="text-[10px] mt-1 font-medium text-white/80 group-hover:text-optima-gold transition-colors duration-200">
                  {language === 'en' ? 'Menu' : 'Menú'}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
