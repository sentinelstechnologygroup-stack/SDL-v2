import { Image } from "@/components/ui/image";

const LOGO_URL = "/assets/sentinels-design-lab-logo.svg";

export default function Logo({ size = "md", className = "" }) {
  const dims = size === "lg" ? "h-16 w-32" : "h-12 w-24";
  return (
    <span className={`inline-flex items-center justify-center rounded-lg bg-black ${dims} ${className}`}>
      <Image src={LOGO_URL} alt="Sentinels Design Lab — Digital Platforms + AI Systems" className="h-full w-full" fittingType="fit" />
    </span>
  );
}