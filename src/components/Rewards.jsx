import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { awardCategories } from '../data/awards';

export const Rewards = () => {
  return (
    <section className="py-16 sm:py-24 bg-yc-bg-subtle border-b border-yc-border text-yc-dark" id="rewards">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="RECOGNITION &amp; SCHOLARSHIPS"
          title="GREAT IDEAS DESERVE RECOGNITION."
          description="Honoring verified problem solving, engineering feasibility, and field implementation through academic scholarships and institutional awards."
        />

        {/* Minimal Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awardCategories.map((award, idx) => (
            <div
              key={award.category}
              className="bg-white rounded-lg p-6 sm:p-7 border border-yc-border hover:border-yc-dark/40 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-yc-border">
                  <span className="font-nav text-[11px] font-semibold text-atria-red uppercase tracking-wider">
                    Honor 0{idx + 1}
                  </span>
                  <span className="material-symbols-outlined text-xl text-yc-muted group-hover:text-atria-red transition-colors">
                    {award.icon}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-yc-dark mt-4 mb-2 tracking-tight">
                  {award.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-yc-muted leading-relaxed">
                  {award.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-yc-border text-[11px] font-nav text-yc-muted">
                <span>Awarded at Grand Finale</span>
              </div>
            </div>
          ))}
        </div>

        {/* Evaluation Policy Notice */}
        <div className="mt-8 p-4 bg-white rounded-lg border border-yc-border flex items-start gap-3">
          <span className="material-symbols-outlined text-atria-red text-lg mt-0.5 shrink-0">verified</span>
          <p className="font-body text-xs sm:text-sm text-yc-muted leading-relaxed">
            <strong className="text-yc-dark font-semibold">Evaluation Criteria:</strong> Recognitions are awarded based on verified community deployment, measured delta impact, innovative thinking, and clarity of journey documentation over sheer theoretical complexity. Specific grant amounts and criteria remain subject to jury guidelines.
          </p>
        </div>

      </div>
    </section>
  );
};
