import FormInput from "../form-input/FormInput"
import "./Form.scss"

export default function Form({ toForm }: { toForm: any }) {
    return (
        <form ref={toForm} action="" className="form">
            <h1 className="form__title">We are waiting for <span className="form__title-bold">you</span></h1>
            <div className="form__inputs">
                <FormInput isRequired title="name" />
                <FormInput title="lastname" />
            </div>

            <FormInput title="Preferred position" />
            <FormInput isRequired title="phone number" />
            <FormInput isRequired title="email address" />
            <FormInput textarea title="message" />
            <FormInput file title="CV" />

            <button type="submit" className="form__button">send</button>
        </form>
    )
}
