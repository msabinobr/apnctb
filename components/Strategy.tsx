
import React from 'react';
import { motion } from 'framer-motion';
import { Video, BookOpen, FileText, Globe, Heart } from 'lucide-react';
import { StrategyItem, VisualType } from '../types';

// Updated images to better match the "Terra Bambu" aesthetic
const IMAGES = {
  // Vertical Bamboo for Shorts/Reels
  shorts: "https://images.unsplash.com/photo-1595856942697-39e25d2b7044?q=80&w=800&auto=format&fit=crop", 
  // Wide shot of sustainable architecture for Landing Page
  landingPage: "https://images.unsplash.com/photo-1669232938339-c56a89467268?q=80&w=1600&auto=format&fit=crop",
  // Detail shot or blog layout style
  blog: "https://images.unsplash.com/photo-1517409419-48218659550b?q=80&w=1600&auto=format&fit=crop",
  // Green/Nature book cover style
  ebook: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"
};

const strategyItems: StrategyItem[] = [
  {
    id: 1,
    title: "Shorts/Reels",
    subtitle: "Alcance Diário",
    description: "31 posts agendados automaticamente, garantindo frequência ininterrupta e reativação do algoritmo.",
    metric: "50% Vendas + 50% Propósito",
    icon: Video,
    visualType: 'mobile',
    visualSrc: IMAGES.shorts
  },
  {
    id: 2,
    title: "Landing Page",
    subtitle: "Conversão Imediata",
    description: "Página de alta conversão para Estruturas Modulares (Forros, Cercas, Divisórias) em 3 idiomas.",
    metric: "Foco no Carro-Chefe",
    icon: Globe,
    visualType: 'browser',
    visualSrc: IMAGES.landingPage
  },
  {
    id: 3,
    title: "Blog (SEO)",
    subtitle: "Autoridade Global",
    description: "4 artigos otimizados para SEO, atraindo tráfego orgânico e educando sobre Bioconstrução.",
    metric: "Tráfego Orgânico Recorrente",
    icon: FileText,
    visualType: 'browser-text',
    visualSrc: IMAGES.blog
  },
  {
    id: 4,
    title: "E-book",
    subtitle: "Lead Magnet",
    description: "Guia completo de Bambu em 3 idiomas, transformando leads mornos em interessados.",
    metric: "Qualificação de Leads",
    icon: BookOpen,
    visualType: 'book',
    visualSrc: IMAGES.ebook
  }
];

const MockupRenderer: React.FC<{ type: VisualType; src?: string }> = ({ type, src }) => {
  if (type === 'mobile') {
    return (
      <div className="relative mx-auto w-36 h-72 bg-gray-900 rounded-[2.5rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-terra-400/50">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 rounded-b-xl z-20" />
        
        {/* Screen Content */}
        <div className="w-full h-full relative group">
            <img src={src} alt="Reels" className="w-full h-full object-cover" />
            
            {/* UI Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />
            
            <div className="absolute bottom-6 left-3 right-3 z-20 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/50" />
                  <div className="h-2 w-20 bg-white/80 rounded backdrop-blur-sm shadow-sm" />
                </div>
                <div className="h-2 w-16 bg-white/60 rounded backdrop-blur-sm" />
            </div>

            {/* Floating Hearts Animation */}
            <div className="absolute bottom-20 right-2 z-20 flex flex-col gap-3 items-center">
               <motion.div 
                 animate={{ scale: [1, 1.2, 1] }}
                 transition={{ repeat: Infinity, duration: 1.5 }}
                 className="p-2 bg-black/40 backdrop-blur-md rounded-full"
               >
                 <Heart size={16} className="text-white fill-white" />
               </motion.div>
               <div className="p-2 bg-black/40 backdrop-blur-md rounded-full">
                 <div className="w-4 h-4 border-2 border-white rounded-full" />
               </div>
            </div>

            {/* Progress Bar Animation */}
            <div className="absolute bottom-1 left-1 right-1 h-1 bg-white/30 rounded-full overflow-hidden z-20">
               <motion.div 
                 initial={{ width: "0%" }}
                 animate={{ width: "100%" }}
                 transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                 className="h-full bg-white"
               />
            </div>
        </div>
      </div>
    );
  }

  if (type === 'browser' || type === 'browser-text') {
    return (
      <div className="group relative mx-auto w-full max-w-[300px] aspect-video bg-white rounded-xl shadow-2xl overflow-hidden border border-terra-200 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-terra-400/20">
        {/* Browser Header */}
        <div className="bg-gray-100 border-b border-gray-200 p-2 flex items-center gap-1.5 z-20 relative">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="ml-2 flex-1 h-4 bg-white rounded shadow-inner border border-gray-200 flex items-center px-2">
             <div className="w-2 h-2 rounded-full bg-terra-400 opacity-50"></div>
             <div className="w-20 h-1 bg-gray-200 ml-1 rounded-full"></div>
          </div>
        </div>
        
        {/* Content with Auto-Scroll */}
        <div className="relative w-full h-full overflow-hidden bg-gray-50">
            <motion.div
               animate={{ y: ["0%", "-30%", "0%"] }}
               transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            >
               <img src={src} alt="Website" className="w-full object-cover" />
            </motion.div>
            
            {/* Overlay for Text variant */}
            {type === 'browser-text' && (
               <div className="absolute top-1/2 right-4 w-1/2 p-2 bg-white/90 backdrop-blur shadow-lg rounded-lg border border-terra-100">
                  <div className="h-2 w-3/4 bg-terra-800/20 rounded mb-1.5" />
                  <div className="h-1.5 w-full bg-terra-600/20 rounded mb-1" />
                  <div className="h-1.5 w-full bg-terra-600/20 rounded mb-1" />
                  <div className="h-1.5 w-2/3 bg-terra-600/20 rounded" />
               </div>
            )}
        </div>
      </div>
    );
  }

  if (type === 'book') {
    return (
      <div className="relative mx-auto w-32 h-48 perspective-1000 group cursor-pointer mt-4">
        <motion.div 
            className="relative w-full h-full transform-style-3d"
            whileHover={{ rotateY: -20, rotateX: 5 }}
            transition={{ type: "spring", stiffness: 100 }}
            style={{ transform: "rotateY(-10deg)" }}
        >
          {/* Front Cover */}
          <div className="absolute inset-0 bg-terra-800 rounded-r-md shadow-2xl overflow-hidden border-l border-white/10 z-10">
            <img src={src} alt="E-book Cover" className="w-full h-full object-cover" />
            {/* Spine Highlight */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-white/30 to-transparent"></div>
            {/* Title Overlay Mockup */}
            <div className="absolute top-1/4 left-0 right-0 text-center p-2">
                 <div className="inline-block px-2 py-1 bg-terra-900/80 text-terra-100 text-[8px] font-bold tracking-widest border border-terra-400">GUIA ESSENCIAL</div>
                 <h4 className="text-white font-serif text-lg leading-none mt-1 drop-shadow-md">BAMBU</h4>
            </div>
          </div>
          
          {/* Pages Effect (Side) */}
          <div className="absolute top-1 bottom-1 right-0 w-8 bg-white border border-gray-200 transform translate-z-[-15px] translate-x-[0px] rotate-y-[90deg] shadow-inner" 
               style={{ backgroundImage: "repeating-linear-gradient(to right, #f0f0f0 0px, #f0f0f0 1px, #fff 1px, #fff 3px)" }}
          />
          
           {/* Back Cover */}
           <div className="absolute inset-0 bg-terra-900 rounded-l-md transform translate-z-[-30px]" />
        </motion.div>
        
        {/* Shadow */}
        <div className="absolute -bottom-6 left-4 w-24 h-6 bg-black/40 blur-xl rounded-[100%] transform rotate-x-[60deg] group-hover:scale-110 transition-transform duration-300" />
      </div>
    );
  }

  return null;
};

export const Strategy: React.FC = () => {
  return (
    <section className="py-24 bg-terra-50 relative overflow-hidden">
        {/* Background Bamboo Decoration - Animated */}
        <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none"
        >
             <svg viewBox="0 0 100 400" preserveAspectRatio="none" className="w-full h-full fill-terra-800">
                <path d="M10,0 Q20,100 10,200 T10,400 M30,0 Q40,100 30,200 T30,400 M50,0 Q60,100 50,200 T50,400" stroke="currentColor" strokeWidth="2" fill="none"/>
             </svg>
        </motion.div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-terra-900 mb-4">Estratégia: Ecossistema 24/7</h2>
          <p className="text-terra-600 max-w-2xl mx-auto text-lg">
            A união perfeita entre alcance visual e profundidade de conteúdo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strategyItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group h-full"
            >
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-terra-100 hover:shadow-2xl hover:border-terra-300 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-terra-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 h-64 flex items-center justify-center mb-6">
                    <MockupRenderer type={item.visualType} src={item.visualSrc} />
                </div>
                
                <div className="relative z-10 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2.5 bg-terra-100 rounded-xl text-terra-800 shadow-sm group-hover:bg-terra-800 group-hover:text-terra-100 transition-colors">
                            <item.icon size={22} />
                        </div>
                        <h3 className="text-xl font-bold text-terra-900 leading-tight">{item.title}</h3>
                    </div>
                    
                    <p className="text-xs font-bold text-terra-500 uppercase tracking-wider mb-3 ml-12 border-l-2 border-terra-200 pl-3">
                        {item.subtitle}
                    </p>
                    
                    <p className="text-terra-600 text-sm mb-6 leading-relaxed ml-12">
                        {item.description}
                    </p>
                </div>

                <div className="relative z-10 pt-4 mt-auto border-t border-terra-100 ml-12">
                  <p className="text-xs font-semibold text-terra-800 flex items-center bg-terra-50 py-2 px-3 rounded-lg w-fit">
                    <span className="w-2 h-2 bg-terra-500 rounded-full mr-2 animate-pulse"></span>
                    {item.metric}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
