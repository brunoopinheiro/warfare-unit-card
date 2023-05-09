import { useState } from 'react';
import './App.css';
import formInitialValues from './utils/formInitialValues';
import { loadAllCards } from './utils/localStorage/loadCardFromLocalStorage';
import saveCardToLocalStorage from './utils/localStorage/saveCardToLocalStorage';
import { deleteAllFromLocalStorage, deleteByIdFromLocalStorage } from './utils/localStorage/deleteFromLocalStorage';
import Form from './components/Form';
import Card from './components/Card';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  const storageKey = 'savedCards';
  const [formValues, setValues] = useState(formInitialValues);
  const [storedCards, setStoredCards] = useState(loadAllCards(storageKey));

  const getFormValues = (values) => {
    setValues(values);
  };

  const saveCardHandler = () => {
    saveCardToLocalStorage(formValues, storageKey);
    setStoredCards(loadAllCards(storageKey));
  }

  const deleteAll = () => {
    deleteAllFromLocalStorage(storageKey);
    setStoredCards(loadAllCards(storageKey));
  }

  const deleteOne = (cardId) => {
    deleteByIdFromLocalStorage(storageKey, cardId);
    setStoredCards(loadAllCards(storageKey));
  }

  return (
    <div className="App">
      <main>
        <h1>Warfare Unit Card</h1>
        <Form getFormValues={ getFormValues } />
        <Card formValues={ formValues } saveCardHandler={ saveCardHandler } />
        <Footer />
      </main>
      <Sidebar storedCards={ storedCards } handlers={ { deleteAll, deleteOne } } />
    </div>
  );
}

export default App;
