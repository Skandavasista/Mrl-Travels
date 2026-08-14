import { useState, useRef } from "react";
import { createPortal } from "react-dom";

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const PREVIEW_W = 384;
const PREVIEW_H = 224;

export default function PlaceThumb({ name }) {
  const [failed, setFailed] = useState(false);
  const [hover, setHover] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const ref = useRef(null);
  const src = `/src/assets/${slugify(name)}.png`;

  function handleEnter() {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    let left = rect.left + rect.width / 2 - PREVIEW_W / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - PREVIEW_W - 8));
    let top = rect.top - PREVIEW_H - 12;
    if (top < 8) top = rect.bottom + 12;
    setPos({ top, left });
    setHover(true);
  }

  if (failed) {
    return (
      <div className="w-40 h-24 rounded-md bg-paperDeep flex items-center justify-center text-center px-1.5 shrink-0">
        <span className="text-[9px] font-mono text-ink/50 leading-tight">{name}</span>
      </div>
    );
  }

  return (
    <>
      <div
        ref={ref}
        className="w-40 h-24 rounded-md overflow-hidden cursor-zoom-in shrink-0"
        onMouseEnter={handleEnter}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={src}
          alt={name}
          onError={() => setFailed(true)}
          className="w-full h-full object-cover"
        />
      </div>

      {hover &&
        createPortal(
          <div
            className="fixed pointer-events-none z-[999]"
            style={{ top: pos.top, left: pos.left }}
          >
            <div className="w-96 h-56 rounded-lg overflow-hidden shadow-xl border border-paper/40">
              <img src={src} alt={name} className="w-full h-full object-cover" />
            </div>
            <p className="mt-1.5 text-center text-[11px] font-mono text-ink bg-paper rounded px-2 py-1 shadow-md">
              {name}
            </p>
          </div>,
          document.body
        )}
    </>
  );
}
