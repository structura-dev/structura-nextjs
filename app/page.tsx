export default function Home() {
  return (
    <main className="page">
      <header className="site-header container">
        <div className="logo-wrap">
          <img
            className="logo"
            src="/structura_transparent_black.svg"
            alt="Structura"
          />
        </div>
        <nav className="nav">
          <a href="#benefits">Benefits</a>
          <a href="#process">Process</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button secondary" href="STRIPE_PAYMENT_LINK_HERE">
          Get Started
        </a>
      </header>

      <section className="hero container">
        <div className="hero-content reveal">
          <p className="eyebrow">Automation for online coaches</p>
          <h1>Automated YouTube Shorts for online coaches.</h1>
          <p className="subhead">
            Structura generates 30 branded Shorts per month — no editing, no content
            team.
          </p>
          <div className="cta-row">
            <a className="button primary" href="STRIPE_PAYMENT_LINK_HERE">
              Get Started
            </a>
            <a className="button ghost" href="#pricing">
              See pricing
            </a>
          </div>
          <p className="trust">
            Cancel anytime · First batch delivered within 48 hours
          </p>
          <div className="stats">
            <div>
              <strong>30</strong>
              <span>Shorts per month</span>
            </div>
            <div>
              <strong>48h</strong>
              <span>First delivery</span>
            </div>
            <div>
              <strong>0</strong>
              <span>Editing hours</span>
            </div>
          </div>
        </div>
        <aside className="hero-card reveal">
          <div className="card-badge">What you get</div>
          <h3>Everything you need to post consistently.</h3>
          <ul className="checklist">
            <li>30 Shorts / month ready for YouTube.</li>
            <li>Your logo + simple brand styling applied consistently.</li>
            <li>Private delivery folder shared only with you.</li>
            <li>Captions included for every clip.</li>
          </ul>
          <p className="card-note">Built for repeatable output, not busywork.</p>
        </aside>
      </section>

      <section id="benefits" className="section container">
        <div className="section-head reveal">
          <h2>What you get</h2>
          <p>
            A complete Shorts engine for coaches who want reliable output without a
            content team.
          </p>
        </div>
        <div className="grid">
          <article className="feature-card reveal">
            <h3>30 Shorts / month</h3>
            <p>Ready-to-post MP4s designed for YouTube Shorts.</p>
          </article>
          <article className="feature-card reveal">
            <h3>Branding included</h3>
            <p>Your logo + simple brand styling applied consistently.</p>
          </article>
          <article className="feature-card reveal">
            <h3>Private delivery</h3>
            <p>Delivered via a secure folder shared only with you.</p>
          </article>
        </div>
      </section>

      <section id="process" className="section container">
        <div className="section-head reveal">
          <h2>How it works</h2>
          <p>Subscribe once and we handle the rest every month.</p>
        </div>
        <ol className="steps">
          <li className="reveal">
            <span className="step-index">01</span>
            <div>
              <strong>Subscribe</strong>
              <span>Choose the monthly plan.</span>
            </div>
          </li>
          <li className="reveal">
            <span className="step-index">02</span>
            <div>
              <strong>Share your brand</strong>
              <span>Reply to the welcome email with your website and logo.</span>
            </div>
          </li>
          <li className="reveal">
            <span className="step-index">03</span>
            <div>
              <strong>Receive Shorts</strong>
              <span>Your first batch is delivered within 48 hours, then monthly.</span>
            </div>
          </li>
        </ol>
      </section>

      <section id="pricing" className="section container pricing">
        <div className="section-head reveal">
          <h2>Simple pricing</h2>
          <p>Everything is included. No setup fees or long contracts.</p>
        </div>
        <div className="price-card reveal">
          <div className="price-top">
            <h3>Structura Monthly</h3>
            <span className="price-tag">Best for consistent creators</span>
          </div>
          <p className="price">$99 CAD / month</p>
          <ul className="checklist">
            <li>30 branded YouTube Shorts / month</li>
            <li>Captions included</li>
            <li>Private delivery folder</li>
            <li>Cancel anytime</li>
          </ul>
          <a className="button primary" href="STRIPE_PAYMENT_LINK_HERE">
            Get Started
          </a>
          <p className="card-note">Pause or cancel anytime from Stripe.</p>
        </div>
      </section>

      <section id="faq" className="section container">
        <div className="section-head reveal">
          <h2>FAQ</h2>
          <p>Everything you need to know before you start.</p>
        </div>
        <div className="faq-grid">
          <div className="faq-item reveal">
            <strong>How long does delivery take?</strong>
            <p>Your first batch is delivered within 48 hours of subscribing.</p>
          </div>
          <div className="faq-item reveal">
            <strong>Do you edit videos?</strong>
            <p>No. Structura generates ready-to-post Shorts. v1 does not include custom edits.</p>
          </div>
          <div className="faq-item reveal">
            <strong>Can I cancel anytime?</strong>
            <p>Yes. Cancel anytime from Stripe.</p>
          </div>
          <div className="faq-item reveal">
            <strong>Do you support Instagram or TikTok?</strong>
            <p>Not in v1. Structura v1 focuses on YouTube Shorts.</p>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <div className="footer-brand">
          <img
            className="logo small"
            src="/structura_transparent_black.svg"
            alt="Structura"
          />
          <p>Automation systems for repeatable content output.</p>
        </div>
        <div className="footer-meta">
          <p>
            Questions? <a href="mailto:hello@getstructura.com">hello@getstructura.com</a>
          </p>
          <p className="copyright">
            © {new Date().getFullYear()} Structura. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
