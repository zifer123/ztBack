/**
 * Created by lc on 2018/3/27.
 */
var mongoose = require('../dbConnect');
var DriverSchema = new mongoose.Schema({
    real_name: {
        type: String
    },
    add_time: {
        type: String,
        default: new Date()
    },
    level: {
        type: Number
    },
    company: {
        type: String
    },
    contact: {
        type: String
    },
    province_code: {
        type: String
    },
    city_code: {
        type: String
    },
    area_code: {
        type: String
    },
    street_code: {
        type: String
    }
},{collection: 'drivers'});

var driverModel = mongoose.model('drivers',DriverSchema);

module.exports = driverModel;