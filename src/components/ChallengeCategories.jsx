import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { challengeCategories } from '../data/categories';

export const ChallengeCategories = () => {
  return (
    <section className="py-16 sm:py-24 bg-yc-bg-subtle border-b border-yc-border text-yc-dark" id="challenges">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="PROPOSED PROBLEM DOMAINS"
          title="WHAT PROBLEM WILL YOU SOLVE?"
          description="School squads select and investigate pressing local friction across six priority tracks. These proposed categories are customizable based on each school's geographic surroundings."
        />

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challengeCategories.map((category) => (
            <div
              key={category.track}
              className="bg-white rounded-lg p-6 sm:p-7 border border-yc-border hover:border-yc-dark/50 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-yc-border">
                  <span className="font-nav text-[11px] font-semibold text-yc-muted uppercase tracking-wider">
                    {category.track}
                  </span>
                  <span className="material-symbols-outlined text-xl text-yc-muted group-hover:text-atria-red transition-colors">
                    {category.icon}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-yc-dark mt-4 mb-2 tracking-tight">
                  {category.title}
                </h3>
                
                <p className="font-body text-sm text-yc-muted leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Editable Disclaimer Strip */}
              <div className="mt-6 pt-3 border-t border-yc-border flex items-center justify-between text-[11px] font-nav text-yc-muted">
                <span className="text-atria-red font-medium">Proposed Category</span>
                <span className="text-yc-muted">Editable &amp; Flexible</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote on track customization */}
        <div className="mt-8 text-center sm:text-left text-xs font-body text-yc-muted">
          * Note: Participating squads are encouraged to define custom civic problems within or bridging these proposed domains with faculty approval.
        </div>
      </div>
    </section>
  );
};
