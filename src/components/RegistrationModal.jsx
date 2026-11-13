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
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-yc-dark/70 backdrop-blur-sm">
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
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="bg-white rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-xl border border-yc-border relative max-h-[92vh] overflow-y-auto z-10 text-yc-dark"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-yc-muted hover:text-yc-dark p-1 transition-colors rounded"
              aria-label="Close registration modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {/* Modal Header */}
            <div className="mb-6 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-atria-red" />
                <span className="font-nav text-xs font-semibold tracking-wider text-atria-red uppercase">
                  Institutional Expression of Interest
                </span>
              </div>
              <h3 id="modal-title" className="font-display text-xl sm:text-2xl font-bold text-yc-dark tracking-tight leading-snug">
                Register Your School for Atria IT Community Challenge
              </h3>
              <p className="font-body text-xs sm:text-sm text-yc-muted leading-relaxed">
                Nominate student squads from Classes 8 to 12. An Atria initiative officer will coordinate the school onboarding pack and mentor pairing.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-nav text-xs text-yc-dark uppercase mb-1 font-semibold">
                  School Name *
                </label>
                <input
                  required
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  placeholder="e.g. National Public School, Bengaluru"
                  className="w-full px-3 py-2.5 rounded border border-yc-border text-yc-dark text-sm placeholder:text-yc-muted/50 focus:border-atria-red focus:ring-1 focus:ring-atria-red outline-none transition-all"
                />
              </div>

              <div>
                <label className="block font-nav text-xs text-yc-dark uppercase mb-1 font-semibold">
                  Coordinator / Faculty Lead *
                </label>
                <input
                  required
                  type="text"
                  name="coordinatorName"
                  value={formData.coordinatorName}
                  onChange={handleChange}
                  placeholder="e.g. Dr. Rajesh Kumar, Head of Science"
                  className="w-full px-3 py-2.5 rounded border border-yc-border text-yc-dark text-sm placeholder:text-yc-muted/50 focus:border-atria-red focus:ring-1 focus:ring-atria-red outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-nav text-xs text-yc-dark uppercase mb-1 font-semibold">
                    Official Email *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="stem@school.edu"
                    className="w-full px-3 py-2.5 rounded border border-yc-border text-yc-dark text-sm placeholder:text-yc-muted/50 focus:border-atria-red focus:ring-1 focus:ring-atria-red outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block font-nav text-xs text-yc-dark uppercase mb-1 font-semibold">
                    Contact Phone *
                  </label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2.5 rounded border border-yc-border text-yc-dark text-sm placeholder:text-yc-muted/50 focus:border-atria-red focus:ring-1 focus:ring-atria-red outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-nav text-xs text-yc-dark uppercase mb-1 font-semibold">
                    City / Location *
                  </label>
                  <input
                    required
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Bengaluru, Karnataka"
                    className="w-full px-3 py-2.5 rounded border border-yc-border text-yc-dark text-sm placeholder:text-yc-muted/50 focus:border-atria-red focus:ring-1 focus:ring-atria-red outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block font-nav text-xs text-yc-dark uppercase mb-1 font-semibold">
                    Estimated Squads
                  </label>
                  <select
                    name="estimatedTeams"
                    value={formData.estimatedTeams}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 rounded border border-yc-border text-yc-dark text-sm focus:border-atria-red focus:ring-1 focus:ring-atria-red outline-none transition-all bg-white"
                  >
                    <option value="1">1 Team (3-5 students)</option>
                    <option value="2-3">2-3 Teams</option>
                    <option value="4+">4+ Teams (Multi-grade)</option>
                  </select>
                </div>
              </div>

              <p className="text-[11px] font-body text-yc-muted leading-relaxed">
                By submitting this interest form, your institution agrees to receive official challenge timeline updates, mentor pairing rosters, and lab safety schedules from Atria Institute of Technology.
              </p>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-atria-red hover:bg-atria-red-hover text-white py-3.5 rounded font-nav text-xs font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-none disabled:opacity-80"
                >
                  {isSubmitted ? (
                    <>
                      <span className="material-symbols-outlined text-lg animate-spin">progress_activity</span>
                      <span>Submitting Expression...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit School Nomination</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </>
                  )}
                </button>
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-yc-bg-subtle border border-yc-border rounded text-center text-xs font-nav text-atria-red font-semibold"
                >
                  Nomination recorded! Our initiative desk will contact the faculty coordinator within 24 business hours.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
