import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Zap, Mail, MapPin, Phone, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Globe className="h-8 w-8 text-white" />
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">bzTradewave</span>
                <span className="text-xs text-gray-300">.au</span>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Proudly from Australia, we facilitate seamless international trade with 
              cutting-edge AI technology and dedicated support across agriculture, 
              electronics, and fashion sectors.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Australia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Products', path: '/products' },
                { name: 'News & Insights', path: '/news' },
                { name: 'Partners', path: '/partners' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Products</h3>
            <ul className="space-y-2">
              {[
                'Agriculture',
                'Electronics',
                'Fashion & Textiles',
                'Market Insights',
                'AI Solutions',
              ].map((product) => (
                <li key={product}>
                  <span className="text-gray-300 text-sm">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:connect@bztradewave.au" 
                  className="hover:text-white transition-colors duration-200"
                >
                  connect@bztradewave.au
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>Monday - Friday: 9:00 AM - 6:00 PM AEST</span>
              </div>
            </div>
            
            {/* Partner Portal */}
            <div className="pt-4">
              <Link to="/partner-login">
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 backdrop-blur-sm border border-white/20">
                  Partner Portal
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © 2025 bzTradewave.au. All rights reserved.
            </div>
            
            {/* Nextwave.au Attribution */}
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span>Proudly created locally by</span>
              <a 
                href="mailto:ns@nextwave.au" 
                className="flex items-center space-x-1 text-white hover:text-accent transition-colors duration-200 font-medium"
              >
                <Heart className="h-4 w-4 text-accent" />
                <span>Nextwave.au</span>
              </a>
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-300">
              <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

