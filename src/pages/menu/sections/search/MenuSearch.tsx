import { useState } from "react"
import { useSelector } from "react-redux"
import SectionTitle from "../../../../components/section-title/SectionTitle"
import Filter from "../../components/filter/Filter"
import "./MenuSearch.scss"

export default function MenuSearch() {

    const { isDark } = useSelector((state: any) => state.theme)

    const [isShown, setIsShown] = useState<boolean>(false)

    return (
        <div className="menu-search">
            <SectionTitle prescription="Search faster" title="search in menu" />

            <div className="menu-search__search">
                <input
                    className={`menu-search__input ${isDark && 'menu-search__input--dark'}`}
                    type="text"
                    placeholder="search pizza"
                />
                <button className="menu-search__filter" onClick={() => setIsShown(prev => !prev)}>
                    <img className={`menu-search__icon ${isDark && 'menu-search__icon--dark'}`} src="/images/icons/filter.png" alt="" />
                </button>
            </div>

            <Filter isShown={isShown} setIsShown={setIsShown} />
        </div>
    )
}
