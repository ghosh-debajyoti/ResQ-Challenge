import React from 'react';
import { institutionalMeta, navLinks } from '../data/navigation';

export const Footer = () => {
  return (
    <footer className="bg-yc-navy text-clean-white border-t border-white/10 pt-16 pb-12" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1 & 2: Institutional Brand Narrative */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block bg-white p-2.5 rounded shadow-sm">
              <img
                alt="Atria Institute of Technology Logo"
                className="h-10 w-auto object-contain"
                src="/assets/atria-logo.png"
              />
            </div>
            
            <div className="space-y-1">
              <div className="font-display text-lg font-bold text-clean-white">
                ATRIA IT COMMUNITY CHALLENGE
              </div>
              <div className="font-nav text-xs font-semibold text-atria-red uppercase tracking-wider">
                THEME: RESCUE EVERY SOUL QUICKLY.
              </div>
            </div>
            
            <p className="font-body text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              A community-driven innovation initiative by Atria Institute of Technology empowering school students from Classes 8 to 12 to identify real-world problems, build practical solutions, and create meaningful community impact.
            </p>
            
            <div className="pt-2 text-xs font-nav text-white/60">
              Autonomous Institution Under VTU • NAAC A++ Grade • Approved by AICTE
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-clean-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 font-nav text-xs text-white/70">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a className="hover:text-clean-white transition-colors" href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Institutional Website & Portals */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-clean-white uppercase tracking-wider">
              Atria Portals
            </h4>
            <ul className="space-y-2 font-nav text-xs text-white/70">
              {institutionalMeta.portalLinks.map((portal) => (
                <li key={portal.name}>
                  <a
                    className="hover:text-clean-white transition-colors inline-flex items-center gap-1 group"
                    href={portal.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span>{portal.name}</span>
                    <span className="material-symbols-outlined text-[12px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      arrow_outward
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact & Social Placeholders */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-bold text-clean-white uppercase tracking-wider">
              Initiative Desk
            </h4>
            <p className="font-body text-xs text-white/70 leading-relaxed">
              Atria Institute of Technology<br />
              ASKB Campus, 1st Main Rd, AGS Layout, Anandnagar, Hebbal, Bengaluru, Karnataka 560024
            </p>
            <div className="space-y-1 font-body text-xs text-white/80">
              <div>
                Email:{' '}
                <a className="text-white hover:underline font-mono" href={`mailto:${institutionalMeta.contact.email}`}>
                  {institutionalMeta.contact.email}
                </a>
              </div>
              <div>Phone: <span className="font-mono">{institutionalMeta.contact.phone}</span></div>
            </div>

            {/* Social Media Placeholders */}
            <div className="pt-2">
              <span className="font-display text-[11px] font-semibold text-white/60 uppercase tracking-wider block mb-2">
                Broadcast Handles
              </span>
              <div className="flex items-center gap-3 text-xs font-mono text-white/80">
                <span className="px-2 py-1 bg-white/10 rounded">#AtriaCommunityChallenge</span>
                <span className="px-2 py-1 bg-white/10 rounded">#AtriaInnovates</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/60 font-body gap-4 text-center md:text-left">
          <div>
            © 2026 Atria Institute of Technology. All Rights Reserved. Autonomous Institution Under VTU.
          </div>
          <div className="flex items-center gap-6 font-nav">
            <a className="hover:text-clean-white transition-colors" href="https://atria.edu.in" rel="noopener noreferrer" target="_blank">
              Privacy Policy
            </a>
            <a className="hover:text-clean-white transition-colors" href="https://atria.edu.in" rel="noopener noreferrer" target="_blank">
              Terms of Participation
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
