"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { wa } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, []);
  const close = () => setOpen(false);
  return (
    <header className="nav glass">
      <Link className="brand" href="/" onClick={close}>
        <img src="/img/logo.png" alt="" width="40" height="40" /><span>Shalles</span>
      </Link>
      <nav aria-label="Main" className={open ? "open" : ""}>
        <Link href="/#deals" onClick={close}>Deals</Link>
        <Link href="/#services" onClick={close}>Services</Link>
        <Link href="/#gallery" onClick={close}>Gallery</Link>
        <Link href="/#contact" onClick={close}>Contact</Link>
        <Link href="/mehak-shalle" onClick={close} className="nav-mehak">Mehak Shalle</Link>
      </nav>
      <div className="nav-actions">
        <Link className="btn btn-sm btn-founder" href="/mehak-shalle">Mehak Shalle</Link>
        <a className="btn btn-sm btn-wa" href={wa()} target="_blank" rel="noopener">Book on WhatsApp</a>
        <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /><i /></button>
      </div>
    </header>
  );
}
