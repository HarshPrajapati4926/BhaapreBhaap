import { Bangers, Poppins } from 'next/font/google';
import '../styles/globals.scss';

const display = Bangers({ weight: '400', subsets: ['latin'], variable: '--font-display', display: 'swap' });
const body = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata = {
  title: 'Bhaap Re Bhaap — Zero Oil Steam Food',
  description: 'Healthy food made with steam. Zero oil, fresh ingredients, fast service. Order on WhatsApp.',
  icons: { icon: '/logo.png' },
  openGraph: { title: 'Bhaap Re Bhaap', description: 'Healthy Food, Made with Steam – Zero Oil', images: ['/logo.png'] },
};

// Runs before first paint so the saved / system theme is applied without a flash.
const themeScript = `(function(){try{var p=localStorage.getItem('theme')||'system';var d=p==='dark'||(p==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.dataset.theme=d?'dark':'light';}catch(e){}})();`;

export const viewport = { themeColor: '#0a0604' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
