import { TranslationSet } from "../types";
import { MessageSquareCode, ShieldAlert, Globe, Server, Check } from "lucide-react";
import { motion } from "motion/react";

interface ServicesProps {
  t: TranslationSet;
}

export default function Services({ t }: ServicesProps) {
  const servicesList = [
    {
      num: "01",
      icon: <MessageSquareCode className="w-6 h-6 text-green-400" />,
      title: "Telegram Bots & WebApps",
      titleUz: "Telegram Botlar & WebIlovalar",
      desc: "Fully integrated chatbots with automated payments (Click, Payme, Stripe), high-speed multi-user command loops, and custom responsive WebApps (using React + Tailwind) mounted directly inside Telegram clients.",
      descUz: "To'lov tizimlari (Click, Payme, Stripe) ulangan murakkab botlar, yuqori tezlikda ishlovchi boshqaruv zanjiri va Telegram ichidagi zamonaviy WebApp platformalari.",
      features: ["Auto-Payment API Gateway", "Responsive In-Telegram WebApps", "Bulk broadcast and administration tools", "Custom databases & analytics panels"],
      featuresUz: ["Avtomatik To'lov Gateway", "Chiroyli In-Telegram WebApplar", "Reklama jo'natish va admin asboblari", "Maxsus SQLite/MySQL bazalari"]
    },
    {
      num: "02",
      icon: <ShieldAlert className="w-6 h-6 text-[#ef4444]" />,
      title: "Penetration Testing & Security auditing",
      titleUz: "Pentest & Xavfsizlik Auditi",
      desc: "Continuous automated and manual auditing of web applications to scan and neutralize vulnerabilities, such as SQL Injection, XSS, and broken access controls following industry standards like OWASP.",
      descUz: "Veb saytlar va tizimlardagi SQL Injection, XSS, autentifikatsiya zaifliklarini professional aniqlash hamda hisobot tayyorlash xizmatlari.",
      features: ["OWASP Top 10 vulnerabilities hunting", "Network and server configuration checks", "Actionable patch and defense guides", "Secure code-review analysis"],
      featuresUz: ["OWASP Top 10 zaifliklarni aniqlash", "Server xavfsizligini tekshirish", "Yamash va mudofaa bo'yicha hisobotlar", "Kod tahlili (Secure code review)"]
    },
    {
      num: "03",
      icon: <Globe className="w-6 h-6 text-[#38bdf8]" />,
      title: "High-Performance Fullstack Web Apps",
      titleUz: "Zamonaviy Veb Saytlar",
      desc: "Sleek, responsive landing pages, business landing assets, and full-stack utilities optimized for maximum SEO ranking, lighthouse speed ratings, and state-of-the-art layout aesthetics.",
      descUz: "Yuqori tezlikda ishlaydigan zamonaviy landing payjlar, biznes vizitka saytlari hamda ma'lumotlar bazasi ulangan boshqaruv tizimlari.",
      features: ["SEO-Friendly markup construction", "Vite+Tailwind lightning-fast load times", "Responsive interfaces from mobile to ultrawide", "Seamless client integrations"],
      featuresUz: ["SEO optimizatsiyalashgan tuzilma", "Vite+Tailwind chaqmoqdek tezlik", "Mobil va planshetlar uchun to'la moslik", "Muammosiz uchinchi tomon integratsiyasi"]
    },
    {
      num: "04",
      icon: <Server className="w-6 h-6 text-[#a78bfa]" />,
      title: "Robust Backends & Server Hardening",
      titleUz: "Backend Arxitektura",
      desc: "Architecturing secure, scalable backend pipelines using PHP and Python. From setting up secure SQLite databases to mounting lightweight servers and harding Unix servers behind reverse proxies.",
      descUz: "PHP va Python tillarida yozilgan xavfsiz va tezkor backend tizimlari. SQLite, MySQL ma'lumotlar bazalarini optimal boshqarish va Unix serverlarni sozlash.",
      features: ["Multi-scale SQLite & MySQL indexing", "Unix server configurations & scripts", "Reverse proxy and SSL hardening", "Efficient API endpoint optimization"],
      featuresUz: ["SQLite va MySQL bazalarini indekslash", "Unix serverlarini sozlash va skriptlar", "Reverse proxy va SSL xavfsizlik kuchaytirgichi", "APIning maksimal tezkor ishlashini ta'minlash"]
    }
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Light glow effects */}
      <div className="absolute right-0 top-1/4 w-[35vw] h-[35vh] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Header */}
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-2 mb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          AVAILABLE CAPABILITIES
        </span>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-none mb-4">
          {t.servicesTitle}
        </h2>
        <p className="text-neutral-400 font-sans text-base max-w-2xl">
          {t.servicesSubtitle}
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {servicesList.map((s, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="p-8 rounded-3xl bg-[#09090D] border border-white/5 flex flex-col justify-between relative overflow-hidden shadow-2xl card-glow-white group"
          >
            {/* Subtle light aura on hover inside each card */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all shadow-md">
                  {s.icon}
                </div>
                <span className="font-mono text-xs font-bold text-neutral-500 tracking-wider">
                  SERVICES // {s.num}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight mb-3">
                {t.navHome.includes("Bosh") ? s.titleUz : s.title}
              </h3>
              
              <p className="text-neutral-400 text-sm font-sans leading-relaxed mb-6">
                {t.navHome.includes("Bosh") ? s.descUz : s.desc}
              </p>
            </div>

            {/* List of features */}
            <div className="border-t border-white/5 pt-6 mt-2">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-neutral-300">
                {(t.navHome.includes("Bosh") ? s.featuresUz : s.features).map((f, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                    <span className="truncate">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}
