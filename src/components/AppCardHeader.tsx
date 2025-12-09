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
import OptimaIcon from './OptimaIcon';
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
    <header className="sticky top-0 z-50 bg-optima-navy/95 backdrop-blur-md border-b border-optima-gold/20">
      <div className="max-w-[600px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* LEFT: Language Toggle (44px tap target) */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 min-w-11 min-h-11"
            aria-label={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
          >
            <Languages className="w-5 h-5 text-white" />
            <span className="text-sm font-bold text-white">
              {language === 'en' ? 'ES' : 'EN'}
            </span>
          </button>
          
          {/* CENTER: Optima Icon (Gold color for visibility) */}
          <Link 
            href="/" 
            className="flex items-center justify-center"
            aria-label="Optima Service Group Home"
          >
            <OptimaIcon size={40} className="text-optima-gold" />
          </Link>
          
          {/* RIGHT: Share Button (44px tap target) */}
          <ShareButton className="p-3 rounded-lg hover:bg-white/10 transition-all duration-200 text-white min-w-11 min-h-11 flex items-center justify-center" />
        </div>
      </div>
    </header>
  );
}
