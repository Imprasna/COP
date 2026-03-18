
import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MenuList: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  // No tabs: render both categories (FOOD and DRINKS)

  // Simplified menu: only FOOD and DRINKS with a few curated items
  const menuData: Record<string, { left: any[], right: any[] }> = {
    FOOD: {
      left: [
        {
          name: 'Makhmali Chicken Tikka',
          price: '₹499',
          desc: 'Silky chicken tikka with creamy yogurt, almond paste & aromatic spices.',
          img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Penne Alfredo',
          price: '₹449',
          desc: 'Creamy Alfredo pasta with garlic, butter & parmesan cheese.',
          img: 'https://images.unsplash.com/photo-1612874742237-6526221fcf4e?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Pan Seared Prawns',
          price: '₹649',
          desc: 'Gulf prawns with lime butter & herb finish.',
          img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=200'
        }
      ],
      right: [
        {
          name: 'Californian Beef Burger',
          price: '₹549',
          desc: 'Premium beef patty with avocado, bacon & cheddar on a brioche bun.',
          img: 'https://images.unsplash.com/photo-1568901346375-23c9450549e1?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Wine & Cheese Platter (Standard)',
          price: '₹699',
          desc: 'Curated selection of cheeses, charcuterie & artisanal crackers.',
          img: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=200'
        }
      ]
    },
    DRINKS: {
      left: [
        {
          name: 'Gold-Dusted Old Fashioned',
          price: '₹599',
          desc: 'Smoky bourbon, sugar, bitters, finished with a gold dust rim.',
          img: 'https://images.unsplash.com/photo-1541687272231-2b9b1f4a1b0d?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Champagne Spritz',
          price: '₹499',
          desc: 'Light, effervescent blend of champagne, citrus & a touch of herbal liqueur.',
          img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Herbal Negroni',
          price: '₹549',
          desc: 'Gin, herbal vermouth & bitter liqueur with a citrus twist.',
          img: 'https://images.unsplash.com/photo-1532634896-26909d0d5b25?auto=format&fit=crop&q=80&w=200'
        }
      ],
      right: [
        {
          name: 'Signature Espresso Martini',
          price: '₹449',
          desc: 'Vodka, coffee liqueur & fresh espresso — bold, smooth, refined.',
          img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070f5d?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'House Red (Glass)',
          price: '₹349',
          desc: 'Selected sommelier red, pairs beautifully with rich mains.',
          img: 'https://images.unsplash.com/photo-1514361892638-7fc6ec1f2f22?auto=format&fit=crop&q=80&w=200'
        }
      ]
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal columns on mount
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
  }, []);

  // No tab switching required

  return (
    <section ref={sectionRef} className="py-20 px-6 lg:px-20 bg-alchemist-950">
      <div className="max-w-6xl mx-auto">

        {/* Categories removed (no tabs) */}

        {/* Render FOOD and DRINKS stacked (no tabs) */}
        <div className="space-y-20 mb-16">
          {Object.keys(menuData).map((cat) => (
            <div key={cat} className="">
              <h2 className="text-3xl font-display italic text-white/95 mb-8">{cat === 'FOOD' ? 'Food' : 'Drinks'}</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                <div className="menu-column space-y-12">
                  <h3 className="text-2xl font-display italic text-white/90 border-b border-white/5 pb-6">Featured Selection</h3>
                  <div className="space-y-10">
                    {menuData[cat].left.map((item) => (
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
                  <h3 className="text-2xl font-display italic text-white/90 border-b border-white/5 pb-6">Specialty Items</h3>
                  <div className="space-y-10">
                    {menuData[cat].right.map((item) => (
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
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="flex flex-col sm:flex-row justify-center pt-10 gap-4 px-4 max-w-3xl mx-auto w-full">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1l2cVfYwKNu9jXtSQDwoN-bDO3oDz5wx1/view?usp=sharing"
            className="flex items-center gap-3 px-6 py-3 md:px-10 md:py-4 rounded-full border border-white/10 hover:border-gold/50 transition-all text-sm font-bold tracking-widest uppercase text-white/70 hover:text-white group w-full sm:w-auto justify-center text-center"
          >
            View Liquor Menu
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1j6iCllNpbXk1sp3THqnneoEg96LZD1o6/view?usp=sharing"
            className="flex items-center gap-3 px-6 py-3 md:px-10 md:py-4 rounded-full border border-white/10 hover:border-gold/50 transition-all text-sm font-bold tracking-widest uppercase text-white/70 hover:text-white group w-full sm:w-auto justify-center text-center"
          >
            View Food Menu
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
          </a>
        </div>
    </div>
    </section >
  );
};

export default MenuList;
