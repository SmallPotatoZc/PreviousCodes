Es6编译环境
-----------

<!-- toc orderedList:0 depthFrom:1 depthTo:6 -->

  * [Es6编译环境](#es6编译环境)
* [babel](#babel)

<!-- tocstop -->

# babel
[参考链接](http://www.cnblogs.com/lovelyun/p/5539587.html)
[自动编译](http://blog.csdn.net/liuhe688/article/details/51212393)
[自动编译的github](https://github.com/scottliu2011/es6-dev)

1. npm 中的scripts
```
babel es6 --out-dir js --presets es2015 //会将es6下的所有文件输出到js文件夹下
babel es6/test.js --out-file js/test.js --presets es2015 //会将es6下的test.js输出到js文件夹下test.js
```
所需依赖:babel-cli babel-preset-es2015

2. gulp 自动编译 demo
所需依赖:gulp gulp-babel babel-preset-es2015

自动编译工具
```
gulp build --dev //自动监听es6文件下的变动
gulp server //启动一个服务
```
