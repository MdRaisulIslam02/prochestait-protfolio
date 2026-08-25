import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Blog — Prochesta IT",
  description:
    "Insights, tutorials, and updates from the Prochesta IT engineering team.",
};

export default function BlogPage() {
  return (
    <main>
      <section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Latest Posts"
            title="Blog"
            subtitle="Engineering insights and company updates from the Prochesta IT team."
          />
        </Container>
      </section>
    </main>
  );
}
