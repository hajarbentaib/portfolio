import React from "react";

interface SectionHeaderProps {
  index: string;
  tag: string;
  title: string;
  accentWord: string;
  description?: string;
}

export function SectionHeader({
  index,
  tag,
  title,
  accentWord,
  description,
}: SectionHeaderProps) {
  return (
    <div className="section-header rv">
      <div className="section-tag">
        <span>{index}</span>
        <span>—</span>
        <span>{tag}</span>
      </div>
      <h2 className="section-title">
        {title}{" "}
        <span className="italic-accent">{accentWord}</span>
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[var(--mute)] max-w-2xl font-normal leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
