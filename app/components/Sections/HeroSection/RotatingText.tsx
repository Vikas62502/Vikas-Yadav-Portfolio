"use client"

import { AnimatePresence, motion } from "framer-motion";
import { FC, useEffect, useState } from "react";

interface RotatingTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

const RotatingText: FC<RotatingTextProps> = ({ words, className, interval = 2200 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "60%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-60%", opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ display: "inline-block" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default RotatingText;
