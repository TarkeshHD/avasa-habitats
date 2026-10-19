import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import ProblemSolution from '@/components/sections/ProblemSolution';
import AVASAModel from '@/components/sections/AVASAModel';
import DesignConfigurator from '@/components/sections/DesignConfigurator';
import CollectionExplorer from '@/components/sections/CollectionExplorer';
import ProductionTimeline from '@/components/sections/ProductionTimeline';
import ExecutionEngines from '@/components/sections/ExecutionEngines';
import MarketMatching from '@/components/sections/MarketMatching';
import QualityCheckpoints from '@/components/sections/QualityCheckpoints';
import TechnologyPlatform from '@/components/sections/TechnologyPlatform';
import WhyAvasa from '@/components/sections/WhyAvasa';
import CustomerJourney from '@/components/sections/CustomerJourney';
import ProjectGallery from '@/components/sections/ProjectGallery';
import StrongCTA from '@/components/sections/StrongCTA';
import LeadForm from '@/components/sections/LeadForm';
import BuildSimulator from '@/components/sections/BuildSimulator';
import HomeExplorer from '@/components/sections/HomeExplorer';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';
import PartnersHero from '@/components/sections/PartnersHero';
import ClusterModel from '@/components/sections/ClusterModel';
import DecentralizedFactory from '@/components/sections/DecentralizedFactory';
import CentralEnablement from '@/components/sections/CentralEnablement';
import PartnerNetwork from '@/components/sections/PartnerNetwork';
import PartnerContactForm from '@/components/sections/PartnerContactForm';

const WHATSAPP_NUMBER = '918792152953';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello AVASA Habitats, I would like to know more about building my home.')}`;

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AVASA on WhatsApp"
      className="fixed right-5 bottom-16 lg:bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 hover:bg-[#1ebe5d] hover:scale-110 transition-all duration-300"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={1.5} />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
}

function MobileStickyCTA({ page }: { page: 'home' | 'partners' }) {
  if (page === 'partners') {
    return (
      <div className="fixed bottom-0 inset-x-0 z-40 flex lg:hidden border-t border-ink/10 bg-ivory/95 backdrop-blur-md">
        <a
          href="#/"
          onClick={(e) => { e.preventDefault(); window.location.hash = '/'; }}
          className="flex-1 py-3.5 text-center text-sm font-body font-medium text-ink border-r border-ink/10"
        >
          Back to Home
        </a>
        <a
          href="#/#contact"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '/';
            setTimeout(() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 200);
          }}
          className="flex-1 py-3.5 text-center text-sm font-medium text-cream bg-terracotta-200"
        >
          Partner With Us
        </a>
      </div>
    );
  }
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 flex lg:hidden border-t border-ink/10 bg-ivory/95 backdrop-blur-md">
      <a
        href="#designs"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('designs')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="flex-1 py-3.5 text-center text-sm font-body font-medium text-ink border-r border-ink/10"
      >
        Explore Homes
      </a>
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="flex-1 py-3.5 text-center text-sm font-medium text-cream bg-terracotta-200"
      >
        Start Your Home
      </a>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <AVASAModel />
      <DesignConfigurator />
      <CollectionExplorer />
      <ProductionTimeline />
      <ExecutionEngines />
      <MarketMatching />
      <QualityCheckpoints />
      <TechnologyPlatform />
      <WhyAvasa />
      <CustomerJourney />
      <ProjectGallery />
      <BuildSimulator />
      <HomeExplorer />
      <FAQ />
      <StrongCTA />
      <LeadForm />
    </>
  );
}

function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <ClusterModel />
      <DecentralizedFactory />
      <CentralEnablement />
      <WhyAvasa />
      <PartnerNetwork />
      <FAQ />
      <PartnerContactForm />
    </>
  );
}

function App() {
  const [page, setPage] = useState<'home' | 'partners'>(() => {
    return window.location.hash.startsWith('#/partners') ? 'partners' : 'home';
  });

  useEffect(() => {
    const onHash = () => {
      const isPartners = window.location.hash.startsWith('#/partners');
      setPage(isPartners ? 'partners' : 'home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {page === 'home' ? <HomePage /> : <PartnersPage />}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <MobileStickyCTA page={page} />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
