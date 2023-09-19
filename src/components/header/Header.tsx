import Logo from '../logo/Logo'
import Switcher from '../switcher/Switcher'
import './Header.scss'


export default function Header() {
    return (
        <div className="header-container">
            <header className="header">
                <Logo />
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">menu</li>
                        <li className="header__nav-item">delivery</li>
                        <li className="header__nav-item">career</li>
                        <li className="header__nav-item">contacts</li>
                    </ul>
                    <Switcher />
                    <button className="header__button header__button--light">order online</button>
                </nav>
            </header>
        </div>
    )
}
