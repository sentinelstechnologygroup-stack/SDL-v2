import { Reveal } from "./motion";

export default function PageHero({ eyebrow, title, subtitle, dark = false }) {
  return (
    <section className={dark ? "bg-[#0B1226] text-white relative overflow-hidden" : "bg-white text-[#0B1226]"}>
      {dark && <><div className="pointer-events-none absolute -top-40 -left-40 w-[34rem] h-[34rem] rounded-full bg-[#6D5DF6]/15 blur-3xl" /><div className="pointer-events-none absolute -top-20 right-0 w-[28rem] h-[28rem] rounded-full bg-[#2DD4BF]/10 blur-3xl" /></>}
      <div className="relative mx-auto max-w-7xl px-6 pt-14 pb-12 lg:pt-20 lg:pb-16">
        <Reveal className="max-w-3xl">
          <span className={`text-xs font-bold uppercase tracking-[0.18em] ${dark ? "text-[#2DD4BF]" : "text-[#6D5DF6]"}`}>{eyebrow}</span>
          <h1 className="mt-4 font-display font-extrabold text-4xl lg:text-[3.2rem] tracking-tight leading-[1.08]">{title}</h1>
          {subtitle && <p className={`mt-5 text-lg leading-relaxed ${dark ? "text-white/60" : "text-[#0B1226]/60"}`}>{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}