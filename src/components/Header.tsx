import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  ChevronDown, 
  Menu, 
  X, 
  Building2, 
  Cpu, 
  Fish, 
  Wrench, 
  PartyPopper, 
  Hammer, 
  HeartPulse,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: (vertical?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [verticalsDropdownOpen, setVerticalsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setVerticalsDropdownOpen(false);
  }, [location.pathname]);

  const verticalsList = [
    {
      title: 'IT & Digital Solutions',
      path: '/it-solutions',
      icon: Cpu,
      color: '#0284C7',
      tagline: 'Custom SaaS, AI Workflows & Mobile Apps'
    },
    {
      title: 'Fresh Supply & FMCG Logistics',
      path: '/fresh-fmcg',
      icon: Fish,
      color: '#059669',
      tagline: 'Farm-Fresh Eggs, Fish, Meat & Ventra Ice Cream'
    },
    {
      title: 'Realty, Construction & Turnkey Interiors',
      path: '/realty-infrastructure',
      icon: Building2,
      color: '#B8860B',
      tagline: 'Turnkey Construction @ Flat ₹1,999/sq. ft.'
    },
    {
      title: 'Multi-Service & Facility Maintenance',
      path: '/facility-services',
      icon: Wrench,
      color: '#0284C7',
      tagline: 'AC Repair, RO Services & Certified Technicians'
    },
    {
      title: 'Events & Hospitality Management',
      path: '/events-hospitality',
      icon: PartyPopper,
      color: '#DB2777',
      tagline: 'Luxury Weddings, Summits & Gourmet Catering'
    },
    {
      title: 'Building Materials & Bulk Supply',
      path: '/realty-infrastructure#materials',
      icon: Hammer,
      color: '#D97706',
      tagline: 'TMT Steel, Cement, Sand & Kiln Bricks Wholesale'
    },
    {
      title: 'Healthcare & Special Ventures',
      path: '/ventures',
      icon: HeartPulse,
      color: '#0284C7',
      tagline: 'Pharmaceutical Distribution & Cold-Chain Logistics'
    }
  ];

  return (
    <>
      {/* Top Corporate Strip - Executive Deep Navy */}
      <div className="bg-[#0A192F] text-xs text-slate-300 py-1.5 px-4 hidden md:block border-b border-[#1E3E62]/40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Patna Central Desk Active (8:00 AM – 9:00 PM IST)
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Corporate HQ: Bailey Road, Patna, Bihar</span>
            <span className="text-slate-600">|</span>
            <span className="text-amber-400 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> ₹1,999/sq.ft Turnkey Construction Guarantee
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a 
              href="tel:+919430088000" 
              className="flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" /> +91-94300-88000
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="https://wa.me/919430088000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-300 hover:text-emerald-200 transition-colors font-medium"
            >
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Premium White */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-md py-2.5 border-b border-slate-200/90' 
            : 'bg-white py-3.5 border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Official Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="Ventra Group of Companies Logo" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname === '/' 
                  ? 'text-[#0A192F] bg-slate-100 font-bold' 
                  : 'text-slate-700 hover:text-[#0A192F] hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link 
              to="/corporate-overview" 
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname === '/corporate-overview' 
                  ? 'text-[#0A192F] bg-slate-100 font-bold' 
                  : 'text-slate-700 hover:text-[#0A192F] hover:bg-slate-50'
              }`}
            >
              Overview
            </Link>

            {/* Business Verticals Mega-Menu Button */}
            <div 
              className="relative"
              onMouseEnter={() => setVerticalsDropdownOpen(true)}
              onMouseLeave={() => setVerticalsDropdownOpen(false)}
            >
              <button 
                type="button"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#0A192F] hover:bg-slate-50 transition-colors flex items-center gap-1.5 cursor-pointer"
                onClick={() => setVerticalsDropdownOpen(!verticalsDropdownOpen)}
                aria-expanded={verticalsDropdownOpen}
              >
                <span>Business Verticals</span>
                <ChevronDown className={`w-4 h-4 text-amber-600 transition-transform duration-200 ${verticalsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega-Menu Panel - Premium White */}
              {verticalsDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[740px] pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 grid grid-cols-2 gap-3.5">
                    <div className="col-span-2 pb-3 mb-1 border-b border-slate-100 flex justify-between items-center">
                      <span className="text-xs font-bold text-[#0A192F] uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Ventra Group Conglomerate Portfolio (7 Verticals)
                      </span>
                      <span className="text-[11px] font-medium text-slate-500">Headquartered in Patna, Bihar</span>
                    </div>

                    {verticalsList.map((vert, idx) => {
                      const IconComponent = vert.icon;
                      return (
                        <Link
                          key={idx}
                          to={vert.path}
                          className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all group/item"
                        >
                          <div 
                            className="p-2.5 rounded-xl shrink-0 mt-0.5 transition-transform group-hover/item:scale-110 shadow-sm"
                            style={{ backgroundColor: `${vert.color}15`, color: vert.color }}
                          >
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-[#0A192F] group-hover/item:text-blue-900 flex items-center gap-1">
                              {vert.title}
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                              {vert.tagline}
                            </p>
                          </div>
                        </Link>
                      );
                    })}

                    <div className="col-span-2 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-1">
                      <span>Looking for customized corporate procurement?</span>
                      <button 
                        onClick={() => {
                          setVerticalsDropdownOpen(false);
                          onOpenQuoteModal();
                        }}
                        className="text-[#0A192F] hover:text-amber-700 font-bold flex items-center gap-1"
                      >
                        Request Institutional AMC / Quote <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a 
              href="/#directors" 
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#0A192F] hover:bg-slate-50 transition-colors"
            >
              Directors Desk
            </a>

            <Link 
              to="/patna-hub" 
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname === '/patna-hub' 
                  ? 'text-[#0A192F] bg-slate-100 font-bold' 
                  : 'text-slate-700 hover:text-[#0A192F] hover:bg-slate-50'
              }`}
            >
              Patna Hub
            </Link>

            <Link 
              to="/careers" 
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                location.pathname === '/careers' 
                  ? 'text-[#0A192F] bg-slate-100 font-bold' 
                  : 'text-slate-700 hover:text-[#0A192F] hover:bg-slate-50'
              }`}
            >
              Careers & Partners
            </Link>
          </nav>

          {/* Right Utilities (Quote Button & Fast Contact) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold text-white transition-all bg-[#0A192F] hover:bg-[#1E3E62] rounded-xl shadow-md hover:shadow-lg active:scale-95 cursor-pointer uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              Book Service / Free Quote
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-2.5 py-1.5 text-xs font-bold text-white bg-[#0A192F] rounded-lg"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#0A192F] hover:bg-slate-100"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#0A192F]" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer - Premium White */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-semibold text-slate-800 hover:bg-slate-50"
              >
                Home
              </Link>
              <Link
                to="/corporate-overview"
                className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50"
              >
                Corporate Overview
              </Link>
              <a
                href="/#directors"
                className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50"
              >
                Directors Desk
              </a>
              <Link
                to="/patna-hub"
                className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50"
              >
                Patna Hub & Regional Network
              </Link>
              <Link
                to="/careers"
                className="block px-3 py-2 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50"
              >
                Careers & Partners
              </Link>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <div className="text-xs font-bold text-[#0A192F] uppercase tracking-wider mb-2 px-3">
                Business Verticals
              </div>
              <div className="grid grid-cols-1 gap-1">
                {verticalsList.map((vert, idx) => (
                  <Link
                    key={idx}
                    to={vert.path}
                    className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: vert.color }} />
                    {vert.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-2.5 px-4 text-center font-bold text-white bg-[#0A192F] rounded-xl text-xs uppercase tracking-wider shadow-md"
              >
                Book a Service / Free Quote
              </button>
              <div className="flex gap-2">
                <a
                  href="tel:+919430088000"
                  className="flex-1 py-2 px-3 text-center text-xs font-semibold bg-slate-100 text-slate-800 rounded-lg flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0A192F]" /> Call Patna Desk
                </a>
                <a
                  href="https://wa.me/919430088000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 text-center text-xs font-semibold bg-emerald-600 text-white rounded-lg flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
