import { useEffect } from 'react';

const SecurityHeaders = () => {
  useEffect(() => {
    // Force HTTPS in production
    if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
      window.location.replace(`https:${window.location.href.substring(window.location.protocol.length)}`);
    }

    // Add security meta tags if they don't exist
    const addMetaTag = (name, content) => {
      if (!document.querySelector(`meta[name="${name}"]`)) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Security headers
    addMetaTag('referrer', 'strict-origin-when-cross-origin');
    addMetaTag('robots', 'index, follow');
    
    // Content Security Policy
    if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
      const csp = document.createElement('meta');
      csp.httpEquiv = 'Content-Security-Policy';
      csp.content = "default-src 'self'; script-src 'self' 'unsafe-inline' https://formspree.io; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://formspree.io https://api.bztradewave.au;";
      document.head.appendChild(csp);
    }
  }, []);

  return null;
};

export default SecurityHeaders;

