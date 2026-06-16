/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { uzbekContent, englishContent, TranslationSet } from "./types";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Terminal from "./components/Terminal";
import MusicPlayer from "./components/MusicPlayer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [lang, setLang] = useState<"uz" | "en">(() => {
    const saved = localStorage.getItem("portfolio-lang");
    return saved === "en" ? "en" : "uz";
  });

  const t: TranslationSet = lang === "uz" ? uzbekContent : englishContent;

  const toggleLang = () => {
    const nextLang = lang === "uz" ? "en" : "uz";
    setLang(nextLang);
    localStorage.setItem("portfolio-lang", nextLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#050508] text-neutral-100 font-sans relative selection:bg-white selection:text-black">
      
      {/* Decorative floating grids or gradients */}
      <div className="fixed inset-0 bg-dot-pattern opacity-10 pointer-events-none z-0" />
      
      {/* Dynamic Header / Navigation */}
      <Navbar t={t} lang={lang} toggleLang={toggleLang} />

      {/* Main Container flow */}
      <main className="relative z-10">
        
        {/* Core Hero Section */}
        <Hero t={t} />

        {/* Info Bio & Metrics Card block */}
        <About t={t} />

        {/* Skills competency and bars */}
        <Skills t={t} />

        {/* Services / Professional Offerings */}
        <Services t={t} />

        {/* Security Sand Terminal simulation console */}
        <Terminal t={t} />

        {/* Dispatch Message / Contact hub */}
        <Contact t={t} />

      </main>

      {/* Global Bottom Synthesizer Controller */}
      <MusicPlayer />

      {/* Polished Footing elements */}
      <Footer t={t} />

    </div>
  );
}
