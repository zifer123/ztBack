var mongoose = require('../dbConnect');
var StreetSchema = new mongoose.Schema({
    code: {
        type: String
    },
    name: {
        type: String
    }
},{collection: 'street'});

var StreetModel = mongoose.model('street',StreetSchema);
module.exports = StreetModel;