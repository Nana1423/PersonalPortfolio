// Style
import "../cv_en.css"

import PDF from "../assets/Emanuel's_Resume_English.pdf"

export default function CV() {
    return (
        <embed
            src={PDF}
            type="application/pdf"
        />
    )
}