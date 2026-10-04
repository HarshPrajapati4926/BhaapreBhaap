import { whatsappLink } from '../data/site';
import WhatsAppIcon from './WhatsAppIcon';
import styles from './MenuCard.module.scss';

export default function MenuCard({ item }) {
  const { Icon } = item;
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <span className={styles.tag}>{item.tag}</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={item.name} className={styles.photo} loading="lazy" />
        <span className={styles.badge} aria-hidden>
          <Icon size={22} />
        </span>
        <span className={styles.steam} aria-hidden />
      </div>
      <div className={styles.body}>
        <div className={styles.row}>
          <h3>{item.name}</h3>
          <span className={styles.price}>₹{item.price}</span>
        </div>
        <p>{item.description}</p>
        <a
          className={styles.order}
          href={whatsappLink(`Hi I want to order ${item.name}`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon size={18} /> Order
        </a>
      </div>
    </article>
  );
}
