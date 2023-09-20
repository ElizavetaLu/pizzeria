import { useSelector } from "react-redux"
import "./SelectSize.scss"
import SizeItem from "./SizeItem"

export default function SelectSize() {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <div className="size">
            <h3 className="size__title">Select size</h3>
            <div className={`size__list ${isDark && 'size__list--dark'}`}>
                <SizeItem size="s"/>
                <SizeItem size="l"/>
                <SizeItem size="m"/> 
            </div>
        </div>

    )
}
