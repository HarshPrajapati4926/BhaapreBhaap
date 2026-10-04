'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import MenuCard from './MenuCard';
import { menuItems, menuCategories } from '../data/menu';
import styles from './Menu.module.scss';

export default function Menu() {
  const [active, setActive] = useState('All');
  const items = active === 'All' ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className={styles.menu}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Our Menu"
          title="Fresh off the"
          highlight="Steam Express"
          subtitle="Every item is steamed — zero oil, full flavour. Tap any dish to order it on WhatsApp."
        />

        <div className={styles.tabs} role="tablist">
          {menuCategories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              className={`${styles.tab} ${active === c ? styles.active : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <MenuCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
