import { motion } from "framer-motion";
import { Reveal } from "./motion";

const logos = ["SendJim", "Jobber", "ResponsiBid", "Permaslug", "Side Hustle Show", "Master Pro"];

export default function AsSeenOn() {
  return (
    <section className="bg-white py-14 border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B1226]/40">
            Trusted by operators & teams at
          </p>
        </Reveal>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {logos.map((l, i) => (
            <motion.span
              key={l}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="font-display font-bold text-[#0B1226]/30 text-lg hover:text-[#0B1226]/70 transition-colors cursor-default"
            >
              {l}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}