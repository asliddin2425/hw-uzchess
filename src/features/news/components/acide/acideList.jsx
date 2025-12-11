import './acideList.css'
import BannerImg from '../../../../assets/images/banner.svg'
import { DataAcide } from '../../../../Api/Api'
import { Link } from 'react-router-dom'




export function AcideCard() { 
    return (
        <>
            <AcideList/>
        </>
    )
}

export function AcideList() { 
    return (
        <>

                <div className='acide'>
                    <img src={BannerImg} alt="icon" />
                <div className='top-books'>
                    <header className='topBooksHeader'>
                        <p>Top kitoblar</p>
                        <Link to='/library'>Barchasi
                            <img src='./src/assets/icons/vektor.svg' alt="" />
                        </Link>
                    </header>
                        <div div id='book-card'>
                            {DataAcide.map(item => (
                                <div className='book-item'>
                                    <img src={item.img} alt="img" />
                                    <h6>{item.title}</h6>
                                    <p>{ item.author}</p>
                                </div>
                            ))}
                        </div> 
                    </div>
                </div>
        </>
    )
}