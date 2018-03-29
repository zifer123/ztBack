/**
 * Created by lc on 2018/3/27.
 */
var express = require('express');
var router = express.Router();
var driverModel = require('../model/Drivers.js');
var driverModel = require('../model/Drivers.js');
var driverModel = require('../model/Drivers.js');
var driverModel = require('../model/Drivers.js');
var driverModel = require('../model/Drivers.js');

router.get('/',function(req,res) {
  driverModel.find({},function(err,doc) {
    // 根据省市区街道编码找到对应名称
    // 省

    res.json({
      rows: doc,
      total: 1
    });
  })
});

router.post('/',function(req,res) {
  var driverEntity = new driverModel(req.body);
  driverEntity.save(function(err) {
    if(err) {
      res.json({
        status: 0,
        msg: '添加失败'
      })
    }else {
      res.json({
        status: 1,
        msg: '添加成功',
        data: req.body
      })
    }
  })
})



module.exports = router;