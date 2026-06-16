import { useState } from "react";
import { TranslationSet } from "../types";
import { Shield, ArrowRight, Github, Send, Terminal, Cpu } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  t: TranslationSet;
}

export default function Hero({ t }: HeroProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section 
      id="home" 
      className="relative min-h-screen px-6 py-32 flex flex-col items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Absolute ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[35vh] max-w-[650px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[30vw] h-[20vh] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Orbit Avatar Ring */}
        <div className="relative w-72 h-72 mb-10 flex items-center justify-center">
          {/* Orbit rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border border-dashed border-white/20 rounded-full flex items-center justify-center"
          >
            {/* Pulsing dot on orbit */}
            <div className="absolute -top-1.5 w-3 h-3 bg-green-400 rounded-full shadow-[0_0_12px_#4ade80] animate-pulse" />
          </motion.div>

          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border border-emerald-500/20 rounded-full"
          />

          <div className="absolute inset-8 border border-white/5 rounded-full bg-[#08080c]/60 backdrop-blur-xl" />

          {/* Core Avatar Container */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative w-44 h-44 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_35px_rgba(34,197,94,0.15)] bg-gradient-to-br from-neutral-900 to-[#07070a] z-10 flex items-center justify-center p-1 cursor-pointer"
          >
            {!imageError ? (
              <img 
                src="alisher.jpg" 
                alt="Alisherbek Qurambayev" 
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full rounded-full object-fit-cover object-center relative z-10 transition-transform duration-500 hover:scale-110"
              />
            ) : (
              <div id="fallback-avatar-text" className="w-full h-full rounded-full bg-gradient-to-br from-zinc-800 to-black flex flex-col items-center justify-center text-white relative z-10 font-display">
                <span className="text-4xl font-black tracking-tight bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                  AQ
                </span>
                <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-mono mt-1 font-semibold">
                  Sec Expert
                </span>
              </div>
            )}

            {/* Glowing ring overlay inside card */}
            <div className="absolute inset-0 rounded-full border border-white/10 z-20 pointer-events-none" />
          </motion.div>
        </div>

        {/* Project Available Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/5 bg-[#0C0C12]/92 backdrop-blur-md shadow-lg mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs uppercase font-mono font-semibold tracking-wider text-neutral-300">
            {t.badgeAvailable}
          </span>
        </motion.div>

        {/* Title / Headings */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-display font-light text-4xl sm:text-6xl md:text-7xl tracking-tighter text-white leading-[1.05] mb-8"
        >
          {t.heroHeading}{" "}
          <span className="block font-semibold bg-gradient-to-r from-neutral-100 via-neutral-100 to-white text-gradient">
            {t.heroHeadingDim}
          </span>
        </motion.h1>

        {/* Lead subtitle */}
        <motion.p 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="text-neutral-400 text-base sm:text-lg md:text-xl font-normal max-w-2xl leading-relaxed mb-10"
        >
          {t.heroSubtitle}
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 items-center justify-center mb-12"
        >
          <a 
            href="#services" 
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:scale-103 shadow-lg hover:shadow-white/5 hover:bg-neutral-100 transition-all active:scale-95 cursor-pointer"
          >
            {t.heroCtaWork}
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-white font-semibold text-sm hover:scale-103 transition-all active:scale-95 cursor-pointer"
          >
            <Terminal className="w-4 h-4 text-emerald-400" />
            {t.heroCtaContact}
          </a>
        </motion.div>

        {/* Channel Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 flex-wrap justify-center border-t border-white/5 pt-10 w-full"
        >
          <a 
            href="https://github.com/alisherkb" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/3 border border-white/5 text-neutral-300 text-xs font-mono tracking-wide hover:border-neutral-700 hover:text-white transition-all shadow-md hover:bg-white/5 active:scale-95"
          >
            <Github className="w-4 h-4 text-white" />
            <span>GITHUB</span>
          </a>
          <a 
            href="https://t.me/kodra_dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/3 border border-white/5 text-neutral-300 text-xs font-mono tracking-wide hover:border-neutral-700 hover:text-white transition-all shadow-md hover:bg-white/5 active:scale-95"
          >
            <Send className="w-4 h-4 text-[#229ED9]" />
            <span>TELEGRAM KANALIM</span>
          </a>
          <a 
            href="https://t.me/alisherkb" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/3 border border-white/5 text-neutral-300 text-xs font-mono tracking-wide hover:border-neutral-700 hover:text-white transition-all shadow-md hover:bg-white/5 active:scale-95"
          >
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>@ALISHERKB</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
