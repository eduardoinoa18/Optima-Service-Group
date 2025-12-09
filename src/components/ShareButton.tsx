'use client';

/**
 * ShareButton Component
 * 
 * Uses Web Share API on compatible devices (iOS, Android)
 * Falls back to copy-to-clipboard with notification
 */

import { Share2, Check } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonProps {
  className?: string;
  title?: string;
  text?: string;
  url?: string;
}

export default function ShareButton({ 
  className = '',
  title = 'Optima Service Group',
  text = 'Tax, Immigration & Business Services in Lawrence, MA',
  url
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  
  const handleShare = async () => {
    // Check if Web Share API is available
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: shareUrl
        });
      } catch (error) {
        // User cancelled or error occurred
        console.log('Share cancelled or failed:', error);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (error) {
        console.error('Failed to copy:', error);
      }
    }
  };
  
  return (
    <button
      onClick={handleShare}
      className={`relative transition-all duration-150 ${className}`}
      aria-label="Share this page"
      title={copied ? 'Link copied!' : 'Share'}
    >
      {copied ? (
        <Check className="w-5 h-5" />
      ) : (
        <Share2 className="w-5 h-5" />
      )}
      
      {copied && (
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap bg-optima-gold text-optima-navy px-2 py-1 rounded">
          Link Copied!
        </span>
      )}
    </button>
  );
}
