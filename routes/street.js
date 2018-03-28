var express = require('express');
var router = express.Router();
var StreetModel = require('../model/Street');

router.get('/',(req,res) => {
    StreetModel.find(req.query,(err,doc) => {
        res.json(doc);
    })
});

module.exports = router;