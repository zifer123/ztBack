/**
 * Created by lc on 2018/3/27.
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://111.230.172.203/zt');

mongoose.connection.on('open',function() {
    console.log('链接成功');
});

mongoose.connection.on('error',console.error.bind(console,'发生错误'));

module.exports = mongoose;