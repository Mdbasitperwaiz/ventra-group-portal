import React, { useState } from 'react';
import { 
  Wrench, 
  Droplets, 
  Users, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  AlertTriangle, 
  Download
} from 'lucide-react';

interface FacilityServicesPageProps {
  onOpenQuoteModal: (vertical?: string) => void;
}

export const FacilityServicesPage: React.FC<FacilityServicesPageProps> = ({ onOpenQuoteModal }) => {
  const [techIssue, setTechIssue] = useState('AC Not Cooling / Gas Leak');
  const [techName, setTechName] = useState('');
  const [techPhone, setTechPhone] = useState('');
  const [techArea, setTechArea] = useState('Boring Road, Patna');
  const [urgentTime, setUrgentTime] = useState('Immediate (<60 Mins)');
  const [emergencySubmitted, setEmergencySubmitted] = useState(false);

  const handleEmergencySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmergencySubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      
      {/* Hero Banner - Premium White */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-2 text-blue-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Wrench className="w-4 h-4" /> Ventra Facility & On-Demand Urban Maintenance
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0A192F] tracking-tight leading-[1.15] max-w-4xl">
            On-Demand Home & Facility Care You Can Rely On
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mt-5 leading-relaxed">
            Certified AC technicians, commercial RO purification experts, deep home sanitization, and verified facility manpower across Patna. Backed by guaranteed SLAs, transparent rate cards, and background-checked technicians.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-8">
            <a
              href="#emergency"
              className="px-6 py-3.5 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
            >
              <Clock className="w-4 h-4 text-amber-400" /> Book A Technician in 60s
            </a>
            <a
              href="#amc"
              className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 transition-colors shadow-sm"
            >
              Corporate Facility AMC Plans
            </a>
            <a
              href="tel:+919430088000"
              className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Phone className="w-4 h-4" /> Urgent Help: +91-94300-88000
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-black text-[#0A192F] font-mono">&lt; 60 Mins</div>
              <div className="text-xs text-slate-500 mt-1">Average Patna Emergency TAT</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#0A192F] font-mono">450+</div>
              <div className="text-xs text-slate-500 mt-1">Verified Technicians on Field</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#0A192F] font-mono">30 Days</div>
              <div className="text-xs text-slate-500 mt-1">Service Warranty on Repairs</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#0A192F] font-mono">100%</div>
              <div className="text-xs text-slate-500 mt-1">Police & Skill Verified Staff</div>
            </div>
          </div>

        </div>
      </section>

      {/* Emergency 30-Second Booking Form */}
      <section id="emergency" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" /> Instant Patna Municipal Dispatch
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0A192F] mb-2">
              Emergency Technician Request (30-Second Form)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-8">
              Experiencing an AC breakdown, sudden water pipe burst, or RO failure? Submit below for immediate dispatch.
            </p>

            {emergencySubmitted ? (
              <div className="p-8 text-center space-y-4 bg-emerald-50 border border-emerald-200 rounded-2xl max-w-md mx-auto">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-heading font-bold text-xl text-slate-900">Technician Dispatched!</h3>
                <p className="text-xs text-slate-600">
                  A certified <strong className="text-slate-900">{techIssue}</strong> specialist has been assigned to <strong className="text-slate-900">{techArea}</strong>. You will receive an arrival call on <strong className="text-slate-900">{techPhone}</strong> within 10 minutes.
                </p>
                <div className="pt-2">
                  <a
                    href="tel:+919430088000"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A192F] text-white font-bold text-xs"
                  >
                    Track Dispatch via Central Desk
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEmergencySubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 uppercase tracking-wider mb-2">
                    1. Select Service / Issue Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      'AC Not Cooling / Gas Leak',
                      'RO Filter / Low TDS Fault',
                      'Electric Short / MCB Trip',
                      'Plumbing Leak / Motor Fault',
                    ].map((issue) => (
                      <button
                        type="button"
                        key={issue}
                        onClick={() => setTechIssue(issue)}
                        className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                          techIssue === issue 
                            ? 'bg-[#0A192F] border-[#0A192F] text-white font-bold' 
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        {issue}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={techName}
                      onChange={(e) => setTechName(e.target.value)}
                      placeholder="e.g. Alok Roy"
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={techPhone}
                      onChange={(e) => setTechPhone(e.target.value)}
                      placeholder="+91 94300 XXXXX"
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Patna Locality / Address *</label>
                    <input
                      type="text"
                      required
                      value={techArea}
                      onChange={(e) => setTechArea(e.target.value)}
                      placeholder="e.g. Boring Road, Bailey Road, Kankarbagh"
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Target Arrival Window</label>
                    <select
                      value={urgentTime}
                      onChange={(e) => setUrgentTime(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm"
                    >
                      <option value="Immediate (<60 Mins)">Immediate (&lt;60 Mins Emergency)</option>
                      <option value="Today Afternoon (2 PM - 5 PM)">Today Afternoon (2 PM - 5 PM)</option>
                      <option value="Tomorrow Morning (9 AM - 12 PM)">Tomorrow Morning (9 AM - 12 PM)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-transform active:scale-95 cursor-pointer mt-2"
                >
                  Confirm Instant Technician Booking (Fixed Rate Guarantee)
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* 4 Core Maintenance Offerings */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest px-3 py-1 rounded bg-blue-50 border border-blue-200">
              Verified Urban Services
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A192F]">
              Specialized Care Divisions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Wrench,
                title: 'AC Servicing & Overhauls',
                desc: 'High-pressure foam jet wash, electronic leak detector testing, OEM pure refrigerant gas refilling (R32/R410A), inverter PCB repairs, and complete copper piping.',
                price: 'Jet Wash from ₹499'
              },
              {
                icon: Droplets,
                title: 'Water Purification (RO)',
                desc: 'Commercial & residential RO service, genuine Dow Filmtec / CSM reverse osmosis membrane replacement, sediment/carbon filter overhaul, TDS tuning.',
                price: 'Complete Service from ₹399'
              },
              {
                icon: Users,
                title: 'Verified Manpower Staffing',
                desc: 'Full-time and shift-basis certified electricians, plumbers, masons, security personnel, and facility supervisors for residential societies and corporate offices.',
                price: 'Daily & Monthly Contracts'
              },
              {
                icon: Sparkles,
                title: 'Deep Sanitization & Pest Care',
                desc: 'Hospital-grade surface sanitization, automated hot water extraction for sofas/carpets, kitchen degreasing, and eco-friendly herbal termite and pest eradication.',
                price: 'Full Home from ₹1,299'
              }
            ].map((serv, idx) => {
              const Icon = serv.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 hover:border-slate-400 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-[#0A192F] group-hover:text-blue-900 transition-colors">
                      {serv.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {serv.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[#0A192F] font-bold">{serv.price}</span>
                    <button
                      onClick={() => onOpenQuoteModal('facility-services')}
                      className="text-slate-500 hover:text-black font-semibold cursor-pointer"
                    >
                      Book →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Corporate AMC Module */}
      <section id="amc" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-bold text-blue-800 uppercase tracking-widest px-3 py-1 rounded bg-blue-50 border border-blue-200">
                Institutional Care
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                Corporate Facility AMC (Annual Maintenance Contracts)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Preventive scheduled maintenance for corporate offices, hospitals, shopping complexes, and educational institutions in Patna.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  tier: 'Silver Care AMC',
                  bestFor: 'Offices (1,000 - 3,000 sq ft)',
                  visits: 'Quarterly Scheduled Visits',
                  features: ['4x AC wet services/year', 'Quarterly RO filter change', 'Electrical safety audit', '4-hour emergency response SLA']
                },
                {
                  tier: 'Gold Facility AMC',
                  bestFor: 'Enterprises & Banks (3k - 10k sq ft)',
                  visits: 'Monthly Preventive Audits',
                  features: ['Unlimited breakdown visits', 'Comprehensive AC + RO spares', 'Deep carpet & tile sanitization', 'Dedicated account supervisor']
                },
                {
                  tier: 'Platinum Comprehensive',
                  bestFor: 'Hospitals & Commercial Hubs',
                  visits: 'Daily On-Site Staffing',
                  features: ['Full-time stationed technician', 'HVAC chiller plant monitoring', 'Plumbing & diesel generator AMC', 'Zero downtime SLA agreement']
                }
              ].map((amc, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-400 transition-colors">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#0A192F]">{amc.tier}</h3>
                    <div className="text-xs text-blue-800 font-bold mt-0.5">{amc.bestFor}</div>
                    <div className="text-[11px] text-slate-500 font-mono mt-2 pb-3 border-b border-slate-200">{amc.visits}</div>

                    <ul className="space-y-2 pt-3 text-xs text-slate-700">
                      {amc.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-200">
                    <button
                      onClick={() => onOpenQuoteModal('facility-services')}
                      className="w-full py-2.5 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Request AMC Proposal
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => alert("Downloading Ventra_Facility_Corporate_AMC_Guide.pdf...")}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0A192F] hover:underline cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-600" /> Download Complete Corporate AMC SLA Catalog (PDF)
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
