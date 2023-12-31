import CircleSection from "./sections/circle-section/CircleSection"
import MobileWelcome from "./sections/mobile-welcome/MobileWelcome"
import Signboard from "./components/signboard/Signboard"
import BookTable from "./sections/book-table/BookTable"
import NewPizza from "./sections/new-pizza/NewPizza"
import About from "./sections/about/About"
import Menu from "./sections/menu/Menu"
import "./Main.scss"

export default function Main() {

  return (
    <main className="main">
      <CircleSection />
      <MobileWelcome />
      <Signboard />
      <NewPizza />
      <BookTable />
      <Menu />
      <div className="main__section-separator"></div>
      <About />
    </main>
  )
}
