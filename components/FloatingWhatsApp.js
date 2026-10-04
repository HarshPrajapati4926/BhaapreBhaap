import WhatsAppIcon from './WhatsAppIcon';
import { whatsappLink } from '../data/site';
import styles from './FloatingWhatsApp.module.scss';

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Order on WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
