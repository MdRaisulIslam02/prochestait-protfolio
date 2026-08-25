"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") ?? "light";
    setTheme(current);
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    setTheme(next);
    try { localStorage.setItem("prochesta-theme", next); } catch {}
  };

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      <Icon name={theme === "dark" ? "sun" : "moon"} size={20} />
    </button>
  );
}
