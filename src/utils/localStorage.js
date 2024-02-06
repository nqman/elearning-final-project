const saveLocal = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getLocal = (key) => {
  const local = localStorage.getItem(key);
  const data = JSON.parse(local) ? JSON.parse(local) : "";
  return data;
};

const removeLocal = (key) => {
  localStorage.removeItem(key);
};

export { saveLocal, getLocal, removeLocal };
