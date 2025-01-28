'use client'

import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  text: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  text,
  onClick,
  className = "",
}) => {
  return (
    <Link
      href={href}
      className={`after:bg-sky relative text-base font-base after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100 ${className}`}
      onClick={onClick}
    >
      <span className="text-sky hover:text-sky">{text}</span>
    </Link>
  );
};

export default NavLink;
