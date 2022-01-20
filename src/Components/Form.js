import React from "react";
import { useState } from "react";
import SingnupForm from "./SingnupForm"
import SignupFormSuccess from "./SingnupForm";

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false)

	const submitForm = () => {
		setFormIsSubmitted(true)
	}

	return (
		<div>
			{!formIsSubmitted ? (
				<SingnupForm submitForm={submitForm} />
			) : (
				<SignupFormSuccess />
			)}
		</div>
	)
}

export default  Form;
