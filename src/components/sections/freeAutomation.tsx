"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import FreeAutomationModal from "../freeAutomationModal";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  children: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, children }) => (
  <div className="space-y-2">
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-grey">{children}</p>
  </div>
);

const FreeAutomation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const features = [
    {
      title: "What It Does",
      description:
        "Automatically uploads email attachments from specific senders to your Google Drive.",
    },
    {
      title: "Who is it for",
      description:
        "Perfect for anyone who regularly handles important email documents.",
    },
    {
      title: "Why is it valuable",
      description:
        "Save time, eliminate manual tasks, and ensure important files are always where you need them.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-12 text-center">
            <h2 className="from-sky mb-6 mt-4 bg-gradient-to-r to-[#7DCFE6] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Have a Taste of What We Offer!
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-grey">
              Try out a simple yet powerful automation that shows how valuable
              automation can be. We built this easy-to-implement automation to
              save you time and keep you organized.
            </p>
          </div>

          <Card className="mb-8 border border-sky/20 bg-gray-900/50 backdrop-blur">
            <CardContent className="grid gap-8 p-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <FeatureCard key={index} title={feature.title}>
                  {feature.description}
                </FeatureCard>
              ))}
            </CardContent>
          </Card>

          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-sky group relative overflow-hidden rounded-lg px-6 py-2 font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <span className="flex items-center">
                Get Your Free Automation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      <FreeAutomationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default FreeAutomation;
