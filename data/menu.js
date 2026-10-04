import { PiBowlFoodDuotone, PiBowlSteamDuotone, PiBreadDuotone, PiCakeDuotone, PiCarrotDuotone, PiCheeseDuotone, PiCookieDuotone, PiCookingPotDuotone, PiForkKnifeDuotone, PiIceCreamDuotone, PiLeafDuotone, PiOrangeDuotone } from 'react-icons/pi';

export const menuCategories = ['All', 'Starters', 'Mains', 'Bowls', 'Desserts'];

export const menuItems = [
  { id: 1, name: 'Steam Veg Momos', category: 'Starters', price: 99, image: '/menu/1.jpg', Icon: PiBowlSteamDuotone, tag: 'Bestseller', description: 'Soft steamed dumplings stuffed with garden veggies and herbs.' },
  { id: 2, name: 'Paneer Tikka Steam', category: 'Starters', price: 149, image: '/menu/2.jpg', Icon: PiCheeseDuotone, tag: 'Protein+', description: 'Marinated paneer cubes steamed to juicy perfection — no grill, no oil.' },
  { id: 3, name: 'Steamed Dhokla Platter', category: 'Starters', price: 79, image: '/menu/3.jpg', Icon: PiCookieDuotone, tag: 'Local Fave', description: 'Fluffy, tangy gram-flour dhokla with mint and tamarind chutney.' },
  { id: 4, name: 'Steam Thali Express', category: 'Mains', price: 199, image: '/menu/4.jpg', Icon: PiForkKnifeDuotone, tag: "Chef's Pick", description: 'Steamed sabzi, dal, millet roti and rice — a full meal on a platter.' },
  { id: 5, name: 'Veg Dum Biryani', category: 'Mains', price: 179, image: '/menu/5.jpg', Icon: PiCookingPotDuotone, tag: 'Fan Fave', description: 'Aromatic basmati slow-steamed with vegetables and whole spices.' },
  { id: 6, name: 'Idli Sambar Combo', category: 'Mains', price: 109, image: '/menu/6.jpg', Icon: PiBreadDuotone, tag: 'Light', description: 'Cloud-soft idlis with piping hot sambar and coconut chutney.' },
  { id: 7, name: 'Protein Sprouts Bowl', category: 'Bowls', price: 139, image: '/menu/7.jpg', Icon: PiLeafDuotone, tag: 'High Protein', description: 'Steamed sprouts, chickpeas, corn and veggies with lemon-mint dressing.' },
  { id: 8, name: 'Quinoa Steam Bowl', category: 'Bowls', price: 189, image: '/menu/8.jpg', Icon: PiBowlFoodDuotone, tag: 'Superfood', description: 'Fluffy quinoa with steamed broccoli, carrots and tofu.' },
  { id: 9, name: 'Soya Chaap Steam', category: 'Bowls', price: 159, image: '/menu/9.jpg', Icon: PiCarrotDuotone, tag: 'Protein+', description: 'Tender soya chaap steamed with Indian spices and a tangy dip.' },
  { id: 10, name: 'Steamed Modak', category: 'Desserts', price: 89, image: '/menu/10.jpg', Icon: PiIceCreamDuotone, tag: 'Sweet', description: 'Rice-flour parcels filled with jaggery and coconut.' },
  { id: 11, name: 'Steam Fruit Pudding', category: 'Desserts', price: 99, image: '/menu/11.jpg', Icon: PiOrangeDuotone, tag: 'New', description: 'Silky steamed pudding with seasonal fruit compote.' },
  { id: 12, name: 'Date & Nut Steam Cake', category: 'Desserts', price: 119, image: '/menu/12.jpg', Icon: PiCakeDuotone, tag: 'No Added Sugar', description: 'Moist cake sweetened only with dates, steamed — never baked.' },
];
