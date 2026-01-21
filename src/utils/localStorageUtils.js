export function getUser() {
  try {
    const user = localStorage.getItem('user');
    if (!user) return null;
    return JSON.parse(user);
  } catch (err) {
    console.error("Ошибка чтения из localStorage:", err);
    return null;
  }
}

export function setUser(userObj) {
  try {
    localStorage.setItem('user', JSON.stringify(userObj));
  } catch (err) {
    console.error("Ошибка записи в localStorage:", err);
  }
}
