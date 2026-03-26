"use client";
import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
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

  const links = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:chikereudochukwu@gmail.com",
      color: "#00e5ff",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "#7c3aed",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "#00e5ff",
    },
  ];

  return (
    <footer
      id="contact"
      ref={ref}
      className="relative pt-24 pb-12 px-6 overflow-hidden"
      style={{ backgroundColor: "#0a0f1e" }}
    >
      {/* Animated gradient border at top */}
      <div className="absolute top-0 left-0 right-0 h-px gradient-border-animate" />

      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section label */}
        <div
          className={`flex items-center gap-3 mb-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-8 h-px bg-[#00e5ff]" />
          <span className="font-jetbrains text-xs text-[#00e5ff] tracking-widest uppercase">
            03 / Contact
          </span>
        </div>

        {/* Headline */}
        <h2
          className={`font-syne font-bold text-2xl md:text-3xl text-white mb-4 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Let's Build
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #00e5ff, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Something Great.
          </span>
        </h2>

        <p
          className={`font-space-grotesk text-gray-500 text-sm max-w-md mb-10 leading-relaxed transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          I'm currently open to full-time roles and select freelance
          engagements. If you're working at the frontier of intelligent software
          — reach out.
        </p>

        {/* Contact links */}
        <div
          className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {links.map(({ icon: Icon, label, href, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-3 rounded-xl glass-card hover:scale-105 transition-all duration-300"
              style={{
                borderColor: `${color}30`,
              }}
            >
              <Icon
                size={16}
                style={{ color }}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="font-space-grotesk text-sm text-gray-300 group-hover:text-white transition-colors">
                {label}
              </span>
              <ArrowUpRight
                size={12}
                className="text-gray-600 group-hover:text-gray-400 transition-colors"
              />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,229,255,0.2), transparent)",
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-syne font-bold text-base">
            <span className="text-white">CUV</span>
            <span className="text-[#00e5ff]">.</span>
          </div>
          <p className="font-space-grotesk text-xs text-gray-600 text-center">
            © 2024 Chikere Udochukwu Victor. Built with React, Next.js &
            Tailwind.
          </p>
          <div className="font-jetbrains text-xs text-gray-700">
            &lt;/&gt; with precision
          </div>
        </div>
      </div>
    </footer>
  );
}
