import { motion } from "framer-motion";
import { Award, Clock, ThumbsUp, Users } from "lucide-react";

const stats = [
  { icon: Users, value: "2000+", label: "Happy Clients" },
  { icon: Award, value: "150+", label: "Awards Won" },
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: ThumbsUp, value: "98%", label: "Success Rate" },
];

export function Stats() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-3"
          >
            <div className="rounded-lg bg-purple-100 p-3">
              <Icon className="size-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
