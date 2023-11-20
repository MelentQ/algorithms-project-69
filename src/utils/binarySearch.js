const { compareByValue } = require('./comparators.js');

function search(items, query, left, right, comparator) {
  const length = right - left + 1;

  if (length < 1) {
    return false;
  }

  const middle = Math.floor((left + right) / 2);

  if (comparator(query, items[middle]) === 0) {
    return true;
  }

  if (comparator(query, items[middle]) > 0) {
    return search(items, query, middle + 1, right, comparator);
  }

  return search(items, query, left, middle - 1, comparator);
}

function binarySearch(items, query, comparator = compareByValue) {
  return search(items, query, 0, items.length - 1, comparator);
}

module.exports = binarySearch;
