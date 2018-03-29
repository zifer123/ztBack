var express = require('express');
var router = express.Router();
var StreetModel = require('../model/Street');

router.get('/',(req,res) => {
    StreetModel.find({areaCode: req.query.parent_id},(err,doc) => {
        res.json(doc);
    })
});

module.exports = router;