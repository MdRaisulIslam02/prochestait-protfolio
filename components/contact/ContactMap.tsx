"use client";

import Reveal from "@/components/ui/Reveal";
import type { ContactSetting } from "@/types";

interface Props {
  setting: ContactSetting;
}

const PinIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

export default function ContactMap({ setting }: Props) {
  if (!setting.map_embed_url && !setting.office_address_en) return null;

  return (
    <section className="bg-(--bg) py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal variant="fade-up">
          {setting.map_embed_url ? (
            <div className="overflow-hidden rounded-2xl border border-(--border) shadow-sm">
              <iframe
                src={setting.map_embed_url}
                width="100%"
                height="420"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          ) : (
            <div className="flex min-h-[280px] flex-col items-center justify-center gap-5 rounded-2xl border border-(--border) bg-(--surface) p-10 text-center">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-2xl text-(--brand-primary)"
                style={{ background: "color-mix(in oklab, var(--brand-primary) 10%, transparent)" }}
              >
                <PinIcon />
              </div>
              <div>
                <p className="text-lg font-bold text-(--text)">Sector-10, Uttara</p>
                <p className="mt-1 text-sm text-(--text-muted)">Dhaka, Bangladesh</p>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
