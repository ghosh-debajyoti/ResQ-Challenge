import React from 'react';
import { motion } from 'framer-motion';

export const Hero = ({ onOpenRegister }) => {
  return (
    <section className="relative custom-mesh-hero text-clean-white overflow-hidden py-12 sm:py-20 lg:py-28 border-b border-white/10" id="hero">
      <div className="absolute inset-0 grid-lines-overlay opacity-30 pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-8 space-y-5 sm:space-y-6"
          >
            {/* Institutional Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-electric-yellow font-label-sm text-xs sm:text-label-sm">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>ATRIA INSTITUTE OF TECHNOLOGY PRESENTS</span>
            </div>

            {/* Grand Main Heading */}
            <div className="space-y-2">
              <h1 className="font-display-hero text-display-hero-mobile sm:text-display-hero font-extrabold tracking-tight leading-none text-clean-white">
                ATRIA IT <span className="text-electric-yellow font-extrabold">COMMUNITY CHALLENGE</span>
                <span className="text-white text-xl sm:text-2xl md:text-3xl block mt-3 font-headline-lg tracking-normal font-semibold">
                  THEME: RESCUE EVERY SOUL QUICKLY.
                </span>
              </h1>
            </div>

            {/* Tagline Banner matching Atria ASIP Cadence */}
            <div className="inline-block bg-clean-white text-institutional-navy font-headline-md text-sm sm:text-headline-sm md:text-headline-md font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg shadow-md border-l-4 border-tech-magenta">
              REAL PROBLEMS. REAL SOLUTIONS. REAL IMPACT.
            </div>

            {/* Description */}
            <p className="font-body-lg text-sm sm:text-body-lg text-white/85 max-w-2xl leading-relaxed">
              A community-led innovation challenge empowering school students to identify real-world societal problems, build engineering-based solutions and create measurable community impact.
            </p>

            {/* Target Audience Tag */}
            <div className="pt-1">
              <span className="inline-flex items-center gap-2 bg-[#FF6B00] text-clean-white font-label-sm text-xs sm:text-label-sm font-bold px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg shadow-[#FF6B00]/30 tracking-wider">
                <span className="material-symbols-outlined text-[18px]">groups</span>
                FOR SCHOOL STUDENTS — CLASSES 8–12
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenRegister}
                className="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-[#8c1c20] text-clean-white font-label-lg text-sm sm:text-label-lg px-6 py-3.5 sm:px-7 rounded-lg border border-white/20 shadow-lg hover:shadow-[0_0_20px_rgba(169,35,40,0.5)] transition-all duration-200 active:scale-95"
              >
                <span>REGISTER YOUR SCHOOL</span>
                <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
              </button>

              <a
                className="inline-flex items-center justify-center gap-2 bg-clean-white text-institutional-navy hover:bg-surface-offwhite font-label-lg text-sm sm:text-label-lg px-6 py-3.5 sm:px-7 rounded-lg shadow-lg hover:translate-y-[-2px] transition-all duration-200 active:scale-95"
                href="#journey"
              >
                <span>EXPLORE THE CHALLENGE</span>
                <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
              </a>
            </div>
          </motion.div>

          {/* Right Hero Graphic / Badge Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-4 mt-4 lg:mt-0"
          >
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 sm:p-6 shadow-2xl text-center space-y-5 sm:space-y-6">
              
              {/* Glowing circular emblem badge */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full bg-gradient-to-tr from-institutional-navy via-tech-magenta to-electric-yellow p-1 shadow-inner flex items-center justify-center">
                <div className="w-full h-full bg-[#071A35] rounded-full flex flex-col items-center justify-center p-3 text-clean-white border border-white/20 text-center">
                  <span className="text-electric-yellow font-display-hero-mobile text-xs sm:text-sm font-black leading-tight">
                    ATRIA IT COMMUNITY CHALLENGE
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-badge-mono text-white/90 tracking-wider mt-1 uppercase">
                    THEME: RESCUE EVERY SOUL QUICKLY
                  </span>
                  <span className="text-[8px] sm:text-[9px] text-white/60 font-body-sm mt-0.5">
                    UN SDG ALIGNED
                  </span>
                </div>
              </div>

              {/* Metric Telemetry */}
              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="font-headline-sm text-sm sm:text-headline-sm text-electric-yellow font-bold">
                    4 WEEKS
                  </div>
                  <div className="font-label-sm text-[10px] sm:text-[11px] text-white/70">
                    Intensive Pipeline
                  </div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                  <div className="font-headline-sm text-sm sm:text-headline-sm text-clean-white font-bold">
                    100%
                  </div>
                  <div className="font-label-sm text-[10px] sm:text-[11px] text-white/70">
                    Hands-on Mentorship
                  </div>
                </div>
              </div>

              <div className="text-xs text-white/70 font-body-sm border-t border-white/10 pt-3">
                Organized by <span className="text-clean-white font-semibold">Atria Institute of Technology</span> Societal Projects (ASIP) Division.
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
