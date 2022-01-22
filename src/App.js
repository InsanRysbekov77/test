import './App.css';
import Form from './Components/Form';


function App() {

  const addFormDataHandler = () => {

  }


  return (
    <div className="App">
      <div>
        <Form onAddFormData={addFormDataHandler}/>
      </div>
    </div>
  );
}

export default App;
