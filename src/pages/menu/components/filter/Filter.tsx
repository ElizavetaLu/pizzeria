import "./Filter.scss"

export default function Filter({ isShown }: { isShown: boolean }) {

    return (
        <div className={`filter ${isShown && 'filter--hidden'}`}>
            <div className="filter__parameters">
                <div className="filter__ingredients">
                    <span className="filter__parameter">Ingredients:</span>
                </div>
                <div className="filter__price">
                    <span className="filter__parameter">Price:</span>
                    <div className="filter__price-inputs">
                        <input className="filter__price-input" type="number" name="" id="" placeholder="from $" />
                        <span className="filter__price-separator">—</span>
                        <input className="filter__price-input" type="number" name="" id="" placeholder="to $" />
                    </div>
                    <input className="filter__price-range" type="range" name="" id="" />
                </div>
            </div>

            <div className="filter__button-container">
                <button className="filter__button">Apply filter</button>
            </div>
        </div>
    )
}
