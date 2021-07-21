const genericSetToStorage = (info, string) => {
  const encoder = JSON.stringify(info); 
  localStorage.setItem(string, encoder);
}

const setFavoritesToStorage = (favorite) => {
  genericSetToStorage(favorite, 'favorites');
}

const setLocalFunctions = { setFavoritesToStorage, genericSetToStorage };

export default setLocalFunctions;
