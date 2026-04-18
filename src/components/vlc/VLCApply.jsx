import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { base44 } from "@/api/base44Client";

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

const audiences = [
  {
    label: "For Founders",
    cta:   "Apply to the next Funding Readiness Lab",
    sub:   "Limited cohort. Early applications prioritised.",
    type:  "primary",
  },
  {
    label: "For Partners & Organisations",
    cta:   "Collaborate with us to design ecosystem-level programs",
    sub:   "Design initiatives that prepare entrepreneurs for real funding.",
    type:  "secondary",
  },
  {
    label: "For Funders & Institutions",
    cta:   "Support initiatives that prepare entrepreneurs for real funding opportunities",
    sub:   "Partner with infrastructure connecting education and opportunity.",
    type:  "secondary",
  },
];

export default function VLCApply() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", type: "founder", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await base44.entities.ApplicationSubmission.create(form);
    await base44.integrations.Core.SendEmail({
      to: "tobi@datafellowsai.com",
      subject: `New VLC Application — ${form.name}`,
      body: `New application submitted:\n\nName: ${form.name}\nEmail: ${form.email}\nType: ${form.type}\nMessage: ${form.message || "—"}`,
    });
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section id="apply" className="bg-obsidian py-32 lg:py-40"
      aria-labelledby="apply-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <Reveal>
          <p className="font-display text-xs uppercase tracking-[0.18em] text-white/60 mb-12">
            Get Involved
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left copy */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <h2 id="apply-heading"
                className="font-display font-black leading-[0.95] tracking-[-0.04em]
                           text-[clamp(2.25rem,4.5vw,3.75rem)] text-white">
                Build, partner, or support the next generation of{" "}
                <span className="text-cobalt">fundable ventures.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 font-display text-lg leading-[1.6] text-white/80">
                Whether you are building a venture, supporting founders, or exploring
                partnerships, the Venture Learning Collective offers a way to engage.
              </p>
            </Reveal>

            {/* Audience tracks */}
            <div className="mt-12 space-y-px">
              {audiences.map((a, i) => (
                <Reveal key={a.label} delay={0.25 + i * 0.08}>
                  <div className={`p-6 transition-colors group cursor-default
                    ${a.type === "primary"
                      ? "bg-cobalt hover:bg-cobalt/90"
                      : "bg-white/5 hover:bg-white/10 border-t border-white/8"
                    }`}>
                    <p className="font-display text-xs uppercase tracking-widest text-white/50 mb-2">
                      {a.label}
                    </p>
                    <p className={`font-display font-semibold text-base leading-[1.4]
                      ${a.type === "primary" ? "text-white" : "text-white/70"}`}>
                      {a.cta}
                    </p>
                    <p className={`font-display text-sm mt-1
                      ${a.type === "primary" ? "text-white/70" : "text-white/35"}`}>
                      {a.sub}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              {submitted ? (
                <div className="flex flex-col items-start justify-center h-full min-h-[400px]">
                  <CheckCircle className="w-12 h-12 text-cobalt mb-6" />
                  <h3 className="font-display font-black text-3xl tracking-[-0.03em] text-white mb-4">
                    Application received.
                  </h3>
                  <p className="font-display text-lg leading-[1.6] text-white/50">
                    We'll be in touch shortly. Thank you for your interest in the Venture
                    Learning Collective.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-0"
                  aria-label="Application form">
                  <p className="font-display text-lg leading-[1.6] text-white/50 mb-10">
                    Tell us about yourself. We'll reach out with next steps.
                  </p>

                  {/* Mad-libs style fields */}
                  <div className="space-y-10">
                    <div>
                      <label htmlFor="name"
                        className="font-display text-2xl font-medium text-white/40 block mb-1">
                        My name is
                      </label>
                      <input id="name" required value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Your full name"
                        className="w-full bg-transparent border-0 border-b-2 border-white/20
                                   text-white font-display text-2xl font-semibold
                                   placeholder:text-white/20 pb-3 focus:outline-none
                                   focus:border-cobalt transition-colors min-h-[48px]" />
                    </div>

                    <div>
                      <label htmlFor="type"
                        className="font-display text-2xl font-medium text-white/40 block mb-1">
                        and I am a
                      </label>
                      <select id="type" required value={form.type}
                        onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                        className="w-full bg-transparent border-0 border-b-2 border-white/20
                                   text-white font-display text-2xl font-semibold pb-3
                                   focus:outline-none focus:border-cobalt transition-colors
                                   min-h-[48px] appearance-none cursor-pointer">
                        <option value="founder" className="bg-obsidian">Founder</option>
                        <option value="partner" className="bg-obsidian">Partner / Organisation</option>
                        <option value="funder" className="bg-obsidian">Funder / Institution</option>
                        <option value="other"   className="bg-obsidian">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="email"
                        className="font-display text-2xl font-medium text-white/40 block mb-1">
                        reach me at
                      </label>
                      <input id="email" type="email" required value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        placeholder="your@email.com"
                        className="w-full bg-transparent border-0 border-b-2 border-white/20
                                   text-white font-display text-2xl font-semibold
                                   placeholder:text-white/20 pb-3 focus:outline-none
                                   focus:border-cobalt transition-colors min-h-[48px]" />
                    </div>

                    <div>
                      <label htmlFor="message"
                        className="font-display text-2xl font-medium text-white/40 block mb-1">
                        I want to
                      </label>
                      <input id="message" value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        placeholder="build a fundable venture / partner with VLC / support the ecosystem"
                        className="w-full bg-transparent border-0 border-b-2 border-white/20
                                   text-white font-display text-xl font-semibold
                                   placeholder:text-white/20 pb-3 focus:outline-none
                                   focus:border-cobalt transition-colors min-h-[48px]" />
                    </div>
                  </div>

                  <div className="pt-12">
                    <button type="submit" disabled={loading}
                      className="inline-flex items-center gap-2 h-14 px-10 rounded-full bg-cobalt
                                 text-white font-display font-bold text-base
                                 hover:bg-cobalt/90 transition-colors min-h-[48px] disabled:opacity-60
                                 focus:outline-none focus:ring-[3px] focus:ring-cobalt focus:ring-offset-2
                                 focus:ring-offset-obsidian">
                      {loading ? "Sending..." : <> Submit <ArrowRight className="w-5 h-5" /> </>}
                    </button>
                  </div>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}