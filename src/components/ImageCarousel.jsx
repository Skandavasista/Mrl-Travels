// src/components/ImageCarousel.jsx
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VehicleArt from "./VehicleArt.jsx";

export default function ImageCarousel({ images = [], type, alt = "", interval = 4000 }) {
  const [index, setIndex] = useState(0);
  const hasImages = images.length > 0;
  const hasMultiple = images.length > 1;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!hasMultiple) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [hasMultiple, interval, next]);

  if (!hasImages) {
    // fallback to flat illustration if no photos added yet
    return (
      <div className="rounded-lg overflow-hidden" style={{ aspectRatio: "4/3" }}>
        <VehicleArt type={type} />
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg bg-paperDeep"
      style={{ aspectRatio: "4/3" }}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} — photo ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {hasMultiple && (
        <>
          <button
            onClick={prev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-ink/70 hover:bg-ink/90 text-paper rounded-full p-1.5 transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-ink/70 hover:bg-ink/90 text-paper rounded-full p-1.5 transition-colors"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to photo ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-amber" : "w-1.5 bg-paper/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}