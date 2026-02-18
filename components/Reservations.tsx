
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Reservations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.res-content', {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      });
      gsap.from('.res-form', {
        scale: 0.98,
        opacity: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.res-form',
          start: 'top 85%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-6 lg:px-20 bg-alchemist-900 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="res-content text-center mb-16 space-y-6">
          <span className="text-gold uppercase tracking-[0.4em] font-bold text-[11px] block">RESERVATIONS</span>
          <h2 className="text-4xl md:text-6xl font-black text-white font-display tracking-tight">Secure Your Experience</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Join us for an evening of alchemy and ambiance. We recommend booking in advance for Friday and Saturday evenings.
          </p>
        </div>

        <div className="res-form bg-alchemist-800/50 backdrop-blur-sm p-1 md:p-1.5 rounded-2xl border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-1 md:gap-0 p-3 md:p-6 bg-alchemist-800 rounded-xl">
            {/* Date Input */}
            <div className="px-4 py-3 md:border-r border-white/5 flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">DATE</label>
              <div className="relative flex items-center group">
                <input 
                  type="date" 
                  className="bg-transparent text-white text-[15px] font-medium w-full outline-none focus:text-gold transition-colors appearance-none" 
                  defaultValue="2024-05-24"
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold absolute right-0 pointer-events-none"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              </div>
            </div>

            {/* Time Input */}
            <div className="px-4 py-3 md:border-r border-white/5 flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">TIME</label>
              <div className="relative flex items-center group cursor-pointer">
                <select className="bg-transparent text-white text-[15px] font-medium w-full outline-none focus:text-gold transition-colors appearance-none cursor-pointer">
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                  <option>9:00 PM</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold absolute right-0 pointer-events-none"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
            </div>

            {/* Guests Input */}
            <div className="px-4 py-3 md:border-r border-white/5 flex flex-col gap-1.5">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">GUESTS</label>
              <div className="relative flex items-center group cursor-pointer">
                <select className="bg-transparent text-white text-[15px] font-medium w-full outline-none focus:text-gold transition-colors appearance-none cursor-pointer">
                  <option>2 Guests</option>
                  <option>4 Guests</option>
                  <option>6 Guests</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold absolute right-0 pointer-events-none"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
            </div>

            {/* Submit */}
            <div className="px-4 pt-4 md:pt-0">
              <button className="w-full bg-gold hover:bg-gold-light text-alchemist-950 font-bold text-sm tracking-widest uppercase py-4 rounded-lg shadow-xl shadow-gold/10 transition-all active:scale-95 flex items-center justify-center gap-2">
                Find a Table
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              </button>
            </div>
          </div>
          
          <div className="flex justify-between items-center px-6 py-4 bg-alchemist-800/40 rounded-b-xl border-t border-white/5">
            <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50"></span>
              Powered by OpenTable
            </div>
            <div className="text-[10px] text-white/30 font-medium">
              For parties larger than 8, please contact us directly.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
