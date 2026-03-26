"use client";
import { useState, useEffect } from "react";
import { ArrowRight, Download } from "lucide-react";

const roles = ["Frontend Developer", "AI Integrator", "React Engineer"];

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 50 : 90;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((r) => (r + 1) % roles.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#0a0f1e" }}
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid-bg opacity-40 pointer-events-none" />

      {/* Radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 40%, rgba(0,229,255,0.05) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 70% 80%, rgba(124,58,237,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Status pill */}
        <div
          className={`inline-flex items-center gap-2 mb-10 px-3.5 py-1.5 rounded-full border border-[#00e5ff]/20 bg-[#00e5ff]/5 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00e5ff] animate-pulse" />
          <span className="font-jetbrains text-[10px] text-[#00e5ff] tracking-widest uppercase">
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <div
          className={`mb-5 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="font-jetbrains text-[10px] text-gray-600 tracking-[0.3em] uppercase block mb-4">
            Portfolio · 2025
          </span>
          <h1
            className="font-syne leading-tight"
            style={{
              fontSize: "clamp(1.75rem, 4.5vw, 3.25rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            <span className="text-white">Chikere </span>
            <span
              style={{
                background: "linear-gradient(135deg, #00e5ff 0%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Udochukwu Victor
            </span>
          </h1>
        </div>

        {/* Divider */}
        <div
          className={`flex items-center justify-center gap-3 mb-5 transition-all duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00e5ff]/40" />
          <div className="w-1 h-1 rounded-full bg-[#00e5ff]/40" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00e5ff]/40" />
        </div>

        {/* Typewriter */}
        <div
          className={`flex items-center justify-center gap-1.5 mb-5 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          <span className="font-space-grotesk text-base md:text-lg font-light text-gray-400">
            {displayText}
          </span>
          <span className="font-space-grotesk text-base md:text-lg text-[#00e5ff] animate-blink font-light">
            |
          </span>
        </div>

        {/* Tagline */}
        <p
          className={`font-space-grotesk text-sm text-gray-500 max-w-sm mx-auto mb-10 leading-relaxed transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          Shipping frontier software with React, TypeScript, and AI at every
          layer of the stack.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "650ms" }}
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-space-grotesk font-medium text-sm transition-all duration-200 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #00e5ff, #0891b2)",
              color: "#0a0f1e",
            }}
          >
            <span className="relative z-10">View My Work</span>
            <ArrowRight
              size={14}
              className="relative z-10 group-hover:translate-x-1 transition-transform"
            />
            <div className="absolute inset-0 shimmer-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group relative overflow-hidden inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-space-grotesk font-medium text-sm border border-[#00e5ff]/25 text-[#00e5ff] hover:border-[#00e5ff]/50 hover:bg-[#00e5ff]/5 transition-all duration-200 active:scale-95">
            <Download
              size={14}
              className="group-hover:-translate-y-0.5 transition-transform"
            />
            <span>Download CV</span>
            <div className="absolute inset-0 shimmer-btn opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-14 flex flex-col items-center gap-2 transition-all duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <span className="font-jetbrains text-[9px] text-gray-700 tracking-widest uppercase">
            scroll
          </span>
          <div className="w-px h-6 bg-gradient-to-b from-[#00e5ff]/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
