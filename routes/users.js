var express = require('express');
var router = express.Router();
var UserModel = require('../model/Users.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(!req.query.account || !req.query.pwd) {
    res.json({
      msg: '发送内为空',
      status: 0
    });
    return;
  }
  UserModel.findOne(req.query,function(err,doc) {
    var status = doc?1:0;
    var msg = doc?'ok':'不存在此账户';
    res.json({
      status,
      msg
    })
  })
});

module.exports = router;
