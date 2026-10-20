import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Cpu, 
  Fish, 
  Wrench, 
  PartyPopper, 
  Hammer, 
  HeartPulse, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Layers,
  ChevronDown
} from 'lucide-react';
import { HeroCarousel } from '../components/HeroCarousel';
import { DirectorsQuad } from '../components/DirectorsQuad';
import { ParentStats } from '../components/ParentStats';

interface HomePageProps {
  onOpenQuoteModal: (vertical?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const verticalsOverview = [
    {
      id: 'it-solutions',
      title: 'IT & Digital Solutions',
      link: '/it-solutions',
      icon: Cpu,
      color: '#0284C7',
      tagline: 'Enterprise Software & Cloud Systems',
      highlights: ['Custom Web & SaaS Engineering', 'Business Automation & CRM', 'Native iOS/Android Apps', 'AI & Data Engineering'],
      badge: 'Dedicated Tech Staffing'
    },
    {
      id: 'fresh-fmcg',
      title: 'Fresh Supply & FMCG Logistics',
      link: '/fresh-fmcg',
      icon: Fish,
      color: '#059669',
      tagline: 'Farm-to-Door Wholesale Supply Chain',
      highlights: ['Daily Fresh Farm Eggs Wholesale', 'Hygienic Processed Chicken & Mutton', 'Fresh Bihar River Fish Catch', 'Ventra Gourmet Ice Cream Tubs'],
      badge: 'Cold-Chain Transport'
    },
    {
      id: 'realty-infrastructure',
      title: 'Realty, Construction & Turnkey Interiors',
      link: '/realty-infrastructure',
      icon: Building2,
      color: '#B8860B',
      tagline: 'Complete Turnkey Construction @ ₹1,999 / sq. ft.',
      highlights: ['Full RCC Foundation & 550D TMT Steel', 'Branded Kajaria Tiles & Granite Counter', 'Modular Kitchen & False Ceiling Included', '10-Year Structural Safety Warranty'],
      badge: 'Flat ₹1,999/sq.ft'
    },
    {
      id: 'facility-services',
      title: 'Multi-Service & Facility Maintenance',
      link: '/facility-services',
      icon: Wrench,
      color: '#0284C7',
      tagline: 'On-Demand Urban Care You Can Rely On',
      highlights: ['AC Jet Wash, Gas & Repairs (<60 mins)', 'RO Water Purifier Membrane & Filter AMC', 'Deep Sanitization & Commercial Cleaning', 'Verified Electricians & Plumbers'],
      badge: 'Rapid 60-Min TAT'
    },
    {
      id: 'events-hospitality',
      title: 'Events & Hospitality Management',
      link: '/events-hospitality',
      icon: PartyPopper,
      color: '#DB2777',
      tagline: 'Signature Celebrations & Corporate Summits',
      highlights: ['Luxury Destination Wedding Planning', 'Stage, LED Wall & Acoustic Production', 'Institutional Gourmet Catering (100-5000)', 'Artist Booking & Celebrity Entries'],
      badge: 'Turnkey Event Execution'
    },
    {
      id: 'building-materials',
      title: 'Building Materials & Bulk Supply',
      link: '/realty-infrastructure#materials',
      icon: Hammer,
      color: '#D97706',
      tagline: 'High-Grade Raw Materials for Stronger Foundations',
      highlights: ['Wholesale 53-Grade Branded Cement', 'Certified 550D TMT Rebars', 'Coarse Red Sand & Screened Aggregates', 'First-Class Kiln Red Clay Bricks'],
      badge: 'Truckload Direct Rates'
    },
    {
      id: 'ventures',
      title: 'Healthcare & Special Ventures',
      link: '/ventures',
      icon: HeartPulse,
      color: '#0284C7',
      tagline: 'Pharma Distribution & Industrial Trade',
      highlights: ['Wholesale Medicine Distribution Hub', 'Pharma Temperature Monitoring', 'Regional Bihar Supply Alliances', 'Industrial Logistics & Warehousing'],
      badge: 'Pan-Bihar Trade'
    }
  ];

  const faqs = [
    {
      q: 'What is included in the ₹1,999/sq. ft. Turnkey Construction package?',
      a: 'Our ₹1,999/sq.ft package is 100% turnkey. It includes structural architectural drawings, soil testing, excavation, RCC frame using 550D Grade-A TMT steel and 53-grade cement, kiln-burned red bricks, premium vitrified tiles (Kajaria/Somany), granite kitchen countertops, concealed Finolex wiring, Havells modular switches, Jaquar sanitaryware, complete Asian Paints Royale emulsion with putty base, AND a modular kitchen layout with designer false ceilings. Zero hidden costs.'
    },
    {
      q: 'How does Ventra Group manage daily wholesale deliveries for fresh FMCG?',
      a: 'We operate our own dedicated refrigerated cold-chain fleet originating from our central agricultural hub in Patna. We supply hotels, cloud kitchens, retail supermarkets, and banquet halls with fresh eggs, processed poultry, river fish, gourmet makhana, and Ventra ice creams on scheduled morning slots with complete FSSAI batch testing.'
    },
    {
      q: 'How fast can emergency facility technicians (AC, RO, electrical) arrive in Patna?',
      a: 'Within Patna municipal limits (Bailey Road, Kankarbagh, Danapur, Boring Road, Rajendra Nagar, Patliputra, Ashiana, etc.), our emergency verified technicians arrive within 60 minutes of booking. All technicians are background-verified and carry digital diagnostic kits.'
    },
    {
      q: 'Can enterprise clients sign a single umbrella AMC for multi-facility operations?',
      a: 'Yes. Through our Institutional Secretariat desk, corporate headquarters, hospitals, schools, and banks in Bihar can execute unified multi-vertical master service agreements covering regular facility maintenance, corporate catering, IT digital infrastructure, and periodic building audits.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      
      {/* 1. The 7-Slide Hero Banner Poster Engine */}
      <HeroCarousel onOpenQuoteModal={onOpenQuoteModal} />

      {/* 2. Parent Company Impact & Operational Statistics */}
      <ParentStats />

      {/* 3. Conglomerate Verticals Showcase Grid - Premium White */}
      <section className="py-20 bg-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5 text-amber-600" /> 7 Dedicated Divisions
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A192F] tracking-tight">
              One Vision • Multiple Businesses • Bigger Future
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Explore how each specialized group company operates autonomously with institutional excellence while drawing strength from Ventra Group's centralized capital and technology backbone.
            </p>
          </div>

          {/* Grid of 7 Business Verticals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticalsOverview.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white border border-slate-200 hover:border-slate-400 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    {/* Header with Icon and Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm"
                        style={{ backgroundColor: `${item.color}15`, color: item.color }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span 
                        className="text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider font-mono bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-xl text-[#0A192F] group-hover:text-blue-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 mb-5 font-medium">
                      {item.tagline}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 pt-2 border-t border-slate-100">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={item.link}
                      className="text-xs font-bold text-[#0A192F] hover:text-amber-700 flex items-center gap-1.5 group-hover:underline"
                    >
                      <span>Explore Vertical</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <button
                      onClick={() => onOpenQuoteModal(item.id)}
                      className="text-xs px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors cursor-pointer"
                    >
                      Fast Quote
                    </button>
                  </div>
                </div>
              );
            })}

            {/* 8th Card: Central Conglomerate Desk */}
            <div className="bg-[#0A192F] border border-[#1E3E62] rounded-2xl p-6 flex flex-col justify-between shadow-xl text-white relative overflow-hidden">
              <div className="space-y-3">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30 uppercase tracking-widest">
                  Enterprise Solution
                </span>
                <h3 className="font-heading font-black text-2xl text-white">
                  Corporate Procurement & Multi-Unit AMC
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Looking for institutional contracts, turnkey real estate developments, bulk food provisioning, or enterprise software outsourcing? Speak with our Managing Director’s Office.
                </p>
                <div className="pt-2 text-xs text-slate-300 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" /> Single Master Service Level Agreement
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" /> Dedicated Key Account Executive in Patna
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-[#0A192F] font-bold text-xs uppercase tracking-wider shadow-lg transition-transform active:scale-95 cursor-pointer"
                >
                  Schedule Corporate Meeting
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Board of Directors Desk (The Leadership Quad) */}
      <DirectorsQuad />

      {/* 5. Flagship Program Spotlight: ₹1,999/sq.ft Turnkey Construction */}
      <section className="py-20 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white border border-amber-300/80 rounded-3xl p-8 sm:p-12 shadow-xl relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Ventra Infrastructure Flagship
                </div>

                <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-[#0A192F] tracking-tight leading-tight">
                  Complete Turnkey Construction @ Flat{' '}
                  <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200 inline-block my-1">
                    ₹1,999 / sq. ft.
                  </span>
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Say goodbye to contractor disputes, sudden budget overruns, and inferior building materials. Ventra Realty delivers complete homes ready for move-in across Patna and Bihar with structural grade TMT steel, Kajaria tiles, branded modular kitchens, and a 10-year warranty.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-black text-[#0A192F] font-mono">100%</div>
                    <div className="text-xs text-slate-600 mt-0.5">Turnkey Ready</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-black text-[#0A192F] font-mono">550D</div>
                    <div className="text-xs text-slate-600 mt-0.5">Grade-A TMT Steel</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-black text-[#0A192F] font-mono">₹0</div>
                    <div className="text-xs text-slate-600 mt-0.5">Hidden Cost Guarantee</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-lg font-black text-[#0A192F] font-mono">10 Yrs</div>
                    <div className="text-xs text-slate-600 mt-0.5">Structural Warranty</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    to="/realty-infrastructure#calculator"
                    className="px-6 py-3.5 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                  >
                    Open Live Sq. Ft. Cost Calculator
                  </Link>
                  <button
                    onClick={() => onOpenQuoteModal('realty-infrastructure')}
                    className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 transition-colors shadow-sm cursor-pointer"
                  >
                    Book Free Site Inspection in Patna
                  </button>
                </div>
              </div>

              {/* Inclusions summary preview */}
              <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-4">
                <h3 className="font-heading font-bold text-base text-[#0A192F] border-b border-slate-200 pb-3 flex items-center justify-between">
                  <span>What's Included in ₹1,999/sq.ft</span>
                  <span className="text-xs text-amber-700 font-mono font-bold">Zero Extra Cost</span>
                </h3>

                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Architectural & Structural:</strong> 2D plans, 3D elevation, soil tests, RCC framed seismic structure.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Flooring & Kitchen:</strong> Kajaria/Somany 4x2 vitrified tiles, Black Galaxy granite counter, SS sink.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Concealed Fittings:</strong> Finolex/Polycab copper wiring, Havells modular switches, Jaquar sanitaryware.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Turnkey Modular Interiors:</strong> Designer POP false ceiling with LED strips, Marine-ply modular kitchen.</span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-slate-200 text-center">
                  <Link
                    to="/realty-infrastructure"
                    className="text-xs font-bold text-[#0A192F] hover:underline inline-flex items-center gap-1"
                  >
                    View Complete Technical Specifications Sheet <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. Patna Central Hub & Regional Reach */}
      <section className="py-20 bg-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-amber-600" /> Patna Central Hub Network
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A192F] tracking-tight">
                Strategically Headquartered in Patna, Powering All of Bihar
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                From our corporate headquarters on Bailey Road to our refrigerated logistics yard in Danapur and building material depots across Patna rural corridors, Ventra Group maintains instant ground reach.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-900 shrink-0 mt-1">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0A192F]">Ventra Corporate Towers (HQ)</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Bailey Road, Patna — Executive Boardroom, IT Labs, Architecture Studios.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 shrink-0 mt-1">
                    <Fish className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0A192F]">Cold-Chain & FMCG Logistic Yard</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Danapur Industrial Corridor — 50-ton cold storage, daily fleet staging for eggs, fish & poultry.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0 mt-1">
                    <Hammer className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0A192F]">Raw Building Material Central Stockyard</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Bihta Highway Junction — Bulk staging for TMT rebars, cement, sand, and aggregates.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/patna-hub"
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0A192F] border border-slate-300 text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  Explore Patna Hub & Regional Centers <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Quick Regional Coverage Card */}
            <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-6 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#0A192F]">
                    Regional Operational Status
                  </h3>
                  <p className="text-xs text-slate-500">Live SLA status across Bihar districts</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Active Now
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                {[
                  { region: 'Patna Central Metro', sla: '< 60 Mins Dispatch', status: 'Immediate' },
                  { region: 'Danapur & Bihta Belt', sla: '< 90 Mins Dispatch', status: 'Active' },
                  { region: 'Muzaffarpur Hub', sla: 'Daily Morning Route', status: 'Operational' },
                  { region: 'Gaya & Bodh Gaya', sla: 'Daily Scheduled Route', status: 'Operational' },
                  { region: 'Bhagalpur East Hub', sla: 'Tri-Weekly Logistics', status: 'Operational' },
                  { region: 'Darbhanga & Mithila', sla: 'Direct Farm Influx', status: 'Operational' },
                ].map((hub, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1 shadow-sm">
                    <div className="font-bold text-[#0A192F]">{hub.region}</div>
                    <div className="text-slate-500 text-[11px]">{hub.sla}</div>
                    <div className="text-emerald-700 text-[10px] font-mono font-bold uppercase">{hub.status}</div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-sm">
                <div>
                  <div className="text-xs font-bold text-[#0A192F]">Need Delivery in Another District?</div>
                  <div className="text-[11px] text-slate-500">We arrange custom freight for bulk commercial clients.</div>
                </div>
                <a
                  href="tel:+919430088000"
                  className="px-3.5 py-2 rounded-lg bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs shrink-0"
                >
                  Call Logistics Desk
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Frequently Asked Questions */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-3">
            <span className="text-xs font-bold text-slate-700 uppercase tracking-widest px-3 py-1 rounded bg-slate-200 border border-slate-300">
              Clear & Transparent Governance
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-[#0A192F]">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm">
              Answers regarding our ₹1,999/sq.ft turnkey contracts, wholesale rates, IT SLAs, and Patna response times.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="font-heading font-semibold text-base text-[#0A192F]">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3 shadow-sm">
            <p className="text-sm text-slate-700">
              Have a specific question about your project, bulk order, or institutional tender?
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => onOpenQuoteModal()}
                className="px-5 py-2.5 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
              >
                Inquire With Central Desk
              </button>
              <a
                href="https://wa.me/919430088000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-1.5"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
