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
  "They know what they do but can't explain why it matters in a way that lands",
  "They make decisions constantly but have no real way to evaluate if they're the right ones",
  "The business exists but it's not structured in a way other people can easily understand or back",
  "They know something needs to change — they just can't see where the problem actually starts",
];

export default function VLCProblem() {
  return (
    <section id="problem" className="bg-white py-32 lg:py-40 border-t border-black/8"
      aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <RevealBlock>
          <p className="font-display text-xs uppercase tracking-[0.18em] text-black mb-12">
            The Problem
          </p>
        </RevealBlock>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <RevealBlock delay={0.1}>
              <h2 id="problem-heading"
                className="font-display font-black leading-[0.95] tracking-[-0.04em]
                           text-[clamp(2.5rem,5vw,4rem)] text-obsidian">
                You can be genuinely building something and still not be able to{" "}
                <span className="text-cobalt">explain it clearly.</span>
              </h2>
            </RevealBlock>

            <RevealBlock delay={0.2}>
              <p className="mt-8 font-display text-lg leading-[1.6] text-obsidian/80 max-w-sm">
                It happens a lot. Someone is working hard, has real ideas, maybe even customers — but when it comes to describing the business clearly, or figuring out the next real move, things get foggy. Not because they're not capable. Because nobody helped them structure it.
              </p>
            </RevealBlock>

            <RevealBlock delay={0.25}>
              <div className="mt-10 p-6 bg-cobalt text-white rounded-sm">
                <p className="font-display font-bold text-xl leading-[1.4]">
                  "The problem isn't that people don't work hard enough. It's that they're working without clarity."
                </p>
              </div>
            </RevealBlock>
          </div>

          <div className="lg:col-span-7">
            <RevealBlock delay={0.15}>
              <p className="font-display text-lg leading-[1.6] text-obsidian/80 mb-8">
                It doesn't matter if you just started or have been running something for years. At some point, most entrepreneurs hit the same wall.
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
                That's the gap. That's what VLC works on.
              </p>
            </RevealBlock>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mt-24 lg:mt-32">
        <RevealBlock delay={0.1}>
          <div className="border-t border-black/8 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <h3 className="font-display font-black leading-[0.95] tracking-[-0.03em]
                             text-[clamp(1.75rem,3.5vw,2.75rem)] text-obsidian">
                Why some ventures keep growing,
                <span className="text-cobalt"> and others stay stuck at the same point.</span>
              </h3>
            </div>
            <div className="lg:col-span-7">
              <p className="font-display text-lg leading-[1.6] text-obsidian/80 mb-8">
                It's rarely about effort. The ones that keep moving usually share a few things in common.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "They can describe what they're building and why it matters — quickly and specifically",
                  "They make decisions with some kind of framework, not just instinct and hope",
                  "They're positioned clearly enough that the right people pay attention",
                  "They know what the next move is — and they've thought through why",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-cobalt" />
                    <span className="font-display text-base leading-[1.6] text-obsidian">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-display text-base leading-[1.6] text-obsidian/70">
                This is where we focus — helping founders build that kind of clarity into how they think about and operate their venture.
              </p>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
