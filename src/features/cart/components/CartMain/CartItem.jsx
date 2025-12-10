import { CartItemList } from "./CartItemList";
import { CartData } from './CartData/CartData'
export function CartItem() { 
    return (
        <>
            
            {CartData.map(item => (<CartItemList key={item.id}  {...item} />))}
            
        </>
    )
}