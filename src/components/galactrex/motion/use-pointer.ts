"use client";
/*
 * Galactrex UI Components: Galactrex motion primitives (free component)
 * Free to use in your own and client projects. Do not resell or republish it as part of a component library or kit.
 * https://galactrex.com/ui/license/
 */
import { useCallback, useState, type PointerEvent } from "react";
import { useMotionValue, type MotionValue } from "motion/react";
import { localPoint } from "./use-element-size";

export type PointerTrack = {
  /** pointer position in px from the element's top-left corner */
  x: MotionValue<number>;
  y: MotionValue<number>;
  /** pointer position from -1 to 1 across the element, centre 0 */
  nx: MotionValue<number>;
  ny: MotionValue<number>;
  active: boolean;
  handlers: {
    onPointerMove: (e: PointerEvent<HTMLElement>) => void;
    onPointerEnter: (e: PointerEvent<HTMLElement>) => void;
    onPointerLeave: () => void;
  };
};

/** Follows a mouse or pen over an element without re-rendering on every move: positions are motion values.
    Touch pointers are ignored, so effects stay still on phones instead of jumping to each tap. */
export function usePointer(): PointerTrack {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const nx = useMotionValue(0);
  const ny = useMotionValue(0);
  const [active, setActive] = useState(false);
  const write = useCallback((e: PointerEvent<HTMLElement>) => {
    const { x: px, y: py, w, h } = localPoint(e.currentTarget, e.clientX, e.clientY);
    x.set(px);
    y.set(py);
    nx.set(w ? (px / w) * 2 - 1 : 0);
    ny.set(h ? (py / h) * 2 - 1 : 0);
  }, [x, y, nx, ny]);
  const onPointerMove = useCallback((e: PointerEvent<HTMLElement>) => {
    if (e.pointerType === "touch") return;
    write(e);
  }, [write]);
  const onPointerEnter = useCallback((e: PointerEvent<HTMLElement>) => {
    if (e.pointerType === "touch") return;
    write(e);
    setActive(true);
  }, [write]);
  const onPointerLeave = useCallback(() => {
    nx.set(0);
    ny.set(0);
    setActive(false);
  }, [nx, ny]);
  return { x, y, nx, ny, active, handlers: { onPointerMove, onPointerEnter, onPointerLeave } };
}
