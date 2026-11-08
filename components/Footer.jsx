import { getYear } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer wrap">
      <span>© {getYear()} Shalles Salon | Studio | Academy</span>
      <span>www.shallessalon.com · @shalles.salonspa</span>
    </footer>
  );
}
