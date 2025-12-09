'use client';

/**
 * MobileAppBar Component
 * 
 * Sticky bottom navigation bar with app-like experience
 * - 44px minimum tap targets
 * - Persistent across all pages
 * - High-contrast icons with labels
 */

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, MessageCircle, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MobileAppBar() {
  const pathname = usePathname();
  
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
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-optima-navy border-t border-optima-gold/20 pb-safe">
      <div className="max-w-[600px] mx-auto px-4 py-2">
        <ul className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.active;
            
            return (
              <li key={item.href} className="flex">
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center min-w-[44px] min-h-[44px] transition-all duration-150"
                    aria-label={item.label}
                  >
                    <Icon 
                      className={`w-6 h-6 transition-colors duration-150 ${
                        isActive 
                          ? 'text-optima-gold' 
                          : 'text-white/70 group-hover:text-white'
                      }`}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    <span 
                      className={`text-[10px] mt-1 font-medium transition-colors duration-150 ${
                        isActive 
                          ? 'text-optima-gold' 
                          : 'text-white/70 group-hover:text-white'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="group flex flex-col items-center justify-center min-w-[44px] min-h-[44px] transition-all duration-150"
                    aria-label={item.label}
                  >
                    <Icon 
                      className={`w-6 h-6 transition-colors duration-150 ${
                        isActive 
                          ? 'text-optima-gold' 
                          : 'text-white/70 group-hover:text-white'
                      }`}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    <span 
                      className={`text-[10px] mt-1 font-medium transition-colors duration-150 ${
                        isActive 
                          ? 'text-optima-gold' 
                          : 'text-white/70 group-hover:text-white'
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
