import Image from 'next/image';
import Link from 'next/link';
import styles from './PromoPage.module.css';
import { featureItems, flagItems, navLinks, statItems, trustItems } from './promo-data';

function CheckIcon() {
  return <span className={styles.checkIcon}>✓</span>;
}

export default function PromoPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.containerWide}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logoLink}>
              <Image src="/logo.svg" alt="2extract" width={128} height={28} priority />
            </Link>

            <nav className={styles.nav}>
              {navLinks.map((item) => (
                <a key={item.href} href={item.href}>{item.label}</a>
              ))}
            </nav>

            <div className={styles.headerActions}>
              <Link href="/signin" className={styles.signIn}>
                <Image src="/icons/signin.svg" alt="" width={16} height={16} aria-hidden="true" />
                <span>Sign In</span>
              </Link>
              <Link href="/app/signup" className={styles.primaryButton}>Start Now</Link>
            </div>
          </div>
        </div>
      </header>

      <section className={styles.heroSection}>
        <div className={styles.heroBg}>
          <Image src="/hero.svg" alt="" fill priority className={styles.heroBgImage} />
        </div>
        <div className={styles.containerWide}>
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>Enterprise proxies<br />from $0.70/GB</h1>
            <p className={styles.bodyText}>The premium, reliable network for your high-volume data operations.</p>
            <Link href="/app/signup" className={styles.primaryButtonLarge}>Get Started Now</Link>

            <div className={styles.dashboardWrap}>
              <Image src="/dashboard.png" alt="2extract dashboard" width={1320} height={680} priority className={styles.dashboardImage} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.infrastructureSection}>
        <div className={styles.containerWide}>
          <h2 className={styles.sectionTitle}>Infrastructure built for enterprise demands</h2>
          <div className={styles.worldMapWrap}>
            <Image src="/world-map.png" alt="" width={1885} height={670} className={styles.worldMap} />

            <div className={styles.statsPanel}>
              {statItems.map((item) => (
                <article key={item.label} className={styles.statCard}>
                  <div className={styles.statValue}>{item.value}</div>
                  <div className={styles.statMeta}>
                    <Image src={item.icon} alt="" width={18} height={18} className={styles.statIcon} />
                    <div className={styles.statLabel}>{item.label.split('\n').map((line) => <span key={line}>{line}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>

            <p className={styles.infrastructureText}>
              Our robust infrastructure provides the reliability and scale required for mission-critical data operations.
            </p>

            <div className={styles.flagsRow}>
              {flagItems.map((flag) => (
                <div key={flag.alt} className={styles.flagBadge}>
                  <Image src={flag.src} alt={flag.alt} fill className={styles.flagImage} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className={styles.featuresSection}>
        <div className={styles.containerWide}>
          <h2 className={styles.sectionTitle}>A platform that scales with you</h2>
          <div className={styles.featuresGrid}>
            {featureItems.map((item, idx) => (
              <article key={item.title} className={styles.featureCard}>
                <div className={styles.featureIconWrap}>
                  <Image src={item.icon} alt="" width={18} height={18} className={styles.featureIcon} />
                </div>
                <h3 className={styles.featureTitle}>{item.title}</h3>
                <p className={styles.featureDescription}>{item.description}</p>
                <Image
                  src={idx % 2 === 0 ? '/icons/mask_1.svg' : '/icons/mask_2.svg'}
                  alt=""
                  width={180}
                  height={180}
                  className={idx % 2 === 0 ? styles.cardMask1 : styles.cardMask2}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className={styles.pricingSection}>
        <div className={styles.pricingGlowLeft} aria-hidden="true" />
        <div className={styles.pricingGlowRight} aria-hidden="true" />
        <div className={styles.containerWide}>
          <div className={styles.pricingInner}>
            <h2 className={`${styles.sectionTitle} ${styles.sectionTitleLight}`}>An exclusive rate for high-volume partners</h2>
            <p className={`${styles.bodyText} ${styles.pricingBody}`}>
              We provide premium infrastructure and personalized pricing for businesses that operate at scale.
            </p>

            <article className={styles.pricingCard}>
              <div className={styles.pricingCardLabel}>Flex Pay-As-You-Go</div>
              <div className={styles.priceRow}>
                <span className={styles.priceFrom}>from</span>
                <strong className={styles.priceValue}>$0.70</strong>
                <span className={styles.priceUnit}>/ per GB</span>
              </div>
              <p className={styles.pricingCardText}>
                To lock in your volume rate, simply top up your balance and contact our support.
              </p>
              <ul className={styles.pricingList}>
                <li><CheckIcon /> Guaranteed volume discounts</li>
                <li><CheckIcon /> Dedicated account &amp; support expert</li>
                <li><CheckIcon /> No long-term contracts</li>
                <li><CheckIcon /> Start with a minimum $10 top-up</li>
              </ul>
              <Link href="/app/signup" className={styles.primaryButtonLarge}>Get Started &amp; Secure Your Rate</Link>
            </article>
          </div>
        </div>
      </section>

      <section id="ethics" className={styles.ethicsSection}>
        <div className={styles.containerWide}>
          <h2 className={styles.sectionTitle}>A partner you can trust</h2>
          <p className={styles.ethicsText}>
            Our commitment to a 100% ethically-sourced network protects your brand&apos;s reputation and ensures long-term operational stability.
          </p>

          <div className={styles.ethicsGrid}>
            {trustItems.map((item, idx) => (
              <article key={item.title} className={styles.ethicsCard}>
                <div className={styles.ethicsVisual}>
                  {idx === 0 && <Image src="/world-map.png" alt="" width={540} height={180} className={styles.ethicsVisualMap} />}
                  {idx === 1 && <div className={styles.ethicsOrbGreen} />}
                  {idx === 2 && <div className={styles.ethicsBadgeRow}><span>GDPR</span><span>CCPA</span></div>}
                  {idx === 3 && <div className={styles.ethicsShield}><Image src="/icons/heart.svg" alt="" width={26} height={26} /></div>}
                </div>
                <h3 className={styles.ethicsCardTitle}>{item.title}</h3>
                <p className={styles.ethicsCardText}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.containerWide}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <Image src="/logo.svg" alt="2extract" width={92} height={20} />
              <p>© 2025 2extract.<br />All rights reserved.</p>
            </div>
            <div className={styles.footerColumn}>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#ethics">Ethics</a>
            </div>
            <div className={styles.footerColumn}>
              <h4>Resources</h4>
              <a href="/about">About Us</a>
              <a href="https://docs.2extract.com">Documentation</a>
              <a href="https://help.2extract.com">Help Center</a>
            </div>
            <div className={styles.footerColumn}>
              <h4>Community</h4>
              <a href="https://discord.gg">Discord Community</a>
              <a href="https://github.com">GitHub</a>
              <a href="https://linkedin.com">LinkedIn</a>
            </div>
            <div className={styles.footerColumn}>
              <h4>Legal</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Acceptable Use (AUP)</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
