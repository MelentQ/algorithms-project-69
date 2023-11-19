/**
 * Обработка текста
 * @param tokens {Array.<String>}
 * @returns {Array.<String>}
 */
function getTerms(tokens) {
  return tokens.reduce((acc, token) => acc.concat(token.match(/\w+/g)), []);
}

/**
 * Поисковый движок
 * @param docs {Array.<{id: String, text: String}>} - docs
 * @param query {String} - query string
 * @returns {String[]} - docs ids
 */
function search(docs, query) {
  return docs
    .filter((doc) => getTerms(doc.text.split(' ')).includes(query))
    .map((doc) => doc.id);
}

module.exports = search;
