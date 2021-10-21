export const setItem = (
  key: string,
  value: Parameters<typeof JSON.stringify>[0]
) => {
  if (typeof window === "undefined") {
    return null;
  }
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const getItem = (key: string) => {
  if (typeof window === "undefined") {
    return null;
  }
  const item = window.localStorage.getItem(key);
  if (!item) {
    return null;
  }
  return JSON.parse(item);
};
