"use client";
/*
 * Galactrex UI Components: Galactrex motion primitives (free component)
 * Free to use in your own and client projects. Do not resell or republish it as part of a component library or kit.
 * https://galactrex.com/ui/license/
 */
import { useEffect, useRef, type RefObject } from "react";
import { localPoint } from "./use-element-size";

export type CanvasFrame = {
  ctx: CanvasRenderingContext2D;
  /** CSS pixel size of the canvas */
  width: number;
  height: number;
  /** a CSS colour or a --gxui-* custom property name, resolved against the canvas; follows theme switches */
  color: (value: string) => string;
  /** the pointer over the host's parent, when a pointer ref was passed and it is there */
  pointer: () => { x: number; y: number } | null;
};

/** Called once per frame with the seconds since start and since the last frame. When the scene is still
    (reduced motion, offscreen) it is called once with t = 0, and again after a theme switch. */
export type CanvasDraw = (t: number, dt: number) => void;

/** Runs a scene on a canvas sized to `size` at the device pixel ratio (capped at 2); attach the returned ref to
    the canvas. `setup` builds the scene and returns its draw function; wrap it in useCallback so it only rebuilds
    when its inputs change. While `animate` is false the scene is drawn once, and redrawn when the page's theme
    changes, so a still background never shows the wrong colours. */
export function useCanvas(
  size: { width: number; height: number },
  setup: (frame: CanvasFrame) => CanvasDraw,
  animate: boolean,
  pointer?: RefObject<{ x: number; y: number } | null>,
): RefObject<HTMLCanvasElement | null> {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { width, height } = size;
  useEffect(() => {
    const c = canvas.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx || !width || !height) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    c.width = Math.round(width * dpr);
    c.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    let cache = new Map<string, string>();
    const color = (value: string) => {
      if (!value.startsWith("--")) return value;
      let v = cache.get(value);
      if (v === undefined) {
        v = getComputedStyle(c).getPropertyValue(value).trim() || "currentColor";
        cache.set(value, v);
      }
      return v;
    };
    const draw = setup({ ctx, width, height, color, pointer: () => pointer?.current ?? null });

    let frame = 0;
    const repaint = () => {
      cache = new Map();
      if (!animate) draw(0, 0);
    };
    const observer = new MutationObserver(repaint);
    for (const el of [document.documentElement, document.body]) observer.observe(el, { attributes: true, attributeFilter: ["class", "style", "data-theme"] });
    const scheme = window.matchMedia("(prefers-color-scheme: dark)");
    scheme.addEventListener("change", repaint);

    if (animate) {
      let start = 0;
      let last = 0;
      const step = (now: number) => {
        if (!start) start = last = now;
        // a long gap (a background tab) is treated as one ordinary frame, so nothing jumps
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        draw((now - start) / 1000, dt);
        frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    } else {
      draw(0, 0);
    }
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      scheme.removeEventListener("change", repaint);
    };
  }, [width, height, setup, animate, pointer]);
  return canvas;
}

/** A seeded random source, so a still scene draws the same way on every render and on the server snapshot. */
export function seeded(seed: number): () => number {
  let s = seed >>> 0 || 1;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let x = s;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

let probe: CanvasRenderingContext2D | null = null;

/** Any CSS colour (or a --gxui-* name, read from `from`) as 0–255 RGB, for scenes that write pixels or shader
    uniforms. Falls back to mid grey where the colour cannot be read. */
export function toRgb(value: string, from?: Element | null): [number, number, number] {
  if (typeof document === "undefined") return [128, 128, 128];
  const css = value.startsWith("--") ? (from ? getComputedStyle(from).getPropertyValue(value).trim() : "") : value;
  if (!probe) {
    const c = document.createElement("canvas");
    c.width = c.height = 1;
    probe = c.getContext("2d", { willReadFrequently: true });
  }
  if (!probe || !css) return [128, 128, 128];
  probe.clearRect(0, 0, 1, 1);
  probe.fillStyle = "rgb(128 128 128)";
  probe.fillStyle = css;
  probe.fillRect(0, 0, 1, 1);
  const [r, g, b] = probe.getImageData(0, 0, 1, 1).data;
  return [r, g, b];
}

/** The mouse or pen position over the host's parent, in px from its top-left corner, or null while it is
    elsewhere. Kept in a ref, so a canvas loop reads it without re-rendering. Touch is ignored. */
export function useParentPointer(host: RefObject<Element | null>, enabled: boolean): RefObject<{ x: number; y: number } | null> {
  const point = useRef<{ x: number; y: number } | null>(null);
  useEffect(() => {
    const parent = host.current?.parentElement;
    if (!parent || !enabled) return;
    const move = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const { x, y } = localPoint(parent, e.clientX, e.clientY);
      point.current = { x, y };
    };
    const leave = () => { point.current = null; };
    parent.addEventListener("pointermove", move);
    parent.addEventListener("pointerleave", leave);
    return () => {
      parent.removeEventListener("pointermove", move);
      parent.removeEventListener("pointerleave", leave);
      point.current = null;
    };
  }, [host, enabled]);
  return point;
}
