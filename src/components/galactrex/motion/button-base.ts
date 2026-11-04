/*
 * Galactrex UI Components: Galactrex motion primitives (free component)
 * Free to use in your own and client projects. Do not resell or republish it as part of a component library or kit.
 * https://galactrex.com/ui/license/
 */
/* Shared class strings for Galactrex buttons. Shape and focus go on the <button>; padding, type and colour go on
   the inner label, where a host's CSS reset cannot strip them (resets commonly zero a button's padding,
   background and colour). */

export const BUTTON_ROOT =
  "group/btn relative isolate inline-flex select-none items-center justify-center overflow-hidden rounded-md outline-none focus-visible:ring-2 focus-visible:ring-gxui-ink focus-visible:ring-offset-2 focus-visible:ring-offset-gxui-bg disabled:pointer-events-none disabled:opacity-50";

export const BUTTON_LABEL = "relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium";

/** solid: accent fill; outline: line border; ghost: no border until hover */
export const BUTTON_TONE = {
  solid: { root: "", fill: "bg-gxui-accent transition-opacity group-hover/btn:opacity-90", label: "text-gxui-on-accent" },
  outline: { root: "border border-gxui-line hover:border-gxui-ink transition-colors", fill: "", label: "text-gxui-ink" },
  ghost: { root: "", fill: "bg-gxui-raised opacity-0 transition-opacity group-hover/btn:opacity-100", label: "text-gxui-ink" },
} as const;

export type ButtonTone = keyof typeof BUTTON_TONE;

/** The fill layer behind a label: sits under the content and follows the button's radius. */
export const BUTTON_FILL = "absolute inset-0 -z-10 rounded-[inherit]";
