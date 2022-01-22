import { useState } from 'react';
import './FormInput.css'
import Validation from './Validation';

const FormInput = (props) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [message, setMessage] = useState('')

    const [errors, setErrors] = useState({})


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
                         {errors.name && <p className='error'>{errors.name}</p>}
                       <input 
                         type="text" 
                         className='field' 
                         placeholder='Phone'
                         onChange={phoneChangeHandler} 
                         />
                           {errors.phone && <p className='error'>{errors.phone}</p>}
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
                        {errors.city && <p className='error'>{errors.city}</p>}
                        <p>About Me</p>
                       <textarea className='field' placeholder='Message' onChange={messageChangeHandler}/>
                       {errors.message && <p className='error'>{errors.message}</p>}
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