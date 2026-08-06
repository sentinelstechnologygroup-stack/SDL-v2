import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, CalendarCheck } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Work", to: "/work" }, { label: "Services", to: "/services" }, { label: "SIS", to: "/systems/sis" },
  { label: "Pricing", to: "/pricing" }, { label: "Blog", to: "/blog" }, { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false); const location = useLocation();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 12); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { setOpen(false); }, [location.pathname]);
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(11,18,38,0.06)]" : "bg-white/0"}`}>
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between h-[76px]">
        <Link to="/" aria-label="Sentinels Design Lab — home"><Logo /></Link>
        <div className="hidden lg:flex items-center gap-8">{navLinks.map((l) => <Link key={l.to} to={l.to} className={`text-sm font-medium transition-colors ${location.pathname === l.to ? "text-[#6D5DF6]" : "text-[#0B1226]/75 hover:text-[#0B1226]"}`}>{l.label}</Link>)}</div>
        <Link to="/contact" className="hidden lg:inline-flex items-center gap-2 rounded-full bg-[#0B1226] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#6D5DF6] transition-colors"><CalendarCheck size={16} />Get Evaluation</Link>
        <button className="lg:hidden text-[#0B1226]" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">{open ? <X size={26} /> : <Menu size={26} />}</button>
      </nav>
      {open && <div className="lg:hidden border-t border-slate-100 bg-white px-6 py-5 flex flex-col gap-4">{navLinks.map((l) => <Link key={l.to} to={l.to} className={`text-sm font-medium ${location.pathname === l.to ? "text-[#6D5DF6]" : "text-[#0B1226]"}`}>{l.label}</Link>)}<Link to="/contact" className="rounded-full bg-[#0B1226] px-5 py-3 text-sm font-semibold text-white text-center">Get Evaluation</Link></div>}
    </header>
  );
}