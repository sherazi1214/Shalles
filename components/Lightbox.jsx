"use client";
import { useEffect, useState } from "react";

export default function Lightbox({ items }) {
  const [i, setI] = useState(null);
  const n = items.length;
  useEffect(() => {
    if (i === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") setI((x) => (x + 1) % n);
      if (e.key === "ArrowLeft") setI((x) => (x - 1 + n) % n);
    };
    addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [i, n]);
  return (
    <>
      <div className="mosaic">
        {items.map((p, k) => (
          <figure className="glass tile" key={p.img}>
            <button className="tile-btn" onClick={() => setI(k)} aria-label={`Open: ${p.alt}`}>
              <img src={`/img/${p.img}`} alt={p.alt} loading="lazy" />
            </button>
            <figcaption>{p.tag}</figcaption>
          </figure>
        ))}
      </div>
      {i !== null && (
        <div className="lb" role="dialog" aria-modal="true" aria-label={items[i].alt} onClick={() => setI(null)}>
          <button className="lb-x" aria-label="Close" onClick={() => setI(null)}>×</button>
          <button className="lb-nav lb-prev" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setI((i - 1 + n) % n); }}>‹</button>
          <img src={`/img/${items[i].img}`} alt={items[i].alt} onClick={(e) => e.stopPropagation()} />
          <button className="lb-nav lb-next" aria-label="Next" onClick={(e) => { e.stopPropagation(); setI((i + 1) % n); }}>›</button>
          <p>{items[i].tag} · {i + 1}/{n}</p>
        </div>
      )}
    </>
  );
}
