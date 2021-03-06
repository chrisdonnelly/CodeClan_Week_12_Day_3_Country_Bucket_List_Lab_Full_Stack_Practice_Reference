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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var AjaxRequest = __webpack_require__(2);
var CountriesView = __webpack_require__(1);

function app() {
    
    var restCountries = new AjaxRequest('https://restcountries.eu/rest/v2');

    var countriesView = new CountriesView();
    
    restCountries.get(countriesView.populate);

    var select = document.getElementById('country-drop-down');
    
    select.addEventListener('change', function() {
        var selectedCountry = this.value;
        var ul = document.getElementById('country-data');
        
        while(ul.firstChild) {
            ul.removeChild(ul.firstChild);
          }
          
        var li = document.createElement('li');
        li.innerText = 'Country: ' + restCountries.data[selectedCountry].name;
        ul.appendChild(li);
        var li = document.createElement('li');
        li.innerText = 'Capital: ' + restCountries.data[selectedCountry].capital;
        ul.appendChild(li);
        var li = document.createElement('li');
        li.innerText = 'Region: ' + restCountries.data[selectedCountry].region;
        ul.appendChild(li);
        var li = document.createElement('li');
        li.innerText = 'Main Currency: ' + restCountries.data[selectedCountry].currencies[0].name;
        ul.appendChild(li);
    })
 
}

window.addEventListener('load', app);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var CountriesView = function() {

}

CountriesView.prototype.populate = function(data) {
    var countrySelect = document.getElementById('country-drop-down');
    data.forEach(function(country, index) {
        var option = document.createElement('option');
        option.innerText = country.name;
        option.value = index;
        countrySelect.appendChild(option);
    });

}

module.exports = CountriesView;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var AjaxRequest = function(url) {
    this.url = url;
    this.data = [];
}

AjaxRequest.prototype.get = function(callback) {
    var request = new XMLHttpRequest();
    request.open('GET', this.url);
    request.addEventListener('load', function() {
        if (request.status !== 200) return;
        var jsonString = request.responseText;
        this.data = JSON.parse(jsonString);
        callback(this.data);
    }.bind(this));
    request.send();
}

module.exports = AjaxRequest;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map