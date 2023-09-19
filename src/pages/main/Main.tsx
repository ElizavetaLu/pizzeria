import CircleSection from "./sections/circle-section/CircleSection"
import BookTable from "./sections/book-table/BookTable"
import NewPizza from "./sections/new-pizza/NewPizza"
import About from "./sections/about/About"
import Menu from "./sections/menu/Menu"
import "./Main.scss"

export default function Main() {

  return (
    <main className="main">
      <CircleSection />
      <NewPizza />
      <BookTable />
      <Menu />
      <About />
    </main>
  )
}
