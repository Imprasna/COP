import React, { useEffect, useRef, useState } from 'react';

interface LazyImageProps {
  src: string;
  alt?: string;
  containerClassName?: string;
  imgClassName?: string;
}

export default function LazyImage({ src, alt = '', containerClassName = '', imgClassName = '' }: LazyImageProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // IntersectionObserver to defer loading until near viewport
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: '300px' }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${containerClassName}`}>
      {/* skeleton / shimmer while image loads */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#1f1f1f] to-[#141414] animate-pulse" />
      )}

      {isVisible && (
        <img
          src={src}
          alt={alt}
          className={`${imgClassName} transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}
