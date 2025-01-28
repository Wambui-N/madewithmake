"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import CTAButton from "../cta_button";

const Hero = () => {
  return (
    <section className="container relative mx-auto flex min-h-[80vh] flex-col justify-center overflow-hidden text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <h1 className="from-sky mb-6 bg-gradient-to-r to-[#7DCFE6] bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
          Unlock Hands-Free Growth with
          <br />
          AI-Powered Workflows
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-grey md:text-xl">
        Save time, boost your leads, and streamline your business with custom automation solutions—ready to go in less than a week.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <CTAButton />
        
        </div>
      </motion.div>

      {/* Abstract tech background */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOHYxMmgxMlYxOEgzNnpNMTggMzZ2MTJIMTJWMZSI+PC9wYXRoPjwvZz48L3N2Zz4=')] bg-[length:30px] opacity-50"></div>
      </div>

      {/* Animated particles */}
      <Particles />
    </section>
  );
};

const Particles = () => {
  return (
    <div className="overflow-hidden absolute inset-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="bg-sky absolute h-1 w-1 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random(),
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default Hero;
