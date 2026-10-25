import React, { useState } from 'react';
import { 
  PartyPopper, 
  UtensilsCrossed, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Heart, 
  Award
} from 'lucide-react';

interface EventsHospitalityPageProps {
  onOpenQuoteModal: (vertical?: string) => void;
}

export const EventsHospitalityPage: React.FC<EventsHospitalityPageProps> = ({ onOpenQuoteModal }) => {
  const [eventType, setEventType] = useState('Luxury Wedding & Sangeet Gala');
  const [guestCount, setGuestCount] = useState<number>(450);
  const [eventDate, setEventDate] = useState('2026-11-20');
  const [budgetTier, setBudgetTier] = useState('Grand Luxe (₹1,500 - ₹2,500 / Plate)');
  const [plannerName, setPlannerName] = useState('');
  const [plannerPhone, setPlannerPhone] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const [portfolioFilter, setPortfolioFilter] = useState<'all' | 'weddings' | 'corporate' | 'catering'>('all');

  const portfolioItems = [
    {
      id: 1,
      category: 'weddings',
      title: 'Royal Mauryan Palace Wedding',
      location: 'Patna Heritage Grounds',
      guests: '1,200 Guests',
      tag: 'Grand Floral & Crystal Canopy',
      accent: '#DB2777'
    },
    {
      id: 2,
      category: 'corporate',
      title: 'Eastern India Tech Summit 2026',
      location: 'Gyan Bhawan, Patna',
      guests: '800 Delegates',
      tag: 'Curved 4K LED & Acoustic Rigging',
      accent: '#0284C7'
    },
    {
      id: 3,
      category: 'catering',
      title: 'State Banquet & Diplomatic Dinner',
      location: 'Patna Executive Club',
      guests: '350 Dignitaries',
      tag: '7-Course Multi-Cuisine Gourmet',
      accent: '#D97706'
    },
    {
      id: 4,
      category: 'weddings',
      title: 'Enchanted Vrindavan Theme Sangeet',
      location: 'Danapur Riverfront Lawns',
      guests: '900 Guests',
      tag: 'Water Fountains & Laser Mapping',
      accent: '#DB2777'
    },
    {
      id: 5,
      category: 'corporate',
      title: 'Annual Automobile Dealer Conclave',
      location: 'Hotel Maurya Grand Ballroom',
      guests: '400 Partners',
      tag: '360° Stage & Reveal Pyrotechnics',
      accent: '#0284C7'
    },
    {
      id: 6,
      category: 'catering',
      title: 'Traditional Bihari Royal Bhoj & Global Fusion',
      location: 'Bailey Road Banquet Arena',
      guests: '2,500 Guests',
      tag: 'Live Chaat & Gourmet Brentra Ice Cream Bars',
      accent: '#059669'
    }
  ];

  const filteredPortfolio = portfolioFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === portfolioFilter);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      
      {/* Hero Banner - Premium White */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-2 text-pink-700 text-xs font-bold uppercase tracking-widest mb-3">
            <PartyPopper className="w-4 h-4" /> Brentra Luxury Events & Institutional Hospitality
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0A192F] tracking-tight leading-[1.15] max-w-4xl">
            Signature Celebrations & Seamless Corporate Gatherings
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mt-5 leading-relaxed">
            From regal destination weddings and acoustic corporate summits to bespoke multi-cuisine catering for up to 5,000+ guests. Turnkey event design executed with military precision across Bihar.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-8">
            <a
              href="#planner"
              className="px-6 py-3.5 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
            >
              Configure Event & Check Date
            </a>
            <a
              href="#portfolio"
              className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 transition-colors shadow-sm"
            >
              View Theme & Stage Portfolio
            </a>
            <a
              href="tel:+919430088000"
              className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Phone className="w-4 h-4" /> Event Desk: +91-94300-88000
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-black text-[#0A192F] font-mono">380+</div>
              <div className="text-xs text-slate-500 mt-1">Galas & Summits Executed</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#0A192F] font-mono">5,000+</div>
              <div className="text-xs text-slate-500 mt-1">Max Event Catering Capacity</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#0A192F] font-mono">4K LED</div>
              <div className="text-xs text-slate-500 mt-1">Acoustic & Truss Rigging</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#0A192F] font-mono">100%</div>
              <div className="text-xs text-slate-500 mt-1">FSSAI Certified Chef Brigade</div>
            </div>
          </div>

        </div>
      </section>

      {/* 3 Core Divisions Showcase */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-pink-700 uppercase tracking-widest px-3 py-1 rounded bg-pink-50 border border-pink-200">
              End-to-End Production
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A192F]">
              Hospitality & Celebration Disciplines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Royal Weddings & Social Galas',
                desc: 'Complete turnkey wedding curation: thematic entrance arches, hydraulic revolving stages, bridal entry concepts, Russian acoustic artists, royal mandap setups, and bespoke guest concierges.',
                bullets: ['Custom 3D theme rendering', 'Lighting & truss engineering', 'Celebrity artist coordination', 'VVIP guest hospitality']
              },
              {
                icon: Award,
                title: 'Corporate Summits & Conclaves',
                desc: 'Flawless corporate event management for product reveals, dealer conventions, medical seminars, and high-level government summits with seamless AV streaming.',
                bullets: ['P2/P3 high-res LED video walls', 'JBL Line Array acoustic systems', 'Interactive registration kiosks', 'Corporate gifting & mementos']
              },
              {
                icon: UtensilsCrossed,
                title: 'Institutional Gourmet Catering',
                desc: 'Five-star catering brigade serving 100 to 5,000+ guests. Authentic Awadhi, Royal Bihari, Pan-Asian, Italian live counters, and exclusive Brentra ice cream dessert lounges.',
                bullets: ['Live chef counters & tandoor', 'Strict FSSAI hygienic protocols', 'Customized cutlery & royal service', 'On-site refrigeration trucks']
              }
            ].map((div, idx) => {
              const Icon = div.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 hover:border-slate-400 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#0A192F] group-hover:text-blue-900 transition-colors">
                      {div.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {div.desc}
                    </p>

                    <ul className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                      {div.bullets.map((b, bi) => (
                        <li key={bi} className="text-xs text-slate-700 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <button
                      onClick={() => onOpenQuoteModal('events-hospitality')}
                      className="text-xs font-bold text-[#0A192F] hover:text-pink-700 flex items-center gap-1.5 cursor-pointer"
                    >
                      Inquire Custom Package <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Interactive Event Planner Inquiry Module */}
      <section id="planner" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <span className="text-xs font-bold text-pink-700 uppercase tracking-widest px-3 py-1 rounded bg-pink-50 border border-pink-200">
                Interactive Cost & Date Checker
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                Plan Your Event with Brentra Hospitality
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Input your anticipated guest count and preferences to reserve dates and receive an itemized production & catering blueprint.
              </p>
            </div>

            {inquirySubmitted ? (
              <div className="p-8 text-center space-y-4 bg-emerald-50 border border-emerald-200 rounded-2xl max-w-md mx-auto">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-heading font-bold text-xl text-slate-900">Event Date Tentatively Blocked!</h3>
                <p className="text-xs text-slate-600">
                  Thank you, <strong className="text-slate-900">{plannerName}</strong>. Our Chief Event Architect will call you at <strong className="text-slate-900">{plannerPhone}</strong> with floor layout options and tasting menu invitations.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-5 text-xs">
                
                {/* Event Type */}
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-2">
                    1. Select Event Style
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Luxury Wedding & Sangeet Gala',
                      'Corporate Summit / Dealer Conclave',
                      'Product Reveal & High-Tech Exhibition',
                      'Institutional Banquet & Private Celebration'
                    ].map((style) => (
                      <button
                        type="button"
                        key={style}
                        onClick={() => setEventType(style)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                          eventType === style 
                            ? 'bg-[#0A192F] border-[#0A192F] text-white font-bold' 
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guest Count Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="font-bold text-slate-700 uppercase tracking-wider">
                      2. Estimated Guest Count
                    </label>
                    <span className="font-mono text-base font-bold text-[#0A192F]">
                      {guestCount} Guests
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="3000"
                    step="50"
                    value={guestCount}
                    onChange={(e) => setGuestCount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0A192F]"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                    <span>100 (Intimate)</span>
                    <span>1,000 (Grand Reception)</span>
                    <span>3,000+ (Mega Conclave)</span>
                  </div>
                </div>

                {/* Date & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Target Event Date *</label>
                    <input
                      type="date"
                      required
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Target Catering & Decor Tier</label>
                    <select
                      value={budgetTier}
                      onChange={(e) => setBudgetTier(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm"
                    >
                      <option value="Classic Elegance (₹900 - ₹1,400 / Plate)">Classic Elegance (₹900 - ₹1,400 / Plate)</option>
                      <option value="Grand Luxe (₹1,500 - ₹2,500 / Plate)">Grand Luxe (₹1,500 - ₹2,500 / Plate)</option>
                      <option value="Royal Imperial (₹2,500+ / Plate)">Royal Imperial (₹2,500+ / Plate)</option>
                    </select>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={plannerName}
                      onChange={(e) => setPlannerName(e.target.value)}
                      placeholder="e.g. Smt. Vandana Mishra"
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Phone Number (WhatsApp Active) *</label>
                    <input
                      type="tel"
                      required
                      value={plannerPhone}
                      onChange={(e) => setPlannerPhone(e.target.value)}
                      placeholder="+91 98350 XXXXX"
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-transform active:scale-95 cursor-pointer"
                >
                  Check Date Availability & Receive Tasting Menu Proposal
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* Curated Theme & Stage Design Showcase */}
      <section id="portfolio" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-pink-700 uppercase tracking-widest px-3 py-1 rounded bg-pink-50 border border-pink-200">
                Visual Excellence
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0A192F] mt-2">
                Curated Theme & Stage Design Showcase
              </h2>
            </div>

            <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'weddings', label: 'Weddings' },
                { id: 'corporate', label: 'Corporate' },
                { id: 'catering', label: 'Gourmet Catering' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setPortfolioFilter(tab.id as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    portfolioFilter === tab.id 
                      ? 'bg-[#0A192F] text-white shadow' 
                      : 'text-slate-600 hover:text-black'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item) => (
              <div 
                key={item.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-300 transition-all group shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span 
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded font-mono bg-slate-100 text-slate-800 border border-slate-200"
                    >
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono font-bold">{item.guests}</span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#0A192F] group-hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <span>Venue:</span> <strong className="text-slate-700">{item.location}</strong>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-pink-800 font-medium">
                    ✨ {item.tag}
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <button
                    onClick={() => onOpenQuoteModal('events-hospitality')}
                    className="text-[#0A192F] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    Inquire Similar Setup <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
