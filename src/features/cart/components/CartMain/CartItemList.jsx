import './CartItemList.css'
import { Counter } from './Counter/Counter'

export function CartItemList({ img, title, newPrice, oldPrice }) { 
    function formatPrice(price) {
    return new Intl.NumberFormat("uz", {minimumFractionDigits: 2}).format(price).replaceAll(',', ' ')
}

    return(
        <div className="cart-item">
            <div className='cart-img'>
                <img src="" alt="" />
                <img src={img} alt="img" />
            </div>
            <div className='title'>
                <p>{ title}</p>
            </div>
            <div className='cart-price'>
                <h6>{ formatPrice(newPrice)}uzs</h6>
                <p>{formatPrice (oldPrice)}uzs</p>
            </div>

            <Counter/>
        </div>
    )
}

