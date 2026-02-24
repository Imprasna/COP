
import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MenuList: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('PAIRING & FUSION PLATES');

  const menuData: Record<string, { left: any[], right: any[] }> = {
    'PAIRING & FUSION PLATES': {
      left: [
        {
          name: 'Wine & Cheese Platter (Premium)',
          price: '₹799',
          desc: 'Selection of aged cheeses, cured meats, wine pairings, artisanal crackers & preservation fruits.',
          img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Pan Seared Prawns & Tequila Based Potion',
          price: '₹649',
          desc: 'Gulf prawns with lime-tequila sauce, cilantro, chili & aromatic tequila infusion.',
          img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Vodka Pani Puri',
          price: '₹499',
          desc: 'Gourmet reimagining of pani puri with vodka-infused tamarind water, spiced potato croquettes.',
          img: 'https://images.unsplash.com/photo-1599599810694-b3b137c828a7?auto=format&fit=crop&q=80&w=200'
        }
      ],
      right: [
        {
          name: 'Wine & Cheese Platter (Standard)',
          price: '₹699',
          desc: 'Curated selection of cheeses, charcuterie, olives, nuts, jams & crackers.',
          img: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Spaghetti In Bloody Mary Sauce',
          price: '₹549',
          desc: 'Al dente spaghetti with tomato-vodka sauce, horseradish, Worcestershire & spices.',
          img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=200'
        }
      ]
    },
    'TANDOOR & KEBABS': {
      left: [
        {
          name: 'Mutton Galouti Kebab',
          price: '₹599',
          desc: 'Melt-in-mouth spiced minced mutton kebabs with aromatic spices & herbs.',
          img: 'https://images.unsplash.com/photo-1599599810694-b3b137c828a7?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Tandoori Jhingha (Prawns)',
          price: '₹599',
          desc: 'Juicy prawns marinated in tandoori spices, yogurt & lemon, flame-grilled.',
          img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Makhmali Chicken Tikka',
          price: '₹499',
          desc: 'Silky chicken tikka with creamy yogurt, almond paste & aromatic spices.',
          img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=200'
        }
      ],
      right: [
        {
          name: 'Mutton Sheekh Kebab',
          price: '₹599',
          desc: 'Succulent mutton kebabs on skewers with ginger, garlic and traditional spices.',
          img: 'https://images.unsplash.com/photo-1555939594-58d7cb561341?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Achari Fish Tikka',
          price: '₹549',
          desc: 'Tender fish tikka marinated with pickle spices creating a tangy, flavorful bite.',
          img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Pesto Chicken Tikka',
          price: '₹499',
          desc: 'Chicken tikka infused with Italian basil pesto, a fusion of Indian & Mediterranean flavors.',
          img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=200'
        }
      ]
    },
    'SMALL PLATES (NON-VEG)': {
      left: [
        {
          name: 'Creamy Butter Garlic Prawns',
          price: '₹599',
          desc: 'Gulf prawns in silky butter-garlic sauce with white wine, cream & fresh herbs.',
          img: 'https://images.unsplash.com/photo-1599599810694-b3b137c828a7?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Beer Infused Tempura Prawns',
          price: '₹599',
          desc: 'Crispy beer-battered prawns with light tempura coating, served with spicy mayo.',
          img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Beer Battered Fish & Chips',
          price: '₹549',
          desc: 'Flaky white fish in crispy beer batter with hand-cut fries & tartar sauce.',
          img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Mexican Chicken Flautas',
          price: '₹399',
          desc: 'Crispy rolled tortillas filled with shredded chicken, served with sour cream & jalapeños.',
          img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=200'
        }
      ],
      right: [
        {
          name: 'Lamb Cheese Balls',
          price: '₹599',
          desc: 'Tender lamb meatballs with melted cheese core, crispy exterior, herb sauce.',
          img: 'https://images.unsplash.com/photo-1555939594-58d7cb561341?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Prawn Tempura In Cocktail Sauce',
          price: '₹599',
          desc: 'Light tempura-fried prawns with zesty cocktail sauce, lime & fresh herbs.',
          img: 'https://images.unsplash.com/photo-1599599810694-b3b137c828a7?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Crispy Chicken Steak',
          price: '₹449',
          desc: 'Breaded & fried chicken schnitzel with lemon butter sauce & herb garnish.',
          img: 'https://images.unsplash.com/photo-1587280191529-11fed0d4c45f?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Spinach Chicken & Cheese Spring Rolls',
          price: '₹399',
          desc: 'Crispy phyllo rolls with chicken, spinach & cheese, sweet chili dipping sauce.',
          img: 'https://images.unsplash.com/photo-1599599810694-b3b137c828a7?auto=format&fit=crop&q=80&w=200'
        }
      ]
    },
    'SMALL PLATES (VEG)': {
      left: [
        {
          name: 'Stuffed Mushroom & Ricotta Spanakopita',
          price: '₹449',
          desc: 'Crispy phyllo pastry with spinach, ricotta & herb-stuffed mushrooms.',
          img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Jalapeno Cheese Cigars',
          price: '₹399',
          desc: 'Crispy rolled appetizers with jalapeños, cheese & herbs, served with chipotle mayo.',
          img: 'https://images.unsplash.com/photo-1599599810694-b3b137c828a7?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Corn & Cheese Balls',
          price: '₹349',
          desc: 'Crispy golden cheese & corn croquettes with creamy corn filling.',
          img: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Crispy Corn Kernels',
          price: '₹349',
          desc: 'Tender corn kernels battered & fried until golden, served with herb salt.',
          img: 'https://images.unsplash.com/photo-1599599810694-b3b137c828a7?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Zucchini Chips',
          price: '₹349',
          desc: 'Thin-sliced zucchini coated in parmesan crust, oven-baked until crispy.',
          img: 'https://images.unsplash.com/photo-1612528443702-f6741f3a6f0f?auto=format&fit=crop&q=80&w=200'
        }
      ],
      right: [
        {
          name: 'Mexican Paneer Flautas',
          price: '₹399',
          desc: 'Crispy tortillas with paneer, bell peppers & Mexican spices, sour cream dip.',
          img: 'https://images.unsplash.com/photo-1599599810694-b3b137c828a7?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Tempura Corn Kernels In Cocktail Sauce',
          price: '₹399',
          desc: 'Light tempura corn with zesty cocktail sauce, lime zest & spices.',
          img: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Spinach, Corn & Cheese Spring Roll',
          price: '₹349',
          desc: 'Delicate rolls with spinach, corn & cheese, served with sweet chili sauce.',
          img: 'https://images.unsplash.com/photo-1599599810694-b3b137c828a7?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Crackling Spinach With Roasted Cashews',
          price: '₹299',
          desc: 'Crispy spinach leaves tossed with roasted cashews, garlic oil & spices.',
          img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=200'
        }
      ]
    },
    'PIZZA & PASTA': {
      left: [
        {
          name: 'Gamberoni Alla Marinara (Prawn Pizza)',
          price: '₹599',
          desc: 'Crispy crust with fresh prawns, garlic, tomato sauce, basil & mozzarella.',
          img: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Pizza Con Salame Piccante',
          price: '₹549',
          desc: 'Thin crust pizza with spicy salami, fresh red chili, mozzarella & oregano.',
          img: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Pizza Paneer Makhni Tikka',
          price: '₹549',
          desc: 'Artisan pizza with tandoori paneer, creamy butter sauce, bell peppers & herbs.',
          img: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Penne Or Spaghetti Alfredo',
          price: '₹449',
          desc: 'Fresh pasta with creamy Alfredo sauce, garlic, butter & parmesan cheese.',
          img: 'https://images.unsplash.com/photo-1612874742237-6526221fcf4e?auto=format&fit=crop&q=80&w=200'
        }
      ],
      right: [
        {
          name: 'Pesto Alla Genovese',
          price: '₹549',
          desc: 'Fresh pizza with vibrant basil pesto, mozzarella, sun-dried tomatoes & pine nuts.',
          img: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Pizza Murgh Makhni Tikka',
          price: '₹549',
          desc: 'Tandoori chicken with creamy butter sauce on artisan pizza crust with herbs.',
          img: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Mexicana Rustica',
          price: '₹499',
          desc: 'Rustic pizza with spiced chicken, jalapeños, corn, mozzarella & ranch sauce.',
          img: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Bufalina',
          price: '₹449',
          desc: 'Classic pizza with fresh mozzarella di bufala, tomato, basil & olive oil.',
          img: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=200'
        }
      ]
    },
    'MAIN COURSE (NON-VEG)': {
      left: [
        {
          name: 'Mexican Cilantro & Lime Chicken w/ Red Bean Rice',
          price: '₹599',
          desc: 'Grilled chicken with cilantro-lime marinade, served with spiced red bean rice.',
          img: 'https://images.unsplash.com/photo-1598580424551-aeb06ce4f6b9?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Nasi Goreng Platter',
          price: '₹599',
          desc: 'Indonesian fried rice with prawns, chicken, egg, vegetables & aromatic spices.',
          img: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Lasooni Murgh Palak',
          price: '₹549',
          desc: 'Tender chicken in garlic-infused spinach gravy with cream & aromatic spices.',
          img: 'https://images.unsplash.com/photo-1565557623814-695d8edf5b0b?auto=format&fit=crop&q=80&w=200'
        }
      ],
      right: [
        {
          name: 'Meen Pollichadhu w/ Coconut Rice & Banana Chips',
          price: '₹599',
          desc: 'Wrapped fish with coconut, spices, banana leaf roasted, served with coconut rice.',
          img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Kongu Nadu Mutton Biriyani',
          price: '₹549',
          desc: 'Fragrant basmati rice layered with tender mutton, slow-cooked with aromatic spices.',
          img: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Butter Chicken Masala',
          price: '₹549',
          desc: 'Tender chicken in creamy tomato-butter sauce with fenugreek & aromatic spices.',
          img: 'https://images.unsplash.com/photo-1565557623814-695d8edf5b0b?auto=format&fit=crop&q=80&w=200'
        }
      ]
    },
    'MAIN COURSE (VEG)': {
      left: [
        {
          name: 'Burmese Style Khao Suey',
          price: '₹549',
          desc: 'Egg noodles in coconut curry broth with tamarind, turmeric & traditional spices.',
          img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Vazhakkai Pollichadu w/ Coconut Rice',
          price: '₹449',
          desc: 'Plantain chips with coconut, spices, banana leaf roasted & served with coconut rice.',
          img: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Nawabi Paneer Lajawab',
          price: '₹399',
          desc: 'Paneer cooked in mild yogurt-based gravy with nuts, dates & aromatic spices.',
          img: 'https://images.unsplash.com/photo-1565557623814-695d8edf5b0b?auto=format&fit=crop&q=80&w=200'
        }
      ],
      right: [
        {
          name: 'Crema Di Funghi Stroganoff w/ Herb Rice',
          price: '₹499',
          desc: 'Creamy mushroom stroganoff with sour cream, paprika & herbs over rice.',
          img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Lasooni Palak Paneer',
          price: '₹449',
          desc: 'Paneer in garlic-infused spinach gravy with cream & traditional Indian spices.',
          img: 'https://images.unsplash.com/photo-1565557623814-695d8edf5b0b?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Masala Dal Tadka',
          price: '₹349',
          desc: 'Yellow lentils cooked with warming spices topped with aromatic tempering oil.',
          img: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?auto=format&fit=crop&q=80&w=200'
        }
      ]
    },
    'BURGERS & HANDHELDS': {
      left: [
        {
          name: 'Californian Beef Burger',
          price: '₹549',
          desc: 'Premium beef patty with avocado, bacon, cheddar, lettuce & chipotle mayo.',
          img: 'https://images.unsplash.com/photo-1568901346375-23c9450549e1?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Mexican Chicken Quesadilla / Enchiladas',
          price: '₹499',
          desc: 'Crispy tortillas with spiced chicken, cheese, peppers & Mexican spices.',
          img: 'https://images.unsplash.com/photo-1599599810694-b3b137c828a7?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Mexican Paneer Quesadilla / Enchiladas',
          price: '₹499',
          desc: 'Crispy tortillas with paneer, bell peppers, cheese & Mexican seasonings.',
          img: 'https://images.unsplash.com/photo-1599599810694-b3b137c828a7?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Pesto & Paneer Panini Sandwich',
          price: '₹449',
          desc: 'Grilled paneer with fresh basil pesto, tomato & mozzarella on artisan bread.',
          img: 'https://images.unsplash.com/photo-1528735602780-cf4f96b8e6d7?auto=format&fit=crop&q=80&w=200'
        }
      ],
      right: [
        {
          name: 'Chamber\'s Spicy Fried Chicken Burger',
          price: '₹499',
          desc: 'Crispy buttermilk fried chicken with spicy sauce, slaw & brioche bun.',
          img: 'https://images.unsplash.com/photo-1568901346375-23c9450549e1?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Mexican Beef Fajita Quesadilla',
          price: '₹499',
          desc: 'Flour tortilla with seasoned beef strips, peppers, onions, cheese & salsa.',
          img: 'https://images.unsplash.com/photo-1599599810694-b3b137c828a7?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Caprese Melt',
          price: '₹449',
          desc: 'Fresh mozzarella, tomato, basil & balsamic on toasted ciabatta bread.',
          img: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Mumbaiwale Galle Sandwich',
          price: '₹399',
          desc: 'Spiced potato, fried chickpea, chutney & peppers on pav bread, street food style.',
          img: 'https://images.unsplash.com/photo-1528735602780-cf4f96b8e6d7?auto=format&fit=crop&q=80&w=200'
        }
      ]
    },
    'RICE & BREADS': {
      left: [
        {
          name: 'Jeera Rice',
          price: '₹299',
          desc: 'Fragrant basmati rice tempered with cumin seeds, ghee & spices.',
          img: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Steamed Rice',
          price: '₹199',
          desc: 'Plain perfectly cooked basmati rice, light & fluffy.',
          img: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?auto=format&fit=crop&q=80&w=200'
        }
      ],
      right: [
        {
          name: 'Lachha Paratha / Naan / Methi Kulcha',
          price: '₹199',
          desc: 'Layered crispy paratha or soft naan bread, plain or herb-infused.',
          img: 'https://images.unsplash.com/photo-1589302881254-d64cc97e90a8?auto=format&fit=crop&q=80&w=200'
        }
      ]
    },
    'SWEET TOOTH': {
      left: [
        {
          name: 'Old Fashioned Tiramisu',
          price: '₹449',
          desc: 'Classic Italian dessert with espresso, mascarpone, cocoa & ladyfingers.',
          img: 'https://images.unsplash.com/photo-1571877227200-c0gae3a37be?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Baba Nu Rum',
          price: '₹399',
          desc: 'Traditional rum-soaked spongy cake, light & aromatic dessert.',
          img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Hot Fudge Brownie',
          price: '₹349',
          desc: 'Warm chocolate brownie with hot fudge sauce, served with vanilla ice cream.',
          img: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&q=80&w=200'
        }
      ],
      right: [
        {
          name: 'Whiskey Infused New York Cheesecake',
          price: '₹399',
          desc: 'Rich creamy cheesecake with subtle whiskey notes & graham cracker crust.',
          img: 'https://images.unsplash.com/photo-1595080876857-8f23c4dc6cb0?auto=format&fit=crop&q=80&w=200'
        },
        {
          name: 'Whiskey Infused British Banoffee Pie',
          price: '₹399',
          desc: 'Layers of toffee, banana & whipped cream with whiskey essence.',
          img: 'https://images.unsplash.com/photo-1585080872051-9eca01efecfa?auto=format&fit=crop&q=80&w=200'
        }
      ]
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal columns on mount/category change
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
  }, [activeCategory]);

  const handleCategoryChange = (cat: string) => {
    if (cat === activeCategory) return;

    // Quick exit animation
    gsap.to('.menu-column', {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        setActiveCategory(cat);
      }
    });
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 lg:px-20 bg-alchemist-950">
      <div className="max-w-6xl mx-auto">

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-20 border-b border-white/5">
          {['PAIRING & FUSION PLATES', 'TANDOOR & KEBABS', 'SMALL PLATES (NON-VEG)', 'SMALL PLATES (VEG)', 'PIZZA & PASTA', 'MAIN COURSE (NON-VEG)', 'MAIN COURSE (VEG)', 'BURGERS & HANDHELDS', 'RICE & BREADS', 'SWEET TOOTH'].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`pb-6 text-[10px] md:text-[11px] font-bold tracking-[0.15em] transition-all relative group whitespace-nowrap ${activeCategory === cat ? 'text-white' : 'text-white/40 hover:text-white'
                }`}
            >
              {cat}
              {activeCategory === cat && (
                <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-gold flex justify-center">
                  <div className="w-1 h-1 bg-gold absolute top-1.5 rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Menu Columns */}
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-16">
          <div className="menu-column space-y-12">
            <h3 className="text-2xl font-display italic text-white/90 border-b border-white/5 pb-6">
              Featured Selection
            </h3>
            <div className="space-y-10">
              {menuData[activeCategory].left.map((item) => (
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
            <h3 className="text-2xl font-display italic text-white/90 border-b border-white/5 pb-6">
              Specialty Items
            </h3>
            <div className="space-y-10">
              {menuData[activeCategory].right.map((item) => (
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
