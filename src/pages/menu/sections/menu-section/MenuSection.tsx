import Cart from "../../components/cart/Cart"
import MenuList from "../../components/menu-list/MenuList"
import "./MenuSection.scss"


export default function MenuSection() {
    return (
        <div className="menu-main">
            <MenuList />
            <Cart />
        </div>
    )
}
