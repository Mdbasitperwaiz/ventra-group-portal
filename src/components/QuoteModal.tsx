import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  Send, 
  ShieldCheck,
  Building2,
  Cpu,
  Fish,
  Wrench,
  PartyPopper,
  Hammer,
  HeartPulse
} from 'lucide-react';
import { VerticalId } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVertical?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ 
  isOpen, 
  onClose, 
  initialVertical = 'realty-infrastructure' 
}) => {
  const [selectedVertical, setSelectedVertical] = useState<VerticalId>(initialVertical as VerticalId);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [locationName, setLocationName] = useState('Patna Metro');
  const [customDetails, setCustomDetails] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [leadRef, setLeadRef] = useState('');

  useEffect(() => {
    if (initialVertical) {
      setSelectedVertical(initialVertical as VerticalId);
    }
  }, [initialVertical]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      const generatedRef = `VNTR-${Math.floor(100000 + Math.random() * 900000)}`;
      setLeadRef(generatedRef);
    }, 700);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setCustomDetails('');
    onClose();
  };

  const verticalsConfig = [
    { id: 'realty-infrastructure', name: 'Turnkey Construction @ ₹1,999/sq.ft', icon: Building2, color: '#B8860B' },
    { id: 'it-solutions', name: 'IT Solutions & Custom Software', icon: Cpu, color: '#0284C7' },
    { id: 'fresh-fmcg', name: 'Fresh FMCG & Wholesale Supply', icon: Fish, color: '#059669' },
    { id: 'facility-services', name: 'Facility Care (AC, RO, Manpower)', icon: Wrench, color: '#0284C7' },
    { id: 'events-hospitality', name: 'Events & Luxury Hospitality', icon: PartyPopper, color: '#DB2777' },
    { id: 'building-materials', name: 'Bulk Building Materials Supply', icon: Hammer, color: '#D97706' },
    { id: 'ventures', name: 'Healthcare & Special Trade', icon: HeartPulse, color: '#0284C7' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="p-5 sm:p-6 bg-[#0A192F] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/10 flex items-center justify-center text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-lg text-white">
                Ventra Central Inquiry & Booking Desk
              </h2>
              <p className="text-xs text-slate-300">
                Patna Corporate Hub • Instant Routing to Division Head
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSuccess ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-800 uppercase tracking-widest px-3 py-1 rounded bg-slate-100 border border-slate-200">
                  REF: {leadRef}
                </span>
                <h3 className="font-heading font-bold text-2xl text-[#0A192F] mt-3">
                  Inquiry Dispatched to Patna Division Desk
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                  Thank you, <strong className="text-slate-900">{fullName}</strong>. Your requirement for{' '}
                  <strong className="text-blue-900">{selectedVertical.replace('-', ' ')}</strong> has been prioritized. Our regional desk officer will contact you at <strong className="text-slate-900">{phone}</strong> within 30 minutes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2 text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Area:</span>
                  <span className="text-slate-900 font-semibold">{locationName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Lead Status:</span>
                  <span className="text-emerald-700 font-bold">Priority Fast-Track</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Central Helpline:</span>
                  <span className="text-[#0A192F] font-mono font-bold">+91-94300-88000</span>
                </div>
              </div>

              <div className="flex justify-center gap-4 pt-2">
                <a
                  href={`https://wa.me/919430088000?text=Hello%20Ventra%20Group,%20I%20just%20submitted%20inquiry%20${leadRef}%20for%20${selectedVertical}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-md cursor-pointer"
                >
                  Confirm on WhatsApp Now
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Vertical Selector Tabs */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wider">
                  Select Business Division
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {verticalsConfig.map((item) => {
                    const isCurrent = selectedVertical === item.id;
                    const Icon = item.icon;
                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setSelectedVertical(item.id as VerticalId)}
                        className={`p-2.5 rounded-xl text-left border text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                          isCurrent 
                            ? 'bg-slate-100 border-[#0A192F] text-[#0A192F] shadow-sm' 
                            : 'bg-white border-slate-200 text-slate-600 hover:text-black hover:bg-slate-50'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" style={{ color: item.color }} />
                        <span className="truncate">{item.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Helper Note */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs flex items-center justify-between text-slate-700">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  {selectedVertical === 'realty-infrastructure' && 'Includes Free Site Inspection & Cost Estimate at ₹1,999/sq.ft'}
                  {selectedVertical === 'it-solutions' && 'Includes Free 30-Min Architecture Discovery Session'}
                  {selectedVertical === 'fresh-fmcg' && 'Commercial wholesale morning delivery slot'}
                  {selectedVertical === 'facility-services' && 'Immediate emergency dispatch within 60 minutes in Patna'}
                  {selectedVertical === 'events-hospitality' && 'Comprehensive decor, acoustic & catering quote'}
                  {selectedVertical === 'building-materials' && 'Factory-direct wholesale billing for TMT, cement & sand'}
                  {selectedVertical === 'ventures' && 'Institutional distributor partnership & healthcare supplies'}
                </span>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ramesh Chandra Verma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#0A192F] focus:outline-none focus:ring-1 focus:ring-[#0A192F]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number (WhatsApp Active) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#0A192F] focus:outline-none focus:ring-1 focus:ring-[#0A192F]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#0A192F] focus:outline-none focus:ring-1 focus:ring-[#0A192F]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    City / Location in Bihar *
                  </label>
                  <input
                    type="text"
                    required
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                    placeholder="e.g. Bailey Road, Danapur, Kankarbagh"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#0A192F] focus:outline-none focus:ring-1 focus:ring-[#0A192F]"
                  />
                </div>
              </div>

              {/* Requirement Details */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Describe Your Requirement / Estimated Scope
                </label>
                <textarea
                  rows={3}
                  value={customDetails}
                  onChange={(e) => setCustomDetails(e.target.value)}
                  placeholder="Please mention specific details, quantities, or preferred inspection date/time..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:border-[#0A192F] focus:outline-none focus:ring-1 focus:ring-[#0A192F]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="tel:+919430088000"
                  className="text-xs text-[#0A192F] hover:underline flex items-center gap-1.5 font-bold"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" /> Helpline: +91-94300-88000
                </a>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 disabled:opacity-50 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    'Routing Request...'
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Submit Priority Request
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
