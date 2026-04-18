import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function RevealBlock({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

const painPoints = [
  "Apply for grants without understanding evaluation criteria",
  "Build ideas not structured as fundable projects",
  "Struggle to align their vision with institutional expectations",
  "Lack clarity in positioning, budgeting, and execution",
];

export default function VLCProblem() {
  return (
    <section id="problem" className="bg-white py-32 lg:py-40 border-t border-black/8"
      aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section label */}
        <RevealBlock>
          <p className="font-display text-xs uppercase tracking-[0.18em] text-black mb-12">
            The Problem
          </p>
        </RevealBlock>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left — bold statement */}
          <div className="lg:col-span-5">
            <RevealBlock delay={0.1}>
              <h2 id="problem-heading"
                className="font-display font-black leading-[0.95] tracking-[-0.04em]
                           text-[clamp(2.5rem,5vw,4rem)] text-obsidian">
                Why most ideas<br />
                never get<br />
                <span className="text-cobalt">funded.</span>
              </h2>
            </RevealBlock>

            <RevealBlock delay={0.2}>
              <p className="mt-8 font-display text-lg leading-[1.6] text-obsidian/80 max-w-sm">
                Most ideas never get funded. Not because they lack potential, but because
                                 they are not structured to be supported.
              </p>
            </RevealBlock>

            <RevealBlock delay={0.25}>
              <div className="mt-10 p-6 bg-cobalt text-white rounded-sm">
                <p className="font-display font-bold text-xl leading-[1.4]">
                  "Most entrepreneurs are told to apply for funding. Very few are taught
                  how to become funding-ready."
                </p>
              </div>
            </RevealBlock>
          </div>

          {/* Right — pain points + reframe */}
          <div className="lg:col-span-7">
            <RevealBlock delay={0.15}>
              <p className="font-display text-lg leading-[1.6] text-obsidian/80 mb-8">
                If you've ever struggled to access grants, position your project, or understand
                what funders are really looking for. This is designed for you.
              </p>
            </RevealBlock>

            <RevealBlock delay={0.2}>
              <p className="font-display font-semibold text-base text-obsidian mb-4">
                As a result, entrepreneurs often:
              </p>
            </RevealBlock>

            <ul className="space-y-0">
              {painPoints.map((pt, i) => (
                <RevealBlock key={pt} delay={0.25 + i * 0.07}>
                  <li className="flex items-start gap-4 py-5 border-b border-black/8 last:border-0">
                    <span className="font-display text-xs text-cobalt shrink-0 mt-1 tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-base leading-[1.6] text-obsidian">{pt}</span>
                  </li>
                </RevealBlock>
              ))}
            </ul>

            <RevealBlock delay={0.55}>
              <p className="mt-10 font-display font-bold text-base text-obsidian/70 italic">
                This creates a gap between <span className="text-obsidian not-italic">potential</span> and{" "}
                <span className="text-cobalt not-italic">opportunity.</span>
              </p>
            </RevealBlock>
          </div>
        </div>
      </div>

      {/* Why some ventures get funded */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-24 lg:mt-32">
        <RevealBlock delay={0.1}>
          <div className="border-t border-black/8 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <h3 className="font-display font-black leading-[0.95] tracking-[-0.03em]
                             text-[clamp(1.75rem,3.5vw,2.75rem)] text-obsidian">
                Why some ventures get funded,
                <span className="text-cobalt"> and others don't.</span>
              </h3>
            </div>
            <div className="lg:col-span-7">
              <p className="font-display text-lg leading-[1.6] text-obsidian/80 mb-8">
                Most founders think funding is about applying.
              </p>
              <p className="font-display text-base leading-[1.6] text-obsidian/70 mb-8">
                In reality, funding decisions are driven by:
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Clarity of positioning",
                  "Strength of the venture structure",
                  "Credibility of execution",
                  "How well the opportunity is communicated",
                ].map((item, i) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-cobalt" />
                    <span className="font-display text-base leading-[1.6] text-obsidian">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-display font-bold text-base text-obsidian/70 italic">
                This creates a gap between <span className="text-obsidian not-italic">potential</span> and{" "}
                <span className="text-cobalt not-italic">opportunity.</span>
              </p>
              <p className="mt-6 font-display text-base font-bold leading-[1.6] text-cobalt">
                That's where most ideas fail.
              </p>
              <p className="mt-4 font-display text-base leading-[1.6] text-obsidian/70">
                This is where we focus: with a strong emphasis on venture positioning and credibility, helping founders turn ideas into ventures that are clear, credible, and fundable.
              </p>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}