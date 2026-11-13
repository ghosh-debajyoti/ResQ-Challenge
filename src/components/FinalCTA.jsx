import React from 'react';
import { motion } from 'framer-motion';

export const FinalCTA = ({ onOpenRegister }) => {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-white border-t border-yc-border text-yc-dark" id="final-cta">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
        
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-atria-red" />
            <span className="font-nav text-xs font-semibold tracking-wider text-atria-red uppercase">
              APPLICATIONS OPEN FOR COHORT 2026
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-yc-dark leading-tight max-w-4xl mx-auto">
            THE NEXT BIG SOLUTION COULD START WITH YOU.
          </h2>

          <p className="font-body text-base sm:text-xl text-yc-muted max-w-2xl mx-auto leading-relaxed">
            Think beyond the classroom. Solve real problems. Create meaningful change.
          </p>
        </div>

        {/* Action Button & Link */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-atria-red hover:bg-atria-red-hover text-white font-nav text-sm font-semibold px-8 py-4 rounded-md transition-colors shadow-none active:scale-[0.98]"
          >
            <span>REGISTER YOUR SCHOOL</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>

          <a
            href="https://atria.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-yc-bg-subtle text-yc-dark border border-yc-border font-nav text-sm font-semibold px-6 py-4 rounded-md transition-colors"
          >
            <span>VISIT ATRIA.EDU.IN</span>
            <span className="material-symbols-outlined text-[18px] text-yc-muted">open_in_new</span>
          </a>
        </div>

        {/* Footnote */}
        <p className="pt-4 text-xs font-body text-yc-muted">
          Institutional Coordination: <a href="mailto:challenge@atria.edu" className="text-atria-red hover:underline">challenge@atria.edu</a> • ASKB Campus, Anandnagar, Hebbal, Bengaluru
        </p>

      </div>
    </section>
  );
};
