import { useEffect, useState } from 'react';
import './Sidebar.css';

export default function Sidebar({ storedCards, handlers }) {
  const { deleteAll } = handlers;
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
            className="stored-card"
          >
            <span
              className="sidebar-nameplate"
            >
              {`${cardValue.unitName} - T${cardValue.tier} - ${cardValue.commanderName}`}
            </span>
            <button>Load</button>
            <button>X</button>
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
