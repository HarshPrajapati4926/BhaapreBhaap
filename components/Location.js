import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { PiMapPinDuotone, PiClockDuotone, PiPhoneDuotone } from 'react-icons/pi';
import { location } from '../data/site';
import styles from './Location.module.scss';

export default function Location() {
  return (
    <section id="location" className={styles.section}>
      <div className={styles.container}>
        <SectionHeading eyebrow="Find Us" title="Next stop:" highlight="Your Station" />
        <div className={styles.grid}>
          <Reveal className={styles.info}>
            <div className={styles.block}>
              <span className={styles.ico}><PiMapPinDuotone size={28} /></span>
              <div>
                <h4>Address</h4>
                <p>{location.address}</p>
              </div>
            </div>
            <div className={styles.block}>
              <span className={styles.ico}><PiClockDuotone size={28} /></span>
              <div>
                <h4>Timings</h4>
                {location.timings.map((t) => (
                  <p key={t.day}>
                    <strong>{t.day}</strong> · {t.time}
                  </p>
                ))}
              </div>
            </div>
            <div className={styles.block}>
              <span className={styles.ico}><PiPhoneDuotone size={28} /></span>
              <div>
                <h4>Call</h4>
                <p><a href="tel:+919326257913">{location.phone}</a></p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className={styles.map}>
            <iframe
              title="Bhaap Re Bhaap location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
