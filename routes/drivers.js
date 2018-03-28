/**
 * Created by lc on 2018/3/27.
 */
var express = require('express');
var router = express.Router();
var driverModel = require('../model/Drivers.js');

router.get('/',function(req,res) {
  driverModel.find({},function(err,doc) {
    res.json(doc);
  })
});



module.exports = router;