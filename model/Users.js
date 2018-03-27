/**
 * Created by lc on 2018/3/27.
 */
var mongoose = require('../dbConnect');

var UsersSchema = new mongoose.Schema({
    account: {
        type: String
    },
    pwd: {
        type: String
    }
},{ collection: 'users' });

var UsersModel = mongoose.model('users',UsersSchema);
module.exports = UsersModel;