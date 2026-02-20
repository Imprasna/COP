
import React from 'react';

interface FooterProps {
  onNavigate: (page: 'home' | 'menu' | 'gallery') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-alchemist-950 pt-24 pb-12 px-6 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-8">
            <div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="text-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l-2 18H8L6 3z"/><path d="M12 3v18"/></svg>
              </div>
              <h2 className="text-2xl font-bold tracking-[0.1em] text-white uppercase font-heading">LUX NOIR</h2>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm font-light">
              Where shadows meet brilliance. Experience the finest culinary arts in an atmosphere of mysterious elegance.
            </p>
            <div className="flex gap-4">
              {['IG', 'FB', 'TT'].map(soc => (
                <a key={soc} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-[10px] font-bold text-white/50 hover:border-gold hover:text-gold transition-all">
                  {soc}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 space-y-8">
            <h5 className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/60 relative inline-block">
              Contact
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-gold"></span>
            </h5>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-gold material-symbols-outlined text-[18px]">location</span>
                <p className="text-white/40 text-sm leading-relaxed">
                  C10, Ravilla Towers, Anna Nagar 3rd Main Rd,<br /> W Block, Anna Nagar, Chennai,<br /> Tamil Nadu - 600040<br />
                </p>
              </div>
              <div className="flex items-start gap-4 flex items-center">
                <span className="text-gold material-symbols-outlined text-[18px] mb-0">call</span>
                <p className="text-white/40 text-sm"><a href="tel:+91 93601 36063" className="mb-0 hover:text-gold transition-colors">+91 93601 36063</a></p>
              </div>
              <div className="flex items-start gap-4 flex items-center">
                <span className="text-gold material-symbols-outlined text-[18px]">mail</span>
                <p className="text-white/40 text-sm"><a href="mailto:copanr2024@gmail.com" className="hover:text-gold transition-colors">copanr2024@gmail.com</a></p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="lg:col-span-4 space-y-8">
            <h5 className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/60 relative inline-block">
              Opening Hours
              <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-gold"></span>
            </h5>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/40 text-sm">Mon - Wed</span>
                <span className="text-white/60 text-sm font-medium uppercase tracking-tighter">11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-white/40 text-sm">Thu - Sat</span>
                <span className="text-white/60 text-sm font-bold uppercase tracking-tighter">11:00 AM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40 text-sm">Sunday</span>
                <span className="text-white/60 text-sm font-medium uppercase tracking-tighter">11:00 AM - 11:00 PM</span>
              </div>
              <div className="pt-4">
                <a href="https://maps.app.goo.gl/S9NTXife9CqyJjH38?g_st=ic" className="text-gold text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-transform">
                  GET DIRECTIONS
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-widest font-medium">© {year} Chambers of Potions. All rights reserved.</p>
          <div className="flex gap-10 items-center">
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/30 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
