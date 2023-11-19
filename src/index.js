/**
 * Поисковый движок
 * @param docs {Array.<{id: String, text: String}>} - docs
 * @param query {String} - query string
 * @returns {String[]} - docs ids
 */
function search(docs, query) {
  return docs
    .filter((doc) => doc.text.split(' ').includes(query))
    .map((doc) => doc.id);
}

module.exports = search;
