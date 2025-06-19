import { motion } from "framer-motion";
import React from "react";
import { twMerge } from "tailwind-merge";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  scrolled?: boolean;
};

export function NavLink({
  href,
  children,
  isActive,
  scrolled = false,
}: Readonly<NavLinkProps>) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      href={href}
      className={twMerge(
        `relative px-3 py-2 text-sm font-medium transition-colors hover:text-purple-600 ${scrolled ? "text-black" : "text-white"} ${
          isActive && "text-purple-600"
        }`
      )}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeSection"
          className="absolute right-0 -bottom-1 left-0 h-0.5 bg-purple-600"
        />
      )}
    </motion.a>
  );
}
