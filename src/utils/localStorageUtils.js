export function getFromStorage(key) {
  try {
    const data = localStorage.getItem(key);
    if (!data) return null;
    return JSON.parse(data);
  } catch (err) {
    console.error("Error, can't read from local storage:", err);
    return null;
  }
}

export function setToStorage(key, obj) {
  try {
    localStorage.setItem(key, JSON.stringify(obj));
  } catch (err) {
    console.error("Error, can't write in local srotage:", err);
  }
}
