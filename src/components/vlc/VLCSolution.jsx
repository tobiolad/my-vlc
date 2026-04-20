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
  { title: "Venture Development", desc: "Taking what you have and building it into something structured and explainable" },
  { title: "Decision Intelligence", desc: "Getting clear on what to do next, and what to stop doing" },
  { title: "Entrepreneurship Education", desc: "The foundations that serious ventures actually run on" },
  { title: "Real-World Execution", desc: "Moving from figuring it out to actually doing it" },
  { title: "Funding Literacy", desc: "Understanding how funding works, when that becomes relevant" },
];

export default function VLCSolution() {
  return (
    <section className="bg-cool py-32 lg:py-40 border-t border-black/8"
      aria-labelledby="solution-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.18em] text-black mb-12">
            What VLC actually does
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <p className="mt-8 font-display text-lg leading-[1.6] text-obsidian/80">
                We bring together real experience in data, venture building, and decision-making, and we help founders use it.
              </p>
            </Reveal>

            <ul className="mt-6 space-y-0">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={0.35 + i * 0.06}>
                  <li className="group py-4 border-b border-black/8 last:border-0 hover:bg-white/70 transition-colors -mx-2 px-2 cursor-default">
                    <p className="font-display font-semibold text-sm text-obsidian group-hover:text-cobalt transition-colors">
                      {p.title}
                    </p>
                    <p className="font-display text-sm text-obsidian/75 mt-0.5 leading-[1.5]">{p.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
