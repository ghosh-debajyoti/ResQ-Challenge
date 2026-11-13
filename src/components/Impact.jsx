import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { impactPillars } from '../data/awards';

export const Impact = () => {
  return (
    <section className="py-12 sm:py-20 bg-clean-white border-b border-border-cool-grey" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="BUILDING TOMORROW. STARTING TODAY."
          title="Engineering Beyond the Classroom."
          description="Bridging the gap between secondary school curricula and high-impact engineering innovation through Atria’s multidisciplinary ecosystem."
        />

        {/* 3 Large Visual Impact Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {impactPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.pillar}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-surface-offwhite rounded-xl p-6 sm:p-8 border border-border-cool-grey hover:border-institutional-navy transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-institutional-navy text-clean-white flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-2xl">
                  {pillar.icon}
                </span>
              </div>
              <span className={`font-badge-mono text-badge-mono ${pillar.tagColor} font-bold`}>
                {pillar.pillar}
              </span>
              <h3 className="font-headline-sm text-lg sm:text-headline-sm text-institutional-navy font-bold mt-1 mb-3">
                {pillar.title}
              </h3>
              <p className="font-body-md text-sm sm:text-body-md text-secondary leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Dedicated Atria Institutional Credibility Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-institutional-navy via-[#0A3366] to-institutional-navy rounded-2xl p-6 sm:p-10 md:p-12 text-clean-white border border-white/10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8"
        >
          <div className="max-w-2xl space-y-4 text-center md:text-left">
            <div className="inline-block bg-clean-white p-3 sm:p-3.5 rounded-xl shadow-md">
              <img
                alt="Atria Institute of Technology Logo"
                className="h-11 sm:h-14 w-auto object-contain"
                src="/assets/atria-logo.png"
              />
            </div>
            <h3 className="font-headline-lg text-2xl sm:text-headline-lg font-bold">
              Atria Institute of Technology
            </h3>
            <p className="font-body-lg text-sm sm:text-body-lg text-white/90 leading-relaxed">
              Inspiring young minds to use engineering and innovation to solve society's problems. Autonomous institution under VTU with NAAC A++ accreditation.
            </p>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto text-center md:text-right">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-electric-yellow text-institutional-navy hover:bg-clean-white font-label-lg text-sm sm:text-label-lg px-6 py-3.5 rounded-lg font-bold transition-all duration-200 shadow-md active:scale-95"
              href="https://atria.edu.in"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Learn About Atria</span>
              <span className="material-symbols-outlined text-[18px]">open_in_new</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
