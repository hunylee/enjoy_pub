import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <p>&copy; {new Date().getFullYear()} ENJOYPUB. All rights reserved.</p>
                <p className={styles.tagline}>Premium Beer & Wine Experience</p>
            </div>
        </footer>
    );
};

export default Footer;
