"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Layers3, Sparkles, Tag } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string | null;
  link: string | null;
  tags: string[];
  slug: string;
  featured?: boolean;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-(--border) bg-(--surface) shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-(--border-strong)">
      <Link
        href={`/portfolio/${project.slug}`}
        className="block"
        aria-label={`View details of ${project.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-(--surface-2)">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              width={700}
              height={525}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-(--surface-2)" />
          )}

          <div className="absolute inset-x-4 top-4 flex items-center justify-between">
            {project.featured ? (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-(--brand-accent)/30 bg-(--surface)/90 px-3 py-1 text-xs font-bold text-(--text) shadow-sm backdrop-blur">
                <Sparkles size={12} className="text-(--brand-accent)" />
                Trending
              </span>
            ) : (
              <span />
            )}

            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--border) bg-(--surface)/90 text-(--text) shadow-sm backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:bg-(--brand-primary) group-hover:text-white group-hover:border-(--brand-primary)">
              <ArrowUpRight size={16} />
            </span>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-(--surface-2) border border-(--border) px-2.5 py-0.5 text-[11px] font-semibold text-(--text-muted)"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="line-clamp-2 text-[17px] font-bold leading-snug text-(--text)">
          {project.title}
        </h2>

        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-(--text-muted)">
          {project.description}
        </p>

        <div className="mt-5 flex items-center gap-2">
          <Link
            href={`/portfolio/${project.slug}`}
            aria-label="View project details"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-(--border) bg-(--surface-2) text-(--text-muted) transition-colors hover:border-(--brand-primary)/50 hover:bg-(--brand-primary)/10 hover:text-(--brand-primary)"
          >
            <Layers3 size={15} />
          </Link>

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-(--border) bg-(--surface-2) text-sm font-semibold text-(--text-muted) transition-colors hover:border-(--brand-primary)/50 hover:bg-(--brand-primary)/10 hover:text-(--brand-primary)"
            >
              Live Preview
              <ArrowUpRight size={14} />
            </a>
          ) : (
            <span className="inline-flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-(--border) bg-(--surface-2) text-sm font-semibold text-(--text-muted) opacity-50 cursor-not-allowed">
              Live Preview
            </span>
          )}
        </div>

        <button
          type="button"
          className="mt-2.5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-(--brand-primary) text-sm font-semibold text-white transition-colors hover:bg-(--brand-primary-600) shadow-sm"
        >
          <Tag size={14} />
          Get Offer Price
        </button>
      </div>
    </article>
  );
}
