import React, { useState } from 'react';
import { 
  Cpu, 
  Code2, 
  Smartphone, 
  Bot, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Server
} from 'lucide-react';

interface ITSolutionsPageProps {
  onOpenQuoteModal: (vertical?: string) => void;
}

export const ITSolutionsPage: React.FC<ITSolutionsPageProps> = ({ onOpenQuoteModal }) => {
  const [platform, setPlatform] = useState<'web' | 'mobile' | 'fullstack' | 'ai'>('fullstack');
  const [timeline, setTimeline] = useState<'express' | 'standard' | 'enterprise'>('standard');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'auth', 'payment', 'realtime'
  ]);
  const [estimatorSubmitted, setEstimatorSubmitted] = useState(false);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');

  const [consultDate, setConsultDate] = useState('2026-10-22');
  const [consultTime, setConsultTime] = useState('14:00');
  const [consultBooked, setConsultBooked] = useState(false);

  const platforms = [
    { id: 'web', name: 'Web Application & SaaS', baseCost: 75000, desc: 'High-performance React/Next.js responsive cloud app' },
    { id: 'mobile', name: 'Cross-Platform Mobile App', baseCost: 95000, desc: 'Native-feel Flutter / React Native iOS & Android' },
    { id: 'fullstack', name: 'Enterprise Full-Stack Suite', baseCost: 145000, desc: 'Unified Web App + Mobile Apps + Admin ERP Portal' },
    { id: 'ai', name: 'AI Workflows & LLM Automation', baseCost: 120000, desc: 'Custom Agents, RAG Pipelines & Automated Ops' },
  ];

  const featureOptions = [
    { id: 'auth', name: 'Role-Based Access & SSO Auth', cost: 15000 },
    { id: 'payment', name: 'Payment Gateway (Razorpay/Stripe)', cost: 12000 },
    { id: 'realtime', name: 'Real-Time Sync & WebSockets', cost: 20000 },
    { id: 'ai-bot', name: 'Custom AI Assistant / Copilot', cost: 35000 },
    { id: 'analytics', name: 'Advanced BI & Analytics Dashboard', cost: 25000 },
    { id: 'devops', name: 'Kubernetes / AWS Auto-Scaling Setup', cost: 30000 },
  ];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const currentPlatformObj = platforms.find(p => p.id === platform) || platforms[0];
  const featuresTotal = selectedFeatures.reduce((acc, featId) => {
    const feat = featureOptions.find(f => f.id === featId);
    return acc + (feat ? feat.cost : 0);
  }, 0);

  const timelineMultiplier = timeline === 'express' ? 1.25 : timeline === 'enterprise' ? 1.1 : 1.0;
  const estimatedCost = Math.round((currentPlatformObj.baseCost + featuresTotal) * timelineMultiplier);

  const handleEstimatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEstimatorSubmitted(true);
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultBooked(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      
      {/* Hero Banner - Premium White */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex items-center gap-2 text-blue-800 text-xs font-bold uppercase tracking-widest mb-3">
            <Cpu className="w-4 h-4" /> Ventra IT & Digital Engineering Division
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#0A192F] tracking-tight leading-[1.15] max-w-4xl">
            Next-Generation Software Engineering & Enterprise Digital Scale
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mt-5 leading-relaxed">
            From modern cloud architectures and SaaS applications to custom AI pipelines and mobile experiences, Ventra IT delivers rock-solid digital solutions for startups and enterprises across India.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-8">
            <a
              href="#estimator"
              className="px-6 py-3.5 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
            >
              Calculate Project Estimate
            </a>
            <a
              href="#consultation"
              className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-300 transition-colors shadow-sm"
            >
              Book 30-Min Architecture Call
            </a>
            <button
              onClick={() => onOpenQuoteModal('it-solutions')}
              className="px-5 py-3.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold text-xs uppercase tracking-wider border border-blue-200 transition-colors cursor-pointer"
            >
              Request Dedicated Staffing
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-black text-[#0A192F] font-mono">140+</div>
              <div className="text-xs text-slate-500 mt-1">Enterprise Codebases Deployed</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#0A192F] font-mono">99.98%</div>
              <div className="text-xs text-slate-500 mt-1">Cloud Infrastructure Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#0A192F] font-mono">60+</div>
              <div className="text-xs text-slate-500 mt-1">Senior Full-Stack Engineers</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#0A192F] font-mono">ISO 27001</div>
              <div className="text-xs text-slate-500 mt-1">Certified Security Controls</div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Offerings Grid */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest px-3 py-1 rounded bg-blue-50 border border-blue-200">
              Full Lifecycle Engineering
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A192F]">
              Enterprise Software Capabilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Custom-crafted digital products engineered for clean maintainability, military-grade security, and extreme horizontal scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code2,
                title: 'Custom Web & SaaS Engineering',
                desc: 'Full-stack architectures built on Next.js, React, Node.js, Python, and PostgreSQL with atomic design and strict type safety.',
                features: ['Multi-tenant databases', 'Modern UI/UX design', 'Automated CI/CD pipelines', 'High-throughput APIs']
              },
              {
                icon: Smartphone,
                title: 'Mobile Applications (iOS/Android)',
                desc: 'Smooth native and cross-platform mobile apps using Flutter and React Native with offline sync and push notifications.',
                features: ['Biometric authentication', 'Real-time GPS tracking', 'Payment SDK integrations', 'App Store publishing']
              },
              {
                icon: Bot,
                title: 'Business Automation & AI Workflows',
                desc: 'Replace tedious manual administrative overhead with custom LLM copilots, document OCR parsing, and automated CRM workflows.',
                features: ['Enterprise RAG search', 'Custom CRM/ERP workflows', 'WhatsApp Business API bots', 'Automated PDF extraction']
              },
              {
                icon: Server,
                title: 'Cloud DevOps & Dedicated Staffing',
                desc: 'Scalable AWS, GCP, and Azure cloud infrastructure with Terraform IaC, Docker containerization, and dedicated engineer leasing.',
                features: ['24/7 SRE monitoring', 'SOC-2 security hardening', 'Microservice architectures', 'Dedicated tech squad hire']
              }
            ].map((offering, idx) => {
              const Icon = offering.icon;
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
                      {offering.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {offering.desc}
                    </p>

                    <ul className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      {offering.features.map((feat, fIdx) => (
                        <li key={fIdx} className="text-xs text-slate-700 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100">
                    <button
                      onClick={() => onOpenQuoteModal('it-solutions')}
                      className="text-xs font-bold text-[#0A192F] hover:text-blue-900 flex items-center gap-1.5 cursor-pointer"
                    >
                      Inquire About {offering.title.split(' ')[0]} <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Interactive Project Cost Estimator Module */}
      <section id="estimator" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest px-3 py-1 rounded bg-blue-50 border border-blue-200">
              Instant Estimation Engine
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A192F]">
              Interactive Project Cost Estimator
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Configure your platform, modules, and target delivery timeframe for an instantaneous commercial budget estimate.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Configuration Controls (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 1. Platform Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    1. Select Application Architecture
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {platforms.map((p) => {
                      const isSel = platform === p.id;
                      return (
                        <button
                          type="button"
                          key={p.id}
                          onClick={() => setPlatform(p.id as any)}
                          className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            isSel 
                              ? 'bg-[#0A192F] border-[#0A192F] text-white shadow-md' 
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <div className={`text-xs font-bold ${isSel ? 'text-white' : 'text-[#0A192F]'}`}>{p.name}</div>
                          <div className={`text-[11px] mt-1 leading-tight ${isSel ? 'text-slate-300' : 'text-slate-500'}`}>{p.desc}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Feature Add-ons */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    2. Select Architecture Modules & Add-Ons
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {featureOptions.map((feat) => {
                      const isChecked = selectedFeatures.includes(feat.id);
                      return (
                        <button
                          type="button"
                          key={feat.id}
                          onClick={() => toggleFeature(feat.id)}
                          className={`p-2.5 rounded-xl border text-left flex items-center justify-between text-xs transition-all cursor-pointer ${
                            isChecked 
                              ? 'bg-blue-50 border-blue-400 text-blue-900 font-bold' 
                              : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <span>{feat.name}</span>
                          <span className="font-mono text-[11px] opacity-80">+₹{feat.cost.toLocaleString('en-IN')}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 3. Delivery Pace */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    3. Target Delivery Speed
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'standard', name: 'Standard (8-10 Wks)', desc: 'Regular cadence' },
                      { id: 'express', name: 'Express (4-6 Wks)', desc: '2x velocity' },
                      { id: 'enterprise', name: 'Enterprise (Phased)', desc: 'Phased rollout' },
                    ].map((t) => (
                      <button
                        type="button"
                        key={t.id}
                        onClick={() => setTimeline(t.id as any)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          timeline === t.id 
                            ? 'bg-[#0A192F] border-[#0A192F] text-white font-bold' 
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <div className="text-xs font-bold">{t.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Estimate Summary & Submission Card (5 cols) */}
              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs">
                    <span className="text-slate-500 uppercase tracking-wider font-bold">Estimated Budget</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-mono text-[11px] font-bold">
                      Transparent
                    </span>
                  </div>

                  <div className="py-5 text-center">
                    <div className="text-xs text-slate-500 mb-1">Estimated Investment</div>
                    <div className="text-3xl sm:text-4xl font-heading font-black text-[#0A192F] tracking-tight">
                      ₹{estimatedCost.toLocaleString('en-IN')}{' '}
                      <span className="text-xs font-normal text-slate-400 font-mono">+ GST</span>
                    </div>
                    <p className="text-[11px] text-blue-800 mt-2 font-medium">
                      Includes UX wireframing, QA testing, source code ownership & 60 days warranty
                    </p>
                  </div>

                  <div className="space-y-2 text-xs py-3 border-t border-b border-slate-100 text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Architecture:</span>
                      <span className="text-slate-900 font-bold">{currentPlatformObj.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Active Modules:</span>
                      <span className="text-blue-900 font-bold">{selectedFeatures.length} Modules Selected</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">IP Ownership:</span>
                      <span className="text-emerald-700 font-bold">100% Client Owned</span>
                    </div>
                  </div>
                </div>

                {estimatorSubmitted ? (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2 mt-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <div className="text-sm font-bold text-slate-900">Proposal Dispatched!</div>
                    <p className="text-xs text-slate-600">
                      Our Lead Architect will call you at {clientPhone} with the Statement of Work (SOW).
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleEstimatorSubmit} className="space-y-3 mt-4">
                    <div>
                      <input
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Your Name / Company Name"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#0A192F]"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        required
                        value={clientPhone}
                        onChange={(e) => setClientPhone(e.target.value)}
                        placeholder="Phone Number (for SOW dispatch)"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-300 text-xs text-slate-900 focus:outline-none focus:border-[#0A192F]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-transform active:scale-95 cursor-pointer"
                    >
                      Lock This Estimate & Get SOW
                    </button>
                  </form>
                )}

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Consultation Scheduling Module */}
      <section id="consultation" className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-amber-600" /> Direct Calendar Access
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0A192F]">
                  Book a 30-Minute Architecture Consultation
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Discuss database design, cloud cost optimization, tech stack feasibility, or system migration directly with Er. Ritesh Ranjan (Director of Technology) and senior technical leads.
                </p>

                <div className="space-y-2 pt-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Zero obligation technical review
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Google Meet or in-person at Patna HQ
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Actionable system architecture blueprint
                  </div>
                </div>
              </div>

              {/* Consultation Form */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                {consultBooked ? (
                  <div className="text-center py-6 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-heading font-bold text-lg text-slate-900">
                      Consultation Confirmed!
                    </h4>
                    <p className="text-xs text-slate-600">
                      Your session is booked for <strong className="text-slate-900">{consultDate}</strong> at <strong className="text-slate-900">{consultTime} IST</strong>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleConsultSubmit} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Select Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={consultDate}
                        onChange={(e) => setConsultDate(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Select Time Slot (IST)
                      </label>
                      <select
                        value={consultTime}
                        onChange={(e) => setConsultTime(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900"
                      >
                        <option value="11:00">11:00 AM IST</option>
                        <option value="14:00">02:00 PM IST</option>
                        <option value="16:30">04:30 PM IST</option>
                        <option value="18:00">06:00 PM IST</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Topic / Project Brief
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Scaling database to 100k DAU"
                        className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-xs text-slate-900"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#0A192F] hover:bg-[#1E3E62] text-white font-bold text-xs uppercase tracking-wider shadow-md cursor-pointer transition-transform active:scale-95"
                    >
                      Confirm Video Call Slot
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
