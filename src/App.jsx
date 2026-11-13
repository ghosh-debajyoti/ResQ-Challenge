import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { ChallengeCategories } from './components/ChallengeCategories';
import { Participation } from './components/Participation';
import { ThePeople } from './components/ThePeople';
import { CommunityStories } from './components/CommunityStories';
import { Rewards } from './components/Rewards';
import { GrandFinale } from './components/GrandFinale';
import { Impact } from './components/Impact';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';

export function App() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);

  return (
    <div className="min-h-screen bg-white text-yc-dark flex flex-col antialiased selection:bg-atria-red selection:text-clean-white overflow-x-hidden font-body">
      {/* SECTION 01 — HEADER & NAVIGATION */}
      <Header onOpenRegister={openRegister} />

      <main className="flex-grow">
        {/* SECTION 02 — HERO */}
        <Hero onOpenRegister={openRegister} />

        {/* SECTION 03 — THE IDEA */}
        <About />

        {/* SECTION 04 — HOW IT WORKS (FOUR-WEEK JOURNEY) */}
        <Journey onOpenRegister={openRegister} />

        {/* SECTION 05 — CHALLENGE AREAS */}
        <ChallengeCategories />

        {/* SECTION 06 — PARTICIPATION */}
        <Participation onOpenRegister={openRegister} />

        {/* SECTION 07 — THE PEOPLE */}
        <ThePeople />

        {/* SECTION 08 — COMMUNITY STORIES */}
        <CommunityStories />

        {/* SECTION 09 — RECOGNITION */}
        <Rewards />

        {/* SECTION 10 — THE GRAND FINALE */}
        <GrandFinale />

        {/* SECTION 11 — ATRIA INSTITUTIONAL IDENTITY */}
        <Impact />

        {/* SECTION 12 — FAQ */}
        <FAQ />

        {/* SECTION 13 — FINAL CTA */}
        <FinalCTA onOpenRegister={openRegister} />
      </main>

      {/* SECTION 14 — FOOTER */}
      <Footer />

      {/* REGISTRATION MODAL */}
      <RegistrationModal isOpen={isRegisterOpen} onClose={closeRegister} />
    </div>
  );
}

export default App;
