/**
 * Export `filter`
 */

module.exports = filter;

/**
 * filter contents in parallel
 *
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 * @api public
 */

function *filter(arr, fn) {
  var vals = yield arr.map(fn);
  var out = [];

  for (var i = 0, len = vals.length; i < len; i++) {
    if (vals[i]) out.push(arr[i]);
  }

  return out;
}
