import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 28 },
  animate:   { opacity: 1, y: 0 },
  transition:{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function VLCHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-white"
      aria-labelledby="hero-heading">

      {/* Thin monolinear accent top-right */}
      <div className="absolute top-0 right-0 w-px h-full bg-black/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 pt-28 pb-20 lg:py-0 grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-16 items-center lg:min-h-screen">

        {/* Left copy — 7 cols */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.p {...fadeUp(0.1)}
            className="font-display text-xs uppercase tracking-[0.18em] text-black mb-8">
            Venture Learning Collective
          </motion.p>

          <motion.h1 {...fadeUp(0.2)} id="hero-heading"
            className="font-display font-black text-obsidian leading-[1.15] tracking-[-0.03em]
                       text-[clamp(1.75rem,3.5vw,3.25rem)]">
            From idea to a fundable,<br />
            high-potential{" "}
            <span className="text-cobalt font-black">venture</span><br />
            structured, positioned,<br />
            and built to be taken seriously.
          </motion.h1>

          <motion.p {...fadeUp(0.35)}
            className="mt-8 font-display text-lg leading-[1.6] text-obsidian/80 max-w-xl">
            The Venture Learning Collective is an ecosystem platform helping entrepreneurs structure, position, and develop ventures that can access funding, scale sustainably, and create real-world impact.
          </motion.p>

          <motion.p {...fadeUp(0.4)}
            className="mt-3 font-display text-base leading-[1.6] text-obsidian/70 max-w-xl">
            Built by founders, operators, and ecosystem leaders across data, product, and brand. Led by founders who have built and positioned real ventures, not just taught theory.
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="https://tally.so/r/ZjVWGe" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-cobalt text-white
                         font-display font-bold text-base hover:bg-cobalt/90 transition-colors
                         min-h-[48px] shadow-lg shadow-cobalt/20">
              Join the next cohort <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#partners"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full border border-black/15
                         text-obsidian font-display font-medium text-base hover:bg-cool transition-colors
                         min-h-[48px]">
              Explore collaboration <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.p {...fadeUp(0.6)}
            className="mt-8 font-mono text-xs text-black/35 tracking-wider">
            Small cohort. Practical, hands-on support. No prior funding experience required.
          </motion.p>
        </div>

        {/* Right — photo collage + stats */}
        <motion.div {...fadeUp(0.45)}
          className="lg:col-span-5 flex flex-col gap-4 mt-12 lg:mt-0">

          {/* Photo grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 relative overflow-hidden rounded-sm aspect-[16/7]">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Entrepreneurs collaborating"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-obsidian/30" />
            </div>
            <div className="relative overflow-hidden rounded-sm aspect-square">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80"
                alt="Entrepreneur presenting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-obsidian/20" />
            </div>
            <div className="relative overflow-hidden rounded-sm aspect-square">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=500&q=80"
                alt="Startup team meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-obsidian/20" />
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-px bg-black/8">
            {[
              { num: "3", label: "Weeks", sub: "to funding readiness" },
              { num: "3", label: "Orgs", sub: "Data · Product · Brand" },
              { num: "1", label: "Grant", sub: "Most viable project" },
            ].map(s => (
              <div key={s.label} className="bg-white px-4 py-5 text-center">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display font-black text-3xl leading-none tracking-[-0.05em] text-obsidian">
                    {s.num}
                  </span>
                  <span className="font-display font-black text-base leading-none tracking-[-0.02em] text-cobalt">
                    {s.label}
                  </span>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-black/40 mt-1.5">
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom monolinear connector */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-black/10 hidden lg:block" />
    </section>
  );
}