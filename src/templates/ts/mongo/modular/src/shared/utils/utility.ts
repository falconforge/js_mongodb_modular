export const utils = {
  // dateUtils.js
  // Get the current date in ISO format
  getCurrentDate: (): string => new Date().toISOString(),

  // Add days to a date
  addDays: (date: Date | string, days: number): Date => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  },

  // Get difference in days between two dates
  getDaysDifference: (date1: Date | string, date2: Date | string): number => {
    const date1Obj = new Date(date1);
    const date2Obj = new Date(date2);
    const diffTime = Math.abs(date2Obj.getTime() - date1Obj.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  },

  // Format a date as 'YYYY-MM-DD'
  formatDate: (date: Date | string): string => {
    const d = new Date(date);
    return d.toISOString().split('T')[0]; // Properly formatting date
  },

  // Check if a date is in the past
  isPastDate: (date: Date | string): boolean => new Date(date) < new Date(),

  // Check if two dates are on the same day
  isSameDay: (date1: Date | string, date2: Date | string): boolean => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return d1.toDateString() === d2.toDateString();
  },


  // arrayUtils.js
  // Find an item in an array by condition
  findInArray: <T>(arr: T[], condition: (item: T) => boolean): T | undefined => arr.find(condition),

  // Sort an array in ascending order
  sortArrayAsc: (arr: number[]): number[] => arr.sort((a, b) => a - b),

  // Sort an array in descending order
  sortArrayDesc: (arr: number[]): number[] => arr.sort((a, b) => b - a),

  // Remove duplicates from an array
  removeDuplicates: <T>(arr: T[]): T[] => [...new Set(arr)],

  // Chunk array into smaller arrays of specified size
  chunkArray: <T>(arr: T[], size: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  },


  // objectUtils.js
  // Check if an object is empty
  isEmptyObject: (obj: object): boolean => Object.keys(obj).length === 0,

  // Deep clone an object
  deepClone: <T>(obj: T): T => JSON.parse(JSON.stringify(obj)),

  // Merge two objects
  mergeObjects: <T, U>(obj1: T, obj2: U): T & U => ({ ...obj1, ...obj2 }),


  // stringUtils.js
  // Capitalize the first letter of a string
  capitalize: (str: string): string => str.charAt(0).toUpperCase() + str.slice(1),

  // Convert a string to camel case
  toCamelCase: (str: string): string =>
    str.replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace('-', '').replace('_', '')
    ),

  // Convert a string to snake case
  toSnakeCase: (str: string): string =>
    str
      .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
      .replace(/^_/, ''),

  // Reverse a string
  reverseString: (str: string): string => str.split('').reverse().join(''),

  // Truncate a string to specified length
  truncate: (str: string, length: number): string =>
    str.length > length ? `${str.slice(0, length)}...` : str,
};