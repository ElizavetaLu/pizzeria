import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { TAboutTextBlock } from "../../../../../types"
import Flag from "../../../../../components/flag/Flag"
import "./TextBlock.scss"


export default function TextBlock({ prescription, title, content, buttonText, secondButtonText, path, secondPath }: TAboutTextBlock) {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <div className="text-block">
            <p className={`text-block__prescription ${isDark && 'text-block__prescription--dark'}`}>{prescription}</p>
            <p className={`text-block__title ${isDark && 'text-block__title--dark'}`}>{title}</p>
            <Flag />
            <p className={`text-block__content ${isDark && 'text-block__content--dark'}`}>{content}</p>
            <div className="text-block__buttons">
                <Link to={path} className={`text-block__link ${isDark && 'text-block__link--dark'}`}>{buttonText}</Link>
                {
                    secondPath && <Link to={secondPath} className={`text-block__link ${isDark && 'text-block__link--dark'}`}>{secondButtonText}</Link>
                }
            </div>
        </div>
    )
}
