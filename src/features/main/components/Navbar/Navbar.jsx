import  styles from './Navbar.module.css'
import Video from "../../../../assets/images/Board.svg";
import FightGameIcon from "../../../../assets/icons/fighter.svg";
import LikeStick from '../../../../assets/icons/likeStick.svg'
import UnlikeStick from '../../../../assets/icons/unlikeStick.svg'
import { Link } from 'react-router-dom';
import { MainRatingPlayers } from '../../../../Api/Api';
export function Navbar() {
    return (
        <>
            <NavbarCard/>
        </>
    )
}

export function NavbarCard() { 
    return (
        <>
            <nav className={styles.nav}> 
                <div className={styles.navplayer}>
                    <div className={styles.navHead}>
                        <h2>Kun o'yini</h2>
                        <p>Korish</p>
                    </div>
                    <div className={styles.navVideo}>
                        <img src={ Video} alt="img" />
                    </div>
                    <div className={styles.navPersons}>
                        <img src={LikeStick} alt="icon" />
                        <h6>Abdusattorov Nodirbek</h6>
                        <img src={FightGameIcon} alt="icon" />
                        <h6>Magnus Carlsen</h6>
                        <img id='unlikeImg' src={ UnlikeStick} alt="icon" />
                    </div>
                </div>
                <div className={styles.navRating}>
                    <header className={styles.headerRating}>
                        <h5>Reyting</h5>
                        <Link to='reyting'>Barchasi
                            <img src="/src/assets/icons/vektor.svg" alt="icon" />
                        </Link>
                    </header>
                    <main className={styles.main}>
                        {MainRatingPlayers.map(item => (
                            <div className={styles.ratingItem}>
                                <div className={styles.playerName}>
                                    <p>{ item.order}.</p>
                                    <h6>{item.playerName}</h6>
                                </div>
                                <div className={styles.ratingChange}>
                                    <img id='changeIcon' src={item.ratingChangeIcon} alt="icon" />
                                    <p>{ item.ratingChange}</p>
                                </div>
                                <h6 className={ styles.points}>{item.points}</h6>
                                <h6 className={ styles.ratingDelta}>{ item.ratingDelta}</h6>
                           </div> 
                        ))}
                    </main>
                </div>
            </nav>
        </>
    )
}