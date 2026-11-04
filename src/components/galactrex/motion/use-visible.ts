"use client";
/*
 * Galactrex UI Components: Galactrex motion primitives (free component)
 * Free to use in your own and client projects. Do not resell or republish it as part of a component library or kit.
 * https://galactrex.com/ui/license/
 */
import { useInView } from "motion/react";
import type { RefObject } from "react";

/** True while any part of the element is on screen. Continuous effects pause offscreen to save the frame budget. */
export function useVisible(ref: RefObject<Element | null>): boolean {
  return useInView(ref, { amount: "some" });
}
