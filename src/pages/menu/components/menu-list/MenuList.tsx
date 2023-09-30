import { useSelector } from "react-redux"
import { pizza } from "../../../../data"
import SectionTitle from "../../../../components/section-title/SectionTitle"
import MenuItem from "../menu-item/MenuItem"
import "./MenuList.scss"


export default function MenuList() {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <div className={`menu-list ${isDark && 'menu-list--dark'}`}>
            <div className="menu-list__items">
                <SectionTitle prescription="find your taste" title="pizzeria di virgolini" />

                {
                    pizza.map(item => <MenuItem key={item._id} {...item} />)
                }
            </div>
        </div >
    )
}
