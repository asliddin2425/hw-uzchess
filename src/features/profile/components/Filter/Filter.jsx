import styles from './Filter.module.css'
import FilterIcon1 from '../../../../assets/icons/profileFilterIcon1.svg'
import FilterIcon2 from '../../../../assets/icons/profileFilterIcon2.svg'
import FilterIcon3 from '../../../../assets/icons/profileFilterIcon3.svg'
import FilterIcon4 from '../../../../assets/icons/profileFilterIcon4.svg'
import { Link } from 'react-router-dom'
export function Filter() {
    return (
        <div className={ styles.filterBox}>
            <div className={styles.section}>
                <img src={ FilterIcon1} alt="icon" />
                <Link>Sotib olingan kurslar</Link>
            </div>
            <div className={styles.section}>
                <img src={ FilterIcon2} alt="icon" />
                <Link to={'/profile/orders'} >Buyurtmalar</Link>
            </div>
            <div className={styles.section}>
                <img src={ FilterIcon3} alt="icon" />
                <Link to={'Saqlanganlar'}>Saqlanganlar</Link>
            </div>
            <div className={styles.section}>
                <img src={ FilterIcon4} alt="icon" />
                <Link to={'Umumiy sozlamalar'}>Umumiy sozlamalar</Link>
            </div>
        </div>
    )
 }