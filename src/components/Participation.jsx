import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { participationSteps } from '../data/participation';

export const Participation = ({ onOpenRegister }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-yc-border text-yc-dark" id="participate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="THE PARTICIPATION ROADMAP"
          title="BUILT BY STUDENTS. FOR THE COMMUNITY."
          description="A clear six-step process for middle and high school institutions to assemble teams, access engineering resources, and measure real outcomes."
        />

        {/* Structured Editorial Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-yc-border rounded-lg overflow-hidden divide-y md:divide-y-0 md:divide-x lg:divide-x-0 bg-white">
          {participationSteps.map((step, idx) => (
            <div
              key={step.step}
              className={`p-6 sm:p-8 flex flex-col justify-between hover:bg-yc-bg-subtle/50 transition-colors ${
                idx < 3 ? 'lg:border-b border-yc-border' : ''
              } ${
                idx % 3 !== 2 ? 'lg:border-r border-yc-border' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-yc-border">
                  <span className="font-display font-mono text-sm font-bold text-atria-red">
                    STEP {step.step}
                  </span>
                  <span className="font-nav text-[11px] text-yc-muted uppercase tracking-wider">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-yc-dark mt-4 mb-2 tracking-tight">
                  {step.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-yc-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-yc-border text-[11px] font-nav text-yc-muted flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-atria-red" />
                <span>Facilitated by School STEM Lead &amp; Atria Desk</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenRegister}
            className="inline-flex items-center justify-center gap-2 bg-atria-red hover:bg-atria-red-hover text-white font-nav text-sm font-semibold px-8 py-3.5 rounded-md transition-colors shadow-none active:scale-[0.98]"
          >
            <span>REGISTER YOUR SCHOOL</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>

      </div>
    </section>
  );
};
