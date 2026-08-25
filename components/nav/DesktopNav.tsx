import Link from "next/link";

export type NavLink = { readonly href: string; readonly key: string };

interface DesktopNavProps {
  navLinks: readonly NavLink[];
  pathname: string;
  t: (key: string) => string;
}

export default function DesktopNav({ navLinks, pathname, t }: DesktopNavProps) {
  return (
    <nav
      className="hidden items-center justify-center gap-7 whitespace-nowrap text-[15px] font-medium text-(--text-muted) lg:flex"
      aria-label="Primary navigation"
    >
      {navLinks.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={[
              "relative py-0.5 transition-colors duration-150",
              "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:rounded-full",
              "after:bg-(--brand-primary) after:origin-left after:transition-transform after:duration-200",
              isActive
                ? "text-(--text) after:scale-x-100"
                : "hover:text-(--text) after:scale-x-0 hover:after:scale-x-100",
            ].join(" ")}
          >
            {t(link.key)}
          </Link>
        );
      })}
    </nav>
  );
}
