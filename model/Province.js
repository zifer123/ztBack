var mongoose = require('../dbConnect');
var ProvinceSchema = new mongoose.Schema({
    code: {
        type: String
    },
    name: {
        type: String
    }
},{collection: 'province'});

var ProvinceModel = mongoose.model('province',ProvinceSchema);
module.exports = ProvinceModel;