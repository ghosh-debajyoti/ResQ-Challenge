import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { challengeCategories } from '../data/categories';

export const ChallengeCategories = () => {
  return (
    <section className="py-12 sm:py-20 bg-surface-offwhite border-b border-border-cool-grey" id="challenges">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="THINK BIG. SOLVE REAL PROBLEMS."
          title="Every Problem Deserves a Solution."
          description="Students can orient their team projects toward high-priority civic and engineering challenge tracks."
        />

        {/* Grid of Challenge Theme Cards with Editable Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challengeCategories.map((category, idx) => (
            <motion.div
              key={category.track}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-clean-white rounded-xl p-6 border border-border-cool-grey shadow-sm hover:border-institutional-navy hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-secondary-fixed text-on-secondary-fixed font-badge-mono text-badge-mono px-2.5 py-1 rounded">
                    {category.track}
                  </span>
                  <span className={`material-symbols-outlined text-2xl ${category.iconColor}`}>
                    {category.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg sm:text-headline-sm text-institutional-navy font-bold mb-2">
                  {category.title}
                </h3>
                <p className="font-body-sm text-sm sm:text-body-sm text-secondary mb-4 leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="pt-3 border-t border-border-cool-grey/80 flex items-center justify-between text-xs text-secondary">
                <span className="font-label-sm text-primary">{category.notice}</span>
                <span className="material-symbols-outlined text-[16px]">edit_note</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
