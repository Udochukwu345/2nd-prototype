"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    category: "E-Commerce",
    title: "E-Commerce Website",
    description:
      "A full-stack e-commerce platform with dynamic product listings, cart management, Stripe payments, and real-time inventory syncing via Supabase.",
    tech: ["React", "TypeScript", "Supabase", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    accent: "#00e5ff",
  },
  {
    id: "02",
    category: "Content & Media",
    title: "TikTok Content Platform",
    description:
      "A content creation hub and TikTok-inspired media website featuring video uploads, trending feeds, creator profiles, and AI-generated captions.",
    tech: ["Next.js", "Tailwind", "Claude API", "Supabase"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    accent: "#7c3aed",
  },
  {
    id: "03",
    category: "Engineering",
    title: "Engineering Website",
    description:
      "A technical showcase platform for an engineering firm with 3D model previews, project portfolios, team bios, and a client inquiry system.",
    tech: ["React", "TypeScript", "Three.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
    accent: "#00e5ff",
  },
];

function ProjectCard({
  project,
  delay,
  visible,
}: {
  project: (typeof projects)[0];
  delay: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl glass-card card-hover-glow cursor-pointer group transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: hovered ? "translateY(-6px)" : undefined,
        transition: visible
          ? `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease, border-color 0.3s ease`
          : `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 40%, rgba(10,15,30,0.95) 100%)",
          }}
        />

        {/* Category label */}
        <div className="absolute top-4 left-4">
          <span
            className="font-jetbrains text-xs px-3 py-1 rounded-full"
            style={{
              color: project.accent,
              backgroundColor: `${project.accent}15`,
              border: `1px solid ${project.accent}40`,
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Project number */}
        <div
          className="absolute top-4 right-4 font-jetbrains text-2xl font-bold opacity-20"
          style={{ color: project.accent }}
        >
          {project.id}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-syne font-bold text-xl text-white mb-2 group-hover:text-[#00e5ff] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="font-space-grotesk text-sm text-gray-400 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="font-jetbrains text-xs px-2 py-1 rounded"
              style={{
                color: "rgba(156,163,175,1)",
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          className="group/btn inline-flex items-center gap-2 font-space-grotesk text-sm font-medium transition-colors duration-300"
          style={{ color: project.accent }}
        >
          View Project
          <ArrowUpRight
            size={14}
            className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
          />
        </button>
      </div>

      {/* Hover overlay glow */}
      <div
        className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(ellipse at 50% 0%, ${project.accent}08 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}

export default function ProjectsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-6"
      style={{ backgroundColor: "#080d1a" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div
          className={`flex items-center gap-3 mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-8 h-px bg-[#00e5ff]" />
          <span className="font-jetbrains text-xs text-[#00e5ff] tracking-widest uppercase">
            02 / Projects
          </span>
        </div>

        <h2
          className={`font-syne font-bold text-2xl md:text-3xl text-white mb-3 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Selected{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00e5ff, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Work
          </span>
        </h2>

        <p
          className={`font-space-grotesk text-gray-400 text-base mb-12 max-w-lg transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          A curated selection of projects that demonstrate precision engineering
          and AI-first thinking.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={300 + i * 150}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
