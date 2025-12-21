import styles from "./PageTitle.module.css"
import RatingIcon from '../../../../../../assets/icons/ratingIcon.svg'
export function GamesPageTitle() { 
    return (
        <div className={styles.rating}>
            <div>
                <img src={RatingIcon} alt="icon" />
                <p>O'yinlar</p>
            </div>
        </div>
    )
}