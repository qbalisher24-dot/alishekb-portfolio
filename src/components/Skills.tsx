import { TranslationSet } from "../types";
import { Laptop, Cpu, ShieldAlert, Terminal, Lock } from "lucide-react";
import { motion } from "motion/react";

interface SkillsProps {
  t: TranslationSet;
}

export default function Skills({ t }: SkillsProps) {
  const customSkills = [
    { name: "Telegram Bot & WebApp Development", percentage: 93, desc: "Python (aiogram, Telethon, Pyrogram), Node.js, Webhooks, API Integrations, Payment Gateways", color: "from-green-400 to-emerald-500" },
    { name: "Backend Architecture & Systems Engineering", percentage: 80, desc: "PHP, Python, REST APIs, SQLite/MySQL administration, Linux server scripting, security hardening", color: "from-blue-400 to-indigo-500" },
    { name: "Ethical Hacking & Web Vulnerability Audits", percentage: 70, desc: "OWASP Top 10 auditing, Kali Linux arsenal, network scanning, reverse engineering basics, secure code audits", color: "from-[#ef4444] to-[#f43f5e]" },
  ];

  const tools = [
    { name: "HTML5 & CSS3", abb: "HTML", color: "#e34f26" },
    { name: "JavaScript (ES6+)", abb: "JS", color: "#f7df1e", textDark: true },
    { name: "TypeScript", abb: "TS", color: "#3178c6" },
    { name: "Python", abb: "PY", color: "#3776ab" },
    { name: "PHP Web System", abb: "PHP", color: "#777bb4" },
    { name: "Kali Linux Operating System", abb: "KALI", color: "#367bf0" },
    { name: "SQLite & MySQL Engine", abb: "SQL", color: "#00758f" },
    { name: "Secure RESTful API Architecture", abb: "API", color: "#10b981" },
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background neon visualizer effect */}
      <div className="absolute left-0 bottom-0 w-[40vw] h-[30vh] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Header */}
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-indigo-400 font-semibold flex items-center gap-2 mb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
          TECHNICAL COMPETECE
        </span>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-none mb-4">
          {t.skillsTitle}
        </h2>
        <p className="text-neutral-400 font-sans text-base max-w-2xl">
          {t.skillsSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
        
        {/* Progress Bars Column */}
        <div className="space-y-8">
          {customSkills.map((s, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#08080C]/80 border border-white/5 shadow-lg relative overflow-hidden">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-display text-base font-bold text-white tracking-tight mb-1">
                    {s.name}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans max-w-md">
                    {s.desc}
                  </p>
                </div>
                <span className="font-mono text-sm font-bold text-white bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
                  {s.percentage}%
                </span>
              </div>
              
              {/* Progress bar rails */}
              <div className="h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden mt-4">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${s.color}`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tools Arsenal Grid */}
        <div className="p-8 rounded-3xl bg-[#09090D] border border-white/5 shadow-2xl relative overflow-hidden card-glow-white">
          <div className="absolute inset-0 bg-dot-pattern opacity-30 z-0 pointer-events-none" />
          
          <div className="relative z-10 mb-6 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white tracking-tight">
              {t.skillsStackTitle}
            </h3>
          </div>

          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-2 gap-4">
            {tools.map((t, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.02, border: "1px solid rgba(255,255,255,0.15)" }}
                className="flex items-center gap-3 p-4 rounded-xl bg-[#050508] border border-white/5 shadow-lg select-none group"
              >
                <div 
                  className={`w-10 h-10 rounded-lg flex items-center justify-center font-display font-black text-xs transition-transform duration-300 group-hover:scale-105`}
                  style={{ 
                    backgroundColor: t.color, 
                    color: t.textDark ? "#000" : "#fff",
                    boxShadow: `0 4px 15px color-mix(in srgb, ${t.color} 30%, transparent)` 
                  }}
                >
                  {t.abb}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors tracking-tight">
                    {t.name.split(" ")[0]}
                  </h4>
                  <p className="text-[10px] font-mono text-neutral-500 tracking-wider">
                    // READY
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
