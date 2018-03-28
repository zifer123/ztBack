var mongoose = require('../dbConnect');
var AreaSchema = new mongoose.Schema({
    code: {
        type: String
    },
    name: {
        type: String
    }
},{collection: 'area'});

var AreaModel = mongoose.model('area',AreaSchema);
module.exports = AreaModel;