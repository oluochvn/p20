/*
 * Galactrex UI Components: Galactrex motion primitives (free component)
 * Free to use in your own and client projects. Do not resell or republish it as part of a component library or kit.
 * https://galactrex.com/ui/license/
 */
import type { CSSProperties } from "react";

/** Styles that show an element's background only in a border-wide ring around its edge: put a gradient on an
    absolutely positioned layer with these styles and it becomes a border. `width` is the ring width in px. */
export function ring(width: number): CSSProperties {
  const mask = "linear-gradient(black, black) content-box exclude, linear-gradient(black, black)";
  return { padding: width, WebkitMask: mask, mask };
}

/** Classes for a layer that covers its relative parent exactly, follows its radius and ignores the pointer. */
export const OVERLAY = "pointer-events-none absolute inset-0 rounded-[inherit]";
