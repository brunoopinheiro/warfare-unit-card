import { useEffect, useState } from 'react';
import './Sidebar.css';

export default function Sidebar({ storedCards, handlers }) {
  const { deleteAll, deleteOne, reloadFromLocalStorage } = handlers;
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setIsEmpty(storedCards.length === 0);
  }, [storedCards]);
  
  return (
    <div className="sidebar">
      {
        isEmpty ?
        <div className="stored-card">
          <span
            className="sidebar-nameplate"
          >
            No saved cards...
          </span>
        </div> :
        storedCards.map(([cardId, cardValue]) => (
          <div
            key={cardId}
            title="Changing these informations will create a new card on save."
            className="stored-card"
          >
            <span
              className="sidebar-nameplate"
            >
              {`${cardValue.unitName} - T${cardValue.tier} - ${cardValue.commanderName}`}
            </span>
            <button
              onClick={ () => reloadFromLocalStorage(cardId) }
            >
              Load
            </button>
            <button
              onClick={ () => deleteOne(cardId) }
            >
              X
            </button>
          </div>
        ))
      }
      <button
        onClick={ () => deleteAll() }
      >
        Clear List
      </button>
    </div>
  );
}
