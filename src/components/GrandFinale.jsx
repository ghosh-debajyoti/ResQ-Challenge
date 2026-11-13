import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { grandFinaleFeatures } from '../data/awards';

export const GrandFinale = () => {
  return (
    <section className="py-16 sm:py-24 bg-yc-navy text-clean-white border-b border-white/10 relative overflow-hidden" id="finale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Heading */}
        <SectionHeading
          theme="dark"
          eyebrow="THE CULMINATING SUMMIT"
          eyebrowColor="text-white/80"
          title="A STAGE FOR IDEAS THAT MATTER."
          description="Finalist squads gather at Atria Institute of Technology to exhibit functional devices, demonstrate real data, and defend their engineering choices before an esteemed jury."
        />

        {/* Two-Column Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: 4 Structured Finale Experiences */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {grandFinaleFeatures.map((feat, idx) => (
              <div
                key={feat.title}
                className="bg-white/5 border border-white/10 p-6 rounded-lg hover:border-white/20 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-white/50">
                    <span>EXPERIENCE 0{idx + 1}</span>
                    <span className="material-symbols-outlined text-base text-white/70">
                      {feat.icon}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-clean-white mt-4 mb-2 tracking-tight">
                    {feat.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-white/70 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-nav text-white/50">
                  Main Stage &amp; Expo Hall
                </div>
              </div>
            ))}
          </div>

          {/* Right: Editorial Stage Visual & Arrangements Card */}
          <div className="lg:col-span-5">
            <div className="border border-white/10 rounded-lg overflow-hidden bg-white/5 p-2 space-y-4">
              <div className="relative aspect-[4/3] rounded overflow-hidden bg-white/10">
                <img
                  src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80"
                  alt="Live auditorium stage and presentation hall"
                  className="w-full h-full object-cover opacity-90 contrast-110"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-yc-navy/90 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded text-xs font-nav font-medium text-clean-white">
                  Auditorium Exhibition
                </div>
              </div>

              {/* Logistics & Arrangements Note (Editable & Clean) */}
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-xs font-nav text-atria-red font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-atria-red" />
                  <span>Arrangements &amp; Venue</span>
                </div>
                
                <div className="space-y-1 text-xs sm:text-sm font-body text-white/80">
                  <p><strong className="text-white">Proposed Venue:</strong> Central Auditorium, Atria Institute of Technology, ASKB Campus, Hebbal, Bengaluru.</p>
                  <p><strong className="text-white">Schedule:</strong> Final dates to be notified directly to shortlisted teams post Week 03 milestones.</p>
                </div>

                <p className="text-[11px] font-body text-white/50 pt-2 border-t border-white/10">
                  * Note: Outstation finalists receive travel guidance and campus lab staging facilities ahead of pitch day.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
