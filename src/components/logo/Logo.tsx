import { Link } from 'react-router-dom'
import './Logo.scss'

export default function Logo() {
    return (
        <Link to="/">
            <img className="logo logo--light" src="/images/icons/logo.png" alt="" />
        </Link>
    )
}
