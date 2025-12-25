import styles from './MainContent.module.css'
import CourseImg1 from '../../../../../assets/images/courseImg1.png'
import Vector from '../../../../../assets/icons/vektor.svg'
 export function MainContent() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <p>1. Asosiy donalar</p>
                <img src={Vector} alt="icon" />
            </header>
            <div className={styles.main}>
                <div className={styles.card1}>
                    <img src={CourseImg1} alt="img" />
                    <p>1.1 Kirish</p>
                </div>
                <div className={styles.card1}>
                    <img src={CourseImg1} alt="img" />
                    <p>1.2 Mot qilish</p>
                </div>
                <div className={styles.card1}>
                    <img src={CourseImg1} alt="img" />
                    <p>1.2 Piyoda bilan tanishuv</p>
                </div>              
            </div>

            <div className={styles.cardItems}>
                <div className={styles.section2}>
                    <p>2. Eng ko‘p foydalaniladigan donalar</p>
                    <img src={Vector} alt="icon" />
                </div>
                <div className={styles.section2}>
                    <p>3. Mot qilish oson bo‘lgan donalar</p>
                    <img src={Vector} alt="icon" />
                </div>
            </div>
        </div>
    )
}