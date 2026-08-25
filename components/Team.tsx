"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import type { TeamMember } from "@/types";

export default function TeamCards({ members }: { members: TeamMember[] }) {
  return (
    <section className="bg-(--bg-soft) py-24 text-(--text) transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-(--brand-primary)/30 bg-(--brand-primary)/5 text-(--brand-primary) text-xs tracking-[0.35em] uppercase font-medium">
            Our Team
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold mt-6 leading-tight text-(--text)">
            The minds behind{" "}
            <span className="text-(--brand-accent) italic">the product</span>
          </h2>

          <p className="text-(--text-muted) mt-5 max-w-2xl mx-auto text-sm md:text-base">
            Designers, engineers, and strategists building things that actually ship and scale.
          </p>
        </div>

        {/* SLIDER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop={members.length >= 6}
          spaceBetween={24}
          slidesPerView={3}
          slidesPerGroup={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={800}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {members.map((m) => (
            <SwiperSlide key={m.id}>
              <div className="relative group rounded-2xl p-7 bg-(--surface) border border-(--border) hover:border-(--border-strong) hover:shadow-xl transition-all duration-300 overflow-hidden">

                {/* ID */}
                <span className="absolute top-5 right-5 text-(--text-muted) text-sm font-semibold tracking-widest opacity-60">
                  {String(m.sort_order || m.id).padStart(2, "0")}
                </span>

                {/* AVATAR */}
                <div className="flex justify-center mb-5">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-(--brand-primary)/50 group-hover:scale-110 transition duration-300 flex items-center justify-center bg-(--surface-2)">
                    {m.image ? (
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-2xl font-bold text-(--text-muted)">{m.initials}</span>
                    )}
                  </div>
                </div>

                {/* NAME */}
                <h3 className="text-center text-xl font-semibold text-(--text)">
                  {m.name}
                </h3>

                {/* ROLE */}
                <p className="text-center text-sm text-(--text-muted) mt-1">
                  {m.role}
                </p>

                {/* DEPARTMENT */}
                <div className="flex justify-center mt-4">
                  <span className="text-xs px-4 py-1 rounded-full bg-(--brand-primary)/10 border border-(--brand-primary)/20 text-(--brand-primary) font-medium">
                    {m.department}
                  </span>
                </div>

                {/* SKILLS */}
                {m.skills && m.skills.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2 mt-5">
                    {m.skills.map((s, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-3 py-1 rounded-md bg-(--surface-2) border border-(--border) text-(--text-muted)"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

                <div className="h-px bg-(--border) my-6" />

                {/* LINKS */}
                <div className="flex justify-center gap-3">
                  {m.facebook && (
                    <a
                      href={m.facebook}
                      className="px-4 py-2 text-xs rounded-lg border border-(--border) text-(--text-muted) hover:border-(--brand-primary)/50 hover:bg-(--brand-primary)/8 hover:text-(--brand-primary) transition duration-200"
                    >
                      Facebook
                    </a>
                  )}
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      className="px-4 py-2 text-xs rounded-lg border border-(--border) text-(--text-muted) hover:border-(--brand-primary)/50 hover:bg-(--brand-primary)/8 hover:text-(--brand-primary) transition duration-200"
                    >
                      LinkedIn
                    </a>
                  )}
                </div>

                {/* hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
                  style={{ background: "radial-gradient(circle at center, color-mix(in oklab, var(--brand-primary) 6%, transparent), transparent 65%)" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
