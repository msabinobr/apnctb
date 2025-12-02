import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { ChallengeSolution } from './components/ChallengeSolution';
import { Strategy } from './components/Strategy';
import { Roadmap } from './components/Roadmap';
import { Investment } from './components/Investment';
import { CTA } from './components/CTA';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-terra-50 font-sans selection:bg-terra-400 selection:text-white">
      <Hero />
      <ChallengeSolution />
      <Strategy />
      <Roadmap />
      <Investment />
      <CTA />

      {/* Floating Action Button for Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-terra-800 text-terra-100 rounded-full shadow-lg hover:bg-terra-700 transition-colors"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
