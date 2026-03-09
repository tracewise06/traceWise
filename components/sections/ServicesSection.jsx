"use client";

import { motion } from "framer-motion";
import { Brain, Code, Database, Cpu, Globe, Wrench } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "AI / Machine Learning",
      desc: "Custom ML models, fine-tuning, predictive analytics, and AI automation systems.",
    },
    {
      icon: Cpu,
      title: "Generative AI",
      desc: "Chatbots, RAG pipelines, embeddings, vector search, and LLM-based tools.",
    },
    {
      icon: Code,
      title: "Full Stack Development",
      desc: "Modern applications using Next.js, React, Node.js, and scalable APIs.",
    },
    {
      icon: Database,
      title: "Backend & Databases",
      desc: "Secure backend architecture using PostgreSQL, MongoDB, and Java services.",
    },
    {
      icon: Globe,
      title: "Cloud Deployment",
      desc: "Deploying apps on Vercel, AWS, and optimized production environments.",
    },
    {
      icon: Wrench,
      title: "Automation Systems",
      desc: "AI-powered automation tools, scheduled workflows, and task optimization.",
    },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">What I Offer</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            I provide cutting-edge AI solutions and scalable web systems tailored for businesses and startups.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-gray-800 bg-gray-900 hover:bg-gray-800 transition shadow-lg"
              >
                <Icon className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}