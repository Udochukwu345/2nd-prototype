"use client";
import { useEffect, useRef, useState } from "react";

const badges = [
  { label: "Claude", color: "#00e5ff" },
  { label: "Cursor", color: "#7c3aed" },
  { label: "GitHub Copilot", color: "#00e5ff" },
];

export default function SummarySection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-6"
      style={{ backgroundColor: "#0a0f1e" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <div
          className={`flex items-center gap-3 mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-8 h-px bg-[#00e5ff]" />
          <span className="font-jetbrains text-xs text-[#00e5ff] tracking-widest uppercase">
            01 / About
          </span>
        </div>

        <h2
          className={`font-syne font-bold text-2xl md:text-3xl text-white mb-8 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Professional{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00e5ff, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Summary
          </span>
        </h2>

        {/* Glass card */}
        <div
          className={`relative glass-card rounded-2xl p-8 md:p-10 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Cyan left border glow */}
          <div
            className="absolute left-0 top-6 bottom-6 w-1 rounded-full"
            style={{
              background: "linear-gradient(180deg, #00e5ff, #7c3aed)",
              boxShadow: "0 0 12px rgba(0, 229, 255, 0.6)",
            }}
          />

          <div className="pl-6">
            <p className="font-space-grotesk text-sm text-gray-400 leading-relaxed mb-5">
              Results-driven Frontend Developer with{" "}
              <span className="text-white font-medium">3+ years</span> of
              hands-on experience building sleek, high-performance web
              applications with{" "}
              <span className="text-[#00e5ff]">React, TypeScript, and Supabase</span>.
              A proven AI integrator — I embed{" "}
              <span className="text-[#7c3aed]">Claude, Cursor, and GitHub Copilot</span>{" "}
              directly into my development workflow to ship faster, write
              cleaner code, and eliminate bugs before they reach production.
            </p>
            <p className="font-space-grotesk text-sm text-gray-400 leading-relaxed mb-7">
              I don't just{" "}
              <em className="text-gray-400 not-italic">use</em> AI tools; I{" "}
              <strong className="text-white font-medium">
                build AI-powered products
              </strong>
              . If your company sits at the frontier of intelligent software,{" "}
              <span className="text-[#00e5ff]">I am built for your team</span>.
            </p>

            {/* AI Tool Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="animate-pulse-glow font-jetbrains text-xs px-3 py-1.5 rounded-full border transition-all duration-300"
                  style={{
                    color: badge.color,
                    borderColor: `${badge.color}40`,
                    backgroundColor: `${badge.color}08`,
                  }}
                >
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
