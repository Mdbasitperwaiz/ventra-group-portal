import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare
} from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: (vertical?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuoteModal }) => {
  return (
    <footer className="bg-[#0A192F] text-slate-300 relative z-20 border-t border-slate-200">
      
      {/* Pre-Footer Action Banner */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#07152B] via-[#0E2442] to-[#07152B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
              Ready to Partner with Eastern India's Fast-Growing Conglomerate?
            </h3>
            <p className="text-sm text-slate-300">
              Commercial supplies, ₹1,999/sq.ft turnkey construction, enterprise software, or verified facility contracts.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#0A192F] font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
            >
              Request Free Consultation / Quote
            </button>
            <a
              href="tel:+919430088000"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" /> +91-94300-88000
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Corporate Address */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white p-3 rounded-2xl inline-block shadow-md">
              <img 
                src="/logo.png" 
                alt="Ventra Group of Companies" 
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pr-4">
              Ventra Group of Companies is an institutional multi-vertical conglomerate operating across Technology, Turnkey Civil Infrastructure (@ ₹1,999/sq.ft), Cold-Chain Fresh FMCG, Facility Engineering, and Luxury Hospitality.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Corporate Headquarters:</strong> Ventra Corporate Towers, Bailey Road, Patna, Bihar — 800001
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Patna Central Helpline: <strong className="text-white">+91-94300-88000</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Executive Secretariat: <strong className="text-white">corporate@ventragroup.in</strong></span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                CIN Registered
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                ISO 9001:2015
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                FSSAI Licensed
              </span>
            </div>
          </div>

          {/* Business Verticals */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Business Divisions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/it-solutions" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-cyan-400" /> IT & Digital Engineering
                </Link>
              </li>
              <li>
                <Link to="/fresh-fmcg" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-emerald-400" /> Fresh Supply & FMCG Logistics
                </Link>
              </li>
              <li>
                <Link to="/realty-infrastructure" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-400" /> Turnkey Construction (₹1,999)
                </Link>
              </li>
              <li>
                <Link to="/facility-services" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-400" /> Facility Care & AMC (AC/RO)
                </Link>
              </li>
              <li>
                <Link to="/events-hospitality" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-pink-400" /> Events, Galas & Catering
                </Link>
              </li>
              <li>
                <Link to="/realty-infrastructure#materials" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-amber-400" /> Bulk Building Materials
                </Link>
              </li>
              <li>
                <Link to="/ventures" className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-cyan-400" /> Healthcare Distribution
                </Link>
              </li>
            </ul>
          </div>

          {/* Governance & Hub */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Governance & Hub
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/corporate-overview" className="text-slate-300 hover:text-white transition-colors">
                  Corporate Overview & Vision
                </Link>
              </li>
              <li>
                <a href="/#directors" className="text-slate-300 hover:text-white transition-colors">
                  Board of Directors Quad
                </a>
              </li>
              <li>
                <Link to="/patna-hub" className="text-slate-300 hover:text-white transition-colors">
                  Patna Central Hub & Facilities
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-300 hover:text-white transition-colors">
                  Careers & Job Openings
                </Link>
              </li>
              <li>
                <Link to="/careers#partner" className="text-slate-300 hover:text-white transition-colors">
                  Vendor & Contractor Onboarding
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Network */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Bihar Regional Coverage
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Dispatches and on-ground project execution across:
            </p>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {['Patna Metro', 'Danapur', 'Bihta', 'Hajipur', 'Muzaffarpur', 'Gaya', 'Bhagalpur', 'Darbhanga', 'Begusarai', 'Munger', 'Purnia'].map((district, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-slate-300">
                  {district}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/919430088000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5" /> 24/7 WhatsApp Regional Desk
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Ventra Group of Companies. All Rights Reserved. Headquartered in Patna, Bihar.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Enterprise Conglomerate Portal
            </span>
            <span>•</span>
            <span className="text-slate-300">Diverse Ventures | Stronger Tomorrow</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
