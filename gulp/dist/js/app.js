(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var test = require('./js/test.js');

},{"./js/test.js":2}],2:[function(require,module,exports){
"use strict";

var myFirstPromise = new Promise(function (resolve, reject) {
    //当异步代码执行成功时，我们才会调用resolve(...), 当异步代码失败时就会调用reject(...)
    //在本例中，我们使用setTimeout(...)来模拟异步代码，实际编码时可能是XHR请求或是HTML5的一些API方法.
    setTimeout(function () {
        resolve("成功!"); //代码正常执行！
    }, 250);
});

myFirstPromise.then(function (successMessage) {
    //successMessage的值是上面调用resolve(...)方法传入的值.
    //successMessage参数不一定非要是字符串类型，这里只是举个例子
    console.log("Yay!!!! " + successMessage);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2pzL3Rlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksT0FBTyxRQUFRLGNBQVIsQ0FBWDs7Ozs7QUNBQSxJQUFJLGlCQUFpQixJQUFJLE9BQUosQ0FBWSxVQUFTLE9BQVQsRUFBa0IsTUFBbEIsRUFBeUI7QUFDdEQ7QUFDQTtBQUNBLGVBQVcsWUFBVTtBQUNqQixnQkFBUSxLQUFSLEVBRGlCLENBQ0Q7QUFDbkIsS0FGRCxFQUVHLEdBRkg7QUFHSCxDQU5vQixDQUFyQjs7QUFRQSxlQUFlLElBQWYsQ0FBb0IsVUFBUyxjQUFULEVBQXdCO0FBQ3hDO0FBQ0E7QUFDQSxZQUFRLEdBQVIsQ0FBWSxhQUFhLGNBQXpCO0FBQ0gsQ0FKRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgdGVzdCA9IHJlcXVpcmUoJy4vanMvdGVzdC5qcycpO1xuIiwidmFyIG15Rmlyc3RQcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICAvL+W9k+W8guatpeS7o+eggeaJp+ihjOaIkOWKn+aXtu+8jOaIkeS7rOaJjeS8muiwg+eUqHJlc29sdmUoLi4uKSwg5b2T5byC5q2l5Luj56CB5aSx6LSl5pe25bCx5Lya6LCD55SocmVqZWN0KC4uLilcbiAgICAvL+WcqOacrOS+i+S4re+8jOaIkeS7rOS9v+eUqHNldFRpbWVvdXQoLi4uKeadpeaooeaLn+W8guatpeS7o+egge+8jOWunumZhee8lueggeaXtuWPr+iDveaYr1hIUuivt+axguaIluaYr0hUTUw155qE5LiA5LqbQVBJ5pa55rOVLlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgcmVzb2x2ZShcIuaIkOWKnyFcIik7IC8v5Luj56CB5q2j5bi45omn6KGM77yBXG4gICAgfSwgMjUwKTtcbn0pO1xuXG5teUZpcnN0UHJvbWlzZS50aGVuKGZ1bmN0aW9uKHN1Y2Nlc3NNZXNzYWdlKXtcbiAgICAvL3N1Y2Nlc3NNZXNzYWdl55qE5YC85piv5LiK6Z2i6LCD55SocmVzb2x2ZSguLi4p5pa55rOV5Lyg5YWl55qE5YC8LlxuICAgIC8vc3VjY2Vzc01lc3NhZ2Xlj4LmlbDkuI3kuIDlrprpnZ7opoHmmK/lrZfnrKbkuLLnsbvlnovvvIzov5nph4zlj6rmmK/kuL7kuKrkvovlrZBcbiAgICBjb25zb2xlLmxvZyhcIllheSEhISEgXCIgKyBzdWNjZXNzTWVzc2FnZSk7XG59KTtcbiJdfQ==
