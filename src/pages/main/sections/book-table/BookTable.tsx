import { useSelector } from "react-redux"
import "./BookTable.scss"

export default function BookTable() {

  const { isDark } = useSelector((state: any) => state.theme)

  return (
    <div className="book-table">
      <div className={`book-table__booking`}>
        <p className={`book-table__prescription ${isDark && 'book-table__prescription--dark'}`}>book online anytime</p>
        <p className={`book-table__title ${isDark && 'book-table__title--dark'}`}>book a table</p>
        <div className="book-table__separator">
          <span className="book-table__separator-line"></span>
          <span className="book-table__separator-line"></span>
          <span className="book-table__separator-line"></span>
        </div>
        <div className="book-table__working-hours">
          <p className={`book-table__time ${isDark && 'book-table__time--dark'}`}>Monday - Thursday : 9am - 10pm</p>
          <p className={`book-table__time ${isDark && 'book-table__time--dark'}`}>Friday : 9am - 11pm</p>
          <p className={`book-table__time ${isDark && 'book-table__time--dark'}`}>Saturday - Sunday : 10am - 2am</p>
        </div>
        <div className="book-table__buttons">
          <button className={`book-table__button ${isDark && 'book-table__button--dark'}`}>book a table</button>
          <button className={`book-table__button ${isDark && 'book-table__button--dark'}`}>menu</button>
        </div>
      </div>
      
      <div className={`book-table__image`}></div>
    </div>
  )
}
