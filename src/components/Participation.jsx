import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { participationSteps } from '../data/participation';

export const Participation = ({ onOpenRegister }) => {
  return (
    <section className="py-12 sm:py-20 bg-clean-white border-b border-border-cool-grey" id="participate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          centered
          eyebrow="SIX SIMPLE STEPS"
          title="Your Journey Starts Here."
          description="Step-by-step guidance designed for school educators, STEM coordinators, and student innovators."
        />

        {/* 6-Step Participation Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {participationSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-surface-offwhite rounded-xl p-6 border border-border-cool-grey hover:border-primary-container hover:shadow-sm transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-full bg-institutional-navy text-electric-yellow font-bold flex items-center justify-center font-headline-sm mb-4 shadow-sm">
                {step.step}
              </div>
              <h3 className="font-title-md text-base sm:text-title-md text-institutional-navy font-bold mb-2">
                {step.title}
              </h3>
              <p className="font-body-sm text-sm sm:text-body-sm text-secondary leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-10 sm:mt-14 text-center">
          <button
            onClick={onOpenRegister}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary-container hover:bg-[#8c1c20] text-clean-white font-label-lg text-sm sm:text-label-lg px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
          >
            <span>REGISTER YOUR SCHOOL NOW</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
};
