import MenuSection from "./sections/menu-section/MenuSection"
import MenuSearch from "./sections/search/MenuSearch"
import "./Menu.scss"

export default function Menu() {


    return (
        <div className="menu-container">
            <section className="menu-container__image-section">
                <h1>some text</h1>
            </section>

            <main className="menu">
                <MenuSearch />
                <MenuSection />
            </main>
        </div>
    )
}
