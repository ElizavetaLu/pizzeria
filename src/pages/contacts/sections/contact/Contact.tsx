import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Socials from "../../../../components/socials/Socials"
import "./Contact.scss"


export default function Contact() {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <div className="contact">
            <div className="contact__block">
                <div className="contact__block-inputs">
                    <div className="contact__field">
                        <input
                            className="contact__input"
                            type="text"
                            name="name"
                            id="name"
                            required
                            placeholder=""
                        />
                        <label className={`contact__field-name ${isDark && 'contact__field-name--dark'}`} htmlFor="name">
                            Name
                        </label>
                    </div>
                    <div className="contact__field">
                        <input
                            className="contact__input"
                            type="email"
                            name="name"
                            id="name"
                            required
                            placeholder=""
                        />
                        <label className={`contact__field-name ${isDark && 'contact__field-name--dark'}`} htmlFor="email">
                            Email address
                        </label>
                    </div>
                </div>
                <div className="contact__field">
                    <textarea
                        className="contact__input"
                        name="message"
                        id="message"
                        cols={20}
                        rows={5}
                        required
                        placeholder=""
                    >
                    </textarea>
                    <label className={`contact__field-name ${isDark && 'contact__field-name--dark'}`} htmlFor="message">
                        Message
                    </label>
                </div>
                <div className="contact__button-container">
                    <button className="contact__button">submit</button>
                </div>
            </div>


            <div className="contact__block">
                <Link to="tel:+39 0873 801409" className={`contact__phone ${isDark && 'contact__phone--dark'}`}>+39 0873 801409</Link>

                <div className="contact__block-data">
                    <span className={`contact__block-title ${isDark && 'contact__block-title--dark'}`}>Address</span>
                    <span className={`contact__block-text ${isDark && 'contact__block-text--dark'}`}>Via Lambruschina, 8A, 02040 Borgonuovo RI, Italy</span>
                </div>
                <div className="contact__block-data">
                    <span className={`contact__block-title ${isDark && 'contact__block-title--dark'}`}>Opening hours</span>
                    <p className={`contact__block-text ${isDark && 'contact__block-text--dark'}`}>Monday - Thursday : 9am - 10pm</p>
                    <p className={`contact__block-text ${isDark && 'contact__block-text--dark'}`}>Friday : 9am - 11pm</p>
                    <p className={`contact__block-text ${isDark && 'contact__block-text--dark'}`}>Saturday - Sunday : 10am - 2am</p>
                </div>
                <div className="contact__block-data">
                    <span className={`contact__block-title ${isDark && 'contact__block-title--dark'}`}>Email</span>
                    <span className={`contact__block-text ${isDark && 'contact__block-text--dark'}`}>infovirgolini@gmail.com</span>
                </div>
                <Socials />
            </div>
        </div>
    )
}
