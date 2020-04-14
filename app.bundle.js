/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/main.ts","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/game-objects/coordinate-text.ts":
/*!*********************************************!*\
  !*** ./src/game-objects/coordinate-text.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CoordinateTextGameObject = /** @class */ (function (_super) {
    __extends(CoordinateTextGameObject, _super);
    function CoordinateTextGameObject(scene, x, y) {
        var _this = _super.call(this, scene, x, y, '(,)', { color: 'green' }) || this;
        scene.add.existing(_this);
        return _this;
    }
    CoordinateTextGameObject.prototype.setCoordinates = function (q, r) {
        this.setText("(" + q + "," + r + ")");
    };
    CoordinateTextGameObject.prototype.emptyCoordinates = function () {
        this.setText("(,)");
    };
    return CoordinateTextGameObject;
}(Phaser.GameObjects.Text));
exports.CoordinateTextGameObject = CoordinateTextGameObject;


/***/ }),

/***/ "./src/game-objects/events/EventBus.ts":
/*!*********************************************!*\
  !*** ./src/game-objects/events/EventBus.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var phaser_1 = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var EventBus = /** @class */ (function (_super) {
    __extends(EventBus, _super);
    function EventBus() {
        return _super.call(this) || this;
    }
    EventBus.prototype.emitHexHoverEvent = function (hex) {
        this.emit('HEX_HOVER', hex);
    };
    EventBus.prototype.listenHexHover = function (cb) {
        this.on('HEX_HOVER', function (evt) { return cb(evt); });
    };
    EventBus.prototype.emitHexHoverOutEvent = function () {
        this.emit('HEX_HOVER_OUT');
    };
    EventBus.prototype.listenHexHoverOut = function (cb) {
        this.on('HEX_HOVER_OUT', function () { return cb(); });
    };
    return EventBus;
}(phaser_1.Events.EventEmitter));
exports.EventBus = EventBus;
exports.eventBus = new EventBus();


/***/ }),

/***/ "./src/game-objects/hexagon-grid-container.ts":
/*!****************************************************!*\
  !*** ./src/game-objects/hexagon-grid-container.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var hexagon_grid_outline_1 = __webpack_require__(/*! ./hexagon-grid-outline */ "./src/game-objects/hexagon-grid-outline.ts");
var EventBus_1 = __webpack_require__(/*! ./events/EventBus */ "./src/game-objects/events/EventBus.ts");
var spy_report_map_1 = __webpack_require__(/*! ./spy-report-map */ "./src/game-objects/spy-report-map.ts");
var Coordinate_1 = __webpack_require__(/*! ../models/Coordinate */ "./src/models/Coordinate.ts");
var spyReportBinsToSpyReportGameObjects = function (scene, grid, bins) {
    var list = [];
    bins.forEach(function (bin, coordinateTuple) {
        list.push(spy_report_map_1.SpyReportMapGameObject.fromSpyReports(scene, grid, bin, Coordinate_1.Coordinate.fromTuple(coordinateTuple)));
    });
    console.log(list.length + " different locations spied");
    return list;
};
var HexagonGridGameObject = /** @class */ (function (_super) {
    __extends(HexagonGridGameObject, _super);
    function HexagonGridGameObject(scene, hexagonGrid, spyReports, bus) {
        var _this = _super.call(this, scene, helpers_1.getGameCenterX(scene) / 2, helpers_1.getGameCenterY(scene), __spreadArrays([
            // ...hexagonGrid.allToList().map(h => new HexagonGameObject(scene, h, eventBus)), // TODO: memory limited to about depth of 100
            new hexagon_grid_outline_1.HexagonGridOutlineGameObject(scene, hexagonGrid)
        ], spyReportBinsToSpyReportGameObjects(scene, hexagonGrid, spyReports))) || this;
        _this.bus = bus;
        _this.coordinateGrid = hexagonGrid;
        scene.add.existing(_this);
        return _this;
    }
    HexagonGridGameObject.fromGrid = function (scene, hexagonGrid, spyReports) {
        return new HexagonGridGameObject(scene, hexagonGrid, spyReports, EventBus_1.eventBus);
    };
    return HexagonGridGameObject;
}(Phaser.GameObjects.Container));
exports.HexagonGridGameObject = HexagonGridGameObject;


/***/ }),

/***/ "./src/game-objects/hexagon-grid-outline.ts":
/*!**************************************************!*\
  !*** ./src/game-objects/hexagon-grid-outline.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var HexagonGridOutlineGameObject = /** @class */ (function (_super) {
    __extends(HexagonGridOutlineGameObject, _super);
    function HexagonGridOutlineGameObject(scene, grid) {
        var _this = _super.call(this, scene, {}) || this;
        var pixels = grid.outerHexes().map(function (h) { return h.centerPixel; });
        var startPixel = pixels[0];
        // set a fill and line style
        _this.lineStyle(2, 0xffd900, 1);
        _this.beginPath();
        _this.moveTo(startPixel.x, startPixel.y);
        for (var i = 1; i <= 5; i++) {
            _this.lineTo(pixels[i].x, pixels[i].y);
        }
        _this.lineTo(startPixel.x, startPixel.y);
        _this.stroke();
        _this.closePath();
        return _this;
    }
    return HexagonGridOutlineGameObject;
}(Phaser.GameObjects.Graphics));
exports.HexagonGridOutlineGameObject = HexagonGridOutlineGameObject;


/***/ }),

/***/ "./src/game-objects/spy-report-map.ts":
/*!********************************************!*\
  !*** ./src/game-objects/spy-report-map.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var hexagon_1 = __webpack_require__(/*! ../models/hexagon */ "./src/models/hexagon.ts");
var EventBus_1 = __webpack_require__(/*! ./events/EventBus */ "./src/game-objects/events/EventBus.ts");
var SpyReportMapGameObject = /** @class */ (function (_super) {
    __extends(SpyReportMapGameObject, _super);
    function SpyReportMapGameObject(scene, bus, hex) {
        var _this = _super.call(this, scene, {}) || this;
        _this.bus = bus;
        _this.hex = hex;
        // super(scene, hexagon, eventBus)
        var x = _this.hex.relativeX;
        var y = _this.hex.relativeY;
        var radius = 4;
        _this.renderSpyReport(x, y, radius);
        var hitArea = new Phaser.Geom.Circle(x, y, radius);
        _this.setInteractive(hitArea, Phaser.Geom.Circle.Contains);
        //
        _this.on('pointerover', function (evt) { return _this.hoverHandler(evt); });
        _this.on('pointerout', function (evt) { return _this.hoverOutHandler(); });
        return _this;
    }
    SpyReportMapGameObject.fromSpyReports = function (scene, grid, spyReports, coordinate) {
        if (!spyReports || spyReports.length === 0) {
            throw new Error('No spyreports given');
        }
        var hex = new hexagon_1.Hexagon(coordinate.q, coordinate.r, grid.size);
        return new SpyReportMapGameObject(scene, EventBus_1.eventBus, hex);
    };
    SpyReportMapGameObject.prototype.renderSpyReport = function (x, y, radius) {
        var color = 0xffff00;
        var alpha = 1;
        this.fillStyle(color, alpha);
        this.fillCircle(x, y, radius);
    };
    SpyReportMapGameObject.prototype.hoverHandler = function (evt) {
        this.setAlpha(0.5);
        this.bus.emitHexHoverEvent(this.hex);
    };
    SpyReportMapGameObject.prototype.hoverOutHandler = function () {
        this.setAlpha(1);
        this.bus.emitHexHoverOutEvent();
    };
    return SpyReportMapGameObject;
}(Phaser.GameObjects.Graphics));
exports.SpyReportMapGameObject = SpyReportMapGameObject;


/***/ }),

/***/ "./src/game-objects/spy-report-text.ts":
/*!*********************************************!*\
  !*** ./src/game-objects/spy-report-text.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var SpyReportText = /** @class */ (function (_super) {
    __extends(SpyReportText, _super);
    function SpyReportText(scene, gameWidth, fromTop) {
        var _this = _super.call(this, scene, gameWidth / 2 + 10, fromTop, '', {}) || this;
        scene.add.existing(_this);
        return _this;
    }
    SpyReportText.prototype.setReports = function (reports) {
        if (!reports || reports.length === 0) {
            return;
        }
        reports.sort(function (a, b) {
            if (a.submitted.isAfter(b.submitted)) {
                return -1;
            }
            else if (a.submitted.isSame(b.submitted)) {
                return 0;
            }
            else {
                return 1;
            }
        });
        var lastReport = reports[0];
        this.setText(__spreadArrays([
            lastReport.stationName + " " + lastReport.coordinates.toString(),
            '',
            '===',
            '',
            "Spied " + reports.length + " times.",
            "Last report " + lastReport.submitted.fromNow(),
            "report IDs (" + reports.map(function (r) { return r.id; }).join(', ') + ")",
            '',
            lastReport.captureDefense,
            lastReport.stationLabour,
            '',
            '',
            '=== Resources ===',
            ''
        ], this.displayResources(reports), [
            '',
            'Hidden Resources'
        ], this.displayResources(reports, true), [
            '',
            '',
            "=== Outposts (" + lastReport.submitted.fromNow() + ") ===",
            ''
        ], this.displayOutposts(lastReport), [
            '',
            '',
            '=== Fleets ===',
            ''
        ], this.displayFleets(reports), [
            '',
            ''
        ]));
    };
    SpyReportText.prototype.removeReports = function () {
        this.setText('');
    };
    SpyReportText.prototype.displayResources = function (reports, isHidden) {
        var _this = this;
        if (isHidden === void 0) { isHidden = false; }
        return reports.map(function (r) {
            var resources;
            if (isHidden) {
                resources = r.stationHiddenResources;
            }
            else {
                resources = r.stationResources;
            }
            if (resources.isNone) {
                return "(" + r.submitted.fromNow() + ") None";
            }
            return _this.getResourcesString(r.submitted.fromNow(), resources);
        });
    };
    SpyReportText.prototype.displayOutposts = function (report) {
        return report.outposts.map(function (o) { return o.name + " - " + o.level; });
    };
    SpyReportText.prototype.displayFleets = function (reports) {
        return lodash_1.flatMap(reports, function (report) {
            if (report.fleets.length === 0) {
                return [];
            }
            return __spreadArrays([
                "(" + report.submitted.fromNow() + ")"
            ], report.fleets.map(function (f) { return f.count + " " + f.type; }), [
                ''
            ]);
        });
    };
    SpyReportText.prototype.getResourcesString = function (fromNow, resources) {
        return "(" + fromNow + ") Metal: " + resources.metal + " - Gas: " + resources.gas + " - Crystal: " + resources.crystal;
    };
    return SpyReportText;
}(Phaser.GameObjects.Text));
exports.SpyReportText = SpyReportText;


/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameWidth = function (scene) {
    return scene.game.scale.width;
};
exports.getGameCenterX = function (scene) {
    return exports.getGameWidth(scene) / 2;
};
exports.getGameHeight = function (scene) {
    return scene.game.scale.height;
};
exports.getGameCenterY = function (scene) {
    return exports.getGameHeight(scene) / 2;
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var scenes_1 = __webpack_require__(/*! ./scenes */ "./src/scenes/index.ts");
var gameConfig = {
    title: 'Starborne BattlePlanner',
    type: Phaser.AUTO,
    scale: {
        width: window.innerWidth,
        height: window.innerHeight
    },
    scene: scenes_1.default,
    parent: 'game',
    backgroundColor: '#000000'
};
exports.game = new Phaser.Game(gameConfig);
window.addEventListener('resize', function () {
    console.log('resize');
    exports.game.scale.refresh();
});


/***/ }),

/***/ "./src/models/Coordinate.ts":
/*!**********************************!*\
  !*** ./src/models/Coordinate.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Coordinate = /** @class */ (function () {
    function Coordinate(q, r) {
        this.q = q;
        this.r = r;
    }
    Coordinate.fromTuple = function (tuple) {
        return new Coordinate(tuple[0], tuple[1]);
    };
    Coordinate.prototype.equals = function (other) {
        return this.q === other.q && this.r === other.r;
    };
    Object.defineProperty(Coordinate.prototype, "asTuple", {
        get: function () {
            return [this.q, this.r];
        },
        enumerable: true,
        configurable: true
    });
    Coordinate.prototype.toString = function () {
        return "(" + this.q + "," + this.r + ")";
    };
    return Coordinate;
}());
exports.Coordinate = Coordinate;


/***/ }),

/***/ "./src/models/hexagon-grid.ts":
/*!************************************!*\
  !*** ./src/models/hexagon-grid.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hexagon_1 = __webpack_require__(/*! ./hexagon */ "./src/models/hexagon.ts");
var tuple_map_1 = __webpack_require__(/*! ../utils/tuple-map */ "./src/utils/tuple-map.ts");
var HexagonGrid = /** @class */ (function () {
    function HexagonGrid(depth, size) {
        this.size = size;
        this.hexes = new tuple_map_1.TupleMap();
        this.depth = Math.abs(depth);
        var d = this.depth;
        for (var q = -d; q <= d; q++) {
            for (var r = -d; r <= d; r++) {
                if (Math.abs(q + r) <= d) {
                    this.hexes.set([q, r], new hexagon_1.Hexagon(q, r, size));
                }
            }
        }
    }
    HexagonGrid.fromGameWidth = function (depth, gameWidth) {
        var d = Math.abs(depth);
        // gameWidth = (depth * 2 + 1) * hexagonWidth
        var hexagonWidth = gameWidth / ((d * 2) + 1);
        var size = hexagonWidth / (Math.sqrt(3) / 2) / 2;
        return new HexagonGrid(depth, size);
    };
    HexagonGrid.fromGameHeight = function (depth, gameHeight) {
        var d = Math.abs(depth);
        // gameWidth = (depth * 2 + 1) * hexagonWidth
        var hexagonHeight = gameHeight / ((d * 2) + 1) * (4 / 3);
        var size = hexagonHeight / 2;
        return new HexagonGrid(depth, size);
    };
    HexagonGrid.prototype.get = function (q, r) {
        return this.hexes.get([q, r]);
    };
    HexagonGrid.prototype.allToList = function () {
        var list = [];
        this.hexes.forEach(function (h) {
            list.push(h);
        });
        return list;
    };
    HexagonGrid.prototype.outerHexes = function () {
        return [
            this.get(this.depth, 0),
            this.get(0, this.depth),
            this.get(-this.depth, this.depth),
            this.get(-this.depth, 0),
            this.get(0, -this.depth),
            this.get(this.depth, -this.depth),
        ];
    };
    HexagonGrid.prototype.toString = function () {
        var str = '';
        this.hexes.forEach(function (h) { return str += "(" + h.q + ", " + h.r + ")\n"; });
        return str;
    };
    return HexagonGrid;
}());
exports.HexagonGrid = HexagonGrid;


/***/ }),

/***/ "./src/models/hexagon.ts":
/*!*******************************!*\
  !*** ./src/models/hexagon.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pixel_1 = __webpack_require__(/*! ./pixel */ "./src/models/pixel.ts");
var Hexagon = /** @class */ (function () {
    function Hexagon(q, r, size) {
        this.q = q;
        this.r = r;
        this.size = size;
        this.centerPixel = this.pointy_hex_to_pixel();
        this.height = 2 * size;
        this.width = size * Math.sqrt(3);
    }
    Hexagon.fromHeight = function (q, r, hexagonHeight) {
        var size = hexagonHeight / 2;
        return new Hexagon(q, r, size);
    };
    Hexagon.fromWidth = function (q, r, hexagonWidth) {
        var size = hexagonWidth / Math.sqrt(3);
        return new Hexagon(q, r, size);
    };
    Object.defineProperty(Hexagon.prototype, "relativeX", {
        get: function () {
            return this.centerPixel.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Hexagon.prototype, "relativeY", {
        get: function () {
            return this.centerPixel.y;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * https://www.redblobgames.com/grids/hexagons/#hex-to-pixel
     * @param hex
     */
    Hexagon.prototype.pointy_hex_to_pixel = function () {
        var x = this.size * (Math.sqrt(3) * this.q + Math.sqrt(3) / 2 * this.r);
        var y = this.size * (3. / 2 * this.r);
        return new pixel_1.Pixel(x, y);
    };
    return Hexagon;
}());
exports.Hexagon = Hexagon;


/***/ }),

/***/ "./src/models/pixel.ts":
/*!*****************************!*\
  !*** ./src/models/pixel.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Pixel = /** @class */ (function () {
    function Pixel(x, y) {
        this.x = x;
        this.y = y;
    }
    return Pixel;
}());
exports.Pixel = Pixel;


/***/ }),

/***/ "./src/models/spy-report/spy-report.ts":
/*!*********************************************!*\
  !*** ./src/models/spy-report/spy-report.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var moment = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
var spy_report_utils_1 = __webpack_require__(/*! ../../utils/spy-report-utils */ "./src/utils/spy-report-utils.ts");
var SpyReport = /** @class */ (function () {
    function SpyReport(id, submitted, isPlayer, coordinates, captureDefense, stationName, stationLabour, stationResources, stationHiddenResources, outposts, fleets, hangar) {
        this.id = id;
        this.submitted = submitted;
        this.isPlayer = isPlayer;
        this.coordinates = coordinates;
        this.captureDefense = captureDefense;
        this.stationName = stationName;
        this.stationLabour = stationLabour;
        this.stationResources = stationResources;
        this.stationHiddenResources = stationHiddenResources;
        this.outposts = outposts;
        this.fleets = fleets;
        this.hangar = hangar;
        // TODO: private stationResources: string[],
        // private buildings: string[],
        // private hiddenResources: string[],
        // private outposts: string[],
        // private fleets: string[],
        // private hangar: string[]
    }
    SpyReport.fromRawReport = function (input) {
        var coordinates = spy_report_utils_1.parseCoordinates(input.spyReportHeader);
        if (!coordinates) {
            console.warn("Incomplete spy report with id " + input.id + ". Skipping this report");
            return undefined;
        }
        var id = Number(input.id);
        var submitted = moment(input.dateSubmitted, 'MM/DD/YYYY HH:mm:ss').tz('America/New_York');
        var isPlayer = input.whoSpied === 'Player';
        var captureDefense = input.captureDefense;
        var stationName = spy_report_utils_1.parseStationName(input.spyReportHeader);
        var stationLabour = input.stationLabour;
        var stationResources = spy_report_utils_1.parseStationResources(input.stationResources);
        var stationHiddenResources = spy_report_utils_1.parseStationResources(input.stationHiddenResources);
        var outposts = spy_report_utils_1.parseOutposts(input.outposts);
        var fleets = spy_report_utils_1.parseFleets(input.fleets);
        var hangar = spy_report_utils_1.parseFleets(input.hangar);
        return new SpyReport(id, submitted, isPlayer, coordinates, captureDefense, stationName, stationLabour, stationResources, stationHiddenResources, outposts, fleets, hangar);
    };
    return SpyReport;
}());
exports.SpyReport = SpyReport;


/***/ }),

/***/ "./src/scenes/boot-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/boot-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Boot'
};
/**
 * The initial scene that loads all necessary assets to the game and displays a loading bar.
 */
var BootScene = /** @class */ (function (_super) {
    __extends(BootScene, _super);
    function BootScene() {
        return _super.call(this, sceneConfig) || this;
    }
    BootScene.prototype.preload = function () {
        var _this = this;
        var halfWidth = helpers_1.getGameWidth(this) * 0.5;
        var halfHeight = helpers_1.getGameHeight(this) * 0.5;
        var progressBarHeight = 100;
        var progressBarWidth = 400;
        var progressBarContainer = this.add.rectangle(halfWidth, halfHeight, progressBarWidth, progressBarHeight, 0x000000);
        var progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, progressBarHeight - 20, 0x888888);
        var loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...').setFontSize(24);
        var percentText = this.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24);
        var assetText = this.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24);
        this.load.on('progress', function (value) {
            progressBar.width = (progressBarWidth - 30) * value;
            var percent = value * 100;
            percentText.setText(percent + "%");
        });
        this.load.on('fileprogress', function (file) {
            assetText.setText(file.key);
        });
        this.load.on('complete', function () {
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
            progressBar.destroy();
            progressBarContainer.destroy();
            _this.scene.start('Hexagon');
        });
        this.loadAssets();
    };
    /**
     * All assets that need to be loaded by the game (sprites, images, animations, tiles, music, etc)
     * should be added to this method. Once loaded in, the loader will keep track of them, indepedent of which scene
     * is currently active, so they can be accessed anywhere.
     */
    BootScene.prototype.loadAssets = function () {
        // Load sample assets
        this.load.json('spyReportData', 'https://spreadsheets.google.com/feeds/cells/1RtLItonFBm_EEBVBq0Dm_Ed02EjTtDDj7tzx6W4p5uk/1/public/full?alt=json');
        // Source: Open Game Art
        this.load.image('man', 'assets/character.png');
        this.load.image('hexagon', 'assets/hexagon.png');
        this.load.image('marker', 'assets/marker.png');
    };
    return BootScene;
}(Phaser.Scene));
exports.BootScene = BootScene;


/***/ }),

/***/ "./src/scenes/hexagon-scene.ts":
/*!*************************************!*\
  !*** ./src/scenes/hexagon-scene.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(/*! ../helpers */ "./src/helpers.ts");
var hexagon_grid_1 = __webpack_require__(/*! ../models/hexagon-grid */ "./src/models/hexagon-grid.ts");
var hexagon_grid_container_1 = __webpack_require__(/*! ../game-objects/hexagon-grid-container */ "./src/game-objects/hexagon-grid-container.ts");
var coordinate_text_1 = __webpack_require__(/*! ../game-objects/coordinate-text */ "./src/game-objects/coordinate-text.ts");
var EventBus_1 = __webpack_require__(/*! ../game-objects/events/EventBus */ "./src/game-objects/events/EventBus.ts");
var spy_report_map_1 = __webpack_require__(/*! ../game-objects/spy-report-map */ "./src/game-objects/spy-report-map.ts");
var spy_report_utils_1 = __webpack_require__(/*! ../utils/spy-report-utils */ "./src/utils/spy-report-utils.ts");
var spy_report_text_1 = __webpack_require__(/*! ../game-objects/spy-report-text */ "./src/game-objects/spy-report-text.ts");
var Coordinate_1 = __webpack_require__(/*! ../models/Coordinate */ "./src/models/Coordinate.ts");
var Color = Phaser.Display.Color;
var spy_report_factory_1 = __webpack_require__(/*! ../utils/spy-report-factory */ "./src/utils/spy-report-factory.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Hexagon'
};
var HexagonScene = /** @class */ (function (_super) {
    __extends(HexagonScene, _super);
    function HexagonScene() {
        return _super.call(this, sceneConfig) || this;
    }
    Object.defineProperty(HexagonScene.prototype, "width", {
        get: function () {
            return helpers_1.getGameWidth(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HexagonScene.prototype, "height", {
        get: function () {
            return helpers_1.getGameHeight(this);
        },
        enumerable: true,
        configurable: true
    });
    HexagonScene.prototype.create = function () {
        this.cameras.main.backgroundColor = new Color(0, 0, 0);
        // models
        var grid = hexagon_grid_1.HexagonGrid.fromGameWidth(500, this.width / 2);
        var spyReports = spy_report_factory_1.generateReports(this.cache.json.get('spyReportData'));
        var spyReportsByCoordinate = spy_report_utils_1.binSpyReportsByCoordinate(spyReports);
        // game objects
        var gridGameObject = hexagon_grid_container_1.HexagonGridGameObject.fromGrid(this, grid, spyReportsByCoordinate);
        var coordinateText = new coordinate_text_1.CoordinateTextGameObject(this, 10, 10);
        var spyReportText = new spy_report_text_1.SpyReportText(this, this.width, 25);
        EventBus_1.eventBus.listenHexHover(function (hex) {
            coordinateText.setCoordinates(hex.q, hex.r);
            spyReportText.setReports(spyReportsByCoordinate.get([hex.q, hex.r]));
        });
        EventBus_1.eventBus.listenHexHoverOut(function () {
            coordinateText.emptyCoordinates();
            spyReportText.removeReports();
        });
    };
    HexagonScene.prototype.update = function (time, delta) {
        // TODO
    };
    HexagonScene.prototype.spyReportBinsToSpyReportGameObjects = function (scene, grid, bins) {
        var list = [];
        bins.forEach(function (bin, coordinateTuple) {
            list.push(spy_report_map_1.SpyReportMapGameObject.fromSpyReports(scene, grid, bin, Coordinate_1.Coordinate.fromTuple(coordinateTuple)));
        });
        console.log(list.length + " different locations spied");
        return list;
    };
    return HexagonScene;
}(Phaser.Scene));
exports.HexagonScene = HexagonScene;


/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var main_menu_scene_1 = __webpack_require__(/*! ./main-menu-scene */ "./src/scenes/main-menu-scene.ts");
var boot_scene_1 = __webpack_require__(/*! ./boot-scene */ "./src/scenes/boot-scene.ts");
var hexagon_scene_1 = __webpack_require__(/*! ./hexagon-scene */ "./src/scenes/hexagon-scene.ts");
exports.default = [
    boot_scene_1.BootScene,
    main_menu_scene_1.MainMenuScene,
    hexagon_scene_1.HexagonScene,
];


/***/ }),

/***/ "./src/scenes/main-menu-scene.ts":
/*!***************************************!*\
  !*** ./src/scenes/main-menu-scene.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var menu_button_1 = __webpack_require__(/*! ../ui/menu-button */ "./src/ui/menu-button.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'MainMenu'
};
/**
 * The initial scene that starts, shows the splash screens, and loads the necessary assets.
 */
var MainMenuScene = /** @class */ (function (_super) {
    __extends(MainMenuScene, _super);
    function MainMenuScene() {
        return _super.call(this, sceneConfig) || this;
    }
    MainMenuScene.prototype.create = function () {
        var _this = this;
        this.add.text(100, 50, 'This is a sample main menu. Click the "Start" button below to run your game.', { fill: '#FFFFFF' }).setFontSize(24);
        new menu_button_1.MenuButton(this, 100, 150, 'Start Game', function () {
            _this.scene.start('Hexagon');
        });
        new menu_button_1.MenuButton(this, 100, 250, 'Settings', function () { return console.log('settings button clicked'); });
        new menu_button_1.MenuButton(this, 100, 350, 'Help', function () { return console.log('help button clicked'); });
    };
    return MainMenuScene;
}(Phaser.Scene));
exports.MainMenuScene = MainMenuScene;


/***/ }),

/***/ "./src/ui/menu-button.ts":
/*!*******************************!*\
  !*** ./src/ui/menu-button.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
var padding = 10;
var minimumWidth = 200;
var minimumHeight = 50;
var MenuButton = /** @class */ (function (_super) {
    __extends(MenuButton, _super);
    function MenuButton(scene, x, y, text, onClick) {
        var _this = _super.call(this, scene, x, y) || this;
        scene.add.existing(_this);
        _this.setOrigin(0, 0);
        _this.label = scene.add.text(x + padding, y + padding, text).setFontSize(18).setAlign('center');
        var labelWidth = _this.label.width + padding;
        var labelHeight = _this.label.height + padding;
        _this.width = labelWidth >= minimumWidth ? labelWidth : minimumWidth;
        _this.height = labelHeight >= minimumHeight ? labelHeight : minimumHeight;
        _this.setInteractive({ useHandCursor: true })
            .on('pointerover', _this.enterMenuButtonHoverState)
            .on('pointerout', _this.enterMenuButtonRestState)
            .on('pointerdown', _this.enterMenuButtonActiveState)
            .on('pointerup', _this.enterMenuButtonHoverState);
        if (onClick) {
            _this.on('pointerup', onClick);
        }
        _this.enterMenuButtonRestState();
        return _this;
    }
    MenuButton.prototype.enterMenuButtonHoverState = function () {
        this.label.setColor('#000000');
        this.setFillStyle(0x888888);
    };
    MenuButton.prototype.enterMenuButtonRestState = function () {
        this.label.setColor('#FFFFFF');
        this.setFillStyle(0x888888);
    };
    MenuButton.prototype.enterMenuButtonActiveState = function () {
        this.label.setColor('#BBBBBB');
        this.setFillStyle(0x444444);
    };
    return MenuButton;
}(Phaser.GameObjects.Rectangle));
exports.MenuButton = MenuButton;


/***/ }),

/***/ "./src/utils/spy-report-factory.ts":
/*!*****************************************!*\
  !*** ./src/utils/spy-report-factory.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var spy_report_1 = __webpack_require__(/*! ../models/spy-report/spy-report */ "./src/models/spy-report/spy-report.ts");
var spy_report_utils_1 = __webpack_require__(/*! ./spy-report-utils */ "./src/utils/spy-report-utils.ts");
exports.generateReports = function (input) {
    var cells = input.feed.entry.map(function (e) { return e.gs$cell; });
    // Eastern Time (US > UTC-4)
    var row2cells = cells.filter(function (c) { return Number(c.row) === 2; });
    var idCells = row2cells.filter(function (c) { return !!c && Number(c.col) >= 4; });
    var spyReportColumns = idCells.map(function (c) { return Number(c.col); });
    var reports = spyReportColumns.map(function (col) { return generateSpyReport(cells, col); });
    return reports.filter(function (r) { return !!r; });
};
var generateSpyReport = function (cells, col) {
    var reportCells = cells.filter(function (c) { return Number(c.col) === col; });
    var id = spy_report_utils_1.findCellDataByRow(reportCells, 2);
    var dateSubmitted = spy_report_utils_1.findCellDataByRow(reportCells, 3);
    var whoSubmitted = spy_report_utils_1.findCellDataByRow(reportCells, 4);
    var dateSpied = spy_report_utils_1.findCellDataByRow(reportCells, 5);
    var whoSpied = spy_report_utils_1.findCellDataByRow(reportCells, 6);
    var spyReportHeader = spy_report_utils_1.findCellDataByRow(reportCells, 7);
    var spyReportHeader2 = spy_report_utils_1.findCellDataByRow(reportCells, 8);
    var captureDefense = spy_report_utils_1.findCellDataByRow(reportCells, 10);
    var stationResources = spy_report_utils_1.findCellDataByRow(reportCells, 12);
    var stationLabour = spy_report_utils_1.findCellDataByRow(reportCells, 14);
    var stationHiddenResourcesArray = spy_report_utils_1.findCellDataBetweenContent(reportCells, 'Station Hidden Resources', 'Outposts');
    var outposts = spy_report_utils_1.findCellDataBetweenContent(reportCells, 'Outposts', 'Fleets');
    var fleets = spy_report_utils_1.findCellDataBetweenContent(reportCells, 'Fleets', 'Hangar');
    // const hangar = findCellDataBetweenContent(reportCells, 'Hangar', null)
    // TODO: buildings, fleets, hangar, ...
    return spy_report_1.SpyReport.fromRawReport({
        id: id,
        dateSubmitted: dateSubmitted,
        whoSubmitted: whoSubmitted,
        dateSpied: dateSpied,
        whoSpied: whoSpied,
        spyReportHeader: spyReportHeader,
        spyReportHeader2: spyReportHeader2,
        captureDefense: captureDefense,
        stationResources: stationResources,
        stationLabour: stationLabour,
        stationHiddenResources: stationHiddenResourcesArray[0],
        outposts: outposts,
        fleets: fleets,
        hangar: []
    });
};


/***/ }),

/***/ "./src/utils/spy-report-utils.ts":
/*!***************************************!*\
  !*** ./src/utils/spy-report-utils.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var tuple_map_1 = __webpack_require__(/*! ./tuple-map */ "./src/utils/tuple-map.ts");
var Coordinate_1 = __webpack_require__(/*! ../models/Coordinate */ "./src/models/Coordinate.ts");
exports.binSpyReportsByCoordinate = function (spyReports) {
    var map = new tuple_map_1.TupleMap();
    spyReports.map(function (report) {
        var coords = report.coordinates.asTuple;
        if (map.has(coords)) {
            var value = map.get(coords);
            map.set(coords, __spreadArrays(value, [report]));
        }
        else {
            map.set(coords, [report]);
        }
    });
    return map;
};
exports.parseCoordinates = function (raw) {
    var coordStringRegex = /(\(.+\))/;
    var result = coordStringRegex.exec(raw);
    if (!result || result.length === 0) {
        console.error("Could not parse coordinates from string: \"" + raw + "\"");
        return undefined;
    }
    var group = result[0];
    var coords = group
        .replace('(', '')
        .replace(')', '')
        .split(',');
    if (coords.length !== 2) {
        console.error("Could not parse coordinates from string: \"" + raw + "\"");
        return new Coordinate_1.Coordinate(0, 0);
    }
    return new Coordinate_1.Coordinate(Number(coords[0]), Number(coords[1]));
};
exports.parseStationName = function (raw) {
    var regex = /\(.+\)\s(.+)\scompleted/;
    var result = regex.exec(raw);
    if (!result || result.length === 0) {
        console.error("Could not parse station name from string: \"" + raw + "\"");
        return '';
    }
    return result[1];
};
exports.parseOutposts = function (raw) {
    var regex = new RegExp('^(.+)\\s-\\s(Level\\s[0-9\\?])');
    var buildings = raw.map(function (r) {
        var output = regex.exec(r);
        if (!output || output.length !== 3) {
            console.error('Could not parse outpost for raw: ' + raw.join(' -- '));
            return undefined;
        }
        return {
            name: output[1],
            level: output[2]
        };
    });
    return buildings.filter(function (b) { return !!b; });
};
exports.parseFleets = function (raw) {
    var regex = /^([0-9]+)\s(.+)$/;
    var result = raw.map(function (r) {
        var output = regex.exec(r);
        if (!output || output.length === 0) {
            console.error('Could not parse fleet string: ' + raw.join(' -- '));
            return undefined;
        }
        return {
            count: Number(output[1]),
            type: output[2]
        };
    });
    return result.filter(function (r) { return !!r; });
};
exports.parseHangar = function (raw) {
    return [];
};
exports.parseStationResources = function (raw) {
    if (raw.startsWith('None')) {
        return {
            isNone: true,
            crystal: 0,
            metal: 0,
            gas: 0
        };
    }
    var regex = /Metal\s([0-9]+)\s.*Gas\s([0-9]+)\s.*Crystal\s([0-9]+)\s/;
    var result = regex.exec(raw);
    if (!result || result.length === 0) {
        console.error("Could not parse resources from string: \"" + raw + "\"");
        return undefined;
    }
    return {
        isNone: false,
        metal: Number(result[1]),
        gas: Number(result[2]),
        crystal: Number(result[3])
    };
};
exports.findCellDataByRow = function (cells, row) {
    var cell = cells.find(function (c) { return Number(c.row) === row; });
    if (!cell) {
        return undefined;
    }
    return cell.inputValue;
};
exports.findCellDataBetweenContent = function (cells, fromStartsWith, toStartsWith) {
    var cellIndexStart = cells.findIndex(function (c) { return c.inputValue.startsWith(fromStartsWith); });
    var cellIndexEnd = cells.findIndex(function (c) { return c.inputValue.startsWith(toStartsWith); });
    var results = cells.slice(cellIndexStart + 1, cellIndexEnd);
    if (!results) {
        return [];
    }
    return results.map(function (r) { return r.inputValue; });
};


/***/ }),

/***/ "./src/utils/tuple-map.ts":
/*!********************************!*\
  !*** ./src/utils/tuple-map.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * https://stackoverflow.com/questions/43592760/typescript-javascript-using-tuple-as-key-of-map
 */
var TupleMap = /** @class */ (function () {
    function TupleMap() {
        this.map = new Map();
    }
    TupleMap.prototype.set = function (key, value) {
        this.map.set(JSON.stringify(key), value);
        return this;
    };
    TupleMap.prototype.get = function (key) {
        return this.map.get(JSON.stringify(key));
    };
    TupleMap.prototype.clear = function () {
        this.map.clear();
    };
    TupleMap.prototype.delete = function (key) {
        return this.map.delete(JSON.stringify(key));
    };
    TupleMap.prototype.has = function (key) {
        return this.map.has(JSON.stringify(key));
    };
    Object.defineProperty(TupleMap.prototype, "size", {
        get: function () {
            return this.map.size;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TupleMap.prototype, "values", {
        get: function () {
            return this.map.values();
        },
        enumerable: true,
        configurable: true
    });
    TupleMap.prototype.forEach = function (callbackfn, thisArg) {
        var _this = this;
        this.map.forEach(function (value, key) {
            callbackfn.call(thisArg, value, JSON.parse(key), _this);
        });
    };
    return TupleMap;
}());
exports.TupleMap = TupleMap;


/***/ })

/******/ });
//# sourceMappingURL=app.bundle.js.map