"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="font-syne font-bold text-base tracking-tight">
          <span className="text-white">CUV</span>
          <span className="text-[#00e5ff]">.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["about", "projects", "contact"].map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-space-grotesk text-sm font-medium text-gray-300 hover:text-[#00e5ff] transition-colors duration-300 capitalize tracking-wide"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="font-space-grotesk text-sm font-medium px-4 py-2 rounded-md border border-[#00e5ff]/40 text-[#00e5ff] hover:bg-[#00e5ff]/10 transition-all duration-300"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-[#00e5ff] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass-nav border-t border-[#00e5ff]/10 px-6 py-4 flex flex-col gap-4">
          {["about", "projects", "contact"].map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-space-grotesk text-sm font-medium text-gray-300 hover:text-[#00e5ff] transition-colors capitalize text-left"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
