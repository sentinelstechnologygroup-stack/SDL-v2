import { motion } from "framer-motion";

export const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }) };
export const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } } };
export const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
export const scaleIn = { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

export function Reveal({ children, className = "", variants = fadeUp, custom = 0, once = true }) {
  return <motion.div className={className} variants={variants} custom={custom} initial="hidden" whileInView="visible" viewport={{ once, margin: "-80px" }}>{children}</motion.div>;
}