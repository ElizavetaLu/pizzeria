import "./Contacts.scss"
import Map from "./sections/map/Map"
import Contact from "./sections/contact/Contact"
import DineWithUs from "./sections/dine-with-us/DineWithUs"

export default function Contacts() {



    return (
        <>
            <main className="contacts">
                <h1 className="contacts__title">contact</h1>
                <Contact />
                <Map />
            </main>
            <DineWithUs />
        </>
    )
}
