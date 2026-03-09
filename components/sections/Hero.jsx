"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE – TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Building Intelligent <span className="text-blue-500">AI Systems</span><br />
              & Stunning Web Apps.
            </h1>

            <p className="mt-6 text-gray-300 text-lg max-w-xl">
              I help startups and businesses create ML-powered solutions, automation tools,
              and high-quality full-stack applications using modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
              >
                Hire Me
              </Link>

              <Link
                href="/projects"
                className="px-6 py-3 border border-gray-700 text-gray-200 rounded-lg hover:bg-gray-800 transition"
              >
                View Projects
              </Link>
            </div>

            {/* Skills Badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              <SkillBadge text="AI/ML" />
              <SkillBadge text="Generative AI" />
              <SkillBadge text="Next.js" />
              <SkillBadge text="Java" />
              <SkillBadge text="Automation" />
            </div>
          </motion.div>

          {/* RIGHT SIDE – PLACEHOLDER / IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full h-72 md:h-80 rounded-2xl bg-gradient-to-br from-blue-500/10 to-indigo-800/10 border border-gray-700 flex items-center justify-center"
          >
            <div className="text-gray-400 text-center">
              <div className="text-2xl font-semibold">AI Chatbot Demo</div>
              <p className="mt-3">Will be added later in integration.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function SkillBadge({ text }) {
  return (
    <span className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border border-gray-700">
      {text}
    </span>
  );
}