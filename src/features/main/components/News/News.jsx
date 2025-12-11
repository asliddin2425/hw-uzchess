import { MainNewsData } from '../../../../Api/Api';
import styles from './News.module.css';
import { Link } from 'react-router-dom'; 
export function News() { 
    return (
        <>
            <NewsList/>
        </>
    )
}

export function NewsList() {
    return (
    <>
        <div className={styles.news}>
            <div className={styles.newsHeader}>
                <h6>Yangiliklar</h6>
                <Link to='/news'>Barchasi
                    <img src='./src/assets/icons/vektor.svg' alt="icon" />
                </Link>
            </div>  
            <div className={styles.newsMain}>
                {MainNewsData.map(item => (
                <div className={styles.newsItem}>
                    <img src={item.img} alt="img" />
                    <div className={styles.newsAbout}>
                        <p>{ item.date}</p>
                        <div className={styles.newsText}>
                        <h5>{ item.title}</h5>
                        <h6>{item.newsDeteils }.</h6>
                        </div>
                    </div>
                </div>
               ))}
            </div>
        </div>
            <button className={styles.more}>Ko'proq</button>
    </>
    )
}