export const genericSetToStorage = (info, string) => {
  const encoder = JSON.stringify(info); 
  localStorage.setItem(string, encoder);
}

export const setFavoritesToStorage = (favorite) => {
  genericSetToStorage(favorite, 'favorites');
}
