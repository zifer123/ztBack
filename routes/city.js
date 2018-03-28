var express = require('express');
var router = express.Router();
var CityModel = require('../model/City');

router.get('/',(req,res) => {
    CityModel.find(req.query,(err,doc) => {
        res.json(doc);
    })
});

module.exports = router;