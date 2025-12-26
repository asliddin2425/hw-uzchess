import styles from './NewsDeteils.module.css'
import NewsImg from '../../../../assets/images/newsImg3.svg'
import NewsImg2 from '../../../../assets/images/newsImg.svg'
import Belgi from '../../../../assets/icons/belgi.svg'
import Twitter from '../../../../assets/icons/twitter.svg'
import Facebook from '../../../../assets/icons/fb.svg'
import Telegram from '../../../../assets/icons/telegram.svg'
import Instagram from '../../../../assets/icons/instagram.svg'
import ViewsIcon from '../../../../assets/icons/viewsIcon.svg'
import Share from '../../../../assets/icons/shareIcon.svg'
import Vector from '../../../../assets/icons/vektor.svg'
import { Link } from 'react-router-dom'
export function NewsDeteils() {
    return (
        <>
            <div className={styles.mainContent}>
                <header className={styles.header}>
                    <p>O‘zbekiston shaxmatchilari olimpiadada Armanistonlik raqiblarini mag‘lub etishdi</p>
                    <h6>Sentabr 4, 2022 . 20:22</h6>
                </header>

                <img className={styles.newsImg1} src={NewsImg} alt="img" />
                
                <h5 className={styles.newsAbout}>Qonun nima haqida</h5>

                <h6 className={styles.newsText}>

                    Bugun Hindistonda shaxmat bo‘yicha olimpiadada to‘qqizinchi tur o‘yinlari bo‘lib o‘tdi. Tanlov 10 avgustga qadar davom etadi.<br></br><br></br>
                    TOSHKENT, 7 avgust – #sputnik. 44-Jahon shaxmat olimpiadasida O‘zbekiston erkaklar terma jamoasi Armanistonlik raqiblarini mag‘lub etdi. Bu haqda O‘zbekiston Sportni rivojlantirish vazirligi matbuot xizmati xabar berdi.<br></br><br></br>
                    Ikki davlat jamoalari o‘rtasidagi bahs 3:1 hisobida O‘zbekiston foydasiga hal bo‘ldi. Shu tariqa, hech qachon mag‘lubiyatga uchramagan respublika terma jamoasi 188 ta jamoadan iborat turnir jadvalida birinchi o‘rinni egalladi. Umumiy hisobda sportchilar 16 ochko jamg‘ardi.
                    Turnirda ikkinchi o‘rinni Hindiston, uchinchi o‘rinni Armaniston terma jamoasi egalladi.
                    Shu bilan birga, O‘zbekiston ayollar terma jamoasi o‘yinda isroillik raqiblariga imkoniyatni boy berdi.<br></br><br></br>
                    Bungacha o‘zbekistonlik badmintonchilar “Osiyo bolalari” xalqaro sport o‘yinlarida turli nomdagi to‘rtta medalni qo‘lga kiritgan edi.
                </h6>

                <div className={styles.qoida}>
                    <img src={Belgi} alt="icon" />
                    <div className={styles.qoidaHaqida}>
                        <p>
                            Hujjat bilan favqulodda vaziyatlardan muhofaza qilishga oid axborotni yashirish, o‘z vaqtida taqdim etmaslik yoki bila turib yolg‘on axborot taqdim etish taqiqlanishi belgilandi.
                        </p>
                        <h5>Shohruh Baxtiyorov</h5>
                        <h6>Favqulotda vaziyatlar vazirligi mas’ul xodimi</h6>
                    </div>
                </div>

                <img src={NewsImg2} className={styles.newsImg2} alt="img" />
                
                <ul className={styles.listText}>
                    <li>
                        Bugun Hindistonda shaxmat bo‘yicha olimpiadada to‘qqizinchi tur o‘yinlari bo‘lib o‘tdi.
                        Tanlov 10 avgustga qadar davom etadi.
                    </li>
                    <li>
                        TOSHKENT, 7 avgust – #sputnik. 44-Jahon shaxmat olimpiadasida O‘zbekiston erkaklar terma jamoasi Armanistonlik raqiblarini mag‘lub etdi.
                        Bu haqda O‘zbekiston Sportni rivojlantirish vazirligi matbuot xizmati xabar berdi.
                    </li>
                    <li>
                        Ikki davlat jamoalari o‘rtasidagi bahs 3:1 hisobida O‘zbekiston foydasiga hal bo‘ldi. Shu tariqa, hech qachon mag‘lubiyatga uchramagan respublika terma jamoasi 188 ta jamoadan iborat turnir jadvalida birinchi o‘rinni egalladi.
                        Umumiy hisobda sportchilar 16 ochko jamg‘ardi.
                        Turnirda ikkinchi o‘rinni Hindiston, uchinchi o‘rinni Armaniston terma jamoasi egalladi. Shu bilan birga, O‘zbekiston ayollar terma jamoasi o‘yinda isroillik raqiblariga imkoniyatni boy berdi.
                    </li>
                    <li>
                        Bungacha o‘zbekistonlik badmintonchilar “Osiyo bolalari” xalqaro sport
                        o‘yinlarida turli nomdagi to‘rtta medalni qo‘lga kiritgan edi.
                    </li>
                </ul>

                <div className={styles.socialMedia}>
                    <div className={styles.socialIcons}>
                        <img src={Twitter} alt="icon" />
                        <img src={Facebook} alt="icon" />
                        <img src={Telegram} alt="icon" />
                        <img src={Instagram} alt="icon" />   
                    </div>

                    <div className={styles.views}>
                        <img src={ViewsIcon} alt="icon" />
                        <p>5132</p>
                    </div>

                    <button className={styles.share}>
                        <p>Поделиться</p>
                        <img src={Share} alt="icon" />
                    </button>
                </div>
            </div>

            <div className={styles.similarNews}>
                <div className={styles.similarNewsHead}>
                    <p>O‘xshash yangiliklar</p>
                    <Link to={'/news'} >Barcha yangiliklar
                        <img src={Vector} alt="icon" />
                    </Link>
                </div>
                <div className={styles.newsContain}>
                <div className={styles.newsBox}>
                    <img src={NewsImg2} alt="img" />
                    <p>Sentabr 7, 2022</p>
                    <h5>Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi</h5>
                    <h6>O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘....</h6>
                </div>
                <div className={styles.newsBox}>
                    <img src={NewsImg2} alt="img" />
                    <p>Sentabr 7, 2022</p>
                    <h5>Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi</h5>
                    <h6>O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘....</h6>
                </div>
                <div className={styles.newsBox}>
                    <img src={NewsImg2} alt="img" />
                    <p>Sentabr 7, 2022</p>
                    <h5>Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi</h5>
                    <h6>O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘....</h6>
                </div>
                </div>
            </div>
        </>
    )
}