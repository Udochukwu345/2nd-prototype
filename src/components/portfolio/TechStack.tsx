"use client";

const tech = [
  { label: "React", icon: "⚛️" },
  { label: "TypeScript", icon: "🔷" },
  { label: "Next.js", icon: "▲" },
  { label: "Supabase", icon: "⚡" },
  { label: "Tailwind CSS", icon: "🎨" },
  { label: "Claude API", icon: "🤖" },
  { label: "React Query", icon: "🔄" },
  { label: "Framer Motion", icon: "✨" },
  { label: "Vercel", icon: "△" },
  { label: "Git", icon: "📦" },
];

export default function TechStack() {
  const items = [...tech, ...tech]; // duplicate for seamless loop

  return (
    <div
      className="py-8 overflow-hidden border-y"
      style={{
        backgroundColor: "#0a0f1e",
        borderColor: "rgba(0,229,255,0.1)",
      }}
    >
      <div className="relative flex gap-0">
        <div className="flex gap-10 animate-marquee whitespace-nowrap">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-lg"
              style={{
                backgroundColor: "rgba(0,229,255,0.04)",
                border: "1px solid rgba(0,229,255,0.1)",
              }}
            >
              <span className="text-sm">{item.icon}</span>
              <span className="font-jetbrains text-xs text-gray-400 tracking-widest uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
