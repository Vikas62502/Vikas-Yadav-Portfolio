"use client"

import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

const Reveal: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
