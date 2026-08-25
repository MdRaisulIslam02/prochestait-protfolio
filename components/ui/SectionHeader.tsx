import { ReactNode } from "react";
import Reveal from "@/components/ui/Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  const isLeft = align === "left";

  return (
    <Reveal
      variant="stagger"
      className={[
        "mb-12 flex flex-col gap-3",
        isLeft ? "items-start text-left" : "items-center text-center",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface) px-[10px] py-1 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-(--brand-primary) before:h-1.5 before:w-1.5 before:rounded-full before:bg-(--brand-accent)">
        {eyebrow}
      </span>
      <h2 className="m-0 max-w-[24ch] text-balance text-[clamp(28px,4vw,44px)] font-semibold leading-[1.15] tracking-[-0.02em] text-(--text)">
        {title}
      </h2>
      {subtitle ? (
        <p className="m-0 max-w-[60ch] text-[17px] text-(--text-muted)">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}
