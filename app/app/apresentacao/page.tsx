'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Camera, Video, TrendingUp, Share2, MessageCircle } from 'lucide-react';

export default function PortfolioPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 overflow-hidden font-sans">
      {/* Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-800/10 blur-[120px] pointer-events-none" />
      <div className="fixed top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-indigo-900/10 blur-[100px] pointer-events-none" />

      <main className="relative z-10 container mx-auto px-6 py-16 md:py-24 max-w-4xl flex flex-col gap-24">
        
        {/* HERO SECTION */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-8"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <Image 
              src="https://i.postimg.cc/ZYdD5gJj/Sem-Titulo-1.png" 
              alt="Robson Quadros" 
              fill 
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
          
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              ROBSON QUADROS
            </h1>
            <h2 className="text-sm md:text-base font-medium tracking-[0.2em] text-purple-400 uppercase">
              Estratégia & Produção Audiovisual
            </h2>
          </div>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
            Foto, vídeo e conteúdo com estratégia — para empresas que querem vender mais e eventos que merecem registro profissional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
            <Link 
              href="https://wa.me/5554999333799?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site%20e%20quero%20agendar%20um%20diagn%C3%B3stico%20estrat%C3%A9gico."
              target="_blank"
              className="group relative flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-1"
            >
              Agendar Diagnóstico Estratégico
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="https://wa.me/5554999333799?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site%20e%20quero%20or%C3%A7amento%20para%20evento."
              target="_blank"
              className="group flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:-translate-y-1"
            >
              Pedir Orçamento para Evento
            </Link>
          </div>
          
          <Link 
            href="/"
            className="text-sm text-white/50 hover:text-purple-400 transition-colors mt-4 underline underline-offset-4"
          >
            Voltar para links
          </Link>
        </motion.section>

        {/* O QUE FAZEMOS */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">O que fazemos</h3>
            <div className="w-12 h-1 bg-purple-500 rounded-full mx-auto md:mx-0 opacity-50"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: Camera, title: "Foto Profissional", desc: "Produto, equipe, eventos e marca." },
              { icon: Video, title: "Vídeo & Reels", desc: "Captação + edição com estética premium." },
              { icon: TrendingUp, title: "Tráfego Pago", desc: "Campanhas de captação e remarketing (Meta Ads)." },
              { icon: Share2, title: "Social Media & Conteúdo", desc: "Calendário, direção criativa e presença digital." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PARA QUEM */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-8 py-12 px-6 rounded-3xl bg-gradient-to-b from-purple-900/10 to-transparent border border-purple-500/20"
        >
          <h3 className="text-sm font-medium tracking-[0.2em] text-purple-400 uppercase">Para quem</h3>
          <p className="text-lg md:text-xl text-white/80 font-light">
            Empresas locais • agronegócio • clínicas • comércios • eventos
          </p>
          <div className="w-full max-w-lg h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-2" />
          <p className="text-2xl md:text-3xl font-medium tracking-tight text-white max-w-2xl leading-tight">
            &quot;Se o seu concorrente aparece mais do que você, a gente arruma isso.&quot;
          </p>
        </motion.section>

        {/* COMO FUNCIONA */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Como funciona</h3>
            <div className="w-12 h-1 bg-purple-500 rounded-full mx-auto md:mx-0 opacity-50"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0" />
            
            {[
              { step: "01", title: "Diagnóstico", desc: "Entendemos seu momento e objetivos." },
              { step: "02", title: "Planejamento + Captação", desc: "Criamos a estratégia e produzimos o material." },
              { step: "03", title: "Entrega + Otimização", desc: "Material pronto para gerar resultados reais." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="flex-1 flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 relative z-10 shadow-xl"
              >
                <div className="w-10 h-10 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-mono font-bold text-sm">
                  {item.step}
                </div>
                <h4 className="text-lg font-medium text-white">{item.title}</h4>
                <p className="text-sm text-white/50">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PORTFÓLIO */}
        <motion.section 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-6 py-16 px-6 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm"
        >
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Portfólio</h3>
          <p className="text-white/60 max-w-md">
            Em atualização. Se quiser exemplos do teu segmento, me chama no WhatsApp.
          </p>
          <Link 
            href="https://wa.me/5554999333799?text=Ol%C3%A1%2C%20vim%20pelo%20portf%C3%B3lio%20e%20quero%20ver%20exemplos%20do%20seu%20trabalho%20para%20meu%20tipo%20de%20projeto."
            target="_blank"
            className="mt-4 flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            Pedir exemplos no WhatsApp
          </Link>
        </motion.section>

      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center">
        <p className="text-sm text-white/40">
          © {currentYear} Robson Quadros. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
