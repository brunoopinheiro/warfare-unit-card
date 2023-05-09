function deleteAllFromLocalStorage (storageKey) {
  localStorage.setItem(storageKey, JSON.stringify([]));
}

function deleteByIdFromLocalStorage (storageKey, cardId) {
  const storedCards = JSON.parse(localStorage.getItem(storageKey));
  const filteredCards = storedCards.filter(([id]) => id !== cardId);
  localStorage.setItem(storageKey, JSON.stringify(filteredCards));
}

export { deleteAllFromLocalStorage, deleteByIdFromLocalStorage };