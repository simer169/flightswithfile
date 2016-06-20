var mongoose = require('mongoose');

mongoose.connect('mongodb://simer:test1234@ds013564.mlab.com:13564/flights');

module.exports = mongoose.connection;
return mongoose.connection;