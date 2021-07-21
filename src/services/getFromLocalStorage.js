const genericGetFromStorage = (string) => {
  const getFromStorage = localStorage.getItem(string);
  const decode = JSON.parse(getFromStorage);

  if (getFromStorage) {
    return decode;
  }
}

export default genericGetFromStorage;
