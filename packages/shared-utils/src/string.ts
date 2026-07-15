/**
 * String formatting utilities
 */

export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const capitalizeWords = (str: string): string => {
  return str
    .split(' ')
    .map((word) => capitalize(word))
    .join(' ');
};

export const truncate = (str: string, length: number): string => {
  return str.length > length ? str.substring(0, length) + '...' : str;
};

export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

export const camelCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
      if (+match === 0) return '';
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
};

export const snakeCase = (str: string): string => {
  return str
    .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
    .toLowerCase();
};

export const removeSpecialChars = (str: string): string => {
  return str.replace(/[^a-zA-Z0-9\s]/g, '');
};

export const extractNumbers = (str: string): string => {
  return str.replace(/\D/g, '');
};
