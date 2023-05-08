function loadAllCards (storageKey) {
  const stored = JSON.parse(localStorage.getItem(storageKey)) || [];
  return stored;
}

export { loadAllCards };