import { useSelector } from 'react-redux'
import { navigation } from '../../data'
import Logo from '../logo/Logo'
import './Header.scss'


export default function Header() {

    const { isDark } = useSelector((state: any) => state.theme)


    return (
        <div className={`header-container ${isDark && 'header-container--dark'}`}>
            <header className="header">
                <Logo />
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        {
                            navigation.map(item => {
                                return (
                                    <li
                                        key={item.title}
                                        className={`header__nav-item ${isDark && 'header__nav-item--dark'}`}
                                    >
                                        {item.title}
                                    </li>
                                )
                            })
                        }
                    </ul>
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
