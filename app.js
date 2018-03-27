/* S = express 初始化项目自带的 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/* E = express 初始化项目自带的 */

/* S = 自己加的 */
var cors = require('cors');// 处理跨域的
/* E = 自己加的 */

var app = express();

// view engine setup 不需要模板引擎，注释掉
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 处理各种事务的中间件，不用管它
/* 初始化自带的 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/* 初始化自带的 */

/* 自己加的 */
app.use(cors());


// 处理路由
var usersRouter = require('./routes/users');
app.use('/api/users', usersRouter);



/* 当前面的所有路由没有匹配上的时候，就会走这里 */
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));// 这里走下一个错误处理中间件
});

// error handler 错误处理来我这里
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
