import { useState } from "react"
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import "./Range.scss"

export default function Range() {

    const [from, setFrom] = useState<number>(10)
    const [to, setTo] = useState<number>(40)

    return (

        <div className="range">
            <div className="range__set-price">
                <label className="range__input-name" htmlFor="from">
                    From
                    <input
                        className="range__price-input"
                        type="number"
                        name="from"
                        id="from"
                        value={from}
                        onChange={e => setFrom(+e.target.value)}
                    />
                </label>

                <label className="range__input-name" htmlFor="to">
                    To
                    <input
                        className="range__price-input"
                        type="number"
                        name="to"
                        id="to"
                        value={to}
                        onChange={e => setTo(+e.target.value)}
                    />
                </label>
            </div>

            <MultiRangeSlider
                style={{ border: "none", boxShadow: "none", padding: "0" }}
                ruler={false}
                label={false}
                barLeftColor="#E4EFE7"
                barRightColor="#E4EFE7"
                barInnerColor="#8aeaa5"
                thumbLeftColor=""
                thumbRightColor=""
                min={10}
                max={40}
                step={1}
                minValue={from}
                maxValue={to}
                onInput={(e: ChangeResult) => {
                    setFrom(e.minValue);
                    setTo(e.maxValue);
                }}
            /> 
        </div>

    )
}
