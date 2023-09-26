import { Link } from "react-router-dom"
import Flag from "../../../../../components/flag/Flag"
import "./TextBlock.scss"

export default function TextBlock({ prescription, title, content, buttonText, path }: { prescription: string, title: string, content: string, buttonText: string, path: string }) {
    return (
        <div className="text-block">
            <p className="text-block__prescription">{prescription}</p>
            <p className="text-block__title">{title}</p>
            <Flag />
            <p className="text-block__content">{content}</p>
            <Link to={path} className="text-block__link">{buttonText}</Link>
        </div>
    )
}
