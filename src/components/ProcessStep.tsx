"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "motion/react";

interface ProcessStepProps {
  step: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  };
  index: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2, once: true });
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      className="mb-12 w-full py-6 last:mb-0"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[auto,1fr] md:gap-8">
        {/* Step Number Column */}
        <div className="hidden md:flex">
          <span className="text-6xl font-bold text-dark_blue">
            {(index + 1).toString().padStart(2, "0")}
          </span>
        </div>

        {/* Content Column */}
        <div className="flex w-full flex-col">
          {/* Header with Icon */}
          <div className="mb-4 flex items-center gap-4">
            <div className="bg-sky-500/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl">
              <step.icon className="text-sky-500 h-6 w-6" />
            </div>
            <h3 className="min-w-0 flex-grow text-xl font-bold text-white md:text-2xl">
              {step.title}
            </h3>
          </div>

          {/* Content Card */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-gray-900/50 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl md:p-8">
            {/* Gradient Overlay */}
            <div className="from-sky-500/5 inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Description */}
            <div className="relative w-full">
              <p className="leading-relaxed text-grey">{step.description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProcessStep;
