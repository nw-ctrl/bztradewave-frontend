import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'News & Insights', path: '/news' },
    { name: 'Partners', path: '/partners' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' : 'bg-white/10 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-50">
            <div className="flex items-center space-x-1">
              <Globe className="h-8 w-8 text-primary" />
              <Zap className="h-6 w-6 text-accent" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>bzTradewave</span>
              <span className={`text-xs transition-colors ${
                isScrolled ? 'text-muted-foreground' : 'text-white/70'
              }`}>.au</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActive(item.path) 
                    ? isScrolled ? 'text-primary border-b-2 border-primary pb-1' : 'text-white border-b-2 border-white pb-1'
                    : isScrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/partner-login">
              <Button 
                variant={isScrolled ? "default" : "outline"} 
                size="sm" 
                className={`ml-4 ${
                  isScrolled 
                    ? 'bg-primary text-white hover:bg-primary/90' 
                    : 'text-white border-white hover:bg-white hover:text-primary'
                }`}
              >
                Partner Login
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden z-50">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 ${
                isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white/98 backdrop-blur-lg shadow-lg border-t border-gray-200">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-white bg-primary'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 py-3">
                <Link to="/partner-login" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Partner Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

