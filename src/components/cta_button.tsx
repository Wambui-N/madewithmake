"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ onClick }) => {
  return (
    <Button
      className="group relative overflow-hidden rounded-lg bg-sky px-6 py-3 font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl"
      onClick={() => window.open("https://tally.so/r/3xRrM9")}
    >
      <span className="relative z-10 flex items-center">
        Book a 15-Min Chat
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-sky to-[#7DCFE6] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
      <span className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOHYxMmgxMlYxOEgzNnpNMTggMzZ2MTJIMTJWMZSI+PC9wYXRoPjwvZz48L3N2Zz4=')] bg-[length:20px] opacity-30" />
    </Button>
  );
};

export default CTAButton;
