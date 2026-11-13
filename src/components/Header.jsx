import React, { useState, useEffect } from 'react';
import { institutionalMeta, navLinks } from '../data/navigation';
import { MobileNavigation } from './MobileNavigation';

export const Header = ({ onOpenRegister }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'journey', 'challenges', 'rewards', 'impact', 'faqs'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* SECTION 01 — TOP INSTITUTIONAL BAR */}
      <header className="bg-[#071A35] text-clean-white border-b border-white/10 relative z-50 py-2 sm:py-2.5 px-4 sm:px-6">
        {/* Desktop Layout (1024px and above) — 3 Horizontally Aligned Groups */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:items-center w-full max-w-7xl mx-auto">
          {/* Left Group — Autonomous Affiliation */}
          <div className="flex items-center justify-start">
            <span className="inline-flex items-center gap-1.5 font-label-sm text-xs px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-electric-yellow font-bold tracking-tight whitespace-nowrap">
              <span className="material-symbols-outlined text-[15px]">school</span>
              {institutionalMeta.affiliation}
            </span>
          </div>

          {/* Center Group — Accreditation */}
          <div className="flex items-center justify-center gap-2.5 text-xs">
            <span className="inline-flex items-center gap-1 font-label-sm text-xs px-2.5 py-0.5 rounded-lg bg-primary-container/40 text-clean-white font-bold border border-primary-container whitespace-nowrap">
              {institutionalMeta.accreditation}
            </span>
            <span className="text-white/80 font-body-sm text-xs whitespace-nowrap">
              {institutionalMeta.aicte}
            </span>
          </div>

          {/* Right Group — Institutional Website Link */}
          <div className="flex items-center justify-end">
            <a
              className="inline-flex items-center gap-1 text-xs font-label-sm text-electric-yellow hover:text-white transition-colors duration-200 whitespace-nowrap"
              href={institutionalMeta.websiteUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Visit atria.edu.in</span>
              <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
            </a>
          </div>
        </div>

        {/* Tablet Layout (768px – 1023px) — Adaptive Centered 2-Row Composition */}
        <div className="hidden md:flex lg:hidden flex-col items-center justify-center gap-2 w-full max-w-7xl mx-auto text-center">
          {/* Row 1: Affiliation badge centered */}
          <div className="flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 font-label-sm text-xs px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-electric-yellow font-bold tracking-tight whitespace-nowrap">
              <span className="material-symbols-outlined text-[15px]">school</span>
              {institutionalMeta.affiliation}
            </span>
          </div>

          {/* Row 2: NAAC + AICTE + Website link together, horizontally centered */}
          <div className="flex items-center justify-center flex-wrap gap-3 text-xs">
            <span className="inline-flex items-center gap-1 font-label-sm text-xs px-2.5 py-0.5 rounded-lg bg-primary-container/40 text-clean-white font-bold border border-primary-container whitespace-nowrap">
              {institutionalMeta.accreditation}
            </span>
            <span className="text-white/80 font-body-sm text-xs whitespace-nowrap">
              {institutionalMeta.aicte}
            </span>
            <span className="text-white/40">•</span>
            <a
              className="inline-flex items-center gap-1 text-xs font-label-sm text-electric-yellow hover:text-white transition-colors duration-200 whitespace-nowrap"
              href={institutionalMeta.websiteUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Visit atria.edu.in</span>
              <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
            </a>
          </div>
        </div>

        {/* Mobile Layout (320px – 767px) — Vertically Stacked 3 Rows Centered */}
        <div className="flex md:hidden flex-col items-center justify-center gap-2 w-full max-w-7xl mx-auto text-center">
          {/* ROW 1 — AFFILIATION */}
          <div className="flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 font-label-sm text-xs px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-electric-yellow font-bold tracking-tight whitespace-nowrap">
              <span className="material-symbols-outlined text-[15px]">school</span>
              {institutionalMeta.affiliation}
            </span>
          </div>

          {/* ROW 2 — ACCREDITATION */}
          <div className="flex items-center justify-center flex-wrap gap-2.5 text-xs">
            <span className="inline-flex items-center gap-1 font-label-sm text-xs px-2.5 py-0.5 rounded-lg bg-primary-container/40 text-clean-white font-bold border border-primary-container whitespace-nowrap">
              {institutionalMeta.accreditation}
            </span>
            <span className="text-white/80 font-body-sm text-xs whitespace-nowrap">
              {institutionalMeta.aicte}
            </span>
          </div>

          {/* ROW 3 — WEBSITE */}
          <div className="flex items-center justify-center">
            <a
              className="inline-flex items-center gap-1 text-xs font-label-sm text-electric-yellow hover:text-white transition-colors duration-200 whitespace-nowrap"
              href={institutionalMeta.websiteUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Visit atria.edu.in</span>
              <span className="material-symbols-outlined text-[14px]">arrow_outward</span>
            </a>
          </div>
        </div>
      </header>

      {/* SECTION 02 — MAIN NAVIGATION (STICKY) */}
      <nav className="sticky top-0 z-40 bg-surface-container-lowest/90 backdrop-blur-md border-b border-border-cool-grey/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo anchor maintaining original aspect ratio */}
          <a className="flex items-center gap-2.5 sm:gap-3 group shrink-0" href="#hero">
            <img
              alt="Atria Institute of Technology Logo"
              className="h-8 sm:h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-102 shrink-0"
              src="/assets/atria-logo.png"
            />
            <div className="hidden sm:flex flex-col border-l border-border-cool-grey pl-2.5 sm:pl-3">
              <span className="font-headline-sm text-xs sm:text-headline-sm font-bold tracking-tight text-institutional-navy leading-none whitespace-nowrap">
                RESQ CHALLENGE
              </span>
              <span className="text-[9px] sm:text-[10px] font-label-sm text-secondary tracking-widest uppercase mt-0.5 whitespace-nowrap">
                RESCUE EVERY SOUL QUICKLY
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 font-label-lg text-sm xl:text-label-lg">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-primary font-bold border-b-2 border-primary'
                      : 'text-secondary hover:text-primary'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action Cluster */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center gap-1 sm:gap-2 bg-primary-container hover:bg-[#8c1c20] text-clean-white font-label-lg text-xs sm:text-label-lg px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-lg shadow-sm hover:shadow-[0_0_16px_rgba(169,35,40,0.35)] transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <span className="hidden sm:inline">Register Your School</span>
              <span className="sm:hidden">Register</span>
              <span className="material-symbols-outlined text-[15px] sm:text-[18px]">rocket_launch</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              aria-label="Toggle navigation"
              className="lg:hidden p-1.5 sm:p-2 text-institutional-navy hover:bg-surface-container rounded-lg transition-colors flex items-center justify-center"
              id="mobileNavToggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <MobileNavigation
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          onOpenRegister={onOpenRegister}
        />
      </nav>
    </>
  );
};
