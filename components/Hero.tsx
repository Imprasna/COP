
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.hero-content > *', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
      });
      
      gsap.to('.hero-bg', {
        yPercent: 20,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [title]);

  return (
    <section ref={containerRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="hero-bg w-full h-[120%] bg-cover bg-center absolute top-[-10%]" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070')" }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-alchemist-950/20 via-alchemist-950/40 to-alchemist-950"></div>
      </div>

      <div className="hero-content relative z-10 text-center max-w-3xl mx-auto px-6 pt-20">
        <span className="text-gold uppercase tracking-[0.5em] font-bold text-[11px] mb-6 block">EST. 2024</span>
        <h2 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight font-display mb-8">
          {title}
        </h2>
        <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
