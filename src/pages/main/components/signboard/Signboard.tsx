import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import "./Signboard.scss"

export default function Signboard() {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <div className="signboard">
            <div className="signboard__threads">
                <div className="signboard__thread">
                    <div className={`signboard__thread-line ${isDark && 'signboard__thread-line--dark'}`}></div>
                    <img className={`signboard__thread-icon ${isDark && 'signboard__thread-icon--dark'}`} src="/images/icons/clamp.png" alt="" />
                </div>
                <div className="signboard__thread">
                    <div className={`signboard__thread-line ${isDark && 'signboard__thread-line--dark'}`}></div>
                    <img className={`signboard__thread-icon ${isDark && 'signboard__thread-icon--dark'}`} src="/images/icons/clamp.png" alt="" />
                </div>
            </div>

            <div className="signboard__board">
                <div className="signboard__logo">virgolini</div>
                <input className="signboard__search" type="text" placeholder="Search" />
                <div className="signboard__order">
                    <Link to="/menu" className="signboard__button">order online</Link>
                </div>
            </div>
        </div>
    )
}
