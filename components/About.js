import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { PiCloudDuotone, PiCheckBold } from 'react-icons/pi';
import { benefits } from '../data/site';
import styles from './About.module.scss';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="The Concept"
          title="Zero Oil."
          highlight="All Steam."
          subtitle="We swapped the frying pan for a steam engine. Every dish is cooked in pure steam — keeping the flavour, colour and nutrition in, and the oil out."
        />

        <div className={styles.grid}>
          <Reveal className={styles.story}>
            <div className={styles.steamRing}>
              <PiCloudDuotone size={38} />
            </div>
            <h3>From the kitchen to the platform</h3>
            <p>
              Bhaap Re Bhaap is a steam-first food brand. Our chefs run a fleet of steam chambers that cook momos,
              dhokla, biryani, bowls and even desserts without a single spoon of oil — so every bite is light, clean and
              full of taste.
            </p>
            <ul>
              <li><PiCheckBold /> No deep frying, ever</li>
              <li><PiCheckBold /> Natural flavours, real spices</li>
              <li><PiCheckBold /> Meals that keep you energised</li>
            </ul>
          </Reveal>

          <div className={styles.cards}>
            {benefits.map(({ Icon, ...b }, i) => (
              <Reveal key={b.title} delay={i * 0.12} className={styles.card}>
                <div className={styles.icon}><Icon size={30} /></div>
                <div>
                  <h4>{b.title}</h4>
                  <p>{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
