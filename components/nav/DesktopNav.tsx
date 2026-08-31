import Link from "next/link";
import Icon from "@/components/Icon";

export type NavLink = { readonly href: string; readonly key: string };

interface DesktopNavProps {
  navLinks: readonly NavLink[];
  pathname: string;
  t: (key: string) => string;
}

const PORTFOLIO_MENU = [
  {
    href: "/portfolio",
    icon: "grid",
    title: "All Portfolio",
    desc: "Browse every project we have shipped.",
  },
  {
    href: "/portfolio?category=ecommerce",
    icon: "cart",
    title: "E-commerce Work",
    desc: "Stores, product catalogs, checkout flows.",
  },
  {
    href: "/portfolio?category=enterprise",
    icon: "box",
    title: "Enterprise Systems",
    desc: "ERP, CRM, HRM, dashboards, automation.",
  },
  {
    href: "/portfolio?category=mobile",
    icon: "phone",
    title: "Apps & Platforms",
    desc: "Mobile apps, SaaS tools, booking systems.",
  },
];

export default function DesktopNav({ navLinks, pathname, t }: DesktopNavProps) {
  return (
    <nav
      className="hidden items-center justify-center gap-2 whitespace-nowrap text-[15px] font-medium text-(--text-muted) lg:flex"
      aria-label="Primary navigation"
    >
      {navLinks.map((link) => {
        const isActive =
          link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

        if (link.href === "/portfolio") {
          return (
            <div key={link.href} className="nav-mega-group">
              <Link
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={[
                  "nav-mega-trigger",
                  "relative px-3 py-2 transition-colors duration-150",
                  "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:rounded-full",
                  "after:bg-(--brand-primary) after:origin-left after:transition-transform after:duration-200",
                  isActive
                    ? "text-(--text) after:scale-x-100"
                    : "hover:text-(--text) after:scale-x-0 hover:after:scale-x-100",
                ].join(" ")}
              >
                {t(link.key)}
                <Icon name="arrow" size={14} className="nav-mega-trigger-icon" />
              </Link>

              <div className="nav-mega-panel">
                <div className="nav-mega-feature">
                  <span className="nav-mega-kicker">Selected Work</span>
                  <strong>Explore the projects that make clients confident.</strong>
                  <p>
                    E-commerce, ERP, CRM, mobile apps, and growth platforms built for real business workflows.
                  </p>
                  <Link href="/portfolio" className="nav-mega-feature-link">
                    View portfolio
                    <Icon name="arrow_right" size={15} />
                  </Link>
                </div>

                <div className="nav-mega-list">
                  <span className="nav-mega-kicker">Browse</span>
                  {PORTFOLIO_MENU.map((item) => (
                    <Link key={item.title} href={item.href} className="nav-mega-item">
                      <span className="nav-mega-item-icon">
                        <Icon name={item.icon} size={18} />
                      </span>
                      <span>
                        <strong>{item.title}</strong>
                        <small>{item.desc}</small>
                      </span>
                      <Icon name="arrow_right" size={16} className="nav-mega-item-arrow" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={[
              "relative px-3 py-2 transition-colors duration-150",
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
