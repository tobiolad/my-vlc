import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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

const pillars = [
  { title: "Venture Development",       desc: "Taking what you have and building it into something structured and explainable." },
  { title: "Decision Intelligence",     desc: "Getting clear on what to do next, and what to stop doing." },
  { title: "Entrepreneurship Education",desc: "The foundations that serious ventures actually run on." },
  { title: "Real-World Execution",      desc: "Moving from figuring it out to actually doing it." },
  { title: "Funding Literacy",          desc: "Understanding how funding works, when that becomes relevant." },
];

const helps = [
  "Figure out what the business actually is and who it's really for",
  "Build a structure that holds up when someone asks hard questions",
  "Make decisions more deliberately, with less second-guessing",
  "Position it so the right people understand it immediately",
  "When the time comes, approach funding from a place of clarity",
];

export default function VLCSolution() {
  return (
    <section className="bg-cool py-24 lg:py-32 border-t border-black/8"
      aria-labelledby="solution-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.18em] text-black mb-10">
            What VLC Actually Does
          </p>
        </Reveal>

        <div className="max-w-4xl">
          <Reveal delay={0.1}>
            <h2 id="solution-heading"
              className="font-display font-black leading-[0.98] tracking-[-0.04em]
                         text-[clamp(2rem,4.5vw,3.75rem)] text-obsidian">
              We bring together real experience in data, venture building, and decision-making, and we help founders use it.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-start">
          <div>
            <ul className="space-y-0 bg-white border border-black/8">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={0.15 + i * 0.06}>
                  <li className="group py-5 px-5 sm:px-6 border-b border-black/8 last:border-0 hover:bg-white/70 transition-colors cursor-default">
                    <p className="font-display font-semibold text-sm sm:text-base text-obsidian group-hover:text-cobalt transition-colors">
                      {p.title}
                    </p>
                    <p className="font-display text-sm sm:text-base text-obsidian/75 mt-1.5 leading-[1.6]">{p.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.2}>
            <div className="bg-obsidian text-white p-8 sm:p-10 lg:p-12 rounded-sm h-full">
              <h3 className="font-display font-black text-[clamp(1.6rem,3vw,2.35rem)] leading-[1.08] tracking-[-0.03em] mb-8">
                Strong ideas stall when the thinking behind them hasn't been worked out.
              </h3>
              <ul className="space-y-4">
                {helps.map((h, i) => (
                  <li key={h} className="flex items-start gap-4">
                    <span className="font-display text-xs text-cobalt shrink-0 mt-1 tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-sm sm:text-base leading-[1.6] text-white/90">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
