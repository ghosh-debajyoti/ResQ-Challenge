import React, { useState, useEffect } from 'react';
import { institutionalMeta, navLinks } from '../data/navigation';
import { MobileNavigation } from './MobileNavigation';

export const Header = ({ onOpenRegister }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'challenges', 'journey', 'the-people', 'stories', 'rewards', 'finale', 'impact', 'faqs'];
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
      <header className="bg-yc-navy text-clean-white border-b border-white/10 relative z-50 py-2 sm:py-2.5 px-4 sm:px-6">
        {/* Desktop Layout (1024px and above) — 3 Horizontally Aligned Groups */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:items-center w-full max-w-7xl mx-auto">
          {/* Left Group — Autonomous Affiliation */}
          <div className="flex items-center justify-start">
            <span className="inline-flex items-center gap-1.5 font-nav text-xs px-2.5 py-0.5 rounded bg-white/10 border border-white/15 text-white/90 font-medium tracking-tight whitespace-nowrap">
              <span className="material-symbols-outlined text-[15px] text-atria-red">school</span>
              {institutionalMeta.affiliation}
            </span>
          </div>

          {/* Center Group — Accreditation */}
          <div className="flex items-center justify-center gap-2.5 text-xs">
            <span className="inline-flex items-center gap-1 font-nav text-xs px-2 py-0.5 rounded bg-atria-red text-clean-white font-semibold whitespace-nowrap">
              {institutionalMeta.accreditation}
            </span>
            <span className="text-white/80 font-body text-xs whitespace-nowrap">
              {institutionalMeta.aicte}
            </span>
          </div>

          {/* Right Group — Institutional Website Link */}
          <div className="flex items-center justify-end">
            <a
              className="inline-flex items-center gap-1 text-xs font-nav text-white/90 hover:text-white transition-colors duration-200 whitespace-nowrap group"
              href={institutionalMeta.websiteUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Visit atria.edu.in</span>
              <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                arrow_outward
              </span>
            </a>
          </div>
        </div>

        {/* Tablet Layout (768px – 1023px) — Adaptive Centered 2-Row Composition */}
        <div className="hidden md:flex lg:hidden flex-col items-center justify-center gap-2 w-full max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 font-nav text-xs px-2.5 py-0.5 rounded bg-white/10 border border-white/15 text-white/90 font-medium tracking-tight whitespace-nowrap">
              <span className="material-symbols-outlined text-[15px] text-atria-red">school</span>
              {institutionalMeta.affiliation}
            </span>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-3 text-xs">
            <span className="inline-flex items-center gap-1 font-nav text-xs px-2 py-0.5 rounded bg-atria-red text-clean-white font-semibold whitespace-nowrap">
              {institutionalMeta.accreditation}
            </span>
            <span className="text-white/80 font-body text-xs whitespace-nowrap">
              {institutionalMeta.aicte}
            </span>
            <span className="text-white/40">•</span>
            <a
              className="inline-flex items-center gap-1 text-xs font-nav text-white/90 hover:text-white transition-colors duration-200 whitespace-nowrap"
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
          <div className="flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 font-nav text-xs px-2.5 py-0.5 rounded bg-white/10 border border-white/15 text-white/90 font-medium tracking-tight whitespace-nowrap">
              <span className="material-symbols-outlined text-[15px] text-atria-red">school</span>
              {institutionalMeta.affiliation}
            </span>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-2.5 text-xs">
            <span className="inline-flex items-center gap-1 font-nav text-xs px-2 py-0.5 rounded bg-atria-red text-clean-white font-semibold whitespace-nowrap">
              {institutionalMeta.accreditation}
            </span>
            <span className="text-white/80 font-body text-xs whitespace-nowrap">
              {institutionalMeta.aicte}
            </span>
          </div>

          <div className="flex items-center justify-center">
            <a
              className="inline-flex items-center gap-1 text-xs font-nav text-white/90 hover:text-white transition-colors duration-200 whitespace-nowrap"
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

      {/* SECTION 02 — MAIN NAVIGATION (STICKY, YC-INSPIRED MINIMAL) */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-yc-border transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo & Brand Lockup */}
          <a className="flex items-center gap-3 group shrink-0" href="#hero">
            <img
              alt="Atria Institute of Technology Logo"
              className="h-8 sm:h-10 w-auto object-contain shrink-0"
              src="/assets/atria-logo.png"
            />
            <div className="hidden sm:flex flex-col border-l border-yc-border pl-3">
              <span className="font-display text-sm sm:text-base font-bold tracking-tight text-yc-dark leading-none whitespace-nowrap">
                ATRIA IT COMMUNITY CHALLENGE
              </span>
              <span className="text-[10px] font-nav text-atria-red font-semibold tracking-wider uppercase mt-1 whitespace-nowrap">
                Theme: Rescue Every Soul Quickly
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 font-nav text-sm">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-150 py-1 text-sm font-medium ${
                    isActive
                      ? 'text-atria-red font-semibold border-b-2 border-atria-red'
                      : 'text-yc-muted hover:text-yc-dark'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Action CTA */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center gap-1.5 bg-atria-red hover:bg-atria-red-hover text-clean-white font-nav text-xs sm:text-sm font-semibold px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded transition-colors shadow-none active:scale-[0.98] whitespace-nowrap"
            >
              <span className="hidden sm:inline">Register Your School</span>
              <span className="sm:hidden">Register</span>
              <span className="material-symbols-outlined text-[15px] sm:text-[16px]">arrow_forward</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              aria-label="Toggle navigation"
              className="lg:hidden p-2 text-yc-dark hover:bg-yc-bg-subtle rounded transition-colors flex items-center justify-center"
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
