import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["FRONT END", "BACKEND", "FULL STACK", "CREATIVE"];

const PRELOADER_KEY = 'preloader_last_shown';
const EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

const shouldShowPreloader = () => {
  const lastShown = localStorage.getItem(PRELOADER_KEY);
  if (!lastShown) return true; // first time ever
  return Date.now() - Number(lastShown) > EXPIRY_MS; // expired na
};

const Preloader = ({ finishLoading }) => {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!shouldShowPreloader()) {
      finishLoading();
      return;
    }
    // I-save ang timestamp ngayon
    localStorage.setItem(PRELOADER_KEY, String(Date.now()));
  }, []);

  useEffect(() => {
    if (index < words.length - 1) {
      const timer = setTimeout(() => setIndex(prev => prev + 1), 1100);
      return () => clearTimeout(timer);
    } else {
      const exitTimer = setTimeout(() => setIsExiting(true), 1500);
      return () => clearTimeout(exitTimer);
    }
  }, [index]);

  const nbOfColumns = 5;

  const stripVariants = {
    initial: { y: "0%" },
    exit: (i) => ({
      y: "-100%",
      transition: { duration: 0.8, delay: i * 0.1, ease: [1, 0, 0, 1] },
    }),
  };

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden">
      <div className="absolute inset-0 flex z-10 pointer-events-none">
        {Array.from({ length: nbOfColumns }).map((_, i) => (
          <motion.div
            key={i}
            variants={stripVariants}
            initial="initial"
            animate={isExiting ? "exit" : "initial"}
            onAnimationComplete={() => {
              if (isExiting && i === nbOfColumns - 1) finishLoading();
            }}
            custom={i}
            className="flex-1 bg-[#0a0a0a] border-r border-white/5"
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {!isExiting && (
          <motion.div
            key="content-wrapper"
            exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
            className="relative z-20 flex flex-col items-center justify-center h-full w-full bg-[#0a0a0a]"
          >
            <motion.p className="font-mono text-[10px] tracking-[6px] text-cyan-400 mb-8 opacity-50">
              0{index + 1} / 0{words.length}
            </motion.p>

            <div className="h-[120px] flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={words[index]}
                  initial={{ y: "100%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-100%" }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  className="text-white text-5xl md:text-8xl font-black italic tracking-tighter"
                >
                  {words[index]}
                </motion.h1>
              </AnimatePresence>
            </div>

            <div className="w-48 h-[1px] bg-white/10 mt-12 relative">
              <motion.div
                animate={{ width: `${((index + 1) / words.length) * 100}%` }}
                transition={{ duration: 0.5 }}
                className="absolute inset-y-0 left-0 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Preloader;