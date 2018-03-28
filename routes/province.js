var express = require('express');
var router = express.Router();
var ProvinceModel = require('../model/Province');

router.get('/',(req,res) => {
    ProvinceModel.find(req.query,(err,doc) => {
        res.json(doc);
    })
});

module.exports = router;