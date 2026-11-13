import React from 'react';
import { motion } from 'framer-motion';

export const FinalCTA = ({ onOpenRegister }) => {
  return (
    <section className="py-12 sm:py-20 bg-clean-white" id="final-cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden p-8 sm:p-14 lg:p-16 text-center text-clean-white bg-gradient-to-tr from-institutional-navy via-innovation-purple to-tech-magenta shadow-2xl border border-white/20"
        >
          <div className="absolute inset-0 grid-lines-overlay opacity-30 pointer-events-none"></div>
          
          <div className="relative max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-electric-yellow font-label-sm text-xs sm:text-label-sm border border-white/20">
              <span className="material-symbols-outlined text-[16px]">bolt</span>
              <span>BE THE SPARK OF CHANGE</span>
            </div>

            <h2 className="font-display-hero-mobile sm:font-display-hero text-2xl sm:text-display-hero font-extrabold tracking-tight leading-tight">
              THE FUTURE NEEDS <span className="text-electric-yellow">PROBLEM SOLVERS.</span>
            </h2>

            <p className="font-body-lg text-sm sm:text-body-lg text-white/90 max-w-xl mx-auto leading-relaxed">
              Start with an idea. Build a solution. Make a difference. Empower your students with the confidence of an engineer.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={onOpenRegister}
                className="inline-flex items-center justify-center gap-2 bg-primary-container hover:bg-[#8c1c20] text-clean-white font-label-lg text-sm sm:text-label-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(169,35,40,0.4)] transition-all active:scale-95"
              >
                <span>REGISTER YOUR SCHOOL</span>
                <span className="material-symbols-outlined">app_registration</span>
              </button>

              <a
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-clean-white border border-white/30 font-label-lg text-sm sm:text-label-lg px-8 py-4 rounded-lg backdrop-blur-md transition-all active:scale-95"
                href="#about"
              >
                <span>EXPLORE THE CHALLENGE</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
