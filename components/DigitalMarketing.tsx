"use client";

import React from "react";

const services = [
  {
    type: "ads",
    title: "Facebook Ads Management",
    description:
      "Campaign setup, targeting, creatives, A/B testing এবং daily optimization।",
  },
  {
    type: "code",
    title: "Meta Pixel + CAPI Integration",
    description: "Server-side tracking দিয়ে iOS14+ এর পরেও accurate data পান।",
  },
  {
    type: "report",
    title: "Monthly Report & Strategy",
    description: "প্রতি মাসে detailed report এবং next month-এর plan।",
  },
];

const ServiceIcon = ({ type }: { type: string }) => {
  if (type === "ads") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 13v-2l11-5v12L4 13Z" />
        <path d="m4 13 2 6h3l-2-5" />
        <path d="M18 9a4 4 0 0 1 0 6" />
      </svg>
    );
  }

  if (type === "code") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-9 w-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18-6-6 6-6" />
        <path d="m15 6 6 6-6 6" />
        <path d="m14 3-4 18" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-9 w-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 3h14v18H5z" />
      <path d="m8 16 3-3 2 2 4-5" />
      <path d="M8 7h5" />
    </svg>
  );
};

const MarketingSection = () => {
  return (
    <section
      id="marketing"
      className="relative overflow-hidden bg-[#050817] px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8"
    >
      {/* Subtle background light */}
      <div className="pointer-events-none absolute left-[10%] top-0 h-[350px] w-[500px] rounded-full bg-[#0037d8]/[0.09] blur-[130px]" />

      <div className="relative mx-auto max-w-[1320px]">
        {/* Intro */}
        <div className="mx-auto max-w-[900px] text-center">
          <div className="inline-flex items-center gap-2.5 rounded-lg border border-[#12d7df]/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#25f2f4]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#25f2f4] shadow-[0_0_12px_#25f2f4]" />
            Digital Marketing
          </div>

          <h2 className="mt-7 whitespace-nowrap text-[32px] font-extrabold leading-[1.05] tracking-[-0.05em] text-white sm:text-[44px] lg:text-[60px]">
            Website আছে, <span className="text-[#25f2f4]">customer নেই?</span>
          </h2>

          <p className="mx-auto text-center mt-6 max-w-[620px] text-base leading-8 text-slate-400 sm:text-lg">
            আমরা আপনার business-কে Facebook, Google ও SEO দিয়ে সামনে নিয়ে যাই।
            শুধু clicks না — real sales।
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0037d8] to-[#12d7df] px-7 font-semibold text-white shadow-[0_15px_35px_rgba(0,55,216,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,55,216,0.3)]"
            >
              <span>🚀</span>
              Marketing শুরু করুন
            </a>

            <a
              href="#case-study"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-[#12d7df]/60 bg-[#080c1b] px-7 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-[#12d7df] hover:bg-[#12d7df]/10"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-[#25f2f4]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h7l2 2h9v11H3z" />
              </svg>
              Case Study দেখুন
            </a>
          </div>
        </div>

        {/* Service cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group flex min-h-[120px] items-start gap-5 rounded-2xl border border-[#12d7df]/30 bg-gradient-to-br from-[#0f162c] to-[#080d1d] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#12d7df]/60 md:items-center md:p-6"
            >
              <div className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-[14px] border border-[#12d7df]/25 bg-[#0b1125] text-[#25f2f4] transition duration-300 group-hover:border-[#12d7df]/50 group-hover:bg-[#12d7df]/10">
                <ServiceIcon type={service.type} />
              </div>

              <div>
                <h3 className="text-base font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Analytics Dashboard */}
        <div className="mt-5 grid overflow-hidden rounded-2xl border border-[#12d7df]/30 bg-gradient-to-br from-[#0c1225] to-[#080d1d] lg:grid-cols-[1.08fr_1fr]">
          {/* Chart */}
          <div className="border-b border-[#12d7df]/30 p-5 sm:p-7 lg:border-b-0 lg:border-r">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-white">
                  Campaign Performance
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#25f2f4]" />
                    ROAS (x)
                  </span>

                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0037d8]" />
                    Revenue (৳)
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="hidden rounded-lg border border-slate-600/40 bg-[#0c1327] px-4 py-2 text-xs text-slate-300 sm:block"
              >
                Last 30 Days⌄
              </button>
            </div>

            <div className="mt-7 flex h-[220px] sm:h-[250px]">
              {/* Y-axis labels */}
              <div className="flex w-12 flex-shrink-0 flex-col justify-between pb-2 text-[11px] text-slate-500">
                <span>4.0x</span>
                <span>3.0x</span>
                <span>2.0x</span>
                <span>1.0x</span>
                <span>0</span>
              </div>

              <svg
                viewBox="0 0 720 220"
                preserveAspectRatio="none"
                className="h-full w-full overflow-visible"
                aria-label="Campaign performance chart"
              >
                {/* Grid lines */}
                <g
                  fill="none"
                  stroke="rgba(148,163,184,0.17)"
                  strokeWidth="1"
                  strokeDasharray="4 5"
                >
                  <path d="M0 12H720" />
                  <path d="M0 62H720" />
                  <path d="M0 112H720" />
                  <path d="M0 162H720" />
                  <path d="M0 212H720" />
                </g>

                {/* Purple line */}
                <path
                  d="M5 186 C45 180 55 166 85 168 S130 137 165 141 S210 119 245 126 S285 109 325 117 S375 77 414 86 S466 54 503 68 S550 43 585 52 S630 27 675 32 S704 18 716 16"
                  fill="none"
                  stroke="#25f2f4"
                  strokeWidth="3"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Orange line */}
                <path
                  d="M5 203 C55 199 63 190 92 193 S145 179 173 183 S222 165 253 171 S305 151 337 157 S385 121 423 130 S466 105 503 113 S552 88 588 96 S626 72 657 76 S691 50 716 55"
                  fill="none"
                  stroke="#0037d8"
                  strokeWidth="3"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />

                {/* Purple points */}
                {[
                  [5, 186],
                  [165, 141],
                  [325, 117],
                  [503, 68],
                  [675, 32],
                  [716, 16],
                ].map(([cx, cy], index) => (
                  <circle
                    key={`purple-${index}`}
                    cx={cx}
                    cy={cy}
                    r="5"
                    fill="#0c1225"
                    stroke="#25f2f4"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}

                {/* Orange points */}
                {[
                  [5, 203],
                  [173, 183],
                  [337, 157],
                  [503, 113],
                  [657, 76],
                  [716, 55],
                ].map(([cx, cy], index) => (
                  <circle
                    key={`orange-${index}`}
                    cx={cx}
                    cy={cy}
                    r="5"
                    fill="#0c1225"
                    stroke="#0037d8"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </svg>
            </div>

            <div className="ml-12 mt-3 flex justify-between text-[10px] text-slate-500 sm:text-xs">
              <span>May 6</span>
              <span className="hidden sm:block">May 11</span>
              <span>May 16</span>
              <span className="hidden sm:block">May 21</span>
              <span>May 26</span>
              <span className="hidden sm:block">May 31</span>
              <span>Jun 5</span>
            </div>
          </div>

          {/* Performance metrics */}
          <div className="p-5 sm:p-7">
            <h3 className="font-semibold text-white">Performance Overview</h3>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-[14px] border border-slate-500/20 bg-[#0b1125]/80 p-5">
                <div className="text-4xl font-extrabold tracking-[-0.05em] text-[#25f2f4]">
                  3.2×
                </div>
                <div className="mt-3 font-semibold text-white">ROAS</div>
                <div className="mt-1 text-[11px] text-slate-500">
                  Return on Ad Spend
                </div>
              </div>

              <div className="rounded-[14px] border border-slate-500/20 bg-[#0b1125]/80 p-5">
                <div className="text-4xl font-extrabold tracking-[-0.05em] text-[#16d981]">
                  100%
                </div>
                <div className="mt-3 font-semibold text-white">Event Match</div>
                <div className="mt-1 text-[11px] text-slate-500">
                  CAPI Match Quality
                </div>
              </div>

              <div className="rounded-[14px] border border-slate-500/20 bg-[#0b1125]/80 p-5">
                <div className="text-4xl font-extrabold tracking-[-0.05em] text-[#12d7df]">
                  ৳4.8L
                </div>
                <div className="mt-3 font-semibold text-white">Revenue</div>
                <div className="mt-1 text-[11px] text-slate-500">
                  Monthly Revenue
                </div>
              </div>
            </div>

            {/* Campaign status */}
            <div className="mt-4 grid items-center gap-4 rounded-[14px] border border-slate-500/20 bg-[#0b1125]/80 p-4 sm:grid-cols-[42px_1fr_1.3fr]">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-emerald-400/15 font-bold text-[#16d981]">
                ✓
              </div>

              <div>
                <span className="block text-[10px] text-slate-500">
                  Campaign Status
                </span>
                <strong className="mt-1 block text-sm font-semibold text-[#16d981]">
                  Active &amp; Optimizing
                </strong>
              </div>

              <p className="border-t border-slate-500/20 pt-4 text-xs leading-5 text-slate-500 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                All systems running smoothly.
                <br />
                Performance improving steadily.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
