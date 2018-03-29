var express = require('express');
var router = express.Router();
var CityModel = require('../model/City');

router.get('/',(req,res) => {
    CityModel.find({provinceCode: req.query.parent_id},(err,doc) => {
        res.json(doc);
    })
});

module.exports = router;