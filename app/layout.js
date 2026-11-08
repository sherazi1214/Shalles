import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { wa } from "@/lib/data";

export const metadata = {
  metadataBase: new URL("https://www.shallessalon.com"),
  title: { default: "Shalles Salon & Spa | Bridal makeup, Rawalpindi", template: "%s | Shalles Salon & Spa" },
  description: "Bridal makeup, Hydra facials and nails for every wedding event, from engagement to walima, at Satellite Town, Rawalpindi.",
  openGraph: { title: "Shalles Salon & Spa", description: "Your wedding, in one signature look.", url: "/", siteName: "Shalles Salon & Spa", type: "website", images: ["/img/bride-grey.jpg"] },
};
export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0a0908" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Jost:wght@400;500;600&family=Pinyon+Script&display=swap" />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <a className="wa-float" href={wa()} target="_blank" rel="noopener" aria-label="Book on WhatsApp">
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.2 14.800l-.3-.2-2.600.7.700-2.500-.2-.3A8 8 0 0 1 12 4Z"/><circle cx="12" cy="12" r="2.200" fill="currentColor"/></svg>
        </a>
      </body>
    </html>
  );
}
