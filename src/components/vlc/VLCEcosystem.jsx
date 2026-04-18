import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
    initial={{ opacity: 0, y: 28 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>);

}

const orgs = [
{
  name: "Okoko Cosmetiques",
  role: "Venture Strategy & Market Positioning",
  desc: "Turning ideas into ventures that are credible, desirable, and built for real-world success — the layer that determines whether a venture is taken seriously by both the market and funders. Founded by Oyeta Kokoroko, founder of an award-winning skincare brand with 9+ years of real-world venture building.",
  layer: "Venture Creation Layer",
  points: ["Product development & customer experience", "Brand-led growth strategies", "Real-world founder experience"],
  accent: "bg-black/80",
  url: "https://okokocosmetiques.com"
},
{
  name: "Data Fellows",
  role: "Funding Systems & Decision Intelligence",
  desc: "A global ecosystem helping individuals and businesses use data to make better decisions and translate insight into action.",
  layer: "Intelligence Layer",
  points: ["Data literacy and analytical thinking", "Ecosystem reach and community infrastructure", "Structured approaches to decision-making"],
  accent: "bg-cobalt",
  url: "https://www.datafellowsai.com"
},
{
  name: "Inscend",
  role: "Tools & Infrastructure",
  desc: "A decision intelligence platform that helps businesses turn daily complexity into clear, actionable steps — showing what to do next, how much impact it will create, and where opportunities are hidden.",
  layer: "Execution Layer",
  points: ["What to do next", "How much impact it will create", "Where opportunities are hidden"],
  accent: "bg-obsidian",
  url: "https://www.inscend.io"
}];


export default function VLCEcosystem() {
  return (
    <section id="partners" className="bg-cool py-32 lg:py-40 border-t border-black/8"
    aria-labelledby="ecosystem-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.18em] text-black mb-12">
            Built on Complementary Capabilities
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <h2 id="ecosystem-heading"
              className="font-display font-black leading-[0.95] tracking-[-0.04em]
                           text-[clamp(2.25rem,4.5vw,3.75rem)] text-obsidian">
                
                Three organizations.<br />
                One integrated<br />
                <span className="text-cobalt">ecosystem.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:pt-1">
            <Reveal delay={0.2}>
              <p className="font-display text-lg leading-[1.6] text-obsidian/80">
                The Venture Learning Collective sits at the center of a collaborative ecosystem.
                Each partner contributes a critical layer: intelligence, execution, and venture
                creation, connecting education, funding access, and venture creation into one
                integrated pathway.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Org cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {orgs.map((org, i) =>
          <Reveal key={org.name} delay={0.1 + i * 0.1}>
              <div className="bg-white border border-black/8 p-8 group
                              hover:border-cobalt transition-colors duration-300 h-full flex flex-col">
              
                <div className={`w-2 h-2 rounded-full ${org.accent} mb-8`} />
                <p className="font-display text-xs uppercase tracking-widest text-black/35 mb-2">
                  {org.layer}
                </p>
                <a href={org.url} target="_blank" rel="noopener noreferrer"
              className="group-hover:underline underline-offset-2">
                  <h3 className="font-display font-black text-2xl tracking-[-0.03em] text-obsidian mb-2 hover:text-cobalt transition-colors">
                    {org.name} <ArrowUpRight className="inline w-4 h-4" />
                  </h3>
                </a>
                <p className="font-display text-sm font-semibold text-obsidian/60 mb-4">{org.role}</p>
                <p className="font-display text-sm leading-[1.6] text-obsidian/80 mb-6 flex-1">
                  {org.desc}
                </p>
                <ul className="space-y-2 pt-6 border-t border-black/8">
                  {org.points.map((pt) =>
                <li key={pt} className="flex items-start gap-3">
                      <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-cobalt" />
                      <span className="font-display text-xs leading-[1.5] text-obsidian/80">{pt}</span>
                    </li>
                )}
                </ul>
              </div>
            </Reveal>
          )}
        </div>

        {/* Pathway */}
        <Reveal delay={0.4}>
          <div className="mt-16 p-8 lg:p-12 bg-white border border-black/8 text-center">
            <p className="font-display text-xs uppercase tracking-widest text-black/35 mb-6">
              The Continuous Pathway
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              {["Learning", "Structuring", "Funding", "Execution"].map((step, i, arr) =>
              <div key={step} className="flex items-center gap-2 md:gap-4">
                      <span className="font-display font-black text-xl md:text-3xl tracking-[-0.03em] text-obsidian">
                        {step}
                      </span>
                      {i < arr.length - 1 &&
                <ArrowRight className="w-5 h-5 text-cobalt shrink-0" />
                }
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}