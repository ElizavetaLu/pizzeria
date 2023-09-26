import "./Signboard.scss"

export default function Signboard() {
    return (
        <div className="signboard">
            <div className="signboard__threads">
                <div className="signboard__thread">
                    <div className="signboard__thread-line"></div>
                    <img className="signboard__thread-icon" src="/images/icons/clamp.png" alt="" />
                </div>
                <div className="signboard__thread">
                    <div className="signboard__thread-line"></div>
                    <img className="signboard__thread-icon" src="/images/icons/clamp.png" alt="" />
                </div>
            </div>

            <div className="signboard__board">
                <div className="signboard__logo">virgolini</div>
                <input className="signboard__search" type="text" placeholder="Search" />
                <div className="signboard__order">
                    <button className="signboard__button">order online</button>
                    </div>
            </div>
        </div>
    )
}
