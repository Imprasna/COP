
import React, { useEffect, useState } from 'react';

interface HeaderProps {
  currentPage: 'home' | 'menu' | 'gallery';
  onNavigate: (page: 'home' | 'menu' | 'gallery') => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', id: 'home' as const },
    { name: 'Menu', id: 'menu' as const },
    { name: 'Gallery', id: 'gallery' as const },
    { name: 'Reservations', id: 'reservations' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    if (id === 'home' || id === 'menu' || id === 'gallery') {
      onNavigate(id as any);
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 py-6 px-6 lg:px-20 flex items-center justify-between ${
        scrolled ? 'bg-alchemist-950/90 backdrop-blur-xl py-4 shadow-2xl' : 'bg-transparent'
      }`}
    >
      {/* Brand Identity */}
      <div 
        className="flex items-center gap-3 group cursor-pointer z-[110]"
        onClick={() => { onNavigate('home'); setIsMenuOpen(false); }}
      >
        <div className="text-gold transition-transform duration-500 group-hover:rotate-[360deg] scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l-2 18H8L6 3z"/><path d="M12 3v18"/></svg>
        </div>
        <h1 className="text-xl font-bold tracking-[0.1em] text-white uppercase font-heading">LUX NOIR</h1>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-10">
        {navItems.map((item) => (
          <button 
            key={item.name} 
            onClick={() => handleNavClick(item.id)}
            className={`text-[13px] font-semibold tracking-widest uppercase transition-all relative group ${
              currentPage === item.id ? 'text-white' : 'text-white/50 hover:text-white'
            }`}
          >
            {item.name}
            {currentPage === item.id && <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gold"></span>}
            {currentPage !== item.id && <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>}
          </button>
        ))}
      </nav>

      {/* Desktop Booking Button */}
      <button 
        onClick={() => onNavigate('menu')}
        className="hidden lg:block bg-gold hover:bg-gold-light text-alchemist-950 px-7 py-2.5 rounded-[4px] text-xs font-bold uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-gold/5 hover:-translate-y-0.5"
      >
        Plan a Visit
      </button>

      {/* Mobile Hamburger Control */}
      <button 
        className="lg:hidden text-white z-[110] p-3 focus:outline-none transition-colors active:bg-white/10 rounded-full"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
      >
        <div className="w-6 h-5 flex flex-col justify-between items-end relative">
          <span className={`h-0.5 bg-white transition-all duration-300 rounded-full origin-right ${isMenuOpen ? 'w-6 -rotate-45 translate-y-[2px]' : 'w-6'}`}></span>
          <span className={`h-0.5 bg-white transition-all duration-300 rounded-full ${isMenuOpen ? 'opacity-0 translate-x-2' : 'w-4'}`}></span>
          <span className={`h-0.5 bg-white transition-all duration-300 rounded-full origin-right ${isMenuOpen ? 'w-6 rotate-45 -translate-y-[2px]' : 'w-5'}`}></span>
        </div>
      </button>

      {/* Full-Screen Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 z-[105] w-full h-screen bg-alchemist-950 overflow-hidden flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
        }`}
      >
        {/* Dynamic Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <nav className="relative z-10 flex flex-col items-center gap-8 md:gap-12 w-full max-w-sm px-8">
          {navItems.map((item, index) => (
            <button 
              key={item.name} 
              onClick={() => handleNavClick(item.id)}
              style={{ transitionDelay: `${index * 80 + 200}ms` }}
              className={`text-3xl md:text-4xl font-black tracking-[0.2em] uppercase transition-all duration-700 ${
                isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              } ${
                currentPage === item.id ? 'text-gold' : 'text-white/60 active:text-gold active:scale-95'
              }`}
            >
              {item.name}
              {currentPage === item.id && (
                <div className="h-1 bg-gold w-1/2 mx-auto mt-2 rounded-full"></div>
              )}
            </button>
          ))}
          
          <button 
            onClick={() => handleNavClick('menu')}
            style={{ transitionDelay: `${navItems.length * 80 + 300}ms` }}
            className={`mt-6 w-full bg-gold text-alchemist-950 py-5 rounded-[4px] text-sm font-black uppercase tracking-[0.3em] transition-all duration-700 shadow-2xl shadow-gold/20 active:scale-95 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            Plan a Visit
          </button>
        </nav>

        {/* Mobile Overlay Footer */}
        <div 
          className={`absolute bottom-10 left-0 w-full px-6 transition-all duration-1000 delay-700 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-12 h-[1px] bg-white/10"></div>
            <div className="flex gap-8">
              {['Instagram', 'Facebook', 'Twitter'].map(s => (
                <a key={s} href="#" className="text-[10px] font-bold text-white/30 hover:text-gold uppercase tracking-[0.2em] transition-colors">{s}</a>
              ))}
            </div>
            <p className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-medium">© 2024 Lux Noir Restobar</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
