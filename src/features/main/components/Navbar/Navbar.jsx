import './Navbar.css'
import Video from "../../../../assets/images/Board.svg";
import FightGameIcon from "../../../../assets/icons/fighter.svg";
import LikeStick from '../../../../assets/icons/likeStick.svg'
import UnlikeStick from '../../../../assets/icons/unlikeStick.svg'
import Rating from '../../../../assets/images/rating.svg'
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
            <nav className="nav"> 
                <div className='nav-player'>
                    <div className='nav-head'>
                        <h2>Kun o'yini</h2>
                        <p>Korish</p>
                    </div>
                    <div className='nav-video'>
                        <img src={ Video} alt="img" />
                    </div>
                    <div className='nav-persons'>
                        <img src={LikeStick} alt="icon" />
                        <h6>Abdusattorov Nodirbek</h6>
                        <img src={FightGameIcon} alt="icon" />
                        <h6>Magnus Carlsen</h6>
                        <img id='unlikeImg' src={ UnlikeStick} alt="icon" />
                    </div>
                </div>
                <div className='nav-rating'>
                    <img src={ Rating} alt="img" />
                </div>
            </nav>
        </>
    )
}