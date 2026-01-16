import {
  STRIPE_MONTHLY_BUTTON_ID,
  STRIPE_PROOF_PACK_BUTTON_ID,
  STRIPE_PUBLISHABLE_KEY,
  STRIPE_PROOF_PACK_URL,
  SAMPLE_VIDEO_1,
  SAMPLE_VIDEO_2,
  SAMPLE_VIDEO_3,
  SUPPORT_EMAIL,
} from "./constants";

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
        <a className="button secondary" href="#pricing">
          Get Started
        </a>
      </header>

      <section className="hero container">
        <div className="hero-content reveal">
          <p className="eyebrow">For online coaches</p>
          <h1>Automated YouTube Shorts for online coaches.</h1>
          <p className="subhead">
            Try Structura with a $29 Proof Pack (3 Shorts in 24 hours), or go monthly
            for 30 Shorts.
          </p>
          <div className="cta-row">
            <stripe-buy-button
              className="stripe-button"
              buy-button-id={STRIPE_PROOF_PACK_BUTTON_ID}
              publishable-key={STRIPE_PUBLISHABLE_KEY}
            />
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

      <section className="section container samples">
        <div className="section-head reveal">
          <h2>What Structura Shorts look like</h2>
          <p>
            Calm, branded Shorts designed for daily posting — no editing required.
          </p>
        </div>
        <div className="samples-grid">
          {[SAMPLE_VIDEO_1, SAMPLE_VIDEO_2, SAMPLE_VIDEO_3].map((video) => (
            <div className="video-card reveal" key={video}>
              <div className="video-frame">
                <iframe
                  src={
                    video.includes("youtube.com")
                      ? video
                      : `https://www.youtube.com/embed/${video}`
                  }
                  title="Structura Shorts sample"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
        <p className="note samples-note">
          Want these with your brand? Get a Proof Pack in 24 hours.
        </p>
        <a className="button primary" href={STRIPE_PROOF_PACK_URL}>
          Get Proof Pack ($29)
        </a>
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
        <div className="pricing-grid">
          <div className="price-card reveal">
            <div className="price-top">
              <h3>Proof Pack</h3>
              <span className="pill">Best for trying Structura</span>
            </div>
            <p className="price">$29 CAD</p>
            <ul className="checklist">
              <li>3 branded YouTube Shorts</li>
              <li>Captions.txt included</li>
              <li>Delivered in 24 hours</li>
              <li>No editing required</li>
            </ul>
            <div className="price-actions">
              <stripe-buy-button
                className="stripe-button"
                buy-button-id={STRIPE_PROOF_PACK_BUTTON_ID}
                publishable-key={STRIPE_PUBLISHABLE_KEY}
              />
              <p className="card-note">
                $29 credited toward your first month if you subscribe within 7 days.
              </p>
            </div>
          </div>
          <div className="price-card reveal">
            <div className="price-top">
              <h3>Monthly</h3>
              <span className="pill">Best for consistent creators</span>
            </div>
            <p className="price">$149 CAD / month</p>
            <ul className="checklist">
              <li>30 branded YouTube Shorts / month</li>
              <li>Captions.txt included</li>
              <li>First batch in 48 hours</li>
              <li>Cancel anytime</li>
            </ul>
            <div className="price-actions">
              <stripe-buy-button
                className="stripe-button"
                buy-button-id={STRIPE_MONTHLY_BUTTON_ID}
                publishable-key={STRIPE_PUBLISHABLE_KEY}
              />
              <p className="card-note">Pause or cancel anytime from Stripe.</p>
            </div>
          </div>
        </div>
        <p className="note stripe-note">
          Payments and cancellations are handled securely via Stripe.
        </p>
      </section>

      <section id="faq" className="section container">
        <div className="section-head reveal">
          <h2>FAQ</h2>
          <p>Everything you need to know before you start.</p>
        </div>
        <div className="faq-grid">
          <div className="faq-item reveal">
            <strong>What is the Proof Pack?</strong>
            <p>
              Three branded Shorts delivered in 24 hours, and credited toward your
              first month if you subscribe within 7 days.
            </p>
          </div>
          <div className="faq-item reveal">
            <strong>Is there a free trial?</strong>
            <p>No, we offer a low-cost Proof Pack instead.</p>
          </div>
          <div className="faq-item reveal">
            <strong>Do you use my logo?</strong>
            <p>If provided; otherwise we use your brand name in the footer.</p>
          </div>
          <div className="faq-item reveal">
            <strong>How do I get my Shorts?</strong>
            <p>Delivered via a private folder plus a captions.txt file.</p>
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
            Questions? <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </p>
          <p className="copyright">
            © {new Date().getFullYear()} Structura. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
