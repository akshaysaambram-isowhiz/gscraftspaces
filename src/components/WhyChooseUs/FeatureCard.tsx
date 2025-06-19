import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: Readonly<FeatureCardProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="rounded-2xl bg-gray-50 p-8 transition-colors duration-300 hover:bg-purple-50"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100">
        <Icon className="size-6 text-purple-600" />
      </div>
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
