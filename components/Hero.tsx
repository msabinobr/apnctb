
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sprout } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 500], [0, 200]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse Parallax State
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20, // Move range -10px to 10px
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax & Mouse Effect */}
      <motion.div 
        className="absolute inset-0 z-0 scale-105" // scale-105 prevents white edges on move
        style={{ y: yBackground, x: mousePosition.x * -1, translateY: mousePosition.y * -1 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1518182170546-0766be6f3a56?q=80&w=2000&auto=format&fit=crop" 
          alt="Bamboo Forest" 
          className="w-full h-full object-cover opacity-40 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-terra-900/80 via-terra-800/60 to-terra-900/95" />
      </motion.div>

      {/* Floating Particles/Dust (CSS Animation) */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-terra-300 rounded-full animate-ping" style={{ animationDuration: '5s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
      </div>

      <motion.div 
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        style={{ opacity: opacityText }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex justify-center mb-8"
        >
          <div className="bg-gradient-to-br from-terra-400 to-terra-600 p-5 rounded-full shadow-2xl shadow-terra-400/30 ring-4 ring-terra-400/20">
            <Sprout size={56} className="text-white drop-shadow-md" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 tracking-tight drop-shadow-lg"
        >
          CONEXÃO <br className="md:hidden"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-terra-300 to-terra-100">
            TERRA BAMBU
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-xl md:text-3xl text-terra-100 font-light tracking-wide">
            Proposta Estratégica de Crescimento Global
          </h2>
          <div className="w-32 h-1.5 bg-terra-400 mx-auto rounded-full" />
          <p className="text-lg md:text-xl text-terra-200 max-w-2xl mx-auto">
            Ativação de Alcance e Construção de Ativos Digitais
          </p>
          <div className="inline-block border border-terra-500/50 bg-terra-900/40 backdrop-blur-sm px-4 py-2 rounded-full mt-8">
            <p className="text-sm text-terra-300 font-mono uppercase tracking-widest">
              Dezembro/2025 – Janeiro/2026
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};
