"use client";

import React, { useState, useRef, useEffect } from "react";
import { PROFILE } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function About() {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const [swingAngle, setSwingAngle] = useState(0);
  const targetAngleRef = useRef(0);
  const currentAngleRef = useRef(0);
  const lastMouseXRef = useRef(0);
  const lastTimeRef = useRef(0);

  // Pendulum swing with spring damping + idle sway
  useEffect(() => {
    let animationFrameId: number;
    let idleTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const dt = Math.max(1, now - lastTimeRef.current);
      const dx = e.clientX - lastMouseXRef.current;
      const velocity = dx / dt;

      // Apply target angle bounded to +/- 18 degrees
      targetAngleRef.current = Math.max(-18, Math.min(18, velocity * 14));

      lastMouseXRef.current = e.clientX;
      lastTimeRef.current = now;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const tick = () => {
      idleTime += 0.02;
      // Idle sway when no fast mouse motion
      const idleSway = Math.sin(idleTime) * 1.5;

      // Spring damping towards target angle + idle
      currentAngleRef.current +=
        (targetAngleRef.current + idleSway - currentAngleRef.current) * 0.08;
      targetAngleRef.current *= 0.94; // Decay target towards 0

      setSwingAngle(currentAngleRef.current);
      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <section id="about" className="py-[var(--section-pad)] bg-[var(--paper)]">
      <div className="section-container">
        <SectionHeader
          index="01"
          tag="About me"
          title="Engineering real impact with data &amp;"
          accentWord="rigor."
        />

        {/* Three-column grid: minmax(0,1fr) 320px minmax(0,1fr) */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px_minmax(0,1fr)] gap-8 items-stretch">
          {/* Left Column: Bio & Verbatim summary */}
          <div className="card-premium p-8 sm:p-10 flex flex-col justify-between rv">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--mute)]">
                Profil professionnel
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)] mt-3 mb-6">
                Bonjour, je suis Hajar.
              </h3>
              <p className="text-base text-[var(--ink-2)] leading-relaxed mb-6 font-normal">
                {PROFILE.resumeSummary}
              </p>
              <p className="text-sm text-[var(--mute)] leading-relaxed italic border-l-2 border-[var(--ink)] pl-4">
                "{PROFILE.extraLine}"
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-[var(--line)]">
              <a href={PROFILE.resume} download className="btn-pill-primary text-xs">
                Télécharger le CV ↓
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="btn-pill-secondary text-xs"
              >
                GitHub ↗
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-pill-secondary text-xs"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Centre Column: Hanging Lanyard ID Card */}
          <div className="flex flex-col items-center justify-start rv min-h-[460px]">
            {/* Lanyard Strap (30x56px) with scrolling text and metal clip */}
            <div className="flex flex-col items-center z-20">
              <div
                className="w-[30px] h-[56px] bg-[#1a1a1a] rounded-t-sm shadow-md overflow-hidden relative border-x border-[#333]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #111 0, #111 2px, #222 2px, #222 4px)",
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-around items-center opacity-40 text-[7px] text-white font-mono uppercase tracking-tighter">
                  <span>HB</span>
                  <span>AI</span>
                </div>
              </div>
              {/* Metal Clip */}
              <div className="w-[18px] h-[14px] bg-gradient-to-b from-[#bbb] to-[#777] rounded-sm shadow-sm flex items-center justify-center -mt-0.5">
                <div className="w-[8px] h-[3px] bg-[#444] rounded-full" />
              </div>
            </div>

            {/* Hanging Card Container with Swing & 3D Flip */}
            <div
              ref={cardContainerRef}
              tabIndex={0}
              role="button"
              aria-label="Developer ID Card. Press Enter to flip."
              onKeyDown={handleKeyDown}
              onClick={() => setIsFlipped(!isFlipped)}
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}
              className="relative w-[300px] h-[404px] cursor-pointer outline-none focus:ring-2 focus:ring-[var(--ink)] focus:ring-offset-4 rounded-[20px] transition-transform duration-75 origin-top"
              style={{
                transform: `rotate(${swingAngle}deg)`,
                perspective: "1000px",
              }}
            >
              {/* Flip Inner Container */}
              <div
                className="w-full h-full relative transition-transform duration-700 ease-out rounded-[20px]"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* FRONT OF THE ID CARD */}
                <div
                  className="absolute inset-0 w-full h-full bg-white rounded-[20px] shadow-[0_12px_36px_rgba(13,13,13,0.12)] border border-[var(--line)] overflow-hidden flex flex-col justify-between p-4"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {/* Top Black Band */}
                  <div className="bg-[var(--ink)] text-white text-[10px] font-mono font-bold tracking-widest uppercase py-1.5 px-3 rounded-lg flex items-center justify-between">
                    <span>DEVELOPER ID</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>

                  {/* Photo Head-to-shirt crop with gray gradient ring */}
                  <div className="flex flex-col items-center my-auto">
                    <div className="w-[128px] h-[156px] rounded-xl p-[3px] bg-gradient-to-b from-[#e0e0e0] to-[#b0b0b0] shadow-inner overflow-hidden group">
                      <img
                        src="/portrait-bust.webp"
                        alt={PROFILE.name}
                        width={128}
                        height={156}
                        className="w-full h-full object-cover object-top rounded-[10px] group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                        loading="lazy"
                      />
                    </div>
                    <h4 className="text-lg font-bold text-[var(--ink)] mt-3 tracking-tight">
                      {PROFILE.name}
                    </h4>
                    <p className="text-[11px] font-semibold text-[var(--mute)]">
                      {PROFILE.role}
                    </p>
                  </div>

                  {/* Meta rows: ID No, Dept, Valid till */}
                  <div className="grid grid-cols-3 gap-1 py-2 border-y border-[var(--line)] text-center font-mono text-[9px]">
                    <div>
                      <span className="text-[var(--faint)] block">ID NO.</span>
                      <span className="font-semibold text-[var(--ink)]">HB-2027</span>
                    </div>
                    <div>
                      <span className="text-[var(--faint)] block">DEPT</span>
                      <span className="font-semibold text-[var(--ink)]">AI &amp; DATA</span>
                    </div>
                    <div>
                      <span className="text-[var(--faint)] block">VALID TILL</span>
                      <span className="font-semibold text-[var(--ink)]">
                        {PROFILE.idCard.validTill}
                      </span>
                    </div>
                  </div>

                  {/* Bottom: Barcode & Holographic badge */}
                  <div className="flex items-center justify-between pt-1">
                    {/* Simulated barcode */}
                    <div className="flex items-center gap-[2px] h-6 opacity-75">
                      {[3, 1, 4, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 1, 4, 2, 3].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="bg-[var(--ink)]"
                            style={{ width: `${h}px`, height: "18px" }}
                          />
                        )
                      )}
                    </div>

                    {/* Holographic sticker (grays) */}
                    <div className="w-8 h-8 rounded-full border border-gray-300 bg-gradient-to-tr from-[#eee] via-[#ddd] to-[#f5f5f5] flex items-center justify-center shadow-inner text-[7px] font-mono text-gray-500">
                      FSBM
                    </div>
                  </div>
                </div>

                {/* BACK OF THE ID CARD */}
                <div
                  className="absolute inset-0 w-full h-full bg-[#111111] text-white rounded-[20px] shadow-[0_12px_36px_rgba(13,13,13,0.18)] border border-[#222] p-5 flex flex-col justify-between"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-[#2a2a2a] pb-2 mb-3">
                      <span className="text-[9px] font-mono tracking-wider text-gray-400 uppercase">
                        FACULTÉ DES SCIENCES BEN M'SICK
                      </span>
                      <span className="text-[9px] font-mono text-gray-500">CASABLANCA</span>
                    </div>
                    <span className="text-xs font-bold tracking-tight text-gray-200 block mb-2">
                      Ce que je suis :
                    </span>
                    <ul className="text-[11px] text-gray-300 space-y-2 leading-relaxed">
                      {PROFILE.idCard.bulletPoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gray-500 text-xs">▪</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[#2a2a2a]">
                    <div className="flex justify-between items-baseline text-[9px] font-mono text-gray-400">
                      <span>SIGNATURE</span>
                      <span className="italic text-gray-200 font-serif text-sm">
                        Hajar Bentaib
                      </span>
                    </div>
                    <div className="mt-2 text-[8px] font-mono text-gray-500 text-center">
                      Si trouvé, contactez : {PROFILE.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <span className="text-[11px] text-[var(--mute)] font-mono mt-3">
              Survolez ou cliquez pour retourner la carte ↺
            </span>
          </div>

          {/* Right Column: Quick Facts & Quote */}
          <div className="card-premium p-8 sm:p-10 flex flex-col justify-between rv">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--mute)]">
                Repères rapides
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--ink)] mt-3 mb-6">
                Faits saillants
              </h3>

              <div className="space-y-4">
                <div className="py-2 border-b border-[var(--line)]">
                  <span className="text-xs font-mono text-[var(--mute)] block">
                    LOCALISATION
                  </span>
                  <span className="text-sm font-semibold text-[var(--ink)]">
                    {PROFILE.location}
                  </span>
                </div>

                <div className="py-2 border-b border-[var(--line)]">
                  <span className="text-xs font-mono text-[var(--mute)] block">
                    FORMATION
                  </span>
                  <span className="text-sm font-semibold text-[var(--ink)] leading-snug">
                    Master &amp; Licence d'Excellence IA (Mention Très Bien)
                  </span>
                </div>

                <div className="py-2 border-b border-[var(--line)]">
                  <span className="text-xs font-mono text-[var(--mute)] block">
                    STATUT
                  </span>
                  <span className="text-sm font-semibold text-[var(--ink)]">
                    Candidate Stage PFE (Big Data, IA, DevOps)
                  </span>
                </div>

                <div className="py-2 border-b border-[var(--line)]">
                  <span className="text-xs font-mono text-[var(--mute)] block">
                    CONTACT DIRECT
                  </span>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-sm font-semibold text-[var(--ink)] hover:underline"
                  >
                    {PROFILE.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--line)]">
              <span className="text-xs font-mono text-[var(--mute)] uppercase tracking-wider block mb-1">
                Philosophie
              </span>
              <p
                className="text-base text-[var(--ink)] font-normal italic leading-snug"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                "{PROFILE.quote}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
