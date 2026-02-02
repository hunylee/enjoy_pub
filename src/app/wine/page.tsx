import styles from './page.module.css';

export default function WinePage() {
    const wines = [
        { name: 'Cabernet Sauvignon', origin: 'Napa Valley, USA', notes: 'Blackberry, Oak, Full-bodied' },
        { name: 'Pinot Noir', origin: 'Burgundy, France', notes: 'Cherry, Earth, Elegant' },
        { name: 'Sauvignon Blanc', origin: 'Marlborough, NZ', notes: 'Lime, Passionfruit, Crisp' },
    ];

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Exquisite <span className={styles.gold}>Wine</span> Collection</h1>
                <p className={styles.subtitle}>Fine wines sourced from renowned vineyards.</p>
            </header>

            <div className={styles.grid}>
                {wines.map((wine, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imagePlaceholder}>🍷</div>
                        <h3 className={styles.cardTitle}>{wine.name}</h3>
                        <p className={styles.origin}>{wine.origin}</p>
                        <p className={styles.notes}>{wine.notes}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
