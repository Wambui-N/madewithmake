"use client";

import { motion } from "motion/react";
import React from "react";

const sectionTitle = ({ text }: { text: string }) => {
  return (
    <div className="py-2">
      <motion.h1
        className="mb-4 py-2 mt-4 overflow-hidden bg-gradient-to-r from-sky to-[#7DCFE6] bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default sectionTitle;
