import Banner from '../../../../assets/images/cartBanners.svg'
import './Banner.css'
export function Banners() { 
    return (
        <>
            <div className='banner-img'>
                <img src={ Banner} alt="img" />
            </div>
        </>
    )
}