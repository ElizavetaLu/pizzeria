import { useSelector } from 'react-redux'
import "./SectionTitle.scss"

export default function SectionTitle({ priscription, title }: { priscription: string, title: string }) {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <div className="title">
            <span className="title__priscription">{priscription}</span>
            <h3 className={`title__text ${isDark && 'title__text--dark'}`}>{title}</h3>
        </div>
    )
}
