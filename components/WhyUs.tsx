// "use client";

// import { useRef } from "react";
// import { gsap, useGSAP } from "@/lib/gsap";
// import Icon from "./Icon";
// import Container from "./ui/Container";
// import ButtonLink from "./ui/ButtonLink";
// import { useI18n } from "@/i18n/I18nProvider";

// export default function WhyUs() {
//   const { t } = useI18n();

//   const TILES = [
//     { n: "cart", l: t("whyUs.tiles.ecommerce"), c: "#a78bfa" },
//     { n: "lightning", l: t("whyUs.tiles.fast"), c: "#34d399" },
//     { n: "mobile", l: t("whyUs.tiles.mobile"), c: "#a78bfa" },
//     { n: "coin", l: t("whyUs.tiles.payment"), c: "#fbbf24" },
//   ];

//   const sectionRef = useRef<HTMLElement>(null);
//   const leftColRef = useRef<HTMLDivElement>(null);
//   const rightColRef = useRef<HTMLDivElement>(null);

//   useGSAP(
//     () => {
//       // Setup initial states
//       gsap.set(leftColRef.current?.children || [], { opacity: 0, y: 30 });
//       gsap.set(rightColRef.current, { opacity: 0, scale: 0.95, y: 40 });

//       // Create scroll trigger for left column items
//       gsap.to(leftColRef.current?.children || [], {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         stagger: 0.15,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//         },
//       });

//       // Create scroll trigger for right column
//       gsap.to(rightColRef.current, {
//         opacity: 1,
//         scale: 1,
//         y: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//         },
//       });
//     },
//     { scope: sectionRef }
//   );

//   return (
//     <section ref={sectionRef} id="why" className="relative flex items-center overflow-hidden py-12 lg:py-16 text-(--text) transition-colors duration-300">
//       <Container width="wide" className="relative z-10">
//         <div className="grid items-center gap-12 lg:gap-8 xl:gap-12 lg:grid-cols-[1.1fr_1fr]">
          
//           {/* ── Left Column ── */}
//           <div ref={leftColRef} className="flex flex-col items-start justify-center">
//             <span className="mb-4 inline-flex items-center rounded-full bg-(--brand-primary)/10 px-3 py-1 text-sm font-medium text-(--brand-primary)">
//               {t("whyUs.eyebrow")}
//             </span>
//             <h2 className="mb-6 text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.12] tracking-tight text-(--text)">
//               {t("whyUs.title.part1")}{" "}
//               <span className="inline-block bg-[linear-gradient(90deg,var(--brand-accent),var(--brand-primary))] bg-clip-text text-transparent">
//                 {t("whyUs.title.highlight")}
//               </span>
//               {t("whyUs.title.part2")}
//             </h2>
//             <p className="mb-10 max-w-[52ch] text-[15px] lg:text-[17px] leading-relaxed text-(--text-muted)">
//               {t("whyUs.description")}
//             </p>
//             <ButtonLink
//               href="/portfolio"
//               variant="primary"
//               size="lg"
//               shape="rounded"
//               className="group text-[13px] lg:text-sm"
//             >
//               {t("whyUs.cta")}
//               <Icon
//                 name="arrow_right"
//                 size={16}
//                 className="-rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
//               />
//             </ButtonLink>
//           </div>

//           {/* ── Right Column — Visual Composition ── */}
//           <div ref={rightColRef} className="relative mx-auto mt-12 w-full max-w-[440px] lg:mt-0 lg:max-w-[500px]">
//             {/* Background elements */}
//             <div className="absolute -left-12 -top-12 h-64 w-64 rounded-full bg-(--brand-primary) opacity-20 blur-[80px] mix-blend-normal" />
//             <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-(--brand-accent) opacity-20 blur-[80px] mix-blend-normal" />

//             {/* Mock Card */}
//             <div className="relative z-10 rounded-[24px] border border-(--border) bg-(--surface) p-6 shadow-2xl backdrop-blur-xl">
//               <div className="mb-6 flex items-center justify-between border-b border-(--border) pb-4">
//                 <span className="rounded-full bg-(--surface-2) px-3 py-1 text-sm font-semibold text-(--text)">
//                   {t("whyUs.mockPill")}
//                 </span>
//                 <span className="font-mono text-xs text-(--text-muted)">
//                   {t("whyUs.mockMeta")}
//                 </span>
//               </div>
              
//               <div className="mb-6 grid grid-cols-2 gap-4">
//                 {TILES.map((t, i) => (
//                   <div key={i} className="group flex flex-col items-center gap-3 rounded-2xl bg-(--surface-2) p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
//                     <div
//                       className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
//                       style={{ background: t.c + "22", color: t.c }}
//                     >
//                       <Icon name={t.n as any} size={24} />
//                     </div>
//                     <span className="text-sm font-medium text-(--text)">{t.l}</span>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="mb-4 flex flex-wrap items-center justify-center gap-4 rounded-xl bg-(--surface-2)/50 p-3 text-sm text-(--text-muted)">
//                 <span className="flex items-center gap-2">
//                   <Icon name="shield" size={16} className="text-[#34d399]" />
//                   {t("whyUs.footer.ssl")}
//                 </span>
//                 <span className="flex items-center gap-2">
//                   <Icon name="seo" size={16} className="text-[#fbbf24]" />
//                   {t("whyUs.footer.seo")}
//                 </span>
//               </div>
              
//               <div className="text-center font-mono text-[11px] text-(--text-muted)/70">
//                 {t("whyUs.metaRow")}
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </Container>
//     </section>
//   );
// }
