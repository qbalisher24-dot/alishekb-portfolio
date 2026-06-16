import { useState, useEffect, useRef } from "react";
import { Play, Pause, SkipForward, SkipBack, Volume2, ChevronRight, ChevronLeft, Disc3 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [isCollapsed, setIsCollapsed] = useState(true);
  
  // Real-time Audio Synthesizer states
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const lfoRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const filterNodeRef = useRef<BiquadFilterNode | null>(null);
  const intervalIdRef = useRef<number | null>(null);
  const stepCountRef = useRef(0);

  const playlist = [
    { title: "Cyber Shield (FM Synth)", sub: "Procedural Melody" },
    { title: "Defensive Ambient Pad", sub: "Modular LFO Drone" },
    { title: "Hex Arpeggiator Loop", sub: "Square Blip Sequence" }
  ];

  // Procedural Step Sequencer for Synth melodies!
  const playSeqStep = () => {
    if (!audioCtxRef.current || audioCtxRef.current.state === "suspended") return;
    
    const ctx = audioCtxRef.current;
    const now = ctx.currentTime;
    const step = stepCountRef.current % 16;
    stepCountRef.current += 1;

    // Different tracks have different procedural synth behaviors!
    if (currentTrackIdx === 0) {
      // Cyber Shield: A driving digital synth loop
      const chord = [110, 165, 220, 330]; // A-minor-ish notes
      const melody = [220, 261.63, 329.63, 392.00, 440, 523.25, 587.33, 659.25];
      
      // Base trigger
      if (step % 2 === 0) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sawtooth";
        // Base note
        const note = chord[Math.floor(Math.random() * chord.length)];
        osc.frequency.setValueAtTime(note, now);
        
        // Filter sweep
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(150, now);
        filter.frequency.exponentialRampToValueAtTime(1200, now + 0.15);

        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      }
      
      // Lead melodic arpeggios
      if (step % 4 === 1 || step === 14) {
        const leadOsc = ctx.createOscillator();
        const leadGain = ctx.createGain();
        leadOsc.type = "triangle";
        const noteIdx = Math.floor(now * 3) % melody.length;
        leadOsc.frequency.setValueAtTime(melody[noteIdx], now);

        leadGain.gain.setValueAtTime(0.04, now);
        leadGain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

        leadOsc.connect(leadGain);
        leadGain.connect(ctx.destination);
        leadOsc.start(now);
        leadOsc.stop(now + 0.2);
      }
    } else if (currentTrackIdx === 1) {
      // Defensive Ambient Pad: Slow modular LFO drone waves
      if (step % 8 === 0) {
        const frequencies = [220, 277.18, 329.63, 440]; // A-major-ish chord
        frequencies.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq / 2, now); // Low octave drone

          gain.gain.setValueAtTime(0, now);
          gain.gain.linearRampToValueAtTime(0.02, now + 0.8);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now);
          osc.stop(now + 2.8);
        });
      }
    } else {
      // Hex Arpeggiator Loop: Square Wave Blip arpeggio
      const notes = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
      const seq = [0, 4, 2, 6, 1, 5, 3, 7];
      const activeIdx = seq[step % seq.length];
      const freq = notes[activeIdx];

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.02, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.15);
    }
  };

  const startSynthesis = () => {
    try {
      if (!audioCtxRef.current) {
        // Safe cross-browser initialization of Web Audio API
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }

      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }

      // Start step sequencers
      if (!intervalIdRef.current) {
        intervalIdRef.current = window.setInterval(playSeqStep, 150);
      }
      setIsPlaying(true);
    } catch (e) {
      console.warn("Audio Context init blocked or failed: ", e);
    }
  };

  const pauseSynthesis = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
    setIsPlaying(false);
  };

  const stopAllOscillators = () => {
    pauseSynthesis();
  };

  const handlePlayToggle = () => {
    if (isPlaying) {
      pauseSynthesis();
    } else {
      startSynthesis();
    }
  };

  const handleNext = () => {
    const nextIdx = (currentTrackIdx + 1) % playlist.length;
    setCurrentTrackIdx(nextIdx);
    stepCountRef.current = 0; // Reset arpeggiator step count
  };

  const handlePrev = () => {
    const prevIdx = (currentTrackIdx - 1 + playlist.length) % playlist.length;
    setCurrentTrackIdx(prevIdx);
    stepCountRef.current = 0; // Reset arpeggiator step count
  };

  useEffect(() => {
    // Cleanup synthesized sound scheduler on unmount
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-4 p-3 bg-[#0A0A0F]/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isCollapsed ? "max-w-[56px] overflow-hidden" : "max-w-xs sm:max-w-sm"
      }`}
    >
      {/* Play/Pause Core Button */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePlayToggle}
        className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center cursor-pointer flex-shrink-0 shadow-lg relative"
      >
        {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black translate-x-0.5" />}
        
        {/* Animated green beat pulses */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-green-500/30 animate-ping pointer-events-none" />
        )}
      </motion.button>

      {/* Animated Sound Bars Visualizer */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="flex gap-0.5 items-end h-5 px-1.5 flex-shrink-0"
          >
            {[1.2, 0.6, 1.8, 1, 1.4].map((speed, idx) => (
              <motion.div 
                key={idx}
                animate={isPlaying ? { height: [4, 16, 4] } : { height: 4 }}
                transition={{ duration: speed, repeat: Infinity, ease: "easeInOut" }}
                className="w-[3px] bg-white rounded-full"
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Track Information */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 140 }}
            exit={{ opacity: 0, width: 0 }}
            className="flex flex-col min-w-0"
          >
            <span className="font-display text-xs font-bold text-white truncate leading-tight select-none">
              {playlist[currentTrackIdx].title}
            </span>
            <span className="text-[10px] text-neutral-500 uppercase tracking-widest leading-none font-mono mt-1 select-none">
              {playlist[currentTrackIdx].sub}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skipping Control Actions */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-1.5 flex-shrink-0 border-l border-white/5 pl-2.5"
          >
            <button 
              onClick={handlePrev}
              className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer active:scale-95"
            >
              <SkipBack className="w-3.5 h-3.5" />
            </button>
            <button 
              onClick={handleNext}
              className="p-1 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 transition-all cursor-pointer active:scale-95"
            >
              <SkipForward className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand/Collapse Trigger */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-1.5 rounded-full hover:bg-white/5 text-neutral-400 hover:text-white transition-all cursor-pointer flex-shrink-0"
        aria-label={isCollapsed ? "Expand music controller" : "Collapse music controller"}
      >
        {isCollapsed ? <Disc3 className="w-4 h-4 animate-spin-slow text-green-400" /> : <ChevronRight className="w-4 h-4" />}
      </button>

    </div>
  );
}
