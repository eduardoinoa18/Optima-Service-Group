'use client';

/**
 * AppCardHeader Component
 * 
 * Simplified sticky header for app-card experience
 * - Language toggle (left)
 * - Optima Icon (center)
 * - Share button (right)
 */

import Link from 'next/link';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import OptimaIcon from './OptimaIcon';
import ShareButton from './ShareButton';

export default function AppCardHeader() {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <header className="sticky top-0 z-50 bg-optima-navy/95 backdrop-blur-md border-b border-optima-gold/20">
      <div className="max-w-[600px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-150 min-w-[44px] min-h-[44px]"
            aria-label={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
          >
            <Languages className="w-5 h-5 text-white" />
            <span className="text-sm font-bold text-white">
              {language === 'en' ? 'ES' : 'EN'}
            </span>
          </button>
          
          {/* Center: Optima Icon */}
          <Link 
            href="/" 
            className="flex items-center justify-center"
            aria-label="Optima Service Group Home"
          >
            <OptimaIcon size={40} color="#F5C440" />
          </Link>
          
          {/* Right: Share Button */}
          <ShareButton className="p-3 rounded-lg hover:bg-white/10 transition-all duration-150 text-white" />
        </div>
      </div>
    </header>
  );
}
