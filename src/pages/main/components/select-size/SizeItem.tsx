import { useSelector } from "react-redux"

export default function SizeItem({ size }: { size: string }) {

    const { isDark } = useSelector((state: any) => state.theme)

    return (
        <div className={`size__item ${isDark && 'size__item--dark'}`}>
            <div className={`size__prompt ${isDark && 'size__prompt--dark'}`}>
                100cm
            </div>
            <span className={`size__item-text ${isDark && 'size__item-text--dark'}`}>{size}</span>
        </div>
    )
}
