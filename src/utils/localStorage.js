const CART_KEY = 'pao-bio-cart';
const CART_EXPIRY_DAYS = 7;

export const saveToLocalStorage = (key, data) => {
  try {
    const item = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(key, JSON.stringify(item));
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

export const getFromLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return null;

    const parsed = JSON.parse(item);
    const now = Date.now();
    const expiryTime = CART_EXPIRY_DAYS * 24 * 60 * 60 * 1000;

    // Check if data is expired
    if (now - parsed.timestamp > expiryTime) {
      localStorage.removeItem(key);
      return null;
    }

    return parsed.data;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing from localStorage:', error);
    return false;
  }
};

// Cart-specific functions
export const saveCart = (cart) => {
  return saveToLocalStorage(CART_KEY, cart);
};

export const getCart = () => {
  return getFromLocalStorage(CART_KEY) || { items: [] };
};

export const clearCart = () => {
  return removeFromLocalStorage(CART_KEY);
};

// Check if localStorage is available
export const isLocalStorageAvailable = () => {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (error) {
    return false;
  }
};