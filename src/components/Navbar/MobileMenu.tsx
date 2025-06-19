import { navLinks } from "@/components/Navbar/navData";
import { AnimatePresence, motion } from "framer-motion";

type MobileMenuProps = {
  isOpen: boolean;
  activeSection: string;
};

export function MobileMenu({
  isOpen,
  activeSection,
}: Readonly<MobileMenuProps>) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full right-0 left-0 bg-white/90 shadow-lg backdrop-blur-lg md:hidden"
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
            <motion.a
              href="/brochure.jpeg"
              whileTap={{ scale: 0.95 }}
              className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-purple-600"
            >
              Brochure
            </motion.a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
