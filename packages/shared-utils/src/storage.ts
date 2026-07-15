/**
 * Local storage utilities
 */

export const storage = {
  get<T>(key: string, defaultValue?: T): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue ?? null;
    } catch (error) {
      console.error(`Error reading from localStorage: ${key}`, error);
      return defaultValue ?? null;
    }
  },

  set<T>(key: string, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to localStorage: ${key}`, error);
    }
  },

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing from localStorage: ${key}`, error);
    }
  },

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage', error);
    }
  },

  has(key: string): boolean {
    return localStorage.getItem(key) !== null;
  },
};

export const sessionStorage$ = {
  get<T>(key: string, defaultValue?: T): T | null {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue ?? null;
    } catch (error) {
      console.error(`Error reading from sessionStorage: ${key}`, error);
      return defaultValue ?? null;
    }
  },

  set<T>(key: string, value: T): void {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to sessionStorage: ${key}`, error);
    }
  },

  remove(key: string): void {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing from sessionStorage: ${key}`, error);
    }
  },

  clear(): void {
    try {
      sessionStorage.clear();
    } catch (error) {
      console.error('Error clearing sessionStorage', error);
    }
  },
};
