"use client";

import React, { useState } from "react";
import { SKILLS, SKILL_FAMILIES, SkillElement } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TechLogo, isBrand } from "@/components/ui/TechLogo";

export function Skills() {
  const [selectedFamily, setSelectedFamily] = useState<string>("All");
  const [activeSkill, setActiveSkill] = useState<SkillElement>(SKILLS[0]);

  return (
    <section id="skills" className="py-[var(--section-pad)] bg-[var(--paper)]">
      <div className="section-container">
        <SectionHeader
          index="02"
          tag="Expertise"
          title="The periodic table of my"
          accentWord="stack."
          description="Chaque outil, librairie et technologie maîtrisé au cours de mon parcours académique et de mes projets d'ingénierie."
        />

        {/* Filter chips */}
        <div className="flex flex-wrap items-center gap-2 mb-8 rv">
          {SKILL_FAMILIES.map((family) => {
            const isSelected = selectedFamily === family;
            return (
              <button
                key={family}
                onClick={() => setSelectedFamily(family)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                  isSelected
                    ? "bg-[var(--ink)] text-white shadow-sm"
                    : "bg-white text-[var(--ink-2)] border border-[var(--line)] hover:border-[var(--ink)]"
                }`}
              >
                {family}
              </button>
            );
          })}
        </div>

        {/* Main layout: Grid on left + Sticky Inspector on right (320px) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* Elements Periodic Grid (8 columns desktop, 4 mobile) */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2.5 rv">
            {SKILLS.map((skill, index) => {
              const row = Math.floor(index / 8);
              const col = index % 8;
              const delayMs = (row + col) * 40;
              const matchesFilter =
                selectedFamily === "All" || skill.family === selectedFamily;
              const isActive = activeSkill.atomicNumber === skill.atomicNumber;

              return (
                <div
                  key={skill.atomicNumber}
                  tabIndex={0}
                  role="button"
                  aria-label={`${skill.name}, ${skill.family}`}
                  onMouseEnter={() => setActiveSkill(skill)}
                  onFocus={() => setActiveSkill(skill)}
                  onClick={() => setActiveSkill(skill)}
                  style={{
                    animationDelay: `${delayMs}ms`,
                  }}
                  className={`relative p-2.5 sm:p-3 rounded-2xl flex flex-col justify-between aspect-square cursor-pointer transition-all duration-300 outline-none select-none ${
                    isActive
                      ? "bg-[var(--ink)] text-white shadow-md scale-105 z-20"
                      : matchesFilter
                      ? "bg-white text-[var(--ink)] border border-[var(--line)] hover:border-black/30 hover:scale-[1.02] shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                      : "bg-white/40 text-[var(--faint)] border border-black/5 opacity-35 scale-95"
                  }`}
                >
                  <div className="flex justify-between items-start font-mono text-[9px] sm:text-[10px]">
                    <span className={isActive ? "text-gray-400" : "text-[var(--mute)]"}>
                      {skill.atomicNumber.toString().padStart(2, "0")}
                    </span>
                    <span
                      className={`text-[8px] font-sans truncate ml-1 ${
                        isActive ? "text-gray-400" : "text-[var(--faint)]"
                      }`}
                    >
                      {skill.family.split(" ")[0]}
                    </span>
                  </div>

                  <div className="my-auto text-center">
                    <span className="text-xl sm:text-2xl font-bold tracking-tight block">
                      {skill.symbol}
                    </span>
                  </div>

                  <div className="text-center">
                    <span className="text-[10px] sm:text-[11px] font-medium tracking-tight block truncate">
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky Inspector Panel (320px wide) */}
          <div className="lg:sticky lg:top-24 card-premium p-6 sm:p-8 flex flex-col items-center text-center rv">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--mute)] mb-4">
              Inspecteur d'élément
            </span>

            {/* 150px logo with pop animation and soft brand-tint glow */}
            <div className="w-[150px] h-[150px] rounded-2xl bg-gradient-to-b from-[#faf9f7] to-[#edebe6] flex items-center justify-center p-4 shadow-inner mb-6 relative overflow-hidden group">
              <TechLogo
                nameKey={activeSkill.brandKey || activeSkill.symbol}
                size={96}
                showGlow={isBrand(activeSkill.brandKey)}
                className="transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>

            <div className="w-full">
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="font-mono text-xs text-[var(--mute)]">
                  #{activeSkill.atomicNumber}
                </span>
                <h4 className="text-2xl font-bold tracking-tight text-[var(--ink)]">
                  {activeSkill.name}
                </h4>
              </div>

              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-[var(--soft)] text-[var(--ink-2)] mb-6">
                {activeSkill.family}
              </span>

              <div className="w-full border-t border-[var(--line)] pt-4 text-left">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--mute)] block mb-2">
                  Projets associés :
                </span>
                <ul className="space-y-1.5 text-xs text-[var(--ink-2)]">
                  {activeSkill.projects.map((proj, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--ink)]" />
                      <span className="font-medium">{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
