import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { institutionalMeta } from '../data/navigation';

const institutionalPillars = [
  {
    num: "01",
    title: "Student Engagement",
    description: "Immersing school students in real engineering methodologies before university, inspiring lifelong careers in science, robotics, and societal problem solving."
  },
  {
    num: "02",
    title: "Hands-on Innovation",
    description: "Providing physical access to Atria's advanced maker facilities, IoT prototyping benches, 3D printers, and collegiate engineering scholars."
  },
  {
    num: "03",
    title: "Community Collaboration",
    description: "Bridging the gap between secondary school curricula and actual neighborhood challenges by building field-ready civic deployments."
  },
  {
    num: "04",
    title: "Experiential Education",
    description: "Replacing passive rote memorization with iterative engineering: hypothesize, build, test, measure, and present."
  }
];

export const Impact = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-yc-border text-yc-dark" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="INSTITUTIONAL PURPOSE &amp; HERITAGE"
          title="ENGINEERING BEYOND THE CLASSROOM."
          description="Atria Institute of Technology champions innovation as a public good. This initiative connects secondary school curiosity with collegiate engineering capability to foster social impact."
        />

        {/* 4 Clean Editorial Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-yc-border rounded-lg overflow-hidden divide-y md:divide-y-0 md:divide-x divide-yc-border bg-white mb-12 sm:mb-16">
          {institutionalPillars.map((pillar) => (
            <div
              key={pillar.num}
              className="p-6 sm:p-7 flex flex-col justify-between hover:bg-yc-bg-subtle/50 transition-colors"
            >
              <div>
                <span className="font-display font-mono text-xs font-bold text-atria-red">
                  {pillar.num}
                </span>
                <h3 className="font-display text-base font-bold text-yc-dark mt-3 mb-2 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-yc-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-yc-border text-[11px] font-nav text-yc-muted">
                Atria Community Mandate
              </div>
            </div>
          ))}
        </div>

        {/* Official Atria Institutional Credibility Panel */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="border border-yc-border rounded-lg p-6 sm:p-10 bg-yc-bg-subtle flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          <div className="space-y-4 max-w-2xl">
            {/* Logo Container */}
            <div className="inline-block bg-white p-3 rounded border border-yc-border shadow-sm">
              <img
                src="/assets/atria-logo.png"
                alt="Atria Institute of Technology Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-yc-dark tracking-tight">
              Atria Institute of Technology, Bengaluru
            </h3>

            <p className="font-body text-xs sm:text-sm text-yc-muted leading-relaxed">
              Established in 2000 in Hebbal, Bengaluru, Atria Institute of Technology is an Autonomous Institution affiliated with Visvesvaraya Technological University (VTU), accredited with NAAC A++ Grade, and approved by AICTE. It serves as a regional hub for experiential engineering, incubation, and societal problem solving.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-2.5 py-1 bg-white border border-yc-border rounded text-[11px] font-nav font-medium text-yc-dark">
                Autonomous VTU Affiliation
              </span>
              <span className="px-2.5 py-1 bg-atria-red text-white rounded text-[11px] font-nav font-semibold">
                NAAC A++ Grade
              </span>
              <span className="px-2.5 py-1 bg-white border border-yc-border rounded text-[11px] font-nav font-medium text-yc-dark">
                AICTE Approved
              </span>
              <span className="px-2.5 py-1 bg-white border border-yc-border rounded text-[11px] font-nav font-medium text-yc-dark">
                Estd. 2000 • Bengaluru
              </span>
            </div>
          </div>

          <div className="shrink-0 space-y-3 w-full lg:w-auto">
            <a
              href="https://atria.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full lg:w-auto bg-yc-navy hover:bg-yc-navy-secondary text-white font-nav text-xs sm:text-sm font-semibold px-6 py-3.5 rounded transition-colors shadow-none"
            >
              <span>Explore Atria Portal</span>
              <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
            </a>
            <div className="text-center text-[11px] font-body text-yc-muted">
              Official Institutional Site: atria.edu.in
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
