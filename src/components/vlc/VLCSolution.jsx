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
  { title: "Decision Intelligence",     desc: "Getting clear on what to do next — and what to stop doing." },
  { title: "Entrepreneurship Education",desc: "The foundations that serious ventures actually run on." },
  { title: "Real-World Execution",      desc: "Moving from figuring it out to actually doing it." },
  { title: "Funding Literacy",          desc: "Understanding how funding works, when that becomes relevant." },
];

const helps = [
  "Figure out what the business actually is and who it's really for",
  "Build a structure that holds up when someone asks hard questions",
  "Make decisions more deliberately, with less second-guessing",
  "Position it so the right people understand it immediately",
  "When the time comes — and only then — approach funding from a place of clarity",
];

export default function VLCSolution() {
  return (
    <section className="bg-cool py-32 lg:py-40 border-t border-black/8"
      aria-labelledby="solution-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.18em] text-black mb-12">
            What VLC Actually Does
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <h2 id="solution-heading"
                className="font-display font-black leading-[0.95] tracking-[-0.04em]
                           text-[clamp(2.25rem,4.5vw,3.75rem)] text-obsidian">
                It's not a course. It's not a consulting service.{" "}
                <span className="text-cobalt">It's infrastructure for building something real.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 font-display text-lg leading-[1.6] text-obsidian/80">
                Most entrepreneurs don't need more information. They need someone to help them work through what they actually have — and what it needs to become. That's what this is. We bring together real experience in data, venture building, and decision-making, and we help founders use it.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-6 font-display text-base leading-[1.6] text-obsidian/80">
                Five layers, working together:
              </p>
            </Reveal>

            <ul className="mt-6 space-y-0">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={0.35 + i * 0.06}>
                  <li className="group py-4 border-b border-black/8 last:border-0
                                  hover:bg-white/70 transition-colors -mx-2 px-2 cursor-default">
                    <p className="font-display font-semibold text-sm text-obsidian group-hover:text-cobalt transition-colors">
                      {p.title}
                    </p>
                    <p className="font-display text-sm text-obsidian/75 mt-0.5 leading-[1.5]">{p.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal delay={0.15}>
              <div className="bg-obsidian text-white p-10 lg:p-14 rounded-sm">
                <h3 className="font-display font-black text-[clamp(1.75rem,3vw,2.5rem)]
                                leading-[1.05] tracking-[-0.03em] mb-8">
                  Strong ideas stall when the thinking behind them hasn't been worked out.
                </h3>
                <p className="font-display text-base leading-[1.6] text-white/80 mb-10">
                  We help entrepreneurs:
                </p>
                <ul className="space-y-4">
                  {helps.map((h, i) => (
                    <li key={h} className="flex items-start gap-4">
                      <span className="font-display text-xs text-cobalt shrink-0 mt-1 tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-base leading-[1.6] text-white/90">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
