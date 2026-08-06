import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const cols = [
  { title: "Company", links: [{ label: "Services", to: "/services" }, { label: "Work", to: "/work" }, { label: "SIS", to: "/systems/sis" }, { label: "Pricing", to: "/pricing" }, { label: "Blog", to: "/blog" }, { label: "Contact", to: "/contact" }] },
  { title: "What we build", links: [{ label: "Website redesigns", to: "/services" }, { label: "Custom website builds", to: "/services" }, { label: "SEO foundation", to: "/services" }, { label: "Portals & dashboards", to: "/services" }, { label: "Automation & integrations", to: "/services" }, { label: "SIS systems layer", to: "/systems/sis" }] },
  { title: "Industries", links: [{ label: "Contractors & trades", to: "/services" }, { label: "Local service businesses", to: "/services" }, { label: "Growing small businesses", to: "/services" }, { label: "Operations-forward teams", to: "/services" }] },
];

export default function Footer() {
  return <footer className="relative bg-[#0B1226] text-white pt-16 pb-10 overflow-hidden">
    <div className="pointer-events-none absolute -top-40 left-1/4 w-[40rem] h-[40rem] rounded-full bg-[#6D5DF6]/15 blur-3xl" />
    <div className="relative mx-auto max-w-7xl px-6">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 lg:p-8 mb-14 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div><h3 className="font-display font-extrabold text-white text-2xl">Let's build your next system</h3><p className="text-white/55 mt-2 max-w-xl">Tell us what you're trying to grow. We'll scope it, price it and get you moving — usually within a few days.</p></div>
        <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#6D5DF6] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#5A49E0] transition-colors self-start">Start a project <ArrowUpRight size={16} /></a>
      </div>
      <div className="grid lg:grid-cols-6 gap-10">
        <div className="lg:col-span-2"><a href="/" className="mb-4 w-fit" aria-label="Sentinels Design Lab — home"><Logo size="lg" /></a><p className="text-white/55 text-sm leading-relaxed max-w-xs">A design lab for business systems, websites and digital operations — engineered to help companies generate leads and operate more efficiently.</p><div className="mt-6 space-y-3 text-sm text-white/65"><a href="mailto:Info@SentinelsDesignLab.com" className="flex items-center gap-2 hover:text-[#2DD4BF]"><Mail size={15} /> Info@SentinelsDesignLab.com</a><a href="tel:+18324320224" className="flex items-center gap-2 hover:text-[#2DD4BF]"><Phone size={15} /> +1 (832) 432-0224</a><div className="flex items-center gap-2"><MapPin size={15} /> Magnolia, TX · Remote-first</div></div></div>
        {cols.map((col) => <div key={col.title}><h4 className="font-display font-bold text-white mb-4 text-sm">{col.title}</h4><ul className="space-y-2.5">{col.links.map((l) => <li key={l.label}><a href={l.to} className="text-sm text-white/55 hover:text-[#2DD4BF]">{l.label}</a></li>)}</ul></div>)}
      </div>
      <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"><p className="text-xs text-white/40">© {new Date().getFullYear()} Sentinels Design Lab. All rights reserved.</p><a href="https://www.sentinelsdesignlab.com" target="_blank" rel="noopener noreferrer" aria-label="Sentinels Design Lab" className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white/70 hover:bg-[#6D5DF6]"><Linkedin size={16} /></a></div>
    </div>
  </footer>;
}