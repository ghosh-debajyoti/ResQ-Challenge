import React from 'react';
import { motion } from 'framer-motion';

export const Hero = ({ onOpenRegister }) => {
  return (
    <section className="relative bg-white text-yc-dark border-b border-yc-border pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & Intent */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Institution Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-atria-red" />
              <span className="font-nav text-xs font-semibold tracking-wider text-atria-red uppercase">
                ATRIA INSTITUTE OF TECHNOLOGY PRESENTS
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-yc-dark leading-[1.05]">
                ATRIA IT <br />
                COMMUNITY CHALLENGE
              </h1>
              
              {/* Theme & Tagline Lockup */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-yc-bg-subtle border border-yc-border text-xs font-nav font-semibold text-atria-red tracking-wider uppercase">
                  THEME: RESCUE EVERY SOUL QUICKLY.
                </span>
                <span className="text-xs font-nav text-yc-muted hidden sm:inline">•</span>
                <span className="text-xs font-nav text-yc-muted font-medium tracking-wide uppercase hidden sm:inline">
                  Real Problems. Real Solutions. Real Impact.
                </span>
              </div>
            </div>

            {/* Supporting Statements */}
            <div className="space-y-3 max-w-2xl">
              <p className="font-body text-lg sm:text-xl text-yc-dark font-medium leading-relaxed">
                Empowering the next generation to identify real-world problems, build practical solutions and create meaningful community impact.
              </p>
              <p className="font-body text-base text-yc-muted leading-relaxed">
                A community-driven initiative bringing together school students, mentors and problem solvers to turn ideas into action.
              </p>
            </div>

            {/* Audience Badge */}
            <div className="pt-1">
              <span className="inline-flex items-center gap-2 text-xs font-nav font-semibold text-yc-dark bg-yc-bg-subtle border border-yc-border px-3.5 py-1.5 rounded">
                <span className="material-symbols-outlined text-[16px] text-atria-red">school</span>
                FOR SCHOOL STUDENTS — CLASSES 8–12
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenRegister}
                className="inline-flex items-center justify-center gap-2 bg-atria-red hover:bg-atria-red-hover text-clean-white font-nav text-sm font-semibold px-6 py-3.5 rounded-md transition-colors shadow-none active:scale-[0.98]"
              >
                <span>REGISTER YOUR SCHOOL</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-yc-bg-subtle text-yc-dark border border-yc-border font-nav text-sm font-semibold px-6 py-3.5 rounded-md transition-colors"
              >
                <span>EXPLORE THE CHALLENGE</span>
                <span className="material-symbols-outlined text-[18px] text-yc-muted">expand_more</span>
              </a>
            </div>

            {/* Fast Editorial Metrics Strip */}
            <div className="pt-8 border-t border-yc-border grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
              <div>
                <div className="font-display text-2xl font-bold text-yc-dark">04 Weeks</div>
                <div className="font-body text-xs text-yc-muted mt-0.5">Structured Sprint</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-yc-dark">Classes 8–12</div>
                <div className="font-body text-xs text-yc-muted mt-0.5">School Eligibility</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-yc-dark">1:1 Mentorship</div>
                <div className="font-body text-xs text-yc-muted mt-0.5">Atria Collegiate Engineers</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-yc-dark">Field Pilots</div>
                <div className="font-body text-xs text-yc-muted mt-0.5">Empirical Deployment</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Photograph & Storytelling Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="border border-yc-border rounded-lg overflow-hidden bg-yc-bg-subtle p-2">
              <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded overflow-hidden bg-yc-bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt="Students collaborating on hardware prototype engineering"
                  className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                  loading="eager"
                />
                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm border border-yc-border px-2.5 py-1 rounded text-[11px] font-nav font-medium text-yc-dark">
                  Cohort 2026 • Bengaluru
                </div>
              </div>
              
              {/* Editorial Caption */}
              <div className="p-4 space-y-1">
                <div className="flex items-center justify-between text-xs font-nav text-atria-red font-semibold uppercase tracking-wider">
                  <span>Student Engineering In Action</span>
                  <span className="text-yc-muted font-normal normal-case">Hands-on Labs</span>
                </div>
                <p className="font-body text-xs sm:text-sm text-yc-muted leading-relaxed">
                  School squads iterate hardware prototypes and embedded telemetry alongside Atria collegiate mentors.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
