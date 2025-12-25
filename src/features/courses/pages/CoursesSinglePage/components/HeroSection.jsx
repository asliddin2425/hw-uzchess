import styles from './HeroSection.module.css'
import CashIcon from '../../../../../assets/icons/cashIcon.svg'
import Union from '../../../../../assets/icons/Union.svg'
import Img from '../../../../../assets/images/coursesHeroSection.png'
import Kepka from '../../../../../assets/icons/kepka.svg'
import Like from '../../../../../assets/icons/like.svg'
import ShareIcon from '../../../../../assets/icons/shareIcon.svg'
import PayImg from '../../../../../assets/images/payImg.png'
import EarnIcon from '../../../../../assets/icons/cashIcon.svg'
import Paylov from '../../../../../assets/icons/paylov.svg'
import Payme from '../../../../../assets/icons/payme.svg'
import Click from '../../../../../assets/icons/click.svg'
import Uzum from '../../../../../assets/icons/uzum.svg'
import Star from '../../../../../assets/icons/Star 1.svg'
import { useState } from 'react'
 export function HeroSection() {
    const [buyCourses, setBuyCourses] = useState(false)
    const handleClick = (e) => {
    e.preventDefault();
    setBuyCourses(true);
    };
    return (
        <div className={styles.heroSection}>
            <img className={styles.backImg} src={Img} alt="img" />
            <div className={styles.coursesAbout}>
                <h1 className={styles.title}>Shaxmat donalari bilan tanishuv</h1>
                <div className={ styles.pricesInfo}>
                     <img src={CashIcon} alt="icon" />
                    <p className={styles.newPrice}>55 000.00 uzs</p>
                    <p className={styles.oldPrice}>160 000.00 uzs</p>
                </div>
            </div>

            <div className={styles.categories}>
                <p className={styles.level}>
                    <img src={Union} alt="icon" />
                    Boshlang’ich
                </p>
                <p className={styles.category}> 
                    <img src={Kepka} alt="icon" />
                    4 ta bo'lim
                </p>
                <p className={styles.lesson}> 
                    <img src={Kepka} alt="icon" />
                    24 ta dars
                </p>
            </div>

            <div className={styles.rating}>
                <div className={ styles.stars}>
                    <img src={Star} alt="icon" />
                    <img src={Star} alt="icon" />
                    <img src={Star} alt="icon" />
                    <img src={Star} alt="icon" />
                    <img src={Star} alt="icon" />
                </div>
                <div className={styles.reviews}>
                    <h5>5.0</h5>
                    <p>(234 ta izoh)</p>
                </div>
            </div>

            <div className={styles.buttons}>
                <button className={styles.buyCourse} type='button' onClick={handleClick} >Kursni sotib olish</button>
                {buyCourses && (
                    <div className={styles.selectedCourse}>
                        <div className={styles.card}>
                            <img className={styles.payimg} src={PayImg} alt="img" />
                            <div className={styles.buyCourseInfo}>
                                <p>Xarid qilinayotgan kurs:</p>
                                <h2>Shaxmat donalari bilan tanishuv</h2>
                                <h6><img src={EarnIcon} alt="icon" />55 000.00 uzs</h6>
                            </div>

                            <div className={styles.paymentType}>
                                <div className={styles.paylov}>
                                    <img src={Paylov} alt="icon" />
                                    <input type="checkbox" />
                                </div>
                                <div className={styles.paylov}>
                                    <img src={Payme} alt="icon" />
                                    <input type="checkbox" />
                                </div>
                                <div className={styles.paylov}>
                                    <img src={Click} alt="icon" />
                                    <input type="checkbox" />
                                </div>
                                <div className={styles.paylov}>
                                    <img src={Uzum} alt="icon" />
                                    <input type="checkbox" />
                                </div>
                            </div>

                            <div className={styles.payBtn}>
                                <button className={styles.cancel} onClick={() => setBuyCourses(false)}>Bekor qilish</button>
                                <button type='button' className={styles.continue}>Davom etish</button>
                            </div>
                        </div>
                        <button className={styles.closeBtn} onClick={() => setBuyCourses(false)}>×</button>
                    </div>
                )}
                <button className={styles.like}><img src={Like} alt="icon" /></button>
                <button className={styles.share}><img src={ShareIcon} alt="icon" /></button>
            </div>
        </div>
    )
}