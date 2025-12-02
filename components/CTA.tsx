
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, FolderOpen, Database, MessageCircle, ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  const whatsappNumber = "5511966529064";
  const message = encodeURIComponent("Olá! Li a proposta Conexão Terra Bambu e estou pronto para iniciar a ativação do Ecossistema Digital 🚀 Vamos construir esse legado.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <section className="relative py-24 px-4 flex items-center justify-center overflow-hidden bg-terra-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-30">
         <img 
          src="https://images.unsplash.com/photo-1596627786273-d67b8a7b6294?q=80&w=1920&auto=format&fit=crop" 
          alt="Bamboo Nature" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-terra-900 via-terra-900/90 to-terra-800/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block bg-terra-500 text-white border border-terra-400/50 px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-lg shadow-terra-500/30"
          >
            Comece no dia 03 de Dezembro
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-6 tracking-tight">
            Vamos Começar <span className="text-terra-400">Amanhã?</span>
          </h2>
          <p className="text-terra-200 text-lg max-w-2xl mx-auto leading-relaxed">
            O bambu cresce rápido quando as raízes estão fortes. Para garantir que o conteúdo comece a rodar, precisamos apenas de 3 passos simples.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
                { icon: CheckCircle, title: "1. Aceite", desc: "Confirmação do investimento." },
                { icon: FolderOpen, title: "2. Inventário", desc: "Lista de temas (Matrizes)." },
                { icon: Database, title: "3. Acessos", desc: "Drive, Host e GitHub." },
            ].map((step, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-left hover:bg-white/10 transition-colors group relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-16 bg-white/5 rounded-full blur-2xl -mr-8 -mt-8 transition-opacity opacity-0 group-hover:opacity-100"></div>
                    <div className="relative z-10">
                        <div className="text-terra-400 mb-4 group-hover:scale-110 transition-transform origin-left">
                            <step.icon size={36}/>
                        </div>
                        <h4 className="text-white font-bold text-2xl mb-2">{step.title}</h4>
                        <p className="text-terra-300 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                </motion.div>
            ))}
        </div>

        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
        >
            <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-4 bg-[#25D366] text-white font-bold text-lg md:text-xl px-12 py-6 rounded-full shadow-[0_0_40px_rgba(37,211,102,0.4)] hover:shadow-[0_0_60px_rgba(37,211,102,0.6)] transition-all cursor-pointer overflow-hidden"
            >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <MessageCircle className="w-8 h-8 fill-white text-white" />
            <span>ACEITAR E INICIAR PROJETO</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
        </motion.div>

        <p className="text-terra-500/60 text-xs mt-12 font-mono uppercase tracking-widest">
            © 2025 Conexão Terra Bambu. Full Stack Marketing.
        </p>
      </div>
    </section>
  );
};
