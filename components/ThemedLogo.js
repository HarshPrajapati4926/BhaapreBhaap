// Renders the dark-theme and light-theme logos; globals.scss shows the one matching <html data-theme>.
export default function ThemedLogo({ className, alt = 'Bhaap Re Bhaap' }) {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-transparent.png" alt={alt} className={`${className ?? ''} logo-dark`} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-light.png" alt={alt} className={`${className ?? ''} logo-light`} />
    </>
  );
}
