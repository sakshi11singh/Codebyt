import { useEffect } from 'react';

// Load Calendly script globally
export const useCalendly = () => {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    if (head) head.appendChild(script);
    
    return () => {
      if (head && script.parentNode) {
        head.removeChild(script);
      }
    };
  }, []);
};

// Calendly popup widget function
export const openCalendlyPopup = (url: string = 'https://calendly.com/mukprabhakar/30min') => {
  // @ts-ignore - Calendly widget
  if (window.Calendly) {
    // @ts-ignore - Calendly widget
    window.Calendly.initPopupWidget({ url });
  } else {
    // Fallback to opening in new tab if Calendly not loaded
    window.open(url, '_blank');
  }
};
