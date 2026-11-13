import React from 'react';
import { institutionalMeta, navLinks } from '../data/navigation';

export const Footer = () => {
  return (
    <footer className="bg-institutional-navy text-clean-white border-t border-white/10 pt-12 sm:pt-16 pb-10 sm:pb-12" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-white/10">
          
          {/* Brand Narrative Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block bg-clean-white p-2.5 sm:p-3 rounded-xl shadow-md">
              <img
                alt="Atria Institute of Technology Logo"
                className="h-10 sm:h-12 w-auto object-contain"
                src="/assets/atria-logo.png"
              />
            </div>
            
            <div className="font-headline-sm text-base sm:text-headline-sm font-bold text-clean-white">
              ATRIA IT COMMUNITY CHALLENGE — Theme: Rescue Every Soul Quickly.
            </div>
            
            <p className="font-body-sm text-xs sm:text-body-sm text-white/70 max-w-md leading-relaxed">
              A nationwide student innovation initiative by Atria Institute of Technology, nurturing young school innovators across Classes 8–12 through hands-on societal engineering challenges.
            </p>
            
            <div className="pt-2 text-xs font-label-sm text-electric-yellow">
              Autonomous Institution Under VTU • Approved by AICTE • NAAC A++ Grade
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-title-md text-base sm:text-title-md font-bold text-clean-white">
              Navigation
            </h4>
            <ul className="space-y-2 font-body-sm text-xs sm:text-body-sm text-white/70">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a className="hover:text-electric-yellow transition-colors" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Accreditations & Links */}
          <div className="space-y-3">
            <h4 className="font-title-md text-base sm:text-title-md font-bold text-clean-white">
              Atria Portals
            </h4>
            <ul className="space-y-2 font-body-sm text-xs sm:text-body-sm text-white/70">
              {institutionalMeta.portalLinks.map((portal) => (
                <li key={portal.name}>
                  <a
                    className="hover:text-electric-yellow transition-colors inline-flex items-center gap-1"
                    href={portal.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>{portal.name}</span>
                    <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Desk */}
          <div className="space-y-3">
            <h4 className="font-title-md text-base sm:text-title-md font-bold text-clean-white">
              Contact &amp; Desk
            </h4>
            <p className="font-body-sm text-xs sm:text-body-sm text-white/70 leading-relaxed">
              Atria Institute of Technology<br />
              ASKB Campus, 1st Main Rd, AGS Layout, Anandnagar, Hebbal, Bengaluru, Karnataka 560024
            </p>
            <div className="space-y-1 font-body-sm text-xs text-white/80">
              <div>
                Email:{" "}
                <a className="text-electric-yellow hover:underline" href={`mailto:${institutionalMeta.contact.email}`}>
                  {institutionalMeta.contact.email}
                </a>
              </div>
              <div>
                Admissions:{" "}
                <a className="text-electric-yellow hover:underline" href={`mailto:${institutionalMeta.contact.admissionsEmail}`}>
                  {institutionalMeta.contact.admissionsEmail}
                </a>
              </div>
              <div>Phone: {institutionalMeta.contact.phone}</div>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/60 font-body-sm gap-4 text-center md:text-left">
          <div>
            © 2026 Atria Institute of Technology. All Rights Reserved. Autonomous Institution Under VTU. Approved by AICTE, Accredited with NAAC A++ Grade.
          </div>
          <div className="flex items-center gap-6">
            <a className="hover:text-clean-white transition-colors" href="https://atria.edu.in" rel="noopener noreferrer" target="_blank">
              Privacy Policy
            </a>
            <a className="hover:text-clean-white transition-colors" href="https://atria.edu.in" rel="noopener noreferrer" target="_blank">
              Terms of Service
            </a>
            <a className="hover:text-clean-white transition-colors" href="https://atria.edu.in" rel="noopener noreferrer" target="_blank">
              atria.edu.in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
