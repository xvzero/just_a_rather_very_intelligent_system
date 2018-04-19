/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(5);
var isBuffer = __webpack_require__(19);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = this;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(13);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(21);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(6);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(6);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(22);
var buildURL = __webpack_require__(24);
var parseHeaders = __webpack_require__(25);
var isURLSameOrigin = __webpack_require__(26);
var createError = __webpack_require__(7);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(27);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(28);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(23);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

document.addEventListener("DOMContentLoaded", () => {
  const speech = __webpack_require__(11);
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Speech Recognition section
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';

const words = document.querySelector('.words');
let p = document.querySelector('.input');

recognition.addEventListener('result', e => {
  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    p.textContent = transcript;

    if (e.results[0].isFinal) {

      if ((/(jarvis)(?!.*((don\'t)|(stop))).*(search for)/i).test(transcript)) {
        playSong(transcript.match(/(play)(.*)/i)[2]);
      }

      if ((/(jarvis)(?!.*((don\'t)|(stop))).*(play)/i).test(transcript)) {
        playSong(transcript.match(/(play)(.*)/i)[2]);
      }

      if ((/(jarvis)(?!.*((don\'t)|(stop))).*(pause)/i).test(transcript)) {
        pauseSong();
      }

      if ((/(jarvis)(?!.*(don\'t))(?!.*unmute).*(mute)/i).test(transcript)) {
        muteVolume();
      }

      if ((/(jarvis)(?!.*(don\'t)).*(unmute)/i).test(transcript)) {
        unmuteVolume();
      }

      if ((/(jarvis)(?!.*(don\'t)).*(skip).*(\d+).(seconds)/i).test(transcript)) {
        seekSong(transcript.match(/\d+/)[0]);
      }

      if ((/((jarvis)(?!.*(don\'t)).*(skip|(go to)).*(start|beginning))|(jarvis).*(replay)/i).test(transcript)) {
        seekSong('begin');
      }

      if ((/((jarvis)(?!.*(don\'t)).*(skip|(go to)).*(end))|(jarvis).*(stop)/i).test(transcript)) {
        seekSong('end');
      }

      if ((/(jarvis)(?!.*(don\'t)).*((go back)|rewind).*(\d+).(seconds)/i).test(transcript)) {
        seekSong(transcript.match(/\d+/)[0]);
      }
    }
});
recognition.addEventListener('end', recognition.start);
recognition.start();

////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Soundcloud widget section
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


const SC = __webpack_require__(12);
const SoundcloudWidget = __webpack_require__(14);

const axios = __webpack_require__(17);
const apiKey = 'AIzaSyBY9vqgOQZCQqgnK57pCXdFKR0YPCk9zFc';

// const cx = '017515603852271078757:yjhxuxng8z0';
const cx = '017515603852271078757:mnwqv4gxmce';

const clientId = 'oFtM3fjLWICzaDucukME93LEYf0KIXKM';
const appVersion = 1523891119;
SC.initialize({
  client_id: clientId
});

let widget = new SC.Widget(document.querySelector('.audio-player'));
let currentVolume = 100;

function searchSoundCloud(userInput) {
  SC.get('/tracks', {
    q: userInput, limit:10
  }).then(function(tracks) {
    showTracks(tracks);
  });

  // const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${userInput}`;
  // fetch(url).then(function(response) {
  //   return response.json();
  // })
  // .then(function(myJson) {
  //   if (myJson.collection.length > 0)
  //     // playSong(myJson.items[0].formattedUrl);
  //     console.log(myJson.collection[0].formattedUrl);
  //   else
  //     console.log('no song was found');
  // });
}

function playSong(userInput) {
  SC.get('/tracks', {
    q: userInput, limit:10
  }).then(function(tracks) {
    if (tracks.length > 0) {
      let options = {
        auto_play: true,
        buying: false,
        liking: true,
        download: true,
        sharing: true,
        show_artwork: true,
        show_comments: false,
        show_playcount: true,
        show_user: true,
        start_track: 0
      };

      widget.load(tracks[0].uri, options);
      showTracks(tracks.slice(1));
    }
  });
}

function pauseSong() {
  widget.isPaused(paused => {
    if (!paused) widget.pause();
  });
}

function muteVolume() {
  widget.getVolume(volume => {
    currentVolume = volume;
    widget.setVolume(0);
  });
}

function unmuteVolume() {
  widget.setVolume(currentVolume);
}

function seekSong(time) {
  if (time === 'begin') {
    widget.seekTo(0);
  } else if (time === 'end') {
    widget.getDuration(duration => widget.seekTo(duration));
  } else {
    let currentTime;
    widget.getPosition(position => {
      currentTime = position;
    });
    currentTime += (time * 1000);

    if (currentTime >= 0 && currentTime <= widget.getDuration(duration => widget.seekTo(duration)))
      widget.seekTo(currentTime);
  }
}


const searchContainer = document.querySelector('.search-container');

function showTracks(tracks){
  for(let i = 0; i < tracks.length; i++){
    let trackContainer = document.createElement('div');
    let trackTitle = document.createElement('header');
    let trackImage = document.createElement('img');
    let trackLink = document.createElement('a');

    trackContainer.className = 'track-container';
    trackTitle.className = 'track-title';
    trackImage.className = 'track-image';
    trackLink.className = 'track-link';

    if(tracks[i].artwork_url)
      trackImage.setAttribute('src', tracks[i].artwork_url);
    else
      trackImage.setAttribute('src', tracks[i].user.avatar_url);

    trackTitle.innerText = tracks[i].title;

    trackImage.setAttribute('title', tracks[i].title);
    trackImage.setAttribute('width', 70);
    trackImage.setAttribute('height', 70);
    trackImage.trackInfo = tracks[i];
    trackLink.setAttribute('href', '#');
    trackLink.appendChild(trackImage);
    trackContainer.appendChild(trackLink);
    trackContainer.appendChild(trackTitle);
    searchContainer.appendChild(trackContainer);
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {!function(e,t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){(function(t){"use strict";var n=r(4),o=r(8),i=r(3),a=r(9),s=r(2).Promise,u=r(16),l=r(17);e.exports=t.SC={initialize:function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i.set("oauth_token",e.oauth_token),i.set("client_id",e.client_id),i.set("redirect_uri",e.redirect_uri),i.set("baseURL",e.baseURL),i.set("connectURL",e.connectURL)},get:function(e,t){return n.request("GET",e,t)},post:function(e,t){return n.request("POST",e,t)},put:function(e,t){return n.request("PUT",e,t)},delete:function(e){return n.request("DELETE",e)},upload:function(e){return n.upload(e)},connect:function(e){return a(e)},isConnected:function(){return void 0!==i.get("oauth_token")},oEmbed:function(e,t){return n.oEmbed(e,t)},resolve:function(e){return n.resolve(e)},Recorder:u,Promise:s,stream:function(e,t){return l(e,t)},connectCallback:function(){o.notifyDialog(this.location)}}}).call(t,function(){return this}())},function(e,t){e.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports={SCAudio:r(1),SCAudioPublicApiStreamURLRetriever:r(9),MaestroCore:r(2),MaestroLoaders:r(8),MaestroHTML5Player:r(7),MaestroHLSMSEPlayer:r(3)}},function(e,t,r){!function(t,n){e.exports=n(r(2),function(){try{return r(!function(){var e=new Error('Cannot find module "@sc/maestro-chromecast-player"');throw e.code="MODULE_NOT_FOUND",e}())}catch(e){}}(),function(){try{return r(!function(){var e=new Error('Cannot find module "@sc/maestro-flipper-player"');throw e.code="MODULE_NOT_FOUND",e}())}catch(e){}}(),function(){try{return r(3)}catch(e){}}(),function(){try{return r(7)}catch(e){}}(),r(8))}(this,function(e,t,r,n,o,i){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=95)}([function(t,r){t.exports=e},function(e,t,r){"use strict";var n=r(4);e.exports=function(e){if(!n(e))throw new TypeError("Cannot use null or undefined");return e}},function(e,t,r){"use strict";e.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function");return e}},function(e,t,r){"use strict";e.exports=r(64)()?Symbol:r(66)},function(e,t,r){"use strict";var n=r(17)();e.exports=function(e){return e!==n&&null!==e}},function(e,t,r){"use strict";var n,o=r(9),i=r(19),a=r(50),s=r(22);n=e.exports=function(e,t){var r,n,a,u,l;return arguments.length<2||"string"!=typeof e?(u=t,t=e,e=null):u=arguments[2],null==e?(r=a=!0,n=!1):(r=s.call(e,"c"),n=s.call(e,"e"),a=s.call(e,"w")),l={value:t,configurable:r,enumerable:n,writable:a},u?o(i(u),l):l},n.gs=function(e,t,r){var n,u,l,c;return"string"!=typeof e?(l=r,r=t,t=e,e=null):l=arguments[3],null==t?t=void 0:a(t)?null==r?r=void 0:a(r)||(l=r,r=void 0):(l=t,t=r=void 0),null==e?(n=!0,u=!1):(n=s.call(e,"c"),u=s.call(e,"e")),c={get:t,set:r,configurable:n,enumerable:u},l?o(i(l),c):c}},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(t,r){void 0===r&&(r="API error.");var n=e.call(this,r)||this;return n.statusCode=t,n}return n(t,e),t.prototype.getCode=function(){return"SCAUDIO.API_ERROR."+(this.statusCode||"TIMEOUT")},t.prototype.getStatusCode=function(){return this.statusCode},t}(o.errors.PlayerFatalError);t.ApiError=i},function(e,t,r){"use strict";var n=Object.prototype.toString,o=n.call(function(){return arguments}());e.exports=function(e){return n.call(e)===o}},function(e,t,r){"use strict";var n=Object.prototype.toString,o=n.call("");e.exports=function(e){return"string"==typeof e||e&&"object"==typeof e&&(e instanceof String||n.call(e)===o)||!1}},function(e,t,r){"use strict";e.exports=r(45)()?Object.assign:r(46)},function(e,t,r){"use strict";e.exports=r(20)()?Object.setPrototypeOf:r(21)},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(t){return e.call(this,t||"There was no format available that a player was able to play.")||this}return n(t,e),t.prototype.getCode=function(){return"SCAUDIO.NOT_SUPPORTED_ERROR"},t}(o.errors.PlayerFatalError);t.NotSupportedError=i},function(e,t,r){"use strict";function n(e){return new i({startPos:0,endPos:e,startLevel:0,endLevel:1,fromEnd:!1})}function o(e){return new i({startPos:e,endPos:0,startLevel:1,endLevel:0,fromEnd:!0})}Object.defineProperty(t,"__esModule",{value:!0}),t.buildFadeIn=n,t.buildFadeOut=o;var i=function(){function e(e){var t=e.startPos,r=e.endPos,n=e.startLevel,o=e.endLevel,i=e.fromEnd,a=void 0!==i&&i;if(t<0)throw new Error("startPos invalid.");if(r<0||!a&&r<t||a&&t<r)throw new Error("endPos invalid.");if(n<0||n>1)throw new Error("startLevel invalid.");if(o<0||o>1)throw new Error("endLevel invalid.");this._startPos=t,this._endPos=r,this._startLevel=n,this._endLevel=o,this._fromEnd=a}return e.prototype.calculate=function(e,t){var r=this._fromEnd?t-500-this._startPos:this._startPos,n=this._fromEnd?t-500-this._endPos:this._endPos;if(e<r)return{level:this._startLevel,nextCalculatePosition:r-e};if(e<=n){var o=(e-r)/(n-r),i=Math.cos(o*Math.PI)/-2+.5,a=this._startLevel+(this._endLevel-this._startLevel)*i;return{level:a,nextCalculatePosition:e}}return{level:this._endLevel,nextCalculatePosition:1/0}},e}();t.Fade=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e}();t.BaseStreamUrlRetriever=n},function(e,t,r){"use strict";function n(e,t,r){return Math.min(t,Math.max(e,r))}var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(12),s=i.eventDispatcher.EventDispatcher,u=i.helpers.Promise,l=i.helpers.deferred.buildDeferred,c=100,d=5e3,f=1500,p=function(e){function t(t,r){var n=e.call(this,t)||this;return n._onPreloadingEnabled=new s,n._onPreloadingDisabled=new s,n._onConnectionRequired=new s,n._onConnectionRecovered=new s,n._volumeAutomators=[],n._volumeScale=1,n._userVolume=1,n._volumeAutomationSupported=!1,n._timer=null,n._pauseFadeTimer=null,n._pauseFadeDeferred=null,n._pauseFade=null,n._connectionRequired=!1,n._connectionLossTimer=null,n.onPreloadingEnabled=n._onPreloadingEnabled.getHandle(),n.onPreloadingDisabled=n._onPreloadingDisabled.getHandle(),n.onConnectionRequired=n._onConnectionRequired.getHandle(),n.onConnectionRecovered=n._onConnectionRecovered.getHandle(),n._reloadStreamUrls=r,n._pausedMaxBufferLength=t.pausedMaxBufferLength,n._playingMaxBufferLength=t.playingMaxBufferLength,n._preloadingEnabled=t.preloadingEnabled,n.onPlayerProvided.subscribe(function(){return n._updateMaxBufferLength()}),n.onChange.subscribe(function(e){n.isDead()||((e.playing===!1||e.positionJumped||e.stalled||e.ended)&&n._completePauseFade(),n._pauseFade&&(e.actuallyPlaying===!1||e.ended)&&(n.removeVolumeAutomator(n._pauseFade),n._pauseFade=null),(e.positionJumped||void 0!==e.actuallyPlaying||void 0!==e.stalled)&&n._updateVolume(),void 0!==e.playing&&n._updateMaxBufferLength(),void 0!==e.loading&&n._calculateIfConnectionRequired())}),window.addEventListener("online",function(){return n._calculateIfConnectionRequired()}),window.addEventListener("offline",function(){return n._calculateIfConnectionRequired()}),n._calculateIfConnectionRequired(),n}return o(t,e),t.prototype.reload=function(){this._ensureNotDead(),this._reloadStreamUrls()},t.prototype.enablePreloading=function(){this.isDead()||this._preloadingEnabled||(this._preloadingEnabled=!0,this._updateMaxBufferLength(),this._onPreloadingEnabled.dispatch(void 0))},t.prototype.disablePreloading=function(){this.isDead()||this._preloadingEnabled&&(this._preloadingEnabled=!1,this._updateMaxBufferLength(),this._onPreloadingDisabled.dispatch(void 0))},t.prototype.isPreloadingEnabled=function(){return this._preloadingEnabled},t.prototype.pauseAfterFade=function(e){var t=this;if(this._ensureNotDead(),this._pauseFadeDeferred)return this._pauseFadeDeferred.promise;if(!this.isPlaying()||!this.isActuallyPlaying())return u.resolve(this.pause());var r=l();this._pauseFadeDeferred=r;var n=this.getPosition();if(this._pauseFade)throw new Error("Fade should not already be assigned.");return this._pauseFade=new a.Fade({startPos:n,endPos:n+e,startLevel:1,endLevel:0}),this.addVolumeAutomator(this._pauseFade),this._pauseFadeTimer=window.setTimeout(function(){t._pauseFadeDeferred=null,r.resolve(t.pause())},e+50),r.promise},t.prototype.isConnectionRequired=function(){return this._connectionRequired},t.prototype.getVolume=function(){return this._volumeAutomationSupported?this._userVolume:e.prototype.getVolume.call(this)},t.prototype.addVolumeAutomator=function(e){var t=this._volumeAutomators.indexOf(e);t<0&&(this._volumeAutomators.push(e),this._updateVolume())},t.prototype.removeVolumeAutomator=function(e){var t=this._volumeAutomators.indexOf(e);t>=0&&(this._volumeAutomators.splice(t,1),this._updateVolume())},t.prototype._triggerError=function(t){e.prototype._triggerError.call(this,t)},t.prototype.providePlayer=function(t,r,n){void 0===n&&(n=!0),this._volumeAutomationSupported=n,e.prototype.providePlayer.call(this,t,r)},t.prototype._setVolume=function(e){this._userVolume=e,this._calculateAndSetVolume()},t.prototype._kill=function(){this._timer&&window.clearTimeout(this._timer),null!==this._connectionLossTimer&&window.clearTimeout(this._connectionLossTimer),this._abortPauseFade(),e.prototype._kill.call(this)},t.prototype._calculateIfConnectionRequired=function(){var e=this,t=this.isLoading()&&"navigator"in window&&!window.navigator.onLine;t?null===this._connectionLossTimer&&(this._connectionLossTimer=window.setTimeout(function(){e._connectionLossTimer=null,e._connectionRequired=!0,e._onConnectionRequired.dispatch(void 0)},f)):this._connectionRequired?(this._connectionRequired=!1,this._onConnectionRecovered.dispatch(void 0)):null!==this._connectionLossTimer&&(window.clearTimeout(this._connectionLossTimer),this._connectionLossTimer=null)},t.prototype._completePauseFade=function(){if(this._pauseFadeDeferred){this._pauseFadeTimer&&window.clearTimeout(this._pauseFadeTimer);var e=this._pauseFadeDeferred;this._pauseFadeDeferred=null,e.resolve(this.pause())}},t.prototype._abortPauseFade=function(){this._pauseFadeTimer&&(window.clearTimeout(this._pauseFadeTimer),this._pauseFadeTimer=null),this._pauseFadeDeferred&&(this._pauseFadeDeferred.reject(new Error("Player was killed.")),this._pauseFadeDeferred=null)},t.prototype._updateVolume=function(){var e=this;if(this._volumeAutomationSupported){this._ensureNotDead(),this._timer&&(window.clearTimeout(this._timer),this._timer=null);var t=this.getDuration();if(null!==t){var r=this._volumeAutomators,o=this.getPosition(),i=1/0,a=1;r.forEach(function(e){var r=e.calculate(o,t),s=r.nextCalculatePosition,u=r.level;a*=n(0,1,u),s<i&&(i=s)}),this._volumeScale!==a&&(this._volumeScale=a,this._calculateAndSetVolume()),i<1/0&&this.isActuallyPlaying()&&!this.isStalled()&&(this._timer=window.setTimeout(function(){e._timer=null,e._updateVolume()},n(c,d,i-this.getPosition())))}}},t.prototype._calculateAndSetVolume=function(){this._volumeAutomationSupported?e.prototype._setVolume.call(this,this._userVolume*this._volumeScale):e.prototype._setVolume.call(this,this._userVolume)},t.prototype._updateMaxBufferLength=function(){var e=this.getPlayer(),t=e&&e.getBufferController();t&&(this.isPlaying()?t.setMaxBufferLength(this._playingMaxBufferLength):t.setMaxBufferLength(this._preloadingEnabled?this._pausedMaxBufferLength:0))},t}(i.ProxyPlayer);t.Player=p},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(88);t.renditions=n.renditions},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this.statusCode=e}return e.prototype.getStatusCode=function(){return this.statusCode},e}();t.RequestError=n},function(e,t,r){"use strict";e.exports=function(){}},function(e,t,r){"use strict";var n=r(4),o={function:!0,object:!0};e.exports=function(e){return n(e)&&o[typeof e]||!1}},function(e,t,r){"use strict";var n=r(4),o=Array.prototype.forEach,i=Object.create,a=function(e,t){var r;for(r in e)t[r]=e[r]};e.exports=function(e){var t=i(null);return o.call(arguments,function(e){n(e)&&a(Object(e),t)}),t}},function(e,t,r){"use strict";var n=Object.create,o=Object.getPrototypeOf,i={};e.exports=function(){var e=Object.setPrototypeOf,t=arguments[0]||n;return"function"==typeof e&&o(e(t(null),i))===i}},function(e,t,r){"use strict";var n,o=r(18),i=r(1),a=Object.prototype.isPrototypeOf,s=Object.defineProperty,u={configurable:!0,enumerable:!1,writable:!0,value:void 0};n=function(e,t){if(i(e),null===t||o(t))return e;throw new TypeError("Prototype must be null or an object")},e.exports=function(e){var t,r;return e?(2===e.level?e.set?(r=e.set,t=function(e,t){return r.call(n(e,t),t),e}):t=function(e,t){return n(e,t).__proto__=t,e}:t=function e(t,r){var o;return n(t,r),o=a.call(e.nullPolyfill,t),o&&delete e.nullPolyfill.__proto__,null===r&&(r=e.nullPolyfill),t.__proto__=r,o&&s(e.nullPolyfill,"__proto__",u),t},Object.defineProperty(t,"level",{configurable:!1,enumerable:!1,writable:!1,value:e.level})):null}(function(){var e,t=Object.create(null),r={},n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__");if(n){try{e=n.set,e.call(t,r)}catch(e){}if(Object.getPrototypeOf(t)===r)return{set:e,level:2}}return t.__proto__=r,Object.getPrototypeOf(t)===r?{level:2}:(t={},t.__proto__=r,Object.getPrototypeOf(t)===r&&{level:1})}()),r(48)},function(e,t,r){"use strict";e.exports=r(56)()?String.prototype.contains:r(57)},function(e,t,r){"use strict";var n=r(7),o=r(8),i=r(59),a=r(62),s=r(63),u=r(3).iterator;e.exports=function(e){return"function"==typeof s(e)[u]?e[u]():n(e)?new i(e):o(e)?new a(e):new i(e)}},function(e,t,r){"use strict";var n,o=r(34),i=r(9),a=r(2),s=r(1),u=r(5),l=r(33),c=r(3),d=Object.defineProperty,f=Object.defineProperties;e.exports=n=function(e,t){if(!(this instanceof n))throw new TypeError("Constructor requires 'new'");f(this,{__list__:u("w",s(e)),__context__:u("w",t),__nextIndex__:u("w",0)}),t&&(a(t.on),t.on("_add",this._onAdd),t.on("_delete",this._onDelete),t.on("_clear",this._onClear))},delete n.prototype.constructor,f(n.prototype,i({_next:u(function(){var e;if(this.__list__)return this.__redo__&&(e=this.__redo__.shift(),void 0!==e)?e:this.__nextIndex__<this.__list__.length?this.__nextIndex__++:void this._unBind()}),next:u(function(){return this._createResult(this._next())}),_createResult:u(function(e){return void 0===e?{done:!0,value:void 0}:{done:!1,value:this._resolve(e)}}),_resolve:u(function(e){return this.__list__[e]}),_unBind:u(function(){this.__list__=null,delete this.__redo__,this.__context__&&(this.__context__.off("_add",this._onAdd),this.__context__.off("_delete",this._onDelete),this.__context__.off("_clear",this._onClear),this.__context__=null)}),toString:u(function(){return"[object "+(this[c.toStringTag]||"Object")+"]"})},l({_onAdd:u(function(e){if(!(e>=this.__nextIndex__)){if(++this.__nextIndex__,!this.__redo__)return void d(this,"__redo__",u("c",[e]));this.__redo__.forEach(function(t,r){t>=e&&(this.__redo__[r]=++t)},this),this.__redo__.push(e)}}),_onDelete:u(function(e){var t;e>=this.__nextIndex__||(--this.__nextIndex__,this.__redo__&&(t=this.__redo__.indexOf(e),t!==-1&&this.__redo__.splice(t,1),this.__redo__.forEach(function(t,r){t>e&&(this.__redo__[r]=--t)},this)))}),_onClear:u(function(){this.__redo__&&o.call(this.__redo__),this.__nextIndex__=0})}))),d(n.prototype,c.iterator,u(function(){return this}))},function(e,t,r){"use strict";function n(e){return e.match(s)[0]}function o(e,t){if(t instanceof e.errors.RetrievalError){var r=t.getCause();if(r instanceof e.retrievalErrors.UnacceptableResponseStatusCodeError)return 403===r.getStatusCode()}return!1}function i(e,t,r,i,s,u,l,c,d){d=a.logger.prefixLogger(d,"HLSMSEPlayer Controller");var f=null,p=n(c);r.onChange.subscribe(function(e){var t=e.dead;t&&f&&(d.debug("Aborting URL retrieve because player was killed."),f.abort())}),r.onError.subscribe(function(t){if(!(t instanceof a.errors.NotSupportedError)){if(i){if(t instanceof a.errors.URLUpdateError)return d.error("URL refresh failed for some reason.",t),void s({retryPlayer:!0});if(o(e,t))return f?void d.debug("Got a 403 status code, but URL refresh already in progress."):(d.info("Got a 403 status code. Peforming a URL refresh..."),f=l.getUrl(),void f.whenComplete().then(function(e){if(e){var t=e.url,o=e.rendition;n(t)!==p||JSON.stringify(u)!==JSON.stringify(o)?(d.warn("Got a new URL but the rendition did not match the original."),s({retryPlayer:!1})):(f=null,d.info("Got a new URL. Updating..."),r.getUrlController().updateUrl(t))}else d.warn("Could not get a new URL."),s({retryPlayer:!1})}).catch(function(e){d.error("Unexpected error when trying to retrieve a new URL.",e),s({retryPlayer:!1})}))}d.error("Unexpected player error.",t),s({retryPlayer:!1})}}),t.providePlayer(r)}Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),s=/^[^\?#]*/;t.isErrorWhichShouldTriggerURLRefresh=o,t.takeControlHLSMSEPlayer=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(6),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.getCode=function(){return"SCAUDIO.GEOBLOCKED_ERROR"},t}(o.ApiError);t.GeoBlockedError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(11),i=function(e){function t(){return e.call(this,"There were no stream URLs.")||this}return n(t,e),t.prototype.getCode=function(){return"SCAUDIO.NO_STREAMS"},t}(o.NotSupportedError);t.NoStreamsError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(6),i=function(e){function t(){return e.call(this,null,"Request timed out too many times.")||this}return n(t,e),t.prototype.getCode=function(){return"SCAUDIO.TIMED_OUT_ERROR"},t}(o.ApiError);t.TimedOutError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(6),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.getCode=function(){return"SCAUDIO.UNAVAILABLE_ERROR"},t}(o.ApiError);t.UnavailableError=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(6),i=r(26),a=r(11),s=r(28),u=r(29),l=r(27);!function(e){e.ApiError=o.ApiError,e.GeoBlockedError=i.GeoBlockedError,e.NotSupportedError=a.NotSupportedError,e.TimedOutError=s.TimedOutError,e.UnavailableError=u.UnavailableError,e.NoStreamsError=l.NoStreamsError}(n=t.errors||(t.errors={}))},function(e,t,r){"use strict";function n(){return re?re:(re=document.createElement("audio"),o(re),re)}function o(e){e.load()}function i(e){return e===Y||e===X}function a(e){return e.constructor===X}function s(e){return e.constructor===Y}function u(e){return e.constructor===Z}function l(e){return e.constructor===$}function c(e){var t=e.split("//",2);return 1===t.length?t[0].split("/",1)[0]:t[1]?t[1].split("/",1)[0]:""}function d(e){var t=ee.exec(e);return t&&t[0]||""}function f(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t="",r=0;r<20;r++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}function p(e){if("number"!=typeof e)throw new Error("level must be a number.");if(e<0||e>1)throw new Error("Invalid volume level.");se=e,ae.forEach(function(t){return t.setVolume(e)})}function h(){return se}function _(e){if("boolean"!=typeof e)throw new Error("muteEnabled must be a boolean.");ue=e,ae.forEach(function(t){return t.setMuted(e)})}function g(){return ue}function y(){n()}function v(e){function t(){return je?g(je):null}function r(){if(Be&&window.clearTimeout(Be),De.debug("Performing retrieve."),Ue)throw new Error("Player job already running. Only one instance of the job is allowed at once.");if(Ie.isDead())throw new Error("Proxy is dead.");var e=new B(function(){function e(){function t(e){if(e!==m.helpers.abortableJob.abortedError)if(e instanceof T.RequestError){var t=e.getStatusCode();switch(t){case 401:Ie._triggerError(new x.GeoBlockedError(t,"Geoblocked (logged out)."));break;case 403:Ie._triggerError(new x.GeoBlockedError(t,"Geoblocked (logged in)."));break;case 404:Ie._triggerError(new O.UnavailableError(t,"Track unavailable."));break;case null:throw new Error("Status code should not be null.");default:Ie._triggerError(new A.ApiError(t))}}else e===m.helpers.retry.noMoreAttemptsError?Ie._triggerError(new D.TimedOutError):(De.error("Unexpected error.",e),Ie._triggerError(new m.errors.PlayerFatalError("An unexpected error occurred.",e)))}a=o(),a.onCompletion(function(r){if(r)try{Ne=r,Le||(Le=p());var o=Le[0];o?n():(De.debug("Excluding rendition.",r.rendition),v.excludeRendition(r.rendition),Le=null,e())}catch(e){t(e)}else Ne?(De.error("There were no stream formats that were supported."),Ie._triggerError(new M.NotSupportedError)):(De.error("There were no streams available."),Ie._triggerError(new G.NoStreamsError))}),a.onError(t)}function n(){function e(e){if(!u&&!i&&(u=!0,De.debug("Player releasing control.",e),t.abort(e),!Ie.isDead()))if(e&&e.retryPlayer){var n=qe.getDelay();n>0?(De.debug("Waiting "+n+" ms."),Be=window.setTimeout(function(){return r()},n)):r()}else r()}var n=Le&&Le[0];if(!n)throw new Error("No player to build.");if(!Ne)throw new Error("No rendition.");var o=Ne.url,a=Ne.rendition,s=new m.Descriptor(o,a.maestroProtocol,a.maestroFormat,a.maestroSegmentFormat),u=!1;De.debug("Building player...");var l=void 0,c=void 0;try{c=n(s,Ne,e)}catch(e){l=e}void 0===c?(De.error("Exception occurred whilst building player.",l),e()):null===c?(De.debug("Player not supported for current descriptor."),e()):(Ce.set(c,Ne),je=c,De.debug("Built player."),je.isDead()?(De.debug("Player died during construction."),e()):(le.addPlayer(je),je.onChange.subscribe(function(t){var r=t.dead;r&&(De.debug("Player died."),e())})))}var i=!1,a=null;return e(),{result:m.helpers.deferred.buildDeferred().promise,abort:function(e){i=!0,De.info("Player job aborted.",e),Ue=null,a&&a.abort(),Le&&(e&&e.retryPlayer?De.debug("Player might be used again for current rendition."):(De.debug("Player will not be used again for current rendition."),Le.shift()),Ie.getPlayer()&&Ie.removePlayer(),je&&(je.kill(),je=null),Ne=null)}}}),t=e.run();return Ue=t}function o(){return H(function(){return new B(function(){var e=v.getUrl();De.debug("Retrieving a URL...");var t=e.whenComplete().then(function(e){return e?De.debug("Retrieved URL.",{rendition:e.rendition,bitrate:e.bitrate}):De.debug("No URL provided."),e&&te.indexOf(e.rendition)<0?(De.warn("Unknown rendition. Skipping...",e.rendition),{success:!1}):{result:e,success:!0}}).catch(function(e){if(e instanceof T.RequestError){var t=e.getStatusCode();if(null===t||0===t)return null===t?De.warn("Timed out when retrieving URL. Will retry."):De.warn("Network error when retrieving URL. Will retry."),{success:!1}}throw e!==m.helpers.abortableJob.abortedError&&De.error("Error retrieving URL.",e),e});return{result:t,abort:function(){return e.abort()}}})},Pe)}function p(){var e=[];return $&&y.indexOf($)>=0&&(De.debug("ChromecastPlayer found.",Q.version),xe?e.push(function(e){var t=new $(e,{name:Ae,castContext:xe,logger:ye});return Ie.providePlayer(t,{syncPosition:!1,syncVolume:!1},!1),t}):De.warn("Could not construct chromecast player because context not provided.")),Z&&y.indexOf(Z)>=0&&(De.debug("FlipperPlayer found.",J.version),e.push(function(e){var t=new Z(e,{name:Ae,logger:ye});return C.takeControlFlipperPlayer(Ie,t,De,Fe||void 0),t})),X&&y.indexOf(X)>=0&&(De.debug("HLSMSEPlayer found.",W.version),e.push(function(e,t,r){var n=new X(e,{name:Ae,playlistLoader:E.stringLoader,segmentLoader:E.arrayBufferLoader,keyLoader:E.arrayBufferLoader,logger:ye});return _(n,function(){return r()}),I.takeControlHLSMSEPlayer(W,Ie,n,Te,r,t.rendition,v,t.url,De),n})),Y&&y.indexOf(Y)>=0&&(De.debug("HTML5Player found.",K.version),e.push(function(e,t,r){var n=t.timeRetrieved;if(Te&&("hls"===e.getProtocol().name||void 0===n))return null;var o;if(Te){if(void 0===n)throw new Error("Expecting timeUrlRetrieved to be set.");o={urlExpires:!0,timeUrlRetrieved:n}}else o={urlExpires:!1};var i=new Y(e,{name:Ae,logger:ye});return _(i,function(){return r()}),k.takeControlHTML5Player(K,Ie,i,o,r,De),i})),e}function h(){Ue?(De.debug("Reloading stream URLs..."),De.debug("Aborting player job that is in progress."),Ue.abort(),Le=null,r()):De.debug("Reload requested, but not reloading as there is nothing to reload.")}function _(e,t){function r(){var t=e.getMediaElement();t&&t!==re&&(De.debug("Revoking audio element that was created internally because player is ready now."),e.revokeMediaElement())}function o(){var r=e.getMediaElement();if(r&&r!==re&&(De.debug("Revoking audio element that was created internally, even though player is not ready."),e.revokeMediaElement()),!e.getMediaElement()){ne&&!ne.isDead()&&(De.info("Revoking audio element from a player."),ne.isPlaying()&&De.warn("The audio element is being revoked from a player which is playing. Only one player should be playing at once."),ne.revokeMediaElement()),ne=e,De.info("Providing audio element to a different player.");var o=oe={};e.provideMediaElement(n()).catch(function(r){e.isDead()||oe!==o||(De.error("An unexpected error occurred when trying to provide the audio element to a player.",r),t())})}}e.isReady()?r():e.onReady.subscribe(r),Ie.onPlayIntent.subscribe(function(){e.isDead()||o()}),Ie.isPlaying()&&(e.isDead()||o())}function g(e){var t=Ce.get(e);if(!t)return null;var r=s(e)?"MaestroHTML5":a(e)?"MaestroHLSMSE":u(e)?"MaestroFlipper":l(e)?"MaestroChromecast":null;if(!r)throw new Error("Unknown player.");return{name:r,bitrate:t.bitrate,protocol:t.rendition.scProtocol,host:c(t.url),url:d(t.url),format:t.rendition.scFormat}}var y=e.playerClasses,v=e.streamUrlRetriever,L=e.duration,F=void 0===L?null:L,q=e.preloadingEnabled,ee=void 0!==q&&q,ce=e.pausedMaxBufferLength,de=void 0===ce?2e3:ce,fe=e.playingMaxBufferLength,pe=void 0===fe?9e4:fe,he=e.fadeOutDuration,_e=void 0===he?0:he,ge=e.logger,ye=void 0===ge?m.logger.noOpLogger:ge,ve=e.audioPerformanceReporter,me=e.audioReporter,Ee=e.audioCheckpointInterval,be=void 0===Ee?3e4:Ee,we=e.errorReporter,Se=e.urlProviderRetryDelayCalculator,Pe=void 0===Se?z():Se,Re=e.streamUrlsExpire,Te=void 0===Re||Re,xe=e.chromecastContext;if(!(v instanceof b.BaseStreamUrlRetriever))throw new Error("StreamUrlRetriever invalid.");if(null!==F&&("number"!=typeof F||F<0))throw new Error("duration invalid.");if("boolean"!=typeof ee)throw new Error("preloadingEnabled invalid.");if(null!==de&&("number"!=typeof de||de<0))throw new Error("pausedMaxBufferLength invalid.");if(null!==pe&&("number"!=typeof pe||pe<0))throw new Error("playingMaxBufferLength invalid.");if(null!==_e&&("number"!=typeof _e||_e<0))throw new Error("fadeOutDuration invalid.");if(null!==ye&&"function"!=typeof ye&&"object"!=typeof ye)throw new Error("logger invalid.");if(void 0!==me&&"function"!=typeof me)throw new Error("audioReporter invalid.");if(null!==be&&("number"!=typeof be||be<0))throw new Error("audioCheckpointInterval invalid.");if(void 0!==ve&&"function"!=typeof ve)throw new Error("audioPerformanceReporter invalid.");if(void 0!==we&&"function"!=typeof we)throw new Error("errorReporter invalid.");if(void 0!==Pe&&"function"!=typeof Pe)throw new Error("retryDelayCalculator invalid.");var Ae="SCAudio-"+ ++ie,Oe=v.getTrackId();null!==Oe&&(Ae+="-"+Oe);var Me=new N.LogCollector;ye=m.logger.cloneLogger(Me,ye);var De=m.logger.prefixLogger(ye,Ae),ke=f();De.info("Building player...",{ua:navigator.userAgent,logId:ke});var Ie=new R.Player({name:Ae+"-Proxy",logger:ye,mediaSessionEnabled:!0,pausedMaxBufferLength:de,playingMaxBufferLength:pe,preloadingEnabled:ee},h);ae.push(Ie),Ie.setVolume(se),Ie.setMuted(ue),_e>0&&Ie.addVolumeAutomator(w.buildFadeOut(_e));var Ce=new V.SCWeakMap,Le=null,je=null,Ne=null,Ue=null,Fe=null,Be=null,qe=new j.DecayingExponentialDelayCalculator;if(ve&&(Fe=new S.AudioPerformanceEventGenerator(Ie,ve,De,t)),me&&new U.AudioEventGenerator(Ie,me,be,De,t),we&&new P.ErrorEventGenerator(Ie,Me,ke,Oe,we,De,g,W||null,Te),Ie.onChange.subscribe(function(e){var t=e.dead,r=e.playing;if(t)De.info("Player killed."),ae.splice(ae.indexOf(Ie),1),Ue&&Ue.abort(),Be&&window.clearTimeout(Be);else if(r===!0){var o=y.some(function(e){return i(e)});o&&n()}}),null!==F&&(De.debug("Setting initial duration.",F),Ie.setInitialDuration(F)),ee)De.debug("Preloading is enabled, so performing retrieve immediately."),r();else{De.debug("Preloading is disabled, so deferring retrieve until either a play intent or preloading is enabled.");var He=function(){ze.remove(),Ge.remove(),De.debug("Preloading now enabled or received a play request. Peforming retrieve."),r()},ze=Ie.onPreloadingEnabled.subscribe(He),Ge=Ie.onPlayIntent.subscribe(He)}return Ie}Object.defineProperty(t,"__esModule",{value:!0});var m=r(0),E=r(94),b=r(13),w=r(12),S=r(73),P=r(78),R=r(14),T=r(16),x=r(26),A=r(6),O=r(29),M=r(11),D=r(28),k=r(76),I=r(25),C=r(75),L=r(15),j=r(77),N=r(80),U=r(72),F=r(74),B=m.helpers.abortableJob.AbortableJob,q=m.helpers.retry,H=q.retry,z=q.buildExponentialDelayCalculator,G=r(27),V=r(79),K=void 0;
try{K=r(93)}catch(e){}var W=void 0;try{W=r(92)}catch(e){}var J=void 0;try{J=r(91)}catch(e){}var Q=void 0;try{Q=r(90)}catch(e){}var Y=K?K.HTML5Player:null,X=W?W.HLSMSEPlayer:null,Z=J?J.FlipperPlayer:null,$=Q?Q.ChromecastPlayer:null,ee=/^[^?#]*/,te=Object.keys(L.renditions).map(function(e){return L.renditions[e]}),re=null,ne=null,oe={},ie=-1,ae=[],se=1,ue=!1,le=new F.CacheManager(15e7,m.logger.noOpLogger);t.setGlobalVolume=p,t.getGlobalVolume=h,t.setGlobalMuted=_,t.getGlobalMuted=g,t.activateAudioElement=y,t.buildPlayer=v},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(12);!function(e){e.Fade=o.Fade,e.buildFadeIn=o.buildFadeIn,e.buildFadeOut=o.buildFadeOut}(n=t.volumeAutomation||(t.volumeAutomation={}))},function(e,t,r){"use strict";var n,o=r(47),i=r(19),a=r(2),s=r(54),u=r(2),l=r(1),c=Function.prototype.bind,d=Object.defineProperty,f=Object.prototype.hasOwnProperty;n=function(e,t,r){var n,i=l(t)&&u(t.value);return n=o(t),delete n.writable,delete n.value,n.get=function(){return!r.overwriteDefinition&&f.call(this,e)?i:(t.value=c.call(i,r.resolveContext?r.resolveContext(this):this),d(this,e,t),this[e])},n},e.exports=function(e){var t=i(arguments[1]);return null!=t.resolveContext&&a(t.resolveContext),s(e,function(e,r){return n(r,e,t)})}},function(e,t,r){"use strict";var n=r(1);e.exports=function(){return n(this).length=0,this}},function(e,t,r){"use strict";e.exports=r(36)()?Array.from:r(37)},function(e,t,r){"use strict";e.exports=function(){var e,t,r=Array.from;return"function"==typeof r&&(e=["raz","dwa"],t=r(e),Boolean(t&&t!==e&&"dwa"===t[1]))}},function(e,t,r){"use strict";var n=r(3).iterator,o=r(7),i=r(38),a=r(43),s=r(2),u=r(1),l=r(4),c=r(8),d=Array.isArray,f=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},h=Object.defineProperty;e.exports=function(e){var t,r,_,g,y,v,m,E,b,w,S=arguments[1],P=arguments[2];if(e=Object(u(e)),l(S)&&s(S),this&&this!==Array&&i(this))t=this;else{if(!S){if(o(e))return y=e.length,1!==y?Array.apply(null,e):(g=new Array(1),g[0]=e[0],g);if(d(e)){for(g=new Array(y=e.length),r=0;r<y;++r)g[r]=e[r];return g}}g=[]}if(!d(e))if(void 0!==(b=e[n])){for(m=s(b).call(e),t&&(g=new t),E=m.next(),r=0;!E.done;)w=S?f.call(S,P,E.value,r):E.value,t?(p.value=w,h(g,r,p)):g[r]=w,E=m.next(),++r;y=r}else if(c(e)){for(y=e.length,t&&(g=new t),r=0,_=0;r<y;++r)w=e[r],r+1<y&&(v=w.charCodeAt(0),v>=55296&&v<=56319&&(w+=e[++r])),w=S?f.call(S,P,w,_):w,t?(p.value=w,h(g,_,p)):g[_]=w,++_;y=_}if(void 0===y)for(y=a(e.length),t&&(g=new t(y)),r=0;r<y;++r)w=S?f.call(S,P,e[r],r):e[r],t?(p.value=w,h(g,r,p)):g[r]=w;return t&&(p.value=null,g.length=y),g}},function(e,t,r){"use strict";var n=Object.prototype.toString,o=n.call(r(17));e.exports=function(e){return"function"==typeof e&&n.call(e)===o}},function(e,t,r){"use strict";e.exports=r(40)()?Math.sign:r(41)},function(e,t,r){"use strict";e.exports=function(){var e=Math.sign;return"function"==typeof e&&1===e(10)&&e(-20)===-1}},function(e,t,r){"use strict";e.exports=function(e){return e=Number(e),isNaN(e)||0===e?e:e>0?1:-1}},function(e,t,r){"use strict";var n=r(39),o=Math.abs,i=Math.floor;e.exports=function(e){return isNaN(e)?0:(e=Number(e),0!==e&&isFinite(e)?n(e)*i(o(e)):e)}},function(e,t,r){"use strict";var n=r(42),o=Math.max;e.exports=function(e){return o(0,n(e))}},function(e,t,r){"use strict";var n=r(2),o=r(1),i=Function.prototype.bind,a=Function.prototype.call,s=Object.keys,u=Object.prototype.propertyIsEnumerable;e.exports=function(e,t){return function(r,l){var c,d=arguments[2],f=arguments[3];return r=Object(o(r)),n(l),c=s(r),f&&c.sort("function"==typeof f?i.call(f,r):void 0),"function"!=typeof e&&(e=c[e]),a.call(e,c,function(e,n){return u.call(r,e)?a.call(l,d,r[e],e,r,n):t})}}},function(e,t,r){"use strict";e.exports=function(){var e,t=Object.assign;return"function"==typeof t&&(e={foo:"raz"},t(e,{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}},function(e,t,r){"use strict";var n=r(51),o=r(1),i=Math.max;e.exports=function(e,t){var r,a,s,u=i(arguments.length,2);for(e=Object(o(e)),s=function(n){try{e[n]=t[n]}catch(e){r||(r=e)}},a=1;a<u;++a)t=arguments[a],n(t).forEach(s);if(void 0!==r)throw r;return e}},function(e,t,r){"use strict";var n=r(35),o=r(9),i=r(1);e.exports=function(e){var t=Object(i(e)),r=arguments[1],a=Object(arguments[2]);if(t!==e&&!r)return t;var s={};return r?n(r,function(t){(a.ensure||t in e)&&(s[t]=e[t])}):o(s,e),s}},function(e,t,r){"use strict";var n,o=Object.create;r(20)()||(n=r(21)),e.exports=function(){var e,t,r;return n?1!==n.level?o:(e={},t={},r={configurable:!1,enumerable:!1,writable:!0,value:void 0},Object.getOwnPropertyNames(Object.prototype).forEach(function(e){return"__proto__"===e?void(t[e]={configurable:!0,enumerable:!1,writable:!0,value:void 0}):void(t[e]=r)}),Object.defineProperties(e,t),Object.defineProperty(n,"nullPolyfill",{configurable:!1,enumerable:!1,writable:!1,value:e}),function(t,r){return o(null===t?e:t,r)}):o}()},function(e,t,r){"use strict";e.exports=r(44)("forEach")},function(e,t,r){"use strict";e.exports=function(e){return"function"==typeof e}},function(e,t,r){"use strict";e.exports=r(52)()?Object.keys:r(53)},function(e,t,r){"use strict";e.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}},function(e,t,r){"use strict";var n=r(4),o=Object.keys;e.exports=function(e){return o(n(e)?Object(e):e)}},function(e,t,r){"use strict";var n=r(2),o=r(49),i=Function.prototype.call;e.exports=function(e,t){var r={},a=arguments[2];return n(t),o(e,function(e,n,o,s){r[n]=i.call(t,a,e,n,o,s)}),r}},function(e,t,r){"use strict";var n=r(18);e.exports=function(e){if(!n(e))throw new TypeError(e+" is not an Object");return e}},function(e,t,r){"use strict";var n="razdwatrzy";e.exports=function(){return"function"==typeof n.contains&&n.contains("dwa")===!0&&n.contains("foo")===!1}},function(e,t,r){"use strict";var n=String.prototype.indexOf;e.exports=function(e){return n.call(this,e,arguments[1])>-1}},function(e,t,r){"use strict";var n=Object.create(null),o=Math.random;e.exports=function(){var e;do e=o().toString(36).slice(2);while(n[e]);return e}},function(e,t,r){"use strict";var n,o=r(10),i=r(22),a=r(5),s=r(3),u=r(24),l=Object.defineProperty;n=e.exports=function(e,t){if(!(this instanceof n))throw new TypeError("Constructor requires 'new'");u.call(this,e),t=t?i.call(t,"key+value")?"key+value":i.call(t,"key")?"key":"value":"value",l(this,"__kind__",a("",t))},o&&o(n,u),delete n.prototype.constructor,n.prototype=Object.create(u.prototype,{_resolve:a(function(e){return"value"===this.__kind__?this.__list__[e]:"key+value"===this.__kind__?[e,this.__list__[e]]:e})}),l(n.prototype,s.toStringTag,a("c","Array Iterator"))},function(e,t,r){"use strict";var n=r(7),o=r(2),i=r(8),a=r(23),s=Array.isArray,u=Function.prototype.call,l=Array.prototype.some;e.exports=function(e,t){var r,c,d,f,p,h,_,g,y=arguments[2];if(s(e)||n(e)?r="array":i(e)?r="string":e=a(e),o(t),d=function(){f=!0},"array"===r)return void l.call(e,function(e){return u.call(t,y,e,d),f});if("string"!==r)for(c=e.next();!c.done;){if(u.call(t,y,c.value,d),f)return;c=e.next()}else for(h=e.length,p=0;p<h&&(_=e[p],p+1<h&&(g=_.charCodeAt(0),g>=55296&&g<=56319&&(_+=e[++p])),u.call(t,y,_,d),!f);++p);}},function(e,t,r){"use strict";var n=r(7),o=r(4),i=r(8),a=r(3).iterator,s=Array.isArray;e.exports=function(e){return!(!o(e)||!s(e)&&!i(e)&&!n(e)&&"function"!=typeof e[a])}},function(e,t,r){"use strict";var n,o=r(10),i=r(5),a=r(3),s=r(24),u=Object.defineProperty;n=e.exports=function(e){if(!(this instanceof n))throw new TypeError("Constructor requires 'new'");e=String(e),s.call(this,e),u(this,"__length__",i("",e.length))},o&&o(n,s),delete n.prototype.constructor,n.prototype=Object.create(s.prototype,{_next:i(function(){if(this.__list__)return this.__nextIndex__<this.__length__?this.__nextIndex__++:void this._unBind()}),_resolve:i(function(e){var t,r=this.__list__[e];return this.__nextIndex__===this.__length__?r:(t=r.charCodeAt(0),t>=55296&&t<=56319?r+this.__list__[this.__nextIndex__++]:r)})}),u(n.prototype,a.toStringTag,i("c","String Iterator"))},function(e,t,r){"use strict";var n=r(61);e.exports=function(e){if(!n(e))throw new TypeError(e+" is not iterable");return e}},function(e,t,r){"use strict";var n={object:!0,symbol:!0};e.exports=function(){var e;if("function"!=typeof Symbol)return!1;e=Symbol("test symbol");try{String(e)}catch(e){return!1}return!!n[typeof Symbol.iterator]&&!!n[typeof Symbol.toPrimitive]&&!!n[typeof Symbol.toStringTag]}},function(e,t,r){"use strict";e.exports=function(e){return!!e&&("symbol"==typeof e||!!e.constructor&&"Symbol"===e.constructor.name&&"Symbol"===e[e.constructor.toStringTag])}},function(e,t,r){"use strict";var n,o,i,a,s=r(5),u=r(67),l=Object.create,c=Object.defineProperties,d=Object.defineProperty,f=Object.prototype,p=l(null);if("function"==typeof Symbol){n=Symbol;try{String(n()),a=!0}catch(e){}}var h=function(){var e=l(null);return function(t){for(var r,n,o=0;e[t+(o||"")];)++o;return t+=o||"",e[t]=!0,r="@@"+t,d(f,r,s.gs(null,function(e){n||(n=!0,d(this,r,s(e)),n=!1)})),r}}();i=function(e){if(this instanceof i)throw new TypeError("Symbol is not a constructor");return o(e)},e.exports=o=function e(t){var r;if(this instanceof e)throw new TypeError("Symbol is not a constructor");return a?n(t):(r=l(i.prototype),t=void 0===t?"":String(t),c(r,{__description__:s("",t),__name__:s("",h(t))}))},c(o,{for:s(function(e){return p[e]?p[e]:p[e]=o(String(e))}),keyFor:s(function(e){var t;u(e);for(t in p)if(p[t]===e)return t}),hasInstance:s("",n&&n.hasInstance||o("hasInstance")),isConcatSpreadable:s("",n&&n.isConcatSpreadable||o("isConcatSpreadable")),iterator:s("",n&&n.iterator||o("iterator")),match:s("",n&&n.match||o("match")),replace:s("",n&&n.replace||o("replace")),search:s("",n&&n.search||o("search")),species:s("",n&&n.species||o("species")),split:s("",n&&n.split||o("split")),toPrimitive:s("",n&&n.toPrimitive||o("toPrimitive")),toStringTag:s("",n&&n.toStringTag||o("toStringTag")),unscopables:s("",n&&n.unscopables||o("unscopables"))}),c(i.prototype,{constructor:s(o),toString:s("",function(){return this.__name__})}),c(o.prototype,{toString:s(function(){return"Symbol ("+u(this).__description__+")"}),valueOf:s(function(){return u(this)})}),d(o.prototype,o.toPrimitive,s("",function(){var e=u(this);return"symbol"==typeof e?e:e.toString()})),d(o.prototype,o.toStringTag,s("c","Symbol")),d(i.prototype,o.toStringTag,s("c",o.prototype[o.toStringTag])),d(i.prototype,o.toPrimitive,s("c",o.prototype[o.toPrimitive]))},function(e,t,r){"use strict";var n=r(65);e.exports=function(e){if(!n(e))throw new TypeError(e+" is not a symbol");return e}},function(e,t,r){"use strict";e.exports=r(69)()?WeakMap:r(71)},function(e,t,r){"use strict";e.exports=function(){var e,t;if("function"!=typeof WeakMap)return!1;try{e=new WeakMap([[t={},"one"],[{},"two"],[{},"three"]])}catch(e){return!1}return"[object WeakMap]"===String(e)&&"function"==typeof e.set&&e.set({},1)===e&&"function"==typeof e.delete&&"function"==typeof e.has&&"one"===e.get(t)}},function(e,t,r){"use strict";e.exports=function(){return"function"==typeof WeakMap&&"[object WeakMap]"===Object.prototype.toString.call(new WeakMap)}()},function(e,t,r){"use strict";var n,o=r(10),i=r(55),a=r(1),s=r(58),u=r(5),l=r(23),c=r(60),d=r(3).toStringTag,f=r(70),p=Array.isArray,h=Object.defineProperty,_=Object.prototype.hasOwnProperty,g=Object.getPrototypeOf;e.exports=n=function(){var e,t=arguments[0];if(!(this instanceof n))throw new TypeError("Constructor requires 'new'");return e=f&&o&&WeakMap!==n?o(new WeakMap,g(this)):this,null!=t&&(p(t)||(t=l(t))),h(e,"__weakMapData__",u("c","$weakMap$"+s())),t?(c(t,function(t){a(t),e.set(t[0],t[1])}),e):e},f&&(o&&o(n,WeakMap),n.prototype=Object.create(WeakMap.prototype,{constructor:u(n)})),Object.defineProperties(n.prototype,{delete:u(function(e){return!!_.call(i(e),this.__weakMapData__)&&(delete e[this.__weakMapData__],!0)}),get:u(function(e){if(_.call(i(e),this.__weakMapData__))return e[this.__weakMapData__]}),has:u(function(e){return _.call(i(e),this.__weakMapData__)}),set:u(function(e,t){return h(i(e),this.__weakMapData__,u("c",t)),this}),toString:u(function(){return"[object WeakMap]"})}),h(n.prototype,d,u("c","WeakMap"))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=1e3,i=function(){function e(e,t,r,i,a){this._checkpointTimer=null,this._logger=n.logger.prefixLogger(i,"AudioEventGenerator"),this._player=e,this._eventReporter=t,this._checkpointInterval=null!==r?Math.max(o,r):null,this._getPlayerDetails=a,this._startReporting()}return e.prototype._startReporting=function(){var e=this,t=this._player;t.onChange.subscribe(function(r){var n=r.actuallyPlaying,o=r.ended;n===!0&&!t.isEnded()||o===!1&&t.isActuallyPlaying()?(null===e._checkpointInterval||e._checkpointTimer||(e._checkpointTimer=window.setInterval(function(){e._reportEvent("checkpoint")},e._checkpointInterval)),e._reportEvent("play")):(n===!1&&!t.isEnded()||o===!0&&t.isActuallyPlaying())&&(e._checkpointTimer&&(window.clearInterval(e._checkpointTimer),e._checkpointTimer=null),e._reportEvent("pause"))})},e.prototype._reportEvent=function(e){var t=this._getPlayerDetails();if(!t)return void this._logger.warn("Cannot report event because there is no player.",e);var r=this._player.getDuration();if(null===r)throw new Error("Duration should exist now.");var n={type:e,position:this._player.getPosition(),duration:r,playerType:t.name};this._logger.debug("Generated audio event.",n),this._eventReporter(n)},e}();t.AudioEventGenerator=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(89),i=3e4,a=function(){function e(e,t,r,o){this._logger=n.logger.prefixLogger(r,"AudioPerformanceEventGenerator"),this._player=e,this._eventReporter=t,this._getPlayerDetails=o,this._measureGeneralEvents()}return e.prototype.reportManualEvent=function(e){this._logger.debug("Reporting manual audio performance event.",e),this._eventReporter(e)},e.prototype._measureGeneralEvents=function(){var e=this,t=this._player,r=null,n=null,a=null,s=null,u=!0;t.onChange.subscribe(function(l){var c=l.playing,d=l.actuallyPlaying,f=l.seeking,p=l.stalled,h=l.ended;if(t.isDead())return void(s&&window.clearTimeout(s));c===!0&&(r||(r=new o.Timer,r.start(),s=window.setTimeout(function(){e._reportEvent("longInitialBuffering",0)},i),0===t.getPosition()&&(u=!1))),c===!1&&(s&&window.clearTimeout(s),r&&!r.isComplete()&&(r=null)),d===!0&&r&&!r.isComplete()&&(r.stop(),s&&window.clearTimeout(s),e._reportEvent("play",r.getTime())),f===!0&&t.isReady()&&(n=new o.Timer,n.start()),f===!1&&n&&(n.stop(),e._reportEvent("seek",n.getTime())),p===!0&&t.isPlaying()&&r&&r.isComplete()&&(a=new o.Timer,a.start(),e._reportEvent("rebufferingStart",0)),p===!1&&a&&(a.stop(),e._reportEvent("rebufferingEnd",a.getTime()),a=null),h!==!0||u||(e._reportEvent("uninterruptedPlay",0),u=!0);var _=t.getSeekState(),g=_&&"IN_PROGRESS"===_.state;!g&&p===!0&&t.isActuallyPlaying()&&(u=!0)})},e.prototype._reportEvent=function(e,t){var r=this._getPlayerDetails();if(!r)return void this._logger.warn("Cannot report event because there is no player.",e,t);var n={type:e,latency:t,protocol:r.protocol,playerType:r.name,host:r.host,bitrate:r.bitrate,format:r.format||void 0};this._logger.debug("Generated audio performance event.",n),this._eventReporter(n)},e}();t.AudioPerformanceEventGenerator=a},function(e,t,r){"use strict";function n(e,t){var r=e.getMemoryCacheController();r&&r.setMaxCacheSize(t)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=2e4,a=function(){function e(e,t){this._maxCacheSize=e,this._players=[],this._updateTimer=null,this._logger=o.logger.prefixLogger(t,"CacheManager"),this._logger.debug("Initialized with cache size "+e+" bytes.")}return e.prototype.addPlayer=function(e){var t=this;if(this._logger.debug("Adding player to cache manager."),e.isDead())return void this._logger.debug("Player was dead.");var r=this._players;e.onChange.subscribe(function(n){var o=n.playing,i=n.dead;i===!0?(t._logger.debug("Removing player that became dead."),r.splice(r.indexOf(e),1),t._update()):o===!0?(t._logger.debug("Updating because player started playing."),r.splice(r.indexOf(e),1),r.unshift(e),t._update()):o===!1&&(t._logger.debug("Updating because player became paused."),t._update())}),e.isPlaying()?r.unshift(e):r.push(e),this._update()},e.prototype._update=function(){var e=this;if(this._updateTimer&&(window.clearTimeout(this._updateTimer),this._updateTimer=null),0===this._players.length)return void this._logger.debug("There are no longer any players to manage.");var t=this._players.reduce(function(e,t){return t.isPlaying()?e.playingPlayers.push(t):e.pausedPlayers.push(t),e},{playingPlayers:[],pausedPlayers:[]}),r=t.playingPlayers,o=t.pausedPlayers,a=r.reduce(function(e,t){return e+(t.getMemoryCacheUsage()||0)},0),s=o.reduce(function(e,t){return e+(t.getMemoryCacheUsage()||0)},0);if(a>this._maxCacheSize){this._logger.debug("All playing players are using more than the max cache size. Cleaning...",a,this._maxCacheSize);var u=this._maxCacheSize/r.length;r.forEach(function(e){return n(e,u)}),o.forEach(function(e){return n(e,0)})}else this._logger.debug("Recalculating cache sizes...",a+s,this._maxCacheSize),r.concat(o).reduce(function(t,r){return n(r,Math.max(0,e._maxCacheSize-t)),t+(r.getMemoryCacheUsage()||0)},0);this._updateTimer=window.setTimeout(function(){return e._update()},i)},e}();t.CacheManager=a},function(e,t,r){"use strict";function n(e,t,r,n){r=o.logger.prefixLogger(r,"FlipperPlayer Controller"),n&&t.onAudioPerformanceEvent.subscribe(function(e){var t=e.protocol,o=e.type,i=e.latency,a=e.player_type,s=e.host,u=e.bitrate,l=e.format,c="Flipper";if(a!==c)return void r.warn("Ignoring audio performance event from flipper because the player_type was incorrect.",a);var d={protocol:t,type:o,latency:i,playerType:c,host:s,bitrate:u,format:l};n.reportManualEvent(d)}),e.providePlayer(t)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0);t.takeControlFlipperPlayer=n},function(e,t,r){"use strict";function n(e,t,r,n,a,s){function u(){var e=r.getDuration(),t=l();if(null!==e&&null!==t){var n=e-r.getPosition();i()+n>t&&(s.info("Releasing control because stream URL would expire before reaching end."),a({retryPlayer:!0}))}}function l(){if(!n.urlExpires)return null;var e=r.getDuration();return null===e?null:n.timeUrlRetrieved+e+105e3}function c(){var e=l();return null!==e&&e<=i()}s=o.logger.prefixLogger(s,"HTML5Player Controller"),r.onError.subscribe(function(t){t instanceof o.errors.NotSupportedError||(t instanceof e.errors.NetworkError&&c()?(s.info("Releasing control as a network error occurred, and the URL has expired."),a({retryPlayer:!0})):(s.error("Unexpected player error.",t),a({retryPlayer:!1})))}),n.urlExpires&&(r.onPlayIntent.subscribe(function(){return u()}),r.onSeekIntent.subscribe(function(){return u()})),t.providePlayer(r)}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=o.helpers.time.now;t.takeControlHTML5Player=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this._delayFactor=0,this._lastRequestTime=0}return e.prototype.getDelay=function(){var e=Date.now()-this._lastRequestTime;return this._lastRequestTime=Date.now(),this._delayFactor=Math.max(0,this._delayFactor-e/15e3),this._delayFactor+=1,Math.pow(2,this._delayFactor)},e}();t.DecayingExponentialDelayCalculator=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(25),i=1e3,a=function(){function e(e,t,r,o,i,a,s,u,l){this._logger=n.logger.prefixLogger(a,"ErrorGenerator"),this._player=e,this._logCollector=t,this._logId=r,this._trackId=o,this._eventReporter=i,this._getPlayerDetails=s,this._MaestroHLSMSEPlayer=u,this._streamUrlsExpire=l,this._listenForErrors()}return e.prototype._listenForErrors=function(){var e=this;this._player.onError.subscribe(function(t){t instanceof n.errors.PlayerFatalError&&e._reportEvent(t.getCode(),null)});var t=this._player.getDuration();this._player.onDurationChange.subscribe(function(r){null!==t&&Math.abs(r-t)>i&&(e._logger.warn("Duration changed more than "+i+"ms.",t,r),e._reportEvent("DURATION_MISMATCH",e._player)),t=r}),this._player.onPlayerProvided.subscribe(function(t){t.onError.subscribe(function(r){if(!(e._streamUrlsExpire&&e._MaestroHLSMSEPlayer&&o.isErrorWhichShouldTriggerURLRefresh(e._MaestroHLSMSEPlayer,r))){var i=r.getCode();r instanceof n.errors.NotSupportedError||e._reportEvent(i,t)}})})},e.prototype._reportEvent=function(e,t){var r=t?this._getPlayerDetails(t)||void 0:void 0,n={errorCode:e,log:this._logCollector.getLog(),logId:this._logId,trackId:this._trackId,protocol:r&&r.protocol,playerType:r?r.name:"MaestroUnknown",host:r&&r.host,bitrate:r&&r.bitrate,format:r&&(r.format||void 0),url:r&&r.url};this._logger.debug("Generated audio error event.",n),this._eventReporter(n)},e}();t.ErrorEventGenerator=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(68),o=function(){function e(){this._map=new n}return e.prototype.get=function(e){return this._map.get(e)},e.prototype.set=function(e,t){this._map.set(e,t)},e.prototype.has=function(e){return this._map.has(e)},e.prototype.delete=function(e){return this._map.delete(e)},e}();t.SCWeakMap=o},function(e,t,r){"use strict";function n(e){return e.map(function(e){try{return JSON.stringify(e)}catch(e){return"<unavailable>"}})}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e){void 0===e&&(e=200),this._bufferSize=e,this._log=[]}return e.prototype.getLog=function(){return this._log},e.prototype.debug=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];this._push({level:"debug",msg:e,data:n(t),time:Date.now()})},e.prototype.info=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];this._push({level:"info",msg:e,data:n(t),time:Date.now()})},e.prototype.warn=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];this._push({level:"warn",msg:e,data:n(t),time:Date.now()})},e.prototype.error=function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];this._push({level:"error",msg:e,data:n(t),time:Date.now()})},e.prototype._push=function(e){this._log.push(e)>this._bufferSize&&this._log.shift()},e}();t.LogCollector=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.apiMobile={scProtocol:"sc.api-mobile",maestroProtocol:{name:"sc.api-mobile"},maestroFormat:{}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.encryptedHlsMp3={scProtocol:"encrypted-hls",scFormat:"mp3",maestroProtocol:{name:"hls"},maestroFormat:{mimeType:"application/x-mpegURL"},maestroSegmentFormat:{mimeType:"audio/mpeg"}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.encryptedHlsOpus={scProtocol:"encrypted-hls",scFormat:"opus",maestroProtocol:{name:"hls"},maestroFormat:{mimeType:"application/x-mpegURL"},maestroSegmentFormat:{mimeType:"audio/ogg",audioCodec:{id:"opus"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hlsMp3={scProtocol:"hls",scFormat:"mp3",maestroProtocol:{name:"hls"},maestroFormat:{mimeType:"application/x-mpegURL"},maestroSegmentFormat:{mimeType:"audio/mpeg"}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hlsOpus={scProtocol:"hls",scFormat:"opus",maestroProtocol:{name:"hls"},maestroFormat:{mimeType:"application/x-mpegURL"},maestroSegmentFormat:{mimeType:"audio/ogg",audioCodec:{id:"opus"}}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.httpMp3={scProtocol:"http",scFormat:"mp3",maestroProtocol:{name:"http"},maestroFormat:{mimeType:"audio/mpeg"}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.maestroChromecast={scProtocol:"maestro.chromecast",maestroProtocol:{name:"maestro.chromecast"},maestroFormat:{}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(86),o=r(84),i=r(82),a=r(81),s=r(87),u=r(85),l=r(83);t.renditions={httpMp3:n.httpMp3,hlsMp3:o.hlsMp3,encryptedHlsMp3:i.encryptedHlsMp3,hlsOpus:u.hlsOpus,encryptedHlsOpus:l.encryptedHlsOpus,apiMobile:a.apiMobile,maestroChromecast:s.maestroChromecast}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=n.helpers.time.now,i=function(){function e(){this._start=null,this._end=null}return e.prototype.start=function(){if(this.isComplete())throw new Error("Timer completed.");this._start=o()},e.prototype.isComplete=function(){return null!==this._end},e.prototype.stop=function(){if(null===this._start)throw new Error("Not started.");this._end=o()},e.prototype.getTime=function(){if(null===this._end)throw new Error("Not completed.");return this._end-this._start},e}();t.Timer=i},function(e,r){if("undefined"==typeof t){var n=new Error('Cannot find module "@sc/maestro-chromecast-player"');throw n.code="MODULE_NOT_FOUND",n}e.exports=t},function(e,t){if("undefined"==typeof r){var n=new Error('Cannot find module "@sc/maestro-flipper-player"');throw n.code="MODULE_NOT_FOUND",n}e.exports=r},function(e,t){if("undefined"==typeof n){var r=new Error('Cannot find module "@sc/maestro-hls-mse-player"');throw r.code="MODULE_NOT_FOUND",r}e.exports=n},function(e,t){if("undefined"==typeof o){var r=new Error('Cannot find module "@sc/maestro-html5-player"');throw r.code="MODULE_NOT_FOUND",r}e.exports=o},function(e,t){e.exports=i},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),t.version="12.0.0",t.buildNumber=404;var o=r(32);t.volumeAutomation=o.volumeAutomation;var i=r(13);t.BaseStreamUrlRetriever=i.BaseStreamUrlRetriever;var a=r(16);t.RequestError=a.RequestError;var s=r(14);t.Player=s.Player;var u=r(15);t.renditions=u.renditions,n(r(30)),n(r(31))}])})},function(e,t,r){!function(t,r){e.exports=r()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=39)}([function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(4),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.getCode=function(){return"PLAYER_FATAL_ERROR"},t}(o.PlayerError);t.PlayerFatalError=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(8),o=function(){function e(){this._listeners=[],this.dispatch=this.dispatch.bind(this)}return e.prototype.subscribe=function(e){var t=this,r={fn:e,payloads:[]};return this._listeners.push(r),{remove:function(){var e=t._listeners.indexOf(r);return e>=0&&(t._listeners.splice(e,1),!0)},retrieve:function(){return t._dispatchListenerPayloads(r)}}},e.prototype.dispatch=function(e,t){var r=this,o="number"==typeof t?{time:t}:t||{},i=void 0!==o.time?o.time:n.now(),a=this._listeners;a.forEach(function(t){return t.payloads.push({time:i,payload:e})});var s=!1;do s=!a.some(function(e){var t=e.fn,n=e.payloads,o=n.shift();return!!o&&(r._callHandler(t,o),!0)});while(!s)},e.prototype.getHandle=function(){return{subscribe:this.subscribe.bind(this)}},e.prototype._dispatchListenerPayloads=function(e){for(var t=e.fn,r=e.payloads;;){var n=r.shift();if(!n)break;this._callHandler(t,n)}},e.prototype._callHandler=function(e,t){try{e(t.payload,t.time)}catch(e){window.setTimeout(function(){throw e},0)}},e}();t.EventDispatcher=o},function(e,t,r){"use strict";function n(){var e,t,r=!1,n=new o.Promise(function(r,n){e=r,t=n});return{promise:n,resolve:function(t){r||(r=!0,e(t))},reject:function(e){r||(r=!0,t(e))},isSettled:function(){return r}}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(12);t.buildDeferred=n},function(e,t,r){"use strict";function n(e,t){return{debug:function(r){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return e.debug.apply(e,["["+t+"] "+r].concat(n))},error:function(r){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return e.error.apply(e,["["+t+"] "+r].concat(n))},info:function(r){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return e.info.apply(e,["["+t+"] "+r].concat(n))},warn:function(r){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];return e.warn.apply(e,["["+t+"] "+r].concat(n))}}}function o(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return{debug:function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return e.forEach(function(e){return e.debug.apply(e,[t].concat(r))})},error:function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return e.forEach(function(e){return e.error.apply(e,[t].concat(r))})},info:function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return e.forEach(function(e){return e.info.apply(e,[t].concat(r))})},warn:function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return e.forEach(function(e){return e.warn.apply(e,[t].concat(r))})}}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(19),a=i.isIE();t.noOpLogger={debug:function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r]},error:function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r]},info:function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r]},warn:function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r]}},t.consoleLogger={debug:function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];a?console.log(e,t):(n=console.debug||console.log).call.apply(n,[console,e].concat(t));var n},error:function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];a?console.log(e,t):(n=console.error||console.log).call.apply(n,[console,e].concat(t));var n},info:function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];a?console.log(e,t):(n=console.info||console.log).call.apply(n,[console,e].concat(t));var n},warn:function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];a?console.log(e,t):(n=console.warn||console.log).call.apply(n,[console,e].concat(t));var n}},t.prefixLogger=n,t.cloneLogger=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){this._msg=e,this._cause=t}return e.prototype.getCode=function(){return"PLAYER_ERROR"},e.prototype.getMsg=function(){return this._msg},e.prototype.getCause=function(){return this._cause},e}();t.PlayerError=n},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(16),i=function(e){function t(t,r,n){return void 0===n&&(n="The player that the proxy was controlling had a fatal error."),e.call(this,t,r,n)||this}return n(t,e),t.prototype.getCode=function(){return"PROXY_PLAYER_PROVIDED_PLAYER_FATAL_ERROR"},t}(o.ProxyProvidedPlayerError);t.ProxyProvidedPlayerFatalError=i},function(e,t,r){"use strict";function n(e){try{e()}catch(e){window.setTimeout(function(){throw e},0)}}Object.defineProperty(t,"__esModule",{
value:!0}),t.deferException=n},function(e,t,r){"use strict";function n(e,t){var r=void 0;return e.some(function(e){return!!t(e)&&(r=e,!0)}),r}Object.defineProperty(t,"__esModule",{value:!0}),t.find=n},function(e,t,r){"use strict";function n(){return"performance"in window&&window.performance.now?window.performance.now():Date.now()-o}Object.defineProperty(t,"__esModule",{value:!0});var o=Date.now();t.now=n},function(e,t,r){"use strict";function n(){return{actuallyPlaying:!1,ended:!1,loading:!1,playing:!1,playDeferred:null,pauseDeferred:null,ready:!1,seeking:!1,seek:null,positionJumped:null,stalled:!0,duration:null,dead:!1,state:c.State.PAUSED,fatalError:null,errorOccurred:null,position:0}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=r(15),a=r(1),s=r(2),u=r(7),l=r(8),c=r(11),d=r(3),f=r(35),p=r(13),h=r(14),_="undefined"!=typeof navigator&&"mediaSession"in navigator,g=5e3,y=_?navigator.mediaSession:null,v=function(){function e(e){var t=this;this._stateManager=new f.StateManager(n(),{afterUpdate:function(e,r){return t._afterUpdate(e,r)},afterDispatches:function(){return t._afterDispatches()},beforeUpdate:function(e){if(!e.dead){var r=t._getPosition(),n=e.duration;if(r<0)throw t._logger.error("Player provided invalid position.",r,n),t._triggerError(new h.ImplementationError("Player provided a position that was invalid.")),new Error("Player provided invalid position.");if(null!==n&&r>n)throw t._logger.error("Player provided invalid position.",r,n),t._triggerError(new h.ImplementationError("Player provided a position that was invalid.")),new Error("Player provided invalid position.");e.position=r,t._updateEndedInState(e)}}}),this._onError=new a.EventDispatcher,this._errors=[],this._loadingDelayTimer=null,this._stalled=!1,this._queuedDuration=null,this._readyDeferred=s.buildDeferred(),this._queuedSeekDeferreds=[],this._lastPlayError=null,this._lastPauseError=null,this._lastPlayedPosition=null,this._listenTimeBase=0,this._timePlaybackStarted=null,this._positionAfterLastUpdate=0;var r=e.name;return this._logger=d.prefixLogger(e.logger,"BasePlayer"+(r?"-"+r:"")),this._mediaSessionEnabled=!!e.mediaSessionEnabled,e.loadingDelay&&e.loadingDelay<0?void this._triggerError(new p.DependencyError("loadingDelay must be >= 0.")):(this._loadingDelay=void 0!==e.loadingDelay?e.loadingDelay:400,this.onError=this._onError.getHandle(),this.whenReady=this._readyDeferred.promise,this._stateManager.subscribe(function(e,r){return t._onChange(e,r)}),this._stateManager.subscribe(function(e,r){var n=e.playing,o=e.actuallyPlaying,i=r.dead;if(!i&&void 0!==n&&o!==n)try{t._handlePlayPauseChange(n)}catch(e){t._triggerError(new h.ImplementationError("Exception occurred whilst handling play/pause change.",e))}}),this._stateManager.subscribe(function(e,r){var n=e.seek,o=r.dead;if(!o&&n&&"IN_PROGRESS"===n.state)try{t._handleSeekChange(n.position)}catch(e){t._triggerError(new h.ImplementationError("Exception occurred whilst handling seek change.",e))}}),this._registerMediaSessionActionHandlers(),this._notifyMediaSessionPaused(),this.onChange=this._buildEventHandle(function(e,r){var n=r.ready;if(void 0!==n&&n!==!0)throw new Error("Ready state is invalid.");var o=r.duration;if(void 0!==o&&null===o)throw new Error("Duration state is invalid.");var i=r.dead;if(void 0!==i&&i!==!0)throw new Error("Dead state is invalid.");var a={ready:n,ended:r.ended,duration:o,playing:r.playing,actuallyPlaying:r.actuallyPlaying,stalled:r.stalled,loading:r.loading,playRejection:r.playing===!1?t._lastPlayError||void 0:void 0,pauseRejection:r.playing===!0?t._lastPauseError||void 0:void 0,seeking:r.seeking,seek:r.seek||void 0,positionJumped:void 0!==r.positionJumped||void 0,state:r.state,fatalError:r.fatalError||void 0,dead:i};Object.keys(a).some(function(e){return void 0!==a[e]})&&e(a)}),this.onDurationChange=this._buildEventHandle(function(e,t){var r=t.duration;void 0!==r&&null!==r&&e(r)}),this.onReady=this._buildEventHandle(function(e,t){var r=t.ready;r===!0&&e(void 0)}),this.onStateChange=this._buildEventHandle(function(e,t){var r=t.state;void 0!==r&&e(r)}),this.onPlay=this._buildEventHandle(function(e,t){var r=t.actuallyPlaying;r===!0&&e(void 0)}),this.onPlayIntent=this._buildEventHandle(function(e,t){var r=t.playing;r===!0&&e(void 0)}),this.onPlayRejection=this._buildEventHandle(function(e,r){var n=r.playing;n===!1&&t._lastPlayError&&e(t._lastPlayError)}),this.onPause=this._buildEventHandle(function(e,t){var r=t.actuallyPlaying;r===!1&&e(void 0)}),this.onPauseIntent=this._buildEventHandle(function(e,t){var r=t.playing;r===!1&&e(void 0)}),this.onPauseRejection=this._buildEventHandle(function(e,r){var n=r.playing;n===!0&&t._lastPauseError&&e(t._lastPauseError)}),this.onSeek=this._buildEventHandle(function(e,t){var r=t.seek;r&&"COMPLETED"===r.state&&e(void 0)}),this.onSeekIntent=this._buildEventHandle(function(e,t){var r=t.seeking;r===!0&&e(void 0)}),this.onSeekRejection=this._buildEventHandle(function(e,t){var r=t.seek;r&&"ERROR"===r.state&&e(r.error)}),this.onPositionJumped=this._buildEventHandle(function(e,t){var r=t.positionJumped;void 0!==r&&e(void 0)}),this.onEnded=this._buildEventHandle(function(e,t){var r=t.ended;r===!0&&e(void 0)}),this.onLeftEnded=this._buildEventHandle(function(e,t){var r=t.ended;r===!1&&e(void 0)}),this.onStallStart=this._buildEventHandle(function(e,t){var r=t.stalled;r===!0&&e(void 0)}),this.onStallEnd=this._buildEventHandle(function(e,t){var r=t.stalled;r===!1&&e(void 0)}),this.onLoadStart=this._buildEventHandle(function(e,t){var r=t.loading;r===!0&&e(void 0)}),void(this.onLoadEnd=this._buildEventHandle(function(e,t){var r=t.loading;r===!1&&e(void 0)})))}return e.prototype.isReady=function(){return this._stateManager.getState().ready},e.prototype.getPosition=function(){return this._getPositionOrPositionSeekingTo()},e.prototype.getLastPlayedPosition=function(){var e=this._stateManager.getState(),t=e.actuallyPlaying,r=e.stalled;return t&&!r?this.getPosition():this._lastPlayedPosition},e.prototype.getListenTime=function(){var e=this._stateManager.getState(),t=e.actuallyPlaying,r=e.ended,n=this._listenTimeBase;return t&&!r&&(n+=l.now()-this._timePlaybackStarted),n},e.prototype.isStalled=function(){return this._stateManager.getState().stalled},e.prototype.isLoading=function(){return this._stateManager.getState().loading},e.prototype.isPlaying=function(){return this._stateManager.getState().playing},e.prototype.isActuallyPlaying=function(){return this._stateManager.getState().actuallyPlaying},e.prototype.isEnded=function(){return this._stateManager.getState().ended},e.prototype.getState=function(){return this._stateManager.getState().state},e.prototype.getUrlController=function(){return null},e.prototype.getBufferController=function(){return null},e.prototype.getMemoryCacheMaxSize=function(){return null},e.prototype.getMemoryCacheUsage=function(){return null},e.prototype.getMemoryCacheController=function(){return null},e.prototype.getFatalError=function(){return this._stateManager.getState().fatalError},e.prototype.isDead=function(){return this._stateManager.getState().dead},e.prototype.getDuration=function(){var e=this._stateManager.getState(),t=e.ready,r=e.duration;return t?r:null},e.prototype.setVolume=function(e){if(e<0||e>1)throw new Error("Volume must be >= 0 and <= 1.");this._setVolume(e)},e.prototype.getCurrentBufferedTimeRange=function(){var e=this.getBufferedTimeRanges();if(!e)return null;var t=this.getPosition();return u.find(e,function(e){return e.containsTime(t)})||null},e.prototype.play=function(){var e=this;this._ensureNotDead(),this._logger.debug("play() called.");var t=s.buildDeferred();return this._stateManager.update(function(r){r.playing?e._logger.debug("Intent is already to be playing."):(e._logger.debug("Requesting play."),r.playing=!0,e._lastPlayError=null),r.playDeferred&&!r.playDeferred.isSettled()||(r.playDeferred=s.buildDeferred()),t.resolve(r.playDeferred.promise)}),t.promise},e.prototype.pause=function(){var e=this;this._ensureNotDead(),this._logger.debug("pause() called.");var t=s.buildDeferred();return this._stateManager.update(function(r){r.playing?(e._logger.debug("Requesting pause."),r.playing=!1,e._lastPauseError=null):e._logger.debug("Intent is already to be paused."),r.pauseDeferred&&!r.pauseDeferred.isSettled()||(r.pauseDeferred=s.buildDeferred()),t.resolve(r.pauseDeferred.promise)}),t.promise},e.prototype.seek=function(e){var t=this;this._ensureNotDead(),this._logger.debug("seek() called.",e);var r=s.buildDeferred();return this._stateManager.update(function(n){if(e<0)t._logger.warn("Rejecting seek immediately as the position was negative."),r.reject(new Error("You were attempting to seek to a negative time."));else if(null!==n.duration&&e>n.duration)t._logger.warn("Rejecting seek immediately as the duration is now known, and the requested positon was past it."),r.reject(new Error("You were attempting to seek past the end of the media."));else{n.stalled||!n.actuallyPlaying||n.seek&&"IN_PROGRESS"===n.seek.state||(t._lastPlayedPosition=t._getPositionOrPositionSeekingTo());var o=s.buildDeferred();n.seek&&"IN_PROGRESS"===n.seek.state&&n.seek.position===e?t._logger.debug("Seek already requested to the same position.",e):(t._logger.debug("Requesting seek.",e),n.seeking=!0,n.seek={state:"IN_PROGRESS",position:e},n.positionJumped=Object.create(null)),t._queuedSeekDeferreds.push({position:e,deferred:o}),r.resolve(o.promise)}}),r.promise},e.prototype.getSeekState=function(){return this._stateManager.getState().seek},e.prototype.kill=function(){var e=this;this._stateManager.update(function(t){t.dead||(e._logger.debug("kill() called."),t.dead=!0)})},e.prototype._update=function(e){this._stateManager.update(function(){return e&&e()})},e.prototype._ensureNotDead=function(){if(this._stateManager.getState().dead)throw new Error("Player is dead.")},e.prototype._notifyStalled=function(e){this._ensureNotDead(),this._stalled!==e&&(this._logger.debug("notifyStalled() called.",e),this._stalled=e,this._stateManager.update())},e.prototype._getQueuedSeekPosition=function(){var e=this.getSeekState();return e&&"IN_PROGRESS"===e.state?e.position:null},e.prototype._provideDuration=function(e){var t=this;this._ensureNotDead(),this._stateManager.update(function(r){if(r.duration!==e){var n=t._getPositionOrPositionSeekingTo();if(e<0||r.ready&&n>e)throw t._triggerError(new h.ImplementationError("Attempt to update duration to an invalid value.")),new Error("Duration cannot be less than the current position.");t._logger.debug("provideDuration() called.",e),r.ready?r.duration=e:t._queuedDuration=e}})},e.prototype._notifyPlaying=function(e){var t=this;this._ensureNotDead(),this._stateManager.update(function(r){if(!r.ready)throw t._triggerError(new h.ImplementationError("Attempt to register playback as started before ready.")),new Error("Player must be ready first.");e!==r.actuallyPlaying&&(t._logger.debug("notifyPlaying() called.",e),e||r.seeking||r.stalled||(t._lastPlayedPosition=t._getPositionOrPositionSeekingTo()),r.actuallyPlaying=r.playing=e,e?t._lastPlayError=null:t._lastPauseError=null)})},e.prototype._notifyPlayRejection=function(e){var t=this;this._ensureNotDead(),this._stateManager.update(function(r){if(!r.ready)throw t._triggerError(new h.ImplementationError("Attempt to reject a play request before player ready.")),new Error("Player must be ready first.");if(r.actuallyPlaying||!r.playing)throw t._triggerError(new h.ImplementationError("Attempt to reject a play request when not valid.")),new Error("Playing state is incorrect.");t._logger.debug("notifyPlayRejection() called.",e),r.playing=!1,t._lastPlayError=e})},e.prototype._notifyPauseRejection=function(e){var t=this;this._ensureNotDead(),this._stateManager.update(function(r){if(!r.ready)throw t._triggerError(new h.ImplementationError("Attempt to reject pause request before player ready.")),new Error("Player must be ready first.");if(!r.actuallyPlaying||r.playing)throw t._triggerError(new h.ImplementationError("Attempt to reject pause request when not valid.")),new Error("Playing state is incorrect.");t._logger.debug("notifyPauseRejection() called.",e),r.playing=!0,t._lastPauseError=e})},e.prototype._notifySeekRejection=function(e){var t=this;this._ensureNotDead(),this._stateManager.update(function(r){if(!r.ready)throw t._triggerError(new h.ImplementationError("Attempt to reject seek request before player ready.")),new Error("Player must be ready first.");if(!r.seek||"IN_PROGRESS"!==r.seek.state)throw t._triggerError(new h.ImplementationError("Attempt to reject seek request when none requested.")),new Error("A seek hasn't been requested.");if(null!==r.duration&&r.position>r.duration)throw t._triggerError(new h.ImplementationError("Attempt to reject seek request after duration changed below current position.")),new Error("Attempt to reject seek request after duration changed below current position.");t._logger.debug("notifySeekRejection() called.",e),r.seeking=!1,r.seek={state:"ERROR",error:e},r.positionJumped=Object.create(null)})},e.prototype._signalReady=function(){var e=this;this._ensureNotDead(),this._stateManager.update(function(t){if(t.ready)throw e._triggerError(new h.ImplementationError("Attempt to signal ready twice.")),new Error("Ready already signalled.");if(null===e._queuedDuration)throw e._triggerError(new h.ImplementationError("Attempt to signal ready when duration unknown.")),new Error("Duration is still unknown.");e._logger.debug("signalReady() called."),t.ready=!0,t.duration=e._queuedDuration,t.seek&&"IN_PROGRESS"===t.seek.state&&t.seek.position>t.duration&&(t.seeking=!1,t.seek={state:"ERROR",error:new Error("You were attempting to seek past the end of the media.")})})},e.prototype._signalSeekComplete=function(){var e=this;this._ensureNotDead(),this._stateManager.update(function(t){if(!t.ready)throw e._triggerError(new h.ImplementationError("Attempt to signal seek as complete before player ready.")),new Error("Player must be ready first.");if(!t.seek||"IN_PROGRESS"!==t.seek.state)throw e._triggerError(new h.ImplementationError("Attempt to signal seek as complete when none requested.")),new Error("There shouldn't be a seek in progress.");var r=t.duration;if(t.seek&&"IN_PROGRESS"===t.seek.state&&t.seek.position>r)throw new Error("Seek cannot have completed given it was to a time greater than the duration.");e._logger.debug("signalSeekComplete() called."),t.seek={state:"COMPLETED",position:t.seek.position},t.seeking=!1,t.position=t.seek.position})},e.prototype._triggerError=function(e){var t=this;this._stateManager.update(function(r){var n=!1;if(r.ready&&e instanceof i.NotSupportedError&&(e=new h.ImplementationError("Invalid NotSupportedError."),n=!0),e instanceof o.PlayerFatalError?(e instanceof i.NotSupportedError?t._logger.info("NotSupportedError occurred.",e):t._logger.error("Fatal error occurred.",e),r.fatalError?t._logger.warn("A fatal error already occurred.",r.fatalError):r.fatalError=e,t._errors.push(e),r.errorOccurred=Object.create(null),r.dead=!0):(t._logger.warn("Non-fatal error occurred.",e),t._errors.push(e),r.errorOccurred=Object.create(null)),n)throw new Error("Not supported errors are only valid before the player is ready.")})},e.prototype._buildEventHandle=function(e){var t=this;return{subscribe:function(r){var n=function(e){return r(e,l.now())};return t._stateManager.subscribe(function(t){e(n,t)})}}},e.prototype._finalizeState=function(e){this._updateEndedInState(e);var t=this._getPositionOrPositionSeekingTo();if(e.dead)this._lastPlayError=new Error("Player was killed."),e.loading=!1,this._clearLoadingDelay(),e.stalled=!0,e.actuallyPlaying=!1,e.playing=!1,e.state=c.State.DEAD;else{var r=!e.ended&&(!e.ready||this._stalled||!(!e.seek||"IN_PROGRESS"!==e.seek.state));r&&!e.stalled&&!e.seeking&&e.actuallyPlaying&&(this._lastPlayedPosition=t),e.stalled=r;var n=!e.ended&&(e.playing||e.actuallyPlaying)&&(e.stalled||e.playing!==e.actuallyPlaying);n?this._loadingDelay?this._scheduleLoadingDelay():e.loading=!0:(e.loading=!1,this._clearLoadingDelay()),this._positionAfterLastUpdate!==t&&(this._positionAfterLastUpdate=t,e.playing||e.actuallyPlaying||(e.positionJumped=Object.create(null))),e.state=this._calculateState(e)}},e.prototype._updateEndedInState=function(e){e.ended=e.ready&&this._getPositionOrPositionSeekingTo()===e.duration},e.prototype._scheduleLoadingDelay=function(){var e=this;this._loadingDelayTimer||(this._loadingDelayTimer=window.setTimeout(function(){e._stateManager.update(function(e){return e.loading=!0})},this._loadingDelay))},e.prototype._clearLoadingDelay=function(){this._loadingDelayTimer&&(window.clearTimeout(this._loadingDelayTimer),this._loadingDelayTimer=null)},e.prototype._getPositionOrPositionSeekingTo=function(){this._stateManager.update();var e=this._stateManager.getState();return e.seek&&"IN_PROGRESS"===e.seek.state?e.seek.position:e.ready&&null!==e.duration?e.position:0},e.prototype._calculateState=function(e){var t=e.dead,r=e.loading,n=e.playing,o=e.ended;return t?c.State.DEAD:r?c.State.LOADING:n&&!o?c.State.PLAYING:c.State.PAUSED},e.prototype._registerMediaSessionActionHandlers=function(){var e=this;this._mediaSessionEnabled&&y&&(y.setActionHandler("play",function(){e.isDead()||e.play()}),y.setActionHandler("pause",function(){e.isDead()||e.pause()}),y.setActionHandler("seekbackward",function(){e.isDead()||e.seek(Math.max(0,e.getPosition()-g))}),y.setActionHandler("seekforward",function(){e.isDead()||e.seek(Math.min(e.getDuration()||0,e.getPosition()+g))}))},e.prototype._notifyMediaSessionPlaying=function(){this._mediaSessionEnabled&&y&&(y.playbackState="playing")},e.prototype._notifyMediaSessionPaused=function(){this._mediaSessionEnabled&&y&&(y.playbackState="paused")},e.prototype._afterUpdate=function(e,t){(t.beforeUpdate||t.update.length>0)&&(this._logger.error("Errors occurred during state update. Killing player.",t),this._triggerError(new o.PlayerFatalError("Errors occurred during state update.",t))),this._finalizeState(e)},e.prototype._afterDispatches=function(){var e=this,t=this._errors;this._errors=[],t.forEach(function(t){return e._onError.dispatch(t)})},e.prototype._onChange=function(e,t){var r=this,n=e.ready,o=e.dead,i=e.fatalError,a=e.playing,s=e.actuallyPlaying,u=e.ended;if(n===!0&&(this._logger.debug("Resolving ready deferred."),this._readyDeferred.resolve(void 0)),s===!0&&this._registerMediaSessionActionHandlers(),a===!0?this._notifyMediaSessionPlaying():a===!1&&this._notifyMediaSessionPaused(),t.pauseDeferred&&!t.pauseDeferred.isSettled()&&t.playing){var c=this._lastPauseError||new Error("Pause request aborted.");this._logger.debug("Rejecting pause deferred.",c),t.pauseDeferred.reject(c)}if(t.playDeferred&&!t.playDeferred.isSettled()&&!t.playing){var c=this._lastPlayError||new Error("Play request aborted.");this._logger.debug("Rejecting play deferred.",c),t.playDeferred.reject(c)}if(t.playDeferred&&!t.playDeferred.isSettled()&&t.actuallyPlaying&&(this._logger.debug("Resolving play deferred."),t.playDeferred.resolve(void 0)),!t.pauseDeferred||t.pauseDeferred.isSettled()||t.actuallyPlaying||(this._logger.debug("Resolving pause deferred."),t.pauseDeferred.resolve(void 0)),s===!0&&!t.ended||u===!1&&t.actuallyPlaying?this._timePlaybackStarted=l.now():(s===!1&&!t.ended||u===!0&&t.actuallyPlaying)&&(this._listenTimeBase+=l.now()-this._timePlaybackStarted,this._timePlaybackStarted=null),this._queuedSeekDeferreds=this._queuedSeekDeferreds.filter(function(e){var n=e.position,o=e.deferred;if(t.seek)if("IN_PROGRESS"!==t.seek.state){if(!t.stalled||"ERROR"===t.seek.state)return"ERROR"!==t.seek.state?(r._logger.debug("Resolving seek()."),o.resolve(void 0)):(r._logger.debug("Rejecting seek().",t.seek.error),o.reject(t.seek.error)),!1}else if("IN_PROGRESS"!==t.seek.state||t.seek.position!==n)return r._logger.debug("Rejecting seek() because another seek was requested.",n),o.reject(new Error("Seek request aborted because another seek was requested to a different position.")),!1;return!0}),o===!0){this._logger.debug("Calling _kill() on player.");try{this._kill(),this._logger.info("Player killed.")}catch(e){this._triggerError(new h.ImplementationError("Exception occurred in _kill().",e)),this._logger.error("Exception when implementation was being killed.",e)}if(!t.ready){var c=i||new Error("Player was killed.");this._logger.debug("Rejecting whenReady."),this._readyDeferred.reject(c)}this._queuedSeekDeferreds.forEach(function(e){var t=e.position,n=e.deferred,o=i||new Error("Seek aborted as player killed.");r._logger.debug("Rejecting seek().",t),n.reject(o)}),this._stateManager.kill(),this._logger.debug("Player dead.")}},e}();t.BasePlayer=v},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(9),i=r(4),a=r(0),s=r(3),u=r(1),l=r(16),c=r(5),d=function(e){function t(t){var r=e.call(this,t)||this;return r._onProvidedPlayerError=new u.EventDispatcher,r._errorHandler=null,r._changeHandler=null,r._player=null,r._instanceLock=null,r._lastPlayerPosition=0,r._volume=1,r._muted=!1,r._synced=!1,r._unsyncInProgress=!1,r._logger=s.prefixLogger(r._logger,"ProxyPlayerBase"),r.onProvidedPlayerError=r._onProvidedPlayerError.getHandle(),r}return n(t,e),t.prototype.getVolume=function(){return this._player&&this._synced?this._player.getVolume():this._volume},t.prototype.getMuted=function(){return this._player&&this._synced?this._player.getMuted():this._muted},t.prototype.setMuted=function(e){return this._player&&this._synced?this._player.setMuted(e):void(this._muted=e)},t.prototype.getBufferedTimeRanges=function(){return this._player&&this._synced?this._player.getBufferedTimeRanges():null},t.prototype.getCurrentBufferedTimeRange=function(){return this._player&&this._synced?this._player.getCurrentBufferedTimeRange():null},t.prototype.getMaxBufferLength=function(){return this._player&&this._synced?this._player.getMaxBufferLength():null},t.prototype._providePlayer=function(e,t){if(void 0===t&&(t={syncPosition:!0,syncVolume:!0}),this._ensureNotDead(),this._player)throw new Error("A player has already been provided.");this._logger.debug("providePlayer() called."),this._instanceLock=Object.create(null),this._player=e,this._sync(t)},t.prototype._removePlayer=function(){if(this._ensureNotDead(),!this._player)throw new Error("There is no player to remove.");if(this._unsyncInProgress)throw new Error("Player is currently unsyncing.");this._logger.debug("removePlayer() called."),this._instanceLock=null,this._unsync(),this._player=null,this.isReady()&&!this.isDead()&&this._notifyStalled(!0)},t.prototype._setInitialDuration=function(e){var t=this;if(this._ensureNotDead(),e<0)throw new Error("Cannot set duration to a value < 0.");null===this.getDuration()&&this._update(function(){t._ensureBelowPosition(e),t._provideDuration(e),t.isReady()||(t._signalReady(),t._handleSkippedSeek())})},t.prototype._triggerError=function(t){e.prototype._triggerError.call(this,t)},t.prototype._getPlayer=function(){return this.isDead()?null:this._player},t.prototype._setVolume=function(e){return this._player&&this._synced?this._player.setVolume(e):void(this._volume=e)},t.prototype._handlePlayPauseChange=function(e){var t=this._player;t&&(e?this._playAndHandleAbort(t):this._pauseAndHandleAbort(t))},t.prototype._handleSeekChange=function(e){var t=this._player;t&&this._synced&&t.seek(e)},t.prototype._getPosition=function(){if(this._player&&this._synced){if(!this._changeHandler)throw new Error("Handler should exist.");if(this._changeHandler.retrieve(),this._synced)return this._player.getPosition()}return this._lastPlayerPosition},t.prototype._kill=function(){if(this._player&&!this._player.isDead()){if(!this._changeHandler)throw new Error("Handler should exist.");if(this._changeHandler.retrieve(),this._synced&&(this._player.kill(),this._synced))throw new Error("Unsync should have happened.")}this._player=null},t.prototype._handleSkippedSeek=function(){if(this._player&&this._synced){var e=this.getSeekState(),t=this._player.getSeekState();!e||"IN_PROGRESS"!==e.state||t&&"IN_PROGRESS"===t.state||(this._logger.debug("Signalling seek as complete on proxy because provided player isn't seeking."),this._signalSeekComplete())}},t.prototype._ensureBelowPosition=function(e){this.getPosition()>e&&(this._logger.debug("Capping position.",e),this.seek(e),this.isReady()&&(this._lastPlayerPosition=e,this._signalSeekComplete()))},t.prototype._sync=function(e){var t=this,r=this._player;if(!r)throw new Error("Player should have become available by now.");return this._logger.debug("Syncing...",this.isPlaying(),this.isActuallyPlaying()),r.isDead()?void this._logger.debug("Provided player is dead."):(this._errorHandler=r.onError.subscribe(function(e){e instanceof a.PlayerFatalError?t._onProvidedPlayerError.dispatch(new c.ProxyProvidedPlayerFatalError(e,r)):(t._triggerError(e),t._onProvidedPlayerError.dispatch(new l.ProxyProvidedPlayerError(e,r)))}),this._changeHandler=r.onChange.subscribe(function(e){t._update(function(){if(t._logger.debug("Handling changes.",e),e.dead)return t._logger.debug("Player has gone to DEAD state."),t._unsync(),void(t.isDead()||e.fatalError&&t._handleFatalError(e.fatalError,r));if(void 0!==e.duration&&(t._ensureBelowPosition(e.duration),t._provideDuration(e.duration),t.isReady()||(t._signalReady(),t._handleSkippedSeek(),t._notifyStalled(r.isStalled()))),e.seek){var n=t.getSeekState();n&&"IN_PROGRESS"===n.state&&("COMPLETED"===e.seek.state&&n.position===e.seek.position?t._signalSeekComplete():"COMPLETED"===e.seek.state&&n.position!==e.seek.position?t._notifySeekRejection(new Error("Another seek occurred to a different position.")):"IN_PROGRESS"===e.seek.state&&n.position!==e.seek.position?t.seek(e.seek.position):"ERROR"===e.seek.state&&t._notifySeekRejection(e.seek.error))}void 0!==e.stalled&&t._notifyStalled(e.stalled),e.playing===!1&&e.playRejection?t.isActuallyPlaying()?(t._triggerError(new i.PlayerError("Paused because a player was provided that refused to play.")),t._notifyPlaying(!1)):t._notifyPlayRejection(e.playRejection):e.playing===!1&&(r.isActuallyPlaying()?t.pause():void 0===e.actuallyPlaying&&t.isReady()&&t._notifyPlaying(!1)),e.playing===!0&&e.pauseRejection?t._notifyPauseRejection(e.pauseRejection):e.playing===!0&&t.play(),void 0!==e.actuallyPlaying&&t._notifyPlaying(e.actuallyPlaying)})}),void this._update(function(){var n=t._instanceLock;try{if(t._notifyStalled(r.isStalled()),!t.isReady()&&r.isReady()){t._logger.debug("Provided player is already ready. Making proxy player ready.");var o=r.getDuration();t._ensureBelowPosition(o),t._provideDuration(o),t._signalReady()}if(e.syncVolume&&(r.setVolume(t._volume),r.setMuted(t._muted),t._instanceLock!==n))return;var i=t.getSeekState();if(e.syncPosition){t._logger.debug("Seeking to match position.");var s=t.getPosition();r.getPosition()!==s?r.seek(s):(t._logger.debug("Skipping seek because already at same position."),t.isReady()&&i&&"IN_PROGRESS"===i.state&&t._signalSeekComplete())}else if(i&&"IN_PROGRESS"===i.state)t._logger.debug("Seeking to match position because a seek has been queued."),r.seek(t.getPosition());else{var u=r.getSeekState();u&&"IN_PROGRESS"===u.state&&(t._logger.debug("Seeking on proxy to match seek that is in progress on provided player."),t.seek(u.position))}if(t._instanceLock!==n)return;if(r.isActuallyPlaying()?(t._logger.debug("Provided player is already playing."),t._notifyPlaying(!0)):r.isPlaying()?(t._logger.debug("Provided player is preparing to play."),t.play()):t.isPlaying()?(t._logger.debug("Calling play() on provided player to match proxy."),t._playAndHandleAbort(r)):t.isReady()&&t.isActuallyPlaying()&&(t._logger.debug("Switching to paused state, as provided player and proxy intended state is paused."),t._notifyPlaying(!1)),t._instanceLock!==n)return;t._synced=!0}catch(e){t._triggerError(new a.PlayerFatalError("Unexpected error occurred whilst syncing.",e))}}))},t.prototype._playAndHandleAbort=function(e){var t=this._instanceLock;this._logger.debug("Calling play() on provided player."),e.play(),this._instanceLock===t&&!e.isPlaying()&&this.isPlaying()&&(this._logger.debug("Provided player was not playing after play() call completed."),this.isActuallyPlaying()?(this._triggerError(new i.PlayerError("Paused because a player was provided that refused to play.")),this._notifyPlaying(!1)):this.pause())},t.prototype._pauseAndHandleAbort=function(e){var t=this._instanceLock;this._logger.debug("Calling pause() on provided player."),e.pause(),this._instanceLock===t&&e.isPlaying()&&!this.isPlaying()&&(this._logger.debug("Provided player was not paused after pause() call completed."),this.play())},t.prototype._unsync=function(){if(this._logger.debug("Unsyncing..."),this._changeHandler&&(this._changeHandler.remove(),this._changeHandler=null),this._errorHandler&&(this._errorHandler.remove(),this._errorHandler=null),!this._synced)return void this._logger.debug("Unsynced. (Sync never completed)");this._synced=!1,this._unsyncInProgress=!0;var e=this._player;if(e)try{this._volume=e.getVolume(),this._muted=e.getMuted(),this._lastPlayerPosition=e.getPosition()}catch(e){this._logger.error("Error whilst unsyncing.",e)}this._unsyncInProgress=!1,this._logger.debug("Unsynced.",this.isPlaying(),this.isActuallyPlaying())},t}(o.BasePlayer);t.ProxyPlayerBase=d},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n;!function(e){e[e.LOADING=0]="LOADING",e[e.PLAYING=1]="PLAYING",e[e.PAUSED=2]="PAUSED",e[e.DEAD=3]="DEAD"}(n=t.State||(t.State={}))},function(e,t,r){(function(t,n){/*!
		 * @overview es6-promise - a tiny implementation of Promises/A+.
		 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
		 * @license   Licensed under MIT license
		 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
		 * @version   4.0.5
		 */
!function(t,r){e.exports=r()}(this,function(){"use strict";function e(e){return"function"==typeof e||"object"==typeof e&&null!==e}function o(e){return"function"==typeof e}function i(e){Q=e}function a(e){Y=e}function s(){return function(){return t.nextTick(f)}}function u(){return"undefined"!=typeof J?function(){J(f)}:d()}function l(){var e=0,t=new $(f),r=document.createTextNode("");return t.observe(r,{characterData:!0}),function(){r.data=e=++e%2}}function c(){var e=new MessageChannel;return e.port1.onmessage=f,function(){return e.port2.postMessage(0)}}function d(){var e=setTimeout;return function(){return e(f,1)}}function f(){for(var e=0;e<W;e+=2){var t=re[e],r=re[e+1];t(r),re[e]=void 0,re[e+1]=void 0}W=0}function p(){try{var e=r(38);return J=e.runOnLoop||e.runOnContext,u()}catch(e){return d()}}function h(e,t){var r=arguments,n=this,o=new this.constructor(g);void 0===o[oe]&&L(o);var i=n._state;return i?!function(){var e=r[i-1];Y(function(){return k(i,o,e,n._result)})}():A(n,o,e,t),o}function _(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var r=new t(g);return P(r,e),r}function g(){}function y(){return new TypeError("You cannot resolve a promise with itself")}function v(){return new TypeError("A promises callback cannot return that same promise.")}function m(e){try{return e.then}catch(e){return ue.error=e,ue}}function E(e,t,r,n){try{e.call(t,r,n)}catch(e){return e}}function b(e,t,r){Y(function(e){var n=!1,o=E(r,t,function(r){n||(n=!0,t!==r?P(e,r):T(e,r))},function(t){n||(n=!0,x(e,t))},"Settle: "+(e._label||" unknown promise"));!n&&o&&(n=!0,x(e,o))},e)}function w(e,t){t._state===ae?T(e,t._result):t._state===se?x(e,t._result):A(t,void 0,function(t){return P(e,t)},function(t){return x(e,t)})}function S(e,t,r){t.constructor===e.constructor&&r===h&&t.constructor.resolve===_?w(e,t):r===ue?x(e,ue.error):void 0===r?T(e,t):o(r)?b(e,t,r):T(e,t)}function P(t,r){t===r?x(t,y()):e(r)?S(t,r,m(r)):T(t,r)}function R(e){e._onerror&&e._onerror(e._result),O(e)}function T(e,t){e._state===ie&&(e._result=t,e._state=ae,0!==e._subscribers.length&&Y(O,e))}function x(e,t){e._state===ie&&(e._state=se,e._result=t,Y(R,e))}function A(e,t,r,n){var o=e._subscribers,i=o.length;e._onerror=null,o[i]=t,o[i+ae]=r,o[i+se]=n,0===i&&e._state&&Y(O,e)}function O(e){var t=e._subscribers,r=e._state;if(0!==t.length){for(var n=void 0,o=void 0,i=e._result,a=0;a<t.length;a+=3)n=t[a],o=t[a+r],n?k(r,n,o,i):o(i);e._subscribers.length=0}}function M(){this.error=null}function D(e,t){try{return e(t)}catch(e){return le.error=e,le}}function k(e,t,r,n){var i=o(r),a=void 0,s=void 0,u=void 0,l=void 0;if(i){if(a=D(r,n),a===le?(l=!0,s=a.error,a=null):u=!0,t===a)return void x(t,v())}else a=n,u=!0;t._state!==ie||(i&&u?P(t,a):l?x(t,s):e===ae?T(t,a):e===se&&x(t,a))}function I(e,t){try{t(function(t){P(e,t)},function(t){x(e,t)})}catch(t){x(e,t)}}function C(){return ce++}function L(e){e[oe]=ce++,e._state=void 0,e._result=void 0,e._subscribers=[]}function j(e,t){this._instanceConstructor=e,this.promise=new e(g),this.promise[oe]||L(this.promise),K(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?T(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&T(this.promise,this._result))):x(this.promise,N())}function N(){return new Error("Array Methods must be provided an Array")}function U(e){return new j(this,e).promise}function F(e){var t=this;return new t(K(e)?function(r,n){for(var o=e.length,i=0;i<o;i++)t.resolve(e[i]).then(r,n)}:function(e,t){return t(new TypeError("You must pass an array to race."))})}function B(e){var t=this,r=new t(g);return x(r,e),r}function q(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function H(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function z(e){this[oe]=C(),this._result=this._state=void 0,this._subscribers=[],g!==e&&("function"!=typeof e&&q(),this instanceof z?I(this,e):H())}function G(){var e=void 0;if("undefined"!=typeof n)e=n;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;if(t){var r=null;try{r=Object.prototype.toString.call(t.resolve())}catch(e){}if("[object Promise]"===r&&!t.cast)return}e.Promise=z}var V=void 0;V=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var K=V,W=0,J=void 0,Q=void 0,Y=function(e,t){re[W]=e,re[W+1]=t,W+=2,2===W&&(Q?Q(f):ne())},X="undefined"!=typeof window?window:void 0,Z=X||{},$=Z.MutationObserver||Z.WebKitMutationObserver,ee="undefined"==typeof self&&"undefined"!=typeof t&&"[object process]"==={}.toString.call(t),te="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,re=new Array(1e3),ne=void 0;ne=ee?s():$?l():te?c():void 0===X?p():d();var oe=Math.random().toString(36).substring(16),ie=void 0,ae=1,se=2,ue=new M,le=new M,ce=0;return j.prototype._enumerate=function(){for(var e=this.length,t=this._input,r=0;this._state===ie&&r<e;r++)this._eachEntry(t[r],r)},j.prototype._eachEntry=function(e,t){var r=this._instanceConstructor,n=r.resolve;if(n===_){var o=m(e);if(o===h&&e._state!==ie)this._settledAt(e._state,t,e._result);else if("function"!=typeof o)this._remaining--,this._result[t]=e;else if(r===z){var i=new r(g);S(i,e,o),this._willSettleAt(i,t)}else this._willSettleAt(new r(function(t){return t(e)}),t)}else this._willSettleAt(n(e),t)},j.prototype._settledAt=function(e,t,r){var n=this.promise;n._state===ie&&(this._remaining--,e===se?x(n,r):this._result[t]=r),0===this._remaining&&T(n,this._result)},j.prototype._willSettleAt=function(e,t){var r=this;A(e,void 0,function(e){return r._settledAt(ae,t,e)},function(e){return r._settledAt(se,t,e)})},z.all=U,z.race=F,z.resolve=_,z.reject=B,z._setScheduler=i,z._setAsap=a,z._asap=Y,z.prototype={constructor:z,then:h,catch:function(e){return this.then(null,e)}},z.polyfill=G,z.Promise=z,z})}).call(t,r(27),r(37))},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.getCode=function(){return"DEPENDENCY_ERROR"},t}(o.PlayerFatalError);t.DependencyError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(t,r){return e.call(this,t,r)||this}return n(t,e),t.prototype.getCode=function(){return"IMPLEMENTATION_ERROR"},t}(o.PlayerFatalError);t.ImplementationError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(t){return e.call(this,t||"The player cannot play the provided descriptor.")||this}return n(t,e),t.prototype.getCode=function(){return"NOT_SUPPORTED_ERROR"},t}(o.PlayerFatalError);t.NotSupportedError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(4),i=function(e){function t(t,r,n){void 0===n&&(n="The player that the proxy was controlling had an error.");var o=e.call(this,n)||this;return o._providedPlayerError=t,o._providedPlayer=r,o}return n(t,e),t.prototype.getCode=function(){return"PROXY_PLAYER_PROVIDED_PLAYER_ERROR"},t.prototype.getProvidedPlayerError=function(){return this._providedPlayerError},t.prototype.getProvidedPlayer=function(){return this._providedPlayer},t}(o.PlayerError);t.ProxyProvidedPlayerError=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=r(18);t.abortedError=new Error("Job aborted.");var i=function(){function e(e,t){void 0===t&&(t={}),this._job=e,this._opts=t,this._counter=0,this._jobControl=null,this._promise=null,this._jobCompleted=!1}return e.prototype.run=function(){var e=this;this._jobControl||(this._jobControl=this._job(),this._promise=this._jobControl.result,o.always(this._promise,function(){e._jobCompleted=!0,e._opts.storeResult===!1&&(e._jobCompleted=!1,e._promise=null,e._jobControl=null)}));var r=this._promise;this._counter++;var i=n.buildDeferred(),a=!1,s=!1,u=[],l=[],c=function(){s||(a=!0,e._counter--)};return o.always(r,c),r.then(function(e){s||(u.forEach(function(t){try{t(e)}catch(e){window.setTimeout(function(){throw e},0)}}),i.resolve(e))},function(e){s||(l.forEach(function(t){return t(e)}),i.reject(e))}),{whenComplete:function(){return i.promise},onCompletion:function(e){u.push(e)},onError:function(e){l.push(e)},hasCompleted:function(){return a},abort:function(r){s||a||(s=!0,0===--e._counter&&!e._jobCompleted&&e._jobControl&&e._jobControl.abort&&(e._jobControl.abort(r),e._promise=null,e._jobControl=null),l.forEach(function(e){return e(t.abortedError)}),i.reject(t.abortedError))}}},e}();t.AbortableJob=i},function(e,t,r){"use strict";function n(e,t){return e.then(t,t)}Object.defineProperty(t,"__esModule",{value:!0}),t.always=n},function(e,t,r){"use strict";function n(){return c}function o(){return p}function i(){var e=navigator.appVersion.match(h);if(e&&e.length>=3){var t=parseInt(e[1],10),r=parseInt(e[2],10);if(!isNaN(t)&&!isNaN(r))return{major:t,minor:r}}return null}function a(){return d}function s(){return f}function u(){var e=navigator.appVersion.match(_);if(e&&e.length>=3){var t=parseInt(e[1],10),r=parseInt(e[2],10);if(!isNaN(t)&&!isNaN(r))return{major:t,minor:r}}return null}Object.defineProperty(t,"__esModule",{value:!0});var l="undefined"!=typeof navigator?navigator.userAgent:"",c=!/chrome|opera/i.test(l)&&/safari/i.test(l),d=l.indexOf("MSIE ")>=0||l.indexOf("Trident/")>=0,f=l.indexOf("Edge/")>=0,p=l.toLowerCase().indexOf("firefox")>=0,h=/version\/(\d+)\.(\d+)/i,_=/Chrom(?:e|ium)\/([0-9]+)\.([0-9]+)\.([0-9]+)/;t.isSafari=n,t.isFirefox=o,t.getSafariVersion=i,t.isIE=a,t.isEdge=s,t.getChromeVersion=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(6),o=function(){function e(e,t){this._inCallback=!1,this._onExit=e,this._onEnter=t||null}return e.prototype.enter=function(e){var t=this;if(this._inCallback)return e?e(this._onEnterResultRetriever):void 0;this._inCallback=!0;var r=[],o=!1;this._onEnter&&(this._onEnterResultRetriever={getResult:function(e){o?n.deferException(function(){return e(t._onEnterError,t._onEnterResult)}):r.push(e)}});try{var i=e?e(this._onEnterResultRetriever):void 0;if(this._onEnter){this._onEnterError=void 0,this._onEnterResult=void 0;try{this._onEnterResult=this._onEnter()}catch(e){this._onEnterError=e}o=!0,r.forEach(function(e){return n.deferException(function(){return e(t._onEnterError,t._onEnterResult)})})}return i}finally{this._inCallback=!1,n.deferException(function(){return t._onExit(t._onEnterError,t._onEnterResult)})}},e}();t.OnExit=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,r,n){void 0===n&&(n={}),this._url=e,this._protocol=t,this._format=r,this._segmentFormat=n}return e.prototype.getUrl=function(){return this._url},e.prototype.getProtocol=function(){return this._protocol},e.prototype.getFormat=function(){return this._format},e.prototype.getSegmentFormat=function(){return this._segmentFormat},e}();t.Descriptor=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(13),i=r(15),a=r(28),s=r(14),u=r(5),l=r(4),c=r(0);!function(e){e.PlayerError=l.PlayerError,e.PlayerFatalError=c.PlayerFatalError,e.DependencyError=o.DependencyError,e.NotSupportedError=i.NotSupportedError,e.URLUpdateError=a.URLUpdateError,e.ImplementationError=s.ImplementationError,e.ProxyProvidedPlayerFatalError=u.ProxyProvidedPlayerFatalError}(n=t.errors||(t.errors={}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(2),i=r(17),a=r(33),s=r(20),u=r(7),l=r(30),c=r(8),d=r(32),f=r(18),p=r(31),h=r(29),_=r(6),g=r(19),y=r(34);!function(e){e.OnExit=s.OnExit,e.find=u.find,e.Promise=d.Promise,e.always=f.always,e.compact=p.compact,e.deferException=_.deferException;var t;!function(e){e.buildCache=l.buildCache}(t=e.cache||(e.cache={}));var r;!function(e){e.buildDeferred=o.buildDeferred}(r=e.deferred||(e.deferred={}));var n;!function(e){e.getExtension=y.getExtension,e.buildAbsoluteUrl=y.buildAbsoluteUrl}(n=e.url||(e.url={}));var v;!function(e){e.AbortableJob=i.AbortableJob,e.abortedError=i.abortedError}(v=e.abortableJob||(e.abortableJob={}));var m;!function(e){e.noMoreAttemptsError=a.noMoreAttemptsError,e.retry=a.retry,e.buildExponentialDelayCalculator=a.buildExponentialDelayCalculator}(m=e.retry||(e.retry={}));var E;!function(e){e.isSafari=g.isSafari,e.getSafariVersion=g.getSafariVersion,e.isIE=g.isIE,e.isEdge=g.isEdge,e.isFirefox=g.isFirefox,e.getChromeVersion=g.getChromeVersion}(E=e.browser||(e.browser={}));var b;!function(e){e.combine=h.combine,e.numberToUint8Array=h.numberToUint8Array,e.createVintBuffer=h.createVintBuffer}(b=e.arrayBuffer||(e.arrayBuffer={}));var w;!function(e){e.now=c.now}(w=e.time||(e.time={}))}(n=t.helpers||(t.helpers={}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2),o=r(1),i=function(){function e(){this._aborted=!1,this._requestStarted=!1,this._response=null,this._responseDeferred=n.buildDeferred(),this._requestStartedDeferred=n.buildDeferred(),this._onRequestStart=new o.EventDispatcher,this.onRequestStart=this._onRequestStart.getHandle(),this.whenRequestStarted=this._requestStartedDeferred.promise}return e.prototype.getResponse=function(){return this._responseDeferred.promise},e.prototype.hasRequestStarted=function(){return this._requestStarted},e.prototype.hasCompleted=function(){return!!this._response||this._aborted},e.prototype.abort=function(){if(!this._aborted){if(this._aborted=!0,this._response)throw new Error("Already have a response.");this._abort(),this._responseDeferred.reject(new Error("Aborted.")),this._requestStarted||this._requestStartedDeferred.reject(new Error("Aborted."))}},e.prototype._provideResponse=function(e){if(this._aborted)throw new Error("Response aborted.");if(this._response)throw new Error("Response already provided.");if(e instanceof Error)this._aborted=!0,this._responseDeferred.reject(e);else{if(!this._requestStarted)throw new Error("Request hasn't started yet.");this._response=e,this._responseDeferred.resolve(e)}},e.prototype._signalRequestStart=function(){if(this._aborted)throw new Error("Response aborted.");if(this._requestStarted)throw new Error("Request already started.");this._requestStarted=!0,this._requestStartedDeferred.resolve(void 0),this._onRequestStart.dispatch(void 0)},e}();t.LoaderRequest=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=r(3),a=r(10),s=r(5),u=function(e){function t(t){var r=e.call(this,t)||this;return r._onPlayerProvided=new o.EventDispatcher,r._onPlayerRemoved=new o.EventDispatcher,r._shouldPassThroughFatalErrors=!!t.shouldPassThroughFatalErrors,r.onPlayerProvided=r._onPlayerProvided.getHandle(),r.onPlayerRemoved=r._onPlayerRemoved.getHandle(),r._logger=i.prefixLogger(r._logger,"ProxyPlayer"),r}return n(t,e),t.prototype.providePlayer=function(e,t){void 0===t&&(t={syncPosition:!0,syncVolume:!0}),this._providePlayer(e,t),this._onPlayerProvided.dispatch(e)},t.prototype.removePlayer=function(){var e=this._getPlayer();if(!e)throw new Error("There is no player to remove.");this._removePlayer(),this._onPlayerRemoved.dispatch(e)},t.prototype.setInitialDuration=function(e){this._setInitialDuration(e)},t.prototype.getPlayer=function(){return this._getPlayer()},t.prototype._handleFatalError=function(e,t){this._shouldPassThroughFatalErrors?this._triggerError(e):this._triggerError(new s.ProxyProvidedPlayerFatalError(e,t))},t}(a.ProxyPlayerBase);t.ProxyPlayer=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){if(this.start=e,this.duration=t,t<0)throw new RangeError("Duration must be >= 0.");this.end=e+t}return e.normalizeRawTimeRanges=function(e){return e.slice(0).sort(function(e,t){return e.start-t.start}).reduce(function(e,t,r){var n=e.length-1;return r>0&&e[n].end>=t.start?e[n].end=t.end:e.push(t),e},[])},e.normalize=function(t){return e.normalizeRawTimeRanges(t.map(function(e){return{start:e.start,end:e.end}})).map(function(t){return new e(t.start,t.end-t.start)})},e.getCoverage=function(t){if(0===t.length)return new e(0,0);var r=1/0,n=0;return t.forEach(function(e){e.start<r&&(r=e.start),e.end>n&&(n=e.end)}),new e(r,n-r)},e.rangesContainTime=function(e,t){return t.some(function(t){return t.containsTime(e)})},e.prototype.containsTime=function(e){return this.start<=e&&this.end>e},e}();t.TimeRange=n},function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===r||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===n||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){_&&p&&(_=!1,p.length?h=p.concat(h):g=-1,h.length&&s())}function s(){if(!_){var e=o(a);_=!0;for(var t=h.length;t;){for(p=h,h=[];++g<t;)p&&p[g].run();g=-1,t=h.length}p=null,_=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function l(){}var c,d,f=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:r}catch(e){c=r}try{d="function"==typeof clearTimeout?clearTimeout:n}catch(e){d=n}}();var p,h=[],_=!1,g=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];h.push(new u(e,t)),1!==h.length||_||o(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=l,f.addListener=l,f.once=l,f.off=l,f.removeListener=l,f.removeAllListeners=l,f.emit=l,f.prependListener=l,f.prependOnceListener=l,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(t,r){return e.call(this,t||"The URL update failed for some reason.",r)||this}return n(t,e),t.prototype.getCode=function(){return"URL_UPDATE_ERROR"},t}(o.PlayerFatalError);t.URLUpdateError=i},function(e,t,r){"use strict";function n(e){var t=new Uint8Array(e.reduce(function(e,t){return e+t.byteLength},0)),r=0;return e.forEach(function(e){t.set(e,r),r+=e.byteLength}),t}function o(e,t){if(void 0===t&&(t=!1),e=Math.round(e),e<0)throw new Error("Negative numbers not supported.");for(var r=Math.max(1,Math.ceil(Math.log(e+1)/Math.log(2)/8)),n=new Uint8Array(r),o=0;o<r;o++)n[t?o:r-1-o]=255&e,e>>>=8;return n}function i(e){if(e<0||e>Math.pow(2,53))throw new Error("Unrepresentable value: "+e);var t;for(t=1;t<=8&&!(e<Math.pow(2,7*t)-1);t++);for(var r=new Uint8Array(t),n=1;n<=t;n++){var o=255&e;r[t-n]=o,e-=o,e/=Math.pow(2,8)}return r[0]|=1<<8-t,r}Object.defineProperty(t,"__esModule",{value:!0}),t.combine=n,t.numberToUint8Array=o,t.createVintBuffer=i},function(e,t,r){"use strict";function n(){return i?new window.Map:new a}Object.defineProperty(t,"__esModule",{value:!0});var o=r(7),i="undefined"!=typeof window&&"Map"in window;t.buildCache=n;var a=function(){function e(){this._store=[]}return e.prototype.set=function(e,t){var r=o.find(this._store,function(t){return t.key===e});r?r.val=t:this._store.push({key:e,val:t})},e.prototype.get=function(e){var t=o.find(this._store,function(t){return t.key===e});if(t)return t.val},e}()},function(e,t,r){"use strict";function n(e){return e.filter(function(e){return null!=e})}Object.defineProperty(t,"__esModule",{value:!0}),t.compact=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(12);t.Promise=n.Promise},function(e,t,r){"use strict";function n(e,r,n,o){void 0===n&&(n=window.setTimeout),void 0===o&&(o=window.clearTimeout);var s=new i.AbortableJob(function(){var i=a.buildDeferred(),s=0,u=null,l=null,c=function(){u=e(s).run(),u.onCompletion(function(e){if(u=null,e.success)i.resolve(e.result);else{var o=r(++s);null!==o&&o<0?i.reject(new Error("Delay must be null or >= 0.")):null===o?i.reject(t.noMoreAttemptsError):l=n(function(){l=null,c()},o)}}),u.onError(function(e){u=null,i.reject(e)})};return c(),{result:i.promise,abort:function(){u&&u.abort(),l&&o(l)}}});return s.run()}function o(e){var t=void 0===e?{}:e,r=t.timeBase,n=void 0===r?500:r,o=t.threshold,i=void 0===o?3:o,a=t.delayCap,s=void 0===a?45e3:a,u=t.jitter,l=void 0===u?200:u,c=t.maxAttempts,d=void 0===c?null:c;if(n<=0)throw new Error("Time base must be > 0.");if(i<=0)throw new Error("Threshold must be > 0.");if(0===s)throw new Error("Delay cap must be null or > 0.");if(null!==d&&d<1)throw new Error("Max attempts must be >= 1.");return function(e){if(null!==d&&e>=d)return null;var t=e>0?Math.pow(2,e/i-1):0;return Math.min(t*n,s||1/0)+Math.round(Math.random()*l)}}Object.defineProperty(t,"__esModule",{value:!0});var i=r(17),a=r(2);t.noMoreAttemptsError=new Error("No more attempts remaining."),t.retry=n,t.buildExponentialDelayCalculator=o},function(e,t,r){"use strict";function n(e){var t=a.exec(e);return t?t[1].toLowerCase():null}function o(e,t){return i.buildAbsoluteURL(e,t,{alwaysNormalize:!0})}Object.defineProperty(t,"__esModule",{value:!0});var i=r(36),a=/^.*\.([^\.;\?#]*).*$/;t.getExtension=n,t.buildAbsoluteUrl=o},function(e,t,r){"use strict";function n(e){var t=Object.create(null);return Object.keys(e).forEach(function(r){t[r]=e[r]}),t}Object.defineProperty(t,"__esModule",{value:!0});var o=r(20),i=r(6),a=function(){},s=function(){function e(e,t){void 0===t&&(t={});var r=this;this._subscribers=[],this._onExit=new o.OnExit(function(){return r._after()},function(){return r._onEnter()}),this._beforeUpdateError=void 0,this._inAfterUpdate=!1,this._dead=!1,this._officiallyDead=!1,this._errors=[],this._state=n(e),this._initialState=n(e),this._beforeUpdate=t.beforeUpdate||function(){},this._afterUpdate=t.afterUpdate||a,this._afterDispatches=t.afterDispatches||a}return e.prototype.subscribe=function(e,t){var r=this;if(void 0===t&&(t=!0),this._dead){var o=!1;return{retrieve:function(){},remove:function(){return!o&&(o=!0)}}}var i={callback:e,localState:t?n(this._state):this._initialState};return this._subscribers.push(i),t||this._updateSubscriber(i),{remove:function(){var t=r._subscribers.map(function(e){return e.callback}).indexOf(e);return t>=0&&(r._subscribers.splice(t,1),!0)},retrieve:function(){r._updateSubscriber(i)}}},e.prototype.subscribeIndividual=function(e,t,r){return this.subscribe(function(r){var n=r[e];void 0!==n&&t(n)},r)},e.prototype.getHandle=function(){return{subscribe:this.subscribe.bind(this)}},e.prototype.getIndividualHandle=function(e){var t=this;return{subscribe:function(r){return t.subscribeIndividual(e,r)}}},e.prototype.update=function(e){var t=this;this._officiallyDead||(this._inAfterUpdate?e&&e(this._state,this._beforeUpdateError):this._onExit.enter(function(r){r.getResult(function(){try{e&&e(t._state,t._beforeUpdateError)}catch(e){t._errors.push(e)}})}))},e.prototype.getState=function(){return this._state},e.prototype.kill=function(){var e=this;this._dead||(this._dead=!0,window.setTimeout(function(){e._subscribers.splice(0),e._officiallyDead=!0},0))},e.prototype.isDead=function(){return this._dead},e.prototype._onEnter=function(){this._beforeUpdateError=void 0;try{this._beforeUpdate(this._state)}catch(e){this._beforeUpdateError=e}},e.prototype._after=function(){var e=this,t=this._errors;this._errors=[],i.deferException(function(){e._inAfterUpdate=!0;try{e._afterUpdate(e._state,{beforeUpdate:e._beforeUpdateError,update:t})}catch(t){throw e._inAfterUpdate=!1,t}e._inAfterUpdate=!1,e._subscribers.slice().forEach(function(t){return e._updateSubscriber(t)}),e._afterDispatches(e._state)})},e.prototype._updateSubscriber=function(e){var t=this._calculateDiff(e.localState);Object.keys(t).length&&(e.localState=n(this._state),i.deferException(function(){return e.callback(t,e.localState)}))},e.prototype._calculateDiff=function(e){var t=this,r=Object.create(null);return Object.keys(this._state).forEach(function(n){var o=t._state[n];o!==e[n]&&(r[n]=o)}),r},e}();t.StateManager=s},function(e,t,r){!function(t){var r=/^((?:[^\/;?#]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,n=/^([^\/;?#]*)(.*)$/,o=/(?:\/|^)\.(?=\/)/g,i=/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,a={buildAbsoluteURL:function(e,t,r){if(r=r||{},e=e.trim(),t=t.trim(),!t){if(!r.alwaysNormalize)return e;var o=this.parseURL(e);if(!s)throw new Error("Error trying to parse base URL.");return o.path=a.normalizePath(o.path),a.buildURLFromParts(o)}var i=this.parseURL(t);if(!i)throw new Error("Error trying to parse relative URL.");if(i.scheme)return r.alwaysNormalize?(i.path=a.normalizePath(i.path),a.buildURLFromParts(i)):t;var s=this.parseURL(e);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var u=n.exec(s.path);s.netLoc=u[1],s.path=u[2]}s.netLoc&&!s.path&&(s.path="/");var l={scheme:s.scheme,netLoc:i.netLoc,path:null,params:i.params,query:i.query,fragment:i.fragment};if(!i.netLoc&&(l.netLoc=s.netLoc,"/"!==i.path[0]))if(i.path){var c=s.path,d=c.substring(0,c.lastIndexOf("/")+1)+i.path;l.path=a.normalizePath(d)}else l.path=s.path,i.params||(l.params=s.params,i.query||(l.query=s.query));return null===l.path&&(l.path=r.alwaysNormalize?a.normalizePath(i.path):i.path),a.buildURLFromParts(l)},parseURL:function(e){var t=r.exec(e);return t?{scheme:t[1]||"",netLoc:t[2]||"",path:t[3]||"",params:t[4]||"",query:t[5]||"",fragment:t[6]||""}:null},normalizePath:function(e){for(e=e.split("").reverse().join("").replace(o,"");e.length!==(e=e.replace(i,"")).length;);return e.split("").reverse().join("")},buildURLFromParts:function(e){return e.scheme+e.netLoc+e.path+e.params+e.query+e.fragment}};e.exports=a}(this)},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.version="13.0.0",t.buildNumber=1085;var n=r(1),o=r(24),i=r(3),a=r(25);t.ProxyPlayer=a.ProxyPlayer;var s=r(10);t.ProxyPlayerBase=s.ProxyPlayerBase;var u=r(22);t.errors=u.errors;var l=r(23);t.helpers=l.helpers;var c=r(9);t.BasePlayer=c.BasePlayer;var d=r(21);t.Descriptor=d.Descriptor;var f=r(11);t.State=f.State;var p=r(26);t.TimeRange=p.TimeRange;var h;!function(e){e.EventDispatcher=n.EventDispatcher}(h=t.eventDispatcher||(t.eventDispatcher={}));var _;!function(e){e.LoaderRequest=o.LoaderRequest}(_=t.loader||(t.loader={}));var g;!function(e){e.noOpLogger=i.noOpLogger,e.consoleLogger=i.consoleLogger,e.prefixLogger=i.prefixLogger,e.cloneLogger=i.cloneLogger}(g=t.logger||(t.logger={}))}])})},function(e,t,r){!function(t,n){e.exports=n(r(2),r(4),r(7))}(this,function(e,t,r){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=14)}([function(t,r){t.exports=e},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.getCode=function(){return"HLS_MSE_PLAYER.MSE_ERROR"},t}(o.errors.PlayerFatalError);t.MSEError=i},function(e,r){e.exports=t},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=function(e){function t(t){return e.call(this,"An error occurred trying to append to the buffer.",t)||this}return n(t,e),t.prototype.getCode=function(){return"HLS_MSE_PLAYER.APPEND_ERROR"},t}(o.MSEError);t.AppendError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),i=function(e){function t(t){return e.call(this,"An error occurred trying to initialize the buffer.",t)||this}return n(t,e),t.prototype.getCode=function(){return"HLS_MSE_PLAYER.INITIALIZE_ERROR"},t}(o.MSEError);t.InitializeError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){
this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(){return e.call(this,"A format could not be determined.")||this}return n(t,e),t.prototype.getCode=function(){return"HLS_MSE_PLAYER.NO_FORMAT_DETERMINED_ERROR"},t}(o.errors.NotSupportedError);t.NoFormatDeterminedError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(){return e.call(this,"A transmuxer could not be found.")||this}return n(t,e),t.prototype.getCode=function(){return"HLS_MSE_PLAYER.NO_TRANSMUXER_ERROR"},t}(o.errors.NotSupportedError);t.NoTransmuxerError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(t){var r=e.call(this,"An error occurred when trying to retrieve a segment/key.",t)||this;return r._internalRetrievalError=t,r}return n(t,e),t.prototype.getCode=function(){return"HLS_MSE_PLAYER.RETRIEVAL_ERROR."+this._internalRetrievalError.getCode()},t}(o.errors.PlayerError);t.RetrievalError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(){return e.call(this,"The playlist type is not supported.")||this}return n(t,e),t.prototype.getCode=function(){return"HLS_MSE_PLAYER.UNSUPPORTED_PLAYLIST_TYPE_ERROR"},t}(o.errors.PlayerFatalError);t.UnsupportedPlaylistTypeError=i},function(e,t){e.exports=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(3),i=r(4),a=r(1),s=r(5),u=r(6),l=r(7),c=r(8);!function(e){e.AppendError=o.AppendError,e.InitializeError=i.InitializeError,e.MSEError=a.MSEError,e.NoFormatDeterminedError=s.NoFormatDeterminedError,e.NoTransmuxerError=u.NoTransmuxerError,e.RetrievalError=l.RetrievalError,e.UnsupportedPlaylistTypeError=c.UnsupportedPlaylistTypeError}(n=t.errors||(t.errors={}))},function(e,t,r){"use strict";function n(e){return void 0!==e.mimeType}var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(2),s=r(9),u=r(12),l=r(13),c=r(8),d=r(3),f=r(4),p=r(7),h=r(6),_=r(5),g=i.helpers.find,y=i.helpers.Promise,v=i.helpers.time.now,m=i.helpers.deferred.buildDeferred,E=i.errors.DependencyError,b=i.errors.PlayerFatalError,w=i.errors.URLUpdateError,S=i.eventDispatcher.EventDispatcher,P=i.logger.prefixLogger,R=i.helpers.abortableJob.abortedError,T=i.helpers.browser.getSafariVersion(),x=i.helpers.browser.isSafari(),A=i.helpers.browser.isFirefox(),O=i.helpers.browser.isEdge(),M=3e4,D=1e8,k=600,I=50,C=function(e){function t(t,r){var n=e.call(this,t,r)||this;return n._onPlaylistRequestQueued=new S,n._onPlaylistRequestStart=new S,n._onPlaylistRetrieved=new S,n._onPlaylistRequestFailed=new S,n._onInitDataRequestQueued=new S,n._onInitDataRequestStart=new S,n._onInitDataRetrieved=new S,n._onInitDataRequestFailed=new S,n._onKeyRequestQueued=new S,n._onKeyRequestStart=new S,n._onKeyRetrieved=new S,n._onKeyRequestFailed=new S,n._onPlaylistParseStart=new S,n._onPlaylistParseEnd=new S,n._onSegmentRequestQueued=new S,n._onSegmentRequestStart=new S,n._onSegmentRetrieved=new S,n._onSegmentRequestFailed=new S,n._onSegmentTransmuxStart=new S,n._onSegmentTransmuxEnd=new S,n._onSegmentDecryptionStart=new S,n._onSegmentDecryptionEnd=new S,n._onSegmentReady=new S,n._onSegmentAppendQueued=new S,n._onSegmentAppendEnd=new S,n._playlist=null,n._playlistSegmentRetriever=null,n._initialPlaylistRetrieveCompleted=!1,n._mse=null,n._simpleMSE=null,n._retrieveDurationDeferred=m(),n._html5PlayerReady=!1,n._startPositionOffset=0,n._transmuxerAndMSEType=null,n._lastSegmentAppended=null,n._maxBufferLength=null,n._cacheSize=null,n._onFirstSegmentRetrieved=null,n._seekAttemptTimer=null,n._seekMetadataEventHandle=null,n._playlistDuration=null,n._logger=P(n._logger,"HLSMSEPlayer"),n.onPlaylistRequestQueued=n._onPlaylistRequestQueued.getHandle(),n.onPlaylistRequestStart=n._onPlaylistRequestStart.getHandle(),n.onPlaylistRetrieved=n._onPlaylistRetrieved.getHandle(),n.onPlaylistRequestFailed=n._onPlaylistRequestFailed.getHandle(),n.onInitDataRequestQueued=n._onInitDataRequestQueued.getHandle(),n.onInitDataRequestStart=n._onInitDataRequestStart.getHandle(),n.onInitDataRetrieved=n._onInitDataRetrieved.getHandle(),n.onInitDataRequestFailed=n._onInitDataRequestFailed.getHandle(),n.onKeyRequestQueued=n._onKeyRequestQueued.getHandle(),n.onKeyRequestStart=n._onKeyRequestStart.getHandle(),n.onKeyRetrieved=n._onKeyRetrieved.getHandle(),n.onKeyRequestFailed=n._onKeyRequestFailed.getHandle(),n.onPlaylistParseStart=n._onPlaylistParseStart.getHandle(),n.onPlaylistParseEnd=n._onPlaylistParseEnd.getHandle(),n.onSegmentRequestQueued=n._onSegmentRequestQueued.getHandle(),n.onSegmentRequestStart=n._onSegmentRequestStart.getHandle(),n.onSegmentRetrieved=n._onSegmentRetrieved.getHandle(),n.onSegmentRequestFailed=n._onSegmentRequestFailed.getHandle(),n.onSegmentTransmuxStart=n._onSegmentTransmuxStart.getHandle(),n.onSegmentTransmuxEnd=n._onSegmentTransmuxEnd.getHandle(),n.onSegmentDecryptionStart=n._onSegmentDecryptionStart.getHandle(),n.onSegmentDecryptionEnd=n._onSegmentDecryptionEnd.getHandle(),n.onSegmentReady=n._onSegmentReady.getHandle(),n.onSegmentAppendQueued=n._onSegmentAppendQueued.getHandle(),n.onSegmentAppendEnd=n._onSegmentAppendEnd.getHandle(),n.__descriptor=t,n.__playerDependencies=r,n._url=t.getUrl(),n}return o(t,e),t.prototype.getBufferedTimeRanges=function(){var e=this._playlistSegmentRetriever;return e?i.TimeRange.normalize(e.getSegmentsWithData().map(function(e){return e.segment.getTimeRange()})):[]},t.prototype.getMaxBufferLength=function(){return this._maxBufferLength},t.prototype.getBufferController=function(){var e=this;return{setMaxBufferLength:function(t){if(t<0)throw new Error("Max buffer length cannot be < 0.");e._logger.debug("Updating max buffer length.",t),e._maxBufferLength=t,e._playlistSegmentRetriever?e._playlistSegmentRetriever.updateMaxBufferLength(t):e._logger.debug("Cannot update right now. Playlist segment retriever doesn't exist.")}}},t.prototype.getUrlController=function(){var e=this;return{updateUrl:function(t){e._logger.debug("Updating URL.",t),e._url=t;var r=e._playlist;return r?(e._playlistRetrieveJob&&(e._playlistRetrieveJob.abort(),e._playlistRetrieveJob=null,e._logger.debug("Aborted playlist retrieve job.")),e._playlistSegmentRetriever&&(e._playlistSegmentRetriever.switchPlaylist(null),e._logger.debug("Removed current URL.")),e._playlist=null,void e._retrievePlaylist()):void e._logger.debug("Cannot update right now. Playlist doesn't exist yet.")}}},t.prototype.getMemoryCacheMaxSize=function(){return null!==this._cacheSize?this._cacheSize:D},t.prototype.getMemoryCacheUsage=function(){return this._playlistSegmentRetriever?this._playlistSegmentRetriever.getCacheUsage():0},t.prototype.getMemoryCacheController=function(){var e=this;return{setMaxCacheSize:function(t){if(t<0)throw new Error("Max size cannot be < 0.");e._logger.debug("Updating maximum cache size.",t),e._cacheSize=t,e._playlistSegmentRetriever&&e._playlistSegmentRetriever.updateCacheSize(t)}}},t.prototype._canPlay=function(){var t=this;return u.MSE.isSupported()?e.prototype._canPlay.call(this).then(function(e){if(e!==!0)return y.resolve(e);var r=t.__descriptor.getSegmentFormat();if(!n(r))return t._logger.debug("Format could not be determined."),y.resolve(new _.NoFormatDeterminedError);var o=t._findTransmuxer(r);if(!o)return t._logger.debug("No transmuxer found."),y.resolve(new h.NoTransmuxerError);var i=o.getOutputFormat(),a=r;return t._transmuxerAndMSEType={transmuxer:o,mseType:t._buildMimeTypeAndCodecString(i,a)},y.resolve(!0)}):(this._logger.debug("MSE not supported."),y.resolve(!1))},t.prototype._canPlayProtocol=function(e){return"hls"===e.name},t.prototype._canPlayType=function(e){return"application/x-mpegURL"===e},t.prototype._retrieveDuration=function(){return this._retrieveDurationDeferred.promise},t.prototype._signalReady=function(){this._html5PlayerReady=!0,this._initialPlaylistRetrieveCompleted&&e.prototype._signalReady.call(this)},t.prototype._initialize=function(){var t=this.__playerDependencies;if(null===this._maxBufferLength)if(void 0!==t.maxBufferLength){if(t.maxBufferLength<0)return void this._triggerError(new E("maxBufferLength cannot be < 0."));this._maxBufferLength=t.maxBufferLength}else this._maxBufferLength=M;if(this._logger.debug("Initialized max buffer length.",this._maxBufferLength),null===this._cacheSize)if(void 0!==t.memoryCacheSize){if(t.memoryCacheSize<0)return void this._triggerError(new E("memoryCacheSize cannot be < 0."));this._cacheSize=t.memoryCacheSize}else this._cacheSize=D;this._logger.debug("Initialized cache size.",this._cacheSize),e.prototype._initialize.call(this),this._retrievePlaylist()},t.prototype._initMediaElement=function(t,r){if(this._simpleMSE&&(this._simpleMSE.kill(),this._simpleMSE=null,this._logger.debug("Killed SimpleMSE.")),this._mse&&(this._mse.kill(),this._mse=null,this._logger.debug("Killed MSE.")),null!==this._seekAttemptTimer&&(window.clearTimeout(this._seekAttemptTimer),this._seekAttemptTimer=null,this._logger.debug("Cancelled seek attempt timer.")),this._onFirstSegmentRetrieved=null,this._seekMetadataEventHandle&&(this._seekMetadataEventHandle.remove(),this._seekMetadataEventHandle=null),null===r)e.prototype._initMediaElement.call(this,t,null);else{this._initMSE();var n=this._mse.getUrl();this._logger.debug("Setting MSE url.",n),e.prototype._initMediaElement.call(this,t,n)}},t.prototype._shouldBeEnded=function(){if(!x)return e.prototype._shouldBeEnded.call(this);if(e.prototype._shouldBeEnded.call(this))return!0;if(!this.getMediaElement())return!1;var t=this._duration;return this._stallDetected&&null!==t&&this._getTruePosition()>=t-k},t.prototype._getTruePosition=function(){var e=this.getMediaElement();if(!e)throw new Error("Media element should exist.");return this._startPositionOffset+this._getMediaElementPosition()},t.prototype._handleSeekChange=function(t){e.prototype._handleSeekChange.call(this,t),this._playlistSegmentRetriever&&(this._logger.debug("Explicitly updating playlist segment retriever, as seek requested."),this._playlistSegmentRetriever.update(),this._findSegmentAndAppendToMSE())},t.prototype._performSeek=function(t,r){var n=this,o=this,i=o._simpleMSE,a=o._mse,s=this.getMediaElement();if(!a)throw new Error("MSE should exist.");if(!s)throw new Error("Media element should exist.");var u=!s.paused;null!==this._seekAttemptTimer&&(window.clearTimeout(this._seekAttemptTimer),this._seekAttemptTimer=null,this._logger.debug("Cancelled previous seek attempt timer.")),this._seekMetadataEventHandle&&(this._seekMetadataEventHandle.remove(),this._seekMetadataEventHandle=null,this._logger.debug("Removed previous loaded metadata event handler.")),i&&i.kill(),a.kill(),this._logger.debug("SimpleMSE and MSE destroyed."),this._startPositionOffset=t;var l=null;this._onFirstSegmentRetrieved=function(e){return l=e},this._logger.debug("Initializing MSE and SimpleMSE for new position."),this._initMSE();var c=this._mse.getUrl();if(this._logger.debug("Updated media element MSE src.",c),e.prototype._initMediaElement.call(this,s,c),u){this._logger.debug("Calling play() on media element as it was playing previously.");var d=s.play();d&&d.catch&&d.catch(function(e){"AbortError"!==e.name&&(n._logger.error("Unexpected play() error.",e),n._triggerError(new b("Exception from calling play() after seek.",e)))})}var f=function(e){(T&&T.major<11||A)&&e<I&&(n._logger.debug("Tweaking offset to fix glitch issue."),e=I);var t=function(){n._startPositionOffset=Math.max(0,n._startPositionOffset-e),n._logger.debug("Updated start position offset.",n._startPositionOffset,e);var t=function(){n._seekAttemptTimer=null,n._logger.debug("Attempting to seek to the required offset.",e),s.currentTime=e/1e3;var o=1e3*s.currentTime;Math.abs(o-e)<=100?(n._logger.debug("Seeked to the required offset.",o),r()):(n._logger.warn("Seek attempt failed. Trying again shortly.",o),n._seekAttemptTimer=window.setTimeout(t,50))};t()};n._onFirstSegmentRetrieved=null,O||s.readyState===s.HAVE_METADATA?(n._logger.debug("Media element has metadata. Seeking to offset."),t()):(n._logger.debug("Media element has not loaded metadata. Waiting for metadata..."),n._seekMetadataEventHandle=n._listenToOnce("loadedmetadata",function(){n._seekMetadataEventHandle=null,n._logger.debug("Got metadata. Seeking to offset."),t()},{earlyAttach:!0}))};null!==l?(this._logger.debug("First segment already retrieved. Preparing to seek to initial offset."),f(l)):(this._logger.debug("Waiting for first segment to be retrieved."),this._onFirstSegmentRetrieved=function(e){n._logger.debug("First segment retrieved. Preparing to seek to initial offset."),f(e)})},t.prototype._kill=function(){this._simpleMSE&&(this._logger.debug("Killing SimpleMSE."),this._simpleMSE.kill(),this._simpleMSE=null),this._mse&&(this._logger.debug("Killing MSE."),this._mse.kill(),this._mse=null),this._playlistRetrieveJob&&(this._logger.debug("Aborting playlist retrieve job."),this._playlistRetrieveJob.abort(),this._playlistRetrieveJob=null),this._playlistSegmentRetriever&&(this._logger.debug("Killing playlist segment retriever."),this._playlistSegmentRetriever.kill(),this._playlistSegmentRetriever=null),this._playlist=null,e.prototype._kill.call(this)},t.prototype._initMSE=function(){var e=this;if(!this._transmuxerAndMSEType)throw new Error("Transmuxer should have been configured.");this._lastSegmentAppended=null;var t=!1;T&&T.major<10&&this._transmuxerAndMSEType.transmuxer===a.MP3ToMP4Transmuxer&&(t=!0);var r=new u.MSE(this._transmuxerAndMSEType.mseType,this._logger,t),n=new l.SimpleMSE(r,function(){return e.getSegmentDataToAppendNext()},function(){return e._getMediaElementPosition()},function(t){e._triggerError(new d.AppendError(t))},this._logger);n.onAppendQueued.subscribe(this._onSegmentAppendQueued.dispatch),n.onAppendEnd.subscribe(this._onSegmentAppendEnd.dispatch),this._simpleMSE=n,n.start(),this._mse=r,r.whenInitialized().catch(function(t){t!==u.killedError&&(e._logger.error("Error during mse initialization.",t),e._triggerError(new f.InitializeError(t)))})},t.prototype._getMediaElementPosition=function(){var e=this.getMediaElement();if(!e)throw new Error("No media element.");return 1e3*e.currentTime},t.prototype._whenPlaylistRetrieved=function(){var t=this,r=this._playlist;if(!r)throw new Error("Playlist should have been retrieved.");var n=!this._initialPlaylistRetrieveCompleted;if(n)this._initialPlaylistRetrieveCompleted=!0,this._playlistDuration=r.getTotalDuration(),this._retrieveDurationDeferred.resolve(this._playlistDuration);else{var o=r.getTotalDuration();if(this._playlistDuration!==o)return this._logger.error("The duration from the new URL did not match the previous one."),void this._triggerError(new w("The duration from the new URL did not match the previous one.",{oldDuration:this._playlistDuration,newDuration:o}))}if(!this._transmuxerAndMSEType)throw new Error("Transmuxer should have been configured.");if(this._playlistSegmentRetriever)this._logger.debug("Switching playlist for playlist segment retriever."),this._playlistSegmentRetriever.switchPlaylist(r);else{var i=this._maxBufferLength;if(null===i)throw new Error("maxBufferLength should have been initiaized by now.");this._logger.debug("Creating playlist segment retriever.");var s=this._cacheSize;if(null===s)throw new Error("cacheSize should be set.");var u=new a.PlaylistSegmentRetriever({playlist:r,getPosition:function(){return t.getPosition()},maxBufferLength:i,cacheSize:s,transmuxer:this._transmuxerAndMSEType.transmuxer,logger:this._logger});u.onSegmentRequestQueued.subscribe(this._onSegmentRequestQueued.dispatch),u.onSegmentRequestStart.subscribe(this._onSegmentRequestStart.dispatch),u.onSegmentRetrieved.subscribe(this._onSegmentRetrieved.dispatch),u.onSegmentRequestFailed.subscribe(this._onSegmentRequestFailed.dispatch),u.onSegmentDecryptionStart.subscribe(this._onSegmentDecryptionStart.dispatch),u.onSegmentDecryptionEnd.subscribe(this._onSegmentDecryptionEnd.dispatch),u.onSegmentTransmuxStart.subscribe(this._onSegmentTransmuxStart.dispatch),u.onSegmentTransmuxEnd.subscribe(this._onSegmentTransmuxEnd.dispatch),this._playlistSegmentRetriever=u,u.onError.subscribe(function(e){t._logger.error("Error from playlist segment retriever.",e),e instanceof a.retrievalErrors.RetrievalError?t._triggerError(new p.RetrievalError(e)):t._triggerError(new b("Unexpected error when trying to retrieve segment.",e))}),u.onSegmentReady.subscribe(function(e){var r=e.eventRepresentation,n=v();t._logger.debug("Segment ready.",r),t._findSegmentAndAppendToMSE(),t._onSegmentReady.dispatch({segment:r},{time:n})})}this._initialPlaylistRetrieveCompleted=!0,n&&this._html5PlayerReady&&e.prototype._signalReady.call(this)},t.prototype._findSegmentAndAppendToMSE=function(){var e=this._simpleMSE;if(e&&e.waitingForSegmentData()){var t=this.getSegmentDataToAppendNext();t&&(this._logger.debug("Providing segment to SimpleMSE.",t.eventRepresentation),e.provideNextSegmentData(t))}},t.prototype._retrievePlaylist=function(){var e=this;if(this._playlist)throw new Error("Playlist already exists.");var t=this.__playerDependencies,r=t.playlistLoader,n=t.segmentLoader,o=t.keyLoader,i=t.isPlaylistResponseCodeAcceptable,s=t.isPlaylistResponseCodeRetryable,u=t.isSegmentResponseCodeAcceptable,l=t.isSegmentResponseCodeRetryable,d=t.isKeyResponseCodeAcceptable,f=t.isKeyResponseCodeRetryable;this._logger.debug("Creating playlist.",this._url);var h=new a.Playlist({url:this._url,segmentFormat:this.__descriptor.getSegmentFormat(),playlistLoader:r,segmentLoader:n,keyLoader:o,isPlaylistResponseCodeAcceptable:i,isPlaylistResponseCodeRetryable:s,isSegmentResponseCodeAcceptable:u,isSegmentResponseCodeRetryable:l,isKeyResponseCodeAcceptable:d,isKeyResponseCodeRetryable:f,logger:this._logger});h.onPlaylistRequestQueued.subscribe(this._onPlaylistRequestQueued.dispatch),h.onPlaylistRequestStart.subscribe(this._onPlaylistRequestStart.dispatch),h.onPlaylistRetrieved.subscribe(this._onPlaylistRetrieved.dispatch),h.onPlaylistRequestFailed.subscribe(this._onPlaylistRequestFailed.dispatch),h.onInitDataRequestQueued.subscribe(this._onInitDataRequestQueued.dispatch),h.onInitDataRequestStart.subscribe(this._onInitDataRequestStart.dispatch),h.onInitDataRetrieved.subscribe(this._onInitDataRetrieved.dispatch),h.onInitDataRequestFailed.subscribe(this._onInitDataRequestFailed.dispatch),h.onKeyRequestQueued.subscribe(this._onKeyRequestQueued.dispatch),h.onKeyRequestStart.subscribe(this._onKeyRequestStart.dispatch),h.onKeyRetrieved.subscribe(this._onKeyRetrieved.dispatch),h.onKeyRequestFailed.subscribe(this._onKeyRequestFailed.dispatch),h.onPlaylistParseStart.subscribe(this._onPlaylistParseStart.dispatch),h.onPlaylistParseEnd.subscribe(this._onPlaylistParseEnd.dispatch),this._playlist=h,this._playlistRetrieveJob=this._playlist.retrieve(),this._playlistRetrieveJob.onCompletion(function(){var t=e._playlist.getType();t!==a.PlaylistType.VOD?(e._logger.error("Unsupported playlist type.",t),e._triggerError(new c.UnsupportedPlaylistTypeError)):(e._logger.debug("Playlist retrieved."),e._whenPlaylistRetrieved())}),this._playlistRetrieveJob.onError(function(t){t!==R&&(e._logger.error("Error when retrieving playlist.",t),t instanceof a.retrievalErrors.RetrievalError?e._triggerError(new p.RetrievalError(t)):e._triggerError(new b("Unexpected error when retrieving playlist.",t)))})},t.prototype._findTransmuxer=function(e){var t=this,r=a.TransmuxerFactory.retrieveTransmuxers(e);this._logger.info("Finding a transmuxer...",e);var n=g(r,function(r){return u.MSE.isSupported(t._buildMimeTypeAndCodecString(r.getOutputFormat(),e))})||null;return n?this._logger.info("Transmuxer found.",n.getInputFormat(),n.getOutputFormat()):this._logger.warn("No transmuxer found."),n},t.prototype.getSegmentDataToAppendNext=function(){var e=this._lastSegmentAppended;this._logger.debug("Looking for segment to append next.",!!e);var t=this._playlistSegmentRetriever;if(!t)return this._logger.debug("No segment retriever."),null;if(e){var r=t.getSegmentsWithData(),n=r[r.map(function(e){return e.segment}).indexOf(e)+1];return n?(this._logger.debug("Found segment.",n.eventRepresentation),this._lastSegmentAppended=n.segment,{data:n.data,eventRepresentation:n.eventRepresentation}):(this._logger.debug("No segment found."),e.isFinalSegment()&&(this._logger.debug("The last segment we appended was the last one in the stream. Signalling EOS."),this._signalEOS()),null)}var o=this.getPosition(),n=g(t.getSegmentsWithData(),function(e){return e.segment.getTimeRange().containsTime(o)});if(!n)return this._logger.debug("No segment found.",o),null;var i=o-n.segment.getTimeRange().start,a=this.getMediaElement();if(!a)throw new Error("Media element should exist.");this._logger.debug("Found initial segment.",n.eventRepresentation),this._lastSegmentAppended=n.segment,this._onFirstSegmentRetrieved&&this._onFirstSegmentRetrieved(i);var s=n.data,u=n.initData,l=s;return u&&(this._logger.debug("Prepending init data."),l=new Uint8Array(u.length+s.length),l.set(u,0),l.set(s,u.length)),{data:l,eventRepresentation:n.eventRepresentation}},t.prototype._signalEOS=function(){var e=this;this._logger.debug("Signalling EOS."),this._simpleMSE&&(this._simpleMSE.kill(),this._logger.debug("Killed SimpleMSE."),this._simpleMSE=null);var t=this._mse;t&&!t.eosSignalled()&&t.signalEOS().catch(function(r){t===e._mse&&(e._logger.error("Error occurred when signalling EOS.",r),e._triggerError(new d.AppendError(r)))})},t}(s.HTML5Player);t.HLSMSEPlayer=C},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(9),i=n.helpers.deferred.buildDeferred,a=o.helpers.timeRanges.buildTimeRanges,s=n.helpers.Promise,u=n.logger.prefixLogger,l=n.logger.noOpLogger,c=/(MSIE )|(Trident\/)/,d=n.helpers.browser.isSafari(),f='audio/mp4; codecs="mp3"',p="audio/mpeg",h='audio/webm; codecs="opus"',_=n.helpers.browser.getSafariVersion(),g=n.helpers.browser.getChromeVersion();t.killedError=new Error("MSE killed.");var y=function(){function e(e,t,r){var n=this.constructor;if(void 0===t&&(t=l),void 0===r&&(r=!1),this._sourceBuffer=null,this._initialized=!1,this._initializeDeferred=i(),this._whenIdleDeferred=i(),this._error=null,this._dead=!1,this._eosSignalled=!1,this._pendingActions=[],this._currentAction=null,this._logger=u(t,"MSE"),this._onMediaSourceInit=this._onMediaSourceInit.bind(this),this._onMediaSourceEnded=this._onMediaSourceEnded.bind(this),this._onMediaSourceError=this._onMediaSourceError.bind(this),this._onSourceBufferUpdateEnd=this._onSourceBufferUpdateEnd.bind(this),this._onSourceBufferError=this._onSourceBufferError.bind(this),!n.isSupported(e))throw this._logger.error("Not supported."),new Error("Not supported.");d&&e===f&&(e="audio/mp4"),this._type=e,this._useSegmentsMode=r,this._mediaSource=new MediaSource,this._mediaSource.addEventListener("sourceopen",this._onMediaSourceInit,!1),this._mediaSource.addEventListener("error",this._onMediaSourceError,!1),this._url=URL.createObjectURL(this._mediaSource),this._logger.debug("Created URL.",this._url)}return e.isSupported=function(e){return!c.test(window.navigator.userAgent)&&"MediaSource"in window&&(!e||!(!d||e!==f)||!(_&&_.major<10&&e===p)&&!(g&&g.major<50&&e===h)&&MediaSource.isTypeSupported(e))},e.prototype.whenInitialized=function(){return this._initializeDeferred.promise},e.prototype.whenIdle=function(){return this._whenIdleDeferred?this._whenIdleDeferred.promise:s.resolve(void 0)},e.prototype.isIdle=function(){return this._dead||!this._whenIdleDeferred},e.prototype.hasInitialized=function(){return this._initialized},e.prototype.getError=function(){return this._error},e.prototype.getUrl=function(){return this._ensureNotDead(),this._url},e.prototype.getBuffered=function(){return this._ensureNotDead(),this._sourceBuffer?a(this._sourceBuffer.buffered):[]},e.prototype.append=function(e){this._ensureNotDead(),this._ensureInitialized(),this._ensureNotEOS(),this._logger.debug("append() called.");var t=i();return this._pendingActions.push({type:"append",data:e,deferred:t}),this._performNextAction(),t.promise},e.prototype.remove=function(e){if(0===e.duration)throw new Error("Remove range must have a duration > 0.");this._ensureNotDead(),this._ensureInitialized(),this._ensureNotEOS(),this._logger.debug("remove() called.",e);var t=i();return this._pendingActions.push({type:"remove",range:e,deferred:t}),this._performNextAction(),t.promise},e.prototype.signalEOS=function(){this._ensureNotDead(),this._ensureInitialized(),this._ensureNotEOS(),this._logger.debug("signalEOS() called."),this._eosSignalled=!0;var e=i();return this._pendingActions.push({type:"eos",deferred:e}),this._performNextAction(),e.promise},e.prototype.eosSignalled=function(){return this._eosSignalled},e.prototype.kill=function(){if(!this._dead){if(this._logger.debug("kill() called."),this._dead=!0,this._sourceBuffer){this._sourceBuffer.removeEventListener("updateend",this._onSourceBufferUpdateEnd,!1),this._sourceBuffer.removeEventListener("error",this._onSourceBufferError,!1);try{this._mediaSource.removeSourceBuffer(this._sourceBuffer)}catch(e){this._logger.error("Error from removeSourceBuffer()",e)}}this._mediaSource.removeEventListener("sourceopen",this._onMediaSourceInit,!1),this._mediaSource.removeEventListener("sourceended",this._onMediaSourceEnded,!1),this._mediaSource.removeEventListener("error",this._onMediaSourceError,!1),URL.revokeObjectURL(this._url);var e=this._currentAction?[this._currentAction]:[];e=e.concat(this._pendingActions),e.forEach(function(e){e.deferred.reject(t.killedError)}),this._whenIdleDeferred||(this._whenIdleDeferred=i()),this._whenIdleDeferred.reject(t.killedError),this._initialized||this._initializeDeferred.reject(this._error||t.killedError),this._pendingActions.length=0,this._logger.debug("Killed.")}},e.prototype._ensureInitialized=function(){if(!this._initialized)throw new Error("Not initialized yet.")},e.prototype._ensureNotEOS=function(){if(this._eosSignalled)throw new Error("EOS signalled.")},e.prototype._ensureNotDead=function(){if(this._dead)throw new Error("MSE is dead.")},e.prototype._onMediaSourceInit=function(){this._logger.debug("MSE initialized."),this._mediaSource.removeEventListener("sourceopen",this._onMediaSourceInit,!1);try{this._logger.debug("Creating source buffer.",this._type),this._sourceBuffer=this._mediaSource.addSourceBuffer(this._type),this._sourceBuffer.mode=this._useSegmentsMode?"segments":"sequence",this._logger.debug("Using append mode: "+this._sourceBuffer.mode),this._sourceBuffer.addEventListener("updateend",this._onSourceBufferUpdateEnd,!1),this._sourceBuffer.addEventListener("error",this._onSourceBufferError,!1)}catch(e){this._handleError(e)}this._initializeDeferred.resolve(void 0),this._whenIdleDeferred.resolve(void 0),this._initialized=!0,this._performNextAction()},e.prototype._onMediaSourceEnded=function(){this._onSourceBufferUpdateEnd()},e.prototype._onMediaSourceError=function(e){this._handleError(e)},e.prototype._handleError=function(e){this._ensureNotDead(),this._logger.error("Error occurred.",e),this._error=e||new Error("Unknown error."),this.kill()},e.prototype._onSourceBufferUpdateEnd=function(){var e=this._currentAction;return this._logger.debug("Update ended.",this.getBuffered()),e?"append"===e.type&&0===n.TimeRange.getCoverage(this.getBuffered()).end?void this._handleError(new Error("Buffer end point is still 0 after an append.")):(this._currentAction=null,e.deferred.resolve(void 0),void this._performNextAction()):void this._handleError(new Error("No action in progress."))},e.prototype._onSourceBufferError=function(e){this._handleError(e)},e.prototype._performNextAction=function(){var e=this._whenIdleDeferred;if(!this._currentAction&&this._sourceBuffer){var t=this._pendingActions.shift();if(!t)return this._logger.debug("No more actions."),void(e&&(this._whenIdleDeferred=null,e.resolve(void 0)));switch(e||(this._whenIdleDeferred=i()),this._currentAction=t,this._logger.debug("Performing next action..."),t.type){case"append":var r=n.TimeRange.getCoverage(this.getBuffered());try{if("segments"===this._sourceBuffer.mode){var o=r.end/1e3;this._logger.debug("Setting timestampOffset because detected safari.",o),this._sourceBuffer.timestampOffset=o}this._logger.debug("Calling appendBuffer()."),this._sourceBuffer.appendBuffer(t.data)}catch(e){this._handleError(e)}break;case"remove":try{var a=t.range;this._logger.debug("Calling remove().",a.start,a.end),this._sourceBuffer.remove(a.start/1e3,a.end/1e3)}catch(e){this._handleError(e)}break;case"eos":try{this._logger.debug("Calling endOfStream()."),this._sourceBuffer.removeEventListener("updateend",this._onSourceBufferUpdateEnd,!1),this._mediaSource.addEventListener("sourceended",this._onMediaSourceEnded,!1),this._mediaSource.endOfStream()}catch(e){this._handleError(e)}}}},e}();t.MSE=y},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=n.helpers.Promise,i=n.eventDispatcher.EventDispatcher,a=n.logger.prefixLogger,s=n.logger.noOpLogger,u=7e3,l=2e4,c=function(){function e(e,t,r,n,o){void 0===o&&(o=s);var u=this;this._onAppendQueued=new i,this._onAppendEnd=new i,this._updateTimerId=null,this._gcTimerId=null,this._waitingForData=!1,this._started=!1,this._resettingPromise=null,this._error=null,this._logger=a(o,"SimpleMSE"),this.onAppendQueued=this._onAppendQueued.getHandle(),this.onAppendEnd=this._onAppendEnd.getHandle(),this._mse=e,this._getNextSegmentData=t,this._getPosition=r,this._onError=n,e.whenInitialized().then(function(){!u._error&&u._started&&(u._logger.debug("MSE initialized. Preparing to update."),u._prepareUpdate())}).catch(function(e){u._error||(u._logger.error("Error when waiting for MSE to initialize.",e),u._handleError(e||new Error("Error waiting for MSE to initialize.")))})}return e.prototype.start=function(){if(this._checkNotErrored(),this._resettingPromise)throw new Error("start() is not allowed whilst a reset is in progress.");if(this._started)throw new Error("Already started. reset() first.");this._logger.debug("start() called."),this._scheduleGC(),this._started=!0,this._prepareUpdate()},e.prototype.kill=function(){this._error||(this._logger.debug("kill() called."),this._clearTimers(),this._error=new Error("Killed."),this._logger.debug("Killed."))},e.prototype.reset=function(){var e=this;if(this._checkNotErrored(),this._logger.debug("reset() called."),this._resettingPromise)return this._logger.debug("Reset already in progress."),this._resettingPromise;if(!this._started)return this._logger.debug("Nothing to do to, already reset."),o.resolve();var t=this._mse;return this._waitingForData=!1,
this._started=!1,this._clearTimers(),this._logger.debug("Waiting to clear MSE buffer..."),this._resettingPromise=t.whenIdle().then(function(){if(e._error)throw e._error;e._logger.debug("Clearing MSE buffer.");var r=t.getBuffered(),o=n.TimeRange.getCoverage(r);if(o.duration>0)return t.remove(o)}).then(function(){e._logger.debug("MSE buffer cleared."),e._resettingPromise=null}).catch(function(t){e._logger.error("Error resetting MSE.",t);var r=t||new Error("Error resetting MSE.");throw e._handleError(r),r})},e.prototype.waitingForSegmentData=function(){return this._checkNotErrored(),this._waitingForData},e.prototype.provideNextSegmentData=function(e){if(this._checkNotErrored(),!this._waitingForData)throw new Error("Not waiting for data.");this._logger.debug("Segment data provided."),this._waitingForData=!1,this._update(e)},e.prototype._prepareUpdate=function(){if(!this._updateTimerId){var e=this._mse;if(e.hasInitialized()){var t=n.TimeRange.getCoverage(e.getBuffered());if(t.end<=this._getPosition()+u){this._logger.debug("Requesting next segment data.");var r=this._getNextSegmentData();r?(this._logger.debug("Got segment data."),this._update(r)):(this._logger.debug("Did not get any data."),this._waitingForData=!0)}else this._scheduleUpdate()}}},e.prototype._gc=function(){var e=this,t=this._mse;if(!t.hasInitialized())return void this._scheduleGC();var r=n.TimeRange.getCoverage(t.getBuffered()),o=this._getPosition()-5e3;if(r.start<o){var i=new n.TimeRange(r.start,o-r.start);this._logger.debug("Removing media that has been played.",i),t.remove(i).then(function(){e._logger.debug("Removed media that has been played.",i),e._error||e._scheduleGC()}).catch(function(t){e._logger.error("Error when attempting to remove media that has been played.",i,t),e._error||e._scheduleGC()})}else this._scheduleGC()},e.prototype._update=function(e){var t=this;this._logger.debug("Updating...");var r=this._mse;this._onAppendQueued.dispatch({segment:e.eventRepresentation}),this._logger.debug("Appending..."),r.append(e.data).then(function(){t._logger.debug("Appended."),t._onAppendEnd.dispatch({segment:e.eventRepresentation}),t._resettingPromise||t._error||t._prepareUpdate()}).catch(function(e){t._error||(t._logger.error("Error updating MSE.",e),t._handleError(e||new Error("Error updating MSE.")))})},e.prototype._scheduleUpdate=function(){var e=this;this._updateTimerId=window.setTimeout(function(){e._updateTimerId=null,e._prepareUpdate()},500)},e.prototype._scheduleGC=function(){var e=this;this._gcTimerId||(this._gcTimerId=window.setTimeout(function(){e._gcTimerId=null,e._gc()},l))},e.prototype._checkNotErrored=function(){if(this._error)throw this._error},e.prototype._clearTimers=function(){this._updateTimerId&&(this._logger.debug("Clearing update timer."),window.clearTimeout(this._updateTimerId),this._updateTimerId=null),this._gcTimerId&&(window.clearTimeout(this._gcTimerId),this._gcTimerId=null)},e.prototype._handleError=function(e){this._error||(this._error=e,this._logger.error("Error occurred.",e),this._clearTimers(),this._onError(e))},e}();t.SimpleMSE=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.version="13.0.0",t.buildNumber=1085;var n=r(11);t.HLSMSEPlayer=n.HLSMSEPlayer;var o=r(10);t.errors=o.errors;var i=r(2);t.retrievalErrors=i.retrievalErrors}])})},function(e,t,r){!function(t,n){e.exports=n(r(2),r(5),r(6))}(this,function(e,t,r){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=91)}([function(t,r){t.exports=e},function(e,t,r){"use strict";var n=r(4);e.exports=function(e){if(!n(e))throw new TypeError("Cannot use null or undefined");return e}},function(e,t,r){"use strict";e.exports=function(e){if("function"!=typeof e)throw new TypeError(e+" is not a function");return e}},function(e,t,r){"use strict";e.exports=r(72)()?Symbol:r(74)},function(e,t,r){"use strict";var n=r(17)();e.exports=function(e){return e!==n&&null!==e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.prototype.getCode=function(){return"GENERIC"},e}();t.RetrievalError=n},function(e,t,r){"use strict";var n,o=r(10),i=r(19),a=r(58),s=r(22);n=e.exports=function(e,t){var r,n,a,u,l;return arguments.length<2||"string"!=typeof e?(u=t,t=e,e=null):u=arguments[2],null==e?(r=a=!0,n=!1):(r=s.call(e,"c"),n=s.call(e,"e"),a=s.call(e,"w")),l={value:t,configurable:r,enumerable:n,writable:a},u?o(i(u),l):l},n.gs=function(e,t,r){var n,u,l,c;return"string"!=typeof e?(l=r,r=t,t=e,e=null):l=arguments[3],null==t?t=void 0:a(t)?null==r?r=void 0:a(r)||(l=r,r=void 0):(l=t,t=r=void 0),null==e?(n=!0,u=!1):(n=s.call(e,"c"),u=s.call(e,"e")),c={get:t,set:r,configurable:n,enumerable:u},l?o(i(l),c):c}},function(e,t,r){"use strict";var n=Object.prototype.toString,o=n.call(function(){return arguments}());e.exports=function(e){return n.call(e)===o}},function(e,t,r){"use strict";var n=Object.prototype.toString,o=n.call("");e.exports=function(e){return"string"==typeof e||e&&"object"==typeof e&&(e instanceof String||n.call(e)===o)||!1}},function(e,r){e.exports=t},function(e,t,r){"use strict";e.exports=r(53)()?Object.assign:r(54)},function(e,t,r){"use strict";e.exports=r(20)()?Object.setPrototypeOf:r(21)},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(5),i=function(e){function t(t){var r=e.call(this)||this;return r._code=t,r}return n(t,e),t.prototype.getCode=function(){return"OGG_PARSER."+this._code},t}(o.RetrievalError);t.OggParserError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(5),i=function(e){function t(t){var r=e.call(this)||this;return r._statusCode=t,r}return n(t,e),t.prototype.getStatusCode=function(){return this._statusCode},t.prototype.getCode=function(){return"UNACCEPTABLE_RESPONSE_STATUS_CODE"},t}(o.RetrievalError);t.UnacceptableResponseStatusCodeError=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(81),i=r(13),a=r(30),s=r(28),u=r(87),l=n.helpers.abortableJob.AbortableJob,c=n.helpers.retry,d=c.retry,f=c.buildExponentialDelayCalculator,p=n.helpers.Promise,h=n.helpers.arrayBuffer.combine,_=n.eventDispatcher.EventDispatcher,g=n.logger.prefixLogger,y=n.logger.noOpLogger,v=function(){function e(e){var t=e.url,r=e.sequenceNumber,n=e.playlist,o=e.timeRange,a=e.encryptionConfig,c=e.initData,v=e.format,m=e.loader,E=e.playlistEventRepresentation,b=e.logger,w=void 0===b?y:b,S=e.delayCalculator,P=void 0===S?f():S,R=e.isResponseCodeAcceptable,T=void 0===R?function(e){return 200===e}:R,x=e.isResponseCodeRetryable,A=void 0===x?function(e){return!(e>=400&&e<500)}:x,O=this;this._onSegmentRequestQueued=new _,this._onSegmentRequestStart=new _,this._onSegmentRetrieved=new _,this._onSegmentRequestFailed=new _,this._onSegmentDecryptionStart=new _,this._onSegmentDecryptionEnd=new _,this._logger=g(w,"Segment"),this.onSegmentRequestQueued=this._onSegmentRequestQueued.getHandle(),this.onSegmentRequestStart=this._onSegmentRequestStart.getHandle(),this.onSegmentRetrieved=this._onSegmentRetrieved.getHandle(),this.onSegmentRequestFailed=this._onSegmentRequestFailed.getHandle(),this.onSegmentDecryptionStart=this._onSegmentDecryptionStart.getHandle(),this.onSegmentDecryptionEnd=this._onSegmentDecryptionEnd.getHandle(),this._sequenceNumber=r,this._playlist=n,this._timeRange=o,this._encryptionConfig=a||null,this._initData=c||null,this._format=v,this._loader=m,this._isResponseCodeAcceptable=T,this._isResponseCodeRetryable=A,this._downloadAbortableJob=new l(function(){var e=d(function(){return new l(function(){var e=new s.Segment(E,t,r);O._onSegmentRequestQueued.dispatch({segment:e});var n=O._loader.request({url:t});n.whenRequestStarted.then(function(){return O._onSegmentRequestStart.dispatch({segment:e})}),O._logger.debug("Requesting segment.",t);var o=n.getResponse().then(function(r){if(!r)return O._logger.warn("Segment request timed out.",t),O._onSegmentRequestFailed.dispatch({segment:e,statusCode:null}),{success:!1};var n=r.statusCode;if(O._isResponseCodeAcceptable(n)){var o=r.data;return o?(O._logger.debug("Got segment response.",t,n),O._onSegmentRetrieved.dispatch({segment:e,statusCode:n}),{success:!0,result:{data:new Uint8Array(o),eventRepresentation:e}}):(O._logger.warn("Segment response contained no data.",t,n),O._onSegmentRequestFailed.dispatch({segment:e,statusCode:n}),{success:!1})}return O._isResponseCodeRetryable(n)?(O._logger.debug("Segment response code was not acceptable. Will retry.",t,n),O._onSegmentRequestFailed.dispatch({segment:e,statusCode:n}),{success:!1}):(O._logger.debug("Segment response code was not acceptable.",t,n),O._onSegmentRequestFailed.dispatch({segment:e,statusCode:n}),p.reject(new i.UnacceptableResponseStatusCodeError(n)))});return{result:o,abort:function(){O._logger.debug("Aborting segment request.",t),n.abort(),O._onSegmentRequestFailed.dispatch({segment:e,aborted:!0})}}})},P);return{result:e.whenComplete(),abort:function(){return e.abort()}}},{storeResult:!1}),this._retrieveAbortableJob=new l(function(){var e=O._downloadAbortableJob.run(),t=null,r=null,n=e.whenComplete().then(function(e){var n=e.data,o=e.eventRepresentation;return r=O._decrypt(n,o),r.whenComplete().then(function(e){O._initData&&(O._logger.debug("Prepending init data.",o),e=h([O._initData,e]));var r=u.SegmentParserFactory.retrieveSegmentParser(O._format);return O._logger.debug("Parsing segment data.",o,r.getFormat()),t=r.parseSegmentData(e,O,O._playlist),t.whenComplete().then(function(e){return O._logger.debug("Segment data ready.",o),{data:e,eventRepresentation:o}})})});return{result:n,abort:function(){e.abort(),r&&r.abort(),t&&t.abort()}}},{storeResult:!1})}return e.prototype.getSequenceNumber=function(){return this._sequenceNumber},e.prototype.isFinalSegment=function(){var e=this._playlist;return e.hasEnded()&&e.getStartingSequenceNumber()+e.getSegmentCount()-1===this._sequenceNumber},e.prototype.getTimeRange=function(){return this._timeRange},e.prototype.retrieveData=function(){return this._retrieveAbortableJob.run()},e.prototype._decrypt=function(e,t){var r=this,n=new l(function(){var n=r._encryptionConfig;if(!n)return{result:p.resolve(e)};r._logger.info("Finding a decryptor...");var i=o.DecryptorFactory.retrieveDecryptor(n);if(!i)return r._logger.error("Could not find a decryptor."),{result:p.reject(new a.NoDecryptorError)};r._logger.info("Decryptor found."),r._onSegmentDecryptionStart.dispatch({segment:t});var s=i.decrypt(e,n);return s.then(function(){r._logger.debug("Decrypted."),r._onSegmentDecryptionEnd.dispatch({segment:t})}),{result:s}});return n.run()},e}();t.Segment=v},function(e,t,r){"use strict";function n(e){var t=e.reduce(function(e,t){return e+t.length},0),r=new Uint8Array(t),n=0;return e.forEach(function(e){r.set(e,n),n+=e.length}),r}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=r(39),a=r(40),s=o.helpers.Promise,u={rate:44100,id:3},l=16,c=2,d=u.rate,f=2,p=8;t.MP3ToMP4={getInputFormat:function(){return{mimeType:"audio/mpeg"}},getOutputFormat:function(){return{mimeType:"audio/mp4",audioCodec:{id:"mp3"}}},transmux:function(e){return new s(function(t,r){function o(e){h||(h=!0,r(e))}function s(e){h||t(e)}var h=!1;try{var _=[],g=new i.MP3Parser,y=new a.MP4Mux({audioTrackId:0,videoTrackId:-1,tracks:[{codecId:f,channels:c,samplerate:u.rate,samplesize:l,timescale:d}]});if(y.ondata=function(e){return _.push(e)},g.onFrame=function(e){try{var t=new Uint8Array(e.length+1),r=f<<4;r|=u.id<<2,r|=(16===l?1:0)<<1,r|=2===c?1:0,t[0]=r,t.set(e,1);var n=0;y.pushPacket(p,t,n)}catch(e){o(e)}},g.push(e.data),g.close(),y.flush(),0===_.length)o(new Error("There was no output."));else{var v=_.shift();v?s({initData:v,data:n(_)}):o(new Error("No init data."))}}catch(e){o(e)}})}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=n.helpers.Promise;t.PassThrough={getInputFormat:function(){return{}},getOutputFormat:function(){return{}},transmux:function(e){return o.resolve(e)}}},function(e,t,r){"use strict";e.exports=function(){}},function(e,t,r){"use strict";var n=r(4),o={function:!0,object:!0};e.exports=function(e){return n(e)&&o[typeof e]||!1}},function(e,t,r){"use strict";var n=r(4),o=Array.prototype.forEach,i=Object.create,a=function(e,t){var r;for(r in e)t[r]=e[r]};e.exports=function(e){var t=i(null);return o.call(arguments,function(e){n(e)&&a(Object(e),t)}),t}},function(e,t,r){"use strict";var n=Object.create,o=Object.getPrototypeOf,i={};e.exports=function(){var e=Object.setPrototypeOf,t=arguments[0]||n;return"function"==typeof e&&o(e(t(null),i))===i}},function(e,t,r){"use strict";var n,o=r(18),i=r(1),a=Object.prototype.isPrototypeOf,s=Object.defineProperty,u={configurable:!0,enumerable:!1,writable:!0,value:void 0};n=function(e,t){if(i(e),null===t||o(t))return e;throw new TypeError("Prototype must be null or an object")},e.exports=function(e){var t,r;return e?(2===e.level?e.set?(r=e.set,t=function(e,t){return r.call(n(e,t),t),e}):t=function(e,t){return n(e,t).__proto__=t,e}:t=function e(t,r){var o;return n(t,r),o=a.call(e.nullPolyfill,t),o&&delete e.nullPolyfill.__proto__,null===r&&(r=e.nullPolyfill),t.__proto__=r,o&&s(e.nullPolyfill,"__proto__",u),t},Object.defineProperty(t,"level",{configurable:!1,enumerable:!1,writable:!1,value:e.level})):null}(function(){var e,t=Object.create(null),r={},n=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__");if(n){try{e=n.set,e.call(t,r)}catch(e){}if(Object.getPrototypeOf(t)===r)return{set:e,level:2}}return t.__proto__=r,Object.getPrototypeOf(t)===r?{level:2}:(t={},t.__proto__=r,Object.getPrototypeOf(t)===r&&{level:1})}()),r(56)},function(e,t,r){"use strict";e.exports=r(64)()?String.prototype.contains:r(65)},function(e,t,r){"use strict";var n=r(7),o=r(8),i=r(67),a=r(70),s=r(71),u=r(3).iterator;e.exports=function(e){return"function"==typeof s(e)[u]?e[u]():n(e)?new i(e):o(e)?new a(e):new i(e)}},function(e,t,r){"use strict";var n,o=r(42),i=r(10),a=r(2),s=r(1),u=r(6),l=r(41),c=r(3),d=Object.defineProperty,f=Object.defineProperties;e.exports=n=function(e,t){if(!(this instanceof n))throw new TypeError("Constructor requires 'new'");f(this,{__list__:u("w",s(e)),__context__:u("w",t),__nextIndex__:u("w",0)}),t&&(a(t.on),t.on("_add",this._onAdd),t.on("_delete",this._onDelete),t.on("_clear",this._onClear))},delete n.prototype.constructor,f(n.prototype,i({_next:u(function(){var e;if(this.__list__)return this.__redo__&&(e=this.__redo__.shift(),void 0!==e)?e:this.__nextIndex__<this.__list__.length?this.__nextIndex__++:void this._unBind()}),next:u(function(){return this._createResult(this._next())}),_createResult:u(function(e){return void 0===e?{done:!0,value:void 0}:{done:!1,value:this._resolve(e)}}),_resolve:u(function(e){return this.__list__[e]}),_unBind:u(function(){this.__list__=null,delete this.__redo__,this.__context__&&(this.__context__.off("_add",this._onAdd),this.__context__.off("_delete",this._onDelete),this.__context__.off("_clear",this._onClear),this.__context__=null)}),toString:u(function(){return"[object "+(this[c.toStringTag]||"Object")+"]"})},l({_onAdd:u(function(e){if(!(e>=this.__nextIndex__)){if(++this.__nextIndex__,!this.__redo__)return void d(this,"__redo__",u("c",[e]));this.__redo__.forEach(function(t,r){t>=e&&(this.__redo__[r]=++t)},this),this.__redo__.push(e)}}),_onDelete:u(function(e){var t;e>=this.__nextIndex__||(--this.__nextIndex__,this.__redo__&&(t=this.__redo__.indexOf(e),t!==-1&&this.__redo__.splice(t,1),this.__redo__.forEach(function(t,r){t>e&&(this.__redo__[r]=--t)},this)))}),_onClear:u(function(){this.__redo__&&o.call(this.__redo__),this.__nextIndex__=0})}))),d(n.prototype,c.iterator,u(function(){return this}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){this._playlist=e,this._url=t}return e.prototype.getPlaylist=function(){return this._playlist},e.prototype.getUrl=function(){return this._url},e}();t.InitData=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){this._playlist=e,this._url=t}return e.prototype.getPlaylist=function(){return this._playlist},e.prototype.getUrl=function(){return this._url},e}();t.Key=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this._url=e}return e.prototype.getUrl=function(){return this._url},e}();t.Playlist=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t,r){this._playlist=e,this._url=t,this._sequenceNumber=r}return e.prototype.getPlaylist=function(){return this._playlist},e.prototype.getUrl=function(){return this._url},e.prototype.getSequenceNumber=function(){return this._sequenceNumber},e}();t.Segment=n},function(e,t,r){"use strict";function n(e,t){return!(e.mimeType&&t.mimeType!==e.mimeType||e.audioCodec&&(!t.audioCodec||t.audioCodec.id!==e.audioCodec.id)||e.videoCodec&&(!t.videoCodec||t.videoCodec.id!==e.videoCodec.id))}Object.defineProperty(t,"__esModule",{value:!0}),t.isPartialMatch=n},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(5),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.getCode=function(){return"NO_DECRYPTOR"},t}(o.RetrievalError);t.NoDecryptorError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(5),i=function(e){function t(t){var r=e.call(this)||this;return r._details=t,r}return n(t,e),t.prototype.getDetails=function(){return this._details},t.prototype.getCode=function(){return"PLAYLIST_PARSE"},t}(o.RetrievalError);t.PlaylistParseError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(5),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype.getCode=function(){return"UNSUPPORTED_ENCRYPTION_ERROR"},t}(o.RetrievalError);t.UnsupportedEncryptionError=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(25),i=r(26),a=r(27),s=r(28);!function(e){e.InitData=o.InitData,e.Key=i.Key,e.Playlist=a.Playlist,e.Segment=s.Segment}(n=t.events||(t.events={}))},function(e,t,r){"use strict";function n(e,t,r){var n=e.getTimeRange();return r!==t&&(r>t?n.end>t&&n.start<r:n.end>t||n.start<r)}Object.defineProperty(t,"__esModule",{value:!0});var o,i=r(0),a=r(9),s=r(12),u=i.helpers.find,l=i.eventDispatcher.EventDispatcher,c=i.helpers.abortableJob.abortedError,d=i.helpers.abortableJob.AbortableJob,f=i.logger.prefixLogger,p=i.logger.noOpLogger;!function(e){e[e.RETRIEVING_SEGMENT=0]="RETRIEVING_SEGMENT",e[e.RETRIEVED_SEGMENT=1]="RETRIEVED_SEGMENT",e[e.RETRIEVING_DATA=2]="RETRIEVING_DATA",e[e.COMPLETE=3]="COMPLETE"}(o||(o={}));var h=function(){function e(e){this._onSegmentRequestQueued=new l,this._onSegmentRequestStart=new l,this._onSegmentRetrieved=new l,this._onSegmentRequestFailed=new l,this._onSegmentDecryptionStart=new l,this._onSegmentDecryptionEnd=new l,this._onSegmentTransmuxStart=new l,this._onSegmentTransmuxEnd=new l,this._onSegmentReady=new l,this._onError=new l,this._segments=[],this._retrievingSegment=null,this._timerId=null,this._dead=!1;var t=e.playlist,r=e.getPosition,n=e.maxBufferLength,o=e.cacheSize,i=e.transmuxer,a=e.logger,s=void 0===a?p:a;if(this._logger=f(s,"PlaylistSegmentRetriever"),t&&!t.hasRetrieveCompleted())throw new Error("Playlist retrieve has not completed.");if(n<0)throw new Error("Max buffer length must be > 0.");if(o<0)throw new Error("Cache size must be > 0.");this.onSegmentRequestQueued=this._onSegmentRequestQueued.getHandle(),this.onSegmentRequestStart=this._onSegmentRequestStart.getHandle(),this.onSegmentRetrieved=this._onSegmentRetrieved.getHandle(),this.onSegmentRequestFailed=this._onSegmentRequestFailed.getHandle(),this.onSegmentDecryptionStart=this._onSegmentDecryptionStart.getHandle(),this.onSegmentDecryptionEnd=this._onSegmentDecryptionEnd.getHandle(),this.onSegmentTransmuxStart=this._onSegmentTransmuxStart.getHandle(),this.onSegmentTransmuxEnd=this._onSegmentTransmuxEnd.getHandle(),this.onSegmentReady=this._onSegmentReady.getHandle(),this.onError=this._onError.getHandle(),this._playlist=t,this._transmuxer=i,this._getPosition=r,this._maxBufferLength=n,this._cacheSize=o,this.update()}return e.prototype.updateMaxBufferLength=function(e){if(this._ensureNotDead(),e<0)throw new Error("Max buffer length must be > 0.");this._logger.debug("updateMaxBufferLength() called.",e),this._maxBufferLength=e,this.update()},e.prototype.updateCacheSize=function(e){if(this._ensureNotDead(),e<0)throw new Error("Cache size must be > 0.");this._logger.debug("updateCacheSize() called.",e),this._cacheSize=e,this.update()},e.prototype.getCacheSize=function(){return this._cacheSize},e.prototype.getCacheUsage=function(){return this._segments.reduce(function(e,t){return t.state===o.COMPLETE?e+t.data.byteLength+(t.initData?t.initData.byteLength:0):e},0)},e.prototype.switchPlaylist=function(e){if(this._ensureNotDead(),e&&!e.hasRetrieveCompleted())throw new Error("Playlist retrieve has not completed.");this._logger.debug("switchPlaylist() called."),this._abortCurrentRetrieve(),this._playlist=e,this._segments=this._segments.filter(function(e){return e.state===o.COMPLETE}),this.update()},e.prototype.getSegmentsWithData=function(){return this._ensureNotDead(),this._segments.filter(function(e){return e.state===o.COMPLETE}).map(function(e){if(e.state!==o.COMPLETE)throw new Error("Unexpected error.");var t=e.segment,r=e.initData,n=e.data,i=e.eventRepresentation;return{segment:t,initData:r,data:n,eventRepresentation:i}})},e.prototype.update=function(){var e=this;this._ensureNotDead(),this._timerId&&(this._logger.debug("Cancelling update timer."),window.clearTimeout(this._timerId),this._timerId=null);var t=this._getPosition(),r=t,n=0;this._segments.some(function(e){if(e.state!==o.COMPLETE)return!1;var i=e.segment.getTimeRange();return i.containsTime(n)&&(n=i.end),!(i.end<t)&&(i.start>r||(r=i.end,!1))});var i=t+this._maxBufferLength,a=function(){var t=e._playlist;if(t){var o=t.hasEnded()&&r===t.getTotalDuration();if(o)return r=n,t.getTotalDuration()+n<i}return r<i}();if(!a)return this._abortCurrentRetrieve(),this._garbageCollect(t),void this._scheduleNextUpdate();var s=u(this._segments,function(e){if(e.state===o.RETRIEVED_SEGMENT||e.state===o.RETRIEVING_DATA){var t=e.segment.getTimeRange();return t.containsTime(r)}return!1});s?this._retrieveSegmentData(s):this._retrieveSegment(r),this._garbageCollect(t)},e.prototype.kill=function(){this._dead||(this._logger.debug("kill() called."),this._abortCurrentRetrieve(),this._dead=!0,this._timerId&&(this._logger.debug("Cancelling update timer."),window.clearTimeout(this._timerId)),this._segments=[],this._logger.debug("Killed."))},e.prototype._retrieveSegmentData=function(e){var t=this;if(e.state!==o.RETRIEVED_SEGMENT&&e.state!==o.RETRIEVING_DATA)throw new Error("Segment in incorrect state for data to be retrieved.");var r=this._retrievingSegment;if(!r||r.state!==o.RETRIEVING_DATA||e.segment!==r.segment){this._abortCurrentRetrieve();var n=new d(function(){var r=!1,n=e.segment.retrieveData();t._logger.debug("Retrieving segment data...");var o=n.whenComplete().then(function(e){var n=e.data,o=e.eventRepresentation;if(r)throw c;return t._logger.debug("Retrieved segment data."),t._onSegmentTransmuxStart.dispatch({segment:o}),t._transmuxer.transmux(n).then(function(e){var n=e.data,i=e.initData;if(r)throw c;return t._onSegmentTransmuxEnd.dispatch({segment:o}),t._logger.debug("Transmuxed segment."),{data:n,initData:i,eventRepresentation:o}})});return{result:o,abort:function(){r=!0,n.abort()}}},{storeResult:!1}).run();n.onCompletion(function(r){var n=r.initData,i=r.data,a=r.eventRepresentation;t._retrievingSegment=null,t._segments.splice(t._segments.indexOf(e),1,{state:o.COMPLETE,initData:n,data:i,eventRepresentation:a,segment:e.segment}),t._logger.debug("Segment retrieve completed.",a),t.update(),t._onSegmentReady.dispatch({segment:e.segment,initData:n,data:i,eventRepresentation:a})}),n.onError(function(e){e!==c&&(t._logger.error("Error retrieving segment data.",e),t._scheduleNextUpdate(),e instanceof a.OggParserError&&(e=e instanceof a.ChecksumFailedError?new s.OggParserError("CHECKSUM_FAILED"):e instanceof a.NoSegmentsInPageError?new s.OggParserError("NO_SEGMENTS_IN_PAGE"):e instanceof a.PageFromDifferentBitstreamError?new s.OggParserError("PAGE_FROM_DIFFERENT_BITSTREAM"):e instanceof a.PageSequenceNumberDidNotIncrementError?new s.OggParserError("SEQUENCE_NUMBER_DID_NOT_INCREMENT"):e instanceof a.UnexpectedBOSError?new s.OggParserError("UNEXPECTED_BOS"):e instanceof a.UnexpectedEOSError?new s.OggParserError("UNEXPECTED_EOS"):new s.OggParserError("UNKNOWN")),t._onError.dispatch(e))}),this._retrievingSegment={state:o.RETRIEVING_DATA,dataRetrieveJob:n,segment:e.segment}}},e.prototype._retrieveSegment=function(e){var t=this,r=this._retrievingSegment,n=this._playlist,i=n?n.getSegmentIndexContainingTime(e):null;if(!r||r.state!==o.RETRIEVING_SEGMENT||r.segmentIndex!==i)if(this._abortCurrentRetrieve(),n)if(null===i)this._scheduleNextUpdate();else{var a=n.getSegment(i);this._logger.debug("Retrieving segment.",i),a.onCompletion(function(e){t._logger.debug("Retrieved segment.",i),e.onSegmentRequestQueued.subscribe(t._onSegmentRequestQueued.dispatch),e.onSegmentRequestStart.subscribe(t._onSegmentRequestStart.dispatch),e.onSegmentRetrieved.subscribe(t._onSegmentRetrieved.dispatch),e.onSegmentRequestFailed.subscribe(t._onSegmentRequestFailed.dispatch),e.onSegmentDecryptionStart.subscribe(t._onSegmentDecryptionStart.dispatch),e.onSegmentDecryptionEnd.subscribe(t._onSegmentDecryptionEnd.dispatch),t._segments.splice(t._segments.indexOf(s),1);var r=e.getTimeRange(),n=t._segments.length;t._segments.some(function(e,t){return e.state!==o.RETRIEVING_SEGMENT&&e.segment.getTimeRange().start>r.start&&(n=t,!0)}),t._segments.splice(n,0,{state:o.RETRIEVED_SEGMENT,segment:e}),t._retrievingSegment=null,t.update()}),a.onError(function(e){e!==c&&(t._logger.error("Error retrieving segment.",e),t._scheduleNextUpdate(),t._onError.dispatch(e))});var s={state:o.RETRIEVING_SEGMENT,segmentIndex:i,segmentRetrieveJob:a};this._segments.push(s),this._retrievingSegment=s}else this._logger.debug("Cannot retrieve segment as there is no playlist."),this._scheduleNextUpdate()},e.prototype._abortCurrentRetrieve=function(){var e=this._retrievingSegment;e&&(e.state===o.RETRIEVING_SEGMENT?(this._logger.debug("Aborting segment retrieve job."),e.segmentRetrieveJob.abort()):e.state===o.RETRIEVING_DATA&&(this._logger.debug("Aborting segment data retrieve job."),e.dataRetrieveJob.abort()),this._retrievingSegment=null)},e.prototype._garbageCollect=function(e){var t=this._segments,r=this._cacheSize,i=this.getCacheUsage();if(!(i<=r)){var a=this._playlist,s=a&&a.hasEnded()?a.getTotalDuration():1/0,u=e+this._maxBufferLength;u>s&&(u-=s,u>=e)||t.filter(function(t){return t.state===o.COMPLETE&&!n(t.segment,e,u)}).map(function(t){if(t.state!==o.COMPLETE)throw new Error("Unexpected error.");var r=t.segment.getTimeRange(),n=r.start,i=Math.min(Math.abs(e-n),n+s-e);return{segment:t,distance:i,size:t.data.byteLength+(t.initData?t.initData.byteLength:0)}}).sort(function(e,t){return t.distance-e.distance}).some(function(e){return i<=r||(t.splice(t.indexOf(e.segment),1),i-=e.size,!1)})}},e.prototype._scheduleNextUpdate=function(){var e=this;this._timerId||(this._timerId=window.setTimeout(function(){e._timerId=null,e.update()},1e3))},e.prototype._ensureNotDead=function(){if(this._dead)throw new Error("Playlist segment retriever has been killed.")},e}();t.PlaylistSegmentRetriever=h},function(e,t,r){"use strict";function n(e){return 0===e.indexOf('"')&&e.lastIndexOf('"')===e.length-1?e.slice(1,-1):e}function o(e){0===e.indexOf("0x")&&(e=e.substr(2));var t=new Uint16Array(8);if(e.length%4!==0)throw new p.PlaylistParseError("Failed to parse IV (length is not multiple of 4).");for(var r=0;r<e.length;r+=4){var n=parseInt(e.substr(r,4),16);if(isNaN(n))throw new p.PlaylistParseError("Failed to parse hex number in IV string.");t[r/4]=n}return new Uint8Array(t)}function i(e){for(var t=new Uint8Array(16),r=12;r<16;r++)t[r]=e>>8*(15-r)&255;return t}function a(e){return!(e>=400&&e<500)}function s(e){var t={};k.lastIndex=0;for(var r;null!==(r=k.exec(e));){var o=r[1].trim().toLowerCase(),i=n(r[2].trim());t[o]=i}return t}Object.defineProperty(t,"__esModule",{value:!0});var u,l=r(0),c=r(9),d=r(14),f=r(13),p=r(31),h=r(32),_=r(27),g=r(26),y=r(25),v=r(12),m=l.helpers.abortableJob.AbortableJob,E=l.helpers.deferred.buildDeferred,b=l.helpers.cache.buildCache,w=l.helpers.retry,S=w.retry,P=w.buildExponentialDelayCalculator,R=l.helpers.Promise,T=l.helpers.find,x=l.helpers.url,A=l.eventDispatcher.EventDispatcher,O=l.logger.prefixLogger,M=l.logger.noOpLogger,D=/(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(MAP):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT(INF): *(\d+(?:\.\d+)?)(?:,(.*))?)|(?:(?!#)()(\S.+))|(?:#EXT-X-(BYTERANGE): *(\d+(?:@\d+(?:\.\d+)?)?)|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(PROGRAM-DATE-TIME):(.+))|(?:#EXT-X-(VERSION):(\d+))|(?:(#)(.*):(.*))|(?:(#)(.*)))(?:.*)\r?\n?/g,k=/(.+?)=(.+?)(?:,|$)/g,I=/^\d*(\.\d+)?$/;!function(e){e[e.NONE=0]="NONE",e[e.AES_128=1]="AES_128",e[e.SAMPLE_AES=2]="SAMPLE_AES"}(u||(u={}));var C;!function(e){e[e.VOD=0]="VOD",e[e.LIVE=1]="LIVE",e[e.EVENT=2]="EVENT"}(C=t.PlaylistType||(t.PlaylistType={}));var L=function(){function e(e){var t=e.url,r=e.playlistLoader,n=e.segmentLoader,o=e.keyLoader,i=void 0===o?null:o,s=e.segmentFormat,u=e.logger,l=void 0===u?M:u,c=e.delayCalculator,d=void 0===c?P():c,p=e.keyDelayCalculator,h=void 0===p?P():p,g=e.segmentDelayCalculator,y=e.isPlaylistResponseCodeAcceptable,v=void 0===y?function(e){return 200===e}:y,w=e.isPlaylistResponseCodeRetryable,T=void 0===w?a:w,x=e.isSegmentResponseCodeAcceptable,D=void 0===x?function(e){
return 200===e}:x,k=e.isSegmentResponseCodeRetryable,I=void 0===k?a:k,C=e.isKeyResponseCodeAcceptable,L=void 0===C?function(e){return 200===e}:C,j=e.isKeyResponseCodeRetryable,N=void 0===j?a:j,U=this;this._keyRetrievalJobsCache=b(),this._initDataRetrievalJobsCache=b(),this._data=null,this._playlistEventRepresentation=null,this._onPlaylistRequestQueued=new A,this._onPlaylistRequestStart=new A,this._onPlaylistRetrieved=new A,this._onPlaylistRequestFailed=new A,this._onPlaylistParseStart=new A,this._onPlaylistParseEnd=new A,this._onKeyRequestQueued=new A,this._onKeyRequestStart=new A,this._onKeyRetrieved=new A,this._onKeyRequestFailed=new A,this._onInitDataRequestQueued=new A,this._onInitDataRequestStart=new A,this._onInitDataRetrieved=new A,this._onInitDataRequestFailed=new A,this._logger=O(l,"Playlist"),this.onPlaylistRequestQueued=this._onPlaylistRequestQueued.getHandle(),this.onPlaylistRequestStart=this._onPlaylistRequestStart.getHandle(),this.onPlaylistRetrieved=this._onPlaylistRetrieved.getHandle(),this.onPlaylistRequestFailed=this._onPlaylistRequestFailed.getHandle(),this.onPlaylistParseStart=this._onPlaylistParseStart.getHandle(),this.onPlaylistParseEnd=this._onPlaylistParseEnd.getHandle(),this.onKeyRequestQueued=this._onKeyRequestQueued.getHandle(),this.onKeyRequestStart=this._onKeyRequestStart.getHandle(),this.onKeyRetrieved=this._onKeyRetrieved.getHandle(),this.onKeyRequestFailed=this._onKeyRequestFailed.getHandle(),this.onInitDataRequestQueued=this._onInitDataRequestQueued.getHandle(),this.onInitDataRequestStart=this._onInitDataRequestStart.getHandle(),this.onInitDataRetrieved=this._onInitDataRetrieved.getHandle(),this.onInitDataRequestFailed=this._onInitDataRequestFailed.getHandle(),this._url=t,this._playlistLoader=r,this._segmentLoader=n,this._keyLoader=i,this._segmentFormat=s,this._keyDelayCalculator=h,this._isPlaylistResponseCodeAcceptable=v,this._isPlaylistResponseCodeRetryable=T,this._isSegmentResponseCodeAcceptable=D,this._isSegmentResponseCodeRetryable=I,this._isKeyOrInitDataResponseCodeAcceptable=L,this._isKeyOrInitDataResponseCodeRetryable=N,this._segmentDelayCalculator=g,this._downloadAbortableJob=new m(function(){var e=S(function(){return new m(function(){var e=new _.Playlist(t);U._onPlaylistRequestQueued.dispatch({playlist:e});var r=U._playlistLoader.request({url:t});r.whenRequestStarted.then(function(){U._onPlaylistRequestStart.dispatch({playlist:e})}),U._logger.debug("Requesting playlist.",t);var n=r.getResponse().then(function(r){if(!r)return U._logger.warn("Playlist request timed out.",t),U._onPlaylistRequestFailed.dispatch({playlist:e,statusCode:null}),{success:!1};var n=r.statusCode;if(U._isPlaylistResponseCodeAcceptable(n)){var o=r.data;return o?(U._logger.debug("Got playlist response.",t,n),U._onPlaylistRetrieved.dispatch({playlist:e,statusCode:n}),{success:!0,result:{playlistContent:o,eventRepresentation:e}}):(U._logger.warn("Playlist response contained no data.",t,n),U._onPlaylistRequestFailed.dispatch({playlist:e,statusCode:n}),{success:!1})}return U._isPlaylistResponseCodeRetryable(n)?(U._logger.debug("Playlist response code was not acceptable. Will retry.",t,n),U._onPlaylistRequestFailed.dispatch({playlist:e,statusCode:n}),{success:!1}):(U._logger.debug("Playlist response code was not acceptable.",t,n),U._onPlaylistRequestFailed.dispatch({playlist:e,statusCode:n}),R.reject(new f.UnacceptableResponseStatusCodeError(n)))});return{result:n,abort:function(){U._logger.debug("Aborting playlist request.",t),r.abort(),U._onPlaylistRequestFailed.dispatch({playlist:e,aborted:!0})}}})},d);return{result:e.whenComplete(),abort:function(){return e.abort()}}},{storeResult:!1}),this._retrieveJob=new m(function(){var e=U._downloadAbortableJob.run(),t=E();return e.onCompletion(function(e){var r=e.playlistContent,n=e.eventRepresentation;U._onPlaylistParseStart.dispatch({playlist:n});try{U._data=U._parsePlaylist(r)}catch(e){return U._logger.error("Error when parsing playlist.",e,r),void t.reject(e)}U._playlistEventRepresentation=n,U._onPlaylistParseEnd.dispatch({playlist:n}),t.resolve(void 0)}),e.onError(t.reject),{result:t.promise,abort:function(){return e.abort()}}},{storeResult:!1})}return e.prototype.retrieve=function(){return this._retrieveJob.run()},e.prototype.hasRetrieveCompleted=function(){return!!this._data},e.prototype.getStartingSequenceNumber=function(){if(!this._data)throw new Error("Not loaded yet.");return this._data.mediaSequence},e.prototype.getType=function(){if(!this._data)throw new Error("Not loaded yet.");return this._data.type},e.prototype.getTargetDuration=function(){if(!this._data)throw new Error("Not loaded yet.");return this._data.targetDuration},e.prototype.getTotalDuration=function(){if(!this._data)throw new Error("Not loaded yet.");return this._data.totalDuration},e.prototype.hasEnded=function(){if(!this._data)throw new Error("Not loaded yet.");return this._data.ended},e.prototype.getSegmentCount=function(){if(!this._data)throw new Error("Not loaded yet.");return this._data.segments.length},e.prototype.getSegment=function(e){return this.getSegments(e,e+1)[0]},e.prototype.getSegments=function(e,t){var r=this,n=this._data;if(!n)throw new Error("Not loaded yet.");var o=n.mediaSequence;void 0===e&&(e=o);var i=n.segments.length;if(void 0===t&&(t=o+i),e<o)throw new Error("Start index must be >= the first segment index.");if(t<o)throw new Error("End index must be >= the first segment index.");if(t>o+i)throw new Error("End index cannot be > than the index of the last segment.");if(t<e)throw new Error("End index must be >= start index.");return n.segments.slice(e-o,t-o).map(function(t,n){var o=new m(function(){var o=t.encryptionData,i=e+n,a=r._playlistEventRepresentation;if(!a)throw new Error("Playlist event representation should exist.");var s=r._buildEncryptionConfig(o,i),u=t.initDataUrl?r._retrieveInitData(t.initDataUrl):null,l=s.whenComplete().then(function(e){var n=function(n){return new d.Segment({url:t.url,sequenceNumber:i,playlist:r,timeRange:t.timeRange,format:r._segmentFormat,loader:r._segmentLoader,playlistEventRepresentation:a,logger:r._logger,delayCalculator:r._segmentDelayCalculator,isResponseCodeAcceptable:r._isSegmentResponseCodeAcceptable,isResponseCodeRetryable:r._isSegmentResponseCodeRetryable,encryptionConfig:e,initData:n})};return u?u.whenComplete().then(function(e){return n(e)}):n(void 0)}).catch(function(e){throw e instanceof c.OggParserError?e instanceof c.ChecksumFailedError?new v.OggParserError("CHECKSUM_FAILED"):e instanceof c.NoSegmentsInPageError?new v.OggParserError("NO_SEGMENTS_IN_PAGE"):e instanceof c.PageFromDifferentBitstreamError?new v.OggParserError("PAGE_FROM_DIFFERENT_BITSTREAM"):e instanceof c.PageSequenceNumberDidNotIncrementError?new v.OggParserError("SEQUENCE_NUMBER_DID_NOT_INCREMENT"):e instanceof c.UnexpectedBOSError?new v.OggParserError("UNEXPECTED_BOS"):e instanceof c.UnexpectedEOSError?new v.OggParserError("UNEXPECTED_EOS"):new v.OggParserError("UNKNOWN"):e});return{result:l,abort:function(){s.abort(),u&&u.abort()}}},{storeResult:!1});return o.run()})},e.prototype.getSegmentIndexContainingTime=function(e){var t=this._data;if(!t)throw new Error("Not loaded yet.");var r=T(t.segments,function(t){return t.timeRange.containsTime(e)});return r?t.mediaSequence+t.segments.indexOf(r):null},e.prototype._buildEncryptionConfig=function(e,t){var r=this,n=new m(function(){if(e.method===u.NONE)return{result:R.resolve(void 0)};if(e.method!==u.AES_128)return r._logger.error("Unsupported encryption method.",e.method),{result:R.reject(new h.UnsupportedEncryptionError)};var n=r._keyLoader;if(!n)return{result:R.reject(new Error("Encryption method not supported as no key loader provided."))};var o=r._retrieveKey(e.keyUrl),a=o.whenComplete().then(function(r){return{cipher:"AES-CBC",key:r,iv:e.iv||i(t)}});return{result:a,abort:function(){return o.abort()}}});return n.run()},e.prototype._retrieveKey=function(e){var t=this,r=this._keyLoader;if(!r)throw new Error("No key loader.");var n=this._playlistEventRepresentation;if(!n)throw new Error("Playlist event representation should exist.");var o=new g.Key(n,e);return this._retrieveKeyOrInitData({url:e,loader:r,cache:this._keyRetrievalJobsCache,onRequestQueued:function(){return t._onKeyRequestQueued.dispatch({key:o})},onRequestStart:function(){return t._onKeyRequestStart.dispatch({key:o})},onRequestTimedOut:function(){t._onKeyRequestFailed.dispatch({key:o,statusCode:null})},onRequestFailed:function(e){t._onKeyRequestFailed.dispatch({key:o,statusCode:e})},onRequestAborted:function(){t._onKeyRequestFailed.dispatch({key:o,aborted:!0})},onRetrieved:function(e){t._onKeyRetrieved.dispatch({key:o,statusCode:e})},type:"key"})},e.prototype._retrieveInitData=function(e){var t=this,r=this._playlistEventRepresentation;if(!r)throw new Error("Playlist event representation should exist.");var n=new y.InitData(r,e);return this._retrieveKeyOrInitData({url:e,loader:this._segmentLoader,cache:this._initDataRetrievalJobsCache,onRequestQueued:function(){return t._onInitDataRequestQueued.dispatch({initData:n})},onRequestStart:function(){return t._onInitDataRequestStart.dispatch({initData:n})},onRequestTimedOut:function(){t._onInitDataRequestFailed.dispatch({initData:n,statusCode:null})},onRequestFailed:function(e){t._onInitDataRequestFailed.dispatch({initData:n,statusCode:e})},onRequestAborted:function(){t._onInitDataRequestFailed.dispatch({initData:n,aborted:!0})},onRetrieved:function(e){t._onInitDataRetrieved.dispatch({initData:n,statusCode:e})},type:"init data"})},e.prototype._retrieveKeyOrInitData=function(e){var t=this,r=e.url,n=e.loader,o=e.cache,i=e.onRequestQueued,a=e.onRequestStart,s=e.onRequestTimedOut,u=e.onRequestFailed,l=e.onRequestAborted,c=e.onRetrieved,d=e.type,p=o.get(r);return p?this._logger.debug(d+" retrieval already in progress.",r):(p=new m(function(){var e=S(function(){return new m(function(){i();var e=n.request({url:r});e.whenRequestStarted.then(function(){return a()}),t._logger.debug("Retrieving "+d+".",r);var o=e.getResponse().then(function(e){if(!e)return t._logger.warn(d+" request timed out.",r),s(),{success:!1};var n=e.statusCode;if(t._isKeyOrInitDataResponseCodeAcceptable(n)){var o=e.data;return o?(t._logger.debug("Got "+d+" response.",r,n),c(n),{success:!0,result:new Uint8Array(o)}):(t._logger.warn(d+" response contained no data.",r,n),u(n),{success:!1})}return t._isKeyOrInitDataResponseCodeRetryable(n)?(t._logger.warn(d+" response code was not acceptable. Will retry.",r,n),u(n),{success:!1}):(t._logger.warn(d+" response code was not acceptable.",r,n),u(n),R.reject(new f.UnacceptableResponseStatusCodeError(n)))});return{result:o,abort:function(){t._logger.debug("Aborting "+d+" request.",r),e.abort(),l()}}})},t._keyDelayCalculator);return{result:e.whenComplete(),abort:function(){return e.abort()}}},{storeResult:!1}),o.set(r,p)),p.run()},e.prototype._parsePlaylist=function(e){var t={version:null,type:C.LIVE,mediaSequence:null,targetDuration:null,totalDuration:0,ended:!1},r=[],n={method:u.NONE},i=null,a=null;D.lastIndex=0;for(var c,d=0,f=!1;null!==(c=D.exec(e));){var h=c.filter(function(e,t){return 0!==t&&void 0!==e}).map(function(e,t){return 0===t?e.toLowerCase():e}),_=h[0],g=h.slice(1);if(0===d){if("extm3u"!==_)throw new p.PlaylistParseError("First line did not contain EXTM3U tag.")}else{if(!f)switch(_){case"playlist-type":if(t.type!==C.LIVE)throw new p.PlaylistParseError("Already have playlist type.");switch(g[0].toLowerCase()){case"vod":t.type=C.VOD;break;case"event":t.type=C.EVENT;break;default:throw new p.PlaylistParseError("Invalid playlist type.")}break;case"media-sequence":if(null!==t.mediaSequence)throw new p.PlaylistParseError("Already have media sequence number.");var y=parseInt(g[0],10);if(y+""!==g[0])throw new p.PlaylistParseError("Invalid media sequence number.");t.mediaSequence=y;break;case"targetduration":if(null!==t.targetDuration)throw new p.PlaylistParseError("Already have target duration.");var v=parseInt(g[0],10);if(v+""!==g[0]||v<0)throw new p.PlaylistParseError("Invalid target duration.");t.targetDuration=1e3*v;break;case"version":if(null!==t.version)throw new p.PlaylistParseError("Already have version.");var m=parseInt(g[0],10);if(m+""!==g[0])throw new p.PlaylistParseError("Invalid version.");if(m<3)throw new p.PlaylistParseError("HLS version must be 3 or above.");t.version=m;break;default:f=!0}if(f)switch(_){case"key":var E=s(g[0]),b="method"in E?E.method.toLowerCase():null,w="uri"in E?x.buildAbsoluteUrl(this._url,E.uri):null,S="iv"in E?o(E.iv):null;if(!b)throw new p.PlaylistParseError("Missing encryption method.");if(!w&&"none"!==b)throw new p.PlaylistParseError("Missing key url.");switch(b){case"none":if(null!==w)throw new p.PlaylistParseError("Key url not allowed.");if(null!==S)throw new p.PlaylistParseError("IV not allowed.");n={method:u.NONE};break;case"aes-128":if(!w)throw new p.PlaylistParseError("Key url required.");n={method:u.AES_128,keyUrl:w,iv:S};break;case"sample-aes":if(!w)throw new p.PlaylistParseError("Key url required.");n={method:u.SAMPLE_AES,keyUrl:w,iv:S};break;default:throw new p.PlaylistParseError("Unknown encryption method.")}break;case"map":var E=s(g[0]);if(!("uri"in E))throw new p.PlaylistParseError("URI missing from EXT-X-MAP tag.");if("byterange"in E)throw new p.PlaylistParseError("BYTERANGE in EXT-X-MAP tag is currently unsupported.");i=E.uri?x.buildAbsoluteUrl(this._url,E.uri):null;break;case"inf":if(!g[0].match(I))throw new p.PlaylistParseError("Invalid segment duration.");a=1e3*parseFloat(g[0]);break;case"":if(t.ended)throw new p.PlaylistParseError("Already received ENDLIST tag.");if(null===a)throw new p.PlaylistParseError("Not received segment duration.");var P=x.buildAbsoluteUrl(this._url,g[0]);r.push({url:P,timeRange:new l.TimeRange(t.totalDuration,a),initDataUrl:i,encryptionData:n}),t.totalDuration+=a,a=null;break;case"endlist":if(t.ended)throw new p.PlaylistParseError("Already had ENDLIST tag.");t.ended=!0;break;default:this._logger.warn("Unable to parse playlist line.",_)}}d++}var R=t.version,T=t.type,A=t.mediaSequence,O=t.targetDuration,M=t.ended,k=t.totalDuration;if(null===R)throw new p.PlaylistParseError("Missing version.");if(null===O)throw new p.PlaylistParseError("Missing target duration.");if(M&&T===C.LIVE)throw new p.PlaylistParseError("Cannot be ended if type is LIVE.");if(!M&&T===C.VOD)throw new p.PlaylistParseError("Must be ended if type is VOD.");return null===A&&(A=0),{version:R,type:T,mediaSequence:A,targetDuration:O,totalDuration:k,ended:M,segments:r}},e}();t.Playlist=L},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(30),i=r(31),a=r(12),s=r(5),u=r(13),l=r(32);!function(e){e.NoDecryptorError=o.NoDecryptorError,e.PlaylistParseError=i.PlaylistParseError,e.OggParserError=a.OggParserError,e.RetrievalError=s.RetrievalError,e.UnacceptableResponseStatusCodeError=u.UnacceptableResponseStatusCodeError,e.UnsupportedEncryptionError=l.UnsupportedEncryptionError}(n=t.retrievalErrors||(t.retrievalErrors={}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(29),o=r(88);t.TransmuxerFactory={retrieveTransmuxers:function(e,t){return o.default.filter(function(r){var o=r.getInputFormat(),i=r.getOutputFormat();return(!e||n.isPartialMatch(o,e))&&(!t||n.isPartialMatch(i,t))})},retrieveTransmuxer:function(e,r){return t.TransmuxerFactory.retrieveTransmuxers(e,r)[0]||null}}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}t.__esModule=!0;var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.AESDecryptor=function(){function e(){n(this,e),this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[],this.subMix[0]=new Uint32Array(256),this.subMix[1]=new Uint32Array(256),this.subMix[2]=new Uint32Array(256),this.subMix[3]=new Uint32Array(256),this.invSubMix=[],this.invSubMix[0]=new Uint32Array(256),this.invSubMix[1]=new Uint32Array(256),this.invSubMix[2]=new Uint32Array(256),this.invSubMix[3]=new Uint32Array(256),this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.initTable()}return o(e,[{key:"uint8ArrayToUint32Array_",value:function(e){for(var t=new DataView(e),r=new Uint32Array(4),n=0;n<r.length;n++)r[n]=t.getUint32(4*n);return r}},{key:"initTable",value:function(){var e=this.sBox,t=this.invSBox,r=this.subMix[0],n=this.subMix[1],o=this.subMix[2],i=this.subMix[3],a=this.invSubMix[0],s=this.invSubMix[1],u=this.invSubMix[2],l=this.invSubMix[3],c=new Uint32Array(256),d=0,f=0,p=0;for(p=0;p<256;p++)p<128?c[p]=p<<1:c[p]=p<<1^283;for(p=0;p<256;p++){var h=f^f<<1^f<<2^f<<3^f<<4;h=h>>>8^255&h^99,e[d]=h,t[h]=d;var _=c[d],g=c[_],y=c[g],v=257*c[h]^16843008*h;r[d]=v<<24|v>>>8,n[d]=v<<16|v>>>16,o[d]=v<<8|v>>>24,i[d]=v,v=16843009*y^65537*g^257*_^16843008*d,a[h]=v<<24|v>>>8,s[h]=v<<16|v>>>16,u[h]=v<<8|v>>>24,l[h]=v,d?(d=_^c[c[c[y^_]]],f^=c[c[f]]):d=f=1}}},{key:"expandKey",value:function(e){for(var t=this.uint8ArrayToUint32Array_(e),r=!0,n=0;n<t.length&&r;)r=t[n]===this.key[n],n++;if(!r){this.key=t;var o=this.keySize=t.length;if(4!==o&&6!==o&&8!==o)throw new Error("Invalid aes key size="+o);var i=this.ksRows=4*(o+6+1),a=void 0,s=void 0,u=this.keySchedule=new Uint32Array(this.ksRows),l=this.invKeySchedule=new Uint32Array(this.ksRows),c=this.sBox,d=this.rcon,f=this.invSubMix[0],p=this.invSubMix[1],h=this.invSubMix[2],_=this.invSubMix[3],g=void 0,y=void 0;for(a=0;a<i;a++)a<o?g=u[a]=t[a]:(y=g,a%o===0?(y=y<<8|y>>>24,y=c[y>>>24]<<24|c[y>>>16&255]<<16|c[y>>>8&255]<<8|c[255&y],y^=d[a/o|0]<<24):o>6&&a%o===4&&(y=c[y>>>24]<<24|c[y>>>16&255]<<16|c[y>>>8&255]<<8|c[255&y]),u[a]=g=(u[a-o]^y)>>>0);for(s=0;s<i;s++)a=i-s,y=3&s?u[a]:u[a-4],s<4||a<=4?l[s]=y:l[s]=f[c[y>>>24]]^p[c[y>>>16&255]]^h[c[y>>>8&255]]^_[c[255&y]],l[s]=l[s]>>>0}}},{key:"networkToHostOrderSwap",value:function(e){return e<<24|(65280&e)<<8|(16711680&e)>>8|e>>>24}},{key:"decrypt",value:function(e,t,r){for(var n,o,i=this.keySize+6,a=this.invKeySchedule,s=this.invSBox,u=this.invSubMix[0],l=this.invSubMix[1],c=this.invSubMix[2],d=this.invSubMix[3],f=this.uint8ArrayToUint32Array_(r),p=f[0],h=f[1],_=f[2],g=f[3],y=new Int32Array(e),v=new Int32Array(y.length),m=void 0,E=void 0,b=void 0,w=void 0,S=void 0,P=void 0,R=void 0,T=void 0,x=void 0,A=void 0,O=void 0,M=void 0;t<y.length;){for(x=this.networkToHostOrderSwap(y[t]),A=this.networkToHostOrderSwap(y[t+1]),O=this.networkToHostOrderSwap(y[t+2]),M=this.networkToHostOrderSwap(y[t+3]),S=x^a[0],P=M^a[1],R=O^a[2],T=A^a[3],n=4,o=1;o<i;o++)m=u[S>>>24]^l[P>>16&255]^c[R>>8&255]^d[255&T]^a[n],E=u[P>>>24]^l[R>>16&255]^c[T>>8&255]^d[255&S]^a[n+1],b=u[R>>>24]^l[T>>16&255]^c[S>>8&255]^d[255&P]^a[n+2],w=u[T>>>24]^l[S>>16&255]^c[P>>8&255]^d[255&R]^a[n+3],S=m,P=E,R=b,T=w,n+=4;m=s[S>>>24]<<24^s[P>>16&255]<<16^s[R>>8&255]<<8^s[255&T]^a[n],E=s[P>>>24]<<24^s[R>>16&255]<<16^s[T>>8&255]<<8^s[255&S]^a[n+1],b=s[R>>>24]<<24^s[T>>16&255]<<16^s[S>>8&255]<<8^s[255&P]^a[n+2],w=s[T>>>24]<<24^s[S>>16&255]<<16^s[P>>8&255]<<8^s[255&R]^a[n+3],n+=3,v[t]=this.networkToHostOrderSwap(m^p),v[t+1]=this.networkToHostOrderSwap(w^h),v[t+2]=this.networkToHostOrderSwap(b^_),v[t+3]=this.networkToHostOrderSwap(E^g),p=x,h=A,_=O,g=M,t+=4}return v.buffer}},{key:"destroy",value:function(){this.key=void 0,this.keySize=void 0,this.ksRows=void 0,this.sBox=void 0,this.invSBox=void 0,this.subMix=void 0,this.invSubMix=void 0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.rcon=void 0}}]),e}()},function(e,t,r){"use strict";function n(){this.buffer=null,this.bufferSize=0}t.__esModule=!0,t.MP3Parser=n;var o=[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],i=[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3];n.prototype.push=function(e){var t;if(this.bufferSize>0){var r=e.length+this.bufferSize;if(!this.buffer||this.buffer.length<r){var n=new Uint8Array(r);this.bufferSize>0&&n.set(this.buffer.subarray(0,this.bufferSize)),this.buffer=n}this.buffer.set(e,this.bufferSize),this.bufferSize=r,e=this.buffer,t=r}else t=e.length;for(var o,i=0;i<t&&(o=this._parse(e,i,t))>0;)i+=o;var a=t-i;a>0&&(!this.buffer||this.buffer.length<a?this.buffer=new Uint8Array(e.subarray(i,t)):this.buffer.set(e.subarray(i,t))),this.bufferSize=a},n.prototype._parse=function(e,t,r){if(t+2>r)return-1;if(255===e[t]||224===(224&e[t+1])){if(t+24>r)return-1;var n=e[t+1]>>3&3,a=e[t+1]>>1&3,s=e[t+2]>>4&15,u=e[t+2]>>2&3,l=!!(2&e[t+2]);if(1!==n&&0!==s&&15!==s&&3!==u){var c=3===n?3-a:3===a?3:4,d=1e3*o[14*c+s-1],f=3===n?0:2===n?1:2,p=i[3*f+u],h=l?1:0,_=3===a?(3===n?12:6)*d/p+h<<2:(3===n?144:72)*d/p+h|0;return t+_>r?-1:(this.onFrame&&this.onFrame(e.subarray(t,t+_)),_)}}for(var g=t+2;g<r;){if(255===e[g-1]&&224===(224&e[g]))return this.onNoise&&this.onNoise(e.subarray(t,g-1)),g-t-1;g++}return-1},n.prototype.close=function(){this.bufferSize>0&&this.onNoise&&this.onNoise(this.buffer.subarray(0,this.bufferSize)),this.buffer=null,this.bufferSize=0,this.onClose&&this.onClose()}},function(e,t,r){"use strict";t.__esModule=!0;var n,o,i=function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)};!function(e){var t;!function(e){function t(e){for(var t=new Uint8Array(4*e.length),r=0,n=0,o=e.length;n<o;n++){var i=e.charCodeAt(n);if(i<=127)t[r++]=i;else{if(55296<=i&&i<=56319){var a=e.charCodeAt(n+1);56320<=a&&a<=57343&&(i=((1023&i)<<10)+(1023&a)+65536,++n)}0!==(4292870144&i)?(t[r++]=248|i>>>24&3,t[r++]=128|i>>>18&63,t[r++]=128|i>>>12&63,t[r++]=128|i>>>6&63,t[r++]=128|63&i):0!==(4294901760&i)?(t[r++]=240|i>>>18&7,t[r++]=128|i>>>12&63,t[r++]=128|i>>>6&63,t[r++]=128|63&i):0!==(4294965248&i)?(t[r++]=224|i>>>12&15,t[r++]=128|i>>>6&63,t[r++]=128|63&i):(t[r++]=192|i>>>6&31,t[r++]=128|63&i)}}return t.subarray(0,r)}function r(e){for(var t=0,r="";t<e.length;){var n=255&e[t++];if(n<=127)r+=String.fromCharCode(n);else{var o=192,i=5;do{var a=o>>1|128;if((n&a)===o)break;o=o>>1|128,--i}while(i>=0);if(i<=0)throw new Error("Invalid UTF8 character");for(var s=n&(1<<i)-1,u=5;u>=i;--u){var l=e[t++];if(128!==(192&l))throw new Error("Invalid UTF8 character sequence");s=s<<6|63&l}r+=s>=65536?String.fromCharCode(s-65536>>10&1023|55296,1023&s|56320):String.fromCharCode(s)}}return r}e.utf8decode=t,e.utf8encode=r}(t=e.StringUtilities||(e.StringUtilities={}))}(o||(o={})),function(e){var t;!function(e){function t(e){for(var t=e.length>>1,r=new Uint8Array(t),n=0;n<t;n++)r[n]=parseInt(e.substr(2*n,2),16);return r}function r(e){var t,r=0,n=a.RAW,o=e[r],i=o>>4,d=o>>2&3,f=2&o?16:8,p=1&o?2:1;switch(r++,i){case c:var h=e[r++];n=h,t=1024;break;case l:var _=e[r+1]>>3&3,g=e[r+1]>>1&3;t=1===g?3===_?1152:576:3===g?384:1152}return{codecDescription:u[i],codecId:i,data:e.subarray(r),rate:s[d],size:f,channels:p,samples:t,packetType:n}}function n(e){var t=0,r=e[t]>>4,n=15&e[t];t++;var o={frameType:r,codecId:n,codecDescription:f[n]};switch(n){case h:var i=e[t++];o.packetType=i,o.compositionTime=(e[t]<<24|e[t+1]<<16|e[t+2]<<8)>>8,t+=3;break;case p:o.packetType=_.NALU,o.horizontalOffset=e[t]>>4&15,o.verticalOffset=15&e[t],o.compositionTime=0,t++}return o.data=e.subarray(t),o}function o(e){var t,r,n=[],o=-1,i=-1,a=+e.asGetPublicProperty("duration"),s=e.asGetPublicProperty("audiocodecid");switch(s){case l:case"mp3":t="mp3",r=l;break;case c:case"mp4a":t="mp4a",r=c;break;default:if(!isNaN(s))throw new Error("Unsupported audio codec: "+s);t=null,r=-1}var u,d,f=e.asGetPublicProperty("videocodecid");switch(f){case p:case"vp6f":u="vp6f",d=p;break;case h:case"avc1":u="avc1",d=h;break;default:if(!isNaN(f))throw new Error("Unsupported video codec: "+f);u=null,d=-1}var _=null===t?null:{codecDescription:t,codecId:r,language:"und",timescale:+e.asGetPublicProperty("audiosamplerate")||44100,samplerate:+e.asGetPublicProperty("audiosamplerate")||44100,channels:+e.asGetPublicProperty("audiochannels")||2,samplesize:16},g=null===u?null:{codecDescription:u,codecId:d,language:"und",timescale:6e4,framerate:+e.asGetPublicProperty("videoframerate")||+e.asGetPublicProperty("framerate"),width:+e.asGetPublicProperty("width"),height:+e.asGetPublicProperty("height")},y=e.asGetPublicProperty("trackinfo");if(y)for(var v=0;v<y.length;v++){var m=y[v],E=m.asGetPublicProperty("sampledescription")[0];E.asGetPublicProperty("sampletype")===s?(_.language=m.asGetPublicProperty("language"),_.timescale=+m.asGetPublicProperty("timescale")):E.asGetPublicProperty("sampletype")===f&&(g.language=m.asGetPublicProperty("language"),g.timescale=+m.asGetPublicProperty("timescale"))}return g&&(i=n.length,n.push(g)),_&&(o=n.length,n.push(_)),{tracks:n,duration:a,audioTrackId:o,videoTrackId:i}}function i(e){var t=[];return e.audioTrackId>=0&&t.push({tracks:[e.tracks[e.audioTrackId]],duration:e.duration,audioTrackId:0,videoTrackId:-1}),e.videoTrackId>=0&&t.push({tracks:[e.tracks[e.videoTrackId]],duration:e.duration,audioTrackId:-1,videoTrackId:0}),t}var a,s=[5500,11025,22050,44100],u=["PCM","ADPCM","MP3","PCM le","Nellymouser16","Nellymouser8","Nellymouser","G.711 A-law","G.711 mu-law",null,"AAC","Speex","MP3 8khz"],l=2,c=10;!function(e){e[e.HEADER=0]="HEADER",e[e.RAW=1]="RAW"}(a||(a={}));var d,f=[null,"JPEG","Sorenson","Screen","VP6","VP6 alpha","Screen2","AVC"],p=4,h=7;!function(e){e[e.KEY=1]="KEY",e[e.INNER=2]="INNER",e[e.DISPOSABLE=3]="DISPOSABLE",e[e.GENERATED=4]="GENERATED",e[e.INFO=5]="INFO"}(d||(d={}));var _;!function(e){e[e.HEADER=0]="HEADER",e[e.NALU=1]="NALU",e[e.END=2]="END"}(_||(_={}));var g,y=8,v=9,m=50,E=!0;!function(e){e[e.CAN_GENERATE_HEADER=0]="CAN_GENERATE_HEADER",e[e.NEED_HEADER_DATA=1]="NEED_HEADER_DATA",e[e.MAIN_PACKETS=2]="MAIN_PACKETS"}(g||(g={}));var b=function(){function o(e){var t=this;this.oncodecinfo=function(e){},this.ondata=function(e){throw new Error("MP4Mux.ondata is not set")},this.metadata=e,this.trackStates=this.metadata.tracks.map(function(e,r){var n={trackId:r+1,trackInfo:e,cachedDuration:0,samplesProcessed:0,initializationData:[]};return t.metadata.audioTrackId===r&&(t.audioTrackState=n),t.metadata.videoTrackId===r&&(t.videoTrackState=n),n},this),this._checkIfNeedHeaderData(),this.filePos=0,this.cachedPackets=[],this.chunkIndex=0}return o.prototype.pushPacket=function(e,t,o){switch(this.state===g.CAN_GENERATE_HEADER&&this._tryGenerateHeader(),e){case y:var i=this.audioTrackState,s=r(t);if(!i||i.trackInfo.codecId!==s.codecId)throw new Error("Unexpected audio packet codec: "+s.codecDescription);switch(s.codecId){default:throw new Error("Unsupported audio codec: "+s.codecDescription);case l:break;case c:if(s.packetType===a.HEADER)return void i.initializationData.push(s.data)}this.cachedPackets.push({packet:s,timestamp:o,trackId:i.trackId});break;case v:var u=this.videoTrackState,d=n(t);if(!u||u.trackInfo.codecId!==d.codecId)throw new Error("Unexpected video packet codec: "+d.codecDescription);switch(d.codecId){default:throw new Error("unsupported video codec: "+d.codecDescription);case p:break;case h:if(d.packetType===_.HEADER)return void u.initializationData.push(d.data)}this.cachedPackets.push({packet:d,timestamp:o,trackId:u.trackId});break;default:throw new Error("unknown packet type: "+e)}this.state===g.NEED_HEADER_DATA&&this._tryGenerateHeader(),this.cachedPackets.length>=m&&this.state===g.MAIN_PACKETS&&this._chunk()},o.prototype.flush=function(){this.cachedPackets.length>0&&this._chunk()},o.prototype._checkIfNeedHeaderData=function(){this.trackStates.some(function(e){return e.trackInfo.codecId===c||e.trackInfo.codecId===h})?this.state=g.NEED_HEADER_DATA:this.state=g.CAN_GENERATE_HEADER},o.prototype._tryGenerateHeader=function(){var r=this.trackStates.every(function(e){switch(e.trackInfo.codecId){case c:case h:return e.initializationData.length>0;default:return!0}});if(r){for(var n=["isom"],o=1,i=1,a=[],s=0;s<this.trackStates.length;s++){var u,d=this.trackStates[s],f=d.trackInfo;switch(f.codecId){case c:var _=d.initializationData[0];u=new e.Iso.AudioSampleEntry("mp4a",o,f.channels,f.samplesize,f.samplerate);var y=new Uint8Array(41+_.length);y.set(t("0000000003808080"),0),y[8]=32+_.length,y.set(t("00020004808080"),9),y[16]=18+_.length,y.set(t("40150000000000FA000000000005808080"),17),y[34]=_.length,y.set(_,35),y.set(t("068080800102"),35+_.length),u.otherBoxes=[new e.Iso.RawTag("esds",y)];var v=_[0]>>3;d.mimeTypeCodec="mp4a.40."+v;break;case l:u=new e.Iso.AudioSampleEntry(".mp3",o,f.channels,f.samplesize,f.samplerate),d.mimeTypeCodec="mp3";break;case h:var m=d.initializationData[0];u=new e.Iso.VideoSampleEntry("avc1",i,f.width,f.height),u.otherBoxes=[new e.Iso.RawTag("avcC",m)];var E=m[1]<<16|m[2]<<8|m[3];d.mimeTypeCodec="avc1."+(16777216|E).toString(16).substr(1),n.push("iso2","avc1","mp41");break;case p:u=new e.Iso.VideoSampleEntry("VP6F",i,f.width,f.height),u.otherBoxes=[new e.Iso.RawTag("glbl",t("00"))],d.mimeTypeCodec="avc1.42001E";break;default:throw new Error("not supported track type")}var b,w=e.Iso.TrackHeaderFlags.TRACK_ENABLED|e.Iso.TrackHeaderFlags.TRACK_IN_MOVIE;d===this.audioTrackState?b=new e.Iso.TrackBox(new e.Iso.TrackHeaderBox(w,d.trackId,-1,0,0,1,s),new e.Iso.MediaBox(new e.Iso.MediaHeaderBox(f.timescale,-1,f.language),new e.Iso.HandlerBox("soun","SoundHandler"),new e.Iso.MediaInformationBox(new e.Iso.SoundMediaHeaderBox,new e.Iso.DataInformationBox(new e.Iso.DataReferenceBox([new e.Iso.DataEntryUrlBox(e.Iso.SELF_CONTAINED_DATA_REFERENCE_FLAG)])),new e.Iso.SampleTableBox(new e.Iso.SampleDescriptionBox([u]),new e.Iso.RawTag("stts",t("0000000000000000")),new e.Iso.RawTag("stsc",t("0000000000000000")),new e.Iso.RawTag("stsz",t("000000000000000000000000")),new e.Iso.RawTag("stco",t("0000000000000000")))))):d===this.videoTrackState&&(b=new e.Iso.TrackBox(new e.Iso.TrackHeaderBox(w,d.trackId,-1,f.width,f.height,0,s),new e.Iso.MediaBox(new e.Iso.MediaHeaderBox(f.timescale,-1,f.language),new e.Iso.HandlerBox("vide","VideoHandler"),new e.Iso.MediaInformationBox(new e.Iso.VideoMediaHeaderBox,new e.Iso.DataInformationBox(new e.Iso.DataReferenceBox([new e.Iso.DataEntryUrlBox(e.Iso.SELF_CONTAINED_DATA_REFERENCE_FLAG)])),new e.Iso.SampleTableBox(new e.Iso.SampleDescriptionBox([u]),new e.Iso.RawTag("stts",t("0000000000000000")),new e.Iso.RawTag("stsc",t("0000000000000000")),new e.Iso.RawTag("stsz",t("000000000000000000000000")),new e.Iso.RawTag("stco",t("0000000000000000"))))))),a.push(b)}var S=new e.Iso.MovieExtendsBox(null,[new e.Iso.TrackExtendsBox(1,1,0,0,0),new e.Iso.TrackExtendsBox(2,1,0,0,0)],null),P=new e.Iso.BoxContainerBox("udat",[new e.Iso.MetaBox(new e.Iso.RawTag("hdlr",t("00000000000000006D6469726170706C000000000000000000")),[new e.Iso.RawTag("ilst",t("00000025A9746F6F0000001D6461746100000001000000004C61766635342E36332E313034"))])]),R=new e.Iso.MovieHeaderBox(1e3,0,this.trackStates.length+1),T=new e.Iso.MovieBox(R,a,S,P),x=new e.Iso.FileTypeBox("isom",512,n),A=x.layout(0),O=T.layout(A),M=new Uint8Array(A+O);x.write(M),T.write(M),this.oncodecinfo(this.trackStates.map(function(e){return e.mimeTypeCodec})),this.ondata(M),this.filePos+=M.length,this.state=g.MAIN_PACKETS}},o.prototype._chunk=function(){var t=this.cachedPackets;if(E&&this.videoTrackState){for(var r=t.length-1,n=this.videoTrackState.trackId;r>0&&(t[r].trackId!==n||t[r].packet.frameType!==d.KEY);)r--;r>0&&(t=t.slice(0,r))}if(0!==t.length){for(var o=[],i=0,a=[],s=[],u=0;u<this.trackStates.length;u++){var f=this.trackStates[u],_=f.trackInfo,g=f.trackId,y=t.filter(function(e){return e.trackId===g});if(0!==y.length){var v,m,b,w=new e.Iso.TrackFragmentBaseMediaDecodeTimeBox(f.cachedDuration);switch(s.push(i),_.codecId){case c:case l:b=[];for(var r=0;r<y.length;r++){var S=y[r].packet,P=Math.round(S.samples*_.timescale/_.samplerate);o.push(S.data),i+=S.data.length,b.push({duration:P,size:S.data.length
}),f.samplesProcessed+=S.samples}var R=e.Iso.TrackFragmentFlags.DEFAULT_SAMPLE_FLAGS_PRESENT;v=new e.Iso.TrackFragmentHeaderBox(R,g,0,0,0,0,e.Iso.SampleFlags.SAMPLE_DEPENDS_ON_NO_OTHERS);var T=e.Iso.TrackRunFlags.DATA_OFFSET_PRESENT|e.Iso.TrackRunFlags.SAMPLE_DURATION_PRESENT|e.Iso.TrackRunFlags.SAMPLE_SIZE_PRESENT;m=new e.Iso.TrackRunBox(T,b,0,0),f.cachedDuration=Math.round(f.samplesProcessed*_.timescale/_.samplerate);break;case h:case p:b=[];for(var x=f.samplesProcessed,A=x*_.timescale/_.framerate,O=Math.round(A),r=0;r<y.length;r++){var M=y[r].packet;x++;var D=Math.round(x*_.timescale/_.framerate),k=D-O;O=D;var I=Math.round(x*_.timescale/_.framerate+M.compositionTime*_.timescale/1e3);o.push(M.data),i+=M.data.length;var C=M.frameType===d.KEY?e.Iso.SampleFlags.SAMPLE_DEPENDS_ON_NO_OTHERS:e.Iso.SampleFlags.SAMPLE_DEPENDS_ON_OTHER|e.Iso.SampleFlags.SAMPLE_IS_NOT_SYNC;b.push({duration:k,size:M.data.length,flags:C,compositionTimeOffset:I-D})}var R=e.Iso.TrackFragmentFlags.DEFAULT_SAMPLE_FLAGS_PRESENT;v=new e.Iso.TrackFragmentHeaderBox(R,g,0,0,0,0,e.Iso.SampleFlags.SAMPLE_DEPENDS_ON_NO_OTHERS);var T=e.Iso.TrackRunFlags.DATA_OFFSET_PRESENT|e.Iso.TrackRunFlags.SAMPLE_DURATION_PRESENT|e.Iso.TrackRunFlags.SAMPLE_SIZE_PRESENT|e.Iso.TrackRunFlags.SAMPLE_FLAGS_PRESENT|e.Iso.TrackRunFlags.SAMPLE_COMPOSITION_TIME_OFFSET;m=new e.Iso.TrackRunBox(T,b,0,0),f.cachedDuration=O,f.samplesProcessed=x;break;default:throw new Error("Un codec")}var L=new e.Iso.TrackFragmentBox(v,w,m);a.push(L)}}this.cachedPackets.splice(0,t.length);for(var j=new e.Iso.MovieFragmentHeaderBox(++this.chunkIndex),N=new e.Iso.MovieFragmentBox(j,a),U=N.layout(0),F=new e.Iso.MediaDataBox(o),B=F.layout(U),q=U+8,u=0;u<a.length;u++)a[u].run.dataOffset=q+s[u];var H=new Uint8Array(U+B);N.write(H),F.write(H),this.ondata(H),this.filePos+=H.length}},o}();e.MP4Mux=b,e.parseFLVMetadata=o,e.splitMetadata=i}(t=e.MP4||(e.MP4={}))}(n||(n={})),function(e){var t;!function(e){var t;!function(e){function t(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return Array.prototype.concat.apply(e,t)}function r(e,t,r){e[t]=r>>24&255,e[t+1]=r>>16&255,e[t+2]=r>>8&255,e[t+3]=255&r}function n(e){return e.charCodeAt(0)<<24|e.charCodeAt(1)<<16|e.charCodeAt(2)<<8|e.charCodeAt(3)}function a(e){return(e-f)/1e3|0}function s(e){return 65536*e|0}function u(e){return 1073741824*e|0}function l(e){return 256*e|0}function c(e){return(31&e.charCodeAt(0))<<10|(31&e.charCodeAt(1))<<5|31&e.charCodeAt(2)}var d=o.StringUtilities.utf8decode,f=-20828448e5,p=[1,0,0,0,1,0,0,0,1],h=[0,0,0],_=function(){function e(e,t){this.boxtype=e,"uuid"===e&&(this.userType=t)}return e.prototype.layout=function(e){this.offset=e;var t=8;return this.userType&&(t+=16),this.size=t,t},e.prototype.write=function(e){return r(e,this.offset,this.size),r(e,this.offset+4,n(this.boxtype)),this.userType?(e.set(this.userType,this.offset+8),24):8},e.prototype.toUint8Array=function(){var e=this.layout(0),t=new Uint8Array(e);return this.write(t),t},e}();e.Box=_;var g=function(e){function t(t,r,n){void 0===r&&(r=0),void 0===n&&(n=0);var o=e.call(this,t)||this;return o.version=r,o.flags=n,o}return i(t,e),t.prototype.layout=function(t){return this.size=e.prototype.layout.call(this,t)+4,this.size},t.prototype.write=function(t){var n=e.prototype.write.call(this,t);return r(t,this.offset+n,this.version<<24|this.flags),n+4},t}(_);e.FullBox=g;var y=function(e){function t(t,r,n){var o=e.call(this,"ftype")||this;return o.majorBrand=t,o.minorVersion=r,o.compatibleBrands=n,o}return i(t,e),t.prototype.layout=function(t){return this.size=e.prototype.layout.call(this,t)+4*(2+this.compatibleBrands.length),this.size},t.prototype.write=function(t){var o=this,i=e.prototype.write.call(this,t);return r(t,this.offset+i,n(this.majorBrand)),r(t,this.offset+i+4,this.minorVersion),i+=8,this.compatibleBrands.forEach(function(e){r(t,o.offset+i,n(e)),i+=4},this),i},t}(_);e.FileTypeBox=y;var v=function(e){function t(t,r){var n=e.call(this,t)||this;return n.children=r,n}return i(t,e),t.prototype.layout=function(t){var r=e.prototype.layout.call(this,t);return this.children.forEach(function(e){e&&(r+=e.layout(t+r))}),this.size=r},t.prototype.write=function(t){var r=e.prototype.write.call(this,t);return this.children.forEach(function(e){e&&(r+=e.write(t))}),r},t}(_);e.BoxContainerBox=v;var m=function(e){function r(r,n,o,i){var a=e.call(this,"moov",t([r],n,[o,i]))||this;return a.header=r,a.tracks=n,a.extendsBox=o,a.userData=i,a}return i(r,e),r}(v);e.MovieBox=m;var E=function(e){function t(t,r,n,o,i,a,s,u){void 0===o&&(o=1),void 0===i&&(i=1),void 0===a&&(a=p),void 0===s&&(s=f),void 0===u&&(u=f);var l=e.call(this,"mvhd",0,0)||this;return l.timescale=t,l.duration=r,l.nextTrackId=n,l.rate=o,l.volume=i,l.matrix=a,l.creationTime=s,l.modificationTime=u,l}return i(t,e),t.prototype.layout=function(t){return this.size=e.prototype.layout.call(this,t)+16+4+2+2+8+36+24+4,this.size},t.prototype.write=function(t){var n=e.prototype.write.call(this,t);return r(t,this.offset+n,a(this.creationTime)),r(t,this.offset+n+4,a(this.modificationTime)),r(t,this.offset+n+8,this.timescale),r(t,this.offset+n+12,this.duration),n+=16,r(t,this.offset+n,s(this.rate)),r(t,this.offset+n+4,l(this.volume)<<16),r(t,this.offset+n+8,0),r(t,this.offset+n+12,0),n+=16,r(t,this.offset+n,s(this.matrix[0])),r(t,this.offset+n+4,s(this.matrix[1])),r(t,this.offset+n+8,s(this.matrix[2])),r(t,this.offset+n+12,s(this.matrix[3])),r(t,this.offset+n+16,s(this.matrix[4])),r(t,this.offset+n+20,s(this.matrix[5])),r(t,this.offset+n+24,u(this.matrix[6])),r(t,this.offset+n+28,u(this.matrix[7])),r(t,this.offset+n+32,u(this.matrix[8])),n+=36,r(t,this.offset+n,0),r(t,this.offset+n+4,0),r(t,this.offset+n+8,0),r(t,this.offset+n+12,0),r(t,this.offset+n+16,0),r(t,this.offset+n+20,0),n+=24,r(t,this.offset+n,this.nextTrackId),n+=4},t}(g);e.MovieHeaderBox=E;var b;!function(e){e[e.TRACK_ENABLED=1]="TRACK_ENABLED",e[e.TRACK_IN_MOVIE=2]="TRACK_IN_MOVIE",e[e.TRACK_IN_PREVIEW=4]="TRACK_IN_PREVIEW"}(b=e.TrackHeaderFlags||(e.TrackHeaderFlags={}));var w=function(e){function t(t,r,n,o,i,a,s,u,l,c,d){void 0===s&&(s=0),void 0===u&&(u=0),void 0===l&&(l=p),void 0===c&&(c=f),void 0===d&&(d=f);var h=e.call(this,"tkhd",0,t)||this;return h.trackId=r,h.duration=n,h.width=o,h.height=i,h.volume=a,h.alternateGroup=s,h.layer=u,h.matrix=l,h.creationTime=c,h.modificationTime=d,h}return i(t,e),t.prototype.layout=function(t){return this.size=e.prototype.layout.call(this,t)+20+8+6+2+36+8,this.size},t.prototype.write=function(t){var n=e.prototype.write.call(this,t);return r(t,this.offset+n,a(this.creationTime)),r(t,this.offset+n+4,a(this.modificationTime)),r(t,this.offset+n+8,this.trackId),r(t,this.offset+n+12,0),r(t,this.offset+n+16,this.duration),n+=20,r(t,this.offset+n,0),r(t,this.offset+n+4,0),r(t,this.offset+n+8,this.layer<<16|this.alternateGroup),r(t,this.offset+n+12,l(this.volume)<<16),n+=16,r(t,this.offset+n,s(this.matrix[0])),r(t,this.offset+n+4,s(this.matrix[1])),r(t,this.offset+n+8,s(this.matrix[2])),r(t,this.offset+n+12,s(this.matrix[3])),r(t,this.offset+n+16,s(this.matrix[4])),r(t,this.offset+n+20,s(this.matrix[5])),r(t,this.offset+n+24,u(this.matrix[6])),r(t,this.offset+n+28,u(this.matrix[7])),r(t,this.offset+n+32,u(this.matrix[8])),n+=36,r(t,this.offset+n,s(this.width)),r(t,this.offset+n+4,s(this.height)),n+=8},t}(g);e.TrackHeaderBox=w;var S=function(e){function t(t,r,n,o,i){void 0===n&&(n="unk"),void 0===o&&(o=f),void 0===i&&(i=f);var a=e.call(this,"mdhd",0,0)||this;return a.timescale=t,a.duration=r,a.language=n,a.creationTime=o,a.modificationTime=i,a}return i(t,e),t.prototype.layout=function(t){return this.size=e.prototype.layout.call(this,t)+16+4,this.size},t.prototype.write=function(t){var n=e.prototype.write.call(this,t);return r(t,this.offset+n,a(this.creationTime)),r(t,this.offset+n+4,a(this.modificationTime)),r(t,this.offset+n+8,this.timescale),r(t,this.offset+n+12,this.duration),r(t,this.offset+n+16,c(this.language)<<16),n+20},t}(g);e.MediaHeaderBox=S;var P=function(e){function t(t,r){var n=e.call(this,"hdlr",0,0)||this;return n.handlerType=t,n.name=r,n._encodedName=d(n.name),n}return i(t,e),t.prototype.layout=function(t){return this.size=e.prototype.layout.call(this,t)+8+12+(this._encodedName.length+1),this.size},t.prototype.write=function(t){var o=e.prototype.write.call(this,t);return r(t,this.offset+o,0),r(t,this.offset+o+4,n(this.handlerType)),r(t,this.offset+o+8,0),r(t,this.offset+o+12,0),r(t,this.offset+o+16,0),o+=20,t.set(this._encodedName,this.offset+o),t[this.offset+o+this._encodedName.length]=0,o+=this._encodedName.length+1},t}(g);e.HandlerBox=P;var R=function(e){function t(t){void 0===t&&(t=0);var r=e.call(this,"smhd",0,0)||this;return r.balance=t,r}return i(t,e),t.prototype.layout=function(t){return this.size=e.prototype.layout.call(this,t)+4,this.size},t.prototype.write=function(t){var n=e.prototype.write.call(this,t);return r(t,this.offset+n,l(this.balance)<<16),n+4},t}(g);e.SoundMediaHeaderBox=R;var T=function(e){function t(t,r){void 0===t&&(t=0),void 0===r&&(r=h);var n=e.call(this,"vmhd",0,0)||this;return n.graphicsMode=t,n.opColor=r,n}return i(t,e),t.prototype.layout=function(t){return this.size=e.prototype.layout.call(this,t)+8,this.size},t.prototype.write=function(t){var n=e.prototype.write.call(this,t);return r(t,this.offset+n,this.graphicsMode<<16|this.opColor[0]),r(t,this.offset+n+4,this.opColor[1]<<16|this.opColor[2]),n+8},t}(g);e.VideoMediaHeaderBox=T,e.SELF_CONTAINED_DATA_REFERENCE_FLAG=1;var x=function(t){function r(r,n){void 0===n&&(n=null);var o=t.call(this,"url ",0,r)||this;return o.location=n,r&e.SELF_CONTAINED_DATA_REFERENCE_FLAG||(o._encodedLocation=d(n)),o}return i(r,t),r.prototype.layout=function(e){var r=t.prototype.layout.call(this,e);return this._encodedLocation&&(r+=this._encodedLocation.length+1),this.size=r},r.prototype.write=function(e){var r=t.prototype.write.call(this,e);return this._encodedLocation&&(e.set(this._encodedLocation,this.offset+r),e[this.offset+r+this._encodedLocation.length]=0,r+=this._encodedLocation.length),r},r}(g);e.DataEntryUrlBox=x;var A=function(e){function t(t){var r=e.call(this,"dref",0,0)||this;return r.entries=t,r}return i(t,e),t.prototype.layout=function(t){var r=e.prototype.layout.call(this,t)+4;return this.entries.forEach(function(e){r+=e.layout(t+r)}),this.size=r},t.prototype.write=function(t){var n=e.prototype.write.call(this,t);return r(t,this.offset+n,this.entries.length),this.entries.forEach(function(e){n+=e.write(t)}),n},t}(g);e.DataReferenceBox=A;var O=function(e){function t(t){var r=e.call(this,"dinf",[t])||this;return r.dataReference=t,r}return i(t,e),t}(v);e.DataInformationBox=O;var M=function(e){function t(t){var r=e.call(this,"stsd",0,0)||this;return r.entries=t,r}return i(t,e),t.prototype.layout=function(t){var r=e.prototype.layout.call(this,t);return r+=4,this.entries.forEach(function(e){r+=e.layout(t+r)}),this.size=r},t.prototype.write=function(t){var n=e.prototype.write.call(this,t);return r(t,this.offset+n,this.entries.length),n+=4,this.entries.forEach(function(e){n+=e.write(t)}),n},t}(g);e.SampleDescriptionBox=M;var D=function(e){function t(t,r,n,o,i){var a=e.call(this,"stbl",[t,r,n,o,i])||this;return a.sampleDescriptions=t,a.timeToSample=r,a.sampleToChunk=n,a.sampleSizes=o,a.chunkOffset=i,a}return i(t,e),t}(v);e.SampleTableBox=D;var k=function(e){function t(t,r,n){var o=e.call(this,"minf",[t,r,n])||this;return o.header=t,o.info=r,o.sampleTable=n,o}return i(t,e),t}(v);e.MediaInformationBox=k;var I=function(e){function t(t,r,n){var o=e.call(this,"mdia",[t,r,n])||this;return o.header=t,o.handler=r,o.info=n,o}return i(t,e),t}(v);e.MediaBox=I;var C=function(e){function t(t,r){var n=e.call(this,"trak",[t,r])||this;return n.header=t,n.media=r,n}return i(t,e),t}(v);e.TrackBox=C;var L=function(e){function t(t,r,n,o,i){var a=e.call(this,"trex",0,0)||this;return a.trackId=t,a.defaultSampleDescriptionIndex=r,a.defaultSampleDuration=n,a.defaultSampleSize=o,a.defaultSampleFlags=i,a}return i(t,e),t.prototype.layout=function(t){return this.size=e.prototype.layout.call(this,t)+20,this.size},t.prototype.write=function(t){var n=e.prototype.write.call(this,t);return r(t,this.offset+n,this.trackId),r(t,this.offset+n+4,this.defaultSampleDescriptionIndex),r(t,this.offset+n+8,this.defaultSampleDuration),r(t,this.offset+n+12,this.defaultSampleSize),r(t,this.offset+n+16,this.defaultSampleFlags),n+20},t}(g);e.TrackExtendsBox=L;var j=function(e){function r(r,n,o){var i=e.call(this,"mvex",t([r],n,[o]))||this;return i.header=r,i.tracDefaults=n,i.levels=o,i}return i(r,e),r}(v);e.MovieExtendsBox=j;var N=function(e){function t(t,r){var n=e.call(this,"meta",0,0)||this;return n.handler=t,n.otherBoxes=r,n}return i(t,e),t.prototype.layout=function(t){var r=e.prototype.layout.call(this,t);return r+=this.handler.layout(t+r),this.otherBoxes.forEach(function(e){r+=e.layout(t+r)}),this.size=r},t.prototype.write=function(t){var r=e.prototype.write.call(this,t);return r+=this.handler.write(t),this.otherBoxes.forEach(function(e){r+=e.write(t)}),r},t}(g);e.MetaBox=N;var U=function(e){function t(t){var r=e.call(this,"mfhd",0,0)||this;return r.sequenceNumber=t,r}return i(t,e),t.prototype.layout=function(t){return this.size=e.prototype.layout.call(this,t)+4,this.size},t.prototype.write=function(t){var n=e.prototype.write.call(this,t);return r(t,this.offset+n,this.sequenceNumber),n+4},t}(g);e.MovieFragmentHeaderBox=U;var F;!function(e){e[e.BASE_DATA_OFFSET_PRESENT=1]="BASE_DATA_OFFSET_PRESENT",e[e.SAMPLE_DESCRIPTION_INDEX_PRESENT=2]="SAMPLE_DESCRIPTION_INDEX_PRESENT",e[e.DEFAULT_SAMPLE_DURATION_PRESENT=8]="DEFAULT_SAMPLE_DURATION_PRESENT",e[e.DEFAULT_SAMPLE_SIZE_PRESENT=16]="DEFAULT_SAMPLE_SIZE_PRESENT",e[e.DEFAULT_SAMPLE_FLAGS_PRESENT=32]="DEFAULT_SAMPLE_FLAGS_PRESENT"}(F=e.TrackFragmentFlags||(e.TrackFragmentFlags={}));var B=function(e){function t(t,r,n,o,i,a,s){var u=e.call(this,"tfhd",0,t)||this;return u.trackId=r,u.baseDataOffset=n,u.sampleDescriptionIndex=o,u.defaultSampleDuration=i,u.defaultSampleSize=a,u.defaultSampleFlags=s,u}return i(t,e),t.prototype.layout=function(t){var r=e.prototype.layout.call(this,t)+4,n=this.flags;return n&F.BASE_DATA_OFFSET_PRESENT&&(r+=8),n&F.SAMPLE_DESCRIPTION_INDEX_PRESENT&&(r+=4),n&F.DEFAULT_SAMPLE_DURATION_PRESENT&&(r+=4),n&F.DEFAULT_SAMPLE_SIZE_PRESENT&&(r+=4),n&F.DEFAULT_SAMPLE_FLAGS_PRESENT&&(r+=4),this.size=r},t.prototype.write=function(t){var n=e.prototype.write.call(this,t),o=this.flags;return r(t,this.offset+n,this.trackId),n+=4,o&F.BASE_DATA_OFFSET_PRESENT&&(r(t,this.offset+n,0),r(t,this.offset+n+4,this.baseDataOffset),n+=8),o&F.SAMPLE_DESCRIPTION_INDEX_PRESENT&&(r(t,this.offset+n,this.sampleDescriptionIndex),n+=4),o&F.DEFAULT_SAMPLE_DURATION_PRESENT&&(r(t,this.offset+n,this.defaultSampleDuration),n+=4),o&F.DEFAULT_SAMPLE_SIZE_PRESENT&&(r(t,this.offset+n,this.defaultSampleSize),n+=4),o&F.DEFAULT_SAMPLE_FLAGS_PRESENT&&(r(t,this.offset+n,this.defaultSampleFlags),n+=4),n},t}(g);e.TrackFragmentHeaderBox=B;var q=function(e){function t(t){var r=e.call(this,"tfdt",0,0)||this;return r.baseMediaDecodeTime=t,r}return i(t,e),t.prototype.layout=function(t){return this.size=e.prototype.layout.call(this,t)+4,this.size},t.prototype.write=function(t){var n=e.prototype.write.call(this,t);return r(t,this.offset+n,this.baseMediaDecodeTime),n+4},t}(g);e.TrackFragmentBaseMediaDecodeTimeBox=q;var H=function(e){function t(t,r,n){var o=e.call(this,"traf",[t,r,n])||this;return o.header=t,o.decodeTime=r,o.run=n,o}return i(t,e),t}(v);e.TrackFragmentBox=H;var z;!function(e){e[e.IS_LEADING_MASK=201326592]="IS_LEADING_MASK",e[e.SAMPLE_DEPENDS_ON_MASK=50331648]="SAMPLE_DEPENDS_ON_MASK",e[e.SAMPLE_DEPENDS_ON_OTHER=16777216]="SAMPLE_DEPENDS_ON_OTHER",e[e.SAMPLE_DEPENDS_ON_NO_OTHERS=33554432]="SAMPLE_DEPENDS_ON_NO_OTHERS",e[e.SAMPLE_IS_DEPENDED_ON_MASK=12582912]="SAMPLE_IS_DEPENDED_ON_MASK",e[e.SAMPLE_HAS_REDUNDANCY_MASK=3145728]="SAMPLE_HAS_REDUNDANCY_MASK",e[e.SAMPLE_PADDING_VALUE_MASK=917504]="SAMPLE_PADDING_VALUE_MASK",e[e.SAMPLE_IS_NOT_SYNC=65536]="SAMPLE_IS_NOT_SYNC",e[e.SAMPLE_DEGRADATION_PRIORITY_MASK=65535]="SAMPLE_DEGRADATION_PRIORITY_MASK"}(z=e.SampleFlags||(e.SampleFlags={}));var G;!function(e){e[e.DATA_OFFSET_PRESENT=1]="DATA_OFFSET_PRESENT",e[e.FIRST_SAMPLE_FLAGS_PRESENT=4]="FIRST_SAMPLE_FLAGS_PRESENT",e[e.SAMPLE_DURATION_PRESENT=256]="SAMPLE_DURATION_PRESENT",e[e.SAMPLE_SIZE_PRESENT=512]="SAMPLE_SIZE_PRESENT",e[e.SAMPLE_FLAGS_PRESENT=1024]="SAMPLE_FLAGS_PRESENT",e[e.SAMPLE_COMPOSITION_TIME_OFFSET=2048]="SAMPLE_COMPOSITION_TIME_OFFSET"}(G=e.TrackRunFlags||(e.TrackRunFlags={}));var V=function(e){function t(t,r,n,o){var i=e.call(this,"trun",1,t)||this;return i.samples=r,i.dataOffset=n,i.firstSampleFlags=o,i}return i(t,e),t.prototype.layout=function(t){var r=e.prototype.layout.call(this,t)+4,n=this.samples.length,o=this.flags;return o&G.DATA_OFFSET_PRESENT&&(r+=4),o&G.FIRST_SAMPLE_FLAGS_PRESENT&&(r+=4),o&G.SAMPLE_DURATION_PRESENT&&(r+=4*n),o&G.SAMPLE_SIZE_PRESENT&&(r+=4*n),o&G.SAMPLE_FLAGS_PRESENT&&(r+=4*n),o&G.SAMPLE_COMPOSITION_TIME_OFFSET&&(r+=4*n),this.size=r},t.prototype.write=function(t){var n=e.prototype.write.call(this,t),o=this.samples.length,i=this.flags;r(t,this.offset+n,o),n+=4,i&G.DATA_OFFSET_PRESENT&&(r(t,this.offset+n,this.dataOffset),n+=4),i&G.FIRST_SAMPLE_FLAGS_PRESENT&&(r(t,this.offset+n,this.firstSampleFlags),n+=4);for(var a=0;a<o;a++){var s=this.samples[a];i&G.SAMPLE_DURATION_PRESENT&&(r(t,this.offset+n,s.duration),n+=4),i&G.SAMPLE_SIZE_PRESENT&&(r(t,this.offset+n,s.size),n+=4),i&G.SAMPLE_FLAGS_PRESENT&&(r(t,this.offset+n,s.flags),n+=4),i&G.SAMPLE_COMPOSITION_TIME_OFFSET&&(r(t,this.offset+n,s.compositionTimeOffset),n+=4)}return n},t}(g);e.TrackRunBox=V;var K=function(e){function r(r,n){var o=e.call(this,"moof",t([r],n))||this;return o.header=r,o.trafs=n,o}return i(r,e),r}(v);e.MovieFragmentBox=K;var W=function(e){function t(t){var r=e.call(this,"mdat")||this;return r.chunks=t,r}return i(t,e),t.prototype.layout=function(t){var r=e.prototype.layout.call(this,t);return this.chunks.forEach(function(e){r+=e.length}),this.size=r},t.prototype.write=function(t){var r=this,n=e.prototype.write.call(this,t);return this.chunks.forEach(function(e){t.set(e,r.offset+n),n+=e.length},this),n},t}(_);e.MediaDataBox=W;var J=function(e){function t(t,r){var n=e.call(this,t)||this;return n.dataReferenceIndex=r,n}return i(t,e),t.prototype.layout=function(t){return this.size=e.prototype.layout.call(this,t)+8,this.size},t.prototype.write=function(t){var n=e.prototype.write.call(this,t);return r(t,this.offset+n,0),r(t,this.offset+n+4,this.dataReferenceIndex),n+8},t}(_);e.SampleEntry=J;var Q=function(e){function t(t,r,n,o,i,a){void 0===n&&(n=2),void 0===o&&(o=16),void 0===i&&(i=44100),void 0===a&&(a=null);var s=e.call(this,t,r)||this;return s.channelCount=n,s.sampleSize=o,s.sampleRate=i,s.otherBoxes=a,s}return i(t,e),t.prototype.layout=function(t){var r=e.prototype.layout.call(this,t)+20;return this.otherBoxes&&this.otherBoxes.forEach(function(e){r+=e.layout(t+r)}),this.size=r},t.prototype.write=function(t){var n=e.prototype.write.call(this,t);return r(t,this.offset+n,0),r(t,this.offset+n+4,0),r(t,this.offset+n+8,this.channelCount<<16|this.sampleSize),r(t,this.offset+n+12,0),r(t,this.offset+n+16,this.sampleRate<<16),n+=20,this.otherBoxes&&this.otherBoxes.forEach(function(e){n+=e.write(t)}),n},t}(J);e.AudioSampleEntry=Q,e.COLOR_NO_ALPHA_VIDEO_SAMPLE_DEPTH=24;var Y=function(t){function n(r,n,o,i,a,s,u,l,c,d){void 0===a&&(a=""),void 0===s&&(s=72),void 0===u&&(u=72),void 0===l&&(l=1),void 0===c&&(c=e.COLOR_NO_ALPHA_VIDEO_SAMPLE_DEPTH),void 0===d&&(d=null);var f=t.call(this,r,n)||this;if(f.width=o,f.height=i,f.compressorName=a,f.horizResolution=s,f.vertResolution=u,f.frameCount=l,f.depth=c,f.otherBoxes=d,a.length>31)throw new Error("invalid compressor name");return f}return i(n,t),n.prototype.layout=function(e){var r=t.prototype.layout.call(this,e)+16+12+4+2+32+2+2;return this.otherBoxes&&this.otherBoxes.forEach(function(t){r+=t.layout(e+r)}),this.size=r},n.prototype.write=function(e){var n=t.prototype.write.call(this,e);r(e,this.offset+n,0),r(e,this.offset+n+4,0),r(e,this.offset+n+8,0),r(e,this.offset+n+12,0),n+=16,r(e,this.offset+n,this.width<<16|this.height),r(e,this.offset+n+4,s(this.horizResolution)),r(e,this.offset+n+8,s(this.vertResolution)),n+=12,r(e,this.offset+n,0),r(e,this.offset+n+4,this.frameCount<<16),n+=6,e[this.offset+n]=this.compressorName.length;for(var o=0;o<31;o++)e[this.offset+n+o+1]=o<this.compressorName.length?127&this.compressorName.charCodeAt(o):0;return n+=32,r(e,this.offset+n,this.depth<<16|65535),n+=4,this.otherBoxes&&this.otherBoxes.forEach(function(t){n+=t.write(e)}),n},n}(J);e.VideoSampleEntry=Y;var X=function(e){function t(t,r){var n=e.call(this,t)||this;return n.data=r,n}return i(t,e),t.prototype.layout=function(t){return this.size=e.prototype.layout.call(this,t)+this.data.length,this.size},t.prototype.write=function(t){var r=e.prototype.write.call(this,t);return t.set(this.data,this.offset+r),r+this.data.length},t}(_);e.RawTag=X}(t=e.Iso||(e.Iso={}))}(t=e.MP4||(e.MP4={}))}(n||(n={})),t.MP4Mux=n.MP4.MP4Mux},function(e,t,r){"use strict";var n,o=r(55),i=r(19),a=r(2),s=r(62),u=r(2),l=r(1),c=Function.prototype.bind,d=Object.defineProperty,f=Object.prototype.hasOwnProperty;n=function(e,t,r){var n,i=l(t)&&u(t.value);return n=o(t),delete n.writable,delete n.value,n.get=function(){return!r.overwriteDefinition&&f.call(this,e)?i:(t.value=c.call(i,r.resolveContext?r.resolveContext(this):this),d(this,e,t),this[e])},n},e.exports=function(e){var t=i(arguments[1]);return null!=t.resolveContext&&a(t.resolveContext),s(e,function(e,r){return n(r,e,t)})}},function(e,t,r){"use strict";var n=r(1);e.exports=function(){return n(this).length=0,this}},function(e,t,r){"use strict";e.exports=r(44)()?Array.from:r(45)},function(e,t,r){"use strict";e.exports=function(){var e,t,r=Array.from;return"function"==typeof r&&(e=["raz","dwa"],t=r(e),Boolean(t&&t!==e&&"dwa"===t[1]))}},function(e,t,r){"use strict";var n=r(3).iterator,o=r(7),i=r(46),a=r(51),s=r(2),u=r(1),l=r(4),c=r(8),d=Array.isArray,f=Function.prototype.call,p={configurable:!0,enumerable:!0,writable:!0,value:null},h=Object.defineProperty;e.exports=function(e){var t,r,_,g,y,v,m,E,b,w,S=arguments[1],P=arguments[2];if(e=Object(u(e)),l(S)&&s(S),this&&this!==Array&&i(this))t=this;else{if(!S){if(o(e))return y=e.length,1!==y?Array.apply(null,e):(g=new Array(1),g[0]=e[0],g);if(d(e)){for(g=new Array(y=e.length),r=0;r<y;++r)g[r]=e[r];return g}}g=[]}if(!d(e))if(void 0!==(b=e[n])){for(m=s(b).call(e),t&&(g=new t),E=m.next(),r=0;!E.done;)w=S?f.call(S,P,E.value,r):E.value,t?(p.value=w,h(g,r,p)):g[r]=w,E=m.next(),++r;y=r}else if(c(e)){for(y=e.length,t&&(g=new t),r=0,_=0;r<y;++r)w=e[r],r+1<y&&(v=w.charCodeAt(0),v>=55296&&v<=56319&&(w+=e[++r])),w=S?f.call(S,P,w,_):w,t?(p.value=w,h(g,_,p)):g[_]=w,++_;y=_}if(void 0===y)for(y=a(e.length),t&&(g=new t(y)),r=0;r<y;++r)w=S?f.call(S,P,e[r],r):e[r],t?(p.value=w,h(g,r,p)):g[r]=w;return t&&(p.value=null,g.length=y),g}},function(e,t,r){"use strict";var n=Object.prototype.toString,o=n.call(r(17));e.exports=function(e){return"function"==typeof e&&n.call(e)===o}},function(e,t,r){"use strict";e.exports=r(48)()?Math.sign:r(49)},function(e,t,r){"use strict";e.exports=function(){var e=Math.sign;return"function"==typeof e&&1===e(10)&&e(-20)===-1}},function(e,t,r){"use strict";e.exports=function(e){return e=Number(e),isNaN(e)||0===e?e:e>0?1:-1}},function(e,t,r){"use strict";var n=r(47),o=Math.abs,i=Math.floor;e.exports=function(e){return isNaN(e)?0:(e=Number(e),0!==e&&isFinite(e)?n(e)*i(o(e)):e)}},function(e,t,r){"use strict";var n=r(50),o=Math.max;e.exports=function(e){return o(0,n(e))}},function(e,t,r){"use strict";var n=r(2),o=r(1),i=Function.prototype.bind,a=Function.prototype.call,s=Object.keys,u=Object.prototype.propertyIsEnumerable;e.exports=function(e,t){return function(r,l){var c,d=arguments[2],f=arguments[3];return r=Object(o(r)),n(l),c=s(r),f&&c.sort("function"==typeof f?i.call(f,r):void 0),"function"!=typeof e&&(e=c[e]),a.call(e,c,function(e,n){return u.call(r,e)?a.call(l,d,r[e],e,r,n):t})}}},function(e,t,r){"use strict";e.exports=function(){var e,t=Object.assign;return"function"==typeof t&&(e={foo:"raz"},t(e,{bar:"dwa"},{trzy:"trzy"}),e.foo+e.bar+e.trzy==="razdwatrzy")}},function(e,t,r){"use strict";var n=r(59),o=r(1),i=Math.max;e.exports=function(e,t){var r,a,s,u=i(arguments.length,2);for(e=Object(o(e)),s=function(n){try{e[n]=t[n]}catch(e){r||(r=e)}},a=1;a<u;++a)t=arguments[a],n(t).forEach(s);if(void 0!==r)throw r;return e}},function(e,t,r){"use strict";var n=r(43),o=r(10),i=r(1);e.exports=function(e){var t=Object(i(e)),r=arguments[1],a=Object(arguments[2]);if(t!==e&&!r)return t;var s={};return r?n(r,function(t){(a.ensure||t in e)&&(s[t]=e[t])}):o(s,e),s}},function(e,t,r){"use strict";var n,o=Object.create;r(20)()||(n=r(21)),e.exports=function(){var e,t,r;return n?1!==n.level?o:(e={},t={},r={configurable:!1,enumerable:!1,writable:!0,value:void 0},Object.getOwnPropertyNames(Object.prototype).forEach(function(e){return"__proto__"===e?void(t[e]={configurable:!0,enumerable:!1,writable:!0,value:void 0}):void(t[e]=r)}),Object.defineProperties(e,t),Object.defineProperty(n,"nullPolyfill",{configurable:!1,enumerable:!1,writable:!1,value:e}),function(t,r){return o(null===t?e:t,r)}):o}()},function(e,t,r){"use strict";e.exports=r(52)("forEach")},function(e,t,r){"use strict";e.exports=function(e){return"function"==typeof e}},function(e,t,r){"use strict";e.exports=r(60)()?Object.keys:r(61)},function(e,t,r){"use strict";e.exports=function(){try{return Object.keys("primitive"),!0}catch(e){return!1}}},function(e,t,r){"use strict";var n=r(4),o=Object.keys;e.exports=function(e){return o(n(e)?Object(e):e)}},function(e,t,r){"use strict";var n=r(2),o=r(57),i=Function.prototype.call;e.exports=function(e,t){var r={},a=arguments[2];return n(t),o(e,function(e,n,o,s){r[n]=i.call(t,a,e,n,o,s)}),r}},function(e,t,r){"use strict";var n=r(18);e.exports=function(e){if(!n(e))throw new TypeError(e+" is not an Object");return e}},function(e,t,r){"use strict";var n="razdwatrzy";e.exports=function(){return"function"==typeof n.contains&&n.contains("dwa")===!0&&n.contains("foo")===!1}},function(e,t,r){"use strict";var n=String.prototype.indexOf;e.exports=function(e){return n.call(this,e,arguments[1])>-1}},function(e,t,r){"use strict";var n=Object.create(null),o=Math.random;e.exports=function(){var e;do e=o().toString(36).slice(2);while(n[e]);return e}},function(e,t,r){"use strict";var n,o=r(11),i=r(22),a=r(6),s=r(3),u=r(24),l=Object.defineProperty;n=e.exports=function(e,t){if(!(this instanceof n))throw new TypeError("Constructor requires 'new'");u.call(this,e),t=t?i.call(t,"key+value")?"key+value":i.call(t,"key")?"key":"value":"value",l(this,"__kind__",a("",t))},o&&o(n,u),delete n.prototype.constructor,n.prototype=Object.create(u.prototype,{_resolve:a(function(e){return"value"===this.__kind__?this.__list__[e]:"key+value"===this.__kind__?[e,this.__list__[e]]:e})}),l(n.prototype,s.toStringTag,a("c","Array Iterator"))},function(e,t,r){"use strict";var n=r(7),o=r(2),i=r(8),a=r(23),s=Array.isArray,u=Function.prototype.call,l=Array.prototype.some;e.exports=function(e,t){var r,c,d,f,p,h,_,g,y=arguments[2];if(s(e)||n(e)?r="array":i(e)?r="string":e=a(e),o(t),d=function(){f=!0},"array"===r)return void l.call(e,function(e){return u.call(t,y,e,d),f});if("string"!==r)for(c=e.next();!c.done;){if(u.call(t,y,c.value,d),f)return;c=e.next()}else for(h=e.length,p=0;p<h&&(_=e[p],p+1<h&&(g=_.charCodeAt(0),g>=55296&&g<=56319&&(_+=e[++p])),u.call(t,y,_,d),!f);++p);}},function(e,t,r){"use strict";var n=r(7),o=r(4),i=r(8),a=r(3).iterator,s=Array.isArray;e.exports=function(e){return!(!o(e)||!s(e)&&!i(e)&&!n(e)&&"function"!=typeof e[a])}},function(e,t,r){"use strict";var n,o=r(11),i=r(6),a=r(3),s=r(24),u=Object.defineProperty;n=e.exports=function(e){if(!(this instanceof n))throw new TypeError("Constructor requires 'new'");e=String(e),s.call(this,e),u(this,"__length__",i("",e.length))},o&&o(n,s),delete n.prototype.constructor,n.prototype=Object.create(s.prototype,{_next:i(function(){if(this.__list__)return this.__nextIndex__<this.__length__?this.__nextIndex__++:void this._unBind()}),_resolve:i(function(e){var t,r=this.__list__[e];return this.__nextIndex__===this.__length__?r:(t=r.charCodeAt(0),t>=55296&&t<=56319?r+this.__list__[this.__nextIndex__++]:r)})}),u(n.prototype,a.toStringTag,i("c","String Iterator"))},function(e,t,r){"use strict";var n=r(69);e.exports=function(e){if(!n(e))throw new TypeError(e+" is not iterable");return e}},function(e,t,r){"use strict";var n={object:!0,symbol:!0};e.exports=function(){var e;if("function"!=typeof Symbol)return!1;e=Symbol("test symbol");try{String(e)}catch(e){return!1}return!!n[typeof Symbol.iterator]&&!!n[typeof Symbol.toPrimitive]&&!!n[typeof Symbol.toStringTag]}},function(e,t,r){"use strict";e.exports=function(e){return!!e&&("symbol"==typeof e||!!e.constructor&&"Symbol"===e.constructor.name&&"Symbol"===e[e.constructor.toStringTag])}},function(e,t,r){"use strict";var n,o,i,a,s=r(6),u=r(75),l=Object.create,c=Object.defineProperties,d=Object.defineProperty,f=Object.prototype,p=l(null);if("function"==typeof Symbol){n=Symbol;try{String(n()),a=!0}catch(e){}}var h=function(){var e=l(null);return function(t){for(var r,n,o=0;e[t+(o||"")];)++o;return t+=o||"",e[t]=!0,r="@@"+t,d(f,r,s.gs(null,function(e){n||(n=!0,d(this,r,s(e)),n=!1)})),r}}();i=function(e){if(this instanceof i)throw new TypeError("Symbol is not a constructor");return o(e)},e.exports=o=function e(t){var r;if(this instanceof e)throw new TypeError("Symbol is not a constructor");return a?n(t):(r=l(i.prototype),t=void 0===t?"":String(t),c(r,{__description__:s("",t),__name__:s("",h(t))}))},c(o,{for:s(function(e){return p[e]?p[e]:p[e]=o(String(e))}),keyFor:s(function(e){var t;u(e);for(t in p)if(p[t]===e)return t}),hasInstance:s("",n&&n.hasInstance||o("hasInstance")),isConcatSpreadable:s("",n&&n.isConcatSpreadable||o("isConcatSpreadable")),iterator:s("",n&&n.iterator||o("iterator")),match:s("",n&&n.match||o("match")),replace:s("",n&&n.replace||o("replace")),search:s("",n&&n.search||o("search")),species:s("",n&&n.species||o("species")),split:s("",n&&n.split||o("split")),toPrimitive:s("",n&&n.toPrimitive||o("toPrimitive")),toStringTag:s("",n&&n.toStringTag||o("toStringTag")),unscopables:s("",n&&n.unscopables||o("unscopables"))}),c(i.prototype,{constructor:s(o),toString:s("",function(){return this.__name__})}),c(o.prototype,{toString:s(function(){return"Symbol ("+u(this).__description__+")"}),valueOf:s(function(){return u(this)})}),d(o.prototype,o.toPrimitive,s("",function(){var e=u(this);return"symbol"==typeof e?e:e.toString()})),d(o.prototype,o.toStringTag,s("c","Symbol")),d(i.prototype,o.toStringTag,s("c",o.prototype[o.toStringTag])),d(i.prototype,o.toPrimitive,s("c",o.prototype[o.toPrimitive]))},function(e,t,r){"use strict";var n=r(73);e.exports=function(e){if(!n(e))throw new TypeError(e+" is not a symbol");return e}},function(e,t,r){"use strict";e.exports=r(77)()?WeakMap:r(79)},function(e,t,r){"use strict";e.exports=function(){var e,t;if("function"!=typeof WeakMap)return!1;try{e=new WeakMap([[t={},"one"],[{},"two"],[{},"three"]])}catch(e){return!1}return"[object WeakMap]"===String(e)&&"function"==typeof e.set&&e.set({},1)===e&&"function"==typeof e.delete&&"function"==typeof e.has&&"one"===e.get(t)}},function(e,t,r){"use strict";e.exports=function(){return"function"==typeof WeakMap&&"[object WeakMap]"===Object.prototype.toString.call(new WeakMap)}()},function(e,t,r){"use strict";var n,o=r(11),i=r(63),a=r(1),s=r(66),u=r(6),l=r(23),c=r(68),d=r(3).toStringTag,f=r(78),p=Array.isArray,h=Object.defineProperty,_=Object.prototype.hasOwnProperty,g=Object.getPrototypeOf;e.exports=n=function(){var e,t=arguments[0];if(!(this instanceof n))throw new TypeError("Constructor requires 'new'");return e=f&&o&&WeakMap!==n?o(new WeakMap,g(this)):this,null!=t&&(p(t)||(t=l(t))),h(e,"__weakMapData__",u("c","$weakMap$"+s())),t?(c(t,function(t){a(t),e.set(t[0],t[1])}),e):e;
},f&&(o&&o(n,WeakMap),n.prototype=Object.create(WeakMap.prototype,{constructor:u(n)})),Object.defineProperties(n.prototype,{delete:u(function(e){return!!_.call(i(e),this.__weakMapData__)&&(delete e[this.__weakMapData__],!0)}),get:u(function(e){if(_.call(i(e),this.__weakMapData__))return e[this.__weakMapData__]}),has:u(function(e){return _.call(i(e),this.__weakMapData__)}),set:u(function(e,t){return h(i(e),this.__weakMapData__,u("c",t)),this}),toString:u(function(){return"[object WeakMap]"})}),h(n.prototype,d,u("c","WeakMap"))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(83),o=r(82),i=[n.WebCrypto,o.JSCrypto];t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(80),i=n.helpers.find;t.DecryptorFactory={retrieveDecryptor:function(e){return i(o.default,function(t){return t.canDecrypt(e)})||null}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(38),i=n.helpers.Promise,a=null;t.JSCrypto={canDecrypt:function(e){return"AES-CBC"===e.cipher},decrypt:function(e,t){return a||(a=new o.AESDecryptor),a.expandKey(t.key.buffer),i.resolve(new Uint8Array(a.decrypt(e.buffer,0,t.iv.buffer)))}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=n.helpers.Promise,i=window.crypto&&window.crypto.subtle;t.WebCrypto={canDecrypt:function(e){return!!i&&window.isSecureContext&&"AES-CBC"===e.cipher},decrypt:function(e,t){return new o(function(r,n){function o(e){return i.importKey("raw",e,{name:"AES-CBC"},!1,["decrypt"])}o(t.key).then(function(r){return i.decrypt({name:"AES-CBC",iv:t.iv},r,e)}).then(function(e){return r(new Uint8Array(e))}).catch(n)})}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(86),o=r(85),i=[n.OggOpusSegmentParser,o.DefaultSegmentParser];t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=n.helpers.abortableJob.AbortableJob,i=n.helpers.Promise;t.DefaultSegmentParser={getFormat:function(){return{}},parseSegmentData:function(e){var t=new o(function(){return{result:i.resolve({data:e})}});return t.run()}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(9),i=r(76),a=n.helpers.abortableJob.AbortableJob,s=n.helpers.Promise,u=n.helpers.arrayBuffer.combine,l=new i;t.OggOpusSegmentParser={getFormat:function(){return{mimeType:"audio/ogg",audioCodec:{id:"opus"}}},parseSegmentData:function(e,t,r){var n=new a(function(){var n=o.retrievePages(e);if(n.length){var i=o.retrievePackets([n[0]])[0];if(i&&i.first){var a=1;n.slice(1).some(function(e,t){var r=!!(1&e.header.type[0]);return t>0&&!r||(a=t+2,!1)});var c=u(n.slice(0,a).map(function(e){return e.entirePage}));return l.set(r,c),{result:s.resolve({data:u(n.slice(a).map(function(e){return e.entirePage})),initData:c})}}}if(t.getSequenceNumber()<=r.getStartingSequenceNumber())return{result:s.reject(new Error("Could not find init data."))};if(l.has(r))return{result:s.resolve({initData:l.get(r),data:e})};var d=r.getSegment(r.getStartingSequenceNumber()),f=null,p=d.whenComplete().then(function(t){return f=t.retrieveData(),f.whenComplete().then(function(t){var r=t.data;return{initData:r.initData,data:e}})});return{result:p,abort:function(){d.abort(),f&&f.abort()}}});return n.run()}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(29),i=r(84),a=n.helpers.find;t.SegmentParserFactory={retrieveSegmentParser:function(e){var t=a(i.default,function(t){return o.isPartialMatch(t.getFormat(),e)});if(!t)throw new Error("No segment parser found.");return t}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(16),o=r(15),i=r(89),a=[n.PassThrough,o.MP3ToMP4,i.OggOpusToWebm];t.default=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(9),i=r(90),a=n.helpers.Promise,s=n.helpers.arrayBuffer.combine;t.OggOpusToWebm={getInputFormat:function(){return{mimeType:"audio/ogg",audioCodec:{id:"opus"}}},getOutputFormat:function(){return{mimeType:"audio/webm",audioCodec:{id:"opus"}}},transmux:function(e){try{var t=e.initData?s([e.initData,e.data]):e.data,r=o.retrievePackets(o.retrievePages(t)),n=i.buildWebm(r);return a.resolve({data:n.data,initData:n.initData})}catch(e){return a.reject(e)}}}},function(e,t){e.exports=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.version="13.0.0",t.buildNumber=1085;var n=r(34);t.PlaylistSegmentRetriever=n.PlaylistSegmentRetriever;var o=r(35);t.Playlist=o.Playlist,t.PlaylistType=o.PlaylistType;var i=r(14);t.Segment=i.Segment;var a=r(37);t.TransmuxerFactory=a.TransmuxerFactory;var s=r(15);t.MP3ToMP4Transmuxer=s.MP3ToMP4;var u=r(16);t.PassThroughTransmuxer=u.PassThrough;var l=r(36);t.retrievalErrors=l.retrievalErrors;var c=r(33);t.events=c.events}])})},function(e,t,r){!function(t,n){e.exports=n(r(2))}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){this._msg=e}return e.prototype.getMsg=function(){return this._msg},e}();t.OggParserError=n},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t}(o.OggParserError);t.ChecksumFailedError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t}(o.OggParserError);t.NoSegmentsInPageError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t}(o.OggParserError);t.PageFromDifferentBitstreamError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t}(o.OggParserError);t.PageSequenceNumberDidNotIncrementError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t}(o.OggParserError);t.UnexpectedBOSError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t}(o.OggParserError);t.UnexpectedEOSError=i},function(e,t,r){"use strict";function n(e,t,r){return void 0===r&&(r=1),e.slice(t,t+r)}function o(e,t){return void 0===t&&(t=!0),new DataView(e).getUint32(0,t)}function i(e){for(var t=e.buffer,r=[],n=e.byteOffset-1;;){var o=n+1,i=new Uint8Array(t,o).findIndex(function(e,t,r){return r[t]===y[0]&&r[t+1]===y[1]&&r[t+2]===y[2]&&r[t+3]===y[3]});if(i===-1)break;i+=o,n=i;var s=new DataView(t,i);r.push(a(s))}return r}function a(e){var t=new Uint8Array(e.buffer,e.byteOffset),r=n(t,26),i=n(t,27,r[0]),a={version:n(t,4),type:n(t,5),granulePosition:n(t,6,8),bitstreamSerialNumber:n(t,14,4),pageSequenceNumber:n(t,18,4),checksum:n(t,22,4),pageSegments:r,segmentTable:i},s=[],u=27+r[0];if(i.forEach(function(e){s.push(n(t,u,e)),u+=e}),!s.length)throw new _.NoSegmentsInPageError("No segments.");var d=l.calculateCRC([y,a.version,a.type,a.granulePosition,a.bitstreamSerialNumber,a.pageSequenceNumber,v,r,i].concat(s)),f=o(a.checksum.buffer);if(d!==f)throw new c.ChecksumFailedError("Checksum failed.");return{header:a,segments:s,entirePage:n(t,0,u)}}function s(e){if(!e.length)return[];var t=o(e[0].header.bitstreamSerialNumber.buffer),r=-1,n=null,i=[];return e.forEach(function(a,s){if(o(a.header.bitstreamSerialNumber.buffer)!==t)throw new d.PageFromDifferentBitstreamError("Got a page from a different bitstream.");var u=o(a.header.pageSequenceNumber.buffer);if(u<=r)throw new f.PageSequenceNumberDidNotIncrementError("Page sequence number was not greater than the previous one.");var l=u!==r+1;r=u;var c=a.header.type[0],_=!!(1&c),y=!!(2&c);if(y&&s>0)throw new p.UnexpectedBOSError("Got BOS on a page which is not the first.");var v=!!(4&c);if(v&&s!==e.length-1)throw new h.UnexpectedEOSError("Got EOS on a page which is not the last.");var m=0;l&&(n=null);var E=a.segments.length;a.segments.forEach(function(e,t){if(n?n.data=g([n.data,e]):_&&0===t||(n={granulePosition:null,pageSequenceNumber:r,packetOffset:m,discontinuity:l&&0===m,first:y&&0===m,last:!1,data:e},m++),n&&e.byteLength<255){var s=t===E-1;s&&(n.granulePosition=o(a.header.granulePosition.buffer)),n.last=v&&s,i.push(n),n=null}})}),i}Object.defineProperty(t,"__esModule",{value:!0});var u=r(9),l=r(8),c=r(1),d=r(3),f=r(4),p=r(5),h=r(6),_=r(2),g=u.helpers.arrayBuffer.combine,y=new Uint8Array([79,103,103,83]),v=new Uint8Array([0,0,0,0]);t.retrievePages=i,t.parsePage=a,t.retrievePackets=s},function(e,t,r){"use strict";function n(e){var t=0;return e.forEach(function(e){for(var r=0;r<e.length;r++)t=t<<8^o[t>>24&255^e[r]]}),t>>>0}Object.defineProperty(t,"__esModule",{value:!0});var o=new Uint32Array([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188]);t.calculateCRC=n},function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),t.version="13.0.0",t.buildNumber=1085,n(r(7));var o=r(0);t.OggParserError=o.OggParserError;var i=r(1);t.ChecksumFailedError=i.ChecksumFailedError;var a=r(2);t.NoSegmentsInPageError=a.NoSegmentsInPageError;var s=r(3);t.PageFromDifferentBitstreamError=s.PageFromDifferentBitstreamError;var u=r(4);t.PageSequenceNumberDidNotIncrementError=u.PageSequenceNumberDidNotIncrementError;var l=r(5);t.UnexpectedBOSError=l.UnexpectedBOSError;var c=r(6);t.UnexpectedEOSError=c.UnexpectedEOSError}])})},function(e,t,r){!function(t,n){e.exports=n(r(2))}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(t,r){t.exports=e},function(e,t,r){"use strict";function n(e){var t=3&e[0];return 0===t?1:3!==t?2:63&e[1]}function o(e){var t=e[0]>>>3&31;if(t>=f.length)throw new Error("Invalid configuration.");return f[t]}function i(e){if(!e.first)throw new Error("OpusHead is always in the first packet.");var t=e.data,r=new DataView(t.buffer),n=r.getUint8(9),o=r.getUint8(17),i=void 0,a=void 0,s=void 0;if(o>0){i=r.getUint8(18),a=r.getUint8(19),s=[];for(var u=0;u<n;u++)s.push(r.getUint8(20+u))}return{version:r.getUint8(8),channelCount:n,preSkip:r.getUint16(10,!0),inputSampleRate:r.getUint32(12,!0),outputGain:r.getUint16(16),channelMapFamily:o,streamCount:i,twoChannelStreamCount:a,channelMappingTable:s}}function a(e){var t=e[0];if(!t||!t.first)throw new Error("Missing start of stream.");var r=e.slice(2),a=i(t),s=0,l=0,f=r.map(function(e,t){if(e.discontinuity&&t>0)throw new Error("Discontinuities after first audio packet not supported.");var r=new Uint8Array(4);r[0]=129,new DataView(r.buffer).setInt16(1,l),r[3]=128;var i=n(e.data);return s+=i,l+=i*o(e.data),u.encodeElement(u.IDS.SimpleBlock,c([r,e.data]))}),p=c([u.encodeElement(u.IDS.EBML,function(){return c([u.encodeElement(u.IDS.EBMLVersion,d(1)),u.encodeElement(u.IDS.EBMLReadVersion,d(1)),u.encodeElement(u.IDS.EBMLMaxIDLength,d(4)),u.encodeElement(u.IDS.EBMLMaxSizeLength,d(8)),u.encodeElement(u.IDS.DocType,new Uint8Array([119,101,98,109])),u.encodeElement(u.IDS.DocTypeVersion,d(1)),u.encodeElement(u.IDS.DocTypeReadVersion,d(2))])}()),u.encodeElement(u.IDS.Segment,function(){return u.encodeElement(u.IDS.Info,function(){return u.encodeElement(u.IDS.Duration,function(){var e=new Uint8Array(8);return new DataView(e.buffer).setFloat64(0,l),e}())}())}()),u.encodeElement(u.IDS.Tracks,function(){return u.encodeElement(u.IDS.TrackEntry,function(){return c([u.encodeElement(u.IDS.TrackNumber,d(1)),u.encodeElement(u.IDS.TrackUID,d(1)),u.encodeElement(u.IDS.FlagLacing,d(0)),u.encodeElement(u.IDS.CodecID,new Uint8Array([65,95,79,80,85,83])),u.encodeElement(u.IDS.CodecDelay,d(a.preSkip/48e3*1e9)),u.encodeElement(u.IDS.SeekPreRoll,new Uint8Array([4,196,180,0])),u.encodeElement(u.IDS.TrackType,d(2)),u.encodeElement(u.IDS.Audio,function(){return c([u.encodeElement(u.IDS.Channels,d(a.channelCount)),u.encodeElement(u.IDS.SamplingFrequency,new Uint8Array([64,231,112,0,0,0,0,0]))])}()),u.encodeElement(u.IDS.CodecPrivate,t.data)])}())}())]),h=u.encodeElement(u.IDS.Cluster,function(){var e=[u.encodeElement(u.IDS.Timecode,d(0))];return e.push.apply(e,f),c(e)}());return{initData:p,data:h}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(0),u=r(2),l=s.helpers.arrayBuffer,c=l.combine,d=l.numberToUint8Array,f=[10,20,40,60,10,20,40,60,10,20,40,60,10,20,10,20,2.5,5,10,20,2.5,5,10,20,2.5,5,10,20,2.5,5,10,20];t.buildWebm=a},function(e,t,r){"use strict";function n(e,t){var r=s(e),n=u(t.byteLength);return a([r,n,t])}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=o.helpers.arrayBuffer,a=i.combine,s=i.numberToUint8Array,u=i.createVintBuffer;t.IDS={EBML:440786851,EBMLVersion:17030,EBMLReadVersion:17143,EBMLMaxIDLength:17138,EBMLMaxSizeLength:17139,DocType:17026,DocTypeVersion:17031,DocTypeReadVersion:17029,Segment:408125543,Info:357149030,Duration:17545,Tracks:374648427,TrackEntry:174,TrackNumber:215,TrackUID:29637,FlagLacing:156,CodecID:134,CodecDelay:22186,SeekPreRoll:22203,TrackType:131,Audio:225,Channels:159,SamplingFrequency:181,CodecPrivate:25506,Cluster:524531317,Timecode:231,SimpleBlock:163},t.encodeElement=n},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),t.version="13.0.0",t.buildNumber=1085,n(r(1))}])})},function(e,t,r){!function(t,n){e.exports=n(r(2))}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(t,r){t.exports=e},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(){return e.call(this,"An unrecoverable error occurred whilst decoding.")||this}return n(t,e),t.prototype.getCode=function(){return"HTML5_PLAYER.DECODE_ERROR"},t}(o.errors.PlayerFatalError);t.DecodeError=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(){return e.call(this,"An unrecoverable network error occurred.")||this}return n(t,e),t.prototype.getCode=function(){return"HTML5_PLAYER.NETWORK_ERROR"},t}(o.errors.PlayerFatalError);t.NetworkError=i},function(e,t,r){"use strict";function n(e){for(var t=[],r=e.length,n=0;n<r;n++)t.push({end:1e3*e.end(n),start:1e3*e.start(n)});return o.TimeRange.normalizeRawTimeRanges(t).map(function(e){return new o.TimeRange(e.start,e.end-e.start)})}Object.defineProperty(t,"__esModule",{value:!0});var o=r(0);t.buildTimeRanges=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(1),i=r(2);!function(e){e.DecodeError=o.DecodeError,e.NetworkError=i.NetworkError}(n=t.errors||(t.errors={}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(3);!function(e){var t;!function(e){e.buildTimeRanges=o.buildTimeRanges}(t=e.timeRanges||(e.timeRanges={}))}(n=t.helpers||(t.helpers={}))},function(e,t,r){"use strict";function n(e){e.load()}var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(1),s=r(2),u=r(3),l=r(7),c=i.helpers.deferred.buildDeferred,d=i.helpers.url.getExtension,f=i.helpers.Promise,p=i.helpers.compact,h=i.logger.prefixLogger,_=i.errors.NotSupportedError,g=i.errors.PlayerFatalError,y=new Error("Media element was revoked."),v=10,m=200,E=function(e){function t(t,r){var n=e.call(this,r)||this;n._duration=null,n._stallDetected=!1,n._initialized=!1,n._deferredProvideMediaElementCallback=null,n._playInProgress={inProgress:!1},n._lastStallCheckPos=null,n._stallCheckTimerId=null,n._endedOverride=!1,n._volume=1,n._muted=!1,n._pauseEventTimer=null,n._positionWhenMediaElementRevoked=0,n._playingWhenMediaElementRevoked=!1,n._provideMediaElementDeferred=null,n._mediaElementAndState=null,n._listeners=[],n._currentSeekCallback=null,n._playDetectionPosition=0,n._playDetectionTimer=null,n._playDetectionTimerNumAttempts=0,n._logger=h(n._logger,"HTML5Player"),n._descriptor=t,n._playerDependencies=r,n._mimeType=t.getFormat().mimeType||n._buildMimeTypeAndCodecString(t.getFormat(),n._inferFormat(t.getUrl()));var o=void 0!==r.mediaElement?r.mediaElement:n._createDefaultMediaElement();return o&&n.provideMediaElement(o).catch(function(e){return e===y?void n._logger.debug("Initial provideMediaElement() call was aborted."):void n._triggerError(new l.InitializeError(e))}),n._logger.info("Checking if the player can play the provided descriptor."),n._canPlayTimer=window.setTimeout(function(){n._canPlay().then(function(e){if(!n.isDead())return e instanceof i.errors.NotSupportedError?(n._logger.info("Player not supported.",e),void n._triggerError(e)):e?(n._logger.info("Player supported."),void n._initialize()):(n._logger.info("Player not supported."),void n._triggerError(new _))}).catch(function(e){n._logger.error("Unexpected error during can play check.",e),n._triggerError(new g("An unexpected error occured during initialization.",e))})},0),n}return o(t,e),t.prototype.getMediaElement=function(){return this._mediaElementAndState&&this._mediaElementAndState.element},t.prototype.provideMediaElement=function(e){var t=this;if(this._ensureNotDead(),this._mediaElementAndState)throw new Error("Already have a media element.");this._logger.debug("provideMediaElement() called.",e),this._initMediaElementLocal(e,null);var r=this._provideMediaElementDeferred=c(),n=this._mediaElementAndState={element:e,state:"INITIALIZING"},o=function(){t._logger.debug("Initializing media element."),t._initMediaElement(e,t._descriptor.getUrl()),t._attachListeners();var o=t._listenToOnce("error",function(){t._provideMediaElementDeferred=null;var n=e.error.code+" = "+(e.error.message||"[unknown]");t._logger.error("Error whilst initializing media element.",n),t.revokeMediaElement(),r.reject(new Error("Error when initializing media element. Error: "+n))},{earlyAttach:!0});t._listenToOnce("loadeddata",function(){t._logger.debug("Got loadeddata event from media element."),i()},{earlyAttach:!0});var i=function(){t._logger.debug("Putting media element in the state that is expected..."),a()},a=function(){null===t._getQueuedSeekPosition()&&t._positionWhenMediaElementRevoked>0?(t._logger.debug("Seeking to expected position..."),t._performSeek(t._positionWhenMediaElementRevoked,function(e){return void 0!==e?(t._provideMediaElementDeferred=null,t._logger.error("An error occurred when trying to seek to the expected position."),t.revokeMediaElement(),void r.reject(new Error("An error occurred when trying to restore the position."))):(t._logger.debug("Seeked to expected position."),void s())})):s()},s=function(){t.isPlaying()===t.isActuallyPlaying()&&t._playingWhenMediaElementRevoked?(t._logger.debug("Calling play to match previous state..."),t._play().catch(function(){t._provideMediaElementDeferred=null,t._logger.error("An error occurred when trying to play."),n===t._mediaElementAndState&&t.revokeMediaElement(),r.reject(new Error("Browser refused play() request on media element."))}),t._listenToOnce("play",function(){t._logger.debug("Play succeeded."),u()},{earlyAttach:!0})):u()},u=function(){return t._mediaElementAndState!==n?void t._triggerError(new g("Media element switched unexpectedly.")):(t._provideMediaElementDeferred=null,o.remove(),r.resolve(void 0),t._mediaElementAndState.state="STABLE",t._logger.debug("Finished putting element in expected state."),void(null!==t._duration&&t._update(function(){t.isReady()||t._signalReady(),t._handleDefferredPauseAndSeek()})))}};return this._initialized?o():this._deferredProvideMediaElementCallback=o,this._provideMediaElementDeferred.promise},t.prototype.revokeMediaElement=function(){if(!this._mediaElementAndState)throw new Error("There is no media element to revoke.");this._deferredProvideMediaElementCallback=null,this._provideMediaElementDeferred&&(this._provideMediaElementDeferred.reject(y),this._provideMediaElementDeferred=null),this._logger.debug("revokeMediaElement() called."),this._detachListeners();var e=this._mediaElementAndState.element;this.isDead()||(this._positionWhenMediaElementRevoked=this.getPosition(),this._playingWhenMediaElementRevoked=this.isPlaying()),this._mediaElementAndState=null,this._initMediaElement(e,null),this.isDead()||this._handleStalled()},t.prototype.getVolume=function(){return this._volume},t.prototype.getMuted=function(){return this._muted},t.prototype.setMuted=function(e){this._muted=e,this._mediaElementAndState&&(this._mediaElementAndState.element.muted=e)},t.prototype.getBufferedTimeRanges=function(){return this._mediaElementAndState&&"USABLE"===this._mediaElementAndState.state?u.buildTimeRanges(this._mediaElementAndState.element.buffered):[]},t.prototype.getMaxBufferLength=function(){return null},t.prototype._setVolume=function(e){this._volume=e,this._mediaElementAndState&&(this._mediaElementAndState.element.volume=e)},t.prototype._inferFormat=function(e){var t=d(e);switch(t){case"mp3":return{mimeType:"audio/mpeg"};case"opus":return{mimeType:"audio/ogg",audioCodec:{id:"opus"}};case"mp4":return{mimeType:"video/mp4"};case"m3u8":return{mimeType:"application/x-mpegURL"};default:return{}}},t.prototype._buildMimeTypeAndCodecString=function(e,t){void 0===t&&(t={});var r=e.mimeType||t.mimeType,n=e.audioCodec||t.audioCodec,o=e.videoCodec||t.videoCodec,i=p([n,o]),a=i.length>0?'; codecs="'+i.map(function(e){return e.id}).join(",")+'"':"";return r+a},t.prototype._getResolvedMimeType=function(){return this._mimeType},t.prototype._canPlay=function(){return this._mimeType&&this._canPlayProtocol(this._descriptor.getProtocol())&&this._canPlayType(this._mimeType)?f.resolve(!0):f.resolve(!1)},t.prototype._canPlayProtocol=function(e){return["http","hls"].indexOf(e.name)>=0},t.prototype._canPlayType=function(e){try{var t=document.createElement("audio");return!!t.canPlayType(e)}catch(e){return!1}},t.prototype._initialize=function(){var e=this;this._initialized=!0,this._listenTo("error",function(){if("INITIALIZING"===e._mediaElementAndState.state)return void e._logger.debug("An error occurred, but the media element is initializing, so ignoring...");var t=e._mediaElementAndState.element.error;switch(t.code){case 2:e._triggerError(new s.NetworkError);break;case 3:e._triggerError(new a.DecodeError);break;default:e._triggerError(new i.errors.PlayerFatalError("An unexpected error occurred.",t))}},{earlyAttach:!0}),this._listenTo("play",function(){e._logger.debug("Media element play event."),e.isPlaying()||!e._mediaElementAndState||e._mediaElementAndState.element.paused||(e._logger.debug("Calling play() because something external called play() on media element."),e.play())}),this._listenTo("playing",function(){e._logger.debug("Media element playing event."),e._mediaElementAndState&&!e._mediaElementAndState.element.paused?e._handlePlayingEvent():e._logger.debug("Ignoring playing event because media element is reporting it is paused.")}),this._listenTo("timeupdate",function(){return e._determineIfPlaying()}),this._listenTo("pause",function(){e._logger.debug("Media element pause event."),e._mediaElementAndState&&e._mediaElementAndState.element.paused?e._handlePauseEvent():e._logger.debug("Ignoring pause event because media element is reporting it is not paused.")}),this._listenTo("ended",function(){e._logger.debug("Media element ended event."),e._mediaElementAndState&&!e._mediaElementAndState.element.ended?e._handleEndedEvent():e._logger.debug("Ignoring ended event because media element is reporting it is not ended.")}),this._listenTo("stalled",function(){e._logger.debug("Media element stalled event."),e._checkIfStalled()}),this._stallCheckTimerId=window.setInterval(function(){return e._checkIfStalled()},400),this._retrieveDuration().then(function(t){e._logger.debug("Duration retrieved.",t),e._duration=t,e._update(function(){e._provideDuration(t),e._mediaElementAndState&&"STABLE"===e._mediaElementAndState.state&&(e._signalReady(),e._handleDefferredPauseAndSeek())})}).catch(function(t){e._triggerError(new i.errors.PlayerFatalError("An unexpected error occurred when attempting to retrieve the duration.",t))}),this._deferredProvideMediaElementCallback&&this._deferredProvideMediaElementCallback()},t.prototype._createDefaultMediaElement=function(){return document.createElement(this._playerDependencies.mediaElementType||"audio")},t.prototype._handlePauseEvent=function(){var e=this;if(!this._mediaElementAndState)throw new Error("Media element should exist.");var t=this._mediaElementAndState.element;this._pauseEventTimer||(this._pauseEventTimer=window.setTimeout(function(){e._pauseEventTimer=null,t.paused&&e.isActuallyPlaying()&&e._update(function(){e.isEnded()||(e._notifyNotStalled(),e._notifyPlaying(!1))})},0))},t.prototype._handlePlayingEvent=function(){var e=this,t=this._duration;
if(null===t)throw new Error("Expecting duration to exist.");var r=this._getTruePosition();return r>=t?void this._logger.warn("Got a media element playing event and the positon was >= the duration.",r,t):this.isEnded()||this._shouldBeEnded()?void this._logger.warn("Got a media element playing event when the player is/should be ended."):void this._update(function(){e._notifyNotStalled(),e._determineIfPlaying(),e.isActuallyPlaying()||(e._playDetectionTimerNumAttempts=0,e._playDetectionTimer||(e._playDetectionTimer=window.setInterval(function(){return e._determineIfPlaying()},v)))})},t.prototype._handleEndedEvent=function(){return null!==this._getQueuedSeekPosition()?void this._logger.warn("Got a media element ended event but ignoring because a seek is in progress."):void this._update()},t.prototype._shouldBeEnded=function(){return this._endedOverride||this._mediaElementReportingEnded()},t.prototype._mediaElementReportingEnded=function(){return!!(this._mediaElementAndState&&this._mediaElementAndState.element.ended&&this._mediaElementAndState.element.paused)},t.prototype._retrieveDuration=function(){var e=this;return new f(function(t){e._listenToOnce("loadedmetadata",function(){var r=e._mediaElementAndState;r&&t(1e3*r.element.duration)},{reattach:!0,earlyAttach:!0})})},t.prototype._handlePlayPauseChange=function(e){var t=this;if(this.isEnded())!e&&this._mediaElementAndState&&"USABLE"===this._mediaElementAndState.state&&this._mediaElementAndState.element.pause(),this._notifyPlaying(e);else if(this._mediaElementAndState&&"USABLE"===this._mediaElementAndState.state){var r=this._mediaElementAndState.element,n=this._playInProgress.inProgress||!r.paused;if(n!==e)if(e){this._playDetectionPosition=this._getTruePosition();var o={inProgress:!0};this._playInProgress=o,this._play().then(function(){return o.inProgress=!1}).catch(function(e){return t._playInProgress!==o?void t._logger.debug("Ignoring play error because paused since.",e):(o.inProgress=!1,void t._notifyPlayRejection(e))})}else this._playInProgress={inProgress:!1},r.pause(),this._notifyPlaying(!1);else this._playInProgress.inProgress||this._notifyPlaying(e)}},t.prototype._handleSeekChange=function(e){var t=this,r=this._mediaElementAndState;if(r&&"USABLE"===r.state){var n=this._mediaElementReportingEnded();this._endedOverride=!1,this._performSeek(e,function(r){return void 0!==r?void t._triggerError(new i.errors.PlayerFatalError("An error occurred when trying to seek.",r)):(e===t._duration&&(t._endedOverride=!0),void t._signalSeekComplete())}),n&&this._handlePlayPauseChange(this.isPlaying())}},t.prototype._performSeek=function(e,t){var r=this,n=this._mediaElementAndState;if(!n)throw new Error("Media element does not exist.");var o=this._currentSeekCallback;if(o&&(this._currentSeekCallback=null,o.listenerHandle.remove()),n.element.currentTime===e/1e3)return void t();n.element.currentTime=e/1e3;var i=this._listenToOnce("seeked",function(){r._currentSeekCallback=null,t()},{earlyAttach:!0});this._currentSeekCallback={listenerHandle:i,callback:t}},t.prototype._getPosition=function(){var e=null!==this._duration?this._duration:1/0;if(!this._mediaElementAndState||"USABLE"!==this._mediaElementAndState.state)return this._positionWhenMediaElementRevoked;this._determineIfPlaying();var t=Math.min(this._getTruePosition(),e);return this._shouldBeEnded()?e:t},t.prototype._getTruePosition=function(){if(!this._mediaElementAndState||"USABLE"!==this._mediaElementAndState.state)throw new Error("Media element does not exist or is in invalid state.");var e=this._mediaElementAndState.element;return 1e3*e.currentTime},t.prototype._kill=function(){window.clearTimeout(this._canPlayTimer),this._playDetectionTimer&&window.clearInterval(this._playDetectionTimer),this._mediaElementAndState&&this.revokeMediaElement(),this._stallCheckTimerId&&window.clearInterval(this._stallCheckTimerId),this._listeners=[]},t.prototype._listenToOnce=function(e,t,r){void 0===r&&(r={});var n=r.reattach,o=r.earlyAttach;void 0===n&&(n=!1),void 0===o&&(o=!1);var i=function(e){a.remove(),t(e)},a=this._listenTo(e,i,{reattach:n,earlyAttach:o});return a},t.prototype._listenTo=function(e,t,r){var n=this;void 0===r&&(r={});var o=r.reattach,i=r.earlyAttach;void 0===o&&(o=!0),void 0===i&&(i=!1);var a=function(e){s.attached?t(e):n._logger.warn("Got media element event after handler was removed. Ignoring.",e)},s={attached:!1,handler:a,eventType:e,once:!1,reattach:o,earlyAttach:i};if(this._listeners.push(s),!this._mediaElementAndState||"USABLE"!==this._mediaElementAndState.state&&!i)return{remove:function(){var e=n._listeners.indexOf(s);e>=0&&n._listeners.splice(e,1)}};var u=this._mediaElementAndState.element;return u.addEventListener(e,a,!1),s.attached=!0,{remove:function(){var t=n._listeners.indexOf(s);t>=0&&(n._listeners.splice(t,1),s.attached=!1,u.removeEventListener(e,a,!1))}}},t.prototype._notifyNotStalled=function(){this._stallDetected=!1,this._lastStallCheckPos=null,this._handleStalled()},t.prototype._initMediaElement=function(e,t){this._initMediaElementLocal(e,t)},t.prototype._determineIfPlaying=function(){var e=this;this._playDetectionTimer&&(!this.isPlaying()||++this._playDetectionTimerNumAttempts>=m)&&(window.clearInterval(this._playDetectionTimer),this._playDetectionTimer=null),this._update(function(){e._mediaElementAndState&&"USABLE"===e._mediaElementAndState.state&&(e.isDead()||!e.isReady()||!e.isPlaying()||e.isActuallyPlaying()||e._mediaElementAndState.element.paused||e._getTruePosition()===e._playDetectionPosition||(e._logger.debug("Detected that playback has started."),e._playDetectionTimer&&(window.clearInterval(e._playDetectionTimer),e._playDetectionTimer=null),e._notifyPlaying(!0)))})},t.prototype._initMediaElementLocal=function(e,t){e.setAttribute("msAudioCategory","BackgroundCapableMedia"),e.mozAudioChannelType="content",e.removeAttribute("src"),n(e),t?(this._logger.debug("Setting media element src.",t),e.src=t):this._pauseEventTimer&&(this._logger.debug("Clearing pause event timer."),window.clearTimeout(this._pauseEventTimer),this._pauseEventTimer=null),e.volume=this._volume,e.muted=this._muted,e.playbackRate=1,e.setAttribute("preload","metadata"),e.pause(),e.load()},t.prototype._checkIfStalled=function(){if(this._mediaElementAndState&&"USABLE"===this._mediaElementAndState.state){var e=this._mediaElementAndState.element;if(!e.paused&&this.isActuallyPlaying()){var t=e.currentTime;this._stallDetected=e.readyState<=2||this._lastStallCheckPos===t,this._lastStallCheckPos=t,this._handleStalled()}}},t.prototype._handleStalled=function(){this._shouldBeEnded()&&null===this._getQueuedSeekPosition()?this.isEnded()||(this._logger.debug("Updating because stalled near end."),this._update()):this._notifyStalled(this._stallDetected||!this._mediaElementAndState||"USABLE"!==this._mediaElementAndState.state)},t.prototype._play=function(){var e=this;if(!this._mediaElementAndState)throw new Error("Media element doesn't exist.");if(this._mediaElementReportingEnded())return this._logger.debug("Not calling play() because we are at the end. It will be called after a seek."),f.resolve();var t=this._mediaElementAndState.element.play();return new f(function(r,n){t?t.then(function(){r()}).catch(function(t){"AbortError"===t.name?(e._logger.debug("Media element play() promise rejected with AbortError."),r()):n(t)}):r()})},t.prototype._handleDefferredPauseAndSeek=function(){var e=this;if(!this._mediaElementAndState||"STABLE"!==this._mediaElementAndState.state)throw new Error("Media element must be in the STABLE state.");this._logger.debug("Handling deferred pause and seek..."),this._mediaElementAndState.state="USABLE",this._attachListeners(),this._update(function(){e._handleStalled();var t=e._getQueuedSeekPosition();null!==t&&e._handleSeekChange(t),e.isPlaying()!==e.isActuallyPlaying()&&e._handlePlayPauseChange(e.isPlaying())})},t.prototype._detachListeners=function(){if(!this._mediaElementAndState)throw new Error("Media element doesn't exist.");var e=this._mediaElementAndState.element;this._listeners.forEach(function(t){t.attached&&(t.attached=!1,e.removeEventListener(t.eventType,t.handler,!1))}),this._listeners=this._listeners.filter(function(e){return e.reattach})},t.prototype._attachListeners=function(){if(!this._mediaElementAndState)throw new Error("Media element doesn't exist.");this._logger.debug("Attaching listeners...");var e=this._mediaElementAndState,t=e.element,r=e.state;this._listeners.forEach(function(e){e.attached||!e.reattach||"USABLE"!==r&&!e.earlyAttach||(t.addEventListener(e.eventType,e.handler,!1),e.attached=!0)}),this._logger.debug("Attached listeners.")},t}(i.BasePlayer);t.HTML5Player=E},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(t){return e.call(this,"An error occurred when initializing the media element.",t)||this}return n(t,e),t.prototype.getCode=function(){return"HTML5_PLAYER.INITIALIZE_ERROR"},t}(o.errors.PlayerFatalError);t.InitializeError=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.version="13.0.0",t.buildNumber=1085;var n=r(6);t.HTML5Player=n.HTML5Player;var o=r(4);t.errors=o.errors;var i=r(5);t.helpers=i.helpers}])})},function(e,t,r){!function(t,n){e.exports=n(r(2))}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(5),i=function(e){function t(t,r,n){void 0===r&&(r={}),void 0===n&&(n=2e4);var o=e.call(this)||this;if(n<0)throw new Error("Invaid timeout.");return o._timeoutTimer=window.setTimeout(function(){return o._onManualTimeout()},n),o._xhr=new XMLHttpRequest,o._xhr.addEventListener("load",function(){return o._onLoad()}),o._xhr.addEventListener("abort",function(){return o._onAbort()}),o._xhr.addEventListener("error",function(){return o._onError()}),o._xhr.addEventListener("timeout",function(){return o._onTimeout()}),o._xhr.addEventListener("loadend",function(){return o._onLoadEnd()}),o._xhr.open("GET",t,!0),o._xhr.timeout=n,o._xhr.responseType=o._getResponseType(),Object.keys(r).forEach(function(e){return o._xhr.setRequestHeader(e,r[e])}),o._signalRequestStart(),o._xhr.send(),o}return n(t,e),t.prototype._abort=function(){this._xhr.abort()},t.prototype._onAbort=function(){this.hasCompleted()||this._provideResponse(new Error("Request was aborted."))},t.prototype._onManualTimeout=function(){this.hasCompleted()||(this._provideResponse(null),this._xhr.abort())},t.prototype._onTimeout=function(){this.hasCompleted()||this._provideResponse(null)},t.prototype._onLoad=function(){if(!this.hasCompleted()){var e=this._xhr;this._provideResponse({statusCode:e.status,data:this._xhr.response,headers:this._parseHeaders(e.getAllResponseHeaders()||"")})}},t.prototype._onError=function(){this.hasCompleted()||(0===this._xhr.status?this._provideResponse({statusCode:0,data:null,headers:{}}):this._provideResponse(new Error("An error occurred.")))},t.prototype._onLoadEnd=function(){window.clearTimeout(this._timeoutTimer),this.hasCompleted()||this._provideResponse(new Error("Unexpected error occurred."))},t.prototype._parseHeaders=function(e){var t={};if(!e)return t;for(var r=e.split("\r\n"),n=0,o=r.length;n<o;n++){var i=r[n],a=i.indexOf(": ");if(a>0){var s=i.substring(0,a).trim(),u=i.substring(a+2);t[s]=u}}return t},t}(o.loader.LoaderRequest);t.LoaderRequest=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(3);t.arrayBufferLoader={request:function(e){var t=e.url,r=e.headers,o=e.timeout;return new n.ArrayBufferLoaderRequest(t,r,o)}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4);t.stringLoader={request:function(e){var t=e.url,r=e.headers,o=e.timeout;return new n.StringLoaderRequest(t,r,o)}}},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype._getResponseType=function(){return"arraybuffer"},t}(o.LoaderRequest);t.ArrayBufferLoaderRequest=i},function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n(t,e),t.prototype._getResponseType=function(){return"text"},t}(o.LoaderRequest);t.StringLoaderRequest=i},function(t,r){t.exports=e},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.version="13.0.0",t.buildNumber=1085;var n=r(2);t.stringLoader=n.stringLoader;var o=r(1);t.arrayBufferLoader=o.arrayBufferLoader}])})},function(e,t,r){!function(t,n){e.exports=n(r(2),r(1))}(this,function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4)}([function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),i=r(3),a=r(1),s=o.helpers.abortableJob.AbortableJob,u=o.helpers.find,l=o.helpers.time,c=300,d=new a.Limiter(c,3e5),f=5e3,p=[i.renditions.encryptedHlsOpus,i.renditions.hlsOpus,i.renditions.encryptedHlsMp3,i.renditions.hlsMp3,i.renditions.httpMp3],h=function(e){function t(t){var r=t.loader,n=t.clientId,o=t.trackId,i=t.secretToken,a=void 0===i?null:i,s=t.requestAuthorization,u=void 0===s?null:s,l=t.excludedRenditions,c=void 0===l?[]:l,d=t.maxBitrate,f=void 0===d?1/0:d,p=t.endpointBaseUrl,h=void 0===p?"https://api.soundcloud.com/":p,_=t.encryptedStreamsEnabled,g=void 0!==_&&_,y=e.call(this)||this;if(y._getUrlsJob=null,y._clearResponseTimer=null,!r)throw new Error("loader required.");if("string"!=typeof n)throw new Error("clientId invalid.");if("number"!=typeof o)throw new Error("trackId invalid.");if(null!==a&&"string"!=typeof a)throw new Error("secretToken invalid.");if(null!==u&&"string"!=typeof u)throw new Error("requestAuthorizaton invalid.");if("number"!=typeof f||f<=0)throw new Error("maxBitrate must be > 0.");if("string"!=typeof h)throw new Error("endpointBaseUrl must be > 0.");if("boolean"!=typeof g)throw new Error("encryptedStreamsEnabled invalid.");return y._loader=r,y._clientId=n,y._requestAuthorization=u,y._trackId=o,y._secretToken=a,y._endpointBaseUrl=h,y._encryptedStreamsEnabled=g,y._excludedRenditions=c,y._excludedRenditionsOnLastURLRequest=c.slice(),y._maxBitrate=f,y}return n(t,e),t.prototype.getTrackId=function(){return this._trackId},t.prototype.excludeRendition=function(e){this._excludedRenditions.indexOf(e)<0&&this._excludedRenditions.push(e)},t.prototype.updateRequestAuthorization=function(e){if(null!==e&&"string"!=typeof e)throw new Error("requestAuthorizaton invalid.");this._requestAuthorization=e},t.prototype.clearCache=function(){this._clearResponseTimer&&(window.clearTimeout(this._clearResponseTimer),this._clearResponseTimer=null),this._getUrlsJob=null},t.prototype.getMaxBitrate=function(){return this._maxBitrate},t.prototype.setMaxBitrate=function(e){if("number"!=typeof e||e<=0)throw new Error("maxBitrate must be > 0.");this._maxBitrate=e},t.prototype.getUrl=function(){var e=this,t=this._maxBitrate,r=this._excludedRenditions,n=new s(function(){e._excludedRenditionsOnLastURLRequest.length===e._excludedRenditions.length?e.clearCache():e._excludedRenditionsOnLastURLRequest=e._excludedRenditions.slice();var n=e._getUrls(),o=n.whenComplete().then(function(e){var n=e.urls,o=e.timeRetrieved,i=null;return p.filter(function(e){return r.indexOf(e)<0}).some(function(e){var r=n.filter(function(t){return t.rendition===e}).map(function(e){return{url:e.url,bitrate:e.bitrate}}),a=u(r.sort(function(e,t){return t.bitrate-e.bitrate}),function(e){return e.bitrate<=t});return!!a&&(i={url:a.url,rendition:e,bitrate:a.bitrate,timeRetrieved:o},!0)}),i});return{result:o,abort:function(){return n.abort()}}});return n.run()},t.prototype._getUrls=function(){var e=this;return this._getUrlsJob||(this._getUrlsJob=new s(function(){var t=o.helpers.deferred.buildDeferred(),r=null,n=d.execute(function(){var n=e._requestAuthorization?{Authorization:e._requestAuthorization}:{},o=e._endpointBaseUrl+"i1/tracks/"+encodeURI(e._trackId+"")+"/streams?client_id="+encodeURIComponent(e._clientId);e._encryptedStreamsEnabled&&(o+="&with_encrypted_streams=true"),e._secretToken&&(o+="&secret_token="+encodeURIComponent(e._secretToken)),r=e._loader.request({url:o,headers:n});var a=r.getResponse().then(function(e){if(!e)throw new i.RequestError(null);if(200!==e.statusCode)throw new i.RequestError(e.statusCode);if(!e.data)throw new Error("Response contained no data.");var t=l.now(),r=JSON.parse(e.data),n=[];return Object.keys(r).map(function(e){var t=e.split("_"),o=t[0],i=t[1],a=t[2],s=parseInt(a,10);if(o&&i&&!isNaN(s)){var l=u(p,function(e){return e.scProtocol===o&&e.scFormat===i});l&&n.push({rendition:l,bitrate:s,url:r[e]})}}),{urls:n,timeRetrieved:t}});a.then(t.resolve,t.reject)});return{result:t.promise,abort:function(){n.abort(),r&&r.abort()}}}),this._clearResponseTimer=window.setTimeout(function(){e._clearResponseTimer=null,e._getUrlsJob=null},f)),this._getUrlsJob.run()},t}(i.BaseStreamUrlRetriever);t.StreamUrlRetriever=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){if(void 0===t&&(t=6e4),this._limit=e,this._period=t,this._jobs=[],this._jobsRunInPeriod=0,e<=0)throw new Error("limit must be > 0.");if(t<=0)throw new Error("period must be > 0.")}return e.prototype.execute=function(e){var t=this,r={job:e};return this._jobs.push(r),this._executeNextJob(),{abort:function(){var e=t._jobs.indexOf(r);e>=0&&t._jobs.splice(e,1)}}},e.prototype._executeNextJob=function(){var e=this;if(this._jobsRunInPeriod<this._limit){var t=this._jobs.shift();t&&(this._jobsRunInPeriod++,window.setTimeout(function(){e._jobsRunInPeriod--,e._executeNextJob()},this._period),t.job())}},e}();t.Limiter=n},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.version="12.0.0",t.buildNumber=404;var n=r(0);t.StreamUrlRetriever=n.StreamUrlRetriever}])})}])},function(e,t,r){var n;(function(e,o,i,a){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   2.3.0
	 */
(function(){"use strict";function s(e){return"function"==typeof e||"object"==typeof e&&null!==e}function u(e){return"function"==typeof e}function l(e){return"object"==typeof e&&null!==e}function c(e){J=e}function d(e){Z=e}function f(){var t=e.nextTick,r=e.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);return Array.isArray(r)&&"0"===r[1]&&"10"===r[2]&&(t=o),function(){t(y)}}function p(){return function(){W(y)}}function h(){var e=0,t=new te(y),r=document.createTextNode("");return t.observe(r,{characterData:!0}),function(){r.data=e=++e%2}}function _(){var e=new MessageChannel;return e.port1.onmessage=y,function(){e.port2.postMessage(0)}}function g(){return function(){setTimeout(y,1)}}function y(){for(var e=0;e<X;e+=2){var t=oe[e],r=oe[e+1];t(r),oe[e]=void 0,oe[e+1]=void 0}X=0}function v(){try{var e=r(29);return W=e.runOnLoop||e.runOnContext,p()}catch(e){return g()}}function m(){}function E(){return new TypeError("You cannot resolve a promise with itself")}function b(){return new TypeError("A promises callback cannot return that same promise.")}function w(e){try{return e.then}catch(e){return ue.error=e,ue}}function S(e,t,r,n){try{e.call(t,r,n)}catch(e){return e}}function P(e,t,r){Z(function(e){var n=!1,o=S(r,t,function(r){n||(n=!0,t!==r?x(e,r):O(e,r))},function(t){n||(n=!0,M(e,t))},"Settle: "+(e._label||" unknown promise"));!n&&o&&(n=!0,M(e,o))},e)}function R(e,t){t._state===ae?O(e,t._result):t._state===se?M(e,t._result):D(t,void 0,function(t){x(e,t)},function(t){M(e,t)})}function T(e,t){if(t.constructor===e.constructor)R(e,t);else{var r=w(t);r===ue?M(e,ue.error):void 0===r?O(e,t):u(r)?P(e,t,r):O(e,t)}}function x(e,t){e===t?M(e,E()):s(t)?T(e,t):O(e,t)}function A(e){e._onerror&&e._onerror(e._result),k(e)}function O(e,t){e._state===ie&&(e._result=t,e._state=ae,0!==e._subscribers.length&&Z(k,e))}function M(e,t){e._state===ie&&(e._state=se,e._result=t,Z(A,e))}function D(e,t,r,n){var o=e._subscribers,i=o.length;e._onerror=null,o[i]=t,o[i+ae]=r,o[i+se]=n,0===i&&e._state&&Z(k,e)}function k(e){var t=e._subscribers,r=e._state;if(0!==t.length){for(var n,o,i=e._result,a=0;a<t.length;a+=3)n=t[a],o=t[a+r],n?L(r,n,o,i):o(i);e._subscribers.length=0}}function I(){this.error=null}function C(e,t){try{return e(t)}catch(e){return le.error=e,le}}function L(e,t,r,n){var o,i,a,s,l=u(r);if(l){if(o=C(r,n),o===le?(s=!0,i=o.error,o=null):a=!0,t===o)return void M(t,b())}else o=n,a=!0;t._state!==ie||(l&&a?x(t,o):s?M(t,i):e===ae?O(t,o):e===se&&M(t,o))}function j(e,t){try{t(function(t){x(e,t)},function(t){M(e,t)})}catch(t){M(e,t)}}function N(e,t){var r=this;r._instanceConstructor=e,r.promise=new e(m),r._validateInput(t)?(r._input=t,r.length=t.length,r._remaining=t.length,r._init(),0===r.length?O(r.promise,r._result):(r.length=r.length||0,r._enumerate(),0===r._remaining&&O(r.promise,r._result))):M(r.promise,r._validationError())}function U(e){return new ce(this,e).promise}function F(e){function t(e){x(o,e)}function r(e){M(o,e)}var n=this,o=new n(m);if(!Y(e))return M(o,new TypeError("You must pass an array to race.")),o;for(var i=e.length,a=0;o._state===ie&&a<i;a++)D(n.resolve(e[a]),void 0,t,r);return o}function B(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var r=new t(m);return x(r,e),r}function q(e){var t=this,r=new t(m);return M(r,e),r}function H(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function z(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function G(e){this._id=_e++,this._state=void 0,this._result=void 0,this._subscribers=[],m!==e&&(u(e)||H(),this instanceof G||z(),j(this,e))}function V(){var e;if("undefined"!=typeof i)e=i;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var t=e.Promise;t&&"[object Promise]"===Object.prototype.toString.call(t.resolve())&&!t.cast||(e.Promise=ge)}var K;K=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var W,J,Q,Y=K,X=0,Z=({}.toString,function(e,t){oe[X]=e,oe[X+1]=t,X+=2,2===X&&(J?J(y):Q())}),$="undefined"!=typeof window?window:void 0,ee=$||{},te=ee.MutationObserver||ee.WebKitMutationObserver,re="undefined"!=typeof e&&"[object process]"==={}.toString.call(e),ne="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,oe=new Array(1e3);Q=re?f():te?h():ne?_():void 0===$?v():g();var ie=void 0,ae=1,se=2,ue=new I,le=new I;N.prototype._validateInput=function(e){return Y(e)},N.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},N.prototype._init=function(){this._result=new Array(this.length)};var ce=N;N.prototype._enumerate=function(){for(var e=this,t=e.length,r=e.promise,n=e._input,o=0;r._state===ie&&o<t;o++)e._eachEntry(n[o],o)},N.prototype._eachEntry=function(e,t){var r=this,n=r._instanceConstructor;l(e)?e.constructor===n&&e._state!==ie?(e._onerror=null,r._settledAt(e._state,t,e._result)):r._willSettleAt(n.resolve(e),t):(r._remaining--,r._result[t]=e)},N.prototype._settledAt=function(e,t,r){var n=this,o=n.promise;o._state===ie&&(n._remaining--,e===se?M(o,r):n._result[t]=r),0===n._remaining&&O(o,n._result)},N.prototype._willSettleAt=function(e,t){var r=this;D(e,void 0,function(e){r._settledAt(ae,t,e)},function(e){r._settledAt(se,t,e)})};var de=U,fe=F,pe=B,he=q,_e=0,ge=G;G.all=de,G.race=fe,G.resolve=pe,G.reject=he,G._setScheduler=c,G._setAsap=d,G._asap=Z,G.prototype={constructor:G,then:function(e,t){var r=this,n=r._state;if(n===ae&&!e||n===se&&!t)return this;var o=new this.constructor(m),i=r._result;if(n){var a=arguments[n-1];Z(function(){L(n,o,a,i)})}else D(r,o,e,t);return o},catch:function(e){return this.then(null,e)}};var ye=V,ve={Promise:ge,polyfill:ye};r(23).amd?(n=function(){return ve}.call(t,r,t,a),!(void 0!==n&&(a.exports=n))):"undefined"!=typeof a&&a.exports?a.exports=ve:"undefined"!=typeof this&&(this.ES6Promise=ve),ye()}).call(this)}).call(t,r(6),r(25).setImmediate,function(){return this}(),r(24)(e))},function(e,t){"use strict";var r={oauth_token:void 0,baseURL:"https://api.soundcloud.com",connectURL:"//connect.soundcloud.com",client_id:void 0,redirect_uri:void 0};e.exports={get:function(e){return r[e]},set:function(e,t){t&&(r[e]=t)}}},function(e,t,r){(function(t){"use strict";var n=r(3),o=r(20),i=r(2).Promise,a=function(e,r,n,o){var a=void 0,s=new i(function(i){var s=t.FormData&&n instanceof FormData;a=new XMLHttpRequest,a.upload&&a.upload.addEventListener("progress",o),a.open(e,r,!0),s||a.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),a.onreadystatechange=function(){4===a.readyState&&i({responseText:a.responseText,request:a})},a.send(n)});return s.request=a,s},s=function(e){var t=e.responseText,r=e.request,n=void 0,o=void 0;try{o=JSON.parse(t)}catch(e){}return o?o.errors&&(n={message:""},o.errors[0]&&o.errors[0].error_message&&(n={message:o.errors[0].error_message})):n=r?{message:"HTTP Error: "+r.status}:{message:"Unknown error"},n&&(n.status=r.status),{json:o,error:n}},u=function e(t,r,n,o){var i=a(t,r,n,o),u=i.then(function(t){var r=t.responseText,n=t.request,o=s({responseText:r,request:n});if(o.json&&"302 - Found"===o.json.status)return e("GET",o.json.location,null);if(200!==n.status&&o.error)throw o.error;return o.json});return u.request=i.request,u},l=function(e,t,r){Object.keys(t).forEach(function(n){r?e.append(n,t[n]):e[n]=t[n]})};e.exports={request:function(e,r){var i=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],a=arguments.length<=3||void 0===arguments[3]?function(){}:arguments[3],s=n.get("oauth_token"),c=n.get("client_id"),d={},f=t.FormData&&i instanceof FormData,p=void 0,h=void 0;return d.format="json",s?d.oauth_token=s:d.client_id=c,l(i,d,f),"GET"!==e&&(p=f?i:o.encode(i),i={oauth_token:s}),r="/"!==r[0]?"/"+r:r,h=""+n.get("baseURL")+r+"?"+o.encode(i),u(e,h,p,a)},oEmbed:function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=t.element;delete t.element,t.url=e;var n="https://soundcloud.com/oembed.json?"+o.encode(t);return u("GET",n,null).then(function(e){return r&&e.html&&(r.innerHTML=e.html),e})},upload:function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.asset_data||e.file,r=n.get("oauth_token")&&e.title&&t;if(!r)return new i(function(e,t){t({status:0,error_message:"oauth_token needs to be present and title and asset_data / file passed as parameters"})});var o=Object.keys(e),a=new FormData;return o.forEach(function(t){var r=e[t];"file"===t&&(t="asset_data",r=e.file),a.append("track["+t+"]",r)}),this.request("POST","/tracks",a,e.progress)},resolve:function(e){return this.request("GET","/resolve",{url:e,_status_code_map:{302:200}})}}}).call(t,function(){return this}())},function(e,t){"use strict";var r={};e.exports={get:function(e){return r[e]},set:function(e,t){r[e]=t}}},function(e,t){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(e){if(c===setTimeout)return setTimeout(e,0);if((c===r||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===n||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){_&&p&&(_=!1,p.length?h=p.concat(h):g=-1,h.length&&s())}function s(){if(!_){var e=o(a);_=!0;for(var t=h.length;t;){for(p=h,h=[];++g<t;)p&&p[g].run();g=-1,t=h.length}p=null,_=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function l(){}var c,d,f=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:r}catch(e){c=r}try{d="function"==typeof clearTimeout?clearTimeout:n}catch(e){d=n}}();var p,h=[],_=!1,g=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];h.push(new u(e,t)),1!==h.length||_||o(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=l,f.addListener=l,f.once=l,f.off=l,f.removeListener=l,f.removeAllListeners=l,f.emit=l,f.prependListener=l,f.prependOnceListener=l,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(e,t,r){"use strict";var n=r(22);t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e){return"string"!=typeof e?{}:(e=e.trim().replace(/^(\?|#|&)/,""),e?e.split("&").reduce(function(e,t){var r=t.replace(/\+/g," ").split("="),n=r.shift(),o=r.length>0?r.join("="):void 0;return n=decodeURIComponent(n),o=void 0===o?null:decodeURIComponent(o),e.hasOwnProperty(n)?Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]:e[n]=o,e},{}):{})},t.stringify=function(e){return e?Object.keys(e).sort().map(function(t){var r=e[t];return Array.isArray(r)?r.sort().map(function(e){return n(t)+"="+n(e)}).join("&"):n(t)+"="+n(r)}).filter(function(e){return e.length>0}).join("&"):""}},function(e,t,r){"use strict";var n=r(7),o=r(5);e.exports={notifyDialog:function(e){var t=n.parse(e.search),r=n.parse(e.hash),i={oauth_token:t.access_token||r.access_token,dialog_id:t.state||r.state,error:t.error||r.error,error_description:t.error_description||r.error_description},a=o.get(i.dialog_id);a&&a.handleConnectResponse(i)}}},function(e,t,r){"use strict";var n=r(3),o=r(11),i=r(2).Promise,a=function(e){return n.set("oauth_token",e.oauth_token),e};e.exports=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=n.get("oauth_token");if(t)return new i(function(e){e({oauth_token:t})});var r={client_id:e.client_id||n.get("client_id"),redirect_uri:e.redirect_uri||n.get("redirect_uri"),response_type:"code_and_token",scope:e.scope||"non-expiring",display:"popup"};if(!r.client_id||!r.redirect_uri)throw new Error("Options client_id and redirect_uri must be passed");var s=new o(r);return s.open().then(a)}},function(e,t,r){"use strict";var n=r(2).Promise;e.exports=function(){var e={};return e.promise=new n(function(t,r){e.resolve=t,e.reject=r}),e}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(10),a=r(5),s=r(12),u=r(7),l="SoundCloud_Dialog",c=function(){return[l,Math.ceil(1e6*Math.random()).toString(16)].join("_")},d=function(e){return"https://soundcloud.com/connect?"+u.stringify(e)},f=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];n(this,e),this.id=c(),this.options=t,this.options.state=this.id,this.width=420,this.height=670,this.deferred=i()}return o(e,[{key:"open",value:function(){var e=d(this.options);return this.popup=s.open(e,this.width,this.height),a.set(this.id,this),this.deferred.promise}},{key:"handleConnectResponse",value:function(e){var t=e.error;t?this.deferred.reject(e):this.deferred.resolve(e),this.popup.close()}}]),e}();e.exports=f},function(e,t){"use strict";e.exports={open:function(e,t,r){var n={},o=void 0;return n.location=1,n.width=t,n.height=r,n.left=window.screenX+(window.outerWidth-t)/2,n.top=window.screenY+(window.outerHeight-r)/2,n.toolbar="no",n.scrollbars="yes",o=Object.keys(n).map(function(e){return e+"="+n[e]}).join(", "),window.open(e,n.name,o)}}},function(e,t,r){"use strict";var n=r(19),o=r(1).MaestroCore,i=o.errors.PlayerFatalError,a=o.State,s=r(1).SCAudio.errors,u=s.GeoBlockedError,l=s.NoStreamsError,c=s.TimedOutError,d=s.NotSupportedError,f=1e3/60;e.exports=function(e){function t(){switch(e.getState()){case a.PLAYING:return"playing";case a.PAUSED:return e.isEnded()?"ended":"paused";case a.DEAD:return e.getFatalError()?"error":"dead";case a.LOADING:default:return"loading"}}function r(){function t(){window.clearTimeout(r),e.isPlaying()&&!e.isEnded()&&(r=window.setTimeout(t,f));var o=e.getPosition();o!==n&&(n=o,s.trigger("time",o))}var r=0,n=null;e.onChange.subscribe(function(e){var n=e.playing,o=e.seeking,i=e.dead;i?window.clearTimeout(r):void 0===n&&void 0===o||t()})}var o=!1;e.onStateChange.subscribe(function(){return s.trigger("state-change",t())}),e.onPlay.subscribe(function(){s.trigger(o?"play-resume":"play-start"),o=!0}),e.onPlayIntent.subscribe(function(){return s.trigger("play")}),e.onPlayRejection.subscribe(function(e){return s.trigger("play-rejection",e)}),e.onPauseIntent.subscribe(function(){return s.trigger("pause")}),e.onSeek.subscribe(function(){return s.trigger("seeked")}),e.onSeekRejection.subscribe(function(e){return s.trigger("seek-rejection",e)}),e.onLoadStart.subscribe(function(){return s.trigger("buffering_start")}),e.onLoadEnd.subscribe(function(){return s.trigger("buffering_end")}),e.onEnded.subscribe(function(){return s.trigger("finish")}),e.onError.subscribe(function(e){e instanceof u?s.trigger("geo_blocked"):e instanceof l?s.trigger("no_streams"):e instanceof c?s.trigger("no_connection"):e instanceof d?s.trigger("no_protocol"):e instanceof i&&s.trigger("audio_error")});var s={play:e.play.bind(e),pause:e.pause.bind(e),seek:e.seek.bind(e),getVolume:e.getVolume.bind(e),setVolume:e.setVolume.bind(e),currentTime:e.getPosition.bind(e),getDuration:e.getDuration.bind(e),isBuffering:e.isLoading.bind(e),isPlaying:e.isPlaying.bind(e),isActuallyPlaying:e.isActuallyPlaying.bind(e),isEnded:e.isEnded.bind(e),isDead:e.isDead.bind(e),kill:e.kill.bind(e),hasErrored:function(){return!!e.getFatalError()},getState:t};return n.mixin(s),r(),s}},function(e,t){(function(t){"use strict";var r=t.AudioContext||t.webkitAudioContext,n=null;e.exports=function(){return n?n:n=new r}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";var r=t.navigator.getUserMedia||t.navigator.webkitGetUserMedia||t.navigator.mozGetUserMedia;e.exports=function(e,n,o){r.call(t.navigator,e,n,o)}}).call(t,function(){return this}())},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(14),a=r(15),s=r(2).Promise,u=r(28),l=function(){var e=this,t=this.context;return new s(function(r,n){e.source?e.source instanceof AudioNode?r(e.source):n(new Error("source needs to be an instance of AudioNode")):a({audio:!0},function(n){e.stream=n,e.source=t.createMediaStreamSource(n),r(e.source)}.bind(e),n)})},c=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];n(this,e),this.context=t.context||i(),this._recorder=null,this.source=t.source,this.stream=null}return o(e,[{key:"start",value:function(){var e=this;return l.call(this).then(function(t){return e._recorder=new u(t),e._recorder.record(),t})}},{key:"stop",value:function(){if(this._recorder&&this._recorder.stop(),this.stream)if(this.stream.stop)this.stream.stop();else if(this.stream.getTracks){var e=this.stream.getTracks()[0];e&&e.stop()}}},{key:"getBuffer",value:function(){var e=this;return new s(function(t,r){e._recorder?e._recorder.getBuffer(function(r){var n=e.context.sampleRate,o=e.context.createBuffer(2,r[0].length,n);o.getChannelData(0).set(r[0]),o.getChannelData(1).set(r[1]),t(o)}.bind(e)):r(new Error("Nothing has been recorded yet."))})}},{key:"getWAV",value:function(){var e=this;return new s(function(t,r){e._recorder?e._recorder.exportWAV(function(e){t(e)}):r(new Error("Nothing has been recorded yet."))})}},{key:"play",value:function(){var e=this;return this.getBuffer().then(function(t){var r=e.context.createBufferSource();return r.buffer=t,r.connect(e.context.destination),r.start(0),r})}},{key:"saveAs",value:function(e){return this.getWAV().then(function(t){u.forceDownload(t,e)})}},{key:"delete",value:function(){this._recorder&&(this._recorder.stop(),this._recorder.clear(),this._recorder=null),this.stream&&this.stream.stop()}}]),e}();e.exports=c},function(e,t,r){"use strict";var n=r(4),o=r(3),i=r(13),a=r(1).SCAudio,s=r(1).SCAudioPublicApiStreamURLRetriever.StreamUrlRetriever,u=r(1).MaestroHTML5Player.HTML5Player,l=r(1).MaestroHLSMSEPlayer.HLSMSEPlayer,c=r(1).MaestroLoaders.stringLoader,d=3e3;e.exports=function(e,t){var r=t?{secret_token:t}:{};return n.request("GET",e,r).then(function(e){function r(){var r=n+"/tracks/"+encodeURIComponent(e.id)+"/plays?client_id="+encodeURIComponent(f);t&&(r+="&secret_token="+encodeURIComponent(t));var o=new XMLHttpRequest;o.open("POST",r,!0),o.send()}var n=o.get("baseURL"),f=o.get("client_id"),p=o.get("oauth_token"),h=!1,_=new s({clientId:f,secretToken:t,trackId:e.id,requestAuthorization:p?"OAuth "+p:null,loader:c}),g=a.buildPlayer({playerClasses:[u,l],streamUrlRetriever:_,fadeOutDuration:"SNIP"===e.policy?d:0});return g.onPlay.subscribe(function(){h||(h=!0,r())}),g.onEnded.subscribe(function(){g.pause()}),g.onPlayIntent.subscribe(function(){g.isEnded()&&g.seek(0)}),i(g)})},e.exports.activateAudioElement=function(){a.activateAudioElement()}},function(e,t,r){!function(){function r(){return{keys:Object.keys||function(e){if("object"!=typeof e&&"function"!=typeof e||null===e)throw new TypeError("keys() called on a non-object");var t,r=[];for(t in e)e.hasOwnProperty(t)&&(r[r.length]=t);return r},uniqueId:function(e){var t=++s+"";return e?e+t:t},has:function(e,t){return i.call(e,t)},each:function(e,t,r){if(null!=e)if(o&&e.forEach===o)e.forEach(t,r);else if(e.length===+e.length)for(var n=0,i=e.length;n<i;n++)t.call(r,e[n],n,e);else for(var a in e)this.has(e,a)&&t.call(r,e[a],a,e)},once:function(e){var t,r=!1;return function(){return r?t:(r=!0,t=e.apply(this,arguments),e=null,t)}}}}var n,o=Array.prototype.forEach,i=Object.prototype.hasOwnProperty,a=Array.prototype.slice,s=0,u=r();n={on:function(e,t,r){if(!c(this,"on",e,[t,r])||!t)return this;this._events||(this._events={});var n=this._events[e]||(this._events[e]=[]);return n.push({callback:t,context:r,ctx:r||this}),this},once:function(e,t,r){if(!c(this,"once",e,[t,r])||!t)return this;var n=this,o=u.once(function(){n.off(e,o),t.apply(this,arguments)});return o._callback=t,this.on(e,o,r)},off:function(e,t,r){var n,o,i,a,s,l,d,f;if(!this._events||!c(this,"off",e,[t,r]))return this;if(!e&&!t&&!r)return this._events={},this;for(a=e?[e]:u.keys(this._events),s=0,l=a.length;s<l;s++)if(e=a[s],i=this._events[e]){if(this._events[e]=n=[],t||r)for(d=0,f=i.length;d<f;d++)o=i[d],(t&&t!==o.callback&&t!==o.callback._callback||r&&r!==o.context)&&n.push(o);n.length||delete this._events[e]}return this},trigger:function(e){if(!this._events)return this;var t=a.call(arguments,1);if(!c(this,"trigger",e,t))return this;var r=this._events[e],n=this._events.all;return r&&d(r,t),n&&d(n,arguments),this},stopListening:function(e,t,r){var n=this._listeners;if(!n)return this;var o=!t&&!r;"object"==typeof t&&(r=this),e&&((n={})[e._listenerId]=e);for(var i in n)n[i].off(t,r,this),o&&delete this._listeners[i];return this}};var l=/\s+/,c=function(e,t,r,n){if(!r)return!0;if("object"==typeof r){for(var o in r)e[t].apply(e,[o,r[o]].concat(n));return!1}if(l.test(r)){for(var i=r.split(l),a=0,s=i.length;a<s;a++)e[t].apply(e,[i[a]].concat(n));return!1}return!0},d=function(e,t){var r,n=-1,o=e.length,i=t[0],a=t[1],s=t[2];switch(t.length){case 0:for(;++n<o;)(r=e[n]).callback.call(r.ctx);return;case 1:for(;++n<o;)(r=e[n]).callback.call(r.ctx,i);return;case 2:for(;++n<o;)(r=e[n]).callback.call(r.ctx,i,a);return;case 3:for(;++n<o;)(r=e[n]).callback.call(r.ctx,i,a,s);return;default:for(;++n<o;)(r=e[n]).callback.apply(r.ctx,t)}},f={listenTo:"on",listenToOnce:"once"};u.each(f,function(e,t){n[t]=function(t,r,n){var o=this._listeners||(this._listeners={}),i=t._listenerId||(t._listenerId=u.uniqueId("l"));return o[i]=t,"object"==typeof r&&(n=this),t[e](r,n,this),this}}),n.bind=n.on,n.unbind=n.off,n.mixin=function(e){var t=["on","once","off","trigger","stopListening","listenTo","listenToOnce","bind","unbind"];return u.each(t,function(t){e[t]=this[t]},this),e},"undefined"!=typeof e&&e.exports&&(t=e.exports=n),t.BackboneEvents=n}(this)},function(e,t,r){e.exports=r(18)},function(e,t){e.exports={encode:function(e,t){function r(e){return e.filter(function(e){return"string"==typeof e&&e.length}).join("&")}function n(e){var t=Object.keys(e);return d?t.sort():t}function o(e,t){var o=":name[:prop]";return r(n(t).map(function(r){return a(o.replace(/:name/,e).replace(/:prop/,r),t[r])}))}function i(e,t){var n=":name[]";return r(t.map(function(t){return a(n.replace(/:name/,e),t)}))}function a(e,t){var r=/%20/g,n=encodeURIComponent,a=typeof t,s=null;return Array.isArray(t)?s=i(e,t):"string"===a?s=n(e)+"="+u(t):"number"===a?s=n(e)+"="+n(t).replace(r,"+"):"boolean"===a?s=n(e)+"="+t:"object"===a&&(null!==t?s=o(e,t):c||(s=n(e)+"=null")),s}function s(e){return"%"+("0"+e.charCodeAt(0).toString(16)).slice(-2).toUpperCase()}function u(e){return e.replace(/[^ !'()~\*]*/g,encodeURIComponent).replace(/ /g,"+").replace(/[!'()~\*]/g,s)}var l="object"==typeof t?t:{},c=l.ignorenull||!1,d=l.sorted||!1;return r(n(e).map(function(t){return a(t,e[t])}))}}},function(e,t,r){(function(e,t){!function(e,r){"use strict";function n(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),r=0;r<t.length;r++)t[r]=arguments[r+1];var n={callback:e,args:t};return _[h]=n,p(h),h++}function o(e){delete _[e]}function i(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(r,n)}}function a(e){if(g)setTimeout(a,0,e);else{var t=_[e];if(t){g=!0;try{i(t)}finally{o(e),g=!1}}}}function s(){p=function(e){t.nextTick(function(){a(e)})}}function u(){if(e.postMessage&&!e.importScripts){var t=!0,r=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=r,t}}function l(){var t="setImmediate$"+Math.random()+"$",r=function(r){r.source===e&&"string"==typeof r.data&&0===r.data.indexOf(t)&&a(+r.data.slice(t.length))};e.addEventListener?e.addEventListener("message",r,!1):e.attachEvent("onmessage",r),p=function(r){e.postMessage(t+r,"*")}}function c(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;a(t)},p=function(t){e.port2.postMessage(t)}}function d(){var e=y.documentElement;p=function(t){var r=y.createElement("script");r.onreadystatechange=function(){a(t),r.onreadystatechange=null,e.removeChild(r),r=null},e.appendChild(r)}}function f(){p=function(e){setTimeout(a,0,e)}}if(!e.setImmediate){var p,h=1,_={},g=!1,y=e.document,v=Object.getPrototypeOf&&Object.getPrototypeOf(e);v=v&&v.setTimeout?v:e,"[object process]"==={}.toString.call(e.process)?s():u()?l():e.MessageChannel?c():y&&"onreadystatechange"in y.createElement("script")?d():f(),v.setImmediate=n,v.clearImmediate=o}}("undefined"==typeof self?"undefined"==typeof e?this:e:self)}).call(t,function(){return this}(),r(6))},function(e,t){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}},function(e,t){e.exports=function(){throw new Error("define cannot be used indirect")}},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t,r){function n(e,t){this._id=e,this._clearFn=t}var o=Function.prototype.apply;t.setTimeout=function(){return new n(o.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new n(o.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},n.prototype.unref=n.prototype.ref=function(){},n.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},r(21),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t){var r=window.URL||window.webkitURL;e.exports=function(e,t){try{try{var n;try{var o=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder;n=new o,n.append(e),n=n.getBlob()}catch(t){n=new Blob([e])}return new Worker(r.createObjectURL(n))}catch(t){return new Worker("data:application/javascript,"+encodeURIComponent(e))}}catch(e){return new Worker(t)}}},function(e,t,r){e.exports=function(){return r(26)('!function(t){function n(r){if(e[r])return e[r].exports;var a=e[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n){(function(t){function n(t){h=t.sampleRate,v=t.numChannels,s()}function e(t){for(var n=0;n<v;n++)p[n].push(t[n]);g+=t[0].length}function r(t){for(var n=[],e=0;e<v;e++)n.push(i(p[e],g));if(2===v)var r=f(n[0],n[1]);else var r=n[0];var a=l(r),o=new Blob([a],{type:t});this.postMessage(o)}function a(){for(var t=[],n=0;n<v;n++)t.push(i(p[n],g));this.postMessage(t)}function o(){g=0,p=[],s()}function s(){for(var t=0;t<v;t++)p[t]=[]}function i(t,n){for(var e=new Float32Array(n),r=0,a=0;a<t.length;a++)e.set(t[a],r),r+=t[a].length;return e}function f(t,n){for(var e=t.length+n.length,r=new Float32Array(e),a=0,o=0;a<e;)r[a++]=t[o],r[a++]=n[o],o++;return r}function c(t,n,e){for(var r=0;r<e.length;r++,n+=2){var a=Math.max(-1,Math.min(1,e[r]));t.setInt16(n,a<0?32768*a:32767*a,!0)}}function u(t,n,e){for(var r=0;r<e.length;r++)t.setUint8(n+r,e.charCodeAt(r))}function l(t){var n=new ArrayBuffer(44+2*t.length),e=new DataView(n);return u(e,0,"RIFF"),e.setUint32(4,36+2*t.length,!0),u(e,8,"WAVE"),u(e,12,"fmt "),e.setUint32(16,16,!0),e.setUint16(20,1,!0),e.setUint16(22,v,!0),e.setUint32(24,h,!0),e.setUint32(28,4*h,!0),e.setUint16(32,2*v,!0),e.setUint16(34,16,!0),u(e,36,"data"),e.setUint32(40,2*t.length,!0),c(e,44,t),e}var h,v,g=0,p=[];t.onmessage=function(t){switch(t.data.command){case"init":n(t.data.config);break;case"record":e(t.data.buffer);break;case"exportWAV":r(t.data.type);break;case"getBuffer":a();break;case"clear":o()}}}).call(n,function(){return this}())}]);\n//# sourceMappingURL=9f9aac32c9a7432b5555.worker.js.map',r.p+"9f9aac32c9a7432b5555.worker.js")}},function(e,t,r){var n=r(27),o=function(e,t){var r=t||{},o=r.bufferLen||4096,i=r.numChannels||2;this.context=e.context,this.node=(this.context.createScriptProcessor||this.context.createJavaScriptNode).call(this.context,o,i,i);var a=new n;a.postMessage({command:"init",config:{sampleRate:this.context.sampleRate,numChannels:i}});var s,u=!1;this.node.onaudioprocess=function(e){if(u){for(var t=[],r=0;r<i;r++)t.push(e.inputBuffer.getChannelData(r));a.postMessage({command:"record",buffer:t})}},this.configure=function(e){for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t])},this.record=function(){u=!0},this.stop=function(){u=!1},this.clear=function(){a.postMessage({command:"clear"})},this.getBuffer=function(e){s=e||r.callback,a.postMessage({command:"getBuffer"})},this.exportWAV=function(e,t){if(s=e||r.callback,t=t||r.type||"audio/wav",!s)throw new Error("Callback not set");a.postMessage({command:"exportWAV",type:t})},a.onmessage=function(e){var t=e.data;s(t)},e.connect(this.node),this.node.connect(this.context.destination)};o.forceDownload=function(e,t){var r=(window.URL||window.webkitURL).createObjectURL(e),n=window.document.createElement("a");n.href=r,n.download=t||"output.wav";var o=document.createEvent("Event");o.initEvent("click",!0,!0),n.dispatchEvent(o)},e.exports=o},function(e,t){}])});
//# sourceMappingURL=sdk.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1).setImmediate, __webpack_require__(1).clearImmediate))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(3)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var Promise = global.Promise || __webpack_require__(15)
var widget = __webpack_require__(16)

var WIDGET_METHODS = Object.freeze([
  'play',
  'pause',
  'toggle',
  'seekTo',
  'setVolume',
  'next',
  'prev',
  'skip'
])
var WIDGET_METHODS_WITH_CALLBACKS = Object.freeze([
  'getVolume',
  'getDuration',
  'getPosition',
  'getSounds',
  'getCurrentSound',
  'getCurrentSoundIndex',
  'isPaused'
])

var LOAD_PARAM_MAPPING = Object.freeze({
  autoPlay: 'auto_play',
  showArtwork: 'show_artwork',
  showComments: 'show_comments',
  showPlaycount: 'show_playcount',
  showUser: 'show_user',
  startTrack: 'start_track'
})

function SoundcloudWidget (iframe) {
  this._widget = widget(iframe)
}

SoundcloudWidget.events = widget.Events

SoundcloudWidget.prototype.load = function (url, options) {
  return new Promise(function (resolve) {
    options = options || {}
    options.callback = resolve

    convertCamelCaseParamsToSnakeCase(options)

    this._widget.load(url, options)
  }.bind(this))
}

SoundcloudWidget.prototype.on = applyFunction('bind')
SoundcloudWidget.prototype.bind = SoundcloudWidget.prototype.on
SoundcloudWidget.prototype.removeListener = applyFunction('unbind')
SoundcloudWidget.prototype.unbind = SoundcloudWidget.prototype.removeListener

WIDGET_METHODS.forEach(function (method) {
  SoundcloudWidget.prototype[method] = applyFunction(method)
})

WIDGET_METHODS_WITH_CALLBACKS.forEach(function (method) {
  SoundcloudWidget.prototype[method] = applyPromisifiedFunction(method)
})

function applyFunction (originalName) {
  return function () {
    this._widget[originalName].apply(this._widget, arguments)
  }
}

function applyPromisifiedFunction (originalName) {
  return function () {
    return new Promise(function (resolve, reject) {
      this._widget[originalName](function (result) {
        resolve(result)
      })
    }.bind(this))
  }
}

function convertCamelCaseParamsToSnakeCase (options) {
  for (var param in LOAD_PARAM_MAPPING) {
    if (!LOAD_PARAM_MAPPING.hasOwnProperty(param)) {
      continue
    }

    if (options[param] != null) {
      var mapping = LOAD_PARAM_MAPPING[param]
      options[mapping] = options[param]
    }
  }
}

module.exports = SoundcloudWidget

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {

// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;

function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function() {
    fn.apply(thisArg, arguments);
  };
}

function Promise(fn) {
  if (!(this instanceof Promise))
    throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  this._state = 0;
  this._handled = false;
  this._value = undefined;
  this._deferreds = [];

  doResolve(fn, this);
}

function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function() {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}

function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (
      newValue &&
      (typeof newValue === 'object' || typeof newValue === 'function')
    ) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}

function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}

function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function() {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }

  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(
      function(value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function(reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      }
    );
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}

Promise.prototype['catch'] = function(onRejected) {
  return this.then(null, onRejected);
};

Promise.prototype.then = function(onFulfilled, onRejected) {
  var prom = new this.constructor(noop);

  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};

Promise.prototype['finally'] = function(callback) {
  var constructor = this.constructor;
  return this.then(
    function(value) {
      return constructor.resolve(callback()).then(function() {
        return value;
      });
    },
    function(reason) {
      return constructor.resolve(callback()).then(function() {
        return constructor.reject(reason);
      });
    }
  );
};

Promise.all = function(arr) {
  return new Promise(function(resolve, reject) {
    if (!arr || typeof arr.length === 'undefined')
      throw new TypeError('Promise.all accepts an array');
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(
              val,
              function(val) {
                res(i, val);
              },
              reject
            );
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.resolve = function(value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }

  return new Promise(function(resolve) {
    resolve(value);
  });
};

Promise.reject = function(value) {
  return new Promise(function(resolve, reject) {
    reject(value);
  });
};

Promise.race = function(values) {
  return new Promise(function(resolve, reject) {
    for (var i = 0, len = values.length; i < len; i++) {
      values[i].then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
  (typeof setImmediate === 'function' &&
    function(fn) {
      setImmediate(fn);
    }) ||
  function(fn) {
    setTimeoutFunc(fn, 0);
  };

Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};

module.exports = Promise;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1).setImmediate))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var SC=SC||{};SC.Widget=function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t,e){function r(n){return!!(""===n||n&&n.charCodeAt&&n.substr)}function o(n){return!!(n&&n.constructor&&n.call&&n.apply)}function i(n){return!(!n||1!==n.nodeType||"IFRAME"!==n.nodeName.toUpperCase())}function a(n){var t,e=!1;for(t in b)if(b.hasOwnProperty(t)&&b[t]===n){e=!0;break}return e}function s(n){var t,e,r;for(t=0,e=I.length;t<e&&(r=n(I[t]),r!==!1);t++);}function u(n){var t,e,r,o="";for("//"===n.substr(0,2)&&(n=window.location.protocol+n),r=n.split("/"),t=0,e=r.length;t<e&&t<3;t++)o+=r[t],t<2&&(o+="/");return o}function c(n){return n.contentWindow?n.contentWindow:n.contentDocument&&"parentWindow"in n.contentDocument?n.contentDocument.parentWindow:null}function l(n){var t,e=[];for(t in n)n.hasOwnProperty(t)&&e.push(n[t]);return e}function d(n,t,e){e.callbacks[n]=e.callbacks[n]||[],e.callbacks[n].push(t)}function E(n,t){var e,r=!0;return t.callbacks[n]=[],s(function(t){if(e=t.callbacks[n]||[],e.length)return r=!1,!1}),r}function f(n,t,e){var r,o,i=c(e);return!!i.postMessage&&(r=e.getAttribute("src").split("?")[0],o=JSON.stringify({method:n,value:t}),"//"===r.substr(0,2)&&(r=window.location.protocol+r),r=r.replace(/http:\/\/(w|wt).soundcloud.com/,"https://$1.soundcloud.com"),void i.postMessage(o,r))}function p(n){var t;return s(function(e){if(e.instance===n)return t=e,!1}),t}function h(n){var t;return s(function(e){if(c(e.element)===n)return t=e,!1}),t}function v(n,t){return function(e){var r=o(e),i=p(this),a=!r&&t?e:null,s=r&&!t?e:null;return s&&d(n,s,i),f(n,a,i.element),this}}function S(n,t,e){var r,o,i;for(r=0,o=t.length;r<o;r++)i=t[r],n[i]=v(i,e)}function R(n,t,e){return n+"?url="+t+"&"+g(e)}function g(n){var t,e,r=[];for(t in n)n.hasOwnProperty(t)&&(e=n[t],r.push(t+"="+("start_track"===t?parseInt(e,10):e?"true":"false")));return r.join("&")}function m(n,t,e){var r,o,i=n.callbacks[t]||[];for(r=0,o=i.length;r<o;r++)i[r].apply(n.instance,e);(a(t)||t===L.READY)&&(n.callbacks[t]=[])}function w(n){var t,e,r,o,i;try{e=JSON.parse(n.data)}catch(a){return!1}return t=h(n.source),r=e.method,o=e.value,(!t||A(n.origin)===A(t.domain))&&(t?(r===L.READY&&(t.isReady=!0,m(t,C),E(C,t)),r!==L.PLAY||t.playEventFired||(t.playEventFired=!0),r!==L.PLAY_PROGRESS||t.playEventFired||(t.playEventFired=!0,m(t,L.PLAY,[o])),i=[],void 0!==o&&i.push(o),void m(t,r,i)):(r===L.READY&&T.push(n.source),!1))}function A(n){return n.replace(Y,"")}var _,y,O,D=e(1),b=e(2),P=e(3),L=D.api,N=D.bridge,T=[],I=[],C="__LATE_BINDING__",k="http://wt.soundcloud.dev:9200/",Y=/^http(?:s?)/;window.addEventListener?window.addEventListener("message",w,!1):window.attachEvent("onmessage",w),n.exports=O=function(n,t,e){if(r(n)&&(n=document.getElementById(n)),!i(n))throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");t&&(e=e||{},n.src=R(k,t,e));var o,a,s=h(c(n));return s&&s.instance?s.instance:(o=T.indexOf(c(n))>-1,a=new _(n),I.push(new y(a,n,o)),a)},O.Events=L,window.SC=window.SC||{},window.SC.Widget=O,y=function(n,t,e){this.instance=n,this.element=t,this.domain=u(t.getAttribute("src")),this.isReady=!!e,this.callbacks={}},_=function(){},_.prototype={constructor:_,load:function(n,t){if(n){t=t||{};var e=this,r=p(this),o=r.element,i=o.src,a=i.substr(0,i.indexOf("?"));r.isReady=!1,r.playEventFired=!1,o.onload=function(){e.bind(L.READY,function(){var n,e=r.callbacks;for(n in e)e.hasOwnProperty(n)&&n!==L.READY&&f(N.ADD_LISTENER,n,r.element);t.callback&&t.callback()})},o.src=R(a,n,t)}},bind:function(n,t){var e=this,r=p(this);return r&&r.element&&(n===L.READY&&r.isReady?setTimeout(t,1):r.isReady?(d(n,t,r),f(N.ADD_LISTENER,n,r.element)):d(C,function(){e.bind(n,t)},r)),this},unbind:function(n){var t,e=p(this);e&&e.element&&(t=E(n,e),n!==L.READY&&t&&f(N.REMOVE_LISTENER,n,e.element))}},S(_.prototype,l(b)),S(_.prototype,l(P),!0)},function(n,t){t.api={LOAD_PROGRESS:"loadProgress",PLAY_PROGRESS:"playProgress",PLAY:"play",PAUSE:"pause",FINISH:"finish",SEEK:"seek",READY:"ready",OPEN_SHARE_PANEL:"sharePanelOpened",CLICK_DOWNLOAD:"downloadClicked",CLICK_BUY:"buyClicked",ERROR:"error"},t.bridge={REMOVE_LISTENER:"removeEventListener",ADD_LISTENER:"addEventListener"}},function(n,t){n.exports={GET_VOLUME:"getVolume",GET_DURATION:"getDuration",GET_POSITION:"getPosition",GET_SOUNDS:"getSounds",GET_CURRENT_SOUND:"getCurrentSound",GET_CURRENT_SOUND_INDEX:"getCurrentSoundIndex",IS_PAUSED:"isPaused"}},function(n,t){n.exports={PLAY:"play",PAUSE:"pause",TOGGLE:"toggle",SEEK_TO:"seekTo",SET_VOLUME:"setVolume",NEXT:"next",PREV:"prev",SKIP:"skip"}}]);
module.exports = SC.Widget

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(5);
var Axios = __webpack_require__(20);
var defaults = __webpack_require__(4);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(9);
axios.CancelToken = __webpack_require__(34);
axios.isCancel = __webpack_require__(8);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(35);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(4);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(29);
var dispatchRequest = __webpack_require__(30);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(7);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(31);
var isCancel = __webpack_require__(8);
var defaults = __webpack_require__(4);
var isAbsoluteURL = __webpack_require__(32);
var combineURLs = __webpack_require__(33);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(9);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map