import './Ads.css'
import AdsImg from '../../../../assets/images/ads.svg'
export function Ads() { 
    return (
        <div className="ads">
            <img src={AdsImg} alt="img" />
            <div>
                <button>Ko'rish</button>
            </div>
        </div>
    )
}