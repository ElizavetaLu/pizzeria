import { useEffect, useState } from 'react' 
import { useSelector } from 'react-redux' 
import Navigation from '../navigation/Navigation'
import Logo from '../logo/Logo'
import './Header.scss'


const defaultOffset = 200;
let lastScroll = 0;
const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;

export default function Header() {

    const { isDark } = useSelector((state: any) => state.theme)

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

                    {/* <Switcher /> */}
                    <button className={`header__button ${isDark && 'header__button--dark'}`}>order online</button>

                    <button className="header__button-mobile">
                        <img className={`header__button-icon ${isDark && 'header__button-icon--dark'}`} src="/images/icons/cart.png" alt="" />
                    </button>
                    <button className="header__button-mobile">
                        <img className={`header__button-icon ${isDark && 'header__button-icon--dark'}`} src="/images/icons/menu.png" alt="" />
                    </button>
                </nav>
            </header>
        </div>
    )
}
