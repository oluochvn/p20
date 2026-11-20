"use client";
import { useState, type RefObject } from "react";
import { useInView } from "motion/react";

export type Trigger = "mount" | "inView" | "hover" | "manual";
export function useTrigger(ref: RefObject<Element | null>, trigger: Trigger, active?: boolean) {
  const seen = useInView(ref, { once: true, amount: 0.5 });
  const [hovers, setHovers] = useState(0);
  // hover replays an entrance; before the first hover the content simply rests in place
  const on = trigger === "mount" || (trigger === "inView" && seen) || trigger === "hover" || (trigger === "manual" && !!active);
  const round = trigger === "hover" ? hovers : on ? 1 : 0;
  const rest = trigger === "hover" && hovers === 0;
  const handlers = trigger === "hover"
    ? { onPointerEnter: (e: { pointerType: string }) => { if (e.pointerType !== "touch") setHovers((h) => h + 1); }, onFocus: () => setHovers((h) => h + 1) }
    : {};
  return { on, round, rest, handlers };
}
