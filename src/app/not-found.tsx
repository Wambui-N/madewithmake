"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Home, RefreshCcw } from "lucide-react"

const NotFound = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      constructor() {
        this.x = Math.random() * (canvas?.width ?? 0)
        this.y = Math.random() * (canvas?.height ?? 0)        
        this.size = Math.random() * 5 + 1
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.size > 0.2) this.size -= 0.1
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = "#ADECFE"
        ctx.strokeStyle = "#ADECFE"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    const particleArray: Particle[] = []
    const numberOfParticles = 100

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particleArray.push(new Particle())
      }
    }

    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update()
        particleArray[i].draw()
      }
      requestAnimationFrame(animate)
    }

    init()
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      init()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="relative flex flex-col items-center justify-center text-white overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />
      <div className="relative z-10 text-center py-24">
        <motion.h1
          className="text-9xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ADECFE] to-[#7DCFE6]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.p
          className="text-xl pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Oops! Looks like this page got lost in the digital void.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4 w-auto py-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/"
            className="bg-[#ADECFE] text-gray-900 px-6 py-3 rounded-lg flex items-center transition-transform transform hover:scale-105"
          >
            <Home className="mr-2" />
            Go Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="border border-[#ADECFE] text-[#ADECFE] px-6 py-3 rounded-lg flex items-center transition-transform transform hover:scale-105"
          >
            <RefreshCcw className="mr-2" />
            Try Again
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound

