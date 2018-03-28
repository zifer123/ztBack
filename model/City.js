var mongoose = require('../dbConnect');
var CitySchema = new mongoose.Schema({
    code: {
        type: String
    },
    name: {
        type: String
    }
},{collection: 'city'});

var CityModel = mongoose.model('city',CitySchema);
module.exports = CityModel;