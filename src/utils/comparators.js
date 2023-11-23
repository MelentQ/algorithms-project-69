function compareByValue(a, b) {
  if (a < b) {
    return -1;
  }

  if (a === b) {
    return 0;
  }

  return 1;
}

function compareByRelevance(a, b) {
  if (a.relevance.count < b.relevance.count) {
    return -1;
  }

  if (a.relevance.count > b.relevance.count) {
    return 1;
  }

  if (a.relevance.sum < b.relevance.sum) {
    return -1;
  }

  if (a.relevance.sum > b.relevance.sum) {
    return 1;
  }

  return 0;
}

module.exports = {
  compareByValue,
  compareByRelevance,
};
