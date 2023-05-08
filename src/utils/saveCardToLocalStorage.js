// localStorage follows this format: savedCards => [["idValue", {cardValues}], ["idValue", {cardValues}], ...]

export default function saveCardToLocalStorage(cardValues, storageKey) {
  const { unitName, tier, commanderName } = cardValues;
  const id = `${unitName}-${tier}-${commanderName}`.replaceAll(' ', '').toLowerCase();
  
  const stored = JSON.parse(localStorage.getItem(storageKey)) || [];
  const filteredStorage = stored.filter(([cardId, _cardValues]) => cardId !== id);
  const updatedStorage = [...filteredStorage, [id, cardValues]];

  localStorage.setItem(storageKey, JSON.stringify(updatedStorage));
}
