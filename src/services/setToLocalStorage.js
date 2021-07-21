const genericSetToStorage = (info, stringKey) => {
  const encoder = JSON.stringify(info); 
  localStorage.setItem(stringKey, encoder);
}

const setFavoritesToStorage = (favorite) => {
  genericSetToStorage(favorite, 'favorites');
}

const setLocalFunctions = { setFavoritesToStorage, genericSetToStorage };

export default setLocalFunctions;
