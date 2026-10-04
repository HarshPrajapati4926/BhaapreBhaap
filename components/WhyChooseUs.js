import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { features } from '../data/site';
import styles from './WhyChooseUs.module.scss';

export default function WhyChooseUs() {
  return (
    <section id="why" className={styles.why}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Four reasons to"
          highlight="hop on board"
          subtitle="Built around one simple idea — food that is good for you should also taste incredible."
        />
        <div className={styles.grid}>
          {features.map(({ Icon, ...f }, i) => (
            <Reveal key={f.title} delay={i * 0.1} className={styles.card}>
              <div className={styles.icon}><Icon size={40} /></div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
