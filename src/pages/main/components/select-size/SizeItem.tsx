import { useDispatch, useSelector } from "react-redux"
import { setPizzaSize } from "../../../../store/actions/actionCreatores"
import { Dispatch } from "react"

export default function SizeItem({ currentSize }: { currentSize: string }) {

    const { isDark } = useSelector((state: any) => state.theme)

    const dispatch: Dispatch<any> = useDispatch()
    const { size } = useSelector((state: any) => state.selectedPizza)

    return (
        <div
            className={`size__item ${isDark && 'size__item--dark'} ${currentSize === size && 'size__item--active'}`}
            onClick={() => dispatch(setPizzaSize(currentSize))}>

            <div className={`size__prompt ${isDark && 'size__prompt--dark'}`}>
                100cm
            </div>

            <span className={`size__item-text ${isDark && 'size__item-text--dark'} ${currentSize === size && 'size__item-text--active'}`}>{currentSize}</span>
        </div>
    )
}
