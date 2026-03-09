"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Secure Healthcare Monitoring",
      desc: "Fog-based secure healthcare monitoring system using ECC, AES encryption and optimized task scheduling.",
      tech: ["iFogSim2", "Java", "ECC", "AES"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Blog Generator",
      desc: "Automated AI-powered system that converts topic + raw data into SEO-optimized blog drafts with approval workflow.",
      tech: ["Next.js", "LLM", "MongoDB", "Automation"],
      github: "#",
      demo: "#",
    },
    {
      title: "Personal Portfolio Platform",
      desc: "Modern full-stack portfolio website with dynamic blog, chatbot integration, and SEO optimization.",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A selection of technical and AI-driven systems I have built.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              {/* Image Placeholder */}
              <div className="h-40 bg-gradient-to-br from-blue-500/10 to-indigo-600/10 rounded-xl mb-6 flex items-center justify-center text-gray-500">
                Project Preview
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.desc}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                >
                  <Github size={16} /> GitHub
                </a>

                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}