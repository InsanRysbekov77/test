import { useState } from 'react';
import './FormInput.css'

const FormInput = (props) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [message, setMessage] = useState('')

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    const phoneChangeHandler = (event) => {
        setPhone(event.target.value);
    }
    const cityChangeHandler = (event) => {
        setCity(event.target.value);
    }
    const messageChangeHandler = (event) => {
        setMessage(event.target.value);
    }

    const SubmitHandler = (event) => {
       event.preventDefault()
       const currentData = {
           name,
           phone,
           city,
           message
       }
       props.onSaveFormData(currentData)
    }

    return (
       <form onSubmit={SubmitHandler}>
           <div className='container'>
               <div className='contact-box'>
                   <div className='left'></div>
                   <div className='fight'>
                       <h2>Info Form</h2>
                       <input 
                         type="text"
                         className='field'
                         placeholder='Your Name'
                         onChange={nameChangeHandler} 
                         />
                       <input 
                         type="text" 
                         className='field' 
                         placeholder='Phone'
                         onChange={phoneChangeHandler} 
                         />
                       <p>City</p>
                       <select className='field' onChange={cityChangeHandler}>
                         <option>Бишкек</option>
                         <option>Талас</option>
                         <option>Көл</option>
                         <option>Нарын</option>
                         <option>Жалал-Абад</option>
                         <option>Ош</option>
                         <option>Баткен</option>
                        </select>
                        <p>About Me</p>
                       <textarea 
                         className='field' 
                         placeholder='Message' 
                         onChange={messageChangeHandler}/>
                   </div>
               </div>
                 <div>
                   <button className='submit'>Countine</button>
                 </div>
           </div>
       </form>
    )
}

export default FormInput;