/**
 * Created by lc on 2018/3/27.
 */
var mongoose = require('../dbConnect');

var UserSchema = new mongoose.Schema({
    account: {
        type: String
    },
    pwd: {
        type: String
    }
},{ collection: 'users' });

var UserModel = mongoose.model('users',UserSchema);
module.exports = UserModel;