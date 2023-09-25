import { useSelector } from "react-redux"
import "./SelectSize.scss"
import SizeItem from "./SizeItem"

const sizes = [
    {
        size: 's',
        length: '22cm'
    },
    {
        size: 'l',
        length: '32cm'
    },
    {
        size: 'm',
        length: '42cm'
    },
]

export default function SelectSize() {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <div className="size">
            <h3 className={`size__title ${isDark && 'size__title--dark'}`}>Select size</h3>
            <div className={`size__list ${isDark && 'size__list--dark'}`}>
                {
                    sizes.map(item => {
                        return (
                            <SizeItem key={item.size} currentSize={item.size} />
                        )
                    })
                } 
            </div>
        </div>

    )
}
