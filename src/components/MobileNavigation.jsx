import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/navigation';

export const MobileNavigation = ({ isOpen, onClose, onOpenRegister }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="lg:hidden border-t border-border-cool-grey bg-clean-white px-6 py-4 space-y-3 font-label-lg text-label-lg shadow-xl overflow-hidden"
          id="mobileNavMenu"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={onClose}
              className={`block py-2 ${
                link.name === 'Home'
                  ? 'text-primary font-bold'
                  : 'text-secondary hover:text-primary'
              } transition-colors duration-150`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                onClose();
                onOpenRegister();
              }}
              className="w-full bg-primary-container hover:bg-[#8c1c20] text-clean-white py-3 rounded-lg font-label-lg text-center transition-colors shadow-sm"
            >
              Register Your School
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
