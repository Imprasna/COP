
import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

type GalleryItemType = 'image' | 'social' | 'review';

interface GalleryItem {
  id: number;
  type: GalleryItemType;
  category?: 'CULINARY ART' | 'INTERIORS' | 'SOCIAL EVENTS';
  src?: string;
  span?: number;
  featured?: boolean;
  content?: string;
  quote?: string;
  author?: string;
  role?: string;
  avatar?: string;
}

const Gallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('ALL MOMENTS');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const galleryItems: GalleryItem[] = [
    { id: 1, type: 'image', category: 'CULINARY ART', src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200', span: 1 },
    { id: 2, type: 'social', content: 'TAG US', span: 1 },
    { id: 3, type: 'image', category: 'INTERIORS', src: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=1200', span: 1 },
    { id: 4, type: 'image', category: 'INTERIORS', src: 'https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=1200', span: 1, featured: true },
    { id: 5, type: 'image', category: 'SOCIAL EVENTS', src: 'https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=1200', span: 1 },
    { id: 6, type: 'image', category: 'CULINARY ART', src: 'https://images.unsplash.com/photo-1534604973900-c41ab4c3c3c0?auto=format&fit=crop&q=80&w=1200', span: 1 },
    { id: 7, type: 'image', category: 'SOCIAL EVENTS', src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1200', span: 1 },
    { id: 8, type: 'image', category: 'INTERIORS', src: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=1200', span: 1 },
    { 
      id: 9, 
      type: 'review', 
      quote: '"An absolute masterpiece of design and flavor. The atmosphere is unmatched in the city."',
      author: 'JAMES D.',
      role: 'FOOD CRITIC',
      avatar: 'https://i.pravatar.cc/100?u=james'
    },
    { id: 10, type: 'image', category: 'CULINARY ART', src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1200', span: 1 },
    { id: 11, type: 'image', category: 'SOCIAL EVENTS', src: 'https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?auto=format&fit=crop&q=80&w=1200', span: 1 },
    { id: 12, type: 'image', category: 'CULINARY ART', src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=1200', span: 1 },
  ];

  const filteredItems = galleryItems.filter(item => 
    activeTab === 'ALL MOMENTS' || item.category === activeTab || item.type !== 'image'
  );

  const tabs = ['ALL MOMENTS', 'CULINARY ART', 'INTERIORS', 'SOCIAL EVENTS'];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header and description
      gsap.from('.gallery-header > *', {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out'
      });

      // Grid items entry
      gsap.from('.gallery-grid-item', {
        scale: 0.9,
        opacity: 0,
        stagger: 0.03,
        duration: 0.8,
        ease: 'power2.out',
        clearProps: 'all'
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div ref={containerRef} className="pt-32 pb-20 bg-alchemist-950 min-h-screen">
      {/* Header Section */}
      <section className="px-6 lg:px-20 mb-16 text-center lg:text-left">
        <div className="gallery-header max-w-4xl">
          <span className="text-gold uppercase tracking-[0.4em] font-bold text-[11px] mb-4 block">THE COLLECTION</span>
          <h2 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tight font-heading uppercase mb-8">
            Visual Chronicles
          </h2>
          <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Curated moments of culinary art and nightlife. An intimate look into the shadows and lights that define the Lux Noir experience.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-6 lg:px-20 mb-12">
        <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 border-b border-white/5">
          {tabs.map((tab) => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)}
              className={`pb-5 text-[11px] font-bold tracking-[0.2em] transition-all relative ${
                activeTab === tab ? 'text-white' : 'text-white/40 hover:text-white'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"></span>
              )}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 lg:px-20 mb-20">
        <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`gallery-grid-item aspect-square relative rounded-xl overflow-hidden group border border-white/5 transition-all duration-500 hover:border-gold/30 hover:shadow-2xl hover:shadow-gold/5 ${
                item.type === 'image' ? 'cursor-pointer' : ''
              }`}
              onClick={() => item.type === 'image' && item.src && openLightbox(item.src)}
            >
              {item.type === 'image' && (
                <>
                  <img 
                    src={item.src} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt="Gallery" 
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gold/90 text-alchemist-950 flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
                    </div>
                  </div>
                  {item.featured && (
                    <div className="absolute top-4 right-4 bg-gold text-alchemist-950 text-[10px] font-bold px-2 py-1 uppercase tracking-widest rounded-sm z-10 shadow-lg">
                      FEATURED
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>
                </>
              )}
              {item.type === 'social' && (
                <div className="w-full h-full bg-alchemist-900 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-14 h-14 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                  </div>
                  <h4 className="text-2xl font-black uppercase mb-2 tracking-widest text-white">TAG US</h4>
                  <p className="text-white/40 text-[11px] mb-8 uppercase tracking-[0.2em]">@LuxNoirOfficial #LuxNoirNights</p>
                  <button className="px-6 py-3 border border-white/20 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-alchemist-950 hover:border-gold transition-all duration-300">
                    VIEW INSTAGRAM
                  </button>
                </div>
              )}
              {item.type === 'review' && (
                <div className="w-full h-full bg-alchemist-900 flex flex-col justify-center p-10 border border-white/5">
                  <div className="flex gap-1 text-gold mb-6">
                    {[1, 2, 3, 4, 5].map(s => (
                      <svg key={s} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    ))}
                  </div>
                  <p className="text-white/80 italic text-[16px] md:text-lg leading-relaxed mb-8 font-display">
                    {item.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-alchemist-700 overflow-hidden border border-white/10">
                      <img src={item.avatar} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="text-xs font-black uppercase tracking-widest text-white">{item.author}</h5>
                      <p className="text-gold text-[9px] uppercase tracking-[0.3em] font-bold">{item.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && selectedImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12 animate-[fadeIn_0.3s_ease-out]"
          onClick={closeLightbox}
        >
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl"></div>
          <button 
            className="absolute top-6 right-6 z-10 p-4 text-white/50 hover:text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          <div 
            className="relative max-w-6xl w-full h-full flex items-center justify-center animate-[zoomIn_0.4s_cubic-bezier(0.34,1.56,0.64,1)]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/5" 
              alt="Lightbox view" 
            />
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.9) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
      `}</style>
    </div>
  );
};

export default Gallery;
