import { useSelector } from "react-redux"
import SectionTitle from "../../../../components/section-title/SectionTitle"
import "./Menu.scss"
import Table from "./menu-table/table/Table"
import { pizza } from "../../../../data"
import { Link } from "react-router-dom"

export default function Menu() {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <div className="menu-section">
            <SectionTitle title="Menu" />
            <div className="menu-section__menu">
                <Table data={pizza.slice(0, 5)} />
                <div className={`menu-section__menu-separator ${isDark && 'menu-section__menu-separator--dark'}`}></div>
                <Table data={pizza.slice(5, 10)} />
            </div>

            <Link to="menu" className={`menu-section__link ${isDark && 'menu-section__link--dark'}`}>View all</Link>
        </div>
    )
}
