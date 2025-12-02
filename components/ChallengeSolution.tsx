import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Rocket, CheckCircle2 } from 'lucide-react';

export const ChallengeSolution: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-terra-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        
        {/* The Problem */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-terra-800 text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-32 bg-terra-700/30 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-terra-600/50 rounded-full">
                <AlertCircle size={32} className="text-terra-300" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-terra-300">O Desafio</h3>
            </div>
            
            <p className="text-terra-100 text-lg mb-8 leading-relaxed">
              Inatividade das mídias impede a conexão entre seus dois pilares de crescimento:
            </p>

            <div className="space-y-6 border-l-2 border-terra-600 pl-6">
              <div>
                <h4 className="font-bold text-xl text-white">1. Propósito Maior</h4>
                <p className="text-terra-300">Aulas, Vivências e Bioconstrução</p>
              </div>
              <div>
                <h4 className="font-bold text-xl text-white">2. Vendas Imediatas</h4>
                <p className="text-terra-300">Estruturas Modulares de Bambu</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm text-terra-200">
                <span className="font-bold text-white">Resultado:</span> Invisibilidade no mercado, perda de oportunidades de venda e falta de autoridade digital.
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Solution */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-4 md:p-8"
        >
          <div className="flex items-center gap-4 mb-6">
             <div className="p-3 bg-terra-200 rounded-full">
                <Rocket size={32} className="text-terra-800" />
             </div>
            <h3 className="text-4xl font-serif font-bold text-terra-900">A Solução</h3>
          </div>

          <p className="text-xl text-terra-700 mb-8 font-medium">
            Lançar um <span className="text-terra-800 bg-terra-200 px-2 py-1 rounded">Ecossistema Digital 24/7</span> em 30 dias.
          </p>

          <div className="space-y-6">
            {[
              { title: "Frequência Diária", desc: "31 Shorts/Reels agendados automaticamente" },
              { title: "Ativos Permanentes", desc: "Landing Page, Blog e E-book (3 idiomas)" },
              { title: "Autoridade Global", desc: "SEO otimizado para alcance internacional" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-4 items-start bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <CheckCircle2 className="text-terra-600 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-terra-900 text-lg">{item.title}</h4>
                  <p className="text-terra-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-terra-100 rounded-xl border-l-4 border-terra-400">
            <p className="text-terra-800 italic">
              "Visibilidade constante, geração de leads qualificados e posicionamento como especialista em Bioconstrução."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
