import { Dispatch } from "react"
import "./Switcher.scss"
import { useDispatch, useSelector } from "react-redux"
import { switchTheme } from "../../store/actions/actionCreatores";

export default function Switcher() {

    const dispatch: Dispatch<any> = useDispatch();
    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <div className="switcher">
            <input
                type="checkbox"
                id="switcher"
                name="switcher"
                className="switcher__input"
                value={isDark}
                onChange={() => dispatch(switchTheme())} 
            />
            <label htmlFor="switcher" className="switcher__label">
                <span className="switcher__circle"></span>
            </label>
        </div>
    )
}
