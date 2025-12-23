import styles from './CoursesSinglePage.module.css'
import CashIcon from '../././../../assets/icons/cashIcon.svg'
import Union from '../../../assets/icons/Union.svg'
import Img from '../../../assets/images/coursesHeroSection.png'
import Kepka from '../../../assets/icons/kepka.svg'
import Star from '../../../assets/icons/Star 1.svg'
import Like from '../../../assets/icons/like.svg'
import ShareIcon from '../../../assets/icons/shareIcon.svg'
import CourseImg1 from '../../../assets/images/courseImg1.png'
import Vector from '../../../assets/icons/vektor.svg'
import User from '../../../assets/icons/Merchants.svg'
import BtnIcon from '../../../assets/icons/btnIcon.svg'
import React from 'react';
export function CoursesSingle() {
    return (
        <>
            <HeroSection />
            <MainContent />
            <Comments/>
        </>
    )
}

function HeroSection() {
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
                <button className={styles.buyCourse}>Kursni sotib olish</button>
                <button className={styles.like}><img src={Like} alt="icon" /></button>
                <button className={styles.share}><img src={ShareIcon} alt="icon" /></button>
            </div>
        </div>
    )
}

function MainContent() {
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



function Comments() {
    return (
        <div className={styles.commentsBox}>
            <header className={styles.commentHeader}>Kurs haqida izohlar</header>
            <main className={styles.commentMain}>
                <div className={styles.commentCard}>
                    <div className={styles.userInfo}>
                        <div className={styles.userInfoCard}>
                            <img src={User} alt="img" />
                            <div className={styles.userName}>
                                <p>Jasurbek Narzullayev</p>
                                <h6>7 Sentyabr 2022 y. 19:52
                                    <img src={Star} alt="icon" />
                                    <img src={Star} alt="icon" />
                                    <img src={Star} alt="icon" />
                                    <img src={Star} alt="icon" />
                                    <img src={Star} alt="icon" />
                                </h6>
                            </div>
                        </div>
                        <img src={BtnIcon} alt="icon" />
                    </div>
                    <p className={styles.comment}>
                        2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi.
                        Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi.
                        26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi.
                    </p>
                </div>
                <div className={styles.commentCard}>
                    <div className={styles.userInfo}>
                        <div className={styles.userInfoCard}>
                            <img src={User} alt="img" />
                            <div className={styles.userName}>
                                <p>Jasurbek Narzullayev</p>
                                <h6>7 Sentyabr 2022 y. 19:52
                                    <img src={Star} alt="icon" />
                                    <img src={Star} alt="icon" />
                                    <img src={Star} alt="icon" />
                                    <img src={Star} alt="icon" />
                                    <img src={Star} alt="icon" />
                                </h6>
                            </div>
                        </div>
                        <img src={BtnIcon} alt="icon" />
                    </div>
                    <p className={styles.comment}>
                        2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi.
                        Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi.
                        26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi.
                    </p>
                </div>

                <div className={styles.commentCard}>
                    <div className={styles.userInfo}>
                        <div className={styles.userInfoCard}>
                            <img src={User} alt="img" />
                            <div className={styles.userName}>
                                <p>Jasurbek Narzullayev</p>
                                <h6>7 Sentyabr 2022 y. 19:52
                                    <img src={Star} alt="icon" />
                                    <img src={Star} alt="icon" />
                                    <img src={Star} alt="icon" />
                                    <img src={Star} alt="icon" />
                                    <img src={Star} alt="icon" />
                                </h6>
                            </div>
                        </div>
                        <img src={BtnIcon} alt="icon" />
                    </div>
                    <p className={styles.comment}>
                        2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi.
                        Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi.
                        26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi.
                    </p>
                </div>
                <div className={styles.commentCard}>
                    <div className={styles.userInfo}>
                        <div className={styles.userInfoCard}>
                            <img src={User} alt="img" />
                            <div className={styles.userName}>
                                <p>Jasurbek Narzullayev</p>
                                <h6>7 Sentyabr 2022 y. 19:52
                                    <img src={Star} alt="icon" />
                                    <img src={Star} alt="icon" />
                                    <img src={Star} alt="icon" />
                                    <img src={Star} alt="icon" />
                                    <img src={Star} alt="icon" />
                                </h6>
                            </div>
                        </div>
                        <img src={BtnIcon} alt="icon" />
                    </div>
                    <p className={styles.comment}>
                        2016 yilda Nyu-Yorkda Karjakin va Karlsen shaxmat toji uchun o'yinda uchrashishdi.
                        Keyin Norvegiya chempioni tay-brekda g'alaba qozondi va chempionlik unvonini saqlab qoldi.
                        26 noyabr kuni Karlsen va Karuana 12-o'yinni o'tkazishadi. Oq qismlarni amerikalik boshqaradi.
                    </p>
                </div>



            </main>
            <button className={styles.allComments}>Barcha Izohlar</button>
        </div>
    )
}