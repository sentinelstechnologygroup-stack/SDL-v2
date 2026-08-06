import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { Reveal } from "./motion";

const features = [
  "Dedicated project & support manager",
  "Delivery in as little as 30 days",
  "Hosting, security & updates included",
  "Flexible low monthly payments",
  "You own everything you launch",
];

const cols = [
  { name: "Freelancer", sub: "Inconsistent quality and availability", vals: [false, false, false, false, false], featured: false },
  { name: "Traditional agency", sub: "Outdated output, long timelines", vals: [true, false, false, false, false], featured: false },
  { name: "Sentinels Design Lab", sub: "Premium quality, real partnership, fair price", vals: [true, true, true, true, true], featured: true },
];

export default function Comparison() {
  return (
    <section className="bg-[#F6F7FB] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#6D5DF6]">The difference</span>
          <h2 className="mt-4 font-display font-extrabold text-[#0B1226] text-3xl lg:text-4xl tracking-tight">Premium quality and a fair price — not one or the other</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {cols.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`rounded-2xl p-7 flex flex-col ${c.featured ? "bg-[#0B1226] text-white shadow-2xl md:-translate-y-3 border border-[#6D5DF6]/40" : "bg-white border border-slate-200/80"}`}>
              <h3 className={`font-display font-bold text-xl ${c.featured ? "text-white" : "text-[#0B1226]"}`}>{c.name}</h3>
              <p className={`text-sm mt-1 mb-6 ${c.featured ? "text-white/55" : "text-[#0B1226]/55"}`}>{c.sub}</p>
              <ul className="space-y-3.5 flex-1">
                {features.map((f, idx) => { const ok = c.vals[idx]; return (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    {ok ? <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${c.featured ? "bg-[#2DD4BF] text-[#0B1226]" : "bg-[#6D5DF6]/12 text-[#6D5DF6]"}`}><Check size={13} strokeWidth={3} /></span> : <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center"><Minus size={13} className="text-slate-400" /></span>}
                    <span className={ok ? (c.featured ? "text-white/85" : "text-[#0B1226]/80") : "text-[#0B1226]/40 line-through"}>{f}</span>
                  </li>
                );})}
              </ul>
              {c.featured && <a href="#contact" className="mt-7 rounded-full bg-[#6D5DF6] px-5 py-3 text-sm font-semibold text-white text-center hover:bg-[#5A49E0] transition-colors">Work with us</a>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}