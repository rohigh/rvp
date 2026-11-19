import { useEffect, useRef } from "react";

export default function DottedHoverBackground({ color = "#14509E", spacing = 22 }: { color?: string; spacing?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const host = canvas?.parentElement;
    const context = canvas?.getContext("2d");
    if (!canvas || !host || !context) return;

    let width = 1;
    let height = 1;
    let points = new Float32Array(0);
    let frame = 0;
    let visible = true;
    let active = false;
    let initialized = false;
    let targetX = 0;
    let targetY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let strength = 0;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");

    const draw = () => {
      frame = 0;
      if (!visible || document.hidden) return;
      const ease = reduce.matches ? 1 : 0.2;
      cursorX += (targetX - cursorX) * ease;
      cursorY += (targetY - cursorY) * ease;
      const targetStrength = active ? 1 : 0;
      strength += (targetStrength - strength) * ease;
      if (Math.abs(strength - targetStrength) < 0.002) strength = targetStrength;
      const reach = Math.min(170, width * 0.34);
      context.clearRect(0, 0, width, height);
      context.fillStyle = color;
      context.beginPath();
      for (let index = 0; index < points.length; index += 3) {
        const x = points[index];
        const y = points[index + 1];
        const dx = x - cursorX;
        const dy = y - cursorY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = strength * Math.exp(-(distance * distance) / (reach * reach * 0.5));
        const displacement = influence * spacing * 2.7;
        const divisor = Math.max(distance, 1);
        const px = x + dx / divisor * displacement;
        const py = y + dy / divisor * displacement;
        const hole = Math.min(1, distance / (spacing * 0.8) + 1 - strength);
        const radius = Math.min(spacing * 0.46, points[index + 2] * (1 + influence * 1.3)) * hole;
        context.moveTo(px + radius, py);
        context.arc(px, py, radius, 0, Math.PI * 2);
      }
      context.fill();
      if (Math.abs(strength - targetStrength) > 0.002 || (active && (Math.abs(targetX - cursorX) > 0.1 || Math.abs(targetY - cursorY) > 0.1))) {
        frame = requestAnimationFrame(draw);
      }
    };

    const requestDraw = () => { if (!frame && visible && !document.hidden) frame = requestAnimationFrame(draw); };
    const resize = () => {
      width = Math.max(1, host.clientWidth);
      height = Math.max(1, host.clientHeight);
      const ratio = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const columns = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);
      points = new Float32Array(columns * rows * 3);
      let index = 0;
      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          const x = column * spacing + spacing / 2;
          const y = row * spacing + spacing / 2;
          const density = Math.min(1, Math.max(0, x / width * 0.95 + y / height * 0.65 - 0.2));
          points[index++] = x;
          points[index++] = y;
          points[index++] = 0.35 + Math.pow(density, 1.5) * spacing * 0.27;
        }
      }
      requestDraw();
    };
    const move = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      const bounds = host.getBoundingClientRect();
      targetX = event.clientX - bounds.left;
      targetY = event.clientY - bounds.top;
      if (!initialized) { cursorX = targetX; cursorY = targetY; initialized = true; }
      active = true;
      requestDraw();
    };
    const leave = () => { active = false; requestDraw(); };
    const visibilityChange = () => {
      if (document.hidden) { cancelAnimationFrame(frame); frame = 0; active = false; }
      else requestDraw();
    };
    const observer = new ResizeObserver(resize);
    const intersection = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) requestDraw();
      else { cancelAnimationFrame(frame); frame = 0; active = false; strength = 0; }
    });
    observer.observe(host);
    intersection.observe(host);
    host.addEventListener("pointermove", move, { passive: true });
    host.addEventListener("pointerleave", leave);
    host.addEventListener("pointercancel", leave);
    document.addEventListener("visibilitychange", visibilityChange);
    reduce.addEventListener("change", requestDraw);
    resize();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      intersection.disconnect();
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
      host.removeEventListener("pointercancel", leave);
      document.removeEventListener("visibilitychange", visibilityChange);
      reduce.removeEventListener("change", requestDraw);
    };
  }, [color, spacing]);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 size-full" />;
}
