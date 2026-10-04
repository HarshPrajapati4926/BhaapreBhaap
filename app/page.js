import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import WhyChooseUs from '../components/WhyChooseUs';
import SocialProof from '../components/SocialProof';
import Location from '../components/Location';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <WhyChooseUs />
        <SocialProof />
        <Location />
        <CTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
