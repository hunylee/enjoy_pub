import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    ENJOY<span className={styles.highlight}>PUB</span>
                </Link>
                <div className={styles.links}>
                    <Link href="/beer" className={styles.link}>Beer</Link>
                    <Link href="/wine" className={styles.link}>Wine</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
