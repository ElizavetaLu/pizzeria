import { useSelector } from "react-redux"
import SectionTitle from "../../../../components/section-title/SectionTitle"
import "./About.scss"

export default function About() {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <div className="about-section">
            <SectionTitle title="About Us" />
        </div>
    )
}
