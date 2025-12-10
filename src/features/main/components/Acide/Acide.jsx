import styles from './Acide.module.css'
import { Link } from 'react-router-dom'
import DonationIcon from '../../../../assets/icons/donationIcon.svg'
import Banner from '../../../../assets/images/banner.svg'
import Vector from '../../../../assets/icons/vektor.svg'
import Star from '../../../../assets/icons/topCoursesStar.svg'
import ViewsIcon from '../../../../assets/icons/viewsIcon.svg'
import { MainTopCoursesData } from '../../../../Api/Api'
export function Acide() { 
    return (
        <div className={styles.acide}>
            <AcideDonation />
            <AcideBanner />
            <AcideTopCourses data={MainTopCoursesData} />
            <TopBooks/>
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
                    <CoursesList data={MainTopCoursesData } />
                </main>
            </div>
        </>
    )
}

export function CoursesList({ data}) { 
    return (
        <>
            {
                data.map(item => (
            <div className={styles.coursesCard1}>
                <div className={styles.cardImg}>
                    <img src={ item.img} alt="icon" />
                </div>
                <div className={styles.topCoursesAbout }>
                    <p>{ item.title}</p>
                    <div className={ styles.ratingAndViews}>
                        <div className={styles.coursesRating}>
                            <img src={Star} alt="icon" />
                            <h6>{ item.rating}</h6>   
                        </div>
                        <div className={ styles.viewsCounter}>
                            <img src={ViewsIcon} alt="icon" />
                            <h5>{ item.viewCount}</h5>
                        </div>
                    </div>
                </div>
            </div>
            ))
        }
        </>
    )
}

export function TopBooks() { 
    return (
        <>
            <div className={styles.topBooks}>

            </div>
        </>
    )
}

