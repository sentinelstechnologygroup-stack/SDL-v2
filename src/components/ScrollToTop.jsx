import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    if (window.location.hash) {
      const id = decodeURIComponent(window.location.hash.slice(1));
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 50);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  return null;
}
