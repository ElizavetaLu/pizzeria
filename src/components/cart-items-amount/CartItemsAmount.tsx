import { useSelector } from "react-redux"
import "./CartItemsAmount.scss"

export default function CartItemsAmount() {

    const { isDark } = useSelector((state: any) => state.theme)
    const { data } = useSelector((state: any) => state.cart)

    return (
        <div className={`cart-items ${isDark && 'cart-items--dark'}`}>{data.length}</div>
    )
}
