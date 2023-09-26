import { useSelector } from "react-redux"
import OpeningHours from "../opening-hours/OpeningHours"
import Navigation from "../navigation/Navigation"
import "./Footer.scss"
import Flag from "../flag/Flag"


export default function Footer() {

  const { isDark } = useSelector((state: any) => state.theme)

  return (
    <footer className="footer-container">
      <div className="footer">
        <span className="footer__logo">virgolini</span>

        <Flag/>

        <Navigation light />

        <div className="footer__data">

          <div className="footer__opening-hours">
            <OpeningHours />
          </div>

          <button className="footer__button">book a table</button>

          <div className="footer__contacts">
            <ul className="footer__contacts-list">
              <li className="footer__list-item">
                <img className="footer__item-icon" src="/images/icons/location.png" alt="" />
                <span className="footer__item-text">Via Lambruschina, 8A, 02040 Borgonuovo RI, Italy</span>
              </li>
              <li className="footer__list-item">
                <img className="footer__item-icon" src="/images/icons/phone.png" alt="" />
                <span className="footer__item-text">+39 0873 801409</span>
              </li>
              <li className="footer__list-item">
                <img className="footer__item-icon" src="/images/icons/email.png" alt="" />
                <span className="footer__item-text">infovirgolini@gmail.com</span>
              </li>
            </ul>
          </div> 
          
          <div className="footer__socials">
            <p className="footer__rights">All rights reserved 2023.</p>
            <ul className="footer__list">
              <li className="footer__social">
                <img className="footer__social-icon" src="/images/icons/instagram.png" alt="" />
              </li>
              <li className="footer__social">
                <img className="footer__social-icon" src="/images/icons/twitter.png" alt="" />
              </li>
              <li className="footer__social">
                <img className="footer__social-icon" src="/images/icons/facebook.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
