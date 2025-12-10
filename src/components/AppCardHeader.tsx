'use client';

/**
 * AppCardHeader Component - Blueprint Compliant
 * 
 * Sticky header for app-card experience:
 * - LEFT: Language toggle (EN/ES instant switch)
 * - CENTER: Optima Icon (Gold or White)
 * - RIGHT: Share button (Web Share API / clipboard fallback)
 * - Background: Deep Navy (#0F213A)
 * - All tap targets: 44px minimum
 */

import Link from 'next/link';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ShareButton from './ShareButton';

export default function AppCardHeader() {
  // SSG-compatible: wrap useLanguage in try/catch
  let language = 'en';
  let toggleLanguage = () => {};
  
  try {
    const context = useLanguage();
    language = context.language;
    toggleLanguage = context.toggleLanguage;
  } catch (error) {
    // SSG/SSR fallback - will hydrate on client
  }
  
  return (
    <header className="sticky top-0 z-50 bg-optima-navy border-b-2 border-optima-gold/30 shadow-md">
      <div className="max-w-[600px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* LEFT: Language Toggle (44px tap target) */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-optima-gold/10 hover:bg-optima-gold/20 transition-all duration-200 min-w-11 min-h-11 border border-optima-gold/30"
            aria-label={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
          >
            <Languages className="w-5 h-5 text-optima-gold" />
            <span className="text-sm font-bold text-optima-gold">
              {language === 'en' ? 'ES' : 'EN'}
            </span>
          </button>
          
          {/* CENTER: Optima Logo */}
          <Link 
            href="/" 
            className="flex items-center justify-center"
            aria-label="Optima Service Group Home"
          >
            <img src="/logo-optima.png" alt="Optima Service Group" className="h-11 w-auto" />
          </Link>
          
          {/* RIGHT: Share Button (44px tap target) */}
          <ShareButton className="p-3 rounded-lg bg-optima-gold/10 hover:bg-optima-gold/20 transition-all duration-200 text-optima-gold min-w-11 min-h-11 flex items-center justify-center border border-optima-gold/30" />
        </div>
      </div>
    </header>
  );
}
