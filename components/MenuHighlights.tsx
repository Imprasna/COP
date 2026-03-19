
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface MenuHighlightsProps {
  onSeeFullMenu: () => void;
}

const MenuHighlights: React.FC<MenuHighlightsProps> = ({ onSeeFullMenu }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.menu-item', {
        x: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const dishes = [
    {
      name: 'Crème di Fungi (Creamy Mushroom Soup)',
      price: '₹349',
      desc: 'Rich and velvety mushroom soup finished with a savory bacon garnish',
      img: 'https://images.pexels.com/photos/29653178/pexels-photo-29653178.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: "Gillyweed Caesar's (Caesar Salad)",
      price: '₹399',
      desc: 'Crisp romaine lettuce tossed with classic Caesar dressing, crunchy croutons, and parmesan',
      img: 'https://images.pexels.com/photos/33674388/pexels-photo-33674388.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Schezwan Style Chilly Paneer',
      price: '₹429',
      desc: 'Wok-tossed paneer cubes in a spicy, bold Schezwan sauce with peppers and onions',
      img: 'https://images.pexels.com/photos/29631461/pexels-photo-29631461.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Butter Chicken Masala',
      price: '₹549',
      desc: 'Tender chicken pieces simmered in a creamy, aromatic tomato and butter gravy',
      img: 'https://images.pexels.com/photos/9609844/pexels-photo-9609844.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Kongu Nadu Mutton Biriyani',
      price: '₹649',
      desc: 'Authentic regional biryani slow-cooked with succulent mutton and traditional spices',
      img: 'https://images.pexels.com/photos/33947401/pexels-photo-33947401.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Bufalina Pizza (Margherita)',
      price: '₹499',
      desc: 'Classic wood-fired pizza topped with fresh tomato sauce, buffalo mozzarella, and basil',
      img: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Beer Battered Fish & Chips',
      price: '₹599',
      desc: 'Crispy golden beer-battered fish served with thick-cut fries and tartar sauce',
      img: 'https://images.pexels.com/photos/2966196/pexels-photo-2966196.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Makhmali Chicken Tikka',
      price: '₹479',
      desc: 'Silky smooth chicken skewers marinated in cream and mild spices, served with mint chutney',
      img: 'https://images.pexels.com/photos/29173114/pexels-photo-29173114.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Chettinad Mutton Sukka',
      price: '₹579',
      desc: 'Dry-roasted bone-in mutton tossed in a fiery blend of hand-ground Chettinad spices',
      img: 'https://images.pexels.com/photos/9609846/pexels-photo-9609846.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Burmese Style Khao Suey',
      price: '₹529',
      desc: 'Fragrant coconut milk noodle soup served with boiled egg, fresh herbs, and condiments',
      img: 'https://images.pexels.com/photos/28907756/pexels-photo-28907756.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Creamy Butter Garlic Prawns',
      price: '₹629',
      desc: 'Fresh prawns sautéed in a rich garlic butter sauce, served in a traditional clay pot',
      img: 'https://images.pexels.com/photos/16273763/pexels-photo-16273763.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Kurkuri Paneer',
      price: '₹389',
      desc: 'Crunchy, deep-fried paneer cubes served with a zesty signature dipping sauce',
      img: 'https://images.pexels.com/photos/9646858/pexels-photo-9646858.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Tres Leches Cake',
      price: '₹349',
      desc: 'A light sponge cake soaked in three kinds of milk, topped with whipped cream',
      img: 'https://images.pexels.com/photos/32590852/pexels-photo-32590852.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      name: 'Hot Fudge Brownie',
      price: '₹299',
      desc: 'Warm chocolate brownie smothered in rich melted chocolate sauce',
      img: 'https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg'
    }
  ];

  return (
    <section
      ref={containerRef}
      className="py-24 px-6 lg:px-20 bg-[#1A4228] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-4 block">Curated Taste</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white">Menu Highlights</h2>
          </div>
          <button
            onClick={onSeeFullMenu}
            className="flex items-center gap-2 group text-white/70 hover:text-white transition-colors font-medium text-sm tracking-wider uppercase"
          >
            View Full Menu
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </button>
        </div>

        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          navigation={false}
          pagination={{ clickable: false }}
          spaceBetween={10}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          slidesPerView={1}
          breakpoints={{
            320: { slidesPerView: 1.05, spaceBetween: 12 },
            640: { slidesPerView: 1.3, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 18 },
            1024: { slidesPerView: 2.4, spaceBetween: 20 },
            1280: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="pb-10"
        >
          {dishes.map((dish, i) => (
            <SwiperSlide key={i}>
              <div
                className="menu-item w-full max-w-[320px] mx-auto bg-alchemist-800 border border-white/5 p-4 rounded-2xl group hover:bg-alchemist-700 transition-colors cursor-pointer"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl mb-6">
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h4 className="text-lg font-bold text-white group-hover:text-gold transition-colors">{dish.name}</h4>
                  <span className="text-gold font-bold">{dish.price}</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed font-light">{dish.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MenuHighlights;
