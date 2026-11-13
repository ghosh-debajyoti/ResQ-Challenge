import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { faqsList } from '../data/faqs';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-20 bg-surface-offwhite border-b border-border-cool-grey" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          centered
          eyebrow="GOT QUESTIONS?"
          title="Frequently Asked Questions"
          description="Everything you need to know about the Project RESQ process, eligibility, and program logistics."
        />

        {/* Sleek Accordions */}
        <div className="space-y-3 sm:space-y-4" id="faqAccordionGroup">
          {faqsList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-clean-white rounded-xl border border-border-cool-grey overflow-hidden shadow-sm transition-colors duration-150"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full text-left px-5 sm:px-6 py-4 flex items-center justify-between font-title-md text-sm sm:text-title-md text-institutional-navy font-bold hover:bg-surface-offwhite transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  <span className="pr-4">{faq.question}</span>
                  <span
                    className={`material-symbols-outlined text-primary transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    add
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-body-md text-secondary border-t border-border-cool-grey/40 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
