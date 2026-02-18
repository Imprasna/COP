
import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MenuList: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('SIGNATURE COCKTAILS');

  const menuData: Record<string, { left: any[], right: any[] }> = {
    'SIGNATURE COCKTAILS': {
      left: [
        {
          name: 'The Obsidian Martini',
          price: '$18',
          desc: 'Gin, dry vermouth, activated charcoal, lemon twist.',
          img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Gold Rush Sour',
          price: '$22',
          desc: 'Bourbon, honey syrup, lemon juice, 24k gold flakes.',
          img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Smoked Old Fashioned',
          price: '$20',
          desc: 'Rye whiskey, angostura bitters, maple wood smoke infusion.',
          img: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=200'
        }
      ],
      right: [
        {
          name: 'Violet Aviator',
          price: '$19',
          desc: 'Empress gin, maraschino liqueur, crème de violette, lemon.',
          img: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Szechuan Margarita',
          price: '$18',
          desc: 'Reposado tequila, szechuan pepper syrup, lime, chili rim.',
          img: 'https://images.unsplash.com/photo-1563515081-3ad58f3d3fd4?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Midnight Espresso',
          price: '$21',
          desc: 'Vodka, cold brew concentrate, coffee liqueur, vanilla bean.',
          img: 'https://images.unsplash.com/photo-1545438102-799c3991ffb2?auto=format&fit=crop&q=80&w=200'
        }
      ]
    },
    'SMALL PLATES': {
      left: [
        {
          name: 'Truffle Arancini',
          price: '$16',
          desc: 'Wild mushroom, arborio rice, truffle aioli, parmesan.',
          img: 'https://images.unsplash.com/photo-1541014741259-df549fa3bb68?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Wagyu Carpaccio',
          price: '$26',
          desc: 'A5 wagyu, caper berries, horseradish cream, sourdough.',
          img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Crispy Pork Belly',
          price: '$22',
          desc: 'Glazed with maple bourbon, apple slaw, crackling.',
          img: 'https://images.unsplash.com/photo-1593001874117-c99c381c002c?auto=format&fit=crop&q=80&w=200'
        }
      ],
      right: [
        {
          name: 'Oysters Rockfeller',
          price: '$28',
          desc: 'Spinach, butter, breadcrumbs, pernod, six pieces.',
          img: 'https://images.unsplash.com/photo-1534604973900-c41ab4c3c3c0?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Burrata & Stone Fruit',
          price: '$19',
          desc: 'Creamy burrata, grilled peaches, balsamic reduction, basil.',
          img: 'https://images.unsplash.com/photo-1529694157872-4e0c0f3b238b?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Lobster Sliders',
          price: '$32',
          desc: 'Poached lobster, brioche bun, lemon chive mayo.',
          img: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&q=80&w=200'
        }
      ]
    },
    'WINE & SPIRITS': {
      left: [
        {
          name: 'Château Margaux 2015',
          price: '$145',
          desc: 'Premier Grand Cru Classé, Margaux, Bordeaux.',
          img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Macallan 18 Year',
          price: '$55',
          desc: 'Sherry Oak Cask, Highland Single Malt Scotch Whisky.',
          img: 'https://images.unsplash.com/photo-1527281405159-35d5b5d94435?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Hibiki Harmony',
          price: '$42',
          desc: 'Master Select Japanese Blended Whisky.',
          img: 'https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80&w=200'
        }
      ],
      right: [
        {
          name: 'Krug Grande Cuvée',
          price: '$85',
          desc: 'Champagne, France. Rich, complex, iconic.',
          img: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Pappy Van Winkle 12',
          price: '$95',
          desc: 'Special Reserve, Bourbon Whiskey.',
          img: 'https://images.unsplash.com/photo-1550985543-f47f38aeee65?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Dom Pérignon 2012',
          price: '$75',
          desc: 'Vintage Champagne, Epernay, France.',
          img: 'https://images.unsplash.com/photo-1594499468121-f45e83e30df4?auto=format&fit=crop&q=80&w=200'
        }
      ]
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal columns on mount/category change
      gsap.fromTo('.menu-column', 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out'
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  const handleCategoryChange = (cat: string) => {
    if (cat === activeCategory) return;
    
    // Quick exit animation
    gsap.to('.menu-column', {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        setActiveCategory(cat);
      }
    });
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 lg:px-20 bg-alchemist-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-20 border-b border-white/5">
          {['SIGNATURE COCKTAILS', 'SMALL PLATES', 'WINE & SPIRITS'].map((cat) => (
            <button 
              key={cat} 
              onClick={() => handleCategoryChange(cat)}
              className={`pb-6 text-xs md:text-[13px] font-bold tracking-[0.2em] transition-all relative group ${
                activeCategory === cat ? 'text-white' : 'text-white/40 hover:text-white'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-gold flex justify-center">
                  <div className="w-1 h-1 bg-gold absolute top-1.5 rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Menu Columns */}
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-16">
          <div className="menu-column space-y-12">
            <h3 className="text-2xl font-display italic text-white/90 border-b border-white/5 pb-6">
              {activeCategory === 'SIGNATURE COCKTAILS' ? "The Alchemist's Selection" : 
               activeCategory === 'SMALL PLATES' ? "From the Chef" : "The Cellar"}
            </h3>
            <div className="space-y-10">
              {menuData[activeCategory].left.map((item) => (
                <div key={item.name} className="flex gap-6 group cursor-pointer">
                  <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 overflow-hidden rounded-lg bg-alchemist-800 border border-white/5">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-[17px] font-bold text-white group-hover:text-gold transition-colors">{item.name}</h4>
                      <span className="text-gold font-bold text-[17px]">{item.price}</span>
                    </div>
                    <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="menu-column space-y-12">
            <h3 className="text-2xl font-display italic text-white/90 border-b border-white/5 pb-6">
              {activeCategory === 'SIGNATURE COCKTAILS' ? "Modern Classics" : 
               activeCategory === 'SMALL PLATES' ? "Seasonal Pairings" : "Premium Reserves"}
            </h3>
            <div className="space-y-10">
              {menuData[activeCategory].right.map((item) => (
                <div key={item.name} className="flex gap-6 group cursor-pointer">
                  <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 overflow-hidden rounded-lg bg-alchemist-800 border border-white/5">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="text-[17px] font-bold text-white group-hover:text-gold transition-colors">{item.name}</h4>
                      <span className="text-gold font-bold text-[17px]">{item.price}</span>
                    </div>
                    <p className="text-white/40 text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View Full Menu CTA */}
        <div className="flex justify-center pt-10">
          <button className="flex items-center gap-3 px-10 py-4 rounded-full border border-white/10 hover:border-gold/50 transition-all text-sm font-bold tracking-widest uppercase text-white/70 hover:text-white group">
            View Full Menu PDF
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuList;
