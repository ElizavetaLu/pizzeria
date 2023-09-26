import { Link } from "react-router-dom"
import { navigation } from "../../data"
import "./Navigation.scss"

export default function Navigation({ light }: { light?: boolean }) {
    return (
        <ul className="navigation">
            {
                navigation.map(item => {
                    return (
                        <Link
                            to={item.title}
                            key={item.title}
                            className={`navigation__item ${light && 'navigation__item--light'}`}
                        >
                            {item.title}
                        </Link>
                    )
                })
            }
        </ul>
    )
}
