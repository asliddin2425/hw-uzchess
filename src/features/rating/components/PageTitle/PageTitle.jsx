import styles from "./PageTitle.module.css"
import RatingIcon from '../../../../assets/icons/ratingIcon.svg'
export function RatingPageTitle() { 
    return (
        <div className={styles.rating}>
            <div>
                <img src={RatingIcon} alt="icon" />
                <p>Reyting</p>
            </div>
        </div>
    )
}