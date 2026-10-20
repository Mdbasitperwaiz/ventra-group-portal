import React, { useState } from 'react';
import { 
  Building2, 
  Hammer, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Phone
} from 'lucide-react';
import { CONSTRUCTION_INCLUSIONS } from '../data/mockData';

interface RealtyPageProps {
  onOpenQuoteModal: (vertical?: string) => void;
}

export const RealtyPage: React.FC<RealtyPageProps> = ({ onOpenQuoteModal }) => {
  const [sqft, setSqft] = useState<number>(1800);
  const [floors, setFloors] = useState<number>(2);
  const RATE_PER_SQFT = 1999;

  const totalCost = sqft * RATE_PER_SQFT;
  const structureCost = Math.round(totalCost * 0.40);
  const finishingCost = Math.round(totalCost * 0.25);
  const interiorsCost = Math.round(totalCost * 0.20);
  const mepCost = Math.round(totalCost * 0.15);

  const [plotLocation, setPlotLocation] = useState('Bailey Road, Patna');
  const [plotSize, setPlotSize] = useState('1800 sq ft');
  const [siteDate, setSiteDate] = useState('2026-10-24');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [inspectionSubmitted, setInspectionSubmitted] = useState(false);

  const [matTmtTons, setMatTmtTons] = useState(15);
  const [matCementBags, setMatCementBags] = useState(300);

  const handleInspectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInspectionSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      
      {/* Hero Banner - Premium White */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-widest mb-3">
            <Building2 className="w-4 h-4" /> Ventra Realty & Civil Infrastructure Division
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0A192F] tracking-tight leading-[1.15] max-w-4xl">
            Complete Turnkey Construction @ Flat{' '}
            <span className="text-amber-800 bg-amber-50 px-3 py-1 rounded-xl border border-amber-200 inline-block my-1">
              ₹1,999 / sq. ft.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mt-5 leading-relaxed">
            From seismic-safe RCC foundations to designer false ceilings, modular kitchens, Kajaria tiles & Asian Paints Royale. Predictable, transparent home construction in Bihar with zero hidden fees.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-8">
            <a
              href="#calculator"
              className="px-6 py-3.5 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
            >
              Open Dynamic Sq. Ft. Budget Calculator
            </a>
            <a
              href="#inspection"
              className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 transition-colors shadow-sm"
            >
              Book Free Site Inspection & Soil Test
            </a>
            <a
              href="#materials"
              className="px-5 py-3.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider border border-amber-200 transition-colors"
            >
              Bulk Building Materials Division
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-black text-[#0A192F] font-mono">1.2M+</div>
              <div className="text-xs text-slate-500 mt-1">Turnkey Sq. Ft. Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#0A192F] font-mono">10 Years</div>
              <div className="text-xs text-slate-500 mt-1">Structural Warranty on RCC</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#0A192F] font-mono">₹0</div>
              <div className="text-xs text-slate-500 mt-1">Hidden Escalation Guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#0A192F] font-mono">100%</div>
              <div className="text-xs text-slate-500 mt-1">First-Grade Branded Materials</div>
            </div>
          </div>

        </div>
      </section>

      {/* Dynamic Sq. Ft. Budget Calculator */}
      <section id="calculator" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest px-3 py-1 rounded bg-amber-50 border border-amber-200">
              Interactive Estimator
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A192F]">
              Dynamic Turnkey Budget Calculator
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Slide to your total built-up area to preview your all-inclusive turnkey investment and itemized cost allocation.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Slider & Controls (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                      Built-Up Construction Area
                    </label>
                    <span className="text-xl font-heading font-black text-[#0A192F] font-mono">
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
                    <span>500 sq.ft (Compact Home)</span>
                    <span>2,500 sq.ft (Duplex)</span>
                    <span>10,000 sq.ft (Mansion/Apartment)</span>
                  </div>
                </div>

                {/* Structure Config */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    Structure Configuration
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

                {/* Itemized Cost Breakdown Bars */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Itemized Allocation Breakdown:
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="flex justify-between text-slate-600 mb-1">
                        <span>1. RCC Foundation, Steel & Masonry (40%)</span>
                        <span className="font-mono font-bold text-[#0A192F]">₹{structureCost.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#0A192F] h-full rounded-full" style={{ width: '40%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-600 mb-1">
                        <span>2. Flooring, Granite & Joinery (25%)</span>
                        <span className="font-mono font-bold text-[#0A192F]">₹{finishingCost.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-600 h-full rounded-full" style={{ width: '25%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-600 mb-1">
                        <span>3. Turnkey Interiors & Modular Kitchen (20%)</span>
                        <span className="font-mono font-bold text-[#0A192F]">₹{interiorsCost.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full rounded-full" style={{ width: '20%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-slate-600 mb-1">
                        <span>4. Finolex Electrical & Concealed Plumbing (15%)</span>
                        <span className="font-mono font-bold text-[#0A192F]">₹{mepCost.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-600 h-full rounded-full" style={{ width: '15%' }} />
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Cost Summary Box (5 cols) */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-center space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-mono font-bold uppercase tracking-widest">
                    Fixed Flat Rate ₹1,999 / sq.ft
                  </span>

                  <div className="mt-4">
                    <div className="text-xs text-slate-500">Total Turnkey Investment</div>
                    <div className="text-3xl sm:text-4xl font-heading font-black text-[#0A192F] tracking-tight mt-1 font-mono">
                      ₹{totalCost.toLocaleString('en-IN')}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      (For {sqft.toLocaleString('en-IN')} sq. ft. living space)
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-white border border-slate-200 text-left text-xs space-y-2 text-slate-700 shadow-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Zero architectural drawing charges</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Free soil load-bearing calculation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Milestone-based stage payments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>10-Year written structural warranty</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="#inspection"
                    className="w-full py-3.5 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider shadow-md block transition-all"
                  >
                    Lock This Rate & Book Site Visit
                  </a>
                  <a
                    href="tel:+919430088000"
                    className="text-xs text-[#0A192F] hover:underline flex items-center justify-center gap-1.5 font-bold"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-600" /> Call Construction Cell: +91-94300-88000
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Comprehensive Inclusions Breakdown */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-widest px-3 py-1 rounded bg-amber-50 border border-amber-200">
              Technical Specifications
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A192F]">
              Complete Breakdown of What’s Included in ₹1,999
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every single line item is specified upfront in our legal construction agreement. Zero compromises on brand or grade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONSTRUCTION_INCLUSIONS.map((phase, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                  <h3 className="font-heading font-bold text-lg text-[#0A192F]">
                    {phase.phase}
                  </h3>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200">
                    {phase.badge}
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-slate-700">
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Building Materials Bulk Supply Division */}
      <section id="materials" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
                  <Hammer className="w-3.5 h-3.5 text-amber-600" /> Wholesale Supply Division
                </div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A192F]">
                  Bulk Wholesale Construction Materials Sourcing
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Are you a contractor, institutional builder, or private homeowner doing independent construction? Ventra Group provides factory-direct wholesale truckload deliveries of certified cement, TMT steel, sand, and bricks straight to your site anywhere in Bihar.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-2">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#0A192F]">TMT Rebars</div>
                    <div className="text-slate-500 mt-0.5">Tata / Jindal 550D</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#0A192F]">Branded Cement</div>
                    <div className="text-slate-500 mt-0.5">Ultratech / Ambuja 53</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#0A192F]">Graded Sand</div>
                    <div className="text-slate-500 mt-0.5">Coarse Sone River</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="font-bold text-[#0A192F]">Kiln Bricks</div>
                    <div className="text-slate-500 mt-0.5">First-Class Red Clay</div>
                  </div>
                </div>
              </div>

              {/* Fast Quote Form */}
              <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <h3 className="text-sm font-bold text-[#0A192F] border-b border-slate-200 pb-3 flex items-center justify-between">
                  <span>Request Bulk Material Rate</span>
                  <span className="text-[11px] text-amber-700 font-mono font-bold">Factory Wholesale</span>
                </h3>

                <div className="space-y-3 text-xs">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Estimated TMT Steel (Tons):</label>
                    <input
                      type="number"
                      value={matTmtTons}
                      onChange={(e) => setMatTmtTons(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Cement Bags (Ultratech/Ambuja):</label>
                    <input
                      type="number"
                      value={matCementBags}
                      onChange={(e) => setMatCementBags(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900"
                    />
                  </div>
                  <button
                    onClick={() => onOpenQuoteModal('building-materials')}
                    className="w-full py-3 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                  >
                    Get Today's Wholesale Dispatch Quote
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Book Free Site Inspection Module */}
      <section id="inspection" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-lg">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-widest px-3 py-1 rounded bg-amber-50 border border-amber-200">
                On-Ground Assessment
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                Book Free Site Inspection & Consultation
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                A senior civil engineer from Ventra Realty will visit your plot in Patna or neighboring district with soil analysis instruments.
              </p>
            </div>

            {inspectionSubmitted ? (
              <div className="p-8 text-center space-y-3 bg-emerald-50 border border-emerald-200 rounded-2xl max-w-md mx-auto">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-heading font-bold text-lg text-slate-900">Site Inspection Scheduled!</h3>
                <p className="text-xs text-slate-600">
                  Thank you, <strong className="text-slate-900">{clientName}</strong>. Our Civil Engineer will inspect your plot at <strong className="text-slate-900">{plotLocation}</strong> on <strong className="text-slate-900">{siteDate}</strong>. Confirmation sent to {clientPhone}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInspectionSubmit} className="space-y-4 max-w-xl mx-auto text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Anand Kumar"
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#0A192F]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#0A192F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Plot Location (Patna/Bihar) *</label>
                    <input
                      type="text"
                      required
                      value={plotLocation}
                      onChange={(e) => setPlotLocation(e.target.value)}
                      placeholder="e.g. Danapur, Bihta, Saguna More"
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#0A192F]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Plot Dimensions / Size *</label>
                    <input
                      type="text"
                      required
                      value={plotSize}
                      onChange={(e) => setPlotSize(e.target.value)}
                      placeholder="e.g. 1500 sq ft (30 x 50)"
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#0A192F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Preferred Inspection Date</label>
                  <input
                    type="date"
                    required
                    value={siteDate}
                    onChange={(e) => setSiteDate(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#0A192F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-transform active:scale-95 cursor-pointer"
                >
                  Confirm Free Engineer Site Inspection
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
};
