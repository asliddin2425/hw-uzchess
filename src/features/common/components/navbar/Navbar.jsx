import './Navbar.css'
import NavbarIcon1 from '../../../../assets/icons/home.svg'
import NavbarIcon2 from '../../../../assets/icons/icon.svg'
import { Link } from 'react-router-dom'
export function Navbar() { 
    return (
        <>
            <div className="navbar">
                <div id="navigation">
                    <img src={NavbarIcon1} alt="home" />
                    <Link to={'/'}>Asosiy</Link>
                    <img src={NavbarIcon2} alt="icon" />
                    <Link to={'/'}>kutubxona</Link>
                </div>
            </div>
        </>
    )
}



