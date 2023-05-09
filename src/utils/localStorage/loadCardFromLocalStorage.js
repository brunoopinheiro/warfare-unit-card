function loadAllCards (storageKey) {
  const stored = JSON.parse(localStorage.getItem(storageKey)) || [];
  return stored;
}

function getCardValuesById (storageKey, id) {
  const stored = JSON.parse(localStorage.getItem(storageKey));
  try {
    const card = stored.find((c) => c[0] === id);
    const cardValues = card[1];
    return cardValues;
  } catch (error) {
    console.error(error);
  }
}

export { loadAllCards, getCardValuesById };