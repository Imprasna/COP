
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-reveal', {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-32 pb-20 px-6 lg:px-20 bg-alchemist-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact Information */}
        <div className="space-y-12">
          <div className="contact-reveal space-y-6">
            <span className="text-gold uppercase tracking-[0.4em] font-bold text-[11px] block">GET IN TOUCH</span>
            <h2 className="text-5xl md:text-7xl font-black text-white font-display tracking-tight leading-none">Let's Create Magic</h2>
            <p className="text-white/50 text-lg max-w-lg font-light leading-relaxed">
              Whether you're looking for a private event, a special celebration, or just want to say hello, we're here to listen.
            </p>
          </div>

          <div className="contact-reveal space-y-10">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-alchemist-950 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-2">Location</h4>
                <p className="text-white/60 font-light">123 Alchemist Lane, Noir District<br />London, EC1A 1BB</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-alchemist-950 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-2">Email</h4>
                <p className="text-white/60 font-light">elixir@luxnoir.com<br />events@luxnoir.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-alchemist-950 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-2">Phone</h4>
                <p className="text-white/60 font-light">+44 (0) 20 7946 0123</p>
              </div>
            </div>
          </div>

          <div className="contact-reveal pt-10 border-t border-white/5">
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-6">Follow the Shadows</h4>
            <div className="flex gap-8">
              {['Instagram', 'Facebook', 'Twitter'].map(s => (
                <a key={s} href="#" className="text-gold hover:text-white transition-colors text-sm font-medium tracking-widest uppercase">{s}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-reveal bg-alchemist-900 p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          
          <form className="relative z-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-alchemist-800 border border-white/5 rounded-xl px-6 py-4 text-white outline-none focus:border-gold/50 transition-all placeholder:text-white/10"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-alchemist-800 border border-white/5 rounded-xl px-6 py-4 text-white outline-none focus:border-gold/50 transition-all placeholder:text-white/10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Subject</label>
              <select className="w-full bg-alchemist-800 border border-white/5 rounded-xl px-6 py-4 text-white outline-none focus:border-gold/50 transition-all appearance-none cursor-pointer">
                <option>General Inquiry</option>
                <option>Private Events</option>
                <option>Press & Media</option>
                <option>Careers</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Your Message</label>
              <textarea 
                rows={5}
                placeholder="How can we help you?"
                className="w-full bg-alchemist-800 border border-white/5 rounded-xl px-6 py-4 text-white outline-none focus:border-gold/50 transition-all placeholder:text-white/10 resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-gold hover:bg-gold-light text-alchemist-950 font-bold text-sm tracking-[0.2em] uppercase py-5 rounded-xl shadow-2xl shadow-gold/10 transition-all active:scale-[0.98] flex items-center justify-center gap-3">
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
