import React from "react";
import { useState } from "react";
import SignupForm from "./SignupForm";
import SignupFormsuccess from "./SignupFormsuccess";

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false)

    const submitForm = () => {
        setFormIsSubmitted(true)
    }
    return (
        <div>
            {!formIsSubmitted ? (
                <SignupForm submitForm={submitForm} />
            ) : (
                <SignupFormsuccess />
            )}
        </div>
    )
}
export default Form;