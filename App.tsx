
import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import MenuList from './components/MenuList';
import MenuHighlights from './components/MenuHighlights';
import Reservations from './components/Reservations';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Contact from './components/Contact';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'menu' | 'gallery' | 'reservations' | 'contact'>('home');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();
      gsap.to('.gsap-reveal', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, mainRef);

    return () => ctx.revert();
  }, [currentPage]);

  const navigateTo = (page: 'home' | 'menu' | 'gallery' | 'reservations' | 'contact') => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  return (
    <div ref={mainRef} className="bg-alchemist-950 font-sans min-h-screen selection:bg-gold selection:text-alchemist-950">
      <Header currentPage={currentPage} onNavigate={navigateTo} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero
              title="Sip into the Shadows"
              subtitle="An intimate dining experience where deep charcoal meets champagne gold in the heart of the city."
            />
            <Experience />
            <MenuHighlights onSeeFullMenu={() => navigateTo('menu')} />
          </>
        )}
        {currentPage === 'menu' && (
          <>
            <Hero
              title="Curated Tastes"
              subtitle="Experience mixology as an art form. From smoked infusions to gold-dusted classics, every sip tells a story."
            />
            <MenuList />
            <Reservations />
          </>
        )}
        {currentPage === 'gallery' && (
          <Gallery />
        )}
        {currentPage === 'reservations' && (
          <div className="pt-20">
            <Reservations />
          </div>
        )}
        {currentPage === 'contact' && (
          <Contact />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
