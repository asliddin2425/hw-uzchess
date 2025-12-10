import styles from './Acide.module.css'
import { Link } from 'react-router-dom'
import DonationIcon from '../../../../assets/icons/donationIcon.svg'
import Banner from '../../../../assets/images/banner.svg'
import Vector from '../../../../assets/icons/vektor.svg'
import CourseImg from '../../../../assets/images/topCoursesImg1.svg'
import Star from '../../../../assets/icons/topCoursesStar.svg'
export function Acide() { 
    return (
        <div className={styles.acide}>
            <AcideDonation />
            <AcideBanner />
            <AcideTopCourses/>
        </div>
    )
}

export function AcideDonation() { 
    return (
        <>
            <div className={ styles.acideDonation}>
                <img src={DonationIcon} alt="icon" />
                    <p>Loyiha rivojiga xissa</p>
                    <h6>Shaxmat rivojiga hissa qo‘shing</h6>
                    <button>soon</button>
            </div>
        </>
    )
}

export function AcideBanner() {
    return (
        <>
            <div className={styles.banner}>
                <img src={ Banner} alt="img" />
            </div>
        </>
    )
}
 
export function AcideTopCourses() { 
    return (
        <>
            <div className={ styles.topCourses}>
                <header className={ styles.header}>
                    <h6>Top kurslar</h6>
                    <Link to={ '/courses'}>Barchasi
                        <img src={Vector} alt="icon" />
                    </Link>
                </header>
                <main className={styles.main}>
                    <div className={styles.coursesCard1}>
                        <div className={styles.cardImg}>
                            <img src={ CourseImg} alt="icon" />
                        </div>
                        <div className={styles.topCoursesAbout }>
                            <p>Shaxmat donalari bilan tanishuv</p>
                            <div className={ styles.ratingAndViews}>
                                <h6>
                                    <img src={Star} alt="icon" />
                                </h6>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
