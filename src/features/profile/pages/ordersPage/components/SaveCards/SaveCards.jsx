import styles from './SaveCards.module.css'
import OrdersImg from '../../../../../../assets/images/OrdersPageImg1.png'
export function SaveCards() {
    return (
        <div className={ styles.container}>
            <div className={styles.card}>
                <img className={styles.img} src={OrdersImg} alt="img" />
                <p className={styles.courseId}>№ 24542312123</p>
                <div className={styles.status}></div>
            </div>
        </div>
    )
}