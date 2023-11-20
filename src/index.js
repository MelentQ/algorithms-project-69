const quickSort = require('./utils/quickSort.js');
const { compareByCount } = require('./utils/comparators.js');
const binarySearch = require('./utils/binarySearch.js');

/**
 * Обработка текста
 * @param token {String}
 * @returns {Array.<String>}
 */
function splitToTerms(token) {
  return token.match(/\w+/g);
}

function getNumberOfUses(items, query) {
  let result = 0;

  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    if (item === query) {
      result += 1;
    }
  }

  return result;
}

function getProcessedDocs(docs) {
  const result = [];

  for (let i = 0; i < docs.length; i += 1) {
    const doc = docs[i];
    const terms = splitToTerms(doc.text);
    const sortedTerms = quickSort(terms);
    const numberOfUses = getNumberOfUses(sortedTerms);

    result.push({
      ...doc,
      text: sortedTerms,
      count: numberOfUses,
    });
  }

  return result;
}

function filterByQuery(docs, query) {
  const result = [];

  for (let i = 0; i < docs.length; i += 1) {
    const doc = docs[i];

    if (binarySearch(doc.text, query)) {
      result.push(doc);
    }
  }

  return result;
}

function getIds(docs) {
  const result = [];

  for (let i = 0; i < docs.length; i += 1) {
    const doc = docs[i];

    result.push(doc.id);
  }

  return result;
}

/**
 * Поисковый движок
 * @param docs {Array.<{id: String, text: String}>} - docs
 * @param query {String} - query string
 * @returns {String[]} - docs ids
 */
function search(docs, query) {
  const processedDocs = getProcessedDocs(docs);

  const filteredDocs = filterByQuery(processedDocs, query);

  const sortedDocs = quickSort(filteredDocs, compareByCount);

  const ids = getIds(sortedDocs);

  return ids;
}

module.exports = search;
