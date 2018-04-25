var  mongoose = require('mongoose');

var  zipschema = mongoose.Schema({
    zipcode: {
        type:  String
    },
    restaurant: [String]
});

module.exports = mongoose.model('zipdata',  zipschema);