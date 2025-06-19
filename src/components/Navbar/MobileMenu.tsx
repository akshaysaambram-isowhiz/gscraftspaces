import { navLinks } from "@/components/Navbar/navData";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  activeSection,
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="absolute left-0 right-0 top-full bg-white/90 shadow-lg backdrop-blur-lg md:hidden"
      >
        <nav className="px-4 py-2">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileTap={{ scale: 0.95 }}
              className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                activeSection === link.href
                  ? "bg-purple-50 text-purple-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-purple-600"
              }`}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    )}
  </AnimatePresence>
);
