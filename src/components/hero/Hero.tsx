"use client";

import React, { useRef, useState, useEffect } from "react";
import { PROFILE } from "@/lib/data";
import { scrollToTarget } from "@/lib/scroll";
import { asset } from "@/lib/assetPath";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [soundBlocked, setSoundBlocked] = useState(true);

  // Autoplay attempt + user unlock listener
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Try autoplay with audio
    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false);
          setSoundBlocked(false);
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay with sound blocked, fallback to muted autoplay
          video.muted = true;
          video.play().then(() => {
            setIsPlaying(true);
            setIsMuted(true);
            setSoundBlocked(true);
          });
        });
    }

    // Unlock audio on first user gesture
    const unlockAudio = () => {
      if (video && soundBlocked) {
        video.muted = false;
        setIsMuted(false);
        setSoundBlocked(false);
      }
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("touchend", unlockAudio);
    };

    window.addEventListener("pointerdown", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });
    window.addEventListener("touchend", unlockAudio, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      window.removeEventListener("touchend", unlockAudio);
    };
  }, [soundBlocked]);

  // Pause video and voice when less than 35% visible; resume when scrolling back
  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    if (!hero || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.35) {
          video.pause();
          setIsPlaying(false);
        } else {
          video.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      },
      { threshold: [0, 0.35, 1.0] }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.muted = false;
      setIsMuted(false);
      setSoundBlocked(false);
      if (video.paused) {
        video.play().then(() => setIsPlaying(true));
      }
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100svh] flex flex-col justify-between items-center overflow-hidden pt-20 pb-8 px-[var(--gutter)] bg-[var(--paper)]"
    >
      {/* Giant outlined ghost word behind person */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0"
        aria-hidden="true"
      >
        <span
          className="text-[clamp(6rem,22vw,22rem)] font-black tracking-tighter leading-none text-transparent uppercase opacity-35"
          style={{
            WebkitTextStroke: "1.5px rgba(13, 13, 13, 0.22)",
            fontFamily: "var(--font-inter-tight)",
          }}
        >
          {PROFILE.firstName}
        </span>
      </div>

      {/* Hero Video Container */}
      <div className="relative z-10 my-auto flex items-center justify-center w-full max-w-2xl">
        <div
          className="relative rounded-2xl overflow-hidden shadow-none max-w-full"
          style={{
            height: "min(88svh, 900px)",
            aspectRatio: "768 / 960",
            maxHeight: "clamp(480px, 78svh, 900px)",
          }}
        >
          <video
            ref={videoRef}
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            autoPlay
            poster={asset("/portrait-bust.webp")}
            className="w-full h-full object-cover object-top select-none pointer-events-none"
            style={{
              mixBlendMode: "multiply",
            }}
          >
            <source src={asset("/hero/hero.webm")} type="video/webm" />
            <source src={asset("/hero/hero.mp4")} type="video/mp4" />
          </video>
        </div>

        {/* Round Sound Control Button (46px, solid ink) */}
        <div className="absolute bottom-4 right-4 z-20">
          <button
            onClick={toggleSound}
            aria-label={isMuted ? "Activer le son de la vidéo" : "Couper le son de la vidéo"}
            className="relative w-[46px] h-[46px] rounded-full bg-[var(--ink)] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            {soundBlocked && (
              <span className="absolute -inset-1 rounded-full border-2 border-[var(--ink)] opacity-75 animate-ping" />
            )}
            {isMuted ? (
              // Triangle ▶
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-0.5"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            ) : (
              // Two bars ❚❚
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Hero Bottom Banner: Role heading + CTAs */}
      <div className="relative z-10 w-full max-w-4xl text-center flex flex-col items-center gap-6 mt-4">
        <div className="flex flex-col items-center">
          <span className="font-mono text-xs tracking-widest text-[var(--mute)] uppercase mb-2">
            {PROFILE.kicker} · MASTER IA CANDIDATE
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--ink)] leading-[1.05]">
            AI &amp; Data{" "}
            <span
              className="font-normal italic text-[var(--mute)]"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Engineer.
            </span>
          </h1>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget("#work", -20);
            }}
            className="btn-pill-primary"
          >
            <span>Explorer les projets</span>
            <span className="text-xs">→</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToTarget("#contact", -20);
            }}
            className="btn-pill-secondary"
          >
            Discuter
          </a>

          <a
            href={asset(PROFILE.resume)}
            download
            className="btn-pill-secondary"
          >
            <span>CV</span>
            <span className="text-xs">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
