'use client';

import { motion } from 'motion/react';
import { Camera, Video, Instagram, Youtube, MessageCircle, ExternalLink, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const PROFILE_IMAGE = "https://i.postimg.cc/pVDNBHzT/e3e3e.png";
const WHATSAPP_NUMBER = "5554999333799";

const links = [
  {
    title: "Orçamento via WhatsApp",
    description: "Vamos conversar sobre o seu projeto",
    url: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: MessageCircle,
    primary: true,
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white relative overflow-hidden flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-900/30 blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1], x: [0, -30, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="w-full max-w-xl relative z-10 flex flex-col items-center">
        {/* Profile Header */}
        <motion.header 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 flex flex-col items-center w-full"
        >
          <div className="relative mb-6 group">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-br from-purple-500/50 to-purple-900/50 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out z-20 rounded-full"></div>
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#050505] relative z-10 bg-zinc-900">
                <Image 
                  src={PROFILE_IMAGE} 
                  alt="Robson Quadros" 
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-3">
            ROBSON QUADROS
          </h1>
          <h2 className="text-lg md:text-xl text-purple-400 font-medium tracking-wide mb-4 uppercase">
            Diretor de Estratégia & Marketing
          </h2>
          <p className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed">
            Estruturando negócios com estratégia, tráfego e posicionamento.
            <br />
            Crescimento com método, não com sorte.
          </p>
        </motion.header>

        {/* Links Section */}
        <div className="w-full space-y-4">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group block w-full relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out shadow-lg cursor-pointer ${
                link.primary 
                  ? 'bg-purple-600/10 border-purple-500/50 hover:bg-purple-600/20 hover:border-purple-400 hover:shadow-purple-500/20' 
                  : 'bg-[#141416] border-white/10 hover:border-purple-500/50 hover:shadow-purple-500/10'
              }`}
            >
              <div className="relative z-10 p-5 md:p-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className={`p-3 rounded-xl flex-shrink-0 transition-colors duration-300 ${
                    link.primary ? 'bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30 group-hover:text-purple-300' : 'bg-white/5 text-gray-400 group-hover:bg-purple-500/10 group-hover:text-purple-400'
                  }`}>
                    <link.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-bold transition-colors duration-300 flex items-center gap-2 ${
                      link.primary ? 'text-purple-50 group-hover:text-white' : 'text-white group-hover:text-purple-400'
                    }`}>
                      {link.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mt-1">
                      {link.description}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0 text-gray-500 group-hover:text-purple-400 transition-colors duration-300">
                  <ChevronRight size={20} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-center text-gray-600 text-sm"
        >
          <p>© {new Date().getFullYear()} Robson Quadros. Todos os direitos reservados.</p>
        </motion.footer>
      </div>
    </main>
  );
}
