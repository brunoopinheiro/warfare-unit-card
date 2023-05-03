import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import formInitialValues from './utils/formInitialValues';

function App() {
  const [formValues, setValues] = useState(formInitialValues);
  const getFormValues = (values) => {
    setValues(values);
  };

  return (
    <div className="App">
      <h1>Warfare Unit Card</h1>
      <Form getFormValues={ getFormValues } />
      {
        console.log(formValues)
      }
    </div>
  );
}

export default App;
