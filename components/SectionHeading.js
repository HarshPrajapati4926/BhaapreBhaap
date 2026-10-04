import Reveal from './Reveal';
import styles from './SectionHeading.module.scss';

export default function SectionHeading({ eyebrow, title, highlight, subtitle, align = 'center' }) {
  return (
    <Reveal className={`${styles.wrap} ${styles[align]}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>
        {title} {highlight && <span className={styles.highlight}>{highlight}</span>}
      </h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </Reveal>
  );
}
