function compareByValue(a, b) {
  if (a < b) {
    return -1;
  }

  if (a === b) {
    return 0;
  }

  return 1;
}

function compareByCount(a, b) {
  if (a.count < b.count) {
    return -1;
  }

  if (a.count === b.count) {
    return 0;
  }

  return 1;
}

module.exports = {
  compareByValue,
  compareByCount,
};
