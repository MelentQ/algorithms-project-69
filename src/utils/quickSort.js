const { compareByValue } = require('./comparators.js');

function partition(items, left, right, pivot, comparator) {
  while (true) {
    while (comparator(items[left], pivot) < 0) {
      left += 1;
    }

    while (comparator(items[right], pivot) > 0) {
      right -= 1;
    }

    if (left >= right) {
      return right + 1;
    }

    const temp = items[left];
    items[left] = items[right];
    items[right] = temp;

    left += 1;
    right -= 1;
  }
}

function sort(items, left, right, comparator) {
  const length = right - left + 1;
  if (length < 2) {
    return;
  }

  const pivot = items[left];
  const splitIndex = partition(items, left, right, pivot, comparator);
  sort(items, left, splitIndex - 1, comparator);
  sort(items, splitIndex, right, comparator);
}

function quickSort(items, comparator = compareByValue) {
  const result = [...items];

  sort(result, 0, result.length - 1, comparator);

  return result;
}

module.exports = quickSort;
