"use client";

import React, { useState } from "react";
import { PROFILE } from "@/lib/data";
import { scrollToTarget } from "@/lib/scroll";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const headingLine1 = "Construisons";
  const headingLine2 = "quelque chose";
  const headingLine3 = "ensemble.";

  return (
    <section id="contact" className="pt-[var(--section-pad)] pb-12 bg-[var(--paper)]">
      <div className="section-container">
        {/* Section Index */}
        <div className="section-tag mb-4 rv">
          <span>05</span>
          <span>—</span>
          <span>Contact</span>
        </div>

        {/* Huge Interactive Heading with bouncing letters */}
        <div className="my-8 rv">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[var(--ink)] leading-[0.95]">
            <span className="block">
              {headingLine1.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-transform duration-200 hover:-translate-y-3 cursor-default"
                >
                  {char}
                </span>
              ))}
            </span>
            <span className="block mt-2">
              {headingLine2.split("").map((char, i) => (
                <span
                  key={i}
                  className="inline-block transition-transform duration-200 hover:-translate-y-3 cursor-default"
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </span>
            <span className="block mt-2">
              {headingLine3.split("").map((char, i) => (
                <span
                  key={i}
                  className={`inline-block transition-transform duration-200 hover:-translate-y-3 cursor-default ${
                    i >= headingLine3.length - 9
                      ? "italic font-normal text-[var(--mute)]"
                      : ""
                  }`}
                  style={
                    i >= headingLine3.length - 9
                      ? { fontFamily: "var(--font-instrument-serif)" }
                      : {}
                  }
                >
                  {char}
                </span>
              ))}
            </span>
          </h2>
        </div>

        {/* Email & Contact Details Card */}
        <div className="card-premium p-8 sm:p-12 my-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 rv">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[var(--mute)]">
              Adresse e-mail directe
            </span>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)] underline underline-offset-8 decoration-1 hover:decoration-2 transition-all"
              >
                {PROFILE.email}
              </a>

              {/* Copy Chip with aria-live */}
              <button
                onClick={handleCopyEmail}
                className="px-4 py-2 rounded-full text-xs font-semibold bg-[#eae7e1] hover:bg-[var(--ink)] hover:text-white transition-all text-[var(--ink)] active:scale-95"
                aria-label="Copier l'adresse email"
              >
                {copied ? "Copié ✓" : "Copier"}
              </button>
            </div>

            <div
              aria-live="polite"
              className="sr-only"
            >
              {copied ? "Adresse email copiée dans le presse-papier" : ""}
            </div>
          </div>

          {/* Circular Spinning "Say Hello" badge */}
          <div className="relative w-28 h-28 flex items-center justify-center shrink-0 self-center md:self-auto">
            <svg
              className="w-full h-full animate-[spin_12s_linear_infinite]"
              viewBox="0 0 100 100"
            >
              <path
                id="textPathCircle"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[10px] uppercase font-mono tracking-[0.22em] fill-[var(--ink)] font-semibold">
                <textPath href="#textPathCircle">
                  · SAY HELLO · DISCUTONS ·
                </textPath>
              </text>
            </svg>
            <div className="absolute w-10 h-10 rounded-full bg-[var(--ink)] text-white flex items-center justify-center text-sm">
              ↗
            </div>
          </div>
        </div>

        {/* Links & Channels */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[var(--line)] font-mono text-xs text-[var(--ink)] rv">
          <div className="py-2">
            <span className="text-[var(--mute)] block mb-1">TÉLÉPHONE</span>
            <a href={PROFILE.phoneHref} className="font-bold hover:underline">
              {PROFILE.phone}
            </a>
          </div>

          <div className="py-2">
            <span className="text-[var(--mute)] block mb-1">PROFIL GITHUB</span>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="font-bold hover:underline"
            >
              github.com/hajarbentaib ↗
            </a>
          </div>

          <div className="py-2">
            <span className="text-[var(--mute)] block mb-1">LINKEDIN</span>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-bold hover:underline"
            >
              in/hajar-bentaib ↗
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--mute)]">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}. Tous droits réservés.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToTarget("#hero", 0)}
              className="hover:text-[var(--ink)] transition-colors underline underline-offset-4"
            >
              Retour en haut ↑
            </button>
            <span>·</span>
            <span>Conçu avec Next.js &amp; Tailwind CSS</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
