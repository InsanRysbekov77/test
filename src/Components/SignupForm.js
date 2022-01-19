import React from "react"
const SignupForm = () => {

	return (
		<div className='container'>
			<div className='app-wrapper'>
				<div>
					<h2 className='title'>Create Accaunt</h2>
				</div>
				<form className='form-wrapper'>
					<div className='name'>
						<label className='label'>Full Name</label>
						<input className='input' type='text'></input>
					</div>
					<div className='email'>
						<label className='label'>email</label>
						<input className='input' type='email'></input>
					</div>
					<div className='name'>
						<label className='label'>password</label>
						<input className='input' type='password'></input>
					</div>
					<div className='submit'>Sing Up</div>
				</form>
			</div>
		</div>
	)
}

export default SignupForm
