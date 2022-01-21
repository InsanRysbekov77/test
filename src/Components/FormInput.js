import './FormInput.css'

const FormInput = () => {
    return (
        <div className='container'>
        <div className='app-wrapper'>
            <div>
                <h2 className='title'>Create Account</h2>
            </div>
            <form className='form-wrapper'>
                <div className='name'>
                    <label className='label'></label>
                    <input
                        placeholder="Full name"
                        className='input'
                        type='text'/>
                </div>
                <div className='email'>
                    <label className='label'></label>
                    <input
                        placeholder="email"
                        className='input'
                        type='text'/>
                </div>
                <div className='Phone'>
                    <label className='label'></label>
                    <select placeholder="Country phone"></select>
                </div>
                <div className='About'>
                    <label className='label'></label>
                   <textarea placeholder="About me"></textarea>
                </div>
                <div>
                    <button className='submit' >Sing Up</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default FormInput;