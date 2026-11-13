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
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="lg:hidden border-b border-yc-border bg-white px-5 py-5 space-y-2 font-nav shadow-lg overflow-hidden"
          id="mobileNavMenu"
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={onClose}
                className="block py-2.5 px-3 rounded text-sm font-medium text-yc-dark hover:bg-yc-bg-subtle hover:text-atria-red transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-yc-border">
            <button
              onClick={() => {
                onClose();
                onOpenRegister();
              }}
              className="w-full bg-atria-red hover:bg-atria-red-hover text-white py-3 rounded-md font-nav text-xs font-semibold tracking-wider uppercase text-center transition-colors shadow-none"
            >
              Register Your School
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
