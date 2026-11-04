"use client";
/*
 * Galactrex UI Components: Galactrex motion primitives (free component)
 * Free to use in your own and client projects. Do not resell or republish it as part of a component library or kit.
 * https://galactrex.com/ui/license/
 */
import { useState, type RefObject } from "react";
import { useInView } from "motion/react";

export type Trigger = "mount" | "inView" | "hover" | "manual";

/** One answer to "should this play now?" for every component that starts on mount, on arrival, on hover or on
    a prop. Spread `handlers` on the element; `round` changes each time a hover should replay, and `rest` is true
    while nothing has played yet on a hover trigger (show the final state without animating). */
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
