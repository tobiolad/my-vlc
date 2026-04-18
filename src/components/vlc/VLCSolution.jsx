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
  { title: "Entrepreneurship Education", desc: "Build the foundations that every fundable venture needs." },
  { title: "Funding Literacy",            desc: "Understand how funding systems evaluate and select projects." },
  { title: "Venture Development",         desc: "Structure your idea into a viable, submittable project." },
  { title: "Decision Intelligence",       desc: "Translate data and insight into strategic action." },
  { title: "Real-World Execution",        desc: "Move from concept to measurable, market-ready outcomes." },
];

const helps = [
  "Structure projects with clear outcomes",
  "Align ideas with funding opportunities",
  "Build realistic budgets and timelines",
  "Communicate their vision effectively",
  "Translate concepts into executable ventures",
];

export default function VLCSolution() {
  return (
    <section className="bg-cool py-32 lg:py-40 border-t border-black/8"
      aria-labelledby="solution-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.18em] text-black mb-12">
            A New Approach
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Heading */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <h2 id="solution-heading"
                className="font-display font-black leading-[0.95] tracking-[-0.04em]
                           text-[clamp(2.25rem,4.5vw,3.75rem)] text-obsidian">
                An ecosystem for building{" "}
                <span className="text-cobalt">fundable</span>{" "}
                ventures.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 font-display text-lg leading-[1.6] text-obsidian/80">
                The Venture Learning Collective is a nonprofit ecosystem platform designed
                to help entrepreneurs move beyond ideas and build ventures that are
                structured, fundable, and positioned for long-term growth. Founders are
                guided by operators with real-world experience building and positioning
                ventures that generate revenue and attract funding.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-6 font-display text-base leading-[1.6] text-obsidian/80">
                We connect five layers into one integrated system:
              </p>
            </Reveal>

            {/* Pillars */}
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

          {/* Right — what we help with */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal delay={0.15}>
              <div className="bg-obsidian text-white p-10 lg:p-14 rounded-sm">
                <p className="font-display text-xs uppercase tracking-widest text-white/35 mb-8">
                  From idea → to fundable venture
                </p>
                <h3 className="font-display font-black text-[clamp(1.75rem,3vw,2.5rem)]
                                leading-[1.05] tracking-[-0.03em] mb-8">
                  Strong ideas fail not because they lack potential. Founders
                                     are rarely taught how to structure them.
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