import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { grandFinaleFeatures } from '../data/awards';

export const GrandFinale = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#071A35] text-clean-white border-b border-white/10 relative overflow-hidden" id="finale">
      <div className="absolute inset-0 grid-lines-overlay opacity-20 pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          centered
          theme="dark"
          eyebrow="THE SUMMIT SHOWCASE"
          eyebrowColor="text-electric-yellow"
          title="One Stage. Countless Possibilities."
          description="Top-performing schools are invited to present their solutions and demonstrate their impact before industry titans and academic leaders."
        />

        {/* Theater Showcase Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {grandFinaleFeatures.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              <div className={`w-12 h-12 rounded-lg ${feat.iconBg} flex items-center justify-center mb-4`}>
                <span className="material-symbols-outlined text-2xl">
                  {feat.icon}
                </span>
              </div>
              <h3 className="font-headline-sm text-lg sm:text-headline-sm font-bold mb-2 text-clean-white">
                {feat.title}
              </h3>
              <p className="font-body-sm text-xs sm:text-body-sm text-white/70 leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Venue & Date Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 sm:mt-12 bg-white/10 border border-white/20 rounded-xl p-5 sm:p-6 text-center backdrop-blur-md flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-electric-yellow font-label-lg text-xs sm:text-label-lg"
        >
          <span className="material-symbols-outlined text-2xl">pin_drop</span>
          <span>Venue: Atria Institute of Technology Auditorium, Bengaluru • Date: Announced Post-Selection</span>
        </motion.div>
      </div>
    </section>
  );
};
