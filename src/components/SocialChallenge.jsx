import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { socialChallengeSteps } from '../data/participation';

export const SocialChallenge = () => {
  return (
    <section className="py-12 sm:py-20 bg-surface-offwhite border-b border-border-cool-grey" id="social-challenge">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="SHARE THE JOURNEY. SHOW THE IMPACT."
          eyebrowColor="text-tech-magenta"
          title="Every Step Deserves to Be Seen."
          description="Inspire others by capturing and broadcasting your squad's engineering progress across digital channels."
        />

        {/* Instagram / Reels Mockup Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialChallengeSteps.map((card, idx) => (
            <motion.div
              key={card.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-clean-white rounded-2xl border border-border-cool-grey overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className={`h-40 sm:h-48 bg-gradient-to-tr ${card.gradient} p-4 flex flex-col justify-between text-clean-white relative`}>
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded text-xs font-label-sm w-max">
                    {card.step}
                  </span>
                  <div className="space-y-1">
                    <span className="material-symbols-outlined text-3xl text-electric-yellow">
                      {card.icon}
                    </span>
                    <p className="font-label-sm text-xs font-semibold">{card.tagline}</p>
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="font-title-md text-base sm:text-title-md text-institutional-navy font-bold mb-2">
                    {card.title}
                  </h4>
                  <p className="font-body-sm text-xs sm:text-body-sm text-secondary mb-4 leading-relaxed">
                    {card.step === "STEP 03" ? (
                      <>
                        Tag official Atria IT Community Challenge handles, include{" "}
                        <span className="text-primary font-bold">#AtriaCommunityChallenge</span> and{" "}
                        <span className="text-primary font-bold">#AtriaInnovates</span>.
                      </>
                    ) : (
                      card.description
                    )}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0">
                <div className="pt-3 border-t border-border-cool-grey/60 flex items-center justify-between text-xs text-secondary font-label-sm">
                  <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[15px]">favorite</span> {card.likes}
                  </span>
                  <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[15px]">chat_bubble</span> {card.comments}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
