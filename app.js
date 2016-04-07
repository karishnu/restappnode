var router = require('./router');
express = require('express');
mongoose = require('mongoose');
bodyparser = require('body-parser');
app = express();

var port = process.env.PORT || 8080;  

mongoose.connect('mongodb://kari:987@ds015710.mlab.com:15710/restaurant_test');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/api', router);

app.get('/',function(req, res) {
	console.log("GET for home received!");
    });

app.listen(port);
console.log('Server running on ' + port);