import { useState } from "react"



const SignupForm = () => {

	const [fullname, setFullname] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('') 

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
		console.log(fullname);
		console.log(email);
		console.log(password);
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
						<input className='input' type='text' onChange={fullnameChangeHandler}></input>
					</div>
					<div className='email'>
						<label className='label'>email</label>
						<input className='input' type='email' onChange={emailChangeHandler}></input>
					</div>
					<div className='name'>
						<label className='label'>password</label>
						<input className='input' type='password' onChange={passwordChangeHandler}></input>
					</div>
					<button className='submit'>Sing Up</button>
				</form>
			</div>
		</div>
	)
}

export default SignupForm
