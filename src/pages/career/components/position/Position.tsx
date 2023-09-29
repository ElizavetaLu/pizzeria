import { TPosition } from "../../../../types"
import "./Position.scss"

export default function Position({ title, image, scroll }: TPosition) {
    return (
        <div
            onClick={() => scroll.current!.scrollIntoView(false)}
            className="position"
            style={{ backgroundImage: `url(/images/career/${image})` }}
        >
            <h3 className="position__title">{title}</h3>
        </div>
    )
}
