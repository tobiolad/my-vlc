import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle, Calendar } from "lucide-react";

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

const weeks = [
  {
    num: "01",
    title: "Week 1",
    items: [
      "Move from a vague idea to a structured, clear project",
      "Define what you're building, who it's for, and how it works",
    ],
    outcome: "A structured, clear project",
  },
  {
    num: "02",
    title: "Week 2",
    items: [
      "Understand where your project fits",
      "Identify and align with real opportunities and funding criteria that match what you're building",
    ],
    outcome: "Aligned opportunities",
  },
  {
    num: "03",
    title: "Week 3",
    items: [
      "Refine how you present your project",
      "Structure your narrative clearly and prepare it for real applications, submissions, or opportunities",
    ],
    outcome: "A clear narrative and next step",
  },
];

const participantLeaves = [
  "A structured project",
  "Clearer positioning",
  "Identified opportunities",
  "A practical next step",
];

export default function VLCProgram() {
  return (
    <section id="program" className="bg-white py-32 lg:py-40 border-t border-black/8"
      aria-labelledby="program-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.18em] text-black mb-3">
            FIRST COHORT PROGRAM
          </p>
          <p className="font-display text-xs uppercase tracking-[0.12em] text-black/50 mb-12">
            IN PARTNERSHIP WITH GRANTED
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <h2 id="program-heading"
                className="font-display font-black leading-[0.95] tracking-[-0.04em]
                           text-[clamp(2.25rem,4.5vw,3.75rem)] text-obsidian">
                Three weeks to actually work through{" "}
                <span className="text-cobalt">what you're building.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:pt-2">
            <Reveal delay={0.3}>
              <p className="mt-4 font-display text-base leading-[1.6] text-obsidian/70">
                Small cohort of 10. Every week pairs a strategy session led by Tobi and Oyeta with a hands-on lab session powered by GRANTED's tools.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.35}>
          <div className="mb-16 flex items-center gap-4 p-5 bg-cobalt/8 border border-cobalt/20 rounded-sm">
            <Calendar className="w-5 h-5 text-cobalt shrink-0" />
            <p className="font-display text-sm text-obsidian">
              <span className="font-bold">Free info session - May 4, 2026 at 1:30 PM EST.</span>{" "}
              Open to all. 10 spots in the cohort. Youth founders prioritised.
            </p>
            <a href="https://tally.so/r/ZjVWGe" target="_blank" rel="noopener noreferrer"
              className="ml-auto shrink-0 inline-flex items-center gap-1.5 font-display font-bold text-sm text-cobalt hover:underline">
              Register free <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/8">
          {weeks.map((w, i) => (
            <Reveal key={w.num} delay={0.1 + i * 0.1}>
              <div className="bg-white p-8 lg:p-10 group hover:bg-cobalt transition-colors duration-300 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display text-xs uppercase tracking-widest text-black/30 group-hover:text-white/40 transition-colors">
                    {w.title}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-black/30 group-hover:text-white transition-colors" />
                </div>
                <ul className="space-y-3 flex-1">
                  {w.items.map(it => (
                    <li key={it} className="flex items-start gap-3">
                      <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-cobalt group-hover:bg-white transition-colors" />
                      <span className="font-display text-sm leading-[1.5] text-obsidian/85 group-hover:text-white/90 transition-colors">{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-black/8 group-hover:border-white/20 transition-colors">
                  <p className="font-display text-xs uppercase tracking-widest text-black/35 group-hover:text-white/50 transition-colors mb-1">
                    Outcome
                  </p>
                  <p className="font-display text-sm font-semibold text-obsidian group-hover:text-white transition-colors">
                    {w.outcome}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-px bg-cool p-8 lg:p-10 border-l-4 border-cobalt">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="font-display font-semibold text-sm text-obsidian mb-4">
                  Outcome
                </p>
                <ul className="space-y-2">
                  {participantLeaves.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                      <span className="font-display text-sm leading-[1.5] text-obsidian/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-16 flex flex-col sm:flex-row items-start gap-4">
            <a href="https://tally.so/r/ZjVWGe" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-cobalt text-white
                         font-display font-bold text-base hover:bg-cobalt/90 transition-colors min-h-[48px]
                         shadow-lg shadow-cobalt/20">
              Apply to the next cohort <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://tally.so/r/ZjVWGe" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full border border-black/15
                         text-obsidian font-display font-medium text-base hover:bg-cool transition-colors
                         min-h-[48px]">
              Register free <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="mt-4 font-display text-xs text-black/35 tracking-wider">
            10 spots. Youth founders. Free to apply.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
