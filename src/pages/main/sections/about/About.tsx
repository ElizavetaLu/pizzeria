import TextBlock from "./text-block/TextBlock"
import "./About.scss"


export default function About() {

    return (
        <div className="about-container">
            <div className="about-section">
                <div className="about-section__block about-section__block--space">
                    <div className="images">
                        <img className="images__image images__image--left" src="/images/sections-images/half-pizza.jpg" alt="" />
                        <img className="images__image-vertical images__image-vertical--left" src="/images/sections-images/making-pizza.jpg" alt="" />
                    </div>
                    <TextBlock
                        prescription="about us"
                        title="a family story"
                        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda eveniet explicabo modi? Sapiente in, modi quam expedita porro reiciendis nostrum"
                        buttonText="history"
                        secondButtonText="join us"
                        path="#"
                        secondPath="career"
                    />
                </div>

                <div className="about-section__block">
                    <TextBlock
                        prescription="prime menu"
                        title="our restaurant"
                        content="Cupiditate error neque, optio amet est vel quidem obcaecati assumenda. Voluptatum, aliquid. Fugiat cumque quaerat blanditiis ducimus maiores quod architecto cum quia."
                        buttonText="book a table"
                        path="#"
                    />
                    <div className="images images--bottom">
                        <img className="images__image-vertical images__image-vertical--right" src="/images/sections-images/pizza-vertical.jpg" alt="" />
                        <img className="images__image images__image--right" src="/images/sections-images/pizza-slices.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
