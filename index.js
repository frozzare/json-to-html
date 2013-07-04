
/**
 * Expose `html()`.
 */

module.exports = html;

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

function escape (html) {
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Return a span.
 *
 * @param {String} classname
 * @param {String} str
 * @return {String}
 * @api private
 */

function span(classname, str) {
  return '<span class="' + classname + '">' + str + '</span>';
}

/**
 * Convert JSON Object to html.
 *
 * @param {Object} obj
 * @return {String}
 * @api public
 */

function html(obj, indents) {
  var indents = indents || 1;

  function indent() {
    return Array(indents).join('  ');
  }

  if ('string' == typeof obj) {
    return span('string', '"' + escape(obj) + '"');
  }

  if ('number' == typeof obj) {
    return span('number', obj);
  }

  if ('boolean' == typeof obj) {
    return span('boolean', obj);
  }

  if (null === obj) {
    return span('null', 'null');
  }

  if (Array.isArray(obj)) {
    ++indents;

    var buf = '[\n' + obj.map(function(val){
      return indent() + html(val, indents);
    }).join(',\n');

    --indents;
    buf += '\n' + indent() + ']';
    return buf;
  }

  var buf = '{';
  var keys = Object.keys(obj);
  var len = keys.length;
  if (len) buf += '\n';

  ++indents;
  buf += keys.map(function(key){
    var val = obj[key];
    key = '"' + key + '"';
    key = span('string', key);
    return indent() + key + ': ' + html(val, indents);
  }).join(',\n');
  --indents;

  if (len) buf += '\n' + indent();
  buf += '}';

  return buf;
}
