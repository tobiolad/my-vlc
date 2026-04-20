import { ArrowRight, ArrowUp } from "lucide-react";

const YEAR = new Date().getFullYear();

export default function VLCFooter() {
  return (
    <footer className="bg-white border-t border-black/8 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">

          <div className="md:col-span-1">
            <img src="https://res.cloudinary.com/daznfclhz/image/upload/v1776545325/xcdfdf_3_xbky0u.jpg"
              alt="The Venture Learning Collective"
              className="h-14 w-auto object-contain mb-4" />
            <p className="font-display text-sm leading-[1.6] text-obsidian/70 max-w-xs">
              A nonprofit ecosystem for entrepreneurs who want to think clearly and build something real.
            </p>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-widest text-black/30 mb-5">Navigate</p>
            <ul className="space-y-3">
              {[
                { label: "The Problem",   href: "#problem" },
                { label: "The Program",   href: "#program" },
                { label: "Our Ecosystem", href: "#partners" },
                { label: "The Team",      href: "#team" },
                { label: "Get Involved",  href: "#apply" },
              ].map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    className="font-display text-sm text-obsidian/70 hover:text-cobalt transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-widest text-black/30 mb-5">Work with Us</p>
            <ul className="space-y-4">
              <li>
                <a href="https://oyeta.systeme.io/founder-advisory" target="_blank" rel="noopener noreferrer"
                  className="font-display text-sm text-obsidian/70 hover:text-cobalt transition-colors block">
                  Oyeta — Founder Advisory
                </a>
                <p className="font-display text-xs text-black/35 mt-0.5">Venture positioning & brand strategy</p>
              </li>
              <li>
                <a href="https://calendar.app.google/mAEjbipQGoAxTW426" target="_blank" rel="noopener noreferrer"
                  className="font-display text-sm text-obsidian/70 hover:text-cobalt transition-colors block">
                  Tobi — 1:1 Session
                </a>
                <p className="font-display text-xs text-black/35 mt-0.5">Ecosystem design & decision-making</p>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-widest text-black/30 mb-5">The Pathway</p>
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {["Thinking", "Structuring", "Deciding", "Growing"].map((s, i, arr) => (
                <div key={s} className="flex items-center gap-2">
                  <span className="font-display text-sm font-semibold text-obsidian">{s}</span>
                  {i < arr.length - 1 && <ArrowRight className="w-3 h-3 text-black/25 shrink-0" />}
                </div>
              ))}
            </div>
            <a href="https://tally.so/r/ZjVWGe" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-cobalt text-white
                         font-display font-bold text-sm hover:bg-cobalt/90 transition-colors min-h-[48px]
                         shadow-lg shadow-cobalt/15">
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-black/8 flex flex-col sm:flex-row
                        items-start sm:items-center justify-between gap-4">
          <p className="font-display text-xs text-black/30 tracking-wider">
            © {YEAR} Venture Learning Collective · Nonprofit Ecosystem Platform
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/venturelearningcollective"
              target="_blank" rel="noopener noreferrer"
              className="font-display text-xs uppercase tracking-widest text-black/30 hover:text-cobalt transition-colors">
              Instagram
            </a>
            <a href="https://www.linkedin.com/company/the-venture-learning-collective/"
              target="_blank" rel="noopener noreferrer"
              className="font-display text-xs uppercase tracking-widest text-black/30 hover:text-cobalt transition-colors">
              LinkedIn
            </a>
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll to top"
              className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center
                         text-black/30 hover:text-cobalt hover:border-cobalt transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
