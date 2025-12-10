import './Footer.css'
import InstaIcon from '../../../../assets/icons/instagram.svg'
import TgIcon from '../../../../assets/icons/telegram.svg'
import YouTubeIcon from '../../../../assets/icons/youtube.svg'
import TwitterIcon from '../../../../assets/icons/twitter.svg'
import FbIcon from '../../../../assets/icons/fb.svg'
import EndIcon from '../../../../assets/icons/endIcon.svg'

export function Footer() { 
    return (
        <div className="footer">
            <img id="footer-uzchess" src="./src/assets/icons/uzchess.svg" alt="uzchess" />
            <ol>
                <li>Biz haqimizda</li>
                <li>Cookie fayllari siyosati</li>
                <li>Foydalanish qoidalari</li>
                <li>Cookie fayllari siyosati</li>
            </ol> 
            <div className='social-icons'>
                <img src={ InstaIcon} alt="icon" />
                <img src={TgIcon} alt="icon" />
                <img src={YouTubeIcon} alt="icon" />
                <img src={TwitterIcon} alt="icon" />
                <img src={ FbIcon} alt="icon" />
            </div>
            <div className='footer-end'>
                <p>© UzChess. All rights reserved.</p>
                <img src={EndIcon} alt="icon" />
                <p>Foydalanish qoidalari</p>
            </div>
        </div>
    )
}