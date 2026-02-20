
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Armchair, Martini, Music2, Utensils } from 'lucide-react';

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Top section text animation
      gsap.from('.exp-text-content > *', {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });

      // Feature boxes animation (the 4 boxes)
      gsap.from('.exp-card', {
        y: 30,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.exp-grid',
          start: 'top 80%',
        }
      });

      // Visual cards animation (lower section)
      gsap.from('.visual-card', {
        y: 60,
        opacity: 1,
        stagger: 0.2,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.visual-cards-grid',
          start: 'top 85%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { title: 'Ambience', desc: 'Velvet booths and dim lighting designed for privacy and comfort.', icon: <Armchair /> },
    { title: 'Mixology', desc: 'Expertly crafted cocktails using rare and premium spirits.', icon: <Martini /> },
    { title: 'Cuisine', desc: 'Gourmet small plates designed specifically for sharing.', icon: <Utensils /> },
    { title: 'Jazz Nights', desc: 'Live smooth jazz performances every Friday and Saturday.', icon: <Music2 /> },
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 lg:px-20 bg-alchemist-950">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Top Feature Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side Content */}
          <div className="lg:col-span-5 exp-text-content space-y-10 lg:sticky lg:top-32">
            <div className="space-y-6">
              <h3 className="text-5xl md:text-6xl font-bold font-sans tracking-tight text-white leading-tight">The Experience</h3>
              <p className="text-white/60 text-lg leading-relaxed max-w-lg font-light">
                Immerse yourself in our Modern Noir aesthetic. We've curated every detail—from the velvet booths to the dim, amber lighting—to foster intimate conversations and unforgettable nights.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-10 md:gap-16 pt-4">
              <div className="border-l-[2px] border-gold pl-5">
                <div className="text-2xl font-bold text-white mb-0.5">50+</div>
                <div className="text-[11px] uppercase tracking-[0.1em] text-white/40 font-bold font-sans">Signature Cocktails</div>
              </div>
              <div className="border-l-[2px] border-gold pl-5">
                <div className="text-2xl font-bold text-white mb-0.5 uppercase">Private</div>
                <div className="text-[11px] uppercase tracking-[0.1em] text-white/40 font-bold font-sans">VIP Lounges</div>
              </div>
            </div>
          </div>

          {/* Right Side Feature Grid - The 4 Boxes */}
          <div className="lg:col-span-7 exp-grid grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {features.map((f, i) => (
              <div key={i} className="exp-card p-8 bg-alchemist-900 border border-white/[0.03] rounded-2xl group hover:border-gold/20 transition-all duration-500 shadow-xl shadow-black/10 h-full min-h-[180px] flex flex-col">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-6 transition-all duration-500">
                  <div className="w-9 h-9 bg-alchemist-800 rounded-lg flex items-center justify-center text-gold shadow-sm transition-colors duration-300 group-hover:bg-gold group-hover:text-alchemist-950">
                    {typeof f.icon === 'string' ? (
                      <span className="material-symbols-outlined text-[18px]">{f.icon}</span>
                    ) : (
                      React.isValidElement(f.icon) ? React.cloneElement(f.icon as React.ReactElement, { className: 'w-7 h-7 text-white' }) : null
                    )}
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-3 text-white transition-colors group-hover:text-gold font-sans">{f.title}</h4>

                <p className="text-white/40 text-[15px] leading-relaxed font-light flex-1">{f.desc}</p>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom Visual Highlights Row */}
        <div className="visual-cards-grid grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Main Lounge */}
          <div className="visual-card relative rounded-2xl overflow-hidden group cursor-pointer h-[400px] md:h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="The Main Lounge" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 space-y-1">
              <h4 className="text-xl font-bold text-white tracking-wide font-sans">The Main Lounge</h4>
              <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold">Where conversations flow</p>
            </div>
          </div>

          {/* Card 2: Signature Sips */}
          <div className="visual-card relative rounded-2xl overflow-hidden group cursor-pointer h-[400px] md:h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="Signature Sips" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h4 className="text-xl font-bold text-white tracking-wide font-sans">Signature Sips</h4>
            </div>
          </div>

          {/* Card 3: The Bar */}
          <div className="visual-card relative rounded-2xl overflow-hidden group cursor-pointer h-[400px] md:h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=600" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              alt="The Bar" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h4 className="text-xl font-bold text-white tracking-wide font-sans">The Bar</h4>
            </div>
          </div>
        </div>
      </div>
      
      {/* Material Symbols support */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,1..1,0" />
    </section>
  );
};

export default Experience;
