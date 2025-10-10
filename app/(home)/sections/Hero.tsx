"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-10">
        <div className="h-6 w-1 bg-black dark:bg-white rounded-full" />
        <h6 className="text-sm tracking-wider font-semibold font-mono">
          About
        </h6>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
          I’m a software developer who blends web development and AI/ML into products.
        </p>

        <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
          I’m not chasing titles — my goal is to be the kind of developer who can tackle any problem and say,
          <span className="italic"> “Done.”</span>
        </p>

        <p className="text-sm italic text-gray-600 dark:text-muted-foreground mb-2 font-mono">
          // If I don’t know it yet, I’ll learn it. That’s how I work.
        </p>

        <p className="text-base text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
          When I’m not building products, I’m exploring system programming, open source, or refining my Linux setup — because clean workflows beat caffeine.
        </p>

        <p className="text-base leading-relaxed text-gray-800 dark:text-gray-200">
          I believe good engineering isn’t about knowing tools — it’s about understanding <strong>when</strong> to use them, <strong>why</strong> they exist, and <strong>how</strong> to build things that last.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
