import Link from 'next/link';
import styles from './PromoPage.module.css';
import { featureItems, metricPills, navLinks, statItems, trustItems } from './promo-data';
import {
  CheckShieldIcon,
  GaugeIcon,
  LightningIcon,
  ShieldIcon,
  SparkIcon,
} from './icons';

const featureIcons = [SparkIcon, ShieldIcon, GaugeIcon, LightningIcon] as const;
const trustIcons = [CheckShieldIcon, ShieldIcon, SparkIcon, CheckShieldIcon] as const;

function CheckMark() {
  return <span className={styles.check}>✓</span>;
}

export default function PromoPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandDot} />
            <span>2extract</span>
          </Link>

          <nav className={styles.nav}>
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <Link href="/signin" className={styles.secondaryButton}>
              Sign In
            </Link>
            <Link href="/app/signup" className={styles.primaryButton}>
              Start Now
            </Link>
          </div>
        </div>
      </header>

      <section className={`${styles.section} ${styles.hero}`}>
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowGlow} />
              <span>High-volume residential proxies</span>
            </div>

            <h1 className={styles.heroTitle}>
              Enterprise proxies from <span className={styles.gradientText}>$0.70/GB</span>
            </h1>

            <p className={styles.heroText}>
              The premium, reliable network for your high-volume data operations.
            </p>

            <div className={styles.heroButtons}>
              <Link href="/app/signup" className={styles.primaryButton}>
                Get Started Now
              </Link>
              <a href="#pricing" className={styles.ghostButton}>
                View Pricing
              </a>
            </div>
          </div>

          <div className={styles.panel}>
            <div className={styles.panelInner}>
              <div className={styles.panelTop}>
                <div>
                  <div className={styles.panelLabel}>Network Snapshot</div>
                </div>
                <div className={styles.panelTag}>Live routing</div>
              </div>

              <div className={styles.featureBadge}>
                <SparkIcon className={styles.inlineIcon} />
                <div>
                  <div className={styles.cardTitle}>Zero-lag dashboard</div>
                  <div className={styles.cardSub}>Instant controls</div>
                </div>
              </div>

              <div className={styles.panelChart}>
                <svg viewBox="0 0 600 260" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="line" x1="0" x2="1" y1="0" y2="0">
                      <stop offset="0%" stopColor="#7cecff" />
                      <stop offset="100%" stopColor="#7a89ff" />
                    </linearGradient>
                    <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgba(124,236,255,0.35)" />
                      <stop offset="100%" stopColor="rgba(124,236,255,0)" />
                    </linearGradient>
                  </defs>
                  <path d="M0 180 C60 170, 90 118, 135 130 S230 210, 290 165 S385 80, 450 105 S550 158, 600 80 L600 260 L0 260 Z" fill="url(#area)" />
                  <path d="M0 180 C60 170, 90 118, 135 130 S230 210, 290 165 S385 80, 450 105 S550 158, 600 80" fill="none" stroke="url(#line)" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </div>

              <div className={styles.floatingCard}>
                <div className={styles.cardTitle}>Throughput</div>
                <div className={styles.cardValue}>10M+</div>
                <div className={styles.cardSub}>Ethically sourced IPs available for scale</div>
              </div>

              <div className={styles.smallFloatingCard}>
                <div className={styles.cardTitle}>Success Rate</div>
                <div className={styles.cardValue}>~99%</div>
                <div className={styles.cardSub}>Stable delivery</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statsWrap}>
          {statItems.map((item) => (
            <article key={item.label} className={styles.statCard}>
              <div className={styles.statValue}>{item.value}</div>
              <div className={styles.statLabel}>{item.label}</div>
            </article>
          ))}

          <article className={styles.infoCard}>
            <div className={styles.infoRow}>
              <div>
                <h2 className={styles.infoHeading}>Infrastructure built for enterprise demands</h2>
                <p className={styles.infoText}>
                  Our robust infrastructure provides the reliability and scale required for mission-critical data operations.
                </p>
              </div>

              <div className={styles.metricPills}>
                {metricPills.map((item) => (
                  <div key={item} className={styles.metricPill}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="features" className={styles.section}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionKicker}>Features</p>
          <h2 className={styles.sectionTitle}>A platform that scales with you</h2>
        </div>

        <div className={styles.gridTwo}>
          {featureItems.map((item, index) => {
            const Icon = featureIcons[index];
            return (
              <article key={item.title} className={styles.featureCard}>
                <div className={styles.featureIconWrap}>
                  <Icon />
                </div>
                <h3 className={styles.featureTitle}>{item.title}</h3>
                <p className={styles.featureText}>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="pricing" className={styles.section}>
        <div className={styles.pricingGrid}>
          <div className={styles.sectionHead}>
            <p className={styles.sectionKicker}>Pricing</p>
            <h2 className={styles.sectionTitle}>An exclusive rate for high-volume partners</h2>
            <p className={styles.sectionText}>
              We provide premium infrastructure and personalized pricing for businesses that operate at scale.
            </p>
          </div>

          <article className={styles.pricingCard}>
            <div className={styles.priceLabel}>Flex Pay-As-You-Go</div>
            <div className={styles.priceRow}>
              <div className={styles.priceValue}>$0.70</div>
              <div className={styles.priceUnit}>/ per GB</div>
            </div>
            <p className={styles.sectionText}>
              To lock in your volume rate, simply top up your balance and contact our support.
            </p>
            <ul className={styles.list}>
              <li><CheckMark /> Guaranteed volume discounts</li>
              <li><CheckMark /> Dedicated account &amp; support expert</li>
              <li><CheckMark /> No long-term contracts</li>
              <li><CheckMark /> Start with a minimum $10 top-up</li>
            </ul>
            <div style={{ position: 'relative', zIndex: 1, marginTop: 24 }}>
              <Link href="/app/signup" className={styles.primaryButton}>
                Get Started &amp; Secure Your Rate
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section id="ethics" className={styles.section}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionKicker}>Ethics</p>
          <h2 className={styles.sectionTitle}>A partner you can trust</h2>
          <p className={styles.sectionText}>
            Our commitment to a 100% ethically-sourced network protects your brand&apos;s reputation and ensures long-term operational stability.
          </p>
        </div>

        <div className={styles.gridTwo}>
          {trustItems.map((item, index) => {
            const Icon = trustIcons[index];
            return (
              <article key={item.title} className={styles.ethicsCard}>
                <div className={styles.ethicsIconWrap}>
                  <Icon />
                </div>
                <h3 className={styles.ethicsTitle}>{item.title}</h3>
                <p className={styles.ethicsText}>{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div>
            <div className={styles.brand}>
              <span className={styles.brandDot} />
              <span>2extract</span>
            </div>
            <p className={styles.footerText}>
              Enterprise-grade proxy infrastructure for reliable large-scale data operations.
            </p>
            <div className={styles.footerMeta}>© 2025 2extract. All rights reserved.</div>
          </div>

          <div className={styles.footerColumn}>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#ethics">Ethics</a>
          </div>

          <div className={styles.footerColumn}>
            <h4>Resources</h4>
            <Link href="/about">About Us</Link>
            <a href="https://docs.2extract.com" target="_blank" rel="noreferrer">Documentation</a>
            <a href="https://help.2extract.com" target="_blank" rel="noreferrer">Help Center</a>
          </div>

          <div className={styles.footerColumn}>
            <h4>Community</h4>
            <a href="https://discord.gg" target="_blank" rel="noreferrer">Discord Community</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          <div className={styles.footerColumn}>
            <h4>Legal</h4>
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/aup">Acceptable Use (AUP)</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
