'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from './Button';
import WhatsAppIcon from './WhatsAppIcon';
import { whatsappLink } from '../data/site';
import styles from './Hero.module.scss';

const stats = [
  { value: '0%', label: 'Added Oil' },
  { value: '100%', label: 'Steam Cooked' },
  { value: '15 min', label: 'Avg. Delivery' },
];

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.glow} aria-hidden />
      <div className={styles.glow2} aria-hidden />

      <h1 className={styles.srOnly}>Healthy Food, Made with Steam – Zero Oil</h1>

      <motion.div
        className={styles.banner}
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/banner/banner.png"
          alt="Bhaap Re Bhaap – Healthy food, made with steam. Zero oil, pure taste, better you."
          width={1774}
          height={887}
          priority
          sizes="(min-width: 1500px) 1476px, 100vw"
          className={styles.image}
        />
        {/* Clickable area over the "Order on WhatsApp" button baked into the banner */}
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.hotspot}
          aria-label="Order on WhatsApp"
        />
      </motion.div>

      <motion.div
        className={styles.below}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className={styles.actions}>
          <Button href={whatsappLink()} external>
            <WhatsAppIcon /> Order on WhatsApp
          </Button>
          <Button href="#menu" variant="ghost">
            Explore Menu
          </Button>
        </div>
        <ul className={styles.stats}>
          {stats.map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
