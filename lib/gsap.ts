/**
 * Central GSAP setup — import from here in every component instead of
 * importing directly from "gsap" or "@gsap/react".  Plugins are
 * registered once at module evaluation time; duplicate calls are no-ops.
 */
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export { gsap, useGSAP, ScrollTrigger };
