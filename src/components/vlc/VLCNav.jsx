import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "The Problem", href: "#problem" },
  { label: "The Program", href: "#program" },
  { label: "The Team",    href: "#team" },
  { label: "Partners",    href: "#partners" },
  { label: "Apply",       href: "#apply" },
];

export default function VLCNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/8">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 h-16" aria-label="Main navigation">
        {/* Logo */}
        <a href="#">
          <img src="https://res.cloudinary.com/daznfclhz/image/upload/v1776545325/xcdfdf_3_xbky0u.jpg"
            alt="The Venture Learning Collective"
            className="h-12 w-auto object-contain" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="font-display text-xs uppercase tracking-widest text-obsidian/50 hover:text-obsidian transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <a href="https://tally.so/r/ZjVWGe" target="_blank" rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 h-11 px-6 rounded-full bg-cobalt text-white font-display font-bold text-sm hover:bg-cobalt/90 transition-colors min-h-[48px]">
          Apply Now <ArrowRight className="w-4 h-4" />
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(v => !v)} aria-label="Toggle menu"
          className="md:hidden p-2 min-w-[48px] min-h-[48px] flex items-center justify-center">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-border px-6 pb-6 pt-3 space-y-1">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block font-display font-medium text-base text-obsidian py-3 border-b border-border last:border-0">
              {l.label}
            </a>
          ))}
          <a href="https://tally.so/r/ZjVWGe" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 h-12 rounded-full bg-cobalt text-white font-display font-bold text-sm">
            Apply Now <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}