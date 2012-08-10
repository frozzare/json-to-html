var indents = 0
  , size = 2;

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String} Escaped HTML
 */

function escape (html) {
  return String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Add indentation to `html` string.
 *
 * @param {String} html
 * @return {String} HTML with indentation
 */

function indent (html) {
  return Array(indents * size).join(' ') + (html || '');
}

/**
 * Convert JSON Object to html
 *
 * @param {Object} obj JSON Object to convert
 * @return {String} html output
 */

function to_html (obj) {
  if (typeof obj === 'string') {
    return '<span class="string">"' + escape(obj) + '"</span>';
  } else if (typeof obj === 'number') {
    return '<span class="number">' + obj + '</span>';
  } else if (obj === true || obj === false) {
    return '<span class="boolean">' + obj.toString() + '</span>';
  } else if (obj === null) {
    return '<span class="null">null</span>';
  } else if ((obj instanceof Array && !obj.length) || (!Object.keys(obj).length)) {
    return '<span class="array">' + (obj instanceof Array ? '[]' : '{}') + '</span>';
  } else {
    var arr = obj instanceof Array
      , str = (arr ? '[' : '{') + '\n'
      , res = [];

    indents++;

    if (arr) {
      for (var i = 0; i < obj.length; i++) {
        res.push(indent(to_html(obj[i])));
      }
    } else {
      for (var k in obj) {
        if (obj.hasOwnProperty(k)) {
          res.push(indent(to_html(k) + ': ' + to_html(obj[k])));
        }
      }
    }

    str += res.join(',\n') + '\n';
    indents--;
    str += indent(arr ? ']' : '}');
    return str;
  }
}

/**
 * Export module
 *
 * @param {Object} obj
 * @param {Integer} ind
 * @return {String}
 */

module.exports = function (obj, ind) {
  if (typeof ind === 'number') size = ind || size;
  return to_html(obj);
}