import { motion } from "framer-motion";
import React from "react";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  index: number;
};

export function ServiceCard({
  icon,
  title,
  description,
  tag,
  index,
}: Readonly<ServiceCardProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="rounded-xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative">
        <div className="mb-4 text-purple-600">{icon}</div>
        <span className="absolute right-0 top-0 rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-600">
          {tag}
        </span>
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
