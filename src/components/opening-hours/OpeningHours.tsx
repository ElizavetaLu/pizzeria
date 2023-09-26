import { useSelector } from "react-redux"
import "./OpeningHours.scss"

export default function OpeningHours() {

      const { isDark } = useSelector((state: any) => state.theme)

  return (
    <div className="opening-hours">
    <p className={`opening-hours__time ${isDark && 'opening-hours__time--dark'}`}>Monday - Thursday : 9am - 10pm</p>
    <p className={`opening-hours__time ${isDark && 'opening-hours__time--dark'}`}>Friday : 9am - 11pm</p>
    <p className={`opening-hours__time ${isDark && 'opening-hours__time--dark'}`}>Saturday - Sunday : 10am - 2am</p>
  </div>
  )
}
