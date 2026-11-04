"use client";
/*
 * Galactrex UI Components: Galactrex motion primitives (free component)
 * Free to use in your own and client projects. Do not resell or republish it as part of a component library or kit.
 * https://galactrex.com/ui/license/
 */
import { useLayoutEffect, useState, type RefObject } from "react";

export type Size = { width: number; height: number };

/** A pointer's client position in the element's own layout px (what its styles and canvases use), with the
    element's layout size. Stays right when a parent scales the element, where clientX - rect.left would not. */
export function localPoint(el: Element, clientX: number, clientY: number) {
  const r = el.getBoundingClientRect();
  const w = el instanceof HTMLElement ? el.offsetWidth : r.width, h = el instanceof HTMLElement ? el.offsetHeight : r.height;
  return { x: (clientX - r.left) * (w / (r.width || 1)), y: (clientY - r.top) * (h / (r.height || 1)), w, h };
}

/** The element's border-box layout size, kept current with a ResizeObserver. Zero until measured.
    Layout size, not on-screen size: inside a scaled parent (a dialog that scales in, a zoomed preview) the
    on-screen rect is smaller than the box the element draws in, and outlines sized from it come out wrong. */
export function useElementSize(ref: RefObject<Element | null>): Size {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const set = (width: number, height: number) => setSize((s) => (s.width === width && s.height === height ? s : { width, height }));
    // first read before paint; offset sizes ignore transforms (an SVG element has none, so it keeps its rect)
    if (el instanceof HTMLElement) set(el.offsetWidth, el.offsetHeight);
    else { const r = el.getBoundingClientRect(); set(r.width, r.height); }
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(([entry]) => {
      const box = entry.borderBoxSize?.[0];
      if (box) set(box.inlineSize, box.blockSize);
      else set(entry.contentRect.width, entry.contentRect.height);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);
  return size;
}
