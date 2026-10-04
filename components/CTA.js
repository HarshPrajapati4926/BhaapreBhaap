import Button from './Button';
import Reveal from './Reveal';
import { PiTrainDuotone } from 'react-icons/pi';
import WhatsAppIcon from './WhatsAppIcon';
import { whatsappLink } from '../data/site';
import styles from './CTA.module.scss';

export default function CTA() {
  return (
    <section className={styles.section}>
      <Reveal className={styles.box}>
        <PiTrainDuotone className={styles.train} size={64} aria-hidden />
        <h2>Hungry? The steam express is ready to roll.</h2>
        <p>Order your favourite zero-oil meal in seconds — just one message away.</p>
        <Button href={whatsappLink()} variant="dark" external>
          <WhatsAppIcon /> Order on WhatsApp
        </Button>
      </Reveal>
    </section>
  );
}
