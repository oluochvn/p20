/*
 * Galactrex UI Components: Galactrex motion primitives (free component)
 * Free to use in your own and client projects. Do not resell or republish it as part of a component library or kit.
 * https://galactrex.com/ui/license/
 */
/* Splits text into words or characters for per-piece animation. Spaces are kept as their own pieces so the
   line breaks where it would have; a piece's `index` counts only the animated pieces, for staggering. */

export type Piece = { text: string; space: boolean; index: number };

export function split(text: string, by: "word" | "char"): Piece[] {
  const raw = by === "word" ? text.split(/(\s+)/) : Array.from(text);
  let index = 0;
  return raw.filter((t) => t !== "").map((t) => {
    const space = /^\s+$/.test(t);
    return { text: t, space, index: space ? -1 : index++ };
  });
}
