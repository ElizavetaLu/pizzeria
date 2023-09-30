import SectionTitle from "../../../../components/section-title/SectionTitle"
import MenuItem from "../menu-item/MenuItem"
import { pizza } from "../../../../data"
import "./MenuList.scss"


export default function MenuList() {

    return (
        <div className="menu-list">
            <div className="menu-list__items">
                <SectionTitle prescription="find your taste" title="pizzeria di virgolini" />

                {
                    pizza.map(item => <MenuItem key={item._id} {...item} />)
                }
            </div>
        </div >
    )
}
