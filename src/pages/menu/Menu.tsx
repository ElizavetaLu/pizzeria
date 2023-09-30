import MenuSection from "./sections/menu-section/MenuSection"
import MenuSearch from "./sections/search/MenuSearch"
import "./Menu.scss"

export default function Menu() {

    return (
        <div className="menu-container">
            <section className="image-section">
                <div className="image-section__dark-bg"></div>
                <h1 className="image-section__title">made by hand, eaten by hand</h1>
                <button className="image-section__button">view our menu</button>
            </section>

            <main className="menu">
                <MenuSearch />
                <MenuSection />
            </main>
        </div>
    )
}
