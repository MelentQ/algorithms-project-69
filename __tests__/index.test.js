const { expect, test } = require('@jest/globals');
const search = require('../src/index.js');

const docs = [
  { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" },
  { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." },
  { id: 'doc3', text: "I'm your shooter." },
];

test('Step 1', () => {
  expect(search(docs, 'shoot')).toEqual(['doc1', 'doc2']);
});

test('Step 2', () => {
  expect(search(docs, 'pint')).toEqual(['doc1']);
});
