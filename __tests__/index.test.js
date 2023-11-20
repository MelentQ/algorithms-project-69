const { expect, test } = require('@jest/globals');
const { docs } = require('../src/utils/data.js');
const search = require('../src/index.js');

test('Step 1', () => {
  expect(search(docs, 'shoot')).toEqual(['doc2', 'doc1']);
});

test('Step 2', () => {
  expect(search(docs, 'pint')).toEqual(['doc1']);
});

test('Step 3', () => {
  expect(search(docs, 'shoot')).toEqual(['doc2', 'doc1']);
});
