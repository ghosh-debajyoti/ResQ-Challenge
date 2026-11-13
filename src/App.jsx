import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Journey } from './components/Journey';
import { ChallengeCategories } from './components/ChallengeCategories';
import { Participation } from './components/Participation';
import { SocialChallenge } from './components/SocialChallenge';
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
    <div className="min-h-screen bg-background text-on-surface flex flex-col antialiased selection:bg-primary-container selection:text-clean-white overflow-x-hidden">
      {/* SECTION 01 — HEADER & NAVIGATION */}
      <Header onOpenRegister={openRegister} />

      <main className="flex-grow">
        {/* SECTION 02 — HERO */}
        <Hero onOpenRegister={openRegister} />

        {/* SECTION 03 — ABOUT */}
        <About />

        {/* SECTION 04 — FOUR-WEEK JOURNEY */}
        <Journey onOpenRegister={openRegister} />

        {/* SECTION 05 — CHALLENGE CATEGORIES */}
        <ChallengeCategories />

        {/* SECTION 06 — PARTICIPATION JOURNEY */}
        <Participation onOpenRegister={openRegister} />

        {/* SECTION 07 — SOCIAL MEDIA CHALLENGE */}
        <SocialChallenge />

        {/* SECTION 08 — REWARDS & RECOGNITION */}
        <Rewards />

        {/* SECTION 09 — GRAND FINALE */}
        <GrandFinale />

        {/* SECTION 10 — INSTITUTIONAL IMPACT */}
        <Impact />

        {/* SECTION 11 — FAQ */}
        <FAQ />

        {/* SECTION 12 — FINAL CTA */}
        <FinalCTA onOpenRegister={openRegister} />
      </main>

      {/* SECTION 13 — FOOTER */}
      <Footer />

      {/* REGISTRATION MODAL */}
      <RegistrationModal isOpen={isRegisterOpen} onClose={closeRegister} />
    </div>
  );
}

export default App;
