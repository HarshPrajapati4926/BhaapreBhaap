import styles from './Button.module.scss';

export default function Button({ href, children, variant = 'primary', external = false, ...rest }) {
  const props = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};
  return (
    <a href={href} className={`${styles.btn} ${styles[variant]}`} {...props} {...rest}>
      {children}
    </a>
  );
}
