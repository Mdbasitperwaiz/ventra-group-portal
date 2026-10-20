import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  Pause, 
  Play,
  Cpu,
  Fish,
  Building2,
  Wrench,
  PartyPopper,
  Hammer,
  HeartPulse
} from 'lucide-react';
import { HERO_SLIDES } from '../data/mockData';

const iconMap: Record<string, React.ElementType> = {
  Cpu,
  Fish,
  Building2,
  Wrench,
  PartyPopper,
  Hammer,
  HeartPulse
};

interface HeroCarouselProps {
  onOpenQuoteModal: (vertical?: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onOpenQuoteModal }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const SLIDE_DURATION = 6500;

  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50;
    const step = (intervalTime / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % HERO_SLIDES.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrentSlide((curr) => (curr + 1) % HERO_SLIDES.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((curr) => (curr - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const active = HERO_SLIDES[currentSlide];
  const IconComponent = iconMap[active.iconName] || Cpu;

  return (
    <div 
      className="relative w-full overflow-hidden bg-white select-none border-b border-slate-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Premium White Background Glow & Subtle Geometric Grids */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full blur-[140px] opacity-15 transition-all duration-700"
          style={{ backgroundColor: active.accentColor }}
        />
        <div 
          className="absolute -bottom-32 -right-32 w-[34rem] h-[34rem] rounded-full blur-[160px] opacity-15 transition-all duration-700"
          style={{ backgroundColor: active.accentColor }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      {/* Main Slide Presentation Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:py-16 relative z-10 min-h-[560px] sm:min-h-[600px] flex flex-col justify-between">
        
        {/* Top Badges & Slide Numbering */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm border"
              style={{ 
                backgroundColor: `${active.accentColor}12`, 
                borderColor: `${active.accentColor}30`,
                color: active.accentColor === '#00D2DF' ? '#0369A1' : active.accentColor === '#C5A880' ? '#92400E' : active.accentColor
              }}
            >
              <IconComponent className="w-3.5 h-3.5" />
              {active.tag}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full font-medium">
              <Sparkles className="w-3 h-3 text-amber-500" /> {active.badge}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-slate-400">
              0{currentSlide + 1} <span className="text-slate-300">/</span> 0{HERO_SLIDES.length}
            </span>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              title={isPaused ? "Resume autoplay" : "Pause autoplay"}
              aria-label={isPaused ? "Resume autoplay" : "Pause autoplay"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Slide Content: Hero Headline, Copy, CTAs, and Live Highlight Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
          
          {/* Left Column: Headlines & Call to Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-5xl tracking-tight text-[#0A192F] leading-[1.15]">
              {active.headline.includes('₹1,999') ? (
                <>
                  Complete Turnkey Construction @ Flat{' '}
                  <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-200 inline-block my-1 shadow-sm">
                    ₹1,999 / sq. ft.
                  </span>
                </>
              ) : (
                active.headline
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {active.subtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                to={active.primaryCtaLink}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white transition-all shadow-md hover:shadow-xl active:scale-95 group bg-[#0A192F] hover:bg-[#1E3E62]"
              >
                <span>{active.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              {active.secondaryCtaLink.startsWith('/') ? (
                <Link
                  to={active.secondaryCtaLink}
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-all shadow-sm"
                >
                  {active.secondaryCtaText}
                </Link>
              ) : (
                <button
                  onClick={() => onOpenQuoteModal(active.verticalId)}
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-all shadow-sm cursor-pointer"
                >
                  {active.secondaryCtaText}
                </button>
              )}
            </div>

            {/* Live Operational Highlight Tag */}
            <div className="pt-2 flex items-center gap-2.5 text-xs text-slate-500 font-medium">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Central Patna Hub Live Dispatch: <strong className="text-slate-800">{active.stats.label} — {active.stats.value}</strong></span>
            </div>
          </div>

          {/* Right Column: Visual Feature Showcase & Metric Card (5 cols) */}
          <div className="lg:col-span-5 hidden sm:block">
            <div className="relative p-7 rounded-2xl bg-white border border-slate-200/90 shadow-xl overflow-hidden group">
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 pointer-events-none transition-colors"
                style={{ backgroundColor: active.accentColor }}
              />
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div 
                    className="p-3 rounded-xl shadow-sm"
                    style={{ backgroundColor: `${active.accentColor}15`, color: active.accentColor }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-[#0A192F] uppercase tracking-wider">
                      Ventra {active.verticalId.replace('-', ' ')}
                    </h2>
                    <p className="text-xs text-slate-500">Institutional Excellence in Bihar</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700">
                  Tier-1 Verified
                </span>
              </div>

              {/* Specific Vertical Fast Facts */}
              <div className="py-5 space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Operations Base:</span>
                  <span className="text-[#0A192F] font-semibold">Patna, Danapur & Regional Bihar</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Service SLA:</span>
                  <span className="text-emerald-700 font-bold">100% Guaranteed On-Time</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Scale Milestone:</span>
                  <span className="text-amber-700 font-extrabold">{active.stats.value} {active.stats.label}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500">Governance:</span>
                  <span className="text-blue-900 font-semibold">Ventra Board Directed</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <button
                  onClick={() => onOpenQuoteModal(active.verticalId)}
                  className="text-xs font-bold text-[#0A192F] hover:text-amber-700 flex items-center gap-1.5 cursor-pointer"
                >
                  Direct Dispatch Inquiry <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono font-bold">
                  REF: VT-0{active.id}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Interactive Navigation Strip (Pills & Progress) */}
        <div className="pt-4 space-y-3">
          
          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-1 rounded-full overflow-hidden">
            <div 
              className="h-full transition-all duration-75 ease-linear rounded-full"
              style={{ 
                width: `${progress}%`,
                backgroundColor: active.accentColor
              }}
            />
          </div>

          {/* Controls & Slide Selector Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-black transition-all active:scale-90 cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-black transition-all active:scale-90 cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-500 ml-2 hidden md:inline">
                Click or swipe to explore all 7 business verticals
              </span>
            </div>

            {/* Quick-Jump Tab Buttons */}
            <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto max-w-full pb-1 no-scrollbar">
              {HERO_SLIDES.map((slide, index) => {
                const isCurrent = index === currentSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      isCurrent 
                        ? 'bg-[#0A192F] text-white shadow-md font-bold' 
                        : 'text-slate-600 hover:text-black hover:bg-slate-100 border border-transparent'
                    }`}
                  >
                    <span 
                      className={`w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-amber-400' : 'bg-slate-300'}`} 
                    />
                    <span className="hidden sm:inline">
                      {slide.verticalId === 'realty-infrastructure' 
                        ? 'Realty ₹1,999' 
                        : slide.verticalId.split('-')[0].toUpperCase()}
                    </span>
                    <span className="sm:hidden">0{index + 1}</span>
                  </button>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
