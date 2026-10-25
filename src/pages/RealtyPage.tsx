import React, { useState } from 'react';
import { 
  Building2, 
  Hammer, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Phone,
  Home,
  Layers,
  Wrench,
  Paintbrush,
  Sparkles,
  Calculator,
  Compass,
  FileCheck2,
  HardHat,
  MessageSquare
} from 'lucide-react';
import { CONSTRUCTION_INCLUSIONS } from '../data/mockData';

interface RealtyPageProps {
  onOpenQuoteModal: (vertical?: string) => void;
}

export const RealtyPage: React.FC<RealtyPageProps> = ({ onOpenQuoteModal }) => {
  // Calculator State
  const [sqft, setSqft] = useState<number>(1800);
  const [floors, setFloors] = useState<number>(2);
  const [finishQuality, setFinishQuality] = useState<'standard' | 'premium' | 'luxury'>('standard');
  const BASE_RATE = 1900; // Starting rate: ₹1,900 per sq. ft.

  const qualityMultiplier = finishQuality === 'luxury' ? 1.25 : finishQuality === 'premium' ? 1.12 : 1.0;
  const effectiveRate = Math.round(BASE_RATE * qualityMultiplier);
  const totalCost = sqft * effectiveRate;
  
  const structureCost = Math.round(totalCost * 0.42);
  const finishingCost = Math.round(totalCost * 0.24);
  const interiorsCost = Math.round(totalCost * 0.18);
  const mepCost = Math.round(totalCost * 0.16);

  // Construction Enquiry Form State
  const [enqName, setEnqName] = useState('');
  const [enqPhone, setEnqPhone] = useState('');
  const [enqLocation, setEnqLocation] = useState('');
  const [enqArea, setEnqArea] = useState('1800');
  const [enqFloors, setEnqFloors] = useState('G + 1 Floor');
  const [enqBuildingType, setEnqBuildingType] = useState('Residential Independent House');
  const [enqRequirements, setEnqRequirements] = useState('');
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);

  // Materials Sourcing State
  const [matTmtTons, setMatTmtTons] = useState(15);
  const [matCementBags, setMatCementBags] = useState(300);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySubmitted(true);
  };

  // WhatsApp quick quote URL
  const generateWhatsAppUrl = () => {
    const text = `*BRENTRA CONSTRUCTION ENQUIRY*%0A` +
      `--------------------------------%0A` +
      `*Name:* ${enqName || 'Prospective Client'}%0A` +
      `*Phone:* ${enqPhone || 'Not provided'}%0A` +
      `*Location:* ${enqLocation || 'Patna/Bihar'}%0A` +
      `*Est. Area:* ${sqft} sq.ft (${floors} Floors)%0A` +
      `*Est. Base Budget:* ₹${totalCost.toLocaleString('en-IN')}%0A` +
      `*Type:* ${enqBuildingType}%0A` +
      `*Notes:* ${encodeURIComponent(enqRequirements || 'Need complete turnkey construction quotation')}`;
    return `https://wa.me/919142144940?text=${text}`;
  };

  // Verified Brand Partners from Pamphlet
  const brands = [
    { name: 'Tata Steel', tag: '550D Rebars' },
    { name: 'UltraTech Cement', tag: '53 Grade' },
    { name: 'Kajaria', tag: 'Vitrified Tiles' },
    { name: 'Asian Paints', tag: 'Royale Emulsion' },
    { name: 'Havells', tag: 'Wires & Switches' },
    { name: 'Jaquar', tag: 'Bath Fittings' },
    { name: 'Cera', tag: 'Sanitaryware' },
    { name: 'Hindware', tag: 'Kitchen & Bath' },
    { name: 'Astral Pipes', tag: 'CPVC Plumbing' },
    { name: 'Birla White', tag: 'Wall Putty' },
    { name: 'Finolex', tag: 'Concealed Wiring' },
    { name: 'Legrand', tag: 'Modular MCBs' },
    { name: 'Wipro', tag: 'Architectural LED' },
    { name: 'V-Guard', tag: 'Inverter & Cabling' }
  ];

  // Specific Room Showcase
  const roomShowcase = [
    { name: 'Living Room', desc: 'False ceiling with ambient LED lighting, Vitrified tile flooring, Asian Paints Royale finish' },
    { name: 'Modular Kitchen', desc: 'Granite countertops, soft-close cabinets, SS sink, ceramic wall tiles up to 2 ft.' },
    { name: 'Master Bedroom', desc: 'Wooden-look tiles or premium vitrified tiles, AC concealed points, designer doors' },
    { name: 'Designer Bathroom', desc: 'Jaquar / Cera diverters, anti-skid floor tiles, 7-ft glazed wall tiles, branded sanitaryware' },
    { name: 'Staircase & Railing', desc: 'Granite steps with stainless steel / toughened glass railings, safety landing' },
    { name: 'Modern Exterior', desc: 'Elevation design, exterior weather-proof apex paint, boundary wall gate & compound paving' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800">
      
      {/* Hero Banner - Complete Home Construction */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold uppercase tracking-widest">
              <Building2 className="w-4 h-4 text-amber-600" /> Brentra Construction Services
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-widest">
              <HardHat className="w-3.5 h-3.5 text-blue-700" /> Plan • Build • Deliver
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0A192F] tracking-tight leading-[1.12] max-w-4xl">
            Complete Home Construction Starting at{' '}
            <span className="text-amber-800 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200 inline-block my-1 font-mono">
              ₹1,900 / sq. ft.
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-slate-700 font-semibold mt-3">
            पूरा घर बनवाइए – सब कुछ एक ही कीमत में!
          </p>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mt-3 leading-relaxed">
            From foundation to finish, Brentra Ventures is your trusted partner in residential and commercial building construction across Patna and Bihar. Structural integrity, branded materials, and on-time turnkey delivery guaranteed.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-8">
            <a
              href="#calculator"
              className="px-6 py-3.5 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Calculate Construction Cost</span>
            </a>
            <a
              href="#enquiry"
              className="px-5 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors flex items-center gap-2"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Get Detailed Quotation</span>
            </a>
            <a
              href="tel:9065296294"
              className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 transition-colors shadow-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-600" />
              <span>Call: 9065296294 / 9142144940</span>
            </a>
          </div>

          {/* Core Pillars */}
          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-[#0A192F] font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-amber-600" /> Strong Structure
              </div>
              <div className="text-xs text-slate-500 mt-1">Long Life Seismic Safe RCC with 550D TMT Steel</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-[#0A192F] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Premium Materials
              </div>
              <div className="text-xs text-slate-500 mt-1">100% Genuine Branded Cement, Tiles & Fittings</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-[#0A192F] font-bold text-sm">
                <Home className="w-4 h-4 text-blue-700" /> Turnkey Solution
              </div>
              <div className="text-xs text-slate-500 mt-1">From Architectural Plan to Ready Key Handover</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-[#0A192F] font-bold text-sm">
                <Sparkles className="w-4 h-4 text-purple-600" /> On-Time Delivery
              </div>
              <div className="text-xs text-slate-500 mt-1">Milestone Timeline with Zero Contractor Delays</div>
            </div>
          </div>

        </div>
      </section>

      {/* 7 Comprehensive Construction Services */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest px-3 py-1 rounded bg-amber-50 border border-amber-200">
              Complete Capabilities
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A192F]">
              End-to-End Construction Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every phase of building your dream home or commercial infrastructure handled by licensed civil engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Home,
                title: 'Complete Home Construction',
                desc: 'Turnkey residential home building from initial soil test and excavation to foundation, RCC columns, brickwork, plaster, flooring, and final housewarming handover.',
                highlights: ['Architectural 2D/3D floor plans', 'Earthquake-resistant RCC structure', 'Complete waterproofing', 'Ready-to-move key handover']
              },
              {
                icon: Building2,
                title: 'Residential & Commercial Building Construction',
                desc: 'Multi-storey apartments, commercial shopping complexes, duplex villas, institutional buildings, and corporate towers built with municipal sanction compliance.',
                highlights: ['Commercial grade column spans', 'Heavy load-bearing basements', 'Fire & safety norm compliance', 'Lift shaft & staircase execution']
              },
              {
                icon: Layers,
                title: 'Foundation, Brickwork & Structural Work',
                desc: 'Precision structural civil engineering with Tata / Jindal 550D TMT steel, UltraTech 53-grade cement, first-class red clay bricks, and M20/M25 machine-mix concrete.',
                highlights: ['Isolated & raft footings', 'Plinth beam & DPC damp-proofing', 'First-class red kiln bricks', 'Lintel & roof slab casting']
              },
              {
                icon: Wrench,
                title: 'Electrical & Plumbing Work',
                desc: 'Concealed Finolex / Havells electrical conduits, modular switches, and Astral CPVC/UPVC water supply pipelines with zero joint-leakage assurance.',
                highlights: ['Concealed copper wiring with MCB protection', 'Dual pipe plumbing (hot & cold)', 'Drainage & sewage sump connections', 'Overhead tank & booster motor piping']
              },
              {
                icon: Paintbrush,
                title: 'Flooring, Painting & Finishing',
                desc: 'Premium vitrified Kajaria/Somany floor tiles, granite staircase steps, 2 coats of Birla White putty, primer, and Asian Paints Royale luxury emulsion.',
                highlights: ['High-gloss & matte vitrified tiles', 'Granite kitchen platforms & window sills', 'Asian Paints interior & exterior apex', 'Designer flush doors & hardware']
              },
              {
                icon: Sparkles,
                title: 'Interior Design & Renovation',
                desc: 'Modular kitchen with soft-close drawers, designer false ceilings with LED cove lighting, customized wardrobes, wall paneling, and old home remodeling.',
                highlights: ['Marine-grade plywood modular kitchen', 'POP / Gypsum false ceilings', 'Modern bathroom remodeling', 'Structural modifications & room extensions']
              },
              {
                icon: Compass,
                title: 'Turnkey Construction Solutions',
                desc: 'Single-point accountability. You provide the plot, and Brentra delivers a completed, fully finished building with transparent milestone payment schedules.',
                highlights: ['Fixed price guarantee — zero hidden costs', 'Daily site progress tracking', 'Experienced on-site civil supervisors', 'Full structural warranty & documentation']
              }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#0A192F] mb-2">{service.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">{service.desc}</p>
                    <ul className="space-y-1.5 pt-3 border-t border-slate-200 text-xs text-slate-700">
                      {service.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-5 mt-4 border-t border-slate-200">
                    <a
                      href="#enquiry"
                      className="text-xs font-bold text-[#0A192F] hover:text-amber-700 flex items-center gap-1"
                    >
                      Inquire for this Service <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic Construction Cost Calculator */}
      <section id="calculator" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest px-3 py-1 rounded bg-amber-50 border border-amber-200">
              Interactive Estimator
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A192F]">
              Construction Cost Calculator (Base Rate: ₹1,900 / sq. ft.)
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Select your total built-up area and finishing grade to calculate an instant preliminary estimate.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Slider & Controls (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Total Construction Area (Built-Up)
                    </label>
                    <span className="text-2xl font-heading font-black text-[#0A192F] font-mono">
                      {sqft.toLocaleString('en-IN')} <span className="text-xs text-slate-500">sq. ft.</span>
                    </span>
                  </div>

                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="50"
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0A192F]"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                    <span>500 sq.ft (Single Unit)</span>
                    <span>2,000 sq.ft (G+1 Home)</span>
                    <span>10,000 sq.ft (Multi-Storey)</span>
                  </div>
                </div>

                {/* Floors */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Number of Floors
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { floors: 1, label: 'Ground Floor' },
                      { floors: 2, label: 'G + 1 Floor' },
                      { floors: 3, label: 'G + 2 Floors' },
                      { floors: 4, label: 'G + 3 Floors' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.floors}
                        onClick={() => setFloors(item.floors)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          floors === item.floors 
                            ? 'bg-[#0A192F] border-[#0A192F] text-white font-bold shadow-sm' 
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="text-xs">{item.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Finishing Quality */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Finishing Specification Package
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'standard', name: 'Standard Turnkey', rate: '₹1,900/sq.ft', desc: 'Base turn-key ready' },
                      { id: 'premium', name: 'Premium Luxury', rate: '₹2,128/sq.ft', desc: 'Granite & teackwood finish' },
                      { id: 'luxury', name: 'Royal Architectural', rate: '₹2,375/sq.ft', desc: 'Italian marble & smart home' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setFinishQuality(item.id as any)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          finishQuality === item.id 
                            ? 'bg-amber-50 border-amber-400 text-amber-900 font-bold' 
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="text-xs font-bold">{item.name}</div>
                        <div className="text-[11px] font-mono text-slate-600 mt-0.5">{item.rate}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Itemized Allocation Breakdown */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Stage-Wise Allocation:
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="flex justify-between text-slate-600 mb-1">
                        <span>1. RCC Foundation, Steel & Structural Masonry (42%)</span>
                        <span className="font-mono font-bold text-[#0A192F]">₹{structureCost.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#0A192F] h-full rounded-full" style={{ width: '42%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-600 mb-1">
                        <span>2. Flooring, Granite & Joinery (24%)</span>
                        <span className="font-mono font-bold text-[#0A192F]">₹{finishingCost.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-600 h-full rounded-full" style={{ width: '24%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-600 mb-1">
                        <span>3. Turnkey Interiors & Modular Kitchen (18%)</span>
                        <span className="font-mono font-bold text-[#0A192F]">₹{interiorsCost.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full rounded-full" style={{ width: '18%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-600 mb-1">
                        <span>4. Finolex Electrical & Concealed Plumbing (16%)</span>
                        <span className="font-mono font-bold text-[#0A192F]">₹{mepCost.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full rounded-full" style={{ width: '16%' }} />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Cost Summary Box (5 cols) */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-center space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-mono font-bold uppercase tracking-widest">
                    Starting @ ₹{effectiveRate} / sq.ft
                  </span>

                  <div className="mt-4">
                    <div className="text-xs text-slate-500">Estimated Construction Investment</div>
                    <div className="text-3xl sm:text-4xl font-heading font-black text-[#0A192F] tracking-tight mt-1 font-mono">
                      ₹{totalCost.toLocaleString('en-IN')}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      (For {sqft.toLocaleString('en-IN')} sq. ft. across {floors} {floors === 1 ? 'Floor' : 'Floors'})
                    </div>
                  </div>

                  {/* Mandatory Clear Disclaimer */}
                  <div className="mt-5 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-left text-[11px] text-amber-900 leading-relaxed">
                    <strong>Note:</strong> Starting rate is ₹1,900 per sq. ft. as a preliminary base rate. The final quotation depends on specific soil conditions, structural design, material selections, architectural finishing, and project requirements.
                  </div>

                  <div className="mt-4 p-4 rounded-xl bg-white border border-slate-200 text-left text-xs space-y-2 text-slate-700 shadow-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Free structural architectural floor plan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Free soil load-bearing calculation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>10-Year structural guarantee on RCC</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="#enquiry"
                    className="w-full py-3.5 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider shadow-md block transition-all"
                  >
                    Lock This Estimate & Request Site Visit
                  </a>
                  <a
                    href="tel:9065296294"
                    className="text-xs text-[#0A192F] hover:underline flex items-center justify-center gap-1.5 font-bold"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" /> Helpline: 9065296294 / 9142144940
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Room Showcase & Finishing Quality (Living Room, Kitchen, Bedroom, Bathroom, Staircase, Exterior) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest px-3 py-1 rounded bg-amber-50 border border-amber-200">
              Premium Workmanship
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A192F]">
              Your Dream Home Room by Room
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every corner of your residence finished with precision, branded materials, and modern architectural aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomShowcase.map((room, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-sm transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-bold text-lg text-[#0A192F]">{room.name}</h3>
                  <span className="text-[11px] font-mono font-bold text-amber-700 px-2 py-0.5 rounded bg-amber-50 border border-amber-200">
                    Included @ ₹1,900
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{room.desc}</p>
              </div>
            ))}
          </div>

          {/* Branded Products Section */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                We Use Only Genuine Products From Leading Brands
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {brands.map((b, bi) => (
                <div key={bi} className="p-3.5 rounded-xl bg-white border border-slate-200 text-center shadow-sm hover:border-amber-400 transition-colors">
                  <div className="font-bold text-xs text-[#0A192F]">{b.name}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{b.tag}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Construction Enquiry Form (Dedicated) */}
      <section id="enquiry" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest px-3 py-1 rounded bg-amber-50 border border-amber-200">
                Direct Civil Engineer Connect
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                Construction Project Enquiry Form
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Share your plot details and building requirements. A senior civil engineer from Brentra Ventures will visit your site with soil testing instruments and prepare a detailed cost blueprint.
              </p>
            </div>

            {enquirySubmitted ? (
              <div className="p-8 text-center space-y-4 bg-emerald-50 border border-emerald-200 rounded-2xl max-w-md mx-auto">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-heading font-bold text-xl text-slate-900">Enquiry Dispatched Successfully!</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Thank you, <strong className="text-slate-900">{enqName}</strong>. Our Civil Engineering Lead will contact you on <strong className="text-slate-900">{enqPhone}</strong> within 30 minutes to schedule your site inspection at <strong className="text-slate-900">{enqLocation}</strong>.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" /> Confirm on WhatsApp
                  </a>
                  <button
                    onClick={() => setEnquirySubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={enqName}
                      onChange={(e) => setEnqName(e.target.value)}
                      placeholder="e.g. Rameshwar Kumar"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#0A192F]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={enqPhone}
                      onChange={(e) => setEnqPhone(e.target.value)}
                      placeholder="e.g. 9065296294"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#0A192F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Plot Location (Patna/Bihar) *</label>
                    <input
                      type="text"
                      required
                      value={enqLocation}
                      onChange={(e) => setEnqLocation(e.target.value)}
                      placeholder="e.g. Bailey Road / Danapur / Bihta"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#0A192F]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Construction Area (sq. ft.) *</label>
                    <input
                      type="number"
                      required
                      value={enqArea}
                      onChange={(e) => setEnqArea(e.target.value)}
                      placeholder="e.g. 1800"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#0A192F]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Number of Floors *</label>
                    <select
                      value={enqFloors}
                      onChange={(e) => setEnqFloors(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#0A192F]"
                    >
                      <option value="Ground Floor Only">Ground Floor Only</option>
                      <option value="G + 1 Floor">G + 1 Floor</option>
                      <option value="G + 2 Floors">G + 2 Floors</option>
                      <option value="G + 3 Floors">G + 3 Floors</option>
                      <option value="G + 4 Floors or More">G + 4 Floors or More</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Building Type *</label>
                  <select
                    value={enqBuildingType}
                    onChange={(e) => setEnqBuildingType(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#0A192F]"
                  >
                    <option value="Residential Independent House">Residential Independent House</option>
                    <option value="Duplex / Villa Construction">Duplex / Villa Construction</option>
                    <option value="Commercial Complex / Showroom">Commercial Complex / Showroom</option>
                    <option value="Apartment / Multi-Unit Complex">Apartment / Multi-Unit Complex</option>
                    <option value="Structural Renovation & Interior">Structural Renovation & Interior</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Specific Requirements / Notes</label>
                  <textarea
                    rows={3}
                    value={enqRequirements}
                    onChange={(e) => setEnqRequirements(e.target.value)}
                    placeholder="Tell us about your plot dimensions, timeline, architectural preferences or specific materials required..."
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:border-[#0A192F]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-transform active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <FileCheck2 className="w-4 h-4 text-amber-400" />
                    <span>Submit Construction Enquiry & Request Free Site Inspection</span>
                  </button>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-amber-600" /> Direct Cell: 9065296294 / +91 91421 44940
                  </div>
                  <div>
                    Office: Preven Vila, Flat No. 34, New Khajoorbana, Patna 800006
                  </div>
                </div>
              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};
