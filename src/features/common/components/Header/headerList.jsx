import UzChessIcon from '../../../../assets/icons/uzchess.svg'
import SearchIcon from '../../../../assets/icons/search.svg'
import SavatIcon from '../../../../assets/icons/savat.svg'
import NotificationsIcon from '../../../../assets/icons/notification.svg'
import EnterIcon from '../../../../assets/icons/enterIcons.svg'
import AuthImg from '../../../../assets/images/authImg.png'
import LockedImg from '../../../../assets/images/lockedImg.png'
import styles from './header.module.css'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export function HeaderList() {
    const [auth, setAuth] = useState(false)
    const handleClick = (e) => {
    e.preventDefault();
    setAuth(true);
    };
    return(
        <>
            <header className={styles.header}>
                <div className={styles.imgSelect}>
                    <img src={UzChessIcon} alt="chess" />
                    <select name="lang" id="language">
                        <option>O‘zbekcha</option>
                        <option>O‘zbekcha</option>
                        <option>O‘zbekcha</option>
                    </select>
                </div>   
                <ol className={styles.navLinks}>
                    <NavLink to="" style={({ isActive }) => ({ fontFamily: 'sans-serif', textDecoration: 'none',borderBottom: isActive ? '2px solid #1C92E0' : 'none',color: isActive ? 'white' : '#B5B7B8'})}>Asosiy</NavLink>
                    <NavLink to="/news" style={({ isActive }) => ({ fontFamily: 'sans-serif', textDecoration: 'none',borderBottom: isActive ? '2px solid #1C92E0' : 'none',color: isActive ? 'white' : '#B5B7B8'})}>Yangiliklar</NavLink>
                    <NavLink to="/courses" style={({ isActive }) => ({ fontFamily: 'sans-serif', textDecoration: 'none',borderBottom: isActive ? '2px solid #1C92E0' : 'none',color: isActive ? 'white' : '#B5B7B8'})}>Kurslar</NavLink>
                    <NavLink to="library" style={({ isActive }) => ({ fontFamily: 'sans-serif', textDecoration: 'none',borderBottom: isActive ? '2px solid #1C92E0' : 'none',color: isActive ? 'white' : '#B5B7B8'})}>Kutubxona</NavLink>
                    <NavLink to="boglanish" style={({ isActive }) => ({ fontFamily: 'sans-serif', textDecoration: 'none',borderBottom: isActive ? '2px solid #1C92E0' : 'none',color: isActive ? 'white' : '#B5B7B8'})}>Boglanish</NavLink>
                </ol>

                <div className={styles.headerIcons}>
                    <div className={styles.icons}>
                        <img src={SearchIcon} alt="serach" />
                        <Link to={'cart'}><img src={SavatIcon} alt="savat" /></Link>
                        <img src={NotificationsIcon} alt="icon" />
                    </div>
                    <button  className={styles.kirish} type='button' onClick={handleClick}>Kirish<img src={EnterIcon} alt="icon" /></button>
                    {auth && (
                        <div className={styles.container123}>
                            <div className={styles.box}>                                
                                <img className={styles.lockedImg} src={LockedImg} alt="img" />
                                <h1 className={styles.advice}>UzChess platformasidan to‘liq foydalanish uchun tizimga kiring</h1>
                                <p>Platformaning barcha imkoniyatlaridan foydalanish uchun tizimga kirishingiz kerak</p>
                                <button  className={styles.loginBtn}>Kirish</button><br></br>
                                <button className={styles.signUpBtn}>Ro‘yxatdan o‘tish</button>
                                <img className={styles.img} src={AuthImg} alt="img" />
                            </div>
                            <button className={styles.closeBtn} onClick={() => setAuth(false)}>×</button>
                        </div>
                    )}
                </div>
            </header>            
        </>
    )
}