import Image from 'next/image';
import Link from 'next/link';
import styles from './PromoPage.module.css';

export default function PromoPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/logo.svg"
              alt="2extract"
              width={126}
              height={20}
              className={styles.logo}
              priority
            />
          </Link>

          <nav className={styles.nav}>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#ethics">Ethics</a>
          </nav>

          <div className={styles.headerActions}>
            <Link href="/signin" className={styles.signIn}>
              Sign In
            </Link>
            <Link href="/app/signup" className={styles.startNow}>
              Start Now
            </Link>
          </div>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/hero.svg"
            alt=""
            fill
            priority
            className={styles.heroBgImage}
          />
        </div>

        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            Enterprise proxies
            <br />
            from $0.70/GB
          </h1>

          <p className={styles.heroText}>
            The premium, reliable network for your high-volume data operations.
          </p>

          <Link href="/app/signup" className={styles.getStarted}>
            Get Started Now
          </Link>

          <div className={styles.dashboardWrap}>
            <Image
              src="/dashboard.png"
              alt="2extract dashboard"
              width={980}
              height={560}
              className={styles.dashboardImage}
              priority
            />
          </div>
        </div>
      </section>

      <section id="features" className={styles.stubSection}>
        <h2>Features section</h2>
      </section>

      <section id="pricing" className={styles.stubSection}>
        <h2>Pricing section</h2>
      </section>

      <section id="ethics" className={styles.stubSection}>
        <h2>Ethics section</h2>
      </section>
    </main>
  );
}
