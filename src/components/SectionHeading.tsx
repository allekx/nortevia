import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  titleId: string;
  children?: ReactNode;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  children,
  tone = "light",
}: SectionHeadingProps) {
  const titleClass = tone === "dark" ? "text-white" : "text-ink";
  const textClass = tone === "dark" ? "text-white/75" : "text-muted";

  return (
    <div className="reveal max-w-2xl space-y-4">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={titleId} className={`font-display text-3xl leading-[1.05] tracking-tight sm:text-4xl ${titleClass}`}>
        {title}
      </h2>
      {children ? <div className={`max-w-xl leading-relaxed ${textClass}`}>{children}</div> : null}
    </div>
  );
}
