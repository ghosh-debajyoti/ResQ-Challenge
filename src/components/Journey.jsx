import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { journeyStages } from '../data/journey';

const stageMilestones = {
  "WEEK 01": [
    "Field problem observation",
    "Stakeholder empathy interviews",
    "Approved problem statement"
  ],
  "WEEK 02": [
    "Hardware & software architecture",
    "Breadboard circuit prototyping",
    "Atria lab mentor design review"
  ],
  "WEEK 03": [
    "On-ground deployment test",
    "Sensor calibration & telemetry",
    "Direct community user feedback"
  ],
  "WEEK 04": [
    "Measured impact delta analysis",
    "Pitch deck & demo video",
    "Grand Finale stage exhibition"
  ]
};

export const Journey = ({ onOpenRegister }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-yc-border text-yc-dark" id="journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="THE FOUR-WEEK ACCELERATION"
          title="FROM PROBLEM TO IMPACT."
          description="A structured, intensive engineering incubation model taking high school squads from first observation to verified deployment."
        />

        {/* Desktop / Tablet Horizontal Multi-Column Editorial Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 border border-yc-border rounded-lg overflow-hidden divide-y md:divide-y-0 md:divide-x divide-yc-border bg-white">
          {journeyStages.map((stage, idx) => (
            <div
              key={stage.week}
              className="p-6 lg:p-8 flex flex-col justify-between hover:bg-yc-bg-subtle/50 transition-colors"
            >
              <div>
                {/* Header Lockup */}
                <div className="flex items-center justify-between pb-4 border-b border-yc-border">
                  <span className="font-nav text-xs font-semibold text-atria-red tracking-wider">
                    {stage.week}
                  </span>
                  <span className="font-display text-xs font-mono text-yc-muted">
                    0{idx + 1}
                  </span>
                </div>

                {/* Stage Title */}
                <h3 className="font-display text-lg lg:text-xl font-bold text-yc-dark mt-4 mb-3 tracking-tight">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-yc-muted leading-relaxed mb-6">
                  {stage.description}
                </p>
              </div>

              {/* Milestones Checklist */}
              <div className="pt-4 border-t border-yc-border space-y-2">
                <span className="text-[11px] font-nav font-semibold text-yc-dark uppercase tracking-wider block">
                  Weekly Milestones:
                </span>
                <ul className="space-y-1.5">
                  {stageMilestones[stage.week]?.map((m, mIdx) => (
                    <li key={mIdx} className="font-body text-xs text-yc-muted flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-atria-red mt-1.5 shrink-0" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden space-y-6 relative pl-6 border-l-2 border-yc-border ml-2">
          {journeyStages.map((stage, idx) => (
            <div
              key={stage.week}
              className="relative"
            >
              {/* Dot on vertical line */}
              <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-white border-2 border-atria-red" />
              
              <div className="border border-yc-border rounded-lg p-5 bg-white">
                <div className="flex items-center justify-between text-xs font-nav text-atria-red font-semibold mb-1">
                  <span>{stage.week}</span>
                  <span className="font-mono text-yc-muted">STAGE 0{idx + 1}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-yc-dark mb-2">
                  {stage.title}
                </h3>
                <p className="font-body text-xs text-yc-muted leading-relaxed mb-3">
                  {stage.description}
                </p>
                <div className="pt-3 border-t border-yc-border space-y-1">
                  {stageMilestones[stage.week]?.map((m, mIdx) => (
                    <div key={mIdx} className="font-body text-[11px] text-yc-muted flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-atria-red shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Editorial Callout */}
        <div className="mt-12 p-6 rounded-lg bg-yc-bg-subtle border border-yc-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-base font-bold text-yc-dark">
              Are you a faculty mentor or STEM coordinator?
            </h4>
            <p className="font-body text-xs sm:text-sm text-yc-muted">
              Schools receive full syllabus alignment, laboratory access passes, and weekly mentorship schedules.
            </p>
          </div>
          <button
            onClick={onOpenRegister}
            className="shrink-0 bg-atria-red hover:bg-atria-red-hover text-white text-xs font-nav font-semibold tracking-wider uppercase px-5 py-2.5 rounded transition-colors"
          >
            Nominate Your School
          </button>
        </div>

      </div>
    </section>
  );
};
