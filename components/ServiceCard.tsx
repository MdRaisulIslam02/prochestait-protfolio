import React from "react";
import Link from "next/link";
import type { Service } from "@/types";
import Icon from "@/components/Icon";

interface Props {
  service: Service;
}

export default function ServiceCard({ service: srv }: Props) {
  return (
    <article
      className="srv-card group relative"
      style={{ "--sc": srv.color } as React.CSSProperties}
    >
      {/* ambient glow behind card on hover */}
      <div
        className="pointer-events-none absolute -inset-px -z-10 rounded-[inherit] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.07]"
        style={{ backgroundColor: srv.color }}
      />

      {/* ── Top row: icon + service number ── */}
      <div className="flex items-start justify-between">
        <div
          className="icon-tile relative transition-transform duration-500 group-hover:scale-110"
          style={{
            background: srv.color,
            width: 48,
            height: 48,
            borderRadius: 12,
          }}
        >
          <Icon name={srv.icon} size={22} />
          {/* pulse ring */}
          <span
            className="absolute inset-0 animate-ping rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-20"
            style={{ backgroundColor: srv.color }}
          />
        </div>

        <span
          className="mono font-medium tracking-widest uppercase"
          style={{ fontSize: 10, color: "var(--text-soft)" }}
        >
          {String(srv.id).padStart(2, "0")}
        </span>
      </div>

      {/* ── Title ── */}
      <h3
        className="transition-colors duration-300 group-hover:[color:var(--sc)]"
        style={{ color: "var(--text)" }}
      >
        {srv.title}
      </h3>

      {/* ── Category badge ── */}
      <span
        className="inline-flex w-fit items-center gap-1.5 self-start rounded-md px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider"
        style={{
          background: `color-mix(in oklab, ${srv.color} 12%, var(--surface-2))`,
          color: srv.color,
          border: `1px solid color-mix(in oklab, ${srv.color} 22%, transparent)`,
        }}
      >
        <Icon name={srv.category?.icon ?? "folder"} size={10} />
        {srv.category?.name}
      </span>

      {/* ── Description ── */}
      <p className="srv-card-desc">{srv.description}</p>

      {/* ── Divider ── */}
      <hr
        style={{
          border: "none",
          borderTop: "1px solid var(--border)",
          margin: 0,
        }}
      />

      {/* ── Feature list ── */}
      <ul className="srv-feats">
        {srv.features.map((feat) => (
          <li key={feat}>
            <span className="srv-check">
              <Icon name="check" size={9} stroke={3} />
            </span>
            {feat}
          </li>
        ))}
      </ul>

      {/* ── CTA ── */}
      <Link
        href={srv.slug ? `/services/${srv.slug}` : "/#contact"}
        className="group/btn relative mt-auto inline-flex w-fit items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-[13px] font-semibold transition-all duration-300 hover:-translate-y-px hover:[box-shadow:var(--shadow-md)]"
        style={{
          marginTop: "var(--s-3)",
          background: "var(--surface-2)",
          border: "1px solid var(--border)",
          color: "var(--text)",
        }}
      >
        {/* color wash on hover */}
        <span
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100"
          style={{
            background: `linear-gradient(135deg, color-mix(in oklab, ${srv.color} 15%, transparent), transparent)`,
          }}
        />

        <span className="relative">Get started</span>

        <span
          className="relative flex h-5 w-5 items-center justify-center rounded-full transition-transform duration-300 group-hover/btn:translate-x-0.5"
          style={{
            background: `color-mix(in oklab, ${srv.color} 18%, var(--surface))`,
            color: srv.color,
          }}
        >
          <Icon name="arrow_right" size={11} />
        </span>
      </Link>
    </article>
  );
}
