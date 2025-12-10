import './acideList.css'
import BannerImg from './assets/Banners.svg'





export function AcideCard({ DataAcide}) { 
    return (
        <>
            <div>
                {DataAcide.map(item => (<AcideList key={item.id} {...item} />))}
            </div>
            
        </>
    )
}

export function AcideList({ img, title, author }) { 
    return (
        <>
            <div className='acide'>
                <img src={BannerImg} alt="icon" />
                <div className='top-books'>
                    <div className='book-card'>
                        <img src={img} alt="img" />
                        <h6>{title}</h6>
                        <p>{ author}</p>
                    </div>
                </div>
            </div>
        </>
    )
}