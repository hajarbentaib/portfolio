"use client";

import React, { useRef, useState, useEffect } from "react";
import { TIMELINE } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress through section (0 when top enters bottom of viewport, 1 when bottom leaves top)
      const totalDist = rect.height + windowHeight;
      const currentDist = windowHeight - rect.top;
      const progress = Math.min(1, Math.max(0, currentDist / totalDist));

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-[var(--section-pad)] bg-[var(--paper)] relative overflow-hidden"
    >
      <div className="section-container">
        <SectionHeader
          index="04"
          tag="Timeline"
          title="Education and experience as one continuous"
          accentWord="path."
          description="De la formation d'excellence en intelligence artificielle aux réalisations logicielles concrètes."
        />

        {/* Vertical Timeline */}
        <div className="relative max-w-3xl mx-auto my-12 pl-8 sm:pl-12">
          {/* Timeline Spine Background */}
          <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-[2px] bg-[var(--line)]" />

          {/* Timeline Spine Active (draws with scroll progress) */}
          <div
            className="absolute left-3 sm:left-4 top-0 w-[2px] bg-[var(--ink)] transition-all duration-75 origin-top"
            style={{
              height: `${Math.min(100, scrollProgress * 125)}%`,
            }}
          />

          <div className="space-y-12">
            {TIMELINE.map((entry, index) => {
              const nodeThreshold = (index + 0.5) / (TIMELINE.length + 1);
              const isLit = scrollProgress >= nodeThreshold;

              return (
                <div key={index} className="relative group rv">
                  {/* Spine Node Dot */}
                  <div
                    className={`absolute -left-[27px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                      isLit
                        ? "border-[var(--ink)] bg-[var(--ink)] scale-110 shadow-sm"
                        : "border-[var(--faint)] bg-[var(--paper)]"
                    }`}
                  >
                    {isLit && (
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </div>

                  {/* Card Stop */}
                  <div
                    className={`card-premium p-6 sm:p-8 transition-all duration-500 ${
                      isLit
                        ? "shadow-sm border-black/10"
                        : "opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono text-xs">
                      <span className="font-bold text-[var(--ink)] bg-[#eceae4] px-3 py-1 rounded-full">
                        {entry.year}
                      </span>
                      {entry.badge && (
                        <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/70 px-2.5 py-0.5 rounded-full">
                          {entry.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--ink)] mb-1">
                      {entry.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-[var(--mute)] mb-4">
                      {entry.place}
                    </p>

                    <p className="text-sm text-[var(--ink-2)] leading-relaxed font-normal">
                      {entry.detail}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Ending Dashed Card: "Next — Your team?" */}
            <div className="relative group rv">
              <div className="absolute -left-[27px] sm:-left-[39px] top-4 w-4 h-4 rounded-full border-2 border-dashed border-[var(--mute)] bg-[var(--paper)]" />

              <div className="rounded-[28px] border-2 border-dashed border-[var(--line)] hover:border-[var(--ink)] p-8 text-center transition-colors duration-300 bg-transparent flex flex-col items-center justify-center">
                <span className="font-mono text-xs text-[var(--mute)] uppercase tracking-widest mb-1">
                  Prochaine étape
                </span>
                <h4 className="text-2xl font-bold tracking-tight text-[var(--ink)] mb-2">
                  Next — Votre équipe ?
                </h4>
                <p className="text-sm text-[var(--mute)] max-w-md mx-auto mb-6">
                  Disponible immédiatement pour un stage PFE ou opportunité en Data Engineering, IA &amp; MLOps.
                </p>
                <a href="#contact" className="btn-pill-primary text-xs py-2.5 px-6">
                  Prenons contact ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
