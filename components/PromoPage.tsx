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
                <Image src="/icons/signin.svg" alt="" width={16} height={16} aria-hidden="true" className={styles.signInIcon} />
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
            <Image src="/world_map.png" alt="" width={1885} height={670} className={styles.worldMap} />

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
                  <div className={styles.flagInner}>
                    <Image src={flag.src} alt={flag.alt} fill className={styles.flagImage} />
                  </div>
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
            {featureItems.map((item, idx) => {
              const featureIcons = [
                '/icons/app-window.svg',
                '/icons/shield-check.svg',
                '/icons/layout-dashboard.svg',
                '/icons/rocket.svg',
              ];
              const iconSrc = featureIcons[idx] ?? item.icon;

              return (
                <article key={item.title} className={styles.featureCard}>
                  <div className={styles.featureHeader}>
                    <Image src={iconSrc} alt="" width={24} height={24} className={styles.featureIcon} />
                    <h3 className={styles.featureTitle}>{item.title}</h3>
                  </div>

                  <p className={styles.featureDescription}>{item.description}</p>

                </article>
              );
            })}
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
              <div className={styles.pricingDivider} />
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
              <div className={styles.pricingButtonWrap}>
                <Link href="/app/signup" className={styles.primaryButtonLarge}>Get Started &amp; Secure Your Rate</Link>
              </div>
            </article>

  <article className={`${styles.ethicsCard} ${styles.ethicsCard2Only}`}>
    <div className={styles.ethicsCardTextCol}>
      <h3 className={styles.ethicsCardTitle}>{trustItems[1].title}</h3>
      <p className={styles.ethicsCardText}>{trustItems[1].description}</p>
    </div>
    <div className={styles.ethicsCardImageCol}>
      <Image src="/botnets.svg" alt="" width={320} height={200} className={styles.ethicsBotnetImage} />
    </div>
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
            <article className={`${styles.ethicsCard} ${styles.ethicsCard1Only}`}>
              <div className={styles.ethicsCardTextCol}>
                <h3 className={styles.ethicsCardTitle}>{trustItems[0].title}</h3>
                <p className={styles.ethicsCardText}>{trustItems[0].description}</p>
              </div>
              <div className={styles.ethicsCardImageCol}>
                <Image src="/consent.png" alt="" width={250} height={250} className={styles.ethicsConsentImage} />
              </div>
            </article>

  <article className={`${styles.ethicsCard} ${styles.ethicsCard2Only}`}>
    <div className={styles.ethicsCardTextCol}>
      <h3 className={styles.ethicsCardTitle}>{trustItems[1].title}</h3>
      <p className={styles.ethicsCardText}>{trustItems[1].description}</p>
    </div>
    <div className={styles.ethicsCardImageCol}>
      <Image src="/botnets.svg" alt="" width={320} height={200} className={styles.ethicsBotnetImage} />
    </div>
  </article>

          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.containerWide}>
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <Image src="/logo.svg" alt="2extract" width={92} height={20} />
              <div className={styles.footerSocials}>
                <a href="https://linkedin.com" aria-label="LinkedIn"><Image src="/icons/linkedin.svg" alt="" width={24} height={24} /></a>
                <a href="https://github.com" aria-label="GitHub"><Image src="/icons/github.svg" alt="" width={24} height={24} /></a>
                <a href="https://discord.gg" aria-label="Discord"><Image src="/icons/discord.svg" alt="" width={24} height={24} /></a>
              </div>
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
