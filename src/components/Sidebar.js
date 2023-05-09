import { useEffect, useState } from 'react';
import './Sidebar.css';

export default function Sidebar({ storedCards, handlers }) {
  const { deleteAll, deleteOne, reloadFromLocalStorage } = handlers;
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    setIsEmpty(storedCards.length === 0);
  }, [storedCards]);
  
  return (
    <div className="sidebar-container">
      <label className="hamburger-menu">
        <input type="checkbox" />
      </label>
      <aside className="sidebar">
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
              className="stored-card"
            >
              <p
                title={ `${cardValue.unitName} - T${cardValue.tier} - ${cardValue.commanderName}` }
                className="sidebar-nameplate"
              >
                {`${cardValue.unitName} - T${cardValue.tier} - ${cardValue.commanderName}`}
              </p>
              <button
                title="edit"
                onClick={ () => reloadFromLocalStorage(cardId) }
              >
                <span class="material-symbols-rounded">
                  edit
                </span>
              </button>
              <button
                title="remove"
                onClick={ () => deleteOne(cardId) }
              >
                <span class="material-symbols-rounded">
                  person_remove
                </span>
              </button>
            </div>
          ))
        }
        <button
          className="clear-list-button"
          title="clear list"
          onClick={ () => deleteAll() }
        >
          Clear List
        </button>
      </aside>
    </div>
  );
}
