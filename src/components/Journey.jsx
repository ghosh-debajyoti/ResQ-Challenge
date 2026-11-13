import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { journeyStages } from '../data/journey';

export const Journey = ({ onOpenRegister }) => {
  return (
    <section className="py-12 sm:py-20 bg-clean-white border-b border-border-cool-grey" id="journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          centered
          eyebrow="FROM IDEAS TO REAL-WORLD IMPACT."
          title="Four Weeks. One Mission. Real Change."
          description="A structured engineering incubation program taking high school innovators from abstract problem detection to working deployments."
        />

        {/* Desktop / Tablet Timeline Grid (md and up) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {journeyStages.map((stage, idx) => (
            <motion.div
              key={stage.week}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-surface-offwhite rounded-xl p-6 border border-border-cool-grey flex flex-col justify-between hover:border-institutional-navy hover:shadow-sm transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-institutional-navy text-electric-yellow font-badge-mono text-badge-mono px-3 py-1 rounded">
                    {stage.week}
                  </span>
                  <span className="material-symbols-outlined text-secondary" data-icon={stage.icon}>
                    {stage.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-institutional-navy font-bold mb-2">
                  {stage.title}
                </h3>
                <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                  {stage.description}
                </p>
              </div>
              <div className={`mt-6 pt-4 border-t border-border-cool-grey/60 flex items-center gap-2 text-xs font-label-sm ${stage.textColor}`}>
                <span className={`w-2 h-2 rounded-full ${stage.dotColor}`}></span>
                {stage.stageTag}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Vertical Timeline (sm and down) */}
        <div className="md:hidden relative pl-6 border-l-2 border-primary-container space-y-6 my-6">
          {journeyStages.map((stage, idx) => (
            <motion.div
              key={stage.week}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-surface-offwhite rounded-xl p-5 border border-border-cool-grey relative"
            >
              {/* Timeline Node Dot */}
              <div className="w-3 h-3 rounded-full bg-primary-container absolute -left-[31px] top-6 border-2 border-clean-white shadow-sm"></div>
              
              <div className="flex items-center justify-between mb-2 gap-2">
                <span className="bg-institutional-navy text-electric-yellow font-badge-mono text-[11px] px-2.5 py-0.5 rounded font-bold leading-normal">
                  {stage.week}
                </span>
                <span className="material-symbols-outlined text-secondary text-xl">
                  {stage.icon}
                </span>
              </div>
              <h3 className="font-headline-sm text-base text-institutional-navy font-bold mb-1">
                {stage.title}
              </h3>
              <p className="font-body-sm text-xs text-secondary leading-relaxed mb-3">
                {stage.description}
              </p>
              <div className={`pt-2 border-t border-border-cool-grey/60 flex items-center gap-1.5 text-xs font-label-sm ${stage.textColor}`}>
                <span className={`w-2 h-2 rounded-full ${stage.dotColor}`}></span>
                {stage.stageTag}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conclusion Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 sm:mt-12 bg-institutional-navy text-clean-white rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md border-l-4 border-electric-yellow"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-electric-yellow flex-shrink-0">
              <span className="material-symbols-outlined text-2xl">flag</span>
            </div>
            <div>
              <div className="font-label-sm text-xs sm:text-label-sm text-electric-yellow uppercase tracking-wider">
                CORE OBJECTIVE
              </div>
              <div className="font-headline-sm text-sm sm:text-headline-sm font-bold leading-snug">
                THE GOAL: Move beyond ideas and deliver solutions that are tested in the real world.
              </div>
            </div>
          </div>
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto whitespace-nowrap bg-primary-container hover:bg-[#8c1c20] text-clean-white font-label-lg text-sm sm:text-label-lg px-6 py-3 rounded-lg transition-colors shadow-sm active:scale-95"
          >
            Enroll School Today
          </button>
        </motion.div>

      </div>
    </section>
  );
};
