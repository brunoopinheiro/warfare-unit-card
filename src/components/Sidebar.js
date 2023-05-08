import { loadAllCards } from '../utils/loadCardFromLocalStorage';
import './Sidebar.css';

export default function Sidebar() {
  const storageKey = 'savedCards';
  const storedCards = loadAllCards(storageKey);
  
  return (
    <div className="sidebar">
      {
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
    </div>
  );
}
