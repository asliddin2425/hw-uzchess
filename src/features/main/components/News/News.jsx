import './News.css';
import Arrow from '../../../assets/Arrow.svg'
import NewsImg from '../../../assets/newsImg1.svg'
export function News() { 
    return (
        <>
            <NewsList/>
        </>
    )
}

export function NewsList() {
    return (
        <div className='news'>
            <div className='news-header'>
                <h6>Yangiliklar</h6>
                <p>Barchasi
                    <img src={ Arrow} alt="" />
                </p>
            </div>  
            <div className='news-main'>
                <div className='news-item'>
                    <img src={NewsImg} alt="img" />
                    <div className='news-about'>
                        <p>Sentabr 7, 2022</p>
                        <h4>Nodirbek Abdusattorov FIDE jonli reytingida 2700 balldan o‘tdi</h4>
                        <h6>O‘zbekistonlik yosh grossmeyster Turkiyada o‘tkazilgan shaxmat olimpiadasida ikkita g‘alaba qozonib, shaxmat bo‘yicha jahon reyting...</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}