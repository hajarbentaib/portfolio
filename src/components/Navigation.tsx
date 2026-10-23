"use client";

import React, { useState, useEffect } from "react";
import { NAV, PROFILE } from "@/lib/data";
import { useScroll, scrollToTarget } from "@/lib/scroll";
import { useScrollProgress } from "@/lib/hooks";
import { asset } from "@/lib/assetPath";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();
  const { scrollTo } = useScroll();

  // Scroll detection for initials / pill background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section using rootMargin -45% 0px -50% 0px
  useEffect(() => {
    const sectionIds = NAV.map((item) => item.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollTo(href, -20);
  };

  return (
    <>
      {/* 2px ink scroll-progress bar along the very top */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--ink)] z-50 origin-left pointer-events-none transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-[var(--gutter)] flex items-center justify-between pointer-events-none`}
      >
        {/* Left: Initials + Full Name */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            aria-label="Back to top"
            className="group flex items-center gap-3"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs tracking-wider transition-all duration-300 transform group-hover:rotate-[360deg] ${
                scrolled
                  ? "bg-[var(--ink)] text-white shadow-sm"
                  : "border border-[var(--ink)] text-[var(--ink)] bg-transparent"
              }`}
            >
              {PROFILE.initials}
            </div>
            <span
              className={`text-sm font-semibold tracking-tight text-[var(--ink)] transition-opacity duration-300 hidden sm:inline-block ${
                scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
            >
              {PROFILE.name}
            </span>
          </a>
        </div>

        {/* Centre / Right: Desktop Pill Navigation */}
        <nav
          className={`hidden md:flex items-center gap-1 p-1.5 rounded-full pointer-events-auto transition-all duration-300 ${
            scrolled
              ? "bg-white/80 backdrop-blur-md shadow-[0_4px_24px_rgba(13,13,13,0.06)] border border-black/5"
              : "bg-transparent border border-transparent"
          }`}
          aria-label="Main Navigation"
        >
          {NAV.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 z-10 ${
                  isActive ? "text-white" : "text-[var(--ink)] hover:text-black"
                }`}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-full bg-[var(--ink)] -z-10 transition-all duration-300 shadow-sm"
                    style={{
                      transitionTimingFunction: "var(--ease)",
                    }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Mobile Menu Button */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <a
            href={asset(PROFILE.resume)}
            download
            className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-[var(--line)] bg-white/60 hover:bg-white hover:border-[var(--ink)] transition-all text-[var(--ink)]"
          >
            <span>CV</span>
            <span className="text-[10px] opacity-70">↓</span>
          </a>

          {/* Mobile "Menu" button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-white/90 backdrop-blur-md border border-[var(--line)] shadow-sm text-[var(--ink)] active:scale-95 transition-transform"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? "Fermer" : "Menu"}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[var(--paper)] flex flex-col justify-between p-8 sm:p-12 transition-all duration-500 ease-out md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto [clip-path:circle(150%_at_top_right)]"
            : "opacity-0 pointer-events-none [clip-path:circle(0%_at_top_right)]"
        }`}
        style={{
          transitionProperty: "clip-path, opacity",
          transitionTimingFunction: "var(--ease)",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div className="flex justify-between items-center">
          <span className="font-bold tracking-tight text-sm text-[var(--mute)]">
            HAJAR BENTAIB
          </span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="px-4 py-2 rounded-full text-xs font-semibold border border-[var(--line)] bg-white active:scale-95 transition-transform text-[var(--ink)]"
            aria-label="Close menu"
          >
            Fermer ✕
          </button>
        </div>

        <nav className="flex flex-col gap-6 my-auto">
          {NAV.map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="group flex items-baseline gap-4 text-3xl sm:text-4xl font-bold tracking-tight text-[var(--ink)] hover:text-[var(--mute)] transition-colors"
              style={{
                transitionDelay: `${mobileMenuOpen ? idx * 50 : 0}ms`,
              }}
            >
              <span className="font-mono text-xs text-[var(--faint)]">
                {item.index}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-4 pt-6 border-t border-[var(--line)]">
          <div className="flex items-center justify-between text-xs text-[var(--mute)] font-mono">
            <span>{PROFILE.location}</span>
            <a
              href={asset(PROFILE.resume)}
              download
              className="font-sans font-semibold underline text-[var(--ink)]"
            >
              Télécharger CV ↓
            </a>
          </div>
          <div className="text-xs text-[var(--faint)]">
            {PROFILE.email} · {PROFILE.phone}
          </div>
        </div>
      </div>
    </>
  );
}
