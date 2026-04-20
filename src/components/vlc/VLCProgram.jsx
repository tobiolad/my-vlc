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
    title: "Getting the venture clear",
    items: [
      "Move from a vague idea to a structured, clear project",
      "Define what you're building, who it's for, and how it works",
    ],
    outcome: "A structured, clear project",
  },
  {
    num: "02",
    title: "Finding where it fits",
    items: [
      "Understand where your project fits",
      "Identify and align with real opportunities and funding criteria that match what you're building",
    ],
    outcome: "Aligned opportunities",
  },
  {
    num: "03",
    title: "Saying it clearly",
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
    <section id="program" className="bg-white py-24 lg:py-32 border-t border-black/8"
      aria-labelledby="program-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.18em] text-black mb-3">
            First Cohort Program
          </p>
          <p className="font-display text-xs uppercase tracking-[0.12em] text-black/50 mb-10">
            In partnership with GRANTED
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-12 items-start">
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <h2 id="program-heading"
                className="font-display font-black leading-[0.96] tracking-[-0.04em]
                           text-[clamp(2rem,4.5vw,3.75rem)] text-obsidian max-w-3xl">
                Three weeks to actually work through <span className="text-cobalt">what you're building.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.2}>
              <p className="font-display text-base sm:text-lg leading-[1.7] text-obsidian/80">
                Small cohort of 10. Every week pairs a strategy session led by Tobi and Oyeta with a hands-on lab session powered by GRANTED's tools.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.3}>
          <div className="mb-14 flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-5 bg-cobalt/8 border border-cobalt/20 rounded-sm">
            <div className="flex items-start gap-3 min-w-0">
              <Calendar className="w-5 h-5 text-cobalt shrink-0 mt-0.5" />
              <p className="font-display text-sm sm:text-base leading-[1.6] text-obsidian min-w-0">
                <span className="font-bold">Free info session · May 4, 2026 at 1:30 PM EST.</span> Open to all. 10 spots in the cohort. Youth founders prioritised.
              </p>
            </div>
            <a href="https://luma.com/07y4sx2o" target="_blank" rel="noopener noreferrer"
              className="sm:ml-auto inline-flex items-center gap-1.5 font-display font-bold text-sm text-cobalt hover:underline w-fit">
              Register free <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/8">
          {weeks.map((w, i) => (
            <Reveal key={w.num} delay={0.1 + i * 0.1}>
              <div className="bg-white p-6 sm:p-8 lg:p-10 group hover:bg-cobalt transition-colors duration-300 h-full flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <span className="font-display text-xs uppercase tracking-widest text-black/30 group-hover:text-white/40 transition-colors">
                    Week {w.num}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-black/30 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-xl leading-[1.2] tracking-[-0.02em] text-obsidian group-hover:text-white transition-colors mb-5">
                  {w.title}
                </h3>
                <ul className="space-y-3 flex-1">
                  {w.items.map(it => (
                    <li key={it} className="flex items-start gap-3">
                      <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-cobalt group-hover:bg-white transition-colors" />
                      <span className="font-display text-sm leading-[1.6] text-obsidian/85 group-hover:text-white/90 transition-colors">{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-5 border-t border-black/8 group-hover:border-white/20 transition-colors">
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

        <Reveal delay={0.35}>
          <div className="mt-px bg-cool p-6 sm:p-8 lg:p-10 border-l-4 border-cobalt">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
              <div>
                <p className="font-display text-xs uppercase tracking-widest text-cobalt mb-3">Outcome</p>
                <ul className="space-y-3">
                  {participantLeaves.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />
                      <span className="font-display text-sm sm:text-base leading-[1.6] text-obsidian/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-start gap-4">
            <a href="https://tally.so/r/ZjVWGe" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-cobalt text-white font-display font-bold text-base hover:bg-cobalt/90 transition-colors min-h-[48px] shadow-lg shadow-cobalt/20 w-full sm:w-auto">
              Apply to the next cohort <ArrowRight className="w-5 h-5" />
            </a>
            <a href="https://luma.com/07y4sx2o" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full border border-black/15 text-obsidian font-display font-medium text-base hover:bg-cool transition-colors min-h-[48px] w-full sm:w-auto">
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
