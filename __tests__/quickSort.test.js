const { expect, test } = require('@jest/globals');
const { numbers } = require('../src/utils/data.js');
const quickSort = require('../src/utils/quickSort.js');

test('Quick Sort', () => {
  expect(quickSort(numbers)).toEqual([10, 24, 34, 43, 52, 55, 57, 93, 99]);
});
