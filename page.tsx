import Reveal from '@/components/Reveal'

const SERVICES = [
  { href: '/services/thumbnail', icon: 'fa-image', title: 'Thumbnail Designing', desc: 'Click-worthy YouTube & content thumbnails that boost CTR.' },
  { href: '/services/poster', icon: 'fa-file-image', title: 'Poster Designing', desc: 'Business, promo, event & festival posters that turn heads.' },
  { href: '/services/banner', icon: 'fa-flag', title: 'Banner Designing', desc: 'Web, social & outdoor banners crafted for impact.' },
  { href: '/services/logo', icon: 'fa-gem', title: 'Logo Designing', desc: 'Distinctive logos & identity systems that endure.' },
  { href: '/services/catalog', icon: 'fa-book-open', title: 'Catalog Designing', desc: 'Elegant product catalogs & brochures that convert.' },
  { href: '/services/post', icon: 'fa-hashtag', title: 'Social Media Posts', desc: 'Consistent, on-brand social content that stops the scroll.' },
]

const TESTIMONIALS = [
  { initials: 'AR', name: 'Ananya R.', role: 'Founder · Halcyon Studio', quote: 'Skilverss made our brand look like a million dollars. Every design felt considered, calm and confident.' },
  { initials: 'DK', name: 'Devansh K.', role: 'Creator · 1.2M subscribers', quote: 'Sharp, fast and endlessly creative. Our YouTube CTR jumped noticeably within a month of switching.' },
  { initials: 'MS', name: 'Maria S.', role: 'Marketing Lead · Solara', quote: 'A rare mix of taste and turnaround. Skilverss is now our default creative partner.' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="skv-container hero-grid">
          <Reveal>
            <span className="eyebrow">Skilverss · Creative Studio</span>
            <h1>YOUR VISION,<br /><span className="accent">OUR CREATIVITY</span></h1>
            <p className="lead">We create premium creative designs that help businesses build memorable brands and attract more customers.</p>
            <div className="hero-ctas">
              <a href="/services" className="btn btn-outline btn-lg">Explore Services <i className="fas fa-arrow-right" /></a>
              <a href="https://forms.gle/uf8HKV6aQV2tVs4G9" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Order Now <i className="fas fa-arrow-right" /></a>
            </div>
          </Reveal>
          <Reveal direction="right" className="hero-visual">
            <div className="floaters">
              <div className="floater f1"><i className="fas fa-palette" /> Brand Design</div>
              <div className="floater f2"><i className="fas fa-video" /> Video Editing</div>
              <div className="floater f3"><i className="fas fa-star" /> Premium Quality</div>
            </div>
            <div className="label">
              <small>Creative Studio</small>
              Design.<br />Refined.
            </div>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section className="skv-section">
        <div className="skv-container about-grid">
          <Reveal direction="left" className="about-visual">
            <div className="stamp"><small>About Skilverss</small>Since 2021 — crafting bold, timeless creative work.</div>
          </Reveal>
          <Reveal>
            <span className="eyebrow">About Skilverss</span>
            <h2 className="section-title">We Turn Creative Ideas Into Powerful Visual Experiences</h2>
            <p className="section-lede" style={{ marginBottom: 18 }}>
              From startups to established brands, we design with intent — blending strategy, craft and taste to produce work that performs and endures.
            </p>
            <ul className="feature-list">
              <li><i className="fas fa-check" /> Premium Quality</li>
              <li><i className="fas fa-check" /> Fast Delivery</li>
              <li><i className="fas fa-check" /> Affordable Pricing</li>
              <li><i className="fas fa-check" /> Dedicated Support</li>
            </ul>
            <a href="/about" className="btn btn-outline">Learn More <i className="fas fa-arrow-right" /></a>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="skv-section">
        <div className="skv-container">
          <Reveal className="section-head center">
            <span className="eyebrow">What we do</span>
            <h2 className="section-title">Our Creative Services</h2>
            <p className="section-lede" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              A complete design toolkit for brands that want to look and feel exceptional across every touchpoint.
            </p>
          </Reveal>
          <div className="cards">
            {SERVICES.map((s, i) => (
              <Reveal key={s.href} delay={(i % 3) * 80}>
                <a href={s.href} className="card">
                  <div className="icon"><i className={`fas ${s.icon}`} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="explore">Explore <i className="fas fa-arrow-right" /></span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="skv-section">
        <div className="skv-container">
          <Reveal className="section-head center">
            <span className="eyebrow">Kind Words</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </Reveal>
          <div className="testimonials">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="tcard">
                  <div className="stars">★★★★★</div>
                  <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                  <div className="tclient">
                    <div className="avatar">{t.initials}</div>
                    <div>
                      <span className="n">{t.name}</span>
                      <span className="r">{t.role}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="skv-section">
        <div className="skv-container">
          <Reveal className="cta">
            <div>
              <span className="eyebrow">Let&apos;s build</span>
              <h2>Ready to Build Your Brand?</h2>
              <p>Let&apos;s create something amazing together — thoughtful, distinctive, and unmistakably yours.</p>
            </div>
            <div className="cta-actions">
              <a href="https://forms.gle/uf8HKV6aQV2tVs4G9" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg">Order Now <i className="fas fa-arrow-right" /></a>
              <a href="/contact" className="btn btn-outline btn-lg">Contact Us</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
