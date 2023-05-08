function loadAllCards (storageKey) {
  const stored = localStorage.getItem(storageKey) || [];
  const parsed = JSON.parse(stored);
  // if (stored.length === 0) {
  //   localStorage.setItem(storageKey, JSON.stringify(stored));
  // }
  return parsed;
}

// function loadCardToReactState (storageKey, cardId) {}

export { loadAllCards };