import styles from './Filter.module.css'
export function Filter() {
    return (
        <>
            <div className={ styles.filterCard}>
                <div className={styles.header}>
                    <h6>Filter</h6>
                    <p>Tozalash</p>
                </div>
                <div className={styles.main}>
                    <div className={styles.level}>
                        <label>Darajani Tanlang:</label>
                        <select name="select" className={styles.select}>
                            <option>Barchasi</option>
                            <option>Oson</option>
                            <option>Ortacha</option>
                            <option>Qiyin</option>
                        </select>
                    </div>
                    <div className={styles.level}>
                        <label>Kategoriyani tanlang:</label>
                        <select name="select" className={styles.select}>
                            <option>Barchasi</option>
                            <option>Boshlang'ich</option>
                            <option>Havaskor</option>
                            <option>Professional</option>
                        </select>
                    </div>
                    <div className={styles.level}>
                        <label>Darslik tili:</label>
                        <select name="select" className={styles.select}>
                            <option>Barchasi</option>
                            <option>Uzbek</option>
                            <option>Russian</option>
                            <option>English</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}
