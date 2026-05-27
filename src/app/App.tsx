import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutStats } from './components/AboutStats';
import { Timeline } from './components/Timeline';
import { ServiceCards } from './components/ServiceCards';
import { GoshalaHighlight } from './components/GoshalaHighlight';
import { Events } from './components/Events';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Vision } from './components/Vision';
import { FacebookFeed } from './components/FacebookFeed';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <AboutStats />
        <Timeline />
        <ServiceCards />
        <GoshalaHighlight />
        <Events />
        <Gallery />
        <Testimonials />
        <Vision />
        <FacebookFeed />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}
