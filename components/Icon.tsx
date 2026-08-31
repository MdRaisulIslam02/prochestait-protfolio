import { SVGProps } from "react";

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "stroke"> {
  name: string;
  size?: number;
  stroke?: number;
}

const paths: Record<string, React.ReactNode> = {
  arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
  trendingUp: <path d="M22 7L13.5 15.5L8.5 10.5L2 17M16 7h6v6" />,
  check: <path d="M20 6L9 17l-5-5" />,
  star: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />,
  sparkle: <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3zM19 14l.8 2.4L22 17l-2.2.6L19 20l-.8-2.4L16 17l2.2-.6L19 14z" />,
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  shield: <path d="M12 2l8 3v7c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5l8-3z" />,
  edit: <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />,
  headset: <><path d="M3 14v-3a9 9 0 0118 0v3" /><path d="M21 14a2 2 0 01-2 2h-1v-6h1a2 2 0 012 2v2zM3 14a2 2 0 002 2h1v-6H5a2 2 0 00-2 2v2z" /><path d="M18 16v1a3 3 0 01-3 3h-2" /></>,
  cart: <><circle cx="9" cy="21" r="1.5" /><circle cx="18" cy="21" r="1.5" /><path d="M3 3h2l2.4 12.3a2 2 0 002 1.7h8.5a2 2 0 002-1.6L21 7H6" /></>,
  fraud: <><circle cx="12" cy="12" r="10" /><path d="M5 5l14 14" /></>,
  ban: <><circle cx="12" cy="12" r="10" /><path d="M5 5l14 14" /></>,
  file: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /></>,
  truck: <><rect x="1" y="6" width="13" height="11" rx="1" /><path d="M14 9h4l3 4v4h-7" /><circle cx="6" cy="19" r="2" /><circle cx="18" cy="19" r="2" /></>,
  coin: <><circle cx="12" cy="12" r="10" /><path d="M12 6v12M9 9h4.5a2 2 0 010 4H10a2 2 0 000 4H15" /></>,
  list: <><path d="M8 6h13M8 12h13M8 18h13" /><circle cx="3.5" cy="6" r="1" /><circle cx="3.5" cy="12" r="1" /><circle cx="3.5" cy="18" r="1" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  chart: <><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></>,
  box: <><path d="M21 16V8a2 2 0 00-1-1.7l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.7l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /><path d="M3.3 7L12 12l8.7-5M12 22V12" /></>,
  invoice: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></>,
  globe: <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" /></>,
  code: <path d="M8 6L2 12l6 6M16 6l6 6-6 6" />,
  phone: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></>,
  server: <><rect x="3" y="4" width="18" height="6" rx="1" /><rect x="3" y="14" width="18" height="6" rx="1" /><circle cx="7" cy="7" r="0.5" fill="currentColor" /><circle cx="7" cy="17" r="0.5" fill="currentColor" /></>,
  palette: <><circle cx="12" cy="12" r="10" /><circle cx="7.5" cy="10.5" r="1" fill="currentColor" stroke="none" /><circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" /><circle cx="16.5" cy="10.5" r="1" fill="currentColor" stroke="none" /><path d="M12 22a3 3 0 003-3 2 2 0 012-2h2a3 3 0 003-3" /></>,
  megaphone: <><path d="M3 11v2a1 1 0 001 1h3l5 4V6L7 10H4a1 1 0 00-1 1z" /><path d="M16 8a5 5 0 010 8" /></>,
  lock: <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 018 0v4" /></>,
  lightning: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
  mobile: <><rect x="6" y="2" width="12" height="20" rx="2" /><line x1="11" y1="18" x2="13" y2="18" /></>,
  seo: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-5-5" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></>,
  moon: <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />,
  dot: <circle cx="12" cy="12" r="4" />,
  award: <><circle cx="12" cy="8" r="6" /><path d="M9 13l-2 9 5-3 5 3-2-9" /></>,
  play: <path d="M8 5v14l11-7-11-7z" />,
  pause: <><path d="M8 5v14" /><path d="M16 5v14" /></>,
  arrow_right: <path d="M5 12h14M13 5l7 7-7 7" />,
  arrow_left: <path d="M19 12H5M11 19l-7-7 7-7" />,
  plus: <><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></>,
  facebook: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />,
  linkedin: <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 10-4 0v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
  youtube: <><path d="M22 8.5a2.5 2.5 0 00-1.8-1.8C18.4 6 12 6 12 6s-6.4 0-8.2.7A2.5 2.5 0 002 8.5C1.5 10.3 1.5 12 1.5 12s0 1.7.5 3.5a2.5 2.5 0 001.8 1.8C5.6 18 12 18 12 18s6.4 0 8.2-.7A2.5 2.5 0 0022 15.5c.5-1.8.5-3.5.5-3.5s0-1.7-.5-3.5z" /><path d="M10 15l5-3-5-3z" fill="currentColor" stroke="none" /></>,
  whatsapp: <path d="M3 21l1.5-5A8 8 0 1112 19a8 8 0 01-3.5-.8L3 21z" />,
  instagram: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></>,
  store: <><path d="M20 7h1v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7h1" /><path d="M16 12a4 4 0 0 1-8 0" /><path d="M2 3h20v4H2z" /></>,
  shop: <><path d="M20 7h1v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7h1" /><path d="M16 12a4 4 0 0 1-8 0" /><path d="M2 3h20v4H2z" /></>, // সেফটির জন্য shop এবং store দুটোই এক রাখা হলো
  book: <><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5z" /><path d="M6 6h10M6 10h10" /></>,
  layout: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></>,
  x: <path d="M18 6L6 18M6 6l12 12" />,
  map_pin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>,
  mail: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
};

export default function Icon({ name, size = 22, stroke = 2, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
