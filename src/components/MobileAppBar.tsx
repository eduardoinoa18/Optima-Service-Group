'use client';

/**
 * MobileAppBar Component - Blueprint Compliant
 * 
 * Sticky bottom navigation (The App Feel):
 * - Fixed bar at bottom of screen
 * - 44px minimum tap targets (A11y compliant)
 * - Deep Navy background (#0F213A)
 * - White icons (Gold on active state)
 * - 4 core navigation points: Home, Services, WhatsApp, Contact
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
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-optima-navy border-t-2 border-optima-gold pb-safe shadow-2xl">
      <div className="w-full px-4 py-2">
        <div className="flex items-center justify-around gap-2">
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
                    className="group flex flex-col items-center justify-center min-w-11 min-h-11 transition-all duration-200"
                    aria-label={item.label}
                  >
                    <Icon 
                      className="w-6 h-6 text-white/70 group-hover:text-optima-gold transition-colors duration-200"
                      strokeWidth={2}
                    />
                    <span className="text-[10px] mt-1 font-medium text-white/70 group-hover:text-optima-gold transition-colors duration-200">
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
                        isActive 
                          ? 'text-optima-gold' 
                          : 'text-white/70 group-hover:text-white'
                      }`}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    <span 
                      className={`text-[10px] mt-1 font-medium transition-colors duration-200 ${
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
