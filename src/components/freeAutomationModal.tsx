"use client";

import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

interface FreeAutomationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FreeAutomationModal: React.FC<FreeAutomationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setName("");
        setEmail("");
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50 bg-opacity-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-md rounded-lg bg-gray-900 p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-center justify-center py-8"
                >
                  <div className="mb-4 rounded-full bg-green-500/20 p-3">
                    <Check className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">Thank You!</h3>
                  <p className="text-center text-gray-300">
                    Please check your email for the automation details.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h3 className="mb-4 text-2xl font-bold text-sky">
                    Get Your Free Automation
                  </h3>
                  <p className="mb-6 text-gray-300">
                    Enter your details below to receive the free email attachment
                    automation.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full bg-gray-700 text-white"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full bg-gray-700 text-white"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full rounded-lg bg-gradient-to-r from-sky to-[#7DCFE6] px-6 py-2 font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl"
                    >
                      Get Automation
                    </Button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FreeAutomationModal;