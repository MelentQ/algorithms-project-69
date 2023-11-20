const { expect, test } = require('@jest/globals');
const binarySearch = require('../src/utils/binarySearch.js');

test('Binary Search', () => {
  expect(binarySearch([10, 24, 34, 43, 52, 55, 57, 93, 99], 35)).toEqual(false);
});
