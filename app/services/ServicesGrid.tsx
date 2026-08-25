"use client";

import { useState } from "react";
import type { Service, ServiceCategory } from "@/types";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/Icon";
import ServiceCard from "@/components/ServiceCard";

function deriveCategories(services: Service[]): ServiceCategory[] {
  const seen = new Set<number>();
  const ordered: ServiceCategory[] = [];
  for (const s of services) {
    if (s.category && !seen.has(s.category.id)) {
      seen.add(s.category.id);
      ordered.push(s.category);
    }
  }
  return ordered;
}

const ALL_TAB = { id: 0, name: "All Services", slug: "all", icon: "grid", is_active: true, sort_order: 0 } satisfies ServiceCategory;

interface Props {
  services: Service[];
  categories: ServiceCategory[];
}

export default function ServicesGrid({ services, categories }: Props) {
  const tabs = [ALL_TAB, ...(categories.length > 0 ? categories : deriveCategories(services))];
  const [activeTab, setActiveTab] = useState("All Services");

  const filtered =
    activeTab === "All Services"
      ? services
      : services.filter((s) => s.category?.name === activeTab);

  return (
    <>
      {/* ── Category Tabs ─────────────────────────── */}
      <div className="flex w-full overflow-x-auto gap-3 mb-10 pb-4 md:flex-wrap md:pb-0 md:mb-14 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth snap-x">
        {tabs.map((cat) => {
          const isActive = activeTab === cat.name;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.name)}
              style={
                isActive
                  ? {
                      background: "#00a3e0",
                      color: "#ffffff",
                      border: "1px solid #00a3e0",
                      boxShadow: "0 8px 24px rgba(0,163,224,.28)",
                    }
                  : {
                      background: "var(--surface)",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border-strong)",
                    }
              }
              className={[
                "group relative overflow-hidden flex items-center gap-2.5 shrink-0 snap-start",
                "px-5 py-3 rounded-lg text-[14px] font-medium",
                "transition-all duration-200",
                !isActive &&
                  "hover:-translate-y-0.5 hover:[box-shadow:var(--shadow-md)] hover:[background:var(--surface-2)]",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span
                style={
                  isActive
                    ? { color: "rgba(255,255,255,.85)" }
                    : { color: "var(--text-soft)" }
                }
                className="flex items-center transition-colors duration-200 group-hover:[color:#00a3e0]"
              >
                <Icon name={cat.icon ?? "folder"} size={16} />
              </span>

              <span className="relative z-10 whitespace-nowrap leading-none">
                {cat.name}
              </span>

              {isActive && (
                <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Services Grid ─────────────────────────── */}
      <Reveal variant="stagger" className="grid-3" key={activeTab}>
        {filtered.map((srv) => (
          <ServiceCard key={srv.id} service={srv} />
        ))}
      </Reveal>
    </>
  );
}
