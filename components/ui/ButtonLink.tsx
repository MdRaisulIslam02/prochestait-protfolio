import { AnchorHTMLAttributes } from "react";
import Link from "next/link";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "accent"
  | "outline"
  | "ghost"
  | "light";
type ButtonSize = "xs" | "sm" | "md" | "lg";
type ButtonShape = "pill" | "rounded";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  fullWidth?: boolean;
}

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-[-0.01em] transition-all duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary) focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg)";

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-(--brand-primary) !text-white visited:!text-white hover:!text-white focus-visible:!text-white [&_svg]:!text-white border border-[color-mix(in_oklab,var(--brand-primary)_82%,black)] shadow-(--shadow-brand) hover:bg-(--brand-primary-600) hover:shadow-[0_14px_30px_rgba(58,12,163,0.3)]",
  secondary:
    "bg-(--surface-2) text-(--text) border border-(--border) hover:bg-(--surface)",
  accent:
    "bg-(--brand-accent) !text-white visited:!text-white hover:!text-white focus-visible:!text-white [&_svg]:!text-white shadow-[0_8px_22px_rgba(240,128,0,0.35)] hover:bg-(--brand-accent-600)",
  outline:
    "border border-(--brand-primary) bg-transparent text-(--brand-primary) hover:bg-(--brand-primary-50)",
  ghost:
    "border border-(--border-strong) bg-transparent text-(--text) hover:bg-(--surface-2)",
  light:
    "border border-[var(--btn-light-border)] bg-[var(--btn-light-bg)] text-[var(--btn-light-text)] shadow-sm backdrop-blur-md hover:bg-[var(--btn-light-hover-bg)]",
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  xs: "px-3 py-1.5 text-xs",
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-[15px]",
  lg: "px-6 py-3.5 text-base",
};

const SHAPE_CLASSES: Record<ButtonShape, string> = {
  pill: "rounded-full",
  rounded: "rounded-xl",
};

export default function ButtonLink({
  variant = "primary",
  size = "md",
  shape = "pill",
  fullWidth = false,
  className,
  ...props
}: ButtonLinkProps) {
  const classes = [
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    SHAPE_CLASSES[shape],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const { href, ...rest } = props;
  return <Link href={href ?? "#"} className={classes} {...rest} />;
}
