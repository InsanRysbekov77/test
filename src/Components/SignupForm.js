import { useEffect, useState } from "react"
import Validation from "./Validation"



const SignupForm = ({ submitForm} ) => {

	const [fullname, setFullname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('') 

	const [errors, setErrors] = useState({})
	const [dataIsCorrect, setDataIsCorrect] = useState(false)

	const fullnameChangeHandler = (event) => {
		setFullname(event.target.value)
	}

	const emailChangeHandler = (event) => {
		setEmail(event.target.value)
	}

	const passwordChangeHandler = (event) => {
		setPassword(event.target.value)
	}

	const submitHadler = (event) => {
		event.preventDefault()
		setErrors(Validation(fullname))
		setErrors(Validation(email))
		setErrors(Validation(password))
		setDataIsCorrect(true)
		console.log(fullname);
		console.log(email);
		console.log(password);

	}

	useEffect = () => {
		if(Object.keys(errors).length === 0 && dataIsCorrect){
			submitForm(true)
		}
	}

	return (
		<div className='container'>
			<div className='app-wrapper'>
				<div>
					<h2 className='title'>Create Accaunt</h2>
				</div>
				<form onSubmit={submitHadler} className='form-wrapper'>
					<div className='name'>
						<label className='label'>Full Name</label>
						<input 
						className='input'
						type='text' 
						onChange={fullnameChangeHandler} 
						/>
						{errors.fullname && <p className="error">{errors.fullname}</p>}
					</div>
					<div className='email'>
						<label className='label'>email</label>
						<input 
						 className='input'
						 type='email' 
						 onChange={emailChangeHandler}
						 />
						 {errors.email && <p className="error">{errors.email}</p>}
					</div>
					<div className='name'>
						<label className='label'>password</label>
						<input 
						 className='input' 
						 type='password' 
						 onChange={passwordChangeHandler} 
						 />
						 {errors.password && <p className="error">{errors.password}</p>}
					</div>
					<button className='submit'>Sing Up</button>
				</form>
			</div>
		</div>
	)
}

export default SignupForm
