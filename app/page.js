import Link from "next/link";
import Reveal from "@/components/Reveal";
import DealCard from "@/components/DealCard";
import { deals, services, brides, wa, getYears } from "@/lib/data";

const events = ["Engagement", "Mehndi", "Nikkah", "Barat", "Walima"];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="hero-script">Shalles Salon | Studio | Academy</span>
            <h1>Your wedding, in one signature look.</h1>
            <p>Bridal makeup, Hydra facials and nails for every event, from engagement to walima, at Satellite Town, Rawalpindi.</p>
            <ul className="events" aria-label="Wedding events">
              {events.map((e) => <li key={e}><a href="#deals">{e}</a></li>)}
            </ul>
            <div className="hero-actions">
              <a className="btn" href={wa()} target="_blank" rel="noopener">Book on WhatsApp</a>
              <a className="btn btn-ghost" href="#deals">See wedding deals</a>
            </div>
          </div>
          <div className="arches" aria-hidden="true">
            <div className="ring" />
            <figure className="glass arch arch-main"><img src="/img/bride-grey.jpg" alt="" /></figure>
            <figure className="glass arch arch-left"><img src="/img/bride-red.jpg" alt="" /></figure>
            <figure className="glass arch arch-right"><img src="/img/bride-green.jpg" alt="" /></figure>
            <div className="glass arch-note"><strong>Satellite Town</strong><span>6th Road Center, Rawalpindi</span></div>
          </div>
        </div>
      </section>

      <section className="wrap trust" aria-label="Why Shalles">
        <Reveal className="glass trust-bar">
          <div><strong>{getYears()}+</strong><span>years of founder experience in fashion and beauty</span></div>
          <div><strong>5</strong><span>wedding deals, one booking</span></div>
          <div><strong>1</strong><span>team for makeup, hair, skin and nails</span></div>
        </Reveal>
      </section>

      <section id="deals" className="section wrap">
        <div className="section-head"><h2>Wedding deals</h2><p>One booking for every event. Ask us to adjust any deal to your schedule.</p></div>
        <div className="deal-grid">{deals.map((d) => <DealCard key={d.name} deal={d} />)}</div>
      </section>

      <section id="services" className="section wrap">
        <div className="section-head"><h2>Salon services</h2><p>Hair, skin and nails, done by the same team that does your makeup.</p></div>
        <div className="service-grid">
          {services.map((s, i) => (
            <Reveal as="article" className="glass service" key={s.title} delay={i * 90}>
              <img src={`/img/${s.img}`} alt={s.title} loading="lazy" />
              <h3>{s.title}</h3><p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="gallery" className="section wrap">
        <div className="section-head"><h2>Our brides</h2><p>Photographed by Ummad&apos;s Photography.</p></div>
        <div className="gallery">
          {brides.map((b, i) => (
            <Reveal as="figure" className="glass" key={b.img} delay={i * 90}><img src={`/img/${b.img}`} alt={b.alt} loading="lazy" /></Reveal>
          ))}
        </div>
      </section>

      <section id="founder" className="section wrap">
        <Reveal className="glass founder">
          <img src="/img/mehak-orange.jpg" alt="Mehak Shalle in an orange skirt set" loading="lazy" />
          <div className="founder-copy">
            <h2>Meet Mehak Shalle</h2>
            <p>Model, actress, influencer and the co-founder of Shalles Salon &amp; Spa. {getYears()}+ years in fashion and music videos, now bringing that eye for detail to every bride who sits in her chair.</p>
            <div className="hero-actions">
              <Link className="btn" href="/mehak-shalle">View her portfolio</Link>
              <a className="btn btn-ghost" href="https://instagram.com/mehak_shalle_official" target="_blank" rel="noopener">@mehak_shalle_official</a>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="section wrap">
        <div className="glass contact">
          <div>
            <h2>Book your date</h2>
            <p>Message us on WhatsApp with your event date and the deal you want. We reply with available slots.</p>
            <a className="btn" href={wa()} target="_blank" rel="noopener">WhatsApp +92 336 669 6660</a>
            <a className="btn btn-ghost" href="tel:+920514850265">Call 051 485 0265</a>
          </div>
          <dl>
            <div><dt>Call</dt><dd><a href="tel:+920514850265">051 485 0265</a></dd></div>
            <div><dt>Senior manager</dt><dd>Aasma Khan</dd></div>
            <div><dt>Co-founder</dt><dd>Mehak Shalle</dd></div>
            <div><dt>Email</dt><dd><a href="mailto:shallessalon@gmail.com">shallessalon@gmail.com</a><br /><a href="mailto:info@shallessalon.com">info@shallessalon.com</a></dd></div>
            <div><dt>Instagram</dt><dd><a href="https://instagram.com/shalles.salonspa" target="_blank" rel="noopener">@shalles.salonspa</a></dd></div>
            <div><dt>Visit</dt><dd><a href="https://maps.google.com/?q=6th+Road+Center+Block+D+Satellite+Town+Rawalpindi" target="_blank" rel="noopener">Second Floor, 6th Road Center, Block D, Satellite Town, Rawalpindi</a></dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}
