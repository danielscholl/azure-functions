module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    context.log(req);

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Copyright(c) 2017, cloudcodeit.com
const uuidv4 = __webpack_require__(6);

module.exports = (context, req) => {
    let count = 1;
    if (req.query.count) {
      count = req.query.count
    }
    const template = CreateTemplate(count);
  
    context.log(template);
    context.res = {
      body: template,
      headers: {
          'Content-Type': 'application/json'
      }
    }
    context.done();
  };

function CreateTemplate(count) {
    let template = {
      $schema: "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
      contentVersion: "1.0.0.0",
      parameters: {},
      variables: {},
      resources: [],
      outputs: {}
    };
  
    for (i = 0; i < count; i++) {
      template.outputs[`guid${i}`] = {
        type: "string",
        value: uuidv4()
      }
    }
  
    return template
  }

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (context, req) {
  context.log('UrlFormParser processed a request.');
  context.log(req);

  if(req.body && req.body.form) {
    const parsedForm = parseQuery(req.body.form);
    context.log(parsedForm);
  
    context.res = {
      body: parsedForm
    };

  } else {
    context.res = {
      status: 400,
      body: "Please pass a name on the query string or in the request body"
    };
  }
  

  context.done();
};

function parseQuery(input) {
  const arr = input.replace('+', ' ').substr(0).split('&');

  let output = {};
  for (let i = 0, len = arr.length; i < len; i++) {
    const item = arr[i].split('=');
    output[decodeURIComponent(item[0])] = decodeURIComponent(item[1] || '');
  }
  return output;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    "dummy": __webpack_require__(0),
    "guidTemplate": __webpack_require__(1),
    "urlFormParser": __webpack_require__(2)
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Unique ID creation requires a high quality random # generator.  In node.js
// this is pretty straight-forward - we use the crypto API.

var rb = __webpack_require__(7).randomBytes;

function rng() {
  return rb(16);
}

module.exports = rng;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(5);
var bytesToUuid = __webpack_require__(4);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ })
/******/ ]);