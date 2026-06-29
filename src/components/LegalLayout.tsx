import { motion } from "motion/react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

const LegalLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <div className="bg-background text-white selection:bg-primary selection:text-white pt-20 pb-24">
      <main className="container mx-auto px-6 pt-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="border-l-8 border-primary pl-8 mb-16">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">{title}</h1>
          </div>

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-400 font-medium leading-relaxed">
            {children}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default LegalLayout;
