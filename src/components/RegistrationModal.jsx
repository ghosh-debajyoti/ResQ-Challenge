import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    schoolName: '',
    coordinatorName: '',
    email: '',
    phone: '',
    city: '',
    estimatedTeams: '1-2',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        schoolName: '',
        coordinatorName: '',
        email: '',
        phone: '',
        city: '',
        estimatedTeams: '1-2',
      });
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-institutional-navy/80 backdrop-blur-sm">
          {/* Backdrop Clickable Area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="bg-clean-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-border-cool-grey relative max-h-[90vh] overflow-y-auto z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-secondary hover:text-institutional-navy p-1 transition-colors rounded-lg"
              aria-label="Close registration modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="bg-primary-container text-clean-white font-badge-mono text-[10px] px-2 py-0.5 rounded font-bold uppercase">
                OFFICIAL ONBOARDING
              </span>
              <h3 id="modal-title" className="font-headline-md text-xl sm:text-headline-md text-institutional-navy font-bold mt-2">
                Register Your School for Atria IT Community Challenge
              </h3>
              <p className="font-body-sm text-xs sm:text-body-sm text-secondary mt-1 leading-relaxed">
                Theme: Rescue Every Soul Quickly. Express your school’s participation. An Atria initiative officer will coordinate the team onboarding kit.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-label-sm text-xs text-institutional-navy uppercase mb-1 font-semibold">
                  School Name *
                </label>
                <input
                  required
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  placeholder="e.g. National Public School, Bengaluru"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#CBD5E1] text-[#1E293B] text-body-sm focus:border-institutional-navy focus:ring-2 focus:ring-primary-container/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block font-label-sm text-xs text-institutional-navy uppercase mb-1 font-semibold">
                  Coordinator / Teacher Name *
                </label>
                <input
                  required
                  type="text"
                  name="coordinatorName"
                  value={formData.coordinatorName}
                  onChange={handleChange}
                  placeholder="e.g. Dr. Rajesh Kumar"
                  className="w-full px-3 py-2.5 rounded-lg border border-[#CBD5E1] text-[#1E293B] text-body-sm focus:border-institutional-navy focus:ring-2 focus:ring-primary-container/20 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-sm text-xs text-institutional-navy uppercase mb-1 font-semibold">
                    Official Email *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="principal@school.edu"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#CBD5E1] text-[#1E293B] text-body-sm focus:border-institutional-navy focus:ring-2 focus:ring-primary-container/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-xs text-institutional-navy uppercase mb-1 font-semibold">
                    Contact Phone *
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#CBD5E1] text-[#1E293B] text-body-sm focus:border-institutional-navy focus:ring-2 focus:ring-primary-container/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-sm text-xs text-institutional-navy uppercase mb-1 font-semibold">
                    City / District *
                  </label>
                  <input
                    required
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Bengaluru"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#CBD5E1] text-[#1E293B] text-body-sm focus:border-institutional-navy focus:ring-2 focus:ring-primary-container/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block font-label-sm text-xs text-institutional-navy uppercase mb-1 font-semibold">
                    Estimated Teams
                  </label>
                  <select
                    name="estimatedTeams"
                    value={formData.estimatedTeams}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded-lg border border-[#CBD5E1] text-[#1E293B] text-body-sm focus:border-institutional-navy focus:ring-2 focus:ring-primary-container/20 outline-none transition-all bg-white"
                  >
                    <option value="1-2">1 – 2 Teams (3–10 Students)</option>
                    <option value="3-5">3 – 5 Teams (10–25 Students)</option>
                    <option value="5+">5+ Teams (Campus Wide)</option>
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-primary-container hover:bg-[#8c1c20] text-clean-white font-label-lg text-sm sm:text-label-lg py-3 rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Submit Registration Request</span>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                </button>
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-surface-container-high rounded text-xs text-institutional-navy font-semibold text-center border border-secondary-container"
                >
                  Registration request received! An Atria coordinator will contact you via email shortly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
