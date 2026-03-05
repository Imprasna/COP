
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import reviewsData from '../reviews.json';

interface Review {
  title?: string;
  url?: string;
  stars: number;
  name: string;
  reviewUrl?: string;
  text: string;
}

const allReviews: Review[] = reviewsData as unknown as Review[];

const Reviews: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const prevVisibleRef = useRef<number>(visibleCount);

  const visibleReviews = allReviews.slice(0, visibleCount);

  const totalReviews = allReviews.length;
  const avgRating = (allReviews.reduce((s, r) => s + (r.stars || 0), 0) / Math.max(1, totalReviews)).toFixed(1);

  const loadMore = () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    
    // Simulate network delay
    setTimeout(() => {
      const nextCount = visibleCount + 10;
      setVisibleCount(nextCount);
      setIsLoading(false);
      if (nextCount >= allReviews.length) {
        setHasMore(false);
      }
    }, 1200);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Set perspective on the container for 3D effects
      gsap.set(containerRef.current, { perspective: 1200 });

      // Initial animation for the first batch
      gsap.from('.review-card', {
        opacity: 1,
        y: 100,
        z: -100,
        rotationX: 25,
        rotationY: -5,
        scale: 0.9,
        duration: 1.5,
        stagger: {
          amount: 1,
          grid: "auto",
          from: "start"
        },
        ease: 'expo.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        }
      });

      // Subtle floating animation for all cards
      gsap.to('.review-card', {
        y: "random(-10, 10)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: "random(0, 2)"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animation for newly added reviews (animate only the newly appended cards)
  useEffect(() => {
    const prev = prevVisibleRef.current;
    const added = visibleCount - prev;
    if (added > 0) {
      const cards = Array.from(document.querySelectorAll('.review-card')) as Element[];
      const newCards = cards.slice(-added);
      gsap.from(newCards, {
        opacity: 1,
        y: 80,
        z: -50,
        rotationX: 20,
        scale: 0.85,
        duration: 1.2,
        stagger: 0.1,
        ease: 'elastic.out(1, 0.8)',
      });
    }
    prevVisibleRef.current = visibleCount;
  }, [visibleCount]);

  return (
    <section ref={containerRef} className="py-32 px-6 lg:px-20 bg-alchemist-950 min-h-screen relative overflow-hidden">
      {/* Background Decorative Elements - Enhanced */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(26,66,40,0.1),transparent_70%)] pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-900/10 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-800/5 blur-[200px] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.1)]">
            <span className="w-2 h-2 rounded-full bg-gold shadow-[0_0_10px_rgba(212,175,55,0.8)] animate-ping"></span>
            <span className="text-gray-400 uppercase tracking-[0.5em] font-black text-[12px]">GUEST CHRONICLES</span>
          </div>
          
          <h2 className="text-7xl md:text-9xl font-black text-white font-display tracking-tighter leading-[0.85] uppercase">
            Voices from <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-emerald-400 to-gold bg-[length:200%_auto] animate-gradient-x drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">The Shadows</span>
          </h2>
          
          <p className="text-white/40 text-xl max-w-2xl mx-auto font-light leading-relaxed italic">
            "In every sip, a story. In every shadow, a secret shared."
          </p>

          <div className="flex flex-col items-center gap-6 pt-8">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="text-gold drop-shadow-[0_0_12px_rgba(212,175,55,0.6)] transform hover:scale-110 transition-transform cursor-default">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 bg-white/5 px-6 py-2 rounded-full border border-white/5">
              <span className="text-white font-black text-2xl tracking-tighter">{avgRating}</span>
              <span className="w-[1px] h-4 bg-white/20"></span>
              <span className="text-white/50 text-[11px] font-bold tracking-[0.3em] uppercase">{totalReviews} REVIEWS</span>
            </div>
          </div>
        </div>

        {/* Masonry Layout - Enhanced Spacing */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
          {visibleReviews.map((review, idx) => (
            <div 
              key={`${review.name}-${idx}`} 
              className="review-card break-inside-avoid group perspective-1000"
            >
              <div className="bg-gradient-to-br from-alchemist-900/90 to-black p-12 rounded-[2.5rem] border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-700 hover:border-emerald-500/40 hover:shadow-emerald-500/10 hover:-translate-y-4 hover:rotate-1 relative overflow-hidden backdrop-blur-xl">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 text-emerald-500/5 text-[12rem] font-serif pointer-events-none group-hover:text-emerald-500/10 transition-all duration-700 select-none">“</div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 blur-[80px] -mr-20 -mt-20 group-hover:bg-emerald-500/15 transition-all duration-700"></div>
                
                <div className="flex items-center gap-6 mb-10 relative z-10">
                  <div className="relative group/avatar">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center border-2 border-white/10 bg-emerald-800 text-white font-black text-2xl rotate-6 group-hover/avatar:rotate-0 transition-all duration-500 shadow-xl">
                      {review.name ? review.name.charAt(0).toUpperCase() : '?'}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-emerald-500 rounded-xl border-4 border-alchemist-950 flex items-center justify-center shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-black text-base tracking-tight group-hover:text-gold transition-colors">{review.name}</h4>
                    <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-black mt-1.5">{review.title ?? ''}</p>
                  </div>
                </div>

                <div className="flex text-gold mb-8 gap-1.5 relative z-10">
                  {Array.from({ length: review.stars || 0 }).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-[0_0_5px_rgba(212,175,55,0.3)]"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>

                <p className="text-white/80 text-lg leading-relaxed font-light italic relative z-10 tracking-tight">
                  "{review.text}"
                </p>

                  <div className="mt-12 pt-10 border-t border-white/5 flex justify-between items-center relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)] animate-pulse"></div>
                    <span className="text-[11px] font-black text-emerald-500/80 uppercase tracking-[0.4em]">Verified Alchemist</span>
                  </div>
                  <div className="opacity-10 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gold"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section - Redesigned */}
        {hasMore && (
          <div className="mt-40 text-center relative">
            {isLoading ? (
              <div className="flex flex-col items-center gap-8">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 border-2 border-emerald-500/10 rounded-full"></div>
                  <div className="absolute inset-0 border-2 border-t-gold border-r-gold/50 rounded-full animate-spin"></div>
                  <div className="absolute inset-4 border border-emerald-500/20 rounded-full animate-reverse-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gold rounded-full animate-ping"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-gold text-[11px] font-black uppercase tracking-[0.6em] block">Summoning Chronicles</span>
                  <div className="flex gap-1 justify-center">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-1 h-1 bg-gold/40 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-12">
                <button 
                  onClick={loadMore}
                  className="relative px-20 py-8 overflow-hidden rounded-2xl group transition-all duration-700"
                >
                  {/* Button Backgrounds */}
                  <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-gold/60 transition-all duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Button Text */}
                  <div className="relative flex items-center gap-4">
                    <span className="text-white font-black text-sm uppercase tracking-[0.5em] group-hover:tracking-[0.6em] transition-all duration-700">
                      Reveal More Secrets
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold group-hover:translate-y-1 transition-transform duration-500"><path d="m7 13 5 5 5-5"/><path d="m7 6 5 5 5-5"/></svg>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute -inset-x-40 top-0 h-full bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-in-out"></div>
                </button>
                
                <div className="flex flex-col items-center gap-4">
                  <div className="flex items-center gap-4 w-full max-w-xs">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
                    <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] whitespace-nowrap">
                      {allReviews.length - visibleCount} REMAINING
                    </span>
                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {!hasMore && (
          <div className="mt-40 text-center">
            <div className="inline-block px-12 py-6 rounded-3xl border border-emerald-500/10 bg-emerald-500/5 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-gold/30"></div>
                <span className="text-gold/60 text-[11px] font-black uppercase tracking-[0.6em]">The Chronicles are Complete</span>
                <div className="w-8 h-[1px] bg-gold/30"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
