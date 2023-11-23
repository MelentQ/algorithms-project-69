const quickSort = require('./utils/quickSort.js');
const { compareByRelevance } = require('./utils/comparators.js');

/**
 * Обработка текста
 * @param token {String}
 * @returns {Array.<String>}
 */
function splitToTerms(token) {
  return token.match(/\w+/g);
}

function calculateRelevance(items, query) {
  let sum = 0;
  let count = 0;

  const terms = splitToTerms(query);
  let flag = false;

  for (let i = 0; i < terms.length; i += 1) {
    const term = terms[i];
    flag = false;

    for (let j = 0; j < items.length; j += 1) {
      const item = items[j];

      if (term === item) {
        sum += 1;
        flag = true;
      }
    }

    if (flag) {
      count += 1;
    }
  }

  return ({
    total: terms.length,
    count, // количество слов из искомого набора
    sum, // сумма вхождений
  });
}

function getProcessedDocs(docs, query) {
  const result = [];

  for (let i = 0; i < docs.length; i += 1) {
    const doc = docs[i];
    const terms = splitToTerms(doc.text);
    const sortedTerms = quickSort(terms);
    const relevance = calculateRelevance(sortedTerms, query);

    result.push({
      origin: doc,
      query,
      text: sortedTerms,
      relevance,
    });
  }

  return result;
}

function getFilteredDocs(docs) {
  const result = [];

  for (let i = 0; i < docs.length; i += 1) {
    const doc = docs[i];

    if (doc.relevance.count > 0) {
      result.push(doc);
    }
  }

  return result;
}

function getIds(docs) {
  const result = [];

  for (let i = 0; i < docs.length; i += 1) {
    const doc = docs[i];

    result.push(doc.origin.id);
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
  const processedDocs = getProcessedDocs(docs, query);

  const filteredDocs = getFilteredDocs(processedDocs);

  const sortedDocs = quickSort(filteredDocs, 'desc', compareByRelevance);

  return getIds(sortedDocs);
}

module.exports = search;
