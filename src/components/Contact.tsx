import { useState, FormEvent } from "react";
import { TranslationSet } from "../types";
import { Send, Phone, MapPin, Mail, ShieldCheck, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface ContactProps {
  t: TranslationSet;
}

export default function Contact({ t }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) return;

    setIsSending(true);
    
    // Simulate API transmit
    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", msg: "" });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Visual glowing light node */}
      <div className="absolute right-10 top-1/2 w-80 h-80 bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-[#4ade80] font-semibold flex items-center gap-2 mb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80] animate-pulse" />
          SECURE DISPATCH
        </span>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-none mb-4">
          {t.contactTitle}
        </h2>
        <p className="text-neutral-400 font-sans text-base max-w-2xl">
          {t.contactSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch relative z-10">
        
        {/* Contact info channels card */}
        <div className="lg:col-span-2 flex flex-col justify-between p-8 rounded-3xl bg-[#09090D] border border-white/5 shadow-2xl relative overflow-hidden card-glow-white">
          <div className="absolute inset-0 bg-dot-pattern opacity-30 z-0 pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="font-display text-xl font-bold text-white tracking-tight mb-8">
              {t.navHome.includes("Bosh") ? "Aloqa Ma'lumotlari" : "Connection Hub"}
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                    EMAIL
                  </p>
                  <a href="mailto:qbalisher24@gmail.com" className="text-sm font-semibold text-white hover:text-green-400 transition-colors">
                    qbalisher24@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#229ED9]">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                    TELEGRAM CHAT
                  </p>
                  <a href="https://t.me/alisherkb" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-green-400 transition-colors flex items-center gap-1">
                    @alisherkb
                    <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                    LOCATION
                  </p>
                  <p className="text-sm font-semibold text-neutral-200">
                    Tashkent, Uzbekistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-12 p-4 rounded-xl bg-green-500/5 border border-green-500/10 flex gap-3 items-center">
            <ShieldCheck className="w-5 h-5 text-green-400 flex-shrink-0" />
            <p className="text-[11px] font-mono text-green-300 leading-normal">
              SECURE ENVELOPE: All transmissions are verified securely in real-time. Message safety guaranteed.
            </p>
          </div>

        </div>

        {/* Contact dispatch form */}
        <div className="lg:col-span-3 p-8 rounded-3xl bg-[#09090D] border border-white/5 shadow-2xl relative overflow-hidden card-glow-white">
          <div className="absolute inset-0 bg-dot-pattern opacity-10 z-0 pointer-events-none" />
          
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase font-mono font-semibold tracking-wider text-neutral-400 mb-2">
                  {t.contactFormName}
                </label>
                <input 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#050508] border border-white/5 text-sm text-white placeholder-neutral-600 outline-none focus:border-green-400/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono font-semibold tracking-wider text-neutral-400 mb-2">
                  {t.contactFormEmail}
                </label>
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-[#050508] border border-white/5 text-sm text-white placeholder-neutral-600 outline-none focus:border-green-400/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-mono font-semibold tracking-wider text-neutral-400 mb-2">
                {t.contactFormMsg}
              </label>
              <textarea 
                required
                rows={5}
                value={formData.msg}
                onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                placeholder={t.navHome.includes("Bosh") ? "Loyihangiz bo'yicha batafsil ma'lumot qoldiring..." : "Describe your security target or developer needs in detail..."}
                className="w-full px-4 py-3.5 rounded-xl bg-[#050508] border border-white/5 text-sm text-white placeholder-neutral-600 outline-none focus:border-green-400/50 transition-colors resize-none"
              />
            </div>

            {/* Notification logs */}
            {isSuccess && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-xs font-semibold text-green-300 leading-normal"
              >
                {t.contactFormSuccess}
              </motion.div>
            )}

            <button 
              type="submit"
              disabled={isSending}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-bold text-sm tracking-wide flex items-center justify-center gap-2.5 hover:bg-neutral-200 hover:scale-101 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
            >
              {isSending ? (
                <>
                  <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  <span>{t.contactFormSending}</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-black" />
                  <span>{t.contactFormSend}</span>
                </>
              )}
            </button>
          </form>

        </div>

      </div>
    </section>
  );
}
