import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import type { NavLink } from "./DesktopNav";

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
  navLinks: readonly NavLink[];
  pathname: string;
  theme: "light" | "dark";
  toggleTheme: () => void;
  locale: "en" | "bn";
  setLocale: (l: "en" | "bn") => void;
  t: (key: string) => string;
  openQuoteModal: () => void;
}

export default function MobileSidebar({
  open,
  onClose,
  navLinks,
  pathname,
  theme,
  toggleTheme,
  locale,
  setLocale,
  t,
  openQuoteModal,
}: MobileSidebarProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={[
          "fixed inset-0 z-[55] bg-black/50 backdrop-blur-[3px]",
          "transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar panel */}
      <aside
        id="mobile-nav-sidebar"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className={[
          "fixed left-0 top-0 z-[60] flex h-full flex-col overflow-y-auto",
          "w-[280px] min-[380px]:w-[300px] min-[500px]:w-[320px]",
          "border-r border-(--border) bg-(--bg)",
          "shadow-[12px_0_40px_rgba(0,0,0,0.14)]",
          "transition-transform duration-[420ms] ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Top brand stripe */}
        <div
          className="h-[3px] w-full shrink-0"
          style={{
            background:
              "linear-gradient(90deg, var(--brand-primary) 0%, var(--brand-accent) 50%, var(--brand-primary-500) 100%)",
          }}
        />

        {/* Header: logo + close */}
        <div className="flex shrink-0 items-center justify-between border-b border-(--border) px-5 py-4">
          <Link
            href="/"
            onClick={onClose}
            className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--brand-primary)"
          >
            <Image
              src={
                theme === "dark"
                  ? "/images/whitelogo.png"
                  : "/images/prochestalogo.png"
              }
              alt="Prochesta IT"
              width={200}
              height={38}
              className="h-auto w-[132px] min-[380px]:w-[148px]"
            />
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label={t("nav.aria.closeMenu")}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-(--border) bg-(--surface-2) text-(--text-muted) transition-colors hover:bg-(--surface-2) hover:text-(--text) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--brand-primary)"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="1" y1="1" x2="12" y2="12" />
              <line x1="12" y1="1" x2="1" y2="12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-0.5 px-3 py-4" aria-label="Mobile navigation">
          {navLinks.map((link, i) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <div
                key={link.href}
                style={{
                  transitionProperty: "transform, opacity",
                  transitionDuration: "340ms",
                  transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
                  transitionDelay: open ? `${i * 50 + 60}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateX(0)" : "translateX(-20px)",
                }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  aria-current={isActive ? "page" : undefined}
                  className={[
                    "relative flex items-center rounded-xl px-4 py-3.5",
                    "transition-[background-color,color] duration-150",
                    isActive
                      ? "bg-(--surface-2) text-(--text)"
                      : "text-(--text-muted) hover:bg-(--surface-2) hover:text-(--text)",
                  ].join(" ")}
                >
                  {/* Active left bar */}
                  {isActive && (
                    <span
                      className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full bg-(--brand-primary)"
                      aria-hidden="true"
                    />
                  )}
                  <span className="text-[15px] font-medium tracking-[-0.01em]">
                    {t(link.key)}
                  </span>
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Push footer to bottom */}
        <div className="flex-1" />

        {/* Footer */}
        <div
          className="shrink-0 px-5 pb-7 pt-3"
          style={{
            transitionProperty: "opacity",
            transitionDuration: "300ms",
            transitionDelay: open ? "340ms" : "0ms",
            opacity: open ? 1 : 0,
          }}
        >
          <div className="mb-4 border-t border-(--border)" />

          {/* Language + Theme */}
          <div className="mb-4 flex items-center justify-between gap-3">
            <div
              className="inline-flex items-center rounded-full border border-(--border) bg-(--surface-2) p-1"
              role="group"
              aria-label="Switch language"
            >
              {(["en", "bn"] as const).map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setLocale(loc)}
                  aria-pressed={locale === loc}
                  className={[
                    "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                    locale === loc
                      ? "bg-(--surface) text-(--text) shadow-sm"
                      : "text-(--text-muted) hover:text-(--text)",
                  ].join(" ")}
                >
                  {t(`nav.language.${loc}`)}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? t("nav.aria.switchToLight")
                  : t("nav.aria.switchToDark")
              }
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-(--border) bg-(--surface-2) text-(--text) transition-colors hover:bg-(--surface) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--brand-primary)"
            >
              <Icon name={theme === "dark" ? "sun" : "moon"} size={16} />
            </button>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={() => { onClose(); openQuoteModal(); }}
            className="w-full justify-center py-3 inline-flex items-center gap-2 font-medium tracking-[-0.01em] transition-all duration-200 bg-(--cta-bg) text-(--cta-text) border border-(--cta-border) shadow-(--shadow-brand) hover:bg-(--cta-hover) rounded-full text-sm"
          >
            {t("nav.cta.quote")}
          </button>
        </div>
      </aside>
    </>
  );
}
