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
  "Know what they do but can't explain why it matters in a way that lands",
  "Make decisions constantly but have no real way to evaluate if they're the right ones",
  "Build products and brands without clear positioning, or collecting business data without knowing how to translate those insights into strategic decisions",
  "Struggle with structuring ideas into viable, fundable projects",
];

export default function VLCProblem() {
  return (
    <section id="problem" className="bg-white py-32 lg:py-40 border-t border-black/8"
      aria-labelledby="problem-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <RevealBlock>
          <p className="font-display text-xs uppercase tracking-[0.18em] text-black mb-12">
            THE PROBLEM
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
          </div>

          <div className="lg:col-span-7">
            <RevealBlock delay={0.15}>
              <p className="font-display text-lg leading-[1.6] text-obsidian/80 mb-8">
                It doesn't matter if you just started or have been running something for years. At some point, most entrepreneurs hit the same wall.
              </p>
            </RevealBlock>

            <RevealBlock delay={0.2}>
              <p className="font-display font-semibold text-base text-obsidian mb-4">
                Entrepreneurs often:
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
          </div>
        </div>
      </div>
    </section>
  );
}
