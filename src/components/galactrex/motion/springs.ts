/*
 * Galactrex UI Components: Galactrex motion primitives (free component)
 * Free to use in your own and client projects. Do not resell or republish it as part of a component library or kit.
 * https://galactrex.com/ui/license/
 */
/* Spring presets shared by every Galactrex component, so motion feels like one system. */
export const springs = {
  /** quick, no overshoot: hover states, pointer following */
  snappy: { type: "spring", stiffness: 420, damping: 34, mass: 0.6 },
  /** soft settle with a little life: magnetic pulls, cards */
  soft: { type: "spring", stiffness: 180, damping: 18, mass: 0.8 },
  /** heavier return: things that should feel weighted */
  heavy: { type: "spring", stiffness: 120, damping: 20, mass: 1.2 },
  /** light, critically damped trailing: a glow or spotlight that glides after the pointer instead of jumping */
  follow: { stiffness: 260, damping: 28, mass: 0.5 },
} as const;

/* Easing curves shared by every timed animation, so arrivals and loops move as one system.
   glide: a long, soft deceleration for anything arriving, revealing or answering a hover.
   flow: an even in-and-out for anything that breathes, sways or loops back and forth.
   (Constant-speed loops, like a marquee or a travelling beam, stay linear.) */
export const curves = {
  glide: [0.22, 1, 0.36, 1],
  flow: [0.65, 0, 0.35, 1],
} as const satisfies Record<string, readonly [number, number, number, number]>;

export type SpringName = keyof typeof springs;
