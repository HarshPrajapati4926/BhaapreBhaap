import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { PiStarFill, PiHeartFill, PiArrowRightBold, PiInstagramLogoDuotone } from 'react-icons/pi';
import { testimonials, instagramPosts, social } from '../data/site';
import styles from './SocialProof.module.scss';

export default function SocialProof() {
  return (
    <section id="reviews" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading
          eyebrow="Loved by Foodies"
          title="What our"
          highlight="passengers say"
        />

        <div className={styles.reviews}>
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12} className={styles.review}>
              <div className={styles.stars} aria-label={`${t.rating} out of 5 stars`}>
                {[...Array(5)].map((_, s) => (
                  <PiStarFill key={s} className={s < t.rating ? '' : styles.off} />
                ))}
              </div>
              <p>“{t.text}”</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.name[0]}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.insta}>
          <div className={styles.instaHead}>
            <h3><PiInstagramLogoDuotone /> Follow the journey <span>@bhaaprebhaap</span></h3>
            <a href={social.instagram} target="_blank" rel="noopener noreferrer">
              View on Instagram <PiArrowRightBold />
            </a>
          </div>
          <div className={styles.feed}>
            {instagramPosts.map(({ Icon, tone }, i) => (
              <a
                key={i}
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.post} ${styles[`tone${tone}`]}`}
                aria-label="Instagram post"
              >
                <Icon size={52} />
                <div className={styles.overlay}><PiHeartFill /> {120 + i * 37}</div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
