import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, ArrowRight } from "lucide-react";

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

const team = [
  {
    name: "Tobi Oladimeji",
    title: "Co-Founder & Executive Director",
    initials: "TO",
    photo: "https://media.base44.com/images/public/69c3529506deea33bf4cab54/48110b703_IMG_5805.jpg",
    expertise: "Ecosystem Design · Funding Systems · Decision Intelligence",
    bio: "A data professional, product founder, and ecosystem builder. He leads Data Fellows and co-founded Inscend, building systems that translate data into decisions and designing ecosystems that connect learning, tools, and real-world execution.",
    vlcRole: "Brings expertise in ecosystem design, funding systems, and the development of practical frameworks that support more informed and effective decision-making.",
    linkedin: "https://www.linkedin.com/in/tobioladimeji/",
  },
  {
    name: "Oyeta Kokoroko",
    title: "Co-Founder & Director of Venture Development, Funding Readiness & Brand Strategy",
    initials: "OK",
    photo: "https://media.base44.com/images/public/69c3529506deea33bf4cab54/fb6f9aed7_IMG_0384.png",
    expertise: "Venture Positioning · Market Credibility · Revenue & Growth Strategy",
    bio: "Founder of an award-winning skincare brand built over 9+ years, creating 45+ recognized formulations and gaining real-world experience in building and positioning consumer ventures. Works directly with founders to transform ideas into ventures that are not only fundable, but credible, desirable, and built for real-world success.",
    vlcRole: "Known for identifying what prevents ventures from converting, whether with customers or funders, and refining positioning, structure, and strategy to drive growth, credibility, and opportunity.",
    linkedin: "https://www.linkedin.com/in/oy%C3%A9ta-kokoroko-9b52b6160",
  },
];

export default function VLCTeam() {
  return (
    <section id="team" className="bg-white py-32 lg:py-40 border-t border-black/8"
      aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.18em] text-black mb-12">
            Built by Founders, Operators & Ecosystem Builders
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <h2 id="team-heading"
                className="font-display font-black leading-[0.95] tracking-[-0.04em]
                           text-[clamp(2.25rem,4.5vw,3.75rem)] text-obsidian">
                The team<br />
                behind the<br />
                <span className="text-cobalt">collective.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <Reveal delay={0.2}>
              <p className="font-display text-lg leading-[1.6] text-obsidian/80">
                Funding is not just access. It is a capability. We help founders understand
                how funding programs evaluate projects, what makes a project viable, and how
                to align with institutional priorities. Funding becomes a skill.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Team cards */}
        <div className="space-y-px bg-black/8">
          {team.map((member, i) => (
            <div key={member.name}>
              <Reveal delay={0.1 + i * 0.1}>
                <div className="bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-10
                                group hover:bg-cool transition-colors duration-200">
                  {/* Avatar + name */}
                  <div className="lg:col-span-3 flex items-start gap-5">
                    <div className="w-16 h-16 rounded-full shrink-0 overflow-hidden border-2 border-black/8">
                      <img src={member.photo} alt={member.name}
                        className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-xl tracking-[-0.02em] text-obsidian">
                        {member.name}
                      </h3>
                      <p className="font-display text-xs font-medium text-black/60 mt-1 leading-[1.4]">
                        {member.title}
                      </p>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-2 text-black/30 hover:text-cobalt transition-colors">
                        <Linkedin className="w-3.5 h-3.5" />
                        <span className="font-display text-[10px] uppercase tracking-widest">LinkedIn</span>
                      </a>
                    </div>
                  </div>

                  {/* Expertise tags */}
                  <div className="lg:col-span-2 flex flex-col justify-start">
                    <p className="font-display text-xs uppercase tracking-widest text-black/30 mb-2">Focus</p>
                    <p className="font-display text-xs leading-[1.7] text-obsidian/75">{member.expertise}</p>
                  </div>

                  {/* Bio */}
                  <div className="lg:col-span-4">
                    <p className="font-display text-base leading-[1.6] text-obsidian/80">{member.bio}</p>
                  </div>

                  {/* VLC Role */}
                  <div className="lg:col-span-3">
                    <p className="font-display text-xs uppercase tracking-widest text-black/30 mb-2">Within VLC</p>
                    <p className="font-display text-sm leading-[1.6] text-obsidian/80 italic">
                      {member.vlcRole}
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Tobi advisory block */}
              {member.name === "Tobi Oladimeji" && (
                <Reveal delay={0.25}>
                  <div className="bg-obsidian p-8 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-8">
                        <p className="font-display text-xs uppercase tracking-widest text-white/40 mb-3">
                          Work more closely with Tobi
                        </p>
                        <h3 className="font-display font-black text-2xl tracking-[-0.02em] text-white mb-3">
                          Strategy, systems, and data-driven decision-making for your venture.
                        </h3>
                        <p className="font-display text-base leading-[1.6] text-white/60">
                          For founders who want to build smarter ecosystems, make better decisions with data, or
                          structure their venture with clarity, book a one-on-one session with Tobi. Expect
                          practical frameworks, ecosystem thinking, and tools that translate insight into action.
                        </p>
                      </div>
                      <div className="lg:col-span-4 flex lg:justify-end">
                        <a href="https://calendar.app.google/mAEjbipQGoAxTW426" target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-white/20
                                     text-white font-display font-semibold text-sm hover:bg-white/10 transition-colors
                                     min-h-[48px]">
                          Book a session <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}

              {/* Oyeta advisory block */}
              {member.name === "Oyeta Kokoroko" && (
                <Reveal delay={0.25}>
                  <div className="bg-obsidian p-8 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-8">
                        <p className="font-display text-xs uppercase tracking-widest text-white/40 mb-3">
                          Work more closely with Oyeta
                        </p>
                        <h3 className="font-display font-black text-2xl tracking-[-0.02em] text-white mb-3">
                          Venture positioning, brand credibility, and founder advisory.
                        </h3>
                        <p className="font-display text-base leading-[1.6] text-white/60">
                          For founders who need deeper support refining their venture positioning, strengthening
                          their brand credibility, or building a growth strategy that funders and customers take
                          seriously. Direct advisory with Oyeta brings 9+ years of real-world venture building
                          directly into your process.
                        </p>
                      </div>
                      <div className="lg:col-span-4 flex lg:justify-end">
                        <a href="https://oyeta.systeme.io/founder-advisory" target="_blank" rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-white/20
                                     text-white font-display font-semibold text-sm hover:bg-white/10 transition-colors
                                     min-h-[48px]">
                          Explore founder advisory <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}