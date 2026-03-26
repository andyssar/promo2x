import Image from 'next/image';
import Link from 'next/link';
import styles from './PromoPage.module.css';
import { featureItems, flagItems, navLinks, statItems } from './promo-data';

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
                <Image src="/icons/signin.svg" alt="" width={14} height={14} aria-hidden="true" />
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
                  <Image src={flag.src} alt={flag.alt} width={40} height={40} className={styles.flagImage} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className={styles.featuresSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>A platform that scales with you</h2>
          <div className={styles.featuresGrid}>
            {featureItems.map((item, idx) => (
              <article key={item.title} className={styles.featureCard}>
                <div className={styles.featureIconWrap}>
                  <Image src={item.icon} alt="" width={16} height={16} className={idx === 1 || idx === 2 ? styles.featureMask : undefined} />
                </div>
                <h3 className={styles.featureTitle}>{item.title}</h3>
                <p className={styles.featureDescription}>{item.description}</p>
                <div className={idx % 2 === 0 ? styles.cardMask1 : styles.cardMask2} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className={styles.stubSection}><div className={styles.container}><h2 className={styles.sectionTitle}>Pricing</h2></div></section>
      <section id="ethics" className={styles.stubSection}><div className={styles.container}><h2 className={styles.sectionTitle}>Ethics</h2></div></section>
    </main>
  );
}
