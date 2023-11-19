const { expect, test } = require('@jest/globals');
const search = require('../src/index.js');

test('Fuzzy String Search', () => {
  expect(search([
    { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" },
    { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." },
    { id: 'doc3', text: "I'm your shooter." },
  ], 'shoot')).toEqual(['doc1', 'doc2']);
});
