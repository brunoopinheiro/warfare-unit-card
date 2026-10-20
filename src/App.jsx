import { useCallback, useRef, useState } from 'react';
import './App.css';
import formInitialValues from './utils/formInitialValues';
import { getCardValuesById, loadAllCards } from './utils/localStorage/loadCardFromLocalStorage';
import saveCardToLocalStorage from './utils/localStorage/saveCardToLocalStorage';
import { deleteAllFromLocalStorage, deleteByIdFromLocalStorage } from './utils/localStorage/deleteFromLocalStorage';
import downloadAsPng from './utils/downloadAsPng';
import { slugify } from './utils/cardFormat';
import Form from './components/Form';
import Card from './components/Card';
import ExportPanel from './components/ExportPanel';
import Footer from './components/Footer';
import AdSlot from './components/AdSlot';
import Sidebar from './components/Sidebar';

const EMPTY_STATUS = { tone: 'info', text: '' };

function App() {
  const storageKey = 'savedCards';
  const [formValues, setValues] = useState(formInitialValues);
  const [storedCards, setStoredCards] = useState(() => loadAllCards(storageKey));
  const [libraryOpen, setLibraryOpen] = useState(false);
  const [view, setView] = useState('edit');
  const [scale, setScale] = useState(2);
  const [inkSaver, setInkSaver] = useState(false);
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState(EMPTY_STATUS);
  const cardRef = useRef(null);
  const libraryButton = useRef(null);

  const fileName = `${slugify(formValues.unitName)}-${scale}x.png`;
  const displayName = formValues.unitName || 'Unit Name';

  const onFieldChange = (key, value) => {
    setValues((current) => ({ ...current, [key]: value }));
    setStatus(EMPTY_STATUS);
  };

  const newCard = () => {
    setValues(formInitialValues);
    setStatus({ tone: 'info', text: 'Started a new card.' });
  };

  const downloadHandler = async () => {
    setBusy(true);
    setStatus({ tone: 'info', text: `Rendering ${fileName}…` });
    try {
      await downloadAsPng(cardRef.current, fileName, scale);
      setStatus({ tone: 'ok', text: `Downloaded ${fileName}` });
    } catch (error) {
      console.error(error);
      setStatus({ tone: 'error', text: 'Export failed. Please try again.' });
    } finally {
      setBusy(false);
    }
  };

  const saveCardHandler = () => {
    saveCardToLocalStorage(formValues, storageKey);
    setStoredCards(loadAllCards(storageKey));
    setStatus({ tone: 'ok', text: `Saved "${displayName}" to the library.` });
  };

  const closeLibrary = useCallback(() => {
    setLibraryOpen(false);
    libraryButton.current?.focus();
  }, []);

  const deleteAll = () => {
    deleteAllFromLocalStorage(storageKey);
    setStoredCards(loadAllCards(storageKey));
  };

  const deleteOne = (cardId) => {
    deleteByIdFromLocalStorage(storageKey, cardId);
    setStoredCards(loadAllCards(storageKey));
  };

  const reloadFromLocalStorage = (cardId) => {
    const cardValues = getCardValuesById(storageKey, cardId);
    if (!cardValues) return;
    setValues({ ...formInitialValues, ...cardValues });
    setStatus({ tone: 'ok', text: `Loaded "${cardValues.unitName || 'Unit Name'}".` });
    closeLibrary();
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-title">
          <img className="app-logo" src="/logo-mark.svg" alt="" width="40" height="40" />
          <h1>Warfare Unit Card</h1>
          <span className="app-subtitle">Unit cards for Kingdoms &amp; Warfare</span>
        </div>
        <div className="app-header-actions">
          <button type="button" className="btn new-card-button" onClick={ newCard }>New card</button>
          <button
            ref={ libraryButton }
            type="button"
            className="btn library-button"
            aria-label={ `Library, ${storedCards.length} saved` }
            aria-expanded={ libraryOpen }
            aria-controls="library"
            onClick={ () => setLibraryOpen(true) }
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h4v14H4zM10 5h4v14h-4zM16 6l3.5-1 3 13-3.5 1z" /></svg>
            <span className="library-button-label">Library · { storedCards.length }</span>
          </button>
        </div>
      </header>

      <div className="view-tabs" role="tablist" aria-label="Editor view">
        <button type="button" role="tab" id="tab-edit" aria-selected={ view === 'edit' } aria-controls="editor-panel" onClick={ () => setView('edit') }>Edit</button>
        <button type="button" role="tab" id="tab-preview" aria-selected={ view === 'preview' } aria-controls="preview-panel" onClick={ () => setView('preview') }>Preview</button>
      </div>

      <main className="workspace" data-view={ view } google-side-rail-overlap="false">
        <div className="editor-panel" id="editor-panel">
          <Form values={ formValues } onFieldChange={ onFieldChange } />
        </div>

        <section className="preview-panel" id="preview-panel" aria-labelledby="preview-heading">
          <div className="preview-heading">
            <h2 id="preview-heading">Live preview</h2>
            <span className="live-indicator"><span aria-hidden="true" />Updates as you type</span>
          </div>
          <div className="card-stage">
            <Card ref={ cardRef } formValues={ formValues } inkSaver={ inkSaver } />
          </div>
          <ExportPanel
            scale={ scale }
            onScaleChange={ setScale }
            inkSaver={ inkSaver }
            onInkSaverChange={ setInkSaver }
            fileName={ fileName }
            busy={ busy }
            status={ status }
            onDownload={ downloadHandler }
            onSave={ saveCardHandler }
          />
        </section>
      </main>

      <AdSlot />
      <Footer />

      <div className="mobile-action-bar">
        {
          view === 'edit'
            ? <button type="button" className="btn" onClick={ () => setView('preview') }>Preview card</button>
            : <button type="button" className="btn" onClick={ () => setView('edit') }>Back to edit</button>
        }
        <button type="button" className="btn btn-primary" onClick={ downloadHandler } disabled={ busy }>Download</button>
      </div>

      <Sidebar
        open={ libraryOpen }
        onClose={ closeLibrary }
        storedCards={ storedCards }
        handlers={ { deleteAll, deleteOne, reloadFromLocalStorage } }
      />
    </div>
  );
}

export default App;
