function loadAllCards (storageKey) {
  const stored = JSON.parse(localStorage.getItem(storageKey));
  return stored;
}

// function loadCardToReactState (storageKey, cardId) {}

export { loadAllCards };