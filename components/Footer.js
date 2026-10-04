import { PiInstagramLogoDuotone, PiFacebookLogoDuotone, PiYoutubeLogoDuotone } from 'react-icons/pi';
import ThemedLogo from './ThemedLogo';
import { social, navLinks } from '../data/site';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <ThemedLogo />
            <p>Healthy food, made with steam. Zero oil, all flavour.</p>
          </div>

          <ul className={styles.links}>
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>

          <div className={styles.social}>
            <a href={social.instagram} target="_blank" rel="noopener noreferrer">
              <PiInstagramLogoDuotone size={22} /> Instagram
            </a>
            <a href={social.facebook} target="_blank" rel="noopener noreferrer">
              <PiFacebookLogoDuotone size={22} /> Facebook
            </a>
            <a href={social.youtube} target="_blank" rel="noopener noreferrer">
              <PiYoutubeLogoDuotone size={22} /> YouTube
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Bhaap Re Bhaap. All rights reserved.</p>
          <p className={styles.disclaimer}>This is a demo concept website</p>
        </div>
      </div>
    </footer>
  );
}
