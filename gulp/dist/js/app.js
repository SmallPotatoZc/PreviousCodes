!function r(t,e,n){function o(u,f){if(!e[u]){if(!t[u]){var s="function"==typeof require&&require;if(!f&&s)return s(u,!0);if(i)return i(u,!0);var c=new Error("Cannot find module '"+u+"'");throw c.code="MODULE_NOT_FOUND",c}var a=e[u]={exports:{}};t[u][0].call(a.exports,function(r){var e=t[u][1][r];return o(e||r)},a,a.exports,r,t,e,n)}return e[u].exports}for(var i="function"==typeof require&&require,u=0;u<n.length;u++)o(n[u]);return o}({1:[function(r,t,e){"use strict";r("./js/test.js")},{"./js/test.js":2}],2:[function(r,t,e){"use strict";new Promise(function(r,t){setTimeout(function(){r("成功!")},250)}).then(function(r){console.log("Yay!!!! "+r)})},{}]},{},[1]);
//# sourceMappingURL=maps/app.js.map