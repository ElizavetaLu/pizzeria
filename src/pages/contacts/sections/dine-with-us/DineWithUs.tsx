import { Link } from "react-router-dom"
import "./DineWithUs.scss"

export default function DineWithUs() {
    return (
        <div className="dine">
            <div className="dine__dark-bg"></div>
            <h1 className="dine__title">dine with us</h1>

            <div className="dine__data">
                <a href="tel:+39 0873 801409" className="dine__phone">+39 0873 801409</a>
                <Link to="/menu" className="dine__button">order now</Link>
                <Link to="/booking" className="dine__button dine__button-book">book a table</Link>
            </div>
        </div>
    )
}
