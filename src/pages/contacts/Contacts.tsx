import "./Contacts.scss"
import { useSelector } from "react-redux"
import DineWithUs from "./sections/dine-with-us/DineWithUs"
import Contact from "./sections/contact/Contact"
import Map from "./sections/map/Map"

export default function Contacts() {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <>
            <main className="contacts">
                <h1 className={`contacts__title ${isDark && 'contacts__title--dark'}`}>contact</h1>
                <Contact />
                <Map />
            </main>
            <DineWithUs />
        </>
    )
}
