"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import CTAButton from "../cta_button";

const Hero = () => {
  return (
    <section className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex h-full flex-col items-center justify-center space-y-8"
      >
        <h1 className="mb-6 overflow-hidden bg-gradient-to-r from-sky to-[#7DCFE6] bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl">
          Unlock Hands-Free Growth with
          <br />
          AI-Powered Workflows
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-grey md:text-xl">
        We help you save time, get more leads, and make your business run smoothly with custom automation solutions. Everything will be ready in less than a week, and if you’re not happy, you get your money back—guaranteed.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <CTAButton />
        </div>
      </motion.div>

      {/* Abstract tech background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOHYxMmgxMlYxOEgzNnpNMTggMzZ2MTJIMTJWMZSI+PC9wYXRoPjwvZz48L3N2Zz4=')] bg-[length:30px] opacity-50"></div>
      </div>

      {/* Animated particles */}
      <Particles />
    </section>
  );
};

const Particles = () => {
  const [particles, setParticles] = useState<
    { x: number; y: number; opacity: number }[]
  >([]);

  useEffect(() => {
    // Create initial particles only in the browser
    const newParticles = [...Array(20)].map((_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      opacity: Math.random(),
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-sky"
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: particle.opacity,
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
