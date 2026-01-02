import React, { useRef, useEffect, useCallback } from "react";

/**
 * CanvasRevealEffect
 * Draws an animated rounded rectangle glow border with corner highlights
 */
const CanvasRevealEffect = ({
  width = 520,
  height = 420,
  radius = 20,
  strokeColor = "#01BCB7 ",
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const progressRef = useRef(0);
  const targetRef = useRef(0);
  const rafRef = useRef(null);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    const w = rect.width || width;
    const h = rect.height || height;

    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }, [width, height]);

  const roundedRectPath = (ctx, x, y, w, h, r) => {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  };

  const render = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const w = parseFloat(canvas.style.width || width);
    const h = parseFloat(canvas.style.height || height);

    const ease = 0.18;
    const p = progressRef.current;
    const t = targetRef.current;
    progressRef.current = p + (t - p) * ease;
    const prog = progressRef.current;

    ctx.clearRect(0, 0, w, h);

    const pad = 0;
    const rectX = pad;
    const rectY = pad;
    const rectW = Math.max(0, w - pad * 2);
    const rectH = Math.max(0, h - pad * 2);

    // Main glow stroke
    ctx.save();
    ctx.lineWidth = 2 + prog * 2;
    const grad = ctx.createLinearGradient(rectX, rectY, rectX + rectW, rectY + rectH);
    grad.addColorStop(0, strokeColor);
    grad.addColorStop(1, "#01BCB7");
    ctx.strokeStyle = grad;
    ctx.globalAlpha = 0.15 + prog * 0.85;

    const perimeter = 2 * (rectW + rectH - 4 * radius) + Math.PI * radius * 2;
    const dashLen = perimeter * (0.25 + 0.75 * prog);
    ctx.setLineDash([dashLen, perimeter]);
    ctx.lineDashOffset = -perimeter * prog * 0.6;
    roundedRectPath(ctx, rectX, rectY, rectW, rectH, radius);
    ctx.stroke();
    ctx.restore();

    // Corner highlights
    ctx.save();
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = strokeColor;
    ctx.globalAlpha = 0.6 * prog;
    const cornerLen = 16 + 24 * prog;
    const cornerInset = 8;
    const corners = [
      [rectX + cornerInset, rectY + cornerInset],
      [rectX + rectW - cornerInset, rectY + cornerInset],
      [rectX + cornerInset, rectY + cornerInset + rectH],
      [rectX + rectW - cornerInset, rectY + cornerInset + rectH],
    ];
    corners.forEach(([cx, cy], i) => {
      ctx.beginPath();
      if (i < 2) {
        ctx.moveTo(cx, cy + cornerLen);
        ctx.lineTo(cx, cy);
        ctx.lineTo(cx + (i === 0 ? cornerLen : -cornerLen), cy);
      } else {
        ctx.moveTo(cx, cy - cornerLen);
        ctx.lineTo(cx, cy);
        ctx.lineTo(cx + (i === 2 ? cornerLen : -cornerLen), cy);
      }
      ctx.stroke();
    });
    ctx.restore();

    if (Math.abs(progressRef.current - targetRef.current) > 0.001) {
      rafRef.current = requestAnimationFrame(render);
    } else {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, [radius, strokeColor, width, height]);

  const startAnimation = useCallback(() => {
    if (!rafRef.current) rafRef.current = requestAnimationFrame(render);
  }, [render]);

  useEffect(() => {
    resizeCanvas();
    render();
    const onResize = () => {
      resizeCanvas();
      render();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [resizeCanvas, render]);

  const handleEnter = () => {
    targetRef.current = 1;
    startAnimation();
  };
  const handleLeave = () => {
    targetRef.current = 0;
    startAnimation();
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        aria-hidden="true"
      />
    </div>
  );
};

export default CanvasRevealEffect;