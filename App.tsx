
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
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
import Reviews from './components/Reviews';

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  type Page = 'home' | 'menu' | 'gallery' | 'reservations' | 'contact' | 'reviews';

  const getPageFromPath = (): Page => {
    if (typeof window === 'undefined') return 'home';
    const raw = window.location.pathname.replace(/^\/+|\/+$/g, '');
    const allowed: Page[] = ['home', 'menu', 'gallery', 'reservations', 'contact', 'reviews'];
    return (allowed.includes(raw as Page) ? (raw as Page) : 'home');
  };

  const [currentPage, setCurrentPage] = useState<Page>(getPageFromPath);

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

  const navigateTo = (page: Page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      const newPath = `/${page}`;
      if (window.location.pathname !== newPath) {
        window.history.pushState({}, '', newPath);
      }
    } catch (e) {
      // ignore in non-browser environments
    }
    setCurrentPage(page);
  };

  // sync with browser navigation (back/forward)
  useEffect(() => {
    const onPop = () => setCurrentPage(getPageFromPath());
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

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
            {/* <Reservations /> */}
          </>
        )}
        {currentPage === 'gallery' && (
          <Gallery />
        )}
        {currentPage === 'reviews' && (
          <div className="pt-20">
            <Reviews />
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
