import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { communityStories } from '../data/stories';

export const CommunityStories = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-yc-border text-yc-dark" id="stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="FIELD OBSERVATIONS &amp; PILOT JOURNEYS"
          title="SMALL ACTIONS. MEANINGFUL CHANGE."
          description="Documenting how student teams translate daily neighborhood friction into functioning hardware and civic telemetry over their 4-week acceleration sprints."
        />

        {/* Editorial Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityStories.map((story) => (
            <article
              key={story.id}
              className="border border-yc-border rounded-lg overflow-hidden bg-white hover:border-yc-dark/40 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Header */}
                <div className="relative aspect-[16/10] bg-yc-bg-muted overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm border border-yc-border px-2.5 py-0.5 rounded text-[11px] font-nav font-medium text-yc-dark">
                    {story.track}
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-yc-muted">
                    <span>{story.timeline}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-yc-dark leading-snug tracking-tight group-hover:text-atria-red transition-colors">
                    {story.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-yc-muted leading-relaxed">
                    {story.summary}
                  </p>
                </div>
              </div>

              {/* Deployment & Metric Footnote */}
              <div className="px-6 py-4 border-t border-yc-border bg-yc-bg-subtle/40 space-y-1.5 text-xs">
                <div className="font-body text-[11px] text-yc-muted">
                  <span className="font-semibold text-yc-dark">Deployment:</span> {story.deployment}
                </div>
                <div className="font-body text-[11px] text-atria-red font-medium">
                  <span className="font-semibold text-yc-dark">Key Metric:</span> {story.keyMetric}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Social Progress Broadcasting Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-lg bg-yc-bg-subtle border border-yc-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <div className="font-nav text-xs font-semibold text-atria-red uppercase tracking-wider">
              Transparency &amp; Open Progress
            </div>
            <h4 className="font-display text-base sm:text-lg font-bold text-yc-dark">
              Every step is documented in public.
            </h4>
            <p className="font-body text-xs sm:text-sm text-yc-muted leading-relaxed">
              Teams broadcast weekly build logs, circuit diagrams, and video tests across social channels using <strong className="text-yc-dark">#AtriaCommunityChallenge</strong> and <strong className="text-yc-dark">#AtriaInnovates</strong>.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="px-3 py-1.5 bg-white border border-yc-border rounded text-xs font-mono font-medium text-yc-dark">
              #AtriaCommunityChallenge
            </span>
            <span className="px-3 py-1.5 bg-white border border-yc-border rounded text-xs font-mono font-medium text-yc-dark">
              #AtriaInnovates
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
