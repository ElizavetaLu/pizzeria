import { useSelector } from 'react-redux'
import "./SectionTitle.scss"

export default function SectionTitle({ title }: { title: string }) {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <h3 className={`title ${isDark && 'title--dark'}`}>{title}</h3>
    )
}
