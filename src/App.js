import { useState } from 'react/cjs/react.development';
import './App.css';
import Form from './Components/Form';


function App() {

  const [forms, setForms] = useState('')
  const addFormDataHandler = (login) => {
    setForms(login)
  }


  return (
    <div className="App">
      <div>
        <Form onAddFormData={addFormDataHandler}/>
      </div>
      <div className='block'><h1 className='name'>{forms.name}</h1><h1 className='name'>{forms.phone}</h1>
      <h1 className='name'>{forms.country}</h1><h1 className='name'>{forms.message}</h1></div> 
    </div>
  );
}

export default App;
