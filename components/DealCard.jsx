"use client";
import { wa } from "@/lib/data";

export default function DealCard({ deal }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <article className="glass deal" onPointerMove={move}>
      <div className="deal-top">
        <h3>{deal.name}</h3>
        <span className={`deal-count ${deal.best ? "deal-best" : ""}`}>{deal.best ? `Most services, ${deal.items.length}` : `${deal.items.length} services`}</span>
      </div>
      <ul>{deal.items.map((t, i) => <li key={t} style={{ "--i": i }}>{t}</li>)}</ul>
      <a className="deal-cta" href={wa(`Hi Shalles, I want to book the ${deal.name}`)} target="_blank" rel="noopener">Ask about this deal <i aria-hidden="true">→</i></a>
    </article>
  );
}
