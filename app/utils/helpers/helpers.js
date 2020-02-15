const toDate = function (dateStr) {
  var parts = dateStr.split("-");
  return new Date(parts[2], parts[1] - 1, parts[0]);
}

const compareByDate = function (a,b) {
  if (toDate(a.name) < toDate(b.name))
    return 1;
  if (toDate(a.name) > toDate(b.name))
    return -1;
  return 0;
}

module.exports = {
    toDate,
    compareByDate
}
