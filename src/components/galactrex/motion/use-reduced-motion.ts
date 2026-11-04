"use client";
/*
 * Galactrex UI Components: Galactrex motion primitives (free component)
 * Free to use in your own and client projects. Do not resell or republish it as part of a component library or kit.
 * https://galactrex.com/ui/license/
 */
import { useReducedMotion as useMotionReduced } from "motion/react";

/** True when the visitor asked for less motion. Components then show their final state without travel. */
export function useReducedMotion(): boolean {
  return useMotionReduced() === true;
}
