import { useSelector } from "react-redux"
import "./Checkbox.scss"

export default function Checkbox({ item, onChange }: { item: string, onChange: any }) {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <label className="checkbox">
            <input
                className="checkbox__input"
                type="checkbox"
                name={item}
                id={item}
                onChange={() => onChange(item)}
            />
            <label className={`checkbox__text ${isDark && 'checkbox__text--dark'}`} htmlFor={item}>{item}</label>
            <span className="checkbox__checkmark"></span>
        </label>
    )
}

