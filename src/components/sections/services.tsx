"use client";

import React, { useEffect, useState } from "react";
import Badge from "../ui/badge";
import { Database, Bot, Target, Workflow } from "lucide-react";
import SectionTitle from "../sectionTitle";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
}) => (
  <div className="group relative overflow-hidden rounded-2xl bg-gray-900/50 p-8 transition-all duration-300 hover:shadow-lg">
    {/* Gradient overlay */}
    <div className="from-sky-500/10 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    {/* Content */}
    <div className="relative">
      <div className="bg-sky-500/10 text-sky-500 mb-6 flex h-12 w-12 items-center justify-center rounded-xl">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="group-hover:text-sky-600 mb-4 text-xl font-bold tracking-tight text-white">
        {title}
      </h3>

      <p className="text-grey">{description}</p>
    </div>
  </div>
);

const services = [
  {
    title: "CRM BUILDOUTS AND OPTIMIZATION",
    description:
      "Get your CRM set up or improved to help you track clients, manage tasks, and close deals faster. We'll make sure it works exactly how your business needs it.",
    icon: Database,
  },
  {
    title: "AI POWERED SERVICE FULFILLMENT",
    description:
      "Automate repetitive tasks and deliver services faster using AI for everything from processing to customer support, we'll help you handle the hard work effortlessly.",
    icon: Bot,
  },
  {
    title: "LEAD GENERATION AUTOMATIONS",
    description:
      "Attract and nurture leads automatically with tools that work 24/7. We'll set up systems to ensure you're getting fresh leads while you focus on your business.",
    icon: Target,
  },
  {
    title: "CUSTOM WORKFLOWS & SOLUTIONS",
    description:
      "Every business is unique, so we create workflows that match your specific needs. Let us streamline your processes and free up your time.",
    icon: Workflow,
  },
];

const ServicesSection = () => {
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Safe to use window here
      // Example: Fetch data or manipulate the DOM
    }
  }, []);

  return (
    <section id="services" className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center md:text-left">
        <Badge text="services" />
        <SectionTitle text="What our clients get" />
        <p className="mt-4 text-lg text-white md:max-w-2xl">
          Transform your business operations with our comprehensive suite of
          services designed to streamline, automate, and optimize your
          workflows.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
