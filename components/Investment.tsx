import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const Investment: React.FC = () => {
  return (
    <section className="py-24 bg-terra-50 px-4">
      <div className="max-w-5xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-terra-900 mb-6">Investimento & Valor</h2>
            <p className="text-terra-600 mb-8 text-lg">
                Transparência total. Cálculo baseado em 20 Dias de Mão de Obra Dedicada, garantindo um mês inteiro de presença digital.
            </p>

            <ul className="space-y-4">
                {[
                    "31 Shorts/Reels agendados (Frequência ininterrupta)",
                    "Landing Page + E-book em 3 idiomas",
                    "4 Artigos de Blog otimizados para SEO",
                    "Catálogo WhatsApp para vendas imediatas",
                    "Implementação técnica completa (Host/GitHub)",
                    "Relatório final com KPIs e Plano de Ação"
                ].map((item, idx) => (
                    <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center text-terra-800"
                    >
                        <span className="bg-terra-200 p-1 rounded-full mr-3">
                            <Check size={14} className="text-terra-800" />
                        </span>
                        {item}
                    </motion.li>
                ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-terra-100 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-terra-400 to-terra-800" />
            
            <h3 className="text-terra-500 font-bold tracking-widest uppercase text-sm mb-2">Investimento Total</h3>
            <p className="text-terra-900 text-5xl md:text-6xl font-serif font-bold mb-2">R$ 3.000</p>
            <p className="text-terra-400 font-medium mb-8">Ativação Global de 30 Dias</p>

            <div className="space-y-3 text-sm text-terra-600 bg-terra-50 p-6 rounded-xl mb-8">
                <div className="flex justify-between border-b border-terra-200 pb-2">
                    <span>Mão de Obra (DMO)</span>
                    <span className="font-bold">R$ 150/dia</span>
                </div>
                <div className="flex justify-between border-b border-terra-200 pb-2">
                    <span>Dias de Dedicação</span>
                    <span className="font-bold">20 dias</span>
                </div>
                <div className="flex justify-between">
                    <span>Período</span>
                    <span className="font-bold">Dez/25 - Jan/26</span>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
