import { useEffect, useRef, useState } from 'react';
import './Sidebar.css';
import { toRoman, toTitle } from '../utils/cardFormat';

// The Library drawer: saved cards with Load and Delete
export default function Sidebar({ open, onClose, storedCards, handlers }) {
  const { deleteAll, deleteOne, reloadFromLocalStorage } = handlers;
  const [confirmClear, setConfirmClear] = useState(false);
  const closeButton = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    setConfirmClear(false);
    closeButton.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const isEmpty = storedCards.length === 0;

  return (
    <>
      <div className="library-backdrop" onClick={ onClose } aria-hidden="true" />
      <aside id="library" className="library" aria-labelledby="library-heading" role="dialog" aria-modal="true">
        <div className="library-header">
          <h2 id="library-heading">Library</h2>
          <button ref={ closeButton } type="button" className="icon-btn" aria-label="Close library" onClick={ onClose }>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>
        <p className="hint">Cards are saved in this browser.</p>
        {
          isEmpty
            ? <p className="library-empty">No saved cards yet. Use &quot;Save to library&quot; under the preview to keep one here.</p>
            : (
              <ul className="library-list">
                {
                  storedCards.map(([cardId, card]) => {
                    const name = card.unitName || 'Unit Name';
                    const meta = [`Tier ${toRoman(card.tier)}`, toTitle(card.unitType), card.commanderName].filter(Boolean).join(' · ');
                    return (
                      <li key={ cardId } className="library-item">
                        <div className="library-item-text">
                          <span className="library-item-name">{ name }</span>
                          <span className="library-item-meta">{ meta }</span>
                        </div>
                        <button type="button" className="text-btn" aria-label={ `Load ${name}` } onClick={ () => reloadFromLocalStorage(cardId) }>Load</button>
                        <button type="button" className="text-btn danger" aria-label={ `Delete ${name}` } onClick={ () => deleteOne(cardId) }>Delete</button>
                      </li>
                    );
                  })
                }
              </ul>
            )
        }
        {
          !isEmpty && (
            <div className="library-footer">
              {
                confirmClear
                  ? (
                    <div className="library-confirm" role="alertdialog" aria-label="Confirm clearing the library">
                      <p>Delete all { storedCards.length } saved { storedCards.length === 1 ? 'card' : 'cards' }? This cannot be undone.</p>
                      <div className="library-confirm-actions">
                        <button type="button" className="btn" onClick={ () => setConfirmClear(false) }>Cancel</button>
                        <button type="button" className="btn btn-danger-solid" onClick={ () => { deleteAll(); setConfirmClear(false); } }>Delete all</button>
                      </div>
                    </div>
                  )
                  : <button type="button" className="btn btn-danger" onClick={ () => setConfirmClear(true) }>Clear library</button>
              }
            </div>
          )
        }
      </aside>
    </>
  );
}
