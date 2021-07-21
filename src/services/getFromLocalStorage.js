export const genericGetFromStorage = (string) => {
  const getFromStorage = localStorage.getItem(string);
  const decode = JSON.parse(getFromStorage);

  return decode;
}
