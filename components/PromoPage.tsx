import Link from 'next/link';
import styles from './PromoPage.module.css';
import { featureItems, navLinks, statItems, trustItems } from './promo-data';

function CheckMark() {
  return <span className={styles.check}>✓</span>;
}

const flags = ['🇺🇸','🇬🇧','🇩🇪','🇨🇦','🇫🇷','🇯🇵','🇧🇷','🇦🇺','🇳🇱','🇮🇹','🇪🇸','🇹🇷','🇸🇪','🇵🇱'];

export default function PromoPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.brand}>
            <span className={styles.brandText}>
              2e<span className={styles.brandAccent}>x</span>tract
            </span>
          </Link>

          <nav className={styles.nav}>
            {navLinks.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.headerActions}>
            <Link href="/signin" className={styles.signIn}>
              Sign In
            </Link>
            <Link href="/app/signup" className={styles.primaryButton}>
              Start Now
            </Link>
          </div>
        </div>
      </header>

      <section className={`${styles.section} ${styles.hero}`}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            Enterprise proxies
            <br />
            from $0.70/GB
          </h1>

          <p className={styles.heroText}>
            The premium, reliable network for your high-volume data operations.
          </p>

          <div className={styles.heroButtons}>
            <Link href="/app/signup" className={styles.primaryButton}>
              Get Started Now
            </Link>
          </div>

          <div className={styles.dashboardWrap}>
            <div className={styles.sideCardLeft}>
              <div className={styles.miniChart} />
              <div className={styles.sideRows}>
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className={styles.dashboard}>
              <div className={styles.dashboardTopbar}>
                <div className={styles.dashboardLogo}>2extract</div>
                <div className={styles.dashboardTopLinks}>
                  <span>Dashboard</span>
                  <span>Balance</span>
                  <span className={styles.dashboardBadge}>Buy Balance</span>
                </div>
              </div>

              <div className={styles.dashboardMain}>
                <aside className={styles.dashboardSidebar}>
                  <span className={styles.sidebarActive}>Overview</span>
                  <span>My Proxies</span>
                  <span>Billing</span>
                  <span>API Docs</span>
                </aside>

                <div className={styles.dashboardContent}>
                  <div className={styles.metricRow}>
                    <div className={styles.metricBox}>
                      <strong>$3963.70</strong>
                      <span>Balance</span>
                    </div>
                    <div className={styles.metricBox}>
                      <strong>15</strong>
                      <span>Active Projects</span>
                    </div>
                    <div className={styles.metricBox}>
                      <strong>1761.60 GB</strong>
                      <span>Traffic Used</span>
                    </div>
                  </div>

                  <div className={styles.bigChart}>
                    <div className={styles.chartLine} />
                  </div>

                  <div className={styles.tableRow}>
                    <div className={styles.tableBox} />
                    <div className={styles.codeBox} />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.sideCardRight}>
              <div className={styles.rightHeader}>Create Proxy</div>
              <div className={styles.formLine} />
              <div className={styles.formLine} />
              <div className={styles.formLine} />
              <div className={styles.formLineShort} />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.infrastructure}`}>
        <h2 className={styles.centerTitle}>Infrastructure built for enterprise demands</h2>

        <div className={styles.statsCard}>
          {statItems.map((item) => (
            <article key={item.label} className={styles.statCard}>
              <div className={styles.statValue}>{item.value}</div>
              <div className={styles.statLabel}>{item.label}</div>
            </article>
          ))}
        </div>

        <p className={styles.centerText}>
          Our robust infrastructure provides the reliability and scale required for mission-critical data operations.
        </p>

        <div className={styles.flags}>
          {flags.map((flag, i) => (
            <span key={i} className={styles.flag}>
              {flag}
            </span>
          ))}
        </div>
      </section>

      <section id="features" className={styles.section}>
        <h2 className={styles.centerTitle}>A platform that scales with you</h2>

        <div className={styles.featuresGrid}>
          {featureItems.map((item) => (
            <article key={item.title} className={styles.featureCard}>
              <h3 className={styles.featureTitle}>{item.title}</h3>
              <p className={styles.featureText}>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pricing" className={`${styles.section} ${styles.pricingSection}`}>
        <div className={styles.pricingSmokeLeft} />
        <div className={styles.pricingSmokeRight} />

        <div className={styles.pricingInner}>
          <h2 className={styles.pricingTitle}>An exclusive rate for high-volume partners</h2>
          <p className={styles.pricingText}>
            We provide premium infrastructure and personalized pricing for businesses that operate at scale.
          </p>

          <article className={styles.pricingCard}>
            <div className={styles.priceLabel}>Flex Pay-As-You-Go</div>
            <div className={styles.priceRow}>
              <span className={styles.priceFrom}>from</span>
              <div className={styles.priceValue}>$0.70</div>
              <span className={styles.priceUnit}>/ per GB</span>
            </div>

            <p className={styles.priceDescription}>
              To lock in your volume rate, simply top up your balance and contact our support.
            </p>

            <ul className={styles.list}>
              <li><CheckMark /> Guaranteed volume discounts</li>
              <li><CheckMark /> Dedicated account &amp; support expert</li>
              <li><CheckMark /> No long-term contracts</li>
              <li><CheckMark /> Start with a minimum $10 top-up</li>
            </ul>

            <Link href="/app/signup" className={styles.primaryButton}>
              Get Started &amp; Secure Your Rate
            </Link>
          </article>
        </div>
      </section>

      <section id="ethics" className={styles.section}>
        <h2 className={styles.centerTitle}>A partner you can trust</h2>
        <p className={styles.centerTextWide}>
          Our commitment to a 100% ethically-sourced network protects your brand&apos;s reputation and ensures long-term operational stability.
        </p>

        <div className={styles.trustGrid}>
          {trustItems.map((item, index) => (
            <article key={item.title} className={styles.trustCard}>
              <div className={styles.trustVisual}>
                <div className={`${styles.visualOrb} ${styles[`visualOrb${index + 1}`]}`} />
              </div>
              <h3 className={styles.trustTitle}>{item.title}</h3>
              <p className={styles.trustText}>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <div className={styles.brandText}>
              2e<span className={styles.brandAccent}>x</span>tract
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
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Acceptable Use (AUP)</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
