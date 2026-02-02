import styles from './page.module.css';

export default function BeerPage() {
    const beers = [
        { name: 'Golden Haze IPA', origin: 'Vermont, USA', notes: 'Citrus, Tropical, Juicy' },
        { name: 'Midnight Stout', origin: 'Dublin, Ireland', notes: 'Coffee, Chocolate, Rich' },
        { name: 'Bavarian Wheat', origin: 'Munich, Germany', notes: 'Banana, Clove, Smooth' },
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Premium <span className={styles.gold}>Beer</span> Selection</h1>
                <p className={styles.subtitle}>Curated craft brews for the discerning palate.</p>
            </header>

            <div className={styles.grid}>
                {beers.map((beer, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imagePlaceholder}>🍺</div>
                        <h3 className={styles.cardTitle}>{beer.name}</h3>
                        <p className={styles.origin}>{beer.origin}</p>
                        <p className={styles.notes}>{beer.notes}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
