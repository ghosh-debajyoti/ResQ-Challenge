import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className="py-16 sm:py-24 bg-yc-bg-subtle border-b border-yc-border text-yc-dark" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Core Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-atria-red" />
              <span className="font-nav text-xs font-semibold tracking-wider text-atria-red uppercase">
                THE PURPOSE &amp; PHILOSOPHY
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-yc-dark leading-tight">
              BIG CHANGE STARTS WITH A SMALL IDEA.
            </h2>

            <div className="space-y-4 font-body text-base sm:text-lg text-yc-muted leading-relaxed">
              <p>
                Most significant breakthroughs do not begin in corporate boardrooms or isolated labs. They begin when observant minds notice an everyday problem in their neighborhood — an unmonitored bus stop, an overflowing water reservoir, or an inaccessible school staircase.
              </p>
              <p>
                The <strong className="text-yc-dark font-semibold">Atria IT Community Challenge</strong> was established by Atria Institute of Technology to give school students from Classes 8 to 12 the engineering tools, structured mentorship, and laboratory resources needed to turn empathetic observations into working solutions.
              </p>
            </div>

            {/* Structured Editorial Principles (YC-style numbered points) */}
            <div className="pt-6 space-y-6 border-t border-yc-border">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <div className="font-display text-sm font-bold text-atria-red mb-1">01 — Real Problems</div>
                  <h3 className="font-display text-base font-bold text-yc-dark mb-1">Empathetic Focus</h3>
                  <p className="font-body text-xs sm:text-sm text-yc-muted leading-relaxed">
                    Move beyond textbook simulations to address verifiable societal challenges within local communities.
                  </p>
                </div>

                <div>
                  <div className="font-display text-sm font-bold text-atria-red mb-1">02 — Practical Engineering</div>
                  <h3 className="font-display text-base font-bold text-yc-dark mb-1">Hands-on Builds</h3>
                  <p className="font-body text-xs sm:text-sm text-yc-muted leading-relaxed">
                    Assemble real circuits, write functional code, and 3D print prototypes with direct guidance from engineers.
                  </p>
                </div>

                <div>
                  <div className="font-display text-sm font-bold text-atria-red mb-1">03 — Community Impact</div>
                  <h3 className="font-display text-base font-bold text-yc-dark mb-1">Measured Delta</h3>
                  <p className="font-body text-xs sm:text-sm text-yc-muted leading-relaxed">
                    Deploy solutions in actual school and civic settings to test efficacy and demonstrate empirical results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual & Context Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="border border-yc-border bg-white rounded-lg overflow-hidden p-2">
              <div className="relative aspect-[4/3] rounded overflow-hidden bg-yc-bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80"
                  alt="Students and engineering mentor analyzing circuit telemetry"
                  className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm border border-yc-border px-3 py-1.5 rounded text-xs font-nav font-medium text-yc-dark shadow-sm">
                  Field Research &amp; Prototyping
                </div>
              </div>

              <div className="p-4 space-y-2">
                <div className="text-xs font-nav text-yc-muted uppercase tracking-wider">
                  Community-Led Engineering
                </div>
                <p className="font-body text-xs sm:text-sm text-yc-muted leading-relaxed">
                  "We want young school innovators to understand that engineering is not just an academic discipline — it is a public service and an instrument of societal progress."
                </p>
                <div className="text-xs font-nav font-semibold text-atria-red pt-1">
                  Atria Institute of Technology Innovation Desk
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
