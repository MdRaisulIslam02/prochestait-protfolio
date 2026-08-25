import type { Metadata } from "next";
import { aboutApi, teamApi } from "@/lib/api";
import { STATIC_ABOUT } from "@/lib/about-fallback";
import { STATIC_TEAM } from "@/lib/team-fallback";
import AboutHero from "@/components/about/AboutHero";
import AboutMission from "@/components/about/AboutMission";
import AboutStats from "@/components/about/AboutStats";
import AboutSpecializations from "@/components/about/AboutSpecializations";
import AboutWorks from "@/components/about/AboutWorks";
import AboutOffice from "@/components/about/AboutOffice";
import AboutTeam from "@/components/about/AboutTeam";
import CtaSection from "@/components/CtaSection";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About Us — Prochesta IT",
  description:
    "8 years of building e-commerce, LMS, web apps, and enterprise software in Bangladesh. Meet our team, our mission, and find our office.",
};

export default async function AboutPage() {
  let setting = STATIC_ABOUT;
  let team = STATIC_TEAM;

  try {
    const res = await aboutApi.get();
    if (res?.data) setting = res.data;
  } catch {
    // use fallback
  }

  try {
    const res = await teamApi.list();
    if (res?.data && Array.isArray(res.data) && res.data.length > 0) team = res.data;
  } catch {
    // use fallback
  }

  return (
    <main>
      <AboutHero setting={setting} />
      <AboutMission setting={setting} />
      <AboutStats setting={setting} />
      <AboutSpecializations />
      <AboutWorks />
      <AboutTeam members={team} />
      <AboutOffice setting={setting} />
      <CtaSection />
    </main>
  );
}
