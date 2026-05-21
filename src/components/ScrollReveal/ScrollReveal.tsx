"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          // stagger children inside grid parents
          const parent = entry.target.closest(
            ".services-grid, .brands-grid, .process-steps, .trust-items",
          );
          const delay = parent
            ? Array.from(parent.querySelectorAll(".reveal")).indexOf(
                entry.target,
              ) * 100
            : 0;

          setTimeout(() => entry.target.classList.add("visible"), delay);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.1 },
    );

    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, [pathname]);

  return null;
}
