import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight, CheckCircle } from "lucide-react";

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
    title: "Venture Structuring & Positioning",
    items: [
      "Define a fundable, high-potential venture",
      "Clarify your positioning and value",
      "Build a realistic and credible project scope",
      "Identify what makes your idea worth funding",
    ],
    outcome: "A fully structured, fundable project blueprint",
  },
  {
    num: "02",
    title: "Aligning with real funding opportunities",
    items: [
      "Learn how to think like a funder",
      "Identify grants aligned with your project",
      "Understand eligibility, criteria, and positioning",
    ],
    outcome: "A shortlist of relevant, high-fit funding opportunities",
  },
  {
    num: "03",
    title: "Narrative, Credibility & Funder Perception",
    items: [
      "Craft a compelling, fundable narrative",
      "Position your venture for credibility and trust",
      "Avoid common mistakes that weaken applications",
      "Prepare your project for real-world evaluation",
    ],
    outcome: "A draft-ready application and pitch-ready project",
  },
];

const participantLeaves = [
  "A fully structured, funding-ready project",
  "Aligned grant opportunities matched to their project",
  "A strong understanding of how funders evaluate proposals",
  "A refined narrative ready for submission or pitching",
  "Practical tools to move from idea to execution",
];

export default function VLCProgram() {
  return (
    <section id="program" className="bg-white py-32 lg:py-40 border-t border-black/8"
      aria-labelledby="program-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.18em] text-black mb-3">
            Pilot Program
          </p>
          <p className="font-display text-xs uppercase tracking-[0.12em] text-black/50 mb-12">
            Youth Funding Readiness Lab · In partnership with GRANTED
          </p>
        </Reveal>

        {/* Header row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <h2 id="program-heading"
                className="font-display font-black leading-[0.95] tracking-[-0.04em]
                           text-[clamp(2.25rem,4.5vw,3.75rem)] text-obsidian">
                A 3-week structured pathway to becoming{" "}
                <span className="text-cobalt">funding-ready.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:pt-2">
            <Reveal delay={0.2}>
              <p className="font-display text-lg leading-[1.6] text-obsidian/80">
                The Funding Readiness Lab is a focused, high-impact 3-week accelerator
                combining strategic guidance and hands-on implementation. Each week follows
                a Strategy + Implementation model.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 font-display text-base leading-[1.6] text-obsidian/70">
                Our first cohort is intentionally small and high-touch. We work closely with
                a select group of founders to develop high-quality, fundable projects.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Week cards — bento */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/8">
          {weeks.map((w, i) => (
            <Reveal key={w.num} delay={0.1 + i * 0.1}>
              <div className="bg-white p-8 lg:p-10 group hover:bg-cobalt transition-colors duration-300 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <span className="font-display text-xs uppercase tracking-widest text-black/30
                                   group-hover:text-white/40 transition-colors">
                    Week {w.num}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-black/30 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display font-bold text-xl leading-[1.2] tracking-[-0.02em]
                                text-obsidian group-hover:text-white transition-colors mb-6">
                  {w.title}
                </h3>
                <ul className="space-y-3 flex-1">
                  {w.items.map(it => (
                    <li key={it} className="flex items-start gap-3">
                      <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-cobalt
                                        group-hover:bg-white transition-colors" />
                      <span className="font-display text-sm leading-[1.5] text-obsidian/85
                                        group-hover:text-white/90 transition-colors">{it}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-6 border-t border-black/8 group-hover:border-white/20 transition-colors">
                  <p className="font-display text-xs uppercase tracking-widest text-black/35
                                 group-hover:text-white/50 transition-colors mb-1">
                    Outcome
                  </p>
                  <p className="font-display text-sm font-semibold text-obsidian
                                 group-hover:text-white transition-colors">
                    {w.outcome}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Finale */}
        <Reveal delay={0.3}>
          <div className="mt-px bg-cool p-8 lg:p-10 border-l-4 border-cobalt">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="font-display text-xs uppercase tracking-widest text-cobalt mb-3">Finale</p>
                <h3 className="font-display font-bold text-2xl tracking-[-0.02em] text-obsidian mb-3">
                  Funding Readiness Showcase
                </h3>
                <p className="font-display text-base leading-[1.6] text-obsidian/80">
                  Participants present their fully developed, fundable projects. All who complete
                  receive a completion honorarium. The most viable project is awarded a{" "}
                  <strong className="text-obsidian">micro-grant</strong> to support early execution.
                </p>
              </div>
              <div>
                <p className="font-display font-semibold text-sm text-obsidian mb-4">
                  Participants leave with:
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

        {/* CTA row */}
        <Reveal delay={0.4}>
          <div className="mt-16 flex flex-col sm:flex-row items-start gap-4">
            <a href="https://tally.so/r/ZjVWGe" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-cobalt text-white
                         font-display font-bold text-base hover:bg-cobalt/90 transition-colors min-h-[48px]
                         shadow-lg shadow-cobalt/20">
              Apply to the next cohort <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#apply"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full border border-black/15
                         text-obsidian font-display font-medium text-base hover:bg-cool transition-colors
                         min-h-[48px]">
              Join the waitlist <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="mt-4 font-display text-xs text-black/35 tracking-wider">
            Small cohort. Practical, hands-on support. No prior funding experience required.
          </p>
        </Reveal>
      </div>
    </section>
  );
}