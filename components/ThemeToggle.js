'use client';

import { useEffect, useState } from 'react';
import { PiSunDuotone, PiMoonDuotone, PiDesktopDuotone } from 'react-icons/pi';
import styles from './ThemeToggle.module.scss';

const OPTIONS = [
  { value: 'light', label: 'Light', Icon: PiSunDuotone },
  { value: 'system', label: 'System', Icon: PiDesktopDuotone },
  { value: 'dark', label: 'Dark', Icon: PiMoonDuotone },
];

const KEY = 'theme';

function apply(pref) {
  const dark = pref === 'dark' || (pref === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [pref, setPref] = useState('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let saved = 'system';
    try {
      saved = localStorage.getItem(KEY) || 'system';
    } catch {}
    setPref(saved);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    apply(pref);
    try {
      localStorage.setItem(KEY, pref);
    } catch {}
    if (pref !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => apply('system');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [pref, mounted]);

  const index = OPTIONS.findIndex((o) => o.value === pref);

  return (
    <div className={styles.pill} role="radiogroup" aria-label="Theme">
      <span className={styles.thumb} style={{ transform: `translateX(${index * 100}%)` }} aria-hidden />
      {OPTIONS.map(({ value, label, Icon }) => (
        <button
          key={value}
          role="radio"
          aria-checked={pref === value}
          aria-label={label}
          title={label}
          className={`${styles.btn} ${pref === value ? styles.active : ''}`}
          onClick={() => setPref(value)}
        >
          <Icon size={18} />
        </button>
      ))}
    </div>
  );
}
