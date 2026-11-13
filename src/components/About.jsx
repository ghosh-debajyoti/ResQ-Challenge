import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

const aboutCards = [
  {
    num: "01",
    title: "IDENTIFY",
    description: "Understand real-world problems and recognise opportunities to make a difference in local neighborhoods, public schools, and community hubs.",
    barColor: "bg-primary-container",
    icon: "travel_explore",
    iconColor: "text-primary-container",
    numColor: "text-primary-container/20 group-hover:text-primary-container/40"
  },
  {
    num: "02",
    title: "BUILD",
    description: "Transform ideas into prototypes and practical solutions with direct engineering guidance from Atria faculty and collegiate mentors.",
    barColor: "bg-tech-magenta",
    icon: "precision_manufacturing",
    iconColor: "text-tech-magenta",
    numColor: "text-tech-magenta/20 group-hover:text-tech-magenta/40"
  },
  {
    num: "03",
    title: "IMPLEMENT",
    description: "Put solutions into action, measure outcomes and create meaningful community impact with tangible before-and-after results.",
    barColor: "bg-[#FF6B00]",
    icon: "deployed_code",
    iconColor: "text-[#FF6B00]",
    numColor: "text-[#FF6B00]/20 group-hover:text-[#FF6B00]/40"
  }
];

export const About = () => {
  return (
    <section className="py-12 sm:py-20 bg-surface-offwhite border-b border-border-cool-grey" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="BEYOND CLASSROOMS. INTO COMMUNITIES."
          title="Innovation Begins With a Problem."
          description="Atria IT Community Challenge is a community-led initiative that encourages school students to understand societal challenges and use engineering and technology to develop meaningful solutions."
        />

        {/* 3 Visual Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {aboutCards.map((card, idx) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-clean-white rounded-xl p-6 sm:p-8 border border-border-cool-grey shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 relative group overflow-hidden"
            >
              <div className={`h-1.5 w-full absolute top-0 left-0 ${card.barColor}`}></div>
              <div className="flex items-center justify-between mb-6">
                <span className={`font-display-hero-mobile text-3xl font-extrabold transition-colors ${card.numColor}`}>
                  {card.num}
                </span>
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center">
                  <span className={`material-symbols-outlined text-2xl ${card.iconColor}`}>
                    {card.icon}
                  </span>
                </div>
              </div>
              <h3 className="font-headline-sm text-lg sm:text-headline-sm text-institutional-navy font-bold mb-3">
                {card.title}
              </h3>
              <p className="font-body-md text-sm sm:text-body-md text-secondary leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
