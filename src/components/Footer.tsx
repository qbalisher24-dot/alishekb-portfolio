import { TranslationSet } from "../types";
import { Github, Send, ShieldAlert, ArrowUp } from "lucide-react";

interface FooterProps {
  t: TranslationSet;
}

export default function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[#030306] py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Branding block */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white text-black font-display font-black text-xs flex items-center justify-center">
              AQ
            </div>
            <span className="font-display font-black text-sm text-white uppercase tracking-wider">
              Alisherbek Q.
            </span>
          </div>
          <p className="text-xs text-neutral-500 font-sans mt-3 max-w-xs leading-relaxed">
            {t.footerText}
          </p>
        </div>

        {/* Directory links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a 
            href="https://github.com/alisherkb" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://t.me/alisherkb" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <Send className="w-3.5 h-3.5 text-[#229ED9]" />
            <span>Telegram Channel</span>
          </a>
          <a 
            href="#sandbox" 
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-emerald-400" />
            <span>Pentest Sand</span>
          </a>
        </div>

        {/* Action Button: Scroll Top */}
        <button 
          onClick={handleScrollTop}
          className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white transition-all cursor-pointer hover:border-white/20 active:scale-95"
          aria-label="Scroll to top of the page"
        >
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-[11px] font-mono text-neutral-600 gap-4">
        <span>
          &copy; {currentYear} Alisherbek Qurambayev. Tashkent, Uzbekistan.
        </span>
        <span>
          {t.footerRights}
        </span>
      </div>
    </footer>
  );
}
