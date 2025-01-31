'use client'

import React from 'react'
import { motion } from 'motion/react'

const blogHero = () => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex h-full flex-col items-center justify-center space-y-2 pt-24 pb-8"
      >
        <h1 className="mb-4 overflow-hidden bg-gradient-to-r from-sky to-[#7DCFE6] bg-clip-text text-5xl font-bold text-transparent md:text-5xl lg:text-6xl py-2">
        Expert Tips & Insights
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-grey md:text-base">
        A peek into the strategies, tools, and automations we use to help businesses thrive.
        </p>
      </motion.div>
  )
}

export default blogHero