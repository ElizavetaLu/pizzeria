import { TFormInput } from "../../../../types"
import "./FormInput.scss"

export default function FormInput({ isRequired, textarea, file, title }: TFormInput) {

    return (
        <div className="form-input">
            <label className="form-input__title" htmlFor={title}>
                {title}
                {
                    isRequired && <span className="form-input__required">*</span>
                }
            </label>
            {
                textarea && <textarea
                    className="form-input__field"
                    placeholder="Leave a comment..."
                    name={title}
                    id={title}
                    cols={30}
                    rows={5}
                ></textarea>
            }
            {
                file && <input className="form-input__field" type="file" name={title} id={title} />
            }
            {
                !textarea && !file && <input className="form-input__field" type="text" name={title} id={title} required={isRequired} />
            }

        </div>
    )
}
