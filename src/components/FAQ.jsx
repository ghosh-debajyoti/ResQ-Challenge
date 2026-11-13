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
    <section className="py-16 sm:py-24 bg-yc-bg-subtle border-b border-yc-border text-yc-dark" id="faqs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          centered
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="QUESTIONS? WE HAVE ANSWERS."
          description="Everything you need to know about the Atria IT Community Challenge process, mentorship, timeline, and school onboarding."
        />

        {/* Minimalist Editorial Accordion (YC-Style clean line dividers) */}
        <div className="border-t border-b border-yc-border divide-y divide-yc-border bg-white rounded-lg shadow-sm">
          {faqsList.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="px-5 sm:px-6">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full text-left py-5 flex items-center justify-between gap-4 group transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-yc-dark group-hover:text-atria-red transition-colors">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-yc-muted group-hover:text-atria-red transition-transform duration-200 shrink-0 text-xl ${
                      isOpen ? 'rotate-45 text-atria-red' : ''
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
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 pt-1 font-body text-xs sm:text-sm text-yc-muted leading-relaxed border-t border-yc-border/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Helpdesk Notice */}
        <div className="mt-8 text-center text-xs font-body text-yc-muted">
          Have an unlisted question? Contact our initiative desk directly at{' '}
          <a href="mailto:challenge@atria.edu" className="text-atria-red font-semibold hover:underline">
            challenge@atria.edu
          </a>
        </div>

      </div>
    </section>
  );
};
