
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface MenuHighlightsProps {
  onSeeFullMenu: () => void;
}

const MenuHighlights: React.FC<MenuHighlightsProps> = ({ onSeeFullMenu }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.menu-item', {
        x: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const dishes = [
    { name: 'Wine & Cheese Platter (Premium)', price: '₹799', desc: 'Aged cheeses, cured meats, wine pairings, artisanal crackers', img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=500' },
    { name: 'Butter Chicken Masala', price: '₹549', desc: 'Tender chicken in creamy tomato-butter sauce with aromatic spices', img: 'https://images.unsplash.com/photo-1565557623814-695d8edf5b0b?auto=format&fit=crop&q=80&w=500' },
    { name: 'Gamberoni Alla Marinara (Prawn Pizza)', price: '₹599', desc: 'Fresh prawns, garlic, tomato sauce, basil & mozzarella', img: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=500' },
    { name: 'Old Fashioned Tiramisu', price: '₹449', desc: 'Classic Italian dessert with espresso, mascarpone & cocoa', img: 'https://images.unsplash.com/photo-1571877227200-c0gae3a37be?auto=format&fit=crop&q=80&w=500' },
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 lg:px-20 bg-[#1A4228] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-4 block">Curated Taste</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white">Menu Highlights</h2>
          </div>
          <button 
            onClick={onSeeFullMenu}
            className="flex items-center gap-2 group text-white/70 hover:text-white transition-colors font-medium text-sm tracking-wider uppercase"
          >
            View Full Menu
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-10 hide-scrollbar snap-x">
          {dishes.map((dish, i) => (
            <div 
              key={i} 
              className="menu-item flex-shrink-0 w-[320px] bg-alchemist-800 border border-white/5 p-4 rounded-2xl group snap-center hover:bg-alchemist-700 transition-colors cursor-pointer"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl mb-6">
                <img 
                  src={dish.img} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="flex justify-between items-start gap-4 mb-3">
                <h4 className="text-lg font-bold text-white group-hover:text-gold transition-colors">{dish.name}</h4>
                <span className="text-gold font-bold">{dish.price}</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed font-light">{dish.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
