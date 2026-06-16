import { TranslationSet } from "../types";
import { User, Shield, GraduationCap, Laptop, Landmark, Award } from "lucide-react";
import { motion } from "motion/react";

interface AboutProps {
  t: TranslationSet;
}

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Visual highlight */}
      <div className="absolute right-0 bottom-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-[#4ade80] font-semibold flex items-center gap-2 mb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
          INFOSEC PROFILE
        </span>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-none mb-4">
          {t.aboutTitle}
        </h2>
        <p className="text-neutral-400 font-sans text-base max-w-2xl">
          {t.aboutSubtitle}
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        
        {/* Main Bio Card */}
        <motion.div 
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-2 relative p-8 rounded-3xl bg-[#09090D] border border-white/5 shadow-2xl flex flex-col justify-between overflow-hidden card-glow-white"
        >
          {/* Subtle grid bg inside card */}
          <div className="absolute inset-0 bg-dot-pattern opacity-40 z-0 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3.5 mb-6 text-green-400">
              <div className="p-2.5 rounded-xl bg-green-500/10 border border-green-500/20">
                <User className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                Alisherbek Qurambayev
              </h3>
            </div>
            
            <div className="space-y-4 text-neutral-300 font-sans text-sm sm:text-base leading-relaxed max-w-3xl">
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
            </div>
          </div>

          <div className="relative z-10 mt-10 p-5 rounded-2xl bg-white/3 border border-white/5 flex gap-4 items-center">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-white">
                {t.aboutNajotTitle}
              </h4>
              <p className="text-xs text-neutral-400 mt-1">
                {t.aboutNajotDesc}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          
          {/* Projects completed */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl bg-[#09090D] border border-white/5 flex flex-col justify-between relative overflow-hidden card-glow-green"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[#4ade80] font-bold">
                SYSTEMS ARCHITECT
              </span>
              <Award className="w-5 h-5 text-green-400" />
            </div>
            <div className="mt-8">
              <span className="font-display font-black text-5xl text-white tracking-tighter">
                {t.statsProjectsCount}
              </span>
              <p className="text-neutral-400 text-sm mt-2">
                {t.statsProjectsLabel}
              </p>
            </div>
          </motion.div>

          {/* Revenue growth / Client satisfaction */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl bg-[#09090D] border border-white/5 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[#818cf8] font-bold">
                CLIENT SUCCESS
              </span>
              <Landmark className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="mt-8">
              <span className="font-display font-black text-5xl text-white tracking-tighter">
                {t.statsRevenueCount}
              </span>
              <p className="text-neutral-400 text-sm mt-2">
                {t.statsRevenueLabel}
              </p>
            </div>
          </motion.div>

          {/* Cyber Security / Pentesting hours */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="sm:col-span-2 lg:col-span-1 p-8 rounded-3xl bg-[#09090D] border border-white/5 flex flex-col justify-between relative overflow-hidden card-glow-white"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold">
                CONTINUOUS AUDITING
              </span>
              <Shield className="w-5 h-5 text-neutral-300" />
            </div>
            <div className="mt-8">
              <span className="font-display font-black text-5xl text-white tracking-tighter">
                {t.statsPentestCount}
              </span>
              <p className="text-neutral-400 text-sm mt-2">
                {t.statsPentestLabel}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
