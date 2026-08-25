"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import Container from "./ui/Container";
import { useI18n } from "@/i18n/I18nProvider";
import DesktopNav from "./nav/DesktopNav";
import MobileSidebar from "./nav/MobileSidebar";
import { useQuoteModal } from "./QuoteModalProvider";

const NAV_LINKS = [
  { href: "/", key: "nav.links.home" },
  { href: "/services", key: "nav.links.services" },
  { href: "/portfolio", key: "nav.links.portfolio" },
  { href: "/about", key: "nav.links.about" },
  { href: "/contact", key: "nav.links.contact" },
] as const;

export default function Nav() {
  const { locale, setLocale, t } = useI18n();
  const { openQuoteModal } = useQuoteModal();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  useEffect(() => {
    const cur = document.documentElement.getAttribute("data-theme");
    if (cur === "dark" || cur === "light") setTheme(cur);

    const mo = new MutationObserver(() => {
      const next = document.documentElement.getAttribute("data-theme");
      if (next === "dark" || next === "light") setTheme(next);
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => mo.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
    localStorage.setItem("prochesta-theme", next);
  };

  return (
    <>
      {/* ── Sticky header ──────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 border-b border-(--border) bg-[color-mix(in_oklab,var(--bg)_82%,transparent)] backdrop-blur-[14px] backdrop-saturate-180 transition-shadow duration-200"
        style={scrolled ? { boxShadow: "var(--shadow-sm)" } : {}}
      >
        <Container
          width="wide"
          className="flex h-[68px] items-center justify-between gap-2 sm:h-[78px] sm:gap-4"
        >
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--brand-primary)"
            aria-label={t("nav.aria.home")}
          >
            <Image
              src={
                theme === "dark"
                  ? "/images/whitelogo.png"
                  : "/images/prochestalogo.png"
              }
              alt="Prochesta IT"
              width={280}
              height={54}
              className="h-auto w-[128px] min-[360px]:w-[148px] min-[440px]:w-[175px] sm:w-[210px] md:w-[240px] lg:w-[260px]"
              priority
            />
          </Link>

          {/* Desktop nav (lg+) */}
          <DesktopNav navLinks={NAV_LINKS} pathname={pathname} t={t} />

          {/* Right actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Language switcher */}
            <div
              className="hidden items-center rounded-full border border-(--border) bg-(--surface-2) p-1 sm:inline-flex"
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

            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? t("nav.aria.switchToLight")
                  : t("nav.aria.switchToDark")
              }
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-(--border) bg-(--surface-2) text-(--text) transition-colors hover:bg-(--surface) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--brand-primary)"
            >
              <Icon name={theme === "dark" ? "sun" : "moon"} size={16} />
            </button>

            {/* CTA */}
            <button
              type="button"
              onClick={openQuoteModal}
              className="hidden sm:inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-[-0.01em] transition-all duration-200 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-primary) focus-visible:ring-offset-2 focus-visible:ring-offset-(--bg) bg-(--cta-bg) text-(--cta-text) border border-(--cta-border) shadow-(--shadow-brand) hover:bg-(--cta-hover) px-4 py-2 text-sm rounded-full"
            >
              <span className="hidden md:inline">{t("nav.cta.quote")}</span>
              <span className="md:hidden">{t("nav.cta.contact")}</span>
            </button>

            {/* Hamburger — visible below lg */}
            <button
              type="button"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-(--border) bg-(--surface-2) text-(--text) transition-colors hover:bg-(--surface) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--brand-primary) lg:hidden"
              aria-label={
                menuOpen ? t("nav.aria.closeMenu") : t("nav.aria.openMenu")
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-sidebar"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="relative block h-3.5 w-4" aria-hidden="true">
                <span
                  className={[
                    "absolute left-0 top-0 h-0.5 w-4 bg-current transition-transform duration-200",
                    menuOpen ? "translate-y-[6px] rotate-45" : "",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-[6px] h-0.5 w-4 bg-current transition-opacity duration-200",
                    menuOpen ? "opacity-0" : "opacity-100",
                  ].join(" ")}
                />
                <span
                  className={[
                    "absolute left-0 top-3 h-0.5 w-4 bg-current transition-transform duration-200",
                    menuOpen ? "-translate-y-[6px] -rotate-45" : "",
                  ].join(" ")}
                />
              </span>
            </button>
          </div>
        </Container>
      </header>

      {/* ── Mobile sidebar (backdrop + panel) ─────────────────── */}
      <MobileSidebar
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        navLinks={NAV_LINKS}
        pathname={pathname}
        theme={theme}
        toggleTheme={toggleTheme}
        locale={locale}
        setLocale={setLocale}
        t={t}
        openQuoteModal={openQuoteModal}
      />
    </>
  );
}
