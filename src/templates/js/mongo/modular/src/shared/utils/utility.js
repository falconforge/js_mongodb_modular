module.exports = {
  // dateUtils.js
  // Get the current date in ISO format
  getCurrentDate: () => new Date().toISOString(),

  // Add days to a date
  addDays: (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  },

  // Get difference in days between two dates
  getDaysDifference: (date1, date2) => {
    const diffTime = Math.abs(new Date(date2) - new Date(date1));
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  },

  // Format a date as 'YYYY-MM-DD'
  formatDate: (date) => {
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  },

  // Check if a date is in the past
  isPastDate: (date) => new Date(date) < new Date(),

  // Check if two dates are on the same day
  isSameDay: (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return d1.toDateString() === d2.toDateString();
  },


  // arrayUtils.js
  // Find an item in an array by condition
  findInArray: (arr, condition) => arr.find(condition),

  // Sort an array in ascending order
  sortArrayAsc: (arr) => arr.sort((a, b) => a - b),

  // Sort an array in descending order
  sortArrayDesc: (arr) => arr.sort((a, b) => b - a),

  // Remove duplicates from an array
  removeDuplicates: (arr) => [...new Set(arr)],

  // Chunk array into smaller arrays of specified size
  chunkArray: (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  },

  // Flatten nested arrays into a single array
  flattenArray: (arr) => arr.flat(Infinity),


  // objectUtils.js
  // Check if an object is empty
  isEmptyObject: (obj) => Object.keys(obj).length === 0,

  // Deep clone an object
  deepClone: (obj) => JSON.parse(JSON.stringify(obj)),

  // Merge two objects
  mergeObjects: (obj1, obj2) => ({ ...obj1, ...obj2 }),

  // Get nested property value by key path
  getNestedProperty: (obj, path) => {
    return path.split('.').reduce((acc, key) => acc && acc[key], obj);
  },

  // Remove properties from an object
  removeProperties: (obj, keys) => {
    const newObj = { ...obj };
    keys.forEach((key) => delete newObj[key]);
    return newObj;
  },

  
  // stringUtils.js
  // Capitalize the first letter of a string
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),

  // Convert a string to camel case
  toCamelCase: (str) =>
    str.replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace('-', '').replace('_', '')
    ),

  // Convert a string to snake case
  toSnakeCase: (str) =>
    str
      .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
      .replace(/^_/, ''),

  // Reverse a string
  reverseString: (str) => str.split('').reverse().join(''),

  // Truncate a string to specified length
  truncate: (str, length) =>
    str.length > length ? `${str.slice(0, length)}...` : str,
};
