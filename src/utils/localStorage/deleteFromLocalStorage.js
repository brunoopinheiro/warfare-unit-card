function deleteAllFromLocalStorage (storageKey) {
  localStorage.setItem(storageKey, JSON.stringify([]));
}

export { deleteAllFromLocalStorage };