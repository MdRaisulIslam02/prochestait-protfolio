"use client";

import { useI18n } from "@/i18n/I18nProvider";
import { useQuoteModal } from "@/components/QuoteModalProvider";
import PageHero, { GradientText } from "@/components/ui/PageHero";
import type { AboutSetting } from "@/types";

interface Props {
  setting: AboutSetting;
}

export default function AboutHero({ setting }: Props) {
  const { t, locale } = useI18n();
  const { openQuoteModal: open } = useQuoteModal();

  const tagline =
    locale === "bn" ? setting.hero_tagline_bn : setting.hero_tagline_en;
  const description =
    locale === "bn"
      ? setting.hero_description_bn
      : setting.hero_description_en;

  const words = tagline?.split(" ") ?? [];
  const splitAt = Math.ceil(words.length * 0.6);
  const plain = words.slice(0, splitAt).join(" ");
  const highlight = words.slice(splitAt).join(" ");

  return (
    <PageHero
      breadcrumb={[
        { label: locale === "bn" ? "আমাদের সম্পর্কে" : "About Us" },
      ]}
      eyebrow={t("about.hero.eyebrow")}
      title={
        highlight ? (
          <>
            {plain}{" "}
            <GradientText>{highlight}</GradientText>
          </>
        ) : (
          tagline
        )
      }
      description={description ?? undefined}
      ctas={[
        {
          label: t("about.hero.cta"),
          onClick: open,
          variant: "primary",
        },
        {
          label: t("about.hero.ctaSecondary"),
          href: "/portfolio",
          variant: "ghost",
        },
      ]}
    />
  );
}
