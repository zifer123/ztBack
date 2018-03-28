var express = require('express');
var router = express.Router();
var AreaModel = require('../model/Area');

router.get('/',(req,res) => {
    AreaModel.find(req.query,(err,doc) => {
        res.json(doc);
    })
});

module.exports = router;