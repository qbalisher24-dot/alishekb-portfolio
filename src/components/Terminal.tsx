import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { TranslationSet } from "../types";
import { Terminal as TerminalIcon, ShieldAlert, Cpu, Sparkles, AlertCircle } from "lucide-react";
import { motion } from "motion/react";

interface TerminalProps {
  t: TranslationSet;
}

interface LogLine {
  text: string;
  type: "input" | "success" | "info" | "error" | "default";
}

export default function Terminal({ t }: TerminalProps) {
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<LogLine[]>([
    { text: t.terminalWelcome, type: "info" },
    { text: "Type 'help' to see available cyber security protocols and scan targets.", type: "default" }
  ]);
  const [isScanning, setIsScanning] = useState(false);
  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const newLogs = [...logs, { text: `alisher-security@guest:~$ ${cmd}`, type: "input" as const }];

    if (cleanCmd === "") {
      setLogs(newLogs);
      return;
    }

    if (cleanCmd === "help") {
      setLogs([
        ...newLogs,
        { text: "=== SYSTEM COMAND PROTOCOLS ===", type: "info" },
        { text: "  whoami   - Discover details about Alisherbek Qurambayev.", type: "default" },
        { text: "  scan     - Initiate security vulnerability scanner on test nodes.", type: "default" },
        { text: "  exploit  - Execute simulated system defensive diagnostics.", type: "default" },
        { text: "  decrypt  - Decrypt a mock security key cipher.", type: "default" },
        { text: "  clear    - Clear terminal stream logs.", type: "default" },
        { text: "================================", type: "info" }
      ]);
    } else if (cleanCmd === "whoami") {
      setLogs([
        ...newLogs,
        { text: "[*] Profile Query: Alisherbek Qurambayev", type: "info" },
        { text: "  Role: Fullstack Engineer & Ethical Hacking Enthusiast", type: "default" },
        { text: "  Age: 18 years", type: "default" },
        { text: "  Systems: Kali Linux, Node.js, Python, PHP, Docker", type: "default" },
        { text: "  Mission: Build pristine code while hardening web defenses.", type: "success" }
      ]);
    } else if (cleanCmd === "clear") {
      setLogs([]);
    } else if (cleanCmd === "scan") {
      setIsScanning(true);
      setLogs([
        ...newLogs,
        { text: "[!] INITIATING DYNAMIC WEB SCANNER v1.02...", type: "info" },
        { text: "[*] Target Node: localhost:3000 (Simulated)", type: "default" },
        { text: "[+] Port 80: HTTP Open [Detecting Apache/2.4.41]", type: "success" },
        { text: "[+] Port 3000: Node Express API [Active Server Host]", type: "success" }
      ]);

      // Delay scan updates
      setTimeout(() => {
        setLogs(prev => [
          ...prev,
          { text: "[*] Running SQL Injection & Cross-Site Scripting audits...", type: "info" },
          { text: "[+] SQLi checks passed: Parameterized SQL structure confirmed.", type: "success" },
          { text: "[+] Web Session audit: JWT token storage hardened successfully.", type: "success" },
          { text: "[✓] SECURITY SCAN COMPLETED: 0 critical risks identified.", type: "success" }
        ]);
        setIsScanning(false);
      }, 1500);

    } else if (cleanCmd === "exploit") {
      setLogs([
        ...newLogs,
        { text: "[!] DEFENSIVE exploit diagnostic initialized...", type: "error" },
        { text: "[*] Injecting benign security validation token into buffer...", type: "default" },
        { text: "[✓] System protected: Buffer Overflow payload blocked by modern compiler rules.", type: "success" },
        { text: "[✓] CORS policy verified: Secure Cross-Origin Request filters active.", type: "success" }
      ]);
    } else if (cleanCmd === "decrypt") {
      const code = Math.random().toString(36).substring(2, 10).toUpperCase();
      setLogs([
        ...newLogs,
        { text: "[*] Loading active cipher payload: " + code, type: "info" },
        { text: "[+] Running multi-round decryptor challenge...", type: "default" },
        { text: "[✓] CIPHER BROKEN! Decrypted value: SUCCESS_BYPASS_VERIFIED", type: "success" }
      ]);
    } else {
      setLogs([
        ...newLogs,
        { text: `bash: ${cmd}: command not found. Try 'help' for guidance.`, type: "error" }
      ]);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isScanning) {
      handleCommand(inputVal);
      setInputVal("");
    }
  };

  return (
    <section id="sandbox" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      
      {/* Background glow node */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[50vw] h-[25vh] bg-green-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-green-400 font-semibold flex items-center gap-2 mb-2">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-ping" />
          INTERACTIVE AUDIT MODE
        </span>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-none mb-4">
          {t.terminalTitle}
        </h2>
        <p className="text-neutral-400 font-sans text-base max-w-2xl">
          {t.terminalSubtitle}
        </p>
      </div>

      {/* Interactive Console Shell */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-full rounded-2xl border border-white/5 bg-[#030305] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col relative"
      >
        {/* Terminal Header Bar */}
        <div className="px-5 py-3.5 bg-[#09090D] border-b border-white/5 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-green-400 animate-pulse" />
            <span className="font-mono text-xs font-bold text-neutral-300 tracking-tight">
              alisher-infosec@security-kernel:~
            </span>
          </div>
          {/* Mock controls */}
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
          </div>
        </div>

        {/* Console logs body */}
        <div className="relative p-6 h-80 overflow-y-auto font-mono text-xs md:text-sm leading-relaxed" style={{ backgroundColor: "#020204" }}>
          
          {/* Micro scanline effect */}
          <div className="absolute inset-0 scanlines pointer-events-none opacity-[0.14] z-10" />

          <div ref={logContainerRef} className="h-full space-y-2.5 overflow-y-auto pr-2 relative z-20">
            {logs.map((log, idx) => (
              <div 
                key={idx} 
                className={`${
                  log.type === "input" 
                    ? "text-neutral-200" 
                    : log.type === "success" 
                    ? "text-green-400 font-semibold" 
                    : log.type === "info" 
                    ? "text-indigo-400" 
                    : log.type === "error" 
                    ? "text-rose-400 font-semibold" 
                    : "text-neutral-400"
                }`}
              >
                {log.text}
              </div>
            ))}
            {isScanning && (
              <div className="text-green-400 animate-pulse">
                [*] Scanning node directories... [Processing packets]
              </div>
            )}
          </div>
        </div>

        {/* Input buffer line */}
        <div className="flex items-center gap-2 px-6 py-4 bg-[#050508] border-t border-white/5 relative z-20">
          <span className="font-mono text-xs md:text-sm text-green-400 font-bold select-none">
            alisher-security@guest:~$
          </span>
          <input 
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isScanning}
            placeholder={t.terminalPlaceholder}
            className="flex-1 bg-transparent border-none outline-none font-mono text-xs md:text-sm text-white caret-green-400 p-0 placeholder-neutral-600 focus:ring-0"
          />
        </div>
      </motion.div>
    </section>
  );
}
