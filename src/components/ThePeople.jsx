import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { communityPeople } from '../data/people';

export const ThePeople = () => {
  return (
    <section className="py-16 sm:py-24 bg-yc-bg-subtle border-b border-yc-border text-yc-dark" id="the-people">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="PEOPLE-FIRST INNOVATION"
          title="THE PEOPLE BEHIND THE CHANGE."
          description="Like all meaningful technological advancements, this initiative is powered by dedicated individuals — students asking bold questions, educators facilitating curiosity, and engineering mentors providing technical rigor."
        />

        {/* Editorial People Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityPeople.map((person) => (
            <div
              key={person.role}
              className="bg-white rounded-lg border border-yc-border overflow-hidden flex flex-col justify-between hover:border-yc-dark/40 transition-all duration-200 group"
            >
              <div>
                {/* Photo Container */}
                <div className="relative aspect-[4/3] bg-yc-bg-muted overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.role}
                    className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-sm border border-yc-border px-2 py-0.5 rounded text-[10px] font-nav font-medium text-yc-dark">
                    {person.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-nav font-semibold text-atria-red uppercase tracking-wider">
                      {person.group}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-lg font-bold text-yc-dark tracking-tight">
                    {person.role}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-yc-muted leading-relaxed">
                    {person.description}
                  </p>
                </div>
              </div>

              {/* Focus Strip */}
              <div className="px-5 py-3 border-t border-yc-border bg-yc-bg-subtle/50 text-[11px] font-nav text-yc-muted">
                <span className="text-yc-dark font-medium block">Key Focus:</span>
                <span>{person.focus}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Narrative Callout */}
        <div className="mt-12 p-6 rounded-lg bg-white border border-yc-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display text-sm sm:text-base font-bold text-yc-dark">
              Are you an Atria alumnus, researcher, or civic partner?
            </h4>
            <p className="font-body text-xs sm:text-sm text-yc-muted">
              We welcome guest mentors, jury evaluators, and community pilot host institutions for the 2026 challenge.
            </p>
          </div>
          <a
            href="mailto:challenge@atria.edu"
            className="shrink-0 inline-flex items-center gap-1.5 text-xs font-nav font-semibold text-atria-red hover:underline"
          >
            <span>Partner With the Initiative</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </a>
        </div>

      </div>
    </section>
  );
};
