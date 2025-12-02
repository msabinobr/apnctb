import React from 'react';
import { motion } from 'framer-motion';
import { Settings, PenTool, BarChart3, Flag } from 'lucide-react';
import { RoadmapWeek } from '../types';

const weeks: RoadmapWeek[] = [
  {
    week: 1,
    title: "Setup e Ativos de Venda",
    description: "Criação e tradução da LP e E-book. Implementação no site. Planejamento.",
    items: ["LP (3 idiomas)", "E-book", "7 Posts Agendados", "Artigo 1"],
    icon: Settings
  },
  {
    week: 2,
    title: "Conteúdo e Autoridade",
    description: "Criação e tradução do Artigo 2. Otimização do Catálogo WhatsApp.",
    items: ["7 Posts Agendados", "Artigo 2", "Catálogo Otimizado"],
    icon: PenTool
  },
  {
    week: 3,
    title: "Volume Máximo",
    description: "Frequência máxima. Promoção do E-book nos Shorts.",
    items: ["7 Posts Agendados", "Artigo 3", "Promoção E-book"],
    icon: BarChart3
  },
  {
    week: 4,
    title: "Fechamento",
    description: "Agendamento final (Natal/Ano Novo). Relatório Final.",
    items: ["10 Posts Agendados", "Artigo 4", "Relatório Final"],
    icon: Flag
  }
];

export const Roadmap: React.FC = () => {
  return (
    <section className="py-24 bg-terra-800 text-white relative overflow-hidden">
        {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-terra-700 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-terra-600 rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-terra-100 mb-2">Mapa de Execução</h2>
          <p className="text-terra-300">30 Dias de Ativação Intensa</p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-terra-700 -translate-y-1/2 rounded-full" />

          <div className="grid md:grid-cols-4 gap-8">
            {weeks.map((week, index) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-terra-900/50 backdrop-blur-sm p-6 rounded-2xl border border-terra-700 hover:border-terra-400 transition-colors group"
              >
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-terra-800 p-2 rounded-full border-4 border-terra-700 z-10 group-hover:border-terra-400 transition-colors">
                  <week.icon size={24} className="text-terra-300 group-hover:text-terra-400" />
                </div>
                
                <div className="mt-4 text-center">
                  <span className="text-xs font-bold text-terra-400 tracking-widest uppercase">Semana {week.week}</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-3 h-12 flex items-center justify-center">{week.title}</h3>
                  <p className="text-terra-300 text-sm mb-4 min-h-[60px]">{week.description}</p>
                  
                  <ul className="text-left space-y-2">
                    {week.items.map((item, i) => (
                      <li key={i} className="flex items-center text-xs text-terra-200">
                        <span className="w-1.5 h-1.5 bg-terra-400 rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
        >
            <div className="inline-block bg-terra-600/30 px-6 py-3 rounded-full border border-terra-500/30">
                <p className="text-terra-200 font-semibold">
                    Progresso do Projeto: <span className="text-terra-400">31 dias de conteúdo garantido</span>
                </p>
            </div>
        </motion.div>
      </div>
    </section>
  );
};
