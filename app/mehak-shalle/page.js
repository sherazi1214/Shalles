import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Lightbox from "@/components/Lightbox";
import { releases, portfolio, CAREER_START, getYear, getYears } from "@/lib/data";

export const metadata = {
  title: "Mehak Shalle",
  description: "Model, actress, influencer and entrepreneur. Co-founder of Shalles Salon & Spa, Rawalpindi.",
};

export default function Mehak() {
  const y = getYear(), years = getYears();
  return (
    <>
      <section className="m-hero wrap">
        <div className="m-hero-copy">
          <span className="hero-script">{CAREER_START} - {y}</span>
          <h1>Mehak Shalle</h1>
          <ul className="m-roles" aria-label="Roles"><li>Model</li><li>Actress</li><li>Influencer</li><li>Entrepreneur</li></ul>
          <p>{years} years in fashion, music videos and beauty. Founder of Shalles Salon &amp; Spa in Rawalpindi.</p>
          <div className="hero-actions">
            <a className="btn" href="#contact">Get in touch</a>
            <a className="btn btn-ghost" href="#portfolio">See the portfolio</a>
          </div>
        </div>
        <div className="m-hero-photo">
          <div className="m-frame" aria-hidden="true" />
          <img src="/img/mehak-red-satin.jpg" alt="Mehak Shalle in a red satin gown" />
          <div className="glass m-badge"><strong>Malaysia, Dubai</strong><span>and shoots in many other countries</span></div>
        </div>
      </section>

      <section className="wrap">
        <div className="stats">
          <div className="glass stat"><Counter to={years} suffix="+" /><span>years in modeling and acting</span></div>
          <div className="glass stat"><Counter to={13.9} suffix="K" decimals={1} /><span>Instagram followers</span></div>
          <div className="glass stat"><Counter to={5.7} suffix="K" decimals={1} /><span>Facebook followers</span></div>
          <div className="glass stat"><Counter to={5.8} suffix="K" decimals={1} /><span>TikTok followers</span></div>
        </div>
        <p className="note">Follower counts are from the 2025 portfolio and may have changed since.</p>
      </section>

      <section id="about" className="section wrap about">
        <img className="about-photo" src="/img/mehak-orange.jpg" alt="Mehak Shalle in an orange skirt set" />
        <div className="about-copy">
          <h2>About me</h2>
          <p>With {years} years of experience in the modeling and entertainment industry, I have established myself as a versatile model, actress, and beauty influencer. From gracing magazine covers to starring in national and international Punjabi and Urdu songs, I have worked with top brands, designers, and production houses.</p>
          <p>My career has taken me across the world, including Malaysia, Dubai, and many other countries, where I have collaborated on various high-end projects.</p>
          <p>Beyond modeling and acting, I am also the proud owner of Shalles Salon &amp; Spa, one of the best beauty salons in Rawalpindi, dedicated to providing premium hair, makeup, and skincare services, and the CEO of Shalles Real Estate.</p>
          <ul className="chips" aria-label="Genres"><li>Fashion</li><li>Editorial</li><li>Commercial</li><li>Music videos</li></ul>
        </div>
      </section>

      <section className="section wrap vm">
        <Reveal as="article" className="glass vm-card"><h2>Vision</h2><p>To redefine fashion, beauty, and entertainment by inspiring individuals worldwide through my creative journey and professional excellence.</p></Reveal>
        <Reveal as="article" className="glass vm-card" delay={120}><h2>Mission</h2><p>To continue excelling in the global modeling and entertainment industry, collaborating with top international brands, and expanding my influence while empowering aspiring models and beauty professionals.</p></Reveal>
      </section>

      <section className="quote">
        <img src="/img/mehak-navy.jpg" alt="" />
        <div className="quote-shade" />
        <blockquote className="wrap"><p>Confidence is your best outfit. Rock it and own it.</p><cite>Mehak Shalle</cite></blockquote>
      </section>

      <section id="music" className="section wrap">
        <div className="section-head"><h2>Music videos</h2><p>Songs featuring Mehak, released with national and international labels.</p></div>
        <div className="releases">
          {releases.map((r, i) => (
            <Reveal as="article" className="release" key={r.title} delay={i * 90}>
              <div className="release-art glass"><img src={`/img/${r.img}`} alt={`${r.title} poster`} loading="lazy" /></div>
              <h3>{r.title}</h3><p>{r.by}</p><span>{r.date}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="portfolio" className="section wrap">
        <div className="section-head"><h2>Portfolio</h2><p>Fashion, editorial, commercial and bridal work from {CAREER_START} to {y}. Tap a photo to view it full size.</p></div>
        <Lightbox items={portfolio} />
        <ul className="highlights">
          <li className="glass">Featured in Urdu and Punjabi songs for national and international music labels</li>
          <li className="glass">Worked with top fashion designers and brands</li>
          <li className="glass">Traveled to Malaysia, Dubai, and other countries for international shoots</li>
          <li className="glass">Featured in magazines and luxury brand campaigns</li>
        </ul>
      </section>

      <section className="section wrap inner">
        <img src="/img/mehak-bridal.jpg" alt="Mehak Shalle in a red and gold bridal outfit" loading="lazy" />
        <div>
          <h2>Power of inner beauty</h2>
          <p>In the fast-paced world of fashion, acting, and beauty, staying authentic and humble is what makes a lasting impact. Whether on set, at a photoshoot, or running Shalles Salon &amp; Spa, Mehak embodies the belief that inner beauty enhances outer radiance.</p>
        </div>
      </section>

      <section id="social" className="section wrap">
        <div className="section-head"><h2>Follow Mehak</h2><p>Behind the scenes, music releases and salon looks.</p></div>
        <div className="socials">
          <a className="glass social" href="https://instagram.com/mehak_shalle_official" target="_blank" rel="noopener"><h3>Instagram</h3><span className="social-handle">@mehak_shalle_official</span><span className="social-stat">13.9K followers, 763 posts</span></a>
          <div className="glass social"><h3>Facebook</h3><span className="social-handle">Mehak Baber Shalle</span><span className="social-stat">5.7K followers</span></div>
          <a className="glass social" href="https://www.tiktok.com/@mehakshalleofficial0" target="_blank" rel="noopener"><h3>TikTok</h3><span className="social-handle">@mehakshalleofficial0</span><span className="social-stat">5,793 followers, 55.2K likes</span></a>
          <a className="glass social" href="https://youtube.com/@mehakshalle9399" target="_blank" rel="noopener"><h3>YouTube</h3><span className="social-handle">@mehakshalle9399</span></a>
        </div>
        <p className="note">All links in one place: <a href="https://linktr.ee/Mehak_shalle_official" target="_blank" rel="noopener">linktr.ee/Mehak_shalle_official</a></p>
      </section>

      <section className="section wrap">
        <div className="section-head"><h2>Businesses</h2><p>Mehak&apos;s two ventures outside of modeling and acting.</p></div>
        <div className="ventures">
          <Reveal as="article" className="glass venture">
            <h3>Shalles Salon &amp; Spa</h3><span className="venture-role">CEO and co-founder</span>
            <ul>
              <li>Hair, makeup and skincare</li>
              <li>Second Floor, 6th Road Center, Block D, Satellite Town, Rawalpindi</li>
              <li>shallessalon@gmail.com</li><li>051 485 0265</li><li>+92 336 669 6660 (WhatsApp)</li><li>@shalles.salonspa</li>
            </ul>
            <Link className="deal-cta" href="/">Visit the salon site <i aria-hidden="true">→</i></Link>
          </Reveal>
          <Reveal as="article" className="glass venture" delay={120}>
            <h3>Shalles Real Estate</h3><span className="venture-role">CEO and brand ambassador, RUDN Enclave</span>
            <ul>
              <li>+92 330 0090007</li><li>+92 51 11 11 88 888</li>
              <li>www.rudnenclave.com</li><li>shallesrealestate@gmail.com</li>
              <li>@shallesrealestate (Instagram, TikTok)</li>
              <li>RMSCO House, Building 72, Wallayat Complex, Bahria Town, Phase 7, Islamabad</li>
            </ul>
            <a className="deal-cta" href="https://www.rudnenclave.com" target="_blank" rel="noopener">RUDN Enclave <i aria-hidden="true">→</i></a>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="section wrap">
        <div className="glass contact">
          <div>
            <h2>Get in touch</h2>
            <p>For paid promotions, collaborations and shoots, message Mehak on Instagram or call the number below.</p>
            <a className="btn" href="https://instagram.com/mehak_shalle_official" target="_blank" rel="noopener">Message @mehak_shalle_official</a>
          </div>
          <dl>
            <div><dt>Phone</dt><dd><a href="tel:+923318188858">+92 331 8188858</a></dd></div>
            <div><dt>Email</dt><dd>info@shallessalon.com</dd></div>
            <div><dt>Website</dt><dd>www.shallessalon.com</dd></div>
            <div><dt>Instagram</dt><dd>@mehak_shalle_official</dd></div>
            <div><dt>Salon WhatsApp</dt><dd>+92 336 669 6660</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}
