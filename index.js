function sumItems(array) {
  let total = 0;
  for (let item of array) {
    if (Array.isArray(item)) {
      total += sumItems(item);
    } else total += item;
  }
  return total;
}

module.exports = sumItems;