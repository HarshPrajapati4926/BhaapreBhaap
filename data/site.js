import {
  PiLeafDuotone, PiSprayBottleDuotone, PiBarbellDuotone, PiProhibitDuotone, PiPlantDuotone,
  PiLightningDuotone, PiHeartDuotone, PiForkKnifeDuotone, PiBowlSteamDuotone, PiCookingPotDuotone,
  PiBowlFoodDuotone, PiCakeDuotone, PiCookieDuotone,
} from 'react-icons/pi';

export const WHATSAPP_NUMBER = '919326257913';

export const whatsappLink = (text = 'Hi I want to order') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const navLinks = [
  { href: '#about', label: 'Concept' },
  { href: '#menu', label: 'Menu' },
  { href: '#why', label: 'Why Us' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#location', label: 'Find Us' },
];

export const benefits = [
  { Icon: PiLeafDuotone, title: 'Healthy', text: 'Steam locks in nutrients without a drop of added oil.' },
  { Icon: PiSprayBottleDuotone, title: 'Hygienic', text: 'Cooked in sealed steam chambers, prepared in a spotless kitchen.' },
  { Icon: PiBarbellDuotone, title: 'Protein-Rich', text: 'Paneer, soya, lentils and sprouts for a clean protein hit.' },
];

export const features = [
  { Icon: PiProhibitDuotone, title: 'Zero Oil', text: 'Every dish is steamed — never fried, never greasy.' },
  { Icon: PiPlantDuotone, title: 'Fresh Ingredients', text: 'Veggies and grains sourced fresh every morning.' },
  { Icon: PiLightningDuotone, title: 'Fast Service', text: 'Hot off the steam express in under 15 minutes.' },
  { Icon: PiHeartDuotone, title: 'Healthy Meals', text: 'Balanced, light and satisfying — guilt-free comfort food.' },
];

export const testimonials = [
  { name: 'Aarav Mehta', role: 'Fitness Coach', text: 'Finally a place where "healthy" doesn’t mean boring. The steamed momos are unreal.', rating: 5 },
  { name: 'Priya Shah', role: 'Software Engineer', text: 'My go-to lunch. Light, tasty and I don’t feel sleepy after. Ordering on WhatsApp is so easy!', rating: 5 },
  { name: 'Rohan Desai', role: 'Student', text: 'Affordable, fresh and fast. The Steam Thali is a full meal without the oil.', rating: 4 },
];

export const instagramPosts = [
  { Icon: PiBowlSteamDuotone, tone: 1 },
  { Icon: PiForkKnifeDuotone, tone: 2 },
  { Icon: PiLeafDuotone, tone: 3 },
  { Icon: PiCookingPotDuotone, tone: 4 },
  { Icon: PiCakeDuotone, tone: 2 },
  { Icon: PiBowlFoodDuotone, tone: 1 },
];

export const location = {
  address: 'Shop No. 1, Pink CHS Ltd, A Wing, Seven Bungalows, Near Garden, JP Road (opp. Nana Nani Park), Versova, Andheri West, Mumbai, Maharashtra 400061',
  phone: '+91 93262 57913',
  mapQuery: 'Bhaap Re Bhaap, JP Road, Versova, Andheri West, Mumbai 400061',
  timings: [
    { day: 'Mon – Thu', time: '7:00 PM – 12:00 AM' },
    { day: 'Fri – Sun', time: '7:00 PM – 3:00 AM' },
  ],
};

export const social = {
  instagram: 'https://www.instagram.com/bhaaprebhaap/',
  facebook: 'https://facebook.com/',
  youtube: 'https://youtube.com/',
};
