import { useSelector } from "react-redux"
import "./BookTable.scss"
import OpeningHours from "../../../../components/opening-hours/OpeningHours"
import Flag from "../../../../components/flag/Flag"

export default function BookTable() {

  const { isDark } = useSelector((state: any) => state.theme)

  return (
    <div className="book-table">
      <div className={`book-table__booking`}>
        <p className={`book-table__prescription ${isDark && 'book-table__prescription--dark'}`}>book online anytime</p>
        <p className={`book-table__title ${isDark && 'book-table__title--dark'}`}>book a table</p>

        <Flag/>

        <OpeningHours />

        <div className="book-table__buttons">
          <button className={`book-table__button ${isDark && 'book-table__button--dark'}`}>book a table</button>
          <button className={`book-table__button ${isDark && 'book-table__button--dark'}`}>menu</button>
        </div>
      </div>

      <div className={`book-table__image`}></div>
    </div>
  )
}
