import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { awardCategories } from '../data/awards';

export const Rewards = () => {
  return (
    <section className="py-12 sm:py-20 bg-clean-white border-b border-border-cool-grey" id="rewards">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="CELEBRATING INNOVATION."
          title="Ideas That Make a Difference Deserve Recognition."
          description="We honor hard work, engineering feasibility, and field implementation across multiple prize categories."
        />

        {/* 4 Premium Award Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awardCategories.map((award, idx) => (
            <motion.div
              key={award.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`bg-surface-offwhite rounded-xl p-6 border-2 border-border-cool-grey ${award.borderColor} hover:shadow-md transition-all duration-200 flex flex-col`}
            >
              <div className={`w-14 h-14 rounded-xl ${award.bgColor} flex items-center justify-center ${award.iconColor} mb-5`}>
                <span className="material-symbols-outlined text-3xl">
                  {award.icon}
                </span>
              </div>
              <span className={`font-badge-mono text-badge-mono ${award.badgeColor} font-bold`}>
                {award.category}
              </span>
              <h3 className="font-headline-sm text-lg sm:text-headline-sm text-institutional-navy font-bold mt-1 mb-2">
                {award.title}
              </h3>
              <p className="font-body-sm text-sm sm:text-body-sm text-secondary leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Evaluation Notice Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 p-4 bg-surface-container rounded-lg border border-border-cool-grey flex items-start gap-3"
        >
          <span className="material-symbols-outlined text-secondary mt-0.5">info</span>
          <p className="font-body-sm text-xs sm:text-body-sm text-secondary leading-relaxed">
            <strong className="text-on-surface">Evaluation Criteria:</strong> Recognition is based on implementation, measurable impact and the ability to communicate the journey. Specific grant amounts and values to be confirmed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
