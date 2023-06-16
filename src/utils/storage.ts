const DOMAIN = process.env.DOMAIN || '';

export const getCookie = (cookieName: string): any => {
  const cookieMatch = document.cookie.match(`(^|;)\\s*${cookieName}\\s*=\\s*([^;]+)`);

  return cookieMatch ? cookieMatch.pop() : '';
};

export const setCookie = (cookieName: string, value: string) => {
  document.cookie = `${cookieName}=${value}; path=/; domain=${DOMAIN}`;
};

export const removeCookie = (cookieName: string) => {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${DOMAIN}`;
};

export const getLocalStorage = (item: string): string => localStorage.getItem(item) || '';
export const setLocalStorage = (item: string, value: string) => localStorage.setItem(item, value);
export const removeLocalStorage = (item: string) => localStorage.removeItem(item);
