"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import CTAButton from "../cta_button"
import Navlink from "../navlink"

const navlinks = [
  { name: "Services", href: "#services" },
  { name: "How We Work", href: "#how-we-work" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact Us", href: "#contact" },
]

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="responsive relative z-20 py-2">
      <div className="container mx-auto flex items-center justify-between py-6">
        {/* Logo */}
        <Image src="/H Logo.svg" alt="logo" width={200} height={200} className="relative z-50" />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navlinks.map((link) => (
            <Navlink key={link.name} href={link.href} text={link.name} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <CTAButton />
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="relative z-50 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </motion.div>
          </AnimatePresence>
        </Button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 flex items-center justify-center bg-gray-900 bg-opacity-70 backdrop-blur-sm md:hidden"
            >
              <div className="flex flex-col items-center justify-center gap-8">
                {navlinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Navlink href={link.href} text={link.name} onClick={() => setIsOpen(false)} />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navlinks.length * 0.1 }}
                >
                  <CTAButton onClick={() => setIsOpen(false)} />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Nav

