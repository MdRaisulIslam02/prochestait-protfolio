"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 900);
    const t2 = setTimeout(() => setGone(true), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`preloader${hiding ? " preloader--out" : ""}`}
      role="status"
      aria-label="Loading Prochesta IT"
    >
      <div className="preloader__glow" />
      <div className="preloader__spinner">
        <div className="preloader__ring preloader__ring--a" />
        <div className="preloader__ring preloader__ring--b" />
        <div className="preloader__ring preloader__ring--c" />
        <div className="preloader__logo">
          <Image
            src="/images/company/favicon.png"
            alt=""
            width={64}
            height={64}
            priority
          />
        </div>
      </div>
      <p className="preloader__label">Prochesta IT</p>
    </div>
  );
}
