import { useState, useEffect } from "react";
import { TranslationSet } from "../types";
import { Shield, Menu, X, Globe, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  t: TranslationSet;
  lang: "uz" | "en";
  toggleLang: () => void;
}

export default function Navbar({ t, lang, toggleLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        scrolled 
          ? "bg-[#050508]/85 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <a href="#home" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white text-black font-display font-black text-sm flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-tr group-hover:from-green-400 group-hover:to-emerald-600 group-hover:text-black group-hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/20">
            AQ
          </div>
          <div>
            <span className="font-display font-extrabold text-base tracking-tight text-white group-hover:text-green-400 transition-colors">
              Alisherbek
            </span>
            <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest leading-none mt-0.5">
              // PENTESTER
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm font-medium text-neutral-400">
            {[
              { label: t.navHome, href: "#home" },
              { label: t.navAbout, href: "#about" },
              { label: t.navSkills, href: "#skills" },
              { label: t.navServices, href: "#services" },
              { label: t.navSandbox, href: "#sandbox" },
              { label: t.navContact, href: "#contact" },
            ].map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className="hover:text-white transition-colors relative py-1 group font-sans block"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Vertical divider */}
          <div className="h-4 w-px bg-white/10" />

          {/* Interactive Language Switcher */}
          <button 
            id="lang-toggle-desktop"
            onClick={toggleLang}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono font-semibold text-white cursor-pointer transition-all hover:border-white/20 active:scale-95"
          >
            <Globe className="w-3.5 h-3.5 text-neutral-400 animate-spin-slow" />
            <span className="tracking-wide">
              {lang === "uz" ? "UZ" : "EN"}
            </span>
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button 
            id="lang-toggle-mobile"
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold text-white pointer-events-auto"
          >
            <Globe className="w-3.5 h-3.5 text-neutral-400" />
            <span>{lang === "uz" ? "UZ" : "EN"}</span>
          </button>

          <button 
            id="hamburger-menu"
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 rounded-lg hover:bg-white/5 text-white cursor-pointer transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 overflow-hidden border-t border-white/5 rounded-2xl bg-[#08080C]/95 backdrop-blur-xl shadow-2xl"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {[
                { label: t.navHome, href: "#home" },
                { label: t.navAbout, href: "#about" },
                { label: t.navSkills, href: "#skills" },
                { label: t.navServices, href: "#services" },
                { label: t.navSandbox, href: "#sandbox" },
                { label: t.navContact, href: "#contact" },
              ].map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="py-2.5 px-4 text-base font-medium rounded-xl text-neutral-300 hover:text-white hover:bg-white/5 block transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
