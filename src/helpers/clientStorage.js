const localStorageIsAvailable = () => {
  const lsTest = 'lsTest';
  try {
    localStorage.setItem(lsTest, lsTest);
    localStorage.removeItem(lsTest);
    return true;
  } catch (e) {
    return false;
  }
};

export const getFromLocalStorage = (key) => {
  if (localStorageIsAvailable) {
    return localStorage.getItem(key);
  }
  return null;
};

export const saveToLocalStorage = (key, data) => {
  if (localStorageIsAvailable) {
    return localStorage.setItem(key, data);
  }
  return null;
};
