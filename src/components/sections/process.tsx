"use client"

import { PhoneCall, Rocket, Cog, CheckCircle } from "lucide-react"
import ProcessStep from "../ProcessStep"
import SectionTitle from "../sectionTitle"
import Badge from "../ui/badge"

const processSteps = [
  {
    title: "Discovery Call",
    description:
      "We start with a free 30-minute call to learn about your business and goals. This helps us figure out the best solutions for you.",
    icon: PhoneCall,
  },
  {
    title: "Onboarding",
    description:
      "Once you're ready to proceed, we'll guide you through a quick onboarding process to gather everything we need to get started.",
    icon: Rocket,
  },
  {
    title: "Execution",
    description:
      "We get to work building and optimizing your custom automations. Our team ensures everything is tailored to your needs.",
    icon: Cog,
  },
  {
    title: "Delivery",
    description:
      "Your solution is ready! We walk you through how it works, make any final tweaks, and ensure you're set up for success.",
    icon: CheckCircle,
  },
]

const Process = () => {
  return (
    <section id="how-we-work" className="py-8 responsive">
      <Badge text="Process" />
      <SectionTitle text="Our Process is Simple, Clear, and Results-Driven" />
      <div className="relative w-full flex flex-col items-center">
        <div className="absolute transform -translate-x-1/2" />
        {processSteps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Process

