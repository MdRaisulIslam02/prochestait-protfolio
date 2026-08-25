"use client";

import Icon from "./Icon";
import Reveal from "@/components/ui/Reveal";
import Container from "./ui/Container";
import { useI18n } from "@/i18n/I18nProvider";

export default function Recognized() {
  const { t } = useI18n();

  return (
    <section className="py-8 lg:py-12 relative overflow-hidden text-(--text) transition-colors duration-300">
      <Container width="wide">
        <Reveal variant="scale" className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 rounded-[24px] border border-(--border) bg-(--surface) p-6 shadow-2xl lg:flex-row lg:px-10 lg:py-8 backdrop-blur-md">
          
          {/* Background glow */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-[24px]">
             <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-(--brand-accent) opacity-10 blur-[60px]"></div>
             <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-(--brand-primary) opacity-10 blur-[60px]"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--brand-primary),var(--brand-accent))] text-white shadow-lg">
              <Icon name="award" size={32} />
            </div>
            <div>
              <h3 className="mb-2 text-2xl font-bold md:text-[28px] leading-tight">
                {t("recognized.titlePrefix")}{" "}
                <span className="bg-[linear-gradient(90deg,var(--brand-accent),var(--brand-primary))] bg-clip-text text-transparent">
                  {t("recognized.highlight")}
                </span>{" "}
                {t("recognized.titleSuffix")}
              </h3>
              <p className="text-[14px] text-(--text-muted) md:text-[15px] max-w-[55ch]">
                {t("recognized.description")}
              </p>
            </div>
          </div>

          <div className="relative z-10 flex w-full items-center justify-around gap-4 rounded-xl bg-(--surface-2)/60 p-5 lg:w-auto lg:gap-8 border border-(--border)">
            <div className="flex flex-col items-center">
              <strong className="text-[22px] font-extrabold text-(--text) md:text-[26px] leading-none">4400+</strong>
              <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-(--text-muted) md:text-[12px]">{t("recognized.stats.projects")}</span>
            </div>
            <div className="h-10 w-[1px] bg-(--border)"></div>
            <div className="flex flex-col items-center">
              <strong className="text-[22px] font-extrabold text-(--text) md:text-[26px] leading-none">8 yr</strong>
              <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-(--text-muted) md:text-[12px]">{t("recognized.stats.building")}</span>
            </div>
            <div className="h-10 w-[1px] bg-(--border)"></div>
            <div className="flex flex-col items-center">
              <strong className="text-[22px] font-extrabold text-(--text) md:text-[26px] leading-none">98%</strong>
              <span className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-(--text-muted) md:text-[12px]">{t("recognized.stats.retention")}</span>
            </div>
          </div>

        </Reveal>
      </Container>
    </section>
  );
}
