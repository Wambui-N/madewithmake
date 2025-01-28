import React from "react";

interface BadgeProps {
  text: string;
  color?: string;
  textColor?: string;
}

const Badge: React.FC<BadgeProps> = ({ text }) => {
  return (
    <div className="py-6">
      <span
        className={`bg-dark_blue rounded-full px-4 py-1 text-sm uppercase text-white`}
      >
        {text}
      </span>
    </div>
  );
};

export default Badge;
