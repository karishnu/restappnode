var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var FoodItem = new Schema({
    name: String,
	price: String
});

module.exports = mongoose.model('FoodItem', FoodItem);