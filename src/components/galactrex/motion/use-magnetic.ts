"use client";
/*
 * Galactrex UI Components: Galactrex motion primitives (free component)
 * Free to use in your own and client projects. Do not resell or republish it as part of a component library or kit.
 * https://galactrex.com/ui/license/
 */
import { useSpring, useTransform, type MotionValue } from "motion/react";
import { springs } from "./springs";
import type { PointerTrack } from "./use-pointer";

/** Turns a tracked pointer into a spring offset toward it. `strength` is the largest pull in px. */
export function useMagnetic(pointer: PointerTrack, strength: number, enabled = true): { x: MotionValue<number>; y: MotionValue<number> } {
  const tx = useTransform(pointer.nx, (v) => (enabled ? v * strength : 0));
  const ty = useTransform(pointer.ny, (v) => (enabled ? v * strength : 0));
  return { x: useSpring(tx, springs.soft), y: useSpring(ty, springs.soft) };
}
