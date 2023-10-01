import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItemsAmount from '../cart-items-amount/CartItemsAmount'
import Navigation from '../navigation/Navigation'
import Switcher from '../switcher/Switcher'
import Logo from '../logo/Logo'
import './Header.scss'
import Cart from '../../pages/menu/components/cart/Cart'


const defaultOffset = 200;
let lastScroll = 0;
const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;

export default function Header() {

    const { isDark } = useSelector((state: any) => state.theme)
    const { data } = useSelector((state: any) => state.cart)

    const [isHide, setIsHide] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {

            if (scrollPosition() > lastScroll
                && !isHide
                && scrollPosition() > defaultOffset
            ) {
                lastScroll = scrollPosition()
                setIsHide(true)
            } else if (scrollPosition() < lastScroll && isHide) {
                lastScroll = scrollPosition()
                setIsHide(false)
            }
        })

    }, [isHide])


    return (
        <div className={`header-container ${isDark && 'header-container--dark'} ${isHide && 'header-container--hidden'}`}>
            <header className="header">
                <Logo />
                <nav className="header__nav">
                    <Navigation />

                    <Switcher />

                    <div className='header__button-container'>
                        <img className={`header__button-icon ${isDark && 'header__button-icon--dark'}`} src="/images/icons/cart.png" alt="" />
                        {
                        data.length !== 0 && <CartItemsAmount />
                        }

{/* <Cart/> */}
                    </div>

                    <button className="header__button-mobile">
                        <img className={`header__button-icon ${isDark && 'header__button-icon--dark'}`} src="/images/icons/menu.png" alt="" />
                    </button>
                </nav>
            </header>
        </div>
    )
}
