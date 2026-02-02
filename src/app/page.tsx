import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Discover the Art of <br />
            <span className={styles.gold}>Beer</span> & <span className={styles.gold}>Wine</span>
          </h1>
          <p className={styles.subtitle}>
            Explore our curated selection of premium beverages from around the world.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/beer" className={styles.ctaButton}>
              Explore Beer
            </Link>
            <Link href="/wine" className={styles.ctaButtonOutline}>
              Explore Wine
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featureCard}>
          <h3>Craft Beer</h3>
          <p>From IPAs to Stouts, taste the craftsmanship.</p>
        </div>
        <div className={styles.featureCard}>
          <h3>Fine Wine</h3>
          <p>Elegant reds and crisp whites for every occasion.</p>
        </div>
      </section>
    </div>
  );
}
