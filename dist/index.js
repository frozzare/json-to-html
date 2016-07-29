(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jsonToHtml"] = factory();
	else
		root["jsonToHtml"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	
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
	    return span('string value', '"' + escape(obj) + '"');
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
	    key = span('string key', key);
	    return indent() + key + ': ' + html(val, indents);
	  }).join(',\n');
	  --indents;

	  if (len) buf += '\n' + indent();
	  buf += '}';

	  return buf;
	}


/***/ }
/******/ ])
});
;