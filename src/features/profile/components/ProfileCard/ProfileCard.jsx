
import AuthorIcon from '../../../../assets/icons/avatar.svg'
import CourseIcon from '../../../../assets/icons/kepka.svg'
import styles from './ProfileCard.module.css'
import { ProfileCardData as Data}  from '../../../../Api/Api'


export function Profile(){ 
    return (
        
            <ProfileCard Data={Data}/>

    )
}
export function ProfileCard({ Data }) { 
    return (
        <div className={ styles.container}>
            {Data.map(item => (
                <div className={styles.card}>
                <div className={styles.infoCard}>
                    <img src={ item.img} alt="img" />
                    <div className={ styles.cardAbout}>
                        <p className={ styles.title}>Shaxmat donalari bilan tanishuv</p>
                        <h5 className={styles.description}>Ushbu dars davomida siz har bir shaxmat donasi bilan
                            tanishib ularning o‘ziga xos xususiyatlari haqida bilib</h5>
                    </div>
                </div>
                <div className={ styles.divider}></div>
                <div className={styles.category}>
                    <div className={styles.level}>
                        <img src={ item.levelIcon} alt="icon" />
                            <p>{ item.level}</p>
                    </div>
                    <div className={styles.categoryDivider }></div>
                    <div className={styles.author}>
                        <img src={AuthorIcon} alt="icon" />
                            <p>{ item.author}</p>
                    </div>
                    <div className={styles.categoryDivider }></div>
                    <div className={styles.course}>
                        <img src={CourseIcon} alt="icon" />
                            <p>{ item.lessons}</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}