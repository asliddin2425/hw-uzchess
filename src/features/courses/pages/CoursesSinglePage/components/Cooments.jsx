import styles from './Comments.module.css'
import Star from '../../../../../assets/icons/Star 1.svg'
import User from '../../../../../assets/icons/Merchants.svg'
import BtnIcon from '../../../../../assets/icons/btnIcon.svg'
export function Comments() {
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