'use client'

import { motion } from "motion/react";
import React from "react";

const sectionTitle = ({text}: {text: string}) => {
  return (
    <div className="overflow-visible">
    <motion.h2 className="from-sky mb-6 mt-4 bg-gradient-to-r to-[#7DCFE6] bg-clip-text text-transparent text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}>
     {text}
    </motion.h2>
    </div>
  );
};

export default sectionTitle;
