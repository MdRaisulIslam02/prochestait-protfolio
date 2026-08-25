"use client";

import Container from "./ui/Container";
import Icon from "./Icon";

export default function AboutSection() {
  return (
    <section className="relative flex items-center overflow-hidden bg-(--surface-2) py-12 text-(--text) transition-colors duration-300 lg:py-16">
      <Container width="wide" className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-8 xl:gap-12">
          <div className="flex min-h-\[340px\] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-(--brand-primary) to-(--brand-accent) p-2 shadow-(--shadow-brand)">
            <img
                src="/images/Chat4.png"
                alt="Expert Software Team"
                className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="mb-4 text-[30px] font-extrabold leading-tight text-(--text) sm:text-[32px]">
              Why Every Business in Bangladesh Needs a{" "}
              <span className="text-(--brand-accent)">Digital Marketing</span>
            </h2>

            <p className="mb-4 text-[15px] leading-relaxed text-(--text-muted)">
                Bangladesh’s digital economy is growing at 10.1% annually, reaching $3.80 billion in 2026. Yet most businesses are still losing customers to competitors who show up first on Google, Facebook, and Instagram.
            </p>

            <p className="mb-4 text-[15px] leading-relaxed text-(--text-muted)">
                Low online visibility, poor-quality leads, and wasted advertising budgets are the three biggest blockers for Bangladeshi businesses today. A professional digital marketing company in Bangladesh solves all three, not with guesswork, but with data.
            </p>

            <ul className="mb-7 mt-5 space-y-2">
              {[
                "Performance-Focused Campaign Execution",
                "Fast Execution with Transparent Reporting",
                "Continuous Optimization for Better Results",
                "Long-Term Growth Partnership",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-(--text)"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-(--brand-accent) text-[11px] font-bold text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-(--brand-primary) px-6 py-3 text-sm font-semibold !text-white shadow-(--shadow-brand) transition hover:bg-(--brand-primary-600)"
            >
              Get Free Consultation
              <Icon
                name="arrow_right"
                size={16}
                className="-rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}