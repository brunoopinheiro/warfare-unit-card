import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import formInitialValues from './utils/formInitialValues';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  const [formValues, setValues] = useState(formInitialValues);
  const getFormValues = (values) => {
    setValues(values);
  };

  return (
    <div className="App">
      <h1>Warfare Unit Card</h1>
      <Form getFormValues={ getFormValues } />
      <Card formValues={ formValues } />
      <Footer />
    </div>
  );
}

export default App;
